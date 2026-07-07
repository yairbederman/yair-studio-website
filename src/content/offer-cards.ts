import { OFFERS } from "@/lib/offers";
import { localePaths } from "@/lib/locale-paths";
import type { Locale } from "@/content/types";

/**
 * Localized service-card strings, keyed by the stable offer `key` from the
 * canonical OFFERS list (src/lib/offers.ts). EN derives directly from OFFERS;
 * HE adds translated strings and prefixes live hrefs with /he.
 */

export type OfferCard = {
  key: string;
  href?: string;
  title: string;
  cta: string;
  summary: string;
};

type CardStrings = { title: string; cta: string; summary: string };

/** Hebrew card strings per offer key. */
const HE_CARDS: Record<string, CardStrings> = {
  "ai-office-assistant": {
    title: "עוזר AI מנוהל למשרד",
    cta: "לראות את העוזר",
    summary:
      "תדריך בוקר, מיון מיילים, תהליכי מסמכים ומעקב, כשירות מנוהל בסביבה פרטית של המשרד שלכם.",
  },
  "ai-workflow-sprint": {
    title: "ספרינט תהליך AI",
    cta: "לראות את הספרינט",
    summary:
      "תהליך תקוע אחד ממופה מקצה לקצה, ואז שלוש אוטומציות ממוקדות במחיר קבוע. הדרך המהירה להתחיל.",
  },
  "linkedin-content-engine": {
    title: "מנוע תוכן ללינקדאין",
    cta: "לראות את המנוע",
    summary:
      "מערך מנוהל שהופך חומר אמיתי שלכם לנוכחות קבועה בלינקדאין, ומפרסם רק אחרי אישור שלכם.",
  },
  "ai-enablement": {
    title: "סדנאות הטמעת AI",
    cta: "לראות את הסדנאות",
    summary:
      "סדנאות מעשיות שמקנות לצוותי פיתוח ומו״פ שליטה בקידוד בעזרת AI וב-agent workflows, על הקוד שלהם.",
  },
};

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
  return {
    key: offer.key,
    href: offer.href ? localePaths(offer.href).he : undefined,
    ...strings,
  };
});

const CARDS: Record<Locale, readonly OfferCard[]> = { en, he };

/** Resolve the localized service cards for a locale. */
export function offerCards(locale: Locale): readonly OfferCard[] {
  return CARDS[locale];
}

/**
 * Resolve one LIVE offer's localized card by key — the single source for any
 * surface that links an offer outside the card grid (homepage hero, the
 * /offers decision router). Throws at module init on a missing or href-less
 * key, so a renamed offer fails the build instead of shipping a dead link.
 */
export function offerCard(
  locale: Locale,
  key: string,
): OfferCard & { href: string } {
  const card = CARDS[locale].find((c) => c.key === key);
  if (!card?.href) {
    throw new Error(`offerCard: no live offer "${key}" for locale "${locale}"`);
  }
  return { ...card, href: card.href };
}
