import { PROOF_IS_SAMPLE_DATA } from "@/content/proof";

/**
 * Visible "sample data" marker for illustrative workflow examples while
 * PROOF_IS_SAMPLE_DATA is true. Founder positioning never uses this badge.
 *
 * Deliberately loud enough to read (warn token, mono, uppercase): sample
 * workflow patterns must never pass as client evidence.
 */
export default function SampleBadge({ label }: { label: string }) {
  if (!PROOF_IS_SAMPLE_DATA) return null;
  return <span className="sample-badge">{label}</span>;
}
