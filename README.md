# y[AI]r studio — website

The public website for **y[AI]r studio** (spoken: *Yair Studio*) — AI systems for real business
workflows.

Built with Next.js (App Router) + TypeScript. This repo currently holds the **visual foundation**
(design tokens, bilingual EN/HE typography, base styles, and a shared shell sourced from the design
system), a **homepage v1** composing those tokens, **offer pages** (an overview plus four offers),
and an **SEO/AEO/GEO foundation** (metadata, Open Graph, structured data, and public crawl
endpoints). A launch-readiness pass then built out `/workflows`, `/about`, and `/contact`, added a
reusable workflow-map artifact, active nav state, and a branded Open Graph image. `/contact` uses a
visible placeholder for the contact channel and is **not ready for public launch** until a real
contact channel is added.

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

## Routes

All public routes are built. `/he` remains a Hebrew preview; `/contact` ships with a placeholder
contact address and is not yet launch-ready.

| Path | Notes |
|------|-------|
| `/` | Home (v1) |
| `/he` | Hebrew (RTL) preview |
| `/workflows` | Approach + worked example (workflow-map artifact) |
| `/offers` | Offers overview |
| `/offers/ai-workflow-audit` | Offer (entry / first step) — includes a workflow-map artifact |
| `/offers/internal-ai-systems` | Offer |
| `/offers/dashboards-automation` | Offer |
| `/offers/content-ad-operations` | Offer |
| `/about` | About the studio |
| `/contact` | Contact (placeholder — not launch-ready until a real contact channel is added) |
| `/opengraph-image` | Generated 1200×630 branded OG image (`next/og`) |

## SEO / metadata

[`src/lib/site.ts`](src/lib/site.ts) is the **single source** for `SITE_URL`, the canonical route
list, per-page metadata (titles, descriptions, Open Graph, canonical + `hreflang`), and the service
taxonomy. Each route's `metadata` export, the sitemap, robots, and `llms.txt` all derive from it —
so the production domain and route list live in exactly one place.

Public crawl endpoints:

| Endpoint | Source |
|----------|--------|
| `/robots.txt` | `src/app/robots.ts` — allow-all (AI crawlers included) |
| `/sitemap.xml` | `src/app/sitemap.ts` — all public routes |
| `/llms.txt` | `src/app/llms.txt/route.ts` — factual brief for answer engines |

> The production domain is not finalized — `SITE_URL` in `src/lib/site.ts` is a placeholder
> (`https://yair.studio`); update it there before launch.

## Stack

App Router · TypeScript · ESLint · `src/` directory · import alias `@/*`. No Tailwind, no external
UI library. Fonts are loaded with `next/font` (Inter — EN body/display; Geist Mono — mono accents;
Assistant — Hebrew body), not a CDN `@import`. Hebrew/RTL is supported from the start (logical CSS
properties, subtree-scoped `[lang]`/`[dir]` selectors, `dir="rtl"` on `/he`, `<bdi>` for the wordmark).

Shared components live in `src/components/` (`Container`, `SiteHeader`, `SiteFooter`, `SectionLabel`,
`CTAButton`, `Wordmark`, `LangToggle`, `NavLinks` — active-state nav, `WorkflowMap` — the schematic
process-spine artifact). Design tokens are defined once in `src/app/globals.css` — never hardcode hex
in UI; reference `var(--*)`. The one allowed exception is `src/lib/brand.ts`, which mirrors the token
literals for the OG image because `next/og` (Satori) cannot read CSS variables.
