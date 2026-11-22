# Aqvessa

## Overview

**Product:** Aqvessa Technologies, the technology arm of AQVESSA LIMITED
**Surface types:** corporate website, product interfaces (SaaS, internal tools), proposals and documents
**Audience:** Business owners, finance and HR leads and institutions in Nigeria and across Africa first, then buyers in the Gulf and Europe
**Brand character:** Calm, heavy and exact. A near-black canvas, off-white type, one lime accent, small corners and lines instead of shadows.
**Status:** November 2026. The corporate site (`web/corporate-site`) is built on the dark lime palette below, using the November 2026 logo. The colour and radius values match `src/app/globals.css`. The type and motion values are recommendations. The earlier orange palette is retired.

### Design Principles

- Evidence over adjectives. Show the figure, the date or the step, and leave the superlative out.
- Lime marks what matters. The logo uses one accent colour, and a screen should use it with the same restraint.
- Lines, not shadows. Structure comes from hairlines, space and type weight.
- Quiet interface, loud logo. Product screens stay neutral so the brand carries the identity.

## Naming

- Running text and interfaces: **Aqvessa**. Capital A, lowercase rest, as in the logo.
- Contracts, invoices, filings and footers: **AQVESSA LIMITED**, the registered name.
- Do not use "Technologies" or any other descriptor in a legal document until its use as a trading name has been confirmed with a qualified Nigerian lawyer or the CAC.

## Colors

The site is dark only (`color-scheme: dark`). Reference tokens by name, never by hex.

| Token | Value | Role |
|-------|-------|------|
| ground | `#101318` | Page background |
| surface | `#191e25` | Cards, panels, fields |
| surface-sunk | `#0b0f14` | Table headers, code blocks, input wells |
| hairline | `#303943` | 1px dividers and borders (decorative) |
| ink | `#f3f6f0` | Primary text |
| ink-muted | `#a6b0b8` | Secondary text |
| brand | `#b7ff62` | Lime: fills, links, active labels, focus rings, chart marks |
| brand-text | `#b7ff62` | Lime used as text or a thin line |
| on-brand | `#10150b` | Text on a brand fill |
| brand-deep | `#9be94b` | Hover and pressed state for brand |
| brand-tint | `#26351b` | Selected rows, soft highlights |
| signal-success | `#76d9a0` | Confirmed, paid, healthy |
| signal-warning | `#f0c76a` | Pending, expiring |
| signal-danger | `#ff858b` | Failed, overdue, destructive |
| deep | `#090c10` | Deepest band: footer, reversed sections |
| deep-surface | `#11171d` | Cards on the deep band |
| deep-line | `#28313a` | Dividers on the deep band |
| deep-ink / deep-muted | `#f3f6f0` / `#a6b0b8` | Text on the deep band |
| deep-brand / on-deep-brand | `#b7ff62` / `#10150b` | Lime fill and its text on the deep band |

No light theme is defined. For documents on a light ground, use the single-colour ink lockup on `#f6f4ef` with dark ink text. Do not set lime as text or a thin line on a light ground: it fails contrast.

### Contrast checks

| Pair | Ratio |
|------|-------|
| ink on ground | 17.1:1 |
| ink-muted on ground | 8.4:1 |
| ink-muted on surface | 7.6:1 |
| brand on ground | 15.5:1 |
| brand on surface | 14.0:1 |
| on-brand on brand | 15.4:1 |
| on-brand on brand-deep | 12.5:1 |
| ink on brand-tint | 12.0:1 |
| deep-ink on deep | 18.0:1 |
| hairline on ground | 1.6:1, decorative only |

### Colour rules

- Lime covers a small part of any screen: calls to action, links, active states and the logo's A.
- Signal colours always appear with a text label or icon. Never rely on colour alone.
- Never use lime for errors or warnings.
- The logo's lime and off-white are fixed. Do not tint or recolour the logo.

## Typography

**Font stack:** Inter Tight (display), Inter (text), JetBrains Mono (data). All are open-licence and available from Google Fonts. Inter Tight is the closest free match to the logo wordmark; the logo's actual typeface is unconfirmed.

| Style | Family | Size / line | Weight | Tracking | Usage |
|-------|--------|-------------|--------|----------|-------|
| display-xl | Inter Tight | 72 / 72 | 700 | -0.035em | One per page: hero or cover title |
| display-lg | Inter Tight | 52 / 56 | 700 | -0.03em | Section openers |
| heading-lg | Inter Tight | 36 / 42 | 600 | -0.02em | Page titles |
| heading-md | Inter Tight | 26 / 32 | 600 | -0.015em | Subsections, card headings |
| body-lg | Inter | 18 / 28 | 400 | 0 | Lead paragraphs |
| body | Inter | 16 / 24 | 400 | 0 | Default text |
| body-sm | Inter | 14 / 20 | 400 | 0 | Dense UI, table cells |
| label | Inter | 12 / 16 | 500 | 0.12em | Capitals: eyebrows, field labels |
| descriptor | Inter | 14 / 20 | 400 | 0.4em | Capitals: the line under the wordmark. Once per page |
| caption | Inter | 12 / 16 | 400 | 0 | Footnotes, sources |
| mono | JetBrains Mono | 14 / 20 | 400 | 0 | Amounts, references, code. Tabular figures |
| mono-sm | JetBrains Mono | 12 / 16 | 400 | 0 | Identifiers, timestamps |

**Weight scale:** 400, 500, 600, 700. Display 600 and 700, text 400 and 500, mono 400.
**Rules:** sentence case for headlines. Capitals only for `label` and `descriptor`. Reading lines 60 to 75 characters. Tabular figures wherever digits align.

## Spacing

**Base unit:** 4px

`space-1: 4px` · `space-2: 8px` · `space-3: 12px` · `space-4: 16px` · `space-6: 24px` · `space-8: 32px` · `space-12: 48px` · `space-16: 64px`

## Shapes

**Border radius:** `radius-sm: 2px` (identity blocks, tags) · `radius-md: 6px` (buttons, inputs, cards) · `radius-lg: 12px` (modals, large panels)

App-store icons are the one exception and use the large rounded tile supplied with the logo. Do not copy that radius into the interface.

## Elevation

None. Aqvessa uses a 1px `hairline` border on `surface` instead of a shadow. Overlays such as menus and modals add a `hairline` border and sit on `surface`, with a dimmed `ground` behind them.

## Motion

Recommended values. The site defines `--ease-standard` in `globals.css`; durations are not yet tokens.

- **duration-fast:** `120ms` for hover and press feedback
- **duration-base:** `200ms` for fades and small slides
- **easing:** `cubic-bezier(0.2, 0.7, 0.2, 1)`
- No bouncing, looping or parallax. When `prefers-reduced-motion` is set, remove movement and keep only opacity changes.

## Focus

A 2px outline in `brand`, offset 4px, on every interactive element when focused by keyboard. It must reach 3:1 against its surroundings on `ground` and on the `deep` band.

## Logo

| File | Use | Ground |
|------|-----|--------|
| aqvessa-technologies-dark | Full lockup: lime A, off-white wordmark | Dark ground |
| aqvessa-technologies-ink | Full lockup: single colour ink | Light ground |
| aqvessa-mark-and-icon | Sheet: app icon tiles (lime, dark, light) and the bare A at three sizes | Platform |

- Clear space: the height of the A on every side.
- Minimum width for the full lockup: 120px. Below that, switch to the bare A with its ring.
- Do not recolour the A, alter the ring, set the word in capitals, stretch the lockup, or place it on a busy photograph.
- The files are PNGs on opaque grounds. Vector and transparent masters are still needed.

## Components

Proposed starting set. None is built.

- **Button:** primary (brand fill), secondary (hairline border), text
- **Link:** `brand-text`, underlined
- **Input:** text, select, textarea, with error and helper text
- **Table:** sunk header, hairline rows, right-aligned mono amounts
- **Card:** `surface` with hairline
- **Tag and status:** signal colours with a text label
- **Navigation:** top bar and side menu
- **Callout:** `brand-tint` for notes, signal colours for status
- **Logo:** lockup, reversed lockup and compact mark, swapping with the theme

## Do's and Don'ts

### Do

- Reference tokens by name, not raw values.
- Define all interactive states: default, hover, focus-visible, active, disabled.
- Use the spacing scale for all padding, margin and gap values.
- Write content in sentence case. Reserve capitals for `label`, `descriptor` and acronyms.
- Design every component on `ground` and on the `deep` band, and test both.
- Test every component at the smallest and largest breakpoint before shipping.

### Don't

- Do not introduce colours outside the palette.
- Do not use arbitrary spacing values.
- Do not mix border-radius values beyond the three defined.
- Do not use shadows for structure.
- Do not use lime for errors, warnings or body text.
- Do not stack more than one primary button in a view.
- Do not make claims about clients, awards, scale or certifications that cannot be shown.

## Writing Tone

Precise, plain and understated. Short sentences, concrete nouns, numbers where a number exists. "We" for Aqvessa, "you" for the reader. British English: organisation, licence, programme. Currency leads with the symbol or code: ₦1,250,000, USD 3,100. Dates read 2 November 2026. No superlatives, no exclamation marks, no emoji.

## Authoring Workflow

When creating or updating a component guideline for this system, follow this sequence:

1. **State the intent.** One sentence on what the component does and why it exists.
2. **Map tokens.** List every colour, spacing, typography and radius token it uses. No raw values.
3. **Define anatomy.** Break it into named parts with their token assignments.
4. **Specify states.** Default, hover, focus-visible, active, disabled, loading, error, empty. Cover `ground` and the `deep` band.
5. **Describe interactions.** Keyboard, pointer and touch, including long content, overflow and truncation.
6. **Add accessibility criteria.** Testable pass/fail checks, such as "focus ring must reach 3:1 contrast".
7. **List anti-patterns.** Concrete misuse with a reason for each.
8. **Close with a QA checklist.** See Definition of Done.

## Required Output Structure

Every component guideline must contain these sections, in order:

1. Overview: purpose, when to use, when not to use.
2. Tokens and foundations: every token used, with its value.
3. Anatomy and variants: named parts, variant matrix, responsive behaviour.
4. States and interactions: full state table and keyboard, pointer and touch behaviour.
5. Accessibility: ARIA, contrast, focus management, screen-reader behaviour.
6. Content guidelines: copy length, tone, capitalisation, placeholder text.
7. Anti-patterns: what not to build, with reasoning.

## Component Requirements

Every component must:

- Reference only tokens defined above. No hardcoded hex, px or font values.
- Define all interactive states on `ground` and on the `deep` band.
- Specify behaviour at the smallest and largest supported breakpoint.
- Handle empty state, overflow, truncation and maximum content length.
- Support keyboard navigation (Tab, Enter, Escape, arrow keys where applicable).
- Document ARIA roles, labels and live-region behaviour where relevant.
- Respect `prefers-reduced-motion`.
- Use `tabular-nums` wherever digits line up in columns.

## Definition of Done

A component is not complete until every item is checked:

- Renders correctly in its default state on `ground` and on `deep`.
- All states documented and visually verified.
- All visual values use design tokens, with zero hardcoded values.
- Keyboard navigation works without a pointer.
- No critical accessibility violations (contrast, ARIA, focus order).
- Tested at the smallest and largest breakpoint.
- Anti-patterns section lists at least one concrete misuse.
- Documentation covers purpose, usage, props or API, and limitations.

## Open items

- Vector (SVG) and transparent masters of the lockups and the mark.
- Confirmation of the lime colourway and of the logo's typeface.
- Legal check on "Technologies" and any other descriptors.
- Motion values to be added to the token file.
- Arabic support (IBM Plex Sans Arabic or Noto Sans Arabic) if the Gulf market needs it.
