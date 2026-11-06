# Agent guide

Instructions for AI agents and contributors working in this repository.

## Read first

1. `README.md` for local setup and links to project docs.
2. `docs/architecture.md` before changing page flow, embedded scenes, or scroll behavior.
3. `docs/content-and-assets.md` before editing member, topic, or tool content.
4. `docs/qa-checklist.md` before calling visual QA complete.
5. `TODO.md` for known follow-up work.

## Project rules

- Communicate with the user in Vietnamese unless they ask for another language.
- Follow the latest explicit user instruction. Preserve member names and role text exactly as supplied; do not silently rewrite factual content.
- Keep English and Vietnamese UI copy paired with `data-en` and `data-vi` where the surrounding component uses that pattern.
- Keep scroll-linked animation reversible. Prefer GSAP/ScrollTrigger scrubbed timelines for transitions that must play in both directions.
- Preserve the continuous black Story background through the member sections. The final time-lapse section owns its video background.
- Keep source/reference materials in `RE/` and `material/` intact. Do not rename or delete user-provided source files. Only remove generated website assets after confirming they are unused.
- Use lowercase kebab-case for new website asset filenames. Update every reference and `docs/content-and-assets.md` when an asset is renamed or replaced.
- Record external asset sources and license notes in `docs/content-and-assets.md`.
- For broad structural changes, explain the intended file/folder changes before making them. For a directly requested, local correction, make the correction and report the files changed.

## Focused checks

When the user requests verification, run:

```powershell
node --check website/src/app.js
node --check website/src/topic-detail.js
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/website/` and follow `docs/qa-checklist.md`. Report separately which checks were static and which were visually inspected. Do not claim mobile or reverse-scroll visual QA from syntax or HTTP checks alone.

## Avoid

- Adding a build system or dependency manager without discussing the change first.
- Replacing the user's scene references with unrelated templates.
- Inventing member roles, research areas, or tool labels when the source is unclear; ask a focused question instead.
- Removing source assets just because the current page does not reference them.
