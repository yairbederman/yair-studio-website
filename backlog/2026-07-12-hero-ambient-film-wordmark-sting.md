# Plan — Hero Ambient Film (A) + Wordmark Sting (B)

> **Context.** The site's premium-motion uplift, phase 1 (approved from the HyperFrames capability review, 2026-07-12). Two new HyperFrames compositions rendered to video and onboarded through the existing FilmPlayer pipeline: (A) a text-free ambient background loop behind the homepage hero, and (B) a ~2.5s `y[AI]r` wordmark sting used as a play-once intro on the flagship command-center film and as a standalone social/OG asset. Sting placement decision already made by user: **flagship film only**.
> **Handoff:** on approval, this plan is copied to `backlog/2026-07-12-hero-ambient-film-wordmark-sting.md` (step 0) per the cross-thread handoff convention.

## 1. Executive Summary

- **Problem:** The hero — the most-seen screen — is the least animated surface on the site; films start abruptly with no brand signature.
- **Goal:** Premium, quietly cinematic first impression; films open as a branded system.
- **User value:** "Expensive dark-mode" credibility for a studio selling AI craft; zero client GPU cost (all motion is pre-rendered video).
- **Recommended move:** Two new compositions (`hero-ambient`, `wordmark-sting`) + small additive FilmPlayer capabilities (backdrop styling hook, play-once intro).
- **Risk level:** Medium (visual restraint + loop seam are craft risks; code changes are small and additive).
- **Size:** 2 new composition dirs · ~8 site files modified · 6 new public assets · 0 new tests (no test infra in repo; verification = build/lint/preview/gates).

## 2. What Will Change

| Area | Change |
|---|---|
| Compositions | NEW `hyperframes/hero-ambient/` (~18s seamless loop, 1920×1080, text-free) · NEW `hyperframes/wordmark-sting/` (~2.5s, Latin-only, ends fading to bare `--bg-0`) |
| Public assets | NEW `public/videos/hero-ambient.{mp4,webm}` + poster · `wordmark-sting.{mp4,webm}` + poster |
| UI | `FilmPlayer` gains two optional props: `frameClassName` (backdrop styling hook) and `intro?: {mp4, webm}` (play intro once → swap to looping film on `ended`). `HeroSection` mounts an aria-hidden backdrop layer + scrim; gains a `locale` prop (for localized pause/play labels via existing `shellContent(locale).filmControls`) |
| CSS | `globals.css`: `.hero` becomes positioning context; `.hero-backdrop` layer (object-fit cover, z-under content), legibility scrim (gradient, `[dir="rtl"]` flip), bottom fade into the next section, toggle placement |
| Content/types | `OfferPageContent` film type (`src/content/offers/types.ts`) + `ProcessFilm` props gain optional `intro`; `ai-office-assistant.ts` EN + HE film entries reference the sting (same locale-neutral files) |

## 3. What Will NOT Change

- The other three films and their pages (sprint, meeting-workflow, scattered-to-mapped) — no sting, no re-render.
- Existing FilmPlayer callers' behavior (new props optional; zero-prop path identical).
- Hero copy, layout grid, the CSS schematic (`WorkflowMap decorative`) — backdrop goes *behind*, replaces nothing.
- Design tokens, content model shape beyond the optional `intro` field, SEO/metadata, `/he` parity mechanics (shared `HomePageBody` gives both locales the backdrop automatically).
- No new runtime deps (no GSAP on the site; motion arrives as video).

## 4. Why This Is Worth Doing

- The first screen carries the "premium" judgment; today it's static — this is the highest-leverage surface per asset.
- One text-free asset serves EN + HE (no ×2 authoring cost).
- The sting turns four disparate films into a branded system for one 2.5s asset, opening exactly where the product face is (flagship).
- All impressiveness is pre-rendered: no client perf/jank risk, poster-first + reduced-motion + pause already solved by the existing pipeline.

## 5. Implementation Plan

**Phase 0 — Handoff + scaffold.** Copy plan to `backlog/`. Scaffold both composition dirs by copying `hyperframes/command-center/`'s project shape (`package.json` pinned `hyperframes@0.6.84`, `hyperframes.json`, `meta.json`, fonts for the sting). NOT `hyperframes init` (avoids global-skills pollution; set `HYPERFRAMES_SKIP_SKILLS=1` if any CLI path triggers skill refresh).

**Phase 1 — `hero-ambient` composition.** Layers: (1) WebGL FBM shader canvas — near-black domain-warped drift with faint copper embers; deterministic hash noise; time driven along a **closed circular path in noise space** so frame 0 == frame N (guaranteed seamless loop); Canvas-2D gradient fallback; (2) SVG hairline schematic paths drawing in/fading out (`stroke-dasharray`), quiet at loop boundaries; (3) one soft copper bloom per loop. Opaque render against `#121211` (no alpha master needed — it IS the background). `npm run check` + snapshots → **stop for user review of stills** → render + loop-seam check → copy assets.

**Phase 2 — `wordmark-sting` composition.** Brackets path-draw in copper → `y`/`r` rise-settle (restrained overshoot) → `AI` resolves → single bloom → hold lockup → fade to bare `--bg-0` in final ~300ms (bakes the handoff; no client crossfade needed). Check + snapshots → **stop for user review** → render + copy.

**Phase 3 — Site integration.** FilmPlayer `frameClassName` + `intro` (one `<video>`; `ended` → swap sources, `load()`, play with `loop`; autoplay-block and reduced-motion paths unchanged). HeroSection backdrop + scrim + locale prop (HomePageBody passes it). CSS per §2. ProcessFilm/type/content wiring for the flagship intro.

**Phase 4 — Verification + gates** (§9), then commit approval.

## 6. Impact

| Dimension | Impact |
|---|---|
| UX | Hero quietly alive; flagship film opens branded; pause control visible on hero (WCAG 2.2.2) |
| Data/output | +6 static assets (~2–3.5 MB total; video fetched only post-hydration, non-reduced-motion) |
| Cost/perf | No LCP regression expected: poster-first, `preload="metadata"`, video mounts after hydration (existing pattern) |
| Existing behavior | FilmPlayer additive; three films untouched; reduced-motion users see posters only, fetch no video |
| Maintenance | Two more composition dirs following the established pattern; token literals mirrored in compositions (existing accepted practice, documented in each DESIGN.md) |

## 7. Main Risks & Mitigations

| Risk | Mitigation |
|---|---|
| **Biggest assumption: an ambient loop can stay legible-safe and premium.** If it fights the copy, the plan degrades gracefully | Scrim over text zone + low-energy composition; review stills gate before render; **fallback: ship poster-only** (static shader still) — hero still gains texture |
| Loop seam visible | Closed-path noise time + all overlays quiet at boundaries; verify first/last frame diff |
| Sting intro feels like a delay | 2.5s cap, ends on charcoal; poster unchanged (settled frame); pause always available |
| Autoplay blocked mid-sequence | Existing play/pause state machine already tracks the `<video>`'s real events; intro swap keyed to `ended` only |
| `npx hyperframes` render env drift | Version pinned 0.6.84 (same as working command-center); render is a local, repeatable step |
| RTL scrim direction wrong | Explicit `[dir="rtl"]` gradient override; verify on `/he` in preview |

## 8. Files Likely Touched

- **Compositions (create):** `hyperframes/hero-ambient/{index.html, DESIGN.md, meta.json, hyperframes.json, package.json}` · `hyperframes/wordmark-sting/{same + assets/fonts/}`
- **Assets (create):** `public/videos/hero-ambient.{mp4,webm}`, `hero-ambient-poster.png`, `wordmark-sting.{mp4,webm}`, `wordmark-sting-poster.png`
- **UI (modify):** `src/components/FilmPlayer.tsx`, `src/components/ProcessFilm.tsx`, `src/components/home/HeroSection.tsx`, `src/components/pages/HomePageBody.tsx`
- **Styles (modify):** `src/app/globals.css`
- **Content/types (modify):** `src/content/offers/types.ts`, `src/content/offers/ai-office-assistant.ts`
- **Docs (modify):** `README.md` (film inventory note) · **backlog (create):** `backlog/2026-07-12-hero-ambient-film-wordmark-sting.md`

## 9. Verification Plan

- **Automated:** per composition `npm run check` (lint + validate + inspect); site `npm run lint` + `npm run build`.
- **Loop seam:** extract first/last frames (ffmpeg) → visual/diff compare.
- **Preview (dev server, per preview-harness quirks — verify via eval/snapshot, reload per viewport):** hero video mounts + `currentTime` advances (eval); pause toggle works; console/network clean; reduced-motion emulation → poster only, zero video requests; mobile viewport; `/he` RTL scrim + Hebrew labels; flagship: seek intro near end via eval → `ended` swaps to film and loops.
- **Success criteria:** build+lint clean; hero copy passes contrast over the scrim (inspect); all four existing film surfaces unchanged; reduced-motion fetches no video bytes.
- **Gates:** Ripple scan (`/ripple-scan`): PENDING — runs after multi-file edit · Impact analysis (`quality/impact-analysis`): PENDING · Code review (`/code-review`): PENDING · Verify (`/verify`): PENDING · Skills loaded: `karpathy-guidelines` ✔ (surgical/additive bias applied), `hyperframes-core` + `hyperframes-keyframes` to load at composition authoring time.

## 10. Open Questions / Approval Needed

None open — the one implementation-shaping decision (sting = flagship-only intro) was resolved. **Approval requested: proceed with Phases 0–4 as scoped above, including the two review stops at composition stills.**

---

## Execution notes (appended during implementation)

- Sting placement: **flagship command-center film only** (as the play-once intro). Not applied to the other three films, and not auto-mounted anywhere else.
- Backlog handoff written 2026-07-12 as part of Phase 0.
