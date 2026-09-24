/**
 * Canonical capability list — what the studio makes. Consumed by:
 *   - the homepage capabilities strip and the /studio index
 *   - src/content/capability-cards.ts (localized card strings; a missing HE
 *     entry fails the build)
 *   - src/lib/site.ts, which derives SERVICES (the schema.org taxonomy) from
 *     OFFERS + CAPABILITIES
 *
 * Import-free on purpose: site.ts imports this file, so any "@/" import here
 * would risk a site → capabilities → site cycle. Page-body copy lives in the
 * locale-keyed content files under src/content/studio/*.ts.
 */

export type Capability = {
  /** Stable key: React lists, the /studio/[capability] route segment, and the
      content-file lookup. */
  key: string;
  /** Card title (homepage strip + /studio index). */
  title: string;
  /** schema.org Service name, source for SERVICES in src/lib/site.ts. */
  serviceName: string;
  /** Route to the capability page. */
  href: string;
  /** Card CTA label. */
  cta: string;
  /** One- to two-sentence card summary. */
  summary: string;
};

export const CAPABILITIES: readonly Capability[] = [
  {
    key: "agentic-systems",
    title: "Agentic systems",
    serviceName: "Agentic systems",
    href: "/studio/agentic-systems",
    cta: "See agentic systems",
    summary:
      "AI agents that run recurring office work, intake, triage, drafts, and follow-up, inside your office's own tools, with a person approving what matters.",
  },
  {
    key: "process-optimization",
    title: "Process optimization",
    serviceName: "Process optimization",
    href: "/studio/process-optimization",
    cta: "See process optimization",
    summary:
      "One process mapped end to end, sorted into automatic, AI-assisted, and human work, and its worst friction removed.",
  },
  {
    key: "websites",
    title: "Websites",
    serviceName: "Websites",
    href: "/studio/websites",
    cta: "See websites",
    summary:
      "Designed, fast, bilingual (Hebrew and English) sites for a business that sells a service, with the studio's own films as the motion.",
  },
  {
    key: "films",
    title: "Films",
    serviceName: "Films",
    href: "/studio/films",
    cta: "See films",
    summary:
      "Short designed films rendered from code, with no synthetic faces or voices: product, process, and explainer loops for a site, LinkedIn, or a pitch.",
  },
  {
    key: "ai-enablement",
    title: "AI enablement",
    serviceName: "AI enablement",
    href: "/studio/ai-enablement",
    cta: "See AI enablement",
    summary:
      "Hands-on sessions where your team learns to run AI on its own recurring work, with the approval habits that keep it safe.",
  },
];

/**
 * Resolve one capability by key. Throws at module init on an unknown key, so
 * a renamed capability fails the build instead of shipping a dead link.
 */
export function capability(key: string): Capability {
  const entry = CAPABILITIES.find((c) => c.key === key);
  if (!entry) {
    throw new Error(`capability: no capability "${key}"`);
  }
  return entry;
}
