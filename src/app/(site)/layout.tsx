import "../globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { fontVariables } from "@/lib/fonts";
import { rootMetadata } from "@/lib/root-metadata";

/**
 * Root layout for the English site (route group `(site)` → URLs unchanged).
 * One of the site's two root layouts: this one renders `<html lang="en">` with
 * the full EN shell. The Hebrew root layout lives in `app/(he)/layout.tsx`.
 * Navigating between the two triggers a full page load (expected with multiple
 * root layouts). Shared font loaders and base metadata come from src/lib so they
 * are defined once across both roots.
 */
export const metadata = rootMetadata;

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
