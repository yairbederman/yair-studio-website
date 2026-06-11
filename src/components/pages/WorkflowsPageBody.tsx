import PageHero from "@/components/PageHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferCTA from "@/components/offers/OfferCTA";
import WorkflowMap from "@/components/WorkflowMap";
import ProcessFilm from "@/components/ProcessFilm";
import { workflowsContent } from "@/content/workflows";
import { shellContent } from "@/content/shell";
import type { Locale } from "@/content/types";

/**
 * The workflows page, shared by both locales — one composition, zero EN/HE
 * structural drift.
 */
export default function WorkflowsPageBody({ locale }: { locale: Locale }) {
  const c = workflowsContent(locale);
  return (
    <main id="main">
      <PageHero id="workflows" title={c.hero.title} lead={c.hero.lead} />

      <OfferSection id="example" title={c.example.title} intro={c.example.intro}>
        <ProcessFilm
          webm={c.example.film.webm}
          mp4={c.example.film.mp4}
          poster={c.example.film.poster}
          caption={c.example.film.caption}
          filmName={c.example.film.filmName}
          controls={shellContent(locale).filmControls}
        />
        <div className="workflow-compare">
          <div className="panel-list">
            <span className="sch-cap">{c.example.before.caption}</span>
            <ul>
              {c.example.before.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <WorkflowMap
            caption={c.example.mapped.caption}
            ariaLabel={c.example.mapped.ariaLabel}
            nodes={c.example.mapped.nodes}
          />
        </div>
      </OfferSection>

      <OfferSection
        id="other-workflows"
        title={c.others.title}
        intro={c.others.intro}
      >
        <OfferCardGrid items={c.others.items} />
      </OfferSection>

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
