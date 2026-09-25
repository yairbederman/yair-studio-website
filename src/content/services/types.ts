import type {
  CapabilityFilm,
  CardItem,
  Cta,
  SpineNode,
  StepItem,
} from "@/content/types";
import type { WorkCategory } from "@/content/work";

/**
 * Content model for a service page (/services/<key>) — consumed by the shared
 * ServicePageBody template and filled by one locale-keyed file per service
 * under src/content/services/ (the key list is src/lib/services.ts).
 *
 * Every service page shares one section sequence (hero → optional film →
 * does → receive → how → example → human → where → optional work → optional
 * after → cta); per-page variation is data. The film, when present, bakes
 * `example.map.nodes` verbatim. Defined here in full, not imported from the
 * capability model (src/content/studio/types.ts), which is being retired.
 *
 * Section-id contract: on service pages the `where` section renders with
 * id="start" — the fixed-price starting point. /services/ai-agents#start is
 * the target of the Sprint's OFFERS href (src/lib/offers.ts) and of a
 * permanent redirect, so the id is part of the public URL space: never
 * rename it.
 */
export type ServicePageContent = {
  /** OfferHero. */
  hero: {
    eyebrow?: string;
    title: string;
    lead: string;
    ctaLabel: string;
    ctaHref: string;
    secondaryCta?: Cta;
  };
  film?: CapabilityFilm;
  /** "What I do" — rendered as a ProblemsPanel (bold term + sentence). */
  does: { title: string; intro?: string; items: readonly CardItem[] };
  /** "What you receive" — deliverables as nouns, OfferCardGrid. */
  receive: { title: string; intro?: string; items: readonly CardItem[] };
  /** "How it runs" — OfferSteps, one step flagged human. */
  how: { title: string; intro?: string; steps: readonly StepItem[] };
  /** Worked example — WorkflowMap spine; films bake these nodes verbatim. */
  example: {
    title: string;
    intro?: string;
    map: { caption: string; ariaLabel: string; nodes: readonly SpineNode[] };
  };
  /** "What stays human" — OfferCardGrid variant="human". */
  human: { title: string; intro?: string; items: readonly CardItem[] };
  /**
   * "Where to start" — the fixed-price starting point, rendered with
   * id="start" (see the section-id contract above); each card links.
   */
  where: {
    title: string;
    intro?: string;
    rungs: readonly (CardItem & { cta: Cta })[];
  };
  /**
   * Optional work band — this service's work cards, rendered by
   * ServicePageBody through WorkGrid (src/components/work/WorkGrid.tsx).
   */
  work?: {
    title: string;
    intro?: string;
    category: WorkCategory;
    limit?: number;
  };
  /**
   * "After the project" — the bridge from a project to the managed office;
   * rendered before the closing CTA as id `after` (ProblemsPanel + one ghost
   * CTA to the managed-office page). Filled through afterProjectSection()
   * in src/content/ladder.ts. Never set on the managed-office page itself.
   */
  after?: { title: string; intro?: string; items: readonly CardItem[]; cta: Cta };
  /** OfferCTA. */
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};

/** /services index content — consumed by the /services page. */
export type ServicesIndexContent = {
  /** OfferHero. */
  hero: { title: string; lead: string; ctaLabel: string; ctaHref: string };
  /** Section framing around the service cards (serviceCards(locale)). */
  services: { title: string; intro: string };
  /** What happens after a project: the managed office, run month to month. */
  managedOffice: { title: string; body: string; cta: Cta };
  /** OfferCTA. */
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};
