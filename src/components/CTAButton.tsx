import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "default";

function classes(variant: Variant) {
  if (variant === "primary") return "btn btn-primary";
  if (variant === "ghost") return "btn btn-ghost";
  return "btn";
}

/**
 * A non-internal href is one next/link should not own: an in-page hash anchor,
 * or anything with a URL scheme (mailto:, tel:, http(s)://). These render as a
 * plain <a>. Internal route paths ("/contact", "/offers/...") use next/link.
 */
function isPlainAnchor(href: string) {
  return href.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(href);
}

/** http(s) destinations are external by construction on this site (in-app
    links are always root-relative) — they open in a new tab. Derived here so
    no caller ever has to remember a newTab flag. */
function isExternal(href: string) {
  return /^https?:/i.test(href);
}

/**
 * Button in the body font. Renders an <a> when `href` is given, else a <button>.
 * The bracketed [ ] signature is applied by CSS to the primary variant only;
 * standard/ghost buttons read as plain UI. Labels keep their natural casing.
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
    // Hash anchors (next/link doesn't reliably hash-scroll in the App Router)
    // and scheme URLs (mailto:, tel:, external) use a plain <a>.
    if (isPlainAnchor(href)) {
      return (
        <a
          href={href}
          className={classes(variant)}
          {...(isExternal(href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
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
