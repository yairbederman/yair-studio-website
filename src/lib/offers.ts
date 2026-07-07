/**
 * Canonical service list. Consumed by:
 *   - the homepage services section
 *   - the /offers overview page
 *   - src/lib/site.ts, which derives SERVICES (the schema.org taxonomy) from it
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
    title: "Managed AI Office Assistant",
    serviceName: "Managed AI Office Assistant",
    href: "/offers/ai-office-assistant",
    cta: "See the assistant",
    summary:
      "Morning briefings, email triage, document workflows, and follow-up tracking, run as a managed service in your office's own private environment.",
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
  {
    key: "linkedin-content-engine",
    title: "LinkedIn Content Engine",
    serviceName: "LinkedIn Content Engine",
    href: "/offers/linkedin-content-engine",
    cta: "See the engine",
    summary:
      "A managed pipeline that turns your real material into a steady LinkedIn presence, published only after your approval.",
  },
  {
    key: "ai-enablement",
    title: "AI Enablement Workshops",
    serviceName: "AI Enablement Workshops",
    href: "/offers/ai-enablement",
    cta: "See the workshops",
    summary:
      "Hands-on workshops that make R&D and engineering teams fluent in AI-assisted coding and agent workflows, on their own codebase.",
  },
];
