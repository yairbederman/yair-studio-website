# SCRIPT — what the film says

Subject: the `/studio/process-optimization` promise ("The map you receive") —
**scattered, manual work becomes a mapped flow with a human approval step** —
shown as one continuous transformation, not two panels.

## The message arc

> The mess is not replaced — it is mapped. Every scattered piece finds its
> place in the flow; approval is the one thing the system adds; the last open
> question is the last thing tracked to done.

Bilingual: EN + a Hebrew RTL locale (`lang` variable). The Hebrew is a
transcreation of the same message — the layout mirrors (see DESIGN.md → Locales);
HE copy traces to `src/content/studio/process-optimization.ts` → `he.example`.

## The cast (all copy traces to `process-optimization.ts` → `example`)

| Element | Text | Source |
|---|---|---|
| Headlines | `Before the map` / `Mapped workflow` | `example.intro` (clause before the colon) / `example.map.caption` |
| Ledger | the four before-clauses, verbatim (EN sentence-cased), two on frame at a time (a queue: each struck clause clears for the next) | `example.intro` |
| Nodes | the six workflow steps, verbatim (the `email · chat · call` sub is carried by the three chips, not set as text — film spec v2) | `example.map.nodes` |
| Chips | `email` `chat` `call` `status?` `follow-up?` `what is open?` | contractions of the before-clauses |

## Resolution map — which pain each node answers

| Chip(s) | → Node | Strikes ledger line |
|---|---|---|
| `email` `chat` `call` | Incoming request | "Requests arrive by email, chat, and calls" |
| — (flow) | Captured + categorized | — |
| `status?` | Owner + due date assigned | "Status lives in someone's head" |
| `follow-up?` | Draft response prepared | "Follow-up depends on remembering" |
| — (the peak; receives no chaos) | **Human approval** | — |
| `what is open?` (waits through the peak) | Tracked to done | "No shared view of what is open" |

## The peak — human approval

Approval gets **no chip**: it is not a rearranged piece of the mess, it is what
the system adds. Everything dims, the copper node blooms (bounded ring), holds.

## The payoff

Settled frame: the last two pains, straightened and struck through, on the left; the complete
mapped spine under `Mapped workflow` on the right. *The mess became the map.*

## Honesty rules (non-negotiable)

- No numbers, percentages, names, logos, or invented quotes.
- Nothing on screen that does not trace to `example` content.
