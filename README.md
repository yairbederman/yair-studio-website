# y[AI]r studio — website

The public website for **y[AI]r studio** (spoken: *Yair Studio*) — AI systems for real business
workflows.

Built with Next.js (App Router) + TypeScript. This repo currently holds the **visual foundation**
(design tokens, bilingual EN/HE typography, base styles, and a shared shell originally sourced from the
design system), a **homepage v1** composing those tokens, **offer pages** (an overview plus four offers),
and an **SEO/AEO/GEO foundation** (metadata, Open Graph, structured data, and public crawl
endpoints). A launch-readiness pass then built out `/workflows`, `/about`, and `/contact`, added a
reusable workflow-map artifact, active nav state, and a branded Open Graph image. `/contact` now uses a
real `mailto:` contact channel, and `/he` is a self-contained Hebrew (RTL) homepage. The English pages
remain English-only — only `/he` is translated, so the site is **not** fully bilingual.

## Visual source of truth

This repository is the source of truth for the site's styling. The visual language — warm charcoal +
softened copper, dark-first, technical/schematic — is defined here: design tokens live once in
[`src/app/globals.css`](src/app/globals.css) (mirrored for the OG image in
[`src/lib/brand.ts`](src/lib/brand.ts)), and components live in [`src/components/`](src/components).

> The design-system repo ([yair-design-system](https://github.com/yairbederman/yair-design-system)) is
> the **historical origin** of this language and an optional upstream reference — not a gate. When the
> two diverge, this repo wins for anything site-specific.

Don't introduce ad-hoc brand colors or typography in components — reference the tokens in `globals.css`
(`var(--*)`), and extend those tokens there when something genuinely new is needed.

## Commands

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm run lint    # run ESLint
npm run start   # serve the production build (after `npm run build`)
```

Install dependencies first with `npm install`.

## Routes

All public routes are built. `/he` is a self-contained Hebrew (RTL) homepage (the only translated
page); `/contact` uses a real `mailto:` contact channel.

| Path | Notes |
|------|-------|
| `/` | Home (v1) |
| `/he` | Hebrew (RTL) homepage — self-contained shell (own root layout), not linked into EN pages |
| `/workflows` | Approach + worked example (workflow-map artifact) |
| `/offers` | Offers overview |
| `/offers/ai-workflow-audit` | Offer (entry / first step) — includes a workflow-map artifact |
| `/offers/internal-ai-systems` | Offer |
| `/offers/dashboards-automation` | Offer |
| `/offers/content-ad-operations` | Offer |
| `/about` | About the studio |
| `/contact` | Contact — real `mailto:` channel |
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
Assistant — Hebrew body), not a CDN `@import`. Hebrew/RTL is a genuine document, not a subtree: the
app uses **two root layouts** via route groups — `app/(site)/layout.tsx` (`<html lang="en">` + the full
shell) and `app/(he)/layout.tsx` (`<html lang="he" dir="rtl">` + a self-contained shell). The shared
`next/font` loaders and base metadata live once in [`src/lib/fonts.ts`](src/lib/fonts.ts) and
[`src/lib/root-metadata.ts`](src/lib/root-metadata.ts), imported by both. RTL relies on logical CSS
properties, document-level `[lang]`/`[dir]` selectors, and `<bdi>` for the always-Latin wordmark.
Homepage copy is externalized, typed, and locale-keyed in [`src/content/home.ts`](src/content/home.ts).

Shared components live in `src/components/` (`Container`, `SiteHeader`, `SiteFooter`, `SectionLabel`,
`CTAButton`, `Wordmark`, `LangToggle`, `NavLinks` — active-state nav, `WorkflowMap` — the schematic
process-spine artifact). Design tokens are defined once in `src/app/globals.css` — never hardcode hex
in UI; reference `var(--*)`. The one allowed exception is `src/lib/brand.ts`, which mirrors the token
literals for the OG image because `next/og` (Satori) cannot read CSS variables.
