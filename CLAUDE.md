# Joy Junk Removal Website

Business website for Joy Junk Removal at joyjunkremoval.com.
Hosted on a remote server, deployed via FileZilla (FTP).

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

## Goal

Build a professional, modern lead-generation landing page for Joy Junk Removal. Every section should drive toward a contact form or phone call.

## Deployment

Files are uploaded manually via FileZilla to the live server.
After any change: edit locally → commit to git → upload via FileZilla.

## Rules

- Bump `CACHE` version in `sw.js` on every deployment that touches CSS/JS/HTML
- Log major changes in `CHANGELOG.md` before committing
- All `<script>` tags must have `defer`
- Optimize every change for mobile at the same time as desktop
- Never hardcode credentials — use environment variables or a separate config file that is gitignored
- Always check `brand_assets/brand_guidelines.md` before making visual changes
- Always invoke the frontend-design skill before writing any frontend code, every session, no exceptions
- Always develop and test on localhost first — do not push to GitHub unless explicitly asked

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
