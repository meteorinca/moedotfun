document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid-container');

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const card = document.createElement('a');
                card.href = project.link;
                card.className = 'card';
                card.target = '_blank'; // Opens in new tab

                card.innerHTML = `
                    <img src="${project.image}" alt="${project.title}">
                    <div class="card-content">
                        <h2>${project.title}</h2>
                        <p>${project.description}</p>
                    </div>
                `;
                grid.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
});