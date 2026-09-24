# REVIEW — "The Enablement" (AI Enablement Workshops film)

Status: **re-cut 2026-09-24 to film spec v2 (sans only, frame-filling set-pieces, 120 / 80 /
64 floor) on the `/studio/ai-enablement` business-team copy; owner approved the v2 stills;
RENDERED both locales and swapped in place in `public/videos/` (same filenames)** — see
"Render v2 (2026-09-24)" at the end. The first retune's stills were rejected ("font looks bad.
elements very small"); the history below is the log up to the v2 render.

## What was built

One composition (`index.html`), two locales via the `lang`
`data-composition-variables` (EN default; HE mirrors RTL via `X()`). 13s, 6 beats,
single paused GSAP timeline on `window.__timelines["root"]`. Charcoal `#review-bg`
for preview/check/snapshot only — hidden (`data-hidden`) before the transparent alpha
render, restored after. Authored under the settled cinematic grammar (velocity-matched
hand-offs, rack focus onto the copper checkpoint, loop-continuous camera). **No WebGL
bloom** (flagship-only signature).

## Distinct identity (vs the content-engine film)

Both offer films share the grammar but read differently: content-engine is a
horizontal conveyor with labels above the traveling node; this is a **parallel
agent-lanes workspace converging into a persistent playbook**, with labels **swapping
in a centered band** (workflow-sprint treatment).

## Beats (verified in snapshots)

| t | Beat | Reads as |
|---|---|---|
| 1.4s | The task | one backlog task chip settles left; `A real task` + `from your backlog` |
| 3.2s | Hands-on with agents | 3 agent lanes draw out; work-ticks travel each lane |
| 5.8s | Patterns → playbook | ticks converge; the playbook artifact binds (spine + pattern lines, copper edge) |
| 8.2s | **Review peak** | rack focus — lanes + task defocus, copper "Human review stays" checkpoint over the playbook sharp, ring bloom, check draws, review caption |
| 10.2s | Team runs alone | lanes resume run-ticks on their own under the persistent playbook |
| 12.4s | Settled | closing "The playbook is yours"; hero/poster frame |

## Gates

- `npm run check` (lint + validate + inspect): **0 errors**, 0 layout issues across
  9 samples, no console errors. **4 benign warnings** — all `overlapping_gsap_tweens`
  on `__unresolved__` (helper-built selectors + the always-on camera-drift tween
  overlapping reveals on *different* elements; the documented family false positive).
  No transform-conflict (centered elements use a center→top-left placement helper, so
  GSAP owns all transforms cleanly).
- **EN** snapshots: `snapshots/contact-sheet-en.jpg`. **HE** snapshots:
  `snapshots/contact-sheet-he.jpg` — full-axis RTL mirror confirmed (task right, lanes
  run right→left, playbook left, pattern lines draw from the correct side; Assistant
  font; Hebrew reads correctly — a transcreation, not a flipped render).

## Honesty compliance

- **Schematic** — a task chip, abstract agent lanes with traveling ticks, and a
  structural playbook glyph (spine + blank pattern lines, no readable text). No product
  UI → **no "Sample data" chip**.
- Zero names, metrics, fake SaaS UI, neon, or sparkles. One bounded copper ring at the
  peak.
- Every on-frame string traces to `src/content/offers/ai-enablement.ts` (inline
  `// source` comments; full table in DESIGN.md).

## Legibility

One large centered label at a time (60px → ~11.7px at 375px mobile); lanes, ticks, and
the playbook carry meaning by structure + copper. 375px peak + closing verified.

## Render (DONE 2026-07-13 — both locales)

- `--format webm --quality high --video-bitrate 3M` → transparent VP9-alpha WebM
  (`alpha_mode=1` confirmed both locales); HE via `--variables '{"lang":"he"}'`.
  Charcoal MP4 + settled poster (t=12.6s) ffmpeg-composited over `#121211`.
- Sizes: EN `.webm` 1.07 MB · `.mp4` 0.48 MB · poster 0.07 MB;
  HE `-he.webm` 0.86 MB · `-he.mp4` 0.39 MB · `-he-poster.png` 0.05 MB.
- Outputs → `public/videos/ai-enablement{,-he}.{mp4,webm}` + posters.

## Site integration (DONE 2026-07-13)

`film` block (EN + HE) added to `src/content/offers/ai-enablement.ts` after `hero`;
`OfferPageBody` renders it at `#film` under the hero. sectionTitle "A workshop, as a
flow" (traces to `example.title` verbatim); caption traces to `example.map` + `human`.
No component changes.

## Type-floor audit (2026-09-24, pre-retune)

Floor (backlog/2026-09-24-studio-redesign-plan.md §2/§9): **headline moments ≥ 84px, secondary
labels ≥ 64px** on the 1920 canvas; 375px full-bleed = × 0.195. "Font now" = EN / HE. Target pair
A: Newsreader 500 (EN display) · Instrument Sans (EN body) · Frank Ruhl Libre 500 (HE display) ·
Assistant 600 (HE body) · Geist Mono unchanged. Widths are rough: chars × 0.55em (serif). The film
meets its **own** documented floor (≥ 56px, DESIGN.md → Mobile legibility) — the plan raised the
floor; DESIGN.md's "≥ 56px" must be rewritten to 84/64 in WS-D.

| Element | Locale | Font now | px | @375 | Role | Verdict | index.html |
|---|---|---|---|---|---|---|---|
| `.lbl` #lbl0–#lbl5 (one at a time, centred band; #lbl4 "Human review stays" = peak) | EN+HE | Inter 600 / Assistant 600 | 60 | 11.7 | headline (stage) | FAIL vs 84 | :98-103, :160-165 |
| `#sub0` "from your backlog" | EN+HE | Geist Mono 400 / Assistant 600 | 30 | 5.9 | label | FAIL vs 64 | :104-107, :166 |
| `#caption` "Judgment and review stay with your engineers" | EN+HE | Inter 400 / Assistant 600 | 38 | 7.4 | label (review line) | FAIL vs 64 | :110-114 |
| `#closing` "The playbook is yours" | EN+HE | Inter 600 / Assistant 600 | 62 | 12.1 | headline (closing) | FAIL vs 84 | :115-119 |

**Totals: 9 text moments — 0 PASS · 9 FAIL · 0 STRUCTURAL.** Lanes, ticks and the playbook glyph
carry no text (documented structural, DESIGN.md → Mobile legibility).

Retune notes
- `.lbl` → 84 in the centred band (`left:580; width:760`, :99): longest EN "The team runs it alone"
  ≈ 1016px, HE "עבודה מעשית עם סוכנים" ≈ 970px — both overflow the 760 box symmetrically (`nowrap`) to
  ≈ 452–1468, clear of the frame. Vertically the band (top 300) sits above the lanes at y=480
  (:130-132, :240) and the task chip centred at 560 (:248); a ~100px serif line box ends ≈ 400 —
  still clear. Consider top ≈ 280 to keep air above `#sub0`.
- `#sub0` → 64 ≈ 598px fits the box, but its top (384, :105) collides with an 84 label box; drop it to
  ≈ 410–420 (still above the lanes only at line-height ≤ 1.1), or merge it into #lbl0 as one 84 line
  ("A real task from your backlog" ≈ 1340px — fits, and removes a text moment).
- `#caption` → 64: the current EN string is ≈ **1549px** (near the 1600 flag) — but it is scheduled for
  replacement by the business-team copy (plan §5 WS-D: no "engineers"), as is #lbl3 "Playbook for your
  stack" (:192). Re-measure the **final** strings; budget ≤ ~44 chars for the 64 caption band (:111,
  full-width box).
- `#closing` → 84 ≈ 970px (HE ≈ 700) fits; top 952 + ~100px line box ≈ 1052, inside 1080; the playbook
  ends at y ≈ 698 (:250) — no collision.
- Tracking −0.015em `.lbl`, −0.01em `#closing`, +0.02em `#sub0` (:101, :118, :106) — HE inherits
  them (dir per element, :218-219); **reset to 0 under `[dir=rtl]`**; serif ≈ 0.
- `font-family: "Inter"` is hard-coded per rule (:100, :112, :117); HE swap is inline at init
  (:216-217) — same display/body split as linkedin-content-engine (`.lbl` + `#closing` → serif;
  `#caption` + `#sub0` → sans).
- Frank Ruhl Libre 500 is lighter than Assistant 600: the HE peak "הבדיקה נשארת אנושית" may need
  88–92 to match the EN weight impression at 375 — validate in the snapshot.

## Retune 2026-09-24 (WS-D — business-team copy + Pair A at the phone floor; stills stop)

**What changed (composition):** every on-frame string re-traced to
`src/content/studio/ai-enablement.ts` (the page rewritten for business teams — no engineer /
code / stack wording; `grep -niE "engineer|codebase|developer|stack" index.html` → none);
Inter `@font-face` blocks replaced by the `hyperframes/_fonts/LICENSE.md` blocks (Newsreader ·
Instrument Sans · Frank Ruhl Libre ×2; Assistant ×2 + Geist Mono kept); per-rule
`font-family: "Inter"` replaced by two role classes (`.t-display` = Newsreader 500 opsz-auto /
`.he` → Frank Ruhl Libre 500; `.t-label` = Instrument Sans 400 / `.he` → Assistant 600), with
`.he` on `#stage` replacing the inline font swaps at init; Hebrew never tracked (`letter-spacing:
0` under the `.he` roles and `[dir="rtl"]`); `#sub0` no longer mono. Sizes: stage labels 60 → 84,
sub 30 → 64, caption 38 → 64, closing 62 → 84. Geometry: the label band is full-width (no
overflow of the old 760 box at 84) at y 276–368; `#sub0` moved below it to 384–461 (the audit's
collision), clear of lane 0 at 480; caption/closing unchanged at 968/952. **Unchanged:** 13 s,
the single paused timeline, every id and beat time, the camera (identity at 0/13), the
rack-focus peak, the loop seam, the 0.4 s intro (task chip enters at 0.4 s — under the 1 s trim
threshold). Woff2 copies verified md5-identical to `hyperframes/_fonts/`.

### Type-floor audit — post-retune (measured in the stills)

Floor: headline ≥ 84, secondary ≥ 64 on the 1920 canvas; 375 = × 0.195. Ink widths measured
from the snapshots (EN / HE).

| Moment | Element | Face (EN / HE) | px | @375 | Floor | Ink width EN / HE | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | `#lbl0` A real task / משימה אמיתית | Newsreader 500 / Frank Ruhl Libre 500 | 84 | 16.4 | 84 | 399 / 454 | PASS |
| 2 | `#sub0` from your office's week / מהשבוע של המשרד שלכם | Instrument Sans 400 / Assistant 600 | 64 | 12.5 | 64 | 667 / 629 | PASS |
| 3 | `#lbl1` Hands-on with AI / עבודה מעשית עם AI | Newsreader / Frank Ruhl Libre | 84 | 16.4 | 84 | — | PASS |
| 4 | `#lbl2` Habits captured / ההרגלים נרשמים | Newsreader / Frank Ruhl Libre | 84 | 16.4 | 84 | — | PASS |
| 5 | `#lbl3` Playbook for your office / מדריך עבודה למשרד | Newsreader / Frank Ruhl Libre | 84 | 16.4 | 84 | — | PASS |
| 6 | `#lbl4` Your review stays / הבדיקה נשארת אצלכם (peak) | Newsreader / Frank Ruhl Libre | 84 | 16.4 | 84 | 673 / 705 | PASS |
| 7 | `#caption` Judgment and review stay with your people / שיקול הדעת והבדיקה נשארים אצל האנשים שלכם | Instrument Sans 400 / Assistant 600 | 64 | 12.5 | 64 | 1295 / 1219 | PASS |
| 8 | `#lbl5` The team runs it alone / הצוות מריץ לבד | Newsreader / Frank Ruhl Libre | 84 | 16.4 | 84 | — | PASS |
| 9 | `#closing` The playbook is yours / מדריך העבודה שלכם | Newsreader / Frank Ruhl Libre | 84 | 16.4 | 84 | 824 / 626 | PASS |

**Totals: 9 text moments — 9 PASS · 0 FAIL · 0 STRUCTURAL** (was 0 / 9 / 0). Lanes, ticks and
the playbook glyph carry no text (structural, DESIGN.md → Mobile legibility). Vertical
clearances measured at 1.4 s: label ink 283–345 (HE 300–351), sub ink 401–460 (HE 402–448),
lane 0 at 480 — the audit's `#sub0` collision is gone. At the 9.2 s settled peak (camera at
1.03) the caption ink ends at y 1058 (HE 1057), inside the 1080 frame with the ±3 px drift.
Frank Ruhl Libre 500 at 84 reads as heavy as Newsreader 500 in the 375 composite — the
pre-retune note expected a HE bump; not needed (validated, not assumed).

### Gates

- `npm run check` (lint + validate + inspect): **exit 0** — 0 errors, no console errors, **0
  layout issues across 9 samples**. The same **4 benign warnings** as before (`overlapping_gsap_tweens`
  on `__unresolved__`: helper-built selectors + the always-on camera-drift tween).
- Stills (pinned CLI, `--at 1.4,3.2,5.8,8.2,9.2,10.2,12.4 --describe false`):
  `snapshots-en/contact-sheet.jpg` + `frame-NN-at-Xs.png`; HE via the declared-default flip →
  `snapshots-he/contact-sheet.jpg` (default restored to `"en"`, verified by grep 1/0). Font
  loader: EN loaded Newsreader 500 + Instrument Sans 400–600; HE loaded Frank Ruhl Libre 500 ×2 +
  Assistant 600 ×2 (the other locale's families report "unloaded" — no glyph maps to them,
  expected). HE mirror confirmed: task right, lanes right→left, playbook left, `AI` resolves to
  the leading (visually left) end of `עבודה מעשית עם AI` under `dir="rtl"`.
- **375 px legibility:** `snapshots-en/_legibility-375.png` + `snapshots-he/_legibility-375.png`
  (settled peak 9.2 s + closing 12.4 s, 375 wide, side by side). Headline ≈ 16 px, caption ≈
  12.5 px — both read in both locales. Rebuild with
  `python <scratchpad>/ai-enablement-legib.py <film dir>` (PIL) after any re-snapshot.
- **Loop seam:** t=0 frame is the bare backdrop (uniform luminance 18, 0 transparent pixels);
  t=13 has 0 transparent pixels and all four edges at 18 (the −40 px `#review-bg` inset covers
  the drift). 12.4 s vs 13.0 s differ by a (1, 2) px translation only (the sine drift returning
  to 0; residual mean |Δ| 0.29) — nothing mid-tween, camera at identity. Camera code untouched.
- New review frame **9.2 s** added: the caption enters at 8.5 s, so the old 8.2 s "peak" frame
  never showed it (pre-existing STORYBOARD/timeline mismatch); 8.2 s is kept as the ring-bloom
  frame, 9.2 s is the settled peak used for the legibility composite.

### Judgment calls (for the owner's stills review)

1. **Sub kept as a second line, not merged.** `from your office's week` sits under `A real
   task` at 64 (Instrument Sans, `--fg-3`), the page's label + sub relationship; merging into
   one 84 line ("A real task from your office's week", ≈ 1430 px) would read as a sentence
   the page never says.
2. **Caption persists through beat 4 (9.7–11.0 s) under `The team runs it alone`** — the
   pre-retune pairing ("the team runs alone AND review stays"), so an 84 headline and the 64
   caption share the frame for ~1.3 s beyond the peak (the sibling films pair them at the peak
   only). Timeline untouched; cut the caption at 9.4 s with `#lbl4` if "one large text moment"
   should be strict.
3. **`#sub0` colour kept `--fg-3`** (5.1:1 on charcoal, AA at any size) as in the original
   design; `--fg-2` would match the caption if the owner wants the sub brighter at 375.
4. **`inter-400/600.woff2` left in `assets/fonts/`** (now unreferenced) — the sibling retune
   kept its copies too; delete in a kit-wide cleanup rather than per film.

### Next (after owner approval)

Render per DESIGN.md → Render (alpha WebM via `npm run render` with `#review-bg` hidden; HE by
the default flip; ffmpeg charcoal MP4 + poster at ≈ 12.6 s) → `public/videos/ai-enablement{,-he}.*`
(paths unchanged; the page's `film` block already points at them). No `src/` or `public/`
changes at this stop.

## v2 2026-09-24 (film spec v2 re-cut — stills stop)

The owner rejected the first retune's stills: "font looks bad. elements very small." Re-cut to
**film spec v2** (`backlog/2026-09-24-studio-redesign-plan.md` → "Film spec v2"): sans only on
frame, set-pieces that fill the frame, type floor 120 (stage labels + closing) / 80 (sub) / 64
(caption), one large text moment at a time. Strings re-verified verbatim against
`src/content/studio/ai-enablement.ts` — unchanged (table in DESIGN.md → Source of truth).

### What changed (`index.html`)

- **Type:** serif removed — the Newsreader + Frank Ruhl Libre (×2) `@font-face` blocks and the
  serif `.t-display` rule are gone. `.t-display` = Instrument Sans 600, −0.01em (EN) /
  Assistant 700, tracking 0 (HE; `@font-face` ×2 added verbatim from `_fonts/LICENSE.md`, woff2
  md5-identical to `_fonts/`). `.t-label` unchanged: Instrument Sans 400 / Assistant 600.
- **Sizes:** stage labels + closing 84 → **120**; sub 64 → **80**; caption 64 → **72**.
- **Bands:** headline band x 160–1760 (**1600 measure**, `text-wrap: balance`, no `nowrap`),
  box top 106; **the closing moved from the bottom band into the headline band** (swaps in place
  after `lbl5`); sub box top 260; caption box top 910.
- **Geometry** (workspace x 185 → 1735 = 1550px, centred y 600 via new `STAGE_Y` / `BOOK_X`
  constants): task chip 152×96 → **400×250** (internals ×2.6); lanes 440→1180 @ 480/560/640 →
  **640→1260 @ 460/600/740**, stroke 2.5 → 6; ticks 15 → **40**; playbook 224×276 →
  **420×520** (internals ×1.9); review ring 168 → **440**; check 50 → **160** box, moved from the
  copper bar (copper-on-copper, barely visible in v1) into the card's empty lower half; rack-focus
  blur 7 → 12; playbook glows ×2 (100 / 70 / 90).
- **HE:** `dir="rtl"` now also on `#task` + `#book` — the chip icon sits at the reading start and
  the short bar / habit line right-align (the first retune left these glyphs LTR inside).
- **Unchanged:** 13 s, every id, every beat and tween time, the single paused timeline, the
  camera (identity at 0 and 13), the rack focus, the loop seam, the strings.

### Type-floor audit — v2 (measured in the stills)

Floor: stage labels + closing ≥ 120, sub ≥ 80, caption ≥ 64; 375 = × 0.195; measure ≤ 1600.
Ink widths = luminance-threshold bbox in the 1920 snapshots (anti-aliased edges excluded, ±2px),
divided by the camera scale at the sample time to give the native width.

| # | Element | EN / HE | Face EN / HE | px | Floor | @375 | Ink width EN / HE (native) | Sample t (camera) | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `#lbl0` | A real task / משימה אמיתית | Instrument Sans 600 / Assistant 700 | 120 | 120 | 23.4 | 569 / 716 | 1.4 (1.000) | PASS |
| 2 | `#sub0` | from your office's week / מהשבוע של המשרד שלכם | Instrument Sans 400 / Assistant 600 | 80 | 80 | 15.6 | 834 / 788 | 1.4 (1.000) | PASS |
| 3 | `#lbl1` | Hands-on with AI / עבודה מעשית עם AI | IS 600 / Assistant 700 | 120 | 120 | 23.4 | 939 / 945 | 3.2 (1.000) | PASS |
| 4 | `#lbl2` | Habits captured / ההרגלים נרשמים | IS 600 / Assistant 700 | 120 | 120 | 23.4 | 872 / 786 | 5.8 (1.000) | PASS |
| 5 | `#lbl3` | Playbook for your office / מדריך עבודה למשרד | IS 600 / Assistant 700 | 120 | 120 | 23.4 | **1292** / 971 (EN widest) | 6.5 (1.006) | PASS |
| 6 | `#lbl4` (peak) | Your review stays / הבדיקה נשארת אצלכם | IS 600 / Assistant 700 | 120 | 120 | 23.4 | 947 / **1073** (HE widest) | 9.2 (1.030) | PASS |
| 7 | `#caption` | Judgment and review stay with your people / שיקול הדעת והבדיקה נשארים אצל האנשים שלכם | IS 400 / Assistant 600 | 72 | 64 | 14.0 | 1415 / 1332 | 9.2 (1.030) | PASS |
| 8 | `#lbl5` | The team runs it alone / הצוות מריץ לבד | IS 600 / Assistant 700 | 120 | 120 | 23.4 | 1221 / 735 | 10.2 (1.027) | PASS |
| 9 | `#closing` | The playbook is yours / מדריך העבודה שלכם | IS 600 / Assistant 700 | 120 | 120 | 23.4 | 1183 / 969 | 12.4 (1.000) | PASS |

**Totals: 9 text moments — 9 PASS · 0 FAIL · 0 STRUCTURAL.** Every string is one line inside the
1600 measure (widest EN 1292, HE 1073 at 120; caption 1415 at 72) — no wrap, no shrink. The
lanes, ticks, and playbook glyph carry no text (structural). Vertical ink (identity camera):
headline EN 125–238 (baseline ≈ 218) / HE 128–238; sub EN 280–355 / HE 283–342 (task chip top
475; lane 0 draws only after the sub leaves). At the 9.2 s peak (camera 1.03, card scale 1.05)
the playbook's bottom edge is at ≈ 883 (measured at x 1525) and the caption ink spans EN
940–1009 / HE 941–1008 — ≈ 57px clear of the card and inside the 1080 frame with the ±3px drift;
the headline ink ends at 231 (EN and HE), ≈ 90px above the card top (≈ 321).

### Gates

- `npm run check` (lint + validate + inspect, pinned 0.6.84): **exit 0** — lint 0 errors / the
  same 4 benign `overlapping_gsap_tweens` warnings on `__unresolved__`; validate "No console
  errors"; inspect **0 layout issues across 9 samples**. (The unified `hyperframes check` is not
  in 0.6.84 — "Unknown command" — so the npm chain is the gate.)
- `grep -niE "engineer|codebase|developer|\bstack\b" index.html` → none.
- Font loader: EN loaded Instrument Sans 400–600; HE loaded Assistant 600 ×2 + 700 ×2 (the other
  locale's families report "unloaded" — no glyph maps to them, expected).
- Stills (`--at 1.4,3.2,5.8,6.5,8.2,9.2,10.2,12.4 --describe false`; 6.5 s added because
  `Playbook for your office` swaps in at 5.95 s and never appeared in the old 5.8 s frame):
  `snapshots-en/contact-sheet.jpg` + 8 frames; HE via the declared-default flip →
  `snapshots-he/contact-sheet.jpg` + 8 frames (default restored to `"en"`: grep en=1 / he=0).
  HE mirror confirmed: task right, lanes right→left, playbook left, chip icon right, short lines
  right-aligned, `AI` at the visual left end of `עבודה מעשית עם AI`.
- **375 px legibility:** `snapshots-en/_legibility-375.png` + `snapshots-he/_legibility-375.png`
  (settled peak 9.2 s + closing 12.4 s, each LANCZOS-downscaled to 375×211, side by side, 16px
  gutters). Headline ≈ 23px, caption ≈ 14px — both read in both locales; the check, the ticks and
  the playbook read at phone size.
- **Loop seam** (EN + HE): t=0 is the bare backdrop (uniform luminance 18, 0 transparent px);
  t=13 has 0 transparent px and all four edges at 18; 12.4 s vs 13.0 s differ by a (1, 2) px
  translation only (the sine drift returning to 0; residual mean |Δ| 0.39 EN / 0.32 HE) — nothing
  mid-tween, camera at identity. First content at 0.4 s (the chip is entering in the 0.6 s frame)
  — no empty opening beyond ~0.45 s, so no trim.

### Judgment calls (for the owner's v2 stills review)

1. **Closing in the headline band**, not the bottom band — one headline position for every large
   moment; the poster reads headline → workspace like every other beat.
2. **Caption at 72** (floor 64): phone headroom (14px vs 12.5) and still well under the 120
   headline; fits in one line in both locales.
3. **Caption still holds through beat 4** under `The team runs it alone` (carried from the first
   retune, call 2). "One large text moment" is read as one ≥ 120 headline at a time, with the
   72 caption as its companion. Cutting the caption with `lbl4` at 9.4 s would leave it settled
   for only ≈ 0.3 s (it enters 8.5–9.1 s); a strict reading needs a beat retime (caption in at
   ≈ 7.9 s), not done here (beats kept).
4. **Playbook at the spec's explicit ≈ 420×520** — 1.9× linear (3.5× area) of v1's 224×276,
   not 2.5–3× linear: 2.5× (560×690) cannot fit between the headline band and the caption. Chip
   2.6×, ring 2.6×, ticks 2.7×, check 3.2× (its ink is ≈ 80px wide — the path fills half its box).
5. **Lanes stay `--rule-strong`, now 6px** — structure, not signal; the 40px copper ticks carry
   the motion. At 375 they are ≈ 1.2px and faint; `#4a473f` (the chip's bar tone) would lift them
   if the owner wants stronger rails.
6. **Unreferenced font copies left in `assets/fonts/`:** `newsreader-500-latin`,
   `frank-ruhl-libre-500-{hebrew,latin}` (untracked, added by the first retune) and
   `inter-400/600` (tracked) — nothing references them now; delete in a kit-wide cleanup. (Pruned at Render v2 below.)

### Next (after owner approval of the v2 stills)

Render per DESIGN.md → Render (unchanged paths). No `src/` or `public/` changes at this stop.

## Render v2 (2026-09-24)

Owner approved the v2 stills. Rendered per the command-center pipeline; **no composition change**
beyond the temporary review-bg removal / locale flip, both restored.

1. `#review-bg` removed (the CSS rule + comment and the `<div>`; grep → 0) → EN
   `npm run render -- --format webm --quality high --video-bitrate 3M --output renders/ae-en.webm`
   (390 frames, 5 workers, 4 m 36 s).
2. Declared `lang` default flipped to `"he"` (grep he=1) → same command to `renders/ae-he.webm`
   (3 m 35 s).
3. `index.html` restored byte-for-byte from the pre-render copy (`cmp` identical): default
   `"en"` (grep en=1 / he=0), `#review-bg` back (grep 2 = rule + element).
4. ffmpeg: alpha WebM (decoded with `libvpx-vp9`) overlaid on `color=0x121211` → H.264
   `-preset slow -crf 23 -pix_fmt yuv420p -movflags +faststart -an` (CRF 23 already ≤ 1.5 MB, no
   raise needed). Posters: the alpha WebM frame at **t = 12.4 s** overlaid on `#121211` → PNG
   (1920×1080).
5. Copied over `public/videos/ai-enablement{,-he}.{mp4,webm}` + `ai-enablement{,-he}-poster.png`
   (same filenames — the page's `film` block needs no change; md5 source = public).

| Asset | Codec | Size | Duration | Bitrate | vs 2026-07-13 |
|---|---|---|---|---|---|
| `ai-enablement.mp4` | H.264 yuv420p 1920×1080 30 fps, CRF 23 | 715,865 B (0.68 MB) | 13.000 s | 441 kb/s | 505,348 B |
| `ai-enablement.webm` | VP9 + alpha (`ALPHA_MODE=1`) 1920×1080 30 fps, 3M target | 5,081,762 B (4.85 MB) | 13.000 s | 3.13 Mb/s | 1,117,638 B |
| `ai-enablement-poster.png` | PNG 1920×1080 (t 12.4 s) | 125,939 B | — | — | 71,857 B |
| `ai-enablement-he.mp4` | H.264 yuv420p 1920×1080 30 fps, CRF 23 | 634,249 B (0.60 MB) | 13.000 s | 390 kb/s | 413,855 B |
| `ai-enablement-he.webm` | VP9 + alpha (`ALPHA_MODE=1`) 1920×1080 30 fps, 3M target | 4,762,096 B (4.54 MB) | 13.000 s | 2.93 Mb/s | 901,129 B |
| `ai-enablement-he-poster.png` | PNG 1920×1080 (t 12.4 s) | 101,433 B | — | — | 54,881 B |

MP4s are well inside the 1.5 MB/locale budget; the WebM fallbacks are inside the 6 MB cap but
≈ 4.5–5× the v1 files (the frame-filling glow + rack-focus blur regions cost VP9-alpha bits at a
fixed 3M target; the MP4 is the primary source and stays small). 390 frames per MP4 (counted).

**Loop seam (rendered MP4s, frame 0 vs frame 389 = t 12.967 s, camera at identity — scale 1.0,
drift < 0.1 px):** frame 0 is the bare backdrop (luminance 17 everywhere — 18 after the
limited-range round trip); the last frame's four edges are 17, identical to frame 0; a 60 px
border ring differs by **0** between first and last frame in both locales (no drift/scale
mismatch at the seam). First-vs-last mean |Δ| is 8.00 EN / 7.16 HE — the hero content itself
(linear film + soft settle that restarts from the empty backdrop, by design). 12.4 s vs last
frame: best shift (1, 1) px, residual mean |Δ| 0.45 EN / 0.41 HE — the sine drift returning to 0,
nothing mid-tween.

**Served:** a fresh `web` dev server (autoPort 53906 — the 51459 server had been stopped by the
app) returns `Content-Length` equal to the local file for all six assets (e.g.
`ai-enablement.mp4` 715865 = 715865).

**Fonts pruned** (plain `rm`): `inter-400`, `inter-600` (tracked → show as deleted),
`newsreader-500-latin`, `frank-ruhl-libre-500-{hebrew,latin}` (untracked). Kept — every one
referenced by an `@font-face` and md5-identical to `hyperframes/_fonts/`: Instrument Sans
400–600, Assistant 600 ×2, Assistant 700 ×2, Geist Mono 400 (declared, no chip on frame).

**Post-render gate:** `npm run check` with `#review-bg` restored → **exit 0** (lint 0 errors / 4
benign warnings; "No console errors"; 0 layout issues across 9 samples).
