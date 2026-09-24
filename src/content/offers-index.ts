import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { ladderContent } from "@/content/ladder";
import type { LadderContent } from "@/content/ladder";
import type { CardItem, Locale } from "@/content/types";

/**
 * /offers ladder page content ("Services"). The three rungs stay canonical in
 * src/content/ladder.ts (shared with the homepage) — never restate them here.
 *
 * Both locales carry the same structure: hero → ladder → who it fits → cta.
 * Structural EN/HE parity is deliberate — don't let one locale grow a section
 * the other lacks.
 */

export type OffersIndexContent = {
  hero: { title: string; lead: string; ctaLabel: string; ctaHref: string };
  ladder: LadderContent;
  fit: { title: string; intro: string; items: readonly CardItem[] };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};

const en: OffersIndexContent = {
  hero: {
    title: "Services",
    lead: "Three ways to start, by commitment: a free scoping call, a fixed-price project, or a managed AI office. Every one keeps a person approving what matters.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  ladder: ladderContent("en"),
  fit: {
    title: "Who this fits",
    intro: "Small operations where the work crosses email, calendar, documents, meetings, clients, and tasks, and nothing lives in one clear place.",
    items: [
      {
        title: "Professional offices",
        desc: "Law, accounting, consulting, and other document-heavy, deadline-driven practices.",
      },
      {
        title: "Growing small businesses",
        desc: "More requests, tasks, and follow-up than anyone can hold in their head.",
      },
      {
        title: "Owner-led businesses",
        desc: "Owners whose expertise should be visible while they stay busy with client work.",
      },
    ],
  },
  cta: {
    heading: "Not sure which rung fits? Book the call.",
    body: "The scoping call exists for exactly this. Bring one workflow; you get back which rung fits and why, before any commitment.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

const he: OffersIndexContent = {
  hero: {
    title: "שירותים",
    lead: "שלוש דרכים להתחיל, לפי רמת ההתחייבות: שיחת אפיון חינם, ספרינט תהליך במחיר קבוע, או משרד AI מנוהל. בכל אחת מהן אדם מאשר את מה שחשוב.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  ladder: ladderContent("he"),
  fit: {
    title: "למי זה מתאים",
    intro: "תפעול קטן שבו העבודה עוברת בין מיילים, יומן, מסמכים, פגישות, לקוחות ומשימות, ושום דבר לא חי במקום אחד ברור.",
    items: [
      {
        title: "משרדים מקצועיים",
        desc: "עורכי דין, רואי חשבון, יועצים ופרקטיקות עתירות מסמכים ודדליין.",
      },
      {
        title: "עסקים קטנים בצמיחה",
        desc: "יותר פניות, משימות ומעקב ממה שאפשר להחזיק בראש.",
      },
      {
        title: "עסקים בהובלת הבעלים",
        desc: "בעלים שהמומחיות שלהם צריכה להיראות בחוץ בזמן שהם עסוקים בעבודה מול לקוחות.",
      },
    ],
  },
  cta: {
    heading: "לא בטוחים איזה שלב מתאים? קובעים שיחה.",
    body: "בדיוק בשביל זה יש שיחת אפיון. מביאים תהליך אחד; מקבלים חזרה איזה שלב מתאים ולמה, לפני כל התחייבות.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OffersIndexContent>> = { en, he };

/** Resolve the /offers ladder page content for a locale. */
export const offersIndexContent = localeAccessor("offersIndexContent", CONTENT);
