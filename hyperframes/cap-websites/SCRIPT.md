# SCRIPT — what the film says

Subject: **websites** — designed, fast, bilingual sites for a business that sells a
service, written natively in both languages, with the studio's films as the motion, and
nothing live until the owner has read it in both languages.

## The message arc

> A brief arrives. The site's structure appears, the pages are written and designed in
> one language and mirror into the other. A film drops into the home page. The owner
> reviews: one page is approved, one is left waiting. The approved page goes live in both
> languages.

## The cast (all copy traces to `src/content/studio/websites.ts` — see DESIGN.md table)

| Element | Text | Source |
|---|---|---|
| Chips ×3 (node 0 sub) | `services` · `audience` · `languages` | `example.map.nodes[0].sub` |
| Headline 0 | `Your brief` | `example.map.nodes[0].label` |
| Headline 1 | `Structure and copy` | `example.map.nodes[1].label` |
| Headline 2 | `Design and build` | `example.map.nodes[2].label` |
| Headline 3 | `Films and metadata` | `example.map.nodes[3].label` |
| Headline 4 (human) | `Your approval` | `example.map.nodes[4].label` |
| Headline 5 (out) = closing | `Live in both languages` | `example.map.nodes[5].label` |
| Caption | `Review and approve` | `how.steps[3].title` (the human step) |

## The signature — the mirror

At `Design and build` the pages built in the first language unfold into their twins across
the centre axis: the media slot, the heading, the copy and (later) the status mark all sit
on the other side. Bilingual is structural, not a translation layer. The HE cut builds the
Hebrew pages first and mirrors them into English.

## The peak — your approval

Everything upstream defocuses; the copper checkpoint and the four pages under review stay
sharp. The owner approves page A in both languages; page B keeps its open mark and stays
waiting through the end of the film. The caption `Review and approve` appears verbatim.
Nothing goes live on its own.

## The payoff — live in both languages

The sitemap root lights and copper runs down to both language versions of the approved
page. The out node's own words are the closing: `Live in both languages`.

## Honesty rules (non-negotiable)

- Abstract page frames + bars, a hairline sitemap, node marks — no product UI, no browser
  chrome, no text inside the pages, no metrics, no names, no synthetic faces or voices.
- No "Sample data" chip (this is not a product screen); no neon; one bounded copper ring
  at the peak.
- Nothing on frame that does not trace to the DESIGN.md source table.
