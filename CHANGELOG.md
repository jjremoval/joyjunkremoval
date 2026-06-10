# Changelog

All major changes to the Joy Junk Removal website are documented here.

## [Unreleased]
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
