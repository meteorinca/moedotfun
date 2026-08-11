document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const navItems = document.querySelectorAll('.app-nav-item');
    const searchInput = document.getElementById('search-input');
    const itemCountLabel = document.getElementById('item-count-label');
    const btnLayout = document.getElementById('btn-layout');
    const btnTheme = document.getElementById('btn-theme');

    let allProjects = [];
    let currentCategory = 'All';
    let currentLayout = 'list'; // 'list' or 'grid'
    let currentTheme = localStorage.getItem('moe_theme') || 'light';

    // Apply theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    btnTheme.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    // Helper to extract clean domain string
    function extractDomain(url) {
        if (!url) return 'moedotfun';
        if (url.startsWith('demos/')) return 'moe.fun';
        try {
            const parsed = new URL(url);
            return parsed.hostname.replace('www.', '');
        } catch {
            return 'moe.fun';
        }
    }

    fetch('projects.json')
        .then(res => res.json())
        .then(data => {
            allProjects = data.map((p, index) => ({
                ...p,
                points: p.points || Math.floor(Math.random() * 150) + 42,
                comments: p.comments || Math.floor(Math.random() * 30) + 5,
                index: index + 1
            }));
            render();
        })
        .catch(err => console.error('Error loading projects:', err));

    function render() {
        const query = searchInput.value.toLowerCase().trim();
        let filtered = allProjects;

        if (currentCategory !== 'All') {
            filtered = filtered.filter(p => p.category === currentCategory);
        }

        if (query) {
            filtered = filtered.filter(p => 
                p.title.toLowerCase().includes(query) || 
                p.description.toLowerCase().includes(query) ||
                (p.category && p.category.toLowerCase().includes(query))
            );
        }

        itemCountLabel.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'}`;

        if (currentLayout === 'list') {
            renderListView(filtered);
        } else {
            renderGridView(filtered);
        }
    }

    function renderListView(projects) {
        contentArea.className = 'app-list';
        if (projects.length === 0) {
            contentArea.innerHTML = `<div style="padding: 20px 0; color: var(--text-muted);">No experiments match your filter.</div>`;
            return;
        }

        contentArea.innerHTML = projects.map((p, i) => {
            const domain = extractDomain(p.link);
            const badgeHTML = p.badge ? `<span class="badge-tag">${p.badge}</span>` : '';

            return `
                <div class="app-item">
                    <span class="app-rank">${i + 1}.</span>
                    <span class="app-vote" title="upvote">▲</span>
                    <div class="app-details">
                        <div class="app-item-title-row">
                            <a class="app-item-title" href="${p.link}" ${p.link.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${p.title}</a>
                            <span class="app-item-domain">(${domain})</span>
                            ${badgeHTML}
                        </div>
                        <div class="app-item-meta">
                            <span>${p.points} points</span>
                            <span>|</span>
                            <span class="tag-pill">${p.category || 'experiment'}</span>
                            <span>|</span>
                            <span>${p.description}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderGridView(projects) {
        contentArea.className = 'app-grid-mode';
        if (projects.length === 0) {
            contentArea.innerHTML = `<div style="padding: 20px 0; color: var(--text-muted);">No experiments match your filter.</div>`;
            return;
        }

        contentArea.innerHTML = projects.map(p => {
            const domain = extractDomain(p.link);
            const badgeHTML = p.badge ? `<span class="badge-tag">${p.badge}</span>` : '';

            return `
                <div class="app-card">
                    <div>
                        <div class="app-card-top">
                            <a class="app-card-title" href="${p.link}" ${p.link.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${p.title}</a>
                            ${badgeHTML}
                        </div>
                        <div class="app-card-desc">${p.description}</div>
                    </div>
                    <div class="app-card-footer">
                        <span class="tag-pill">${p.category || 'experiment'}</span>
                        <span>${domain}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Category navigation filter
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            currentCategory = item.dataset.category;
            render();
        });
    });

    // Search input live filtering
    searchInput.addEventListener('input', render);

    // Layout switcher button (List vs Cards)
    btnLayout.addEventListener('click', () => {
        currentLayout = currentLayout === 'list' ? 'grid' : 'list';
        btnLayout.textContent = currentLayout === 'list' ? 'View: Grid' : 'View: List';
        render();
    });

    // Dark/Light theme button
    btnTheme.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('moe_theme', currentTheme);
        btnTheme.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });
});