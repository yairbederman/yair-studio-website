import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import ProblemsPanel from "@/components/ProblemsPanel";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCTA from "@/components/offers/OfferCTA";
import WorkflowMap from "@/components/WorkflowMap";
import ProcessFilm from "@/components/ProcessFilm";
import { shellContent } from "@/content/shell";
import type { OfferPageContent } from "@/content/offers/types";
import type { Locale } from "@/content/types";

/**
 * Shared offer-page template. Offer detail pages use the same
 * section sequence — hero → optional film → who → problems → build →
 * example map → how → human → closing CTA — so the sequence lives once here
 * and each page file is a thin wrapper passing its locale-resolved content.
 *
 * Section ids are fixed (film/who/problems/build/example/how/human): they are
 * stable in-page anchors and unique per page.
 */
export default function OfferPageBody({
  content,
  locale,
}: {
  content: OfferPageContent;
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
          />
        </OfferSection>
      ) : null}

      <OfferSection id="who" title={c.who.title} intro={c.who.intro}>
        <OfferCardGrid items={c.who.items} />
      </OfferSection>

      <OfferSection id="problems" title={c.problems.title}>
        <ProblemsPanel items={c.problems.items} />
      </OfferSection>

      <OfferSection id="build" title={c.build.title} intro={c.build.intro}>
        <OfferCardGrid items={c.build.items} />
      </OfferSection>

      <OfferSection id="example" title={c.example.title} intro={c.example.intro}>
        <WorkflowMap
          caption={c.example.map.caption}
          ariaLabel={c.example.map.ariaLabel}
          nodes={c.example.map.nodes}
        />
      </OfferSection>

      {c.caseStudy ? (
        <OfferSection
          id="case-study"
          title={c.caseStudy.title}
          intro={c.caseStudy.intro}
          badge={c.caseStudy.badge}
        >
          <OfferCardGrid items={c.caseStudy.facts} />
        </OfferSection>
      ) : null}

      <OfferSection id="how" title={c.how.title} intro={c.how.intro}>
        <OfferSteps items={c.how.steps} />
      </OfferSection>

      {c.pricing ? (
        <OfferSection id="pricing" title={c.pricing.title} intro={c.pricing.intro}>
          <OfferCardGrid items={c.pricing.items} />
          {c.pricing.note ? <p className="pricing-note">{c.pricing.note}</p> : null}
        </OfferSection>
      ) : null}

      <OfferSection id="human" title={c.human.title} intro={c.human.intro}>
        <OfferCardGrid items={c.human.items} variant="human" />
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
