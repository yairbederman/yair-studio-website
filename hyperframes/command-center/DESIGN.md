# DESIGN — "The Command Center" film (Film 5)

> **State (2026-09-24):** film spec v2 re-cut authored (16:9, this project) + the new **phone
> cut** (4:5, sibling project `../command-center-mobile/`). Owner approved the v2 stills;
> **rendered and wired 2026-09-24** (`REVIEW.md` → "Render v2"). Gates and the per-moment audit:
> `REVIEW.md` → "v2 2026-09-24".
> Strategic master (why this is the flagship's product face): `backlog/2026-07-12-command-center-film-design.md`;
> spec v2 + the phone-cut decision (D3): `backlog/2026-09-24-studio-redesign-plan.md`.

A 14s looping film that is the **product face of the Managed AI Office** (flagship). The
office morning assembles itself *into* the product: it opens in the site's chaos language
(mono chips, tangled hairlines) and resolves into the settled Command Center interface.
HyperFrames composition (GSAP), rendered to transparent video, in **two locales (EN / HE-RTL)
from one composition**, and in **two cuts**: 16:9 (this project) and a 4:5 phone cut
(`../command-center-mobile/`). It is the flagship's **one autoplaying film per page** — on
`/offers/ai-office-assistant#film` and in the homepage proof band (`ProofFilmSection`, which
reuses the flagship `film` block).

## Intent

- **Demonstrate a product, don't describe a service.** The buyer sees the thing they would
  log into — one view of the office's day — not another abstract process diagram.
- **The approval queue is the peak, and it fails safely.** All panels defocus except the
  copper HUMAN APPROVAL column; one item gets the human check, and **one item is deliberately
  left waiting**. Approval is never automatic — shown in UI instead of a diagram.
- **Bold in craft, disciplined in claims.** Real interface, real product — but every word on
  frame traces to existing site copy, and the honesty grammar rides along (see below).

## Honesty grammar — why interface is permitted

Films 1–4 banned fake SaaS UI. That rule is **superseded here** because the product is real
and in active development. The honesty grammar that replaces it:

- Persistent **`Sample data`** chip on the UI window (it straddles the window's top edge, far
  corner), from the moment the interface draws in to the end.
- **Zero** client names, matter numbers, dates-as-identifiers, or performance metrics. Rows
  are generic nouns lifted from the flagship's build items.
- The film depicts the *category* of interface using **site tokens**, not invented product
  branding — an honest "in build" artifact. When real product screenshots exist, swap the
  composed panels for styled captures (the film is marked re-renderable).

## Locales — one composition, two renders (per cut)

Locales are **never** split into two entry files or a `-he` project (the phone cut is a
sibling project because it is a different *canvas*, not a different locale):

- `data-composition-variables` declares `lang` (`"en"` default). The script reads it via
  `window.__hyperframes.getVariables()`, picks the copy set, adds `.he` to `#stage`, and
  **mirrors the layout** (x → W − x) via an `X()` / `placeBox()` helper.
- `dir="rtl"` on panels / rows / text only — **NEVER on `<html>`**: it blanks the render
  pipeline (documented in `office-assistant/REVIEW.md`).
- HE render + snapshots: temporarily flip the declared `lang` default to `"he"` and run without
  flags (`--variables` proved unreliable on Windows shells), then flip back (grep-verify).
- **Type (film spec v2 — sans only):** EN = Instrument Sans 600 (tagline, panel titles,
  closing) / 400 (rows, approval items, caption); HE = Assistant 700 / 600 in the same roles;
  **Geist Mono only for the Latin chips** (`Sample data`, the overnight `email · calendar ·
  documents`) — in HE those chips set in Assistant 600. **Hebrew is never letter-spaced**
  (`#stage [dir="rtl"]` and `.he .ptitle` reset tracking; computed-style sweep: 0 tracked HE
  elements). HE runs ≈ ×1.1 the EN size for optical parity (Assistant's Hebrew letter body is
  smaller than Instrument Sans's cap height). Local woff2 in `assets/fonts/`, byte-identical to
  `hyperframes/_fonts/` (licence + provenance: `_fonts/LICENSE.md`).

## Phone type floor v2 (hard gate — the film's biggest risk)

The 16:9 frame renders ~375px wide on phones (× 0.195); the phone cut renders 375px wide at
4:5 (× 0.347). Floors (spec v2), per cut:

| Role | 16:9 floor → set (EN / HE) | 4:5 phone floor → set (EN / HE) |
|---|---|---|
| Header tagline | ≥ 120 → **120 / 132** | ≥ 96 → **104 / 108** (2 authored lines) |
| Closing | ≥ 120 → **128 / 140** | ≥ 96 → **108 / 120** (EN 2 lines) |
| Panel titles | ≥ 80 → **80 / 88** | ≥ 80 → **80 / 88** |
| Rows | ≥ 56 → **56 / 62** | ≥ 56 → **56 / 62** |
| Approval items | ≥ 64 → **72 / 80** | ≥ 64 → **68 / 74** |
| Caption (safety line) | ≥ 64 → **72 / 80** | ≥ 64 → **72 / 80** (EN 2 lines) |
| `Sample data` chip | ≥ 40 → **40 / 48** | ≥ 40 → **40 / 48** |
| Overnight chips | (label) → **72 / 80** | → **72 / 80** |

- **One large text moment at a time:** the header is the film's single large text slot —
  tagline → (peak) safety caption → closing, each handed off in place (velocity-matched).
- **≤ 3 status panels + the approval column** on 16:9; **2 panels + the approval block** on
  4:5; **≤ 2 rows per panel**.
- Meaning is still carried by structure and copper as well: the copper-flagged row, the copper
  approval dots, the drawn check, the one-still-waiting item.
- **375px legibility gate before render:** `snapshots-{en,he}/_legibility-375.png` in both
  projects (peak + closing at 375px wide). If any required element is illegible, cut or
  enlarge — do not ship.

## Layout v2 — 16:9 (1920×1080; settled end state; EN shown, HE mirrors x → 1920 − x)

| Zone | Position (EN) | Role |
|---|---|---|
| **Window frame** | x 48 → 1872, y 76 → 1028 (rx 28) | hairline "app window" (`--rule-strong`), strokes in at beat 1 |
| **`Sample data` chip** | straddles the frame's top edge, right end (x ≈ 1477 → 1824, y 44 → 108) | opaque copper-tint fill hides the frame line behind it |
| **Header text slot** | x 96 → 1824, y 116 → 248; divider y 272 | tagline → caption → closing (left-aligned; HE right-aligned) |
| **Status strips** | x 96 → 1212 (1116 wide), y 300 / 542 / 784, 216 tall each | Morning briefing · Email triage · Document workflows — title (80) over two side-by-side rows (56); one Email-triage row copper-flagged |
| **Approval column** | x 1244 → 1824 (580 wide), y 300 → 1000 | HUMAN APPROVAL (EN wraps to "Human / approval"), 2 items (72) centred in the column |

The panels are full-width **strips** rather than ≈760×300 cards: at 80px titles, "Document
workflows" is 788px wide, so a two-column card grid plus the approval column cannot fit the
1728px content width (2 × ~865 + 580 > 1728). Three strips stacked beside the column fit: the
widest strip content (the Document-workflows row pair, 937px) leaves ≈ 100px spare in the
1039px strip interior.

## Phone cut — 4:5 (1080×1350), `../command-center-mobile/`

Same story, strings, beat timings (per-element `at` times identical), honesty grammar, rack
focus and loop camera; its own coordinate set. Canvas decision: the pinned CLI
(hyperframes 0.6.84) sizes the render from the root `data-width` / `data-height` (no preset
allow-list on local render), verified by a throwaway 1080×1350 test render (H.264 and
VP9-alpha, full canvas captured) — see `REVIEW.md`. A `layout` variable could not switch the
canvas (root dimensions are read once at compile time — `hyperframes-core` data-attributes),
hence a sibling project.

| Zone | Position (EN; HE mirrors x → 1080 − x) | Role |
|---|---|---|
| **Window frame** | x 36 → 1044, y 76 → 1314 (rx 26) | hairline window |
| **`Sample data` chip** | straddles the top edge, right end (y 44 → 108) | as 16:9 |
| **Header text slot** | x 76 → 1004, y 112 → 324; divider y 344 | tagline / caption / closing as authored line arrays (each joins to the verbatim source string) |
| **Email triage** | x 76 → 1004, y 366 → 648 | title (80) over two stacked rows (56); row 1 copper-flagged |
| **Document workflows** | y 668 → 950 | title over two stacked rows |
| **Approval block** | y 970 → 1292 | HUMAN APPROVAL (one line) + 2 items (68) |

- **Panels on the phone:** Email triage + Document workflows — the two whose rows feed the
  approval items (Draft reply ← draft replies; Signature ← signatures). Morning briefing is
  the one dropped at 4:5.
- **Bloom → CSS copper glow** (renderer cost; no Three.js in this project): three
  radial-gradient discs (block aura 760, check 300, waiting dot 170) positioned from rects
  measured once at rest + camera identity, opacity on the GSAP clock with the WebGL envelope
  (in 7.6 → 8.0, check 8.55 → 9.05, out 9.5 → 10.0), plus the same ring bloom and `#p-appr`
  box-shadow as the 16:9 cut.
- Assets (rendered 2026-09-24): `public/videos/command-center-mobile{,-he}.{mp4,webm}` +
  `command-center-mobile{,-he}-poster.png`, wired as the flagship `film.mobile` set, which
  `FilmPlayer` serves under 768px.

## Panel selection (v2)

Source pool = the **four** flagship `build.items` titles (`offers/ai-office-assistant.ts`
:97/:101/:105/:109). The 16:9 frame shows three — **Morning briefing · Email triage · Document
workflows** — plus **Human approval** (the `example.map` human node) as the emphasis column.

**Dropped: "Follow-up and meetings"** — the weakest panel for this film: (1) it is the only
build item with no overnight-chip counterpart (email → Email triage, calendar → Morning
briefing, documents → Document workflows — the three chips now fly into three panels one for
one); (2) its "meetings" duplicates Morning briefing's first row; (3) neither approval item
derives from it; (4) at the 80px title floor it is the widest title (890px) and fits no panel.
Still a traceable source noun — omitted by choice.

Rows are nouns from each build item's own `desc` (no names, numbers or dates); the approval
items are the singular of two of those rows.

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211`, copper `--accent #d96832`, cream `--fg-1 #f4f1ea`, muted `--fg-2
#b9b3aa` / `--fg-3 #8a847a`, hairlines `--rule` / `--rule-strong`. Chip fill `#2a1c15` =
`--accent-soft` over `--bg-0`, made opaque so the straddled frame line doesn't show through.
Renders transparent (`#review-bg` is REVIEW-ONLY, removed before render).

## Motion

- Chaos → assembly: 3 mono chips drift in at odd rotations with tangled hairlines (overnight
  pile), then accelerate up into the header and blur out as the interface draws itself.
- Interface draw-in: hairline frame strokes in (`autoRound: false` — with `pathLength="1"` the
  dashoffset is a 1 → 0 fraction that CSSPlugin's px rounding would snap halfway; the v1 frame
  never visibly drew); tagline settles from blur; chip fades in; panels populate with staggered
  row reveals (`blur 6 → 0`); one Email-triage row copper-flags.
- Peak: rack focus — status panels defocus, tagline/divider/frame dim; one bounded copper ring
  bloom; the check draws on item 1; **header hand-off** — the dimmed tagline accelerates out
  (8.4s) and the safety caption decelerates in (8.7s) in the same slot.
- Failing-safely beat: rack releases; approved item recedes to muted; **item 2 stays waiting**
  (one finite copper pulse on its dot — never auto-approves).
- Settle: caption hands off to the closing in the header slot (12.0 / 12.35s); hold → poster.
- Easing: `power1/2.inOut` (travel), `power2/3.out` (reveals). No bounce, no elastic. One
  bounded copper ring at the peak; no neon, no sparkles.
- Deterministic only: paused timeline on `window.__timelines["root"]`; **no** `Date.now()` /
  `Math.random()` / network-at-render; finite computed repeats only.

### Cinematic regrade (Phase C — grammar layered on the above, kept in v2)

- **Velocity-matched beat hand-offs** (`techniques` §10): exits **accelerate** (`power2.in`)
  with a blur-out; entries **decelerate** from blur (`power2.out`) — chip → interface, row
  reveals, and every header-slot hand-off (tagline → caption → closing).
- **Rack focus onto the checkpoint** (`depth-of-field-blur` rule): at the peak the status
  panels defocus via a `--dof` blur (`0 → 8px`) **+ dim to 0.42** while the APPROVAL column
  stays sharp. **Refocuses to `--dof:0` before the tail** (a seam must never land mid-defocus).
- **Loop-continuous camera** (`multi-phase-camera` rule): `#camera` pushes in toward the peak
  (`scale 1.0 → 1.035`), holds, then settles back to **identity** by `t=14`; micro-drift
  (`±5px` X / `±3px` Y) on **integer sine cycles** (1× X, 2× Y) returns to 0 at the seam. Both
  cuts use the identical curve.
- **Hero bloom beat — 16:9 only** (`#bloom-gl`): genuine volumetric **copper light** on the
  checkpoint at the peak — additive radial-gradient sprites (core + halo per element; v2 sizes
  scaled to the 56px boxes / 580px column) rendered to a WebGL canvas (Three.js) **inside
  `#camera`**, driven by HyperFrames time via `window.__bloomRender`. **NOT** `UnrealBloomPass`
  (EffectComposer black-boxes the UI over the alpha master). Three.js loads **synchronously**
  (UMD `three@0.160.1`); glow positions come from `window.__bloomCenters`, measured **once at
  rest + camera identity** (carry the `X()` mirror); the per-frame render is wrapped.
  Feature-detected at every failure point → the CSS copper glow on `#p-appr` carries the peak.
  The phone cut uses the CSS glow only (see above).

## Source of truth (three-source rule — re-traced against live source 2026-09-24)

The **site content files are the single source** for every on-frame string. Re-render if these
change; the film bakes copy in. Inline `// source` comments in both `index.html` `COPY` objects
carry the same line refs.

### EN

| Element | Verbatim string | Source |
|---|---|---|
| Overnight chips | `email · calendar · documents` | `offers/ai-office-assistant.ts:121` (`example.map` node 0 `sub`) |
| Header tagline | `What your office logs into` | `offers/ai-office-assistant.ts:37` (`film.sectionTitle`) |
| Panel titles | `Morning briefing` · `Email triage` · `Document workflows` (16:9); Email triage + Document workflows (4:5) | `offers/ai-office-assistant.ts:97 / :101 / :105` (`build.items[].title`) |
| Panel rows | `Meetings` · `Deadlines` / `Incoming mail` · `Draft replies` / `Signatures` · `Stalled documents` | the same items' `desc` (`:98`, `:102`, `:106`) — nouns lifted verbatim, capitalised |
| Approval title | `Human approval` | `offers/ai-office-assistant.ts:125` (`example.map` node, `human: true`) |
| Approval items | `Draft reply` · `Signature` | singular of the `:102` / `:106` rows above |
| Safety caption | `No external messages are sent without approval` | `home.ts:135` (`boundaries.items[1]`) |
| Closing | `The day starts decided` | `offers/ai-office-assistant.ts:126` (`example.map` out node) |
| Honesty chip | `Sample data` (rendered uppercase) | `proof.ts:189` (`sampleBadge`) |

### HE (RTL, mirrored composition — transcreation, not a flipped render)

| Element | Verbatim string | Source |
|---|---|---|
| Overnight chips | `מייל · יומן · מסמכים` | `offers/ai-office-assistant.ts:367` |
| Header tagline | `מה שהמשרד שלכם נכנס אליו` | `offers/ai-office-assistant.ts:283` |
| Panel titles | `תדריך בוקר` · `מיון מיילים` · `תהליכי מסמכים` | `offers/ai-office-assistant.ts:343 / :347 / :351` |
| Panel rows | `פגישות` · `מועדים` / `דואר נכנס` · `טיוטות תשובה` / `חתימות` · `מסמכים תקועים` | `:344`, `:348`, `:352` |
| Approval title | `אישור אנושי` | `offers/ai-office-assistant.ts:371` |
| Approval items | `טיוטת תשובה` · `חתימה` | singular of the `:348` / `:352` rows |
| Safety caption | `לא שולחים הודעות בלי אישור` | `home.ts:207` (`boundaries.items[1]`) |
| Closing | `היום מתחיל מוכרע` | `offers/ai-office-assistant.ts:372` |
| Honesty chip | `נתוני דוגמה` | `proof.ts:326` |

The chip text traces to `proof.ts` `sampleBadge`; the site's status line (`home.ts:119/:186`,
"In build · shown with sample data") stays site-only.

### v1 → v2 source changes

The v1 tagline (`See what needs attention`) and panel nouns (`meetings · urgent emails ·
waiting clients · deadlines · approval`) came from the homepage command-center card, which no
longer exists. v2 re-sources the tagline from the flagship film's own `sectionTitle`, the
panels from `build.items`, and the approval title from the `example.map` human node.

## Site integration

1. Flagship `offers/ai-office-assistant.ts` `film` block (EN :36–49, HE :282–295) serves
   `command-center{,-he}.*` — the page's **one autoplaying film**; the included content-engine
   film rides poster-first, click-to-play. Its `mobile` set serves the phone cut
   `command-center-mobile{,-he}.*` (wired 2026-09-24).
2. Homepage proof band (`ProofFilmSection`) reuses the flagship `film` block via
   `flagshipFilm()` in `home.ts` — same assets (both cuts), no second copy.
3. `FilmPlayer` (poster-first, reduced-motion gated, pause control) serves the `mobile` set
   under 768px.
4. The film caption (EN :41–42 / HE :287–288) and the homepage proof intro (`home.ts:118` /
   `:185`) name only what the v2 frame shows (incoming mail, draft replies, signatures, stalled
   documents, approval — the rows both cuts show) — re-check them if the panels change.

## Hard "do not"

- ❌ No client names, matter numbers, identifier-dates, or performance metrics.
- ❌ No neon, no AI sparkles; one bounded copper ring at the peak.
- ❌ No `dir="rtl"` on `<html>`; no infinite repeats; no random/Date/async.
- ❌ No on-frame string that does not trace to the tables above.
- ❌ No letter-spacing on Hebrew; no serif on frame; no Inter.
