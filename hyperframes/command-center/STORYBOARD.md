# STORYBOARD — 14s timeline

30 fps · 14 s · deterministic GSAP timeline (`window.__timelines["root"]`).
Hero frame = the settled end state (poster). Six beats.

## Beats

| # | Time | Beat |
|---|---|---|
| 0 | 0–2.0s | **Overnight pile.** Charcoal; 3 mono chips (`email · calendar · documents`) drift in at odd rotations with tangled hairlines. |
| 1 | 2.0–4.5s | **The interface draws itself.** Hairline window frame strokes in; header types the tagline (`See what needs attention`); `Sample data` chip fades in top corner; the chips fly into the frame (`power2.inOut`) and dissolve. |
| 2 | 4.5–7.5s | **Panels populate.** Staggered row ticks — MEETINGS ×2, URGENT EMAILS ×2 (one copper-flagged), WAITING CLIENTS + DEADLINES ×2; rows materialize `blur 1.6 → 0`. |
| 3 | 7.5–10.0s | **PEAK — the approval queue.** **Rack focus** — the 4 status panels defocus (`--dof` blur + dim) while the APPROVAL column stays sharp; the camera pushes in; **genuine WebGL copper light** blooms on the checkpoint (`#bloom-gl`, feature-detected); check draws `scaleX 0 → 1` on item 1; caption = the safety line verbatim. Refocuses before the tail (loop-safe). |
| 4 | 10.0–12.0s | **Fails safely.** Approved item slides to done; panels settle; **item 2 deliberately stays waiting** — approval is never automatic. |
| 5 | 12.0–14.0s | **Settle.** Hero frame: one done, one waiting; closing line `The day starts decided`; hold → poster. |

## Review frames (snapshot timestamps)

```
npx hyperframes snapshot --at 1.4,3.4,6.0,9.0,11.0,13.2
```

| Frame | t | Shows |
|---|---|---|
| 1 | 1.4s | overnight pile — 3 mono chips + tangle on charcoal |
| 2 | 3.4s | frame drawn, tagline + `Sample data` chip, chips flying in |
| 3 | 6.0s | panels populating; copper-flagged urgent-email row |
| 4 | 9.0s | **APPROVAL PEAK** — all dimmed, ring bloom, check on item 1, safety caption |
| 5 | 11.0s | item 1 done, **item 2 still waiting** |
| 6 | 13.2s | settled hero — one done, one waiting, `The day starts decided` |

## Gates before render

- `npm run check` (lint + validate + inspect) clean.
- **375px legibility pass** on frames 4 and 6 (peak + closing) — the film's
  biggest risk (see DESIGN.md "Mobile legibility").
- REVIEW.md written (Films 1–4 convention).

## Loop + renders

Linear film + soft settle (Films 1–4 convention); the page restarts at 0. The
Phase-C camera is **loop-continuous** — transform is identity at `t=0` AND `t=14`
(scale back to 1.0, drift back to 0 on integer sine cycles), so the restart has
no camera pop; the content restart (settled → bare charcoal) is the intended
linear-film loop.

Renders per locale: `command-center.{webm,mp4}` + `command-center-poster.png`
and `-he` variants → `public/videos/`. EN + HE from one composition via the
`lang` variable (see DESIGN.md "Locales"). The Phase-C blur + drift raise the
alpha-WebM bitrate, so the WebM is rendered with `--video-bitrate 3.6M` to hold
the size budget; the charcoal MP4 + settled poster (`t=13.6s`) are ffmpeg-
composited from the alpha WebM over `#121211`.
