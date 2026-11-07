# Maintenance backlog

Track pending work here. Mark an item complete only after checking the result.

## Visual review

- [ ] Review the full desktop sequence from the intro through the closing video, then scroll back to the top.
- [ ] Check all six topic transitions in both scroll directions.
- [ ] Review phone and tablet widths for clipped text, overflowing cards, and horizontal scrolling.
- [ ] Confirm the shared Story background remains visible through the member sections and transitions smoothly into the closing video.
- [ ] Review video playback in target browsers and assess whether a smaller web export is needed. The current MP4 is about 53 MB and is stored through Git LFS.

## Content updates

- [ ] Apply future updates to member, field, and introduction content without changing supplied wording.
- [ ] Check English and Vietnamese copy together after content changes.
- [ ] Replace placeholder portraits when final images are available.
- [ ] Update `docs/content-and-assets.md` when asset paths, tool labels, or sources change.

## Completed implementation

- [x] Six standalone topic detail pages are connected to the scroll sequence.
- [x] Cybersecurity tool cards use Wireshark, Nmap, Ghidra, and Splunk.
- [x] Local preview and JavaScript syntax-check commands are documented.

## QA status

Static checks and HTTP route checks were completed previously. Browser-based desktop reverse-scroll and responsive viewport review remains open; see `docs/qa-checklist.md`.
