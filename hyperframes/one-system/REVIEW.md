# REVIEW — constraint checklist & open items

## Brief constraints

| Constraint | Status |
|---|---|
| Storyboard only (no render/integrate/commit) | ✅ stopped at checkpoint |
| Four offers as peers → one system (convergence) | ✅ equal lanes funnel into one core |
| Human approval is the peak | ✅ hold + dim + ring bloom + ✓ Approved at the junction |
| No fake SaaS UI / metrics / names | ✅ rows + weekly bar are abstract; signals trace to offers.ts |
| No neon / AI sparkles | ✅ one bounded copper ring |
| Effects aid process readability only | ✅ DOF = active lane; rail-draw = flow/convergence; dim = approval focus |
| Charcoal `#121211` + copper `#d96832`, transparent bg | ✅ render transparent; `#review-bg` review-only |
| `.sch-*` schematic language, Inter + Geist Mono | ✅ reused tokens + local fonts |
| Deterministic (no random/Date/setTimeout/async/infinite) | ✅ pure GSAP timeline; weekly bar fills once |
| Timeline registered `window.__timelines["root"]`, paused | ✅ |
| ~13s, landscape 1920×1080 | ✅ |

## Validation

- `hyperframes lint --strict` → **0 errors, 0 warnings**.
- `hyperframes inspect` → **0 layout issues across 9 samples** (after marking the
  push-in's full-frame SVG layer `data-layout-allow-overflow`; no visible clipping).
- Snapshot fonts: Inter 600 + Geist Mono 400 load. *Inter 400 is declared but
  unused* (all labels are 600, all captions are mono) — safe to drop `inter-400`
  before commit, or keep for parity with Film 1.

## Before the final render (NOT done yet — awaiting storyboard approval)

1. Delete `#review-bg` (charcoal backdrop) → transparent render.
2. Same pipeline as Film 1 (see meeting-workflow/REVIEW.md): MOV ProRes-4444 alpha
   master → VP9-alpha WebM + charcoal MP4 + poster. (`hyperframes render --format
   webm` produces opaque — use the MOV route.)
3. Output → `public/videos/one-system-overview.{webm,mp4}` + `-poster.png`.

## Refinement applied (right-side payoff)

The operating system now reads as a resolved object: a copper-outlined panel
(`#sys-panel`) with a restrained glow, a larger glowing core node (`#sys-core`
16→22px), an underlined title (27→32px), and clearer outputs (taller rows on
`--bg-2`, larger weekly-rhythm segments). Lanes unchanged — left/right balanced,
no pyramid, approval peak/timing preserved. Re-validated: lint `0/0`, inspect `0`.

## Open questions for review

1. **Approval hold (~2.5s)** — right length?
2. Any lane wording / signal changes before render?

## Commit hygiene (NOT committed)

`.gitignore` (copied from Film 1) excludes `node_modules/`, `snapshots/`,
`renders/`, `render-check/`, video files, and HF boilerplate `AGENTS.md`/`CLAUDE.md`.
