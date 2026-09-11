const DEFAULT_PROJECTS = [
  {
    "title": "Coin Flip",
    "description": "Matrix entropy coin flip harvesting mouse coordinates, crypto CSPRNG, & bitwise mixing.",
    "link": "demos/coinflip/",
    "category": "Interactive",
    "badge": "NEW"
  },
  {
    "title": "Spend Tech Billions",
    "description": "Have $200 Billion? Spend it on rockets, islands, Mona Lisa, & gaming studios.",
    "link": "demos/spend-billions/index.html",
    "category": "Simulation",
    "badge": "NEW"
  },
  {
    "title": "The Deep Sea Explorer",
    "description": "Scroll down 11,000 meters to discover deep ocean creatures & mysteries.",
    "link": "demos/deep-sea/index.html",
    "category": "Interactive",
    "badge": "NEW"
  },
  {
    "title": "Time & Cosmic Progress",
    "description": "Live real-time percentage progress of minute, day, year, life, & cosmic scales.",
    "link": "demos/time-progress/index.html",
    "category": "Simulation",
    "badge": "NEW"
  },
  {
    "title": "Design the Next Robot",
    "description": "Customize sci-fi AI bots with weapons, expressions, thrusters, & specs generator.",
    "link": "demos/design-robot/index.html",
    "category": "Creative",
    "badge": "NEW"
  },
  {
    "title": "Life Milestones Checklist",
    "description": "Interactive checklist of life's iconic moments with rank badges & unlocks.",
    "link": "demos/life-checklist/index.html",
    "category": "Interactive",
    "badge": "NEW"
  },
  {
    "title": "Art With Math",
    "description": "Mind-bending generative mathematical art, fractals, and geometric demos.",
    "link": "https://meteorinca.github.io/ArtWithMath/",
    "category": "Creative",
    "badge": "FEATURED"
  },
  {
    "title": "Logic Gates Simulator",
    "description": "Interactive digital circuit and logic gate simulator for tech explorers.",
    "link": "https://meteorinca.github.io/Logic-Gates-Simulator/",
    "category": "Educational",
    "badge": "FEATURED"
  },
  {
    "title": "Understanding Entropy",
    "description": "An intuitive visual breakdown of thermodynamics, chaos, and information theory.",
    "link": "https://meteorinca.github.io/entropy/",
    "category": "Educational",
    "badge": "FEATURED"
  },
  {
    "title": "Cyber Fountain",
    "description": "A hilarious web experiment that releases endless streams of autonomous bots.",
    "link": "https://meteorinca.github.io/cfountain/",
    "category": "Interactive",
    "badge": "FUN"
  },
  {
    "title": "Soviet Workout Regiment",
    "description": "Easy-to-follow minimalist workout routines for peak physical discipline.",
    "link": "https://meteorinca.github.io/sovietworkout/",
    "category": "Interactive",
    "badge": "FEATURED"
  },
  {
    "title": "Urdu Type Studio",
    "description": "Seamless online typing environment in authentic Urdu font.",
    "link": "https://meteorinca.github.io/urdu/",
    "category": "Interactive",
    "badge": "FEATURED"
  },
  {
    "title": "FishGame",
    "description": "Very Basic Game for lil Nephew.",
    "link": "https://meteorinca.github.io/fishgame/",
    "category": "Games"
  },
  {
    "title": "MathRacing",
    "description": "Speed-solve math equations to win the race.",
    "link": "https://meteorinca.github.io/MathRacingTutorFS/",
    "category": "Games"
  },
  {
    "title": "UnstableStack",
    "description": "Physics-based tower building challenge.",
    "link": "https://meteorinca.github.io/p5stack-demo/",
    "category": "Games"
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('cards-grid');

    // First render immediately with default data for instant display & file:// compatibility
    renderGrid(DEFAULT_PROJECTS);

    // Try fetching projects.json dynamically if hosted on a web server
    if (window.location.protocol.startsWith('http')) {
        fetch('projects.json')
            .then(res => {
                if (!res.ok) throw new Error('Network error');
                return res.json();
            })
            .then(projects => {
                if (Array.isArray(projects) && projects.length > 0) {
                    renderGrid(projects);
                }
            })
            .catch(err => {
                console.warn('Using local dataset (fetch warning):', err);
            });
    }

    function renderGrid(projects) {
        gridContainer.innerHTML = projects.map(p => {
            const isExternal = p.link && p.link.startsWith('http');
            const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
            const ariaLabel = `${p.title}: ${p.description || ''}`;

            return `
                    <a class="card-banner" href="${p.link}" ${targetAttr} aria-label="${ariaLabel}">
                        <div class="card-fallback">
                            <div class="card-fallback-inner">
                                <div class="card-fallback-title">${escapeHTML(p.title)}</div>
                                <div class="card-fallback-desc">${escapeHTML(p.description || '')}</div>
                            </div>
                        </div>
                    </a>
                `;
        }).join('');
    }

    function escapeHTML(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
});
