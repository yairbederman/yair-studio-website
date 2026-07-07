# STORYBOARD — 18s timeline

30 fps · 18 s · deterministic GSAP timeline (`window.__timelines["root"]`).
One composition, two locales (`lang` variable; HE mirrors the layout RTL).

## Acts

| Time | Act | Action |
|---|---|---|
| 0.0–2.4 | **Overnight** | "Overnight inputs" fades in (top). Mail/calendar/document glyphs rise at the origin; the base rail draws to the gate and on to the day panel; the panel skeleton appears faint. |
| 2.4–5.4 | **Morning briefing** | Label swaps. The three glyphs converge into the briefing chip (hairlines + copper tick). Chip runs the rail → **pauses at the gate** (small bounded pulse) → docks as row 1. |
| 5.4–8.2 | **Email triage** | Label swaps. Three envelope chips appear; the urgent one lifts with a copper edge; they merge into chip 2 → gate pause + pulse → row 2. |
| 8.2–11.0 | **Document workflows** | Label swaps. Document chip's progress bar **stalls mid-rail**; a copper edge surfaces it; bar completes → gate pause + pulse → row 3. |
| 11.0–13.6 | **Follow-up and meetings** | Label swaps. Chip 4 carries an open loop arc; a copper dash closes it → gate pause + pulse → row 4. |
| 13.6–15.8 | **Approval HOLD (peak)** | Everything dims. "Human approval" (copper) appears under the gate; one bounded ring bloom; ✓ draws; the four rows' status squares tick copper one by one. |
| 15.8–18.0 | **The day starts decided** | Dim lifts. Closing label (96px). The day panel brightens with a restrained glow; soft settle for loop restart. |

## Review frames (snapshot timestamps)

```
npx hyperframes snapshot --at 1.6,4.5,6.3,9.9,12.6,15.1,17.2
```

| Frame | t | Shows |
|---|---|---|
| 1 | 1.6s | overnight inputs + rail + faint panel skeleton |
| 2 | 4.5s | briefing chip paused before the gate (first pulse) |
| 3 | 6.3s | triage: urgent envelope lifted copper |
| 4 | 9.9s | document chip stalled mid-rail (pre-surface) |
| 5 | 12.6s | follow-up chip approaching the gate, three rows docked |
| 6 | 15.1s | **APPROVAL PEAK** — dim + ✓ + "Human approval" |
| 7 | 17.2s | settled: "The day starts decided", four resolved rows |

HE variant: same timestamps (flip the `lang` default to `"he"`, snapshot,
flip back — the snapshot CLI has no `--variables` flag).

> Loop note: linear film + soft settle (not a seamless crossfade). Restarts at
> 0 on the page; the settle keeps the cut gentle.
