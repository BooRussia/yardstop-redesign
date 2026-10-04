# The Yard Stop presentation website

A responsive, static design presentation for The Yard Stop in Ocala, Florida. Garden Center, Landscaping, and Equipment receive equal weight. Warm ivory and forest green provide a quiet setting for colorful flowers and original business photography. The original logo is used without alteration.

## Local development

Node.js 22. There are no production dependencies.

    npm run build
    npm run preview

The local server opens at http://localhost:4173. The standalone `outputs/Yard-Stop-Preview.html` opens directly without a server and contains the same navigation and content. It is generated with `node scripts/preview-file.mjs`.

## Contents

- 467 static routes, including 405 original catalog paths.
- 29 discovered article routes, including nine not linked from the primary blog index.
- Main garden, landscaping, equipment, contact, financing, service and location pages.
- Original SunCoast and STIHL availability pages, plus shared purchase FAQs.
- Responsive menus, search across products/services/articles, catalog filters and pagination, product galleries, and before/after comparison.
- Editable structured source data under `data/`.

## Vercel

Source repository: https://github.com/BooRussia/yardstop-redesign (private). Import this repository into Vercel. Framework: Other. Build command: `npm run build`. Output directory: `dist`. `vercel.json` contains these settings. Deploy as a protected preview until client review is complete. Robots are blocked and an X-Robots-Tag header is supplied; these are search indexing controls, not authentication. Keep Vercel deployment protection enabled.

No live company website or domain has been modified. No client messages have been sent.

## Images

The generated flower-garden hero is an illustrative concept, labeled as garden inspiration. Completed-project comparisons and the landscape feature use original Yard Stop image URLs. Exact products use their own original photo where available; missing product images are not replaced with another model.

Source images are currently served from Yard Stop. `npm run assets` downloads the recorded public assets to local storage, attempts original full resolution versions before thumbnail fallback, and records failures. Run it in an environment with outbound network access, inspect the results, then rebuild. The logo is not regenerated. The current workspace could not download original assets because outbound DNS/network access was unavailable.

## Presentation forms

The custom forms validate inputs but explicitly do not send or store messages. Links to the business's original live contact/parts/service/appointment forms are retained. Connect the approved backend only after client review. Financing links go to the existing business process; no credit applications are collected here.

## Migration and review gates

This is a substantial design presentation, not a verified complete source migration. Read `CONTENT-AUDIT.md` before publishing.

- Article and legal content consists of structured adaptations/summaries with links to complete original pages. Full originals must be migrated from an authorized site export before replacing the existing site.
- All 405 catalog listing entries are present; 394 contain recovered specification tables. Eleven original detail URLs could not be retrieved or redirected.
- Some original products and galleries have missing or low-resolution images. Asset localization and visual inspection remain required.
- Confirm contradictory free equipment delivery distances: homepage 60 miles; product FAQs 45 miles. Public presentation copy asks customers to confirm the current service area.
- Review availability, prices, financing, manufacturer claims, guarantees and policies with the business before launch.

## Verification performed

`npm run verify` checks every generated page, all product routes, internal references, unique route paths, viewport metadata, one H1 per page and image alt attributes. JavaScript syntax checks passed. Local HTTP preview and Chromium launch were blocked by environment permissions, so browser interaction testing and visual/mobile inspection remain incomplete.
