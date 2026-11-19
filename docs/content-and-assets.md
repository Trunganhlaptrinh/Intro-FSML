# Content and asset map

## Shared assets

- Primary logo: `website/public/assets/brand/logo-smart-lab-remake.png`
- Browser favicon: `website/public/assets/brand/favicon.png` and `favicon.ico`, generated from the supplied logo.
- Member portraits: `website/public/assets/members/`. Filenames identify the member; `member-placeholder.png` is reused where a portrait is unavailable.
- Persistent background scene: `website/public/scenes/smart-lab-story.html`
- Closing video and poster: `website/public/assets/video/`

## Topic card images

All six topic card images were supplied for this project and are stored in `website/public/assets/topics/`:

| Topic | Optimized image used by the site | Supplied source image (retained) |
| --- | --- | --- |
| Software Engineering | `software-engineering.webp` | `software-engineering.png` |
| Internet of Things | `internet-of-things.webp` | `internet-of-things.png` |
| Artificial Intelligence | `artificial-intelligence.webp` | `artificial-intelligence.jpg` |
| Robotics | `robotics.webp` | `robotics.png` |
| Blockchain | `blockchain.webp` | `blockchain.png` |
| Cybersecurity | `cybersecurity.webp` | `cybersecurity.png` |

The Three.js topic scene loads the WebP derivatives. The original images are kept alongside them as the supplied source files.

## Topic pages and roadmaps

| Topic | HTML page | Content |
| --- | --- | --- |
| Software Engineering | `website/public/topic-details/software-engineering.html` | Learning roadmap and project outcome |
| Internet of Things | `website/public/topic-details/internet-of-things.html` | Learning roadmap and project outcome |
| Artificial Intelligence | `website/public/topic-details/artificial-intelligence.html` | Learning roadmap and project outcome |
| Robotics | `website/public/topic-details/robotics.html` | Learning roadmap and project outcome |
| Blockchain | `website/public/topic-details/blockchain.html` | Learning roadmap and project outcome |
| Cybersecurity | `website/public/topic-details/cybersecurity.html` | Learning roadmap and project outcome |

The six standalone topic pages share `website/src/topic-detail.css` and `website/src/topic-detail.js`. Each presents an outcome under the topic title and a four-step roadmap. The old tool-logo grids are no longer displayed.

## Scientific Papers

The English-only Scientific Papers sequence is in `website/index.html`, between the topic details and member sections. It contains nine linked titles and author names, shown in two scroll stages.

The first stage contains these four papers in display order:

1. Vision–Language–Action Models for Robotic Manipulation: A Critical Review of Design Choices, Evidence, and Emerging Frontiers
2. Edge-Based Blockchain Design for IoT Security
3. Face and Hand Gesture Recognition for Secure Control of Equipment
4. Driver Fatigue Prediction Using Different Sensor Data with Deep Learning

The second stage contains:

1. Attention correlated appearance and motion feature followed temporal learning for activity recognition
2. Scalable and Fair Federated Learning for Heterogeneous Devices via Cluster-Based Optimization
3. A Hybrid Blockchain Framework for Secure Multi-domain Data Protection with Steganography
4. Enhancing Data Efficiency in Reinforcement Learning Using Autoencoders: A DDPG Framework
5. Reliable Federated Learning for Enhancing Human Activity Recognition

Keep each paper title, author list, and source link paired when updating the sequence.

Tool images are stored in `website/public/assets/tools/`. The SHA tile artwork spells the algorithm “SHA 256”; its visible label uses the standard technical name **SHA-256**.

Topic card accent order: Software Engineering—green; Internet of Things—blue; Artificial Intelligence—purple; Robotics—yellow; Blockchain—orange; Cybersecurity—red.

The Nmap logo is `website/public/assets/tools/nmap.png`, sourced from the [official Nmap image directory](https://nmap.org/images/). The Ghidra mark is `website/public/assets/tools/ghidra.svg`, sourced from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ghidra_logo.svg). The file page credits Ryan Kurtz and states Apache License 2.0.

## Members

Edit member names, roles, and image paths in `website/src/app.js`. The section order is Executive Board, Present, and Former. Use `member-placeholder.png` only when no distinct portrait is available.

## Language behavior

The main page defaults to English. Its language button switches between `EN` and `VI`. Main-page copy uses paired `data-en` and `data-vi` attributes. The topic ribbon and detail iframes receive the selected language through `postMessage` and update their paired fields.

## Asset maintenance

Use descriptive, lowercase kebab-case filenames for new assets. When an asset is renamed or replaced, update every code reference and this map. Record external sources and license details here.
