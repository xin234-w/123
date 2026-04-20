// ============================================
// Python数据分析全栈学习包 - 主应用逻辑
// ============================================

(function() {
    'use strict';

    // 当前页面
    let currentPage = 'home';

    // DOM元素
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const menuToggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('overlay');
    const contentWrapper = document.getElementById('contentWrapper');
    const breadcrumb = document.getElementById('breadcrumb');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const markCompleteBtn = document.getElementById('markComplete');
    const themeToggle = document.getElementById('themeToggle');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const completedCount = document.getElementById('completedCount');
    const totalCount = document.getElementById('totalCount');

    // 所有可追踪的章节（排除首页）
    const trackablePages = pageOrder.filter(p => p !== 'home');

    // ========== 初始化 ==========
    function init() {
        // 从URL hash获取页面
        const hash = window.location.hash.slice(1);
        if (hash && siteContent[hash]) {
            currentPage = hash;
        }

        // 展开当前页面所在的侧边栏分组
        expandParentSection(currentPage);

        // 渲染页面
        renderPage(currentPage);

        // 更新进度
        updateProgress();

        // 绑定事件
        bindEvents();

        // 更新总数
        totalCount.textContent = trackablePages.length;

        // 代码高亮
        hljs.highlightAll();
    }

    // ========== 事件绑定 ==========
    function bindEvents() {
        // 侧边栏开关
        menuToggle.addEventListener('click', openSidebar);
        sidebarClose.addEventListener('click', closeSidebar);
        overlay.addEventListener('click', closeSidebar);

        // 侧边栏导航点击
        document.querySelectorAll('.nav-section-title[data-toggle]').forEach(title => {
            title.addEventListener('click', () => {
                const targetId = title.getAttribute('data-toggle');
                const subsection = document.getElementById(targetId);
                title.classList.toggle('expanded');
                subsection.classList.toggle('open');
            });
        });

        // 导航项点击
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.getAttribute('data-page');
                navigateTo(page);
                // 移动端关闭侧边栏
                if (window.innerWidth <= 1024) {
                    closeSidebar();
                }
            });
        });

        // 首页点击
        document.querySelector('.nav-section-title[data-section="home"]').addEventListener('click', () => {
            navigateTo('home');
            if (window.innerWidth <= 1024) closeSidebar();
        });

        // 上一页/下一页
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const idx = pageOrder.indexOf(currentPage);
            if (idx > 0) navigateTo(pageOrder[idx - 1]);
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const idx = pageOrder.indexOf(currentPage);
            if (idx < pageOrder.length - 1) navigateTo(pageOrder[idx + 1]);
        });

        // 标记完成
        markCompleteBtn.addEventListener('click', () => {
            toggleComplete(currentPage);
        });

        // 主题切换
        themeToggle.addEventListener('click', toggleTheme);

        // URL hash变化
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            if (hash && siteContent[hash] && hash !== currentPage) {
                currentPage = hash;
                renderPage(currentPage);
                updateProgress();
            }
        });

        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                const idx = pageOrder.indexOf(currentPage);
                if (idx > 0) navigateTo(pageOrder[idx - 1]);
            } else if (e.key === 'ArrowRight') {
                const idx = pageOrder.indexOf(currentPage);
                if (idx < pageOrder.length - 1) navigateTo(pageOrder[idx + 1]);
            }
        });
    }

    // ========== 页面导航 ==========
    window.navigateTo = function(page) {
        if (!siteContent[page]) return;
        currentPage = page;
        window.location.hash = page;
        renderPage(page);
        updateProgress();
        updateActiveNav();
        expandParentSection(page);

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ========== 渲染页面 ==========
    function renderPage(page) {
        const data = siteContent[page];
        if (!data) return;

        // 更新内容
        contentWrapper.innerHTML = data.html;

        // 更新面包屑
        let breadcrumbHtml = '';
        data.breadcrumb.forEach((item, idx) => {
            if (idx > 0) {
                breadcrumbHtml += '<span class="breadcrumb-sep">›</span>';
            }
            if (idx === data.breadcrumb.length - 1) {
                breadcrumbHtml += `<span class="breadcrumb-current">${item}</span>`;
            } else {
                breadcrumbHtml += `<span class="breadcrumb-item">${item}</span>`;
            }
        });
        breadcrumb.innerHTML = breadcrumbHtml;

        // 更新标题
        document.title = `${data.title} - Python数据分析全栈学习包`;

        // 更新上一页/下一页
        const idx = pageOrder.indexOf(page);
        if (idx > 0) {
            const prevData = siteContent[pageOrder[idx - 1]];
            prevBtn.classList.remove('hidden');
            prevBtn.querySelector('span').textContent = prevData.title;
        } else {
            prevBtn.classList.add('hidden');
        }

        if (idx < pageOrder.length - 1) {
            const nextData = siteContent[pageOrder[idx + 1]];
            nextBtn.classList.remove('hidden');
            nextBtn.querySelector('span').textContent = nextData.title;
        } else {
            nextBtn.classList.add('hidden');
        }

        // 更新标记完成按钮状态
        updateMarkButton();

        // 更新导航高亮
        updateActiveNav();

        // 代码高亮
        contentWrapper.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    }

    // ========== 更新导航高亮 ==========
    function updateActiveNav() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-page') === currentPage) {
                item.classList.add('active');
            }
        });

        // 首页高亮
        const homeTitle = document.querySelector('.nav-section-title[data-section="home"]');
        if (currentPage === 'home') {
            homeTitle.style.color = 'var(--accent-blue)';
        } else {
            homeTitle.style.color = '';
        }
    }

    // ========== 展开父级分组 ==========
    function expandParentSection(page) {
        let sectionId = null;
        if (page.startsWith('mindset')) sectionId = 'mindset';
        else if (page.startsWith('debate')) sectionId = 'debate';
        else if (page.startsWith('project')) sectionId = 'projects';

        if (sectionId) {
            const toggle = document.querySelector(`[data-toggle="${sectionId}"]`);
            const subsection = document.getElementById(sectionId);
            if (toggle && subsection) {
                toggle.classList.add('expanded');
                subsection.classList.add('open');
            }
        }
    }

    // ========== 侧边栏 ==========
    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ========== 学习进度 ==========
    function getCompleted() {
        try {
            return JSON.parse(localStorage.getItem('dataAnalysis_completed') || '[]');
        } catch {
            return [];
        }
    }

    function saveCompleted(list) {
        localStorage.setItem('dataAnalysis_completed', JSON.stringify(list));
    }

    function toggleComplete(page) {
        if (page === 'home') return;
        const completed = getCompleted();
        const idx = completed.indexOf(page);
        if (idx > -1) {
            completed.splice(idx, 1);
        } else {
            completed.push(page);
        }
        saveCompleted(completed);
        updateProgress();
        updateMarkButton();
        updateNavCompleteStatus();

        // 按钮动画
        markCompleteBtn.classList.add('just-marked');
        setTimeout(() => markCompleteBtn.classList.remove('just-marked'), 300);
    }

    function updateProgress() {
        const completed = getCompleted();
        const total = trackablePages.length;
        const done = completed.filter(p => trackablePages.includes(p)).length;
        const percent = total > 0 ? Math.round((done / total) * 100) : 0;

        progressFill.style.width = percent + '%';
        progressPercent.textContent = percent + '%';
        completedCount.textContent = done;

        updateNavCompleteStatus();
    }

    function updateMarkButton() {
        const completed = getCompleted();
        if (completed.includes(currentPage)) {
            markCompleteBtn.classList.add('active');
            markCompleteBtn.title = '取消标记';
        } else {
            markCompleteBtn.classList.remove('active');
            markCompleteBtn.title = '标记为已学习';
        }
    }

    function updateNavCompleteStatus() {
        const completed = getCompleted();
        document.querySelectorAll('.nav-item').forEach(item => {
            const page = item.getAttribute('data-page');
            if (completed.includes(page)) {
                item.classList.add('completed');
            } else {
                item.classList.remove('completed');
            }
        });
    }

    // ========== 主题切换 ==========
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('dataAnalysis_theme', isLight ? 'light' : 'dark');
    }

    // 加载保存的主题
    function loadTheme() {
        const saved = localStorage.getItem('dataAnalysis_theme');
        if (saved === 'light') {
            document.body.classList.add('light-theme');
        }
    }

    // ========== 复制代码 ==========
    window.copyCode = function(btn) {
        const codeBlock = btn.closest('.code-block');
        const code = codeBlock.querySelector('code').textContent;

        navigator.clipboard.writeText(code).then(() => {
            btn.classList.add('copied');
            btn.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                已复制
            `;
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    复制
                `;
            }, 2000);
        }).catch(() => {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = code;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            btn.classList.add('copied');
            btn.innerHTML = '已复制';
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = '复制';
            }, 2000);
        });
    };

    // ========== 启动 ==========
    loadTheme();
    init();

})();
