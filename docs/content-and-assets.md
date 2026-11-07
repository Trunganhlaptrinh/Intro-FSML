# Content and asset map

## Shared assets

- Primary logo: `website/public/assets/brand/logo-smart-lab-remake.png`
- Member portraits: `website/public/assets/members/`. Filenames identify the member; `member-placeholder.png` is reused where a portrait is unavailable.
- Persistent background scene: `website/public/scenes/smart-lab-story.html`
- Closing video and poster: `website/public/assets/video/`

## Topic pages and tool marks

| Topic | HTML page | Tool marks |
| --- | --- | --- |
| Software Engineering | `website/public/topic-details/software-engineering.html` | Visual Studio Code, Docker, PostgreSQL, Git |
| Internet of Things | `website/public/topic-details/internet-of-things.html` | MATLAB, Arduino, PlatformIO, Sensor Networks |
| Artificial Intelligence | `website/public/topic-details/artificial-intelligence.html` | TensorFlow, PyTorch, Python, Jupyter |
| Robotics | `website/public/topic-details/robotics.html` | Arduino, MATLAB, PlatformIO |
| Blockchain | `website/public/topic-details/blockchain.html` | Web3, SHA-256, Data Mining, Blockchain Network |
| Cybersecurity | `website/public/topic-details/cybersecurity.html` | Wireshark, Nmap, Ghidra, Splunk |

Tool images are stored in `website/public/assets/tools/`. The SHA tile artwork spells the algorithm “SHA 256”; its visible label uses the standard technical name **SHA-256**.

Topic card accent order: Software Engineering—green; Internet of Things—blue; Artificial Intelligence—purple; Robotics—yellow; Blockchain—orange; Cybersecurity—red.

The Nmap logo is `website/public/assets/tools/nmap.png`, sourced from the [official Nmap image directory](https://nmap.org/images/). The Ghidra mark is `website/public/assets/tools/ghidra.svg`, sourced from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ghidra_logo.svg). The file page credits Ryan Kurtz and states Apache License 2.0.

## Members

Edit member names, roles, and image paths in `website/src/app.js`. The section order is Executive Board, Present, and Former. Use `member-placeholder.png` only when no distinct portrait is available.

## Language behavior

The main page defaults to English. Its language button switches between `EN` and `VI`. Main-page copy uses paired `data-en` and `data-vi` attributes. The topic ribbon and detail iframes receive the selected language through `postMessage` and update their paired fields.

## Asset maintenance

Use descriptive, lowercase kebab-case filenames for new assets. When an asset is renamed or replaced, update every code reference and this map. Record external sources and license details here.
