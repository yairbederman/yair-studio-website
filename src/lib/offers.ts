/**
 * Canonical offer list — the two paid rungs of the commitment ladder
 * (src/content/ladder.ts; the free scoping rung is a plain Cta, never an
 * Offer). Consumed by:
 *   - the ladder (homepage + /offers)
 *   - src/lib/site.ts, which derives SERVICES (the schema.org taxonomy) from
 *     OFFERS + CAPABILITIES (src/lib/capabilities.ts)
 *
 * Page-body copy lives in the locale-keyed content files under
 * src/content/offers/*.ts. Localized card strings key off these stable keys
 * (src/content/offer-cards.ts — a missing HE entry fails the build).
 * Code that needs one offer's card strings by key uses offerCard() from
 * src/content/offer-cards.ts, which throws on a missing key.
 */

export type Offer = {
  /** Stable key for React lists and route folders when a detail page exists. */
  key: string;
  /** Card title (homepage + /offers overview). */
  title: string;
  /** schema.org Service name, source for SERVICES in src/lib/site.ts. */
  serviceName: string;
  /** Route to the offer's detail page. Absent means the card is not linked
      (rendered as a status label instead of a dead link). */
  href?: string;
  /** Card CTA label for live offers, or status label for future offers. */
  cta: string;
  /** One- to two-sentence card summary. */
  summary: string;
};

export const OFFERS: readonly Offer[] = [
  {
    key: "ai-office-assistant",
    title: "Managed AI Office",
    serviceName: "Managed AI Office",
    href: "/offers/ai-office-assistant",
    cta: "See the managed office",
    summary:
      "The studio runs your office's recurring work, morning briefings, email triage, document workflows, and follow-up, in the office's own private environment, with your people approving what matters. One-time setup plus a monthly retainer.",
  },
  {
    key: "ai-workflow-sprint",
    title: "AI Workflow Sprint",
    serviceName: "AI Workflow Sprint",
    href: "/offers/ai-workflow-sprint",
    cta: "See the sprint",
    summary:
      "One stuck workflow mapped end to end, then three focused automations built at a fixed price. The fastest way to start.",
  },
];
