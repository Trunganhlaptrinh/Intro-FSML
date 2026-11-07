# Docker deployment

This project is a static website. Docker serves the existing `website/` files through Nginx; it does not add a frontend build step. The time-lapse video is copied into the image with the rest of the website assets.

## Requirements

- Docker Desktop installed and running
- Docker Compose (`docker-compose`)
- The real Git LFS video file available at `website/public/assets/video/smart-lab-timelapse.mp4`

If a fresh clone contains only a small Git LFS pointer for the video, install Git LFS and run `git lfs pull` before building.

## Start the site

Run these commands from the repository root:

```powershell
docker-compose up --build -d
```

Open <http://localhost:8080/> or <http://localhost:8080/website/>. The root URL redirects to the site. The host port is `8080` so it can run beside the local preview on port `8000`.

## Useful commands

```powershell
# Check container state and health
docker-compose ps

# Follow Nginx logs
docker-compose logs -f

# Rebuild after changing website files
docker-compose up --build -d

# Stop and remove the container
docker-compose down
```

The site has no persistent container data. Rebuild the image after changing a website asset because the site files are copied into the image at build time.

## Configuration files

- `Dockerfile` builds the Nginx image.
- `compose.yaml` maps host port `8080` to container port `80`.
- `docker/nginx.conf` serves the site and exposes the container health endpoint at `/health`.
- `.dockerignore` keeps source documents out of the build context while retaining all of `website/`, including the MP4.

The time-lapse MP4 is about 53 MB, which increases the image size. Nginx serves it as a static MP4 and supports byte-range requests for browser seeking.
