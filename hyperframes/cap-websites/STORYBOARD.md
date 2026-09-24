# STORYBOARD — 12s timeline

30 fps · 12 s · deterministic GSAP timeline (`window.__timelines["root"]`).
Hero frame = the settled end state (poster). Seven beats. Horizontal conveyor below a band
of four page frames under a hairline sitemap; EN left→right (English pages built first on
the left, Hebrew twins mirror onto the right), HE right→left (the reverse). Loop-continuous
camera (identity at t=0 and t=12). Film spec v2 geometry — see DESIGN.md → Layout.

## Beats

| # | Time | Beat |
|---|---|---|
| 0 | 0.0–2.1 | **Your brief.** Three chips (`services · audience · languages`, 80px; HE 88px) drift in as a loose pile over the empty page band, then accelerate and merge into one copper token at node 0; the rail draws in (1.6s); headline `Your brief`. |
| 1 | 2.1–3.6 | **Structure and copy.** Token → node 1; the sitemap root appears on the centre axis and the primary half of the sitemap draws outward; two **wireframe** pages (B, then A) arrive on its drops (outline + dashed media slot); their heading and copy bars write in from the reading-start side. |
| 2 | 3.6–5.3 | **Design and build — the mirror.** Token → node 2; the pages are designed (the media slot fills, the heading lights, the surface fills). A dashed axis appears at x 960 and the **twin pages unfold from it** (one rotation about the axis — the other language, every element on the other side); the twin half of the sitemap draws with them; the axis fades (5.35–5.7). |
| 3 | 5.3–6.5 | **Films and metadata.** Token → node 3; a small film frame drops into the home page's media slot in both languages and starts playing (a tiny rail with a copper mark travelling it); the sitemap brightens and a metadata pip lands on each page's drop. |
| 4 | 6.5–9.0 | **PEAK — Your approval.** Token → node 4; every page gets an open status mark (review opens). **Rack focus**: rail, upstream nodes, sitemap and pips defocus (`blur 9px`, dim); the copper checkpoint, the four pages and the token stay sharp; camera pushes in (1.5%); one bounded copper ring. Page A (both languages) warms to copper, its mark fills and the check draws; page B keeps its open mark (**deliberately left waiting**, one finite breath). Caption `Review and approve`. |
| 5 | 9.0–10.8 | **Live in both languages.** Refocus; token → node 5; headline `Live in both languages`; the sitemap root lights copper and copper runs down the sitemap to both language versions of page A. Page B still waits. |
| 6 | 10.8–12.0 | **Settle.** The headline is held as the closing; the live root breathes once; the film in page A keeps playing (its last leg ends 11.5s); camera settles to identity → poster. |

## Review frames (snapshot timestamps)

```
npx --yes hyperframes@0.6.84 snapshot --at 0.9,1.9,3.4,5.0,6.3,8.4,10.4,11.7 --describe false
```

| Frame | t | Shows |
|---|---|---|
| 1 | 0.9 | the brief pile (services · audience · languages), rail drawing |
| 2 | 1.9 | token at node 0, `Your brief` |
| 3 | 3.4 | `Structure and copy` — primary sitemap half, two wireframe pages, copy bars writing |
| 4 | 5.0 | `Design and build` — designed pages + their mirrored twins, axis visible, twin sitemap half drawing |
| 5 | 6.3 | `Films and metadata` — film frames in both home pages, pips on the sitemap |
| 6 | 8.4 | **APPROVAL PEAK** — upstream defocused, A (both languages) approved, B waiting, caption |
| 7 | 10.4 | `Live in both languages` — copper live path from the root to both A pages |
| 8 | 11.7 | settled hero / poster |

HE: flip the declared `lang` default to `"he"`, run the same command, flip back (`snapshot`
has no `--variables`; the flip is the Windows-safe route anyway).

## Gates before render

- `npm run check` (lint + validate + inspect) clean.
- **375px legibility pass** on frames 6 (peak) and 8 (closing), both locales →
  `snapshots-{en,he}/_legibility-375.png`.
- Loop-seam camera-identity check (t=0 vs t=12).
- Owner stills approval.
- REVIEW.md written.

## Loop + renders

Linear film + soft settle; the page restarts at 0. Camera is loop-continuous (identity at
t=0 AND t=12). Renders per locale: `cap-websites.{webm,mp4}` + `-poster.png` and `-he`
variants → `public/videos/`, via the `lang` default flip.
