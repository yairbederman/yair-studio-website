import Container from "@/components/Container";
import OfferCards from "@/components/offers/OfferCards";

/**
 * Homepage offers — concrete offers, but tied under one system (per brief: not
 * four unrelated services). The cards themselves come from the canonical OFFERS
 * list via <OfferCards>, shared with the /offers overview.
 */
export default function OffersSection() {
  return (
    <section className="section offers" aria-labelledby="offers-title">
      <Container>
        <div className="section-head">
          <h2 id="offers-title">Offers</h2>
          <p className="section-intro">
            Four entry points into one system built around real workflows, not
            four separate services.
          </p>
        </div>
        <OfferCards />
      </Container>
    </section>
  );
}
