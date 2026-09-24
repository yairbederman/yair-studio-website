import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCTA from "@/components/offers/OfferCTA";
import ProblemsPanel from "@/components/ProblemsPanel";
import WorkflowMap from "@/components/WorkflowMap";
import ProcessFilm from "@/components/ProcessFilm";
import { LinkCardGrid } from "@/components/home/CapabilityStrip";
import { shellContent } from "@/content/shell";
import type { CapabilityPageContent } from "@/content/studio/types";
import type { Locale } from "@/content/types";

/**
 * Shared capability-page template (/studio/<key>). Every capability page uses
 * the same section sequence — hero → optional film → what I do → what you
 * receive → how it runs → worked example → what stays human → where it shows
 * up → closing CTA — so the sequence lives once here and each route passes
 * its locale-resolved content. Built from the offer-page primitives only.
 *
 * Section ids are fixed (film/does/receive/how/example/human/where): stable
 * in-page anchors, unique per page.
 */
export default function CapabilityPageBody({
  content,
  locale,
}: {
  content: CapabilityPageContent;
  /** Locale of the content — used for shell chrome (film controls). */
  locale: Locale;
}) {
  const c = content;
  return (
    <main id="main">
      <OfferHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        lead={c.hero.lead}
        ctaLabel={c.hero.ctaLabel}
        ctaHref={c.hero.ctaHref}
        secondaryCta={c.hero.secondaryCta}
      />

      {c.film ? (
        <OfferSection id="film" title={c.film.sectionTitle}>
          <ProcessFilm
            webm={c.film.webm}
            mp4={c.film.mp4}
            poster={c.film.poster}
            caption={c.film.caption}
            filmName={c.film.filmName}
            controls={shellContent(locale).filmControls}
            mobile={c.film.mobile}
          />
        </OfferSection>
      ) : null}

      <OfferSection id="does" title={c.does.title} intro={c.does.intro}>
        <ProblemsPanel items={c.does.items} />
      </OfferSection>

      <OfferSection id="receive" title={c.receive.title} intro={c.receive.intro}>
        <OfferCardGrid items={c.receive.items} />
      </OfferSection>

      <OfferSection id="how" title={c.how.title} intro={c.how.intro}>
        <OfferSteps items={c.how.steps} />
      </OfferSection>

      <OfferSection id="example" title={c.example.title} intro={c.example.intro}>
        <WorkflowMap
          caption={c.example.map.caption}
          ariaLabel={c.example.map.ariaLabel}
          nodes={c.example.map.nodes}
        />
      </OfferSection>

      <OfferSection id="human" title={c.human.title} intro={c.human.intro}>
        <OfferCardGrid items={c.human.items} variant="human" />
      </OfferSection>

      <OfferSection id="where" title={c.where.title} intro={c.where.intro}>
        <LinkCardGrid items={c.where.rungs} />
      </OfferSection>

      <OfferCTA
        heading={c.cta.heading}
        body={c.cta.body}
        ctaLabel={c.cta.ctaLabel}
        ctaHref={c.cta.ctaHref}
      />
    </main>
  );
}
