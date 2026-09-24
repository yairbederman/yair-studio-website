# STORYBOARD — 13s timeline

30 fps · 13 s · deterministic GSAP timeline (`window.__timelines["root"]`).
Hero frame = the settled end state (poster). Six beats. Parallel-lanes workspace filling the
frame (x 185 → 1735); EN task-left/playbook-right, HE mirrored. Loop-continuous camera
(identity t=0 and t=13). Film spec v2 type: headline band 120 (stage labels + closing), sub
80, caption 72 — sans only. Strings per locale in DESIGN.md → Source of truth (EN shown here).
First content at 0.4 s (task chip) — no empty opening beyond it.

## Beats

| # | Time | Beat |
|---|---|---|
| 0 | 0.0–2.0 | **The task.** One task chip (400×250) enters at 0.4 s and settles at left. Headline `A real task` (120) with the sub `from your office's week` (80) beneath it. |
| 1 | 2.0–4.3 | **Hands-on with AI.** Three AI lanes draw out to the right; a work-tick travels each lane. Headline swaps to `Hands-on with AI`. |
| 2 | 4.3–6.8 | **Habits → playbook.** The work-ticks converge (`Habits captured`) and bind into the playbook artifact — spine + habit lines, copper edge (`Playbook for your office`). |
| 3 | 6.8–9.3 | **PEAK — Your review stays.** **Rack focus**: the lanes + task defocus + dim; the copper review checkpoint over the playbook (420×520) stays sharp; camera pushes in; one bounded copper ring (440 Ø, 7.7–8.8); a `✓` draws in the card's lower half (8.4–9.0). Caption `Judgment and review stay with your people` enters at 8.5 (72). Refocuses before the tail. |
| 4 | 9.3–11.0 | **The team runs it alone.** Refocus; the checkpoint recedes; the three lanes resume their work-ticks on their own (finite self-run) under the persistent playbook. Headline `The team runs it alone`; the caption holds until 11.0. |
| 5 | 11.0–13.0 | **Settle.** The caption leaves; closing `The playbook is yours` (120) swaps into the headline band; the playbook holds lit; camera settles to identity → poster. |

## Review frames (snapshot timestamps)

```
npx --yes hyperframes@0.6.84 snapshot --at 1.4,3.2,5.8,6.5,8.2,9.2,10.2,12.4 --describe false
```

| Frame | t | Shows |
|---|---|---|
| 1 | 1.4 | task chip settled, `A real task` + `from your office's week` |
| 2 | 3.2 | three lanes drawn, work-ticks travelling, `Hands-on with AI` |
| 3 | 5.8 | playbook artifact binding (habit lines drawing), `Habits captured` |
| 4 | 6.5 | playbook bound, copper edge, `Playbook for your office` (the widest EN label) |
| 5 | 8.2 | **REVIEW PEAK (ring bloom)** — lanes defocused, copper ring mid-bloom, `Your review stays` |
| 6 | 9.2 | **REVIEW PEAK (settled)** — `✓` drawn, review caption fully in, ring faded; the legibility frame |
| 7 | 10.2 | lanes running alone under the persistent playbook, `The team runs it alone` + caption |
| 8 | 12.4 | settled hero — `The playbook is yours` |

(6.5 s added in v2: `lbl3` swaps in at 5.95 s, so the old 5.8 s frame never showed
`Playbook for your office`.)

HE: flip the declared `lang` default to `"he"`, run the same command, flip back
(`snapshot` has no `--variables`; the flip is the Windows-safe route anyway). Move each run
from `snapshots/` to `snapshots-en/` / `snapshots-he/`.

## Gates before render

- `npm run check` (lint + validate + inspect) clean.
- **375px legibility pass** on frames 6 (settled peak, 9.2 s) and 8 (closing, 12.4 s), both locales →
  `snapshots-{en,he}/_legibility-375.png` (peak + closing downscaled to 375 wide, side by
  side).
- Loop-seam camera-identity diff (t=0 vs t=13).
- Owner stills approval.
- REVIEW.md updated.

## Loop + renders

Linear film + soft settle; the page restarts at 0. Camera loop-continuous (identity at
t=0 AND t=13). Renders per locale: `ai-enablement.{webm,mp4}` + `-poster.png` and `-he`
variants → `public/videos/`, via the `lang` default flip.
