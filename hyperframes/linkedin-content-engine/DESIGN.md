# DESIGN — "The Content Engine" film

A ~13s film for the Managed AI Office page, in its **"Included: your content engine"**
section: `/offers/ai-office-assistant#content` (EN) and `/he/offers/ai-office-assistant#content`
(HE). The old `/offers/linkedin-content-engine` route is retired and 308s to that anchor. It
**shows the managed content pipeline running**: your material enters, angles are proposed,
drafts are written in your voice, everything waits in one review queue, **nothing publishes
without your approval** (one draft is approved, the rest keep waiting), and approved posts
go out on a steady rhythm. HyperFrames composition (GSAP), transparent render, two locales
(EN / HE-RTL) from one composition via the `lang` variable.

**On the page the film is poster-first, click-to-play** (`ProcessFilm` with
`autoplay={false}`, `src/components/offers/OfferPageBody.tsx`): the Command Center film
above is the page's one autoplaying film. The poster is the first thing a visitor sees, and
it has to carry the story by itself, so **the poster is the approval peak (t = 9.2s), by
the owner's decision**: one draft checked and the safety caption on frame. This differs from
the family default, which uses the settled tail frame.

Authored under the **settled cinematic grammar**: velocity-matched beat hand-offs, one
depth-of-field rack focus onto the copper approval checkpoint at the peak, and a
loop-continuous camera (push-in capped at 1.5%). **No WebGL bloom**: that is the flagship
(command-center) signature only.

**Current cut: film spec v2 (2026-09-24).** Binding spec:
`backlog/2026-09-24-studio-redesign-plan.md` (the "Film spec v2" note); geometry matches
the v2 precedent `hyperframes/cap-agentic-systems/`. Story, beats, ids, timeline timing,
single paused timeline, loop continuity and honesty grammar carry over from v1. **Type,
scale, the route and the source trace changed.** v1 history lives in REVIEW.md.

## Intent

- **Show the engine, don't describe the service.** The buyer watches their material
  travel a real pipeline with its decision point intact.
- **The approval is the peak, and it gates publishing.** Upstream defocuses; the copper
  "Your approval" checkpoint stays sharp; the front draft passes the checkpoint and gets the
  human check while the rest of the queue stays behind, still waiting. Nothing publishes
  on its own: the promise, shown instead of claimed.
- **The payoff is rhythm.** The approved draft dissolves into the out node and resolves
  into a cadence of evenly spaced published beats.

## Honesty grammar (schematic — no product UI, no chip)

A **schematic** film, like its siblings (workflow-sprint, scattered-to-mapped,
cap-agentic-systems): a horizontal conveyor of node marks + one large stage headline at a
time. The review queue is drawn as **abstract cards** (a status dot + three blank bars
each). They show structure only: no product screen and no readable post text. So there is
**no "Sample data" chip** (the chip is the command-center grammar for real-UI films only).
No metrics, no names, no fake SaaS UI, no neon or sparkles.

## Locales — one composition, two renders (command-center precedent)

- `data-composition-variables` declares `lang` (`"en"` default). Script reads it via
  `window.__hyperframes.getVariables()`, indexes a `COPY` object, adds `.he` to `#stage`,
  and mirrors the layout via an `X()` position helper (`x → 1920 − x`).
- The pipeline is **horizontal**: EN flows **left → right**; HE (RTL) flows **right →
  left** (the whole axis mirrors; cards reverse their flex order and right-align their
  bars, so it is a transcreation and not a flipped render).
- `dir="rtl"` on text elements only (`.lbl`, `.frag-inner`, `#caption`), **NEVER on
  `<html>`** (blanks the render).

## Type — spec v2, sans only on frame (`hyperframes/_fonts/LICENSE.md`)

No serif on frame and no Inter: the composition declares no `@font-face` for Inter,
Newsreader or Frank Ruhl Libre, and no rule names them.

| Role | EN | HE |
|---|---|---|
| Stage headline `.lbl` (one at a time; `#lbl5` held as the closing) | Instrument Sans **600**, **128px**, −0.01em | Assistant **700**, **140px**, tracking 0 |
| Caption `#caption` (the one secondary line, the safety line at the peak) | Instrument Sans **400**, **72px** | Assistant **600**, **80px**, tracking 0 |
| Material chips `.frag-inner` | Geist Mono 400, **80px**, +0.02em (Latin chips only) | Assistant **600**, **88px**, tracking 0 |

**HE runs ×1.1 the EN size** (128→140, 72→80, 80→88), the family convention: Assistant's
Hebrew letter body reads smaller than Instrument Sans at equal px. Every HE size is at or
above the EN size, so the floor holds in both locales.

**Hebrew is never mono and never letter-spaced**: `.he .mono`, `.he .lbl`, `.he #caption`
and the belt-and-braces `[dir="rtl"]` rule all reset `letter-spacing: 0` (computed `normal`
verified on all 10 HE text elements). Local woff2, byte-identical (md5) to the `_fonts` kit:
`instrument-sans-400-600-latin`, `assistant-600-{hebrew,latin}`,
`assistant-700-{hebrew,latin}`, `geist-mono-400`; `unicode-range` subsets verbatim from
LICENSE.md.

## Mobile legibility — phone type floor v2 (hard gate)

16:9 renders ~375px wide on phones (× 0.195). **Headline moments ≥ 120px, labels ≥ 80px,
secondary (caption, chips) ≥ 64px on the 1920 canvas** (≈ 23 / 16 / 12.5px on a phone);
one large text moment on frame at a time; the widest headline in each locale must keep
**≥ 120px side margins, measured as rendered ink** (if not: reduce toward 120 or wrap, never
below). This film has no separate "label" role: its only text is the headline (128 / 140),
the caption (72 / 80) and the chips (80 / 88), all at or above their floor (→ 25 / 14 /
15.6px at 375 in EN). Node marks, the token, the queue cards, the ring and the rhythm beats
carry meaning by **structure + copper**, never by small text. Verified in
`snapshots-{en,he}/_legibility-375.png` (peak + closing); measured widths in REVIEW.md → v2.

## Layout v2 (1920×1080; EN shown, HE mirrors x → 1920 − x)

The composition spans x 185 → 1735 (81% of the width) and y 200 → 1015 (75% of the
height): headline band on top, the queue above the rail, the approved draft and the rhythm
below it, caption at the foot.

| Zone | Position (EN) | Size (v1 → v2) | Role |
|---|---|---|---|
| **Headline band** | `.lbl` top 200, full width, centred (rendered ink y ≈ 219–343) | 58 → 128px (HE 140) | one stage headline at a time, swapped in place; `#lbl5` is held to the end as the closing |
| **Material pile** | chips centred at (470,290) (1000,410) (520,530), rotations −6° / 4° / −3° | text 32 → 80px (HE 88); boxes 463 / 364 / 562 × 156 (EN) | `writing · calls · positions`; they merge into the token at node 0 |
| **Conveyor rail** | y = 640, x 185 → 1735 | 1290 → 1550px, stroke 3 → 4 | the pipeline; a copper token travels it; 6 node dots land as it passes |
| **Nodes** | x 245 / 531 / 817 / 1103 / 1389 / 1675 (pitch 286) | dot 30 → 40px | active ×1.18; the checkpoint (node 4) ×1.25 at the peak |
| **Token** | on the rail | 42 → 48px | the item in flight |
| **Review queue** | a deck centred over node 3: front card `#qc0` top 440 (440–590), `#qc1` top 410, `#qc2` top 380, each card behind narrower (560 / 516 / 472) and showing a 30px lip | 232×50 → **560×150**, 2 → 3 bars; opaque fill (the deck overlaps) | three drafts waiting; the lip (30) stays under the 34px bar inset so no bar of a card behind peeks over the edge |
| **Approval checkpoint** | node 4 (x 1389); the front draft travels to **below** it (top 690, 690–840) | ring 122 → 164px (→ ×1.9); check 46 → 80px, now on the draft | copper ring bloom + node glow; the draft warms to copper and the check draws; the queue advances one slot and keeps waiting |
| **Published rhythm** | four beats below the out end, y 765, x 1231 / 1379 / 1527 / 1675 (pitch 148, the last under node 5) | dot 20 → 40px, pitch 74 → 148 | the cadence; lands in reading order (EN left → right, HE right → left) where the approved draft sat |
| **Caption** | full width, top 920 (rendered ink y ≈ 944–1012) | 38 → 72px (HE 80) | `Nothing publishes without your approval`, peak through 11.0s |

Clearances (measured, `getBoundingClientRect` + ink scan): headline ink ↔ deck top ≈ 40px;
deck ↔ token 26px; token ↔ approved draft 27px; approved draft ↔ caption ink ≈ 98px; rail
nodes ↔ rhythm beats 81px.

`#camera` loop-continuous push-in `scale 1.0 → 1.015` into the peak, back to identity by
12.5s; ±5/±3px integer-cycle sine drift; `data-layout-allow-overflow`. Motion offsets and
blurs scale with the element sizes (headline rise 16 → 24px, blur 10 → 14px; rack blur 7 →
9px). The waiting queue takes a shallower defocus, 4px blur + `brightness(0.7)`, so "still
waiting" reads at the peak. It dims by brightness, **never by opacity**, because the cards
overlap and a translucent card shows the one behind it through its face. Same eases and
timings, so the grammar is unchanged.

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211` / `--bg-1 #1a1a18` / `--bg-2 #242420`, copper `--accent
#d96832`, cream `--fg-1 #f4f1ea`, muted `--fg-2 #b9b3aa` / `--fg-3 #8a847a`, hairlines
`--rule #2a2a26` / `--rule-strong #3a3a34`. Queue cards `#1d1d1b` (the v1 0.62-alpha card
fill, pre-blended over `--bg-0`), approved card `#34261e` (12% copper over that fill).
Renders transparent (`#review-bg` is REVIEW-ONLY, hidden before render).

## Source of truth (three-source rule — traced to `src/content/offers/ai-office-assistant.ts`)

The film's v1 source (`src/content/offers/linkedin-content-engine.ts`, its `example.map`)
no longer exists. Every on-frame string now traces to the page section the film lives in:
the **`included`** block (EN `:152–189`, HE `:393–428`), meaning its `intro`, its four `items`
(Voice profile · Weekly drafts · One review queue · Publishing rhythm) and the film
`caption`. Re-render if they change. Line numbers as of 2026-09-24. "Match" = verbatim
(case aside), or **near** when the film string is a close form of the site phrase.

### EN

| Element | Film string | Site phrase | Source | Match |
|---|---|---|---|---|
| Chips ×3 | `writing` · `calls` · `positions` | "Built from your existing writing, calls, and positions" | `included.items[0].desc` (Voice profile) `:159` | verbatim words |
| Headline 0 | `Your material` | "Your material becomes drafts in your voice…" | `included.film.caption` `:185` (also `intro` "your real material" `:155`) | verbatim |
| Headline 1 | `Angles proposed` | "angles proposed from your real material" | `included.intro` `:155` | verbatim |
| Headline 2 | `Drafts in your voice` | "…becomes drafts in your voice…" | `included.film.caption` `:185` (also `intro` "drafts written in your voice" `:155`) | verbatim |
| Headline 3 | `Review queue` | "One review queue" | `included.items[2].title` `:166` | verbatim (substring) |
| Headline 4 (peak) | `Your approval` | "…nothing published without your approval" | `included.intro` `:155` (also `film.caption` `:185`) | verbatim (substring) |
| Headline 5 = closing | `Published on rhythm` | "Publishing rhythm" | `included.items[3].title` `:170` | **near** |
| Caption (peak) | `Nothing publishes without your approval` | "…nothing publishes without your approval." | `included.film.caption` `:185` | verbatim |

### HE (RTL, mirrored — transcreation)

| Element | Film string | Site phrase | Source | Match |
|---|---|---|---|---|
| Chips ×3 | `כתיבה` · `שיחות` · `עמדות` | "נבנה מהכתיבה, השיחות והעמדות הקיימות שלכם" | `included.items[0].desc` `:400` | verbatim stems (prefixes מ/ה/ו dropped) |
| Headline 0 | `החומר שלכם` | "החומר שלכם הופך לטיוטות…" | `included.film.caption` `:424` | verbatim |
| Headline 1 | `זוויות מוצעות` | "זוויות שמוצעות מהחומר האמיתי שלכם" | `included.intro` `:396` | **near** (relative ש dropped) |
| Headline 2 | `טיוטות בקול שלכם` | "טיוטות בקול שלכם" | `included.intro` `:396` | verbatim |
| Headline 3 | `תור אישורים` | "תור אישורים אחד" | `included.items[2].title` `:407` | verbatim (substring) |
| Headline 4 (peak) | `האישור שלכם` | "…בלי אישור שלכם" | `included.intro` `:396` (also `film.caption` `:424`) | **near** (definite article added) |
| Headline 5 = closing | `מתפרסם בקצב` | "קצב פרסום" (+ intro "מתפרסם") | `included.items[3].title` `:411` (+ `intro` `:396`) | **near** |
| Caption (peak) | `שום דבר לא מתפרסם בלי אישור שלכם` | "…ושום דבר לא מתפרסם בלי אישור שלכם." | `included.film.caption` `:424` (also `intro` `:396`) | verbatim (conjunction ו dropped) |

v1 strings dropped because nothing on the site carries them any more: `calls · projects ·
wins` (the node-0 sub; `projects` and `wins` are gone, so the chips now carry the Voice
profile's own inputs), the separate `#sub0` line (it repeated the chips), `The approval point
is yours` (caption → the section's own safety line), and the closing `A steady LinkedIn
presence` (→ the out node's headline held to the end, the cap-agentic-systems pattern).

## Render (per command-center pipeline — DONE 2026-09-24, see REVIEW.md → "Render v2")

Save a pre-render copy of `index.html` → remove `#review-bg` (rule + element) → transparent
alpha WebM via `npm run render -- --format webm --quality high --video-bitrate 3M` → flip the
declared `lang` default to `"he"` and render again (`--variables` is unreliable on Windows) →
restore `index.html` from the copy (cmp-identical). ffmpeg: each alpha WebM decoded with
`libvpx-vp9` over a `#121211` underlay → H.264 MP4 (CRF 23, yuv420p, `+faststart`); poster =
**frame 276 (t = 9.2s, the approval peak)** of the WebM composited over `#121211`.
Outputs → `public/videos/linkedin-content-engine{,-he}.{mp4,webm}` + `-poster.png` (the
paths `included.film` already points at; no `src/` change).

## Hard "do not"

- ❌ No product UI / metrics / names / fake SaaS: schematic node marks + abstract cards.
- ❌ No "Sample data" chip (this is schematic, not a product screen).
- ❌ No WebGL bloom (flagship-only); one bounded copper ring at the peak.
- ❌ No `dir="rtl"` on `<html>`; no random/Date/async; no infinite repeats.
- ❌ No serif and no Inter on frame (spec v2); no Hebrew in Geist Mono; no letter-spacing on
  Hebrew.
- ❌ No text moment below the v2 floor (120 headline / 80 label / 64 secondary); never two
  headlines at once; no headline whose rendered ink leaves < 120px side margins.
- ❌ No on-frame string that does not trace to the tables above.
