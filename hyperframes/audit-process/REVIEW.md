# REVIEW — constraint checklist & open items (v3: "Three kinds of work")

## Why this is v3 — what the redesign fixed

v2 rendered cleanly but failed as a finished piece: **fonts not clear** (small thin mono,
mush at embed size), an **orange flash** (copper bloom ring + color snaps), and **clutter**
(~40 elements, reads as a diagram). Per the approved plan, the composition was **reworked**
(new layout/metaphor), pushing hardest on decluttering and filmic motion.

| Fix | How |
|---|---|
| Fonts clear | ~6 large Inter lines (60–68px) carry the film; only small text is one 22px wordmark; verified legible downscaled to 720px |
| No orange flash | bloom ring + all color snaps removed; one slow copper sweep + one steady glow that rises once over ~1.1s and holds (softens slightly in the system beat) — never spikes |
| Decluttered | ~40 elements → ~6 lines + abstract tiles; one idea per beat |
| Premium motion | slow eased flows, crossfades, DOF focus pull, continuous camera; the peak is a hold |

## Brief constraints

| Constraint | Status |
|---|---|
| Keep the audit subject + the three-way "aha" | ✅ Automate / Assist / Human judgment, as the hero type |
| Brand line preserved | ✅ "Some things automate / assist / stay human" ("stay human" copper) |
| Human judgment gets the copper peak | ✅ copper tiles + steady held glow + ✓ |
| No fake SaaS UI / metrics / names | ✅ tiles abstract, no labels; no numbers |
| No neon / sparkles / flash | ✅ one slow sweep + one steady glow; no bloom ring |
| Cinematic-restrained HyperFrames language | ✅ tokens, DOF focus pull, camera push-in |
| Charcoal `#121211` + copper `#d96832`, transparent bg | ✅ transparent; `#review-bg` review-only, removed |
| Inter + Geist Mono, local fonts (no external) | ✅ local woff2 reused |
| Deterministic (no random/Date/setTimeout/async/infinite) | ✅ pure paused GSAP; hand-authored scatter |
| Timeline `window.__timelines["root"]`, paused | ✅ |
| Landscape 1920×1080, ~10–13s | ✅ 12s |
| Readable at embed sizes + safe margins | ✅ 720px legibility pass; content within margins |

## Validation

- `hyperframes lint --strict` → **0 errors, 0 warnings** (`overwrite: "auto"` on the
  dynamic-selector tile tweens clears the false-positive overlap warnings).
- `hyperframes inspect` → **0 layout issues across 9 samples**.
- Snapshots (charcoal `#review-bg`, removed after — shipped file transparent):
  `snapshots/contact-sheet.jpg`, `frame-00-at-1.2s.png` … `frame-07-at-11.6s.png`.
- **Legibility gate:** `snapshots/_legibility-720.png` — peak frame at 720px; all lines crisp.
- Fonts: Inter 600 + Geist Mono 400 load. Inter 400 declared but unused (benign).

## Render — DONE (v3; awaiting artifact approval; not integrated/committed)

Pipeline = Films 1 & 2 (MOV ProRes-4444 alpha master → VP9-alpha WebM + charcoal MP4 +
poster). The 222 MB `_master.mov` was scratch and has been deleted after deriving.

| File | Size | Notes |
|---|---|---|
| `public/videos/ai-workflow-audit-process.webm` | ~2.7 MB | VP9, **`alpha_mode=1`**; top-left corner alpha = **0** (transparent) |
| `public/videos/ai-workflow-audit-process.mp4` | ~742 KB | H.264 on charcoal (corner `17,17,17` ≈ `#121211`), `+faststart` |
| `public/videos/ai-workflow-audit-process-poster.png` | ~137 KB | settled frame @ 11.6s |

Both 12.000s (ffprobe). Verification frames (gitignored `render-check/`):
`decision-peak-7.6s.png`, `final-settled-11.6s.png`, `contact-sheet-mp4.png`,
`alpha-map-peak.png`. Render threw no warnings; lint `0/0`, inspect `0` pre-render.

## Open questions for review
1. Tile count/scale — ~15 reads clean; want denser (messier open) or sparser (more minimal)?
2. Peak hold ~1.8s — right, or longer?
3. Wordmark `AI WORKFLOW AUDIT` top-left — keep, or fully wordless?

## Commit hygiene (NOT committed)
`.gitignore` excludes `node_modules/`, `snapshots/`, `renders/`, `render-check/`, video
files, and HF boilerplate `AGENTS.md`/`CLAUDE.md`.
