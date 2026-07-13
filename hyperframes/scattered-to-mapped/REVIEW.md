# REVIEW — constraint checklist & validation

## Brief constraints

| Constraint | Status |
|---|---|
| Before literally becomes the after (transformation, not panels) | ✅ chips dissolve into their nodes; ledger straightens + strikes as each pain resolves |
| Differentiated from Film 1 (meeting-workflow) | ✅ mirrored composition (spine right), full-frame chaos, chips target *different* nodes, self-tidying ledger |
| All copy traces to `home.ts` evidence (three-source rule) | ✅ caps = panel captions; ledger = `before.items` verbatim; nodes = `mapped.nodes` verbatim; chips = direct contractions |
| Human approval is the peak, receives no chaos chip | ✅ dim + scale + bounded copper ring + hold; approval is *added*, not rearranged |
| `what is open?` survives the peak, resolves into Tracked to done | ✅ last drift + final flight at 10.75s |
| No fake SaaS UI / metrics / names / neon / sparkles | ✅ |
| Charcoal `#121211` + copper `#d96832`, transparent bg | ✅ `#review-bg` removed before render |
| `.sch-*` schematic language, Inter + Geist Mono | ✅ brand tokens + local woff2 (brand DESIGN overrides generic skill font list, per Films 1–3) |
| Deterministic (no random/Date/async/infinite repeats) | ✅ fixed positions; drift/breathe use computed finite repeats |
| Timeline registered `window.__timelines["root"]`, paused | ✅ |
| ~13s, landscape 1920×1080 | ✅ |

## Validation

- `hyperframes lint` → **0 errors**, 2 warnings: `overlapping_gsap_tweens` on
  `"__unresolved__"` — **false positives**; the linter cannot resolve selectors
  passed through the `activate()/fly()/resolve()` helpers and the CHIPS/DRIFT
  arrays. Manually verified: no element has two simultaneous tweens on the same
  property (drift lives on `.chipw` wrappers, flights on the inner `.chip`).
- `hyperframes validate` → **no console errors · 35 text elements pass WCAG AA**.
- `hyperframes inspect` → **0 layout issues across 9 samples** (camera + chaos
  field marked `data-layout-allow-overflow`; chaos overlap is intentional).
- Snapshots at all 8 storyboard frames reviewed against the beat sheet; one
  polish round applied (denser tangle, wider chip scatter, +drift amplitude).

### Animation map — NOT run (tooling unavailable)

`skills/hyperframes/scripts/animation-map.mjs` requires `@hyperframes/producer`;
the npm package's dist fails to load (`ERR_AMBIGUOUS_MODULE_SYNTAX` in its
bundled wawoff2) and no sibling film ran it either. Substituted coverage:
lint's tween-overlap analysis + inspect's 9-sample collision/offscreen audit +
frame-by-frame snapshot review. Revisit if a fixed producer version ships.

## Render pipeline (same MOV-alpha route as Films 1–3)

`hyperframes render --format webm` produces an opaque WebM — known trap
(documented in meeting-workflow/REVIEW.md). Route used:

1. `hyperframes render --format mov -f 30 -q high -o renders/_master.mov`
2. ffmpeg → VP9 alpha WebM (`-pix_fmt yuva420p -auto-alt-ref 0`)
3. ffmpeg → charcoal-composited H.264 MP4 (`color=c=0x121211` underlay)
4. Poster PNG from the settled MP4 frame (~12.7s)
5. Verify: WebM `alpha_mode=1`, transparent corner pixel via libvpx-vp9 decoder
6. Outputs → `public/videos/scattered-to-mapped.{webm,mp4}` + `-poster.png`;
   `_master.mov` is scratch — deleted after deriving.

## Known / deferred

- **Loop**: linear film + soft settle (family convention), not a seamless
  crossfade.
- **Social cut**: landscape only, per the other films.
- **Re-render trigger**: if `home.ts` → `evidence` copy changes, this film's
  baked-in text drifts — re-render (noted in DESIGN.md).

## Cinematic regrade (Phase C2 — DONE 2026-07-13)

Choreography regraded (content unchanged): velocity-matched chip flights (accelerate
+ blur into the node), a **deepened rack focus** at the Human-approval peak (Act 4 —
upstream nodes blur 1.2→4px + dim, copper approval node sharp; the settle refocuses
to blur 0 for the loop seam), and a **loop-continuous camera** (pure functions of
`t`; identity at t=0 and t=13). Re-rendered EN (`--video-bitrate 3.6M` → charcoal
MP4 + poster). `npm run check`: 0 errors. Sizes: `.mp4` 1.30 MB · `.webm` 7.50 MB
(down from the old 18 MB WebM). Site code unchanged.
