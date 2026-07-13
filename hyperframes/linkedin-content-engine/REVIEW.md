# REVIEW — "The Content Engine" (LinkedIn Content Engine film)

Status: **composition authored (EN + HE), gates clean, rendered, wired, verified.**

## What was built

One composition (`index.html`), two locales via the `lang`
`data-composition-variables` (EN default; HE mirrors RTL via `X()`). 13s, 6 beats,
single paused GSAP timeline on `window.__timelines["root"]`. Charcoal `#review-bg`
for preview/check/snapshot only — hidden (`data-hidden`) before the transparent
alpha render, restored after (the charcoal MP4 is post-composited from the alpha
master). Authored under the settled cinematic grammar (velocity-matched hand-offs,
rack focus onto the copper checkpoint, loop-continuous camera). **No WebGL bloom**
(flagship-only signature).

## Beats (verified in snapshots)

| t | Beat | Reads as |
|---|---|---|
| 1.4s | Material arrives | 3 source chips (calls · projects · wins) merge into a copper token at node 0 |
| 3.2s | Angles → drafts | token advances the horizontal conveyor; node dots activate copper |
| 5.6s | Review queue | 3 abstract draft cards stack above node 3 (dot + bars, no text) |
| 8.4s | **Approval peak** | rack focus — rail/upstream/queue defocus, copper "Your approval" sharp, ring bloom, check draws, safety caption |
| 10.2s | Published on rhythm | approved token flies to node 5; 4 even copper beats land in cadence |
| 12.4s | Settled | closing "A steady LinkedIn presence"; hero/poster frame |

## Gates

- `npm run check` (lint + validate + inspect): **0 errors**, 0 layout issues across
  9 samples, no console errors, text elements pass WCAG AA. **5 benign warnings**:
  4 × `overlapping_gsap_tweens` on `__unresolved__` (helper-built selectors + the
  always-on camera-drift tween overlapping reveals on *different* elements — the same
  false positive documented for command-center / scattered-to-mapped) and 1 ×
  `composition_file_too_large`.
- **Two real bugs caught + fixed during authoring:** (1) `gsap_css_transform_conflict`
  on `#token` — the token animates `x` along the rail, so a CSS `translate(-50%,-50%)`
  would be overwritten; switched to GSAP `xPercent/yPercent`. (2) The conveyor rail
  was drawn at fixed markup coords while nodes mirror via `X()`, so in HE the first
  node floated past the rail end; rail endpoints now mirror with the nodes.
- **EN** snapshots: `snapshots/contact-sheet-en.jpg`. **HE** snapshots:
  `snapshots/contact-sheet-he.jpg` — full-axis RTL mirror confirmed (material enters
  right, flows left, rhythm ends left; Assistant font; Hebrew reads correctly — a
  transcreation, not a flipped render).

## Honesty compliance

- **Schematic** — node marks + abstract review-queue cards (dot + blank bars, no
  readable post text). No product UI → **no "Sample data" chip** (chip is the
  command-center grammar for real-UI films only).
- Zero client names, metrics, fake SaaS UI, neon, or sparkles. One bounded copper
  ring at the peak.
- Every on-frame string traces to `src/content/offers/linkedin-content-engine.ts`
  (inline `// source` comments in the timeline script; full table in DESIGN.md).

## Legibility

One large active-stage label at a time (58px → ~11px at 375px mobile); node marks,
queue cards, and rhythm beats carry meaning by structure + copper. 375px peak +
closing verified in the contact sheets.

## Render (DONE 2026-07-13 — both locales)

- `--format webm --quality high --video-bitrate 3M` → transparent VP9-alpha WebM
  (`alpha_mode=1` confirmed both locales); HE via `--variables '{"lang":"he"}'`
  (works in Git Bash; the Windows-shell caveat is PowerShell-specific). Charcoal MP4
  + settled poster (t=12.6s) ffmpeg-composited over `#121211`.
- Sizes (well under the family envelope — sparse schematic compresses hard):
  EN `.webm` 0.94 MB · `.mp4` 0.43 MB · poster 0.10 MB;
  HE `-he.webm` 0.73 MB · `-he.mp4` 0.34 MB · `-he-poster.png` 0.08 MB.
- Outputs → `public/videos/linkedin-content-engine{,-he}.{mp4,webm}` + posters.

## Site integration (DONE 2026-07-13)

`film` block (EN + HE) added to `src/content/offers/linkedin-content-engine.ts`
after `hero`; `OfferPageBody` renders it at `#film` under the hero. sectionTitle
"From material to published" (traces to `example.title`); caption traces to
`hero.lead`. No component changes.
