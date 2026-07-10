# Changelog

All major changes to the Joy Junk Removal website are documented here.

## [Unreleased]
- 2026-07-10: Radar: 3x3 ranked recommendations, recycling via previous report, failure alert to hello@
- 2026-07-10: Monitor: daily health checks (IndexNow stays Mondays) + failure alert email to hello@
- 2026-07-09: Local folder naming: flat joyjunk_ prefix under ~/Projects
- 2026-07-09: Rename companion repo references: joyjunk-ops -> joyjunkremoval-ops, local folder website-ops
- 2026-07-09: Document grouped local layout: ~/Projects/joyjunk/{website,ops,forecast}
- 2026-07-09: Scorecard: keyless GSC auth via Workload Identity Federation (org blocks SA keys)
- 2026-07-09: Scorecard: account-wide Web Analytics aggregate (single-site account, no siteTag needed)
- 2026-07-09: Scorecard: resolve Web Analytics site_tag at runtime (beacon token != siteTag)
- 2026-07-09: Scorecard Phase 2: auto-fill Cloudflare analytics + GSC search data (graceful until secrets added)
- 2026-07-09: Add Monthly Scorecard workflow (auto lead count via Resend); retire checklist email
- 2026-07-09: Add lead-form Worker health test to weekly SEO Monitor
- 2026-07-09: Add monthly SEO Radar workflow (Claude API web search -> Resend email)
- 2026-07-09: Fix reminder-email footer: checklist lives in joyjunk-ops repo, not Drive
- 2026-07-09: Add README, gitleaks pre-commit hook; untrack .DS_Store; split private docs to joyjunk-ops
- 2026-06-30: Add review-mining FAQs (price-lock, student/Cal Poly move-outs) + clean-up trust signal
- 2026-06-30: Switch maintenance reminders to monthly-only; note Apify review pull
- 2026-06-30: Fix maintenance-reminders workflow YAML (heredoc broke block scalar; use printf)
- 2026-06-30: Add weekly/monthly maintenance-reminder workflow; add session-bootstrap + source-of-truth rules to CLAUDE.md
- 2026-06-28: Add docs timestamp rule to CLAUDE.md
- 2026-06-28: Add Security & privacy rules to CLAUDE.md; update repo owner
- 2026-06-28: Move Web Analytics to Ron's Cloudflare (new beacon token)
- 2026-06-28: Switch lead form to Resend email backend; add honeypot
- 2026-06-14: Fix CHANGELOG auto-logging via post-commit hook
- 2026-06-13: Expand home FAQ from 8 to 11 items (added estate cleanouts, areas served, get-a-quote) to match GBP Q&A set; cache v21
- 2026-06-13: Remove dead leftover files from previous PHP/Apache host — submit.php (unused; form posts to Cloudflare Worker; was publicly exposing CRM companyId), .htaccess (GitHub Pages ignores Apache config; HTTPS handled by Pages), package.json (empty boilerplate); fix .gitignore for docs/ + tools/
- 2026-06-13: Apply competitor-research findings — rewrite home FAQ (8 items + schema) with pricing-transparency/same-day/hot-tub/confirm-before-haul; sharpen hero + trust bar ("Honest Pricing — Pay Only for What We Haul"); add Hot Tub & Spa Removal service card + Service schema; bump cache to v20
- 2026-06-12: Re-center favicon on the true face center (was 60px too high, clipping the head/smile) via flood-fill detection; cache-bust to v=3; bump cache to v19
- 2026-06-12: Fix favicon crop (was clipping the face) — recenter on full face + add padding; cache-bust favicon link to v=2; bump cache to v18
- 2026-06-12: Make favicon a transparent circular smiley (face only, no white box); clean-crop app icons
- 2026-06-12: Add favicon + apple-touch-icon (cropped logo face) on all 7 pages; fix manifest icons to proper square sizes; add branded 404 page; bump cache to v17
- 2026-06-11: Add GitHub Actions "SEO Monitor" workflow — weekly cloud health-check of all pages (emails on failure) + IndexNow re-ping
- 2026-06-11: Add Cloudflare Web Analytics beacon to all 7 pages (traffic/conversion measurement); add missing defer to main.js on services/about; bump cache to v16
- 2026-06-10: Add llms.txt (AI-crawler summary) and IndexNow key file for AI-search visibility (Bing/ChatGPT/Copilot indexing)
- 2026-06-10: Reword reviews subheading to "Google Reviews from San Luis Obispo County neighbors"; bump cache to v15
- 2026-06-10: Make service-area hero/CTA buttons equal-sized and side-by-side (stack full-width on mobile); bump cache to v14
- 2026-06-10: Add "Service Areas" dropdown to header nav (desktop hover + mobile expandable submenu) across all 7 pages, with active-state highlighting; bump cache to v13
- 2026-06-10: Add customer reviews section (3 authentic Google reviews) to home page and all 4 service-area pages; bump cache to v12
- 2026-06-10: Add 4 service-area pages (Paso Robles, San Luis Obispo, Atascadero, Arroyo Grande) with unique local content, Service + FAQ schema, internal links, and footer Service Areas column; update sitemap; bump cache to v11
- 2026-06-10: Add sitemap.xml and robots.txt for search engine crawling/indexing
- 2026-06-10: Reword pricing FAQ answer (text photos / call for upfront quote); bump cache to v10
- 2026-06-10: SEO Priority 2 — add LocalBusiness JSON-LD (service-area) to all 3 pages, FAQPage schema + visible FAQ accordion on home page, optimize title tags/meta descriptions with "San Luis Obispo County" keywords, add canonical + Open Graph tags; bump cache to v9
- 2026-05-20: Wire contact form to Cloudflare Worker for Autopilot CRM integration
- 2026-05-20: Add .githooks tracking and first-time setup docs
- 2026-05-20: Bump service worker cache to v3

## [1.1.0] — 2026-05-20
### Added
- Service worker (`sw.js`) for cache management and faster repeat visits
- `manifest.json` for PWA / mobile installability
- `CHANGELOG.md` for tracking changes
### Changed
- Updated `CLAUDE.md` with deployment rules and file structure reference

## [1.0.2] — 2026-05-07
### Fixed
- Mobile cutoff on About and Services pages
### Changed
- Updated contact form

## [1.0.1] — 2026-04-28
### Changed
- Restructured into `css/` and `js/` folders
- Swapped to contact-us form

## [1.0.0] — 2026-04-24
### Added
- Initial site launch
