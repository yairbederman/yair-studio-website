import type { CardItem, Cta, SpineNode, StepItem } from "@/content/types";

/**
 * Content model for an offer detail page — consumed by the shared
 * OfferPageBody template (src/components/offers/OfferPageBody.tsx).
 *
 * Offer detail pages share one section sequence (hero → optional film →
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
    secondaryCta?: Cta;
    /**
     * Optional external proof link rendered under the lead — makes a claim in
     * the lead one-click verifiable (e.g. the engine's "runs the studio's own
     * LinkedIn today" pointing at that profile). External by construction, so
     * it opens in a new tab.
     */
    proofLink?: Cta;
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
  /**
   * Optional anonymized real-client case study. Every fact must be true and
   * traceable to a real engagement; the required badge keeps the "anonymized
   * client" framing visible so it is never confused with the illustrative
   * "sample data" patterns elsewhere on the site.
   */
  caseStudy?: {
    title: string;
    intro?: string;
    /** Visible marker, e.g. "Anonymized client" — required, honesty label. */
    badge: string;
    facts: readonly CardItem[];
  };
  how: { title: string; intro?: string; steps: readonly StepItem[] };
  /**
   * Optional data-handling section (rendered as a ProblemsPanel, id `#data`,
   * after `how`). Like `pricing`/`caseStudy`, it is opt-in per offer. v1 copy
   * restates only existing site assertions (safety + how steps) — never invent
   * hosting, certification, or vendor facts. The optional `note` invites
   * environment specifics in the first conversation, mirroring the pricing note.
   */
  dataHandling?: {
    title: string;
    intro?: string;
    items: readonly CardItem[];
    note?: string;
  };
  /**
   * Optional engagement-pricing shape (model only — setup fee, retainer,
   * fixed price). Never carries numbers; amounts stay a conversation.
   */
  pricing?: {
    title: string;
    intro?: string;
    items: readonly CardItem[];
    note?: string;
  };
  human: { title: string; intro?: string; items: readonly CardItem[] };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};
