# DESIGN — "Workflow Sprint" film

A ~14s film for `/offers/ai-workflow-sprint`: **one stuck workflow is mapped,
sorted into three kinds of work, three automations click into place, and the
workflow runs with less friction.** Successor to the retired `audit-process`
v3 film (which had the old "AI WORKFLOW AUDIT" wordmark baked into pixels);
keeps v3's winning idea — type-forward, an abstract tile field, one continuous
copper emphasis — and adds the office-assistant film's locale system.

## Intent

- **The sprint story in the page's own order** — the film animates the offer's
  `example.map` nodes 0→5 verbatim (PRODUCT principle 3: a real sequence with
  its decision points intact).
- **Sorting is the "aha"** — a messy field becomes three named rows
  (Automatic / AI-assisted / Human). The human row warms copper and stays warm.
- **Approval before the payoff** (PRODUCT principle 5) — a compact copper
  gate beat, shared visual language with the office-assistant film.
- **Show, don't claim** — tiles are abstract work units, no labels, no fake
  UI, no metrics.

## Locales — one composition, two renders (as office-assistant)

`lang` variable (`"en"` default); HE mirrors positionally via `X()`, Assistant
600, `dir="rtl"` set ONLY on text elements — **never on `<html>`** (that
silently blanks `hyperframes render`; see office-assistant/REVIEW.md). HE
renders/snapshots by flipping the declared default, then flipping back.

## Mobile legibility

Same rule as office-assistant (frame ≈330px wide on phones): **9 text
moments**, nothing smaller than 64px — headlines 84px (closing 92px), the
three row labels + approval label 64px. Meaning below that size is carried by
shape (tiles, copper, the check).

## Layout (1920×1080; EN shown, HE mirrors x → 1920−x)

| Zone | Position (EN) | Role |
|---|---|---|
| **Headline** | centered, y≈150 | one large text moment per act (swaps in place) |
| **Tile field** | x 560–1340, y 360–900 | 15 abstract work units: scatter → 5×3 grid → three rows |
| **Row labels** | box x 120–540, right-aligned | Automatic / AI-assisted / Human (copper) |
| **Rail** | snake through the grid rows | "mapped end to end" gesture, drawn once |
| **Gate** | center (960, 620), peak only | copper approval node + ✓ + label below |

`#camera` push-in 1.0 → 1.025, `data-layout-allow-overflow`.

## Tokens

Charcoal `--bg-0 #121211`, tile `--bg-2 #242420`, copper `--accent #d96832`,
cream `--fg-1 #f4f1ea`. Inter 600 / Assistant 600 local woff2. Transparent
render (alpha MOV master route, see office-assistant/REVIEW.md).

## Motion

- Tile flows `power2.inOut`, headline crossfades (rise in / fall out), DOF
  blur 2→0 as the grid forms. No bounce.
- Copper discipline: the human row **warms and holds** (no flash); the three
  automation ticks are small pops + check draws; ONE bounded pulse at the
  approval gate.
- Ends settled for a soft loop restart.

## Hard "do not" (per PRODUCT.md)

- ❌ No fake SaaS UI / metrics / numbers / names — tiles carry no text.
- ❌ No baked wordmark (the mistake that forced this rework).
- ❌ No neon / sparkles; one bounded copper pulse at the gate only.
- ❌ No on-frame text that does not trace to `ai-workflow-sprint.ts`.
