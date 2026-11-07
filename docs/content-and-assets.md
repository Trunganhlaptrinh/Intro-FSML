# Content and asset map

## Brand

- Main logo: `website/public/assets/brand/logo-smart-lab-remake.png`
- Member portraits: `website/public/assets/members/` (filenames identify the member; `member-placeholder.png` is intentionally shared where a portrait is unavailable)
- Story animation: `website/public/scenes/smart-lab-story.html`
- Closing time-lapse and poster: `website/public/assets/video/`

## Topic detail pages and tool labels

| Topic | HTML page | Tool marks shown |
| --- | --- | --- |
| Software Engineering | `public/topic-details/software-engineering.html` | Visual Studio Code, Docker, PostgreSQL, Git |
| Internet of Things | `public/topic-details/internet-of-things.html` | MATLAB, Arduino, PlatformIO, Sensor Networks |
| Artificial Intelligence | `public/topic-details/artificial-intelligence.html` | TensorFlow, PyTorch, Python, Jupyter |
| Robotics | `public/topic-details/robotics.html` | Arduino, MATLAB, PlatformIO |
| Blockchain | `public/topic-details/blockchain.html` | Web3, SHA-256, Data Mining, Blockchain Network |
| Cybersecurity | `public/topic-details/cybersecurity.html` | Wireshark, Nmap, Ghidra, Splunk |

Tool images are in `website/public/assets/tools/`. The SHA tile artwork spells the algorithm “SHA 256”; the visible label uses the standard technical name **SHA-256**.

Topic card accent order: Software Engineering—green, Internet of Things—blue, Artificial Intelligence—purple, Robotics—yellow, Blockchain—orange, Cybersecurity—red.

The Nmap logo is `website/public/assets/tools/nmap.png`, sourced from the [official Nmap image directory](https://nmap.org/images/). The Ghidra mark is `website/public/assets/tools/ghidra.svg`, sourced from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ghidra_logo.svg); that file page credits Ryan Kurtz and states Apache License 2.0.

The supplied topic deck has five topic slides. Robotics remains the sixth field from the existing site concept and has no dedicated slide in that deck.

## Members

Edit member names, roles, and photo paths in `website/src/app.js`. The section order is Executive Board, Present, Former. Each member's image file is named after that member; multiple people may use `member-placeholder.png` where the source set did not include a distinct photo.

## Bilingual behavior

The main page defaults to English. The language button switches between `EN` and `VI`. Main-page copy uses `data-en`/`data-vi`; the topic detail iframes receive the same language selection through `postMessage` and translate their own paired fields.
