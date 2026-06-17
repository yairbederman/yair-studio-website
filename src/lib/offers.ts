/**
 * Canonical service list. Consumed by:
 *   - the homepage services section
 *   - the /offers overview page
 *   - src/lib/site.ts, which derives SERVICES (the schema.org taxonomy) from it
 *
 * Page-body copy lives in the locale-keyed content files under
 * src/content/offers/*.ts. Localized card strings key off these stable keys.
 */

export type OfferStatus = "live" | "comingSoon";

export type Offer = {
  /** Stable key for React lists and route folders when a detail page exists. */
  key: string;
  /** Card title (homepage + /offers overview). */
  title: string;
  /** schema.org Service name, source for SERVICES in src/lib/site.ts. */
  serviceName: string;
  /** Route to the offer's detail page. Absent means the card is not linked yet. */
  href?: string;
  /** Card CTA label for live offers, or status label for future offers. */
  cta: string;
  /** One- to two-sentence card summary. */
  summary: string;
  /** Future services are shown as "coming soon" cards, not dead links. */
  status?: OfferStatus;
  /**
   * Engagement shape, phrased affirmatively (no prices).
   * Rendered on the audit page and the /offers sequence.
   *
   * When editing this, also update its Hebrew translations in:
   *   - src/content/offers-index.ts
   *   - src/content/offers/ai-workflow-audit.ts
   */
  engagementNote?: string;
};

export const OFFERS: readonly Offer[] = [
  {
    key: "ai-workflow-audit",
    title: "AI Workflow Audit",
    serviceName: "AI Workflow Audit",
    href: "/offers/ai-workflow-audit",
    cta: "See the audit",
    summary:
      "Map one workflow before building: bottlenecks, automation candidates, and what should stay human.",
    engagementNote: "A focused, fixed-scope review delivered within days.",
  },
  {
    key: "ai-ops-pilot",
    title: "AI Operations Pilot",
    serviceName: "AI Operations Pilot",
    href: "/offers/ai-ops-pilot",
    cta: "Build a pilot",
    summary:
      "Build one practical workflow in 7-10 days around email, calendar, documents, meetings, clients, or tasks.",
  },
  {
    key: "follow-up-machine",
    title: "Follow-Up Machine",
    serviceName: "Follow-Up Machine",
    cta: "Coming soon",
    summary:
      "A system that makes sure leads, quotes, clients, and open loops do not fall through the cracks.",
    status: "comingSoon",
  },
  {
    key: "meeting-to-tasks",
    title: "Meetings to Tasks",
    serviceName: "Meetings to Tasks",
    cta: "Coming soon",
    summary:
      "Meetings become summaries, decisions, tasks, owners, and deadlines.",
    status: "comingSoon",
  },
  {
    key: "office-command-center",
    title: "Office Command Center",
    serviceName: "Office Command Center",
    cta: "Coming soon",
    summary:
      "A daily operating view across documents, email, calendar, tasks, and items waiting for the owner.",
    status: "comingSoon",
  },
];

const audit = OFFERS.find((o) => o.key === "ai-workflow-audit");
if (!audit) throw new Error("OFFERS: missing ai-workflow-audit entry");

const pilot = OFFERS.find((o) => o.key === "ai-ops-pilot");
if (!pilot) throw new Error("OFFERS: missing ai-ops-pilot entry");

/** The audit offer, resolved once for shared engagement-note copy. */
export const AUDIT_OFFER: Offer = audit;

/** The AI operations pilot offer, resolved once for route/content references. */
export const AI_OPS_PILOT_OFFER: Offer = pilot;
