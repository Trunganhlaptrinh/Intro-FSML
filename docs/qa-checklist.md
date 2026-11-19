# Visual QA checklist

Use this checklist after changing page layout, scroll animation, content rendering, or responsive styles.

## Static and route checks

Run from the repository root:

```powershell
node --check website/src/app.js
node --check website/src/topic-detail.js
python -m http.server 8000 --bind 127.0.0.1
```

With the server running, confirm that `/website/`, all three scene documents, six topic pages, the logo, member portraits, tool images, and video assets load successfully.

## Desktop review

- Scroll through the intro, MAKE LIFE BETTER, topic cards, all six topic details, both Scientific Papers groups, member groups, and closing video.
- Check that mouse-wheel movement gives scroll-linked scenes time to read.
- Repeat the sequence upward. Transitions should reverse without leaving a blank iframe or dark overlay behind.
- Confirm each centered detail panel appears in order and only the active panel is visible.
- Confirm the six topic cards use the matching supplied images and keep their colored frames and text legible.
- Confirm each topic detail shows its outcome below the title and a four-step roadmap on the right, without tool logos.
- Confirm Scientific Papers has three stages: title, four papers, then five papers. Check all nine title links and author names, including the centered bottom row in the five-paper stage.
- Check that decorative dividers, duplicate scrollbars, repeated footer labels, and topic counters are absent where they are not part of the design.
- Confirm the Story particle scene remains visible over a dark base from the intro through Former members, then yields to the time-lapse.
- Check the Story-only pause after Former members and the coordinated appearance of the video and closing title.
- Confirm the video resolves from its initial hidden/blurred state to its final appearance and pauses after leaving view.
- Confirm each topic page presents its outcome and four-step roadmap clearly, without obsolete tool-logo panels.

## Mobile and tablet review

- Check at a narrow phone width and a tablet width.
- Confirm each topic outcome and roadmap fit without clipping or horizontal scrolling.
- Confirm the topic roadmap and outcomes fit without clipping, and the five-paper stage remains readable on a phone.
- Confirm member portraits, names, and roles remain readable in the responsive member grid.
- Check that the continuous background stays subtle and does not reduce text contrast.
- On a touch device, verify vertical swipes scroll the page normally through the pinned topic scenes and member sections.
- On desktop, press `9` to confirm the guided slow scroll reaches the footer; press `9` again or use the wheel to cancel it.

## Reporting results

Report syntax and HTTP checks separately from browser-based visual review. Do not describe mobile, reverse-scroll, or animation timing as verified unless those views were inspected in a browser.
