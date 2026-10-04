# The Yard Stop presentation website

A responsive, static design presentation for The Yard Stop in Ocala, Florida. Garden Center, Landscaping, and Equipment receive equal weight. Warm ivory and forest green provide a quiet setting for colorful flowers and original business photography. The original logo is used without alteration.

## Local development

Node.js 22. There are no production dependencies.

    npm run build
    npm run preview

The local server opens at http://localhost:4173. The standalone `outputs/Yard-Stop-Preview.html` opens directly without a server and contains the same navigation and content. It is generated with `node scripts/preview-file.mjs`; original images and fonts in that portable presentation require internet access.

## Contents

- 474 static routes, including 405 original catalog paths and seven dedicated equipment category pages.
- 29 discovered article routes, including nine not linked from the primary blog index.
- Main garden, landscaping, equipment, contact, financing, service and location pages.
- Original SunCoast and STIHL availability pages, plus shared purchase FAQs.
- Homepage category catalog, direct mower navigation, responsive menus, search across products/services/articles, catalog filters and pagination, product galleries, up to three-model comparison, and before/after comparison.
- Editable structured source data under `data/`.

## Vercel

Source repository: https://github.com/BooRussia/yardstop-redesign (private). The existing Vercel project is linked to this repository. Node.js 22, Framework: Other, Build command: `npm run build`, Output directory: `dist`. These settings are applied to the existing project; `vercel.json` also records the build configuration. Keep Vercel deployment protection enabled. Robots are blocked and an X-Robots-Tag header is supplied; these are search indexing controls, not authentication.

The prepared source was uploaded to `main` at the repository root on October 4, 2026 (initial import `436752b`), with all 20 source file hashes verified against GitHub. The existing Vercel project is `prj_NPcLcsgE2UyhWArzJtn1YmzPvRmg` in `voxel-designs` (`team_QaYPhccWt2WueSMcn46FTKlh`). Publishing was repaired by authenticating the Vercel CLI to the existing team and applying the required build settings. Only `preview/yard-stop-review` is enabled for automatic Git deployment; `main` and all other branches are disabled. Push reviewed preview changes to that branch. `.vercelignore` excludes generated output, local credentials and tool state from uploads.

Protected preview: https://yardstop-redesign.vercel.app/ (sign in to Vercel with project access). This existing Vercel address is assigned to `preview/yard-stop-review`, so it follows preview updates. The branch alias is https://yardstop-redesign-git-preview-yard-stop-review-voxel-designs.vercel.app/. The project retains Vercel Authentication protection (`all_except_custom_domains`). No company domain is attached. Vercel initializes a new project's first deployment as production even when Preview is requested; the temporary initialization deployments were removed after the separate Preview reached Ready. Do not enable production deployment or attach the live company domain during this review.

The ChatGPT Vercel connector still returns a team-scope HTTP 403 independently of the working CLI and Git integration. To repair that connector, reconnect Vercel in the app's connection settings using the account that belongs to `voxel-designs`, and grant the connection access to this team/project. If the team is missing during authorization, its owner must add that Vercel account to the team first. Reauthorizing GitHub does not repair Vercel's separate OAuth grant.

No live company website or domain has been modified. No client messages have been sent.

## Images

The generated flower-garden hero is an illustrative concept, labeled as garden inspiration. Completed-project comparisons and the landscape feature use original Yard Stop image URLs. Exact products use their own original photo where available; missing product images are not replaced with another model.

All 603 recorded source image URLs were downloaded successfully on October 4, 2026. `data/asset-map.json` maps the original URLs to local files in `public/assets/source/`; the build uses those local files. `npm run assets` attempts original full resolution versions before thumbnail fallback and records failures in `data/asset-download-report.json`. The original logo is not regenerated or altered. Download success does not establish visual suitability or complete original-gallery coverage. The 77 catalog listings without a recovered exact photo still need source images.

## Presentation forms

The custom forms validate inputs but explicitly do not send or store messages. Links to the business's original live contact/parts/service/appointment forms are retained. Connect the approved backend only after client review. Financing links go to the existing business process; no credit applications are collected here.

## Migration and review gates

This is a substantial design presentation, not a verified complete source migration. Read `CONTENT-AUDIT.md` before publishing.

- Article and legal content consists of structured adaptations/summaries with links to complete original pages. Full originals must be migrated from an authorized site export before replacing the existing site.
- All 405 catalog listing entries are present; 394 contain recovered specification tables. Eleven original detail URLs could not be retrieved or redirected.
- Some original products and galleries have missing or low-resolution images. Localization of known assets is complete; comprehensive visual inspection and recovery of missing originals remain required.
- Confirm contradictory free equipment delivery distances: homepage 60 miles; product FAQs 45 miles. Public presentation copy asks customers to confirm the current service area.
- Review availability, prices, financing, manufacturer claims, guarantees and policies with the business before launch.

## Verification performed

`npm run build` and `npm run verify` cover 474 pages, 405 product routes, 68,610 internal references, unique route paths, viewport metadata, one H1 per page and image alt attributes. Catalog regression checks cover dedicated and legacy categories, natural-language mower search, combined filters and exact deck/horsepower matching. Desktop and phone browser checks cover homepage category access, filtering, sorting, pagination, empty-state recovery, comparison, gallery selection, mobile navigation and preview-only inquiry submission. See `QA-REPORT.md` for the runtime version, scope and remaining work. This is not a complete accessibility, cross-browser or content-preservation audit.
