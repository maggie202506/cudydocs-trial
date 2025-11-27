document.addEventListener("DOMContentLoaded", () => {

    // --- 1. 【移动端检测与退出逻辑】 ---
    const MOBILE_MAX_WIDTH = 960;
    
    // 如果检测到是移动端，则阻止所有后续预览逻辑，并确保链接能正常跳转
    if (window.innerWidth <= MOBILE_MAX_WIDTH) {
        // 可选：移除 data-preview 属性，避免其他 JS 逻辑干扰
        document.querySelectorAll("a[data-preview]").forEach(link => {
            link.removeAttribute("data-preview");
        });
        return; // 关键：直接退出，桌面端逻辑不执行
    }
    // ------------------------------------


    // --- 2. 【桌面端预览面板创建与配置】 ---

    const panel = document.createElement("div");
    panel.id = "preview-panel";
    panel.innerHTML = `
      <div class="preview-header">
        <span class="title">View the Details</span>
        <button id="preview-close">✕</button>
      </div>
      <div id="preview-resizer" aria-hidden="true"></div>
      <div class="preview-body">
        <div class="content"></div>
      </div>
    `;
    document.body.appendChild(panel);

    const closeBtn = panel.querySelector("#preview-close");
    const contentDiv = panel.querySelector(".content");
    const resizer = panel.querySelector("#preview-resizer");

    /* ---------- 布局 header/footer ---------- */
    function layoutPanel() {
        const headerEl = document.querySelector("header, .md-header, .md-header__inner");
        const footerEl = document.querySelector("footer, .md-footer");
        const headerH = headerEl ? headerEl.getBoundingClientRect().height : 0;
        const footerH = footerEl ? footerEl.getBoundingClientRect().height : 0;
        panel.style.top = headerH + "px";
        panel.style.height = Math.max(200, window.innerHeight - headerH - footerH) + "px";
    }
    layoutPanel();
    window.addEventListener("resize", layoutPanel);
    setTimeout(layoutPanel, 500);

    /* ---------- 打开 / 关闭 ---------- */
    function openPanel() {
        document.body.classList.add("preview-open");
        panel.classList.add("open");
        layoutPanel();

        const mainContent = document.querySelector(".md-content");
        if (mainContent) {
            const previewWidth = getComputedStyle(document.documentElement)
                                 .getPropertyValue("--preview-width").trim();
            mainContent.style.width = `calc(100% - ${previewWidth})`;
        }

        try { document.dispatchEvent(new CustomEvent("md-sidebar:close")); } catch(e){}
    }

    function closePanel() {
        document.body.classList.remove("preview-open");
        panel.classList.remove("open");

        const mainContent = document.querySelector(".md-content");
        if (mainContent) mainContent.style.width = "";
    }

    closeBtn.addEventListener("click", closePanel);
    document.addEventListener("keydown", e => { if(e.key==="Escape") closePanel(); });
    document.addEventListener("click", e => {
        if(panel.classList.contains("open") && !panel.contains(e.target) && !e.target.closest("[data-preview]")){
            closePanel();
        }
    });

    /* ---------- 加载预览 (MODIFIED) ---------- */
    function loadPreview(url, anchor="") {
        
        // 辅助函数：判断链接是否指向图片文件
        const isImageURL = (href) => /\.(jpe?g|png|gif|webp|bmp|svg)(\?.*)?$/i.test(href);

        fetch(url)
          .then(res => res.ok ? res.text() : Promise.reject("无法读取页面"))
          .then(html => {
            const doc = new DOMParser().parseFromString(html, "text/html");
            const pageContent = doc.querySelector(".md-content") || doc.body;
            contentDiv.innerHTML = pageContent.innerHTML;
            openPanel();

            if(anchor){
              setTimeout(()=> {
                const target = contentDiv.querySelector(`#${anchor}`);
                if(target) target.scrollIntoView({behavior:"smooth"});
              },60);
            }

            // 内部链接嵌套预览 (已修改，排除图片链接)
            contentDiv.querySelectorAll("a").forEach(a=>{
                const href = a.getAttribute("href");
                
                if(!href || href.startsWith("http") || href.startsWith("mailto:")) return;

                // --- 关键修复：如果链接是图片，则跳过拦截 (event.preventDefault) ---
                if (isImageURL(href)) {
                     // 允许链接执行默认行为，让 Material 主题的 Lightbox 或浏览器默认图片查看器接管
                     return;
                }
                
                a.addEventListener("click", ev=>{
                    ev.preventDefault();
                    const newURL = new URL(href, window.location.origin);
                    loadPreview(newURL.pathname, newURL.hash.replace("#",""));
                });
            });
          })
          .catch(err => {
            contentDiv.innerHTML = `<div class="md-alert md-alert--error"><strong>预览失败：</strong>${String(err)}</div>`;
            openPanel();
          });
    }
    
    /* ---------- 绑定 data-preview 链接 (桌面端独有) ---------- */
    document.querySelectorAll("a[data-preview]").forEach(link=>{
        link.addEventListener("click", e=>{
          e.preventDefault();
          const full = new URL(link.href, window.location.origin);
          const path = full.pathname;
          const anchor = full.hash ? full.hash.replace("#","") : "";
          loadPreview(path, anchor);
        });
    });

    /* ---------- 拖拽调整宽度 ---------- */
    let isDragging = false;

    resizer.addEventListener("mousedown", e=>{
        isDragging = true;
        document.body.classList.add("resizing");
        e.preventDefault();
    });

    document.addEventListener("mousemove", e=>{
        if(!isDragging) return;

        // 右侧 panel 宽度
        const panelRight = window.innerWidth - e.clientX;
        let percent = (panelRight / window.innerWidth)*100;
        percent = Math.min(80, Math.max(30, percent));

        // 更新 panel 宽度
        panel.style.width = `${percent}%`;
        document.documentElement.style.setProperty("--preview-width", `${percent}%`);

        // 同步主内容宽度
        const mainContent = document.querySelector(".md-content");
        if(mainContent && document.body.classList.contains("preview-open")){
            mainContent.style.width = `calc(100% - ${percent}%)`;
        }
    });

    document.addEventListener("mouseup", ()=>{
        if(isDragging){ 
            isDragging=false; 
            document.body.classList.remove("resizing");
        }
    });

});