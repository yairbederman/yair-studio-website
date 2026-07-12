import SampleBadge from "@/components/SampleBadge";
import WorkflowMap from "@/components/WorkflowMap";
import type { ProofContent } from "@/content/proof";

/**
 * Illustrative workflow cards: situation → tracking → human approval → first
 * useful output. `full` (the /about treatment) also renders the workflow spine.
 *
 * ONE section-level SampleBadge renders above the grid, not one per card:
 * three yellow badges as the final pre-CTA impression read as "no clients"
 * three times over (2026-07-12 critique P1). badgeLabel stays REQUIRED so
 * every ProofCards render is disclosure-paired at compile time — the honesty
 * guard is structural, not caller discipline.
 *
 * The homepage uses the compact variant inside ProofSection.
 */
export default function ProofCards({
  cases,
  rowLabels,
  badgeLabel,
  full = false,
}: {
  cases: ProofContent["cases"]["items"];
  rowLabels: ProofContent["cases"]["rowLabels"];
  badgeLabel: string;
  full?: boolean;
}) {
  return (
    <>
      <SampleBadge label={badgeLabel} />
      <ul className={full ? "proof-grid proof-grid--full" : "proof-grid"}>
        {cases.map((cs) => (
        <li key={cs.key} className="proof-card">
          <h3 className="proof-client">{cs.workflowType}</h3>
          <dl className="proof-rows">
            <div className="proof-row">
              <dt>{rowLabels.situation}</dt>
              <dd>{cs.situation}</dd>
            </div>
            <div className="proof-row">
              <dt>{rowLabels.tracking}</dt>
              <dd>{cs.tracking}</dd>
            </div>
            <div className="proof-row">
              <dt>{rowLabels.approval}</dt>
              <dd>{cs.approval}</dd>
            </div>
            <div className="proof-row proof-row--outcome">
              <dt>{rowLabels.firstOutput}</dt>
              <dd>{cs.firstOutput}</dd>
            </div>
          </dl>
          {full ? (
            <WorkflowMap
              caption={cs.spine.caption}
              ariaLabel={cs.spine.ariaLabel}
              nodes={cs.spine.nodes}
            />
          ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
