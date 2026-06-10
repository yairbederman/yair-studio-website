import PageHero from "@/components/PageHero";
import CTAButton from "@/components/CTAButton";
import { CONTACT_MAILTO } from "@/lib/site";

/**
 * Branded HE 404 — rendered inside the Hebrew RTL shell whenever a URL under
 * /he doesn't resolve (routed by the (he)/he/[...rest] catch-all with an HTTP
 * 404). Self-contained like the rest of the HE shell: links only to /he and
 * the contact mailto, never into untranslated EN pages.
 */
export default function NotFound() {
  return (
    <main id="main">
      <PageHero
        id="not-found"
        title="הדף לא נמצא"
        lead="הכתובת הזאת לא קיימת באתר. אפשר לחזור לדף הבית או לכתוב לנו במייל."
        actions={
          <>
            <CTAButton href="/he" variant="primary">
              חזרה לדף הבית
            </CTAButton>
            <CTAButton href={CONTACT_MAILTO}>צור קשר</CTAButton>
          </>
        }
      />
    </main>
  );
}
