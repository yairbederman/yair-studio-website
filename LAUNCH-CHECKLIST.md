# Launch Checklist — replace sample founder data before going live

The founder profile uses **clearly-marked SAMPLE data** until its facts are
confirmed. While the sample gate is on, the whole site carries a meta
`noindex` and founder/example surfaces show a visible "Sample data" badge,
so sample claims cannot silently ship as real.
(robots.txt deliberately stays allow-all: crawlers can only read the noindex
on pages they're allowed to fetch.)

**The single gate:** `PROOF_IS_SAMPLE_DATA` in `src/content/proof.ts`.
Flip it to `false` ONLY after every item below is done. Flipping it removes
all badges, lifts the sitewide noindex (`src/lib/root-metadata.ts`), and
switches the founder-data note in `/llms.txt`. The workflow cards remain
illustrative patterns before and after the flip. A build-time guard in
`src/lib/site.ts` refuses to build with the flag off while the WhatsApp
number is still the placeholder.

## 1. Founder facts — `src/content/proof.ts` → `founder`

- [ ] `role` — confirm the expert positioning line (currently "Productivity & AI systems · founder of y[AI]r studio").
- [ ] `credentials` (4 sample entries) — replace with your real track record: years, leadership scope, systems shipped. No claims you can't back in a call.
- [ ] `spine` (career path) — replace the 5 sample nodes with your real path. Short labels; the final node stays `y[AI]r studio`.
- [ ] `bio` — already real (matches the pre-existing About copy); confirm it still fits.

## 2. Illustrative workflow patterns — `src/content/proof.ts` → `cases.items`

The three cards are intentionally illustrative workflow patterns.
They must never be presented as client engagements or evidence of outcomes.

- [ ] Keep the EN/HE heading and disclaimer explicit that these are illustrative patterns, not client case studies.
- [ ] Keep each card structured as situation, tracking, human approval, and first useful output.
- [ ] Keep each `spine` illustrative and mark its human-approval node with `human: true`.

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
- [ ] Verify: no "Sample data" badges anywhere; page source has **no** `noindex` meta; `/llms.txt` says the workflow cards are illustrative patterns.
- [ ] Redeploy, then re-verify the three checks above on the live URL.

## 7. Custom domain (separate, post-launch OK)

- [ ] Buy the domain, attach it to the Vercel project.
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://<domain>` in Vercel env (or rely on `VERCEL_PROJECT_PRODUCTION_URL`, which auto-upgrades).
- [ ] Re-verify canonical/OG URLs + sitemap on the new domain.
