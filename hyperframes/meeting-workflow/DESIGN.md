# DESIGN — Meeting Follow-up process film

A ~12s looping film that shows one real workflow running end to end. It demonstrates
the method; it does not decorate. Built as a HyperFrames composition (GSAP timeline),
rendered to transparent video for the `/workflows` page.

## Intent

- **Show, don't claim.** The film *is* the proof — a real sequence with its approval
  point intact (PRODUCT.md design principles 1, 3, 5).
- **Restraint reads as accuracy.** One signal colour, hairline structure, generous
  space. No spectacle.
- **Human approval is the peak.** The copper checkpoint is the brand's differentiator
  and the emotional centre of the film.

## Layout — two columns

| Column | x | Role |
|---|---|---|
| **Process spine** | rail at `520px` | The 6-step workflow as a vertical `.sch-*`-style spine (dot + label), pulse travelling top→bottom. |
| **Evidence** | `1120px` | What each step produces — chips, a draft card, the Approved badge, the resolved task rows. "Evidence-led", right of its step. |

Node y-centres: `168, 312, 456, 600, 744, 888` (gap 144). Stage 1920×1080.

## Tokens (mirror `src/app/globals.css` — canonical source)

| Token | Value | Use |
|---|---|---|
| `--bg-0` | `#121211` | page charcoal (render is transparent; this is the page it sits on) |
| `--bg-1` | `#1a1a18` | chip / card / row surface |
| `--fg-1` | `#f4f1ea` | active label |
| `--fg-3` | `#8a847a` | inactive label / caption |
| `--accent` | `#d96832` | the single signal colour — pulse, active dot, approval |
| `--rule` / `--rule-strong` | `#2a2a26` / `#3a3a34` | hairlines, borders |
| Type | Inter (labels), Geist Mono (tags/captions) | local `@font-face` woff2 in `assets/fonts/` |

## Motion rules (per impeccable/animate.md)

- Easing: `power1.inOut` (pulse travel), `power3.out` (reveals). **No bounce/elastic.**
- Transform + opacity + `filter: blur` (DOF focus pull) only. Bounded copper bloom
  (one ring, fades out). Camera push-in is a restrained `scale 1.0 → 1.035`.
- Inactive nodes sit at `opacity .5` + `blur(1.6px)`; activating a node pulls it into
  focus. During the approval hold, everything else dims to `.3`.

## Hard "do not" (per brief)

- ❌ No fake SaaS UI, no fabricated metrics/numbers, no client/company names.
  Task rows are **abstract** (status mark · label bar · owner dot · date bar) — structure,
  not data. Chips read `decision` / `task` / `owner` / `date` — generic schematic tags.
- ❌ No neon, no glow beyond one bounded copper ring, no AI sparkles. Input particles
  are document fragments (transcript / recording / notes), not magic dust.

## Render

- Transparent **WebM** (`--format webm`) primary; **MP4** on charcoal fallback; **poster PNG**.
- `#review-bg` (charcoal) is **REVIEW-ONLY** — delete before the transparent render.
