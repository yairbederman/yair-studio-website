# STORYBOARD — 13s timeline

30 fps · 13 s · deterministic GSAP timeline (`window.__timelines["root"]`).
Bilingual (`lang` variable, EN default). Positions below are EN; **HE mirrors the
whole layout** (ledger right, spine left) via `#mirror`'s `scaleX(-1)` with
un-flipped text — see DESIGN.md → Locales. Same beats, same timings, both locales.
Film spec v2 (2026-09-24): sans only, 120 / 80 / 64px type, the composition fills
~80% of the frame, and the ledger is a **two-slot queue** (two clauses on frame at a
time). The acts and their timings are unchanged; items marked *(v2)* are new.

## Acts

| Time | Act | Action |
|---|---|---|
| 0.15–2.9 | **Scatter** | `Before the map` headline (120) rises top-left; the first two before-clauses (64, two lines each) enter slots A (y 270) and B (y 640), landing tilted + jittered; *(v2)* five mono chips (64) tumble into the bands between/below the slots — `email` `chat` `call` between, `status?` `follow-up?` below — with tangled hairlines; everything drifts slowly. |
| 2.9–4.3 | **The mapping pass** | `Before the map` leaves upward (2.9–3.35) as `Mapped workflow` (120) rises above the spine (3.05–3.6) — one headline on frame at a time; the spine rail (3px) draws top→bottom at x 740 (y 290→980); node ghosts (DOF-soft, 80 / 120 for the peak) fade in along it. |
| 4.3–8.2 | **Untangle** | `email`/`chat`/`call` fly to **Incoming request**; flow reaches **Captured + categorized**; `status?` → **Owner + due date assigned**; `follow-up?` → **Draft response prepared**. Each landing: node activates (copper dot + brighten), the matching clause straightens, dims, and strikes through line by line. *(v2)* **Ledger queue:** struck `Requests arrive…` clears slot A (5.8) as `Follow-up depends…` rises in (5.95); struck `Status lives…` clears slot B (7.5) as `No shared view…` rises in (7.65) together with the last chip `what is open?` (7.55). Tangle lines fade to ghost. |
| 8.2–10.6 | **Approval HOLD (peak)** | Rack focus: upstream nodes blur + dim, `Mapped workflow` dims to 0.45 *(v2: + 4px defocus)*; **Human approval** activates copper at 120 (no chip — approval is added, not rearranged); bounded ring bloom; held beat. `what is open?` + its unstruck clause stay sharp at left — still open. |
| 10.6–12.4 | **Tracked to done** | Fill reaches the out-node; `what is open?` flies in and resolves it; the last clause strikes. |
| 12.4–13.0 | **Settle** | Dimmed nodes and the headline refocus; glow breathes down; two struck clauses left, the complete map right; soft loop restart. |

## Review frames (snapshot timestamps)

```
npx --yes hyperframes@0.6.84 snapshot --at 0,1.6,3.6,5.0,6.9,9.3,11.2,12.0,12.8,12.99 --describe false
```
(HE: flip the declared `lang` default to `"he"`, run again, flip back; frames
land in `snapshots/` — moved to `snapshots-en/` / `snapshots-he/`.)

| Frame | t | Shows |
|---|---|---|
| 0 | 0s | empty charcoal (loop-seam reference) |
| 1 | 1.6s | full chaos — `Before the map` + two tilted clauses + five drifting chips + tangle |
| 2 | 3.6s | spine drawing under `Mapped workflow`; `Before the map` already gone (hand-off complete) |
| 3 | 5.0s | email/chat/call landing → Incoming request activating |
| 4 | 6.9s | queue advanced: `Follow-up depends…` in slot A, `status?` landed, `follow-up?` about to fly |
| 5 | 9.3s | **APPROVAL PEAK** — ring bloom, rack focus (headline dimmed + defocused), `what is open?` + its clause still open |
| 6 | 11.2s | last chip flying to Tracked to done |
| 7 | 12.0s | final strike — ledger resolved |
| 8 | 12.8s | settled composition — two struck clauses + complete map (poster / legibility frame) |
| 9 | 12.99s | last frame (loop-seam reference: camera identity, settle complete) |

> Loop note: linear film + soft settle (same convention as Films 1–3). The
> page restarts it at 0; the settle keeps the cut gentle. The camera is
> identity at both t=0 and t=13.
