# REVIEW — "The Command Center" (Film 5)

Status at Phase 2 review checkpoint: **composition authored (EN + HE), gates
clean, awaiting render approval.**

## What was built

One composition (`index.html`), two locales via the `lang`
`data-composition-variables` (EN default; HE mirrors RTL). 14s, 6 beats, single
paused GSAP timeline on `window.__timelines["root"]`. Charcoal `#review-bg` for
preview/check/snapshot only — **removed before the transparent alpha render**
(the charcoal MP4 is post-composited from the alpha master).

## Beats (verified in snapshots)

| t | Beat | Reads as |
|---|---|---|
| 1.4s | Overnight pile | 3 mono chips (email · calendar · documents) at odd rotations |
| 3.4s | Interface draws | frame strokes in, tagline reveals |
| 6.0s | Panels populate | 2×2 status grid + SAMPLE DATA badge; one urgent row copper-flagged |
| 9.0s | **Approval peak** | grid dims, approval column lit, ring bloom, item 1 checked, safety caption |
| 11.0s | Fails safely | day settles; item 1 done, **item 2 still waiting** |
| 13.2s | Settled | closing "The day starts decided"; hero/poster frame |

## Gates

- `npm run check` (lint + validate + inspect): **exit 0** — 0 errors, 0 layout
  issues, **90 text elements pass WCAG AA** (with `#review-bg` charcoal backdrop;
  without it the transparent-render checker false-flags contrast).
- **1 lint warning** — `overlapping_gsap_tweens` on `__unresolved__`
  (opacity/y/scale, 0.00–0.50s): the always-on camera `scale` tween (0–14s)
  overlapping intro reveals on *different* elements. Benign (no same-element
  property clash); same pattern as `office-assistant` (camera 0–18s).
- **EN** snapshots: `snapshots/contact-sheet-en.jpg`.
- **HE** snapshots: `snapshots/contact-sheet-he.jpg` — mirrored composition
  confirmed (approval column left, badge left, RTL rows, Assistant font, Hebrew
  reads correctly — not a flipped render).

## Legibility (the film's stated biggest risk)

Showing a real UI means many text elements. At 375px-wide mobile (~0.195 scale):
the **grid text is intentionally structural** (titles ~5px, rows ~6px — meaning
carried by layout + copper flag + the approval check + one-still-waiting). The
**readable moments** are enlarged: tagline 56px (~11px mobile), closing 62px
(~12px), caption 38px (~7px), SAMPLE DATA badge (shape/color recognizable). This
is the accepted product-UI tradeoff (DESIGN.md → Mobile legibility).

## Honesty compliance

- Persistent `Sample data` / `נתוני דוגמה` badge every frame.
- Zero client names, matter numbers, identifier-dates, performance metrics.
- Row labels are generic law-office task nouns under the Sample-data banner
  (honest-mock grammar). Every readable string traces to a site content file
  (see DESIGN.md source table + inline `COPY` comments).
- The approval peak leaves item 2 deliberately waiting — the "workflow fails
  safely / human in charge" beat, shown in UI not diagram.

## Render (DONE 2026-07-12 — both locales approved from preview)

1. `#review-bg` removed → transparent VP9-alpha WebM via `hyperframes render
   --format=webm`; restored after.
2. Charcoal MP4 + settled poster (t=13.6s) derived with ffmpeg (alpha WebM
   composited over `#121211`). HE via the **default-flip** route (not
   `--variables`); the `dir`-on-`<html>` blank-frame bug avoided (dir on
   rows/text only) — HE rendered real content, not blank.
3. Outputs in `public/videos/` (alpha_mode=1 confirmed on both WebM). **⚠ Sizes
   below are the ORIGINAL 2026-07-12 render — SUPERSEDED by the Phase C re-render
   (see "Cinematic regrade" below for current sizes).**
   - `command-center.mp4` 0.98 MB · `.webm` 4.49 MB · poster 258 KB
   - `command-center-he.mp4` 0.66 MB · `-he.webm` 3.23 MB · `-he-poster.png` 179 KB
   - **HE re-rendered** after fixing panel-title RTL: `dir="rtl"` now on
     `.panel` (titles + rows inherit) + `#badge`, not just the rows — titles
     were leaking left-aligned (default LTR).
   - MP4s within the ~1.5 MB/locale target; WebM alpha is heavier (dense full-UI
     frame + constant camera push-in defeats inter-frame compression) — optimize
     with `--video-bitrate` if the mobile-data budget needs it.

## Cinematic regrade (Phase C — DONE 2026-07-13)

Choreography regraded to film-grade; **no content/copy/locale/honesty-grammar
change** (see DESIGN.md → "Cinematic regrade"). Velocity-matched beat hand-offs,
rack-focus onto the copper checkpoint at the peak, loop-continuous camera
(identity at `t=0` and `t=14`), and a hero **WebGL copper-glow bloom** on the
checkpoint (additive Three.js sprites — NOT `UnrealBloomPass`, which opaque-boxes
the alpha master; feature-detected, CSS glow fallback).

- Gates: `npm run check` **exit 0** — 0 errors, 90 text elements WCAG AA, 0
  layout issues across 9 samples. Lint: 2 benign warnings (`overlapping_gsap_tweens`
  on `__unresolved__`; `composition_file_too_large`). Validate: 1 benign console
  **warning** — three.js's UMD build self-warns UMD is deprecated (0.160.1 is the
  last version shipping it; that's why it's pinned there). Cosmetic; does not fail
  validate/render.
- **Code review (`/code-review high`, 2 finders + verify): 4 real findings, all
  fixed.** (1) Glow was mis-positioned ~34px low — sprites read `getBoundingClientRect`
  in the fromTo `immediateRender` displaced state; now measured at rest+identity
  (`window.__bloomCenters`). (2) Async CDN ES-module could load after the harness
  is ready → per-worker glow divergence; now Three.js loads **synchronously** (UMD
  blocking `<head>` script) so `__bloomRender` exists before ready. (3) `renderer.render`
  unguarded → a context loss would throw into the GSAP tick; now wrapped. (4) Camera
  drift read a sibling tween's `cam.scale` (1-frame stale, seek-order-dependent);
  now scale+drift are pure functions of `t`. Residual (accepted, graceful): a worker
  whose WebGL context construction fails renders CSS-glow-only — rare; the empirical
  render showed a flicker-free peak across all workers.
- Snapshots verified EN (all 6 beats + peak) and HE (mirroring + bloom auto-mirrored
  via `__bloomCenters` + Assistant font); glow lands on the check/dot in both locales.
- Re-rendered both locales (alpha WebM `--video-bitrate 3.6M` → ffmpeg charcoal MP4
  + poster). Final sizes vs pre-regrade: EN `.mp4` 1.20 MB (1.17×) · `.webm` 5.63 MB
  (1.20×); HE `.mp4` 0.86 MB (1.24×) · `.webm` 4.79 MB (1.42× — the one file
  marginally over the ~1.3× guideline; aggregate footprint ~1.26×). Posters refreshed
  (settled frame now at camera scale 1.0).
- Site code unchanged — same asset filenames, swapped in place.

## Site integration (Phase 5 — DONE 2026-07-12)

- Flagship `film` block (EN+HE) swapped to `command-center*` assets;
  sectionTitle → "What your office logs into" / "מה שהמשרד שלכם נכנס אליו";
  captions carry the honest "taking shape · sample data" line. Replaces the
  retired `office-assistant-process` film (one film per page kept).
- Homepage command-center card (EN+HE) gained an optional `poster` + `href` +
  `linkLabel`; renders the settled poster (next/image) linking to
  `/offers/ai-office-assistant#film` (`/he/...` in HE). Card model extended in
  `home.ts`; CSS in `globals.css` (RTL-aware arrow).
- Gates: build + lint clean · ripple scan (1 doc-drift fixed) · code review
  (1 a11y finding fixed) · live-verified EN+HE (homepage card + flagship film,
  no console errors, assets 200).
