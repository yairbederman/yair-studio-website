# DESIGN — "Scattered → Mapped" film (Film 4)

A ~13s looping film for the capability page **`/studio/process-optimization`**
("The map you receive" — formerly the homepage Evidence band). The before
literally becomes the after: scattered request fragments untangle and land as
nodes on a mapped workflow spine, gated by a human-approval peak. HyperFrames
composition (GSAP), rendered to transparent video, embedded above the page's
static workflow map.

**Differentiation from Film 1 (meeting-workflow):** Film 1 converges inputs
into the *first* node of a left-side spine, then walks the flow down. Here the
*entire before-state* is the material — the chaos fragments each resolve into a
*different* node on a right-side spine (mirrored composition), while a
left-side "ledger" of the four real before-clauses — two on frame at a time —
tidies itself (straightens + strikes through, then clears for the next pain)
as each pain is answered. The mess becomes the map.

> **Film spec v2 (2026-09-24, binding).** The first retune stills were rejected
> ("font looks bad. elements very small."). v2 = **sans only on frame**, elements
> **fill ~80% of the canvas**, type floor **headlines ≥ 120 · node labels ≥ 80 ·
> secondary ≥ 64** on the 1920 canvas, one large text moment at a time. Everything
> below describes the v2 cut; the retune-v1 record is REVIEW.md → "Retune 2026-09-24".

## Intent

- **Transformation, not adjacency.** The static section asks the visitor to
  connect two panels mentally; the film shows one becoming the other.
- **Show, don't claim.** No metrics, names, or fake UI. The improvement shown
  is structural — exactly what the section intro promises.
- **Human approval is the peak.** Copper checkpoint with ring bloom + hold,
  the signature beat shared with Films 1–3. It receives **no chaos fragment**:
  approval is the thing the system *adds*, not a rearranged piece of the mess.

## Source of truth (three-source rule)

Every text element traces to `src/content/studio/process-optimization.ts` →
`example` (EN `en.example`, HE `he.example`). Line refs re-checked 2026-09-24 (v2).

| On-frame text | EN source | HE source |
|---|---|---|
| `Before the map` (headline) | `example.intro` `:114` — the clause before the colon, verbatim | `he.example.intro` `:279` — `לפני המפה`, verbatim |
| `Mapped workflow` (headline) | `example.map.caption` `:116` | `he.example.map.caption` `:281` |
| Ledger ×4 (64px, two lines each) | the four "before" clauses of `example.intro` `:114`, sentence-cased (`requests arrive…` → `Requests arrive…`), each split at a word boundary into two lines | the four clauses of `he.example.intro` `:279`, verbatim, split the same way |
| Node labels ×6 | `example.map.nodes[].label` `:119-124`, verbatim | `he.example.map.nodes[].label` `:284-289`, verbatim |
| Chips ×6 (64px) | contractions of the intro clauses / `nodes[0].sub` (`email` `chat` `call` `status?` `follow-up?` `what is open?`) | HE contractions (`מייל` `צ'אט` `טלפון` `סטטוס?` `מעקב?` `מה פתוח?`) |
| Film caption (page, not baked) | `film.caption` `:36-37` | `film.caption` `:201-202` |

`nodes[0].sub` (`email · chat · call`) is **no longer set as on-frame text** (v2): at
the 64px floor it is a 723px mono line that cannot sit under `Incoming request`
inside the node pitch, and the three chips that fly into that node *are* the sub.

**Re-render this film if `example.intro` or `example.map` copy changes** — the
video bakes it in. The page's `film` block (EN `:31-39`, HE `:196-204`) points at
the rendered assets.

## Geometry (1920×1080, hero frame = settled end state)

Geometry lives in **one place**: the JS constants at the top of the timeline
script. At init they set the CSS vars (`--left-x --rail-x --rail-top --rail-h
--dot --label-gap --label-x`), the node and ledger tops, the approval-ring top
and the chip-wrapper boxes; `fly()` derives every chip flight vector from them
(`RAIL_X − cx`, `NODE_Y[target] − cy`). Nothing is measured from the DOM, so
the vectors are font-race-free in both locales.

| Constant | Value | Why |
|---|---|---|
| `LEFT_X` | 100 | ledger + chaos column `100 → ~710`, and the `Before the map` headline |
| `RAIL_X` | 740 | rail (3px); leaves the ledger's widest line (`email, chat, and calls`, 597px ink) a ~30px gap |
| `DOT`, `LABEL_GAP` | 40, 24 | node dots ≈ 40px; labels (and `Mapped workflow`) start at `LABEL_X = 784` |
| `NODE_Y` | `290 428 566 704 842 980` (pitch **138**) | first label clears the 120px headline band (cap ink ≈ y 111–199, descenders to ≈ 225); last label ink ends ≈ y 1010 |
| `LED_TOP` | A `270`, B `640` | two ledger slots, each clause = 2 × 70.4px lines |
| `CHIP_BOX` | 560 × 100 | fixed drift box, chip centred (widest chip `what is open?` ≈ 543px) |
| `CHIP_REST` | email `230,478` · chat `585,500` · call `395,572` · status? `290,850` · follow-up? `480,950` · what is open? `400,905` | middle band (y ≈ 430–625, between the slots) and bottom band (y ≈ 800–1015) |

**Why pitch 138, not ≈ 150:** a 150 pitch from the spec's ~y 200 start would put
`Incoming request` inside the 120px `Mapped workflow` headline (same x column). The
column therefore starts at 290 and ends at 980 — label ink spans y 259 → 1009, the
spine + headline together y 110 → 1009 (≈ 83% of the height); content spans
x 100 → 1778 (≈ 87% of the width).

**The fit rule (ink measured from rendered pixels — the element isolated on charcoal, camera applied):** `Owner + due date
assigned` at 80px Instrument Sans 600 = **983px ink**, x 786 → 1768 → **151px right
margin at rest**, **130px at the peak** (1.03 push-in + drift + rack-focus blur).
HE longest label `משויכת לאחראי ולתאריך יעד` (Assistant 700, 898px ink) starts at
x 235 at rest / 210 at the peak. `#camera` push-in `scale 1.0 → 1.03` around
(1100, 540) (HE 820, 540); marked `data-layout-allow-overflow`. The chaos field is
intentionally overlapping → `data-layout-allow-overflow` + `data-layout-allow-overlap`.
`#review-bg` (charcoal, inside `#camera`) exists for `check`/`snapshot` only —
**remove it before `npm run render`, restore after.**

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211`, copper `--accent #d96832`, cream `--fg-1 #f4f1ea`,
`--fg-2 #b9b3aa`, muted `--fg-3 #8a847a`, hairlines `--rule/-strong`.

**Type — sans only on frame** (`hyperframes/_fonts/LICENSE.md`; woff2 copied
byte-identical into `assets/fonts/`, `@font-face` blocks verbatim from the kit,
incl. the "film spec v2" Assistant 700 block). The serif (Newsreader / Frank Ruhl
Libre) is a website-only headline voice — its `@font-face` rules are gone.

| Role | px | EN | HE |
|---|---|---|---|
| Headlines `.cap` (`Before the map`, `Mapped workflow`) + the peak `#n4 .label` (`Human approval`) | 120 | Instrument Sans 600, −0.01em | Assistant 700, tracking 0 |
| Node labels `.node .label` ×5 | 80 | Instrument Sans 600, −0.01em | Assistant 700, tracking 0 |
| Ledger `.led` | 64 | Instrument Sans 400 | Assistant 600, tracking 0 |
| Chips `.chip` | 64 | Geist Mono 400, tracking 0 | Assistant 600, tracking 0 (**Hebrew is never mono, never letter-spaced**) |

HE families are set **explicitly per role** (`.he .cap, .he .node .label` → 700;
`.he .led, .he .chip` → 600). `assets/fonts/` holds exactly the six referenced
files (the Newsreader, Frank Ruhl Libre and Inter orphans were pruned at render v2).

## Mobile legibility (type floor v2 — gate before every render)

Served full-bleed on phones: **375px wide = × 0.195** of the 1920 canvas. Floor
(film spec v2, backlog/2026-09-24-studio-redesign-plan.md): **headline moments ≥ 120,
node labels ≥ 80, secondary (ledger, chips) ≥ 64** → ≈ 23.4 / 15.6 / 12.5px on a phone.

| Moment | Element | px | @375 | Floor | Status |
|---|---|---|---|---|---|
| `Before the map` (0.15–3.35s) | `#cap-before` | 120 | 23.4 | 120 | PASS |
| `Mapped workflow` (3.05s→) | `#cap-mapped` | 120 | 23.4 | 120 | PASS (dimmed 0.45 + 4px defocus through the peak) |
| `Human approval` (peak, 8.3s→) | `#n4 .label` | 120 (×1.06 at the peak ≈ 127) | 23.4 | 120 | PASS |
| 5 node labels | `#n0–#n3, #n5 .label` | 80 | 15.6 | 80 | PASS |
| Ledger ×4 (two on frame) | `.led` | 64 | 12.5 | 64 | PASS |
| Chips ×6 | `.chip` | 64 | 12.5 | 64 | PASS |

**18 text moments (EN and HE identical px): 18 PASS · 0 STRUCTURAL · 0 FAIL.**
(`email · chat · call` sub: cut from frame — see Source of truth.)

- **One large text moment at a time.** The two headlines are handed off
  (`Before the map` exits upward at 2.9s as `Mapped workflow` rises at 3.05s);
  node labels ghost in blurred at 50% and become readable only as each one
  activates; at the peak the rack focus blurs + dims the upstream labels **and
  `Mapped workflow`**, so the copper `Human approval` is the sole in-focus
  headline. The settled frame (poster) shows the complete list — the payoff, by design.
- **Ledger route — two clauses on frame at a time (a queue).** At 64px each
  clause needs two lines in the ~600px left column (EN widest line 597px ink), so
  the four clauses cannot all be on frame beside the chaos field. Two slots:
  **A** shows `led0` then `led2`, **B** shows `led1` then `led3`. A clause is struck
  when its chip lands, then **clears** (up + fade) and the next pain rises into its
  slot; the last two (`led2`, `led3`) stay struck into the settle. All four pains
  appear, each is answered by its own node, and no more than two clauses are on
  frame apart from a 0.2s crossfade at each hand-off. The "two lines total" route was
  rejected: it drops two pains and breaks the one-pain-per-node resolution map.
- **Chips arrive with the queue.** Act 1 carries five chips (the three channels in
  the band between the slots, `status?` + `follow-up?` in the band below);
  `what is open?` arrives with its clause (`led3`, 7.55–8.15s) and waits through the
  peak — still open. Never more than five chips on frame.
- Verified per locale on `snapshots-<lang>/_legibility-375.png` (peak 9.3s +
  closing 12.8s at 375px wide, side by side) before the render stop.

## Motion

- Chaos: varied entrance directions/eases per element; slow finite drift on the
  chip wrappers (sine.inOut yoyo, an **even** number of halves computed per chip so
  each wrapper is back at y 0 exactly when its flight starts — landings are exact,
  never `repeat: -1`). Chips sit centred in fixed drift boxes (`.chipw`) so flight
  tweens never share a transform with drift tweens and the flight origin is
  text-width-independent.
- Headline hand-off: `Before the map` leaves upward (`y −18`, `power2.in`) as
  `Mapped workflow` rises into place (`y 18 → 0`) — same direction, velocity-matched.
- Untangle: chips fly to their node dots (`power2.inOut`), shrink (→ 0.15) + blur +
  dissolve; node activates (blur 2→0, copper dot, label brightens); the matching
  ledger clause straightens (`rotation→0, x→0`), dims to `--fg-3`, and its two
  strikes draw line by line (`scaleX 0→1`, 0.12s apart).
- Ledger queue: a resolved clause clears upward (`y −22`, `power2.in`) as the next
  rises into the slot from below (`y 24 → 0`) — the headline hand-off grammar again.
- Approval: rack focus (upstream blur 2→5px + dim, `Mapped workflow` dims to 0.45 +
  4px defocus), bounded copper ring bloom (104px → 1.55×), ~1.5s hold; the settle
  refocuses everything.
- The last chip (`what is open?`) deliberately survives the peak — still open —
  then resolves into **Tracked to done**.
- Easing: `power1/2.inOut` (travel), `power3/expo.out` (reveals). No bounce.

> **Cinematic regrade (Phase C2, 2026-07-13).** The choreography above was regraded
> to the settled film grammar: velocity-matched chip flights (accelerate + blur into
> the node), a deepened depth-of-field rack focus onto the copper Human-approval
> checkpoint at the peak, and a loop-continuous camera (pure functions of `t`, identity
> at t=0 and t=13). Full choreography record: REVIEW.md → "Cinematic regrade".
> **Retune (2026-09-24)** and **v2 (2026-09-24):** type, sizes, geometry, the ledger
> queue and the headline hand-off changed; the grammar, ids, single paused timeline,
> 13s duration and loop seam did not — see REVIEW.md → "Retune 2026-09-24" and
> "v2 2026-09-24".

## Locales — HE (added Phase E: one composition, layout mirrored)

Bilingual via the `lang` `data-composition-variables` (EN default). Unlike the
`X()`-per-coordinate route (command-center), this film positions in left-origin
pixels across markup + CSS + JS flight vectors with variable-width text — so HE
uses a **`scaleX(-1)` container mirror** instead:

- A `#mirror` wrapper (inside `#camera`) gets `transform: scaleX(-1)` for HE
  (via a `.he` class on `<html>`), reflecting **every position** across the frame
  centre — including the GSAP chip-flight vectors, so the timeline stays
  locale-agnostic (no per-delta sign juggling).
- Inner `.t` text spans (+ node labels) are **un-flipped** (`scaleX(-1)` again) so
  the Hebrew reads correctly: double-flip = mirrored layout with correctly-oriented
  text. **NOT a backwards flipped render** — a transcreation. `direction: rtl` on
  those spans puts a chip's trailing `?` at the visual left. Ledger lines (`.ln`) are
  left-aligned in mirrored space, i.e. right-aligned on screen; their strikes draw
  right → left.
- HE type is per role (Assistant 700 headlines + node labels / Assistant 600 ledger
  + chips, tracking 0 — see Tokens); the camera push-in pivot mirrors to
  `X(1100)=820`. EN gets no `.he` class.
- Every HE string traces to `process-optimization.ts` → `he.example` (see the
  Source of truth table). Full COPY table in `index.html`.
- HE renders and snapshots: flip the declared `lang` default to `"he"`, run
  without flags, flip back (never `--variables`, never `dir` on `<html>`).

## Render gotcha — derive MP4 + poster from the MOV master, never the VP9 WebM

The `#spine-glow` is a large smooth radial gradient. **VP9 (the alpha WebM) bands
it** — both EN and HE WebMs show it (a webm frame is ~0.9 MB vs a clean ~0.15 MB).
The clean MP4 + poster come from the **ProRes MOV master** (`render --format mov`)
→ ffmpeg charcoal H.264 + poster, exactly the route this film's REVIEW documented.
Deriving the MP4/poster from the pre-banded VP9 WebM bakes the banding in (a harsh
copper disc at the settle). MP4 is the primary source (mp4-first in `FilmPlayer`);
the banded WebM is the fallback and is masked in motion.
**Render v2 measurement:** the WebM-derived and MOV-derived MP4s differ from the
lossless snapshot in the glow by ≤ 5/255 either way, but the MOV route is +0.5–0.8 dB
full-frame PSNR at ~20% fewer bytes for the same CRF, and the fallback WebM must be
re-encoded under 6 MB anyway — so all three assets derive from the MOV master
(REVIEW.md → "Render v2 (2026-09-24)").

## Hard "do not" (per brief + PRODUCT.md)

- ❌ No fake SaaS UI, metrics, numbers, client names.
- ❌ No neon, no AI sparkles; one bounded copper ring at the peak.
- ❌ No infinite repeats; fully deterministic (no random/Date/async).
