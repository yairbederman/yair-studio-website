import { OFFERS } from "@/lib/offers";
import { localePaths } from "@/lib/locale-paths";
import type { Locale } from "@/content/types";
import type { OfferStatus } from "@/lib/offers";

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
  status?: OfferStatus;
};

type CardStrings = { title: string; cta: string; summary: string };

/** Hebrew card strings per offer key. */
const HE_CARDS: Record<string, CardStrings> = {
  "ai-workflow-audit": {
    title: "אבחון תהליך AI",
    cta: "לראות את האבחון",
    summary: "מיפוי תהליך אחד, צווארי בקבוק, מועמדים לאוטומציה ומפת דרכים.",
  },
  "ai-ops-pilot": {
    title: "פיילוט AI תפעולי",
    cta: "לראות את הפיילוט",
    summary:
      "בונים תהליך עבודה אחד שעובד תוך 7-10 ימים: דוח בוקר, follow-up, סיכום פגישות או מסמכים למשימות.",
  },
  "follow-up-machine": {
    title: "מכונת Follow-Up",
    cta: "לראות את Follow-Up",
    summary:
      "מערכת קטנה שמזהה לידים, הצעות מחיר, לקוחות פתוחים ומשימות שמחכות לתגובה.",
  },
  "meeting-to-tasks": {
    title: "פגישות למשימות",
    cta: "בקרוב",
    summary:
      "כל פגישה הופכת לסיכום, החלטות, משימות, בעלי אחריות ודדליין.",
  },
  "office-command-center": {
    title: "Command Center למשרד",
    cta: "בקרוב",
    summary:
      "תמונת מצב יומית של מסמכים, מיילים, יומן, משימות ודברים שמחכים לבעל העסק.",
  },
};

const en: readonly OfferCard[] = OFFERS.map((offer) => ({
  key: offer.key,
  href: offer.href,
  title: offer.title,
  cta: offer.cta,
  summary: offer.summary,
  status: offer.status,
}));

const he: readonly OfferCard[] = OFFERS.map((offer) => {
  const strings = HE_CARDS[offer.key];
  if (!strings) {
    throw new Error(`offerCards: no HE strings for offer "${offer.key}"`);
  }
  return {
    key: offer.key,
    href: offer.href ? localePaths(offer.href).he : undefined,
    status: offer.status,
    ...strings,
  };
});

const CARDS: Record<Locale, readonly OfferCard[]> = { en, he };

/** Resolve the localized service cards for a locale. */
export function offerCards(locale: Locale): readonly OfferCard[] {
  return CARDS[locale];
}
