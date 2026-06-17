import { localeAccessor } from "@/content/types";
import type { Locale, StepItem } from "@/content/types";

/**
 * /offers overview page content. The service cards themselves stay canonical in
 * src/lib/offers.ts and localized in src/content/offer-cards.ts.
 */

export type OffersIndexContent = {
  hero: { title: string; lead: string; ctaLabel: string; ctaHref: string };
  start: { title: string; intro: string; steps: readonly StepItem[] };
  offers: { title: string };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};

const en: OffersIndexContent = {
  hero: {
    title: "Services",
    lead: "Start small: diagnose one workflow, build one pilot, or turn a daily operating process into a practical AI system.",
    ctaLabel: "Book a diagnostic call",
    ctaHref: "/contact",
  },
  start: {
    title: "Where to start",
    intro:
      "The safest path is to start with one real process, then build only the workflow that earns its place.",
    steps: [
      {
        title: "Diagnose one workflow",
        desc: "Map the bottlenecks, owners, automation candidates, and human approval points.",
      },
      {
        title: "Build one pilot",
        desc: "Turn the map into a small working workflow around email, calendar, documents, meetings, clients, or tasks.",
      },
      {
        title: "Keep the operating view visible",
        desc: "Use a bot, report, dashboard, or table so the next action is visible every day.",
        human: true,
      },
    ],
  },
  offers: { title: "Services" },
  cta: {
    heading: "One workflow is enough to start.",
    body: "Send the process that slows the day down. We can diagnose it first, or pick a narrow pilot if the shape is already clear.",
    ctaLabel: "Book a diagnostic call",
    ctaHref: "/contact",
  },
};

const he: OffersIndexContent = {
  hero: {
    title: "שירותים",
    lead: "אפשר להתחיל קטן: אבחון, פיילוט אחד, או מערכת תפעולית שמחזירה שליטה ליום העבודה.",
    ctaLabel: "לתאם שיחת אבחון",
    ctaHref: "/he/contact",
  },
  start: {
    title: "מאיפה מתחילים",
    intro:
      "בוחרים תהליך אחד אמיתי, מבינים איפה הוא נתקע, ואז בונים רק את החלק שצריך לעבוד עכשיו.",
    steps: [
      {
        title: "אבחון תהליך אחד",
        desc: "ממפים צווארי בקבוק, אחראים, מועמדים לאוטומציה ונקודות אישור אנושי.",
      },
      {
        title: "פיילוט קטן שעובד",
        desc: "הופכים את המפה לתהליך עבודה אחד סביב מיילים, יומן, מסמכים, פגישות, לקוחות או משימות.",
      },
      {
        title: "תמונת מצב יומית",
        desc: "בוט, דוח, דשבורד או טבלה פשוטה שמראים מה חדש, מה דחוף ומה תקוע.",
        human: true,
      },
    ],
  },
  offers: { title: "השירותים" },
  cta: {
    heading: "תהליך אחד מספיק כדי להתחיל.",
    body: "שלחו את התהליך שמאט את היום. אפשר להתחיל מאבחון, או לבחור פיילוט צר אם הצורה כבר ברורה.",
    ctaLabel: "לתאם שיחת אבחון",
    ctaHref: "/he/contact",
  },
};

const CONTENT: Partial<Record<Locale, OffersIndexContent>> = { en, he };

/** Resolve the /offers overview page content for a locale. */
export const offersIndexContent = localeAccessor("offersIndexContent", CONTENT);
