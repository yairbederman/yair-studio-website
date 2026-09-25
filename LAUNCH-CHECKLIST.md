# Launch Checklist

Founder/about copy is factual, modest positioning. The workflow cards remain
illustrative patterns, not client case studies or evidence of outcomes; their
visible badges are controlled by `PROOF_IS_SAMPLE_DATA` in
`src/content/proof.ts`. That flag applies only to workflow examples. It does not
apply to founder content and does not control site indexing.

## 1. Founder facts — `src/content/proof.ts` → `founder`

- [x] Keep the role and bio limited to founder/operator positioning plus the existing R&D and software leadership background.
- [x] Employers and dates are public and must match the founder's LinkedIn profile exactly: 888 / Taldor / Bank Leumi / El Al (software development) → Viber 2016–2023 → Lognet R&D Manager 2023–2026 → independent AI systems architect since Aug 2024 → y[AI]r studio.
- [x] The live law-office system stays anonymized (no firm name, no identifying detail). No metrics, no client names, no implied outcomes — anywhere in the founder copy.
- [ ] Re-verify the Lognet end year (and whether independent work ran in parallel from Aug 2024) in `src/content/proof.ts` before launch.
- [ ] Re-check factual wording whenever the founder profile changes. Correct the claim directly if needed; do not relabel founder copy as illustrative.

## 2. Illustrative workflow patterns — `src/content/proof.ts` → `cases.items`

The three cards are intentionally illustrative workflow patterns. They must
never be presented as client engagements or evidence of outcomes.

- [ ] Keep the EN/HE heading and disclaimer explicit that these are illustrative patterns, not client case studies.
- [ ] Keep each card structured as situation, tracking, human approval, and first useful output.
- [ ] Keep each `spine` illustrative and mark its human-approval node with `human: true`.

## 3. WhatsApp — `src/lib/site.ts`

- [x] Use the real number in international format, digits only, with no `+` or spaces.
- [ ] Re-test the footer, contact, homepage, offers, and Hebrew WhatsApp links after any contact-channel change.

## 4. Hebrew copy review

- [ ] Read every `/he` page as a native speaker. Fix register and word choices directly in the `he` objects in `src/content/*.ts`.
- [x] Hebrew spelling of the surname confirmed by the owner 2026-09-25: **בידרמן** (applied in `src/content/proof.ts`).

## 5. Structured data

- [ ] Keep `src/components/JsonLd.tsx` limited to verifiable facts. The Person node's `sameAs` carries the founder's public LinkedIn profile (`LINKEDIN_URL` in `src/lib/site.ts`, verifiable and linked site-wide); confirm that URL resolves. Add any further `sameAs` or formal credential properties only when their source URLs or records are available.

## 6. Verify before deployment

- [ ] Run `npm run lint`, `npm run build`, and `git diff --check`.
- [ ] Verify founder surfaces contain no sample-data badge or description.
- [ ] Verify workflow examples still state that they are illustrative patterns, not client case studies or outcome evidence.
- [ ] Verify page source has no unintended `noindex` meta.
- [ ] Verify `/llms.txt` preserves the founder/workflow distinction.
- [ ] Redeploy, then re-check the same items on the live URL.

## 7. Custom domain (separate, post-launch OK)

- [ ] Buy the domain and attach it to the Vercel project.
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://<domain>` in Vercel env, or rely on `VERCEL_PROJECT_PRODUCTION_URL`.
- [ ] Re-verify canonical and Open Graph URLs plus the sitemap on the new domain.
