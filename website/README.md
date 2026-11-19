# Website implementation

The site is a static HTML, CSS, and JavaScript application. No package manager or build step is required.

## Key files

- `index.html` defines the page sections and their order.
- `src/app.js` manages page data, language switching, video playback, and GSAP/ScrollTrigger timelines.
- `src/style.css` contains shared layout, responsive rules, and the Scientific Papers scene.
- `src/topic-detail.css` and `src/topic-detail.js` are shared by the topic detail pages.
- `public/scenes/` contains the embedded animated scenes.
- `public/topic-details/` contains one HTML document per topic.
- The Scientific Papers title and nine linked publication entries are in `index.html`.
- `public/assets/` contains images, logos, and video media.

The Story scene runs as a persistent background behind the intro, topic sequence, and member sections. The closing section uses its own video background. Keep embedded scene backgrounds transparent where the shared background needs to remain visible.

For local preview, start the static server from the repository root and open <http://127.0.0.1:8000/website/>:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

See the [project structure guide](../docs/project-structure.md) and [content and asset map](../docs/content-and-assets.md) before changing page data or asset references.
