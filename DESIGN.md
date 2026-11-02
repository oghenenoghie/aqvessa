# Aqvessa

## Overview

**Product:** Aqvessa Technologies, the technology arm of AQVESSA LIMITED
**Surface types:** corporate website, product interfaces (SaaS, internal tools), proposals and documents
**Audience:** Business owners, finance and HR leads and institutions in Nigeria and across Africa first, then buyers in the Gulf and Europe
**Brand character:** Calm, heavy and exact. A warm off-white page, near-black type, one confident orange, small corners and lines instead of shadows.
**Status:** Proposed identity, November 2026. Colours are sampled from the supplied logo files. The type, spacing, radius and motion values are recommendations. No component has been built yet.

### Design Principles

- Evidence over adjectives. Show the figure, the date or the step, and leave the superlative out.
- One orange moment per view. The logo uses its colour once, and so should a screen.
- Lines, not shadows. Structure comes from hairlines, space and type weight.
- Quiet interface, loud logo. Product screens stay neutral so the brand carries the identity.

## Naming

- Running text and interfaces: **Aqvessa**. Capital A, lowercase rest, as in the logo.
- Contracts, invoices, filings and footers: **AQVESSA LIMITED**, the registered name.
- Do not use "Technologies" or any other descriptor in a legal document until its use as a trading name has been confirmed with a qualified Nigerian lawyer or the CAC.

## Colors

Every colour has a light and a dark value. Reference tokens by name, never by hex.

| Token | Light | Dark | Role |
|-------|-------|------|------|
| ground | `#f6f4ef` | `#14161b` | Page background |
| surface | `#fffdfa` | `#1d2026` | Cards, panels, fields |
| surface-sunk | `#ebe8e0` | `#0f1115` | Table headers, code blocks, input wells |
| hairline | `#d9d5cb` | `#2c3139` | 1px dividers and borders (decorative) |
| ink | `#16181d` | `#f6f4ef` | Primary text |
| ink-muted | `#5b6472` | `#a7b0bf` | Secondary text |
| brand | `#c84e0a` | `#f07a30` | Fills only: primary buttons, identity blocks, chart marks |
| brand-text | `#b5440a` | `#f07a30` | Orange used as text or a thin line: links, active labels |
| on-brand | `#ffffff` | `#1a0c04` | Text on a brand fill |
| brand-deep | `#9a3b07` | `#ff9a5c` | Hover and pressed state for brand |
| brand-tint | `#fae8dc` | `#3a1f10` | Selected rows, soft highlights |
| signal-success | `#1f6b45` | `#5fc08a` | Confirmed, paid, healthy |
| signal-warning | `#7a5b00` | `#e3b341` | Pending, expiring |
| signal-danger | `#a3262d` | `#f08a8f` | Failed, overdue, destructive |

### Contrast checks

| Pair | Light | Dark |
|------|-------|------|
| ink on ground | 16.2:1 | 16.5:1 |
| ink-muted on ground | 5.4:1 | 8.3:1 |
| brand-text on ground | 5.0:1 | 6.5:1 |
| brand-text on surface | 5.5:1 | 5.9:1 |
| on-brand on brand | 4.6:1 | 6.9:1 |
| brand as text on ground | 4.2:1, fails | 6.5:1 |

The last row is why `brand-text` exists. In light mode `brand` is for fills only.

### Colour rules

- Orange covers about one tenth of any screen at most.
- Signal colours always appear with a text label or icon. Never rely on colour alone.
- `signal-danger` sits close to brand orange in hue. Never use brand orange for errors or warnings.
- The logo orange and ink are fixed. Do not tint or recolour the logo.

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

**Border radius:** `radius-sm: 2px` (identity blocks, tags) · `radius-md: 4px` (buttons, inputs, cards) · `radius-lg: 8px` (modals, large panels)

App-store icons are the one exception and use the large rounded tile supplied with the logo. Do not copy that radius into the interface.

## Elevation

None. Aqvessa uses a 1px `hairline` border on `surface` instead of a shadow. Overlays such as menus and modals add a `hairline` border and sit on `surface`, with a dimmed `ground` behind them.

## Motion

Proposed values, not yet in the token file.

- **duration-fast:** `120ms` for hover and press feedback
- **duration-base:** `200ms` for fades and small slides
- **easing:** `cubic-bezier(0.4, 0, 0.2, 1)`
- No bouncing, looping or parallax. When `prefers-reduced-motion` is set, remove movement and keep only opacity changes.

## Focus

A 2px outline in `brand-text`, offset 3px, on every interactive element when focused by keyboard. It must reach 3:1 against its surroundings in both themes.

## Logo

| File | Use | Ground |
|------|-----|--------|
| aqvessa-technologies-primary | Full lockup | Light ground |
| aqvessa-technologies-reversed | Full lockup | Dark ground |
| aqvessa-compact-mark | A with ring, for favicons, avatars, anything under 120px wide | Light ground |
| aqvessa-app-icon-orange, aqvessa-app-icon-ink | App store icons | Platform |

- Clear space: the height of the A on every side.
- Minimum width for the full lockup: 120px. Below that, switch to the compact mark.
- Do not recolour the A, alter the ring, set the word in capitals, stretch the lockup, or place it on a busy photograph.
- The current files are PNGs on opaque grounds. Vector and transparent masters are still needed.

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
- Design the dark theme on purpose and test every component in both themes.
- Test every component at the smallest and largest breakpoint before shipping.

### Don't

- Do not introduce colours outside the palette.
- Do not use arbitrary spacing values.
- Do not mix border-radius values beyond the three defined.
- Do not use shadows for structure.
- Do not use brand orange for errors, warnings or body text.
- Do not stack more than one primary button in a view.
- Do not make claims about clients, awards, scale or certifications that cannot be shown.

## Writing Tone

Precise, plain and understated. Short sentences, concrete nouns, numbers where a number exists. "We" for Aqvessa, "you" for the reader. British English: organisation, licence, programme. Currency leads with the symbol or code: ₦1,250,000, USD 3,100. Dates read 2 November 2026. No superlatives, no exclamation marks, no emoji.

## Authoring Workflow

When creating or updating a component guideline for this system, follow this sequence:

1. **State the intent.** One sentence on what the component does and why it exists.
2. **Map tokens.** List every colour, spacing, typography and radius token it uses. No raw values.
3. **Define anatomy.** Break it into named parts with their token assignments.
4. **Specify states.** Default, hover, focus-visible, active, disabled, loading, error, empty. Cover both themes.
5. **Describe interactions.** Keyboard, pointer and touch, including long content, overflow and truncation.
6. **Add accessibility criteria.** Testable pass/fail checks, such as "focus ring must reach 3:1 contrast".
7. **List anti-patterns.** Concrete misuse with a reason for each.
8. **Close with a QA checklist.** See Definition of Done.

## Required Output Structure

Every component guideline must contain these sections, in order:

1. Overview: purpose, when to use, when not to use.
2. Tokens and foundations: every token used, with light and dark values.
3. Anatomy and variants: named parts, variant matrix, responsive behaviour.
4. States and interactions: full state table and keyboard, pointer and touch behaviour.
5. Accessibility: ARIA, contrast, focus management, screen-reader behaviour.
6. Content guidelines: copy length, tone, capitalisation, placeholder text.
7. Anti-patterns: what not to build, with reasoning.

## Component Requirements

Every component must:

- Reference only tokens defined above. No hardcoded hex, px or font values.
- Define all interactive states in both light and dark themes.
- Specify behaviour at the smallest and largest supported breakpoint.
- Handle empty state, overflow, truncation and maximum content length.
- Support keyboard navigation (Tab, Enter, Escape, arrow keys where applicable).
- Document ARIA roles, labels and live-region behaviour where relevant.
- Respect `prefers-reduced-motion`.
- Use `tabular-nums` wherever digits line up in columns.

## Definition of Done

A component is not complete until every item is checked:

- Renders correctly in its default state in both themes.
- All states documented and visually verified.
- All visual values use design tokens, with zero hardcoded values.
- Keyboard navigation works without a pointer.
- No critical accessibility violations (contrast, ARIA, focus order).
- Tested at the smallest and largest breakpoint.
- Anti-patterns section lists at least one concrete misuse.
- Documentation covers purpose, usage, props or API, and limitations.

## Open items

- Vector (SVG) and transparent masters of the lockup, reversed lockup and compact mark.
- Confirmation of the orange and ink colourway, and of the logo's typeface.
- Legal check on "Technologies" and any other descriptors.
- Motion values to be added to the token file.
- Arabic support (IBM Plex Sans Arabic or Noto Sans Arabic) if the Gulf market needs it.
