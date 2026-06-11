import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { fontVariables } from "@/lib/fonts";
import { rootMetadata } from "@/lib/root-metadata";
import { shellContent } from "@/content/shell";

/**
 * Root layout for the Hebrew site (route group `(he)`). The second of the
 * site's two root layouts: this one renders a genuine `<html lang="he" dir="rtl">`
 * document. Since the full Hebrew mirror exists, the shell is the SAME shared
 * SiteHeader/SiteFooter as the English root, with locale="he" (Hebrew labels +
 * /he-prefixed routes). Navigating to/from the English root triggers a full
 * page load (expected with multiple root layouts). Font loaders + base
 * metadata are shared from src/lib (defined once).
 */
export const metadata = rootMetadata;

export default function HeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shell = shellContent("he");
  return (
    <html lang="he" dir="rtl" className={fontVariables}>
      <body>
        <a href="#main" className="skip-link">
          {shell.skipLink}
        </a>
        <SiteHeader locale="he" />
        {children}
        <SiteFooter locale="he" />
        {/* Exactly one root layout renders per document, so no double-mount. */}
        <Analytics />
      </body>
    </html>
  );
}
