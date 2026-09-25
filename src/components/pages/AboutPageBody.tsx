import PageHero from "@/components/PageHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCTA from "@/components/offers/OfferCTA";
import LinkCardGrid from "@/components/LinkCardGrid";
import FounderProfile from "@/components/FounderProfile";
import ProofCards from "@/components/ProofCards";
import { aboutContent } from "@/content/about";
import { proofContent } from "@/content/proof";
import type { Locale } from "@/content/types";

/**
 * The about page, shared by both locales — one composition, zero EN/HE
 * structural drift. The founder bio is hidden here (showBio={false}): the
 * credentials and career spine beside it already carry every fact it states,
 * and the whoRuns prose above says only why the studio exists. "What I
 * make" is two link grids: the three services, then the monthly managed
 * office on its own row (a lone card fills the row), so the office reads as
 * what comes after a project.
 */
export default function AboutPageBody({ locale }: { locale: Locale }) {
  const c = aboutContent(locale);
  const proof = proofContent(locale);
  return (
    <main id="main">
      <PageHero id="about" title={c.hero.title} lead={c.hero.lead} />

      <OfferSection id="who-runs" title={c.whoRuns.title}>
        {c.whoRuns.paragraphs.map((paragraph) => (
          <p key={paragraph} className="section-intro">
            {paragraph}
          </p>
        ))}
        <FounderProfile
          content={proof.founder}
          showBio={false}
        />
      </OfferSection>

      <OfferSection
        id="systems"
        title={proof.cases.aboutTitle}
        intro={proof.cases.aboutIntro}
      >
        <ProofCards
          cases={proof.cases.items}
          rowLabels={proof.cases.rowLabels}
          badgeLabel={proof.sampleBadge}
          full
        />
      </OfferSection>

      <OfferSection id="build" title={c.build.title} intro={c.build.intro}>
        <LinkCardGrid items={c.build.items} />
        <div className="mt-4">
          <LinkCardGrid items={[c.build.after]} />
        </div>
      </OfferSection>

      <OfferSection id="how" title={c.how.title} intro={c.how.intro}>
        <div className="panel-list">
          <ul>
            {c.how.principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </OfferSection>

      <OfferSection id="who" title={c.who.title}>
        <p className="section-intro">{c.who.body}</p>
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
