import type { ReactNode } from "react";

/**
 * Uppercase tracked eyebrow rendered above a section/page title.
 */
export default function SectionLabel({
  children,
}: {
  children: ReactNode;
}) {
  return <span className="eyebrow">{children}</span>;
}
