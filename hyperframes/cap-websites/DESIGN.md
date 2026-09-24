# DESIGN — "How a site gets made" film

A ~12s looping film for `/studio/websites`, rendered directly under the hero (`#film`). It
**shows a site being made, bilingual by construction**: a brief arrives, the site's
structure appears as abstract page frames on a hairline sitemap, the pages are designed
in one language and **mirror into the other** (the twins unfold from the centre axis), a
small film frame drops into the home page (the studio's own films as the motion), the
owner reviews at the copper checkpoint — **one page approved, one deliberately left
waiting** — and the approved page goes live in both languages. HyperFrames composition
(GSAP), transparent render, two locales (EN / HE-RTL) from one composition via the `lang`
variable.

Authored **to film spec v2 from the start** (`backlog/2026-09-24-studio-redesign-plan.md`,
the "Film spec v2" note) under the **settled cinematic grammar** (cap-agentic-systems
precedent): velocity-matched beat hand-offs, one depth-of-field rack focus onto the copper
approval checkpoint at the peak, and a loop-continuous camera (push-in capped at 1.5%).
**No WebGL bloom** — that is the flagship (command-center) signature only.

## Intent

- **Show the site being made, don't describe the capability.** One brief travels the real
  build flow (`example.map.nodes`) with its approval step intact.
- **Bilingual is shown, not claimed.** The pages are built once and mirror into the other
  language — the twin pages are the exact mirror image (media slot, heading, copy bars and
  status mark all swap sides). The film's own EN→HE render is itself the same mirror: in
  the HE cut the Hebrew pages are built first on the right and the English twins unfold
  onto the left.
- **The films are part of the site.** At "Films and metadata" a small film frame drops
  into the home page (both languages) and keeps playing — a tiny rail with a copper mark
  travelling it, a film of this film.
- **The approval is the peak, and it gates what goes live.** Upstream defocuses; the
  copper checkpoint and the four pages under review stay sharp; the owner approves page A
  (both languages) and leaves page B waiting — "nothing goes live until you have read it
  in both languages", shown.
- **The payoff is live.** The out node lands, the sitemap root lights copper and copper
  runs down the sitemap to both language versions of the approved page.

## Honesty grammar (schematic — no product UI, no chip)

A **schematic** film like its siblings: a horizontal conveyor of node marks + one large
headline at a time, above a band of **abstract page frames** (a media slot, a heading bar,
two copy bars — structure, not a screen). No text inside the page frames, no browser
chrome, no names, no metrics, no fake SaaS UI, no synthetic faces or voices, no neon — so
there is **no "Sample data" chip** (the chip is the command-center grammar for real-UI
films only).

## Locales — one composition, two renders (command-center precedent)

- `data-composition-variables` declares `lang` (`"en"` default). Script reads it via
  `window.__hyperframes.getVariables()`, indexes a `COPY` object, adds `.he` to `#stage`,
  and mirrors the layout via an `X()` position helper (`x → 1920 − x`).
- EN flows **left → right** and builds the English pages first on the left half; HE (RTL)
  flows **right → left** and builds the Hebrew pages first on the right half. Each page's
  internal layout follows its own language (`.ltr` / `.rtl`), so the final frame shows
  English pages on the left and Hebrew pages on the right in **both** cuts — only the build
  order and the words differ (a transcreation, not a flipped render).
- The mirror is one `rotationY` of the `#twins` group about x = 960 (`+90° → 0` EN,
  `−90° → 0` HE, `transformPerspective: 2400`), so the twins swing out from the spine.
- `dir="rtl"` on text elements only (`.lbl`, `.chip-inner`, `#caption`) — **NEVER on
  `<html>`** (blanks the render).

## Type — spec v2, sans only on frame (`hyperframes/_fonts/LICENSE.md`)

No serif on frame and no `@font-face` for it.

| Role | EN | HE |
|---|---|---|
| Stage headline `.lbl` (one at a time) | Instrument Sans **600**, **128px**, −0.01em | Assistant **700**, **140px**, tracking 0 |
| Caption `#caption` (the one secondary line, peak only) | Instrument Sans **400**, **72px** | Assistant **600**, **80px**, tracking 0 |
| Brief chips `.chip-inner` | Geist Mono 400, **80px**, +0.02em (Latin chips only) | Assistant **600**, **88px**, tracking 0 |

**HE runs ×1.1 the EN size** (128→140, 72→80, 80→88) for optical parity, as in the
precedent (Assistant's Hebrew letter body ≈ 0.58–0.6 em vs Instrument Sans cap height
0.73 em). **Hebrew is never mono and never letter-spaced**: `.he .mono`, `.he .lbl`,
`.he #caption` and `[dir="rtl"]` reset `letter-spacing: 0` (computed `normal` verified on
all 10 HE text elements). `סרטונים ו-SEO` renders its Latin run in Assistant 700 (latin
subset) with correct bidi. Local woff2, byte-identical (md5) to the `_fonts` kit:
`instrument-sans-400-600-latin`, `assistant-600-{hebrew,latin}`,
`assistant-700-{hebrew,latin}`, `geist-mono-400`; `unicode-range` subsets verbatim from
LICENSE.md.

## Mobile legibility — phone type floor v2 (hard gate)

16:9 renders ~375px wide on phones (× 0.195). **Headline moments ≥ 120px, labels ≥ 80px,
secondary (caption, chips) ≥ 64px on the 1920 canvas; one large text moment on frame at a
time; the widest headline in each locale keeps ≥ 120px side margins, measured as rendered
ink.** This film's text is the headline (128 / 140 → 25 / 27.3px at 375), the caption
(72 / 80 → 14 / 15.6px) and the chips (80 / 88 → 15.6 / 17.2px) — all at or above their
floor; there is no separate "label" role (the chips also clear the 80 label floor). Page
frames, the sitemap, pips, the film frame, node marks, the token, status marks and the
ring carry meaning by **structure + copper**, never by small text. Verified in
`snapshots-{en,he}/_legibility-375.png` (peak + closing).

## Layout (1920×1080; EN shown, HE mirrors x → 1920 − x)

The composition spans x 170 → 1750 (1580px, 82% of the width) and y ≈ 227 → 844 (rail
beats) / → 1006 (peak, with the caption): headline band on top, the sitemap + page band in
the middle, the conveyor below, the caption at the foot.

| Zone | Position (EN) | Size | Role |
|---|---|---|---|
| **Headline band** | `.lbl` top 210, full width, centred (rendered ink y ≈ 227–352 EN / 235–368 HE) | 128px (HE 140) | one stage headline at a time; the out node's headline is held to the end as the closing |
| **Brief chips** | centres (480,450) (1080,510) (590,690), rotations −6° / 4° / −3° | text 80px (HE 88); boxes 513×156 / 513×156 / 562×156 (HE 384 / 258 / 297 × 165) | `services · audience · languages`; they merge into the token at node 0 |
| **Sitemap root** | (960, 410), on the mirror axis | 26px ring | the site; lights copper when it goes live |
| **Sitemap** | trunk 423 → 440; bracket y 440 from x 350 → 1570 (1220px); drops 440 → 470 at x 350 / 750 / 1170 / 1570 | hairline 3px (#4a473f → #6a665c at "metadata"); live overlay copper 4.5px | primary half draws with the pages, the twin half with the mirror |
| **Metadata pips** | on each drop, y 455 | 16px diamonds | "per-page metadata" — structure only |
| **Pages** | 4 × top 470 → 730: A 170–530, B 570–930 ‖ B′ 990–1350, A′ 1390–1750 (gaps 40 / 60 at the axis / 40) | **360×260** each | A = home page (gets the film, approved), B = inner page (left waiting); ′ = the mirrored twin |
| Page internals | inset 26: media slot 192×108 (16:9) at the start side; status mark at the end-side top corner; heading bar 200×20 (top 158); copy bars 304×12 (198), 220×12 (224) | — | wireframe (dashed slot, outline) → designed (filled slot, lit heading, surface) |
| **Mirror axis** | x 960, y 460 → 750 | 3px dashed | shown only while the twins unfold (4.45–5.7s) |
| **Film frame** | in page A / A′'s media slot | 192×108; mini rail 139px, copper mark 18px | drops in at "Films and metadata" and keeps playing (5 finite legs) |
| **Status marks** | page top corner, end side | 44px ring | appear when review opens; A fills copper + dark check; B stays an open ring |
| **Conveyor rail** | y = 820, x 170 → 1750 | 1580px, stroke 4 | the build flow; a copper token travels it |
| **Nodes** | x 230 / 522 / 814 / 1106 / 1398 / 1690 (pitch 292) | 40px | active ×1.18; the checkpoint (node 4) ×1.25 at the peak |
| **Token** | on the rail | 48px | the project |
| **Approval ring** | node 4 (x 1398) | 164px (→ ×1.9, fading) | the one bounded copper ring; painted beneath the pages |
| **Caption** | full width, top 915 (rendered ink y ≈ 939–1006 EN / 955–1016 HE) | 72px (HE 80) | `Review and approve` at the peak only |

Clearances (measured — `getBoundingClientRect` + ink scan of the tool's own frames):
headline ink ↔ sitemap root 42px EN / 26px HE; page bottoms (727) ↔ node/token tops (793)
66px; mirror axis ↔ the inner pages 28–29px; chips ≥ ~30px apart at their closest corners
(0.9s frame); caption ink ↔ node 4 at the peak 88px.

`#camera` loop-continuous push-in `scale 1.0 → 1.015` into the peak (5.9 → 7.5s), hold to
9.0s, back to identity by 11.5s; ±5/±3px integer-cycle sine drift;
`data-layout-allow-overflow`.

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211` / `--bg-1 #1a1a18` / `--bg-2 #242420`, copper `--accent
#d96832`, cream `--fg-1 #f4f1ea`, muted `--fg-2 #b9b3aa` / `--fg-3 #8a847a`, hairlines
`--rule #2a2a26` / `--rule-strong #3a3a34`. Renders transparent (`#review-bg` is
REVIEW-ONLY, hidden before render).

## Source of truth (three-source rule — verified against `src/content/studio/websites.ts`)

Every on-frame string traces to the capability page content file, **verbatim and in node
order**: `example.map.nodes` (labels + the node-0 sub as the chips), one caption from the
human `how.steps` title, and the closing = the out node. Re-render if any of them change.
Line numbers as of 2026-09-24 **after the site wiring** (the `film` blocks shifted them; the inline `// source` comments in `index.html` keep the render-time numbers — EN `:102–107` / `:85`, HE `:240–245` / `:223` — so the rendered source stays byte-identical; the strings are unchanged).

### EN

| Element | Verbatim string | Source |
|---|---|---|
| Chips ×3 (node 0 sub) | `services` · `audience` · `languages` | `example.map.nodes[0].sub` (`websites.ts:112`) |
| Headline 0 | `Your brief` | `example.map.nodes[0].label` (`:112`) |
| Headline 1 | `Structure and copy` | `example.map.nodes[1].label` (`:113`) |
| Headline 2 | `Design and build` | `example.map.nodes[2].label` (`:114`) |
| Headline 3 | `Films and metadata` | `example.map.nodes[3].label` (`:115`) |
| Headline 4 (human, peak) | `Your approval` | `example.map.nodes[4].label` (`:116`) |
| Headline 5 (out) = closing | `Live in both languages` | `example.map.nodes[5].label` (`:117`) |
| Caption (peak) | `Review and approve` | `how.steps[3].title` (the human step) (`:95`) |

### HE (RTL, mirrored — transcreation)

| Element | Verbatim string | Source |
|---|---|---|
| Chips ×3 (node 0 sub) | `שירותים` · `קהל` · `שפות` | `he.example.map.nodes[0].sub` (`:259`) |
| Headline 0 | `הבריף שלכם` | `he.example.map.nodes[0].label` (`:259`) |
| Headline 1 | `מבנה וטקסט` | `he.example.map.nodes[1].label` (`:260`) |
| Headline 2 | `עיצוב ובנייה` | `he.example.map.nodes[2].label` (`:261`) |
| Headline 3 | `סרטונים ו-SEO` | `he.example.map.nodes[3].label` (`:262`) |
| Headline 4 (human, peak) | `האישור שלכם` | `he.example.map.nodes[4].label` (`:263`) |
| Headline 5 (out) = closing | `באוויר בשתי השפות` | `he.example.map.nodes[5].label` (`:264`) |
| Caption (peak) | `בודקים ומאשרים` | `he.how.steps[3].title` (the human step) (`:242`) |

## Render (per command-center pipeline — DONE 2026-09-24, see REVIEW.md → "Render v2")

`#review-bg` hidden (`data-hidden`) → transparent alpha WebM via `npm run render --
--format webm` (`--video-bitrate` tuned to the size envelope) → ffmpeg charcoal `#121211`
MP4 + settled poster (tail frame ≈ 11.7s). HE via the default-flip route (flip the
declared `lang` default to `"he"`, render, flip back — `--variables` is unreliable on
Windows). Outputs → `public/videos/cap-websites{,-he}.{mp4,webm}` + posters. Then the
`film` block (`CapabilityFilm`, `src/content/studio/types.ts`) on the page content.

## Hard "do not"

- ❌ No product UI / browser chrome / metrics / names / fake SaaS / faces / voices; no text
  inside the page frames — abstract frames + bars only.
- ❌ No "Sample data" chip (this is schematic, not a product screen).
- ❌ No WebGL bloom (flagship-only); one bounded copper ring at the peak.
- ❌ No `dir="rtl"` on `<html>`; no random/Date/async; no infinite repeats.
- ❌ No serif on frame; no Hebrew in Geist Mono; no letter-spacing on Hebrew.
- ❌ No text moment below the v2 floor (120 headline / 80 label / 64 secondary); never two
  headlines at once; no headline whose rendered ink leaves < 120px side margins.
- ❌ No on-frame string that does not trace to the table above.
