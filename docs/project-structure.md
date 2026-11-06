# Project structure and editing guide

## Run the demo

From the repository root:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/website/>. A static server is required because the Three.js topic scene uses ES modules.

## Main folders

| Path | Purpose | Editing guidance |
| --- | --- | --- |
| `website/index.html` | Page sections and order | Change section markup and the six topic iframe list here. |
| `website/src/app.js` | Member data, bilingual page behavior, GSAP/ScrollTrigger | Preserve exact role text from the member source. Keep scroll animations reversible. |
| `website/src/style.css` | Shared layout and responsive styles | Desktop is the main presentation target; keep the small-screen rules in sync. |
| `website/public/scenes/` | The dot-hand intro, continuous Story animation, and Three.js topic scene | These are the page's animation scenes. Keep their body backgrounds transparent where the shared Story background must show through. |
| `website/public/topic-details/` | One standalone HTML page per topic | Update copy and tool labels in the matching topic file. |
| `website/src/topic-detail.css` and `topic-detail.js` | Shared topic detail layout and language handling | Keep topic page changes consistent across all six documents. |
| `website/public/assets/` | Logo, member portraits, tool marks, video, and poster | Use descriptive, lowercase kebab-case filenames and update references when renaming. |
| `docs/` | Maintenance notes and content map | Keep this guide updated when the page sequence or asset layout changes. |
| `RE/`, `material/`, root `.docx`/`.png` files | User-provided source and reference materials | Preserve these originals; the website should use copies in `website/public/assets/`. |

## Scroll sequence

1. The hands intro overlays the continuously animated Story background.
2. The Story copy stays pinned for its scroll section and fades as the topic ribbon arrives.
3. The Three.js ribbon presents all six research fields over the same Story background.
4. Six separate topic HTML pages appear in order. GSAP fades each page out to black and fades the next page in; reversing scroll reverses the transition.
5. The member groups continue over the same animated background.
6. The time-lapse closing scene uses its own opaque video background, so the Story scene does not show over the video.

## Editing checklist

- Update English and Vietnamese copy together using paired `data-en` and `data-vi` attributes.
- When changing a topic, update its standalone HTML file and the topic names used by `smart-lab-topics.html`.
- When renaming an image, update every `src` reference and the content map.
- After editing a scroll animation, inspect both downward and upward scrolling. ScrollTrigger uses scrubbed timelines so the transition should play in reverse as the user scrolls up.
- Check the desktop presentation and a narrow mobile viewport. Keep text readable, avoid horizontal overflow, and keep tool tiles inside the viewport.
- Keep section backgrounds transparent where the persistent Story scene should be visible; use black shades for legibility rather than a blue color wash.
