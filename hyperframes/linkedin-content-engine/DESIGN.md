# DESIGN — "The Content Engine" film

A ~13s looping film for `/offers/linkedin-content-engine`, rendered directly under
the hero (`#film`). It **shows the managed pipeline running**: your real material
enters, angles are proposed, drafts are written in your voice, everything waits in
one review queue, **nothing publishes without your approval**, and approved posts
go out on a steady rhythm. HyperFrames composition (GSAP), transparent render, two
locales (EN / HE-RTL) from one composition via the `lang` variable.

Authored under the **settled cinematic grammar** (Phase C): velocity-matched beat
hand-offs, one depth-of-field rack focus onto the copper human-approval checkpoint
at the peak, and a loop-continuous camera. **No WebGL bloom beat** — that is the
flagship (command-center) signature only.

## Intent

- **Show the engine, don't describe the service.** The buyer watches their material
  travel a real pipeline with its decision point intact (PRODUCT principle 3).
- **The approval is the peak, and it gates publishing.** All upstream stages defocus;
  the copper "Your approval" checkpoint stays sharp; one item gets the human check.
  Nothing publishes on its own — the offer's core promise, shown not claimed.
- **The payoff is rhythm.** The out-node resolves into a cadence of evenly-spaced
  published beats — "a steady presence", the thing the client is buying.

## Honesty grammar (schematic — no product UI, no chip)

This is a **schematic** film, like its offer-film siblings (workflow-sprint,
scattered-to-mapped): a horizontal conveyor of node marks + one large active-stage
label at a time. The "Review queue" is drawn as **abstract stacked cards** (a status
dot + two blank bars each) — **structure, not a product screen and no readable post
text** — so it carries **no "Sample data" chip** (chip is the command-center grammar
for real-UI films only). No metrics, no names, no fake SaaS UI, no neon/sparkles.

## Locales — one composition, two renders (command-center precedent)

- `data-composition-variables` declares `lang` (`"en"` default). Script reads it via
  `window.__hyperframes.getVariables()`, indexes a `COPY` object, mirrors the layout
  for HE via an `X()` position helper (`x → 1920 − x`).
- The pipeline is **horizontal**: EN flows **left → right**; HE (RTL) flows **right →
  left** (the whole axis mirrors — an RTL transcreation, not a flipped render).
- `dir="rtl"` on text elements only — **NEVER on `<html>`** (blanks the render).
- Fonts: EN = Inter 600 (labels) / Inter 400 + Geist Mono (subs, node ticks). HE =
  Assistant 600 (`--font-body-he`) + Geist Mono for latin subs. Local woff2.

## Mobile legibility (hard gate)

16:9 renders ~330–375px wide on phones (scale ≈ 0.19). Legibility rule (workflow-sprint
pattern): **one large active-stage label at a time** (≥ 56px → ≥ ~11px mobile), never
more than one big text moment on frame; the six node labels do **not** all sit large at
once. Node marks, the review-queue cards, and the published-rhythm ticks carry meaning
by **structure + copper**, not small text. 375px legibility snapshot of the peak and
the rhythm finale before render.

## Layout (1920×1080; EN shown, HE mirrors x → 1920 − x)

| Zone | Position (EN) | Role |
|---|---|---|
| **Conveyor rail** | horizontal, y ≈ 620, x 220 → 1700 | the pipeline; a copper token travels it; 6 node dots land as it passes |
| **Active label** | centered above the active node, y ≈ 430 | one large stage label at a time (swaps in place); node-0 carries the `sub` |
| **Review queue** | stack above node 3 (x ≈ 1050, y 250→560) | 3 abstract draft cards (dot + 2 bars); schematic, no text |
| **Approval checkpoint** | node 4 (x ≈ 1360) | copper ring + check; the rack-focus peak |
| **Published rhythm** | node 5 → right (x ≈ 1620), even ticks | cadence of published beats — the signature finale |
| **Caption / closing** | bottom, y ≈ 980 | safety line at the peak; closing line at the end |

`#camera` loop-continuous push-in `scale 1.0 → 1.03` into the peak, back to identity by
the tail; `data-layout-allow-overflow`.

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211` / `--bg-1 #1a1a18` / `--bg-2 #242420`, copper `--accent
#d96832`, cream `--fg-1 #f4f1ea`, muted `--fg-2 #b9b3aa` / `--fg-3 #8a847a`, hairlines
`--rule #2a2a26` / `--rule-strong #3a3a34`. Renders transparent (`#review-bg` is
REVIEW-ONLY, removed before render).

## Source of truth (three-source rule — verified against `linkedin-content-engine.ts`)

Every on-frame string traces to the offer content file. Re-render if it changes.

### EN

| Element | Verbatim string | Source |
|---|---|---|
| Node 0 + sub | `Your material` · `calls · projects · wins` | `example.map.nodes[0]` (label + sub) |
| Node 1 | `Angles proposed` | `example.map.nodes[1]` |
| Node 2 | `Drafts in your voice` | `example.map.nodes[2]` |
| Node 3 | `Review queue` | `example.map.nodes[3]` |
| Node 4 (human) | `Your approval` | `example.map.nodes[4]` (human) |
| Node 5 (out) | `Published on rhythm` | `example.map.nodes[5]` (out) |
| Caption (peak) | `The approval point is yours` | `example.intro` |
| Closing | `A steady LinkedIn presence` | `hero.lead` ("a steady LinkedIn presence") |

### HE (RTL, mirrored — transcreation)

| Element | Verbatim string | Source |
|---|---|---|
| Node 0 + sub | `החומר שלכם` · `שיחות · פרויקטים · הצלחות` | `he.example.map.nodes[0]` |
| Node 1 | `זוויות מוצעות` | `he.example.map.nodes[1]` |
| Node 2 | `טיוטות בקול שלכם` | `he.example.map.nodes[2]` |
| Node 3 | `תור אישורים` | `he.example.map.nodes[3]` |
| Node 4 (human) | `האישור שלכם` | `he.example.map.nodes[4]` |
| Node 5 (out) | `מתפרסם בקצב` | `he.example.map.nodes[5]` |
| Caption (peak) | `נקודת האישור שלכם` | `he.example.intro` |
| Closing | `נוכחות קבועה בלינקדאין` | `he.hero.lead` |

## Render (per command-center pipeline)

`#review-bg` removed → transparent alpha WebM (`--video-bitrate` tuned to the size
envelope) → ffmpeg charcoal `#121211` MP4 + settled poster (tail frame). HE via the
default-flip route (flip declared `lang` default to `"he"`, render, flip back).
Outputs → `public/videos/linkedin-content-engine{,-he}.{mp4,webm}` + posters.

## Hard "do not"

- ❌ No product UI / metrics / names / fake SaaS — schematic node marks + abstract cards.
- ❌ No "Sample data" chip (this is schematic, not a product screen) — unless a stage
  reads as real UI at the stills stop, then add it (command-center grammar).
- ❌ No WebGL bloom (flagship-only); one bounded copper ring at the peak.
- ❌ No `dir="rtl"` on `<html>`; no random/Date/async; no infinite repeats.
- ❌ No on-frame string that does not trace to the table above.
