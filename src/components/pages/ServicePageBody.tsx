import Link from "next/link";
import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCTA from "@/components/offers/OfferCTA";
import ProblemsPanel from "@/components/ProblemsPanel";
import WorkflowMap from "@/components/WorkflowMap";
import ProcessFilm from "@/components/ProcessFilm";
import CTAButton from "@/components/CTAButton";
import LinkCardGrid from "@/components/LinkCardGrid";
import WorkGrid from "@/components/work/WorkGrid";
import { shellContent } from "@/content/shell";
import { serviceWorkLink } from "@/content/services";
import { workItems } from "@/content/work";
import type { ServicePageContent } from "@/content/services/types";
import type { Locale } from "@/content/types";

/**
 * Shared service-page template (/services/<key>). Every service page uses
 * the same section sequence — hero → optional film → what it does → what you
 * receive → how it runs → worked example → what stays human → where to
 * start → optional work → optional after the project → closing CTA — so the
 * sequence lives once here and each route passes its locale-resolved
 * content. Built from the offer-page primitives, like the capability
 * template it replaces.
 *
 * Section ids are fixed (film/does/receive/how/example/human/start/work/
 * after): stable in-page anchors, unique per page. The `where` section
 * renders as id="start" — /services/ai-agents#start is a public link target
 * (the sprint's OFFERS href and a permanent redirect), so never rename it.
 *
 * The work band renders only when the service has published work
 * (workItems() is the same query WorkGrid runs), so a service whose items
 * are all unpublished shows no empty section.
 */
export default function ServicePageBody({
  content,
  locale,
}: {
  content: ServicePageContent;
  /** Locale of the content — used for shell chrome (film controls, work link). */
  locale: Locale;
}) {
  const c = content;
  const work =
    c.work &&
    workItems(locale, { category: c.work.category, limit: c.work.limit })
      .length > 0
      ? c.work
      : undefined;
  const workLink = serviceWorkLink(locale);

  return (
    <main id="main" className="service-page">
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

      <OfferSection id="start" title={c.where.title} intro={c.where.intro}>
        <LinkCardGrid items={c.where.rungs} />
      </OfferSection>

      {work ? (
        <OfferSection id="work" title={work.title} intro={work.intro}>
          <WorkGrid locale={locale} category={work.category} limit={work.limit} />
          <p className="service-work-more mt-6">
            <Link href={workLink.href} className="offer-cta">
              {workLink.label}
              <span className="offer-cta-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </p>
        </OfferSection>
      ) : null}

      {c.after ? (
        <OfferSection id="after" title={c.after.title} intro={c.after.intro}>
          <ProblemsPanel items={c.after.items} />
          <p className="included-proof">
            <CTAButton href={c.after.cta.href} variant="ghost">
              {c.after.cta.label}
            </CTAButton>
          </p>
        </OfferSection>
      ) : null}

      <OfferCTA
        heading={c.cta.heading}
        body={c.cta.body}
        ctaLabel={c.cta.ctaLabel}
        ctaHref={c.cta.ctaHref}
      />
    </main>
  );
}
