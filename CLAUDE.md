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
- Each `docs/` markdown carries an `_Updated: YYYY-MM-DD_` line near the top — **bump it whenever you edit that doc** (`docs/` is gitignored, so this is its only freshness signal). Do NOT add timestamps to tracked files (HTML/CSS/JS/CLAUDE.md) — git history + `CHANGELOG.md` already track those, and a manual stamp would just go stale.

## Security & privacy (READ — protects the business and customers)

**This repo is PUBLIC. Anything committed is public forever — including git history**, even after a file is deleted. (We learned this the hard way: an old `submit.php` leaked a CRM ID that still lives in history.) So:

**1. Never commit secrets.** No API keys, tokens, passwords, or customer data in tracked files — ever.
- Secrets live **server-side** (Cloudflare Worker secrets) or in **gitignored** locations only.
- Gitignored, never deployed/committed: `docs/`, `tools/`, `cloudflare-worker/`, `.apify_token`, `.indexnow-key.txt`.
- **Before committing, scan the diff for anything secret-like** (`key`, `token`, `secret`, `password`, IDs). If unsure, don't commit it.

**2. Client-side code (HTML/JS) is public — keep secrets out of it.** The contact form must post to the **Cloudflare Worker**, which holds the email key as a server-side secret. Never put a key/CRM ID in the page itself.

**3. Public-by-design — these are NOT secrets and are fine in the code:** the Cloudflare Web Analytics beacon token, the Worker URL (`*.workers.dev`), and the IndexNow key file (`17ebff…txt`). They're meant to be public; don't treat them as sensitive.

**4. Never paste a secret into chat or an un-redacted screenshot.** Transcripts persist. If a secret is shown to an assistant or posted anywhere, treat it as compromised and **rotate it** (what matters is *account access*, not the key string — log in via `hello@` and regenerate).

**5. Customer/lead data stays out of the repo.** Names, emails, phone numbers from the form flow **only via email** (Worker → Resend → `hello@`). Never log or commit them.

**6. Commit author email:** use the GitHub **noreply** address (already set), never a real personal email — public commits expose it to scrapers.

**7. DNS safety (IONOS):** never use IONOS "auto-connect/auto-DNS" templates (they wipe Google Workspace email records). Never edit the Google `MX`/`SPF` or the GitHub Pages `A` records. Email-service records (e.g. Resend) live on the `send.` subdomain only.

**8. Private docs never ship:** `docs/` (strategy, reports) and `tools/` (scraper) are gitignored and must never be deployed to the public site or committed.

## First-time setup (after cloning)

Run once to activate the git hooks:
```
git config core.hooksPath .githooks
```
This enables auto-updating of `CHANGELOG.md` on every commit.

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
