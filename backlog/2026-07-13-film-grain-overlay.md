# Plan — Film-Grain Overlay (Phase E): site-wide texture + subtle shimmer

## Context

The site is flat warm-charcoal (`--bg-0 #121211`) everywhere; the only textured/alive surface is the hero's pre-rendered ambient film (`827f526`). The user asked for background texture / slight ambient motion to uplift the UI. Direction chosen by user from a live visual preview of 4 options: **film grain, site-wide, with subtle film-stock shimmer** (option 1 + "subtle shimmer"). This bridges the textured hero film and the flat sections — the "expensive dark mode" move — while respecting both standing anti-lists (no parallax/particles/gradient glows; no glassmorphism).

Working-tree note: uncommitted **Phase D** (live text motion) edits already sit in `globals.css` + 8 components. Phase E is purely additive (appended section) and must be kept a **separate commit** from Phase D.

## 1. Executive Summary

- **Problem:** Between the hero film and the flat charcoal sections there is a texture cliff; the page body reads inert.
- **Goal:** Site-wide filmic texture with barely-perceptible motion; zero JS, zero assets, zero layout risk.
- **Recommended move:** One appended CSS section — `body::after` fixed overlay, inline SVG `feTurbulence` grain at **opacity 0.04**, 8-step `steps(1,end)` jitter at 0.9s, gated by the house 3-layer reduced-motion pattern.
- **Risk:** Low — additive only; single file; no component edits.
- **Size:** 1 file modified (`globals.css`) · 0 new tests (no test infra; verified via build/lint/preview + gates).
- **Decisions:** none open — texture type and motion level already chosen by user; opacity ships at 0.04 with a documented 0.03–0.05 tweak range reviewed live in preview.

## 2. What Will Change

| Area | Change |
|---|---|
| CSS (`src/app/globals.css`) | NEW appended section "Film-grain overlay (Phase E)": `body::after` — `position:fixed; inset:-10%; z-index:200; pointer-events:none`; background = inline SVG feTurbulence data-URI (180px tile, `stitchTiles=stitch`, `saturate(0)` = achromatic, no hex literal); `opacity:0.04`. `@keyframes film-grain` (8 discrete translate positions, max 3.5% of element = 4.2% viewport < 10% margin). Animation declared **only** inside `@media (prefers-reduced-motion: no-preference)`, 0.9s `steps(1,end)` infinite (~9 fps film cadence). |
| Docs | Plan copied to `backlog/2026-07-13-film-grain-overlay.md` (Phase 0). |

## 3. What Will NOT Change

- No component/layout edits — `body::after` covers both root layouts (`(site)`, `(he)`) automatically; grep-verified no existing `body::before/after` and no `body >` selectors.
- Design tokens, films, Phase D work, header/nav behavior, RTL mechanics (grain is direction-free — physical `inset`/`translate`, symmetric noise; no `[dir="rtl"]` rule needed).
- No `will-change` (harmful under reduced-motion: forces GPU layer for users who get no motion).
- No new z-index above 200; stacking ladder stays content(auto) < nav(10) < skip-link(100) < grain(200). No dialogs/portals exist in `src/`.

## 4. Why This Is Worth Doing

- Highest uplift-per-line on the site: one CSS block textures every page, both locales.
- Unifies the organic hero film with flat sections — removes the "dead page under a live hero" contrast.
- Satisfies the "slight background animation" ask within the anti-lists (grain ≠ glow/particles/parallax).
- Reduced-motion users still get the full texture (static) — uplift without motion cost.

## 5. Implementation Plan

- **Phase 0 — Handoff:** copy this plan to `backlog/2026-07-13-film-grain-overlay.md`.
- **Phase 1 — CSS:** append the Phase E section (exact block below) after the last section (~L1454) of `globals.css`. Load `karpathy-guidelines` + `impeccable` (polish lens) at implementation.
- **Phase 2 — Verify + gates** (§9), live-review grain intensity with user in preview (knob: opacity 0.03–0.05), then request commit approval (separate from Phase D).

The exact CSS block (validated by Plan agent — geometry, encoding, keyframe-name collision, and stacking all checked):

```css
body::after {
  content: "";
  position: fixed;
  inset: -10%;
  z-index: 200;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23g)'/%3E%3C/svg%3E");
  background-size: 180px 180px;
  opacity: 0.06; /* intensity dial — shipped 0.04, bumped to 0.06 on live review for more presence */
  /* NB: no mix-blend-mode. Overlay was tried to reach bright surfaces but collapsed the
     grain on the dark 95% (midtone blend, ~no midtones here) — normal blend is uniform. */
}
@media (prefers-reduced-motion: no-preference) {
  body::after { animation: film-grain 0.7s steps(1, end) infinite; }
}
/* Motion tuned livelier on live review: 8→10 frames, 0.9s→0.7s (~14 fps),
   amplitude 3.5%→6% (6%×1.2 = 7.2% vp shift < 10% bleed, 2.8% margin). */
@keyframes film-grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, 4%); }
  20% { transform: translate(4%, -5.5%); }
  30% { transform: translate(-6%, -3%); }
  40% { transform: translate(5.5%, 4.5%); }
  50% { transform: translate(-3%, 6%); }
  60% { transform: translate(6%, -2.5%); }
  70% { transform: translate(-5.5%, -5.5%); }
  80% { transform: translate(3.5%, 5.5%); }
  90% { transform: translate(-4.5%, -4%); }
}
```

(Plus the house-style banner comment documenting z-ladder, reduced-motion contract, no-hex-by-construction, RTL-free rationale.)

## 6. Impact

| Dimension | Impact |
|---|---|
| UX | Whole site gains filmic texture + subliminal life; text contrast stays ≥9.9:1 worst-case (AA headroom huge) |
| Data/output | 0 new assets, 0 requests — texture is an inline data-URI |
| Cost/perf | One permanent GPU layer (~12–17 MB typical, ~85 MB worst-case 2K@2x); ~9 compositor blends/sec; content layers never re-rasterize; hidden tabs pause it |
| Existing behavior | Nothing beneath changes; `pointer-events:none` keeps all controls clickable; reduced-motion = static grain, zero animation |
| Maintenance | One self-contained CSS section; single tweak knob (opacity) |

## 7. Main Risks & Mitigations

| Risk | Mitigation |
|---|---|
| **Biggest assumption: 0.04 grain reads as premium texture, not a dirty screen** | Live preview review with user; knob 0.03–0.05 is a one-char edit; full removal = delete one section |
| Visible tiling/moiré on DPR-1 screens | `stitchTiles=stitch` + baseFrequency 0.8 (per-pixel noise); fallback: bump tile to 240px |
| Battery cost of infinite animation | ~9 steps/sec is text-cursor-blink class; knobs documented (fewer steps / longer loop) if ever needed |
| Grain smear over mobile auto-hide nav transform | Independent compositor layers — no smearing; verified in preview step 7 |
| Reduced-motion leak | Double-gated (media query + global reset L209-216); even a leak lands on `translate(0,0)` = complete render |
| Commit entanglement with pending Phase D | Phase E is an appended block; stage/commit separately |

## 8. Files Likely Touched

- **Styles (modify):** `src/app/globals.css` — append one section at end
- **Docs (create):** `backlog/2026-07-13-film-grain-overlay.md`

## 9. Verification Plan

- **Automated:** `npm run lint` + `npm run build`.
- **Preview (dev server; harness quirks — verify via JS eval, reload per viewport), on `/` and `/he`:**
  1. `getComputedStyle(document.body,'::after')` → fixed / pointer-events none / z 200 / opacity 0.04 / data-URI background.
  2. `document.getAnimations()` → find pseudo `::after` on body, `playState==='running'`, duration 900, iterations Infinity.
  3. `elementFromPoint` probes over nav link, film-toggle, CopyEmail button, footer link → each returns the control, never body (pass-through proof).
  4. Sample pseudo transform at t=0 vs t≈150ms → discrete jump, values ∈ the 8 keyframe matrices.
  5. CSSOM walk → animation rule lives only inside `no-preference` media rule; base rule carries texture (static-grain survival).
  6. Mobile 375px: auto-hide nav toggles, probes still pass. 7. `body.scrollHeight` unchanged; no console errors.
  8. **User eyeballs grain intensity live** → tweak 0.03–0.05 if wanted.
- **Success criteria:** build+lint clean; all probes pass; texture visible on close look, invisible in glyph edges; reduced-motion structure verified.
- **Gates (resolved at implementation):** Ripple scan (`/ripple-scan`): RUN — clean (Reverse-Grep no `film-grain` collision · Sibling-Propagation reduced-motion pattern matches 4/5 ambient-animation convention · Doc-Sync no living section index to drift · Behavioral-Snapshot additive, no regression). Impact analysis: CONFIRMED — two independent code-review finders re-verified stacking/perf/interaction; hero film is `position:absolute` so grain is the sole fixed layer. Code review (`/code-review xhigh`): RUN — 0 findings. Verify: build + lint clean; browser probes pass on `/` and `/he` (computed style, animation running 900ms∞, keyframes=8, CSSOM gate-only-in-no-preference, console clean). NOTE: hidden preview viewport is 0×0, so `inset:-10%`→px resolution and `elementFromPoint` pass-through were confirmed structurally (source + spec), not by live hit-test. Skills: `karpathy-guidelines` ✔ · `impeccable` polish lens ✔ (on-register, no changes to block).

## 10. Open Questions / Approval Needed

None open — texture type and motion level were chosen by the user from the visual preview; opacity ships at 0.04 with a live-review knob. **Approval requested: proceed with Phases 0–2 as scoped (1 CSS file + backlog handoff), separate commit from pending Phase D work.**
