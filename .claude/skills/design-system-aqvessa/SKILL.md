---
name: design-system-aqvessa
description: >
  Apply the Aqvessa design system when building or updating UI, documents or
  marketing pages. Use when creating components, choosing colours or typography,
  writing copy, placing the logo, or reviewing designs against the Aqvessa tokens.
---

# Aqvessa: Design System Skill

## When to Use

- Building new UI components or pages for Aqvessa products or the corporate site.
- Reviewing or updating existing styles.
- Choosing colours, typography or spacing for proposals, decks and documents.
- Placing the logo or writing the company name.
- Checking designs and copy against the token set.

## Context

- **Company:** AQVESSA LIMITED, a Nigerian private company limited by shares. Trades under the Aqvessa Technologies logo.
- **Surfaces:** corporate website, product interfaces, documents.
- **Audience:** business owners, finance and HR leads and institutions in Nigeria and Africa first, then the Gulf and Europe.
- **Character:** calm, heavy and exact. Warm off-white, near-black type, one orange, small corners, hairlines instead of shadows.
- **Status:** proposed identity. Colours are sampled from the supplied logo. No component is built yet. Do not describe any feature as shipped.

## Tokens

### Colors (light / dark)

| Token | Light | Dark | Role |
|-------|-------|------|------|
| ground | `#f6f4ef` | `#14161b` | Page background |
| surface | `#fffdfa` | `#1d2026` | Cards, panels, fields |
| surface-sunk | `#ebe8e0` | `#0f1115` | Table headers, code, input wells |
| hairline | `#d9d5cb` | `#2c3139` | Borders and dividers |
| ink | `#16181d` | `#f6f4ef` | Primary text |
| ink-muted | `#5b6472` | `#a7b0bf` | Secondary text |
| brand | `#c84e0a` | `#f07a30` | Fills only |
| brand-text | `#b5440a` | `#f07a30` | Orange text, links, thin lines |
| on-brand | `#ffffff` | `#1a0c04` | Text on a brand fill |
| brand-deep | `#9a3b07` | `#ff9a5c` | Hover, pressed |
| brand-tint | `#fae8dc` | `#3a1f10` | Selected rows, soft highlights |
| signal-success | `#1f6b45` | `#5fc08a` | Success (with a label) |
| signal-warning | `#7a5b00` | `#e3b341` | Warning (with a label) |
| signal-danger | `#a3262d` | `#f08a8f` | Error (with a label) |

### Typography

**Font stack:** Inter Tight (display), Inter (text), JetBrains Mono (data).

| Style | Size / line | Weight | Tracking |
|-------|-------------|--------|----------|
| display-xl | 72 / 72 | 700 | -0.035em |
| display-lg | 52 / 56 | 700 | -0.03em |
| heading-lg | 36 / 42 | 600 | -0.02em |
| heading-md | 26 / 32 | 600 | -0.015em |
| body-lg | 18 / 28 | 400 | 0 |
| body | 16 / 24 | 400 | 0 |
| body-sm | 14 / 20 | 400 | 0 |
| label | 12 / 16, capitals | 500 | 0.12em |
| descriptor | 14 / 20, capitals | 400 | 0.4em |
| caption | 12 / 16 | 400 | 0 |
| mono | 14 / 20 | 400 | 0 |
| mono-sm | 12 / 16 | 400 | 0 |

Display styles use Inter Tight, text styles use Inter, mono styles use JetBrains Mono.

### Spacing

**Base unit:** 4px

`space-1: 4px` · `space-2: 8px` · `space-3: 12px` · `space-4: 16px` · `space-6: 24px` · `space-8: 32px` · `space-12: 48px` · `space-16: 64px`

### Shapes

`radius-sm: 2px` · `radius-md: 4px` · `radius-lg: 8px`

### Elevation

None. Use a 1px `hairline` border on `surface`.

### Motion

`duration-fast: 120ms` · `duration-base: 200ms` · easing `cubic-bezier(0.4, 0, 0.2, 1)`. Remove movement under `prefers-reduced-motion`.

### Focus

2px `brand-text` outline, offset 3px, on keyboard focus.

## Logo

- Files: primary lockup (light ground), reversed lockup (dark ground), compact mark (under 120px wide), two app icons.
- Clear space is the height of the A. Minimum full-lockup width is 120px.
- Never recolour, stretch, set the word in capitals, or put it on a busy photograph.
- Swap the primary and reversed lockups with the theme. Each PNG carries its own ground, which equals `ground` in that theme.

## Naming and Copy

- Write **Aqvessa** in running text and interfaces. Write **AQVESSA LIMITED** in contracts, invoices, filings and footers.
- Do not use "Technologies" or other descriptors in legal documents until the trading-name position is confirmed by a qualified professional.
- British English. Sentence-case headlines. Capitals only for `label`, `descriptor` and acronyms.
- Currency: ₦1,250,000 and USD 3,100. Dates: 2 November 2026.
- No superlatives, no exclamation marks, no emoji, and no claims about clients, awards, scale or certifications without evidence.

## Constraints

### Always

- Use tokens from the tables above and do not introduce new values.
- Design every component for both themes.
- Include hover, focus-visible and disabled states on interactive elements.
- Follow the 4px spacing grid.
- Meet WCAG 2.2 AA contrast: 4.5:1 for text, 3:1 for large text, icons and focus rings.
- Pair every signal colour with a text label or icon.
- Use tabular figures wherever digits align.

### Never

- Do not use brand orange for body text, errors or warnings. Use `brand-text` for orange text and a signal token for status.
- Do not use shadows for structure.
- Do not mix radii beyond the three defined.
- Do not introduce colours outside the palette.
- Do not use arbitrary spacing values.
- Do not stack more than one primary button in a view.
- Do not use more than one display-xl per page.
- Do not centre-align body text or code blocks.

## Tone

Precise, plain and understated. Short sentences, concrete nouns, numbers where a number exists. "We" for Aqvessa, "you" for the reader.

## Authoring Workflow

1. State intent: one sentence on purpose.
2. Map tokens: list every token used, no raw values.
3. Define anatomy: named parts with token assignments.
4. Specify states: default, hover, focus-visible, active, disabled, loading, error, empty, in both themes.
5. Describe interactions: keyboard, pointer, touch, edge cases.
6. Add accessibility criteria: testable pass/fail checks.
7. List anti-patterns: concrete misuse with a reason.
8. Close with the Definition of Done.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behaviour
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle empty, overflow, truncation and maximum content.
- Include keyboard navigation.
- Document ARIA roles and labels.
- Respect `prefers-reduced-motion`.

## Definition of Done

- Default state renders in both themes (smoke test).
- All states visually verified.
- Zero hardcoded visual values. Tokens only.
- Keyboard navigation works without a pointer.
- No critical accessibility violations.
- Tested at the smallest and largest breakpoint.
- At least one anti-pattern documented.
- Purpose, usage and limitations documented.
