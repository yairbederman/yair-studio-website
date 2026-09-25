import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCTA from "@/components/offers/OfferCTA";
import LinkCardGrid from "@/components/LinkCardGrid";
import { servicesIndexContent } from "@/content/services";
import { serviceCards } from "@/content/service-cards";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/services");

/**
 * The /services index, scaffold body: hero → the three service cards plus
 * the managed-office card → closing CTA. ServicesIndexPageBody replaces it,
 * shared by both locales.
 */
export default function ServicesPage() {
  const c = servicesIndexContent("en");
  const cards = [
    ...serviceCards("en").map((s) => ({
      title: s.title,
      desc: s.summary,
      cta: { label: s.cta, href: s.href },
    })),
    {
      title: c.managedOffice.title,
      desc: c.managedOffice.body,
      cta: c.managedOffice.cta,
    },
  ];
  return (
    <main id="main">
      <OfferHero
        title={c.hero.title}
        lead={c.hero.lead}
        ctaLabel={c.hero.ctaLabel}
        ctaHref={c.hero.ctaHref}
      />

      <OfferSection
        id="services"
        title={c.services.title}
        intro={c.services.intro}
      >
        <LinkCardGrid items={cards} />
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
