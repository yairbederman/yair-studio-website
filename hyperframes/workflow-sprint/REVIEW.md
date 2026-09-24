# REVIEW — constraint checklist & open items

## Brief constraints (backlog/2026-07-07-offer-restructure-implementation.md §1)

| Constraint | Status |
|---|---|
| Sprint story: map → sort (automatic/AI-assisted/human) → three automations → first working workflow | ✅ tile field: scatter → grid+rail → 3 rows → 3 ticks → approval → runs |
| All on-frame text traces to `ai-workflow-sprint.ts` (three-source rule) | ✅ 9 strings, mapped in SCRIPT.md (all from `example.map` + its subs) |
| Mobile legible at ~330px frame width | ✅ headlines 84/92px, row+approval labels 64px; tiles carry no text |
| EN + HE (RTL) renders per locale | ✅ `lang` variable; positional mirror; dir per-element only |
| No baked wordmark (the audit-process v3 mistake) | ✅ no wordmark at all |
| No fake SaaS UI / metrics / names | ✅ abstract tiles, exactly three ticks (the offer promises three) |
| Copper discipline | ✅ human row warms and holds; one bounded pulse at the gate |
| Deterministic; timeline `window.__timelines["root"]`, paused | ✅ (scatter positions are a hand-picked constant list) |
| ~14s, landscape 1920×1080, transparent render | ✅ `#review-bg` is REVIEW-ONLY (delete before render) |

## Validation (2026-07-07)

- `hyperframes lint` → **0 errors**, 10 warnings — all the known `__unresolved__`
  overlapping-tween false positives (helper-built selectors; defaults carry
  `overwrite: "auto"`) — same class as office-assistant, documented there.
- `hyperframes validate` → **no console errors**; `inspect` → **0 layout issues / 9 samples**.
- Snapshot fonts: EN Inter 600; HE Assistant 600 (hebrew+latin subsets).
- Stills: `snapshots-en/` + `snapshots-he/` at 1.5, 3.9, 6.9, 9.8, 11.8, 13.5 —
  **awaiting owner review before render**.

## Fixed during authoring (keep for the next film)

- **`fromTo` pulse leak:** GSAP `fromTo` renders its *from* values immediately
  (`immediateRender: true` by default), so a pulse declared `from {opacity: 0.9}`
  is faintly visible from t=0. Fix: `immediateRender: false` **in the to-vars**
  (in the from-vars it is ignored). NOTE: the office-assistant film shipped with
  this artifact (a small static ring at the gate before the first pass — it was
  in the approved stills, so it is consistent, but a one-line fix + re-render
  would remove it if wanted).
- Approval gate placed BELOW the row block (y 915/968) so the peak never
  collides with the Human row label.

## Render (DONE 2026-07-07 — stills approved by owner)

1. `#review-bg` deleted → transparent render.
2. Alpha-master pipeline per office-assistant/REVIEW.md, once per locale
   (HE via the `lang`-default flip — never `dir` on `<html>`, never `--variables`).
3. Outputs (all within budget; masters deleted after deriving):
   - `workflow-sprint-process.mp4` 0.74 MB · `.webm` 1.80 MB (alpha_mode=1)
   - `workflow-sprint-process-he.mp4` 0.57 MB · `-he.webm` 1.33 MB (alpha_mode=1)
   - posters @13.5s: 183 / 117 KB
4. `film` blocks wired into `src/content/offers/ai-workflow-sprint.ts`
   (locale-keyed). Build + lint clean (25 routes).

## Open questions for review

1. The sort beat (5.0–8.1s) is the longest act — right emphasis, or tighten?
2. Three ticks land on two Automatic tiles + one AI-assisted tile — fine, or
   spread one to a different position?

## Cinematic regrade (Phase C2 — DONE 2026-07-13)

Choreography regraded to film-grade (content/copy/locales/honesty grammar
unchanged): velocity-matched headline hand-offs (blur on entries/exits), a
depth-of-field **rack focus** at the Human-approval peak (Act 4 — the 15 tiles +
row labels blur `--dof 6px` + dim while the copper gate stays sharp; refocuses
before the tail), and a **loop-continuous camera** (scale + integer-cycle drift
as pure functions of `t`; identity at t=0 and t=14). Re-rendered EN+HE
(`--video-bitrate 3.6M` → ffmpeg charcoal MP4 + poster). `npm run check`: 0 errors.
Sizes: EN `.mp4` 0.72 MB · `.webm` 4.64 MB; HE `.mp4` 0.54 MB · `.webm` 3.69 MB
(MP4s ≤ old; WebMs larger — the added motion raises the alpha bitrate). Site code
unchanged (same asset filenames).

**Code review (`/code-review`, C2):** caught that the tile rack-focus was driven
by a `--dof` CSS var that a pre-existing inline `filter` (from the scatter/mapping
tweens) shadowed — so the 15 tiles dimmed but never blurred at the peak. Fixed by
tweening `filter` directly on the tiles; re-rendered EN+HE. meeting-workflow and
scattered-to-mapped reviewed clean.

## Type-floor audit (2026-09-24, pre-retune)

Floor (backlog/2026-09-24-studio-redesign-plan.md §2/§9): **headline moments ≥ 84px, secondary
labels ≥ 64px** on the 1920 canvas; 375px full-bleed = × 0.195. "Font now" = EN / HE. Target pair
A: Newsreader 500 (EN display) · Instrument Sans (EN body) · Frank Ruhl Libre 500 (HE display) ·
Assistant 600 (HE body) · Geist Mono unchanged. Widths below are rough: chars × 0.55em (serif).

| Element | Locale | Font now | px | @375 | Role | Verdict | index.html |
|---|---|---|---|---|---|---|---|
| `.headline` #hl-stuck / #hl-mapped / #hl-sorted / #hl-built | EN+HE | Inter 600 / Assistant 600 | 84 | 16.4 | headline | PASS | :50-54 |
| `#hl-closing` | EN+HE | same | 92 | 18.0 | headline (closing) | PASS | :55 |
| `#lbl-approval` "Human approval" | EN+HE | same, copper | 64 | 12.5 | label (peak) | PASS (label floor) | :56-60 |
| `.row-label` #lbl-auto-row / #lbl-ai-row / #lbl-human-row | EN+HE | same | 64 | 12.5 | label | PASS | :63-71 |

**Totals: 9 text moments — 9 PASS · 0 FAIL · 0 STRUCTURAL.** Tiles carry no text (DESIGN.md → Mobile
legibility). This is the only film of the five already at the floor.

Retune notes
- Nothing must grow. Optional: `#lbl-approval` is the peak's only text and sits at 64 while every other
  act carries an 84 headline — promoting it to 84 (≈ 647px wide in the serif, fits the centre band)
  keeps the peak from reading quieter than the acts around it; the gate cluster is at y=915 (:275) and
  the label at y=968 (:57) has ~40px of headroom for the taller line box.
- Serif width: `#hl-closing` EN "Workflow runs with less friction" ≈ 32 × 0.55 × 92 ≈ **1619px** (over
  the ~1600 flag) — fits the 1920 box (:51) with ~150px margins but is the tightest line in the family;
  the closing enters at 12.8s while the camera is still settling from 1.03 (:379, :390-396). HE ≈
  1164px. Longest 84 headline ("Three automations built") ≈ 1063px — fine.
- `.row-label` box is 420px (:64): "AI-assisted" ≈ 387px at 64 in the serif — fits, barely; if row
  labels take Instrument Sans 600 (body role) they are narrower. Labels are right-aligned into the
  tiles at x=750 (:227, :266), so any overflow collides with the first tile — keep ≤ 420.
- `line-height: 1` on `.row-label` (:69) was tuned for Inter; the serif descenders sit lower — confirm
  no visual clipping against `top: y − 32` (:267) at the new metrics.
- Tracking: `.headline` −0.015em, `#hl-closing` −0.02em, `.row-label`/`#lbl-approval` −0.01em (:52,
  :55, :58, :65) — HE inherits all of them (dir is per element, :196-197; the class is shared). Serif
  wants ≈ 0; **Hebrew must never be letter-spaced** (plan §7) — reset to 0 under `[dir=rtl]`.
- No `.headline` box uses `nowrap`; a serif line that wraps would land on the tile rows (y ≥ 440,
  :223/:227). Keep every headline single-line at the new size.

## Retune 2026-09-24 — Pair A type swap (stills stop; NOT rendered)

Surgical scope: type swap, Hebrew tracking reset, closing-headline width check, `#review-bg`
restored for check/snapshot, docs. Story, ids, 14s duration, the single paused timeline, the
cinematic grammar and the loop camera are untouched.

What changed in `index.html`
- Inter `@font-face` → the `_fonts/LICENSE.md` blocks: Newsreader 500, Instrument Sans 400–600,
  Frank Ruhl Libre 500 hebrew + latin (:29-32); Assistant unchanged (:33-34). No `inter-*.woff2`
  reference remains (`assets/fonts/inter-600.woff2` still sits on disk, unreferenced).
- `body` → Instrument Sans (:46). `.headline` → Newsreader, `font-optical-sizing: auto`, 500,
  line-height 1.1, −0.01em, `white-space: nowrap` (:64-69); `#hl-closing` keeps 92px, its own
  −0.02em override dropped (:70). `.row-label` / `#lbl-approval` inherit Instrument Sans 600
  (:71-84); `.row-label` keeps `line-height: 1` — the measured ink centres sit exactly on the
  tile rows (below).
- HE: `#stage.he` → Assistant, `.he .headline` → Frank Ruhl Libre, and `#stage [dir="rtl"]
  { letter-spacing: 0 }` outranks every tracked rule including the `#lbl-approval` id (:57-59);
  init adds the `he` class instead of an inline body font (:210). Computed `letter-spacing`
  on all nine HE elements: `normal`.
- `#review-bg` REVIEW-ONLY rule (:54) + element (first child of `#camera`).

Per-moment audit — floor: headlines ≥ 84px, labels ≥ 64px. Widths are rendered **ink** from the
snapshot frames (1920 canvas, camera at 1.0; the peak frame is under the 1.03 push-in).

| Element | px | Floor | EN face · ink width | HE face · ink width | Verdict |
|---|---|---|---|---|---|
| `#hl-stuck` | 84 | 84 | Newsreader 500 · 757 | Frank Ruhl Libre 500 · 568 | PASS |
| `#hl-mapped` | 84 | 84 | 739 | 571 | PASS |
| `#hl-sorted` | 84 | 84 | 250 | 158 | PASS |
| `#hl-built` | 84 | 84 | 939 | 715 | PASS |
| `#hl-closing` | 92 | 84 | **1326** (margins 295 / 299) | 891 (512 / 517) | PASS — under the ~1600 flag with ≥ 150px margins, so 92px stays; the pre-retune 1619 estimate assumed 0.55em/char, Newsreader measures ≈ 0.45 |
| `.row-label` auto / ai / human | 64 | 64 | Instrument Sans 600 · 308 / 328 / 208 (box 420; ink right edge 669 vs first tile 705) | Assistant 600 · 190 / 227 / 127 (ink left edge 1250 vs tile 1215) | PASS |
| `#lbl-approval` | 64 | 64 | Instrument Sans 600 · 490 (@1.03) | Assistant 600 · 289 | PASS |

**9 / 9 PASS · 0 FAIL · 0 STRUCTURAL.** Row-label ink centres EN 440.0 / 620.0 / 800.0 (= the tile
rows); HE 445 / 623 / 805 (Hebrew carries no cap-height mass — unchanged from the Assistant-only
build). Live advance widths (Range rects, camera 1×): closing EN 1324 · HE 899; "AI-assisted" 333.

Gates
- `npm run check` (lint → validate → inspect, `#review-bg` present): **exit 0** — 0 errors, 12
  warnings (11 × `overlapping_gsap_tweens` on `__unresolved__`, the documented helper-selector
  false positive; 1 × `composition_file_too_large`, 311 lines). Validate: no console errors.
  Inspect: 0 layout issues across 9 samples.
- Stills: `npx --yes hyperframes@0.6.84 snapshot --at 1.5,3.9,6.9,9.8,11.8,13.5 --describe false`
  per locale (HE via the `lang`-default flip, restored — `"default":"en"` confirmed) →
  `snapshots-en/`, `snapshots-he/` + `contact-sheet.jpg` each (both dirs gitignored). The tool's
  "Fonts FAILED … [unloaded]" lines name the *other* locale's unicode-range subsets, which no glyph
  triggers — expected, not a failure.
- 375px legibility: `snapshots-{en,he}/_legibility-375.png` — peak (11.8s) + closing (13.5s)
  downscaled to 375 wide, side by side (rebuild: `python <scratchpad>/workflow-sprint-legib.py
  <film dir>`). Headline ≈ 18px, labels ≈ 12.5px — all read.
- Loop seam: `#camera` transform at t=0 `scale(1) translate(0px, 0px)`, at t=14 `scale(1)
  translate(−1e−15px, −1e−15px)` — identity at both ends, unchanged. (Measured through
  `tl.time(t)`; GSAP `seek()` suppresses the drift `onUpdate` by default and reads as empty.)

Next step (after owner review of the stills): render. Delete `#review-bg` (rule :54 + the element)
→ `npm run render` per locale (HE by the default flip) → restore it. Left as-is on purpose:
`#lbl-approval` at 64 (the audit's optional promotion to 84 is outside this retune);
`assets/fonts/inter-600.woff2` is now orphaned — delete with the commit if wanted.

## v2 2026-09-24 — film spec v2 re-cut (stills stop; NOT rendered)

Why: the owner rejected the Pair A retune stills ("font looks bad. elements very small"). Film spec v2
(backlog/2026-09-24-studio-redesign-plan.md, "Film spec v2") is binding: sans only on frame, elements
fill ~80% of the frame, type floor headlines ≥ 120px / labels ≥ 80px, one large text moment at a time.
Story, beats, ids, the 14s single paused timeline, the cinematic grammar (velocity-matched hand-offs,
rack focus, loop camera) and the trace table are unchanged. The sections above stay as history.

What changed in `index.html`
- Type: Newsreader + Frank Ruhl Libre + Assistant 600 `@font-face` removed; Instrument Sans 400–600 +
  Assistant 700 (hebrew + latin, `_fonts/LICENSE.md` "Added 2026-09-24" block) remain (:29-31).
  `#stage.he` → Assistant, `#stage.he .headline, #stage.he .row-label` → 700; `#stage [dir="rtl"]
  { letter-spacing: 0 }` kept (:54-56). Headlines inherit Instrument Sans 600 (:61-66).
- Sizes: `.headline` 120px, line-height 1.05, `top: 112px` (:61-66); `#hl-closing .ln` block lines
  (:69); `#lbl-approval` is now a `.headline` in the band, copper (:71, markup `class="headline"`);
  `.row-label` 80px in a 440px box (:74-75); tiles 120×80, radius 10, border 2 (:86-88); ticks 46px
  (:100); rail 3px; gate node 60px / pulse ring 152px / ✓ 88px (:114-123).
- Copy: `COPY.closing` is an array of lines — EN `["Workflow runs", "with less friction"]`, HE one
  line (:189, :200); one block span per line (:217-221). The joined string is the source string.
- Geometry (:229-305): SCATTER rescaled to a ~1400×600 field; COLS 480…1440 (pitch 240); ROWS =
  sorted rows 480/650/820 (pitch 170); SORT xs 756…1636 (pitch 176); AUTOS on the new xs; rail
  x 390–1530; row-label box x 200–640, `top` = row − 40 (HE − 46, measured to centre the ink);
  `SORT_DX = 61` for HE (:258 — Hebrew labels are narrower, so the mirrored block would sit 61px
  left of centre); GATE (960, 650).
- Timeline: stuck sag 26 → 34px (:335), peak rack-focus blur 6 → 8px (:385) — both scaled with the
  geometry. All start times/durations unchanged.

Per-moment audit — v2 floor: headlines ≥ 120px, row labels ≥ 80px, approval ≥ 80px. Widths are
rendered **ink** from the v2 stills, divided back to camera 1.0 where the push-in is active
(9.8s ×1.021, 11.8s ×1.03). @375 = px × 375/1920.

| Element | px | v2 floor | @375 | EN · Instrument Sans 600 ink | HE · Assistant 700 ink | Verdict |
|---|---|---|---|---|---|---|
| `#hl-stuck` | 120 | 120 | 23.4 | 1092 (margins 419 / 409) | 893 | PASS |
| `#hl-mapped` | 120 | 120 | 23.4 | 1056 | 909 | PASS |
| `#hl-sorted` | 120 | 120 | 23.4 | 370 | 238 | PASS |
| `#hl-built` | 120 | 120 | 23.4 | 1324 (1352 in frame at ×1.021, margins 280 / 288) | 1052 | PASS |
| `#lbl-approval` | 120 | 80 | 23.4 | 895 (922 at ×1.03), copper | 554 | PASS (above floor; set in the band) |
| `#hl-closing` | 120 | 120 | 23.4 | one line would be **1725** (> 1600) → **two lines 804 / 896** (margins 509 / 515), lines y 129–219 / 255–345 | **1215, one line** (margins 351 / 354) | PASS — EN wraps, never shrinks |
| `.row-label` auto / ai / human | 80 | 80 | 15.6 | 386 / 410 / 262 in the 440 box; ink right edge ≤ 639 vs first tile 696 | 252 / 293 / 169; ink left edge ≥ 1341 vs tile edge 1285 | PASS |

**9 / 9 PASS · 0 FAIL.** Row-label ink centres: EN 480.0 / 650.0 / 820.5, HE 480.0 / 648.5 / 820.0
(rows 480 / 650 / 820). Computed `letter-spacing` on all nine HE elements: `normal`; EN −1.2px at 120,
−0.8px at 80 (−0.01em). One-line closing width measured with canvas `measureText` ink (the same run:
"Workflow runs with less friction" 1725.2; HE 1214.6).

Geometry measured from the stills (camera 1.0 frames):
- Scatter field (1.5s): x 261–1664 × y 313–927 = **1403 × 614** (EN; HE 1404 × 614).
- Sorted block (6.9s, labels + tiles): EN x 225–1696 = **1471px**, centre 960; HE x 285–1634 =
  1349px, centre 960 (narrower Hebrew labels); rows y 440–860.
- Grid (3.9s): x 425–1507, y 439–860. Gate node at the peak 99px in frame (96 at 1.0; 48 before).

Gates
- `npm run check` (lint → validate → inspect, `#review-bg` present, `lang` default `"en"`): **exit 0**
  — 0 errors, 12 warnings (11 × `overlapping_gsap_tweens` on `__unresolved__`, the documented
  helper-selector false positive; 1 × `composition_file_too_large`, 321 lines). Validate: no console
  errors · 10 text elements pass WCAG AA. Inspect: 0 layout issues across 9 samples.
- Stills: `npx --yes hyperframes@0.6.84 snapshot --at 1.5,3.9,6.9,9.8,11.8,13.5 --describe false` per
  locale → `snapshots-en/`, `snapshots-he/` + `contact-sheet.jpg` each (HE via the `lang`-default flip;
  restored, `"default":"en"` grep-confirmed). "Fonts FAILED … [unloaded]" names the other locale's
  faces, which no glyph triggers — expected.
- 375px legibility: `snapshots-{en,he}/_legibility-375.png` — peak (11.8s) + closing (13.5s) at 375
  wide, side by side (rebuild: `python <scratchpad>/workflow-sprint-v2/legib.py <film dir>`).
- Loop seam: `#camera` at t=0 `scale(1) translate(0px, 0px)`, at t=14 `scale(1) translate(−1.2e−15px,
  −1.5e−15px)` — identity at both ends (measured through `tl.time(t)`). Opening: the first element
  appears at 0.25s (headline fade-in), inside the 0.6s allowance — nothing trimmed.

Judgment calls
- Tiles 120×80 (spec: "≈ 2× (≈ 112×76)"): 6 tiles at pitch 176 fill the 1000px tile run with 56px
  gaps, so the block measures 1471px wide.
- The approval label moved from under the gate into the headline band at 120px. With a 2× ring below
  the rows (tiles end at y 860), an 80px label's descenders would land at y≈1066, about 1082 at the
  1.03 push-in, which is off frame. A label under a centred ring would sit on the defocused
  tiles. In the band, one text moment keeps one place. The gate returns to the design's
  original centre intent (960, 650), over the rack-focused rows.
- The grid rows equal the sorted rows (480/650/820), so the sort reads as a horizontal regroup.
- HE `SORT_DX = 61` breaks the pure mirror for the sorted block only, to keep it centred.
- The closing tile drift (+14px) is unchanged (proportionally subtler at the new size).

Left as-is (flag for review)
- At 11.8s the ✓ is still drawing (it completes at 12.05s), so the peak still shows a chevron. The
  choreography is unchanged and the July stills show the same. A 12.0s peak frame would show it complete.
- Ticks are not part of the closing tile drift, so at 13.5s each ✓ sits ≈ 9px off its tile centre.
  This predates v2.
- Now-unreferenced font files on disk: `inter-600`, `newsreader-500-latin`, `frank-ruhl-libre-500-*`,
  `assistant-600-*` (delete with the commit if wanted).

Next step (after owner review of the v2 stills): render per "Retune 2026-09-24" → Next step
(delete `#review-bg`, `npm run render` per locale via the default flip, restore).

## Render v2 (2026-09-24) — DONE, owner approved the v2 stills

Pipeline (command-center/REVIEW.md → "Render" / "Cinematic regrade"), once per locale:
1. `#review-bg` rule + element removed; `npm run render -- --format webm --quality high
   --video-bitrate 3.6M --output renders/v2-en.webm` (4 m 50 s). Flipped the declared `lang`
   default to `"he"`, rendered `renders/v2-he.webm` (3 m 46 s). Then restored the approved
   `index.html` byte-for-byte (`cmp` identical): `"default":"en"` and `#review-bg` (rule :51,
   element :134) grep-confirmed. The compiler embedded only the three referenced fonts.
2. Charcoal MP4: `ffmpeg -f lavfi -i color=c=0x121211:s=1920x1080:r=30:d=14 -c:v libvpx-vp9
   -i v2-<loc>.webm -filter_complex "[0:v][1:v]overlay=shortest=1,format=yuv420p" -c:v libx264
   -preset slow -crf 23 -pix_fmt yuv420p -movflags +faststart -an v2-<loc>.mp4`. The libvpx-vp9
   decoder is required; the native vp9 decoder drops alpha. CRF 23 came in far under the
   1.5 MB/locale cap, so it was not raised.
3. Poster: the same overlay at `-ss 13.5` on the WebM input, `-frames:v 1` → PNG. It is
   1920×1080 RGB and pixel-identical to render frame 405 (t = 13.5 s, the settled closing):
   mean |Δ| 0.000 in both locales.
4. Copied over `public/videos/` under the same filenames, so there is no site code change. All six
   md5-identical to `renders/v2-*`.

| Asset (`public/videos/`) | Bytes | Duration | Bitrate | Stream | Was (C2, 2026-07-13) |
|---|---|---|---|---|---|
| `workflow-sprint-process.mp4` | 786,147 (0.79 MB) | 14.000 s · 420 frames | 449 kb/s | H.264 yuv420p 1920×1080 30 fps, faststart, CRF 23 | 722,476 |
| `workflow-sprint-process.webm` | 5,870,733 (5.87 MB) | 14.000 s | 3,355 kb/s | VP9 `alpha_mode=1`, target 3.6M | 4,660,065 |
| `workflow-sprint-process-poster.png` | 182,506 | — | — | PNG 1920×1080 @ 13.5 s | 188,347 |
| `workflow-sprint-process-he.mp4` | 613,024 (0.61 MB) | 14.000 s · 420 frames | 350 kb/s | H.264 yuv420p 1920×1080 30 fps, faststart, CRF 23 | 538,596 |
| `workflow-sprint-process-he.webm` | 5,049,127 (5.05 MB) | 14.000 s | 2,885 kb/s | VP9 `alpha_mode=1`, target 3.6M | 3,709,827 |
| `workflow-sprint-process-he-poster.png` | 109,375 | — | — | PNG 1920×1080 @ 13.5 s | 118,185 |

MP4s are within the ≤ 1.5 MB/locale budget; WebMs are within the ≤ 6 MB fallback budget. EN is the
tightest at 5.87 MB: the 2× elements and the push-in raise the alpha bitrate (+26% EN, +36% HE
vs C2). If a later cut needs headroom, drop the WebM target to `--video-bitrate 3M`.

Loop seam (frames from the WebM composited over charcoal, which is lossless; MP4 in brackets):

| | EN | HE |
|---|---|---|
| frame 0 | uniform (17,17,17) = `#121211` after YUV | same |
| first vs last (f0 vs f419), mean / max \|Δ\| | 9.26 / 234 [9.40 / 238] | 6.85 / 233 [6.95 / 238] |
| background corners f0 vs f419, max \|Δ\| | 0 [0] | 0 [0] |
| head stillness f0 vs f1 | 0 / 0 [0 / 0] | 0 / 0 [0 / 0] |
| tail stillness f418 vs f419 | 0 / 0 [0.066 / 48, codec noise] | 0 / 0 [0.044 / 38] |
| last-frame layout vs the approved 13.5 s still | headline ink x 510 vs 509, y 130 vs 129 | x 352 vs 351, y 133 vs 132 |

Reading: the first-vs-last difference is the designed cut from the settled closing back to the empty
opening (the film fades in from charcoal at 0.25 s; see STORYBOARD loop note). The background is
identical across the seam and both ends are motionless. The last frame lands on the identity-camera
layout: the +1 px shift from 13.5 s matches the computed drift of +1.04 / +1.21 px, and at
t = 13.967 s the residual drift is ≤ 0.1 px. DOM check: `#camera` `scale(1) translate(0px, 0px)` at
t=0, `scale(1) translate(−1.2e−15px, −1.5e−15px)` at t=14.

Also done
- Orphaned fonts pruned from `assets/fonts/` with plain `rm`: `inter-600`, `newsreader-500-latin`,
  `frank-ruhl-libre-500-{hebrew,latin}`, `assistant-600-{hebrew,latin}`, `geist-mono-400`. What
  remains is exactly what `@font-face` references: `instrument-sans-400-600-latin`,
  `assistant-700-{hebrew,latin}`, all md5-identical to `_fonts/`.
- `npm run check` after the render, with `#review-bg` restored and the pruned kit: **exit 0**. That
  is 0 errors and 12 warnings (the known 11 × `overlapping_gsap_tweens` on `__unresolved__` + 1 ×
  `composition_file_too_large`); no console errors; 10 text elements pass WCAG AA; 0 layout issues
  across 9 samples.
- Serving: the dev server (autoPort 53906 at the time) returned `Content-Length` equal to the new
  byte counts for all six files. The page's `/_next/image` poster matches the new PNG (mean |Δ| 0.32
  vs 12.71 against the July poster).
- `renders/` (gitignored) holds `v2-{en,he}.{webm,mp4}` + `v2-{en,he}-poster.png`; the July
  `workflow-sprint-process*` renders there are now stale.
