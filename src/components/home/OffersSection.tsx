import Container from "@/components/Container";
import OfferCards from "@/components/offers/OfferCards";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/content/types";

/**
 * Homepage services — practical starting points tied to real workflows.
 * Section copy comes from the home content model;
 * the cards themselves from the canonical OFFERS list via <OfferCards>
 * (locale-aware), shared with both /offers overviews.
 */
export default function OffersSection({
  content,
  locale = "en",
}: {
  content: HomeContent["offers"];
  locale?: Locale;
}) {
  return (
    <section className="section offers" aria-labelledby="offers-title">
      <Container>
        <div className="section-head">
          <h2 id="offers-title">{content.title}</h2>
          <p className="section-intro">{content.intro}</p>
        </div>
        <OfferCards locale={locale} />
      </Container>
    </section>
  );
}
