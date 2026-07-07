# Offer architecture restructure — proposal (decision stage)

> **RESOLVED 2026-07-07.** All four open decisions were made by the owner (4-offer
> architecture approved with the Managed Assistant leading the homepage; Follow-Up Machine
> folded into the flagship; case study anonymized; pricing model shown without numbers) and
> implemented per `backlog/2026-07-07-offer-restructure-implementation.md`. Kept for history.

Date: 2026-07-07 · Status: awaiting owner decisions · Source: full-site critique
(`.impeccable/critique/2026-07-06T23-18-39Z__src.md`) + owner's commercial offer set.

## Problem

The site's current offer taxonomy (AI Workflow Audit, AI Operations Pilot, Follow-Up Machine,
+2 coming-soon, +3 orphaned retired pages) no longer matches what the owner intends to sell.
The critique also found: 5-option unaided decision on /offers (EN), two parallel taxonomies
live at once (retired pages still routed + sitemapped), no mentorship surface, no real proof
artifact, HE homepage missing founder/proof bands, personal Gmail as conversion endpoint.

## The owner's commercial offer set (verbatim intent, 2026-07-07)

| Option (what to sell) | Pros | Cons |
|---|---|---|
| ⭐ Managed AI office assistant for small professional offices (law first) — setup fee + monthly retainer; per-client container; briefings/email triage/document workflows | Live case study (Sagit) + warm law network; playbook makes onboarding ~1hr; recurring revenue; almost no Hebrew/Israeli-SMB competition | Ops gaps to close first; owner carries hosting/token costs; support burden |
| AI workflow consulting sprints (fixed-price audit → 3 automations for a small team) | Zero infra; fastest first shekel; feeds the managed offer | Hours-for-money; harder to differentiate |
| LinkedIn content engine as a service (5-job pipeline, per-client profile) | Fully built, running on the owner himself; demonstrable | Crowded market; results take weeks to prove |
| R&D-leadership AI enablement (workshops on AI-coding/agent workflows) | Leverages real R&D-leadership background; high day-rate | One-off revenue; network sales cycle |

## Proposed site mapping (recommended)

| New commercial offer | Site surface | What happens to existing pages |
|---|---|---|
| Managed AI office assistant (flagship) | NEW offer page + homepage repositioned around it (hero story: the office that runs itself with a person approving) | Absorbs "Office Command Center" (coming-soon) and, recommended, Follow-Up Machine as named capabilities |
| Consulting sprint (audit → 3 automations) | Rework of existing ai-workflow-audit page into a single "sprint" page (map → build 3 automations, fixed price) | ai-ops-pilot merges in; audit remains the entry step of the sprint |
| LinkedIn content engine | Rebirth of the retired content-ad-operations route (or new route) | Resolves one of the 3 orphaned pages by relisting with new copy |
| AI enablement / mentorship workshops | NEW offer page (the mentorship surface the critique flagged as absent) | internal-ai-systems + dashboards-automation retired pages: 301 to managed-assistant page |

Result: 4 offers max on /offers (fixes the >4-option cognitive-load failure), one flagship,
one taxonomy, mentorship present, and both "coming soon" cards retired.

## Honesty / content constraints (three-source rule)

- Client case study (Sagit / law office): publish ONLY with her explicit written OK; until
  then anonymize ("a Tel Aviv law office") and keep every claim inspectable. This is the
  artifact that can retire the first "Sample data" badge.
- Internal tool names (Hermes, container architecture) stay OFF the site; sell outcomes
  (morning briefing, triaged inbox, document workflow) not infrastructure. Per-client
  isolation can be described generically ("your own private environment") as a trust point.
- Pricing: recommend showing the pricing MODEL (setup + monthly retainer; fixed-price sprint)
  without numbers. No fabricated metrics anywhere.

## Open decisions (owner)

1. Approve the 4-offer architecture above? (flagship managed assistant / sprint / LinkedIn
   engine / enablement workshops)
2. Follow-Up Machine: fold into managed assistant (recommended) or keep standalone?
3. Case study: anonymized now (recommended) vs wait for named permission?
4. Pricing model visibility: show shape without numbers (recommended), full silence, or numbers?

## Dependencies / sequencing

- This restructure supersedes critique plan items 3 (taxonomy cleanup), 4 (mentorship page)
  and reshapes item 6 (bolder redesign must style the FINAL story, so it runs after this).
- PRODUCT.md must be rewritten first (new offer set + owner chose "noticeably bolder site-wide"
  register — current PRODUCT.md mandates restraint and would fight every later design pass).
- Still independent and can ship first: HE homepage founder/proof parity fix; domain email.
- Implementation goes through plan mode (10-section plan) once decisions 1–4 land; that plan
  gets its own backlog file superseding this one.

## Key files

- src/lib/offers.ts — canonical offer list
- src/lib/site.ts — route list, metadata, sitemap (retired pages here), CONTACT_MAILTO
- src/content/offers/*.ts, src/content/offers-index.ts, src/content/offer-cards.ts — offer copy
- src/components/pages/HomePageBody.tsx:36 — EN-only founder/proof gate (separate P1 fix)
- public/videos/one-system-overview.* — orphaned film showing retired taxonomy (rework or delete) — RESOLVED 2026-07-07: deleted; reworked as `hyperframes/office-assistant` → `office-assistant-process{,-he}.*`
- PRODUCT.md — register + brand personality rewrite precedes design work
