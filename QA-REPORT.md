# Yard Stop continuation verification

Date: October 4, 2026. Scope: prepared source upload, known-asset localization, protected Vercel publishing and initial browser review. This report does not certify a complete content migration or production readiness.

## Source and build

- Read README.md and CONTENT-AUDIT.md before modifying the prepared source.
- GitHub was private and empty before upload; no newer work was overwritten.
- Imported all 20 prepared source files into the repository root; package.json is at the top level. Verified every uploaded file against its local Git blob hash.
- Preserved the original design, data, routes and generated garden-inspiration hero.
- Node.js 22.23.3: build and verification pass for 467 routes, 405 product pages, 29 articles and four policy summaries. After localization, the checker validates 51,899 internal references.
- No production dependencies added.
- Corrected malformed option tags in the inquiry form. All eight choices are now separate; product requests default to that equipment quote and landscaping appointments default to landscaping.

## Images

- Saved 603 of 603 recorded Yard Stop image URLs; no download failures.
- Source-to-local mappings and download results are committed under data/.
- Used original image bytes, including the existing logo, without image generation or model substitution.
- The garden hero remains labeled as garden inspiration; it is not presented as a completed company project.
- 77 catalog listings still lack recovered exact product images. Complete gallery coverage, suitability and resolution review remain open.

## Browser checks performed

- Desktop home page at 1280px: original logo, floral hero and primary navigation render; no horizontal overflow.
- Website search for pavers returns the landscaping page.
- Catalog initially shows 1–12 of 405 products. Next-page control shows 13–24.
- Hustler brand filter shows 79 products; ascending price sort is ordered correctly in the visible results.
- Search for Raptor X 42 narrows to four matching product titles.
- Exact Hustler model 944470 opens with its specifications, quote default and working image lightbox.
- Contact form has eight inquiry choices. Submitting synthetic local test values displays the explicit message that nothing was sent or saved. The source handler prevents submission and has no form backend or persistence.
- Appointment form defaults to Landscaping & outdoor living.
- Mobile home and catalog reviewed at 390px; mobile menu opens and closes. Contact page checked at 360px. No horizontal overflow observed on these pages.
- No browser console errors were captured in the tested flow.

These checks are samples, not an exhaustive review of every route, device, assistive technology or browser.

## Deployment

- Existing project: yardstop-redesign, prj_NPcLcsgE2UyhWArzJtn1YmzPvRmg.
- Team: voxel-designs, team_QaYPhccWt2WueSMcn46FTKlh.
- Initial connector response: HTTP 403, Not authorized: Trying to access resource under scope "voxel-designs". The connector's team list was empty even though the account's default team matched the project.
- User completed Vercel CLI sign-in. CLI/API access now works for the existing team and project. The separate ChatGPT connector still returns 403; its OAuth team grant must be reconnected as described in README.md.
- Corrected the project from Node.js 24 and unset build/output settings to Node.js 22, Other, `npm run build`, and `dist`.
- Git deployment is enabled only for `preview/yard-stop-review`; main and other branches are disabled. Local secrets, generated dist, and tool state are excluded by .vercelignore.
- Verified Preview `dpl_3z3sW5hpWX4XRtJBQD9u6e96mypm` reached Ready from GitHub commit `927d2c9`. Vercel built all 467 routes. Preview target is represented as null in the API, distinct from production.
- Protected branch URL: https://yardstop-redesign-git-preview-yard-stop-review-voxel-designs.vercel.app/.
- A request without authentication redirects to Vercel sign-in (HTTP 302). Authenticated homepage returns HTTP 200 and `X-Robots-Tag: noindex, nofollow, noarchive`; page metadata also remains noindex,nofollow.
- Existing Vercel Authentication setting is preserved: all_except_custom_domains. No live company domain was attached or changed. The temporary production deployments created by Vercel's first-deployment behavior were removed; production target was then null and the unassigned project alias returned 404.
- Hosted desktop homepage, catalog search (four Raptor X 42 results), exact product 944470, gallery dialog and preview-only form notice/default were checked. No browser errors were captured in these tested flows.
- Hosted 390px product review found a 488px-wide document caused by the thumbnail row's intrinsic minimum width. Set min-width:0 on the product gallery and copy grid items, keeping thumbnail scrolling within its row. Local 390px retest fits the viewport; desktop layout is preserved.
- UI diff review: PASS files-before-ui, lookup-after-lock, nested-cards, radius-drift, mixed-radii, extra-color, gray-on-color, unchosen-font, equal-three-cards, copy-length, eyebrow-repeat, spectacle-pattern, motion-for-show, glass-decoration, motion-easing, restyle-per-screen. The CSS diff only changes minimum width; existing design and content are preserved per the user's instruction.

## Shopping and navigation revision

- Preserved all original product records and paths; added seven category pages for 474 total routes. The homepage exposes eight visual destinations directly below a compact floral introduction, followed by four actual mower listings.
- Category links, department navigation, active categories, readable specifications and return-to-results links clarify the path from browsing to a model.
- Desktop browser checks: zero-turn category opens with 217 products; Hustler plus an exact 42-inch deck returns three models. Ascending price sort, the 944470 product page, thumbnail selection and the corresponding image lightbox work.
- Search for “lawn mowers” returns mower categories and models. Inquiry validation requires a message; a complete synthetic inquiry displays the explicit confirmation that nothing was sent, saved, purchased or reserved.
- Model comparison displays original prices/specifications and marks missing facts “Ask our team.” Product paths alone are stored in the current browser session; inquiry details are never stored.
- At 390px: mobile navigation opens, category filtering returns 11 riding mowers, empty-search recovery resets filters, and pagination advances to products 13–24. Comparison scrolls inside its table without widening the page.
- At 360px: a Cub Cadet riding-mower detail page fits the viewport. No broken visible images or browser console errors were detected in these sampled flows.
- Mobile navigation makes background content inert while open, supports Escape and keeps keyboard focus within the header/menu controls.
- Motion uses 180ms ease-out interaction feedback. Document view transitions were removed after a hosted embedded-browser check exposed aborted navigation. Reduced-motion preferences disable animation. No scroll hijacking or delayed content reveals were added.
- Vercel diagnosis: the short project address had no assigned preview because it targeted the empty production slot. Assigned the existing `yardstop-redesign.vercel.app` address to `preview/yard-stop-review`; deployment protection and company-domain separation are preserved.
- The separate Vercel connector still lacks the voxel-designs team grant. This is independent of the working authenticated CLI and Git preview publishing.
- Node.js 22.23.3 checks pass: 474 routes, 405 products and 68,610 internal references. Catalog tests also protect category counts, legacy links, natural-language search, exact numeric filters and non-mower breadcrumbs.
- Design review found `copy-length: the primary line is a paragraph or over 12 words, the supporting line exceeds 20 words, or the view has more than one primary action.` Corrected the new headline to one sentence and made the persistent mower shortcut a secondary outline control. Rechecked PASS: files-before-ui, lookup-after-lock, nested-cards, radius-drift, mixed-radii, extra-color, gray-on-color, unchosen-font, equal-three-cards, copy-length, eyebrow-repeat, spectacle-pattern, motion-for-show, glass-decoration, motion-easing, restyle-per-screen. Product data and category-navigation grids are functional lists; existing department sections and complete product names remain as required by the user. Palette and type are unchanged.

## Remaining work

1. Migrate and reconcile full original article and policy text; these currently remain summaries/adaptations. Reconcile all original page content, marketing prose, embeds and galleries against an authorized export.
2. Recover missing product details and exact photos, inspect image quality and confirm model matches throughout the catalog.
3. Confirm the conflicting 45-mile/60-mile delivery radius, prices, availability, finance terms and business policies.
4. Complete accessibility, cross-browser and broader mobile QA. Connect an approved form backend only when authorized; preview forms currently do not submit.
