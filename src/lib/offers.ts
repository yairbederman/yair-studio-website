/**
 * Canonical offer list — the single source for the four offers' card copy and
 * routes. Consumed by:
 *   - the homepage Offers section  (src/components/offers/OfferCards.tsx)
 *   - the /offers overview page
 *   - src/lib/site.ts, which derives SERVICES (the schema.org taxonomy) from it
 * so the offer names live in exactly one place.
 *
 * Page-body copy (who it's for, problems, deliverables, steps) is page-specific
 * and lives inside each offer page file — it is intentionally NOT centralized
 * here, since it is not shared across pages.
 */

export type Offer = {
  /** Stable key for React lists and route folders. */
  key: string;
  /** Card title (homepage + /offers overview). */
  title: string;
  /** schema.org Service name — source for SERVICES in src/lib/site.ts. */
  serviceName: string;
  /** Route to the offer's detail page. */
  href: string;
  /** Card CTA label. */
  cta: string;
  /** One- to two-sentence card summary. */
  summary: string;
};

export const OFFERS: readonly Offer[] = [
  {
    key: "ai-workflow-audit",
    title: "AI Workflow Audit",
    serviceName: "AI Workflow Audit",
    href: "/offers/ai-workflow-audit",
    cta: "Start with an audit",
    summary:
      "A focused review of one business workflow: what happens today, where it breaks, what can be automated, and what should stay human.",
  },
  {
    key: "internal-ai-systems",
    title: "Internal AI System",
    serviceName: "Internal AI System",
    href: "/offers/internal-ai-systems",
    cta: "Build an internal system",
    summary:
      "A practical assistant or workflow layer for meetings, tasks, email, knowledge search, reporting, or follow-up.",
  },
  {
    key: "dashboards-automation",
    title: "Dashboard + Automation Layer",
    serviceName: "Dashboard + Automation Layer",
    href: "/offers/dashboards-automation",
    cta: "Create visibility",
    summary:
      "A visibility layer connected to existing tools so teams can see what needs attention and trigger the right next action.",
  },
  {
    key: "content-ad-operations",
    title: "Content & Ad Operations",
    serviceName: "Content & Ad Operations",
    href: "/offers/content-ad-operations",
    cta: "Systemize content ops",
    summary:
      "A repeatable system for turning raw ideas, calls, assets, and performance data into structured content or ad experiments.",
  },
];
