# STORYBOARD — 14s timeline (both cuts)

30 fps · 14 s · deterministic GSAP timeline (`window.__timelines["root"]`). Hero frame = the
settled end state (poster). Six beats. The 4:5 phone cut (`../command-center-mobile/`) runs the
**same beats at the same per-element times**; only the layout differs (2 panels, stacked).

## Beats

| # | Time | Beat |
|---|---|---|
| 0 | 0–2.0s | **Overnight pile.** Charcoal; 3 mono chips (`email · calendar · documents`) drift in at odd rotations with tangled hairlines. |
| 1 | 2.0–4.5s | **The interface draws itself.** The chips accelerate up into the header and blur out; the hairline window frame strokes in; the tagline (`What your office logs into`) settles from blur in the header slot; the `Sample data` chip fades in on the window's top edge. |
| 2 | 4.5–7.5s | **Panels populate.** 16:9: three strips — MORNING BRIEFING (Meetings · Deadlines), EMAIL TRIAGE (Incoming mail · Draft replies; Incoming mail copper-flagged), DOCUMENT WORKFLOWS (Signatures · Stalled documents). 4:5: Email triage + Document workflows. Rows materialize `blur 6 → 0`; the HUMAN APPROVAL column/block arrives with two waiting items (Draft reply · Signature). |
| 3 | 7.5–10.0s | **PEAK — the approval queue.** Rack focus — the status panels defocus (`--dof` blur + dim) while HUMAN APPROVAL stays sharp; the camera pushes in; copper light blooms on the checkpoint (16:9: WebGL `#bloom-gl`, feature-detected; 4:5: CSS copper glow); the check draws on item 1; the dimmed tagline hands off to the safety caption (`No external messages are sent without approval`) in the header slot. Refocuses before the tail (loop-safe). |
| 4 | 10.0–12.0s | **Fails safely.** Panels refocus; the approved item recedes; **item 2 deliberately stays waiting** (one copper pulse) — approval is never automatic. |
| 5 | 12.0–14.0s | **Settle.** The caption hands off to the closing (`The day starts decided`) in the header slot; one done, one waiting; hold → poster. |

## Review frames (snapshot timestamps — both cuts)

```
npx --yes hyperframes@0.6.84 snapshot --at 1.4,3.4,6.0,9.4,11.0,13.2 --describe false
```

| Frame | t | Shows |
|---|---|---|
| 1 | 1.4s | overnight pile — 3 mono chips + tangle on charcoal |
| 2 | 3.4s | frame drawing in, tagline settling |
| 3 | 6.0s | panels populated; `Sample data` chip; copper-flagged Incoming mail row |
| 4 | 9.4s | **APPROVAL PEAK** — panels defocused, copper light, check on item 1, safety caption in the header (v1 used 9.0s; the v2 caption finishes settling at 9.3s) |
| 5 | 11.0s | item 1 done, **item 2 still waiting** |
| 6 | 13.2s | settled hero — one done, one waiting, `The day starts decided` |

Per locale into `snapshots-en/` and `snapshots-he/` (HE via the `lang`-default flip, restored).

## Gates before render

- `npm run check` (lint + validate + inspect) exit 0 in both projects, `#review-bg` present.
- **375px legibility pass** on frames 4 and 6 (peak + closing) — `_legibility-375.png` per
  locale in both projects.
- REVIEW.md updated (per-moment px vs floor, measured widths).
- **Owner stills approval** (given 2026-09-24; rendered — `REVIEW.md` → "Render v2").

## Loop + renders

Linear film + soft settle (Films 1–4 convention); the page restarts at 0. The camera is
**loop-continuous** — transform is identity at `t=0` AND `t=14` in both cuts — so the restart
has no camera pop; the content restart (settled → bare charcoal) is the intended linear loop.

Renders per locale: 16:9 → `command-center{,-he}.{webm,mp4}` + `-poster.png`; 4:5 →
`command-center-mobile{,-he}.{webm,mp4}` + `-poster.png`, all in `public/videos/`. Pipeline
(`REVIEW.md` → "Render v2"): `#review-bg` element removed → ProRes 4444 MOV master + direct
alpha WebM per locale → from the MOV: charcoal H.264 MP4 and the **peak poster (t = 9.4s)**;
the served WebM is the direct render when ≤ 6 MB, else a 2-pass VP9-alpha re-encode of the MOV.
