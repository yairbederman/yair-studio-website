# Film 5 design — "The Command Center" (hyperframes/command-center)

Cross-thread handoff. Decision context: Command Center (the law-office product Yair is building)
will NOT be a fifth offer — it becomes the named product face of the Managed AI Office Assistant
(flagship), per the 2026-07-12 strategy discussion. This film is its centerpiece. Build with the
HyperFrames pipeline exactly as Films 1–4 (see hyperframes/scattered-to-mapped for the freshest
conventions; project CLAUDE.md in hyperframes/meeting-workflow lists the required skills —
`npx hyperframes skills` must be installed in the building session).

## Concept

~14s looping film: the office morning assembles itself INTO the product. Opens in the site's
established chaos language (mono chips, tangled hairlines), ends as the settled Command Center UI.
First film permitted to show interface — the "no fake SaaS UI" rule from Films 1–4 is superseded
because the product is real and in development; the honesty grammar rides along (persistent
SAMPLE DATA chip in the UI frame, zero names/matter numbers/metrics).

## Message arc

Overnight, the inputs pile up. The command center assembles them into one view. Nothing acts
alone: what matters waits in the copper approval queue for a person. Then the day starts decided.

## Source of truth (three-source rule — re-render if these change)

| Element | Text | Source |
|---|---|---|
| Opening chips | email · calendar · documents | flagship example.map node sub (offers/ai-office-assistant.ts), verbatim |
| UI tagline | "See what needs attention" | home.ts problems card kicker, verbatim |
| Panel titles | subset of the card-body nouns: meetings · urgent emails · open tasks · waiting clients · deadlines · approval points (rendered uppercase) | home.ts command-center card body, verbatim |
| Approval caption | "No external messages are sent without approval" | home.ts safety item, verbatim |
| End state | "The day starts decided" | hero/flagship schematic out-node, verbatim |
| Honesty chip | Sample data (rendered uppercase) | proof.ts sampleBadge, verbatim |
| Panel rows | generic echoes of flagship build items only ("Draft reply · ready for approval", "Signature · waiting", "Client meeting · 09:00") | contractions; NO names, NO metrics |

HE variant: full transcreation from existing HE content — panels from the HE card list
(פגישות, מיילים דחופים, משימות פתוחות, לקוחות שמחכים, דדליין, נקודות אישור), tagline "לראות מה דורש תשומת לב",
safety line "לא שולחים הודעות בלי אישור", closing "היום מתחיל מוכרע", badge "נתוני דוגמה".
RTL = mirrored composition (rail/labels/reading direction), not a flipped render.

## Storyboard (1920×1080; hero frame = settled end state)

| # | Time | Beat |
|---|---|---|
| 0 | 0–2.0s | Charcoal; 3 mono chips drift in at odd rotations + tangled hairlines (overnight pile) |
| 1 | 2.0–4.5s | Interface draws itself: hairline frame strokes in, header types tagline, SAMPLE DATA chip fades in top corner; chips fly into the frame (power2.inOut) and dissolve |
| 2 | 4.5–7.5s | Panels populate, staggered row ticks (MEETINGS ×2, URGENT EMAILS ×2 — one copper-flagged, DEADLINES ×2); rows materialize blur 1.6→0 |
| 3 | 7.5–10.0s | PEAK: all dims except APPROVAL column (2 waiting items, copper dots); ONE bounded copper ring bloom; check draws scaleX 0→1 on item 1; caption = the safety line verbatim |
| 4 | 10.0–12.0s | Approved item slides to done; panels settle; item 2 DELIBERATELY stays waiting (approval is never automatic — the "failing safely" honesty beat from the critique) |
| 5 | 12.0–14.0s | Settled hero frame: one done, one waiting, closing line "The day starts decided"; hold → poster |

## Craft rules

- Tokens mirror src/app/globals.css: #121211 bg, #d96832 copper, #f4f1ea/#b9b3aa/#8a847a inks, rule hairlines. Inter 400/600 + Geist Mono, local woff2 (copy from an existing hyperframes project).
- GSAP timeline paused + registered on window.__timelines; class="clip" + data-start/duration/track-index on timed elements; deterministic (no Date.now/Math.random/network); finite computed repeats only.
- Easing: power1/2.inOut travel, power3/expo.out reveals; no bounce/elastic. One bounded copper ring at the peak; no neon/sparkles.
- Renders: transparent WebM + charcoal MP4 (~1.5MB target) + settled poster; EN + HE. File names: command-center.{webm,mp4}, command-center-poster.png (+ -he variants) in public/videos/.
- Legibility check at 375px film width (pattern: hyperframes/audit-process snapshots/_legibility-720.png).
- Gates: npm run check (lint+validate+inspect) clean before render; REVIEW.md per project convention.

## Site integration (after render)

1. Flagship page (src/content/offers/ai-office-assistant.ts + OfferPageBody): new #command-center
   band after `build` — title like "What your office logs into", film + one honest framing line
   ("the command center taking shape — sample data"). RECOMMENDED: this film REPLACES the current
   office-assistant-process film as the page's single film (product > abstraction; keeps one video
   per page — mobile data cost was a persona flag). Old film can retire or move.
2. Homepage: the "Command center" problem card (home.ts problems.cards[0]) gets the settled poster
   as a visual teaser linking to /offers/ai-office-assistant#command-center. No second embed.
3. Keep FilmPlayer (poster-first, reduced-motion gated, pause control) — no new player code.

## Open questions for Yair

- Commercial shape (asked, unanswered — default assumed: client-facing part of the retainer):
  internal engine / client-facing / future standalone. Affects homepage teaser prominence only.
- When real product screenshots exist, consider swapping composition panels for styled captures.
