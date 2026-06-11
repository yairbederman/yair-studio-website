import type { CardItem, SpineNode, StepItem } from "@/content/types";

/**
 * Content model for an offer detail page — consumed by the shared
 * OfferPageBody template (src/components/offers/OfferPageBody.tsx).
 *
 * All four offer pages share one section sequence (hero → optional film →
 * who → problems → build → example → how → human → cta); per-page variation
 * is data: which sections carry an intro, the section titles, and whether a
 * film exists. Section ids are fixed in the template (stable anchors).
 */
export type OfferPageContent = {
  hero: {
    /** Optional kicker — only when it adds information beyond the nav. */
    eyebrow?: string;
    title: string;
    lead: string;
    ctaLabel: string;
    ctaHref: string;
  };
  /** Optional process film band rendered directly under the hero. */
  film?: {
    sectionTitle: string;
    webm: string;
    mp4: string;
    poster: string;
    caption: string;
    filmName: string;
  };
  who: { title: string; intro?: string; items: readonly CardItem[] };
  problems: { title: string; items: readonly CardItem[] };
  build: { title: string; intro?: string; items: readonly CardItem[] };
  example: {
    title: string;
    intro?: string;
    map: { caption: string; ariaLabel: string; nodes: readonly SpineNode[] };
  };
  how: { title: string; intro?: string; steps: readonly StepItem[] };
  human: { title: string; intro?: string; items: readonly CardItem[] };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};
