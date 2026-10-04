# Design

This records the prepared design for continuation. The user has requested clearer shopping navigation, a homepage category catalog and more polished motion. Preserve the palette, typography, exact logo, original content and truthful imagery while improving hierarchy and interaction.

## Color
- background: warm ivory, `--paper: #faf9f4`; secondary `--cream: #f1f0e8`.
- foreground: `--ink: #233c30`; existing deep forest surfaces `--deep: #173c2d` and `--forest: #264c39`.
- muted: `--muted: #687268`.
- hairline: `--line: #dcded4`.
- accent: existing berry `--pink: #b63c65` for focus and selected emphasis.
- accent-on: white.

Keep the prepared colors and bright photographic flowers; introduce no new colors in repairs.

## Type
- display: Instrument Serif with Georgia fallback.
- text: DM Sans with Arial fallback.
- mono: None.
- sizes: retain the existing responsive scale in public/styles.css; product title 52px desktop / 46px phone, body 15px, metadata 10px. Preserve complete model names.

## Radius
- family: all-sharp.
- value: 0.
- exception: Existing circular icon controls retain their circular shape.

## Space
- base: retain the prepared spacing; phone content padding 23px and product gallery gap 15px. Do not introduce a new spacing scale.

## Motion
- duration: 180ms for navigation, disclosure, gallery selection and hover feedback; none when reduced motion is requested.
- easing: ease-out.

Keep content visible without animation or JavaScript. No looping animation, scroll hijacking, or staged reveal that delays shopping. Keep native page navigation immediate and use a small image shift for hover/selection feedback. Document view transitions are excluded because the protected embedded preview aborted navigation. Gallery thumbnails may scroll within their own row; the document must fit the viewport.

## Navigation and hierarchy
- Compact floral homepage introduction, immediate mower action, then a visual category catalog and real product cards.
- Persistent department navigation and direct mower shortcut. Active department, category title and breadcrumbs communicate location.
- Category navigation uses image links as navigation, not decorative feature cards. Full product names and original specifications take priority over generic copy-length rules.
- Product cards use readable model names, key specifications, price, an explicit detail link and a quiet comparison control.
