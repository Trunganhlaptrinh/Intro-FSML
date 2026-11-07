# FPTU Smart Lab

Desktop-first, bilingual, scroll-led site for FPTU Smart Lab. The site uses Three.js for the animated research-field scene and GSAP/ScrollTrigger for scroll transitions.

## Run locally

From the repository root, start the static server:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/website/>. Keep the server running while reviewing the site.

Git LFS is used for the time-lapse video. Install Git LFS and run `git lfs install` once per machine before cloning/pulling or committing video changes.

## Project notes

- [Agent instructions](AGENTS.md)
- [Architecture and runtime flow](docs/architecture.md)
- [Current TODO list](TODO.md)
- [Project structure and editing guide](docs/project-structure.md)
- [Content, tools, and asset map](docs/content-and-assets.md)
- [Desktop, reverse-scroll, and mobile QA checklist](docs/qa-checklist.md)
- [Website implementation notes](website/README.md)
- [Docker setup and deployment](docs/docker.md)

Original references and source documents are kept in `RE/` and `material/`.
