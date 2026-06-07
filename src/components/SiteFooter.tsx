import Link from "next/link";
import Wordmark from "@/components/Wordmark";

const FOOTER_LINKS = [
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Site footer: brand + positioning tag on the start side, links on the end side. */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-l">
        <Wordmark />
        <span className="footer-tag">AI systems for real business workflows</span>
      </div>
      <nav className="footer-r" aria-label="Footer">
        {FOOTER_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
