/**
 * Canonical service list — the three things the studio sells as projects.
 * Consumed by:
 *   - the /services index and the homepage services strip
 *   - src/content/service-cards.ts (localized card strings; a missing HE
 *     entry fails the type check)
 *   - src/content/services.ts (the lookup from a key to its page content)
 *   - src/lib/site.ts, which derives SERVICES (the schema.org taxonomy) from
 *     OFFERS + SERVICES_LIST, and each /services/<key> PAGES entry (path and
 *     EN title) from this list
 *
 * The monthly managed office is NOT a service here: it is what runs after a
 * project, so it stays the OFFERS entry "ai-office-assistant"
 * (src/lib/offers.ts, page /services/managed-office).
 *
 * Import-free on purpose: site.ts imports this file, so any "@/" import here
 * would risk a site → services → site cycle. Page-body copy lives in the
 * locale-keyed content files under src/content/services/*.ts.
 */

export type ServiceKey = "ai-agents" | "websites" | "films";

export type Service = {
  /** Stable key: React lists, the /services/<key> route folder, and the
      content-file lookup. */
  key: ServiceKey;
  /** Card title (homepage strip + /services index) and the service page's
      EN <title>. */
  title: string;
  /** schema.org Service name, source for SERVICES in src/lib/site.ts. */
  serviceName: string;
  /** Route to the service page. */
  href: string;
  /** Card CTA label. */
  cta: string;
  /** One- to two-sentence card summary. */
  summary: string;
};

export const SERVICES_LIST: readonly Service[] = [
  {
    key: "ai-agents",
    title: "AI agents",
    serviceName: "AI agents",
    href: "/services/ai-agents",
    cta: "See AI agents",
    summary:
      "Agents that take over your office's recurring work, intake, sorting, drafts, and follow-up, inside the tools you already use, with a person approving what matters. Built as a fixed-price project, then run and improved month to month if you want.",
  },
  {
    key: "websites",
    title: "Websites",
    serviceName: "Websites",
    href: "/services/websites",
    cta: "See websites",
    summary:
      "Designed, fast, bilingual (Hebrew and English) websites for a business that sells a service.",
  },
  {
    key: "films",
    title: "Creative films",
    serviceName: "Creative films",
    href: "/services/films",
    cta: "See creative films",
    summary:
      "Short creative films made with generative AI, for a brand, a launch, or social media. The studio's own concept films show the range.",
  },
];

/**
 * Resolve one service by key. Throws at module init on an unknown key, so a
 * renamed service fails the build instead of shipping a dead link.
 */
export function service(key: ServiceKey): Service {
  const entry = SERVICES_LIST.find((s) => s.key === key);
  if (!entry) {
    throw new Error(`service: no service "${key}"`);
  }
  return entry;
}
