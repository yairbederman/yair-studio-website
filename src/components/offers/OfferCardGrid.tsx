import type { ReactNode } from "react";

export type OfferCardItem = { title: string; desc: ReactNode };

/**
 * A grid of plain title + description cards — used for "Who it's for",
 * "Problems it solves", "What we build", and "What stays human".
 * `variant="human"` applies the copper approval-principle treatment
 * (mirrors the homepage .method-step.is-human step).
 *
 * Uses .feature-grid / .feature-card (distinct from the homepage .offer-card,
 * which is a CTA card).
 */
export default function OfferCardGrid({
  items,
  variant,
}: {
  items: readonly OfferCardItem[];
  variant?: "human";
}) {
  const human = variant === "human";
  return (
    <ul className="feature-grid">
      {items.map((item) => (
        <li
          key={item.title}
          className={human ? "feature-card is-human" : "feature-card"}
        >
          <h3 className="card-title">{item.title}</h3>
          <p className="card-desc">{item.desc}</p>
        </li>
      ))}
    </ul>
  );
}
