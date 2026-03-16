document.addEventListener("DOMContentLoaded", function() {
    const parentLinks = document.querySelectorAll('.md-nav li a[href$="index.md"]');
    parentLinks.forEach(parentLink => {
        const parentLi = parentLink.closest('li');
        const childUl = parentLi.querySelector('ul');

        if (!childUl) return;

        // 默认折叠
        childUl.classList.remove('show');

        // 当前页父级展开
        const currentPage = window.location.pathname.split('/').pop();
        if (parentLink.getAttribute('href').endsWith(currentPage)) {
            childUl.classList.add('show');
        }

        // 点击父级切换折叠
        parentLink.addEventListener('click', function(e) {
            const isCurrentPage = window.location.pathname.endsWith(parentLink.getAttribute('href').replace('.md', '.html'));
            if (isCurrentPage) {
                e.preventDefault();
                childUl.classList.toggle('show');
            }
        });
    });
});