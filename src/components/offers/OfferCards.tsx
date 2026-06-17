import Link from "next/link";
import { offerCards } from "@/content/offer-cards";
import type { Locale } from "@/content/types";

/**
 * Service CTA cards, rendered from the canonical OFFERS list via the
 * locale-aware offerCards() resolver (EN derives from OFFERS; HE adds
 * translated strings and /he-prefixed routes for live services). Shared by both
 * homepages and both /offers overviews so the card markup lives in one place.
 * Renders only the grid — callers supply their own <section>/heading wrapper.
 *
 * Live cards are single full-card links. Future services render a status label
 * instead of a dead link.
 */
export default function OfferCards({ locale = "en" }: { locale?: Locale }) {
  return (
    <ul className="offers-grid">
      {offerCards(locale).map((offer) => {
        const isLive = Boolean(offer.href);
        return (
          <li
            key={offer.key}
            className={"offer-card" + (isLive ? "" : " offer-card--disabled")}
          >
            <h3 className="card-title">{offer.title}</h3>
            <p className="card-desc">{offer.summary}</p>
            <div className="offer-card-foot">
              {offer.href ? (
                <Link href={offer.href} className="offer-cta">
                  {offer.cta}
                  <span className="offer-cta-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              ) : (
                <span className="offer-status">{offer.cta}</span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
