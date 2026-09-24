# SCRIPT — what the film says

Subject: **AI enablement for a business team** (`/studio/ai-enablement`) — an office's
owner and staff take one real task from their week, work it hands-on with AI, capture
the habits into a playbook for the office, and then run alone. Your review never leaves
your people.

## The message arc

> Bring one real task from your office's week. The team works it hands-on with AI; the
> habits are captured into a playbook for your office. Your review stays — judgment and
> review stay with your people — and then the team runs it alone.

## The cast (all copy traces to `src/content/studio/ai-enablement.ts` — see DESIGN.md table)

| Element | Text (EN · HE) | Source |
|---|---|---|
| Node 0 + sub | `A real task` · `from your office's week` — `משימה אמיתית` · `מהשבוע של המשרד שלכם` | `example.map.nodes[0]` |
| Node 1 | `Hands-on with AI` — `עבודה מעשית עם AI` | `example.map.nodes[1]` |
| Node 2 | `Habits captured` — `ההרגלים נרשמים` | `example.map.nodes[2]` |
| Node 3 | `Playbook for your office` — `מדריך עבודה למשרד` | `example.map.nodes[3]` |
| Node 4 (human) | `Your review stays` — `הבדיקה נשארת אצלכם` | `example.map.nodes[4]` |
| Node 5 (out) | `The team runs it alone` — `הצוות מריץ לבד` | `example.map.nodes[5]` |
| Caption | `Judgment and review stay with your people` — `שיקול הדעת והבדיקה נשארים אצל האנשים שלכם` | `how.steps[4].desc` (clause) |
| Closing | `The playbook is yours` — `מדריך העבודה שלכם` | `human.items[2].desc` (clause) — verbatim |

## The peak — your review stays

The signature beat. The lanes and the task defocus; the copper review checkpoint over the
playbook stays sharp. A `✓` draws — the work is reviewed by a person. The caption
`Judgment and review stay with your people` appears verbatim. Judgment does not move to
the machine.

## The payoff — the team runs alone

The checkpoint recedes; the three lanes resume their work on their own under the
persistent playbook: `The team runs it alone`. The closing lands: `The playbook is yours`.

## Honesty rules (non-negotiable)

- Schematic task chip + abstract lanes + a structural playbook — no product UI, no
  metrics, no names.
- No "Sample data" chip (not a product screen); no neon/sparkles; one bounded copper
  ring at the peak.
- Nothing on frame that does not trace to the DESIGN.md source table; nothing about
  engineers, developers, code, codebases, or stacks — the page is written for business
  teams. (Strings re-verified verbatim against `src/content/studio/ai-enablement.ts` at the
  film spec v2 re-cut, 2026-09-24 — unchanged.)
