import type { ReactNode } from "react";

export type OfferStep = { title: string; desc: ReactNode; human?: boolean };

/**
 * Numbered "How it works" steps. A step flagged `human` gets the copper
 * approval-checkpoint treatment. Reuses the homepage .method-list classes
 * verbatim, so styling stays in one place.
 */
export default function OfferSteps({ items }: { items: readonly OfferStep[] }) {
  return (
    <ol className="method-list">
      {items.map((step, i) => (
        <li
          key={step.title}
          className={step.human ? "method-step is-human" : "method-step"}
        >
          <span className="method-step-num" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="method-step-body">
            <h3 className="card-title">{step.title}</h3>
            <p className="card-desc">{step.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
