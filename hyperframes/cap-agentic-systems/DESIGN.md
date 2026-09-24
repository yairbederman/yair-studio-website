# DESIGN — "One intake, run by agents" film

A ~12s looping film for `/studio/agentic-systems`, rendered directly under the hero
(`#film`). It **shows one office request run by agents**: a request enters, an agent
captures and sorts it, acts inside the office's own tools (a draft reply, a chase for
missing documents), the items that matter wait at the copper human-approval checkpoint
— **one approved, one deliberately left waiting** — and the request is answered and
tracked. HyperFrames composition (GSAP), transparent render, two locales (EN / HE-RTL)
from one composition via the `lang` variable.

Authored under the **settled cinematic grammar** (linkedin-content-engine precedent):
velocity-matched beat hand-offs, one depth-of-field rack focus onto the copper
human-approval checkpoint at the peak, and a loop-continuous camera (push-in capped at
1.5%). **No WebGL bloom** — that is the flagship (command-center) signature only.

**Current cut: film spec v2 (2026-09-24)** — re-cut after the owner rejected the v1
stills ("font looks bad. elements very small"). Binding spec:
`backlog/2026-09-24-studio-redesign-plan.md` (the "Film spec v2" note). Story, beats,
ids, timeline timing, loop continuity, trace table and honesty grammar are unchanged from
v1; **type and scale changed**. v1 history lives in REVIEW.md.

## Intent

- **Show the agents running, don't describe the capability.** The buyer watches one
  intake travel a real workflow with its decision point intact.
- **The approval is the peak, and it gates what leaves the office.** Upstream defocuses;
  the copper "Human approval" checkpoint stays sharp; a person checks one item and leaves
  the other waiting — "every action that leaves the office waits for a person", shown.
- **The payoff is a closed loop.** The out node lands, a run log writes in above it:
  answered, and tracked.

## Honesty grammar (schematic — no product UI, no chip)

A **schematic** film like its siblings (workflow-sprint, scattered-to-mapped,
linkedin-content-engine): a horizontal conveyor of node marks + one large active-stage
headline at a time. Work items are **abstract cards** (a status dot + three blank bars) —
structure, not a product screen, no readable text — so there is **no "Sample data" chip**
(the chip is the command-center grammar for real-UI films only). No metrics, no names, no
fake SaaS UI, no synthetic faces or voices, no neon.

## Locales — one composition, two renders (command-center precedent)

- `data-composition-variables` declares `lang` (`"en"` default). Script reads it via
  `window.__hyperframes.getVariables()`, indexes a `COPY` object, adds `.he` to `#stage`,
  and mirrors the layout via an `X()` position helper (`x → 1920 − x`).
- The pipeline is **horizontal**: EN flows **left → right**; HE (RTL) flows **right →
  left** (the whole axis mirrors; cards reverse their flex order and right-align their
  bars — a transcreation, not a flipped render).
- `dir="rtl"` on text elements only (`.lbl`, `.chip-inner`, `#caption`) — **NEVER on
  `<html>`** (blanks the render).

## Type — spec v2, sans only on frame (`hyperframes/_fonts/LICENSE.md`)

The serif (Newsreader / Frank Ruhl Libre) is a website-only headline voice — **not on
frame**; no `@font-face` for it in the composition.

| Role | EN | HE |
|---|---|---|
| Stage headline `.lbl` (one at a time) | Instrument Sans **600**, **128px**, −0.01em | Assistant **700**, **140px**, tracking 0 |
| Caption `#caption` (the one secondary line, peak only) | Instrument Sans **400**, **72px** | Assistant **600**, **80px**, tracking 0 |
| Intake chips `.chip-inner` | Geist Mono 400, **80px**, +0.02em (Latin chips only) | Assistant **600**, **88px**, tracking 0 |

**HE runs ×1.1 the EN size** (128→140, 72→80, 80→88): Assistant's Hebrew letter body
measures ~0.58–0.6 em against Instrument Sans's 0.73 em cap height (canvas-measured), so
equal px would read smaller in HE. Every HE size is still at or above the EN size, so the
floor holds in both.

**Hebrew is never mono and never letter-spaced**: `.he .mono`, `.he .lbl`, `.he #caption`
and the belt-and-braces `[dir="rtl"]` rule all reset `letter-spacing: 0` (computed
`normal` verified on every HE text element). Local woff2, byte-identical (md5) to the
`_fonts` kit: `instrument-sans-400-600-latin`, `assistant-600-{hebrew,latin}`,
`assistant-700-{hebrew,latin}`, `geist-mono-400`; `unicode-range` subsets verbatim from
LICENSE.md.

## Phone type floor v2 (hard gate)

16:9 renders ~375px wide on phones (× 0.195). **Headline moments ≥ 120px, labels ≥ 80px,
secondary (caption, chips) ≥ 64px on the 1920 canvas; one large text moment on frame at a
time; the longest headline in each locale fits with ≥ 120px side margins, measured as
rendered ink.** This film has no separate "label" role: its only text is the headline
(128 / 140), the caption (72 / 80) and the chips (80 / 88) — all at or above their floor
(→ 25 / 14 / 15.6px at 375 in EN). Node marks, the token, the sorted ticks, the work-item
cards, the ring and the run-log rows carry meaning by **structure + copper**, never by
small text. Verified in `snapshots-{en,he}/_legibility-375.png` (peak + closing).

## Layout v2 (1920×1080; EN shown, HE mirrors x → 1920 − x)

The composition spans x 185 → 1735 (81% of the width) and y 200 → 1006 (75% of the
height): headline band on top, work items above and below the rail, caption at the foot.

| Zone | Position (EN) | Size (v1 → v2) | Role |
|---|---|---|---|
| **Headline band** | `.lbl` top 200, full width, centred (rendered ink y ≈ 219–345) | 84 → 128px (HE 140) | one stage headline at a time (swaps in place); the out node's headline is held to the end as the closing |
| **Intake pile** | chips centred at (460,295) (860,410) (545,535), rotations −6° / 4° / −3° | text 64 → 80px (HE 88); box `email` 257×109 → 364×156 (≈2× area) | `email · form · call`; they merge into the token at node 0 |
| **Conveyor rail** | y = 640, x 185 → 1735 | 1290 → 1550px, stroke 3 → 4 | the workflow; a copper token travels it; 6 node dots land as it passes |
| **Nodes** | x 245 / 531 / 817 / 1103 / 1389 / 1675 (pitch 286) | dot 30 → 40px | active ×1.18; the checkpoint (node 4) ×1.25 at the peak |
| **Token** | on the rail | 42 → 48px | the request |
| **Sorted ticks** | three ascending bars above node 1 (centres 495 / 531 / 567, bottoms at y 590) | 5×(16/26/36) → 12×(40/64/90) | "captured and sorted" — structure only |
| **Work item A** (draft reply) | **above** the rail, top 440, centred x 881 (node 2 + 64, clear of the ticks by 28px) | 232×64 → **560×150**, 3 bars | solid card |
| **Work item B** (documents chase) | **below** the rail, top 690, centred under node 3 (x 1103) | 232×64 → **560×150**, 3 bars | dashed card (an outbound reminder) |
| **Approval checkpoint** | node 4 (x 1389): A travels to above it (440–590), B to below it (690–840) | ring 122 → 164px (→ ×1.9) | copper ring bloom + node glow; the rack-focus peak; A warms to copper + check, B keeps its open dot — waiting |
| **Run log** | three rows above the out node, x 1135 → 1735 (flush with the rail end), tops 460 / 512 / 564 | 220×6 → **600×16** | "tracked" — the top row copper; rows grow away from node 5 |
| **Caption** | full width, top 920 (rendered ink y ≈ 945–1012) | 64 → 72px (HE 80) | `Approve what matters` at the peak only |

Clearances (measured, `getBoundingClientRect`): ticks ↔ card A 28px; card A ↔ token
26px; token ↔ card B 28px; card B ↔ caption ink ≥ 98px; log ↔ token 36px.

`#camera` loop-continuous push-in `scale 1.0 → 1.015` into the peak, back to identity by
11.5s; ±5/±3px integer-cycle sine drift; `data-layout-allow-overflow`. Motion offsets and
blurs scale with the element sizes (label rise 16 → 24px, blur 10 → 14px; rack blur 7 →
9px) — same eases and timings, so the grammar is unchanged.

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211` / `--bg-1 #1a1a18` / `--bg-2 #242420`, copper `--accent
#d96832`, cream `--fg-1 #f4f1ea`, muted `--fg-2 #b9b3aa` / `--fg-3 #8a847a`, hairlines
`--rule #2a2a26` / `--rule-strong #3a3a34`. Renders transparent (`#review-bg` is
REVIEW-ONLY, hidden before render).

## Source of truth (three-source rule — verified against `src/content/studio/agentic-systems.ts`)

Every on-frame string traces to the capability page content file, **verbatim and in node
order**. Re-render if it changes. Line numbers as of 2026-09-24 (v2 re-verify; the HE
block moved +4 lines since v1).

### EN

| Element | Verbatim string | Source |
|---|---|---|
| Chips ×3 (node 0 sub) | `email` · `form` · `call` | `example.map.nodes[0].sub` (:105) |
| Headline 0 | `New request` | `example.map.nodes[0].label` (:105) |
| Headline 1 | `Captured and sorted` | `example.map.nodes[1].label` (:106) |
| Headline 2 | `Draft reply prepared` | `example.map.nodes[2].label` (:107) |
| Headline 3 | `Missing documents chased` | `example.map.nodes[3].label` (:108) |
| Headline 4 (human, peak) | `Human approval` | `example.map.nodes[4].label` (:109) |
| Headline 5 (out) = closing | `Answered and tracked` | `example.map.nodes[5].label` (:110) |
| Caption (peak) | `Approve what matters` | `how.steps[3].title` (human step) (:88) |

### HE (RTL, mirrored — transcreation)

| Element | Verbatim string | Source |
|---|---|---|
| Chips ×3 (node 0 sub) | `מייל` · `טופס` · `טלפון` | `he.example.map.nodes[0].sub` (:254) |
| Headline 0 | `פנייה חדשה` | `he.example.map.nodes[0].label` (:254) |
| Headline 1 | `נקלטת וממוינת` | `he.example.map.nodes[1].label` (:255) |
| Headline 2 | `טיוטת תשובה מוכנה` | `he.example.map.nodes[2].label` (:256) |
| Headline 3 | `תזכורת למסמכים חסרים` | `he.example.map.nodes[3].label` (:257) |
| Headline 4 (human, peak) | `אישור אנושי` | `he.example.map.nodes[4].label` (:258) |
| Headline 5 (out) = closing | `נענתה ובמעקב` | `he.example.map.nodes[5].label` (:259) |
| Caption (peak) | `מאשרים את מה שחשוב` | `he.how.steps[3].title` (human step) (:237) |

## Render (per command-center pipeline — DONE 2026-09-24, see REVIEW.md → "Render v2")

`#review-bg` hidden (`data-hidden`) → transparent alpha WebM via `npm run render --
--format webm` (`--video-bitrate` tuned to the size envelope) → ffmpeg charcoal `#121211`
MP4 + settled poster (tail frame ≈ 11.7s). HE via the default-flip route (flip the declared
`lang` default to `"he"`, render, flip back — `--variables` is unreliable on Windows).
Outputs → `public/videos/cap-agentic-systems{,-he}.{mp4,webm}` + posters. Then the
`film` block (`CapabilityFilm`, `src/content/studio/types.ts`) on the page content.

## Hard "do not"

- ❌ No product UI / metrics / names / fake SaaS / faces / voices — schematic node marks +
  abstract cards.
- ❌ No "Sample data" chip (this is schematic, not a product screen).
- ❌ No WebGL bloom (flagship-only); one bounded copper ring at the peak.
- ❌ No `dir="rtl"` on `<html>`; no random/Date/async; no infinite repeats.
- ❌ No serif on frame (spec v2); no Hebrew in Geist Mono; no letter-spacing on Hebrew.
- ❌ No text moment below the v2 floor (120 headline / 80 label / 64 secondary); never two
  headlines at once; no headline whose rendered ink leaves < 120px side margins.
- ❌ No on-frame string that does not trace to the table above.
