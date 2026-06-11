import PageHero from "@/components/PageHero";
import CTAButton from "@/components/CTAButton";

/**
 * Branded HE 404 — rendered inside the Hebrew RTL shell whenever a URL under
 * /he doesn't resolve (routed by the (he)/he/[...rest] catch-all with an HTTP
 * 404). The full Hebrew mirror exists, so recovery links go to real Hebrew
 * pages (/he, /he/contact) — the EN sibling does the same with /, /contact.
 */
export default function NotFound() {
  return (
    <main id="main">
      <PageHero
        id="not-found"
        title="הדף לא נמצא"
        lead="הכתובת הזאת לא קיימת באתר. אפשר לחזור לדף הבית או ליצור קשר."
        actions={
          <>
            <CTAButton href="/he" variant="primary">
              חזרה לדף הבית
            </CTAButton>
            <CTAButton href="/he/contact">צור קשר</CTAButton>
          </>
        }
      />
    </main>
  );
}
