# SCRIPT — what the film says

Subject: the **AI Enablement Workshops** — a team takes one real task, works it
hands-on with agents, captures the practice into a playbook, and then runs alone.
Human review never leaves the engineers.

## The message arc

> Bring one real task from your backlog. The team works it hands-on with agents;
> the patterns are captured into a playbook for your stack. Human review stays with
> your engineers — and then the team runs it alone.

## The cast (all copy traces to `ai-enablement.ts` — see DESIGN.md table)

| Element | Text | Source |
|---|---|---|
| Node 0 + sub | `A real task` · `from your backlog` | `example.map.nodes[0]` |
| Node 1 | `Hands-on with agents` | `example.map.nodes[1]` |
| Node 2 | `Patterns captured` | `example.map.nodes[2]` |
| Node 3 | `Playbook for your stack` | `example.map.nodes[3]` |
| Node 4 (human) | `Human review stays` | `example.map.nodes[4]` |
| Node 5 (out) | `The team runs it alone` | `example.map.nodes[5]` |
| Caption | `Judgment and review stay with your engineers` | `how.steps[4].desc` |
| Closing | `The playbook is yours` | `human.items[2].desc` — verbatim |

## The peak — human review stays

The signature beat. The lanes and the task defocus; the copper review checkpoint
over the playbook stays sharp. A `✓` draws — the work is reviewed by a person. The
caption `Judgment and review stay with your engineers` appears verbatim. Ownership
does not move to the machine.

## The payoff — the team runs alone

The checkpoint recedes; the three agent lanes resume their work on their own under
the persistent playbook: `The team runs it alone`. The closing lands: `The practice
is yours`.

## Honesty rules (non-negotiable)

- Schematic task chip + abstract lanes + a structural playbook — no product UI, no
  metrics, no names.
- No "Sample data" chip (not a product screen); no neon/sparkles; one bounded copper
  ring at the peak.
- Nothing on frame that does not trace to the DESIGN.md source table.
