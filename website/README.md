# Website implementation

The page is a static site served from this directory. The main scroll sequence is in `index.html`; global layout and breakpoints are in `src/style.css`; site data and GSAP timelines are in `src/app.js`.

The Story scene is a single persistent background behind the hands, Story, topic ribbon, topic details, and member sections. The video closing scene covers that background. Each topic detail is its own document in `public/topic-details/` and shares `src/topic-detail.css` and `src/topic-detail.js`.

Start the server from the repository root with `python -m http.server 8000 --bind 127.0.0.1`, then open <http://127.0.0.1:8000/website/>.

See the repository [editing guide](../docs/project-structure.md) and [content map](../docs/content-and-assets.md) before changing member names, topic copy, or tool labels.
