# REVIEW — "How a site gets made" (cap-websites film)

Status: **v2 2026-09-24 — authored to film spec v2 from the start (EN + HE), owner
approved the stills; RENDERED (EN + HE) and WIRED on `/studio/websites` +
`/he/studio/websites`, build clean** — see "Render v2 (2026-09-24)" at the end of this
file. There is no v1 of this film; spec v2 (`backlog/2026-09-24-studio-redesign-plan.md`,
"Film spec v2") is the binding spec from the first cut.

## What was built

One composition (`index.html`), two locales via the `lang` `data-composition-variables`
(EN default; HE mirrors RTL via `X()` + `.he` on `#stage`). 12s, 7 beats, single paused
GSAP timeline on `window.__timelines["root"]`. Charcoal `#review-bg` for
preview/check/snapshot only — to be hidden (`data-hidden`) before the transparent alpha
render, restored after. Settled cinematic grammar (velocity-matched hand-offs, rack focus
onto the copper checkpoint, loop-continuous camera with the push-in capped at 1.5%). **No
WebGL bloom.** Sans only on frame: Instrument Sans 600/400 (EN), Assistant 700/600 (HE),
Geist Mono for the Latin chips only — local woff2, md5-identical to `hyperframes/_fonts/`.

Animation rules composed (hyperframes-animation): `depth-of-field-blur` (the rack focus),
`svg-path-draw` (rail, sitemap halves, live path, approval check — all `pathLength=1` with
`autoRound: false`), `spring-pop-entrance` (nodes, pips, status marks), `sine-wave-loop`
in its finite-yoyo form (the film's mark, the waiting breath, the live root). The mirror is
one `rotationY` of the `#twins` group about x = 960 with `transformPerspective: 2400`.

## Beats (verified in snapshots, both locales)

| t | Beat | Reads as |
|---|---|---|
| 0.9s | Your brief (pile) | 3 chips (services · audience · languages) at odd rotations over the empty page band; rail mid-draw |
| 1.9s | Your brief | copper token at node 0; headline |
| 3.4s | Structure and copy | sitemap root + primary half; two wireframe pages (dashed media slot); copy bars writing |
| 5.0s | Design and build | the designed pages + their mirrored twins; dashed axis at x 960; twin sitemap half drawing |
| 6.3s | Films and metadata | a film frame (tiny rail + copper mark) in both home pages; pips on the brightened sitemap |
| 8.4s | **Approval peak** | rack focus: rail/nodes/sitemap defocus; A + A′ copper with check; B + B′ open marks; caption |
| 10.4s | Live in both languages | root copper; copper live path down to A and A′; B still waiting |
| 11.7s | Settled | headline held as the closing; hero/poster frame |

Transition frames were also checked (scratch, not in the repo): 2.9s (sitemap drawing, B
arriving), 4.7 / 4.8 / 4.9s (the twins swinging out from the axis in perspective — no
clipping or flattening artifacts), 5.8s (the film dropping in), 9.2s (refocus + label
hand-off).

## Gates

- `npm run check` (lint + validate + inspect): **exit 0** — `0 error(s), 19 warning(s)` ·
  `No console errors · 15 text elements pass WCAG AA` · `0 layout issues across 9
  sample(s)`. The 19 warnings: 18 × `overlapping_gsap_tweens` on `__unresolved__` and
  1 × `composition_file_too_large` (383 lines). The overlap warnings are **false
  positives**, verified rather than assumed: the static linter cannot resolve the
  helper-built selectors and reads every position as 0.00s. An in-page audit of all 84
  tweens / 116 target rows (`tl.getChildren`) found **0 real same-element /
  same-property overlaps**. Its one hit shares only GSAP-internal keys (`parent`,
  `startAt`, `delay`) between `#twins`' rotationY and opacity tweens.
- Fonts (snapshot loader + in-page `document.fonts`): EN loaded Instrument Sans 400–600 +
  Geist Mono 400; HE loaded Assistant 600 ×2 + Assistant 700 ×2. The other locale's
  families report "unloaded" because no glyph on frame maps to them — expected. No serif
  `@font-face` in `index.html`.
- Hebrew: computed `letter-spacing: normal` and `dir="rtl"` on all 10 HE text elements
  (6 headlines, caption, 3 chips). `סרטונים ו-SEO` shows correct bidi (Latin run in
  Assistant 700 latin).
- Line draws are true draws (no snap), both locales: rail dashoffset 0.875 / 0.5 / 0.195 /
  0.031 / 0 at 0.5 / 0.9 / 1.2 / 1.5 / 1.8s; primary sitemap 0.988 / 0.426 / 0 at 2.6 /
  2.9 / 3.25s; twin sitemap 0.984 / 0.265 / 0 at 4.7 / 5.0 / 5.25s; live path 0.959 /
  0.367 / 0 at 9.9 / 10.2 / 10.6s.
- Mirror: `#twins` `rotateY(23.43deg)` EN / `rotateY(-23.43deg)` HE at 4.75s; identity
  (`perspective(2400px)` only) from 5.3s.
- Loop seam: camera `scale(1) translate(0px, 0px)` at t=0 and `scale(1)
  translate(~−1e-15px, ~−1e-15px)` at t=12 (both locales). Duration 12. Every finite
  yoyo ends before the seam (film mark 11.5s, live root 11.8s).
- HE captured via the declared-default flip (`"default":"en"` → `"he"` → back); after the
  flip-back, line 5 reads `"default":"en"`, `"default":"he"` count 0, `"default":"en"`
  count 1.

## Type-floor audit (per moment, px vs floor, measured ink)

Floor v2: **headline ≥ 120 · label ≥ 80 · secondary (caption, chips) ≥ 64** on the 1920
canvas; 375px = × 0.195. "Ink" = the rendered-pixel extent scanned from the tool's own
snapshot frames (camera transform included); margins = ink to frame edges (requirement
≥ 120). Chips: canvas-measured ink (they share beat 0 with no headline).

| Moment | Locale | Font | px | Floor | @375 | Rendered ink width | Margins L / R | Verdict |
|---|---|---|---|---|---|---|---|---|
| `#lbl0` Your brief (1.9s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 571 | 680 / 669 | PASS |
| `#lbl1` Structure and copy (3.4s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 1125 | 405 / 390 | PASS |
| `#lbl2` Design and build (5.0s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 969 | 478 / 473 | PASS |
| `#lbl3` Films and metadata (6.3s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 1154 | 384 / 382 | PASS |
| `#lbl4` Your approval (8.4s, camera ×1.015) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 816 | 545 / 559 | PASS |
| `#lbl5` **Live in both languages** (10.4s; closing 11.7s) — widest EN | EN | Instrument Sans 600 | 128 | 120 | 25.0 | **1310** / 1304 | **305 / 305** · 311 / 305 | PASS |
| `#caption` Review and approve (8.4s) | EN | Instrument Sans 400 | 72 | 64 | 14.0 | 661 | 626 / 633 | PASS |
| `.chip-inner` services / audience / languages (0.9s) | EN | Geist Mono 400 | 80 | 64 | 15.6 | 383 / 387 / 435 | — (boxes 513 / 513 / 562 × 156) | PASS |
| `#lbl0` הבריף שלכם | HE | Assistant 700 | 140 | 120 | 27.3 | 671 | 629 / 620 | PASS |
| `#lbl1` מבנה וטקסט | HE | Assistant 700 | 140 | 120 | 27.3 | 687 | 622 / 611 | PASS |
| `#lbl2` עיצוב ובנייה | HE | Assistant 700 | 140 | 120 | 27.3 | 643 | 641 / 636 | PASS |
| `#lbl3` סרטונים ו-SEO | HE | Assistant 700 | 140 | 120 | 27.3 | 795 | 561 / 564 | PASS |
| `#lbl4` האישור שלכם (camera ×1.015) | HE | Assistant 700 | 140 | 120 | 27.3 | 745 | 583 / 592 | PASS |
| `#lbl5` **באוויר בשתי השפות** (10.4s; closing 11.7s) — widest HE | HE | Assistant 700 | 140 | 120 | 27.3 | **1067** / 1063 | **422 / 431** · 427 / 430 | PASS |
| `#caption` בודקים ומאשרים | HE | Assistant 600 | 80 | 64 | 15.6 | 503 | 705 / 712 | PASS |
| `.chip-inner` שירותים / קהל / שפות | HE | Assistant 600 | 88 | 64 | 17.2 | 259 / 136 / 177 | — (boxes 384 / 258 / 297 × 165) | PASS |

**Totals: 16 text moments — 16 PASS · 0 FAIL.** No "label" role exists in this film (the
chips are the node-0 sub, audited as secondary; they also clear the 80 label floor).
Sizes were chosen by measuring before authoring: EN "Live in both languages" inks 1305 at
128 (canvas) → the ≥ 120 margin would allow up to ~164px; 128 / 140 were kept to match
the sibling capability film (see judgment call 8). "One large text moment at a time": one
headline on frame at any time (0.45s out / 0.55s in cross-fade); the caption shares the
peak with `#lbl4`; the chips share beat 0 with no headline.

## Legibility

`snapshots-en/_legibility-375.png` and `snapshots-he/_legibility-375.png`: peak (8.4s) +
closing (11.7s) downscaled to 375px wide, side by side. Headline ≈ 25px EN / 27px HE,
caption ≈ 14 / 15.6px — both read. The four pages read as four frames with media, heading
and copy; approved (copper frame + filled mark + check) vs waiting (open ring) reads by
colour and shape; the copper live path from the root to both A pages reads; the rail +
six nodes read across the full width. Rebuild with `python
<scratchpad>/cap-websites/legib.py <film dir>` after any re-snapshot; ink scan:
`inkscan.py` beside it; in-page checks: `verify.mjs`, `overlaps.mjs`.

## Honesty compliance

- **Schematic** — abstract page frames (media slot, bars, status mark; no readable text,
  no browser chrome), a hairline sitemap, node marks. No product UI → **no "Sample data"
  chip**. No faces, voices, metrics, names.
- Every on-frame string traces to `src/content/studio/websites.ts` (inline `// source`
  comments with line refs in the `COPY` object; full table in DESIGN.md).
  `example.map.nodes` baked verbatim, in order (labels + the node-0 sub as chips); one
  caption from `how.steps[3].title` (the human step); the closing is the out node.
- The peak leaves page B deliberately waiting through the poster — "nothing goes live
  until you have read it in both languages", shown, not claimed.

## Judgment calls (for the owner's stills review)

1. **Four frames = two pages × two languages, 360×260** (brief: ≈ 380×260). Four frames
   side by side plus a 60px axis gap fit an 82% span only at ≤ 360 wide; 380 would leave
   30px gaps. `PAGE_W` + the `PX` centres are the constants.
2. **The mirror is a 3D unfold about the centre axis** (the twins swing out from the
   spine, `rotationY` 90° → 0 with perspective), not a 2D flip or a slide. HE uses the
   opposite sign, so the twins always swing out from the axis.
3. **Page A is approved in both languages, page B waits in both** (not "EN approved, HE
   waiting") — this keeps the closing `Live in both languages` true for what went live.
4. **Caption = `how.steps[3].title` "Review and approve"** (one line, 72 / 80px).
   Alternative: `human.items[1].desc` "Nothing goes live until you have read it in both
   languages." (`:120`) — more on-message, but 59 characters → two lines at ≥ 64px, which
   would compete with the headline at the peak. As in the precedent, the caption sits
   close to the node label (`Your approval`).
5. **The film frame drops into the home page in both languages** (one event, mirrored),
   not into one page only — a single-language film would break the mirror.
6. **"Metadata" is structural only**: the sitemap brightens and a pip lands on each
   page's drop. The node label names it; no tags or text in the frame.
7. **Status marks appear when review opens** (6.9s), not from birth — review marks
   before the pages exist would read as UI.
8. **Headline 128 EN / 140 HE**, not larger: the widest EN headline would allow ~164px,
   but the capability films read as a set, and 128 / 140 matches cap-agentic-systems. One
   constant each if the owner wants bigger.
9. **Closing = the out node's own headline, held** (no second closing element); the
   poster shows page B still waiting.
10. **Rail + nodes kept below the page band** as in the sibling films: the sitemap is the
    site's structure; the rail is the build flow the headlines name.
11. **Middle headline holds are short** (0.45–0.65s fully sharp, plus the cross-fades),
    the same rhythm as the precedent inside a fixed 12s with a 2.5s peak.

## Unverified / open

- **No render yet.** Alpha WebM / MP4 sizes are unmeasured. The `#twins` 3D rotation
  and the perspective unfold are verified in `snapshot` frames (same headless-Chrome
  capture path), not in a real render. *(Resolved in "Render v2": rendered, measured, the
  settled poster shows the mirrored layout intact in both locales.)*
- The film frame's mark motion is verified by position across stills (≈ a quarter along
  its rail at 6.3s, back at the start at 10.4s, at the far end, where its last leg rests,
  at 11.7s), not by watching playback.
- A preview in Studio (`npm run dev`) was not opened.

## Render (plan at the stills stop — DONE, see "Render v2 (2026-09-24)" below)

1. Add `data-hidden` to `#review-bg` → `npm run render -- --format webm --quality high
   --video-bitrate 3M` → transparent VP9-alpha WebM (verify `alpha_mode=1`). Restore.
2. HE via the default flip (`"default":"en"` → `"he"`, render, flip back).
3. ffmpeg: alpha WebM over `#121211` → MP4; poster from the settled frame (≈ 11.7s).
4. Outputs → `public/videos/cap-websites{,-he}.{mp4,webm}` + posters.

## Site integration (plan at the stills stop — DONE, see "Render v2 (2026-09-24)" below; the sectionTitle chosen differs, see there)

`film` block (`CapabilityFilm`) on `src/content/studio/websites.ts` (EN + HE):
sectionTitle → `example.title` ("How a site gets made" / "איך אתר נבנה"), caption →
`example.map.caption` ("Brief to live" / "מבריף לאוויר"). Not done at this stop (no `src/`
or `public/` changes). The file's header comment (`websites.ts:10–11`, "No film yet") will
need updating then.

---

## Render v2 (2026-09-24) — DONE (owner approved the stills)

Pipeline = command-center REVIEW.md "Render". A pre-render copy of `index.html` was saved
(md5 `e53296b7aa1a8afef1ed9c3abafacc93`). `#review-bg` (CSS rule, line 63, + element, line
187) removed → `npm run render -- --format webm --quality high --video-bitrate 3M`
(hyperframes 0.6.84, 5 workers) → transparent VP9-alpha WebM, EN with the declared
default `"en"` (3m 14s), HE with the default flipped to `"he"` (4m 22s). `index.html` was
then restored from the pre-render copy: **`cmp` = identical**; grep shows line 5
`"default":"en"` (`"default":"he"` count 0, `"default":"en"` count 1), line 63 `#review-bg
{ … }` and line 187 `<div id="review-bg"></div>`. `npm run check` on the restored file:
**exit 0** (0 errors, 19 benign warnings, no console errors, 15 text elements WCAG AA, 0
layout issues across 9 samples).

MP4 = each alpha WebM decoded with `libvpx-vp9` (keeps the alpha plane) and overlaid on a
`color=c=0x121211:s=1920x1080:r=30:d=12` underlay → `libx264 -preset slow -crf 23
-pix_fmt yuv420p -movflags +faststart -an`. **CRF 23** kept both locales well under the
1.5 MB cap. Poster = WebM frame 351 (t = 11.7s, the settled closing) composited over the
same `#121211` underlay → rgb24 PNG (lossless, straight from the alpha master rather than
the H.264 frame).

### Outputs (`public/videos/`, ffprobe)

| File | Codec | Size | Duration | Frames / fps | Pix fmt | Alpha | Bitrate | Budget |
|---|---|---|---|---|---|---|---|---|
| `cap-websites.mp4` | H.264 | 757,889 B (0.76 MB) | 12.000s | 360 / 30 | yuv420p | — (charcoal) | 505 kb/s | ≤ 1.5 MB ✓ |
| `cap-websites.webm` | VP9 | 4,911,447 B (4.91 MB) | 12.000s | 30 fps | yuv420p + `ALPHA_MODE=1` | yes | 3.27 Mb/s | ≤ 6 MB ✓ |
| `cap-websites-poster.png` | PNG | 157,941 B | — | t = 11.7s | rgb24 1920×1080 | — | — | — |
| `cap-websites-he.mp4` | H.264 | 637,117 B (0.64 MB) | 12.000s | 360 / 30 | yuv420p | — (charcoal) | 425 kb/s | ≤ 1.5 MB ✓ |
| `cap-websites-he.webm` | VP9 | 4,471,731 B (4.47 MB) | 12.000s | 30 fps | yuv420p + `ALPHA_MODE=1` | yes | 2.98 Mb/s | ≤ 6 MB ✓ |
| `cap-websites-he-poster.png` | PNG | 133,663 B | — | t = 11.7s | rgb24 1920×1080 | — | — | — |

`+faststart` confirmed (`moov` at byte 36 in both MP4s). Alpha confirmed with the
`libvpx-vp9` decoder: t=0 corner pixel `(0,0,0,0)` and the whole t=0 frame transparent
(2,073,600 / 2,073,600 px) in both locales; the settled frame (n=351) is ~148k px opaque,
the rest transparent (a true alpha master, not a matte).

### Loop seam (camera at identity at both ends)

Linear film + soft settle (family convention), not a crossfade — the page restarts at 0.

| Measure | EN | HE |
|---|---|---|
| t=0 MP4 frame | uniform luminance 17 (bare `#121211` after YUV rounding; min = max = 17) | same |
| Last frame (n=359, t=11.967s) edges | luminance 17 on all four edges — no exposed edge from the drift | same |
| RMSE first ↔ last (MP4; empty → settled, by design) | 0.1476 | 0.1397 |
| Poster (11.7s) ↔ last frame (lossless WebM composite) | RMSE 0.0315, mean abs diff 1.148 | RMSE 0.0295, mean abs diff 1.039 |
| Best integer shift poster → last | (1, 1) px, residual mean abs diff 0.621 | (1, 1) px, residual 0.554 |
| MP4 n=351 ↔ n=359 | RMSE 0.0279 | RMSE 0.0260 |
| Camera transform (DOM) | t=0 `scale(1) translate(0px, 0px)` · t=12 `scale(1) translate(~−1e-15px, ~−1e-15px)` | same |

The settle is stable: the poster and the last frame differ only by the sine drift's final
1px return to identity and the last 0.1s of the live root's single breath (ends 11.8s);
the film mark rests at the far end of its rail from 11.5s. Nothing is mid-motion at the
seam.

### Fonts

No orphans to prune: all six files in `assets/fonts/` (`instrument-sans-400-600-latin`,
`assistant-600-{hebrew,latin}`, `assistant-700-{hebrew,latin}`, `geist-mono-400`) are
referenced exactly once each by an `@font-face` in `index.html`. Only the referenced
files were copied from the kit at scaffold time.

### Site integration — DONE

`film` block added right after `hero` in `src/content/studio/websites.ts` (EN at line 22,
HE at line 169), shape `CapabilityFilm`:

- EN: sectionTitle `Brief to live, in motion` · caption `How a site gets made: you review
  and approve every page, and it goes live in both languages.` (18 words) · filmName
  `websites film` · `/videos/cap-websites.{webm,mp4}` + `-poster.png`.
- HE: sectionTitle `מבריף לאוויר, בתנועה` · caption `איך אתר נבנה: אתם בודקים ומאשרים
  כל עמוד, והוא עולה לאוויר בשתי השפות.` (13 words) · filmName `סרטון האתרים` ·
  `/videos/cap-websites-he.{webm,mp4}` + `-he-poster.png`.
- Caption trace: `example.title` ("How a site gets made" / "איך אתר נבנה") + the human step
  `how.steps[3]` (title "Review and approve" / "בודקים ומאשרים"; desc "You read every page
  in both languages before it goes live" / "אתם קוראים כל עמוד בשתי השפות לפני שהוא עולה
  לאוויר") + the out node `example.map.nodes[5].label` ("Live in both languages" /
  "באוויר בשתי השפות").
- sectionTitle traces to `example.map.caption` ("Brief to live" / "מבריף לאוויר") + ", in
  motion" / ", בתנועה", following the process-optimization film heading ("Scattered to
  mapped, in motion"). `example.title` is not used for the heading, because it already
  heads the page's example section.
- Header comment updated (`websites.ts:7–13`): "No film yet" → the film bakes
  `example.map.nodes` verbatim and `how.steps[3].title` as its caption; re-render if they
  change.
- **Line numbers after wiring:** the film blocks shift the traced strings. EN nodes are
  now `:112–117`, the EN caption source `:95`; HE nodes `:259–264`, the HE caption source
  `:242`. DESIGN.md's trace table uses the current numbers. The inline `// source` comments
  in `index.html` keep the render-time numbers (`:102–107`, `:85`, `:240–245`, `:223`), so
  the rendered source stays byte-identical to the pre-render copy. The strings themselves
  are unchanged.
- `npx tsc --noEmit` exit 0; `npm run build` exit 0 (31/31 static pages;
  `/studio/websites` + `/he/studio/websites` prerendered via `generateStaticParams`).
- Live dev server (port 3000): `curl -s http://localhost:3000/studio/websites | grep -c
  'cap-websites.mp4'` → **1**; `curl -s http://localhost:3000/he/studio/websites | grep -c
  'cap-websites-he.mp4'` → **1** (each page also references its `.webm` and poster, one
  `id="film"` section each). `/videos/cap-websites.mp4`, `/videos/cap-websites-he.webm`
  and `/videos/cap-websites-poster.png` served 200 at their exact byte sizes.

Intermediates stay in the film's gitignored `renders/` (the two alpha WebMs, the CRF-23
MP4s and the posters; `public/videos/` holds byte-identical copies).
