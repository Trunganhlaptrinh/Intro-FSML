# Contributor guide

Instructions for AI agents and contributors working in this repository.

## Read first

1. `README.md` for setup and usage.
2. `docs/architecture.md` before changing page flow, embedded scenes, or scroll behavior.
3. `docs/content-and-assets.md` before changing member, topic, tool, or asset data.
4. `docs/qa-checklist.md` before reporting visual QA as complete.
5. `TODO.md` for known follow-up work.

## Project conventions

- Communicate in Vietnamese unless the user requests another language.
- Follow the latest user instruction. Preserve supplied names and role text exactly; do not silently rewrite factual content.
- Keep English and Vietnamese copy paired with `data-en` and `data-vi` where the surrounding component uses that pattern.
- Keep scroll-linked animations reversible. Prefer GSAP/ScrollTrigger scrubbed timelines for transitions that must work in both directions.
- Preserve the continuous Story background through the member sections. The closing section owns its video background.
- Keep user-provided files that are currently in the repository unless the user asks to remove them. Remove generated website assets only after confirming they are unused.
- Use lowercase kebab-case for new website asset filenames. Update all references and `docs/content-and-assets.md` when an asset changes.
- Record external asset sources and license notes in `docs/content-and-assets.md`.
- For broad structural changes, explain the intended file and folder changes before editing. For a directly requested local correction, make the correction and report the affected files.

## Focused checks

When the user requests verification, run:

```powershell
node --check website/src/app.js
node --check website/src/topic-detail.js
python -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/website/> and follow `docs/qa-checklist.md`. Report static checks separately from browser-based visual review. Do not claim mobile or reverse-scroll visual QA based only on syntax or HTTP checks.

## Avoid

- Adding a build system or dependency manager without discussing it first.
- Replacing the supplied scene references with unrelated templates.
- Inventing member roles, research areas, or tool labels when the source is unclear; ask a focused question instead.
- Removing source assets solely because the current page does not reference them.
