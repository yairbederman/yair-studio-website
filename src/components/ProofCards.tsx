import SampleBadge from "@/components/SampleBadge";
import WorkflowMap from "@/components/WorkflowMap";
import type { ProofContent } from "@/content/proof";

/**
 * Illustrative workflow cards: situation → tracking → human approval → first
 * useful output. `full` (the /about treatment) also renders the workflow spine.
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
    <ul className={full ? "proof-grid proof-grid--full" : "proof-grid"}>
      {cases.map((cs) => (
        <li key={cs.key} className="proof-card">
          <div className="proof-card-head">
            <h3 className="proof-client">{cs.workflowType}</h3>
            <SampleBadge label={badgeLabel} />
          </div>
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
  );
}
