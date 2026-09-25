/**
 * Canonical offer list — the two paid rungs of the commitment ladder
 * (src/content/ladder.ts; the free scoping rung is a plain Cta, never an
 * Offer). Consumed by:
 *   - the ladder (homepage + /services)
 *   - src/lib/site.ts, which derives SERVICES (the schema.org taxonomy) from
 *     OFFERS + SERVICES_LIST (src/lib/services.ts), and the managed-office
 *     page path + titles (via offerCard())
 *
 * Page-body copy lives in the locale-keyed content files under
 * src/content/offers/*.ts. Localized card strings key off these stable keys
 * (src/content/offer-cards.ts — a missing HE entry fails the build).
 * Code that needs one offer's card strings by key uses offerCard() from
 * src/content/offer-cards.ts, which throws on a missing key.
 */

export type Offer = {
  /** Stable key for React lists and card lookups (offerCard()). */
  key: string;
  /** Card title (homepage + /services). */
  title: string;
  /** schema.org Service name, source for SERVICES in src/lib/site.ts. */
  serviceName: string;
  /** Where the offer's card links: a page, or an in-page anchor such as
      /services/ai-agents#start. Absent means the card is not linked
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
    href: "/services/managed-office",
    cta: "See the managed office",
    summary:
      "The studio runs your office's recurring work, morning briefings, email triage, document workflows, and follow-up, in the office's own private environment, with your people approving what matters. One-time setup plus a monthly retainer.",
  },
  {
    key: "ai-workflow-sprint",
    title: "AI Workflow Sprint",
    serviceName: "AI Workflow Sprint",
    href: "/services/ai-agents#start",
    cta: "See the sprint",
    summary:
      "One stuck workflow mapped end to end, then three focused automations built at a fixed price. The fastest way to start.",
  },
];
