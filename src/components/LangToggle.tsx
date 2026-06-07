"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Context-aware language toggle.
 * English pages link to /he; the Hebrew page links back to /.
 * (The only client component in the shell — needs the current path.)
 */
export default function LangToggle() {
  const pathname = usePathname();
  const onHebrew = pathname === "/he" || pathname.startsWith("/he/");

  const href = onHebrew ? "/" : "/he";
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
