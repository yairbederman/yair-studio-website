# Plan — Studio redesign: ladder + capabilities, editorial type, films, mobile

> **Handoff.** Written 2026-09-24 for `C:/My Projects/yair-studio-website`. Self-contained: an implementer can execute
> it without the chat. On approval, the first action copies this file to
> `backlog/2026-09-24-studio-redesign-plan.md` (plan-handoff convention). Research behind it:
> `backlog/2026-09-24-peer-website-benchmark.md` (≈100 peer sites, 6 tracks).

## Context

The site sells a four-tile service catalogue (managed assistant, sprint, LinkedIn engine, workshops) in Inter on
charcoal, with model-only pricing, a generic founder band, and six looping HyperFrames films set in the same type.
The owner asked for: no AI slop, premium and very simple, services stated concretely (what he does, what the client
receives), the services animated with HyperFrames, existing films fine-tuned, full mobile adaptation, and video
text readable on phones. He listed: agentic systems, website development, video creation, "studio", process
optimization, plus what we know about him.

The peer benchmark (solo AI consultants, boutique studios, AI-video studios, Israeli market) found that credible
peers sell a **3-rung commitment ladder**, name deliverables as **nouns with a clock**, keep **one visible
specialization**, use **one characterful typeface + a mono** on warm near-black, embed motion as **looping video in
frames**, and (in Israel) lead with **WhatsApp** and a plain sentence about **where client data lives**. Inter body
text was the site's single biggest "generic" tell.

**Decisions already taken with the owner (2026-09-24):**

| Decision | Choice |
|---|---|
| Offer shape | **Ladder + capabilities**: homepage routes by commitment (scoping call → Workflow Sprint → Managed AI Office); a "What the studio makes" strip with 5 capability pages, each animated |
| "Studio" meaning | **The AI department a professional office hires** (managed retainer, law first). Command Center = its working face, labelled in build. Films = the studio's signature and proof, not a service tile |
| Pricing | **Model only, no numbers** (unchanged) |
| Type | **Pair A · Editorial**: Newsreader (EN display) + Instrument Sans (EN body); Frank Ruhl Libre (HE display) + Assistant (HE body); Geist Mono kept for schematics |
| Founder facts | Name employers (Viber, Lognet, 888 and earlier); mention the live law-office system (anonymized). **No R&D metrics** on the site |
| Films | All five capabilities animated; **agentic systems + process optimization first**, then websites, films, enablement |
| Mobile | Every route verified at 375px in both locales; film type floor enforced before every render |
| **Audience rule** (owner, 2026-09-24) | **The site faces business clients: owners and office managers of small professional offices and SMB teams. No page, rung, capability, film, or CTA targets R&D or engineering teams.** Retainer, outsourcing, and freelance-style offers are for businesses only. The founder's R&D leadership appears solely as credibility in the founder section |

> **Film spec v2 (owner, 2026-09-24, after the first stills):** the first stills were rejected ("font looks bad,
> elements very small"). Binding for every film from here on: **sans only on frame** (Instrument Sans 600/400 EN,
> Assistant 700/600 HE, Geist Mono for Latin chips only; the serif is a website-only headline voice); **elements
> fill about 80% of the 1920 frame** (rails ~1550px wide, nodes ~40px, cards 2.5–3× the first cut); **type floor
> headlines ≥ 120px, labels ≥ 80px, secondary ≥ 64px** (≈23 / 16 / 12.5px on a phone); one large text moment at
> a time. Renders stay blocked until the owner approves the v2 stills.

## 1. Executive Summary

- **Problem:** The catalogue reads generic and diluted; deliverables are categories, not artefacts; founder proof
  is hidden; films carry the old type; phone legibility of film text is unverified.
- **Goal:** One clear positioning ("the AI department your office hires"), a 3-rung ladder, five concrete
  capability pages with films, an editorial type system, real founder proof, and a mobile-first pass — with the
  honesty grammar intact (no invented metrics, prices, clients, or testimonials).
- **User value:** A visitor understands in one screen what is for sale, what they receive, and how to start; the
  site looks designed rather than templated; Hebrew readers get a native, WhatsApp-first path.
- **Recommended move:** Data-first restructure (all copy stays in `src/content/*`), a small set of new components,
  a type swap through `next/font`, three new bilingual films + one flagship mobile cut, and a font/legibility
  re-tune + re-render of the five bilingual films.
- **Risk level:** Medium-High (IA + copy + 18 renders). Site-code risk is contained (data-driven, no new deps).
- **Size:** ~45 source files changed/created · 3 new + 1 refactored compositions · 18 renders · 0 tests exist
  (no test runner) → build + lint + route smoke + preview gates.

### Decisions D1–D5 — CONFIRMED by the owner 2026-09-24

| # | Decision | Confirmed choice |
|---|---|---|
| D1 | LinkedIn Content Engine | **Fold into the retainer page** as an "Included: content engine" section (`id="content"`); its film rides along **poster-first, click-to-play** (no second autoplaying film per page); old route 308s to `/offers/ai-office-assistant#content` |
| D2 | `/workflows` page | **Fold into `/studio/process-optimization`** (308); the EN-only `meeting-follow-up-workflow` film retires |
| D3 | Flagship film on phones | **Add a 4:5 mobile cut of Command Center** (2 panels + approval column, rows ≥56px on a 1080-wide canvas ≈19px on a phone), served by `FilmPlayer` under 768px. This is a re-layout inside the composition (a `layout` variable with its own coordinate set), not a re-render |
| D4 | Capability films | **3 new + 2 reused**: new for agentic systems, websites, films; `scattered-to-mapped` reused for process optimization; `ai-enablement` reused for enablement |
| D5 | Public dates | **Full dates**: Viber 2016–2023 · Lognet R&D Manager 2023–2026 · independent AI systems architect since Aug 2024 |

## 2. What Will Change

| Area | Change |
|---|---|
| **IA / routes** | Nav → **Studio · Services · About · Contact**. New `/studio` (index) + `/studio/agentic-systems`, `/studio/process-optimization`, `/studio/websites`, `/studio/films`, `/studio/ai-enablement`, implemented as **one dynamic segment per root** (`studio/[capability]/page.tsx` with `generateStaticParams` from `CAPABILITIES`, `dynamicParams = false`, `generateMetadata` → `pageMetadata`) instead of ten wrapper files; HE mirror the same under `(he)/he/studio/`. `/offers` → the ladder page ("Services": 3 rungs; the scoping rung is a plain `Cta` to `/contact`, never an `Offer`). `/offers/ai-office-assistant` stays (retitled "Managed AI Office"); `/offers/ai-workflow-sprint` stays. **308s:** `/workflows` → `/studio/process-optimization`; `/offers/ai-enablement` → `/studio/ai-enablement`; `/offers/linkedin-content-engine` → `/offers/ai-office-assistant#content`; the existing `/offers/content-ad-operations` entry is **repointed to the same final target** (no 2-hop chain); HE pairs derived in `next.config.ts` |
| **Homepage** | 7 sections: Hero (positioning + primary "Book a scoping call", secondary "See the sprint") → Ladder (01/02/03 editorial list) → Proof (Command Center film, "in build" label) → Capabilities strip (5 items, posters, links) → Founder (real facts) → Boundaries (safety + the law-office data sentence) → Final CTA (email + WhatsApp; **WhatsApp first on /he**). Removed from the homepage: Problems cards, Method, Evidence film, Proof cards (content survives on the retainer page and /about) |
| **Capability pages** (×5) | One template: hero (+ film) → "What I do" → "What you receive" (deliverables as nouns; day counts only where the owner commits) → "How it runs" (numbered, copper human step) → "What stays human" → "Where it shows up" (which rung includes it) → CTA. **AI enablement is reframed for business teams**: hands-on sessions where an office's staff learn to run AI on their own recurring work (intake, documents, follow-up, reporting) with the approval habits that keep it safe; deliverables: session days on the team's real tasks, a written playbook for the office's tools, the working setups, a follow-up visit. No "codebase", "engineers", "R&D", "agent workflows for developers" anywhere on the site |
| **Typography** | `src/lib/fonts.ts`: Inter → Instrument Sans (body) + Newsreader (display, `opsz` axis) + Frank Ruhl Libre (HE display); keep Geist Mono + Assistant. `globals.css`: display serif on h1–h3 and card titles, tracking retuned for serif, `[lang=he]` heading re-assert → Frank Ruhl Libre; wordmark stays sans (Instrument Sans 600) + mono "STUDIO" |
| **Founder / proof** | `proof.ts`: role line + career spine with employers (888/Taldor/Leumi/El Al → Viber 2016–23 → Lognet 2023–26 → y[AI]r studio, independent since Aug 2024); credentials: R&D leadership, multi-agent/automation builder, live anonymized law-office system, bilingual delivery. No metrics. Illustrative workflow cards stay badged "Sample data" on /about |
| **Mobile** | Film frames full-bleed under 768px (edge to edge, no radius); flagship 4:5 mobile cut (D3); film toggle ≥44px; serif h1 scale on phones; ladder/strip stack; every route screenshot-verified at 375px EN+HE |
| **Films (existing)** | Re-tune the five bilingual films (`command-center`, `workflow-sprint`, `scattered-to-mapped`, `linkedin-content-engine`, `ai-enablement`): new type (Newsreader/Instrument Sans EN, Frank Ruhl Libre/Assistant HE, Geist Mono), type floor (headline moments ≥84px, labels ≥64px on the 1920 canvas), trim dead intro time, 375px legibility gate, re-render 10 assets + posters. `meeting-follow-up-workflow` retires (EN-only; its page folds). `hero-ambient` and `wordmark-sting` untouched |
| **Films (new)** | `cap-agentic-systems`, `cap-websites`, `cap-films` (~10s, bilingual, schematic grammar, no bloom) + the Command Center 4:5 mobile variant. Stories = each page's `example.map` nodes (three-source rule) |
| **SEO / data** | `site.ts` PAGES + HE strings for all new/removed routes; `SITE_DESCRIPTION`; `SERVICES` = 2 rungs + 5 capabilities; JSON-LD OfferCatalog; `llms.txt` About text; sitemap derived |
| **Docs** | README route table + film inventory; PRODUCT.md "Users" (drop the R&D/engineering-leader buyer; enablement buyer = a business team) and "Product Purpose" (4 offers → ladder + capabilities); LAUNCH-CHECKLIST founder-facts item; each touched film's DESIGN.md/REVIEW.md; memory notes (incl. the audience rule) |

## 3. What Will NOT Change

- Palette and tokens (warm charcoal + copper), the two-root EN/HE architecture, `localePaths` pairing rule,
  `OfferPageBody` section order for the two rungs, `FilmPlayer` poster-first / reduced-motion / `intro` contract.
- Pricing stays model-only; no numbers, no testimonials, no client names, no metrics; "Sample data" chip on the
  Command Center film; illustrative cards stay illustrative.
- `hero-ambient` backdrop, `wordmark-sting`, the film pipeline (pinned `hyperframes@0.6.84` via `npx --yes`,
  alpha WebM master → ffmpeg charcoal MP4 + poster), no `hyperframes init` (global-skills pollution).
- Contact channels (email primary in EN, WhatsApp number), Vercel Analytics, OG image route (default font; no
  binaries), `.gitignore`d tooling.

## 4. Why This Is Worth Doing

- A visitor understands the offer in one screen: what is for sale, what they receive, how to start.
- Founder-led proof (real career, live system, inspectable product film) replaces "sample" positioning — the
  strongest substitute a solo operator has for client logos.
- The type swap removes the site's loudest generic tell and makes the films and site read as one designed system.
- Hebrew readers get the local norm (WhatsApp first, data sentence) that almost no local competitor provides.
- Mobile becomes a first-class surface: the films are readable on the device most Israeli SMB owners use.

## 5. Implementation Plan

Sequencing: **WS-0 → WS-A → (WS-B ∥ WS-C ∥ WS-D) → WS-E → WS-F → Integration.** Each workstream is one subagent
with a disjoint file set; the orchestrator never implements (one-line edits excepted).

| Workstream | Files (touch nothing else) | Depends on | Verification command / gate |
|---|---|---|---|
| **WS-0 Contract** | `src/lib/capabilities.ts` (new, import-free like `offers.ts`), `src/lib/offers.ts` (→ 2 rungs), `src/content/studio/types.ts` (new), `src/content/offer-cards.ts` (drop retired HE strings), `src/content/offers-index.ts` (ladder skeleton — must land in the same change: its `routeTo()` calls throw at module init once keys are gone), `src/lib/site.ts` (EN_PAGES + HE_PAGE_STRINGS for every new page, retired routes removed, `SERVICES = [...OFFERS, ...CAPABILITIES]`, `SITE_DESCRIPTION`), `next.config.ts` (3 redirects + repointed chain) | — | `npm run build` must pass at the end of WS-0 on its own (module-init throws are the failure mode); smoke that PAGES has every `/studio/*` EN+HE pair |
| **WS-A Type system** | `src/lib/fonts.ts` (new loaders + `fontVariables`), `src/app/globals.css` (type + wordmark + `[lang=he]` sections only): `--font-display` → Newsreader, `--font-body`/`--font-body-en` → Instrument Sans, new `--font-display-he` → Frank Ruhl Libre and the HE heading rule (`globals.css:231-236`) switched to it; `.wordmark` pinned to the sans; `.founder-name` and `.scenario::before` may take the serif deliberately; new class names added to the HE re-assert list (`:243-250`) | — | `npm run build`; preview screenshots 1440 + 375, `/` and `/he` (headings serif, Hebrew headings Frank Ruhl Libre, wordmark unchanged) |
| **WS-B Content EN+HE** | `src/content/home.ts`, `offers-index.ts`, `shell.ts`, `proof.ts`, `about.ts`, `contact.ts`, `offers/ai-office-assistant.ts` (+included section, film), `offers/ai-workflow-sprint.ts` (copy pass), `studio.ts` + `studio/{agentic-systems,process-optimization,websites,films,ai-enablement}.ts` (new; enablement is **rewritten for business teams**, not migrated verbatim from `offers/ai-enablement.ts`), `src/app/llms.txt/route.ts` text, `src/components/JsonLd.tsx` (SERVICES source) | WS-0 | `npx tsc --noEmit`; anti-slop grep (the 47-word list + "transform/revolutionize/seamless/unlock"); **audience grep: zero hits for `engineer`, `R&D`, `codebase`, `developer`, `stack` in `src/content` outside the founder credentials**; hebrew-quality pass on every `he` object; three-source trace table per film string |
| **WS-C Components + routes + layout CSS** | `src/components/home/{LadderSection,CapabilityStrip,ProofFilmSection}.tsx` (new; `LadderSection` extracts the inline link-card grid from `OffersIndexPageBody.tsx:26-41`), `src/components/pages/{HomePageBody,OffersIndexPageBody,StudioIndexPageBody,CapabilityPageBody}.tsx` (`CapabilityPageBody` = `OfferHero` + `OfferSection`/`ProcessFilm` + `ScenarioList` + `OfferCardGrid` + `OfferSteps` + `OfferCTA`, no new primitives), `src/components/offers/OfferPageBody.tsx` (optional `included` section, `id="content"`), `src/components/FilmPlayer.tsx` (mobile variant: `mobile?: {mp4,webm,poster}` resolved in the same post-hydration effect as `showVideo`, before `<video>` mounts; two `next/image` posters, one CSS-gated `display:none`; `autoplay={false}` mode that mounts the video only on Play), `src/components/ProcessFilm.tsx` (pass-through), `src/app/(site)/{studio/page.tsx,studio/[capability]/page.tsx,offers/page.tsx}` + HE mirrors (new/modified), delete `src/app/*/workflows`, `*/offers/ai-enablement`, `*/offers/linkedin-content-engine` pages + `src/content/workflows.ts` + `src/components/pages/WorkflowsPageBody.tsx`, `globals.css` (layout sections only: ladder, strip, capability page, mobile full-bleed film via negative inline margins, `.film-frame.has-mobile` 4/5 aspect **opt-in** so 16:9 films and the hero backdrop are untouched) | WS-0, WS-A | `npm run lint` (watch `react-hooks/exhaustive-deps`, `no-img-element`); `npm run build`; route smoke: every PAGES path 200, retired routes + HE pairs 308 to a PAGES path, unknown `/studio/x` 404; preview 1440 + 375 both locales |
| **WS-D-prep Film fonts + floor audit** | `hyperframes/_fonts/` (Newsreader 500, Instrument Sans 400/600, Frank Ruhl Libre 500 hebrew, woff2 from Google Fonts, OFL), per-film `assets/fonts/*` + `@font-face` blocks, a size audit table per film (every text moment vs the floor) | WS-A | fonts load in `npm run check`; audit table in each REVIEW.md |
| **WS-D Film re-tune ×5** (2 agents at a time) | `hyperframes/{command-center,workflow-sprint,scattered-to-mapped,linkedin-content-engine,ai-enablement}/{index.html,DESIGN.md,REVIEW.md}`, `public/videos/<film>{,-he}.{mp4,webm}` + posters. Each film's `COPY` object is re-traced to the **final** site strings (they bake `home.ts` kicker/body/safety, `evidence` items, each page's `example.map`). The `ai-enablement` film's R&D labels ("Playbook for your stack", "review stays with your engineers") are replaced by the business-team strings from the new page | WS-D-prep, **WS-B copy approved at the Phase 1 stop** | per film: `npm run check` exit 0; 375px legibility snapshot (peak + closing, EN+HE) meets the floor; render EN+HE; loop-seam first/last-frame diff; `ffprobe` size ≤1.5 MB mp4; posters regenerated |
| **WS-E New films ×3 + flagship 4:5 cut** | `hyperframes/cap-agentic-systems`, `cap-websites`, `cap-films` (new, scaffold copied from `linkedin-content-engine`), `hyperframes/command-center` (`layout` variable `mobile` with its own 1080×1350 coordinate set), `public/videos/cap-*` + `command-center{,-he}-mobile.*` | WS-B (final copy), WS-D for command-center | same gates; **STOP: owner reviews composition stills (EN+HE, 375px) before each render batch** |
| **WS-F Docs + memory** | `README.md`, `PRODUCT.md`, `LAUNCH-CHECKLIST.md`, touched `DESIGN.md`/`REVIEW.md`, `~/.claude/projects/.../memory/*` | all | `/ripple-scan` clean |
| **Integration** (orchestrator) | wire film paths into content (data only); full 375px pass; gates; commit asks | all | see §9 |

**Phases and stop points**

1. **Phase 1 — site** (WS-0 → WS-A → WS-B ∥ WS-C ∥ WS-D-prep): ends with a preview review of `/`, `/he`,
   `/offers`, `/studio/*`, both rungs at 1440 and 375 — **the copy stop**: every string a film bakes is frozen
   here. Commit 1 (type) and Commit 2 (IA + content + components), each on explicit approval, explicit paths.
2. **Phase 2 — films**: WS-D (re-tune, 2 films at a time, command-center last). **STOP** for stills review per
   batch. Commit 3 (re-tuned films). WS-E next. **STOP** for stills review. Commit 4 (new films + mobile cut).
3. **Phase 3 — integration + docs**: films wired (data only), mobile pass, gates, WS-F. Commit 5 (docs).

**Implementation notes (verified against the code by the review pass)**

- Removing an offer key without rewriting `offers-index.ts` throws at module init (`offerCard()` throws on a
  missing/href-less key) — WS-0 is one atomic change that must build on its own.
- `pageMetadata()` throws on an unknown path and `PAGES` throws on a missing HE pair — every new page needs both
  an `EN_PAGES` entry and an `HE_PAGE_STRINGS` entry; retired routes must leave `EN_PAGES` or the sitemap and
  `llms.txt` publish redirecting URLs.
- `SERVICES` is derived from `OFFERS` (`site.ts`) and feeds JSON-LD + `llms.txt`; it must become
  `[...OFFERS, ...CAPABILITIES]`, and `capabilities.ts` must stay `@/`-import-free (site → capabilities → site is a
  cycle).
- Hash redirect destinations pass through Next unvalidated; the retainer's included section must use `id="content"`
  exactly (the `.section[id]` scroll-margin rule already clears the sticky header).
- Hard-coded copy naming the retired offers lives in `site.ts` (SITE_DESCRIPTION, `/` and `/offers` HE strings),
  `llms.txt/route.ts`, `home.ts`, `offers-index.ts`, and the JSON-LD catalog name — all in WS-0/WS-B scope.
- `FilmPlayer` reads `<source>` once; the mobile choice must be resolved before the `<video>` mounts (same effect
  as the reduced-motion check). `intro` has no mobile counterpart and stays unused. `next/image` for both posters.
- The Command Center DESIGN.md documents a one-film-per-page rule for mobile data — kept as "one **autoplaying**
  film per page"; the included LinkedIn film is poster-first click-to-play.
- Documented film re-render triggers: command-center bakes `home.ts` kicker, card-body nouns and a safety item;
  scattered-to-mapped bakes the evidence items and mapped nodes; the offer films bake their page's `example.map`
  and a lead fragment. The retuned COPY objects trace to the new strings before render.
- `home.ts` header comment claims the hero secondary CTA is `#how-i-work`; it is the sprint link — fix the comment
  when `MethodSection` is dropped (nothing else links to `#how-i-work`).
- `globals.css:1168` comment and `README.md` route table mention `/workflows` — WS-F.

Estimated agent time: Phase 1 ≈ 1 working day; Phase 2 ≈ 2–3 days including review stops; Phase 3 ≈ half a day.

**Copy direction (drafted in WS-B under `marketing/copywriting` + `copy-editing`; owner reviews at the Phase 1 stop)**

- Hero (EN, recommended): "**The AI department your office hires.**" Lead: "y[AI]r studio runs the recurring work
  of small professional offices, law first: briefings, triage, documents, follow-up, with a person approving what
  matters. Start with one workflow, or hire the studio to run the day." HE drafted natively (hebrew-quality
  protocol), not translated.
- Ladder: **01 Scoping call** (free, 20 minutes, no obligation; you get a written read of the workflow and the
  rung that fits) · **02 Workflow Sprint** (fixed price; workflow map, three automations, approval boundaries,
  handoff notes; delivered within days) · **03 Managed AI Office** (setup + monthly retainer; briefing, triage,
  documents, follow-up; Command Center as the working face; content engine included per D1).
- Capabilities: Agentic systems · Process optimization · Websites · Films · AI enablement — each page states "What I
  do" and "What you receive" as concrete nouns (e.g. Films: "10–20-second looping film, EN + HE variants, web /
  LinkedIn / Reels exports, poster frames, the source composition is yours; no synthetic faces or voices").
  Every page is written to a business owner or office manager (audience rule); enablement addresses "your team"
  and "your office's tools", never engineers.
- Boundaries band adds the law-office sentence built only from existing assertions: private environment per
  office, read-only start, nothing sent or changed without approval, unclear items go to a person, where it runs
  is agreed in the first conversation.

## 6. Impact

| Dimension | Impact |
|---|---|
| UX | One positioning, 3 rungs, 5 concrete capability pages; homepage shrinks from 9 to 7 sections; WhatsApp-first on /he |
| Data / output | All copy stays locale-keyed data; three retired routes 308; sitemap/llms/JSON-LD derived from the new lists |
| Cost / performance | Fonts via `next/font` (self-hosted, swap); ~+1 font family per locale; films unchanged in count served per page; mobile flagship cut adds ~1 MB served only under 768px |
| Existing behaviour | FilmPlayer contract preserved; film pipeline preserved; redirects keep old links alive |
| Maintenance | Capability pages share one template + one type; film type floor documented per DESIGN.md; docs updated in WS-F |

## 7. Main Risks & Mitigations

| Risk | Mitigation |
|---|---|
| **Biggest assumption:** the "AI department" ladder is what Yair wants to sell, and Israeli law offices buy a managed service from a solo operator | Copy is data; swapping the positioning later is cheap. Phase 1 stop shows the live pages before films are rendered. Fallback: keep the ladder, soften the department framing |
| Serif display reads "AI-lab" or loses legibility at small sizes on dark | Serif only on h1–h3 and card titles; body stays sans; cream reserved for document-like surfaces; fallback Pair B (specimen exists) |
| Font swap breaks film layouts (serif metrics differ from Inter) | Per-film re-measure at the type floor; 375px snapshot gate before every render; DESIGN.md records new sizes |
| Redirect into a 404 (cached forever) | Route smoke script asserts every redirect destination is in PAGES before commit |
| Hebrew copy quality drifts | hebrew-quality protocol per `he` object; owner reads `/he` at the Phase 1 stop; Hebrew never letter-spaced; HE headings re-asserted to Frank Ruhl Libre |
| Render load (18 renders) | Two film agents at a time; command-center last (heaviest); mp4 ≤1.5 MB budget; WebM kept as fallback only |

## 8. Files Likely Touched

- **lib (modify):** `src/lib/fonts.ts`, `src/lib/offers.ts`, `src/lib/site.ts` · **(create):** `src/lib/capabilities.ts`
- **content (modify):** `src/content/{home,offers-index,shell,proof,about,contact,offer-cards}.ts`, `src/content/offers/{ai-office-assistant,ai-workflow-sprint}.ts` · **(create):** `src/content/studio.ts`, `src/content/studio/{types,agentic-systems,process-optimization,websites,films,ai-enablement}.ts` · **(delete):** `src/content/workflows.ts`, `src/content/offers/{linkedin-content-engine,ai-enablement}.ts` (content migrates)
- **components (create):** `src/components/home/{LadderSection,CapabilityStrip,ProofFilmSection}.tsx`, `src/components/pages/{StudioIndexPageBody,CapabilityPageBody}.tsx` · **(modify):** `src/components/pages/{HomePageBody,OffersIndexPageBody}.tsx`, `src/components/offers/OfferPageBody.tsx`, `src/components/{FilmPlayer,ProcessFilm,JsonLd}.tsx` · **(delete):** `src/components/pages/WorkflowsPageBody.tsx`
- **app (create):** `src/app/(site)/studio/page.tsx`, `src/app/(site)/studio/[capability]/page.tsx` + the same two under `src/app/(he)/he/studio/` · **(delete):** `src/app/(site)/workflows/`, `src/app/(site)/offers/{ai-enablement,linkedin-content-engine}/`, HE mirrors · **(modify):** `src/app/globals.css`, `src/app/llms.txt/route.ts`, `next.config.ts`
- **films (modify):** `hyperframes/{command-center,workflow-sprint,scattered-to-mapped,linkedin-content-engine,ai-enablement}/**` · **(create):** `hyperframes/_fonts/`, `hyperframes/cap-{agentic-systems,websites,films}/**` · **assets:** `public/videos/*` (re-rendered + new; `meeting-follow-up-workflow.*` deleted)
- **docs (modify):** `README.md`, `PRODUCT.md`, `LAUNCH-CHECKLIST.md` · **(create):** `backlog/2026-09-24-studio-redesign-plan.md` (this plan)

## 9. Verification Plan

- **Automated:** `npm run lint` · `npm run build` · `npx tsc --noEmit` · route smoke (every `PAGES` path → 200;
  `/workflows`, `/offers/ai-enablement`, `/offers/linkedin-content-engine` + HE pairs → 308 to a path in PAGES) ·
  per composition `npm run check` (exit 0) · `ffprobe` duration/size per asset · `git diff --check`.
- **Manual / live (preview):** `/`, `/he`, `/offers`, `/he/offers`, `/studio` + 5 capability pages (EN+HE), both
  rungs, `/about`, `/contact` at **1440 and 375**; films load, loop, pause; reduced-motion shows posters; mobile
  flagship 4:5 variant served under 768px; no console errors; Hebrew headings in Frank Ruhl Libre, body Assistant.
- **Film gates per render:** 375px legibility snapshot at the peak and closing (EN+HE) meets the floor (headline
  ≥84px, labels ≥64px on the 1920 canvas; mobile cut rows ≥56px on 1080); loop-seam diff; owner stills approval.
- **Success criteria:** all automated checks green; every page readable on a 375px phone in both locales; every
  service page states what is done and what is received in concrete nouns; no fabricated numbers, clients, or
  testimonials anywhere; anti-slop word grep returns zero hits in `src/content`.
- **Gates:** Ripple scan (`/ripple-scan`): PENDING · Impact analysis (`quality/impact-analysis`): PENDING · Design
  critique (`/impeccable critique`, lens only): PENDING · Code review (`/code-review high`): PENDING · Skills:
  `engineering/karpathy-guidelines` ✔ (all code workstreams), `marketing/copywriting` + `copy-editing` (WS-B),
  `design/frontend-design` (WS-A/WS-C), `hyperframes` + `hyperframes-core` + `hyperframes-animation` +
  `hyperframes-creative` + `hyperframes-cli` + `motion-graphics` (WS-D/WS-E).

## 10. Open Questions / Approval Needed

No open questions remain: D1–D5 are confirmed. **Approving this plan = dispatch approval for Phase 1**
(WS-0 → WS-A → WS-B ∥ WS-C ∥ WS-D-prep). Stop points stay: the copy stop at the end of Phase 1, an owner stills
review before every render batch, and explicit approval before every `git commit` (explicit paths, never
`git add -A`; `.agents/` stays out).
