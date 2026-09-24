import type { CardItem, Cta, SpineNode, StepItem } from "@/content/types";

/**
 * Content model for a capability page (/studio/<key>) — consumed by the
 * shared CapabilityPageBody template (src/components/pages/CapabilityPageBody.tsx)
 * and filled by one locale-keyed file per capability under src/content/studio/.
 *
 * Every capability page shares one section sequence (hero → optional film →
 * does → receive → how → example → human → where → optional after → cta);
 * per-page variation is data. The film, when present, bakes
 * `example.map.nodes` verbatim.
 */

/** Process film rendered directly under the hero (ProcessFilm → FilmPlayer). */
export type CapabilityFilm = {
  sectionTitle: string;
  webm: string;
  mp4: string;
  poster: string;
  caption: string;
  filmName: string;
  /** Optional phone cut (4:5) served under 768px by FilmPlayer. */
  mobile?: { webm: string; mp4: string; poster: string };
};

export type CapabilityPageContent = {
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
  /** "Where it shows up" — which ladder rung includes it; each rung card links. */
  where: {
    title: string;
    intro?: string;
    rungs: readonly (CardItem & { cta: Cta })[];
  };
  /**
   * "After the project" — the bridge from a project to the managed office;
   * rendered before the closing CTA as id `after` (ProblemsPanel + one ghost
   * CTA to the managed-office page). Filled through afterProjectSection()
   * in src/content/ladder.ts. Never set on the retainer page itself.
   */
  after?: { title: string; intro?: string; items: readonly CardItem[]; cta: Cta };
  /** OfferCTA. */
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};

/** /studio index content — consumed by StudioIndexPageBody. */
export type StudioIndexContent = {
  /** OfferHero. */
  hero: { title: string; lead: string; ctaLabel: string; ctaHref: string };
  /** Section framing around the capability cards (capabilityCards(locale)). */
  capabilities: { title: string; intro: string };
  /** OfferCTA. */
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};
