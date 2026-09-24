# DESIGN — "From brief to loop" film

A ~12s looping film for `/studio/films`, rendered directly under the hero (`#film`). It
is **a film about how these films are made**: the copy (`site · deck · post`) becomes one
script line, the line is cut into six scenes on an abstract editing timeline, a playhead
lights each beat as a still **in both languages** (a mirrored twin lane), the owner
approves one still at the copper checkpoint while its twin is still waiting (the peak),
and the timeline renders into a 16:9 frame that fills with a settled schematic and fans
out into a square and a tall portrait (web / LinkedIn / Reels), each with its
other-language twin. HyperFrames composition (GSAP), transparent render, two locales
(EN / HE-RTL) from one composition via the `lang` variable.

Authored **to film spec v2 from the start** (`backlog/2026-09-24-studio-redesign-plan.md`,
"Film spec v2") under the settled cinematic grammar (cap-agentic-systems precedent):
velocity-matched hand-offs, one depth-of-field rack focus onto the copper approval
checkpoint at the peak, a loop-continuous camera (push-in capped at 1.5%). **No WebGL
bloom** — that is the flagship (command-center) signature only.

## Intent

- **Show the production, don't describe it.** The buyer watches their own copy travel
  the real process: copy → scenes → stills in two languages → their approval → a rendered
  loop and its variants.
- **The approval is the peak.** The timeline defocuses; the copper checkpoint and the two
  stills lifted to it stay sharp; the owner approves one (copper + check) and the other
  keeps its open dot — a real review, not a rubber stamp. **Just before the render beat
  the waiting still gets its own check (8.35–8.62s)**, so nothing renders before approval
  (owner change, 2026-09-24) — "you approve the frames before anything renders", shown.
- **The payoff is the deliverable set.** One 16:9 frame, then its square and portrait
  duplicates, each backed by its other-language twin — the exports the page promises.

## Honesty grammar (schematic — no product UI, no chip)

A **schematic** film like its siblings: clip blocks, nodes and frames are abstract marks
(a dot + blank bars; a headline bar + a node rail) — no real footage, no faces, no voices,
no logos, no metrics, and **no text inside any frame**. No "Sample data" chip (the chip is
the command-center grammar for real-UI films only). No neon.

## Locales — one composition, two renders (command-center precedent)

- `data-composition-variables` declares `lang` (`"en"` default). The script reads it via
  `window.__hyperframes.getVariables()`, indexes a `COPY` object, adds `.he` to `#stage`,
  and mirrors the layout via an `X()` position helper (`x → 1920 − x`).
- The timeline is **horizontal**: EN flows **left → right**; HE (RTL) flows **right →
  left** (rail draw, playhead sweep, chip order, lift order, the variants row). Lane 1
  holds the render's own language; lane 2 the mirrored twin — so the EN render's lane 1 is
  LTR and lane 2 RTL, and the HE render swaps them (`.rtl` class; a transcreation, not a
  flipped render). Frame schematics mirror with an SVG `scale(-1 1)` group.
- `dir="rtl"` on text elements only (`.lbl`, `.chip-inner`, `#caption`) — **NEVER on
  `<html>`** (blanks the render).

## Type — spec v2, sans only on frame (`hyperframes/_fonts/LICENSE.md`)

| Role | EN | HE |
|---|---|---|
| Stage headline `.lbl` (one at a time) | Instrument Sans **600**, **128px**, −0.01em | Assistant **700**, **140px**, tracking 0 |
| Caption `#caption` (the one secondary line, peak only) | Instrument Sans **400**, **72px** | Assistant **600**, **80px**, tracking 0 |
| Source chips `.chip-inner` | Geist Mono 400, **80px**, +0.02em (Latin chips only) | Assistant **600**, **88px**, tracking 0 |

HE runs ×1.1 the EN size (Assistant's Hebrew letter body ≈ 0.58–0.6 em vs Instrument
Sans's 0.73 em cap height — the cap-agentic-systems measurement), so every HE size is at
or above the EN size. **Hebrew is never mono and never letter-spaced**: `.he .mono`,
`.he .lbl`, `.he #caption` and `[dir="rtl"]` reset `letter-spacing: 0` (computed `normal`
verified on all 9 HE text elements). No serif `@font-face`. Local woff2, byte-identical
(md5) to the `_fonts` kit: `instrument-sans-400-600-latin`, `assistant-600-{hebrew,latin}`,
`assistant-700-{hebrew,latin}`, `geist-mono-400`; `unicode-range` subsets verbatim from
LICENSE.md.

## Mobile legibility — phone type floor v2 (hard gate)

16:9 renders ~375px wide on phones (× 0.195). **Headline moments ≥ 120px, labels ≥ 80px,
secondary ≥ 64px on the 1920 canvas; one large text moment on frame at a time; the widest
headline in each locale keeps ≥ 120px side margins, measured as rendered ink.**

| Role | EN px → @375 | HE px → @375 | Floor |
|---|---|---|---|
| Headline (5 stage labels; the out node held as the closing) | 128 → 25.0 | 140 → 27.3 | 120 |
| Label | — (no label role in this film; the chips also clear 80) | — | 80 |
| Secondary: caption | 72 → 14.0 | 80 → 15.6 | 64 |
| Secondary: chips (node-0 sub) | 80 → 15.6 | 88 → 17.2 | 64 |

Widest headlines (rendered ink, REVIEW.md): EN `Stills in both languages` 1359px, margins
282 / 279; HE `פריימים בשתי השפות` 1151px, margins 384 / 385. Clip blocks, nodes, the
playhead, the checkpoint, the frames and their schematics carry meaning by **structure +
copper**, never by small text. Verified in `snapshots-{en,he}/_legibility-375.png`
(peak + closing).

## Layout (1920×1080; EN shown, HE mirrors x → 1920 − x)

The composition spans x 185 → 1735 (81% of the width) at every beat, and y 200 → 1012 at
the peak / 219 → 940 at the closing.

| Zone | Position (EN) | Size | Role |
|---|---|---|---|
| **Headline band** | `.lbl` top 200, full width, centred (ink y ≈ 221–345 EN, 225–358 HE) | 128px (HE 140) | one stage headline at a time; the out node's headline held to the end as the closing |
| **Source chips** | centres (520,395) (1000,345) (1420,415), rotations −6° / 4° / −3° | 80px text (HE 88), padding 30×56 | `site · deck · post`; they fly down into the script line |
| **Script line** | y 544–566 (centre 555), x 185 → 1735 | the six lane-1 clips at scaleX 266/220, scaleY 22/90 → one continuous 1550×22 bar | "your copy" — cut into six scenes in beat 1 |
| **Rail** | y 470, x 185 → 1735 | 1550px, stroke 4 | the timeline ruler |
| **Scene nodes** | x 295 / 561 / 827 / 1093 / 1359 / 1625 (pitch 266) | 40px | one per scene; copper ×1.18 as the playhead passes |
| **Lane 1 clips** (the render's language) | top 510 (510–600), x 185 → 1735 | 6 × **220×90**, gap 46 | dot + two blank bars once lit |
| **Lane 2 clips** (the mirrored twins) | top 620 (620–710) | 6 × 220×90 | the same still, mirrored (other language) |
| **Playhead** | head on the rail at node 0 → node 5, line y 494 → 710 | head 48px, line 4×216 (opacity 0.5) | lights each beat |
| **Approval checkpoint** | (960, 815), below the timeline | node 40px → ×1.25 at the peak; ring 164px → ×1.9 | copper from birth; the rack-focus peak |
| **Lifted stills** | A (lane-1 still of scene 3) centre (690,815); B (its twin) centre (1230,815) | ×1.75 → **385×158** (A 498–883, B 1038–1423, y 736–894) | A warms to copper + check (approved, 7.5s); B keeps its open dot (still waiting) until 8.35s, then gets its own check (8.35–8.62s) before the render |
| **Caption** | full width, top 920 (ink y ≈ 945–1012 EN, 960–1006 HE) | 72px (HE 80) | `Approve the stills` at the peak only |
| **Render outline** | rect (185,436 1550×452 rx 28) → (600,472.5 720×405 rx 18) | stroke 3 | the timeline's bounds morph into the 16:9 frame |
| **16:9 frame** | born at centre (960,675); settles at x 185–905, y 497.5–902.5 | **720×405** | web — fills with the settled schematic |
| **1:1 frame** | x 982.5–1387.5, y 497.5–902.5 | 405×405 | LinkedIn — slides out from behind the 16:9 |
| **9:16 frame** | x 1465–1735, y 460–940 | 270×480 | Reels — slides out from behind the 16:9 |
| **Language twins** | behind each frame, offset (+26, −26) EN / (−26, −26) HE | same size, opacity 0.5 | the other-language copy of each format (mirrored schematic) |

Clearances (measured, `getBoundingClientRect` at 8.3s): A ↔ checkpoint (×1.25) 52px;
checkpoint ↔ B 53px; lane 2 ↔ lifted stills 26px (lanes defocused); lifted stills ↔
caption ink 51px. Closing row gaps 77.5px; headline ink ↔ portrait twin top 89px EN / 76px HE.

`#camera` loop-continuous push-in `scale 1.0 → 1.015` into the peak, back to identity by
11.5s; ±5/±3px integer-cycle sine drift; `data-layout-allow-overflow`.

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211` / `--bg-1 #1a1a18` / `--bg-2 #242420`, copper `--accent
#d96832`, cream `--fg-1 #f4f1ea`, muted `--fg-2 #b9b3aa` / `--fg-3 #8a847a`, hairlines
`--rule #2a2a26` / `--rule-strong #3a3a34`. Renders transparent (`#review-bg` is
REVIEW-ONLY, hidden before render).

## Source of truth (three-source rule — verified against `src/content/studio/films.ts`)

Every on-frame string traces to the capability page content file, **verbatim and in node
order**: `example.map.nodes` (labels + the node-0 sub as chips), one caption from the human
step, and the closing = the out node. Re-render if it changes. Line numbers as of
2026-09-24.

### EN

| Element | Verbatim string | Source |
|---|---|---|
| Chips ×3 (node 0 sub) | `site` · `deck` · `post` | `example.map.nodes[0].sub` (films.ts:100) |
| Headline 0 | `Your copy` | `example.map.nodes[0].label` (films.ts:100) |
| Headline 1 | `Six scenes` | `example.map.nodes[1].label` (films.ts:101) |
| Headline 2 | `Stills in both languages` | `example.map.nodes[2].label` (films.ts:102) |
| Headline 3 (human, peak) | `Your approval` | `example.map.nodes[3].label` (films.ts:103) |
| Headline 4 (out) = closing | `Rendered loop` | `example.map.nodes[4].label` (films.ts:104) |
| Caption (peak) | `Approve the stills` | `how.steps[2].title` — the `human: true` step (films.ts:79) |

### HE (RTL, mirrored — transcreation)

| Element | Verbatim string | Source |
|---|---|---|
| Chips ×3 (node 0 sub) | `אתר` · `מצגת` · `פוסט` | `he.example.map.nodes[0].sub` (films.ts:235) |
| Headline 0 | `הטקסט שלכם` | `he.example.map.nodes[0].label` (films.ts:235) |
| Headline 1 | `שש סצנות` | `he.example.map.nodes[1].label` (films.ts:236) |
| Headline 2 | `פריימים בשתי השפות` | `he.example.map.nodes[2].label` (films.ts:237) |
| Headline 3 (human, peak) | `האישור שלכם` | `he.example.map.nodes[3].label` (films.ts:238) |
| Headline 4 (out) = closing | `הלופ מוכן` | `he.example.map.nodes[4].label` (films.ts:239) |
| Caption (peak) | `מאשרים את הפריימים` | `he.how.steps[2].title` — the `human: true` step (films.ts:214) |

## Render (per command-center pipeline — DONE 2026-09-24, see REVIEW.md → "Render v2")

`#review-bg` hidden (`data-hidden`) → transparent alpha WebM via `npm run render --
--format webm` (`--video-bitrate` tuned to the size envelope) → ffmpeg charcoal `#121211`
MP4 + settled poster (tail frame ≈ 11.7s). HE via the default-flip route (flip the declared
`lang` default to `"he"`, render, flip back — `--variables` is unreliable on Windows).
Outputs → `public/videos/cap-films{,-he}.{mp4,webm}` + posters. Then the `film` block
(`CapabilityFilm`, `src/content/studio/types.ts`) on the page content.

## Hard "do not"

- ❌ No footage / faces / voices / logos / metrics / product UI; no text inside the frames.
- ❌ No "Sample data" chip (this is schematic, not a product screen).
- ❌ No WebGL bloom (flagship-only); one bounded copper ring at the peak.
- ❌ No `dir="rtl"` on `<html>`; no random/Date/async; no infinite repeats.
- ❌ No serif on frame; no Hebrew in Geist Mono; no letter-spacing on Hebrew.
- ❌ No text moment below the v2 floor (120 headline / 80 label / 64 secondary); never two
  headlines at once; no headline whose rendered ink leaves < 120px side margins.
- ❌ No on-frame string that does not trace to the tables above.
