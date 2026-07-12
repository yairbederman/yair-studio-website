import ProblemsPanel from "@/components/ProblemsPanel";
import WorkflowMap from "@/components/WorkflowMap";
import { LINKEDIN_URL } from "@/lib/site";
import type { ProofContent } from "@/content/proof";

/**
 * The founder block — identity + credentials beside the career spine, in the
 * site's schematic language (no portrait, by design). Section shell is the
 * caller's: the homepage wraps it in FounderSection, /about in an OfferSection.
 *
 * Credentials reuse the ProblemsPanel idiom (bold term + description in a
 * hairline panel); the career path reuses WorkflowMap, so the founder is
 * presented exactly like the work: as a mapped process ending at the studio.
 */
export default function FounderProfile({
  content,
  showBio = true,
}: {
  content: ProofContent["founder"];
  /** /about renders the block under prose that already covers the bio —
      hide it there to avoid saying the same facts twice in one viewport. */
  showBio?: boolean;
}) {
  return (
    <div className="founder-grid">
      <div className="founder-id">
        <div className="founder-head">
          <h3 className="founder-name">{content.name}</h3>
          <p className="founder-role">{content.role}</p>
        </div>
        {showBio ? <p className="founder-bio">{content.bio}</p> : null}
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          {content.linkedinLabel}
        </a>
        <div className="founder-creds">
          <ProblemsPanel items={content.credentials} />
        </div>
      </div>
      <WorkflowMap
        caption={content.spine.caption}
        ariaLabel={content.spine.ariaLabel}
        nodes={content.spine.nodes}
      />
    </div>
  );
}
