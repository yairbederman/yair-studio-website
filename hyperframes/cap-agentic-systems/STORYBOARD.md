# STORYBOARD — 12s timeline

30 fps · 12 s · deterministic GSAP timeline (`window.__timelines["root"]`).
Hero frame = the settled end state (poster). Six beats. Horizontal conveyor;
EN left→right, HE right→left. Loop-continuous camera (identity at t=0 and t=12).
**Film spec v2 geometry (2026-09-24):** rail x 185→1735 at y 640, headline band top 200,
work item A above the rail, work item B below it, run log above the out node, caption
top 920 — timings unchanged from v1 (see DESIGN.md → Layout v2).

## Beats

| # | Time | Beat |
|---|---|---|
| 0 | 0.0–2.0 | **New request.** Three intake chips (`email · form · call`, 80px; HE 88px) drift in as a loose pile, then accelerate and merge into one copper token at node 0; the rail draws in (1.6s — a true draw since v2's `autoRound: false` fix; v1 popped on at ~1.0s); headline `New request`. |
| 1 | 2.0–3.6 | **Captured and sorted.** Token advances to node 1; headline swaps; three ascending ticks rise above the node (sorted — structure only). |
| 2 | 3.6–6.0 | **Inside the office's tools.** Token → node 2, headline `Draft reply prepared`, an abstract work-item card (A, 560×150) assembles **above** the rail over it. Token → node 3, headline `Missing documents chased`, a second, dashed card (B) assembles **below** the rail under it. |
| 3 | 6.0–8.8 | **PEAK — Human approval.** Token → node 4; both cards travel down the line to the checkpoint and flank it — A above, B below. **Rack focus**: rail + upstream nodes + ticks defocus (`blur 9px`, dim); the copper checkpoint, both waiting items and the token stay sharp; camera pushes in (1.5%); one bounded copper ring; card A warms to copper and its check draws — card B keeps its open dot (**deliberately left waiting**, one finite breath). Caption `Approve what matters`. |
| 4 | 8.8–10.6 | **Answered and tracked.** Refocus; card A leaves the checkpoint and dissolves into node 5 (B stays waiting below node 4); headline `Answered and tracked`; three run-log rows (600×16) write in above node 5, flush with the rail's end, the top one copper. |
| 5 | 10.6–12.0 | **Settle.** The headline is held as the closing; the logged row breathes once; camera settles to identity → poster. |

## Review frames (snapshot timestamps)

```
npx --yes hyperframes@0.6.84 snapshot --at 0.9,1.9,3.2,4.5,5.7,8.3,10.3,11.7 --describe false
```

| Frame | t | Shows |
|---|---|---|
| 1 | 0.9 | the intake pile (email · form · call) above the head of the rail, rail drawing |
| 2 | 1.9 | token at node 0, `New request` |
| 3 | 3.2 | token at node 1, `Captured and sorted`, sorted ticks |
| 4 | 4.5 | `Draft reply prepared`, card A above the rail at node 2 |
| 5 | 5.7 | `Missing documents chased`, card A above the rail, card B below it at node 3 |
| 6 | 8.3 | **APPROVAL PEAK** — upstream defocused, A above / B below node 4, A checked / B waiting, caption |
| 7 | 10.3 | `Answered and tracked`, run log writing in above node 5, B still waiting below node 4 |
| 8 | 11.7 | settled hero / poster |

HE: flip the declared `lang` default to `"he"`, run the same command, flip back
(`snapshot` has no `--variables`; the flip is the Windows-safe route anyway).

## Gates before render

- `npm run check` (lint + validate + inspect) clean.
- **375px legibility pass** on frames 6 (peak) and 8 (closing), both locales →
  `snapshots-{en,he}/_legibility-375.png`.
- Loop-seam camera-identity diff (t=0 vs t=12).
- Owner stills approval.
- REVIEW.md written.

## Loop + renders

Linear film + soft settle; the page restarts at 0. Camera is loop-continuous
(identity at t=0 AND t=12). Renders per locale: `cap-agentic-systems.{webm,mp4}`
+ `-poster.png` and `-he` variants → `public/videos/`, via the `lang` default flip.
