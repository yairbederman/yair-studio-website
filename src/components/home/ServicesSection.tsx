import Link from "next/link";
import Container from "@/components/Container";
import SpineReveal from "@/components/SpineReveal";
import { serviceCards } from "@/content/service-cards";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/content/types";

/**
 * The three services as one asymmetric grid: the first card (AI agents —
 * SERVICES_LIST order is priority order) is the tall lead card on the
 * inline-start side from 1024px, websites and films stack beside it; all
 * three stack on smaller screens. Cards come from serviceCards(locale) (the
 * localized SERVICES_LIST, src/lib/services.ts); section copy comes from the
 * home content model. The link's stretched ::after makes each whole card one
 * click target. Replaces the five-capability strip on the homepage, so the
 * page carries one taxonomy.
 */
export default function ServicesSection({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeContent["services"];
}) {
  return (
    <section
      className="section home-services"
      id="services"
      aria-labelledby="services-title"
    >
      <Container>
        <SpineReveal className="section-head">
          <h2 id="services-title">{content.title}</h2>
          <p className="section-intro">{content.intro}</p>
        </SpineReveal>
        <ul className="grid list-none gap-4 p-0 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-2">
          {serviceCards(locale).map((card, i) => (
            <li
              key={card.key}
              className={
                i === 0
                  ? "home-service is-lead relative flex flex-col gap-3 p-6 md:p-8 lg:row-span-2"
                  : "home-service relative flex flex-col gap-3 p-6 md:p-8"
              }
            >
              <h3 className="home-service-title">{card.title}</h3>
              <p className="home-service-desc">{card.summary}</p>
              <Link href={card.href} className="home-service-link mt-auto">
                {card.cta}
                <span className="home-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
