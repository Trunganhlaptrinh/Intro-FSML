# Vercel deployment

The repository is a static site with no build step. Deploy from the repository root so existing `/website/...` asset paths remain valid. The root URL redirects to `/website/` through `vercel.json`.

`vercel.json` sets the browser security headers. `.vercelignore` excludes contributor documents and Docker files from deployments. The Content Security Policy allows the current inline scene scripts and the specific external font and animation hosts; update it when changing those dependencies.

## One-time project setup

1. In Vercel, import the GitHub repository `Trunganhlaptrinh/Intro-FSML` and authorize access to it.
2. Select `main` as the production branch.
3. Keep the Root Directory at the repository root.
4. Use the **Other** framework preset, with no build command and the root directory as the output.
5. In the project's Git settings, enable Git LFS support and redeploy so Vercel retrieves the time-lapse video.

## Automatic deployments

After the project is connected, pushes to `main` trigger production deployments. Other branches can produce preview deployments. Check the Vercel deployment page for the production URL and build status.

The video file is stored with Git LFS. Vercel must have Git LFS support enabled to retrieve the real MP4 during deployment; otherwise, the deployment may contain only the small LFS pointer file.

## CLI deployment

After signing in and linking the repository to the Vercel project, the CLI can deploy a preview or production build from the repository root:

```powershell
vercel
vercel --prod
```

The Git integration is the preferred routine workflow because it deploys each push automatically. Validate the configuration JSON locally with:

```powershell
Get-Content vercel.json -Raw | ConvertFrom-Json | Out-Null
```
