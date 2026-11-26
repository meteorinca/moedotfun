const DEFAULT_PROJECTS = [
  { "title": "Lo-Fi",       "link": "demos/lofi-beat-maker/index.html",                "icon": "lofi" },
  { "title": "Boids",       "link": "demos/boids-lab/index.html",                      "icon": "boids" },
  { "title": "Planets",     "link": "demos/planet-generator/index.html",               "icon": "planets" },
  { "title": "Coin Flip",   "link": "demos/coinflip/index.html",                       "icon": "coin" },
  { "title": "Billions",    "link": "demos/spend-billions/index.html",                 "icon": "billions" },
  { "title": "Deep Sea",    "link": "demos/deep-sea/index.html",                       "icon": "sea" },
  { "title": "Time",        "link": "demos/time-progress/index.html",                  "icon": "time" },
  { "title": "Robot",       "link": "demos/design-robot/index.html",                   "icon": "robot" },
  { "title": "Life List",   "link": "demos/life-checklist/index.html",                 "icon": "checklist" },
  { "title": "Math Art",    "link": "https://meteorinca.github.io/ArtWithMath/",       "icon": "mathart" },
  { "title": "Logic Gates", "link": "https://meteorinca.github.io/Logic-Gates-Simulator/", "icon": "gates" },
  { "title": "Entropy",     "link": "https://meteorinca.github.io/entropy/",           "icon": "entropy" },
  { "title": "Fountain",    "link": "https://meteorinca.github.io/cfountain/",         "icon": "fountain" },
  { "title": "Workout",     "link": "https://meteorinca.github.io/sovietworkout/",     "icon": "workout" },
  { "title": "Urdu",        "link": "https://meteorinca.github.io/urdu/",              "icon": "urdu" },
  { "title": "Fish",        "link": "https://meteorinca.github.io/fishgame/",          "icon": "fish" },
  { "title": "Math Race",   "link": "https://meteorinca.github.io/MathRacingTutorFS/", "icon": "race" },
  { "title": "Stack",       "link": "https://meteorinca.github.io/p5stack-demo/",      "icon": "stack" }
];

const ICONS = {
  lofi: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="12" r="2.2"/><circle cx="15.5" cy="12" r="2.2"/><line x1="8.5" y1="14.2" x2="15.5" y2="14.2"/></svg>`,
  boids: `<svg viewBox="0 0 24 24"><polygon points="19,7 11,9 14,12"/><polygon points="13,13 5,15 8,18"/><polygon points="10,5 4,7 6,10"/></svg>`,
  planets: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5.5"/><ellipse cx="12" cy="12" rx="10.5" ry="3.4" transform="rotate(-24 12 12)"/></svg>`,
  coin: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5" stroke-dasharray="2 2"/></svg>`,
  billions: `<svg viewBox="0 0 24 24"><line x1="12" y1="3" x2="12" y2="21"/><path d="M16.5 7.5c0-1.8-2-3-4.5-3s-4.5 1.2-4.5 3 2 2.8 4.5 3.5 4.5 1.7 4.5 3.5-2 3-4.5 3-4.5-1.2-4.5-3"/></svg>`,
  sea: `<svg viewBox="0 0 24 24"><path d="M2 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>`,
  time: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><polyline points="12,7 12,12 15.5,14"/></svg>`,
  robot: `<svg viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="11" rx="2.5"/><line x1="12" y1="3" x2="12" y2="7"/><circle cx="9.5" cy="12" r="1.2"/><circle cx="14.5" cy="12" r="1.2"/><line x1="9" y1="15.5" x2="15" y2="15.5"/></svg>`,
  checklist: `<svg viewBox="0 0 24 24"><polyline points="4,7 6,9 9.5,5.5"/><line x1="12" y1="7.5" x2="20" y2="7.5"/><polyline points="4,13 6,15 9.5,11.5"/><line x1="12" y1="13.5" x2="20" y2="13.5"/><line x1="12" y1="19" x2="20" y2="19"/><circle cx="6.5" cy="19" r="1.5"/></svg>`,
  mathart: `<svg viewBox="0 0 24 24"><polygon points="12,3 21,19 3,19"/><polygon points="12,21 3,5 21,5"/></svg>`,
  gates: `<svg viewBox="0 0 24 24"><path d="M6 6h5a6 6 0 0 1 0 12H6z"/><line x1="2" y1="9" x2="6" y2="9"/><line x1="2" y1="15" x2="6" y2="15"/><line x1="17" y1="12" x2="22" y2="12"/></svg>`,
  entropy: `<svg viewBox="0 0 24 24"><circle cx="6" cy="7" r="1.5"/><circle cx="10" cy="6" r="1.5"/><circle cx="7" cy="11" r="1.5"/><circle cx="17" cy="7" r="1.5"/><circle cx="14" cy="14" r="1.5"/><circle cx="19" cy="16" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>`,
  fountain: `<svg viewBox="0 0 24 24"><path d="M12 19V7"/><path d="M12 7c0-3 3-4 5-2"/><path d="M12 7c0-3-3-4-5-2"/><path d="M5 19h14"/></svg>`,
  workout: `<svg viewBox="0 0 24 24"><line x1="6" y1="12" x2="18" y2="12"/><rect x="3" y="8" width="3" height="8" rx="1"/><rect x="18" y="8" width="3" height="8" rx="1"/></svg>`,
  urdu: `<svg viewBox="0 0 24 24"><path d="M18 6c-2 6-5 11-11 12"/><path d="M13 6c-1 3-3 5-6 6"/><circle cx="14" cy="16" r="1.2"/></svg>`,
  fish: `<svg viewBox="0 0 24 24"><path d="M4 12c3-4 8-5 13-1-5 4-10 3-13-1z"/><polygon points="17,11 21,8 21,14"/><circle cx="8.5" cy="11" r="0.8"/></svg>`,
  race: `<svg viewBox="0 0 24 24"><path d="M5 18V5h11l-2 4 2 4H5"/></svg>`,
  stack: `<svg viewBox="0 0 24 24"><rect x="6" y="15" width="12" height="4" rx="1"/><rect x="7" y="10" width="10" height="4" rx="1"/><rect x="8.5" y="5" width="7" height="4" rx="1"/></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('cards-grid');

    renderGrid(DEFAULT_PROJECTS);

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
            .catch(() => {});
    }

    function renderGrid(projects) {
        gridContainer.innerHTML = projects.map(p => {
            const isExternal = p.link && p.link.startsWith('http');
            const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
            const svg = ICONS[p.icon] || `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/></svg>`;

            return `
                <a class="card-banner" href="${p.link}" ${targetAttr} aria-label="${escapeHTML(p.title)}">
                    <div class="card-minimal">
                        <span class="card-icon" aria-hidden="true">${svg}</span>
                        <span class="card-title">${escapeHTML(p.title)}</span>
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
