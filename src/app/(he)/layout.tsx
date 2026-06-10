import "../globals.css";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import LangToggle from "@/components/LangToggle";
import { fontVariables } from "@/lib/fonts";
import { rootMetadata } from "@/lib/root-metadata";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

/**
 * Root layout for the Hebrew site (route group `(he)`). The second of the
 * site's two root layouts: this one renders a genuine `<html lang="he" dir="rtl">`
 * document. The shell is self-contained — brand, a contact link, and a toggle
 * back to English — with NO links into the untranslated English pages. Navigating
 * to/from the English root triggers a full page load (expected with multiple root
 * layouts). Font loaders + base metadata are shared from src/lib (defined once).
 */
export const metadata = rootMetadata;

export default function HeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={fontVariables}>
      <body>
        <a href="#main" className="skip-link">
          דלג לתוכן
        </a>
        <header className="site-nav">
          <Link href="/he" className="brand">
            <Wordmark />
          </Link>
          <nav className="nav-links" aria-label="ניווט ראשי">
            <a href={CONTACT_MAILTO}>צור קשר</a>
            <LangToggle />
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div className="footer-l">
            <Wordmark />
            <span className="footer-tag">מערכות AI לתהליכי עבודה אמיתיים</span>
          </div>
          <nav className="footer-r" aria-label="קישורים בתחתית">
            {/* The visible address (LTR-isolated inside the RTL shell) — works
                even when no mail client is configured. */}
            <a href={CONTACT_MAILTO} className="ltr-inline">
              {CONTACT_EMAIL}
            </a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
