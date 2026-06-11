import { OFFERS } from "@/lib/offers";
import { localePaths } from "@/lib/locale-paths";
import type { Locale } from "@/content/types";

/**
 * Localized offer-card strings, keyed by the stable offer `key` from the
 * canonical OFFERS list (src/lib/offers.ts) — per that file's rule: localized
 * copy keys off the offer keys; routes and the list itself are never forked.
 *
 * EN derives directly from OFFERS (no duplicated strings). HE adds the
 * translated card strings and prefixes hrefs with /he.
 */

export type OfferCard = {
  key: string;
  href: string;
  title: string;
  cta: string;
  summary: string;
};

type CardStrings = { title: string; cta: string; summary: string };

/** Hebrew card strings per offer key (hebrew-quality drafted). */
const HE_CARDS: Record<string, CardStrings> = {
  "ai-workflow-audit": {
    title: "אבחון תהליכי AI",
    cta: "מתחילים מאבחון",
    summary:
      "סקירה ממוקדת של תהליך עסקי אחד: מה קורה היום, איפה הוא נשבר, מה אפשר להפוך לאוטומטי ומה צריך להישאר אנושי.",
  },
  "internal-ai-systems": {
    title: "מערכות AI פנימיות",
    cta: "בונים מערכת פנימית",
    summary:
      "שכבת עוזרים ותהליכים פרקטית לפגישות, משימות, מייל, חיפוש ידע, דוחות ומעקב.",
  },
  "dashboards-automation": {
    title: "דשבורדים ואוטומציה",
    cta: "יוצרים נראות",
    summary:
      "שכבת נראות שמחוברת לכלים הקיימים, כדי שהצוות יראה מה דורש טיפול ויפעיל את הצעד הנכון הבא.",
  },
  "content-ad-operations": {
    title: "תפעול תוכן וקמפיינים",
    cta: "מסדרים את תפעול התוכן",
    summary:
      "מערכת חוזרת שהופכת רעיונות גולמיים, שיחות, חומרים ונתוני ביצועים לתוכן מובנה או לניסויי קמפיינים.",
  },
};

// Both card arrays precomputed at module init — a missing HE entry fails the
// build immediately instead of throwing when an HE route first renders.
const en: readonly OfferCard[] = OFFERS.map((offer) => ({
  key: offer.key,
  href: offer.href,
  title: offer.title,
  cta: offer.cta,
  summary: offer.summary,
}));

const he: readonly OfferCard[] = OFFERS.map((offer) => {
  const strings = HE_CARDS[offer.key];
  if (!strings) {
    throw new Error(`offerCards: no HE strings for offer "${offer.key}"`);
  }
  return { key: offer.key, href: localePaths(offer.href).he, ...strings };
});

const CARDS: Record<Locale, readonly OfferCard[]> = { en, he };

/** Resolve the localized offer cards for a locale. */
export function offerCards(locale: Locale): readonly OfferCard[] {
  return CARDS[locale];
}
