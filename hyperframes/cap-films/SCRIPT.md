# SCRIPT — what the film says

Subject: **films** — short designed films rendered from code, from the client's own copy,
approved on stills before anything renders, and exported for every surface in both
languages.

## The message arc

> Your copy becomes one line. The line is cut into six scenes. Each scene becomes a still,
> in both languages. You approve the stills — one approved, one still waiting, then that one
> too; nothing renders before approval. The loop is rendered, then cut into a square and a portrait, each with its other-language twin.

## The cast (all copy traces to `src/content/studio/films.ts` — see DESIGN.md table)

| Element | Text | Source |
|---|---|---|
| Chips ×3 (node 0 sub) | `site` · `deck` · `post` | `example.map.nodes[0].sub` |
| Headline 0 | `Your copy` | `example.map.nodes[0].label` |
| Headline 1 | `Six scenes` | `example.map.nodes[1].label` |
| Headline 2 | `Stills in both languages` | `example.map.nodes[2].label` |
| Headline 3 (human) | `Your approval` | `example.map.nodes[3].label` |
| Headline 4 (out) = closing | `Rendered loop` | `example.map.nodes[4].label` |
| Caption | `Approve the stills` | `how.steps[2].title` (the human step) |

## The peak — your approval

The signature beat. The timeline defocuses; the copper checkpoint stays sharp. Two stills
wait at it — one scene's still and its other-language twin: the owner approves the first
(copper + check); the second keeps its open dot, still waiting — then, just before the
render, it gets its own check: nothing renders before approval. The caption
`Approve the stills` appears verbatim.

## The payoff — rendered loop

The approved timeline renders into one 16:9 frame that fills with a settled schematic,
then fans out into a square and a tall portrait (web / LinkedIn / Reels), each backed by
its other-language twin. The out node's own words are the closing: `Rendered loop`.

## Honesty rules (non-negotiable)

- Schematic marks only — no footage, no faces, no voices, no logos, no metrics, no text
  inside the frames.
- No "Sample data" chip (this is not a product screen); no neon; one bounded copper ring
  at the peak.
- Nothing on frame that does not trace to the DESIGN.md source table.
