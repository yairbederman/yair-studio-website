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

`lang` variable (`"en"` default); HE mirrors positionally via `X()`, takes the
HE face via `#stage.he` (Assistant 700 on every text moment, tracking reset
to 0), `dir="rtl"` set ONLY on text elements — **never on `<html>`** (that
silently blanks `hyperframes render`; see office-assistant/REVIEW.md). HE
renders/snapshots by flipping the declared default, then flipping back.

## Mobile legibility (film spec v2, 2026-09-24)

Spec v2 (backlog/2026-09-24-studio-redesign-plan.md, "Film spec v2"): **9 text
moments, one large moment at a time** — the five headlines and the approval
moment at **120px** (≈ 23px on a 375px phone), the three row labels at
**80px** (≈ 16px). Meaning below that size is carried by shape (tiles, copper,
the check). Measured widths (REVIEW.md → "v2 2026-09-24"): the EN closing
line is 1725px of ink on one line (> the 1600 cap), so it sets on two lines
("Workflow runs" / "with less friction", 804 / 896px); the HE closing fits one
line (1215px). Widest single-line headline: EN "Three automations built"
1324px. Every row label sits inside its 440px box (widest "AI-assisted" 417px
advance). On-frame strings + source line numbers: SCRIPT.md → "On-frame text".

## Layout (1920×1080; EN shown, HE mirrors x → 1920−x)

Spec v2: the field, grid and sorted rows fill ~80% of the frame.

| Zone | Position (EN) | Role |
|---|---|---|
| **Headline band** | centered; cap top y≈130, baseline y≈218 (120px, line-height 1.05, `top: 112px`) | one large text moment per act (swaps in place); the EN closing's 2nd line sits at baseline ≈343 |
| **Scatter field** | tile centres x 322–1598, y 360–880 → ink ≈ 1400×610 (x 262–1664, y 313–927) | act 0: 15 tiles, 120×80, slightly rotated; tile 7 sags 34px |
| **Grid** | 5×3, cols 480/720/960/1200/1440 (pitch 240), rows 480/650/820 | act 1 "mapped"; rows = the sorted rows |
| **Rail** | snakes x 390–1530 through the grid rows, 3px | "mapped end to end" gesture, drawn once |
| **Sorted rows** | rows y 480/650/820 (pitch 170); tiles x 696–1696 (pitch 176); block ink x 225–1696 = 1471px, centred | Automatic 6 / AI-assisted 5 / Human 4 (copper) |
| **Row labels** | box x 200–640 (440 wide), right-aligned, 80px; `top` = row − 40 (HE row − 46) | ink centred on each row (measured) |
| **Ticks** | 46px, on tiles 5 / 6 / 11 at (1108, 480) / (1108, 650) / (1460, 480) | the three automations |
| **Gate** | centre (960, 650), peak only; node 60px (→ 96 at scale 1.6), pulse ring 152px (→ 289 at 1.9), ✓ 88px | copper approval node + ✓ over the defocused rows |
| **Approval label** | the headline band, copper, 120px | the peak's one text moment |

HE: the mirror plus `SORT_DX = 61` — Hebrew labels are narrower (widest 294 vs
417px), so the HE sorted block (labels, tiles, ticks) shifts right 61px to stay
centred (ink x 285–1634, centre 960). Headlines, grid, scatter, gate: pure
mirror.

`#camera` push-in 1.0 → 1.03 at the peak (loop-continuous, see below),
`data-layout-allow-overflow`.

## Tokens

Charcoal `--bg-0 #121211`, tile `--bg-2 #242420`, copper `--accent #d96832`,
cream `--fg-1 #f4f1ea`. Type = film spec v2, **sans only on frame** (local
woff2, copied from `hyperframes/_fonts/`, see its LICENSE.md): EN Instrument
Sans 600 for headlines + row labels (−0.01em); HE Assistant 700 for every text
moment — **Hebrew is never letter-spaced** (`#stage [dir="rtl"]` resets every
tracked rule). The serif pair (Newsreader / Frank Ruhl Libre) is a
website-only voice and is not loaded here. No mono elements in this film. Transparent render
(alpha MOV master route, see office-assistant/REVIEW.md); `#review-bg` is
REVIEW-ONLY.

## Motion

- Tile flows `power2.inOut`, headline crossfades (rise in / fall out), DOF
  blur 2→0 as the grid forms. No bounce.
- Copper discipline: the human row **warms and holds** (no flash); the three
  automation ticks are small pops + check draws; ONE bounded pulse at the
  approval gate.
- Ends settled for a soft loop restart.

> **Cinematic regrade (Phase C2, 2026-07-13).** The choreography above was regraded
> to the settled film grammar: velocity-matched beat hand-offs (power2.in exits →
> power2.out entries, matched at cuts), a depth-of-field rack focus onto the copper
> Human/approval checkpoint at the peak, and a loop-continuous camera (identity at t=0
> and t=13). Content/copy/locales unchanged. Full choreography record: REVIEW.md →
> "Cinematic regrade".

## Hard "do not" (per PRODUCT.md)

- ❌ No fake SaaS UI / metrics / numbers / names — tiles carry no text.
- ❌ No baked wordmark (the mistake that forced this rework).
- ❌ No neon / sparkles; one bounded copper pulse at the gate only.
- ❌ No on-frame text that does not trace to `ai-workflow-sprint.ts`.
