# DESIGN — "The Enablement" film

A ~13s looping film for `/studio/ai-enablement` — the AI-enablement capability page, written
for **business teams** (the owner and staff of a small office) — rendered directly under the
hero (`#film`). It **shows the session method**: one real task from the office's week is worked
hands-on with AI, the habits are captured into a playbook for the office, **your review
stays**, and then the team runs it alone. HyperFrames composition (GSAP), transparent render,
two locales (EN / HE-RTL) from one composition via the `lang` variable.

Authored under the **settled cinematic grammar** (Phase C): velocity-matched beat hand-offs,
one depth-of-field rack focus onto the copper review checkpoint at the peak, and a
loop-continuous camera. **No WebGL bloom beat** (flagship signature). Retuned 2026-09-24 to
the business-team page copy, then re-cut the same day to **film spec v2** (owner, after the
first stills were rejected: "font looks bad. elements very small"): sans only on frame,
set-pieces that fill the frame, and the 120 / 80 / 64 type floor (see "Type", "Mobile
legibility", "Layout"). Spec source: `backlog/2026-09-24-studio-redesign-plan.md` → "Film spec v2".

## Intent

- **Show the method, don't sell a course.** A real task splits into parallel AI lanes, is
  worked, and the habits crystallize into a playbook the office keeps.
- **Your review is the peak, and it stays.** The lanes + task defocus; the copper "Your
  review stays" checkpoint over the playbook holds sharp — judgment does not move to the
  machine (the page's core promise).
- **The payoff is autonomy.** The out-node resolves into the team running the lanes on their
  own under the persistent playbook — "the playbook is yours."

## Honesty grammar (schematic — no product UI, no chip)

Schematic, like its sibling films: a task chip, abstract AI **lanes** with traveling
work-ticks, and a **playbook artifact** drawn as a structural glyph (spine + blank habit
lines — no readable text). No product UI → **no "Sample data" chip**. No metrics, no names,
no fake SaaS UI, no neon/sparkles. Nothing on frame about engineers, code, or stacks — the
page is for business teams.

## Distinct from the content-engine film (same phase, same grammar)

Both films share the grammar but read differently: the content-engine is a **horizontal
conveyor** (labels above the traveling node); this is a **parallel-lanes workspace converging
into a persistent playbook**, with labels **swapping in a centred band** (workflow-sprint
treatment). Different axis, different set-pieces, different label treatment — one system, two
identities.

## Locales — one composition, two renders (command-center precedent)

- `data-composition-variables` declares `lang` (`"en"` default). Script reads it, indexes
  `COPY`, mirrors the layout for HE via `X()` (`x → 1920 − x`): the task enters from the
  right, lanes run right→left, the playbook sits left. RTL transcreation, not a flipped
  render. HE snapshots/renders go through the **declared-default flip** (`"default":"en"` →
  `"he"`, capture, flip back), not `--variables`.
- `dir="rtl"` on text elements + the two document glyphs (`#task`, `#book`) only — **NEVER on
  `<html>`**. `.he` on `#stage` drives the HE type roles.

## Type (film spec v2 — sans only on frame)

| Role class | EN | HE (`.he`) | Used by |
|---|---|---|---|
| `.t-display` | Instrument Sans 600, line-height 1.1, tracking −0.01em | Assistant 700, tracking 0 | stage labels `#lbl0–5`, `#closing` (120px) |
| `.t-label` | Instrument Sans 400, line-height 1.2, tracking 0 | Assistant 600, tracking 0 | `#sub0` (80px), `#caption` (72px) |

Roles set the face only; sizes live on the elements. The serif (Newsreader / Frank Ruhl
Libre) is the website's headline voice only — no serif `@font-face` or rule remains in this
film. Hebrew is never tracked (`letter-spacing: 0` under the `.he` roles and `[dir="rtl"]`).
Geist Mono is declared for Latin chips only — none are on frame in this film. `@font-face`
blocks in use: Instrument Sans 400–600 (latin), Assistant 600 + 700 (hebrew + latin), Geist
Mono 400. The woff2 files in `assets/fonts/` are byte-identical copies of `hyperframes/_fonts/`
(licence + provenance in its `LICENSE.md`, incl. the Assistant 700 block); re-copy from there,
never edit a film copy. Banned on frame: engineer(s), code, codebase, stack, developer(s).

## Mobile legibility (hard gate)

16:9 renders ≈ 375px wide on phones (× 0.195). Floor (film spec v2,
backlog/2026-09-24-studio-redesign-plan.md): **stage labels + closing ≥ 120px, sub ≥ 80px,
caption ≥ 64px** on the 1920 canvas (≈ 23 / 16 / 12.5px on a phone). Here: stage labels 120
(→ 23.4px at 375), node-0 sub 80 (→ 15.6), peak caption 72 (→ 14.0), closing 120 (→ 23.4).
**One large text moment at a time**: the six stage labels and the closing swap in place in
one headline band; the sub belongs to label 0 and the caption to the peak. **Measure 1600px**
(x 160–1760): widest ink measured in the stills — EN `Playbook for your office` ≈ 1292px, HE
`הבדיקה נשארת אצלכם` ≈ 1073px at 120; caption EN ≈ 1415 / HE ≈ 1332 at 72 — all one line. A
future string wider than 1600 **wraps (balanced), never shrinks below the floor** — and then
needs a band re-layout. Lanes, work-ticks, and the playbook carry meaning by **structure +
copper**, not small text. Verified in `snapshots-{en,he}/_legibility-375.png` (settled peak
9.2 s + closing 12.4 s) before render.

## Layout (1920×1080; EN shown, HE mirrors x → 1920 − x)

The workspace fills the frame: it spans **x 185 → 1735 (1550px)**, centred on y = 600
(`STAGE_Y`), between the headline band and the caption band.

| Zone | Position (EN) | Size | Role |
|---|---|---|---|
| **Headline band** | x 160–1760, box top 106 (ink ≈ 125–238, baseline ≈ 218) | 120px | one large text moment at a time: `#lbl0–5` then `#closing` (swap in place) |
| **Node-0 sub** | x 160–1760, box top 260 (ink ≈ 280–355) | 80px | `from your office's week`, under label 0 only (beat 0 — before any lane or the playbook) |
| **Task chip** | centre (385, 600) → 185–585 × 475–725 | 400×250 (v1 152×96) | the one real task from the office's week — the input |
| **AI lanes** | 3 rails, y 460 / 600 / 740, x 640 → 1260; stroke 6 | — | hands-on with AI; work-ticks travel each lane |
| **Work / run ticks** | lane start → lane end (→ playbook centre on convergence) | 40px (v1 15) | the "node dots" |
| **Playbook** | centre (1525, 600) → 1315–1735 × 340–860 | 420×520 (v1 224×276) | the captured habits — spine + habit lines; copper edge, persistent |
| **Review ring** | playbook centre | 440 Ø, blooms 0.55 → 1.8 (v1 168) | one bounded copper ring at the peak |
| **Review check** | (1525, 720) — the card's empty lower half, below the habit lines | 160 box, stroke 4 (v1 50, on the bar) | reviewed by a person |
| **Caption** | x 160–1760, box top 910 (ink ≈ 922–989; ≈ 940–1009 at the 1.03 peak) | 72px | review line at the peak (holds through beat 4) |

Clearances: headline ink ends ≈ 238 vs playbook top 340 (≈ 321 at the peak push); the sub
ends ≈ 355 vs the task chip at 475 (lane 0 is not drawn until 2.3 s, after the sub leaves);
the playbook's bottom edge reaches ≈ 883 at the peak (card `scale 1.05` × camera 1.03) vs the
caption's ascenders at ≈ 940. HE mirrors x → 1920 − x; `dir="rtl"` on the text elements and on
`#task` + `#book` (chip icon at the reading start, short bars/lines right-aligned).

`#camera` loop-continuous push-in `scale 1.0 → 1.03` into the peak, identity by the tail;
`data-layout-allow-overflow`. Rack-focus blur 12px (v1 7, scaled with the set-pieces); playbook
glows 100 / 70 / 90px (v1 50 / 34 / 44).

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211` / `--bg-1 #1a1a18` / `--bg-2 #242420`, copper `--accent
#d96832`, cream `--fg-1 #f4f1ea`, muted `--fg-2 #b9b3aa` / `--fg-3 #8a847a`, hairlines
`--rule #2a2a26` / `--rule-strong #3a3a34`. Renders transparent (`#review-bg` REVIEW-ONLY).

## Source of truth (three-source rule — verified against `src/content/studio/ai-enablement.ts`)

Every on-frame string traces to the capability page content file (line refs as of
2026-09-24). Re-render if it changes.

### EN

| Element | Verbatim string | Source |
|---|---|---|
| Node 0 | `A real task` | `example.map.nodes[0].label` (:113) |
| Node 0 sub | `from your office's week` | `example.map.nodes[0].sub` (:113) |
| Node 1 | `Hands-on with AI` | `example.map.nodes[1].label` (:114) |
| Node 2 | `Habits captured` | `example.map.nodes[2].label` (:115) |
| Node 3 | `Playbook for your office` | `example.map.nodes[3].label` (:116) |
| Node 4 (human) | `Your review stays` | `example.map.nodes[4].label` (:117) |
| Node 5 (out) | `The team runs it alone` | `example.map.nodes[5].label` (:118) |
| Caption (peak) | `Judgment and review stay with your people` | `how.steps[4].desc` (:101) — the clause after the semicolon, sentence-cased |
| Closing | `The playbook is yours` | `human.items[2].desc` (:135) — the clause before the first comma, verbatim |

### HE (RTL, mirrored — transcreation)

| Element | Verbatim string | Source |
|---|---|---|
| Node 0 | `משימה אמיתית` | `he.example.map.nodes[0].label` (:256) |
| Node 0 sub | `מהשבוע של המשרד שלכם` | `he.example.map.nodes[0].sub` (:256) |
| Node 1 | `עבודה מעשית עם AI` | `he.example.map.nodes[1].label` (:257) |
| Node 2 | `ההרגלים נרשמים` | `he.example.map.nodes[2].label` (:258) |
| Node 3 | `מדריך עבודה למשרד` | `he.example.map.nodes[3].label` (:259) |
| Node 4 (human) | `הבדיקה נשארת אצלכם` | `he.example.map.nodes[4].label` (:260) |
| Node 5 (out) | `הצוות מריץ לבד` | `he.example.map.nodes[5].label` (:261) |
| Caption (peak) | `שיקול הדעת והבדיקה נשארים אצל האנשים שלכם` | `he.how.steps[4].desc` (:244) — the clause after the semicolon |
| Closing | `מדריך העבודה שלכם` | `he.human.items[2].desc` (:278) — the clause before the first comma, verbatim |

## Render (per command-center pipeline)

`#review-bg` removed → transparent alpha WebM (`npm run render -- --format webm --quality high
--video-bitrate 3M`) → ffmpeg charcoal `#121211` H.264 MP4 (yuv420p, `+faststart`, CRF 23; ≤ 1.5
MB/locale) + settled poster (the closing frame, t = 12.4 s). HE via the declared-default flip;
restore the default `"en"` and `#review-bg` after. Outputs →
`public/videos/ai-enablement{,-he}.{mp4,webm}` + posters (paths unchanged; the page's `film`
block already points at them). Last run: REVIEW.md → "Render v2 (2026-09-24)".

## Hard "do not"

- ❌ No product UI / metrics / names / fake SaaS — abstract lanes + a structural playbook.
- ❌ No "Sample data" chip (schematic) — unless a set-piece reads as real UI at the stills stop.
- ❌ No WebGL bloom (flagship-only); one bounded copper ring at the peak.
- ❌ No `dir="rtl"` on `<html>`; no random/Date/async; no infinite repeats.
- ❌ No on-frame string that does not trace to the table above; no engineer / code / codebase /
  stack / developer wording (business-team page).
- ❌ No serif on frame (spec v2: Instrument Sans / Assistant only).
- ❌ No text below the spec v2 floor (120 headline + closing / 80 sub / 64 caption) — wrap
  inside the 1600 measure instead of shrinking; no text on the structural set-pieces.
