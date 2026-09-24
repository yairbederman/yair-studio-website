# REVIEW — "From brief to loop" (cap-films film)

Status: **owner approved the stills with one change (the waiting still gets its own check
before the render) — applied, RENDERED (EN + HE) and WIRED on `/studio/films`**, build
clean — see "Render v2 (2026-09-24)" at the end of this file.

## v2 2026-09-24 — first cut (current)

### What was built

One composition (`index.html`), two locales via the `lang`
`data-composition-variables` (EN default; HE mirrors RTL via `X()` + `.he` on `#stage`).
12s, 6 beats, single paused GSAP timeline on `window.__timelines["root"]`. Charcoal
`#review-bg` for preview/check/snapshot only — to be hidden (`data-hidden`) before the
transparent alpha render, restored after. Settled cinematic grammar (velocity-matched
hand-offs, one rack focus onto the copper checkpoint, loop-continuous camera, push-in
capped at 1.5%); **no WebGL bloom**. Type = spec v2 sans only (Instrument Sans / Assistant
/ Geist Mono for the Latin chips), local woff2 byte-identical to `hyperframes/_fonts/`.

Animation rules composed (hyperframes-animation): `depth-of-field-blur` (the rack focus),
`svg-path-draw` (the rail, the frame rail, the approval check), `card-morph-anchor` (the
timeline's bounds morph into the 16:9 frame, then the real frame takes over),
`sine-wave-loop` in its finite-yoyo form (the waiting still's breath).

### Beats (verified in snapshots, both locales)

| t | Beat | Reads as |
|---|---|---|
| 0.9s | Your copy (pile) | three source chips `site · deck · post` at odd rotations |
| 1.9s | Your copy | one continuous script line (1550×22) under the headline |
| 3.2s | Six scenes | the line cut into six 220×90 clips under the rail, six nodes |
| 4.6s | Stills in both languages (mid-sweep) | playhead at node 3; nodes 0–2 copper; stills + mirrored twins filling behind it |
| 5.85s | Stills in both languages | all six stills in lane 1, six mirrored twins in lane 2, playhead at node 5 |
| 8.3s | **Approval peak** | timeline defocused; A (copper + check) ← checkpoint → B (open dot); caption |
| 10.2s | Rendered loop | one 16:9 frame filled with the settled schematic |
| 11.7s | Settled | 16:9 · 1:1 · 9:16 with their language twins; headline held as the closing |

HE: full-axis RTL mirror confirmed — chips read right → left (`אתר · מצגת · פוסט`), rail
draws and the playhead sweeps right → left, lane 1 mirrored / lane 2 LTR, the approved
still sits before the checkpoint in RTL order (right), the variants row runs 16:9 → 1:1 →
9:16 right → left with twins offset up-left, frame schematics mirrored (bars
right-aligned, the rail flows to the left).

### Gates

- `npm run check` (lint + validate + inspect): **exit 0** in both locales —
  `0 error(s), 22 warning(s)` · `No console errors · 15 text elements pass WCAG AA` ·
  `0 layout issues across 9 sample(s)`. The 22 warnings are the benign set the siblings
  carry: 21 × `overlapping_gsap_tweens` on `__unresolved__` (selectors built in code —
  `"#k" + i`, `"#t" + PICK` … — that the linter cannot resolve, collapsed onto one
  pseudo-target; every flagged pair animates *different* elements, e.g. the 6.24–6.87s pair
  is A's lift vs B's lift, 7.50–7.90s is A's border vs A's dot) and 1 ×
  `composition_file_too_large`.
- Fonts (snapshot loader + in-page `document.fonts`): EN loaded Instrument Sans 400–600 +
  Geist Mono 400; HE loaded Assistant 600 ×2 + Assistant 700 ×2. The other locale's
  families report "unloaded" because no glyph on frame maps to them — expected. No serif
  `@font-face` in `index.html`.
- Computed type (in-page, headless Chrome 131): EN `.lbl` Instrument Sans 600 128px
  ls −1.28px; caption Instrument Sans 400 72px; chips Geist Mono 400 80px ls 1.6px. HE
  `.lbl` Assistant 700 140px, caption Assistant 600 80px, chips Assistant 600 88px — **all
  9 HE text elements `letter-spacing: normal`, `dir="rtl"`**.
- Loop seam (in-page, `tl.seek(t, false)`, both locales): t=0 untransformed / `scale(1)
  translate(0px, 0px)`; t=12 `scale(1) translate(-1.2e-15px, -1.5e-15px)`; peak (8.3s)
  `scale(1.015)`. Timeline duration 12.
- HE captured via the declared-default flip (`"default":"en"` → `"he"` → back); restored
  to `"en"` — grep after the flip-back: line 5 reads `"default":"en"`, `"default":"he"`
  count 0.

### Defects caught in the first stills and fixed

1. **Beat 0 was top-heavy** — the chip pile sat in y 250–440 with the lower frame empty →
   pile lowered 50–65px ((520,395) (1000,345) (1420,415)).
2. **The script line read as a hairline at phone width** (16px → 3px at 375) → 22px.
3. **The peak pair was small** (×1.5 = 330×135) → ×1.75 = 385×158, tray spread to x 690 /
   1230 so the checkpoint keeps ≥ 52px each side.
4. **The square and portrait faded in *over* the 16:9** (10.8s transition frame) instead of
   sliding out from behind it → DOM order 9:16, 1:1, 16:9 (the 16:9 paints on top; the
   settled frames never overlap, so the poster is unchanged).

### Type-floor audit (per moment, px vs floor, measured ink)

Floor v2: **headline ≥ 120 · label ≥ 80 · secondary (caption, chips) ≥ 64** on the 1920
canvas; 375px = × 0.195. "Ink" = the rendered-pixel extent scanned from the tool's own
snapshot frames (camera transform included); margins = ink to frame edges (need ≥ 120).

| Moment | Locale | Font | px | Floor | @375 | Rendered ink width | Margins L / R | Verdict |
|---|---|---|---|---|---|---|---|---|
| `#lbl0` Your copy (1.9s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 585 | 673 / 662 | PASS |
| `#lbl1` Six scenes (3.2s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 619 | 657 / 644 | PASS |
| `#lbl2` **Stills in both languages** (5.85s) — widest EN | EN | Instrument Sans 600 | 128 | 120 | 25.0 | **1359** | **282 / 279** | PASS |
| `#lbl3` Your approval (8.3s, camera ×1.015) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 816 | 545 / 559 | PASS |
| `#lbl4` Rendered loop (11.7s, closing) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 851 | 536 / 533 | PASS |
| `#caption` Approve the stills (8.3s) | EN | Instrument Sans 400 | 72 | 64 | 14.0 | 577 | 667 / 676 | PASS |
| `.chip-inner` site / deck / post (0.9s) | EN | Geist Mono 400 | 80 | 64 | 15.6 | 184 / 189 / 186 (text ink, rotated) | — (box ≈ 309 × 157 unrotated) | PASS |
| `#lbl0` הטקסט שלכם | HE | Assistant 700 | 140 | 120 | 27.3 | 744 | 593 / 583 | PASS |
| `#lbl1` שש סצנות | HE | Assistant 700 | 140 | 120 | 27.3 | 553 | 687 / 680 | PASS |
| `#lbl2` **פריימים בשתי השפות** — widest HE | HE | Assistant 700 | 140 | 120 | 27.3 | **1151** | **384 / 385** | PASS |
| `#lbl3` האישור שלכם (camera ×1.015) | HE | Assistant 700 | 140 | 120 | 27.3 | 745 | 583 / 592 | PASS |
| `#lbl4` הלופ מוכן (closing) | HE | Assistant 700 | 140 | 120 | 27.3 | 511 | 704 / 705 | PASS |
| `#caption` מאשרים את הפריימים | HE | Assistant 600 | 80 | 64 | 15.6 | 662 | 625 / 633 | PASS |
| `.chip-inner` אתר / מצגת / פוסט | HE | Assistant 600 | 88 | 64 | 17.2 | 146 / 186 / 164 (text ink, rotated) | — | PASS |

**Totals: 14 text moments — 14 PASS · 0 FAIL.** No "label" role exists in this film (the
chips are the node-0 sub, audited as secondary; they also clear the 80 label floor).
"One large text moment at a time": one headline on frame at any time (0.45s out / 0.55s
in cross-fade); the caption shares the peak with `#lbl3`; the chips share beat 0 with no
headline until they have begun their exit. Frames contain **no text** (bars and nodes).

### Legibility

`snapshots-en/_legibility-375.png` and `snapshots-he/_legibility-375.png`: peak (8.3s) +
closing (11.7s) downscaled to 375px wide, side by side. Headline ≈25px EN / 27px HE,
caption ≈14 / 15.6px — both read. At the peak the approved still (copper fill + check)
vs the waiting twin (open dot) reads by colour and shape, the checkpoint between them;
the defocused timeline reads as texture. At the closing the three formats read as
16:9 / square / portrait, each with a visible second edge (the twin); the copper node +
token inside each frame survive the downscale. Built with
`python <scratchpad>/cap-films/legib.py <film dir>` (the cap-agentic-systems script); ink
scan `inkscan.py`, in-page checks `verify.cjs` / `seam.cjs` beside it.

### Stills

- EN: `snapshots-en/contact-sheet.jpg` (8 beats) + `frame-05-at-8.3s.png` (peak) +
  `frame-07-at-11.7s.png` (closing) + `_legibility-375.png`.
- HE: `snapshots-he/contact-sheet.jpg` + the same frames + `_legibility-375.png`.

### Honesty compliance

- **Schematic** — clip blocks (dot + blank bars), nodes, a playhead, frames with a
  headline bar + node rail. No footage, faces, voices, logos, metrics, product UI, and no
  text inside any frame → **no "Sample data" chip**.
- Every on-frame string traces to `src/content/studio/films.ts` (inline `// source`
  comments with line refs in the `COPY` object; full table in DESIGN.md).
  `example.map.nodes` baked verbatim, in order (labels + the node-0 sub as chips); one
  caption from `how.steps[2].title` (the `human: true` step); the closing is the out node.

### Judgment calls (for the owner's stills review)

1. **Caption = `how.steps[2].title` ("Approve the stills" / "מאשרים את הפריימים")** — the
   human step's title, the same pattern as cap-agentic-systems. Alternatives on the page:
   the step's desc or `human.items[0].desc` ("Nothing appears on screen that you did not
   approve on a still.") — both 60+ characters, which would not fit one line at the 64
   floor with the required margins.
2. **"Both languages" = a mirrored twin lane.** Each still gets a twin in lane 2 whose
   content is mirrored (dot and bars on the other side); lane 1 is always the render's own
   language. At the peak the checkpoint lifts one scene's still *and its twin*: in the EN
   render the English still is approved and the Hebrew twin waits; in the HE render the
   reverse.
3. *(Resolved by the owner, 2026-09-24: B now gets its own check at 8.35–8.62s — see
   "Render v2".)* **The waiting still is not held to the poster** (the precedent held its waiting item
   to the end). Here the render sweeps the whole timeline — B included — into the frame,
   because the closing needs the full width for the three formats. Strictly, "nothing
   renders before approval" would want B approved too before the render: a second check
   on B at ~8.5s is a few lines if the owner prefers that reading.
4. **The checkpoint is a free-standing copper node below the timeline**, not a rail node —
   the rail is fully occupied by the six scene clips; the two lifted stills flank it.
5. **The script line is the six lane-1 clips themselves**, squashed into one continuous
   1550×22 bar; beat 1 literally cuts the copy into the six scenes (no separate element).
6. **Variant twins ("EN and HE")**: each format gets a mirrored twin behind it, offset
   26px at 50% opacity. At 375px it reads as "a pair per format" (a second edge) rather
   than as a legible language. Alternative: drop the twins and let the twin lane carry
   "both languages" alone.
7. **Frame schematic** (the "settled poster" inside each frame): a start-aligned headline
   bar + sub bar (so the twin reads mirrored), a five-node rail with the fourth node copper
   (approval) and the copper token on the out node; the portrait runs its rail vertically.
8. **Headline 128 EN / 140 HE, not larger** — kept identical to cap-agentic-systems for a
   consistent type scale across the capability films, although the widest EN headline
   leaves 279px margins (≈150px EN would still hold ≥ 120). One constant each if the
   owner wants bigger.
9. **Playhead line** through both lanes (opacity 0.5) to read as an editing timeline
   rather than a conveyor; it crosses each clip's centre as it passes.

### Unverified / open

- No render yet: alpha WebM / MP4 sizes unmeasured; the per-frame cost of the full-group
  blur during the 8.85–9.45s collapse is unmeasured in the renderer.
- Transitions between review frames were eyeballed at 2.5 / 6.5 / 9.1 / 9.5 / 10.7–11.1s
  only (scratch snapshots, not in the repo).

## Render (plan — DONE, see "Render v2 (2026-09-24)" below)

1. Add `data-hidden` to `#review-bg` → `npm run render -- --format webm --quality high
   --video-bitrate 3M` → transparent VP9-alpha WebM (verify `alpha_mode=1`). Restore.
2. HE via the default flip (`"default":"en"` → `"he"`, render, flip back).
3. ffmpeg: alpha WebM over `#121211` → MP4; poster from the settled frame (≈ 11.7s).
4. Outputs → `public/videos/cap-films{,-he}.{mp4,webm}` + posters.

## Site integration (plan — DONE, see "Render v2 (2026-09-24)" below)

`film` block (`CapabilityFilm`) on `src/content/studio/films.ts` (EN + HE):
sectionTitle → `example.title` ("From brief to loop" / "מבריף ללופ"), caption →
`example.map.caption` ("Brief to loop" / "מבריף ללופ"). Not done at this stop (no `src/`
or `public/` changes).

---

## Render v2 (2026-09-24) — DONE (owner approved the stills with one change)

### Owner change — the waiting still gets its own check before the render

"Nothing renders before approval": B (scene 3's twin) now gets its own check just before
the render beat. Changes, all in the peak window (no other timing touched):

- both lifted clips carry a check (`k2-check`, `t2-check`; `PICK` now declared before the
  clip builder);
- B's breath shortened to one yoyo 7.85–8.35s (was 8.0–8.9s) so it ends as the approval
  starts — no overlapping tweens on B's dot;
- B approved at 8.35s: copper border + tint and copper dot (0.25s), check fades in at
  8.38s and draws 8.38–8.62s (`power2.inOut`).

The 8.3s peak still keeps "one approved, one waiting"; at 8.6s both are approved
(`snapshots-en/frame-second-check-at-8.6s.png`; HE verified identically in scratch), and
both stay approved into the 8.85s collapse. `npm run check` exit 0 in both locales
(`0 error(s), 24 warning(s)` — the 2 new warnings are the same benign
`overlapping_gsap_tweens` on `__unresolved__`: B's border vs B's dot, B's check vs its
path). Both 8-beat sets and both `_legibility-375.png` composites were re-taken after the
change (HE via the default flip; restored to `"en"`).

### Pipeline

Pipeline = command-center REVIEW.md "Render". The pre-render master was copied aside;
`#review-bg` (CSS rule + element) removed (0 refs left) → `npm run render -- --format webm
--quality high --video-bitrate 3M -o renders/cap-films.webm` (hyperframes 0.6.84, 360
frames, 5 workers, 2m10s) with the declared default `"en"`; default flipped to `"he"` →
same command → `renders/cap-films-he.webm` (2m50s). `index.html` then restored from the
master: **`cmp` = identical**; grep: line 5 `"default":"en"` (`"default":"he"` count 0),
line 61 `#review-bg { … }`, line 161 `<div id="review-bg"></div>`. `npm run check` on the
restored file: exit 0 (0 errors, 24 benign warnings, no console errors, 15 text elements
WCAG AA, 0 layout issues across 9 samples).

MP4 = each alpha WebM decoded with `libvpx-vp9` (keeps the alpha plane) and overlaid on a
`color=c=0x121211:s=1920x1080:r=30:d=12` underlay → `libx264 -preset slow -crf 23
-pix_fmt yuv420p -movflags +faststart -an`. **CRF 23** held both locales well under the
1.5 MB cap. Poster = **WebM frame 351 (t = 11.7s, the settled closing)**, alpha-decoded and
overlaid on the same charcoal in RGB (`overlay=format=rgb`) → rgb24 PNG — no H.264
generation loss in the poster.

### Outputs (`public/videos/`, ffprobe `-count_frames`)

| File | Codec | Size | Duration | Frames / fps | Pix fmt | Alpha | Bitrate | Budget |
|---|---|---|---|---|---|---|---|---|
| `cap-films.mp4` | H.264 | 665,129 B (0.67 MB) | 12.000s | 360 / 30 | yuv420p | — (charcoal) | 443 kb/s | ≤ 1.5 MB ✓ |
| `cap-films.webm` | VP9 | 4,381,973 B (4.38 MB) | 12.000s | 360 / 30 | yuv420p + `alpha_mode=1` | yes | 2.92 Mb/s | ≤ 6 MB ✓ |
| `cap-films-poster.png` | PNG | 113,063 B | — | t = 11.7s | rgb24 1920×1080 | — | — | — |
| `cap-films-he.mp4` | H.264 | 594,940 B (0.59 MB) | 12.000s | 360 / 30 | yuv420p | — (charcoal) | 397 kb/s | ≤ 1.5 MB ✓ |
| `cap-films-he.webm` | VP9 | 4,098,611 B (4.10 MB) | 12.000s | 360 / 30 | yuv420p + `alpha_mode=1` | yes | 2.73 Mb/s | ≤ 6 MB ✓ |
| `cap-films-he-poster.png` | PNG | 90,185 B | — | t = 11.7s | rgb24 1920×1080 | — | — | — |

`+faststart` confirmed (`moov` in the first 64 bytes of both MP4s). Alpha confirmed with the
`libvpx-vp9` decoder: the whole t=0 WebM frame is transparent (2,073,600 / 2,073,600 px,
corner `(0,0,0,0)`) in both locales. `public/videos/` copies are `cmp`-identical to
`renders/`.

### Loop seam (camera at identity at both ends)

Linear film + soft settle (family convention), not a crossfade — the page restarts at 0.

| Measure | EN | HE |
|---|---|---|
| t=0 MP4 frame | uniform luminance 17 (bare `#121211`; min = max = 17) | same |
| Last frame (t=11.967s) edges | luminance 17 on all four 2px edges — no exposed edge from the drift | same |
| RMSE first ↔ last (empty → settled, by design) | 0.1226 (mean abs diff 7.72) | 0.1048 (6.47) |
| 11.7s ↔ last frame (MP4) | RMSE 0.0228, mean abs diff 0.809 | RMSE 0.0197, mean abs diff 0.696 |
| Poster PNG (WebM frame 351) ↔ last MP4 frame | RMSE 0.0230, mean abs diff 0.999 | RMSE 0.0197, mean abs diff 0.866 |
| Best integer shift 11.7s → last | (+1, +1) px, residual mean abs diff 0.595 | (+1, +1) px, residual 0.491 |
| Camera transform (DOM) | t=0 untransformed · t=12 `scale(1) translate(-1.2e-15px, -1.5e-15px)` | same |

The settle is stable: the poster and the last frame differ only by the sine drift's final
1px return to identity — nothing is mid-tween at the seam (the last tween, the HE/EN twin
slide, ends at 11.59s).

### Fonts

No prune needed: all six files in `assets/fonts/` are referenced exactly once by an
`@font-face` block (`instrument-sans-400-600-latin`, `assistant-600-{hebrew,latin}`,
`assistant-700-{hebrew,latin}`, `geist-mono-400`); the film was authored sans-only, so no
serif file was ever copied in.

### Site integration — DONE

`film` block added right after `hero` in `src/content/studio/films.ts` (EN lines 21–29,
HE lines 165–173), shape `CapabilityFilm`; the header comment's "No film yet …" now reads
"The film (hyperframes/cap-films) bakes `example.map.nodes` verbatim — re-render it if they
change."

- EN: sectionTitle `How a film gets made` · caption `From brief to loop: your copy becomes
  six scenes, you approve the stills, and the loop is rendered.` (18 words) · filmName
  `films film` · `/videos/cap-films.{webm,mp4}` + `-poster.png`.
- HE: sectionTitle `איך נוצר סרטון` · caption `מבריף ללופ: הטקסט שלכם הופך לשש סצנות,
  אתם מאשרים את הפריימים, והלופ מוכן.` (13 words) · filmName `סרטון הסרטונים` ·
  `/videos/cap-films-he.{webm,mp4}` + `-he-poster.png`.
- Caption trace: `example.title` ("From brief to loop" / "מבריף ללופ") + node 0 ("Your
  copy" / "הטקסט שלכם") + node 1 ("Six scenes" / "שש סצנות") + the human step
  `how.steps[2]` ("Approve the stills" / "אתם מאשרים את הפריימים" — title + desc wording)
  + the out node ("Rendered loop" / "הלופ מוכן"). The sectionTitle is new copy (sibling
  convention): `example.title` already heads the page's example section.
- `npx tsc --noEmit` exit 0; `npm run build` exit 0 (`✓ Compiled successfully`, 31/31
  static pages). Live dev server (:3000): `/studio/films` → `cap-films.mp4` ×1, `-he`
  assets ×0, one `id="film"`; `/he/studio/films` → `cap-films-he.mp4` ×1 +
  `cap-films-he-poster.png` ×1; `/videos/cap-films.mp4` and `/videos/cap-films-he.webm`
  served 200 at full size.

Intermediates stay in the film's gitignored `renders/` (the two alpha WebMs, CRF-23 MP4s,
posters). Nothing staged or committed.
