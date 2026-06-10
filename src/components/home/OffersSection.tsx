import Container from "@/components/Container";
import OfferCards from "@/components/offers/OfferCards";
import ProcessFilm from "@/components/ProcessFilm";

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
        <ProcessFilm
          webm="/videos/one-system-overview.webm"
          mp4="/videos/one-system-overview.mp4"
          poster="/videos/one-system-overview-poster.png"
          caption="Four entry points into one system, with a human approval step built in."
          filmName="one-system overview film"
        />
        <OfferCards />
      </Container>
    </section>
  );
}
