import type { ReactNode } from "react";

/**
 * Mono uppercase label used above section/page titles.
 * With `index`, renders a numbered stamp ("01 — services") with the number in
 * --accent; without it, a plain eyebrow.
 */
export default function SectionLabel({
  index,
  children,
}: {
  index?: string;
  children: ReactNode;
}) {
  if (index) {
    return (
      <span className="section-index">
        <span className="num">{index}</span>
        <span>{children}</span>
      </span>
    );
  }
  return <span className="eyebrow">{children}</span>;
}
