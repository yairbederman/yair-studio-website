import { PROOF_IS_SAMPLE_DATA } from "@/content/proof";

/**
 * Visible "sample data" disclosure for illustrative workflow examples while
 * PROOF_IS_SAMPLE_DATA is true. Founder positioning never uses this badge.
 *
 * Renders as a self-contained block (one disclosure per proof surface,
 * directly above the cards it qualifies — per-card badges read as "no
 * clients" three times over; 2026-07-12 critique P1). Owning the wrapper
 * here means a null return removes the element entirely — callers never
 * leave an empty wrapper behind when the flag flips off.
 *
 * Deliberately loud enough to read (warn token, mono, uppercase): sample
 * workflow patterns must never pass as client evidence.
 */
export default function SampleBadge({ label }: { label: string }) {
  if (!PROOF_IS_SAMPLE_DATA) return null;
  return (
    <p className="proof-section-badge">
      <span className="sample-badge">{label}</span>
    </p>
  );
}
