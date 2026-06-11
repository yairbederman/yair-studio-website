# Launch Checklist — replace ALL sample data before going live

The site is built with **clearly-marked SAMPLE data** so the design could be
completed before the real facts were supplied. While the sample gate is on,
the whole site carries a meta `noindex` and every proof surface shows a
visible "Sample data" badge — sample claims can never silently ship as real.
(robots.txt deliberately stays allow-all: crawlers can only read the noindex
on pages they're allowed to fetch.)

**The single gate:** `PROOF_IS_SAMPLE_DATA` in `src/content/proof.ts`.
Flip it to `false` ONLY after every item below is done. Flipping it
automatically: removes all badges, lifts the sitewide noindex
(`src/lib/root-metadata.ts`), and switches the `/llms.txt` notes line from
"illustrative samples" to the real-engagements statement. A build-time guard
in `src/lib/site.ts` refuses to build with the flag off while the WhatsApp
number is still the placeholder.

## 1. Founder facts — `src/content/proof.ts` → `founder`

- [ ] `role` — confirm the expert positioning line (currently "Productivity & AI systems · founder of y[AI]r studio").
- [ ] `credentials` (4 sample entries) — replace with your real track record: years, leadership scope, systems shipped. No claims you can't back in a call.
- [ ] `spine` (career path) — replace the 5 sample nodes with your real path. Short labels; the final node stays `y[AI]r studio`.
- [ ] `bio` — already real (matches the pre-existing About copy); confirm it still fits.

## 2. Case studies — `src/content/proof.ts` → `cases.items`

Three SAMPLE engagements ("A 12-person law office", "A boutique marketing
agency", "A family logistics business") must become real ones:

- [ ] Replace each with a real engagement: anonymized `clientType`, the real `problem`, what you actually built (`system`), and what **observably** changed (`outcome` — no metrics you can't demonstrate; PRODUCT.md tie-breaker: omit rather than fabricate).
- [ ] Redraw each `spine` to the real workflow (5 short nodes, human-approval node marked `human: true`).
- [ ] Fewer than 3 real cases? Delete the extras — the grid handles 1–3; never pad with fiction.

## 3. WhatsApp — `src/lib/site.ts`

- [ ] Replace the placeholder `WHATSAPP_NUMBER` (`972500000000`) with your real number in international format, no `+`/spaces (e.g. `9725XXXXXXXX`). Until then the wa.me links go nowhere real.

## 4. Hebrew copy review

- [ ] Read every `/he` page as a native speaker (drafted AI-first under the hebrew-quality protocol). Fix register/word choices directly in the `he` objects in `src/content/*.ts`.
- [ ] Confirm the Hebrew spelling of the surname in `src/content/proof.ts` (`יאיר בדרמן` is a standard transliteration of Bederman — correct it if you spell it differently).

## 5. Structured data upgrade (optional, at flip time)

- [ ] `src/components/JsonLd.tsx` — the Person node holds verifiable-only facts by design. When flipping the gate, optionally add `sameAs` (LinkedIn profile URL) and real credential properties. Never add them while sample data is on.

## 6. Flip + verify

- [ ] Set `PROOF_IS_SAMPLE_DATA = false` in `src/content/proof.ts`.
- [ ] `npm run build && npm run lint` (the build fails here if the WhatsApp number is still the placeholder — that's the guard working).
- [ ] Verify: no "Sample data" badges anywhere; page source has **no** `noindex` meta; `/llms.txt` shows the real-engagements line.
- [ ] Redeploy, then re-verify the three checks above on the live URL.

## 7. Custom domain (separate, post-launch OK)

- [ ] Buy the domain, attach it to the Vercel project.
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://<domain>` in Vercel env (or rely on `VERCEL_PROJECT_PRODUCTION_URL`, which auto-upgrades).
- [ ] Re-verify canonical/OG URLs + sitemap on the new domain.
