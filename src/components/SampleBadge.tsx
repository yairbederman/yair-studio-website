import { PROOF_IS_SAMPLE_DATA } from "@/content/proof";

/**
 * Visible "sample data" marker for proof surfaces (credentials, career spine,
 * case studies) while PROOF_IS_SAMPLE_DATA is true. Renders nothing once the
 * flag flips to false at launch (LAUNCH-CHECKLIST.md) — one flag, every badge.
 *
 * Deliberately loud enough to read (warn token, mono, uppercase): sample
 * claims must never pass as real, even on a shared staging link.
 */
export default function SampleBadge({ label }: { label: string }) {
  if (!PROOF_IS_SAMPLE_DATA) return null;
  return <span className="sample-badge">{label}</span>;
}
