import Link from "next/link";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import CTAButton from "@/components/CTAButton";
import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCTA from "@/components/offers/OfferCTA";
import { servicesIndexContent } from "@/content/services";
import { serviceCards } from "@/content/service-cards";
import { offerCard } from "@/content/offer-cards";
import type { Locale } from "@/content/types";

/**
 * The /services index: hero → the three services → what runs after a
 * project (the managed office, month to month) → closing CTA. Shared by
 * both locales — one composition, zero EN/HE structural drift.
 *
 * The services are an ordered index, not a row of equal cards: the first
 * service in SERVICES_LIST order (AI agents, the one the office buys first)
 * leads as a full-width panel, and the other two sit side by side under it.
 * Each item is an .offer-card, one click target through its stretched
 * .offer-cta, as on the LinkCardGrid cards. The monthly band names the offer through offerCard()
 * — its title is the eyebrow, its label and route are the CTA — so the
 * managed office is never retyped here. Styles: src/styles/services.css.
 */
export default function ServicesIndexPageBody({ locale }: { locale: Locale }) {
  const c = servicesIndexContent(locale);
  const office = offerCard(locale, "ai-office-assistant");

  return (
    <main id="main" className="services-index">
      <OfferHero
        title={c.hero.title}
        lead={c.hero.lead}
        ctaLabel={c.hero.ctaLabel}
        ctaHref={c.hero.ctaHref}
      />

      <OfferSection id="services" title={c.services.title} intro={c.services.intro}>
        <ol className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
          {serviceCards(locale).map((s, i) => (
            <li
              key={s.key}
              className={
                i === 0
                  ? "offer-card services-item is-lead gap-3 md:col-span-full md:gap-x-16"
                  : "offer-card services-item gap-3"
              }
            >
              <span className="method-step-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.summary}</p>
              <Link href={s.href} className="offer-cta mt-2 self-start">
                {s.cta}
                <span className="offer-cta-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </OfferSection>

      <section id="monthly" className="section" aria-labelledby="monthly-title">
        <Container>
          <div className="services-monthly grid grid-cols-1 gap-6 p-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start md:gap-x-16 md:p-12">
            <div className="flex flex-col gap-3">
              <SectionLabel>{office.title}</SectionLabel>
              <h2 id="monthly-title" className="max-w-[18ch]">
                {c.managedOffice.title}
              </h2>
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="max-w-[60ch]">{c.managedOffice.body}</p>
              <CTAButton href={c.managedOffice.cta.href}>
                {c.managedOffice.cta.label}
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      <OfferCTA
        heading={c.cta.heading}
        body={c.cta.body}
        ctaLabel={c.cta.ctaLabel}
        ctaHref={c.cta.ctaHref}
      />
    </main>
  );
}
