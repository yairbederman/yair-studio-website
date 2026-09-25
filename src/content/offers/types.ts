import type { CardItem, Cta, SpineNode, StepItem } from "@/content/types";
import type { CapabilityFilm } from "@/content/types";

/**
 * Content model for an offer detail page — consumed by the shared
 * OfferPageBody template (src/components/offers/OfferPageBody.tsx).
 *
 * Offer detail pages share one section sequence (hero → optional film →
 * who → problems → build → example → how → human → optional after → cta);
 * per-page variation is data: which sections carry an intro, the section
 * titles, and whether a film exists. Section ids are fixed in the template
 * (stable anchors).
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
    /** Optional play-once intro (the wordmark sting) shown before the loop. */
    intro?: { mp4: string; webm: string };
    /** Optional phone cut (4:5) served under 768px by FilmPlayer. */
    mobile?: CapabilityFilm["mobile"];
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
  /**
   * Optional "included" section (id `#content`, after `pricing`) — a service
   * folded into this offer rather than sold on its own (the managed office's
   * content engine). Its film is poster-first, click-to-play: one autoplaying
   * film per page. The id is a redirect target — never rename it.
   */
  included?: {
    title: string;
    intro?: string;
    items: readonly CardItem[];
    film?: CapabilityFilm;
    /** Optional external proof link under the film (opens in a new tab). */
    proofLink?: Cta;
  };
  human: { title: string; intro?: string; items: readonly CardItem[] };
  /**
   * "After the project" — the bridge from a project to the managed office;
   * rendered before the closing CTA as id `after` (ProblemsPanel + one ghost
   * CTA to the managed-office page). Filled through afterProjectSection()
   * in src/content/ladder.ts. Never set on the retainer page itself.
   */
  after?: { title: string; intro?: string; items: readonly CardItem[]; cta: Cta };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};
