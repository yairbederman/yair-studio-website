import Link from "next/link";
import { OFFERS } from "@/lib/offers";

/**
 * The four offer CTA cards, rendered from the canonical OFFERS list.
 * Shared by the homepage Offers section and the /offers overview so the card
 * markup and copy live in one place. Renders only the grid — callers supply
 * their own <section>/heading wrapper.
 *
 * Each card is a single full-card link: the .offer-cta link carries a stretched
 * ::after (see globals.css) that makes the whole card the click target, so there
 * is exactly one clean link per card (no nested interactives, no screen-reader
 * name bloat) and a large tap area. The trailing arrow is decorative.
 */
export default function OfferCards() {
  return (
    <ul className="offers-grid">
      {OFFERS.map((offer) => (
        <li key={offer.key} className="offer-card">
          <h3 className="card-title">{offer.title}</h3>
          <p className="card-desc">{offer.summary}</p>
          <div className="offer-card-foot">
            <Link href={offer.href} className="offer-cta">
              {offer.cta}
              <span className="offer-cta-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
