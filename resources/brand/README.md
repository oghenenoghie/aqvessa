# Aqvessa brand resources

Logo files and design tokens for Aqvessa. The full rules are in [`DESIGN.md`](../../DESIGN.md) at the repository root.

## Files

| Path | What it is |
| --- | --- |
| `tokens.json` | Colour (dark canvas), type, spacing and radius tokens |
| `logos/aqvessa-technologies-dark.png` | Full lockup for dark grounds (`#101318`): lime A, off-white wordmark |
| `logos/aqvessa-technologies-ink.png` | Full lockup for light grounds (`#f6f4ef`): single colour ink |
| `logos/aqvessa-mark-and-icon.png` | Sheet with the app icon tiles (lime, dark, light) and the bare A at three sizes, for favicons, avatars and spaces under 120px wide |

## Notes

- All logo files are 2560 x 1280 PNGs on opaque backgrounds. There are no transparent versions and no vectors yet, so place each on the ground it was drawn on.
- The site's own copies are in `web/corporate-site/public/brand/` (lockups, cropped to 580 x 180 on the site's ground colours) and `web/corporate-site/src/app/` (`icon.png`, `apple-icon.png`, `opengraph-image.png`).
- Colours match `web/corporate-site/src/app/globals.css`: lime `#b7ff62`, ground `#101318`, ink `#f3f6f0`, muted `#a6b0b8`.
- Clear space is the height of the A on every side. Keep the full lockup at 120px wide or more, and use the bare A below that.
- The app icon tiles have rounded corners for app-store use. Do not copy that radius onto other interface elements.
- Write **Aqvessa** in running text and **AQVESSA LIMITED** in legal documents.

## Still needed

- Vector (SVG) and transparent PNG masters of the lockup, reversed lockup and compact mark.
- Confirmation of the logo's typeface. Inter Tight is the closest free match to the wordmark.
- A legal check on using "Technologies" as a trading descriptor.
