# DESIGN — "Wordmark Sting"

A ~2.5s `y[AI]r` brand lockup. Two uses: a **play-once intro** on the flagship
command-center film (via `FilmPlayer`'s `intro` prop — plays once, then the film
begins), and a **standalone social / OG asset**. **Latin-only** (the wordmark is
always Latin + LTR, per `HEBREW.md §1`), so one asset serves EN and HE. Opaque
against `--bg-0`.

## Beats (2.5s)

| Beat | Time | Motion |
|---|---|---|
| Brackets draw | 0.15–0.77s | The copper `[` `]` stroke in (SVG `stroke-dasharray`) |
| y / r rise | 0.50–1.05s | `y` and `r` rise and settle with a **restrained overshoot** (`back.out(1.5)`), cream |
| AI resolves | 0.85–1.35s | `AI` fades + scales to rest between the brackets, copper |
| Bloom | 1.10–2.00s | One soft copper radial bloom, peak ~1.45s |
| studio | 1.35–1.85s | `studio` fades in below, tracked-out mono, muted |
| Hold | ~1.4–2.15s | The full lockup holds |
| Fade to charcoal | 2.15–2.50s | The whole lockup fades to **bare `--bg-0`** |

**Why it ends on charcoal:** the final fade **bakes the handoff**. As the flagship
film's intro, the sting lands on clean charcoal and the film starts — no
client-side crossfade code needed. As a standalone asset it's a self-contained
reveal.

## Type treatment — mirrors `Wordmark.tsx` + `globals.css .wordmark*`

- `y` / `r` — **Inter 600**, cream `--fg-1`, tight tracking (`-0.02em`).
- `AI` — **Inter 700**, copper `--accent`, uppercase.
- `[` `]` — copper, but **drawn as SVG stroked paths** (not text) so they can
  path-draw. Sized to the AI cap height, hugged to `AI` with negative margins to
  match the wordmark's tight tracking.
- `studio` — **Geist Mono 400**, uppercase, letter-spacing `0.6em`, muted
  `--fg-3`, centered below (the stacked lockup form; the site header/OG use the
  inline form only for horizontal space).

## Determinism (HyperFrames contract)

- One **paused** GSAP timeline at `window.__timelines["wordmark-sting"]`, built
  synchronously. Every element exists at load (single scene), so pre-reveal
  states are set with `gsap.set`.
- No `Math.random` / clock / network / infinite repeats. The bloom is a single
  finite `fromTo` with an opacity keyframe (rise→fall).
- Root `data-duration="2.5"`.

## Runtime deps

- **GSAP** 3.14.2 (CDN, SRI-pinned). No Three.js — pure DOM/SVG/GSAP.
- Fonts: local `assets/fonts/` — `inter-600.woff2`, `inter-700.woff2`,
  `geist-mono-400.woff2` (committed; `inter-400` removed as unused).

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211`, cream `--fg-1 #f4f1ea`, muted `--fg-3 #8a847a`,
copper `--accent #d96832`. Literals mirrored here because HyperFrames can't read
the site's CSS variables (accepted practice across the film compositions).

## Renders

Opaque MP4 + WebM against `#121211`, plus a poster. The poster should be the
**settled lockup** (`snapshot --at 1.9`) — the frame a paused/reduced-motion
viewer sees. Copy to `public/videos/wordmark-sting.{mp4,webm}` +
`wordmark-sting-poster.png`.

## Hard "do not"

- ❌ No Hebrew — the wordmark is always Latin + LTR.
- ❌ No infinite repeats; no random / clock for visual state.
- ❌ Don't change the type treatment away from `Wordmark.tsx` (colors, weights).
