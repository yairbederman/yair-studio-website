import type { ReactNode } from "react";

/** Centered, max-width content wrapper with the standard inline gutter. */
export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className ? `container ${className}` : "container"}>
      {children}
    </div>
  );
}
