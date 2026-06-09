# STORYBOARD — 12s timeline (v3: "Three kinds of work")

30 fps · 12 s · deterministic GSAP timeline (`window.__timelines["root"]`).
Continuous and slow — crossfades, not cuts. The peak is a hold.

## Acts

| Time | Beat | Action |
|---|---|---|
| 0.0–2.6 | **Messy by default** | ~15 task tiles fade into a disordered, rotated, overlapping cluster (faint, DOF-soft `blur 2px`). Headline (left): **"Messy by default."** Wordmark in. |
| 2.6–4.4 | **The audit reads it** | Headline crossfades to **"The audit reads it."** A single slow copper **sweep-line** glides L→R; in its wake the tiles ease into an ordered 5×3 grid (chaos→order, focus pull `blur→0`), column-staggered. |
| 4.4–9.2 | **Three kinds of work (PEAK)** | The grid splits into three rows as three lines reveal in turn: **"Some things automate."** (≈4.8, row 0 rises) · **"Some things assist."** (≈6.0) · **"Some things _stay human._"** (≈7.05, copper; row 2 lowers, warms to copper, steady glow rises over ~1.1s). Then a **~1.8s hold** (≈7.9–9.2) — all three lines + rows still, glow steady. |
| 9.2–12.0 | **Your first useful system** | The three rows consolidate into one tidy block (human tiles stay copper); a small steady copper ✓ draws (human approval, wordless). Headline: **"Your first useful system."** Settle. |

## Review frames (snapshot timestamps)

```
npx hyperframes snapshot --at 1.2,3.4,4.8,6.0,7.6,8.6,10.4,11.6
```

| Frame | t | Shows |
|---|---|---|
| 1 | 1.2s | messy tile cluster + "Messy by default." |
| 2 | 3.4s | copper sweep crossing + "The audit reads it." |
| 3 | 4.8s | ordered 5×3 grid (chaos→order) |
| 4 | 6.0s | "automate" + "assist" lines, rows splitting |
| 5 | 7.6s | **PEAK** — all three lines, human row copper + steady glow |
| 6 | 8.6s | peak still **holding** (glow steady, no spike) |
| 7 | 10.4s | consolidating → first system, copper ✓ |
| 8 | 11.6s | settled — "Your first useful system." |

> Legibility gate: frame 5 downscaled to **720px** (embed width) keeps every line crisp.
> No-flash gate: the copper glow rises once (≈7.05–8.15s) and holds, softening slightly in the
> system beat — continuous, never spikes. No scaling bloom ring exists in the timeline.
> Loop note: linear film + soft settle (not a seamless crossfade), as Films 1–2.
