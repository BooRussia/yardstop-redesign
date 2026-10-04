# Content and launch audit

Reviewed October 4, 2026. Current original catalog listings: 405 across 34 pagination pages. Discovered journal articles:29. Footer policies:4.

## Included

All 405 original catalog routes and their listing facts are represented. 394 have recovered specification tables. 328 have original image URLs. Navigation includes all original top-level groups and subpages, plus the SunCoast and STIHL availability destinations and shared purchase information.

## Unfinished source migration

Articles and legal policies are condensed adaptations with links to full originals. They are not complete full-text migrations. Some product marketing prose is also condensed. Raw WordPress block layouts, unexposed gallery/background images, original video embeds, and the complete lead-system behavior were not available through the text retrieval channel. An authorized website export is the reliable next step for a word-for-word and asset-by-asset reconciliation.

14 product details rely on search-index evidence, were unavailable, or redirected:

- Hustler Raptor X 42″ Zero Turn Mower – 939694: https://yardstopinc.com/shop/hustler/hustler-raptor-x-42-zero-turn-mower-939694/ (source_redirect)
- Bad Boy ZT Avenger 60″ Kohler 7000 Zero-Turn Mower BAZ60KT745: https://yardstopinc.com/shop/bad-boy/bad-boy-zt-avenger-60-kohler-7000-zero-turn-mower-baz60kt745/ (unavailable)
- Bad Boy ZT Elite 48″ Kawasaki FR730 Zero-Turn Mower BZS48FR730: https://yardstopinc.com/shop/bad-boy/bad-boy-zt-elite-48-kawasaki-fr730-zero-turn-mower-bzs48fr730/ (search_index)
- Bad Boy Maverick 48″ Kohler Zero-Turn Mower BMR48ZT740: https://yardstopinc.com/shop/bad-boy/bad-boy-maverick-48-kohler-zero-turn-mower-bmr48zt740/ (unavailable)
- Bad Boy Revolt 54″ Stand-On Vanguard EFI BRV5428EVG: https://yardstopinc.com/shop/bad-boy/bad-boy-outlaw-revolt-54-stand-on-vanguard-efi-brv5428evg/ (search_index)
- Bad Boy Rebel 54″ Kawasaki EFI Zero-Turn Mower BRB54EVO781: https://yardstopinc.com/shop/bad-boy/bad-boy-rebel-54-kawasaki-efi-zero-turn-mower-brb54evo781/ (search_index)
- Bad Boy Rebel 61″ Kawasaki EFI Zero-Turn Mower BRB61EVO820: https://yardstopinc.com/shop/bad-boy/bad-boy-rebel-61-kawasaki-efi-zero-turn-mower-brb61evo820/ (unavailable)
- Cub Cadet PRO X 660 Commercial Stand-On Mower: https://yardstopinc.com/shop/cub-cadet/cub-cadet-pro-x-660-commercial-stand-on-mower-2/ (unavailable)
- Bad Boy Revolt X 54″ Stand-On Kawasaki EFI – BRVX54EVO781: https://yardstopinc.com/shop/bad-boy/bad-boy-revolt-x-54-stand-on-kawasaki-efi-brvx54evo781/ (unavailable)
- Bad Boy Revolt X 61″ Stand-On Vanguard EFI – BRVX6140EVG: https://yardstopinc.com/shop/bad-boy/bad-boy-revolt-x-61-stand-on-vanguard-efi-brvx6140evg/ (unavailable)
- Ferris ISX™ 3300 72″ Zero Turn Mower: https://yardstopinc.com/shop/ferris/ferris-isx-3300-72-zero-turn-mower-4/ (source_redirect)
- Ask About Cash Discount Bad Boy 40 Series 4025 Compact Tractor w/ Industrial Tires – BB4025HI: https://yardstopinc.com/shop/bad-boy/bad-boy-40-series-4025-compact-tractor-w-industrial-tires-bb4025hi/ (source_redirect)
- Ask About Cash Discount Bad Boy 40 Series 4035 Compact Tractor CAB w/ Industrial Tires – BB4035CHI: https://yardstopinc.com/shop/bad-boy/bad-boy-40-series-4035-compact-tractor-cab-w-industrial-tires-bb4035chi/ (source_redirect)
- Ferris IS® 6200 72″ Zero Turn Mower: https://yardstopinc.com/shop/ferris/ferris-is-6200-72-zero-turn-mower/ (unavailable)

77 listings have no recovered exact product image. Do not generate or substitute a different equipment model as proof of the item for sale.

## Business details to confirm

- Free equipment delivery radius differs: 60 miles on homepage, 45 miles in shared product FAQs. Presentation copy asks the customer to confirm the area.
- All price, availability, finance, guarantee, return and service statements need business confirmation before launch.
- One Bandit product source puts its SKU in the Make field; display brand was normalized to Bad Boy and source evidence retained in JSON.
- Technical article inconsistencies and review notes are recorded per article in blog.json.

## Validation and deployment limits

Build and static structural checks pass on Node.js 22.23.3. The source is uploaded at the root of https://github.com/BooRussia/yardstop-redesign, with `package.json` at the top level. All 20 initial source files were verified against GitHub by Git blob hash (import `436752b`).

All 603 recorded source image URLs were localized successfully without generating substitute equipment imagery. The unchanged original logo is included. This does not resolve the 77 listings without recovered exact photos or establish full original-gallery coverage. Visual suitability, image resolution and original-page reconciliation still require review.

Initial browser checks passed on desktop and at mobile widths of 390px and 360px. Search, inventory filtering/sorting/pagination, a product image gallery, mobile navigation, form defaults and preview-only submission were exercised. A malformed form selector was repaired. See `QA-REPORT.md`; broad accessibility and cross-browser testing remain incomplete.

Protected Vercel publishing is operational in the existing voxel-designs project. CLI sign-in restored team access; Node.js 22, Other, `npm run build` and `dist` are configured. Only the `preview/yard-stop-review` branch publishes automatically. The protected branch URL is https://yardstop-redesign-git-preview-yard-stop-review-voxel-designs.vercel.app/. Hosted build, home/catalog/product checks, authentication redirect and noindex response headers were verified. The temporary first-deployment production builds were removed; no company domain was attached or modified. The separate ChatGPT connector still needs its Vercel OAuth connection reauthorized for this team; this no longer blocks Git/CLI publishing. See README.md for the exact connection repair and QA-REPORT.md for verification scope.
