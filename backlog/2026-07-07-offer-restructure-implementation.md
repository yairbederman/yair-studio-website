# Offer Architecture Restructure — Implementation Plan

## Context

The full-site critique (snapshot `.impeccable/critique/2026-07-06T23-18-39Z__src.md`) found the site selling an outdated taxonomy: 3 live offers + 2 coming-soon cards + 3 orphaned routed pages, no mentorship surface, no real proof, and the Hebrew homepage missing its founder/proof trust layer. The owner then supplied the real commercial offer set and approved (recorded in `backlog/2026-07-07-offer-architecture-restructure.md`): **4 offers, Managed AI Office Assistant as flagship leading the homepage, Follow-Up Machine folded into it, anonymized law-office case study, pricing model shown without numbers.** The bolder visual redesign is explicitly a separate follow-up plan; this plan restructures content + taxonomy so the redesign later styles the final story.

## 1. Executive Summary

- **Problem:** The site sells last quarter's taxonomy; the real offers (managed assistant retainer, sprint, LinkedIn engine, workshops) have no surface; HE homepage lacks the trust layer.
- **Goal:** One coherent 4-offer catalog in both locales, flagship-led homepage, real (anonymized) proof, mentorship present.
- **User value:** Visitors see exactly what is for sale, in ≤4 choices, with a real case study and a clear entry path (sprint → assistant).
- **Recommended move:** Extend the existing offer template (optional `caseStudy` + `pricing` sections), add 4 new routes additively, then one atomic removal commit with 308 redirects.
- **Risk level:** Medium (one dangerous commit; copy quality in two languages).
- **Size:** ~15 modified · ~11 created · ~16 deleted site files, plus 4 hyperframes film projects (2 reworks, 2 new) · 0 new tests (no test suite exists; verification = build + lint + live + film snapshot review).

**New routes** (EN + `/he` mirror each):

| Offer | Route | Old routes 308→ here |
|---|---|---|
| Managed AI Office Assistant (flagship) | `/offers/ai-office-assistant` | follow-up-machine, internal-ai-systems, dashboards-automation |
| AI Workflow Sprint (fixed price, map → 3 automations) | `/offers/ai-workflow-sprint` | ai-workflow-audit, ai-ops-pilot |
| LinkedIn Content Engine | `/offers/linkedin-content-engine` | content-ad-operations |
| AI Enablement Workshops (mentorship) | `/offers/ai-enablement` | — (new) |

Coming-soon cards (meeting-to-tasks, office-command-center) disappear; their search-intent terms (morning briefing, command center, meetings→tasks) are carried as flagship capability copy so schema.org/llms.txt don't lose them.

**Films (hyperframes):** every offer gets a bespoke process film, produced with the existing pipeline (`hyperframes/<film>/` with DESIGN/STORYBOARD/SCRIPT + GSAP compositions; `npm run check` → snapshot review → `render` to `public/videos/`). All film text traces to the new offer content files (three-source rule), so films are authored only after copy approval:

| Film | For | Basis | Story (one line) |
|---|---|---|---|
| `office-assistant` (~18s, the showpiece) | Flagship page + candidate homepage hero film | Rework of `one-system` (labels are the retired taxonomy) | A day in the office: morning briefing → email triage → document flow → follow-up chase, each gated at one copper human-approval checkpoint, settling into "your office, with clear next actions" |
| `workflow-sprint` (~14s) | Sprint page | Rework of `audit-process` (has "AI WORKFLOW AUDIT" baked into pixels) | Map one workflow → sort into automatic / AI-assisted / human → three automations click into place → first working workflow |
| `linkedin-engine` (~12s) | LinkedIn Content Engine page | New | Source material → drafts queued → review queue → human approval → published, and the weekly rhythm keeps ticking |
| `ai-enablement` (~12s) | Workshops page | New | The team's own workflow on the table → hands-on session → the team runs it themselves — capability stays in-house |

Film production is decoupled from the restructure deploy (`film` is an optional content field): the taxonomy ships first, films land as content-only commits per film, flagship first.

**Owner requirement (2026-07-07): films must work on desktop AND mobile, in Hebrew and English.** Concretely: every film's on-frame text must stay legible when the 16:9 frame renders at ~330px wide (mobile), so compositions use fewer/larger text elements than the retired films; each film needs an EN render and an HE (RTL) render wired per locale in the offer content files (the `film` block is already locale-keyed, so the HE block points at the HE render). Poster + reduced-motion behavior already work on both form factors via FilmPlayer.

## 2. What Will Change

| Area | Change |
|---|---|
| Offer taxonomy | `src/lib/offers.ts`: 4 new entries replace 5; delete dead `AUDIT_OFFER`/`AI_OPS_PILOT_OFFER`; add `getOffer(key)` helper |
| Routes/metadata | `src/lib/site.ts`: 4 new EN_PAGES + HE_PAGE_STRINGS pairs in, 6 old out; `/offers` + `/contact` descriptions rewritten (they feed meta + llms.txt) |
| Redirects | `next.config.ts`: 6-entry `OLD_TO_NEW` map flat-mapped to 12 EN+HE `permanent` (308) redirects |
| Offer template | `types.ts` + `OfferPageBody.tsx`: optional `caseStudy` (after `example`) and `pricing` (after `how`) sections; badge label distinguishes "anonymized client" from "sample data" |
| Content | 4 new/reworked offer content files (EN+HE); `offers-index.ts` gets the HE-style decision router + fit section in BOTH locales; `home.ts` hero/offers/method repositioned around the flagship; stale-copy sweep (contact.ts, shell.ts WhatsApp prefill, llms.txt disclaimer, README route table) |
| Homepage parity | `HomePageBody.tsx`: remove `locale === "en"` gate on Founder + Proof sections (HE content already exists in proof.ts) |
| PRODUCT.md | Rewritten first: new offer set + owner-approved bolder register (reviewed separately before code) |
| Films | 4 new offer films via hyperframes (table in §1): rework `one-system`→`office-assistant` and `audit-process`→`workflow-sprint`, author `linkedin-engine` + `ai-enablement`; wire each into its offer content file; retire the stale audit film and orphaned one-system video from `public/videos/` |

## 3. What Will NOT Change

- Visual design, tokens, typography, motion — the bolder redesign is a follow-up plan.
- `shellContent().workflowCta` stays "Send one stuck workflow" site-wide; the flagship page overrides its own hero/CTA labels locally (fields already exist).
- Contact channels (email primary, WhatsApp secondary), domain email swap deferred until the mailbox exists.
- Existing homepage/workflows films (`scattered-to-mapped`, `meeting-follow-up-workflow`) — their source copy is unchanged, so no re-render (their DESIGN.md re-render rule doesn't fire).
- `/workflows`, `/about` pages (copy verified generic; untouched except ripple-scan check).
- URL scheme, locale-paths mechanism, JsonLd structure (SERVICES re-derives automatically).

## 4. Why This Is Worth Doing

- The site finally sells what the owner actually sells — flagship retainer revenue gets its page and headline.
- Fixes 3 of the critique's 4 P1s in one move (HE trust layer, orphaned taxonomy, mentorship + real proof).
- ≤4-option catalog with a decision router in both locales removes the site's only >4-choice decision point.
- Real anonymized case study starts retiring the "Sample data"-only proof problem.

## 5. Implementation Plan

Feature branch; build stays green at every phase; deploy once at the end.

1. **PRODUCT.md rewrite** → STOP: owner reviews the new register + offer purpose text.
2. **HomePageBody gate removal** (independent quick win; verify HE founder/proof render RTL).
3. **Template extension** (`caseStudy`/`pricing` types + render slots; nothing consumes them yet).
4. **Additive routes**: 4 content files (EN+HE) + 8 page files + site.ts entries. Old routes still live; new pages unlinked. → STOP: owner reviews all EN+HE copy drafts, especially flagship claims + case-study facts.
5. **Repositioning**: OFFERS + HE_CARDS rewrite, offers-index router (both locales), home.ts hero/offers/method.
6. **Atomic removal** (the dangerous commit): delete 12 old page files + 4 old content files + dead constants + 6 site.ts route pairs, AND add the 12 redirects in the same commit (redirects run before filesystem routes — landing them earlier would shadow live pages). Full `next build` before commit (invariants fire at build, not typecheck).
7. **Stale-copy sweep**: site.ts descriptions, home method/finalCta, contact.ts steps, shell.ts prefill, llms.txt disclaimer ("...except the anonymized case study..."), README route table; mark backlog decision file resolved.
8. **Gates + verification** (section 9), then single deploy — new offer pages ship film-less at this point.
9. **Films, one at a time** (flagship → sprint → linkedin → enablement). Per film: author DESIGN/STORYBOARD/SCRIPT from the approved offer copy → build compositions → `npm run check` → snapshot stills → STOP: owner reviews stills → `render` (mp4 + webm + poster, target ≤1.5 MB mp4 like existing films) → wire `film` block into the offer content file (content-only commit). Retire stale videos (`ai-workflow-audit-process.*`, `one-system-overview.*`) when their replacements land.

## 6. Impact

| Dimension | Impact |
|---|---|
| UX | 4 clear offers + router; flagship story; HE gets founder/proof + same router as EN |
| Data/output | sitemap/llms.txt/JsonLd re-derive; 6 URLs become 308s; meta descriptions updated |
| Cost/perf | Site loses 2 unused film variants from pages (files kept); no new runtime deps |
| Existing behavior | Old offer URLs redirect (search visitors keep landing somewhere current) |
| Maintenance | −2 content files net; dead constants removed; one taxonomy instead of two |

## 7. Main Risks & Mitigations

| Risk | Mitigation |
|---|---|
| **Biggest assumption: the flagship is sellable as described** (briefings, email triage, document workflows, private environment, ~setup+retainer). If ops gaps make claims premature, the page overpromises | Copy stop-point (phase 4); every capability claim traces to the owner's own offer table; sprint remains the promoted entry step |
| Atomic removal commit breaks build (4 invariants, 7 files) | Single commit, `next build` + lint locally before committing; phase order keeps everything else green |
| Hebrew copy quality (register, RTL) | hebrew-quality drafting protocol as in existing files; owner reviews at stop-point; live RTL verification per page |
| Case-study facts unavailable/thin | `caseStudy` is an optional type field — flagship can ship without it and gain it in a content-only commit later |
| SEO: 6 indexed URLs move at once | 308s preserve equity; redirected URLs removed from sitemap; descriptions rewritten same deploy |
| Coming-soon intent terms lost from schema | Flagship capabilities copy explicitly carries "morning briefing", "command center", "meetings to tasks" |
| Film renders drift off-brand or bloat (18 MB webm precedent) | Snapshot-review STOP per film before render; token/motion rules copied from existing DESIGN.md conventions; size budget ≤1.5 MB mp4 / ≤3 MB webm enforced at wiring time |

## 8. Files Likely Touched

- **Taxonomy/routing:** modify `src/lib/offers.ts`, `src/lib/site.ts`, `src/content/offer-cards.ts`, `next.config.ts`
- **Template:** modify `src/content/offers/types.ts`, `src/components/offers/OfferPageBody.tsx`
- **Content:** create `src/content/offers/{ai-office-assistant,ai-workflow-sprint,linkedin-content-engine,ai-enablement}.ts`; modify `src/content/{offers-index,home,contact,shell}.ts`, `src/app/llms.txt/route.ts`; delete `src/content/offers/{ai-workflow-audit,ai-ops-pilot,follow-up-machine,internal-ai-systems,dashboards-automation,content-ad-operations}.ts` (linkedin/sprint files are new rewrites, not renames)
- **Pages:** create 8 `page.tsx` (4 routes × EN/HE); delete 12 old `page.tsx`; modify `src/components/pages/HomePageBody.tsx`
- **Films:** create `hyperframes/{office-assistant,workflow-sprint,linkedin-engine,ai-enablement}/` (design docs + compositions; first two seeded from `one-system`/`audit-process`); create 12 files in `public/videos/` (4 × mp4/webm/poster); delete 6 stale video files; modify the 4 offer content files to add `film` blocks
- **Docs:** modify `PRODUCT.md`, `README.md` (route table), `backlog/2026-07-07-offer-architecture-restructure.md` (mark decided); copy this plan to `backlog/2026-07-07-offer-restructure-implementation.md` on approval

## 9. Verification Plan

- `npm run build` (catches all four taxonomy invariants) + `npm run lint` after every phase; both clean before each commit.
- Live (preview server, both locales): all 4 new offer pages render EN+HE; old URLs 308 to correct targets (`curl -I`); /offers shows exactly 4 cards + router; HE homepage shows founder + proof sections in RTL; sitemap.xml contains new routes only; llms.txt reflects new taxonomy and amended disclaimer.
- JSON-LD: OfferCatalog lists the 4 new serviceNames.
- Films: `npm run check` (lint/validate/inspect) green per film; owner approves snapshot stills before render; rendered sizes within budget; FilmPlayer plays + pauses on the live page in both locales; poster-only under `prefers-reduced-motion`.
- Film status (2026-07-07): **Film 1 `office-assistant` DONE** — stills approved (EN+HE), rendered within budget (EN 0.71 MB mp4 / 1.73 MB webm; HE 0.53 / 1.27; both `alpha_mode=1`), wired locale-keyed into `ai-office-assistant.ts`, build+lint clean, live-verified both locales (play/pause toggles; reduced-motion path is the shared FilmPlayer mechanism, unchanged). **Film 2 `workflow-sprint` DONE** — stills approved, rendered within budget (EN 0.74 / 1.80; HE 0.57 / 1.33; `alpha_mode=1`), wired into `ai-workflow-sprint.ts`, build+lint clean, live-verified both locales. Films 3–4 pending.
- ⚠️ **For films 2–4 (learned on film 1, cost two blank renders):** never set `dir="rtl"` on `<html>` in a hyperframes composition — `hyperframes render` silently emits fully-transparent frames (snapshots look fine, no console errors). Mirror positionally and set `dir` only on flex/text elements. Render the HE variant by flipping the declared `lang` default, not via `--variables` (unverified on Windows shells). Details: `hyperframes/office-assistant/REVIEW.md`.
- Gate status (2026-07-07, phases 1–8 complete; films pending):
  - `Ripple scan (/ripple-scan)`: RUN — 2 stale comment examples fixed; 2 🟡 flags (repeated who-section heading → copy-polish item; orphaned videos → resolved by deletion)
  - `Code review (/code-review high)`: RUN — 8 finder angles, 10 confirmed findings, all fixed (missing section-id anchors, garbled HE sentence, stale SITE_DESCRIPTION/HE home title, badge-in-h2 accessible-name leak, localePaths now imported in next.config, 12 hardcoded CTA hrefs re-single-sourced to shellContent, OFFERS literals replaced by the new offerCard() resolver, engagementNote/status/steps dead code deleted, 2 orphaned video sets deleted). One downgrade: redirect-destination build validation is a comment, not code (the config transpiler cannot resolve site.ts's aliased transitive imports)
  - `Build + lint`: CLEAN after every phase (final: 25 routes, 0 errors)
  - `Live verify`: DONE on the production build — 12×308 redirects to correct targets, 8 new pages 200, sitemap/llms.txt/JSON-LD carry only the 4-offer taxonomy, HE homepage renders founder+proof in RTL, #pricing/#how/#build anchors resolve
  - `Impact analysis`: N/A — impact matrix produced during planning (Explore/Plan validation above)

## 10. Open Questions / Approval Needed

1. **Case-study facts (needed at phase 4, not before start):** what the law-office assistant actually does today (which briefings/triage/document flows are live), what changed observably, roughly since when, and what stays human. Without them the flagship ships case-study-less (safe fallback).
2. **Route slugs + English offer names** as tabled in section 1 — veto now if any name is wrong (renames after deploy cost another redirect round).
3. **Flagship film ambition:** default is the ~18s "day in the office" showpiece in the current film language (charcoal + copper, no fake UI per PRODUCT.md's do-nots); if the bolder register rewrite relaxes those constraints, the film brief follows the NEW PRODUCT.md — flag any wow-moves you want (e.g. Hebrew-first variant, sound design is out of scope for autoplay-muted films anyway).
4. **Approval requested:** execute phases 1–9 as described, with the STOP points (PRODUCT.md review; EN+HE copy review; per-film stills review) before anything user-facing changes meaning.
