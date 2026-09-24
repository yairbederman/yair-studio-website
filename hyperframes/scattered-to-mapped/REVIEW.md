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

## Hebrew locale (Phase E — DONE 2026-07-13)

Made bilingual (`lang` variable). Approach: **`scaleX(-1)` container mirror** +
inner-`.t`-span un-flip (see DESIGN.md → Locales) rather than the `X()` retrofit —
this film hard-codes left-origin px in markup/CSS/JS flight vectors with
variable-width text, so a geometric mirror is more robust than per-coordinate
measurement (font-race-free) and reflects the GSAP flights uniformly.

- **EN parity gate: PSNR = ∞ (pixel-identical)** vs the committed EN at frames
  1.4/5.0/8.5/12.7 — EN is **not** re-rendered; the committed `scattered-to-mapped.*`
  assets stand.
- `npm run check`: **0 errors, 0 layout issues.** 65 contrast warnings are cosmetic
  — the checker now sees the inner `.t` spans on intentionally-dimmed/opacity-0 text
  (resolved ledger → fg-3, flown-away chips) and does not resolve ancestor opacity;
  EN-parity proves the render is unchanged.
- HE snapshots verified (spine left, ledger right; Hebrew reads correctly incl. RTL
  "?" on chips; copper approval peak). Assistant 600 font; camera pivot mirrored.
- **Render:** `--format mov` master → ffmpeg charcoal H.264 MP4 (matched ~800 kbps)
  + poster; VP9 alpha WebM via `--format webm`. **The MP4/poster MUST come from the
  MOV, not the VP9 WebM** — VP9 bands the `#spine-glow` gradient (see DESIGN.md gotcha).
  Sizes: `-he.mp4` 1.32 MB · `-he-poster.png` 0.15 MB (matches the EN pair);
  `-he.webm` re-encoded in E3 (see below).
- **Site:** HE `film` block wired into `home.ts` → `he.evidence` (the "No film yet"
  comment removed); `EvidenceSection` renders it above the before/after compare.
  Verified on `/he`: film loads (readyState 4), `dir=rtl`, assets 200, no console errors.

## WebM re-encode (Phase E3 — DONE 2026-07-13)

Both scattered alpha WebMs were the two heaviest on the site, so they were re-encoded
tighter (2-pass VP9, `-b:v 2.8M`, from the shipped WebM) with an **SSIM parity gate**
(both composited over charcoal, where the `#spine-glow` is most sensitive):

- EN `.webm` **7.16 → 4.45 MB** (−38%), SSIM 0.981.
- HE `-he.webm` **7.27 → 4.37 MB** (−40%), SSIM 0.982.

`alpha_mode=1` preserved on both. Parity is vs the **original WebM** (the fair
comparison): VP9 already bands the smooth `#spine-glow` in both the old and new WebMs
(a pre-existing limitation — the clean glow lives in the MP4/poster, derived from the
MOV master), and the re-encode does not worsen it (frame-diff + SSIM confirm). WebM is
the mp4-first **fallback**, so this trims a rarely-served payload with no visible
regression. MP4s + posters untouched (already lean).

## Type-floor audit (2026-09-24, pre-retune)

Floor (backlog/2026-09-24-studio-redesign-plan.md §2/§9): **headline moments ≥ 84px, secondary
labels ≥ 64px** on the 1920 canvas; 375px full-bleed = × 0.195. "Font now" = EN / HE (HE forces
Assistant on everything under `#mirror`, :141). Target pair A: Newsreader 500 (EN display) ·
Instrument Sans (EN body) · Frank Ruhl Libre 500 (HE display) · Assistant 600 (HE body) · Geist Mono
unchanged. Widths are rough: chars × 0.55em (serif). **DESIGN.md has no Mobile-legibility section**
(only the "Type:" line, :53-55), so nothing here is documented STRUCTURAL — every verdict is
against the plan floor.

| Element | Locale | Font now | px | @375 | Role | Verdict | index.html |
|---|---|---|---|---|---|---|---|
| `.cap` #cap-before "Before" / #cap-mapped "Mapped workflow" | EN+HE | Geist Mono 400 / Assistant 600 | 15 | 2.9 | label (section caps) | FAIL | :47-53, :159-160 |
| `.led` #led0–3 (the four before-items, verbatim) | EN+HE | Inter 400 / Assistant 600 | 25 | 4.9 | label (content) | FAIL | :56-61, :163-166 |
| `.chip` ×6 (email · chat · call · status? · follow-up? · what is open?) | EN+HE | Geist Mono 400 / Assistant 600 | 16 | 3.1 | texture (contractions) | FAIL | :71-78, :182-187 |
| `.node .label` #n0–#n5 (#n4 "Human approval" = peak) | EN+HE | Inter 600 / Assistant 600 | 30 | 5.9 | label; #n4 is the peak | FAIL | :113-116, :194-205 |
| `.node .sub` #n0 "email · chat · call" | EN+HE | Geist Mono 400 / Assistant 600 | 16 | 3.1 | sub-label | FAIL | :117-120, :198 |

**Totals: 19 text moments — 0 PASS · 19 FAIL · 0 STRUCTURAL.** The film has **no headline-floor
moment at all**; its peak text is a 30px node label.

Retune notes
- Biggest restructure of the five. The grammar (ledger + chaos + spine all on frame at once) cannot
  host 19 moments at ≥ 64. Two honest routes: **(a)** keep the geometry, document `.chip` ×6 and
  `.cap` ×2 as STRUCTURAL texture in DESIGN.md (meaning is in the flight; caps duplicate the site's
  panel captions), cut `.node .sub`, make the six node labels the readable moments at 64 with `#n4`
  promoted to 84 as the peak headline; **(b)** one large label at a time above/beside the active
  node (linkedin-content-engine pattern) and the spine kept as dots only.
- Node labels at 64 overflow the frame: "Owner + due date assigned" ≈ 880px from x = 1330 + 22 gap
  (:33, :102) → right edge ≈ **2232px, 312px past the canvas**; HE (scaleX(−1) mirror, :140) hits the
  left edge the same way. Either move `--rail-x` to ≤ ~960 (the chaos field 660–1260 must then shift
  or shrink) or wrap labels to two lines (`white-space: normal`; node pitch 144px (:280) holds
  2 × 64px lines only at line-height ≤ 1.1).
- Ledger at 64: "Requests arrive by email, chat, and calls" ≈ **1443px** from x=130 — runs through the
  chaos field and the spine. It cannot grow in place: two-line 64 items in a ~600px column (4 × 2
  lines ≈ 560px of height, tight against the 168–888 spine band), or keep only the two shortest
  items, or leave the ledger STRUCTURAL because the verbatim pains sit on the page beside the film —
  owner decision at the stills stop.
- Chip flights are hard-coded pixel vectors (:336-338, :345, :350, :375) and the ledger jitter uses
  fixed x offsets (:304-307): any rail/ledger move must re-derive every dx/dy (chip rest → node dot).
- `.he #mirror *` forces Assistant on every element (:141); the retune needs a display selector
  (`.he .node .label` → Frank Ruhl Libre) that wins under that rule.
- Tracking −0.01em labels, −0.005em ledger, +0.08em caps, +0.04em chips (:49, :58, :73, :114, :119)
  — HE inherits all of them; **reset to 0 under `.he`** (Hebrew is never letter-spaced, plan §7).
- `.node .label` is fg-3 until activation (:115, :289): at 64 in the serif the muted grey reads heavy
  and `npm run check` already flags 65 cosmetic contrast warnings here — re-check at the new size.

## Retune 2026-09-24 (WS-D) — composition retuned, stopped at stills (no render)

Film moved to `/studio/process-optimization`; type swapped to Pair A; type floor met. Story, ids,
timeline structure, 13 s duration, single paused timeline, cinematic grammar (velocity-matched
transitions, one rack focus onto the copper checkpoint, loop-continuous camera) all kept.
Pre-retune composition: git `HEAD` `index.html`. **Step 2 (render EN+HE, MP4 + poster, WebM) is
pending owner review of the stills.**

### What changed

| Area | Change |
|---|---|
| Type | Inter → Newsreader 500 (EN display) + Instrument Sans 400/600 (EN ledger/labels); HE → Frank Ruhl Libre 500 (display) + Assistant 600 (everything else), **explicit per role** (`.he .cap`, `.he #n4 .label`, `.he .led/.chip/.node .label/.node .sub`) — the blanket `.he #mirror *` rule is gone; `letter-spacing: 0` under `.he` on every tracked class. Geist Mono stays for Latin chips + sub only. `@font-face` blocks verbatim from `hyperframes/_fonts/LICENSE.md`. |
| Sizes | caps 15 → **84** (headline); node labels 30 → **64**, `#n4` (peak) → **84** in the display face; ledger 25 → 28 (structural); chips 16 → 22; sub 16 → 24. |
| Geometry | rail `1330` → **1000**, node pitch 144 → **132** (y 300→960; an 84 cap clears the first label), chaos field `660–1180` → `~560–960`, ledger column x 120. All in JS constants (`RAIL_X`, `NODE_Y`, `CHIP_BOX`, `CHIP_REST`, `CHIP_TARGET`) → CSS vars + inline positions at init; `fly()` derives every flight vector (the six hard-coded dx/dy pairs are gone). Chips sit centred in fixed 240×56 drift boxes so the flight origin is text-width-independent. |
| Copy | headlines are now `Before the map` (verbatim prefix of `example.intro`) and `Mapped workflow` (`example.map.caption`); ledger = the four intro clauses (EN sentence-cased, HE verbatim); nodes verbatim. Sources re-traced to `process-optimization.ts` (table below). |
| Beats | **headline hand-off** at 2.9–3.6 s (`Before the map` exits upward as `Mapped workflow` rises); at the peak `Mapped workflow` dims to 0.45 with the rack focus and restores at the settle. No other timing moved. |
| Review scaffolding | `#review-bg` (charcoal, inside `#camera`) added for `check`/`snapshot` — remove before render, restore after (command-center convention). `#chaos` also carries `data-layout-allow-overlap`. |

### Ledger route — (c), and why

The four clauses cannot meet the floor in place: the longest is already 503 px at 28 px
(`:120→622`), the chaos field starts at ~560 and the spine column needs 1000→1821 for
`Owner + due date assigned` at 64. Route (a) (two at a time) and (b) (cut to two) both break the
one-pain-per-node resolution map that *is* the film. So the ledger stays a **structural**
strike-through gesture and the plan's "one large before moment" is the **`Before the map`** headline
(84). At 375 px the film reads: BEFORE THE MAP → MAPPED WORKFLOW → each step lighting up → HUMAN
APPROVAL in copper → TRACKED TO DONE; the struck list is texture.

### Per-moment sizes vs the floor (EN and HE identical px; @375 = × 0.195)

| Moment | Element | EN font | HE font | px | @375 | Floor | Verdict |
|---|---|---|---|---|---|---|---|
| `Before the map` | `#cap-before` | Newsreader 500 | Frank Ruhl Libre 500 | 84 | 16.4 | 84 | **PASS** |
| `Mapped workflow` | `#cap-mapped` | Newsreader 500 | Frank Ruhl Libre 500 | 84 | 16.4 | 84 | **PASS** |
| `Human approval` (peak) | `#n4 .label` | Newsreader 500 | Frank Ruhl Libre 500 | 84 (≈ 89 at the ×1.06 peak) | 16.4 | 84 | **PASS** |
| 5 node labels | `#n0–#n3, #n5 .label` | Instrument Sans 600 | Assistant 600 | 64 | 12.5 | 64 | **PASS** |
| `email · chat · call` | `#n0 .sub` | Geist Mono 400 | Assistant 600 | 24 | 4.7 | — | STRUCTURAL |
| Ledger ×4 | `.led` | Instrument Sans 400 | Assistant 600 | 28 | 5.5 | — | STRUCTURAL |
| Chips ×6 | `.chip` | Geist Mono 400 | Assistant 600 | 22 | 4.3 | — | STRUCTURAL |

**19 text moments: 8 PASS · 11 STRUCTURAL · 0 FAIL** (was 0 · 0 · 19 in the audit above).
Structural roles are documented in DESIGN.md → "Mobile legibility". Computed values were read
from the running composition (font-size, family, `letter-spacing: normal` under `.he`) — not
inferred from the CSS.

### Trace table (`src/content/studio/process-optimization.ts`)

| String | EN | HE |
|---|---|---|
| `Before the map` / `לפני המפה` | `:114` (`example.intro`, before the colon) | `:275` |
| `Mapped workflow` / `תהליך ממופה` | `:116` (`example.map.caption`) | `:277` |
| Ledger ×4 | `:114` clauses, sentence-cased | `:275` clauses, verbatim |
| Node labels + sub | `:119-124` (`example.map.nodes`) | `:280-285` |
| Chips ×6 | contractions of `:114` / `:119` sub | contractions of `:275` / `:280` sub |
| Film caption (page only) | `:36-37` | `:197-198` |

### Gates at the stills stop

- `npm run check` (lint → validate → inspect, pinned `hyperframes@0.6.84`): **exit 0** —
  `0 error(s), 3 warning(s)` · `No console errors · 95 text elements pass WCAG AA` ·
  `0 layout issues across 9 sample(s)`. Warnings: the two `overlapping_gsap_tweens` on
  `__unresolved__` (the pre-existing helper-selector false positives, see Validation above) and
  `composition_file_too_large` (303 lines; benign).
- Geometry evidence (settled 12.8 s, EN): `Owner + due date assigned` box `1029→1821`
  (`1845` under the 1.03 push-in + drift, inside the canvas); HE longest label starts at `194`.
  `Mapped workflow` `1029→1729`; `Human approval` `1029→1669` (peak, scaled: `1024→1723`).
- Chip landings (chip centre − dot centre at the end of each flight, both locales): dx = 0 for all
  six; dy = 0 except `status?` (−11) and `what is open?` (−10) = the wrapper drift at landing time
  (unchanged behaviour; the chip has dissolved to opacity 0 by then).
- **Loop seam:** camera transform is identity at both ends (`t=0`: CSS default;
  `t=13`: `scale(1) translate(-1.2e-15px, -1.5e-15px)`). Content is a **linear film + soft settle**
  (family convention, unchanged): first frame = empty charcoal (`mean 0.070` ≈ `#121211`), last
  frame = the settled map — RMSE first↔last 0.132 (EN) / 0.100 (HE), not a crossfade. Settle is
  stable: 12.8 s ↔ 12.99 s RMSE 0.027 (EN) / 0.021 (HE).
- HE: mirror confirmed (spine left, ledger right), Frank Ruhl Libre on both display moments,
  Assistant elsewhere, trailing `?` at the visual left of the Hebrew chips.
- Stills: `snapshots-en/contact-sheet.jpg`, `snapshots-he/contact-sheet.jpg` (10 frames:
  0 · 1.6 · 3.6 · 5.0 · 6.9 · 9.3 · 11.2 · 12.0 · 12.8 · 12.99); 375 px composites
  `snapshots-en/_legibility-375.png`, `snapshots-he/_legibility-375.png` (peak + closing, side by
  side). Both dirs are gitignored.

### Judgment calls

- Node labels are the sans (Instrument Sans 600 / Assistant 600) and only the peak label is set in
  the display face — the serif at 64 in muted grey reads heavy (audit note), and a serif copper
  `Human approval` among sans steps marks "the thing the system adds" typographically.
- EN ledger clauses are sentence-cased (`Requests…`) although the source sentence has them
  lower-case mid-sentence; HE has no case so it is verbatim. Content unchanged.
- `Mapped workflow` persists from 3.05 s as the section title (dimmed through the peak) so the
  poster frame is self-explanatory; `Before the map` is transient (the mess is what leaves).
- The `email · chat · call` sub is kept (verbatim `nodes[0].sub`) as 24 px structural texture rather
  than cut.

### Not done / deferred to step 2

- **Render** (EN + HE alpha WebM via `npm run render`, charcoal MP4 + poster via ffmpeg, HE by the
  default flip; `#review-bg` removed for the render) — pending owner review.
- `assets/fonts/inter-400.woff2` + `inter-600.woff2` are now unreferenced by this film (orphans;
  left in place for the orchestrator to prune with the kit).
- GSAP is still loaded from the CDN without SRI (pre-existing, shared by every sibling film).
- Animation-map tooling still unavailable (see above).

## v2 2026-09-24 — film spec v2 re-cut, stopped at stills (no render)

The retune-v1 stills (above) were rejected by the owner: "font looks bad. elements very small."
Re-cut to **film spec v2** (backlog/2026-09-24-studio-redesign-plan.md): sans only on frame,
the composition fills ~80% of the canvas, floor **headlines ≥ 120 · node labels ≥ 80 · secondary ≥ 64**,
one large text moment at a time. Story, beats and act timings, ids, single paused timeline, 13 s,
cinematic grammar (velocity-matched hand-offs, rack focus onto the copper checkpoint, loop-continuous
camera) and the trace table all kept. The retune-v1 composition was never committed (git `HEAD` holds the
pre-retune one). **Step 2 (render EN+HE) is pending owner review of these stills.**

### What changed (v1 → v2)

| Area | Change |
|---|---|
| Type | Newsreader / Frank Ruhl Libre `@font-face` + rules removed. EN: Instrument Sans 600 (3 headlines + node labels), 400 (ledger); HE: Assistant 700 (headlines + node labels), 600 (ledger + chips) — the kit's new Assistant 700 blocks added verbatim; Geist Mono only for the Latin chips (tracking +0.04em → 0 at 64px). Hebrew letter-spacing 0 everywhere. |
| Sizes | headlines 84 → **120** (`Before the map`, `Mapped workflow`, `Human approval`); node labels 64 → **80**; ledger 28 → **64**; chips 22 → **64** (boxes ≈ 2.6×); rail 2 → **3px**; dots 14 → **40px**; approval ring 42 → 104px (end scale 1.7 → 1.55 so the bloom stays off the label); glow 900 → 1300px. |
| Geometry | `LEFT_X 100` (new) · `RAIL_X 1000 → 740` · `LABEL_X = 784` (dot 40 + gap 24) · `NODE_Y 290→980`, pitch 132 → **138** · `LED_TOP` A 270 / B 640 (new) · `CHIP_BOX 240×56 → 560×100` · `CHIP_REST` re-laid in two bands. Still pure constants → CSS vars + inline positions at init; `fly()` derives every vector. |
| Ledger | **Two-slot queue** (see route below): `.led` = two measured `.ln` lines, each with its own strike; new helpers `enter()` / `clear()`; `led2` enters slot A at 5.95 after `led0` clears (5.8), `led3` enters slot B at 7.65 after `led1` clears (7.5); `led1` now resolves at 6.85 (was 6.95) so it can clear before the peak. |
| Chips | Five in Act 1; `what is open?` now tumbles in at 7.55 with its clause (was 1.7) and drifts through the peak. Flight end-scale 0.35 → 0.15 (the chips are ~2.6× larger). Wrapper drift now uses an **even** number of yoyo halves per chip, ending at y 0 exactly when that chip's flight starts → landings exact (were up to −11px). |
| Sub | `email · chat · call` (`nodes[0].sub`) **cut from frame** — see judgment calls. |
| Peak | `Mapped workflow` joins the rack focus: dim 0.45 **+ blur 4px** (was dim only), refocused at the settle. Node ghost blur 1.6 → 2px, rack blur 4 → 5px (scaled with the type). |
| Kept | beats + act timings, all ids, `#review-bg` convention, 13 s, camera (1.03 push-in, pivot 1100/540, HE 820/540, identity at both ends), first element on frame at 0.15 s (no empty opening to trim). |

### Ledger route chosen — two clauses on frame at a time (a queue)

At 64px every clause needs two lines in the ~600px left column (EN widest line `email, chat, and calls`
= 597px ink), so four clauses + the chaos field cannot share the half. **Route chosen: at most two
on frame at a time.** Slot A shows `Requests arrive…` then `Follow-up depends…`; slot B shows
`Status lives…` then `No shared view…`. A clause strikes when its chip lands, clears upward, and the
next pain rises in (0.2 s crossfade at each hand-off). All four pains appear and each is answered by
its own node, so the one-pain-per-node resolution map survives. **Rejected: two lines total** — it
would drop two pains (and two strikes) from the film. Census (opacity > 0.05, both locales):
1.6 s `led0 led1` · 6.2 s `led1 led2` · 8.25 s → end `led2 led3`.

### Per-moment px vs the v2 floor, with measured ink widths

Ink = pixels ≠ charcoal with the element isolated on `#review-bg`, camera applied (scratch harness,
Chrome 131, same woff2 files); settled 12.8 s unless noted. @375 = × 0.195.

| Moment | Element | px | Floor | @375 | EN ink (x range) | HE ink (x range) | Verdict |
|---|---|---|---|---|---|---|---|
| `Before the map` | `#cap-before` @1.6 | 120 | 120 | 23.4 | 836 (111→946) | 500 (1320→1819) | **PASS** |
| `Mapped workflow` | `#cap-mapped` | 120 | 120 | 23.4 | 988 (791→1778) | 631 (499→1129) | **PASS** |
| `Human approval` (peak) | `#n4 .label` | 120 (≈127 at ×1.06) | 120 | 23.4 | 895 (791→1685); peak 978 (780→1757) | 554 (578→1131) | **PASS** |
| `Incoming request` | `#n0 .label` | 80 | 80 | 15.6 | 645 (788→1432) | 401 | **PASS** |
| `Captured + categorized` | `#n1 .label` | 80 | 80 | 15.6 | 854 (786→1639) | 474 | **PASS** |
| `Owner + due date assigned` | `#n2 .label` | 80 | 80 | 15.6 | **983 (786→1768) → right margin 151; peak 130** | 898 (235→1132) → left margin 235; peak 210 | **PASS** (≥ 120 margin) |
| `Draft response prepared` | `#n3 .label` | 80 | 80 | 15.6 | 895 (788→1682) | 616 | **PASS** |
| `Tracked to done` | `#n5 .label` | 80 | 80 | 15.6 | 587 (785→1371) | 582 | **PASS** |
| Ledger `led0` (2 lines) @1.6 | `.led` | 64 | 64 | 12.5 | 597 (114→710) | 512 | **PASS** |
| Ledger `led1` @1.6 | `.led` | 64 | 64 | 12.5 | 465 | 385 | **PASS** |
| Ledger `led2` | `.led` | 64 | 64 | 12.5 | 572 | 304 | **PASS** |
| Ledger `led3` | `.led` | 64 | 64 | 12.5 | 525 | 468 | **PASS** |
| Chips ×6 (box incl. border, rotated) @1.6 / `what is open?` @9.3 | `.chip` | 64 | 64 | 12.5 | 243 · 201 · 200 · 316 · 409 · 563 | 151 · 174 · 180 · 239 · 211 · 299 | **PASS** |

**18 text moments, both locales: 18 PASS · 0 STRUCTURAL · 0 FAIL** (v1: 8 PASS · 11 STRUCTURAL).
Computed values read from the running composition: EN Instrument Sans 600 −1.2px / −0.8px, 400 normal,
Geist Mono 400 normal; HE Assistant 700 / 600, `letter-spacing: normal` everywhere.
Canvas use: content x 100 → 1778 (87%), y 110 → 1015 (84%).

### Trace table (v2)

On-frame strings unchanged except the cut sub. Line refs re-checked against
`src/content/studio/process-optimization.ts`: EN unchanged (`:114`, `:116`, `:119-124`, film `:31-39` /
caption `:36-37`); **HE moved** — intro `:279`, caption `:281`, nodes `:284-289`, film `:196-204` / caption
`:201-202` (the v1 table above cites `:275 / :277 / :280-285 / :197-198`, now stale). Current table:
DESIGN.md → Source of truth.

### Gates at the stills stop

- `npm run check` (lint → validate → inspect, pinned `hyperframes@0.6.84`, `#review-bg` present):
  **exit 0** — `0 error(s), 4 warning(s)` · `No console errors · 110 text elements pass WCAG AA` ·
  `0 layout issues across 9 sample(s)`. Warnings: three `overlapping_gsap_tweens` on `__unresolved__`
  (0–0.35 s opacity, 0–0.50 s opacity, 0–0.45 s rotation = the durations of `clear()`, `activate()`/`enter()`,
  `resolve()`: the linter cannot resolve helper-passed selectors) and `composition_file_too_large`
  (325 lines; benign). Manually verified no element has two simultaneous tweens on one property:
  ledger windows are disjoint per clause (`led0` 0.35–0.95 / 5.15–5.6 / 5.8–6.15 · `led1` 0.55–1.25 /
  6.85–7.3 / 7.5–7.85 · `led2` 5.95–6.5 / 7.85–8.3 · `led3` 7.65–8.15 / 11.7–12.15); chip entrance vs
  flight disjoint (`what is open?` 7.55–8.1 / 10.75–11.6); wrappers carry only drift; nodes ghost
  (≤ 4.35) → activate → rack (8.2) → settle (12.1); `#cap-mapped` 3.05–3.6 / 8.2–8.8 / 12.1–12.7.
- Chip landings (chip centre − dot centre at each flight end, both locales): **dx = 0, dy = 0 for all six**;
  every wrapper is at `matrix(1,0,0,1,0,0)` when its flight starts.
- **Loop seam:** camera identity at both ends (`t=0`: no transform; `t=13`:
  `scale(1) translate(-1.2e-15px, -1.5e-15px)`). Content is a linear film + soft settle (family
  convention, unchanged): first frame = empty charcoal (mean 0.069 ≈ `#121211`), last frame = the settled
  map — RMSE first↔last 0.186 (EN) / 0.157 (HE) (more ink than v1's 0.132 / 0.100), not a crossfade.
  Settle stable: 12.8 s ↔ 12.99 s RMSE 0.030 (EN) / 0.025 (HE).
- HE: mirror confirmed (spine left, ledger right-aligned, strikes cut the letter bodies), Assistant 700/600
  loaded, trailing `?` at the visual left of the Hebrew chips. Snapshot font log: EN loads Instrument Sans +
  Geist Mono, HE loads Assistant 600 + 700; the "FAILED [unloaded]" lines are the other locale's families,
  never requested.
- Stills: `snapshots-en/contact-sheet.jpg`, `snapshots-he/contact-sheet.jpg` (10 frames: 0 · 1.6 · 3.6 ·
  5.0 · 6.9 · 9.3 · 11.2 · 12.0 · 12.8 · 12.99); peak `frame-05-at-9.3s.png` + closing `frame-08-at-12.8s.png`
  per locale; 375px composites `snapshots-{en,he}/_legibility-375.png` (peak + closing side by side).
  HE via the declared-default flip, restored to `"en"` (grep-verified). Both dirs are gitignored.

### Judgment calls

- **Ledger = two-slot queue** (above), not "two lines total".
- **`email · chat · call` sub cut from frame.** At the 64px floor it is a 723px mono line; under
  `Incoming request` it needs ~75px of height the 138px pitch does not have, and the three chips that fly
  into that node carry exactly that information. The source string (`nodes[0].sub`) is untouched.
- **Node pitch 138 (spec ≈ 150), column y 290 → 980 (spec ~200 → 960).** The 120px headline band sits
  over the same x column as the labels (`Mapped workflow` is flush with them), so the first label must start
  below its descenders; a 150 pitch would push `Tracked to done` off the bottom. Type was not shrunk.
- **`what is open?` enters with its clause (7.55 s), not in Act 1.** Each band holds at most three 64px
  chips; the sixth had no room without covering ledger text. It still survives the peak and resolves last.
- **Ledger clauses are two explicit, measured lines** (word-boundary split, `nowrap`), not natural wrapping,
  so each line owns a strike sized to its ink. HE `המעקב תלוי בזיכרון` fits one line (468px) but is split
  like the others to keep the slot rhythm.
- **`Mapped workflow` also defocuses (4px) at the peak** — at 120px, dimming alone left it competing with
  `Human approval`.
- The settle restores `Mapped workflow`, so the poster frame shows two 120px headlines (`Mapped workflow`
  + copper `Human approval`) — the payoff, as in v1.
- EN clauses stay sentence-cased (unchanged from v1).

### Not done / deferred to step 2

- **Render** (EN + HE: `--format mov` master → charcoal MP4 + poster; alpha WebM; `#review-bg` removed for
  the render and restored after; HE by the default flip) — pending owner approval of these stills.
- Orphan woff2 in `assets/fonts/` (`newsreader-500-latin`, `frank-ruhl-libre-500-*`, `inter-*`) left for the
  kit prune. GSAP still from the CDN without SRI (pre-existing, shared by every sibling film).
- Animation-map tooling still unavailable (not re-attempted).

## Render v2 (2026-09-24) — DONE, both locales

Owner approved the v2 stills; rendered and swapped in place (same filenames, no site-code change).

### Route

1. `#review-bg` removed (CSS rule + element; the only remaining grep hit is the header comment), `lang`
   default `"en"`.
2. EN: `npm run render -- --format webm --quality high --video-bitrate 3M` → alpha WebM **7.8 MB** (5.0 Mbps
   actual — VP9 encodes the alpha plane against the same target), and
   `npm run render -- --format mov --quality high` → ProRes 4444 master (`yuva444p12le`, 13.000 s).
3. `lang` default flipped to `"he"`, same two renders (HE WebM 7.2 MB, HE MOV).
4. Restored: `index.html` copied back from the pre-render backup — **byte-identical** (`cmp`) to the approved
   v2 file; grep: `"default":"en"`, `#review-bg { … }` rule ×1 (line 50), `<div id="review-bg">` ×1 (line 165).
5. From each **MOV master** (the film's render gotcha): charcoal MP4 = `color=0x121211` underlay → `overlay` →
   libx264 `-preset slow`, `yuv420p`, `+faststart`; poster = MOV frame at **t = 12.8 s** over charcoal (PNG,
   rgb24); fallback WebM = 2-pass libvpx-vp9 `yuva420p -b:v 1.6M -auto-alt-ref 0` (the rendered WebMs were over
   the 6 MB cap).
6. Six files replaced in `public/videos/`; masters + direct-render WebMs deleted from `renders/` (scratch).

### Why the MP4 / poster / WebM come from the MOV, not the rendered WebM (measured)

EN, same CRF 25, composited over charcoal, vs the lossless snapshot frames:

| Source | MP4 bytes | Glow regions @9.3 / @12.8 (PSNR, max diff) | Full frame @9.3 / @12.8 |
|---|---|---|---|
| MOV master | 1,211,697 | 47.7 dB / 47.9–48.2 dB, max 4–5 | 36.7 / 34.6 dB |
| rendered WebM | 1,487,165 | 47.3 dB / 48.3 dB, max 5–6 | 36.2 / 33.8 dB |

The July "harsh disc" is not reproduced in v2 (glow error ≤ 5/255 either way; macroblock steps only visible
under a 10× contrast boost), but the MOV route is better and ~20% smaller at equal CRF, and it is the clean
source for the ≤ 6 MB WebM re-encode (a second VP9 generation from a 5 Mbps WebM would compound loss).

### Assets (`ffprobe`)

| File | Codec | Bytes | Duration | kbps | pix_fmt | alpha_mode | Encode |
|---|---|---|---|---|---|---|---|
| `scattered-to-mapped.mp4` | h264 | 1,367,962 | 13.000 s | 841 | yuv420p | – | **CRF 24** (CRF 23 = 1,553,800 B, over 1.5 MB) |
| `scattered-to-mapped-he.mp4` | h264 | 1,080,885 | 13.000 s | 665 | yuv420p | – | **CRF 23** |
| `scattered-to-mapped.webm` | vp9 | 4,686,348 | 13.000 s | 2,883 | yuv420p (+alpha) | 1 | 2-pass, `-b:v 1.6M` |
| `scattered-to-mapped-he.webm` | vp9 | 4,371,188 | 13.000 s | 2,689 | yuv420p (+alpha) | 1 | 2-pass, `-b:v 1.6M` |
| `scattered-to-mapped-poster.png` | png | 449,224 | – | – | rgb24 1920×1080 | – | MOV @12.8 s |
| `scattered-to-mapped-he-poster.png` | png | 321,496 | – | – | rgb24 1920×1080 | – | MOV @12.8 s |

Both MP4s: `moov` before `mdat` (faststart), `start_time 0`. July → v2: EN MP4 1.30 → 1.37 MB, HE MP4 1.39 →
1.08 MB, EN WebM 4.66 → 4.69 MB, HE WebM 4.58 → 4.37 MB; posters grew (more, larger text: 223 → 449 KB EN,
156 → 321 KB HE).

### Checks

- **WebM parity** (composited, all 390 frames, vs the MOV master): EN mean SSIM **0.9930** (the 7.8 MB direct
  render: 0.9943), HE **0.9953** (7.2 MB direct render: 0.9965). Alpha preserved: corner pixel RGBA
  `(0,0,0,0)`, label pixels alpha 173–177 (the 0.65-opacity settled labels), decoded with libvpx-vp9.
- **Loop seam** (final MP4s; the camera is identity at t=0 and t=13 — `scale(1) translate(-1.2e-15px,
  -1.5e-15px)`): first frame vs pure `#121211` RMSE **0.0032** (encoder noise) both locales; first↔last RMSE
  **0.187 EN / 0.156 HE** (linear film + soft settle, as in the stills 0.186 / 0.157 — not a crossfade);
  settle stable, 12.8 s ↔ last RMSE 0.027 / 0.022. Poster ↔ MP4 frame @12.8 RMSE 0.0095 / 0.0062.
- **HE content**: HE poster = mirrored layout, Assistant 700/600, copper `אישור אנושי` (viewed).
- **Fonts pruned** (plain `rm`): `frank-ruhl-libre-500-{hebrew,latin}`, `inter-{400,600}` (were tracked —
  they show as deleted in git status), `newsreader-500-latin`. Remaining = exactly the six `@font-face`
  files (`assistant-600/700-{hebrew,latin}`, `geist-mono-400`, `instrument-sans-400-600-latin`), all present.
- `npm run check` after restore + prune: **exit 0** — `0 error(s), 4 warning(s)` (the same three
  `overlapping_gsap_tweens` helper false positives + `composition_file_too_large`) · `No console errors ·
  110 text elements pass WCAG AA` · `0 layout issues across 9 sample(s)`.
- Not run: the `curl` content-length check against the dev server (port changed; skipped per the
  orchestrator); the on-page playback check in `/studio/process-optimization`.

### Deviations from the requested pipeline

- MP4 + poster composited from the **MOV master**, not the alpha WebM (measured above; the film's documented gotcha).
- Served WebMs are **2-pass VP9 re-encodes of the MOV** (1.6M target), not the direct `npm run render` output,
  which came out at 7.8 / 7.2 MB despite `--video-bitrate 3M`.
- EN MP4 at **CRF 24** (CRF 23 = 1.55 MB); HE at CRF 23.
