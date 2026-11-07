# Visual QA checklist

Use this checklist after changes to section layout, scroll animation, or responsive styles.

## Automated checks

- `node --check website/src/app.js`
- `node --check website/src/topic-detail.js`
- Start the static server from the repository root with `python -m http.server 8000 --bind 127.0.0.1`.
- Confirm `/website/`, all three scene HTML files, all six topic detail pages, the logo, member portraits, tool images, and time-lapse assets return successfully.

## Desktop review

- Scroll from the hands intro through MAKE LIFE BETTER, the six topic cards, each of the six details, all member groups, and the closing time-lapse.
- Check that desktop mouse-wheel movement feels slower and gives the scroll-linked scenes more time to read.
- Repeat the sequence upward. Topic fade transitions should reverse without leaving a black curtain or blank iframe behind.
- Confirm all six centered detail panels appear in order; only the active stage wrapper should be visible at each step.
- Check that section dividers and decorative separator lines stay removed while card and tool-logo shapes remain intact.
- Check that the Story particle scene remains visible over a black base from the intro through Former members, then gives way to the time-lapse.
- Confirm there is a Story-only pause after Former members before the closing video and I LOVE SMART LAB fade in together.
- Confirm the closing time-lapse starts hidden and blurred, then clears to its intended final brightness without changing the I LOVE SMART LAB typography.
- Check the topic copy on the left and the white-backed tool marks on the right. Read each tool label against its image.
- Confirm the topic iframe has no second visible scrollbar, repeated footer labels, or topic-count markers.
- Confirm the video starts when its section enters view and pauses after leaving it.

## Mobile review

- Check at a narrow phone width and at tablet width.
- Confirm the topic copy and tool marks fit without clipping or horizontal scrolling.
- Confirm member portraits, names, and role text remain readable in the two-column member grid.
- Check that the continuous background remains subtle and does not reduce text contrast.

## Current code-level checks

- Both JavaScript files pass `node --check`.
- The local static server responds with HTTP 200 for the home page and Story scene.
- All 23 member image references resolve to 18 unique portrait files.
- Browser-based visual review of scroll direction and mobile viewport is still needed after code changes; do not treat static checks as a substitute.
