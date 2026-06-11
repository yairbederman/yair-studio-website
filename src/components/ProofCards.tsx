import SampleBadge from "@/components/SampleBadge";
import WorkflowMap from "@/components/WorkflowMap";
import type { ProofContent } from "@/content/proof";

/**
 * Case-study cards: problem → system → observable change, each badged as
 * sample data while the launch gate is on. `full` (the /about treatment)
 * additionally renders each engagement's workflow spine — the case shown
 * the same way the work is delivered, as a mapped process.
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
            <h3 className="proof-client">{cs.clientType}</h3>
            <SampleBadge label={badgeLabel} />
          </div>
          <dl className="proof-rows">
            <div className="proof-row">
              <dt>{rowLabels.problem}</dt>
              <dd>{cs.problem}</dd>
            </div>
            <div className="proof-row">
              <dt>{rowLabels.system}</dt>
              <dd>{cs.system}</dd>
            </div>
            <div className="proof-row proof-row--outcome">
              <dt>{rowLabels.outcome}</dt>
              <dd>{cs.outcome}</dd>
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
