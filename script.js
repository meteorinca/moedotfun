document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let allProjects = [];

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            allProjects = data;
            renderProjects('All');
        })
        .catch(error => console.error('Error loading projects:', error));

    function renderProjects(category) {
        grid.innerHTML = '';
        const filtered = category === 'All' 
            ? allProjects 
            : allProjects.filter(p => p.category === category);

        filtered.forEach(project => {
            const card = document.createElement('a');
            card.href = project.link;
            card.className = 'card';
            if (project.link.startsWith('http')) {
                card.target = '_blank';
                card.rel = 'noopener';
            }

            const badgeHTML = project.badge 
                ? `<div class="card-badge ${project.badge === 'FEATURED' ? 'badge-featured' : ''}">${project.badge}</div>`
                : '';

            const categoryHTML = project.category 
                ? `<div class="card-category">${project.category}</div>`
                : '';

            card.innerHTML = `
                <div class="card-image-wrap">
                    ${badgeHTML}
                    <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null; this.src='assets/stack.jpg'">
                </div>
                <div class="card-content">
                    ${categoryHTML}
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <div class="card-footer">
                        <span>Launch Demo</span>
                        <span>→</span>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Filter Buttons logic
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            renderProjects(category);
        });
    });
});