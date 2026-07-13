# Plan — Phase E: Fill the film gaps (+ C-phase cleanup fold-ins)

> **Context.** Phases A–D shipped: four live films cinematically regraded under one
> settled grammar (`d1f299b` + `4498074`), hero ambient backdrop, site-wide film grain.
> Phase E closes the last gap — the two film-less offer pages and the missing Hebrew
> evidence film — then folds in a WebM re-encode and doc hygiene. **Mandatory template:**
> the regrade grammar in `backlog/2026-07-12-films-cinematic-regrade.md` and the four
> `hyperframes/*/REVIEW.md` files. **Authoring template:** `hyperframes/command-center`
> (purpose-built mirror-ready), minus its flagship-only WebGL bloom apparatus.
>
> **SHARED WORKING TREE.** Another thread has uncommitted edits — `src/app/globals.css`
> and `backlog/2026-07-13-film-grain-overlay.md` are already modified and **must never be
> staged by this work.** Explicit-path staging only; never `git add -A`. Commit/push only
> on explicit approval.

## 1. Executive Summary

- **Problem:** Two offer pages (`/offers/linkedin-content-engine`, `/offers/ai-enablement`)
  have no process film, and the HE homepage evidence section shows a "No film yet" fallback —
  the last holes in an otherwise complete motion system.
- **Goal:** Three new bilingual film deliverables authored under the settled grammar, wired
  in with zero component changes, plus two small ride-along fold-ins (re-encode + docs).
- **User value:** The two offers gain the same "show, don't claim" product face the flagship
  and workflow-sprint pages already have; `/he` reaches parity with `/` on the evidence proof.
- **Recommended move:** Copy the command-center locale scaffold into two new schematic-spine
  compositions (story = each offer's own `example.map`, verbatim); refactor scattered-to-mapped
  to bilingual; render EN+HE; wire via data only.
- **Risk level:** Medium (craft + one real RTL refactor; near-zero site-code risk).
- **Size:** 2 new compositions · 1 composition refactored · ~14 new/re-encoded assets ·
  3 site content files (data only) · 1 doc-comment fix · 4 DESIGN.md doc edits · 0 component changes.

### Decisions — CONFIRMED 2026-07-13

- **A: Schematic spine, no "Sample data" chip** for both offer films (chip only if a node reads as real UI at the stills stop).
- **B: ffmpeg 2-pass re-encode from the alpha master, parity-gated.**
- **Sequencing: E1 → E2 → E3** approved; E1 authoring started (stops at composition-stills review before render).

### Decision detail (recommendation marked ✅)

**Decision A — honesty stance on the two new offer films.** The brief permits product-ish UI
*if* it carries a persistent "Sample data" chip (command-center grammar).

| Option | Pros | Cons |
|---|---|---|
| ✅ **Schematic spine, no chip** | Matches the offer-film siblings (workflow-sprint, scattered-to-mapped are schematic, chip-free); low mobile-legibility risk; no honesty-chip burden; both `example.map`s map 1:1 to a spine | Slightly less "product reveal" drama than the flagship |
| Light UI + Sample-data chip | The content-engine "review queue" reads as a real screen | Adds legibility risk + a persistent chip on both films; over-claims for an offer whose product surface isn't the point |

Recommendation: **schematic for both.** The review-queue node in the content-engine film is
drawn as abstract stacked cards (status dot + bar, no readable post text) — structure, not a
product screen — so no chip is needed. **Guard:** if during composition any node reads as real
product UI, the "Sample data" chip goes on (decided at the composition-stills stop).

**Decision B — WebM re-encode method (fold-in #4).**

| Option | Pros | Cons |
|---|---|---|
| ✅ **ffmpeg re-encode from alpha master (2-pass VP9, tighter bitrate)** | No composition re-run; exact pixels from the master; parity-gated | Needs the alpha master in `renders/` (present locally; else fall back to re-encoding the shipped `.webm`) |
| Re-render composition at lower `--video-bitrate` | Deterministic from source | Re-runs the flagship bloom render for command-center — unnecessary risk for a size tweak |

Recommendation: **ffmpeg re-encode from the alpha master**, governed by a frame-diff / SSIM
parity gate before swapping. MP4s untouched (brief: "MP4s are fine").

## 2. What Will Change

| Area | Change |
|---|---|
| **New composition** `hyperframes/linkedin-content-engine/` | Bilingual (EN+HE) schematic film; story = `linkedin-content-engine.ts` `example.map` nodes 0→5 verbatim; peak = "Your approval" copper checkpoint; metaphor = material → drafts → review queue → approval → published-on-rhythm |
| **New composition** `hyperframes/ai-enablement/` | Bilingual (EN+HE) schematic film; story = `ai-enablement.ts` `example.map` nodes 0→5 verbatim; peak = "Human review stays"; metaphor = one backlog task → agent lanes → captured playbook → review → team runs alone |
| **Refactor** `hyperframes/scattered-to-mapped/index.html` | Add the `lang` composition variable (RTL transcreation, not a flipped render): port command-center's `getVariables`/`COPY`/`X()`/dir-swap scaffold, thread `X()` through markup + CSS + JS flight vectors, copy in the two Assistant woff2 + `@font-face`, add `snapshots-en/`+`snapshots-he/` to `.gitignore` |
| **Assets** (`public/videos/`) | New: `linkedin-content-engine{,-he}.{mp4,webm}` + posters · `ai-enablement{,-he}.{mp4,webm}` + posters · `scattered-to-mapped-he.{mp4,webm}` + poster. Re-encoded: `scattered-to-mapped.webm`, `command-center.webm` (tighter) |
| **Site content (data only)** | `film` block (EN+HE) added to `offers/linkedin-content-engine.ts` + `offers/ai-enablement.ts`; HE `film` block added to `home.ts` evidence (removes the "No film yet" comment) |
| **Doc hygiene** | Regrade pointer added to the three C2 `DESIGN.md` (workflow-sprint, meeting-workflow, scattered-to-mapped); `FilmPlayer.tsx:20–24` stale sting-intro doc comment corrected (mechanism retained, no live caller — do NOT rewire/delete the `intro` prop) |

## 3. What Will NOT Change

- **No React/TS component changes.** `FilmPlayer`, `ProcessFilm`, `OfferPageBody`,
  `EvidenceSection` are untouched (films render from data via the existing `film` fields).
- **The `intro` prop stays** — corrected in the doc comment only; kept with zero callers by design.
- **The other thread's uncommitted work** (`src/app/globals.css`,
  `backlog/2026-07-13-film-grain-overlay.md`) — never staged.
- **The four existing films' choreography** — only scattered-to-mapped's markup is refactored for
  locale (EN render must stay pixel-identical, gated below); the other three are docs-only.
- **The flagship WebGL bloom beat** — flagship signature; explicitly NOT copied into new films.
- **Offer copy, pricing, honesty grammar, CTA destinations** — the film is additive.

## 4. Why This Is Worth Doing

- Two offers get a product face at the same craft bar as the rest of the site — the surface
  where "premium, not toyish" is judged.
- `/he` reaches full parity with `/` on the evidence proof (the RTL audience currently sees a
  visibly lesser page).
- New films authored under the *settled* grammar means the motion system stays coherent — one
  grammar across seven films, nothing made twice.
- The re-encode trims the two heaviest mobile-data payloads; the doc fixes stop the sting-intro
  comment from misleading the next maintainer.

## 5. Implementation Plan

**E1 — the two offer films** (commit E1)
1. Scaffold both composition dirs by **copying** command-center's project shape (`package.json`,
   `hyperframes.json`, `meta.json`, `.gitignore`, `assets/fonts/*` all 5 woff2) — **no
   `hyperframes init`** (global-skills pollution; `HYPERFRAMES_SKIP_SKILLS=1` if any CLI path
   triggers a skills refresh). Write each film's `DESIGN.md`/`SCRIPT.md`/`STORYBOARD.md` from the
   offer's `example.map` + settled grammar; author `index.html` (locale scaffold copied, bloom
   apparatus omitted).
2. Per film, per locale: `npm run check` → 375px legibility gate → animation-map audit (or
   documented substitute) → snapshots EN+HE. **STOP: user reviews composition stills** (both films,
   both locales) before any render.
3. Render EN+HE (alpha master → tighter charcoal MP4 + poster, command-center pipeline);
   loop-seam camera-identity check; size-envelope check → place assets in `public/videos/`.
4. Wire `film` blocks (EN+HE) into the two offer content files (captions three-source-traced).
5. **STOP: on-site preview review** (EN + `/he`, both offers, `#film` anchor, no console errors,
   assets 200) → commit E1 (explicit paths).

**E2 — Hebrew scattered-to-mapped** (commit E2)
6. Refactor `index.html` to bilingual (lang scaffold + `X()` thread-through + fonts + dir flips +
   `.gitignore`). **Verify EN parity** (snapshot-diff EN vs current committed EN render — must be
   pixel-identical; if the refactor shifted anything, EN re-renders too).
7. `npm run check` + 375px HE legibility + HE snapshots. **STOP: user reviews HE stills.**
8. Render `scattered-to-mapped-he.*`; wire the HE `film` block into `home.ts` evidence (remove the
   "No film yet" comment). **STOP: on-site `/he` evidence review** → commit E2.

**E3 — re-encode + doc hygiene** (commit E3)
9. Re-encode `scattered-to-mapped.webm` + `command-center.webm` tighter (Decision B), parity-gated;
   swap only on pass. Add regrade pointers to the three C2 `DESIGN.md`; fix `FilmPlayer.tsx:20–24`.
10. Gates (§9) + recap → commit E3.

## 6. Impact

| Dimension | Impact |
|---|---|
| UX | Two offers + `/he` evidence gain a looping process film; reduced-motion still shows poster/compare fallback; pause control unchanged |
| Data/output | +6 new asset pairs; two heaviest WebMs shrink (target ≤ ~1.3× the lightest sibling, envelope-matched) |
| Cost/perf | Zero client compute (pre-rendered); no site JS/CSS delta; reduced-motion users fetch no video bytes |
| Existing behavior | Site behavior identical; new films appear where `film` data is added |
| Maintenance | Choreography documented per new film; scattered-to-mapped becomes bilingual like its siblings; doc drift removed |

## 7. Main Risks & Mitigations

| Risk | Mitigation |
|---|---|
| **Biggest assumption: scattered-to-mapped HE is a clean locale add.** It is a real refactor (hard-coded EN + left-origin px in markup/CSS/JS flight vectors, no `X()`), so the EN render could regress | EN-identity `X()` (`x→x`); **EN snapshot-diff parity gate** before treating EN as unchanged; port the proven command-center pattern rather than improvising. Fallback: re-render EN too if parity fails |
| New offer film captions/strings drift from source (three-source violation) | Every on-frame string + caption + sectionTitle traces to the offer content file (inline `// source:line` comments, command-center convention); ripple-scan flow-trace verifies survival |
| Mobile legibility regression (16:9 ≈ 330–375px on phones) | 375px legibility gate before every render; meaning carried by structure + copper, not small text |
| Loop seam pops on the on-site loop | Camera loop-continuous by construction (identity at t=0 and t=end); first/last-frame camera-identity diff before swap |
| Re-encode degrades alpha/visual quality | Encode from the alpha master; frame-diff/SSIM parity gate; swap only on pass; MP4s untouched |
| Accidentally staging the other thread's work | Explicit-path staging only; `git status` reviewed before every commit |

## 8. Files Likely Touched

**Compositions (create):** `hyperframes/linkedin-content-engine/{index.html,DESIGN.md,SCRIPT.md,STORYBOARD.md,REVIEW.md,package.json,hyperframes.json,meta.json,.gitignore,assets/fonts/*}` · same set for `hyperframes/ai-enablement/`
**Composition (modify):** `hyperframes/scattered-to-mapped/{index.html,.gitignore,assets/fonts/*(+2 Assistant),DESIGN.md,REVIEW.md}`
**Docs (modify):** `hyperframes/workflow-sprint/DESIGN.md` · `hyperframes/meeting-workflow/DESIGN.md` (regrade pointers) · `src/components/FilmPlayer.tsx` (doc comment only)
**Assets (create/replace):** ~14 files under `public/videos/` (6 new pairs+posters, 2 re-encoded WebMs)
**Site content (modify, data only):** `src/content/offers/linkedin-content-engine.ts` · `src/content/offers/ai-enablement.ts` · `src/content/home.ts`
**Docs (create):** `backlog/2026-07-13-phase-e-film-gaps.md` (this file)
**Site source components: none.**

## 9. Verification Plan

- **Per composition:** `npm run check` (lint+validate+inspect, pinned `hyperframes@0.6.84`);
  animation-map audit — *note: `animation-map.mjs` failed in prior films (`@hyperframes/producer`
  dist broken); if still broken, substitute lint tween-overlap + inspect 9-sample + frame-by-frame
  snapshot review and say so*; 375px legibility gate; loop-seam camera-identity diff; size envelope.
- **EN parity (E2):** snapshot-diff refactored EN vs current committed EN render — must be identical.
- **Re-encode parity (E3):** frame-diff / SSIM master-vs-re-encode before swap.
- **Site:** `npm run lint` + `npm run build` clean; preview EN + `/he` — all three films load, loop,
  pause; `#film` anchors resolve; reduced-motion shows poster/compare; no console errors; assets 200.
  Preview harness quirk (hidden window): verify via JS eval / DOM snapshot, reload per viewport — **not screenshots**.
- **Gates:** `/ripple-scan` (content + doc drift): PENDING · `quality/impact-analysis`: PENDING ·
  `/code-review high`: PENDING · `/verify`: PENDING · Skills: `hyperframes-core/-animation/-creative/-cli`
  + `karpathy-guidelines` (TS wiring) — applied during authoring.

## 10. Open Questions / Approval Needed

1. **Decision A** — schematic-only for both offer films (no Sample-data chip unless a node reads as
   real UI)? Recommended: **yes, schematic.**
2. **Decision B** — re-encode from alpha master via ffmpeg 2-pass, parity-gated? Recommended: **yes.**
3. **Commit structure** — E1 (two offer films) / E2 (HE evidence) / E3 (re-encode + docs), per brief.

**Approval requested to proceed with E1** (scaffold + author the two offer compositions, stopping at
the composition-stills review before any render). E2 and E3 follow their own review stops; no commit
without explicit approval at each stop.
