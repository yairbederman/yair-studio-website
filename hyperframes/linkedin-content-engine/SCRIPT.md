# SCRIPT — what the film says

Subject: **the content engine included in the Managed AI Office retainer**
(`/offers/ai-office-assistant#content`): a managed LinkedIn pipeline that turns real
material into a steady presence, with the client's approval as the only gate.

## The message arc

> Your real material enters the engine. Angles are proposed, drafts are written in
> your voice, everything waits in one review queue, and nothing publishes without
> your approval. Then approved posts go out on a steady rhythm.

## The cast (all copy traces to the `included` section of `ai-office-assistant.ts`; full table in DESIGN.md)

| Element | EN | HE | Source |
|---|---|---|---|
| Chips ×3 | `writing` · `calls` · `positions` | `כתיבה` · `שיחות` · `עמדות` | `included.items[0].desc` (Voice profile) `:159` / `:400` |
| Headline 0 | `Your material` | `החומר שלכם` | `included.film.caption` `:185` / `:424` |
| Headline 1 | `Angles proposed` | `זוויות מוצעות` | `included.intro` `:155` / `:396` |
| Headline 2 | `Drafts in your voice` | `טיוטות בקול שלכם` | `included.film.caption` `:185` / `included.intro` `:396` |
| Headline 3 | `Review queue` | `תור אישורים` | `included.items[2].title` `:166` / `:407` |
| Headline 4 (peak) | `Your approval` | `האישור שלכם` | `included.intro` `:155` / `:396` |
| Headline 5 = closing | `Published on rhythm` | `מתפרסם בקצב` | `included.items[3].title` `:170` / `:411` (near) |
| Caption (peak) | `Nothing publishes without your approval` | `שום דבר לא מתפרסם בלי אישור שלכם` | `included.film.caption` `:185` / `:424` |

## The peak — your approval

The signature beat. The front draft leaves the review queue, passes the copper `Your
approval` checkpoint, warms to copper and gets the human check. The rest of the queue stays
behind, still waiting. Everything upstream defocuses; the checkpoint and the approved draft
stay sharp. The caption `Nothing publishes without your approval` appears verbatim.
Publishing is downstream of the human: nothing goes out on its own.

## The payoff — rhythm

The approved draft dissolves into the out node and becomes a cadence of evenly spaced
published beats. `Published on rhythm` is held to the end as the closing line.

## Honesty rules (non-negotiable)

- Schematic node marks + abstract cards: no product UI, no metrics, no names.
- No "Sample data" chip (this is not a product screen); no neon or sparkles; one
  bounded copper ring at the peak.
- Nothing on frame that does not trace to the DESIGN.md source table.
