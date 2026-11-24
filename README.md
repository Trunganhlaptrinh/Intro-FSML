# Repository usage

This repository contains a static, bilingual website. Serve the repository over HTTP to load its pages, local scripts, and media correctly.

## Run locally

Requirements: Python 3.

From the repository root, run:

```powershell
python scripts/dev_server.py
```

Open <http://127.0.0.1:8000/website/>. Stop the server with `Ctrl+C`. This local server binds only to loopback and blocks hidden paths such as `.env.local` and `.git/`.

## Run with Docker

Requirements: Docker Desktop and Docker Compose.

From the repository root, run:

```powershell
docker-compose up --build -d
```

Open <http://localhost:8080/>. Stop the container with:

```powershell
docker-compose down
```

## Video asset

The time-lapse video uses Git LFS. After cloning, install and initialize Git LFS if needed, then fetch the media:

```powershell
git lfs install
git lfs pull
```

## Further documentation

- [Project structure](docs/project-structure.md)
- [Architecture](docs/architecture.md)
- [Content and assets](docs/content-and-assets.md)
- [Visual QA checklist](docs/qa-checklist.md)
- [Docker guide](docs/docker.md)
- [Vercel deployment guide](docs/vercel-deployment.md)
- [Contributor instructions](AGENTS.md)
