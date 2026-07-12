# Site review findings + motion/video plan — 2026-07-12

Cross-thread handoff from the full-site strategic + design review (impeccable critique, dual-agent,
score 33/40, trend 29 → 33). Full critique snapshot: `.impeccable/critique/2026-07-12T08-00-05Z__src-app.md`.
This file is self-contained: an implementer can execute any block without the original conversation.

## Context

- Site: y[AI]r studio (Next.js, `src/`), bilingual EN + `/he` (RTL), 4 offers, flagship = Managed AI Office Assistant.
- Register (PRODUCT.md): brand, bold-craft/honest-claims. Restraint applies to claims, not craft.
- Mobile + RTL verified mechanically clean at 375px on all 8 page types (no overflow, no edge bleed,
  dir/lang correct). Mobile issues are pacing, not breakage.
- Founder LinkedIn (verified, provided by Yair): https://www.linkedin.com/in/yair-bederman/ — currently
  linked NOWHERE on the site. No founder photo exists anywhere (`public/` holds only videos).

## Block 1 — Trust plumbing (strategic, do first)

1. Link LinkedIn profile site-wide: footer, founder section (`src/components/FounderProfile.tsx` /
   `src/content/proof.ts`), and the LinkedIn-engine offer page (`src/content/offers/linkedin-content-engine.ts`)
   where the copy claims "the same engine runs the studio's own LinkedIn today" — make that claim clickable.
   URL: https://www.linkedin.com/in/yair-bederman/ (never fabricate a different one).
2. Domain email + custom domain: contact is `yair.bederman@gmail.com` (`src/lib/site.ts` CONTACT_EMAIL);
   `NEXT_PUBLIC_SITE_URL` is unset (runs on Vercel domain). Owner action needed (buy domain / set up mailbox);
   code change is trivial once available.
3. "How your data is handled" section on the flagship offer page (`src/content/offers/ai-office-assistant.ts`):
   what "private environment" concretely means, what is/isn't accessed, read-only start. Content must be
   factual — draft with owner, no invented specifics.
4. Price anchor on the sprint ("from ₪X" or range) — needs a number from the owner; do not invent.
5. Consider: productize the Workflow Map as a named cheap fixed-price diagnostic (ladder: Map → Sprint →
   Managed Assistant); founding-client pilot (discount for anonymized case study) to replace "Sample data"
   badges with one real artifact. Both are owner decisions, not code tasks.

## Block 2 — Design P1/P2 fixes

| Tag | Issue | Fix |
|---|---|---|
| P1 | `/he` homepage evidence film is the ENGLISH composition (`public/videos/scattered-to-mapped.*`, no `-he` variant; poster text English). Wired in `src/components/home/EvidenceSection.tsx` via `src/content/home.ts` evidence block. | Compose `scattered-to-mapped-he.{mp4,webm}` + poster (pipeline exists — both offer films have `-he` variants); wire by locale. Interim: hide film on /he, show localized static before/after. |
| P1 | Hero splits intent (`src/content/home.ts` en.hero.lead): flagship pitch + sprint pivot in one paragraph; CTAs offer neither the sprint. | Cut the sprint sentence OR make secondary CTA the sprint link. Mirror decision in HE lead (it has the same pivot). |
| P2 | Flagship offer page: four consecutive identical 4-card `feature-grid` blocks (who/problems/build/human via `OfferCardGrid.tsx` in `OfferPageBody.tsx`). | Vary affordance per section (scenario lines / labeled spine / split panel); cards only where comparison is the job (pricing). |
| P2 | Verify copper-card contrast: in-page detector measured `card-desc` #b9b3aa on #d96832 at 1.7:1 and `card-title` #f4f1ea at 3.1:1 (possibly `.feature-card.is-human`; possibly detector background-resolution artifact — it also emitted impossible 1.0:1 same-hex rows). | Manually inspect the is-human card tokens in `globals.css`; if real, bump text toward ink ramp. |
| P3 | SafetySection (`src/components/home/SafetySection.tsx`) renders highest-trust copy as flattest element. | Copper guard-node treatment (see motion plan C4 — can be solved together). |
| — | Homepage argument order: Evidence + Proof sit at positions 7–8 of 9, after the offers band routes visitors away. | Consider reordering: proof artifacts before/around the offers band. |

Minor quick wins: dead CSS (`.section-index`, `.dot-grid`); HE safety list drifted from EN (4 vs 5 items,
different framing — decide transcreation-or-parity and document it); footer email tap target ~20px;
`/he` pages have zero JSON-LD; Latin "Command Center" title among Hebrew card titles on `/he`.

## Block 3 — Mobile pacing fixes (no breakage exists)

1. Header: two-row wrap nav = 112px sticky at 375px. Fix = compress-on-scroll to one row (see motion E)
   or compact menu. This is the single biggest mobile cost.
2. EN hero lead is 4 sentences → primary CTA bottom at y=794/812 (below fold on 667px phones). The HE lead
   is tighter and its CTA sits at y=618 — tighten EN to match.
3. Bump film pause toggle and Copy button from 36px to ≥44px; footer email link from ~20px.

## Block 4 — Motion/video/animation plan

Existing foundation (protect it): hero `sch-draw`/`sch-rise` keyframes (globals.css ~:639-661), token
easing `cubic-bezier(0.2,0,0,1)` 120-240ms, 4 films via `FilmPlayer.tsx` (poster-first, autoplay gated on
reduced-motion in JS), three-layer reduced-motion discipline. All new motion must keep: exponential
ease-out, no bounce/elastic, reveal-enhances-visible-default (never gate visibility on animation),
reduced-motion alternative for everything.

A. **Hero signature**: "the morning assembles itself" — 2.5-3s once-only orchestration of the hero
   schematic: inputs node accumulates its sub-items, nodes light in sequence, copper approval node gets a
   distinct pause+glow "gate" beat, final node resolves with headline. CSS/WAAPI, no lib. Reduced motion =
   current static render. Must not delay CTA interactivity.
B. **Films**: (1) compose `scattered-to-mapped-he` (P1 above); (2) NEW LinkedIn-engine film — screen-capture
   style of the real pipeline (material → angle → draft → review queue → approval → published), end frame
   references the live profile; fills the page's missing film AND missing proof; (3) NEW enablement film —
   time-lapse of a real agent-workflow session (e.g. Claude Code on a real task).
C. **Scroll choreography (earned, never uniform)**: (1) every `WorkflowMap` spine draw-in on viewport entry —
   reuse hero keyframes + IntersectionObserver, fire once, unobserve; (2) copper approval-node single glow
   pulse when its spine finishes; (3) Evidence before→after clip-path wipe (~1.5s) on entry; (4) SafetySection
   boundaries as staggered copper ticks (≤4 items, ≤50ms stagger each) — also the P3 fix.
D. **Micro**: bracket-expand on `.btn-primary` hover (extend existing `::before/::after` opacity transition
   with 2px outward transform); 100ms press scale 0.98; highlight flash on Copy-email.
E. **Header compress-on-scroll** to one row (~200ms) — doubles as Block 3 fix #1.

Anti-list (do NOT add): parallax, particles, gradient glows, typewriter, fade-on-scroll per section.

## Recommended order

1. Block 1 items 1+3 (LinkedIn links, data-handling section) + Block 2 P1s — highest leverage, hours.
2. Block 4 C (spine draw-in + copper pulse) + E (header compress, also fixes mobile) + D — the
   liveliness-per-effort winners.
3. Block 4 A (hero signature) + B2 (LinkedIn engine film).
4. Block 2 P2 card-grid variation; Block 4 B3 (enablement film); remaining minors.

Gates when implementing: plan-mode for anything non-trivial, /ripple-scan after multi-file content edits,
/code-review before finishing, build+lint+tests before reporting.
