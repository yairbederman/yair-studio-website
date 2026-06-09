# STORYBOARD — 12s timeline

30 fps · 12 s · deterministic GSAP timeline (`window.__timelines["main"]`).

## Acts

| Time | Act | Action |
|---|---|---|
| 0.0–2.6 | **Scatter** | Input fragments (transcript/recording/notes + lines) fade in scattered on the left, then drift up-right and dissolve into **Meeting notes**, which activates. |
| 2.6–7.3 | **Flow** | Copper pulse + spine-fill travel node→node. Each node activates as the pulse arrives; its evidence blooms in the right column: Extract→chips, Assign→owner/date, Draft→card. |
| 7.3–10.0 | **Approval HOLD (peak)** | Pulse reaches **Human approval**. Everything else dims to .3 + blurs. Copper ring expands and fades (bounded bloom); node scales 1.08; checkmark draws; **Approved** + underline sweep. Held beat 9.2–10.0. |
| 10.0–11.4 | **Output** | Pulse → **Update tasks / dashboard**; spine-fill completes. Task rows snap from a scattered/rotated offset into an aligned stack (chaos → order). |
| 11.4–12.0 | **Settle** | Pulse fades; nodes ease back to rest for a softer loop restart. |

## Review frames (snapshot timestamps)

```
npx hyperframes snapshot --at 0.9,2.4,4.1,5.4,6.6,8.9,10.9,11.9
```

| Frame | t | Shows |
|---|---|---|
| 1 | 0.9s | inputs scattered (left) |
| 2 | 2.4s | inputs converging → Meeting notes activates |
| 3 | 4.1s | Extract active + decision/task chips |
| 4 | 5.4s | Assign active + owner·date chip |
| 5 | 6.6s | Draft active + draft card |
| 6 | 8.9s | **APPROVAL PEAK** — others dimmed, ✓ Approved |
| 7 | 10.9s | Output — task rows resolving |
| 8 | 11.9s | full settled composition |

> Loop note: this is a linear film with a soft settle, not yet a seamless crossfade
> loop. On the page it restarts at 0; the settle keeps the cut gentle. True seamless
> loop is a possible v2.
