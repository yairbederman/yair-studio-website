# Phase D — Live Text Motion (section-head settle + copper underline draw)

> **Status:** implemented 2026-07-12 (pending preview review + commit approval).
> **Context.** Phase D of the approved motion roadmap (A+B shipped as `827f526`). The films are
> alive; the text between them was static. D adds the "captions" half of the original ask as pure
> CSS: a one-shot, transform-only settle on section heads when they scroll into view, plus a copper
> underline that draws itself under the h2 of the *human-control* sections — extending the site's
> existing spine grammar (`SpineReveal` + `.is-inview` + `sch-rise`), no new JS, no assets,
> bilingual by construction.

## 1. Executive Summary

- **Problem:** Between the films, page text appeared with no rhythm; the shipped hero/films made the
  static sections feel inert by contrast.
- **Goal:** Quiet scroll rhythm on every section head; one copper motion event per page, semantically
  reserved for "a human stays in control."
- **Move:** Reuse `SpineReveal` (existing client reveal primitive) around `.section-head` blocks;
  hang a child-staggered rise off `.is-inview` reusing the existing `sch-rise` keyframe; add a
  CSS-only underline draw scoped to the human sections.
- **Risk:** Low (CSS + one-line component swaps; all motion transform-only, reduced-motion covered by
  the global reset).
- **Size:** ~10 files · no new tests (no test infra; verified via build/lint/preview + gates).

**Decision — where the copper underline lives:** chose **(b) human sections only** — `.safety` on the
homepage and `#human` on offer/workflows/contact pages. Keeps copper scarce and *semantic* (motion
restates "human approves"), exactly one copper event per page that has such a section. Rejected
(a) every-h2 (multiplies copper, breaks COLOR.md scarcity) and (c) no-underline (drops the signature
move).

## 2. What Changed

| Area | Change |
|---|---|
| UI (one-line swaps) | 7 home sections (`ProblemsSection`, `EvidenceSection`, `OffersSection`, `MethodSection`, `SafetySection`, `FounderSection`, `ProofSection`) + `OfferSection`: `<div className="section-head">` → `<SpineReveal className="section-head">` — identical DOM (div + same class), `.is-inview` added on scroll. `OfferSection` is the single funnel for **every** offer-page section (offers/about/contact/workflows/detail), so one swap covers them all. |
| CSS (`globals.css`) | One new labeled block **"Live text motion (Phase D)"** after the approval-pulse keyframe: (1) `.section-head.is-inview > *` rise reusing `@keyframes sch-rise`, per-child stagger 0/60/120ms, `both`, inside `prefers-reduced-motion: no-preference`; (2) underline `.safety .section-head h2::after` + `#human .section-head h2::after` — 48px×2px copper hairline, rest `scaleX(1)`, draws `scaleX(0→1)` on `.is-inview`, `transform-origin: left` (+ `[dir="rtl"]` → `right`), new `@keyframes underline-draw`. Also updated the stale safety-stagger comment ("not a uniform per-section reveal") to point at the new Phase-D reveal. |
| Docs | this file. |

## 3. What Did NOT Change

- `SpineReveal.tsx` itself (its `className` prop already does everything) — zero new JS, zero bundle growth.
- Page heroes (`PageHero`, homepage hero, `OfferHero`) — h1s stay static; the homepage hero owns its entrance moment.
- Spine/safety/film animations, tokens, content model, SEO, RTL mechanics beyond the one `transform-origin` flip.
- No opacity animation anywhere: without JS the class never lands and every element (underline included) sits fully visible at rest — the headless-safe contract.

## 4. Files Touched

- **Styles (modify):** `src/app/globals.css`
- **UI (modify, one-line each):** `src/components/home/{Problems,Evidence,Offers,Method,Safety,Founder,Proof}Section.tsx`, `src/components/offers/OfferSection.tsx`
- **Docs (create):** `backlog/2026-07-12-live-text-motion.md`

## 5. Verification

- **Automated:** `npm run lint` + `npm run build`.
- **Preview (harness quirks — eval/snapshot, reload per viewport):** scroll-trigger via eval →
  `.is-inview` lands once per head; underline draws on Safety (home) and `#human` (flagship offer);
  reduced-motion emulation → no animation, underline static; `/he` → RTL draw origin correct, Hebrew
  heads rise; mobile viewport; no console errors; inspect confirms transform-only (no layout shift).
- **Success criteria:** build+lint clean; every `.section-head` renders identical DOM; no-JS state =
  today's static page + static underline on exactly the human-control heading contexts.
- **Gates:** Ripple scan (`/ripple-scan`) · Impact analysis (`quality/impact-analysis`) · Code review
  (`/code-review`) · Verify (`/verify`). Skills: `karpathy-guidelines` (reuse SpineReveal, no new
  primitive; every changed line traces to D).

## 6. Notes / open items

- `/about` and `/offers` index have no `.safety` and no `#human` section, so they get the head-rise
  but zero copper underline — intended (nothing to reserve copper for there).
- Fallback if the uniform head-settle reads as generic on review: keep the underline, drop the rise
  (remove the single `.section-head.is-inview > *` rule block).
