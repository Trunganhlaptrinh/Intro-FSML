# Project structure and editing guide

## Run the preview

From the repository root, start a local static server:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/website/>. Serve the files over HTTP because the Three.js scene uses ES modules.

## Main files and folders

| Path | Purpose | Editing guidance |
| --- | --- | --- |
| `website/index.html` | Page sections and order | Edit section markup and the topic iframe list here. |
| `website/src/app.js` | Member data, language behavior, and GSAP/ScrollTrigger timelines | Preserve supplied role text exactly and keep scroll animations reversible. |
| `website/src/style.css` | Shared layout and responsive styles | Keep small-screen rules in sync with the desktop presentation. |
| `website/public/scenes/` | Dot-hand intro, persistent background animation, and Three.js topic scene | Keep backgrounds transparent where the shared scene must show through. |
| `website/public/topic-details/` | One standalone HTML page per topic | Update the content and tool marks in the matching page. |
| `website/src/topic-detail.css` and `website/src/topic-detail.js` | Shared topic detail styling and language handling | Keep changes consistent across all six topic pages. |
| `website/public/assets/` | Logo, portraits, tool marks, video, and poster | Use descriptive kebab-case names and update references when renaming files. |
| `docs/` | Architecture, content, deployment, and QA guidance | Update the relevant guide when implementation details change. |

## Scroll sequence

1. The hands intro overlays the continuously animated Story background.
2. The Story slogan stays pinned during its section, then fades as the topic ribbon arrives.
3. The Three.js ribbon presents six research fields over the same background.
4. Six separate topic pages appear in order. GSAP fades each page out before revealing the next; reverse scrolling reverses the transitions.
5. Member groups continue over the same animated background.
6. The closing video uses its own opaque background, so the Story scene does not show over the video.

## Editing checklist

- Update English and Vietnamese copy together using paired `data-en` and `data-vi` attributes.
- When changing a topic, update its standalone HTML page and the topic names in `smart-lab-topics.html`.
- When renaming an image, update every `src` reference and `docs/content-and-assets.md`.
- After editing a scroll animation, inspect downward and upward scrolling. Scrubbed ScrollTrigger timelines should reverse as the page scrolls up.
- Check desktop and narrow mobile layouts. Keep text readable, prevent horizontal overflow, and keep tool tiles inside the viewport.
- Keep section backgrounds transparent where the persistent Story scene should remain visible. Use neutral dark overlays for legibility; avoid introducing a colored wash across the full scene.
