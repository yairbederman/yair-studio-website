import CTAButton from "@/components/CTAButton";
import { OFFERS } from "@/lib/offers";

/**
 * The four offer CTA cards, rendered from the canonical OFFERS list.
 * Shared by the homepage Offers section and the /offers overview so the card
 * markup and copy live in one place. Renders only the grid — callers supply
 * their own <section>/heading wrapper.
 */
export default function OfferCards() {
  return (
    <ul className="offers-grid">
      {OFFERS.map((offer) => (
        <li key={offer.key} className="offer-card">
          <h3 className="card-title">{offer.title}</h3>
          <p className="card-desc">{offer.summary}</p>
          <div className="offer-card-foot">
            <CTAButton href={offer.href}>{offer.cta}</CTAButton>
          </div>
        </li>
      ))}
    </ul>
  );
}
