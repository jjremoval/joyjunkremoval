# Joy Junk Removal — joyjunkremoval.com

Lead-generation website for **Joy Junk Removal**, a local, family-run junk removal & hauling
service covering San Luis Obispo County, CA. Live at **[joyjunkremoval.com](https://joyjunkremoval.com)**.

## Stack

Deliberately simple: static HTML/CSS/JS, no framework, no build step.

- **Hosting:** GitHub Pages (this repo's root is the web root) — auto-deploys on push to `main`
- **Forms:** contact form POSTs to a Cloudflare Worker → Resend → business email (no secrets client-side)
- **PWA:** service worker (`sw.js`) with versioned cache + `manifest.json`
- **SEO:** LocalBusiness/FAQPage/Service JSON-LD, `sitemap.xml`, `robots.txt`, `llms.txt`, IndexNow
- **Monitoring:** weekly GitHub Action health-checks every page and re-pings IndexNow

## Layout

| Path | Purpose |
|---|---|
| `index.html` | Landing page |
| `services.html`, `about.html` | Services / About |
| `*-junk-removal.html` | Service-area pages (Paso Robles, SLO, Atascadero, Arroyo Grande) |
| `css/styles.css`, `js/main.js` | All styles / all JS |
| `sw.js` | Service worker — bump `CACHE` on every deploy |
| `.github/workflows/seo-monitor.yml` | Weekly uptime + IndexNow re-ping |
| `.githooks/` | post-commit auto-changelog + gitleaks pre-commit secret scan |

Strategy docs, the competitor-review scraper, and the Worker source live in a **private
companion repo** (`joyjunkremoval-ops`) — see `CLAUDE.md` → "First-time setup" for how the two
repos pair locally.

## Developing

```sh
git config core.hooksPath .githooks   # once, after cloning
python3 -m http.server 8000           # then open http://localhost:8000
```

Rules of the road are in [`CLAUDE.md`](CLAUDE.md); change history in [`CHANGELOG.md`](CHANGELOG.md).
