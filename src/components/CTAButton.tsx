import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "default";

function classes(variant: Variant) {
  if (variant === "primary") return "btn btn-primary";
  if (variant === "ghost") return "btn btn-ghost";
  return "btn";
}

/**
 * Bracketed mono button. Renders an <a> when `href` is given, else a <button>.
 * The .btn style lowercases labels — wrap "AI" in <span className="btn-cap">AI</span>
 * to keep brand casing.
 */
export default function CTAButton({
  href,
  variant = "default",
  type = "button",
  children,
}: {
  href?: string;
  variant?: Variant;
  type?: "button" | "submit";
  children: ReactNode;
}) {
  if (href) {
    // In-page anchors (href="#id") use a plain <a>: next/link does not reliably
    // perform the hash scroll for pure-hash hrefs in the App Router.
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes(variant)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes(variant)}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes(variant)}>
      {children}
    </button>
  );
}
