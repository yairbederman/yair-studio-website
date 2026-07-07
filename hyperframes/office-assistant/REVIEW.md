# REVIEW — constraint checklist & open items

## Brief constraints (backlog/2026-07-07-offer-restructure-implementation.md §1)

| Constraint | Status |
|---|---|
| Flagship story: briefing → triage → documents → follow-up, one approval gate | ✅ four chips, one gate, approval peak, "The day starts decided" |
| All on-frame text traces to `ai-office-assistant.ts` (three-source rule) | ✅ 7 strings, mapped in SCRIPT.md |
| Mobile legible at ~330px frame width | ✅ 7 large text moments only (84/64/96px); no small text; meaning in shapes |
| EN + HE (RTL) renders per locale | ✅ one composition, `lang` variable; HE mirrors layout, Assistant 600 |
| No fake SaaS UI / metrics / names | ✅ chips + rows are abstract schematics |
| No neon / AI sparkles; one bounded copper bloom at the peak | ✅ |
| Charcoal `#121211` + copper `#d96832`, transparent render | ✅ `#review-bg` is REVIEW-ONLY (delete before render) |
| Deterministic (no random/Date/callbacks) | ✅ label text set once at init; pure tween timeline |
| Timeline registered `window.__timelines["root"]`, paused | ✅ |
| ~18s, landscape 1920×1080 | ✅ |

## Validation (2026-07-07)

- `hyperframes lint` → **0 errors**, 6 warnings, all reviewed:
  - 4× `overlapping_gsap_tweens` on `__unresolved__` — false positives: the
    lint can't statically resolve selectors built by the `labelIn/labelOut/
    gatePass/dockRow` helpers; the actual targets are distinct elements at
    disjoint times, and defaults carry `overwrite: "auto"`.
  - `composition_file_too_large` (single-file style) — kept single-file for
    parity with the sibling films (meeting-workflow, one-system).
  - (font warning resolved: literal `"Inter"` base + JS swap to Assistant.)
- `hyperframes validate` → **no console errors** (both locale defaults).
- `hyperframes inspect` → **0 layout issues across 9 samples**.
- Snapshot fonts: EN loads Inter 600; HE loads Assistant 600 (hebrew+latin).
- Stills: `snapshots-en/` + `snapshots-he/` at 1.6, 4.5, 6.3, 9.9, 12.6,
  15.1, 17.2 (see STORYBOARD.md) — **awaiting owner review before render**.

## Render (DONE 2026-07-07 — stills approved by owner)

1. `#review-bg` deleted → transparent render.
2. Pipeline per meeting-workflow/REVIEW.md (MOV ProRes-4444 alpha master →
   VP9-alpha WebM + charcoal MP4 + poster @17.2s), once per locale.
   **HE renders by flipping the declared `lang` default** — see the bug below.
3. Outputs (all within budget; masters deleted after deriving):
   - `office-assistant-process.mp4` 0.71 MB · `.webm` 1.73 MB (alpha_mode=1)
   - `office-assistant-process-he.mp4` 0.53 MB · `-he.webm` 1.27 MB (alpha_mode=1)
   - posters 104 / 73 KB
4. `film` blocks wired into `src/content/offers/ai-office-assistant.ts`
   (locale-keyed: EN files on the EN page, `-he` files on `/he`).

## BUG (render-blocking, non-obvious — keep for the next film)

**`document.documentElement.dir = "rtl"` makes `hyperframes render` emit
blank (fully transparent) frames for every frame**, silently — no console
error, page init logs look healthy, and `snapshot` renders the same file
correctly. Cost two blank 16 MB masters before bisection found it.
Fix: never set `dir` on `<html>` in a composition; set `dir="rtl"` on the
specific flex/text elements instead (mirroring is positional via `X()`).
Also: `--variables '{"lang":"he"}'` could not be confirmed working from a
Windows shell (first blank render masked the test) — the default-flip route
is the verified one for both snapshot and render.

## Open questions for review

1. Approval hold + rows-tick beat (~2.2s) — right length?
2. Act-label rhythm: five sequential top-center labels — keep, or vary position?
3. Anything in the chip schematics to change before render?
