"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Primary nav destinations (single source for the header nav). */
const NAV_LINKS = [
  { href: "/workflows", label: "Workflows" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Primary nav links with an active-state indicator. Isolated as a small client
 * component (needs usePathname) so SiteHeader stays a Server Component — the same
 * boundary pattern as LangToggle.
 *
 * A link is current when the path matches exactly OR sits under it (so /offers
 * stays marked on /offers/<slug>). No Suspense boundary is needed: all routes are
 * static (no dynamic params), matching LangToggle's existing usage.
 *
 * The active indicator is a copper bottom-border. Every link reserves that 1px at
 * rest with a transparent border, so marking the current link causes no layout
 * shift after hydration.
 */
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(link.href + "/");
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
