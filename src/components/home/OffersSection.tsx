import Container from "@/components/Container";
import OfferCards from "@/components/offers/OfferCards";
import ProcessFilm from "@/components/ProcessFilm";
import { shellContent } from "@/content/shell";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/content/types";

/**
 * Homepage offers — concrete offers, but tied under one system (per brief: not
 * four unrelated services). Section copy comes from the home content model;
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
        <ProcessFilm
          webm="/videos/one-system-overview.webm"
          mp4="/videos/one-system-overview.mp4"
          poster="/videos/one-system-overview-poster.png"
          caption={content.filmCaption}
          filmName={content.filmName}
          controls={shellContent(locale).filmControls}
        />
        <OfferCards locale={locale} />
      </Container>
    </section>
  );
}
