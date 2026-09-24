# STORYBOARD — 12s timeline

30 fps · 12 s · deterministic GSAP timeline (`window.__timelines["root"]`).
Hero frame = the settled end state (poster). Six beats. Horizontal timeline;
EN left→right, HE right→left. Loop-continuous camera (identity at t=0 and t=12).
Film spec v2 geometry from the start (see DESIGN.md → Layout).

## Beats

| # | Time | Beat |
|---|---|---|
| 0 | 0.0–2.0 | **Your copy.** Three source chips (`site · deck · post`, 80px; HE 88px) drift in as a loose pile (0.15–0.98), then accelerate down and blur into one continuous **script line** (0.95–1.59) that writes in, in reading order (1.05–1.85): the six lane-1 clips squashed to a 1550×22 bar. Headline `Your copy` (1.35). |
| 1 | 2.0–3.6 | **Six scenes.** The line is cut into six 220×90 clip blocks (gaps open, blocks grow, 2.35–3.25); the rail draws above them (2.3–3.2, a true draw via `autoRound: false`); six 40px scene nodes pop in (2.5–3.35). Headline `Six scenes` (2.6). |
| 2 | 3.6–6.0 | **Stills in both languages.** A copper playhead (head on the rail + a line through both lanes) appears at node 0 (3.6) and sweeps to node 5 on one sine-eased pass (3.85–5.35). As it reaches each node (3.85 / 4.29 / 4.50 / 4.70 / 4.91 / 5.35 — the inverse of the ease) the node lights copper, the lane-1 clip fills with its still (dot + two bars), and a mirrored twin peels down into lane 2 (+0.06s). Headline `Stills in both languages` (3.95). |
| 3 | 6.0–8.8 | **PEAK — Your approval.** The copper checkpoint appears below the timeline (6.05); scene 3's still (A) and its twin (B) lift out of their lanes and flank it at ×1.75 (6.12 / 6.24, 0.75s). **Rack focus** (6.85): rail, nodes, the other ten clips and the playhead defocus (`blur 9px`, dim 0.4); the checkpoint and both lifted stills stay sharp; camera pushes in (1.5%). Checkpoint glow (6.9), one bounded copper ring (7.05). A warms to copper and its check draws (7.5–8.2) — **B keeps its open dot, still waiting** (one finite breath 7.85–8.35). **Just before the render beat B gets its own check** (8.35–8.62: copper border + dot, check draws) — nothing renders before approval (owner change 2026-09-24). Caption `Approve the stills` (7.7). Headline `Your approval` (6.5). |
| 4 | 8.8–10.4 | **Rendered loop.** Headline and caption out (8.8 / 8.85). The whole timeline accelerates into the frame and blurs out (8.85–9.45, `power2.in`) while an outline morphs from the timeline's bounds to a 720×405 16:9 frame (8.85–9.55, card-morph anchor). The real frame decelerates in over the outline (9.45) and fills with the settled schematic — headline bars, rail draw, five nodes (the fourth copper), the copper token at the out node (9.62–10.45). Headline `Rendered loop` (9.4) — held to the end as the closing. |
| 5 | 10.4–12.0 | **Variants.** The 16:9 slides to its place (10.45–11.3) while a 1:1 and a 9:16 duplicate slide out from behind it (10.55 / 10.65, 0.8s) — web / LinkedIn / Reels. Each format's other-language twin slides out behind it (10.95 / 11.02 / 11.09 → settled 11.59). Camera back to identity by 11.5 → poster. |

## Review frames (snapshot timestamps)

```
npx --yes hyperframes@0.6.84 snapshot --at 0.9,1.9,3.2,4.6,5.85,8.3,10.2,11.7 --describe false
```

| Frame | t | Shows |
|---|---|---|
| 1 | 0.9 | the source pile (`site · deck · post`) |
| 2 | 1.9 | the script line, `Your copy` |
| 3 | 3.2 | six clips under the rail + six nodes, `Six scenes` |
| 4 | 4.6 | mid-sweep: three nodes lit, stills + twins filling behind the playhead |
| 5 | 5.85 | all six stills in both lanes, playhead at node 5 (file name rounds to `5.8s`) |
| 6 | 8.3 | **APPROVAL PEAK** — timeline defocused, A approved (copper + check) / B waiting (open dot), checkpoint between them, caption |
| (extra) | 8.6 | **second check** — B approved too, just before the render beat (`snapshots-en/frame-second-check-at-8.6s.png`, captured separately so the 8-beat numbering stays stable) |
| 7 | 10.2 | the 16:9 frame filled with the settled schematic, `Rendered loop` |
| 8 | 11.7 | settled hero / poster — 16:9 · 1:1 · 9:16 with their language twins |

HE: flip the declared `lang` default to `"he"`, run the same command, flip back
(`snapshot` has no `--variables`; the flip is the Windows-safe route anyway).

## Gates before render

- `npm run check` (lint + validate + inspect) clean.
- **375px legibility pass** on frames 6 (peak) and 8 (closing), both locales →
  `snapshots-{en,he}/_legibility-375.png`.
- Loop-seam camera-identity check (t=0 vs t=12).
- Owner stills approval.
- REVIEW.md written.

## Loop + renders

Linear film + soft settle; the page restarts at 0. Camera is loop-continuous
(identity at t=0 AND t=12). Renders per locale: `cap-films.{webm,mp4}` + `-poster.png`
and `-he` variants → `public/videos/`, via the `lang` default flip.
