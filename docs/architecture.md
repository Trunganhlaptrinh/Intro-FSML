# Architecture

## Runtime model

The site is a static HTML/CSS/JavaScript project. It is served from the repository root so its `/website/...` asset paths resolve. There is no build step or package manager at present.

```mermaid
flowchart TD
    Browser[Browser]
    Main[website/index.html]
    App[website/src/app.js<br/>GSAP + ScrollTrigger]
    Style[website/src/style.css]
    Story[Story iframe<br/>Three.js background]
    Hands[Hands intro iframe]
    Ribbon[Topic ribbon iframe<br/>Three.js]
    Details[Six topic detail iframes]
    Members[Member cards<br/>data in app.js]
    Video[Time-lapse video]

    Browser --> Main
    Main --> App
    Main --> Style
    Main --> Story
    Main --> Hands
    Main --> Ribbon
    Main --> Details
    App -->|scroll progress and transitions| Main
    App -->|language via postMessage| Ribbon
    App -->|language via postMessage| Details
    App -->|creates cards| Members
    Main --> Video
```

## Page sequence

1. `#intro` embeds the dot-hand scene and branded title.
2. `#story` presents MAKE LIFE BETTER over the shared Story animation.
3. `#topics` hosts the Three.js topic ribbon. Parent-page ScrollTrigger progress is forwarded into the iframe so the ribbon advances with page scroll.
4. `#details` contains six standalone HTML pages. Each uses shared topic CSS/JS; parent GSAP timelines fade and scale the iframe scenes and a black curtain between them.
5. `#members` renders Executive Board, Present, and Former cards from data in `website/src/app.js`, over the continuing Story background.
6. `#love` plays the time-lapse and covers the Story background for the ending.

## Animation ownership

| Concern | Owner | Notes |
| --- | --- | --- |
| Main page reveal, section transitions, language toggle, video playback | `website/src/app.js` | GSAP and ScrollTrigger are loaded from local vendor files. Scrubbed transitions reverse when scrolling upward. |
| Dot hands | `website/public/scenes/intro-smart-lab.html` | Embedded as an iframe in the intro. |
| Persistent Story | `website/public/scenes/smart-lab-story.html` | A single iframe sits behind the main sequence; keep its background dark and unobtrusive. |
| Six-topic ribbon | `website/public/scenes/smart-lab-topics.html` | Three.js 0.170.0 is imported from jsDelivr through an import map. |
| Topic detail page appearance and translation | `website/src/topic-detail.css`, `website/src/topic-detail.js` | The six HTML pages supply their own content and tool marks. |
| Closing video | `#timelapse` in `website/index.html` | IntersectionObserver requests playback while the section is visible. |

## Communication between frames

The main language button defaults to English and sends `{ type: "smart-lab-language", language }` messages to the topic ribbon and each detail iframe. Keep the message type and the receiving code in sync when changing language behavior.

## Local development

From the repository root:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8000/website/>. Some assets and fonts are loaded from external hosts; a network connection is needed for those remote resources.

The time-lapse MP4 is managed by Git LFS. Contributors need Git LFS installed and initialized (`git lfs install`) to fetch and update that video.
