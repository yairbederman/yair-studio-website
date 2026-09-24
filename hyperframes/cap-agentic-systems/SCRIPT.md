# SCRIPT — what the film says

Subject: **agentic systems** — AI agents that run an office's recurring work inside the
tools the office already uses, with every action that leaves the office waiting for a
person.

## The message arc

> A request enters. An agent captures and sorts it, prepares the reply, chases the
> missing documents — inside the office's own tools. What matters waits for a person:
> one item is approved, one is left waiting. The request is answered and tracked.

## The cast (all copy traces to `src/content/studio/agentic-systems.ts` — see DESIGN.md table)

| Element | Text | Source |
|---|---|---|
| Chips ×3 (node 0 sub) | `email` · `form` · `call` | `example.map.nodes[0].sub` |
| Headline 0 | `New request` | `example.map.nodes[0].label` |
| Headline 1 | `Captured and sorted` | `example.map.nodes[1].label` |
| Headline 2 | `Draft reply prepared` | `example.map.nodes[2].label` |
| Headline 3 | `Missing documents chased` | `example.map.nodes[3].label` |
| Headline 4 (human) | `Human approval` | `example.map.nodes[4].label` |
| Headline 5 (out) = closing | `Answered and tracked` | `example.map.nodes[5].label` |
| Caption | `Approve what matters` | `how.steps[3].title` (the human step) |

## The peak — human approval

The signature beat. Everything upstream defocuses; the copper `Human approval`
checkpoint stays sharp. Two items wait at the checkpoint (one above the rail, one below): a person checks the first; the
second keeps its open dot and stays waiting — through the end of the film. The caption
`Approve what matters` appears verbatim. Nothing leaves the office on its own.

## The payoff — answered and tracked

The approved item leaves the checkpoint and closes the request at the out node; a run log
writes in above it. The out node's own words are the closing: `Answered and tracked`.

## Honesty rules (non-negotiable)

- Schematic node marks + abstract cards — no product UI, no metrics, no names, no
  synthetic faces or voices.
- No "Sample data" chip (this is not a product screen); no neon; one bounded copper
  ring at the peak.
- Nothing on frame that does not trace to the DESIGN.md source table.
