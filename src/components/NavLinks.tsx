"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Cta } from "@/content/types";

/**
 * Primary nav links with an active-state indicator. Isolated as a small client
 * component (needs usePathname) so SiteHeader stays a Server Component — the same
 * boundary pattern as LangToggle. The destinations arrive as props from the
 * locale-keyed shell content (src/content/shell.ts), keeping copy out of the
 * client bundle's module graph.
 *
 * A link is current when the path matches exactly OR sits under it (so /offers
 * stays marked on /offers/<slug>, and /he/offers on /he/offers/<slug>). No
 * Suspense boundary is needed: all routes are static (no dynamic params),
 * matching LangToggle's existing usage.
 *
 * The active indicator is a copper bottom-border. Every link reserves that 1px at
 * rest with a transparent border, so marking the current link causes no layout
 * shift after hydration.
 */
export default function NavLinks({ links }: { links: readonly Cta[] }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
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
