# REVIEW — "The Content Engine" (LinkedIn Content Engine film)

Status: **v2 re-cut (film spec v2). The owner approved the v2 stills; rendered (EN + HE)
and swapped in place in `public/videos/` (same filenames). The poster is the approval peak
(9.2s), by the owner's decision.** The film lives at `/offers/ai-office-assistant#content`
(poster-first, click-to-play). The sections below down to "Type-floor audit" are the **v1
record (history)**. The current cut is **"v2 2026-09-24"**, followed by **"Render v2
(2026-09-24)"**, at the end of this file.

## What was built

One composition (`index.html`), two locales via the `lang`
`data-composition-variables` (EN default; HE mirrors RTL via `X()`). 13s, 6 beats,
single paused GSAP timeline on `window.__timelines["root"]`. Charcoal `#review-bg`
for preview/check/snapshot only — hidden (`data-hidden`) before the transparent
alpha render, restored after (the charcoal MP4 is post-composited from the alpha
master). Authored under the settled cinematic grammar (velocity-matched hand-offs,
rack focus onto the copper checkpoint, loop-continuous camera). **No WebGL bloom**
(flagship-only signature).

## Beats (verified in snapshots)

| t | Beat | Reads as |
|---|---|---|
| 1.4s | Material arrives | 3 source chips (calls · projects · wins) merge into a copper token at node 0 |
| 3.2s | Angles → drafts | token advances the horizontal conveyor; node dots activate copper |
| 5.6s | Review queue | 3 abstract draft cards stack above node 3 (dot + bars, no text) |
| 8.4s | **Approval peak** | rack focus — rail/upstream/queue defocus, copper "Your approval" sharp, ring bloom, check draws, safety caption |
| 10.2s | Published on rhythm | approved token flies to node 5; 4 even copper beats land in cadence |
| 12.4s | Settled | closing "A steady LinkedIn presence"; hero/poster frame |

## Gates

- `npm run check` (lint + validate + inspect): **0 errors**, 0 layout issues across
  9 samples, no console errors, text elements pass WCAG AA. **5 benign warnings**:
  4 × `overlapping_gsap_tweens` on `__unresolved__` (helper-built selectors + the
  always-on camera-drift tween overlapping reveals on *different* elements — the same
  false positive documented for command-center / scattered-to-mapped) and 1 ×
  `composition_file_too_large`.
- **Two real bugs caught + fixed during authoring:** (1) `gsap_css_transform_conflict`
  on `#token` — the token animates `x` along the rail, so a CSS `translate(-50%,-50%)`
  would be overwritten; switched to GSAP `xPercent/yPercent`. (2) The conveyor rail
  was drawn at fixed markup coords while nodes mirror via `X()`, so in HE the first
  node floated past the rail end; rail endpoints now mirror with the nodes.
- **EN** snapshots: `snapshots/contact-sheet-en.jpg`. **HE** snapshots:
  `snapshots/contact-sheet-he.jpg` — full-axis RTL mirror confirmed (material enters
  right, flows left, rhythm ends left; Assistant font; Hebrew reads correctly — a
  transcreation, not a flipped render).

## Honesty compliance

- **Schematic** — node marks + abstract review-queue cards (dot + blank bars, no
  readable post text). No product UI → **no "Sample data" chip** (chip is the
  command-center grammar for real-UI films only).
- Zero client names, metrics, fake SaaS UI, neon, or sparkles. One bounded copper
  ring at the peak.
- Every on-frame string traces to `src/content/offers/linkedin-content-engine.ts`
  (inline `// source` comments in the timeline script; full table in DESIGN.md).

## Legibility

One large active-stage label at a time (58px → ~11px at 375px mobile); node marks,
queue cards, and rhythm beats carry meaning by structure + copper. 375px peak +
closing verified in the contact sheets.

## Render (DONE 2026-07-13 — both locales)

- `--format webm --quality high --video-bitrate 3M` → transparent VP9-alpha WebM
  (`alpha_mode=1` confirmed both locales); HE via `--variables '{"lang":"he"}'`
  (works in Git Bash; the Windows-shell caveat is PowerShell-specific). Charcoal MP4
  + settled poster (t=12.6s) ffmpeg-composited over `#121211`.
- Sizes (well under the family envelope — sparse schematic compresses hard):
  EN `.webm` 0.94 MB · `.mp4` 0.43 MB · poster 0.10 MB;
  HE `-he.webm` 0.73 MB · `-he.mp4` 0.34 MB · `-he-poster.png` 0.08 MB.
- Outputs → `public/videos/linkedin-content-engine{,-he}.{mp4,webm}` + posters.

## Site integration (DONE 2026-07-13)

`film` block (EN + HE) added to `src/content/offers/linkedin-content-engine.ts`
after `hero`; `OfferPageBody` renders it at `#film` under the hero. sectionTitle
"From material to published" (traces to `example.title`); caption traces to
`hero.lead`. No component changes.

## Type-floor audit (2026-09-24, pre-retune)

Floor (backlog/2026-09-24-studio-redesign-plan.md §2/§9): **headline moments ≥ 84px, secondary
labels ≥ 64px** on the 1920 canvas; 375px full-bleed = × 0.195. "Font now" = EN / HE. Target pair
A: Newsreader 500 (EN display) · Instrument Sans (EN body) · Frank Ruhl Libre 500 (HE display) ·
Assistant 600 (HE body) · Geist Mono unchanged. Widths are rough: chars × 0.55em (serif). The film
meets its **own** documented floor (≥ 56px, DESIGN.md → Mobile legibility) — the plan raised the
floor; DESIGN.md's "≥ 56px" must be rewritten to 84/64 in WS-D.

| Element | Locale | Font now | px | @375 | Role | Verdict | index.html |
|---|---|---|---|---|---|---|---|
| `.frag-inner` ×3 "calls / projects / wins" | EN+HE | Geist Mono 400 / Assistant 600 | 32 | 6.2 | transient pile (0.2–1.7s) | FAIL (candidate STRUCTURAL — not named in DESIGN.md's structure list) | :60-65, :155-157 |
| `.lbl` #lbl0–#lbl5 (one at a time; #lbl4 "Your approval" = peak) | EN+HE | Inter 600 / Assistant 600 | 58 | 11.3 | headline (stage) | FAIL vs 84 | :119-124, :186-191 |
| `#sub0` "calls · projects · wins" | EN+HE | Geist Mono 400 / Assistant 600 | 30 | 5.9 | label | FAIL vs 64 | :125-128, :192 |
| `#caption` "The approval point is yours" | EN+HE | Inter 400 / Assistant 600 | 38 | 7.4 | label (safety line) | FAIL vs 64 | :131-135 |
| `#closing` "A steady LinkedIn presence" | EN+HE | Inter 600 / Assistant 600 | 62 | 12.1 | headline (closing) | FAIL vs 84 | :136-140 |

**Totals: 12 text moments — 0 PASS · 12 FAIL · 0 STRUCTURAL.** Node marks, queue cards and rhythm
beats carry no text (documented structural, DESIGN.md → Mobile legibility).

Retune notes
- `.lbl` → 84 breaks the per-node anchoring (`placeLabel`, :267-271, :279; box 760, `nowrap`):
  #lbl5 "Published on rhythm" ≈ 878px centred on x=1460 → 1021–1899, **21px from the right edge**,
  with ±5px camera drift (:410) and the 1.03 push-in released only by 12.5s (:412-418) → edge-kissing
  or clipped; #lbl0 "Your material" ≈ 601px centred on 280 → **starts at −20px** (clipped). HE mirrors
  both at the opposite edge. Fix: clamp label centres to ≈ [520, 1400], or move every label to one
  centred band (ai-enablement pattern, `left:580; width:760`), or allow two lines (label top 372 vs
  rail 620, :120/:259 — there is ~200px of room).
- `#sub0` → 64 ≈ 810px centred on 280 → clipped. It repeats the three frags (:214-216): cut it and let
  the frags carry the sub, or fold it into #lbl0 as a second line.
- `.frag-inner` at 32: meaning is the merge flight into node 0 (:329-331). Either document as
  STRUCTURAL in DESIGN.md or grow to 64 (three 64 mono chips ≈ 200–330px each, stacked at x ≈ 130–240
  / y 370–470 (:283), still fit left of node 0 at x=280).
- `#caption` → 64 ≈ 950px and `#closing` → 84 ≈ 1201px (HE 1016) fit the 1920 box; closing at
  top 952 with a ~100px serif line box ends ≈ 1052 — inside 1080; no collision with the rail (620).
- Tracking −0.015em `.lbl`, −0.01em `#closing`, +0.02em `#sub0` (:122, :139, :127) — HE inherits
  them; **reset to 0 under `[dir=rtl]`**; serif ≈ 0.
- `font-family: "Inter"` is hard-coded per rule (:121, :133, :138), not only on `body` (:46); the HE
  swap is an inline style at init (:244-245). The retune needs the display/body split per element:
  `.lbl` + `#closing` → Newsreader / Frank Ruhl Libre; `#caption` + `#sub0` → Instrument Sans /
  Assistant.
- Frank Ruhl Libre 500 is visibly lighter than Assistant 600: the HE peak label "האישור שלכם" may need
  88–92 to match the EN weight impression at 375 — validate in the snapshot, don't assume.

---

## v2 2026-09-24 — film spec v2 re-cut (current; stopped at stills)

Why: the film moved from the retired `/offers/linkedin-content-engine` into the Managed AI
Office page's **"Included: your content engine"** section
(`/offers/ai-office-assistant#content`, poster-first, click-to-play). Film spec v2
(`backlog/2026-09-24-studio-redesign-plan.md`, "Film spec v2") binds every film, and this
cut matches the v2 precedent `hyperframes/cap-agentic-systems/`. **Story, beats, ids (see
below), timeline timings, single paused timeline and loop continuity carry over. Type,
scale, the route and the source trace changed.** Full spec: DESIGN.md → Type / Mobile
legibility / Layout v2 / Source of truth. The pre-retune audit above is superseded by the
v2 audit below.

### What changed (v1 → v2)

| Area | v1 | v2 |
|---|---|---|
| Route / source | `/offers/linkedin-content-engine`; `linkedin-content-engine.ts` `example.map` (file deleted) | `/offers/ai-office-assistant#content`; `ai-office-assistant.ts` → `included` (intro, 4 items, film caption) |
| Type on frame | Inter 600/400 + Geist Mono (EN), Assistant 600 (HE); `font-family:"Inter"` per rule + inline HE swap | **sans only**: Instrument Sans 600/400 (EN), Assistant 700/600 (HE), Geist Mono for the Latin chips only; `.he` class on `#stage`; no Inter / serif `@font-face` |
| Headlines | 58px, each anchored above its node (760px box) | **128px EN / 140px HE**, one centred band (top 200) |
| Caption | 38px `The approval point is yours` | **72px EN / 80px HE** `Nothing publishes without your approval` |
| Closing | separate `#closing` 62px `A steady LinkedIn presence` | **`#lbl5` held as the closing**; `#closing` removed |
| Node-0 sub | `#sub0` 30px + chips 32px `calls · projects · wins` | chips only, **80px EN / 88px HE** `writing · calls · positions`; `#sub0` removed |
| Rail | x 230 → 1520 (1290px), stroke 3, snapped on at ~1.0s | **x 185 → 1735 (1550px)**, stroke 4, draws 0.1 → 1.7s |
| Nodes / token | 30 / 42px | **40 / 48px** |
| Review queue | 3 × 232×50, 2 bars, translucent, stacked above node 3 | **deck of 3 × 560×150** (560 / 516 / 472 wide), 3 bars, opaque, 30px lips, over node 3 |
| Peak | check drawn on node 4; queue defocused | **front draft travels to below node 4**, warms copper + check; the rest of the queue advances one slot and waits (lighter defocus) |
| Ring / check | 122px / 46px on the node | 164px / 80px on the approved draft |
| Rhythm | 4 × 20px right of node 5 (x 1552 → 1774, pitch 74) | **4 × 40px below the out end** (x 1231 → 1675, pitch 148, y 765) |
| Camera | push-in 1.03 | **1.015** (drift ≤ 1.5%) |

Ids: every v1 id is kept (`frag1–3`, `fragt1–3`, `n0–n5`, `qc0–2`, `token`, `appr-ring`,
`appr-check`, `b0–b3`, `lbl0–lbl5`, `caption`, `rail`, `rail-svg`, `camera`, `review-bg`)
except `#sub0` and `#closing`, whose strings no longer trace to the site. `#appr-check` moved
inside `#qc0`. `#appr-ring` moved beneath the cards and the `qc*` DOM order reversed (back to
front) for painting.

### Gates

- `npm run check` (lint + validate + inspect), EN default: **exit 0**. Tail:
  `◇  0 error(s), 14 warning(s)` · `◇  No console errors · 15 text elements pass WCAG AA` ·
  `◇  0 layout issues across 9 sample(s)`. The 14 warnings: 13 × `overlapping_gsap_tweens` on
  `__unresolved__` (helper-built selectors and array targets on *different* elements; the new
  one at 7.50–8.25s is the two rack-focus arrays `UPSTREAM` / `WAITING`, which are disjoint)
  and 1 × `composition_file_too_large` (310 lines). Same benign class as v1 and the precedent.
- `npm run check` with the default flipped to `"he"`: **exit 0**, same counts (0 errors, 15
  text elements WCAG AA, 0 layout issues).
- Fonts (snapshot loader): EN loaded Instrument Sans 400–600 + Geist Mono 400; HE loaded
  Assistant 600 ×2 + Assistant 700 ×2. The other locale's families report "unloaded" because
  no glyph on frame maps to them (expected). Grep: no `Inter`, `Newsreader` or `Frank Ruhl` in
  `index.html` (only `sans-serif` fallbacks match "serif").
- Hebrew (headless-Chrome probe, `getVariables` → `{lang:"he"}`): computed `letter-spacing:
  normal` and `dir="rtl"` on all 10 HE text elements (6 headlines, caption, 3 chips); no `dir`
  on `<html>`; `#stage.he`.
- HE captured via the declared-default flip (`"default":"en"` → `"he"` → back). After the
  flip-back, line 5 reads `"default":"en"`; `"default":"he"` count 0.

### Defects caught in the v2 stills and fixed

1. **A sliver of a back card's top bar peeked over the front card's edge** (deck lip 36px >
   the 34px inset of a card's bars). Lip → 30px; zoom-verified clean at 6.3s and 12.7s.
2. **The waiting queue vanished at the peak** under the full rack defocus (9px / 0.4), so "one
   approved, the rest waiting" did not read. The waiting cards now take a shallower defocus;
   rail + nodes 0–3 keep 9px / 0.4. *(Amended at render: the stills used 4px / opacity 0.6,
   which let the back card show through the front one. The final dim is 4px +
   `brightness(0.7)` at opacity 1. See "Render v2" → Deviation.)*
3. The `calls` chip's corner touched `positions`: nudged x 970 → 1000.
4. **The rail never drew (latent since v1)**, the same CSSPlugin auto-round bug fixed in
   cap-agentic-systems: `strokeDashoffset` over `pathLength="1"` snapped 1 → 0. Fixed with
   `autoRound: false`; the 0.9s frame now shows the rail mid-draw.

### Type-floor audit v2 (per moment, px vs floor, measured ink)

Floor v2: **headline ≥ 120 · label ≥ 80 · secondary (caption, chips) ≥ 64** on the 1920
canvas; 375px = × 0.195. "Ink" = rendered-pixel extent scanned from the tool's own snapshot
frames (camera transform included); margins = ink to frame edge (requirement ≥ 120). Chips:
text ink inside each chip + the DOM box.

| Moment | Locale | Font | px | Floor | @375 | Rendered ink width | Margins L / R | Verdict |
|---|---|---|---|---|---|---|---|---|
| `#lbl0` Your material (1.9s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 775 | 574 / 571 | PASS |
| `#lbl1` Angles proposed (3.1s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 998 | 464 / 458 | PASS |
| `#lbl2` Drafts in your voice (4.3s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 1116 | 409 / 395 | PASS |
| `#lbl3` Review queue (6.3s) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 808 | 559 / 553 | PASS |
| `#lbl4` Your approval (9.2s, camera ×1.015) | EN | Instrument Sans 600 | 128 | 120 | 25.0 | 815 | 545 / 560 | PASS |
| `#lbl5` **Published on rhythm** (12.7s, closing), widest EN | EN | Instrument Sans 600 | 128 | 120 | 25.0 | **1213** | **354 / 353** | PASS |
| `#caption` Nothing publishes without your approval (9.2s) | EN | Instrument Sans 400 | 72 | 64 | 14.0 | 1339 | 286 / 295 | PASS |
| `.frag-inner` writing / calls / positions (0.9s) | EN | Geist Mono 400 | 80 | 64 | 15.6 | 340 / 234 / 433 (text ink) | boxes 463 / 364 / 562 × 156 | PASS |
| `#lbl0` החומר שלכם | HE | Assistant 700 | 140 | 120 | 27.3 | 689 | 620 / 611 | PASS |
| `#lbl1` זוויות מוצעות | HE | Assistant 700 | 140 | 120 | 27.3 | 717 | 605 / 598 | PASS |
| `#lbl2` **טיוטות בקול שלכם**, widest HE | HE | Assistant 700 | 140 | 120 | 27.3 | **989** | **472 / 459** | PASS |
| `#lbl3` תור אישורים | HE | Assistant 700 | 140 | 120 | 27.3 | 649 | 636 / 635 | PASS |
| `#lbl4` האישור שלכם (camera ×1.015) | HE | Assistant 700 | 140 | 120 | 27.3 | 745 | 583 / 592 | PASS |
| `#lbl5` מתפרסם בקצב (closing) | HE | Assistant 700 | 140 | 120 | 27.3 | 824 | 547 / 549 | PASS |
| `#caption` שום דבר לא מתפרסם בלי אישור שלכם | HE | Assistant 600 | 80 | 64 | 15.6 | 1160 | 376 / 384 | PASS |
| `.frag-inner` כתיבה / שיחות / עמדות | HE | Assistant 600 | 88 | 64 | 17.2 | 205 / 201 / 217 (text ink) | boxes 328 / 321 / 342 × 165 | PASS |

**Totals: 16 text moments: 16 PASS, 0 FAIL.** No "label" role exists in this film (the chips
are the node-0 material, audited as secondary; they also clear the 80 label floor in both
locales). "One large text moment at a time": one headline on frame at any time (0.45s out /
0.55s in cross-fade); the caption shares the peak with `#lbl4` and 9.75–11.0s with `#lbl5`;
the chips share beat 0 with no headline except the 1.4–1.8s hand-off, where they shrink and
blur into node 0 as `#lbl0` enters (0 layout issues).

### Legibility

`snapshots-en/_legibility-375.png` and `snapshots-he/_legibility-375.png`: peak (9.2s) +
closing (12.7s) downscaled to 375px wide, side by side on charcoal. Headline ≈ 25px EN /
27px HE, caption ≈ 14 / 15.6px (v1: 11.3 / 7.4). The approved draft (copper + check) vs the
waiting queue (grey, open dot) reads by colour and shape; the rhythm reads as four copper
dots; the rail and six nodes read across the full width. Rebuild: `python
<scratchpad>/lce-v2/legib.py <film dir>` (PIL: open both frames, resize to 375 wide, paste
side by side). Ink scans: `inkscan.py` / `chipscan.py` beside it.

### Loop seam (stills; the rendered-MP4 check is part of step 2)

- Camera (DOM): t=0 untransformed; t=13 `scale(1) translate(-1.2e-15px, -1.5e-15px)`
  (identity), in both locales. Duration 13 (`tl.duration()` and root `data-duration`).
- t=0 frame: uniform luminance 18 (bare `#121211`, the film opens empty by design; the first
  chip enters at 0.2s, so no empty opening beyond 0.6s to trim).
- Settled 12.7s vs the t≈13 frame: mean abs diff 0.669; best integer shift (+1, +1) px,
  residual 0.252. Only the sine drift's final return to identity differs, and nothing is
  mid-tween at the seam (the rhythm breath ends at 12.65s). All four edges of the tail frame
  stay charcoal (no exposed edge from the drift).

### Stills (v2)

- EN: `snapshots-en/contact-sheet.jpg` (8 beats) + `frame-05-at-9.2s.png` (peak) +
  `frame-07-at-12.7s.png` (closing) + `_legibility-375.png`.
- HE: `snapshots-he/contact-sheet.jpg` + the same frames + `_legibility-375.png`.
- v1 stills and the v1 `index.html` / docs were moved to the session scratchpad
  (`lce-v2/v1-snapshots/`, `lce-v2/index.v1.html`), not kept in the repo.

### Judgment calls (v2, for the owner's review)

1. **Closing = the out node's headline, held** (`Published on rhythm`), as in
   cap-agentic-systems. `A steady LinkedIn presence` no longer exists on the site. Alternative:
   a separate closing `Your content engine` / `מנוע התוכן שלכם` from the section title
   (`:153` / `:394`), but it would repeat the heading right above the film.
2. **Chips re-traced to the Voice profile's inputs**: `writing · calls · positions` (`:159`;
   HE stems of `:400`). `projects` and `wins` are gone from the site.
3. **Caption = the film caption's own clause**, `Nothing publishes without your approval`
   (`:185`). This is a full sentence; the intro's `nothing published without your approval`
   is a list fragment.
4. **Near-matches kept**, per the brief's trace: `Published on rhythm` ← "Publishing rhythm";
   HE `זוויות מוצעות` ← "זוויות שמוצעות", `האישור שלכם` ← "אישור שלכם", `מתפרסם בקצב` ← "קצב
   פרסום". The strictly verbatim alternatives are `Publishing rhythm` / `קצב פרסום`.
5. **The approved draft lands below the rail under node 4.** A 560px card above node 4
   would overlap a deck centred on node 3 by ~270px. The rest of the queue advances one slot
   and stays waiting through the poster, so the peak reads as one approved draft with two
   still waiting.
6. **Rhythm below the out end, not right of node 5.** The rail now reaches x 1735, which
   leaves no room right of node 5. The beats land in reading order where the approved draft
   sat, and the last one lands under node 5.
7. **Headlines at the family size (128 / 140), not maximised.** The widest ink (EN 1213,
   HE 989) would allow up to ~175px EN before hitting the 120px margin. 128 / 140 keeps the
   type scale identical across films; changing it means editing one constant each.
8. **Camera push-in capped at 1.015** (spec: drift ≤ 1.5%); v1 used 1.03.
9. **Poster: resolved. The owner chose the peak (9.2s).** Original note: the family poster is the settled tail (12.7s) with
   `Published on rhythm`, the waiting queue and the rhythm. The approval caption leaves at
   11.0s, so it is not on the poster. Because this film is click-to-play, the poster is what
   visitors read first. Alternatives: hold the caption through the tail, or poster the peak
   (9.2s).

### Unverified / open

- *(Resolved in "Render v2": rendered, sizes measured, rendered-MP4 seam checked, assets
  swapped, orphaned fonts pruned.)*
- The snapshot tool labels frames to one decimal; the "t≈13" seam frame was requested at
  12.97s and labelled 13.0s. Whether the tool rounds the seek itself is unverified; either
  way the camera is at identity by 12.5s.

---

## Render v2 (2026-09-24) — DONE (owner approved the v2 stills)

Pipeline = command-center REVIEW.md "Render" (hyperframes 0.6.84). A pre-render copy of
`index.html` was saved, then `#review-bg` was removed (CSS rule line 61 + element line 159).
Render: `npm run render -- --format webm --quality high --video-bitrate 3M --output
renders/v2-en.webm` (declared default `"en"`), then the default was flipped to `"he"` →
`renders/v2-he.webm`. `index.html` was then restored from the copy: **`cmp` identical**; grep
after the restore shows line 5 `"default":"en"` (`"default":"he"` count 0), line 61
`#review-bg { … }` and line 159 `<div id="review-bg"></div>`.

MP4 = each alpha WebM decoded with `libvpx-vp9` (keeps the alpha plane) and overlaid on a
`color=c=0x121211:s=1920x1080:r=30:d=13` underlay → `libx264 -preset slow -crf 23 -pix_fmt
yuv420p -movflags +faststart -an`. **CRF 23** held both locales far under the 1.5 MB cap, so
no CRF raise was needed. The WebMs came in under 6 MB directly, so no re-encode was needed.
**Poster = the approval peak, by owner decision:** frame 276 (t = 9.2s) of each alpha WebM,
composited over `#121211` in RGB (`overlay=format=rgb`, `select=eq(n,276)`, rgb24 PNG), not
the family's settled tail frame. On frame: `Your approval` / `האישור שלכם`, the approved draft
(copper + check), the waiting queue, and the caption `Nothing publishes without your
approval` / `שום דבר לא מתפרסם בלי אישור שלכם`.

### Deviation: one post-approval fix (render blocker on the poster frame)

The first render's 9.2s poster showed the waiting queue's **back card ghosting through the
front card**: two offset dots and an extra bar. Cause: the waiting cards were dimmed with
per-card `opacity: 0.6`, and overlapping cards at partial opacity show each other through
their faces. The ghost was already in the approved stills, but too small to notice at
contact-sheet scale; on the full-size poster it was obvious.
Fix: the cards dim with `filter: blur(4px) brightness(0.7)` at opacity 1 (`fromTo` with
`immediateRender: false`; the refocus returns them to `blur(0px) brightness(1)`), so the
design intent is unchanged. Verified with an out-of-order seek probe (0 → 12.99; opacity
stays 1, filter deterministic), a zoomed peak crop in both locales (one dot, three bars, a
clean lip), `npm run check` exit 0, and a re-snapshot of both locales (`snapshots-{en,he}/`
and `_legibility-375.png` refreshed; peak headline/caption ink unchanged: EN 815 / 1339, HE
745 / 1160). Both locales were then **re-rendered from scratch** (the defective first renders
were deleted); the numbers below are from the second render. Lint now reports 15 warnings
(one more benign `overlapping_gsap_tweens`: the refocus is now two tweens on the disjoint
`UPSTREAM` / `WAITING` arrays).

### Outputs (`public/videos/`, ffprobe with `-count_frames`)

| File | Codec | Size | Duration | Frames / fps | Pix fmt | Alpha | Bitrate | Budget |
|---|---|---|---|---|---|---|---|---|
| `linkedin-content-engine.mp4` | H.264 | 637,881 B (0.64 MB) | 13.000s | 390 / 30 | yuv420p | — (charcoal) | 393 kb/s | ≤ 1.5 MB ✓ |
| `linkedin-content-engine.webm` | VP9 | 4,648,155 B (4.65 MB) | 13.000s | 390 / 30 | yuv420p + `ALPHA_MODE=1` | yes | 2.86 Mb/s | ≤ 6 MB ✓ |
| `linkedin-content-engine-poster.png` | PNG | 165,940 B | — | t = 9.2s (frame 276) | rgb24 1920×1080 | — | — | — |
| `linkedin-content-engine-he.mp4` | H.264 | 511,787 B (0.51 MB) | 13.000s | 390 / 30 | yuv420p | — (charcoal) | 315 kb/s | ≤ 1.5 MB ✓ |
| `linkedin-content-engine-he.webm` | VP9 | 4,082,977 B (4.08 MB) | 13.000s | 390 / 30 | yuv420p + `ALPHA_MODE=1` | yes | 2.51 Mb/s | ≤ 6 MB ✓ |
| `linkedin-content-engine-he-poster.png` | PNG | 140,755 B | — | t = 9.2s (frame 276) | rgb24 1920×1080 | — | — | — |

v1 → v2 sizes: EN mp4 0.45 → 0.64 MB, webm 0.99 → 4.65 MB; HE mp4 0.36 → 0.51 MB, webm
0.76 → 4.08 MB. The larger v2 elements and the peak blur cost bits, in line with
cap-agentic-systems (4.64 / 4.12 MB WebM). `+faststart` confirmed (`moov` in the first 64
bytes of both MP4s). Alpha confirmed with the `libvpx-vp9` decoder: the t=0 frame's alpha
channel is 0 everywhere (extrema (0, 0), corner `(0,0,0,0)`) in both locales. Each
published file is `cmp`-identical to its `renders/v2-*` source.

### Loop seam (rendered MP4)

Linear film + soft settle (family convention), not a crossfade; the page restarts at 0.

| Measure | EN | HE |
|---|---|---|
| First frame (t=0) | uniform luminance 17 (bare `#121211` after YUV rounding; min = max = 17) | same |
| Last frame (389, t=12.967s) edges | luminance 17 on all four edges (no edge exposed by the drift) | same |
| RMSE first ↔ last (empty → settled, by design) | 0.1301 (mean abs 6.27) | 0.1155 (mean abs 5.14) |
| Last two frames (388 ↔ 389) | RMSE 0.0027, mean abs 0.066 | RMSE 0.0031, mean abs 0.066 |
| 12.7s (381) ↔ last frame | RMSE 0.0217, mean abs 0.652 | RMSE 0.0167, mean abs 0.450 |
| Camera transform (DOM) | t=0 untransformed · t=13 `scale(1) translate(~1e-15px, ~1e-15px)` | same |

The tail is at rest: the last two frames differ by less than 0.07 levels on average, so
nothing is mid-tween at the seam (the rhythm breath ends at 12.65s).

### Fonts pruned

Removed with plain `rm` (0 references in `index.html`): `inter-400.woff2`, `inter-600.woff2`
(tracked in git, so recoverable from history), `newsreader-500-latin.woff2`,
`frank-ruhl-libre-500-{hebrew,latin}.woff2` (untracked; byte-identical to
`hyperframes/_fonts/`, verified by md5 before removal). Kept (each referenced once):
`instrument-sans-400-600-latin`, `assistant-600-{hebrew,latin}` (HE caption + chips),
`assistant-700-{hebrew,latin}` (HE headlines), `geist-mono-400` (EN chips). No Assistant file
was orphaned.

### Gate after render (restored master, `#review-bg` in place, fonts pruned)

`npm run check`: **exit 0**. `◇  0 error(s), 15 warning(s)` · `◇  No console errors · 15
text elements pass WCAG AA` · `◇  0 layout issues across 9 sample(s)`.

### Site check (dev server, port 3000; no code change)

- `curl -sI http://localhost:3000/videos/linkedin-content-engine.mp4` → `Content-Length:
  637881` (the new EN MP4, byte-exact); `-he.mp4` → `Content-Length: 511787`.
- `curl -s http://localhost:3000/offers/ai-office-assistant | grep -c
  'linkedin-content-engine-poster.png'` → **1**; the HE page
  (`/he/offers/ai-office-assistant`) references `linkedin-content-engine-he-poster.png` → **1**.

Intermediates stay in the film's gitignored `renders/` (`v2-{en,he}.{webm,mp4}`,
`v2-{en,he}-poster.png`). The v1 intermediates (`ce-*`) are untouched.
