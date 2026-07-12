# DESIGN — "The Command Center" film (Film 5)

> **Scaffold state (Phase 1 done).** This project has config, fonts, and the
> three design docs. `index.html` (the composition) is **not yet authored** —
> that is Phase 2 and **must be built with the HyperFrames skill loaded**
> (`/hyperframes`, `/gsap`). Run `npx hyperframes skills` + restart first.
> Strategic master (why this is the flagship's product face, commercial-shape
> question, site-integration decisions): `backlog/2026-07-12-command-center-film-design.md`.

A ~14s looping film that is the **product face of the Managed AI Office
Assistant** (flagship). The office morning assembles itself *into* the product:
it opens in the site's established chaos language (mono chips, tangled
hairlines) and resolves into the settled Command Center interface. HyperFrames
composition (GSAP), rendered to transparent video, in **two locales (EN /
HE-RTL) from one composition**. Replaces the retired `office-assistant-process`
film as the flagship's single film.

## Intent

- **Demonstrate a product, don't describe a service.** The buyer sees the thing
  they would log into — one view of the office's day — not another abstract
  process diagram.
- **The approval queue is the peak, and it fails safely.** All panels dim except
  the copper APPROVAL column; one item gets the human check, and **one item is
  deliberately left waiting**. Approval is never automatic — the honesty beat
  the site critique asked for, shown in UI instead of a diagram.
- **Bold in craft, disciplined in claims.** Real interface, real product — but
  every word on frame traces to existing site copy, and the honesty grammar
  rides along (see below).

## Honesty grammar — why interface is now permitted

Films 1–4 banned fake SaaS UI. That rule is **superseded here** because the
product is real and in active development. The honesty grammar that replaces it:

- Persistent **`Sample data`** chip in the UI frame (top corner), the whole film.
- **Zero** client names, matter numbers, dates-as-identifiers, or performance
  metrics. Rows are generic, schematic echoes of the flagship's build items.
- The film depicts the *category* of interface using **site tokens**, not
  invented product branding — so it stays honest as a "taking shape" artifact.
  When real product screenshots exist, swap the composed panels for styled
  captures (the film is marked re-renderable).

## Locales — one composition, two renders (proven precedent: `office-assistant`)

Do **not** use two entry files or a sibling `-he` project. Follow the freshest
bilingual film (`hyperframes/office-assistant/DESIGN.md`):

- `data-composition-variables` declares `lang` (`"en"` default). The script
  reads it via `window.__hyperframes.getVariables()`, picks the copy set, and
  **mirrors the layout** for Hebrew (panels/rail/reading flow right→left) via an
  `X()` position helper.
- `dir="rtl"` on the rows/labels only — **NEVER on `<html>`**: it blanks the
  render pipeline (documented in `office-assistant/REVIEW.md`).
- HE render + snapshots: temporarily flip the declared `lang` default to `"he"`
  and run without flags (`--variables` proved unreliable on Windows shells),
  then flip back.
- Fonts: EN = Inter 400/600 + Geist Mono (mono for the `Sample data` chip and
  panel micro-labels). HE = **Assistant 600** (`--font-body-he`) for Hebrew text
  + Geist Mono for the (latin) `Sample data`/`נתוני דוגמה` chip. All local woff2
  in `assets/fonts/`.

## Mobile legibility (hard gate — biggest risk for a UI film)

The 16:9 frame renders ~330–375px wide on phones (scale ≈ 0.17–0.19). A UI shows
more simultaneous text than the Films 1–4 schematics, so this is the film's
biggest risk. Caps:

- **≤ 5 panels on frame**, **≤ 2 rows per panel.**
- Panel titles **≥ 44px**, rows **≥ 30px**, tagline **≈ 52px**, closing **≈ 72px**
  (starting floors — validate, don't assume).
- Meaning carried by **structure and copper**, never by small text: the copper
  flag, the copper approval dots, the check, the one-still-waiting item read at
  thumbnail size even if row text doesn't.
- **375px legibility gate before render** (pattern:
  `hyperframes/audit-process/snapshots/_legibility-720.png`). Snapshot the peak
  and closing at 375px width; if any required element is illegible, cut panels or
  enlarge — do not ship.

## Layout (1920×1080 stage; hero frame = settled end state. EN shown; HE mirrors x → 1920−x)

Proposed starting layout — refine in composition, hold the legibility caps.

| Zone | Position (EN) | Role |
|---|---|---|
| **Window frame** | inset ~120px all sides | hairline "app window" (`--rule-strong`); the whole UI lives inside it |
| **Header** | y ≈ 150 | tagline (left, Inter 600) + `Sample data` chip (top-right, Geist Mono, muted/copper-outline); hairline divider under it |
| **Status grid** | left ~⅔, y 300→900 | 2×2 of four status panels: MEETINGS · URGENT EMAILS · WAITING CLIENTS · DEADLINES; each ≤2 rows; one URGENT EMAILS row copper-flagged |
| **Approval rail** | right ~⅓ column | the APPROVAL panel — taller, the emphasis; 2 waiting items with copper dots |
| **Caption/closing** | bottom, y ≈ 980 | safety line appears at the peak; closing line replaces it at the end |

`#camera` restrained push-in `scale 1.0 → 1.03`, marked
`data-layout-allow-overflow` (per Films 2/4). Panel titles rendered UPPERCASE is
a CSS `text-transform` treatment of the lowercase source nouns — not a different
string.

## Panel selection

Source pool = the **six** nouns in the command-center card body (see trace
table). On-frame status grid uses four — **MEETINGS · URGENT EMAILS · WAITING
CLIENTS · DEADLINES** — plus **APPROVAL** as the emphasis column. `open tasks`
is intentionally **omitted from frame for legibility** (still traceable, just not
shown). Nothing on frame is outside this verbatim pool.

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211`, copper `--accent #d96832`, cream `--fg-1 #f4f1ea`,
muted `--fg-2 #b9b3aa` / `--fg-3 #8a847a`, hairlines `--rule` / `--rule-strong`.
Renders transparent (`#review-bg` is REVIEW-ONLY, removed before render).

## Motion

- Chaos → assembly: 3 mono chips drift in at odd rotations with tangled
  hairlines (overnight pile), then fly into the frame (`power2.inOut`) and
  dissolve as the interface draws itself.
- Interface draw-in: hairline frame strokes in; header types the tagline;
  `Sample data` chip fades in; panels populate with staggered row ticks; rows
  materialize `blur 1.6 → 0`.
- Peak: everything dims except the APPROVAL column; **one** bounded copper ring
  bloom; check draws `scaleX 0 → 1` on item 1; safety caption appears.
- Failing-safely beat: approved item slides to done; **item 2 stays waiting**
  (never auto-approves).
- Easing: `power1/2.inOut` (travel), `power3/expo.out` (reveals). No bounce, no
  elastic. One bounded copper ring at the peak; no neon, no sparkles.
- Deterministic only: paused timeline on `window.__timelines`; every timed
  element `class="clip"` + `data-start/duration/track-index`; **no**
  `Date.now()` / `Math.random()` / network; finite computed repeats only.

## Source of truth (three-source rule — verified against live source 2026-07-12)

The **site content files are the single source** for every on-frame string
(the backlog handoff paraphrased a few — corrections noted). Re-render if these
change; the film bakes copy in.

### EN

| Element | Verbatim string | Source |
|---|---|---|
| Opening chips | `email · calendar · documents` | `offers/ai-office-assistant.ts:109` (Overnight inputs `sub`) |
| Header tagline | `See what needs attention` | `home.ts:123` (command-center card `kicker`) |
| Panel-noun pool | `meetings` · `urgent emails` · `open tasks` · `waiting clients` · `deadlines` · `approval points` | `home.ts:124` (card `body`) — panels use a subset; UPPERCASE is CSS |
| Approval caption | `No external messages are sent without approval` | `home.ts:173` (safety `items`) |
| Closing line | `The day starts decided` | `offers/ai-office-assistant.ts:114` (map out-node); also `home.ts:112` |
| Honesty chip | `Sample data` (rendered uppercase) | `proof.ts:184` (`sampleBadge`) |
| Panel rows | contracted echoes of build items, e.g. `Draft reply · ready for approval`, `Signature · waiting`, `Client meeting · 09:00` | `offers/ai-office-assistant.ts` `build` items — contractions; **NO** names/matter numbers/metrics (a clock time is a schedule label, reviewed as acceptable — confirm at review) |

### HE (RTL, mirrored composition — transcreation, not a flipped render)

| Element | Verbatim string | Source |
|---|---|---|
| Opening chips | `מייל · יומן · מסמכים` | `offers/ai-office-assistant.ts:312` |
| Header tagline | `לראות מה דורש תשומת לב` | `home.ts:264` |
| Panel-noun pool | `פגישות` · `מיילים דחופים` · `משימות פתוחות` · `לקוחות שמחכים` · `דדליין` · `נקודות אישור` | `home.ts:265` |
| Approval caption | `לא שולחים הודעות בלי אישור` | `home.ts:319` |
| Closing line | `היום מתחיל מוכרע` | `offers/ai-office-assistant.ts:317`; also `home.ts:253` |
| Honesty chip | `נתוני דוגמה` | `proof.ts:318` |

### Corrections vs. the backlog handoff (use THESE, verified from source)

1. Honesty chip is **`Sample data`** (title case in `proof.ts`), not `SAMPLE
   DATA`. Uppercase on frame is a CSS treatment of that exact string.
2. The card body lists **six** nouns including `open tasks`; the backlog table
   dropped it and listed five. Full pool is authoritative; `open tasks` is
   omitted from frame by choice, not because it isn't a source noun.
3. HE panel pool includes `משימות פתוחות` and uses `נקודות אישור` (the backlog
   shortened it to `אישור`). The card-body nouns above are the verbatim source.

## Site integration (Phase 5, after render)

1. Flagship `offers/ai-office-assistant.ts`: swap the `film` block (EN lines
   ~29–37, HE ~232–240) to the new `command-center*` assets; `sectionTitle` →
   product framing (e.g. "What your office logs into"); caption gains the honest
   "taking shape · sample data" line. This **replaces** the current
   `office-assistant-process` film (one film per page — a mobile-data persona
   flag). Old assets stay on disk, retired.
2. Homepage `home.ts` command-center card + `ProblemsSection.tsx`: card gains
   optional `poster` + `href` (add to the card model in `content/types.ts`);
   links to `/offers/ai-office-assistant#command-center` with the settled poster
   as the visual. No second video embed.
3. Reuse `FilmPlayer` (poster-first, reduced-motion gated, pause control) — no
   new player code.

## Hard "do not"

- ❌ No client names, matter numbers, identifier-dates, or performance metrics.
- ❌ No neon, no AI sparkles; one bounded copper ring at the peak.
- ❌ No `dir="rtl"` on `<html>`; no infinite repeats; no random/Date/async.
- ❌ No on-frame string that does not trace to the table above.
