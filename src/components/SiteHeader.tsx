import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import LangToggle from "@/components/LangToggle";
import NavLinks from "@/components/NavLinks";
import { shellContent } from "@/content/shell";
import type { Locale } from "@/content/types";

/** Sticky site header: brand wordmark + primary nav + language toggle.
 *  Locale-aware via the shell content model (labels + locale-prefixed routes);
 *  defaults to EN so existing usage is unchanged. Stays a Server Component;
 *  the active-state nav links and the language toggle are isolated client
 *  children receiving plain serializable props. (No skip link here — it lives
 *  in the layout.) */
export default function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const shell = shellContent(locale);
  return (
    <header className="site-nav">
      <Link href={shell.brandHref} className="brand">
        <Wordmark />
      </Link>
      <nav className="nav-links" aria-label={shell.nav.ariaLabel}>
        <NavLinks links={shell.nav.links} />
        <LangToggle />
      </nav>
    </header>
  );
}
