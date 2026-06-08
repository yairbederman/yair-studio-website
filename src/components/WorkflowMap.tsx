import type { ReactNode } from "react";

export type WorkflowNode = {
  /** Short, terse label — the spine is built for phrases, not sentences. */
  label: ReactNode;
  /** Optional small mono sub-caption. */
  sub?: ReactNode;
  /** Copper approval-checkpoint treatment (the human-in-the-loop node). */
  human?: boolean;
  /** Final-output emphasis (brighter label). */
  out?: boolean;
};

/**
 * A schematic "process spine": a vertical flow of nodes with a copper
 * human-approval checkpoint. Reuses the .sch-* styles already in globals.css
 * (originally the decorative homepage hero motif), so styling stays in one place.
 *
 * - As real content (default): wrapped in a visible .workflow-map panel.
 * - `decorative`: aria-hidden, for ambient/illustrative use (e.g. a hero motif).
 *
 * Labels must stay short; sentence-length copy belongs in OfferSteps/cards.
 */
export default function WorkflowMap({
  nodes,
  caption,
  decorative = false,
  ariaLabel,
}: {
  nodes: readonly WorkflowNode[];
  caption?: string;
  decorative?: boolean;
  ariaLabel?: string;
}) {
  const flow = (
    <ol className="sch-flow">
      {nodes.map((node, i) => (
        <li
          key={i}
          className={
            "sch-node" +
            (node.human ? " sch-node--human" : "") +
            (node.out ? " sch-node--out" : "")
          }
        >
          <span className="sch-marker">
            <span className="sch-dot" />
          </span>
          <span className="sch-text">
            <span className="sch-label">{node.label}</span>
            {node.sub ? <span className="sch-sub">{node.sub}</span> : null}
          </span>
        </li>
      ))}
    </ol>
  );

  if (decorative) {
    return (
      <div className="hero-schematic" aria-hidden="true">
        {caption ? <span className="sch-cap">{caption}</span> : null}
        {flow}
      </div>
    );
  }

  return (
    <div
      className="workflow-map"
      {...(ariaLabel ? { role: "group", "aria-label": ariaLabel } : {})}
    >
      {caption ? <span className="sch-cap">{caption}</span> : null}
      {flow}
    </div>
  );
}
