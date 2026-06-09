# DESIGN — "One System" overview film

A ~13s looping film showing that the four offers are **equal entry points that
converge into one operating system**, gated by a human-approval checkpoint.
Companion to Film 1 (meeting-workflow): that one is depth on one workflow; this
is breadth across the whole offering. HyperFrames composition (GSAP), rendered to
transparent video for the homepage Offers section.

## Intent

- **Four peers, one system.** No offer is elevated — they appear as equal lanes
  and converge. Honors PRODUCT.md's deliberately-undecided wedge.
- **Show, don't claim.** Each lane carries concrete signals from its real offer
  summary; the payoff is a legible operating system, not a glossy dashboard.
- **Human approval is the peak.** The four lanes pause at a copper checkpoint
  before the system runs (PRODUCT principle 5).

## Layout — convergence (left → right)

| Zone | x | Role |
|---|---|---|
| **Offer lanes** | dots at `130`, labels from `160` | 4 equal lanes (label + mono signal line), y-centres `230/440/650/860` |
| **Converging rails** | `690 → 1150` | SVG curves funnel each lane into the junction (drawn via `stroke-dashoffset`, `pathLength=1`) |
| **Junction** | `1150, 540` | copper **Human approval** checkpoint — ring bloom + ✓ Approved (the peak) |
| **Operating system** | `1300 → 1770` | core + "One operating system" + clear-next-action rows + weekly-rhythm bar |

Stage 1920×1080. `#camera` does a restrained push-in (`scale 1.0 → 1.03`); it's
marked `data-layout-allow-overflow` because the full-frame SVG rail layer exceeds
the canvas box when scaled (no visible text/node ever clips).

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211`, copper `--accent #d96832`, cream `--fg-1 #f4f1ea`,
muted `--fg-3 #8a847a`, hairlines `--rule/-strong`. Type: Inter (labels 600) +
Geist Mono (signals/captions), local `@font-face` woff2 reused from Film 1.

## Motion (per impeccable/animate.md)

- Lanes rise in (peers), then activate with a focus pull (`blur 1.6→0` + copper
  dot + label brighten) as their rail draws to the junction.
- Convergence → approval **hold** (~2.5s): dim everything else, bounded copper
  ring bloom, ✓ Approved. Then the core rail draws and the system resolves
  (rows stagger in, weekly bar fills once).
- Easing: `power1.inOut` (rail draw), `power3.out` (reveals). No bounce. No
  infinite repeat — the weekly bar fills a single time.

## Hard "do not" (per brief)

- ❌ No fake SaaS UI / metrics / numbers / client names. Rows = abstract
  (status · bar · owner). Signals are short schematic tags traced to `offers.ts`.
- ❌ No neon, no AI sparkles. One bounded copper ring at the approval peak.
