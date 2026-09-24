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
    title: "משרד AI מנוהל",
    cta: "לראות את המשרד המנוהל",
    summary:
      "הסטודיו מריץ את העבודה החוזרת של המשרד, תדריך בוקר, מיון מיילים, תהליכי מסמכים ומעקב, בסביבה פרטית של המשרד, כשהאנשים שלכם מאשרים את מה שחשוב. הקמה חד־פעמית ועלות חודשית.",
  },
  "ai-workflow-sprint": {
    title: "ספרינט תהליך AI",
    cta: "לראות את הספרינט",
    summary:
      "תהליך תקוע אחד ממופה מקצה לקצה, ואז שלוש אוטומציות ממוקדות במחיר קבוע. הדרך המהירה להתחיל.",
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
 * commitment ladder). Throws at module init on a missing or href-less
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
