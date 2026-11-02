---
name: plutus-marketing-site
description: Design and build rules for the Plutus Technologies marketing website (plutusng.com), where the Plutus HR & payroll platform is sold in Cloud and Desktop editions. Use for any page, section, component or copy on the public site.
---

# Plutus Technologies — Marketing Site

The public site sells the Plutus HR & payroll platform in two editions, **Plutus Cloud** (online) and **Plutus Desktop** (offline). It is not the product UI. The product uses the "Ledger" design system (green, Manrope). The site uses the **letterhead brand**: black, gold and a serif wordmark.

Reference build: the published prototype `plutus.html` (single page, all sections below). Port it to Next.js App Router + Tailwind + shadcn/ui. Keep the tokens and section order.

## 1. Patterns taken from the reference sites

The ten reference sites were studied for patterns. None of them is copied. Each row is one pattern and where it shows up on the Plutus site.

| Reference | Pattern taken | Where it lives on Plutus |
|---|---|---|
| Accenture | The hero states a thesis in one line. Full-bleed dark "chapter" sections for weight | Hero "Payroll, correct by construction." Dark Compliance Engine and Contact sections |
| Thoughtworks | Show the engineering instead of describing it | Live PAYE derivation in the hero: sliders, five steps, tax by band |
| IBM | Structured data as proof: precise tables, mono labels, grid discipline | Scheme matrix (base, rate, borne by, authority, deadline), PAYE band table, `NG-2026.1` rule-version tags |
| Deloitte | Regulatory briefing as the reason to act now | "The 2026 reform" section: four changes and a pull quote |
| Capgemini | Story told in chapters, one idea per section | Section order in §4. Each section has one eyebrow, one H2 and one job |
| Cognizant | Calm corporate navigation, utility bar, clear primary CTA | Black utility bar with the contact line, sticky header, gold "Book a demo" |
| EPAM | Credibility through engineering decisions | "Built like a financial instrument": six decisions with mono tags |
| Globant | One high-impact visual moment | Only one: the animated band bars in the hero instrument. No 3D or WebGL (see anti-patterns) |
| ServiceNow | Workflow told per role and persona | "Who it's for" tabs: Admin, Payroll Manager, HR Manager, Employee, each with a screen mock |
| Salesforce | SaaS conversion: editions, tiers, repeated CTAs, demo path | Cloud vs Desktop edition cards, three pricing tiers, a CTA in every major section |

## 2. Brand tokens (from the letterhead)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--ink` | `#0B0C0E` | `#F2EEE6` | Text, the black half of the P mark |
| `--paper` | `#FDFCFA` | `#0C0D0F` | Page |
| `--surface` | `#FFFFFF` | `#131417` | Cards, panels |
| `--sunk` | `#F5F3EE` | `#18191C` | Alternating sections, panel headers |
| `--line` | `#E6E2D8` | `#26272A` | Every separation |
| `--gold` | `#DEA12F` | `#E2AA3C` | Rules, marks, primary button fill, bars. Sampled from the letterhead (222,161,47) |
| `--gold-text` | `#8A5E0F` | `#E8B654` | Gold used as **text** on light backgrounds. `--gold` fails contrast as small text on white |
| `--deep` | `#0B0C0E` | `#08090A` | Full-bleed dark sections, utility bar, footer |

Status colours (good/warn/bad) always appear as text on their own tint, as in Ledger.

**Type**

- Wordmark: **Cinzel** 600, tracking .08em. Used only for "PLUTUS" and small caps labels such as office names.
- Display: **Cormorant Garamond** 600, with italic 500 for the gold emphasis in H1. Use only at 26px and above.
- Body/UI: **Nunito Sans** 400–800. It is the closest match to the letterhead's contact text.
- Data: **IBM Plex Mono** for rule versions, rates and derivation figures. Use `tabular-nums` on every column of figures.
- Eyebrow: 12px, 800, uppercase, tracking .2em, with a 28×2px gold rule before it.

**Logo mark.** An inline SVG `<symbol id="mark">` redrawn from the letterhead. The black P is stroked with `currentColor`, so it follows the theme. The inner stem and flag are fixed gold `#DEA12F`. Lockup: mark, then a 1px gold vertical rule, then the PLUTUS wordmark over "ENTERPRISE · BUSINESS · SOLUTIONS". Do not use a raster crop of the letterhead.

## 3. Rules that are not negotiable

- **Borders only.** No box-shadows, no gradients, no glassmorphism. Depth comes from `--line` and the paper/surface/sunk steps.
- **Radii:** 6 (chips), 10 (buttons), 14 (cards). Pills are fully rounded.
- **One bold moment per page**, which is the hero instrument. Motion is one staggered rise on load and bar-width transitions. Everything is off under `prefers-reduced-motion`.
- **Every statutory figure comes from the Plutus statutory reference** (`plutus-payroll-platform/references/nigeria-statutory-compliance.md`). Never type a rate from memory. Tag figures with the rule version `NG-2026.1`.
- The framework is called **"Nigeria Tax Act 2025, effective 1 January 2026"**.
- **Nothing on the roadmap is written in the present tense.** Ghana (Q1 2027) and Kenya (Q3 2027) carry warn pills.
- **Demo data is labelled "Sample data".** Never name real banks or vendors as "connected".
- Footer disclaimer, always: "Plutus applies statutory rules; it does not provide tax or legal advice."
- Every public route gets `generateMetadata()`. Server Components by default; only the calculator, role tabs, mobile nav and copy buttons are client components.

## 4. Page architecture (in this order)

1. **Utility bar** (deep): Tax Act line, email, phone, "Lagos · Hemel Hempstead".
2. **Header** (sticky): lockup; Product, Compliance, Cloud & Desktop, Who it's for, Pricing, Contact; "Download" (line) and "Book a demo" (gold). Collapses to a menu button below 1180px.
3. **Hero**: eyebrow, H1, sub, three CTAs (Book a demo / Open Plutus Cloud / Download Desktop), three checks. On the right, the **PAYE instrument**.
4. **Stat strip**: 7 schemes · 37 PAYE jurisdictions · 27 modules · 2 editions.
5. **The 2026 reform**: four-cell grid (bands, CRA abolished, TIN mandatory, NRS digital) and a pull quote.
6. **Platform**: three pillars (Compliance Engine is the highlighted middle card) and the 27-module map.
7. **Compliance engine** (deep): scheme matrix, PAYE bands, TIN check panel.
8. **How a pay cycle runs**: four numbered steps. The numbering is real because it is a sequence.
9. **Cloud & Desktop**: two edition cards and an "In both" bar.
10. **Who it's for**: role tabs with a screen mock.
11. **Built like a financial instrument**: six engineering decisions.
12. **Integrations + Markets**: two columns.
13. **Pricing**: Core / Complete / Enterprise, per employee per month, "Talk to sales". No amounts.
14. **Contact** (deep): offices from the letterhead, and email, phones and web with copy buttons.
15. **Footer** (deep).

## 5. The PAYE instrument (hero component)

This is the site's core demonstration, and the reason "correct by construction" is believable. Keep it exactly like this:

```
pension  = gross × 8%            (on basic+housing+transport; equals gross under the 50/30/20 split)
nhf      = gross × 50% × 2.5%    (on basic)
relief   = min(rent × 20%, ₦500,000)
chg      = max(0, gross − pension − nhf − relief)
PAYE     = Σ band slices × rate   (800k@0, 2.2m@15, 9m@18, 13m@21, 25m@23, rest@25)
```

- Default state: gross ₦6,000,000, rent ₦1,200,000, giving chargeable income ₦5,205,000, PAYE ₦726,900 a year and ₦60,575 a month.
- Golden check: chargeable income ₦3,162,000 must give ₦359,160.
- Keep the caption: "Illustration using a 50/30/20 pay split. The engine reads each employee's real pay components. Not tax advice."
- In production, import the band table from `packages/compliance` so the site and the engine share one source.

## 6. Anti-patterns

- 3D, WebGL, horizontal scroll hijacking, cursor effects, or more than one animated moment.
- Gold used as small body text on white. Use `--gold-text`.
- Green Ledger colours on the marketing site, or letterhead gold inside the product UI.
- Stock photos of smiling people at laptops. Show the product's arithmetic instead.
- Invented prices, client logos, testimonials or certifications.
- A contact form that claims "sent" before a real endpoint exists.

## 7. Open items before launch

- Set `LINKS.cloud` and `LINKS.download` to the live app URL and the desktop installer page.
- Before claiming all 27 modules on the feature map, confirm which are live and which are roadmap.
- Add a real demo-request endpoint (Route Handler → email/CRM), then turn the contact block into a form.
- Re-confirm deadlines in the scheme matrix against primary agency guidance before go-live.
