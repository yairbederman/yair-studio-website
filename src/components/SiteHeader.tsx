import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import LangToggle from "@/components/LangToggle";
import NavLinks from "@/components/NavLinks";

/** Sticky site header: brand wordmark + primary nav + language toggle.
 *  Stays a Server Component; the active-state nav links and the language toggle
 *  are isolated client children. (No skip link here — it lives in the layout.) */
export default function SiteHeader() {
  return (
    <header className="site-nav">
      <Link href="/" className="brand">
        <Wordmark />
      </Link>
      <nav className="nav-links" aria-label="Primary">
        <NavLinks />
        <LangToggle />
      </nav>
    </header>
  );
}
