import Link from "next/link";
import type { Cta } from "@/content/types";

/**
 * A grid of link cards — the .offers-grid / .offer-card / .offer-cta idiom
 * (one stretched click target per card). Used wherever a short set of cards
 * each leads to one page: the "where it shows up" rung cards on the
 * capability and service pages, and the service cards on /services.
 */
export default function LinkCardGrid({
  items,
}: {
  items: readonly { title: string; desc: string; cta: Cta }[];
}) {
  return (
    <ul className="offers-grid">
      {items.map((item) => (
        <li key={item.title} className="offer-card">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-desc">{item.desc}</p>
          <div className="offer-card-foot">
            <Link href={item.cta.href} className="offer-cta">
              {item.cta.label}
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
