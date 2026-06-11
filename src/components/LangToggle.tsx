"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isHebrewPath, localePaths } from "@/lib/locale-paths";

/**
 * Context-aware language toggle — the shared localePaths pairing, so deep
 * links are preserved in both directions: /offers/x ↔ /he/offers/x, / ↔ /he.
 * An unknown target (no mirrored route) lands on that locale's branded 404
 * catch-all, so the mapping can never crash.
 * (One of two client components in the shell — needs the current path.)
 */
export default function LangToggle() {
  const pathname = usePathname();
  const onHebrew = isHebrewPath(pathname);
  const pair = localePaths(pathname);

  const href = onHebrew ? pair.en : pair.he;
  const label = onHebrew ? "EN" : "עברית";
  const ariaLabel = onHebrew ? "Switch to English" : "Switch to Hebrew";

  return (
    <Link
      href={href}
      className="lang-toggle"
      hrefLang={onHebrew ? "en" : "he"}
      aria-label={ariaLabel}
    >
      {label}
    </Link>
  );
}
