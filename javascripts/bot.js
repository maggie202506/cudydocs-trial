(function() {
    // --- 1. 配置区域 ---
    const GITHUB_REPO = "https://github.com/maggie202506/cudydocs-trial";
    // 你的 Google Form 提交地址和字段 ID
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfRYwiJBW-XfmA_R8kkas4m56S01FrWtc7D9aIFPpf43rGV0w/formResponse";
    const ENTRY_QUERY = "entry.2064165509"; 
    const ENTRY_MATCHED = "entry.1066373756"; 

    let currentLang = 'en';
    let faqData = null;
    let historyStack = [];

    const scriptSrc = document.currentScript ? document.currentScript.src : '';
    const jsonUrl = scriptSrc.replace('bot.js', 'faq.json');

    // --- 2. 样式注入 ---
    const style = document.createElement('style');
    style.innerHTML = `
        #faq-bot-window { 
            z-index: 10002 !important; 
            position:fixed; right:20px; bottom:110px; 
            width:350px; height:540px; 
            background:#ffffff; border-radius:20px; 
            display:none; flex-direction:column; 
            box-shadow: 0 15px 50px rgba(0,0,0,0.12); 
            border: 1px solid rgba(0,0,0,0.05);
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            overflow:hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* 📱 手机全屏优化 */
        @media screen and (max-width: 768px) {
            #faq-bot-window {
                right: 0 !important; bottom: 0 !important;
                width: 100% !important; height: 100% !important;
                border-radius: 0 !important;
            }
            .bot-msg-bubble { font-size: 16px !important; }
            .tree-option { padding: 16px !important; font-size: 15px !important; }
            #bot-close { font-size: 32px !important; padding: 10px; }
            #bot-input { font-size: 16px !important; }
        }

        #bot-header { 
            padding:18px 20px; background: linear-gradient(135deg, #0094ff 0%, #0076cc 100%); 
            color:white; display:flex; justify-content:space-between; align-items:center; 
        }

        #bot-toggle { 
            z-index: 10001 !important; position:fixed; right:20px; bottom:30px; 
            background:#0094ff; color:white; border:none; width:64px; height:64px; 
            border-radius:32px; cursor:pointer; box-shadow: 0 6px 20px rgba(0,148,255,0.3); 
            font-size:26px; transition: transform 0.2s;
        }

        .lang-container { background: rgba(255,255,255,0.15); border-radius:20px; padding:3px; display:flex; margin-right: 12px; }
        .lang-btn { padding:3px 10px; border-radius:15px; cursor:pointer; font-size:11px; font-weight:600; }
        .lang-btn.active { background: white; color: #0094ff; }
        
        #bot-content { flex-grow:1; padding:20px; background:#f8faff; overflow-y:auto; position:relative; }
        
        .page-fade-in { animation: pageShift 0.4s ease; }
        @keyframes pageShift { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .bot-msg-bubble { 
            background:white; color:#2c3e50; padding:16px; border-radius:16px; 
            margin-bottom:20px; font-size:14.5px; line-height:1.7; 
            border: 1px solid rgba(0,0,0,0.03); box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .tree-option { 
            display:block; width:100%; text-align:left; padding:14px; margin-top:12px; 
            border: 1.5px solid #0094ff; color:#0094ff; background:white; 
            border-radius:14px; cursor:pointer; font-size:14px; font-weight: 500;
            box-sizing: border-box;
        }
        .tree-option:hover { background:#0094ff; color:white; }
        
        .nav-footer { margin-top:25px; display:flex; justify-content:center; gap:20px; border-top:1px solid #eee; padding-top:18px; }
        .nav-btn { font-size:13px; color:#8898aa; cursor:pointer; }
        
        #bot-input { 
            width:100%; border: 1.5px solid #eee; padding:14px 20px; border-radius:30px; 
            outline:none; font-size:14px; background:#f9f9f9; box-sizing:border-box;
        }
        #bot-input:focus { border-color: #0094ff; background: #fff; }
    `;
    document.head.appendChild(style);

    // --- 3. 核心 HTML ---
    const botHtml = `
    <div id="faq-bot-container">
        <button id="bot-toggle">💬</button>
        <div id="faq-bot-window">
            <div id="bot-header">
                <span style="font-weight:700; font-size:16px;">Cudy Assistant</span>
                <div style="display:flex; align-items:center;">
                    <div class="lang-container">
                        <div id="lang-en" class="lang-btn active">EN</div>
                        <div id="lang-cn" class="lang-btn">中</div>
                    </div>
                    <span id="bot-close" style="cursor:pointer; font-size:28px;">&times;</span>
                </div>
            </div>
            <div id="bot-content"><div id="page-container" class="page-fade-in"></div></div>
            <div style="padding:16px 20px 20px; background:white; border-top:1px solid #f0f0f0;">
                <input type="text" id="bot-input" placeholder="Search for help...">
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', botHtml);

    const pageContainer = document.getElementById('page-container');
    const input = document.getElementById('bot-input');

    // 🤫 静默记录搜索词
    function logToGoogle(query, matched) {
        const formData = new URLSearchParams();
        formData.append(ENTRY_QUERY, query);
        formData.append(ENTRY_MATCHED, matched ? "Yes" : "No");
        fetch(GOOGLE_FORM_URL, { method: "POST", mode: "no-cors", body: formData })
            .catch(() => console.log("Log saved locally instead."));
    }

    async function init() {
        try {
            const r = await fetch(jsonUrl);
            faqData = await r.json();
            renderHome();
        } catch (e) { pageContainer.innerHTML = "Service unavailable."; }
    }

    function switchToPage(renderFn) {
        pageContainer.innerHTML = '';
        pageContainer.classList.remove('page-fade-in');
        void pageContainer.offsetWidth; 
        pageContainer.classList.add('page-fade-in');
        renderFn();
        document.getElementById('bot-content').scrollTop = 0;
    }

    function renderHome() {
        switchToPage(() => {
            const isEN = currentLang === 'en';
            const welcome = document.createElement('div');
            welcome.className = 'bot-msg-bubble';
            welcome.innerText = isEN ? "Hello! Please select a topic to start:" : "您好！请选择一个主题开始排查：";
            pageContainer.appendChild(welcome);

            faqData[currentLang].forEach(item => {
                const btn = document.createElement('div');
                btn.className = 'tree-option';
                btn.innerText = "• " + item.q;
                btn.onclick = () => {
                    historyStack.push(renderHome);
                    if (item.type === 'tree') renderNode(item.tree, item.link);
                    else renderAnswerPage(item);
                };
                pageContainer.appendChild(btn);
            });
        });
    }

    function renderNode(node, fullLink) {
        switchToPage(() => {
            const bubble = document.createElement('div');
            bubble.className = 'bot-msg-bubble';
            if (typeof node === 'string') {
                bubble.innerHTML = `<strong>Solution:</strong><br>${node}` + (fullLink ? `<hr><a href="${fullLink}" target="_blank" style="color:#0094ff; text-decoration:none; font-weight:600;">View Detailed Guide &rarr;</a>` : "");
                pageContainer.appendChild(bubble);
                renderNavFooter();
                return;
            }
            bubble.innerHTML = `<span style="display:block; font-weight:700; color:#8898aa; font-size:11px; text-transform:uppercase; margin-bottom:8px;">Diagnosis Step</span>${node.step}`;
            pageContainer.appendChild(bubble);
            node.options.forEach(opt => {
                const btn = document.createElement('div');
                btn.className = 'tree-option';
                btn.innerText = opt.label;
                btn.onclick = () => { historyStack.push(() => renderNode(node, fullLink)); renderNode(opt.next, fullLink); };
                pageContainer.appendChild(btn);
            });
            renderNavFooter();
        });
    }

    function renderAnswerPage(item) {
        switchToPage(() => {
            const bubble = document.createElement('div');
            bubble.className = 'bot-msg-bubble';
            bubble.innerHTML = `<h3 style="margin:0 0 10px 0; font-size:16px;">${item.q}</h3><hr style="border:0; border-top:1px solid #eee; margin:10px 0;">${item.a}<br><br><a href="${item.link}" target="_blank" style="color:#0094ff; font-weight:600; text-decoration:none;">Read Full Article &rarr;</a>`;
            pageContainer.appendChild(bubble);
            renderNavFooter();
        });
    }

    function renderNavFooter() {
        const footer = document.createElement('div');
        footer.className = 'nav-footer';
        const backBtn = document.createElement('span');
        backBtn.className = 'nav-btn';
        backBtn.innerText = currentLang==='en'?"Back":"返回";
        backBtn.onclick = () => { if (historyStack.length > 0) historyStack.pop()(); else renderHome(); };
        const homeBtn = document.createElement('span');
        homeBtn.className = 'nav-btn';
        homeBtn.innerText = currentLang==='en'?"Menu":"主菜单";
        homeBtn.onclick = () => { historyStack = []; renderHome(); };
        footer.appendChild(backBtn); footer.appendChild(homeBtn);
        pageContainer.appendChild(footer);
    }

    input.onkeypress = (e) => {
        if(e.key==='Enter' && input.value.trim()) {
            const q = input.value.trim().toLowerCase();
            const res = faqData[currentLang].find(i => i.q.toLowerCase().includes(q) || i.keywords.some(k=>q.includes(k)));
            
            // 埋点触发
            logToGoogle(q, !!res);

            if(res) {
                historyStack.push(renderHome);
                if(res.type==='tree') renderNode(res.tree, res.link);
                else renderAnswerPage(res);
            } else {
                switchToPage(() => {
                    const d = document.createElement('div');
                    d.className = 'bot-msg-bubble';
                    d.innerText = currentLang==='en'?"Sorry, no direct match. Try another keyword or contact us.":"未找到匹配项，建议更换词语搜索，或联系技术支持。";
                    pageContainer.appendChild(d);
                    renderNavFooter();
                });
            }
            input.value = '';
        }
    };

    document.getElementById('bot-toggle').onclick = () => { 
        document.getElementById('faq-bot-window').style.display='flex'; 
        document.getElementById('bot-toggle').style.display='none'; 
        if(window.innerWidth <= 768) document.body.style.overflow = 'hidden';
    };
    document.getElementById('bot-close').onclick = () => { 
        document.getElementById('faq-bot-window').style.display='none'; 
        document.getElementById('bot-toggle').style.display='block'; 
        document.body.style.overflow = '';
    };

    document.getElementById('lang-en').onclick = () => { currentLang='en'; historyStack=[]; setLangUI(); renderHome(); };
    document.getElementById('lang-cn').onclick = () => { currentLang='cn'; historyStack=[]; setLangUI(); renderHome(); };
    function setLangUI() {
        document.getElementById('lang-en').classList.toggle('active', currentLang==='en');
        document.getElementById('lang-cn').classList.toggle('active', currentLang==='cn');
    }

    init();
})();