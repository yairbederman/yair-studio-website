# Plan — Redesign v2: sans type + Tailwind hero, three services, /work, parallel subagents

> **Handoff.** Written 2026-09-25 for `C:/My Projects/yair-studio-website`. On approval, the first action copies this
> file to `backlog/2026-09-25-redesign-v2-implementation-plan.md`. Content and positioning decisions are in
> `backlog/2026-09-25-redesign-plan-review.md` (§1 decisions, §4 homepage + H1 "C", §5 routes, §6 films, §7 claims
> rule, §9 enhancements); every dispatch prompt points at that file instead of restating it.

## 1. Executive Summary

| | |
|---|---|
| **Problem** | The shipped redesign (24 Sep) scored 27/40: hero not bold, two taxonomies on the home, developer vocabulary, real work (four public films, a live law-office system) shown nowhere. The owner wants better visuals and a clearer message. |
| **Goal** | Agent-led, work-first, bilingual site: one bold sans hero with a word-reveal animation, three services, a `/work` portfolio, no contradictions, no unverifiable claims. |
| **User value** | A visitor understands "AI agents for the work your office repeats" in one screen, sees real work, and reaches WhatsApp or email with the right prefilled message. |
| **Recommended move** | Four stages. A: type switch + Tailwind 4 (utilities only) ∥ scaffold of every coupling point. B: five parallel subagents on disjoint file sets (home, work, services ×2, contact+about). C: one agent retires `/studio` and `/offers`, adds redirects, cleans dead CSS. D: orchestrator gates + browser QA. |
| **Risk** | **Medium.** Font change and Tailwind touch every page; 19 redirects; five agents on one tree. Mitigated by a branch with a Vercel preview, frozen shared files in Stage B, stage-gate builds. |
| **Size** | ≈ 32 files created · 24 modified · 20 deleted · 0 tests (no runner; lint + build + browser QA). ≈ 5 agent sessions, ≈ 3 wall-clock sessions with parallelism. |

**Decisions already taken today (no further input needed to start):** hero = typographic word-reveal ported from the 21st.dev "hero-section" on **Tailwind 4 utilities (owner's choice B)**, keeping corner marks, detail dots, floating dots; dropping mouse glow, click ripple, hover glow. H1 = option C. No prices. Sans display = Instrument Sans / Assistant, not Inter. Three services; retainer stays the ladder's end state; films sold as generative creative films.

## 2. What Will Change

| Area | Change |
|---|---|
| Config / build | `tailwindcss@4.3.3` + `@tailwindcss/postcss` + `postcss` (dev), `postcss.config.mjs`; `next.config.ts` gains `images.remotePatterns` for `i.ytimg.com` and the new redirect map |
| Type / CSS | `--font-display` → Instrument Sans 600–700, `--font-display-he` → Assistant 700–800; Newsreader and Frank Ruhl removed; `opsz` settings removed. Tailwind imported **without Preflight** (`theme.css` + `utilities.css` layered) with `@theme inline` mapping the existing tokens (`--color-accent: var(--accent)` …) and `@source not "../../hyperframes"`. Four feature stylesheets `src/styles/{home,work,services,contact}.css` imported after globals in both root layouts. |
| Home | New hero: full-viewport, eyebrow line + H1 C (accent word "repeats" / "חוזר" in the H1, owner decision 2026-09-25) + plain lead + two CTAs + "also websites and films" line, word-by-word reveal, drawing grid, corners, dots; reduced-motion instant. Credibility band (four founder facts), three-services strip, candour note; ladder, proof film, founder, boundaries, final CTA kept. |
| Routes | New `/work`, `/work/[slug]`, `/services`, `/services/{ai-agents,websites,films,managed-office}` (+ `/he` mirrors). `/studio/*`, `/offers/*` retired with 308s; `/ai-video` alias → `/services/films`. Nav: Work · Services · About · Contact. |
| Data | `src/content/work.ts` (WorkItem: title, slug, category, brief, role, status live/prototype/concept, poster, source local or YouTube id, aspect, language, deliverables, published); `src/lib/services.ts`; `src/content/services/*.ts` |
| Content | Services copy merged (agentic + process-optimization + enablement → ai-agents with the Sprint as "where to start"); films page rewritten as creative films (synthetic-people rule deleted); claims rule from review §7 applied; About chronology and surname fields prepared; contact chooser with per-service WhatsApp/email prefill |
| Analytics | `track()` on contact chooser clicks and work-film plays (client components only) |

## 3. What Will NOT Change

- Wordmark (text, Instrument Sans), accent `#D96832`, dark palette, bracket-button signature, approval-dot motif.
- Ladder exports and rung numbering (`ladder.ts` signatures frozen), `FilmPlayer`, `ProcessFilm`, `OfferPageBody`, `CTAButton`, `OfferCTA`, `OfferHero`, `JsonLd` internals.
- HyperFrames films and their baked text; the Command Center "in build · sample data" label; `PROOF_IS_SAMPLE_DATA`.
- No prices. No metrics. No client logos. No form backend. No Preflight reset. Military/political film excluded.
- Hebrew is written with English in every workstream (build fails otherwise).

## 4. Why This Is Worth Doing

- The first screen finally states one service in one line, and the H1 is the visual: no agent-demo asset is needed to ship.
- Real work becomes reachable from every page; today four public films and a live system are invisible.
- One taxonomy replaces three (studio, offers, capabilities): the critique's lowest-scoring issue.
- The films page stops contradicting the films the studio actually makes.
- The project → retainer bridge, which no Israeli competitor occupies, gets its own page and a clear path.

## 5. Implementation Plan

**Branch:** `redesign-v2` (Vercel preview deploy; `main` untouched until the owner approves the merge). Commit asks at each stage gate.

**Stage A — foundations (2 agents in parallel, ≈1 session)**

| Workstream | Files | Depends on | Verification |
|---|---|---|---|
| **A1 Type + Tailwind** | `package.json`, `package-lock.json`, `postcss.config.mjs` (create), `src/app/globals.css` (Tailwind imports at top; `@theme inline` token map; `@source not`; font tokens; remove `opsz` at :164/:1113/:1235; fix `.founder-name` :1429, `.scenario::before` :1179; stale comments), `src/lib/fonts.ts`, `src/app/(site)/layout.tsx`, `src/app/(he)/layout.tsx` (import four feature CSS files after globals), `src/styles/{home,work,services,contact}.css` (create, empty) | — | `npm run build` passes; `grep -rl "color-accent" .next/static/css` non-empty; no `Newsreader` in `.next` |
| **A2 Scaffold** | `src/lib/services.ts`, `src/lib/work-slugs.ts` (create), `src/lib/site.ts` (add pages from `WORK_SLUGS` + services; `SERVICES` from `OFFERS + SERVICES_LIST`), `src/lib/offers.ts` (hrefs → `/services/managed-office`, `/services/ai-agents#start`), `src/content/work.ts` (type, `WorkCategory`, six skeleton records, `law-office` unpublished, accessors), `src/content/services/types.ts` + `{ai-agents,websites,films}.ts` re-exports of studio content, `src/content/services.ts`, `src/content/service-cards.ts`, `src/components/LinkCardGrid.tsx` (extract; one-line edits in `CapabilityPageBody.tsx:10`, `home/CapabilityStrip.tsx`), `CapabilityFilm` hoist → `src/content/types.ts` (re-export from `studio/types.ts`; repoint `offers/types.ts:2`, `home.ts:29`), `src/components/work/WorkGrid.tsx` stub `({locale, category?, limit?}) => null`, `src/content/shell.ts` (nav + footer), `next.config.ts` (remotePatterns only), stub pages for every new route in both route groups (static folders per service; `/work/[slug]` with `dynamicParams=false`) | — | `npx tsc --noEmit`; `npx eslint <own files>`; orchestrator runs `npm run build` at the gate |

**Stage B — parallel build (5 agents, ≈2 sessions). Frozen for all: `globals.css`, `site.ts`, `shell.ts`, `services.ts`, `services/types.ts`, `lib/offers.ts`, `next.config.ts`, `CTAButton`, `OfferCTA`, `OfferHero`, `OfferSection`, `ProcessFilm`, `FilmPlayer`, `JsonLd`, both layouts.** Each agent writes only its own `src/styles/<feature>.css`; Tailwind utilities for layout, spacing, position, opacity; anything `globals.css` sets on bare elements (h1–h6, p, a, button) is set in the feature CSS because layered utilities lose to unlayered element rules.

| Workstream | Files | Depends on | Verification |
|---|---|---|---|
| **B1 Home + hero** | `src/components/home/*` (hero built in `HeroSection.tsx` as a server component: word spans with `--i` stagger, CSS-only; H1 accent: `hero.titleAccent` names one word of `SITE_TAGLINE`, `splitAccent` wraps it in `<em class="accent">` inside its reveal span, module-init throw if missing; grid SVG, corners, dots, floating dots; no mouse glow / ripple / hover glow; H1 readable ≤1.2 s, sequence ≤2.2 s; blur ≤6px desktop only; `prefers-reduced-motion` → instant; logical properties for RTL), `HomePageBody.tsx`, `src/content/home.ts` (H1 C, lead, eyebrow, "also" line, status chip, candour note, three services from `serviceCards`), `src/content/ladder.ts` (copy only; exports frozen), `src/styles/home.css` (keyframes `word-appear`, `grid-draw`, `float`; `.home-hero` namespace), `src/app/opengraph-image/route.tsx` (eyebrow + tagline text). Keeps `CapabilityStrip.tsx` file; keeps proof band via `aiOfficeAssistantContent(locale).film` (B3 keeps that export) | A1, A2 | `npx tsc --noEmit`; `npx eslint src/components/home src/content/home.ts src/content/ladder.ts`; `curl -s localhost:3000/` and `/he` contain the H1 strings |
| **B2 Work** | `src/content/work.ts` (fill records: command-center prototype 16:9 + 4:5, this-website live, dallal / coffee-grinder / varriage / esc concept 9:16 YouTube, law-office unpublished), `src/app/(site)/work/**`, `src/app/(he)/he/work/**`, `src/components/work/*` (`WorkGrid` keeps the stub signature, `WorkCard` with status chip reusing `.sample-badge`/`.case-badge` and deliverables chips, `WorkDetail`, `YouTubeLite` client: remote poster via `next/image`, click → `youtube-nocookie` iframe, keyboard-focusable, `track("work_film_play")`), `src/styles/work.css`, `public/work/*` (SVG poster card for this-website; screenshot via playwright-cli if available) | A2 | `npx tsc --noEmit`; eslint own files; `curl` `/work`, `/work/dallal`, `/he/work` render titles; no `<iframe>` in initial HTML |
| **B3 Services A** | `src/app/(site)/services/**` + HE mirrors (index + four static pages), `src/components/pages/ServicesIndexPageBody.tsx`, `ServicePageBody.tsx` (copy of `CapabilityPageBody` + `id="start"` on `where` + optional `work` slot calling `WorkGrid`), `src/content/services/ai-agents.ts` (merge of three studio files + Sprint as `where`; claims rule; business vocabulary), `src/content/offers/ai-office-assistant.ts` (managed-office copy; keep `aiOfficeAssistantContent` export and `film` shape), `src/styles/services.css` | A2 | `npx tsc --noEmit`; eslint own files; `curl` each `/services/*` and `/he/services/*` |
| **B4 Services B** | `src/content/services/websites.ts`, `src/content/services/films.ts` (creative-films rewrite; delete synthetic-people rule at old `films.ts:8,18,126-127,162,270-271` equivalents; keep baked film fields verbatim or log a re-render task) | A2 | `npx tsc --noEmit`; eslint own files |
| **B5 Contact + About** | `src/content/contact.ts` (four prefills per locale), `src/components/pages/ContactPageBody.tsx`, `src/components/ContactChooser.tsx` (client; swaps `waLink(text)` + mailto subject/body; `track("contact_click", {channel, service})`; no `searchParams`), `src/content/about.ts`, `src/content/proof.ts` (string values only; chronology + surname placeholders marked `TODO-owner` until answered), `src/styles/contact.css` | A2 | `npx tsc --noEmit`; eslint own files; `curl /contact` contains four chooser labels; WhatsApp hrefs decode to the four texts |

**Stage C — integrate and retire (1 agent, ≈1 session, after every B workstream is accepted)**

| Workstream | Files | Depends on | Verification |
|---|---|---|---|
| **C1 Retire + redirects + cleanup** | delete `src/app/(site)/studio/**`, `(he)/he/studio/**`, `(site)/offers/**`, `(he)/he/offers/**`, `src/content/studio/*`, `src/content/studio.ts`, `src/lib/capabilities.ts`, `src/content/capability-cards.ts`, `src/content/offers-index.ts`, `src/content/offer-cards.ts` (if no consumer), `OffersIndexPageBody.tsx`, `StudioIndexPageBody.tsx`, `CapabilityPageBody.tsx`, `home/CapabilityStrip.tsx`; `next.config.ts` redirects (re-point 9 existing, add `/studio*`, `/offers*`, `/ai-video`); `site.ts` remove old entries, `OG_IMAGE_ALT`; `llms.txt/route.ts:25` prose; `README.md`, `LAUNCH-CHECKLIST.md` route tables; delete dead `.hero*`, `.ladder*` overrides, `.cap-*`, `.offers-grid` blocks in `globals.css` | B1–B5 | `npm run lint && npm run build`; `curl -I` every retired route → 308 to a live route, EN and HE |

**Stage D — gates and QA (orchestrator)**: browser at 360/390/768/1440 × EN/HE on `/`, `/work`, `/work/dallal`, `/services/ai-agents`, `/services/films`, `/contact`; reduced-motion emulation on `/`; no console errors; then gates (§9), then the merge-to-main ask.

## 6. Impact

| | |
|---|---|
| UX | One-service hero readable in one screen; work reachable from every page; four-way contact chooser; nav with four plain words |
| Data / output | New `work.ts` and `services/*.ts` are the single sources; old studio/offers content deleted, not duplicated |
| Cost / performance | Tailwind adds only the utilities actually used (no Preflight); two Google fonts fewer; YouTube loads on click only; posters remote via `next/image` |
| Existing behaviour | 19 retired URLs 308 to live pages; `LangToggle` and `NavLinks` work unchanged; films, ladder, founder band, boundaries unchanged |
| Maintenance | Two styling vocabularies (tokens + utilities) kept in sync by the `@theme inline` map: tokens defined once in `:root`; feature CSS per area instead of one growing file |

## 7. Main Risks & Mitigations

| Risk | Mitigation |
|---|---|
| **Biggest assumption:** Tailwind's layered utilities import works under Turbopack + lightningcss (`@import` must be first; PostCSS expands it) | A1 proves it with `npm run build` before Stage B starts. Fallback: `@import "tailwindcss"` with Preflight and a one-file `@layer base` re-assertion of the site's element rules. |
| Layered utilities lose to unlayered element rules → hero sizes silently wrong | Rule in every B prompt: element-level styles go in the feature CSS; utilities only for layout/spacing/position/opacity. Orchestrator checks computed `font-size` on the hero H1 at 1440 and 375. |
| Two agents edit one file | Frozen list + ownership table above (coupling audit run 2026-09-25, 14 couplings resolved by A2). Fix loop returns defects to the owning agent; max 3 rounds. |
| Build breaks mid-Stage B from another agent's half-done file | Agents verify with `tsc`/eslint on own files and `curl`; full build only at stage gates. A red build at a gate is triaged to the owning agent. |
| Visible placeholders or `TODO-owner` strings reach production | All work on `redesign-v2`; merge to `main` only after Stage D and the four owner answers. `grep -r "TODO-owner" src` must be empty before merge. |
| Word-reveal hero hurts LCP / jank on phones | CSS-only stagger, no JS timers, blur desktop-only, H1 text in first HTML; orchestrator measures LCP on the preview at 390 px. |

## 8. Files Likely Touched

**Config / build (modify):** `package.json`, `package-lock.json`, `next.config.ts`, `README.md`, `LAUNCH-CHECKLIST.md` · **(create):** `postcss.config.mjs`
**Type / CSS (modify):** `src/app/globals.css`, `src/lib/fonts.ts`, `src/app/(site)/layout.tsx`, `src/app/(he)/layout.tsx` · **(create):** `src/styles/{home,work,services,contact}.css`
**Lib (create):** `src/lib/services.ts`, `src/lib/work-slugs.ts` · **(modify):** `src/lib/site.ts`, `src/lib/offers.ts` · **(delete):** `src/lib/capabilities.ts`
**Content (create):** `src/content/work.ts`, `src/content/services.ts`, `src/content/service-cards.ts`, `src/content/services/{types,ai-agents,websites,films}.ts` · **(modify):** `home.ts`, `ladder.ts`, `contact.ts`, `about.ts`, `proof.ts`, `shell.ts`, `types.ts`, `offers/types.ts`, `offers/ai-office-assistant.ts` · **(delete):** `studio.ts`, `studio/*`, `capability-cards.ts`, `offers-index.ts`, `offer-cards.ts`
**Components (create):** `home/{CredibilityBand,ServicesSection,WorkSection}.tsx` (hero reveal lives in `home/HeroSection.tsx`), `LinkCardGrid.tsx`, `work/{WorkGrid,WorkCard,WorkDetail,YouTubeLite}.tsx`, `pages/{ServicesIndexPageBody,ServicePageBody}.tsx`, `ContactChooser.tsx` · **(modify):** `home/*`, `pages/HomePageBody.tsx`, `pages/ContactPageBody.tsx`, `pages/CapabilityPageBody.tsx` (until C), `app/opengraph-image/route.tsx` · **(delete):** `pages/{OffersIndexPageBody,StudioIndexPageBody,CapabilityPageBody}.tsx`, `home/CapabilityStrip.tsx`
**Routes (create):** `src/app/(site)/work/{page,[slug]/page}.tsx`, `src/app/(site)/services/{page,ai-agents,websites,films,managed-office}/page.tsx`, HE mirrors · **(delete):** `(site)/studio/**`, `(site)/offers/**`, HE mirrors
**Assets (create):** `public/work/*`

## 9. Verification Plan

- **Automated (stage gates):** `npm run lint && npm run build`; `npx tsc --noEmit`; `grep -r "TODO-owner" src` empty before merge; `curl -I` on all 19 retired routes (EN + HE) → 308 to a 200 page.
- **Browser (Stage D, built-in browser):** `/`, `/he`, `/work`, `/work/dallal`, `/services/ai-agents`, `/services/films`, `/contact` at 360/390/768/1440; hero H1 computed font-size and family; reduced-motion emulation renders the hero fully; YouTube iframe absent until click; console clean; LangToggle round-trips on every new route.
- **Success criteria:** first screen shows H1 C in Instrument Sans ≥ 64px at 1440; three services and work grid visible; no `/studio` or `/offers` links remain (`grep -r '"/studio\|"/offers' src` empty); sitemap lists every new route with `he-IL` alternates; Hebrew pages use Assistant for headings.
- **Stage status:** A — accepted by the orchestrator 2026-09-25 (workflow gate passed 2 rounds; orchestrator re-ran lint 0 / tsc 0 / build 55 pages; browser check EN Instrument Sans 700/600, HE Assistant 800/700 at 1440); committed and pushed to `main` at the owner's request 2026-09-25, so later stages ship to production as they land. B — built 2026-09-25 by workflow `redesign-v2-stage-b` (5 builders, 5 adversarial reviews + a cross-cutting copy review, gate failed round 1 with 11 blocking / 45 minor, passed round 2), then a post-B polish workflow (H1 accent, 3 minor fixes; gate passed); uncommitted pending the owner's commit approval. C, D — not started.
- **Gate status:** Ripple scan: Stage A run 2026-09-25, 1 duplication fixed (shell.ts nav/footer lists), deferrals in the Addendum · Impact analysis (`quality/impact-analysis`): run 2026-09-25 before Stage A, 0 High / 4 Med / 3 Low, mitigations in the Addendum · Code review (`/code-review high`, Stages A+B and C): PENDING · Skills for dispatch: `engineering/karpathy-guidelines` (all), `design/frontend-design` (B1, B2, B3), `marketing/copywriting` (B1, B3, B4, B5).

## 10. Open Questions / Approval Needed

Non-blocking (answer any time before the merge to `main`): surname בדרמן / בידרמן; Lognet end month and whether independent work ran in parallel from Aug 2024; law-office screens allowed; commissioning status of the four films. Also: the 21st.dev component's licence is not readable on the listing page; confirm it is MIT (or that the port is transformative enough) before the merge.

**Approval request:** approve this plan as written → I create branch `redesign-v2`, copy the plan to `backlog/`, and dispatch Stage A (A1 ∥ A2). Commit asks follow at each stage gate.

---

## Addendum — 2026-09-25, impact analysis before Stage A (mitigations folded into the Stage A dispatch)

| # | Risk | Severity | Mitigation |
|---|---|---|---|
| 1 | `* { margin: 0 }` in `globals.css` is unlayered, so it beats every layered Tailwind margin utility (`mt-4` silently does nothing) | Med | A1 moves the zero-specificity universal resets into `@layer base` (behavior-preserving for existing CSS) |
| 2 | `container` (`Container.tsx:12`) and `sr-only` are also Tailwind utility names; Tailwind would add `width:100%` + breakpoint max-widths to every `<Container>` | Med | A1 audits every className token against the generated utilities and blocklists collisions with `@source not inline(...)` |
| 3 | The type switch changes every heading: base heading weight 500, tracking, `.scenario::before`, `.founder-name` and the HE `line-height: 1.15` were tuned for serif faces | Med | A1 retunes; orchestrator checks computed font on `/` and `/he` at the Stage A gate, not only in Stage D |
| 4 | Home `<title>`, `SITE_DESCRIPTION`, `OG_IMAGE_ALT` and the footer tag still say "The AI department your office hires"; `site.ts`/`shell.ts` are frozen in Stage B | Med | A2 aligns them with H1 C in Stage A; B1's OG image tagline must equal `OG_IMAGE_ALT` |
| 5 | Stage C deletes `capability-cards.ts`, but `ladder.ts:63-145` (B1) and `about.ts:3,29` (B5) import it | Med | B1 and B5 repoint to `serviceCard()` / `serviceCards()` in Stage B |
| 6 | Tailwind auto-detection would scan `hyperframes/` and `backlog/` (not gitignored); default palette utilities break the "never hardcode hex" rule | Low | A1 scans `src/` only and resets `--color-*: initial`, mapping only site tokens |
| 7 | Worktree isolation under `.claude/worktrees/` would be type-checked by the root tsconfig (`**/*.ts`) | Low | No worktrees in Stage A; A1 proves Tailwind with a PostCSS probe; the gate runs the Turbopack build on the merged tree |

Placeholder markers: `TODO(B2)` marks work-data fields Stage B2 fills; `TODO-owner` marks owner answers. The merge gate greps both: `grep -rn "TODO-owner\|TODO(B2)" src` must be empty before the merge to `main`.

## Addendum — 2026-09-25, Stage A ripple scan: items carried into later stages

| Item | Owner | Detail |
|---|---|---|
| Retired tagline still in `home.ts:92,159` and `opengraph-image/route.tsx:88` | B1 | OG tagline must equal `OG_IMAGE_ALT` — import `SITE_TAGLINE` / `OG_IMAGE_ALT` from `src/lib/site.ts`, never retype it. Merge gate: `grep -rn "AI department your office hires\|מחלקת ה-AI שהמשרד שלכם שוכר" src` must be empty. |
| Ladder links to `/studio/*` via `capabilityCard()` (`ladder.ts:4,67-75,132-140`); ladder rung titles "Managed AI Office" / "משרד AI מנוהל" retype the OFFERS title (`ladder.ts:85,150`) | B1 | Repoint to `serviceCard()`; derive rung titles from `offerCard()` |
| Home "Command Center" is Latin in HE (`home.ts:185`, `ladder.ts:159`) while work data uses "מוקד הבקרה" | B1 | Use one HE name |
| `about.ts:3,29` imports `capabilityCards` | B5 | Repoint to `serviceCards()` |
| `/services/films` renders the old films content ("rendered from code, no synthetic faces") | B4 | Replace in `src/content/services/films.ts` (keep export `filmsContent`) |
| `#start` anchor missing until `ServicePageBody` ships; sprint link lands at the top of `/services/ai-agents` | B3 | `where` section renders `id="start"` |
| `work.ts` reads the Command Center film from `aiOfficeAssistantContent(locale).film` (incl. `mobile`) | B3 | Keep that block's shape or `work.ts` throws |
| Route examples in comments: `CTAButton.tsx:15`, `LangToggle.tsx:9`, `NavLinks.tsx:14-15`, `home/LadderSection.tsx:12` | C1 (LadderSection: B1) | Swap `/offers` examples for `/services` |
| README route tables and intro (`README.md:10,54-88,148-153`) describe `/studio` + `/offers`, omit `/work` + `/services` | C1 | Already in C1's scope; add the new routes |

Stage A additions Stage B must know: `SITE_TAGLINE {en, he}` in `site.ts` is the single source for the home title, `OG_IMAGE_ALT` and the footer tag; work titles live only in `WORK_PAGES` (`src/lib/work-slugs.ts`) — publishing an item needs `published: true` in `work.ts` AND a `WORK_PAGES` entry; Tailwind collisions `container` and `sr-only` are blocklisted; element rules that beat utilities are listed in the `globals.css` header; HE heading weights are tokens `--fw-display` / `--fw-display-h1` redefined on `[lang="he"]`.

## Addendum — 2026-09-25, Stage B results: items carried into Stage C and follow-ups

Owner decisions after comparing with the inspiration site https://roeilustig.com/ : the accent word sits in the H1
(done in the post-B polish), a header **"Get in touch →"** button (Stage C — `SiteHeader.tsx` + `shell.ts`), and
**no hero image** for now. YouTube IDs for the four concept films were verified via oEmbed (author = the owner's
channel `@yairBederman`); three oEmbed titles are upload dates, so identity was confirmed from frames / the channel
description.

| Item | Stage | Detail |
|---|---|---|
| Header "Get in touch →" button | C | Owner decision; header was frozen in B |
| `FounderProfile` `showCredentials` prop | C | Home hides the duplicated credentials with `home.css` (`.home .founder .founder-creds`); replace with a prop |
| Keep `.offers-grid` / `.offer-card` / `.offer-cta` CSS | C | `LinkCardGrid` (service `#start` cards, `/about`, `/services`) depends on them — do NOT delete with the dead offers CSS |
| Dead hero CSS + assets | C | `.hero`, `.hero-scrim`, `.hero-backdrop`, `.hero-schematic` in `globals.css`; `public/videos/hero-ambient.*` + poster unused |
| `hyperframes/cap-agentic-systems/DESIGN.md:120-159` source table | C | Re-point from `src/content/studio/agentic-systems.ts` to `src/content/services/ai-agents.ts` (EN example :126-141, how.steps[3] :115; HE :307-322, :296) |
| `llms.txt/route.ts:25,46` | C | Old "AI department … law offices first" prose, "retainer", and the Lognet sequencing wording |
| `src/lib/offers.ts:42` summary says "monthly retainer" | C | Frozen in B; not rendered today |
| `globals.css:~1337` `.offer-hero h1` letter-spacing beats the HE reset on phones | C | HE page-hero h1s are letter-spaced ≤767px |
| `hyperframes/cap-films` (baked retired code-rendered pipeline) | Follow-up | Dropped from `/services/films`; retire or re-render as a generative-films film |
| `hyperframes/cap-websites` baked node "Films and metadata" no longer matches the page | Follow-up | Re-render with the current `websites.ts` example nodes, or drop the film |
| HE H1 is the short tagline "סוכני AI לעבודה שהמשרד חוזר עליה." (review draft was longer) | Owner | Native pass on all new HE copy, incl. `מטחנת קפה` |
| New service commitments on `/services/managed-office`: a monthly written report and correction-driven tuning | Owner | Confirm before relying on them |
| Film commissioning status (Dallal, coffee grinder, VARriage, ESC); Lognet end month (`TODO-owner` comment in `proof.ts`) | Owner | Copy stays neutral until answered |
