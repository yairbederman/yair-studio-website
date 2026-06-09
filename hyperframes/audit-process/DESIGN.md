# DESIGN — AI Workflow Audit film (v3: "Three kinds of work")

A ~12s looping film for `/offers/ai-workflow-audit`. **Type-forward and reductive.**
Large Inter headlines carry every beat; the only persistent graphic is an abstract
field of ~15 task tiles (no labels). The audit resolves a messy field of work into
three clearly-named kinds — **Automate / Assist / Human judgment** — then into one
defined system. HyperFrames composition (GSAP), transparent render.

## Why v3 (what v1/v2 got wrong)

v2 was a labelled diagram: small, thin, low-contrast Geist Mono (13–17px) that turned
to mush at offer-page embed size; a copper bloom ring + color snaps that read as an
"orange flash"; ~40 elements competing. v3 fixes all three: **few, large, high-contrast
words**; **one continuous copper emphasis** (no ring, no snaps); **one idea per beat**.

## Visual system

- **Type (the legibility fix).** Inter 600. Bookend headlines **68px**, the three "aha"
  lines **60px**, cream `#f4f1ea` on charcoal — high contrast. The only small text is one
  corner wordmark `AI WORKFLOW AUDIT` (Geist Mono, 22px, copper). Verified legible
  downscaled to 720px (embed size).
- **Tiles (abstract = declutter).** ~15 rounded-rect units (56×38px), `--bg-2` fill +
  hairline border + soft drop-shadow (2.5D depth). No text. Positioned entirely by GSAP
  from a `0,0` origin. Phases: messy scatter → ordered 5×3 grid → split into three rows →
  consolidated grid. Row 2 (5 tiles) is the human group.
- **Copper = ONE continuous emphasis (the flash fix).** (1) a single slow copper
  **sweep-line** glides L→R once during "the audit reads it"; (2) the human group's tiles
  **warm to copper** (smooth color tween) and a **steady radial glow rises over ~1.1s and
  holds** — never scales, never flashes, never snaps. No bloom ring anywhere.
- **Motion (filmic).** Slow eased flows (`power2/3.inOut`), crossfaded headlines (not
  cuts), DOF focus pull (`blur 2→0`) as the grid forms, continuous camera push-in
  `scale 1.0→1.025`. The peak is a **hold**, not a hit.

## Layout (1920×1080)

| Zone | x | Role |
|---|---|---|
| **Wordmark** | left `160`, top `110` | small copper mono accent (the only small text) |
| **Headlines** | left `160`, vert-centred `540` (bookends) or aligned to tile rows `340/540/740` (aha lines) | the hero — large Inter |
| **Tile field** | cols at `1100–1540`, rows compact `472/552/632` → spread `340/540/740` | abstract work units; right of the type |
| **Human glow** | centred under the bottom tile row | steady copper radial, held |

Safe margins respected (type from x160; tiles end ~x1568; ✓ at x1612 < 1800).

## Tokens
Charcoal `--bg-0 #121211`, tile `--bg-2 #242420`, copper `--accent #d96832`, cream
`--fg-1 #f4f1ea`, hairlines `--rule/-strong`. Local woff2 (Inter 600 + Geist Mono),
no external fonts.

## Atmosphere note (deliberate)
No baked grain/vignette — they fight a transparent (alpha) asset (Films 1–2 omit them
too). Depth comes from tile drop-shadows, the DOF focus pull, the steady copper glow,
and the slow camera. A page-level vignette can sit *behind* the embedded video if wanted.

## Hard "do not" (per brief)
- ❌ No fake SaaS UI / metrics / numbers / company names — tiles are abstract, no labels.
- ❌ No neon, no sparkles, no bloom flash — one slow sweep + one steady held glow.
