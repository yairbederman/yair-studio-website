import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { CONTACT_EMAIL, CONTACT_MAILTO, LINKEDIN_URL, waLink } from "@/lib/site";
import { shellContent } from "@/content/shell";
import type { Locale } from "@/content/types";

/**
 * Site footer: brand + positioning tag on the start side; nav links plus the
 * two direct contact channels (email address, WhatsApp) on the end side.
 * Locale-aware via the shell content model; defaults to EN. The email address
 * is LTR-isolated so it renders intact inside an RTL shell.
 */
export default function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const shell = shellContent(locale);
  return (
    <footer className="site-footer">
      <div className="footer-l">
        <Wordmark />
        <span className="footer-tag">{shell.footer.tag}</span>
      </div>
      <nav className="footer-r" aria-label={shell.footer.ariaLabel}>
        {shell.footer.links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <a href={CONTACT_MAILTO} className="ltr-inline">
          {CONTACT_EMAIL}
        </a>
        <a href={waLink()} target="_blank" rel="noopener noreferrer">
          {shell.footer.whatsappLabel}
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          {shell.footer.linkedinLabel}
        </a>
      </nav>
    </footer>
  );
}
