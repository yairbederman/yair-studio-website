# Plan: Motion quick wins (Block 4-quick of site review)

> **Status:** Implemented 2026-07-12 on branch `offer-restructure`. This file is the
> cross-thread handoff record. Parent plan: `backlog/2026-07-12-site-review-motion-plan.md`.

## 1. Executive Summary

- **Problem:** The site's only orchestrated moment is the 560ms hero spine load-in; every content spine is static, the mobile header permanently eats ~112px (14% of the screen), and the CTA system has no press/hover choreography beyond color shifts.
- **Goal:** The review's "liveliness-per-effort" winners: spine draw-in on scroll + copper approval pulse, auto-hide mobile header, CTA micro-interactions.
- **User value:** Every page gains motion that *performs the brand argument* (sequences draw, the human checkpoint pulses); mobile readers get their screen back; buttons feel responsive.
- **Move:** CSS-first, reusing the existing `sch-draw`/`sch-rise` keyframes and `--dur/--ease` tokens; two tiny client components (IntersectionObserver, scroll listener) following the repo's "isolated client children" pattern.
- **Risk:** Low-Med. **Size:** ~6 files (2 new components) · no test infra (verified via build/lint/preview).
- Decision made by user: header = **auto-hide on scroll** (not shrink-in-place).

## 2. What Changed

| Area | Change |
|---|---|
| `src/components/SpineReveal.tsx` (new client) | Renders the `.workflow-map` div; IntersectionObserver (threshold 0.35, fire once, disconnect) adds `is-inview`. No-IO → reveal immediately. |
| `src/components/WorkflowMap.tsx` | Content variant renders through `SpineReveal` (passes `ariaLabel` + caption/flow as children); `decorative` (hero) path unchanged. |
| `src/components/HeaderAutoHide.tsx` (new client) | Renders `<header class="site-nav">`; rAF-throttled passive scroll listener toggles `is-hidden` (hide after scrollY>100 scrolling down +4px, show on any scroll-up −4px or near top). Focus reveal is CSS `:focus-within`. |
| `src/components/SiteHeader.tsx` | Wraps children in `HeaderAutoHide`; stays a Server Component. |
| `src/components/CopyEmail.tsx` | Adds `is-copied` class to the address span while copied. |
| `src/app/globals.css` | (a) `.workflow-map.is-inview` draw-in mirroring the hero (delays for 6 nodes, +380ms); (b) `approval-pulse` keyframe — one box-shadow glow on `.sch-node--human .sch-dot` at 700ms, applied to both `.is-inview` spines and the hero; (c) `.site-nav.is-hidden { transform: translateY(-100%) }` + transition + `:focus-within` escape, mobile-only media block; (d) bracket-expand `.btn-primary:hover::before/::after` translateX(∓2px) with `[dir=rtl]` sign flip; (e) `.btn:active { transform: scale(0.98) }` + transform added to `.btn` transition; (f) `copy-flash` keyframe on `.copy-email-address.is-copied`. |

## 3. What Did NOT Change

- Hero load choreography (only shares the new approval-pulse).
- No animation library; no `animation-timeline` scroll-driven CSS — IO+class for cross-browser play-once semantics.
- No opacity-from-0 reveals: spines stay fully visible if JS/IO never runs (transform-only keyframes, same headless-safe pattern as the hero — the globals.css spine-entrance comment was updated since content spines are now deliberately animated).
- Desktop header behavior; nav structure; no hamburger.
- Films, content copy, section order.

## 4. Implementation Notes / Gotchas

- **IntersectionObserver threshold 0.35** is safe because the fallback is graceful: a spine taller than the viewport on a short screen may never reach 0.35 intersection, in which case it simply stays fully visible with no draw-in (transform-only, no opacity gate). Worst case = no animation, never broken content.
- **Approval-pulse fill `both`**: 0%/100% keyframes equal the dot's rest `box-shadow`, so the backward/forward fill during the 700ms delay and after completion is seamless (no flash).
- **RTL brackets**: `.btn` is `inline-flex`; under `direction: rtl` the `::before`/`::after` pseudos render on the opposite side, so the hover translateX signs are flipped — same direction-aware idea as `.offer-cta-arrow`.
- **Reduced motion**: the global reset (`@media prefers-reduced-motion: reduce`) zeroes all transition/animation durations, so the header hide becomes an instant state swap and no draw-in/pulse plays. The `is-inview`/`is-hidden` class toggles still function.
- **Content spines top out at 6 nodes** (verified across `src/content/**`), so the 6-delay ceiling covers every spine; a hypothetical 7th node would animate with the base rule at delay 0 (not broken).

## 5. Verification

- **Automated:** `npm run build` + `npm run lint` (no test script exists in this repo).
- **Live (preview):** spine draw-in fires once on scroll into view (home Evidence, an offer example, /about founder); copper pulse after draw on LTR + RTL; header hides on scroll-down / reappears on scroll-up at 375px and stays pinned on desktop; header reveals on keyboard focus; bracket-expand direction correct on `/` and `/he`; press-scale on primary CTA; copy flash on a page with CopyEmail; reduced-motion → no draw-in/pulse, header still functions; 375px overflow re-check.
- **Gates:** Ripple scan (`/ripple-scan`) · Code review (`/code-review`) · Impact analysis: N/A (presentational).
- **Success criteria:** build+lint clean; all live checks pass; no motion under reduced-motion; content fully visible with JS disabled.

## 6. Files Touched

- **Components:** `src/components/SpineReveal.tsx` (create) · `src/components/HeaderAutoHide.tsx` (create) · `src/components/WorkflowMap.tsx` · `src/components/SiteHeader.tsx` · `src/components/CopyEmail.tsx` (modify)
- **Styles:** `src/app/globals.css` (modify — 6 scoped additions per §2)
- **Handoff:** this file (create)
