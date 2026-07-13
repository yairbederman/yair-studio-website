# Plan — Phase C: Cinematic Regrade of the Four Live Films

> **Context.** Phase C of the approved motion roadmap (A+B shipped in `827f526`; D is being implemented concurrently by another thread — its uncommitted edits sit in `src/` and must not be touched or staged by this work). C upgrades the choreography of the four live films from "clear diagram animation" to film-grade: slow velocity-matched transitions, rack-focus onto the copper human-approval checkpoint, continuous loop-safe camera micro-drift, and one HTML-in-Canvas bloom hero beat in the flagship. Zero site-code changes — same asset filenames, so the site picks up the regrade transparently.
> **Decision locked (2026-07-12):** bloom beat = **include with fallback** (copper drop-shadow glow if WebGL bloom fights the alpha master).

## 1. Executive Summary

- **Problem:** The films read as clean diagrams, not cinema; next to the new hero ambience and sting they're the weakest craft layer.
- **Goal:** Film-grade motion grammar across all four live films; the flagship gets one genuine hero moment.
- **Recommended move:** Regrade choreography inside the existing compositions (`command-center`, `workflow-sprint`, `meeting-workflow`, `scattered-to-mapped`) — no content/copy/scene changes, honesty grammar untouched — then re-render and swap assets in place.
- **Risk level:** Medium (pure craft risk; zero site-code risk).
- **Size:** 4 compositions modified · ~14 assets re-rendered · 0 site source files.

**Decision — the HTML-in-Canvas bloom beat (flagship only): INCLUDE with alpha-safe fallback.**

- The one "how did they do that" moment; renderer-only cost (zero client GPU); catalog guidance: 1–3 hero beats per piece.
- WebGL bloom over a transparent alpha master needs care — fallback is a copper `drop-shadow` glow if compositing fights. Fallback pre-planned, decided at the C1 review stop.

## 2. What Will Change

| Area | Change |
|---|---|
| `hyperframes/command-center` (C1) | Velocity-matched exits/entries between scenes (`power2.in`→`power2.out`, matched at cuts); rack-focus (`--dof` blur on off-focus panels) when the approval column peaks; continuous micro-drift on `#camera` (loop-continuous: returns to identity at loop end); ONE HTML-in-Canvas bloom beat (approval UI floats in dark 3D, UnrealBloom) with `drawElementImage` feature-detect + copper-glow fallback |
| `hyperframes/{workflow-sprint, meeting-workflow, scattered-to-mapped}` (C2) | Same grammar minus the bloom beat (transitions + rack-focus-on-checkpoint + drift), tuned per film |
| Composition docs | Each film's `DESIGN.md`/`STORYBOARD.md` updated to describe the new choreography (doc truth; ripple target) |
| Assets (`public/videos/`) | Re-rendered: `command-center{,-he}.{mp4,webm}`, `workflow-sprint-process{,-he}.{mp4,webm}`, `meeting-follow-up-workflow.{mp4,webm}`, `scattered-to-mapped.{mp4,webm}` + posters only if the settled final frame changed |

## 3. What Will NOT Change

- **Any site source file.** Asset filenames identical; FilmPlayer/content wiring untouched. The other thread's uncommitted D edits in `src/` are off-limits — **staging is explicit-path only, never `git add -A`**.
- Film content: scenes, copy, locales, the honesty grammar (persistent "Sample data" chip, no names/metrics, one approval deliberately left waiting).
- Openings/endings' settled states: the flagship still opens from bare charcoal (sting hand-off intact); every film still loops (drift and transitions are loop-continuous by construction).
- `hero-ambient`, `wordmark-sting`, and the retired compositions (`audit-process`, `one-system`, `office-assistant`).

## 4. Why This Is Worth Doing

- The films are the brand's product face; this is where "premium, not toyish" is actually judged.
- One grammar across all four films + sting + hero ambience = a coherent motion system, not five separate efforts.
- Rack-focus onto the copper checkpoint restates the human-approval thesis cinematically — motion as message, per brand.
- Blocks Phase E correctly: new films (E) get authored under this settled grammar, so nothing is made twice.

## 5. Implementation Plan

1. **Step 0** — copy plan to `backlog/`. Load craft references: `hyperframes-core` non-negotiables, rules `depth-of-field-blur` + `multi-phase-camera`, techniques §10 (velocity-matched transitions), `html-in-canvas-patterns` + `adapters/three.md` (bloom beat).
2. **C1 — flagship** (`command-center`): implement grammar + bloom beat → `npm run check` + 375px legibility gate + `animation-map.mjs` audit → snapshot key beats → **stop: user reviews stills/preview** → render EN+HE (alpha master → charcoal MP4 post-composite, per DESIGN.md pipeline) → loop-seam + size checks → swap assets → **stop: user reviews on-site (incl. sting hand-off)** → commit C1 (explicit paths).
3. **C2 — cascade** to the three remaining films, same loop per film (batched review: one stop for all three) → commit C2.
4. Gates + recap (§9).

## 6. Impact

| Dimension | Impact |
|---|---|
| UX | Films gain cinematic pacing; flagship gains a hero beat; loop/pause/reduced-motion behavior unchanged |
| Data/output | Asset sizes may grow (blur raises bitrate) — budget ≤ ~1.3× current per file, checked at render |
| Cost/perf | Zero client cost (all pre-rendered); no site JS/CSS delta |
| Existing behavior | Site untouched; visitors just see better films after deploy |
| Maintenance | Choreography documented per film; grammar reusable for Phase E |

## 7. Main Risks & Mitigations

| Risk | Mitigation |
|---|---|
| **Biggest assumption: the regrade reads premium, not busy** — drift+blur+transitions could tip into restlessness | Flagship-first with two review stops before any cascade; drift amplitude tiny (≤1.5% scale); rack-focus once per film; fallback = ship transitions-only |
| Bloom beat fights the transparent alpha master | Feature-detected fallback to copper drop-shadow glow (pre-planned, not improvised); decided at C1 review |
| Loop seam breaks (drift/transition state ≠ start state) | Loop-continuity as a hard authoring constraint; first/last-frame diff check before swap |
| Sting hand-off mismatch on flagship | Opening kept bare-charcoal; verified on-site at the C1 review stop |
| Mobile legibility regression (16:9 ≈ 330–375px on phones) | DESIGN.md's existing 375px legibility gate re-run before each render |
| Accidentally committing the other thread's D work | Explicit-path staging only; `git status` reviewed before every commit |

## 8. Files Likely Touched

- **Compositions (modify):** `hyperframes/command-center/{index.html, DESIGN.md, STORYBOARD.md}` · same trio in `workflow-sprint`, `meeting-workflow`, `scattered-to-mapped`
- **Assets (replace):** 12 video files + posters-if-changed under `public/videos/`
- **Docs (create):** `backlog/2026-07-12-films-cinematic-regrade.md`
- **Site source: none.**

## 9. Verification Plan

- **Automated (per composition):** `npm run check` (lint/validate/inspect, pinned `hyperframes@0.6.84`); `animation-map.mjs` choreography audit (dead zones, lifecycle warnings).
- **Craft checks:** 375px legibility gate; snapshot review at key beats (both locales for the two bilingual films); loop-seam first/last-frame diff; size budget ≤1.3× per file.
- **Site (no code changed, assets swapped):** preview — all four films load, loop, pause; flagship sting→film hand-off clean; reduced-motion still poster-only; `/he` films correct.
- **Success criteria:** all checks green; both review stops passed; `git status` shows only C paths staged.
- **Gates:** Ripple scan (`/ripple-scan`): PENDING (composition docs vs new choreography) · Impact analysis (`quality/impact-analysis`): PENDING · Code review (`/code-review high` — large change): PENDING · Verify (`/verify`): PENDING · Skills: `karpathy-guidelines` ✔ (choreography-only edits; content untouched).

## 10. Open Questions / Approval Needed

Bloom-beat recommendation is **include with fallback** — **APPROVED 2026-07-12**. Proceeding C1 → review → C2 → review, commits gated on explicit approval at each stop.
