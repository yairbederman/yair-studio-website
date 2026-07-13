# STORYBOARD — 13s timeline

30 fps · 13 s · deterministic GSAP timeline (`window.__timelines["root"]`).
Hero frame = the settled end state (poster). Six beats. Parallel-lanes workspace;
EN task-left/playbook-right, HE mirrored. Loop-continuous camera (identity t=0 and t=13).

## Beats

| # | Time | Beat |
|---|---|---|
| 0 | 0.0–2.0 | **The task.** One backlog task chip enters and settles at left. Centered label `A real task` + sub `from your backlog`. |
| 1 | 2.0–4.3 | **Hands-on with agents.** Three agent lanes draw out to the right; a work-tick travels each lane. Label swaps to `Hands-on with agents`. |
| 2 | 4.3–6.8 | **Patterns → playbook.** The work-ticks converge into pattern marks (`Patterns captured`), which bind into the playbook artifact — spine + lines, copper edge (`Playbook for your stack`). |
| 3 | 6.8–9.3 | **PEAK — Human review stays.** **Rack focus**: the lanes + task defocus (`--dof` blur) + dim; the copper review checkpoint over the playbook stays sharp; camera pushes in; one bounded copper ring; a `✓` draws (reviewed). Caption = `Judgment and review stay with your engineers`. Refocuses before the tail. |
| 4 | 9.3–11.0 | **The team runs it alone.** Refocus; the checkpoint recedes; the three lanes resume their work-ticks on their own (finite self-run) under the persistent playbook. Label `The team runs it alone`. |
| 5 | 11.0–13.0 | **Settle.** Closing `The playbook is yours`; the playbook holds lit; camera settles to identity → poster. |

## Review frames (snapshot timestamps)

```
npx hyperframes snapshot --at 1.4,3.2,5.8,8.2,10.2,12.4
```

| Frame | t | Shows |
|---|---|---|
| 1 | 1.4 | task chip settled, `A real task` + `from your backlog` |
| 2 | 3.2 | three agent lanes drawn, work-ticks travelling, `Hands-on with agents` |
| 3 | 5.8 | playbook artifact bound, `Playbook for your stack` |
| 4 | 8.2 | **REVIEW PEAK** — lanes defocused, copper ring, `✓`, review caption |
| 5 | 10.2 | lanes running alone under the persistent playbook |
| 6 | 12.4 | settled hero — `The playbook is yours` |

## Gates before render

- `npm run check` (lint + validate + inspect) clean.
- **375px legibility pass** on frames 4 (peak) and 6 (closing).
- Loop-seam camera-identity diff (t=0 vs t=13).
- REVIEW.md written (Films 1–4 convention).

## Loop + renders

Linear film + soft settle; the page restarts at 0. Camera loop-continuous (identity at
t=0 AND t=13). Renders per locale: `ai-enablement.{webm,mp4}` + `-poster.png` and `-he`
variants → `public/videos/`, via the `lang` variable.
