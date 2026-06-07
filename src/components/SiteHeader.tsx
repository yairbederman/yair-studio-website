import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import LangToggle from "@/components/LangToggle";

const NAV_LINKS = [
  { href: "/workflows", label: "Workflows" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Sticky site header: brand wordmark + primary nav + language toggle.
 *  (No skip link here — the single skip link lives in the root layout.) */
export default function SiteHeader() {
  return (
    <header className="site-nav">
      <Link href="/" className="brand">
        <Wordmark />
      </Link>
      <nav className="nav-links" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <LangToggle />
      </nav>
    </header>
  );
}
