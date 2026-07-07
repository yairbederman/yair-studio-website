# STORYBOARD — 14s timeline

30 fps · 14 s · deterministic GSAP timeline (`window.__timelines["root"]`).
One composition, two locales (`lang` variable; HE mirrors positionally).

## Acts

| Time | Act | Action |
|---|---|---|
| 0.0–2.2 | **One stuck workflow** | 15 tiles scatter in, slightly rotated, soft-blurred; one tile sags below the others (the stuck step). |
| 2.2–5.0 | **Mapped end to end** | Headline swaps. Tiles glide into a 5×3 grid (rotation→0, blur→0); a hairline rail snakes through all three grid rows once. |
| 5.0–8.1 | **Sorted** | Rail fades; the grid regroups into three rows (6/5/4). Row labels rise: Automatic · AI-assisted · **Human** (copper). The human row's tiles warm copper and hold. |
| 8.1–10.9 | **Three automations built** | Headline swaps. Three tiles (two automatic, one AI-assisted) click into place one after another: copper edge, small pop, a ✓ draws on each. |
| 10.9–12.5 | **Human approval (compact peak)** | Everything dims. Copper gate node scales up at center, "Human approval" below, one bounded pulse, ✓ draws. |
| 12.5–14.0 | **Workflow runs with less friction** | Dim lifts; closing headline (92px); rows settle with the three copper checks and the warm human row; soft settle for loop. |

## Review frames (snapshot timestamps)

```
npx hyperframes snapshot --at 1.5,3.9,6.9,9.8,11.8,13.5
```

| Frame | t | Shows |
|---|---|---|
| 1 | 1.5s | scattered tiles, one sagging (the stuck workflow) |
| 2 | 3.9s | 5×3 grid + rail snaking through (mapped end to end) |
| 3 | 6.9s | three sorted rows + labels, human row copper |
| 4 | 9.8s | two of three automation ticks landed |
| 5 | 11.8s | **APPROVAL** — dim + gate + ✓ + label |
| 6 | 13.5s | settled payoff: closing line, three checks, warm human row |

HE variant: same timestamps (flip the `lang` default, snapshot, flip back).

> Loop note: linear film + soft settle; restarts at 0 on the page.
