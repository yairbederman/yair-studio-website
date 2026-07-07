# REVIEW — constraint checklist & open items

## Brief constraints (backlog/2026-07-07-offer-restructure-implementation.md §1)

| Constraint | Status |
|---|---|
| Sprint story: map → sort (automatic/AI-assisted/human) → three automations → first working workflow | ✅ tile field: scatter → grid+rail → 3 rows → 3 ticks → approval → runs |
| All on-frame text traces to `ai-workflow-sprint.ts` (three-source rule) | ✅ 9 strings, mapped in SCRIPT.md (all from `example.map` + its subs) |
| Mobile legible at ~330px frame width | ✅ headlines 84/92px, row+approval labels 64px; tiles carry no text |
| EN + HE (RTL) renders per locale | ✅ `lang` variable; positional mirror; dir per-element only |
| No baked wordmark (the audit-process v3 mistake) | ✅ no wordmark at all |
| No fake SaaS UI / metrics / names | ✅ abstract tiles, exactly three ticks (the offer promises three) |
| Copper discipline | ✅ human row warms and holds; one bounded pulse at the gate |
| Deterministic; timeline `window.__timelines["root"]`, paused | ✅ (scatter positions are a hand-picked constant list) |
| ~14s, landscape 1920×1080, transparent render | ✅ `#review-bg` is REVIEW-ONLY (delete before render) |

## Validation (2026-07-07)

- `hyperframes lint` → **0 errors**, 10 warnings — all the known `__unresolved__`
  overlapping-tween false positives (helper-built selectors; defaults carry
  `overwrite: "auto"`) — same class as office-assistant, documented there.
- `hyperframes validate` → **no console errors**; `inspect` → **0 layout issues / 9 samples**.
- Snapshot fonts: EN Inter 600; HE Assistant 600 (hebrew+latin subsets).
- Stills: `snapshots-en/` + `snapshots-he/` at 1.5, 3.9, 6.9, 9.8, 11.8, 13.5 —
  **awaiting owner review before render**.

## Fixed during authoring (keep for the next film)

- **`fromTo` pulse leak:** GSAP `fromTo` renders its *from* values immediately
  (`immediateRender: true` by default), so a pulse declared `from {opacity: 0.9}`
  is faintly visible from t=0. Fix: `immediateRender: false` **in the to-vars**
  (in the from-vars it is ignored). NOTE: the office-assistant film shipped with
  this artifact (a small static ring at the gate before the first pass — it was
  in the approved stills, so it is consistent, but a one-line fix + re-render
  would remove it if wanted).
- Approval gate placed BELOW the row block (y 915/968) so the peak never
  collides with the Human row label.

## Render (DONE 2026-07-07 — stills approved by owner)

1. `#review-bg` deleted → transparent render.
2. Alpha-master pipeline per office-assistant/REVIEW.md, once per locale
   (HE via the `lang`-default flip — never `dir` on `<html>`, never `--variables`).
3. Outputs (all within budget; masters deleted after deriving):
   - `workflow-sprint-process.mp4` 0.74 MB · `.webm` 1.80 MB (alpha_mode=1)
   - `workflow-sprint-process-he.mp4` 0.57 MB · `-he.webm` 1.33 MB (alpha_mode=1)
   - posters @13.5s: 183 / 117 KB
4. `film` blocks wired into `src/content/offers/ai-workflow-sprint.ts`
   (locale-keyed). Build + lint clean (25 routes).

## Open questions for review

1. The sort beat (5.0–8.1s) is the longest act — right emphasis, or tighten?
2. Three ticks land on two Automatic tiles + one AI-assisted tile — fine, or
   spread one to a different position?
