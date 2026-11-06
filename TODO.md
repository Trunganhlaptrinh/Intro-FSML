# Project TODO

This is the current follow-up list for the FPTU Smart Lab site. Mark items complete only after checking the result.

## Next

- [ ] Perform visual desktop review from intro to time-lapse, then scroll back to the top. Confirm all six topic transitions reverse cleanly.
- [ ] Review the site at phone and tablet widths. Check topic copy/tool tiles, member cards, and horizontal overflow.
- [ ] Confirm the Story animation remains visible over a black base from the hands intro through Former members, then yields to the time-lapse.
- [ ] Check the closing video on the target browsers and decide whether a smaller web export is needed. Current MP4 is about 53 MB and is stored through Git LFS; a smaller export could reduce transfer time and LFS storage.

## When content is updated

- [ ] Apply the user's updated member, field, introduction, or PDF information to the relevant page and update `docs/content-and-assets.md` if paths or labels change.
- [ ] Check the English and Vietnamese versions together after any copy update.
- [ ] Replace placeholder member portraits when the user provides the final photos.

## Done in the current implementation

- [x] Six separate topic detail pages are connected in the scroll sequence.
- [x] Cybersecurity tool cards use Wireshark, Nmap, Ghidra, and Splunk.
- [x] Static server and focused JavaScript syntax checks are documented in `docs/qa-checklist.md`.

## Status note

Code-level checks and HTTP route checks have been run. Visual desktop reverse-scroll and responsive viewport checks still need to be completed in a controllable browser; see `docs/qa-checklist.md`.
