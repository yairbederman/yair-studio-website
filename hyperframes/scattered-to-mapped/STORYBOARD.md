# STORYBOARD — 13s timeline

30 fps · 13 s · deterministic GSAP timeline (`window.__timelines["root"]`).

## Acts

| Time | Act | Action |
|---|---|---|
| 0.15–2.9 | **Scatter** | `BEFORE` cap rises; the 4 before-items enter from varied directions, landing tilted + jittered; 6 mono chips tumble in across the mid-frame with tangled hairlines; everything drifts slowly. |
| 2.9–4.3 | **The mapping pass** | `MAPPED WORKFLOW` cap appears; the spine rail draws top→bottom at x 1330; node ghosts (DOF-soft) fade in along it. |
| 4.3–8.2 | **Untangle** | `email`/`chat`/`call` fly to **Incoming request**; flow reaches **Captured + categorized**; `status?` → **Owner + due date assigned**; `follow-up?` → **Draft response prepared**. Each landing: node activates (copper dot + brighten), the matching ledger line straightens, dims, and strikes through. Tangle lines fade to ghost. |
| 8.2–10.6 | **Approval HOLD (peak)** | Everything dims; **Human approval** activates copper (no chip — approval is added, not rearranged); bounded ring bloom; held beat. `what is open?` alone stays visible mid-frame — still open. |
| 10.6–12.4 | **Tracked to done** | Fill reaches the out-node; `what is open?` flies in and resolves it; final ledger line strikes. |
| 12.4–13.0 | **Settle** | Dimmed nodes ease back; glow breathes down; soft loop restart. |

## Review frames (snapshot timestamps)

```
npx hyperframes snapshot --at 1.6,3.6,5.0,6.9,9.3,11.2,12.0,12.8
```

| Frame | t | Shows |
|---|---|---|
| 1 | 1.6s | full chaos — tilted ledger + drifting chips + tangle |
| 2 | 3.6s | spine drawing, both caps visible (before AND after in one frame) |
| 3 | 5.0s | email/chat/call landing → Incoming request active, first strike |
| 4 | 6.9s | status? resolved; ledger half-tidied |
| 5 | 9.3s | **APPROVAL PEAK** — ring bloom, all dimmed, one chip still open |
| 6 | 11.2s | last chip flying to Tracked to done |
| 7 | 12.0s | final strike — ledger fully resolved |
| 8 | 12.8s | settled composition — tidy list + complete map |

> Loop note: linear film + soft settle (same convention as Films 1–3). The
> page restarts it at 0; the settle keeps the cut gentle.
