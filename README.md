# y[AI]r studio — website

The public website for **y[AI]r studio** (spoken: *Yair Studio*) — AI systems for real business
workflows.

Built with Next.js (App Router) + TypeScript. The site is **fully bilingual**: every page has an
English version and a Hebrew (RTL) version under `/he`, driven by one locale-keyed content model.
On top of the visual foundation (design tokens, bilingual typography, shared shell) the site carries
a homepage that routes by commitment (a 3-rung ladder) and shows what the studio makes (five
capabilities), the `/studio` capability pages, the `/offers` ladder page + the two paid rungs,
`/about`, `/contact` (email + WhatsApp), an SEO/AEO/GEO foundation (per-page metadata, hreflang
pairs, Open Graph, structured data, crawl endpoints), and Vercel Analytics. Positioning: **the AI
department your office hires** — a managed retainer for small professional offices (law first) and
SMB teams; the site faces business clients only, and pricing stays model-only (no numbers).

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
| `/` | `/he` | Home — hero (positioning), ladder, proof film (Command Center, "In build · sample data"), capabilities strip, founder, boundaries, final CTA (both locales share one composition) |
| `/studio` | `/he/studio` | What the studio makes — index of the five capabilities |
| `/studio/agentic-systems` | `/he/studio/agentic-systems` | Capability page (film: `cap-agentic-systems`) |
| `/studio/process-optimization` | `/he/studio/process-optimization` | Capability page — reuses the `scattered-to-mapped` film |
| `/studio/websites` | `/he/studio/websites` | Capability page (film: `cap-websites`) |
| `/studio/films` | `/he/studio/films` | Capability page (film: `cap-films`) |
| `/studio/ai-enablement` | `/he/studio/ai-enablement` | Capability page — training a business team's staff on their own work; reuses the `ai-enablement` film |
| `/offers` | `/he/offers` | Services — the 3-rung commitment ladder (free scoping call → AI Workflow Sprint → Managed AI Office) + who-it-fits |
| `/offers/ai-office-assistant` | `/he/offers/ai-office-assistant` | Managed AI Office — the headline rung (setup + monthly retainer), pricing-model band; the content engine is an included section at `#content` |
| `/offers/ai-workflow-sprint` | `/he/offers/ai-workflow-sprint` | AI Workflow Sprint — fixed price, map + three automations |
| `/about` | `/he/about` | Founder profile, illustrative workflow patterns, principles |
| `/contact` | `/he/contact` | Email (primary) + WhatsApp + copy-email affordance |
| `/opengraph-image` | — | Generated 1200×630 branded OG image (`next/og`) |

The five capability pages are one dynamic segment per root —
`src/app/(site)/studio/[capability]/page.tsx` and its `(he)/he/studio/` twin — with
`generateStaticParams` from `src/lib/capabilities.ts`, so adding a capability is a data change.

Nine retired routes 308-redirect to their live successors in both locales — see `next.config.ts`:
the six 2026-07 offer routes (`ai-workflow-audit`, `ai-ops-pilot`, `follow-up-machine`,
`internal-ai-systems`, `dashboards-automation`, `content-ad-operations`) plus, from the 2026-09
studio redesign, `/workflows` → `/studio/process-optimization`, `/offers/ai-enablement` →
`/studio/ai-enablement`, and `/offers/linkedin-content-engine` (like `content-ad-operations`) →
`/offers/ai-office-assistant#content`.

## Content model

All copy is **data, not JSX**: typed, locale-keyed files in [`src/content/`](src/content)
(`home.ts`, `about.ts`, `contact.ts`, `ladder.ts`, `offers-index.ts`, `offers/*.ts`, `studio.ts`,
`studio/*.ts`, `capability-cards.ts`, `offer-cards.ts`, `proof.ts`, `shell.ts`, shared shapes in
`types.ts`). Each exports a `…Content(locale)` accessor; pages are thin composers. Offer detail
pages render through one template (`src/components/offers/OfferPageBody.tsx`), capability pages
through another (`src/components/pages/CapabilityPageBody.tsx`). Capability and offer pages carry
an optional `after` section (the project → managed-office bridge, shared copy in `ladder.ts` via
`afterProjectSection()`), rendered as `#after` before the closing CTA. The canonical lists (keys, routes,
EN card copy) stay in [`src/lib/offers.ts`](src/lib/offers.ts) (the two paid rungs) and
[`src/lib/capabilities.ts`](src/lib/capabilities.ts) (the five capabilities); `SERVICES` in
`src/lib/site.ts` is derived from both.

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
are loaded with `next/font` (Newsreader — EN display; Instrument Sans — EN body/UI and the wordmark;
Frank Ruhl Libre — Hebrew display; Assistant — Hebrew body; Geist Mono — mono accents), not a CDN
`@import`. Hebrew/RTL is a genuine document, not a subtree: the app uses **two root
layouts** via route groups — `app/(site)/layout.tsx` (`<html lang="en">`) and `app/(he)/layout.tsx`
(`<html lang="he" dir="rtl">`) — both rendering the **same shared shell** (`SiteHeader` /
`SiteFooter` with a `locale` prop fed from `src/content/shell.ts`). The shared `next/font` loaders
and base metadata live once in [`src/lib/fonts.ts`](src/lib/fonts.ts) and
[`src/lib/root-metadata.ts`](src/lib/root-metadata.ts), imported by both. RTL relies on logical CSS
properties, document-level `[lang]`/`[dir]` selectors, and `<bdi>` for the always-Latin wordmark.

Shared components live in `src/components/` (`Container`, `SiteHeader`, `SiteFooter`, `SectionLabel`,
`CTAButton`, `Wordmark`, `LangToggle` — prefix-mapping language toggle, `NavLinks` — active-state nav,
`WorkflowMap` — the schematic process-spine artifact, `FounderProfile`, `ProofCards`, `SampleBadge`,
`ProcessFilm`/`FilmPlayer`; homepage sections under `home/` — `LadderSection`, `CapabilityStrip`
(also exports `LinkCardGrid`), `ProofFilmSection`; page bodies under `pages/` — `StudioIndexPageBody`,
`CapabilityPageBody`). Design tokens are defined once in `src/app/globals.css` — never hardcode
hex in UI; reference `var(--*)`. The one allowed exception is `src/lib/brand.ts`, which mirrors the
token literals for the OG image because `next/og` (Satori) cannot read CSS variables.

Motion is **pre-rendered video**, never a client-side animation library: the films are HyperFrames
compositions under [`hyperframes/`](hyperframes/) (one directory per film, each with a `DESIGN.md`),
rendered to `public/videos/` and played through `FilmPlayer` (poster-first, reduced-motion gated,
WCAG 2.2.2 pause control; `mobile` serves a 4:5 phone cut under 768px, `autoplay={false}` makes a
film poster-first click-to-play). Rule: one **autoplaying** film per page. Inventory:
`command-center` (flagship product face — the homepage proof band and the Managed AI Office page,
"In build · sample data") · `workflow-sprint` (the sprint page) · `scattered-to-mapped`
(`/studio/process-optimization`) · `ai-enablement` (`/studio/ai-enablement`) · `cap-agentic-systems`,
`cap-websites`, `cap-films` (their capability pages) ·
`linkedin-content-engine` (the retainer's included content section, click-to-play), plus two
ambient/brand pieces — `hero-ambient` (a text-free WebGL FBM shader loop behind the homepage hero)
and `wordmark-sting` (a ~2.5s `y[AI]r` lockup, kept as a standalone/OG asset; no film passes it as
`intro`). Retired: `meeting-workflow` (`/workflows` folded into `/studio/process-optimization`; its
assets were deleted). Every page film (not the two brand pieces) follows film spec v2: sans-only type on frame (Instrument Sans /
Assistant, Geist Mono for Latin chips; the type kit lives in `hyperframes/_fonts/`), elements filling
~80% of the frame, headlines ≥120px and labels ≥80px on the 1920 canvas so they stay readable on
phones. The Command Center phone cut is its own project, `command-center-mobile` (1080×1350: a
HyperFrames canvas size is fixed at compile time, so it cannot be a composition variable), wired
once through the flagship film block's `mobile` set and served under 768px. Render recipe, every film: transparent
master (alpha WebM; a ProRes MOV for films with glows, which VP9 bands) → ffmpeg composite over
`#121211` → H.264 MP4 ≤1.5 MB + poster PNG at the peak; WebM fallback ≤6 MB, 2-pass re-encoded from
the master when the direct render is over. Each film's `REVIEW.md` records the exact commands.
