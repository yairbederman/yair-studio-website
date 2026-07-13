# REVIEW — "The Enablement" (AI Enablement Workshops film)

Status: **composition authored (EN + HE), gates clean, rendered, wired, verified.**

## What was built

One composition (`index.html`), two locales via the `lang`
`data-composition-variables` (EN default; HE mirrors RTL via `X()`). 13s, 6 beats,
single paused GSAP timeline on `window.__timelines["root"]`. Charcoal `#review-bg`
for preview/check/snapshot only — hidden (`data-hidden`) before the transparent alpha
render, restored after. Authored under the settled cinematic grammar (velocity-matched
hand-offs, rack focus onto the copper checkpoint, loop-continuous camera). **No WebGL
bloom** (flagship-only signature).

## Distinct identity (vs the content-engine film)

Both offer films share the grammar but read differently: content-engine is a
horizontal conveyor with labels above the traveling node; this is a **parallel
agent-lanes workspace converging into a persistent playbook**, with labels **swapping
in a centered band** (workflow-sprint treatment).

## Beats (verified in snapshots)

| t | Beat | Reads as |
|---|---|---|
| 1.4s | The task | one backlog task chip settles left; `A real task` + `from your backlog` |
| 3.2s | Hands-on with agents | 3 agent lanes draw out; work-ticks travel each lane |
| 5.8s | Patterns → playbook | ticks converge; the playbook artifact binds (spine + pattern lines, copper edge) |
| 8.2s | **Review peak** | rack focus — lanes + task defocus, copper "Human review stays" checkpoint over the playbook sharp, ring bloom, check draws, review caption |
| 10.2s | Team runs alone | lanes resume run-ticks on their own under the persistent playbook |
| 12.4s | Settled | closing "The playbook is yours"; hero/poster frame |

## Gates

- `npm run check` (lint + validate + inspect): **0 errors**, 0 layout issues across
  9 samples, no console errors. **4 benign warnings** — all `overlapping_gsap_tweens`
  on `__unresolved__` (helper-built selectors + the always-on camera-drift tween
  overlapping reveals on *different* elements; the documented family false positive).
  No transform-conflict (centered elements use a center→top-left placement helper, so
  GSAP owns all transforms cleanly).
- **EN** snapshots: `snapshots/contact-sheet-en.jpg`. **HE** snapshots:
  `snapshots/contact-sheet-he.jpg` — full-axis RTL mirror confirmed (task right, lanes
  run right→left, playbook left, pattern lines draw from the correct side; Assistant
  font; Hebrew reads correctly — a transcreation, not a flipped render).

## Honesty compliance

- **Schematic** — a task chip, abstract agent lanes with traveling ticks, and a
  structural playbook glyph (spine + blank pattern lines, no readable text). No product
  UI → **no "Sample data" chip**.
- Zero names, metrics, fake SaaS UI, neon, or sparkles. One bounded copper ring at the
  peak.
- Every on-frame string traces to `src/content/offers/ai-enablement.ts` (inline
  `// source` comments; full table in DESIGN.md).

## Legibility

One large centered label at a time (60px → ~11.7px at 375px mobile); lanes, ticks, and
the playbook carry meaning by structure + copper. 375px peak + closing verified.

## Render (DONE 2026-07-13 — both locales)

- `--format webm --quality high --video-bitrate 3M` → transparent VP9-alpha WebM
  (`alpha_mode=1` confirmed both locales); HE via `--variables '{"lang":"he"}'`.
  Charcoal MP4 + settled poster (t=12.6s) ffmpeg-composited over `#121211`.
- Sizes: EN `.webm` 1.07 MB · `.mp4` 0.48 MB · poster 0.07 MB;
  HE `-he.webm` 0.86 MB · `-he.mp4` 0.39 MB · `-he-poster.png` 0.05 MB.
- Outputs → `public/videos/ai-enablement{,-he}.{mp4,webm}` + posters.

## Site integration (DONE 2026-07-13)

`film` block (EN + HE) added to `src/content/offers/ai-enablement.ts` after `hero`;
`OfferPageBody` renders it at `#film` under the hero. sectionTitle "A workshop, as a
flow" (traces to `example.title` verbatim); caption traces to `example.map` + `human`.
No component changes.
