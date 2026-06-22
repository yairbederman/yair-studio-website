# y[AI]r studio — website

The public website for **y[AI]r studio** (spoken: *Yair Studio*) — AI systems for real business
workflows.

Built with Next.js (App Router) + TypeScript. The site is **fully bilingual**: every page has an
English version and a Hebrew (RTL) version under `/he`, driven by one locale-keyed content model.
On top of the visual foundation (design tokens, bilingual typography, shared shell) the site carries
a homepage with a founder band and illustrative workflow cards, offer pages (overview + live offers), `/workflows`,
`/about`, `/contact` (email + WhatsApp), an SEO/AEO/GEO foundation (per-page metadata, hreflang
pairs, Open Graph, structured data, crawl endpoints), and Vercel Analytics.

> **Before launch:** the founder credentials and career spine are visibly-badged **SAMPLE data**,
> and the whole site is `noindex` until they're replaced — see
> [`LAUNCH-CHECKLIST.md`](LAUNCH-CHECKLIST.md). The workflow cards are illustrative patterns,
> not client case studies. The gate is one flag: `PROOF_IS_SAMPLE_DATA` in
> [`src/content/proof.ts`](src/content/proof.ts).

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

Every content route exists in both languages (`/x` ↔ `/he/x`); the language toggle preserves deep
links in both directions. `/contact` offers email (primary) and WhatsApp.

| Path (EN) | Hebrew mirror | Notes |
|------|------|-------|
| `/` | `/he` | Home — hero, problems, method, founder band, evidence, proof cards, offers, final CTA |
| `/workflows` | `/he/workflows` | Approach + worked example (workflow-map artifact + film) |
| `/offers` | `/he/offers` | Offers overview |
| `/offers/ai-workflow-audit` | `/he/offers/ai-workflow-audit` | Offer (entry / first step) — film + map artifact |
| `/offers/internal-ai-systems` | `/he/offers/internal-ai-systems` | Offer |
| `/offers/dashboards-automation` | `/he/offers/dashboards-automation` | Offer |
| `/offers/content-ad-operations` | `/he/offers/content-ad-operations` | Offer |
| `/about` | `/he/about` | Founder profile, illustrative workflow patterns, principles |
| `/contact` | `/he/contact` | Email (primary) + WhatsApp + copy-email affordance |
| `/opengraph-image` | — | Generated 1200×630 branded OG image (`next/og`) |

## Content model

All copy is **data, not JSX**: typed, locale-keyed files in [`src/content/`](src/content)
(`home.ts`, `about.ts`, `contact.ts`, `workflows.ts`, `offers-index.ts`, `offers/*.ts`, `proof.ts`,
`shell.ts`, `offer-cards.ts`, shared shapes in `types.ts`). Each exports a `…Content(locale)`
accessor; pages are thin composers. Offer detail pages render through one template
(`src/components/offers/OfferPageBody.tsx`). The canonical offer list (keys, routes, EN card copy)
stays in [`src/lib/offers.ts`](src/lib/offers.ts).

[`src/content/proof.ts`](src/content/proof.ts) owns the founder + proof layer and the
`PROOF_IS_SAMPLE_DATA` launch gate: while `true`, every proof surface shows a "sample data" badge,
the site is `noindex` (meta + robots), and `/llms.txt` declares the samples — flipping it lifts all
of that at once.

## SEO / metadata

[`src/lib/site.ts`](src/lib/site.ts) is the **single source** for `SITE_URL`, the canonical route
list (EN + HE), per-page metadata (titles, descriptions, Open Graph, canonical), the WhatsApp
contact constants, and the service taxonomy. Every page emits a derived `en-US`/`he-IL`/`x-default`
hreflang triple (`localePaths`) — never hand-listed. Each route's `metadata` export, the sitemap
(with per-URL language alternates), robots, and `llms.txt` all derive from the same list.

`SITE_URL` is **environment-derived** (no hardcoded domain): `NEXT_PUBLIC_SITE_URL` override →
`VERCEL_PROJECT_PRODUCTION_URL` → `VERCEL_URL` → localhost. Attaching a custom domain later requires
no code change.

Public crawl endpoints:

| Endpoint | Source |
|----------|--------|
| `/robots.txt` | `src/app/robots.ts` — always allow-all (the sample gate works via meta `noindex`, which crawlers can only read on crawlable pages) |
| `/sitemap.xml` | `src/app/sitemap.ts` — all public routes + EN/HE/x-default alternates |
| `/llms.txt` | `src/app/llms.txt/route.ts` — factual brief for answer engines (sample-gated note) |

## Stack

App Router · TypeScript · ESLint · `src/` directory · import alias `@/*`. No Tailwind, no external
UI library; the only runtime addition is `@vercel/analytics` (mounted once per root layout). Fonts
are loaded with `next/font` (Inter — EN body/display; Geist Mono — mono accents; Assistant — Hebrew
body), not a CDN `@import`. Hebrew/RTL is a genuine document, not a subtree: the app uses **two root
layouts** via route groups — `app/(site)/layout.tsx` (`<html lang="en">`) and `app/(he)/layout.tsx`
(`<html lang="he" dir="rtl">`) — both rendering the **same shared shell** (`SiteHeader` /
`SiteFooter` with a `locale` prop fed from `src/content/shell.ts`). The shared `next/font` loaders
and base metadata live once in [`src/lib/fonts.ts`](src/lib/fonts.ts) and
[`src/lib/root-metadata.ts`](src/lib/root-metadata.ts), imported by both. RTL relies on logical CSS
properties, document-level `[lang]`/`[dir]` selectors, and `<bdi>` for the always-Latin wordmark.

Shared components live in `src/components/` (`Container`, `SiteHeader`, `SiteFooter`, `SectionLabel`,
`CTAButton`, `Wordmark`, `LangToggle` — prefix-mapping language toggle, `NavLinks` — active-state nav,
`WorkflowMap` — the schematic process-spine artifact, `FounderProfile`, `ProofCards`, `SampleBadge`,
`ProcessFilm`/`FilmPlayer`). Design tokens are defined once in `src/app/globals.css` — never hardcode
hex in UI; reference `var(--*)`. The one allowed exception is `src/lib/brand.ts`, which mirrors the
token literals for the OG image because `next/og` (Satori) cannot read CSS variables.
