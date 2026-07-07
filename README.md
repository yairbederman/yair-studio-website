# y[AI]r studio — website

The public website for **y[AI]r studio** (spoken: *Yair Studio*) — AI systems for real business
workflows.

Built with Next.js (App Router) + TypeScript. The site is **fully bilingual**: every page has an
English version and a Hebrew (RTL) version under `/he`, driven by one locale-keyed content model.
On top of the visual foundation (design tokens, bilingual typography, shared shell) the site carries
a homepage with a founder band and illustrative workflow cards, offer pages (overview + live offers), `/workflows`,
`/about`, `/contact` (email + WhatsApp), an SEO/AEO/GEO foundation (per-page metadata, hreflang
pairs, Open Graph, structured data, crawl endpoints), and Vercel Analytics.

> Founder/about copy uses modest factual positioning. The workflow cards remain visibly labeled
> illustrative patterns, not client case studies or evidence of outcomes. The
> `PROOF_IS_SAMPLE_DATA` flag in [`src/content/proof.ts`](src/content/proof.ts) controls only
> those workflow-example badges.

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
| `/` | `/he` | Home — flagship-led hero, problems, offers, method, safety, founder band, evidence, proof cards, final CTA (both locales share one composition) |
| `/workflows` | `/he/workflows` | Approach + worked example (workflow-map artifact + film) |
| `/offers` | `/he/offers` | Services overview — decision router + who-it-fits + the 4 service cards |
| `/offers/ai-office-assistant` | `/he/offers/ai-office-assistant` | Flagship offer — managed service (setup + retainer), pricing-model band |
| `/offers/ai-workflow-sprint` | `/he/offers/ai-workflow-sprint` | Entry offer — fixed price, map + three automations |
| `/offers/linkedin-content-engine` | `/he/offers/linkedin-content-engine` | Managed content pipeline |
| `/offers/ai-enablement` | `/he/offers/ai-enablement` | Workshops for R&D / engineering teams |
| `/about` | `/he/about` | Founder profile, illustrative workflow patterns, principles |
| `/contact` | `/he/contact` | Email (primary) + WhatsApp + copy-email affordance |
| `/opengraph-image` | — | Generated 1200×630 branded OG image (`next/og`) |

Six retired offer routes (`ai-workflow-audit`, `ai-ops-pilot`, `follow-up-machine`,
`internal-ai-systems`, `dashboards-automation`, `content-ad-operations`) 308-redirect to their
successors in both locales — see `next.config.ts`.

## Content model

All copy is **data, not JSX**: typed, locale-keyed files in [`src/content/`](src/content)
(`home.ts`, `about.ts`, `contact.ts`, `workflows.ts`, `offers-index.ts`, `offers/*.ts`, `proof.ts`,
`shell.ts`, `offer-cards.ts`, shared shapes in `types.ts`). Each exports a `…Content(locale)`
accessor; pages are thin composers. Offer detail pages render through one template
(`src/components/offers/OfferPageBody.tsx`). The canonical offer list (keys, routes, EN card copy)
stays in [`src/lib/offers.ts`](src/lib/offers.ts).

[src/content/proof.ts](src/content/proof.ts) owns the founder + proof layer. Founder copy is
factual and deliberately modest. `PROOF_IS_SAMPLE_DATA` controls the visible badge on illustrative
workflow examples only; it does not apply to founder positioning or site indexing.

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
| `/robots.txt` | `src/app/robots.ts` — allow-all rules plus the canonical sitemap and host |
| `/sitemap.xml` | `src/app/sitemap.ts` — all public routes + EN/HE/x-default alternates |
| `/llms.txt` | `src/app/llms.txt/route.ts` — factual brief for answer engines |

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
