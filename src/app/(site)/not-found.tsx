import PageHero from "@/components/PageHero";
import CTAButton from "@/components/CTAButton";

/**
 * Branded EN 404 — rendered inside the full (site) shell whenever a URL under
 * the English root doesn't resolve (the (site)/[...rest] catch-all routes every
 * unknown path here with an HTTP 404). Metadata (title + noindex) lives on the
 * catch-all page, the segment that triggers notFound().
 */
export default function NotFound() {
  return (
    <main id="main">
      <PageHero
        id="not-found"
        title="Page not found"
        lead="This address does not exist on the site. The link may be outdated or mistyped."
        actions={
          <>
            <CTAButton href="/" variant="primary">
              Back to the homepage
            </CTAButton>
            <CTAButton href="/contact">Contact</CTAButton>
          </>
        }
      />
    </main>
  );
}
