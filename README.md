# y[AI]r studio — website

The public website for **y[AI]r studio** (spoken: *Yair Studio*) — AI systems for real business
workflows.

Built with Next.js (App Router) + TypeScript. This repo currently holds the **visual foundation**:
design tokens, bilingual (EN/HE) typography, base styles, and a shared shell (header/footer/
container) sourced from the design system — wrapping placeholder routes. Homepage sections, final
copy, and integrations are added in later steps.

## Visual source of truth

The visual language (warm charcoal + softened copper, dark-first, technical/schematic) is defined
in the design-system repo and is the **single source of truth** for all styling:

> https://github.com/yairbederman/yair-design-system

Do not introduce ad-hoc brand colors, typography, or components here — they belong in, and flow
from, the design system.

## Commands

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm run lint    # run ESLint
npm run start   # serve the production build (after `npm run build`)
```

Install dependencies first with `npm install`.

## Routes (placeholders)

| Path | Notes |
|------|-------|
| `/` | Home |
| `/he` | Hebrew (RTL) |
| `/workflows` | Stub |
| `/offers` | Stub (index) |
| `/offers/office-ai-systems` | Offer |
| `/offers/dashboards-automation` | Offer |
| `/offers/content-ad-operations` | Offer |
| `/about` | Stub |
| `/contact` | Stub |

## Stack

App Router · TypeScript · ESLint · `src/` directory · import alias `@/*`. No Tailwind, no external
UI library. Fonts are loaded with `next/font` (Inter — EN body/display; Geist Mono — mono accents;
Assistant — Hebrew body), not a CDN `@import`. Hebrew/RTL is supported from the start (logical CSS
properties, subtree-scoped `[lang]`/`[dir]` selectors, `dir="rtl"` on `/he`, `<bdi>` for the wordmark).

Shared components live in `src/components/` (`Container`, `SiteHeader`, `SiteFooter`, `SectionLabel`,
`CTAButton`, `Wordmark`, `LangToggle`). Design tokens are defined once in `src/app/globals.css` —
never hardcode hex; reference `var(--*)`.
