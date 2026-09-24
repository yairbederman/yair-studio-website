# STORYBOARD — 13s timeline (film spec v2)

30 fps · 13 s · deterministic GSAP timeline (`window.__timelines["root"]`).
Poster = the approval peak (t = 9.2s, frame 276), by the owner's decision: the film is
click-to-play on the page, so the poster is what a visitor sees first. Six beats. Horizontal conveyor; EN left→right, HE
right→left. Loop-continuous camera (identity at t=0 and t=13). Strings trace to the
`included` section of `src/content/offers/ai-office-assistant.ts` (DESIGN.md → Source of truth).

## Beats

| # | Time | Beat |
|---|---|---|
| 0 | 0.0–2.0 | **Material arrives.** Three material chips (`writing · calls · positions`) drift in from 0.2s and merge into one copper token at node 0 while the rail draws. Headline `Your material`. |
| 1 | 2.0–4.2 | **Angles → drafts.** Token advances; headline swaps to `Angles proposed`, then to `Drafts in your voice`. Node dots land and turn copper as it passes. |
| 2 | 4.2–6.8 | **Review queue.** Token reaches node 3; headline `Review queue`; a deck of 3 abstract draft cards assembles above node 3, back to front (dot + 3 bars each, schematic, no text). |
| 3 | 6.8–9.3 | **PEAK — Your approval.** The front draft leaves the deck, passes the checkpoint and lands below node 4; the rest of the queue advances one slot and keeps waiting. **Rack focus**: rail + upstream nodes defocus + dim, the waiting queue defocuses lightly; the copper checkpoint and the approved draft stay sharp; camera pushes in (≤ 1.5%); one bounded copper ring; the draft warms to copper and the `✓` draws. Caption `Nothing publishes without your approval`. Refocuses at 9.35. |
| 4 | 9.3–11.0 | **Published on rhythm.** Refocus; token and the approved draft go out to node 5 (the draft dissolves into it); headline `Published on rhythm`; 4 evenly spaced copper beats land below the out end, in reading order (the signature). |
| 5 | 11.0–13.0 | **Settle.** Caption leaves; `Published on rhythm` is held as the closing; the rhythm breathes once (finite, done by 12.65s); the queue is still waiting; camera settles to identity. |

## Review frames (snapshot timestamps)

```
npx --yes hyperframes@0.6.84 snapshot --at 0.9,1.9,3.1,4.3,6.3,9.2,10.6,12.7 --describe false
```

| Frame | t | Shows |
|---|---|---|
| 1 | 0.9 | the material pile beside the head of the rail, rail drawing |
| 2 | 1.9 | token at node 0, `Your material` |
| 3 | 3.1 | token at node 1, `Angles proposed` |
| 4 | 4.3 | token at node 2, `Drafts in your voice` |
| 5 | 6.3 | the review-queue deck assembled above node 3, `Review queue` |
| 6 | 9.2 | **APPROVAL PEAK = POSTER**: upstream defocused, approved draft (copper + check) below node 4, queue waiting, safety caption |
| 7 | 10.6 | the rhythm beats landing, `Published on rhythm`, caption still on |
| 8 | 12.7 | settled tail (the loop's end state): `Published on rhythm` held, queue waiting, rhythm |

## Gates before render

- `npm run check` (lint + validate + inspect) exit 0, in both locales.
- **375px legibility pass** on the peak (9.2) and the closing (12.7), EN + HE
  (`snapshots-{en,he}/_legibility-375.png`).
- Loop-seam check: camera identity at t=0 and t=13; tail frames differ only by drift.
- REVIEW.md "v2 2026-09-24" written; **owner approves the v2 stills before any render**
  (approved 2026-09-24; rendered, see REVIEW.md → "Render v2").

## Loop + renders

Linear film + soft settle; the page restarts at 0. Camera is loop-continuous
(identity at t=0 AND t=13). Renders per locale: `linkedin-content-engine.{webm,mp4}`
+ `-poster.png` and `-he` variants → `public/videos/`, via the `lang` variable.
