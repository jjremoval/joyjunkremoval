# Joy Junk Removal Website

Business website for Joy Junk Removal at joyjunkremoval.com.
Hosted on GitHub Pages (jjremoval/joyjunkremoval — **public repo**), auto-deploys on push to main.
Owner: Ron (`hello@joyjunkremoval.com`). Account map & recovery: `docs/40_Account_Handoff.md`.

## File structure

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `services.html` | Services page |
| `about.html` | About page |
| `css/styles.css` | All styles |
| `js/main.js` | All JavaScript |
| `sw.js` | Service worker — bump cache version on every deploy |
| `manifest.json` | PWA manifest |
| `brand_assets/` | Logo, brand guidelines, inspiration screenshots |
| `CHANGELOG.md` | Log all major changes here |
| `.githooks/post-commit` | Auto-logs each commit into CHANGELOG.md (folds the entry into the same commit via amend; loop-safe) |

## Goal

Build a professional, modern lead-generation landing page for Joy Junk Removal. Every section should drive toward a contact form or phone call.

## Deployment

After any change: edit locally → commit → push to main → GitHub Pages deploys automatically.

## Rules

- Bump `CACHE` version in `sw.js` on every deployment that touches CSS/JS/HTML
- Log major changes in `CHANGELOG.md` before committing
- All `<script>` tags must have `defer`
- Optimize every change for mobile at the same time as desktop
- Never hardcode credentials — use environment variables or a separate config file that is gitignored
- Always check `brand_assets/brand_guidelines.md` before making visual changes
- Always invoke the frontend-design skill before writing any frontend code, every session, no exceptions
- Always develop and test on localhost first — do not push to GitHub unless explicitly asked
- Each `docs/` markdown carries an `_Updated: YYYY-MM-DD_` line near the top — **bump it whenever you edit that doc** (it's the human-visible freshness signal). Do NOT add timestamps to tracked files in THIS repo (HTML/CSS/JS/CLAUDE.md) — git history + `CHANGELOG.md` already track those, and a manual stamp would just go stale.

## Session bootstrap (every session, any Claude working in this folder)

This project's source of truth is **this folder**, not Claude's memory. On starting work here:
1. **Read `docs/00_MEMORY.md` first** — orientation, systems, accounts, what's next.
2. **Check `docs/11_SEO_Maintenance.md` → "Next due"** — if a weekly/monthly/quarterly task is due, surface it to the owner (Ron) with anything you can pre-draft.
3. **Standing behaviors:**
   - After any SEO suggestion or change → update `docs/10_SEO_Strategy.md` (and its Radar Log).
   - After meaningful code changes → prompt the owner to commit.
   - When you edit a `docs/` file → bump its `_Updated:` line.
   - When pages are added → run the "When a new page is added" workflow in `docs/11`.

## Source-of-truth rule (keep the two repos self-contained)

**Nothing project-critical may live only in Claude's per-machine memory or a personal cloud routine. If it matters for this project, it goes in git** — `CLAUDE.md` in this public repo, or `docs/` in the private **`joyjunk-ops`** repo — so any owner (e.g., Ron) can clone the two repos + their own Claude and have the complete picture *and* behavior. Treat account memory as a disposable convenience cache; the repos must stand alone.

## Repo layout (two repos, one working folder)

- **This repo** (`jjremoval/joyjunkremoval`, PUBLIC) — the live site. Root must stay the Pages web root.
- **`joyjunk-ops`** (PRIVATE) — `docs/`, `tools/`, `cloudflare-worker/`, all version-controlled. Cloned as a **sibling folder** and **symlinked** into this one (`docs → ../ops/docs`, etc.), so every relative path here keeps working.
- **Local layout — one parent folder so the connection is obvious:**
  ```
  ~/Projects/joyjunk/
  ├── website    ← this repo (jjremoval/joyjunkremoval)
  ├── ops        ← joyjunk-ops (private docs/tools/worker)
  └── forecast   ← joyjunk-forecast (private dashboard)
  ```
- **Working copies live in `~/Projects/joyjunk/`, never inside Google Drive / cloud-sync folders** — sync corrupts git state (strips the executable bit off hooks, creates stale duplicate folders). Drive is for job photos and non-git files only.

## Security & privacy (READ — protects the business and customers)

**This repo is PUBLIC. Anything committed is public forever — including git history**, even after a file is deleted. (We learned this the hard way: an old `submit.php` leaked a CRM ID that still lives in history.) So:

**1. Never commit secrets.** No API keys, tokens, passwords, or customer data in tracked files — ever.
- Secrets live **server-side** (Cloudflare Worker secrets), in **env vars** (`APIFY_TOKEN` from `~/.config/joyjunk/apify_token`), or a password manager — never in either repo (private ≠ secret-safe).
- Gitignored here (they live in the private `joyjunk-ops` repo, symlinked locally): `docs`, `tools`, `cloudflare-worker`; plus `.apify_token`, `.indexnow-key.txt`.
- **A `gitleaks` pre-commit hook scans every commit** in both repos and blocks anything secret-like. Don't bypass it (`--no-verify`) without a very good reason.

**2. Client-side code (HTML/JS) is public — keep secrets out of it.** The contact form must post to the **Cloudflare Worker**, which holds the email key as a server-side secret. Never put a key/CRM ID in the page itself.

**3. Public-by-design — these are NOT secrets and are fine in the code:** the Cloudflare Web Analytics beacon token, the Worker URL (`*.workers.dev`), and the IndexNow key file (`17ebff…txt`). They're meant to be public; don't treat them as sensitive.

**4. Never paste a secret into chat or an un-redacted screenshot.** Transcripts persist. If a secret is shown to an assistant or posted anywhere, treat it as compromised and **rotate it** (what matters is *account access*, not the key string — log in via `hello@` and regenerate).

**5. Customer/lead data stays out of the repo.** Names, emails, phone numbers from the form flow **only via email** (Worker → Resend → `hello@`). Never log or commit them.

**6. Commit author email:** use the GitHub **noreply** address (already set), never a real personal email — public commits expose it to scrapers.

**7. DNS safety (IONOS):** never use IONOS "auto-connect/auto-DNS" templates (they wipe Google Workspace email records). Never edit the Google `MX`/`SPF` or the GitHub Pages `A` records. Email-service records (e.g. Resend) live on the `send.` subdomain only.

**8. Private docs never ship:** `docs/` (strategy, reports) and `tools/` (scraper) live in the private `joyjunk-ops` repo and are gitignored here — they must never be deployed to the public site or committed to this repo.

## First-time setup (after cloning)

Clone both repos side by side under one parent and link them:
```
mkdir -p ~/Projects/joyjunk && cd ~/Projects/joyjunk
git clone https://github.com/jjremoval/joyjunkremoval.git website
git clone https://github.com/thicktreasure365/joyjunk-ops.git ops
cd website
ln -s ../ops/docs docs
ln -s ../ops/tools tools
ln -s ../ops/cloudflare-worker cloudflare-worker
git config core.hooksPath .githooks   # run in BOTH repos
```
The hooks give you: auto-updating `CHANGELOG.md` on every commit (this repo) and a `gitleaks` secret scan blocking bad commits (both repos — install gitleaks to `~/.local/bin`).

## Git commit style

Short present-tense summary, e.g. "Add contact form", "Fix mobile nav", "Update pricing"

## Screenshot workflow

- After building, start a local server and take screenshots
- Do a two-pass review: compare screenshots section by section and fix any issues
- Save screenshots to `/temp_screenshots`
- Name screenshots descriptively (e.g. `hero_v1.png`, `contact_form_v2.png`)
- Do NOT use the screenshot tool for animated background elements

## Brand assets

- Logo: `brand_assets/joyjunklogo.png`
- Guidelines: `brand_assets/brand_guidelines.md`
- Inspiration: `brand_assets/inspiration1.png`, `inspiration2.png`, `inspiration3.png`
