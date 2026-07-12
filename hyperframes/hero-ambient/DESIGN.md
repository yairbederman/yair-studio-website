# DESIGN — "Hero Ambient" loop

A ~18s **text-free** ambient loop that sits **behind the homepage hero** as a
backdrop. Premium, quietly cinematic "expensive dark-mode" texture — never a
figure, never copy. One asset serves EN and HE (no text = no localization).
Rendered **opaque** against `--bg-0` (`#121211`): this IS the background, so
there is no alpha master. Onboarded through the existing `FilmPlayer`
(poster-first, reduced-motion gated, pause control) behind the hero.

## Intent

- **Texture, not content.** The hero copy carries the message; this layer only
  makes the most-seen screen feel alive. Everything is low-energy and low-
  contrast so it never fights the headline (a legibility scrim is added on the
  site side, over the left text zone — see the site plan).
- **The brand's own language, quietly.** The overlay is the workflow-spine motif
  (a hairline flow with one copper human-approval node) drawn faintly, then
  cleared — the same grammar as the hero schematic and the OG image, at a
  whisper.
- **Copper is a signal, not a wash.** Faint copper embers in the shader + one
  soft copper bloom per loop keep the accent present but near-subliminal.

## Layers (z-order, back → front)

1. **`#bg-fill`** — a full-bleed child painted `--bg-0`. Insurance behind the
   opaque canvas (the producer can drop the *root's own* background → black, so
   the fill lives on a child, never the root).
2. **`#ambient`** — a WebGL **FBM shader plate** (Three.js). A near-black
   domain-warped drift with a subtle warm brightness lift ("smoke") and faint
   copper embers. Opaque, full-frame.
3. **`#schematic`** — two SVG hairlines + three nodes (one copper, the human
   checkpoint) that draw in (`stroke-dasharray`) and fade out. Center-right
   biased (hero copy sits left).
4. **`#bloom`** — one soft copper radial bloom per loop, expands + clears.

## Seamless loop (the whole point)

- **Shader:** the animated noise offset follows a **closed circular path** in
  noise space — `flow = (cos θ, sin θ)·R` with `θ = 2π·(t / DURATION)`. Every
  term is a continuous function of `flow`, which is periodic, so the field at
  `t = 0` is **identical** to `t = DURATION`. No linear time term anywhere.
- **Overlays:** every DOM overlay rests at **opacity 0 at both loop
  boundaries** (schematic draws in ~2.0–6.0s, clears by ~15.6s; bloom lives
  ~7.2–10.8s). So the seam is pure, continuous shader drift.
- Verify the seam by diffing the first and last rendered frames (Phase 4).

## Determinism (HyperFrames contract)

- **Shader time** comes from the `three` adapter's `hf-seek` event
  (`e.detail.time`) — never `performance.now()`. FBM noise is hash-based (no
  `Math.random`). `renderAt(time)` is a pure function of time.
- **DOM overlays** run on one **paused** GSAP timeline registered at
  `window.__timelines["hero-ambient"]`, built synchronously. The one repeat
  (the human-node pulse) is a finite `yoyo`.
- Root carries `data-duration="18"` — **required** for the `three` adapter (no
  duration auto-inference) even though a GSAP timeline is also present.

## Runtime deps (loaded at page load, like every other film here)

- **GSAP** 3.14.2 (CDN, SRI-pinned) — DOM overlays.
- **Three.js r160.1** UMD global (`build/three.min.js`, CDN, SRI-pinned) — the
  shader plate. r160.1 is the **last** version shipping the UMD global build;
  ≥0.161 dropped it. HyperFrames' `three` adapter is detected by this `<script
  src>` (v0.6.84 lint does not recognize the `+esm` ES-module import) and
  dispatches `hf-seek`.

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211`, copper `--accent #d96832`, hairline `--rule-strong
#3a3a34`, node stroke `--fg-3 #8a847a`. Mirrored as literals here because
HyperFrames can't read the site's CSS variables (the accepted practice across
all the film compositions).

## Renders

Opaque MP4 + WebM against `#121211`, plus a poster (a settled, quiet frame —
`snapshot --at 0`). Copy to `public/videos/hero-ambient.{mp4,webm}` +
`hero-ambient-poster.png`. `renders/`, `snapshots/`, and `node_modules/` are
gitignored (the composition source + fonts are committed; there are no fonts
here — text-free).

## Hard "do not"

- ❌ No text, no figures, no product UI — texture only.
- ❌ No linear time term in the shader (breaks the loop); no infinite repeats.
- ❌ No `Math.random` / `Date.now` / `performance.now` for visual state.
- ❌ No high-contrast or high-energy motion — it must never fight the hero copy.
