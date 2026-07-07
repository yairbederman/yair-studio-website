# DESIGN — "Office Assistant" flagship film

An ~18s film for the Managed AI Office Assistant page (and candidate homepage
hero film): **a day in the office, run by the assistant**. Four recurring work
streams — morning briefing, email triage, document workflows, follow-up — each
pass through **one copper human-approval checkpoint** before they land in the
office's day. Successor to the retired `one-system` film (whose lane labels
were the old taxonomy). HyperFrames composition (GSAP), rendered to transparent
video, in **two locales** (EN / HE-RTL) from one composition.

## Intent

- **The flagship story, not a catalog.** One offer, told as a day: overnight
  inputs → the four work streams the assistant handles → a decided day.
  (PRODUCT principle 2: problem and outcome before technology.)
- **Human approval is the peak.** Every chip pauses at the same copper gate;
  the film's held beat belongs to "Human approval" (PRODUCT principle 5).
- **Show, don't claim.** Rows and chips are structural schematics — no fake
  UI, no metrics, no names (PRODUCT principle 1 + anti-references).
- **Bold in craft, disciplined in claims.** Larger type, a confident single
  storyline, one signature moment (the gate bloom) — but every word on frame
  traces to `src/content/offers/ai-office-assistant.ts`.

## Locales — one composition, two renders (owner requirement 2026-07-07)

- `data-composition-variables` declares `lang` (`"en"` default). The script
  reads it via `window.__hyperframes.getVariables()`, picks the copy set, and
  **mirrors the layout** for Hebrew (chips flow right→left) via the `X()`
  position helper. `dir="rtl"` is set on the rows/labels only — NEVER on
  `<html>`: that blanks the hyperframes render pipeline (see REVIEW.md).
- Renders AND snapshots for HE: flip the declared `lang` default to `"he"`
  temporarily and run without flags (`--variables` also proved unreliable on
  Windows shells), then flip back.
- Type: EN = Inter 600 (local woff2). HE = **Assistant 600** (the site's
  `--font-body-he`, local woff2, hebrew+latin subsets). No mono text on frame.

## Mobile legibility (owner requirement 2026-07-07)

The 16:9 frame renders at ~330px wide on phones (scale ≈ 0.17), so the film
uses **fewer, larger text elements** than the retired films:

- Exactly **7 text moments**, one at a time (act labels swap in place).
- Act labels 84px (≈14px at 330w), approval label 64px (≈11px), closing 96px.
- No small mono signal lines. Secondary meaning is carried by **shape**
  (mail/calendar/document glyphs, chip contents), never by small text.

## Layout (1920×1080 stage; EN shown, HE mirrors x → 1920−x)

| Zone | Position (EN) | Role |
|---|---|---|
| **Act label** | centered x=960, y≈150 | the single large text moment per act |
| **Origin cluster** | x≈300, y=620 | overnight glyphs; where each chip forms |
| **Rail** | y=620, x 300→1560 | the day's path, through the gate |
| **Gate** | x=960, y=620 | copper human-approval checkpoint (+ label below at peak) |
| **Day panel** | x 1330–1790, y 400–840 | the office's day; four abstract rows accumulate |

`#camera` does a restrained push-in (scale 1.0 → 1.03), marked
`data-layout-allow-overflow` (full-frame SVG rail layer exceeds the box when
scaled; no visible text/node ever clips).

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211`, copper `--accent #d96832`, cream `--fg-1 #f4f1ea`,
muted `--fg-3 #8a847a`, hairlines `--rule/-strong`. Renders transparent;
`#review-bg` is REVIEW-ONLY and removed before render.

## Motion

- Chips travel the rail with `power1.inOut`; reveals `power3.out`; no bounce.
- Each chip **pauses at the gate** (~0.4s) — a small bounded ring pulse — then
  passes and docks as a row. The big bloom is reserved for the approval peak.
- Peak: everything dims, ring blooms once (bounded), ✓ draws, the four rows'
  status squares tick copper one by one.
- Ends settled (no infinite repeat); soft loop restart on the page.

## Hard "do not" (per PRODUCT.md)

- ❌ No fake SaaS UI, metrics, numbers, or client names — rows are abstract
  (status · bar · owner), chip contents are schematic strokes.
- ❌ No neon, no AI sparkles, no glow-for-glow's-sake. One bounded copper
  bloom at the approval peak.
- ❌ No on-frame text that does not trace to the offer content file.
