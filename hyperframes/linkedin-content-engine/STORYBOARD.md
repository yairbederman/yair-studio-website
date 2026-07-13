# STORYBOARD — 13s timeline

30 fps · 13 s · deterministic GSAP timeline (`window.__timelines["root"]`).
Hero frame = the settled end state (poster). Six beats. Horizontal conveyor;
EN left→right, HE right→left. Loop-continuous camera (identity at t=0 and t=13).

## Beats

| # | Time | Beat |
|---|---|---|
| 0 | 0.0–2.0 | **Material arrives.** Three source fragments (`calls · projects · wins`) drift in and merge into one copper token at node 0. Large label `Your material` + sub; the conveyor rail hints in. |
| 1 | 2.0–4.2 | **Angles → drafts.** Token advances; label swaps to `Angles proposed` (a small fan of angle ticks blooms); advances again to `Drafts in your voice` (token becomes a draft-card glyph). Node dots land as it passes. |
| 2 | 4.2–6.8 | **Review queue.** Token reaches node 3; label `Review queue`; a compact stack of 3 abstract draft cards assembles (dot + 2 bars each — schematic, no text). |
| 3 | 6.8–9.3 | **PEAK — Your approval.** **Rack focus**: rail + upstream nodes + queue defocus (`--dof` blur) + dim; the copper `Your approval` checkpoint stays sharp; camera pushes in; one bounded copper ring; the top card gets the human check (`✓` draws). Caption = `The approval point is yours`. Refocuses before the tail. |
| 4 | 9.3–11.0 | **Published on rhythm.** Refocus; the approved card flies to node 5; label `Published on rhythm`; a cadence of 4 evenly-spaced published ticks lands in rhythm (the signature). |
| 5 | 11.0–13.0 | **Settle.** Closing `A steady LinkedIn presence`; the rhythm holds softly; camera settles to identity → poster. |

## Review frames (snapshot timestamps)

```
npx hyperframes snapshot --at 1.4,3.2,5.6,8.4,10.2,12.4
```

| Frame | t | Shows |
|---|---|---|
| 1 | 1.4 | material fragments merging → token at node 0, `Your material` |
| 2 | 3.2 | token mid-pipeline, `Drafts in your voice`, node dots landed |
| 3 | 5.6 | review-queue stack assembled at node 3 |
| 4 | 8.4 | **APPROVAL PEAK** — upstream defocused, copper ring, check, safety caption |
| 5 | 10.2 | published-rhythm cadence ticks |
| 6 | 12.4 | settled hero — `A steady LinkedIn presence` |

## Gates before render

- `npm run check` (lint + validate + inspect) clean.
- **375px legibility pass** on frames 4 (peak) and 5/6 (rhythm + closing).
- Loop-seam camera-identity diff (t=0 vs t=13).
- REVIEW.md written (Films 1–4 convention).

## Loop + renders

Linear film + soft settle; the page restarts at 0. Camera is loop-continuous
(identity at t=0 AND t=13). Renders per locale: `linkedin-content-engine.{webm,mp4}`
+ `-poster.png` and `-he` variants → `public/videos/`, via the `lang` variable.
