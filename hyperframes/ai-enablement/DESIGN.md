# DESIGN — "The Enablement" film

A ~13s looping film for `/offers/ai-enablement`, rendered directly under the hero
(`#film`). It **shows the workshop method**: one real task from your backlog is worked
hands-on with agents, patterns are captured into a playbook for your stack, **human
review stays**, and then the team runs it alone. HyperFrames composition (GSAP),
transparent render, two locales (EN / HE-RTL) from one composition via the `lang`
variable.

Authored under the **settled cinematic grammar** (Phase C): velocity-matched beat
hand-offs, one depth-of-field rack focus onto the copper human-review checkpoint at
the peak, and a loop-continuous camera. **No WebGL bloom beat** (flagship signature).

## Intent

- **Show the method, don't sell a course.** A real task splits into parallel agent
  lanes, is worked, and the patterns crystallize into a playbook the team keeps.
- **Human review is the peak, and it stays.** The lanes + task defocus; the copper
  "Human review stays" checkpoint over the playbook holds sharp — ownership does not
  move to the machine (the offer's core promise).
- **The payoff is autonomy.** The out-node resolves into the team running the lanes on
  their own under the persistent playbook — "the practice is yours."

## Honesty grammar (schematic — no product UI, no chip)

Schematic, like its offer-film siblings: a task chip, abstract agent **lanes** with
traveling work-ticks, and a **playbook artifact** drawn as a structural glyph (spine +
blank pattern lines — no readable text). No product UI → **no "Sample data" chip**. No
metrics, no names, no fake SaaS UI, no neon/sparkles.

## Distinct from the content-engine film (same phase, same grammar)

Both offer films share the grammar but read differently: the content-engine is a
**horizontal conveyor** (labels above the traveling node); this is a **parallel-lanes
workspace converging into a persistent playbook**, with labels **swapping in a centered
band** (workflow-sprint treatment). Different axis, different set-pieces, different label
treatment — one system, two identities.

## Locales — one composition, two renders (command-center precedent)

- `data-composition-variables` declares `lang` (`"en"` default). Script reads it,
  indexes `COPY`, mirrors the layout for HE via `X()` (`x → 1920 − x`): the task enters
  from the right, lanes run right→left, the playbook sits left. RTL transcreation, not a
  flipped render.
- `dir="rtl"` on text elements only — **NEVER on `<html>`**.
- Fonts: EN = Inter 600 (labels) / Inter 400 + Geist Mono (sub). HE = Assistant 600.

## Mobile legibility (hard gate)

16:9 ≈ 330–375px on phones. **One large centered label at a time** (≥ 56px); the six
labels never sit large together. Lanes, work-ticks, and the playbook carry meaning by
**structure + copper**, not small text. 375px legibility snapshot of the peak and the
closing before render.

## Layout (1920×1080; EN shown, HE mirrors x → 1920 − x)

| Zone | Position (EN) | Role |
|---|---|---|
| **Label band** | centered, y ≈ 320 | one large stage label at a time (swaps in place); node-0 carries the `sub` |
| **Task chip** | x ≈ 300, y ≈ 560 | the one real backlog task — the input |
| **Agent lanes** | 3 rails, y 480/560/640, x 430 → 1180 | hands-on with agents; work-ticks travel each lane |
| **Playbook** | x ≈ 1380, y ≈ 560 | the captured practice — spine + pattern lines; copper edge, persistent |
| **Review checkpoint** | over the playbook | copper gate + check; the rack-focus peak |
| **Caption / closing** | bottom, y ≈ 968 | review line at the peak; closing at the end |

`#camera` loop-continuous push-in `scale 1.0 → 1.03` into the peak, identity by the tail;
`data-layout-allow-overflow`.

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211` / `--bg-1 #1a1a18` / `--bg-2 #242420`, copper `--accent
#d96832`, cream `--fg-1 #f4f1ea`, muted `--fg-2 #b9b3aa` / `--fg-3 #8a847a`, hairlines
`--rule #2a2a26` / `--rule-strong #3a3a34`. Renders transparent (`#review-bg` REVIEW-ONLY).

## Source of truth (three-source rule — verified against `ai-enablement.ts`)

Every on-frame string traces to the offer content file. Re-render if it changes.

### EN

| Element | Verbatim string | Source |
|---|---|---|
| Node 0 + sub | `A real task` · `from your backlog` | `example.map.nodes[0]` (label + sub) |
| Node 1 | `Hands-on with agents` | `example.map.nodes[1]` |
| Node 2 | `Patterns captured` | `example.map.nodes[2]` |
| Node 3 | `Playbook for your stack` | `example.map.nodes[3]` |
| Node 4 (human) | `Human review stays` | `example.map.nodes[4]` (human) |
| Node 5 (out) | `The team runs it alone` | `example.map.nodes[5]` (out) |
| Caption (peak) | `Judgment and review stay with your engineers` | `how.steps[4].desc` ("judgment and review stay with your engineers") |
| Closing | `The playbook is yours` | `human.items[2].desc` ("The playbook is yours, in your repo…") — verbatim |

### HE (RTL, mirrored — transcreation)

| Element | Verbatim string | Source |
|---|---|---|
| Node 0 + sub | `משימה אמיתית` · `מהבקלוג שלכם` | `he.example.map.nodes[0]` |
| Node 1 | `עבודה מעשית עם סוכנים` | `he.example.map.nodes[1]` |
| Node 2 | `דפוסים נלכדים` | `he.example.map.nodes[2]` |
| Node 3 | `פלייבוק לסטאק שלכם` | `he.example.map.nodes[3]` |
| Node 4 (human) | `הבדיקה נשארת אנושית` | `he.example.map.nodes[4]` |
| Node 5 (out) | `הצוות רץ לבד` | `he.example.map.nodes[5]` |
| Caption (peak) | `שיקול הדעת והבדיקה נשארים אצל המהנדסים שלכם` | `he.how.steps[4].desc` |
| Closing | `הפלייבוק שלכם` | `he.human.items[2].desc` — verbatim |

## Render (per command-center pipeline)

`#review-bg` removed → transparent alpha WebM → ffmpeg charcoal `#121211` MP4 + settled
poster (tail frame). HE via the default-flip route. Outputs →
`public/videos/ai-enablement{,-he}.{mp4,webm}` + posters.

## Hard "do not"

- ❌ No product UI / metrics / names / fake SaaS — abstract lanes + a structural playbook.
- ❌ No "Sample data" chip (schematic) — unless a set-piece reads as real UI at the stills stop.
- ❌ No WebGL bloom (flagship-only); one bounded copper ring at the peak.
- ❌ No `dir="rtl"` on `<html>`; no random/Date/async; no infinite repeats.
- ❌ No on-frame string that does not trace to the table above.
