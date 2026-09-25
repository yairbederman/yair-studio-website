# REVIEW — "The Command Center" (Film 5)

Status (2026-09-24): **film spec v2 re-cut + new 4:5 phone cut — owner approved the stills;
rendered (EN + HE, both cuts), phone cut wired, stale site copy fixed.** The current cut is
**"v2 2026-09-24"** and its render record **"Render v2 (2026-09-24)"** at the end of this file;
the sections down to the type-floor audit are the v1 / Phase C record (history).

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

## Type-floor audit (2026-09-24, pre-retune)

Floor (backlog/2026-09-24-studio-redesign-plan.md §2/§9): **headline moments ≥ 84px, secondary
labels ≥ 64px** on the 1920 canvas; 375px full-bleed = × 0.195. "Font now" = EN / HE. Target pair
A: Newsreader 500 (EN display) · Instrument Sans (EN body) · Frank Ruhl Libre 500 (HE display) ·
Assistant 600 (HE body) · Geist Mono unchanged. Widths are rough: chars × 0.55em (serif).
STRUCTURAL = documented in DESIGN.md → Mobile legibility ("meaning carried by structure and copper,
never by small text"; panel titles/rows have their own floors there) and in this file → Legibility.

| Element | Locale | Font now | px | @375 | Role | Verdict | index.html |
|---|---|---|---|---|---|---|---|
| `.ov-inner` ×3 "email / calendar / documents" | EN+HE | Geist Mono 400 / Assistant 600 | 34 | 6.6 | transient pile (0.2–2.9s) | FAIL (candidate STRUCTURAL — not in DESIGN.md's list) | :78-83, :176-178 |
| `#tagline` "See what needs attention" | EN+HE | Inter 600 / Assistant 600 | 56 | 10.9 | headline (interface) | FAIL vs 84 | :95-99, :187 |
| `#badge` SAMPLE DATA | EN+HE | Geist Mono 400 / Assistant 600, uppercase +0.14em | 22 | 4.3 | honesty badge (shape/colour) | STRUCTURAL | :100-105, :188 |
| `.ptitle` ×5 (MEETINGS · URGENT EMAILS · WAITING CLIENTS · DEADLINES · APPROVAL) | EN+HE | Geist Mono 400 / Assistant 600, uppercase | 26 | 5.1 | panel titles | STRUCTURAL — **below DESIGN.md's own ≥ 44 floor** | :117-120 |
| `.prow .rl` ×8 (generic task nouns) | EN+HE | Geist Mono 400 / Assistant 600 | 30 | 5.9 | grid rows | STRUCTURAL (DESIGN.md floor ≥ 30, met) | :126 |
| `.arow .al` ×2 "Reply draft / Signature" | EN+HE | Geist Mono 400 / Assistant 600 | 34 | 6.6 | approval rows (peak column) | STRUCTURAL (check + waiting dot carry it) | :143 |
| `#caption` "No external messages are sent without approval" | EN+HE | Inter 400 / Assistant 600 | 38 | 7.4 | label (safety line) | FAIL vs 64 | :152-156 |
| `#closing` "The day starts decided" | EN+HE | Inter 600 / Assistant 600 | 62 | 12.1 | headline (closing) | FAIL vs 84 | :157-161 |

**Totals: 22 text moments — 0 PASS · 6 FAIL · 16 STRUCTURAL.**

Retune notes
- `#tagline` → 84: the header band is y 120–256 (frame :183, divider :184); top 154 + ~100px serif
  line box ≈ 254 → **touches the divider**. Move the tagline to top ≈ 136 or the divider to ≈ 276
  (panels start at 310, :339-343). Width EN ≈ 1109px from left 170 → 1279; the badge (right 170,
  ≈ 190px wide) starts ≈ 1560 — no collision; HE mirrors (:335-336) with the same margins.
- `#caption` → 64: EN ≈ **1619px** at 0.55em (over the ~1600 flag). As body text it sets in
  Instrument Sans 400 (≈ 0.5em → ≈ 1470px) and fits the 1920 box (:153); in the serif expect
  ~150px margins. HE ≈ 915px. The string is verbatim `home.ts` safety copy — re-measure the final
  string after the WS-B copy stop.
- `#closing` → 84 ≈ 1016px (HE ≈ 740): top 982 + ~100px line box ≈ **1082 — 2px past the canvas**.
  Move to top ≈ 964 (it sits under the window, frame bottom 960, :183) or set line-height 1.
- The peak has no headline-floor text: "Approval" is a 26 panel title (:117, :130) and the 38
  caption is the only readable line. Options: promote `#p-appr .ptitle` to 64 (≈ 282px mono, fits
  the 560 column, :343), or rely on caption-at-64 + the check as the documented UI-film tradeoff.
- Documented-floor breach: DESIGN.md sets titles ≥ 44 / rows ≥ 30 / tagline ≈ 52 / closing ≈ 72;
  shipped 26 / 30 / 56 / 62. Titles at 44 ≈ 396px mono for "Waiting clients" vs 384px inner panel
  width (440 − 2×28 padding, :115, :339) — the 2×2 panels cannot take 44 titles without widening.
  If titles stay STRUCTURAL at 26, **rewrite DESIGN.md's floor to match** rather than leave it
  claiming 44.
- Tracking −0.015em `#tagline`, −0.01em `#closing`, +0.14em `#badge`, +0.12em `.ptitle` (:97,
  :160, :103, :118) — HE inherits all via the shared rules (dir per element, :292-293): uppercase
  tracking is meaningless for Hebrew and letter-spaces Assistant; **reset to 0 under `[dir=rtl]`**.
- `font-family: "Inter"` hard-coded on `#tagline`/`#caption`/`#closing` (:96, :154, :159); HE swap
  inline at init (:288-289). Split: tagline + closing → Newsreader / Frank Ruhl Libre; caption →
  Instrument Sans / Assistant; every `.mono` stays Geist Mono (HE → Assistant, unchanged).
- Bloom centres are measured from DOM rects at init (:484-493), so header/closing size changes are
  safe; a `#p-appr` padding or `.arow` height change shifts `__bloomCenters` automatically.
- WS-E 4:5 mobile cut inherits this audit (plan §9: rows ≥ 56px on 1080): the 2×2 grid + column
  cannot fit at that size in 1080×1350 — plan the cut around the approval column + caption/closing.

---

## v2 2026-09-24 — film spec v2 re-cut + 4:5 phone cut (stills record; rendered → "Render v2")

Why: film spec v2 (`backlog/2026-09-24-studio-redesign-plan.md`, owner 2026-09-24) — sans only
on frame, text that carries on a phone — plus decision D3 (a 4:5 phone cut of this film).
**Kept:** 14s, all six beats and their timings, the WebGL bloom peak (+ CSS fallback), the
rack focus, the loop-continuous camera, the `lang` mirror, the honesty grammar (persistent
Sample-data chip, zero names / matter numbers / metrics, item 2 left waiting). **Changed:** type,
scale, layout, panel set, strings (re-sourced), and the header became the one large text slot.
Full spec: DESIGN.md → Phone type floor v2 / Layout v2 / Phone cut / Panel selection.

### What changed (v1 → v2, 16:9)

| Area | v1 | v2 |
|---|---|---|
| Type on frame | Inter 600/400 + Geist Mono panel labels (EN); Assistant 600 (HE) | **Instrument Sans 600/400** (EN), **Assistant 700/600** (HE); Geist Mono only for the Latin chips; Inter `@font-face` removed |
| Tagline | `See what needs attention` (home card kicker — no longer on the site), 56px | `What your office logs into` (flagship `film.sectionTitle`), **120 / 132** |
| Panels | 2×2 grid, 440×250: MEETINGS · URGENT EMAILS · WAITING CLIENTS · DEADLINES (mono 26, uppercase) | **3 strips 1116×216**: Morning briefing · Email triage · Document workflows (`build.items`), titles **80 / 88** |
| Rows | 8 × mono 30 | 6 × **56 / 62**, two side by side per strip |
| Approval | 560×528 column, "APPROVAL" mono 26, items mono 34 | **580×700** column, "Human approval" **80 / 88**, items **72 / 80**, 56px check boxes |
| Caption | 38px, below the window (y 996) | **72 / 80**, in the header slot (the tagline hands off to it at the peak) |
| Closing | 62px, below the window | **128 / 140**, in the header slot (the caption hands off to it) |
| Chip | 22px mono, top-right inside the header | **40 / 48**, straddling the window's top edge (opaque fill) |
| Overnight chips | 34px | **72 / 80** |
| Window | inset 120 (1680×840) | x 48 → 1872, y 76 → 1028 (1824×952) |
| Frame draw-in | snapped to done halfway (latent: CSSPlugin px-rounds the `pathLength=1` fraction) | draws continuously (`autoRound: false`; dashoffset 0.69 at 2.9s) |
| WebGL sprites | aura 430 · halos 200/320 · cores 84/130 | aura 600 · halos 260/420 · cores 110/170 (scaled to the v2 checkpoint) |

**Panel dropped: "Follow-up and meetings"** (the 4th `build.items` entry) — no overnight-chip
counterpart (the three chips now map one-to-one onto the three panels), its "meetings" repeats
Morning briefing, no approval item derives from it, and at the 80px floor its title is the
widest (890px). The **phone cut** keeps Email triage + Document workflows (the two that feed the
approval items) and drops Morning briefing as well. Full reasoning: DESIGN.md → Panel selection.

**Layout deviation from the brief's "panels ≈ 760×300":** at 80px, "Document workflows" alone
is 788px, so ≈760-wide cards cannot hold the title, and a two-column card grid + the approval
column overflows 1920. The panels became full-width strips (1116×216: title over two rows side
by side); the approval column is 580 wide (≈ 520 in the brief) so the HE items at 80px fit.

### Phone cut (4:5, 1080×1350) — `../command-center-mobile/`

- **Canvas: 4:5 (1080×1350).** Evidence (pinned CLI 0.6.84): the local render compiler sizes the
  page from the root `data-width` / `data-height` (`dist/cli.js` parses the root attributes into
  the viewport; the 16:9 / 9:16 / 1:1 list applies only to the HeyGen-cloud `--aspect-ratio`
  submit path, and the preset list only to `--resolution` supersampling). A throwaway 1-second
  1080×1350 project in the session scratchpad rendered with `npx --yes hyperframes@0.6.84
  render`: `--quality draft` MP4 → h264 1080×1350, 30 frames, 1.000s; `--format webm` → vp9
  1080×1350 `ALPHA_MODE=1`; a 0.5s frame showed all four border corners + the centre dot (full
  canvas, no crop). The film itself was not rendered.
- **Why a sibling project, not a `layout` variable** (the redesign plan's D3 wording): root
  `data-width` / `data-height` are read once at compile time (`hyperframes-core` →
  data-attributes), so a variable cannot switch the canvas. Scaffold copied from this project
  (package.json renamed, hyperframes.json, meta.json, .gitignore, `#review-bg`, the same `lang`
  variable); fonts = the six referenced kit files, byte-identical to `hyperframes/_fonts/`. The
  phone cut's design + audit live here and in DESIGN.md (one source) — no duplicate docs there.
- **Layout:** header slot (y 112–324, authored 2-line splits) · Email triage (y 366–648) ·
  Document workflows (y 668–950) · approval block (y 970–1292); rows stacked; width 928.
- **Bloom → CSS copper glow** (renderer cost): three radial-gradient discs positioned from rects
  measured at rest + identity, opacity on the WebGL envelope; plus the same ring bloom and
  `#p-appr` box-shadow. No Three.js in this project.
- **Same beat timings** (every shared element's `at` time is identical); same camera curve.
- Asset names (decided 2026-09-24): `public/videos/command-center-mobile{,-he}.{mp4,webm}` +
  `command-center-mobile{,-he}-poster.png` (not the plan D3 row's `command-center{,-he}-mobile.*`).

### Gates

- **16:9 `npm run check`** (lint → validate → inspect, `#review-bg` present, default `"en"`):
  **exit 0** — lint `0 error(s), 2 warning(s)` (the documented benign pair:
  `overlapping_gsap_tweens` on `__unresolved__`; `composition_file_too_large`, 452 lines) ·
  validate `0 error(s), 1 warning(s)` (three.js 0.160.1 UMD self-deprecation notice, as v1) ·
  inspect `0 layout issues across 9 sample(s)`. Contrast (from `validate --json`; the human
  summary line is suppressed while a console warning exists): **75 / 75 text elements WCAG AA,
  min ratio 5.33**. HE (default flipped): exit 0, 0 layout issues.
- **4:5 `npm run check`**: **exit 0** — lint `0 error(s), 2 warning(s)` (same benign pair, 301
  lines) · `No console errors · 90 text elements pass WCAG AA` · `0 layout issues across 9
  sample(s)`. HE: exit 0 · `80 text elements pass WCAG AA` · 0 layout issues.
- **Fonts** (snapshot loader + in-page `document.fonts`): EN Instrument Sans 400–600 + Geist
  Mono 400; HE Assistant 600 ×2 + 700 ×2. The other locale's families report "unloaded" — no
  glyph maps to them (expected). No Inter / Newsreader / Frank Ruhl Libre `@font-face` in either
  `index.html`.
- **Hebrew tracking:** computed-style sweep of every HE text element — 19 (16:9) + 17 (4:5), **0
  with non-zero letter-spacing**. Caught in this pass: `.ptitle`'s −0.01em outranked the
  `[dir=rtl]` reset because titles inherit `dir` from their panel; fixed with `.he .ptitle
  { letter-spacing: 0 }` in both cuts; HE stills re-shot after the fix.
- **Loop seam** (both cuts, `tl.time(t)`): `#camera` at t=14 `scale(1) translate(−1.2e−15px,
  −1.5e−15px)`, at t≈0 `scale(1) translate(0.002px, 0.003px)`; timeline 14.00s = root 14.
- **`lang` default restored** after every HE flip: grep → `"default":"en"` (16:9 line 5, 4:5
  line 4); `"default":"he"` count 0 in both files.

### Type-floor audit v2 — per moment, px vs floor, measured widths

"DOM w" = text advance width in real Chrome (Range rect, timeline seeked to 13.9s — camera 1.0,
every element at rest); multi-line = per line. "Ink" = rendered-pixel extent scanned from the
tool's own snapshot frames (camera included; the peak frame is under the 1.035 push-in).
@375 = px × 375/1920 (16:9) or × 375/1080 (4:5). Floors = the dispatch's spec v2 brief.

**16:9 (1920×1080)**

| Moment | Loc | Font | px | Floor | @375 | DOM w | Ink (x range) | Verdict |
|---|---|---|---|---|---|---|---|---|
| Tagline (6.0s) | EN | Instrument Sans 600 | 120 | 120 | 23.4 | 1397 | 1392 (102→1493) | PASS |
| Caption (peak 9.4s) | EN | Instrument Sans 400 | 72 | 64 | 14.1 | 1575 | 1619 @1.035 (67→1685) | PASS |
| Closing (13.2s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 1339 | 1329 (97→1425) | PASS |
| Panel titles ×3 | EN | Instrument Sans 600 | 80 | 80 | 15.6 | 616 / 438 / 788 | — | PASS |
| Approval title (2 lines) | EN | Instrument Sans 600 | 80 | 80 | 15.6 | 270 / 321 | — | PASS |
| Rows ×6 | EN | Instrument Sans 400 | 56 | 56 | 10.9 | 242 · 256 · 362 · 315 · 276 · 481 | — | PASS |
| Approval items ×2 | EN | Instrument Sans 400 | 72 | 64 | 14.1 | 350 / 321 | — | PASS |
| `Sample data` chip | EN | Geist Mono 400, +0.08em, upper | 40 | 40 | 7.8 | 299 (box 347) | — | PASS |
| Overnight chips ×3 | EN | Geist Mono 400 | 72 | 64 (secondary) | 14.1 | 164 / 255 / 285 | — | PASS |
| Tagline | HE | Assistant 700 | 132 | 120 | 25.8 | 1491 | 1481 (341→1821) | PASS |
| Caption (peak) | HE | Assistant 600 | 80 | 64 | 15.6 | 869 | 894 @1.035 (953→1846) | PASS |
| Closing | HE | Assistant 700 | 140 | 120 | 27.3 | 1003 | 997 (820→1816) | PASS |
| Panel titles ×3 | HE | Assistant 700 | 88 | 80 | 17.2 | 397 / 363 / 540 | — | PASS |
| Approval title | HE | Assistant 700 | 88 | 80 | 17.2 | 413 | — | PASS |
| Rows ×6 | HE | Assistant 600 | 62 | 56 | 12.1 | 167 · 172 · 237 · 327 · 180 · 380 | — | PASS |
| Approval items ×2 | HE | Assistant 600 | 80 | 64 | 15.6 | 402 / 208 | — | PASS |
| `נתוני דוגמה` chip | HE | Assistant 600 | 48 | 40 | 9.4 | 211 (box 259) | — | PASS |
| Overnight chips ×3 | HE | Assistant 600 | 80 | 64 | 15.6 | 98 / 82 / 180 | — | PASS |

**4:5 phone cut (1080×1350)**

| Moment | Loc | Font | px | Floor | @375 | DOM w (per line) | Ink (x range) | Verdict |
|---|---|---|---|---|---|---|---|---|
| Tagline, 2 lines (6.0s) | EN | Instrument Sans 600 | 104 | 96 | 36.1 | 789 / 403 | 785 (82→866) | PASS |
| Caption, 2 lines (peak) | EN | Instrument Sans 400 | 72 | 64 | 25.0 | 728 / 833 | 854 @1.035 (58→911) | PASS |
| Closing, 2 lines | EN | Instrument Sans 600 | 108 | 96 | 37.5 | 705 / 405 | 702 (77→778) | PASS |
| Panel titles ×2 | EN | Instrument Sans 600 | 80 | 80 | 27.8 | 438 / 788 | — | PASS |
| Approval title | EN | Instrument Sans 600 | 80 | 80 | 27.8 | 606 | — | PASS |
| Rows ×4 | EN | Instrument Sans 400 | 56 | 56 | 19.4 | 362 · 315 · 276 · 481 | — | PASS |
| Approval items ×2 | EN | Instrument Sans 400 | 68 | 64 | 23.6 | 331 / 303 | — | PASS |
| `Sample data` chip | EN | Geist Mono 400 | 40 | 40 | 13.9 | 299 | — | PASS |
| Overnight chips ×3 | EN | Geist Mono 400 | 72 | 64 | 25.0 | 164 / 255 / 285 | — | PASS |
| Tagline, 2 lines | HE | Assistant 700 | 108 | 96 | 37.5 | 807 / 392 | 799 (204→1002) | PASS |
| Caption, 1 line (peak) | HE | Assistant 600 | 80 | 64 | 27.8 | 869 | 894 @1.035 (119→1012) | PASS |
| Closing, 1 line | HE | Assistant 700 | 120 | 96 | 41.7 | 859 | 854 (143→996) | PASS |
| Panel titles ×2 | HE | Assistant 700 | 88 | 80 | 30.6 | 363 / 540 | — | PASS |
| Approval title | HE | Assistant 700 | 88 | 80 | 30.6 | 413 | — | PASS |
| Rows ×4 | HE | Assistant 600 | 62 | 56 | 21.5 | 237 · 327 · 180 · 380 | — | PASS |
| Approval items ×2 | HE | Assistant 600 | 74 | 64 | 25.7 | 372 / 192 | — | PASS |
| `נתוני דוגמה` chip | HE | Assistant 600 | 48 | 40 | 16.7 | 211 | — | PASS |
| Overnight chips ×3 | HE | Assistant 600 | 80 | 64 | 27.8 | 98 / 82 / 180 | — | PASS |

**Totals: 16:9 — 18 moments, 18 PASS · 0 FAIL; 4:5 — 18 moments, 18 PASS · 0 FAIL. No
STRUCTURAL-below-floor text remains** (v1 had 16). Clearances (16:9): EN tagline ink top 134 vs
chip bottom 108 (26px), ink right 1493 vs chip left 1477; HE tagline ink top 132 vs chip bottom
108, ink left 341 vs chip right 355 — the chip sits above the line's end with no ink overlap
(inspect: 0 layout issues). Header ink sits ≥ 49px inside the window's side frame lines at rest
(left/right-aligned UI copy, not centred headlines).

### Legibility (375px)

`snapshots-{en,he}/_legibility-375.png` in **both** projects: peak (9.4s) + closing (13.2s)
downscaled to 375px wide at the cut's own aspect (16:9 → 375×211; 4:5 → 375×469), side by side.
16:9: tagline/closing ≈ 23–27px, titles ≈ 16px, caption/items ≈ 14px, rows ≈ 11px — all read;
the check vs the waiting dot reads by shape + copper. 4:5: tagline/closing ≈ 36–42px, titles ≈
28px, rows ≈ 19–21px, items ≈ 24–26px. Rebuilt with `python <scratchpad>/cc-v2/ink-legib.py
"<repo>/hyperframes"` (ink scan + composites); DOM widths: `node
<scratchpad>/cc-v2/measure-comp.mjs <film dir> <en|he>`.

### Stills (v2)

- 16:9: `snapshots-en/` + `snapshots-he/` — `contact-sheet.jpg`, `frame-00…05` at 1.4 / 3.4 /
  6.0 / **9.4 (peak)** / 11.0 / **13.2 (closing)**, `_legibility-375.png`.
- 4:5: `../command-center-mobile/snapshots-{en,he}/` — the same set.
- The old `snapshots/` (v1, 3 frames) was replaced; a copy of the v1 `index.html` + those frames
  is in the session scratchpad (`cc-v2/index.v1.html`, `cc-v2/v1-snapshots/`), not in the repo.

### Judgment calls (for the owner's stills review)

1. **Header = the one large text slot.** Tagline → safety caption (peak) → closing, handed off
   in place. v1 put caption + closing under the window; at v2 sizes the window plus a 120px
   bottom band do not fit 1080, and one slot keeps "one large text moment at a time". The
   caption now sits top-left rather than centred under the window.
2. **Strips, not ≈760×300 cards** (see "Layout deviation" above); approval column 580 (≈520).
3. **EN approval title wraps to "Human / approval"** in the 580 column (the verbatim
   `example.map` node); HE fits one line. Alternative: "Approval" alone (a contraction).
4. **Rows and approval items re-sourced** from `build.items` descs (nouns, capitalised); the
   approval items are the singular of two rows, so the queue visibly comes from the panels.
5. **Chip straddles the window's top edge** (opaque copper-tint fill) — at 40px it no longer
   fits beside a 120px tagline inside the header.
6. **HE ≈ ×1.1 EN** for optical parity; HE chip 48 (Hebrew reads smaller than tracked uppercase
   mono at the same px).
7. **Phone: Morning briefing dropped**, Email triage + Document workflows kept (they feed the two
   approval items). Phone header strings are authored 2-line splits (verbatim when joined).
8. **Phone: CSS glow instead of WebGL** (allowed by the brief; no Three.js dependency there).

### Open / unverified

- ~~Site copy drift~~ — **resolved** in "Render v2" → Site copy (the four "waiting clients"
  strings re-worded to what the frame shows).
- ~~Not rendered~~ — **resolved**: sizes, seam and the rendered bloom / CSS glow are measured in
  "Render v2".
- `assets/fonts/inter-{400,600}.woff2` were deleted (orphaned by this change); the unreferenced
  `newsreader-500-latin` / `frank-ruhl-libre-500-*` copies were gone from `assets/fonts/` by
  render time (removed outside this workstream). `assets/fonts/` now holds exactly the six
  referenced files.
- The HE frame stroke draws from the same SVG start point as EN (not mirrored) — as v1.

---

## Render v2 (2026-09-24) — DONE (owner approved the v2 stills)

### Route (both cuts, hyperframes 0.6.84)

1. Per project, `index.html` snapshotted as the master; render copies = master minus the
   `<div id="review-bg"></div>` element (the orphaned `#review-bg` CSS rule is harmless);
   HE copy = the same with `"default":"en"` → `"he"`.
2. Per locale: `render --format webm --quality high --video-bitrate 3M` (direct alpha WebM) and
   `render --format mov --quality high` (ProRes 4444 `yuva444p12le` master, 420 frames). The
   MOV route follows scattered-to-mapped's documented gotcha — never derive the MP4 / poster /
   a WebM re-encode from the lossy VP9 (it bands smooth glows; this film has two).
3. Master restored after each project's renders — **`cmp` byte-identical**, `"default":"en"`,
   `"default":"he"` count 0, `#review-bg` element ×1 (16:9 and 4:5, both passes).
4. From each MOV: charcoal MP4 = `color=0x121211` underlay → `overlay` → libx264 `-preset slow`,
   `yuv420p`, `+faststart`, CRF 23 (bumped until ≤ 1.5 MB); poster = MOV frame 282
   (**t = 9.4s, the peak**) over charcoal, PNG rgb24.
5. Served WebM = the direct render when ≤ 6 MB; otherwise 2-pass libvpx-vp9 `yuva420p -b:v 1.6M
   -auto-alt-ref 0` from the MOV. (libvpx gives the alpha plane its own budget: a trial at
   `-b:v 3154k` came out at 6.05 Mb/s = 10.6 MB, so the scattered-to-mapped 1.6M setting was used.)
6. Copied to `public/videos/` — all 12 md5-identical to the staged files. Masters and
   intermediates stay in the gitignored `renders/` of each project.
7. After the renders the `COPY` source-line comments in both `index.html` files were shifted to
   the new `ai-office-assistant.ts` line numbers (the `mobile` blocks moved them) — comment-only
   diff vs the render master, verified by stripping `//` comments.

Direct-render WebM sizes: 16:9 EN 6,689,340 · HE 6,199,940 · 4:5 EN 6,333,180 (all over 6 MB →
2-pass) · 4:5 HE 5,829,629 (served as rendered).

### Assets (`public/videos/`, ffprobe)

| File | Codec | WxH | Bytes | Duration | Frames / fps | pix_fmt | alpha | kb/s | Encode | Budget |
|---|---|---|---|---|---|---|---|---|---|---|
| `command-center.mp4` | h264 | 1920×1080 | 1,220,743 | 14.000 s | 420 / 30 | yuv420p | – | 698 | CRF 25 from MOV (CRF 23 > 1.5 MB) | ≤ 1.5 MB ✓ |
| `command-center.webm` | vp9 | 1920×1080 | 5,558,323 | 14.000 s | 30 fps | yuv420p + alpha | 1 | 3,176 | 2-pass 1.6M from MOV | ≤ 6 MB ✓ |
| `command-center-poster.png` | png | 1920×1080 | 430,921 | – | t = 9.4s | rgb24 | – | – | MOV frame 282 | – |
| `command-center-he.mp4` | h264 | 1920×1080 | 1,125,282 | 14.000 s | 420 / 30 | yuv420p | – | 643 | CRF 23 from MOV | ≤ 1.5 MB ✓ |
| `command-center-he.webm` | vp9 | 1920×1080 | 5,539,192 | 14.000 s | 30 fps | yuv420p + alpha | 1 | 3,165 | 2-pass 1.6M from MOV | ≤ 6 MB ✓ |
| `command-center-he-poster.png` | png | 1920×1080 | 333,720 | – | t = 9.4s | rgb24 | – | – | MOV frame 282 | – |
| `command-center-mobile.mp4` | h264 | 1080×1350 | 1,304,365 | 14.000 s | 420 / 30 | yuv420p | – | 745 | CRF 23 from MOV | ≤ 1.5 MB ✓ |
| `command-center-mobile.webm` | vp9 | 1080×1350 | 5,600,240 | 14.000 s | 30 fps | yuv420p + alpha | 1 | 3,200 | 2-pass 1.6M from MOV | ≤ 6 MB ✓ |
| `command-center-mobile-poster.png` | png | 1080×1350 | 450,798 | – | t = 9.4s | rgb24 | – | – | MOV frame 282 | – |
| `command-center-mobile-he.mp4` | h264 | 1080×1350 | 951,808 | 14.000 s | 420 / 30 | yuv420p | – | 544 | CRF 23 from MOV | ≤ 1.5 MB ✓ |
| `command-center-mobile-he.webm` | vp9 | 1080×1350 | 5,829,629 | 14.000 s | 30 fps | yuv420p + alpha | 1 | 3,331 | direct render | ≤ 6 MB ✓ |
| `command-center-mobile-he-poster.png` | png | 1080×1350 | 382,091 | – | t = 9.4s | rgb24 | – | – | MOV frame 282 | – |

v1 (replaced): `command-center.mp4` 1,195,352 · `.webm` 5,630,840 · poster 268,931; `-he.mp4`
863,351 · `-he.webm` 4,791,189 · `-he-poster.png` 187,894. `+faststart` confirmed on all four
MP4s (`moov` in the first 64 bytes). Alpha confirmed with the `libvpx-vp9` decoder: the t=0
frame of every served WebM is 100% transparent (2,073,600 / 2,073,600 px at 16:9; 1,458,000 /
1,458,000 at 4:5), corner `(0,0,0,0)`.

**WebM parity** (served WebM vs the MOV master, both composited over charcoal, all 420 frames,
ffmpeg `ssim`): 16:9 EN **0.9969** · HE **0.9977**; 4:5 EN **0.9968** · HE (direct) **0.9976**.

### Loop seam (MP4)

Linear film + soft settle (family convention), not a crossfade — the page restarts at 0.

| Measure | 16:9 EN | 16:9 HE | 4:5 EN | 4:5 HE |
|---|---|---|---|---|
| t=0 frame | uniform luminance 17/17 (bare `#121211`) | 17/17 | 17/17 | 17/17 |
| Last frame (t=13.967s), 2px edges | 17 on all four | 17 | 17 | 17 |
| RMSE first ↔ last (empty → settled, by design) | 0.2027 | 0.1816 | 0.2036 | 0.1873 |
| 13.5s ↔ last: RMSE / mean abs | 0.0703 / 4.34 | 0.0582 / 3.23 | 0.0733 / 4.77 | 0.0625 / 3.65 |
| Best integer shift 13.5s → last, residual mean abs | (1, 1) px → 1.08 | (1, 1) → 0.77 | (1, 1) → 1.16 | (1, 1) → 0.95 |
| Camera transform (DOM, `tl.time`) | t≈0 `scale(1) translate(0.002px, 0.003px)` · t=14 `scale(1) translate(−1.2e−15px, −1.5e−15px)` | same | same | same |

The 13.5s → last difference is the sine drift's final ~1.5px return to identity (a (1,1) shift
removes ~75% of it); nothing is mid-tween at the seam.

### Glow in the rendered frames (render workers)

Patch just off the approved check (16:9: between the title and item 1; 4:5: in the panel
padding beside the box), positions mapped through the camera curve, from the rendered MP4s:

| Asset | t=7.2s (before) R−B | t=9.2s (peak) R−B | t=11.0s (after) R−B |
|---|---|---|---|
| 16:9 EN (WebGL bloom + CSS fallback shadow) | 3.0 | 5.8 | 3.0 |
| 16:9 HE | 3.0 | 6.4 | 3.1 |
| 4:5 EN (CSS glow) | 3.0 | **42.3** (mean RGB 82/55/40) | 2.9 |
| 4:5 HE (CSS glow) | 3.0 | **42.5** | 3.0 |

16:9 per-frame (same patch, EN / HE): f200 2.6 / 3.0 → f240 4.4 / 4.6 → f252 4.6 / 5.1 → f264
4.7 / 5.5 → f276 5.9 / 7.1 → f288 5.5 / 6.8 — the lit peak holds across the frame-252 worker
chunk boundary (5 capture workers), no dropout. Visual crops at 9.2s (scratchpad
`cc-v2/render/seam-*/glow-crop-9.2s.png`): a soft copper halo round the approved check on
16:9 (subtle, as designed); a clear copper glow on the check + waiting dot on 4:5.

### Gates after restore

- 16:9 `npm run check` (default `"en"`, `#review-bg` rule + element present): **exit 0** — lint
  `0 error(s), 2 warning(s)` (benign pair) · validate `0 error(s), 1 warning(s)` (three.js UMD
  notice) · `0 layout issues across 9 sample(s)`.
- 4:5 `npm run check`: **exit 0** — lint `0 error(s), 2 warning(s)` · `No console errors · 90
  text elements pass WCAG AA` · `0 layout issues across 9 sample(s)`.

### Site wiring + copy (`src/`, data only)

- `src/content/offers/ai-office-assistant.ts`: `film.mobile` added — EN
  `/videos/command-center-mobile.{mp4,webm}` + `-poster.png` (:44–48), HE `-mobile-he.*`
  (:290–294). The homepage proof band inherits it through `flagshipFilm()` (`home.ts`), so it is
  wired once.
- "waiting clients" removed (the v2 frame has no such panel). Nouns trace to the film `COPY`
  rows (Meetings · Deadlines · Incoming mail · Stalled documents / פגישות · מועדים · דואר נכנס ·
  מסמכים תקועים); list length unchanged (4 items):
  - flagship caption EN (:42): "…— meetings, urgent email, waiting clients, deadlines —…" →
    "…— meetings, deadlines, incoming mail, stalled documents —…"
  - flagship caption HE (:288): "…— פגישות, מיילים דחופים, לקוחות שמחכים, דדליין —…" →
    "…— פגישות, מועדים, דואר נכנס, מסמכים תקועים —…"
  - home proof intro EN (`home.ts:118`): "the day's meetings, urgent email, waiting clients, and
    deadlines in one place" → "the day's meetings, deadlines, incoming mail, and stalled
    documents in one place"
  - home proof intro HE (`home.ts:185`): "הפגישות של היום, מיילים דחופים, לקוחות שמחכים
    ודדליינים במקום אחד" → "הפגישות והמועדים של היום, הדואר הנכנס והמסמכים התקועים במקום אחד"
  - No third occurrence; `contact.ts:202` ("לקוח שמחכה למסמך") is a contact-form example, not a
    film description — unchanged.
- **2026-09-25 re-word (code review):** the 4:5 phone cut (served under 768px) drops the
  Morning briefing panel, so Meetings · Deadlines never appear on phones. The four strings now
  name only rows BOTH cuts show — Incoming mail · Draft replies · Signatures · Stalled documents
  / דואר נכנס · טיוטות תשובה · חתימות · מסמכים תקועים:
  - flagship caption EN (:42): "…— meetings, deadlines, incoming mail, stalled documents —…" →
    "…— incoming mail, draft replies, signatures, stalled documents —…"
  - flagship caption HE (:288): "…— פגישות, מועדים, דואר נכנס, מסמכים תקועים —…" →
    "…— דואר נכנס, טיוטות תשובה, חתימות, מסמכים תקועים —…"
  - home proof intro EN (`home.ts:118`): "the day's meetings, deadlines, incoming mail, and
    stalled documents in one place" → "the day's incoming mail, draft replies, signatures, and
    stalled documents in one place"
  - home proof intro HE (`home.ts:185`): "הפגישות והמועדים של היום, הדואר הנכנס והמסמכים
    התקועים במקום אחד" → "הדואר הנכנס של היום, טיוטות התשובה, החתימות והמסמכים התקועים במקום
    אחד"
- `npx tsc --noEmit`: exit 0, no output.
- Live check (dev server :3000): at 375px the EN + HE flagship pages and the EN homepage play
  `command-center-mobile{,-he}.mp4` with the mobile poster; at 1024px the HE homepage plays
  `command-center-he.mp4`; the four new strings render; no console errors.
