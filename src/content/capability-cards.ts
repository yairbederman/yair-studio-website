import { CAPABILITIES } from "@/lib/capabilities";
import { localePaths } from "@/lib/locale-paths";
import type { Locale } from "@/content/types";

/**
 * Localized capability-card strings, keyed by the stable capability `key`
 * from the canonical CAPABILITIES list (src/lib/capabilities.ts). EN derives
 * directly from CAPABILITIES; HE adds translated strings and prefixes hrefs
 * with /he. Mirrors src/content/offer-cards.ts.
 */

export type CapabilityCard = {
  key: string;
  href: string;
  title: string;
  cta: string;
  summary: string;
};

type CardStrings = { title: string; cta: string; summary: string };

/** Hebrew card strings per capability key. */
const HE_CARDS: Record<string, CardStrings> = {
  "agentic-systems": {
    title: "מערכות סוכני AI",
    cta: "לראות את מערכות הסוכנים",
    summary:
      "סוכני AI שמריצים את העבודה החוזרת של המשרד, קליטת פניות, מיון, טיוטות ומעקב, בתוך הכלים של המשרד עצמו, כשאדם מאשר את מה שחשוב.",
  },
  "process-optimization": {
    title: "ייעול תהליכים",
    cta: "לראות את ייעול התהליכים",
    summary:
      "תהליך אחד ממופה מקצה לקצה, ממוין לאוטומטי, בעזרת AI ואנושי, והחיכוך הכי גדול בו מוסר.",
  },
  websites: {
    title: "אתרים",
    cta: "לראות את האתרים",
    summary:
      "אתרים מעוצבים, מהירים ודו־לשוניים (עברית ואנגלית) לעסק שמוכר שירות, עם הסרטונים של הסטודיו כתנועה.",
  },
  films: {
    title: "סרטונים",
    cta: "לראות את הסרטונים",
    summary:
      "סרטונים קצרים ומעוצבים שנבנים מקוד, בלי פנים או קולות סינתטיים: לופים של מוצר, תהליך והסבר לאתר, ללינקדאין או לפיץ'.",
  },
  "ai-enablement": {
    title: "הטמעת AI לצוות",
    cta: "לראות את ההטמעה",
    summary:
      "מפגשים מעשיים שבהם צוות העסק לומד להריץ AI על העבודה החוזרת שלו, עם הרגלי האישור ששומרים על זה בטוח.",
  },
};

const en: readonly CapabilityCard[] = CAPABILITIES.map((c) => ({
  key: c.key,
  href: c.href,
  title: c.title,
  cta: c.cta,
  summary: c.summary,
}));

const he: readonly CapabilityCard[] = CAPABILITIES.map((c) => {
  const strings = HE_CARDS[c.key];
  if (!strings) {
    throw new Error(`capabilityCards: no HE strings for capability "${c.key}"`);
  }
  return { key: c.key, href: localePaths(c.href).he, ...strings };
});

const CARDS: Record<Locale, readonly CapabilityCard[]> = { en, he };

/** Resolve the localized capability cards for a locale. */
export function capabilityCards(locale: Locale): readonly CapabilityCard[] {
  return CARDS[locale];
}

/**
 * Resolve one capability's localized card by key — the single source for any
 * surface that links a capability outside the card grid. Throws at module
 * init on a missing key, so a renamed capability fails the build instead of
 * shipping a dead link.
 */
export function capabilityCard(locale: Locale, key: string): CapabilityCard {
  const card = CARDS[locale].find((c) => c.key === key);
  if (!card) {
    throw new Error(
      `capabilityCard: no capability "${key}" for locale "${locale}"`,
    );
  }
  return card;
}
