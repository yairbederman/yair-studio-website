import { SERVICES_LIST } from "@/lib/services";
import { localePaths } from "@/lib/locale-paths";
import type { ServiceKey } from "@/lib/services";
import type { Locale } from "@/content/types";

/**
 * Localized service-card strings, keyed by the stable service `key` from the
 * canonical SERVICES_LIST (src/lib/services.ts). EN derives directly from
 * SERVICES_LIST; HE adds its own strings and prefixes hrefs with /he.
 * HE_CARDS is typed on ServiceKey, so a service without Hebrew strings fails
 * the type check. Mirrors src/content/offer-cards.ts.
 */

export type ServiceCard = {
  key: ServiceKey;
  href: string;
  title: string;
  cta: string;
  summary: string;
};

type CardStrings = { title: string; cta: string; summary: string };

/** Hebrew card strings per service key. */
const HE_CARDS: Record<ServiceKey, CardStrings> = {
  "ai-agents": {
    title: "סוכני AI",
    cta: "לראות את סוכני ה-AI",
    summary:
      "סוכנים שלוקחים על עצמם את העבודה החוזרת של המשרד, קליטת פניות, מיון, טיוטות ומעקב, בתוך הכלים שכבר עובדים איתם, כשאדם מאשר את מה שחשוב. נבנים כפרויקט במחיר קבוע, ואם תרצו, ממשיכים לרוץ ולהשתפר חודש אחרי חודש.",
  },
  websites: {
    title: "אתרים",
    cta: "לראות את האתרים",
    summary:
      "אתרים מעוצבים, מהירים ודו־לשוניים (עברית ואנגלית) לעסק שמוכר שירות.",
  },
  films: {
    title: "סרטונים יצירתיים",
    cta: "לראות את הסרטונים",
    summary:
      "סרטונים יצירתיים קצרים שנוצרים עם AI גנרטיבי, למותג, להשקה או לרשתות. סרטי הקונספט של הסטודיו ממחישים מה אפשר לעשות.",
  },
};

const en: readonly ServiceCard[] = SERVICES_LIST.map((s) => ({
  key: s.key,
  href: s.href,
  title: s.title,
  cta: s.cta,
  summary: s.summary,
}));

const he: readonly ServiceCard[] = SERVICES_LIST.map((s) => ({
  key: s.key,
  href: localePaths(s.href).he,
  ...HE_CARDS[s.key],
}));

const CARDS: Record<Locale, readonly ServiceCard[]> = { en, he };

/** Resolve the localized service cards for a locale. */
export function serviceCards(locale: Locale): readonly ServiceCard[] {
  return CARDS[locale];
}

/**
 * Resolve one service's localized card by key — the single source for any
 * surface that links a service outside the card grid (the ladder, the about
 * page). Throws at module init on a missing key, so a renamed service fails
 * the build instead of shipping a dead link.
 */
export function serviceCard(locale: Locale, key: ServiceKey): ServiceCard {
  const card = CARDS[locale].find((c) => c.key === key);
  if (!card) {
    throw new Error(`serviceCard: no service "${key}" for locale "${locale}"`);
  }
  return card;
}
