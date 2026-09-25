import type { WorkDeliverable, WorkStatus } from "@/content/work";

/**
 * The honesty chip — live / prototype / concept — on every work card and
 * work page. It reuses the .sample-badge chip (shape, tracked caps, and the
 * Hebrew letter-spacing reset in globals.css); work.css recolors it per
 * status: prototype keeps the --warn sample tone, live takes the copper
 * signal (as .case-badge does for a real engagement), concept stays neutral.
 */
export function StatusChip({ status, label }: { status: WorkStatus; label: string }) {
  return (
    <span className="sample-badge work-status" data-status={status}>
      {label}
    </span>
  );
}

/** Deliverables as noun chips, "Label ×N" — what the piece is made of. */
export default function WorkChips({
  items,
  label,
}: {
  items: readonly WorkDeliverable[];
  /** Accessible name of the list when no visible label names it. */
  label?: string;
}) {
  return (
    <ul className="work-chips flex list-none flex-wrap gap-2 p-0" aria-label={label}>
      {items.map((d) => (
        <li key={d.label} className="work-chip">
          {d.label} <span className="work-chip-count">×{d.count}</span>
        </li>
      ))}
    </ul>
  );
}
