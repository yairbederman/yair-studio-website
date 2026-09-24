# REVIEW — "One intake, run by agents" (cap-agentic-systems film)

Status: **v2 re-cut (film spec v2) — owner approved the v2 stills; rendered (EN + HE),
wired on `/studio/agentic-systems` (EN + HE), build clean** — see "Render v2
(2026-09-24)" at the end of this file. The v1 stills were
rejected ("font looks bad. elements very small"); the sections below down to "Site
integration" are the **v1 record (history)** — the current cut is **"v2 2026-09-24"** at
the end of this file.

## What was built

One composition (`index.html`), two locales via the `lang`
`data-composition-variables` (EN default; HE mirrors RTL via `X()` + `.he` on `#stage`).
12s, 6 beats, single paused GSAP timeline on `window.__timelines["root"]`. Charcoal
`#review-bg` for preview/check/snapshot only — to be hidden (`data-hidden`) before the
transparent alpha render, restored after. Authored under the settled cinematic grammar
(velocity-matched hand-offs, rack focus onto the copper checkpoint, loop-continuous camera
with the push-in capped at 1.5%). **No WebGL bloom** (flagship-only signature). Type =
Pair A (Newsreader / Instrument Sans / Frank Ruhl Libre / Assistant / Geist Mono), local
woff2 byte-identical to `hyperframes/_fonts/`.

Animation rules composed (hyperframes-animation): `depth-of-field-blur` (the rack focus),
`svg-path-draw` (the approval check), `spring-pop-entrance` (nodes / cards / ticks),
`sine-wave-loop` in its finite-yoyo form (the waiting dot's breath, the logged row).

## Beats (verified in snapshots, both locales)

| t | Beat | Reads as |
|---|---|---|
| 0.9s | New request (pile) | 3 intake chips (email · form · call) at odd rotations beside node 0, rail drawing |
| 1.9s | New request | copper token at node 0; headline |
| 3.2s | Captured and sorted | token at node 1; three ascending ticks above it |
| 4.5s | Draft reply prepared | abstract card A above node 2 |
| 5.7s | Missing documents chased | dashed card B above node 3, beside A |
| 8.3s | **Approval peak** | rack focus — rail/upstream/ticks defocus; queue above copper node 4; A copper + check, B open dot; caption |
| 10.3s | Answered and tracked | A dissolved into node 5; run log writing in; B still waiting above node 4 |
| 11.7s | Settled | headline held as closing; hero/poster frame |

## Gates

- `npm run check` (lint + validate + inspect): **exit 0** — 0 errors, no console errors,
  **15 text elements pass WCAG AA**, 0 layout issues across 9 samples. **10 benign
  warnings**: 9 × `overlapping_gsap_tweens` on `__unresolved__` (helper-built selectors +
  the always-on camera-drift tween overlapping reveals on *different* elements — the same
  false positive documented for command-center / linkedin-content-engine) and 1 ×
  `composition_file_too_large` (313 lines; siblings carry the same).
- **Two defects caught in the first stills and fixed:** (1) the two work-item cards
  (280px wide, centred 240px apart) touched while both sat on the rail at 5.7s → cards
  232px + a 12px outward nudge (`CARD_X0`), travel deltas computed from the nudged
  origins. (2) The 1.3s review frame caught the pile before `New request` had appeared and
  that headline held only ~0.65s → chips arrive 0.05s earlier and merge 0.2s earlier;
  the headline now holds ~0.85s; review frame split into 0.9s + 1.9s.
- **EN** stills: `snapshots-en/contact-sheet.jpg` (all 8 beats, tool-generated grid) +
  `frame-NN-at-Xs.png`. **HE** stills: `snapshots-he/contact-sheet.jpg` — full-axis RTL
  mirror confirmed (pile enters right, flows left, queue and run log on the left, cards'
  flex order reversed so the check sits on the leading edge; Frank Ruhl Libre headlines,
  Assistant chips/caption; Hebrew reads correctly — a transcreation, not a flipped render).
  HE captured via the declared-default flip; the default was restored to `"en"` (verified
  by grep after the flip-back).
- Font loader (snapshot log): EN loaded Newsreader 500 / Instrument Sans 400–600 / Geist
  Mono 400; HE loaded Frank Ruhl Libre 500 ×2 / Assistant 600 ×2. The other locale's
  families report "unloaded" because no glyph on frame maps to them — expected.

## Type-floor audit (2026-09-24, authored to the floor)

Floor (backlog/2026-09-24-studio-redesign-plan.md §2/§9): **headline moments ≥ 84px,
secondary labels ≥ 64px** on the 1920 canvas; 375px full-bleed = × 0.195. "Font" = EN / HE.

| Element | Locale | Font | px | @375 | Role | Verdict |
|---|---|---|---|---|---|---|
| `.lbl` #lbl0–#lbl5 (one at a time; #lbl4 "Human approval" = peak; #lbl5 held as closing) | EN+HE | Newsreader 500 / Frank Ruhl Libre 500 | 84 | 16.4 | headline (stage / closing) | PASS |
| `#caption` "Approve what matters" | EN+HE | Instrument Sans 400 / Assistant 600 | 64 | 12.5 | label (the one secondary line, peak only) | PASS |
| `.chip-inner` ×3 "email / form / call" | EN+HE | Geist Mono 400 / Assistant 600 | 64 | 12.5 | label (node-0 sub, transient 0.15–1.6s) | PASS |

**Totals: 10 text moments — 10 PASS · 0 FAIL · 0 STRUCTURAL-below-floor.** Node marks,
the token, the sorted ticks, both work-item cards, the ring and the run-log rows carry no
text (documented structural, DESIGN.md → Phone type floor). Tracking: `.lbl` −0.01em and
`.chip-inner` +0.02em in EN only; `.he .lbl`, `.he .mono`, `.he #caption` and `[dir="rtl"]`
reset to 0. Frank Ruhl Libre 500 at 84 reads as heavy as Newsreader 500 in the 375
composite — no HE size bump needed (the audit note on the siblings expected the reverse;
validated here in the snapshot, not assumed).

"One large text moment at a time": one 84px headline on frame at any time (hand-offs
cross-fade 0.45s out / 0.55s in); the 64px caption shares the peak with #lbl4 as in every
sibling film; the three 64px chips share beat 0 with no headline.

## Legibility

`snapshots-en/_legibility-375.png` and `snapshots-he/_legibility-375.png`: the peak
(8.3s) and closing (11.7s) frames downscaled to 375px wide, side by side. Headline ~16px,
caption ~12.5px — both read; the approved card (copper + check) vs the waiting card (open
dot) reads by colour and shape; the run log reads as three hairlines. Rebuild with
`python <scratchpad>/cap-agentic-systems-legib.py <film dir>` (PIL, 12 lines: open the peak +
closing frames, resize to 375 wide, paste side by side on charcoal) after any re-snapshot.

## Honesty compliance

- **Schematic** — node marks + abstract work-item cards (dot + blank bars, no readable
  text). No product UI → **no "Sample data" chip**. No faces, voices, metrics, names.
- Every on-frame string traces to `src/content/studio/agentic-systems.ts` (inline
  `// source` comments with line refs in the `COPY` object; full table in DESIGN.md).
  `example.map.nodes` baked verbatim, in order (labels + the node-0 sub as chips); one
  caption from `how.steps[3].title` (the human step); the closing is the out node.
- The peak leaves card B deliberately waiting through the poster — "every action that
  leaves the office waits for a person", shown not claimed.

## Judgment calls (for the owner's stills review)

1. **Closing = the out node's own headline, held.** `Answered and tracked` is both node
   5's stage headline and the closing line (the brief: "one closing line = the out
   node"), so there is no separate bottom closing element — the poster reads the headline
   band + the finished rail. Alternative: a second copy at the bottom (duplicate text).
2. **Headlines in one centred band, not above the active node.** At 84px the longest
   label (`Missing documents chased`, ≈1000px) cannot anchor over node 0 or node 5
   without clipping (the sibling audits flagged exactly this); the token + copper node
   activation carry the "which stage" link instead.
3. **Camera push-in capped at 1.015** (the brief's "drift ≤ 1.5%"), vs 1.03 in the
   precedent; ±5/±3px sine drift as before. One constant (`PUSH`) if the owner wants the
   precedent's 3%.
4. **Node-0 sub rendered as the three merging chips only** (no separate sub line) — the
   sibling audit found the duplicate sub line redundant; the chips carry the sub verbatim
   at 64px.

## Render (PENDING — owner stills approval first)

1. Add `data-hidden` to `#review-bg` → `npm run render -- --format webm --quality high
   --video-bitrate 3M` → transparent VP9-alpha WebM (verify `alpha_mode=1`). Restore.
2. HE via the default flip (`"default":"en"` → `"he"`, render, flip back).
3. ffmpeg: alpha WebM over `#121211` → MP4; poster from the settled frame (≈ 11.7s).
4. Outputs → `public/videos/cap-agentic-systems{,-he}.{mp4,webm}` + posters.

## Site integration (PENDING)

`film` block (`CapabilityFilm`) on `src/content/studio/agentic-systems.ts` (EN + HE):
sectionTitle → `example.title` ("One intake, run by agents" / "פנייה אחת, בניהול סוכנים"),
caption → `example.map.caption` ("Intake to follow-up" / "מפנייה ועד מעקב"). Not done at
this stop (no `src/` or `public/` changes).

---

## v2 2026-09-24 — film spec v2 re-cut (current)

Owner verdict on the v1 stills: **"font looks bad. elements very small."** Re-cut to film
spec v2 (`backlog/2026-09-24-studio-redesign-plan.md`, "Film spec v2"). **Story, beats,
ids, timeline timings, single paused timeline, loop continuity, trace table and honesty
grammar unchanged; type and scale changed.** Full spec in DESIGN.md → Type / Phone type
floor v2 / Layout v2.

### What changed (v1 → v2)

| Area | v1 | v2 |
|---|---|---|
| Type on frame | Newsreader / Frank Ruhl Libre headlines (serif) | **sans only** — Instrument Sans 600/400 (EN), Assistant 700/600 (HE), Geist Mono for the Latin chips only; no serif `@font-face` |
| Headline | 84px | **128px EN / 140px HE** |
| Caption | 64px | **72px EN / 80px HE** |
| Chips | 64px text, `email` box 257×109 | **80px EN / 88px HE**, `email` box 364×156 (≈2× area) |
| Rail | x 230 → 1520 (1290px), stroke 3 | **x 185 → 1735 (1550px)**, stroke 4 |
| Nodes / token | 30 / 42px | **40 / 48px** |
| Cards | 232×64, 2 bars, both above the rail | **560×150, 3 bars; A above the rail, B below it** (side by side they would overlap at this size) |
| Checkpoint | both cards stacked above node 4 | **A above / B below node 4** — the two waiting items flank the gate |
| Run log | 3 × 220×6 beside node 5 (x 1540 →) | **3 × 600×16 above node 5**, flush with the rail end (x 1135 → 1735) |
| Ring | 122px | 164px |
| Vertical plan | everything in a ~380px strip (y 292–670) + caption 930 | headline top 200 · cards 440–590 / rail 640 / 690–840 · caption 920 — y 200 → 1006 |

### Gates

- `npm run check` (lint + validate + inspect): **exit 0** — `0 error(s), 10 warning(s)` ·
  `No console errors · 15 text elements pass WCAG AA` · `0 layout issues across 9
  sample(s)`. The 10 warnings are the same benign set as v1 (9 × `overlapping_gsap_tweens`
  on `__unresolved__`, 1 × `composition_file_too_large`, 321 lines).
- Fonts (snapshot loader + in-page `document.fonts`): EN loaded Instrument Sans 400–600 +
  Geist Mono 400; HE loaded Assistant 600 ×2 + Assistant 700 ×2. The other locale's
  families report "unloaded" because no glyph on frame maps to them — expected. No
  Newsreader / Frank Ruhl Libre anywhere in `index.html` (grep: only `sans-serif`
  fallbacks match "serif").
- Hebrew tracking: computed `letter-spacing: normal` and `dir="rtl"` on all 10 HE text
  elements (6 headlines, caption, 3 chips).
- Loop seam: camera `scale(1) translate(~1e-15px, ~1e-15px)` at t=12 and untransformed at
  t=0 (both locales). Duration 12.
- HE captured via the declared-default flip (`"default":"en"` → `"he"` → back); the
  default was restored to `"en"` — grep after the flip-back: line 5 reads
  `"default":"en"`, `"default":"he"` count 0.

### Defects caught in the v2 stills and fixed

1. **The rail never drew (latent since v1).** GSAP's CSSPlugin auto-rounds px values; with
   `pathLength="1"` the `strokeDashoffset` tween is a 1 → 0 fraction, so it snapped 1 → 0
   at ~1.0s (the v1 0.9s frame shows no rail either). Fixed with `autoRound: false`;
   verified offsets 0.875 / 0.5 / 0.195 / 0.031 / 0 at 0.5 / 0.9 / 1.2 / 1.5 / 1.8s.
2. **HE cards showed 2 of 3 bars.** Right-aligning the bars (`.he .cbars { align-items:
   flex-end }`) collapsed the auto-width first bar to 0. Fixed with an explicit `width:
   100%` base on `.cbar`; re-snapshotted both locales.
3. The pile was widened (chips at (460,295) (860,410) (545,535)) so beat 0 isn't crowded
   into the left third.

### Type-floor audit v2 (per moment, px vs floor, measured ink)

Floor v2: **headline ≥ 120 · label ≥ 80 · secondary (caption, chips) ≥ 64** on the 1920
canvas; 375px = × 0.195. "Ink" = the rendered-pixel extent scanned from the tool's own
snapshot frames (camera transform included), not an estimate; margins = distance from the
ink to the frame edges (requirement ≥ 120).

| Moment | Locale | Font | px | Floor | @375 | Rendered ink width | Margins L / R | Verdict |
|---|---|---|---|---|---|---|---|---|
| `#lbl0` New request (1.9s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 736 | 599 / 585 | PASS |
| `#lbl1` Captured and sorted (3.2s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 1213 | 357 / 350 | PASS |
| `#lbl2` Draft reply prepared (4.5s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 1179 | 374 / 367 | PASS |
| `#lbl3` **Missing documents chased** (5.7s) — widest EN | EN | Instrument Sans 600 | 128 | 120 | 25.0 | **1595** | **164 / 161** | PASS |
| `#lbl4` Human approval (8.3s, camera ×1.015) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 971 | 470 / 479 | PASS |
| `#lbl5` Answered and tracked (11.7s, closing) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 1314 | 301 / 305 | PASS |
| `#caption` Approve what matters (8.3s) | EN | Instrument Sans 400 | 72 | 64 | 14.0 | 743 | 584 / 593 | PASS |
| `.chip-inner` email / form / call (0.9s) | EN | Geist Mono 400 | 80 | 64 | 15.6 | 238 / 190 / 188 (canvas ink) | — (boxes 364 / 314 / 314 × 156) | PASS |
| `#lbl0` פנייה חדשה | HE | Assistant 700 | 140 | 120 | 27.3 | 636 | 647 / 637 | PASS |
| `#lbl1` נקלטת וממוינת | HE | Assistant 700 | 140 | 120 | 27.3 | 828 | 549 / 543 | PASS |
| `#lbl2` טיוטת תשובה מוכנה | HE | Assistant 700 | 140 | 120 | 27.3 | 1078 | 426 / 416 | PASS |
| `#lbl3` **תזכורת למסמכים חסרים** — widest HE | HE | Assistant 700 | 140 | 120 | 27.3 | **1323** | **299 / 298** | PASS |
| `#lbl4` אישור אנושי (camera ×1.015) | HE | Assistant 700 | 140 | 120 | 27.3 | 657 | 628 / 635 | PASS |
| `#lbl5` נענתה ובמעקב (closing) | HE | Assistant 700 | 140 | 120 | 27.3 | 815 | 551 / 554 | PASS |
| `#caption` מאשרים את מה שחשוב | HE | Assistant 600 | 80 | 64 | 15.6 | 706 | 602 / 612 | PASS |
| `.chip-inner` מייל / טופס / טלפון | HE | Assistant 600 | 88 | 64 | 17.2 | 134 / 166 / 177 (canvas ink) | — (boxes 256 / 287 / 299 × 165) | PASS |

**Totals: 16 text moments — 16 PASS · 0 FAIL.** No "label" role exists in this film (the
chips are the node-0 sub, audited as secondary; they also clear the 80 label floor in both
locales). Size selection was measured before authoring: at 136px the EN widest headline
inks 1725px (97px margins — FAIL), so 128 is the largest EN size that holds the ≥120
margin. "One large text moment at a time": one headline on frame at any time (0.45s out /
0.55s in cross-fade); the caption shares the peak with `#lbl4`; the chips share beat 0
with no headline.

### Legibility

`snapshots-en/_legibility-375.png` and `snapshots-he/_legibility-375.png`: peak (8.3s) +
closing (11.7s) downscaled to 375px wide, side by side. Headline ≈25px EN / 27px HE,
caption ≈14 / 15.6px (v1: 16 / 12.5). The approved card (copper + check) vs the waiting
card (open dot, dashed) reads by colour and shape; the run log reads as three rows with
the copper top row; the rail + six nodes read across the full width. Rebuilt with the v1
script (`python <scratchpad>/cap-agentic-v2/legib.py <film dir>`, identical to
`cap-agentic-systems-legib.py`); ink scan: `inkscan-frames.py` beside it.

### Stills (v2)

- EN: `snapshots-en/contact-sheet.jpg` (8 beats) + `frame-05-at-8.3s.png` (peak) +
  `frame-07-at-11.7s.png` (closing) + `_legibility-375.png`.
- HE: `snapshots-he/contact-sheet.jpg` + the same frames + `_legibility-375.png`.
- v1 stills were overwritten in place (a scratch copy exists in the session scratchpad
  under `cap-agentic-v2/v1-snapshots/`, not in the repo).

### Judgment calls (v2, for the owner's review)

1. **Card B moved below the rail.** At 560×150 the two cards cannot sit side by side over
   adjacent nodes (286px apart), and stacking both above node 4 would reach the headline
   band. B (the chase) now lives below the rail from birth; at the peak A and B flank the
   checkpoint — one approved above, one waiting below. The "queue" becomes "two items
   held at the gate".
2. **Run log above the out node, not beside it.** The rail now reaches x 1735, leaving no
   room right of node 5, and card B occupies below node 4. The log sits flush with the
   rail's end above nodes 4–5, rows growing away from node 5.
3. **Card A nudged +64px off node 2** so it clears node 1's ticks by 28px (v1 used a
   12px nudge for the same reason).
4. **HE sizes run ×1.1 the EN sizes** (140 / 80 / 88) for optical parity — measured Hebrew
   letter body in Assistant ≈ 0.58–0.6 em vs Instrument Sans cap height 0.73 em.
5. **Headline 128 (EN), not the 120 floor** — the largest size that keeps the widest
   headline's ink ≥ 120px from both edges (measured 164 / 161).
6. **Caption 72 (EN)** — above the 64 secondary floor, clearly subordinate to the 128
   headline at the peak. One constant if the owner wants 80.

### Unverified / open

- The `.woff2` files for Newsreader / Frank Ruhl Libre are still in `assets/fonts/`
  (unreferenced by the composition now). Not deleted in this pass — safe to remove.
  *(Resolved in "Render v2": pruned.)*
- No render yet; the alpha WebM / MP4 sizes for the larger v2 elements are unmeasured.
  *(Resolved in "Render v2": measured below.)*

---

## Render v2 (2026-09-24) — DONE (owner approved the v2 stills)

Pipeline = command-center REVIEW.md "Render". `#review-bg` (CSS rule + element) removed →
`npm run render -- --format webm --quality high --video-bitrate 3M` (hyperframes 0.6.84) →
transparent VP9-alpha WebM, EN with the declared default `"en"`, HE with the default
flipped to `"he"`. `index.html` was then restored byte-for-byte from the pre-render v2
master: grep after the restore shows line 5 `"default":"en"` (`"default":"he"` count 0),
line 60 `#review-bg { … }` and line 159 `<div id="review-bg"></div>`; `cmp` against the
master = identical. `npm run check` on the restored file: **exit 0** (0 errors, 10 benign
warnings, no console errors, 15 text elements WCAG AA, 0 layout issues across 9 samples).

The session was interrupted once between the EN and HE renders (HE render aborted, no
output); the HE render was re-run from scratch with the default at `"he"` and completed.

MP4 = each alpha WebM decoded with `libvpx-vp9` (keeps the alpha plane) and overlaid on a
`color=c=0x121211:s=1920x1080:r=30:d=12` underlay → `libx264 -preset slow -crf 23
-pix_fmt yuv420p -movflags +faststart -an`. **CRF 23** held both locales well under the
1.5 MB cap, so no CRF raise was needed. Poster = frame 351 (t = 11.7s, the settled closing)
of each MP4.

### Outputs (`public/videos/`, ffprobe)

| File | Codec | Size | Duration | Frames / fps | Pix fmt | Alpha | Bitrate | Budget |
|---|---|---|---|---|---|---|---|---|
| `cap-agentic-systems.mp4` | H.264 | 634,851 B (0.63 MB) | 12.000s | 360 / 30 | yuv420p | — (charcoal) | 423 kb/s | ≤ 1.5 MB ✓ |
| `cap-agentic-systems.webm` | VP9 | 4,637,735 B (4.64 MB) | 12.000s | 30 fps | yuv420p + `ALPHA_MODE=1` | yes | 3.09 Mb/s | ≤ 6 MB ✓ |
| `cap-agentic-systems-poster.png` | PNG | 181,155 B | — | t = 11.7s | rgb24 1920×1080 | — | — | — |
| `cap-agentic-systems-he.mp4` | H.264 | 510,309 B (0.51 MB) | 12.000s | 360 / 30 | yuv420p | — (charcoal) | 340 kb/s | ≤ 1.5 MB ✓ |
| `cap-agentic-systems-he.webm` | VP9 | 4,117,994 B (4.12 MB) | 12.000s | 30 fps | yuv420p + `ALPHA_MODE=1` | yes | 2.75 Mb/s | ≤ 6 MB ✓ |
| `cap-agentic-systems-he-poster.png` | PNG | 136,479 B | — | t = 11.7s | rgb24 1920×1080 | — | — | — |

`+faststart` confirmed (`moov` atom in the first 64 bytes of both MP4s). Alpha confirmed
with the `libvpx-vp9` decoder: corner pixel `(0,0,0,0)`; the whole t=0 frame is
transparent (2,073,600 / 2,073,600 px) in both locales.

### Loop seam (camera at identity at both ends)

Linear film + soft settle (family convention), not a crossfade — the page restarts at 0.

| Measure | EN | HE |
|---|---|---|
| t=0 MP4 frame | uniform luminance 17 (bare `#121211` after YUV rounding; min = max = 17) | same |
| Last frame (t=11.967s) edges | luminance 17 on all four edges — no exposed edge from the drift | same |
| RMSE first ↔ last (empty → settled, by design) | 0.1371 | 0.1186 |
| 11.7s (poster) ↔ last frame | RMSE 0.0239, mean abs diff 0.757 | RMSE 0.0194, mean abs diff 0.587 |
| Best integer shift 11.7s → last | (−1, −1) px, residual mean abs diff 0.549 | (−1, −1) px, residual 0.458 |
| Camera transform (DOM) | t=0 untransformed · t=12 `scale(1) translate(~1e-15px, ~1e-15px)` | same |

The settle is stable: the poster and the last frame differ only by the sine drift's final
1px return to identity — nothing is mid-tween at the seam.

### Fonts pruned

`assets/fonts/newsreader-500-latin.woff2`, `frank-ruhl-libre-500-hebrew.woff2` and
`frank-ruhl-libre-500-latin.woff2` removed (0 `@font-face` references since v2; each was
byte-identical to its `hyperframes/_fonts/` kit copy before removal, so nothing is lost).
Kept (all referenced once each): `instrument-sans-400-600-latin`, `assistant-600-{hebrew,latin}`
(HE caption + chips), `assistant-700-{hebrew,latin}` (HE headlines), `geist-mono-400`. No
Inter file existed. `npm run check` re-run after the prune: exit 0.

### Site integration — DONE

`film` block added right after `hero` in `src/content/studio/agentic-systems.ts` (EN at
line 26, HE at line 184), shape `CapabilityFilm`:

- EN: sectionTitle `The agent at work` · caption `One intake, run by agents: a person
  approves what matters, and the request is answered and tracked.` (17 words) · filmName
  `agentic systems film` · `/videos/cap-agentic-systems.{webm,mp4}` +
  `-poster.png`.
- HE: sectionTitle `הסוכן בעבודה` · caption `פנייה אחת, בניהול סוכנים: אדם מאשר את מה
  שחשוב, והפנייה נענתה ובמעקב.` (12 words) · filmName `סרטון מערכות הסוכנים` ·
  `/videos/cap-agentic-systems-he.{webm,mp4}` + `-he-poster.png`.
- Caption trace: `example.title` ("One intake, run by agents" / "פנייה אחת, בניהול
  סוכנים") + the human step `how.steps[3].title` ("Approve what matters" / "מאשרים את מה
  שחשוב") + the out node `example.map.nodes[5].label` ("Answered and tracked" / "נענתה
  ובמעקב"). The sectionTitle is not `example.title`, because that string already heads
  the page's example section (it would repeat a heading on the same page).
- `npx tsc --noEmit` exit 0; `npm run build` exit 0 (`✓ Compiled successfully`, 31/31
  static pages, `/studio/agentic-systems` + `/he/studio/agentic-systems` prerendered).
  Prerendered HTML: EN page references `cap-agentic-systems.mp4` ×1 + its poster, HE page
  `cap-agentic-systems-he.mp4` ×1 + its poster, one `id="film"` section each. Live-server
  curl deferred to integration (coordinator).

Intermediates stay in the film's gitignored `renders/` (the two alpha WebMs, CRF-23 MP4s
and posters); the aborted HE render's temp work dir was removed.
