import { AUDIT_OFFER } from "@/lib/offers";
import { localeAccessor } from "@/content/types";
import type { Locale, StepItem } from "@/content/types";

/**
 * /offers overview page content — typed and locale-keyed.
 * The sequence's first step embeds AUDIT_OFFER.engagementNote so the
 * engagement shape lives in exactly one place (src/lib/offers.ts).
 * The offer cards themselves stay canonical in src/lib/offers.ts.
 */

export type OffersIndexContent = {
  hero: { title: string; lead: string; ctaLabel: string; ctaHref: string };
  start: { title: string; intro: string; steps: readonly StepItem[] };
  offers: { title: string };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};

const en: OffersIndexContent = {
  hero: {
    title: "Four entry points into one system",
    lead: "Not four separate services. Each offer is a way into the same system, built around how your workflows actually run.",
    ctaLabel: "Map one workflow",
    ctaHref: "/contact",
  },
  start: {
    title: "Where to start",
    intro:
      "If you're not sure where to start, start with the AI Workflow Audit. The other offers build on what it finds.",
    steps: [
      {
        title: "Start with an AI Workflow Audit",
        desc: `Map one real workflow before building: bottlenecks, owners, and what should stay human.${AUDIT_OFFER.engagementNote ? ` ${AUDIT_OFFER.engagementNote}` : ""}`,
      },
      {
        title: "Build Internal AI Systems",
        desc: "Add a practical assistant layer for meetings, tasks, email, knowledge search, and follow-up.",
      },
      {
        title: "Add Dashboards & Automation",
        desc: "Make stuck, overdue, and at-risk work visible, and trigger the right next action.",
      },
      {
        title: "Systemize Content & Ad Operations",
        desc: "Turn ideas, assets, and performance data into repeatable campaigns, with approval before publishing.",
      },
    ],
  },
  offers: { title: "The offers" },
  cta: {
    heading: "One workflow is enough to start.",
    body: "The first step is a focused map of a real process: where work enters, where it gets stuck, and what a useful AI-assisted system should do.",
    ctaLabel: "Map one workflow",
    ctaHref: "/contact",
  },
};

/** Hebrew (RTL) offers-overview content — hebrew-quality drafted. The first
    step folds in the audit engagement note (translation of
    AUDIT_OFFER.engagementNote, which is EN-only by definition). */
const he: OffersIndexContent = {
  hero: {
    title: "ארבע נקודות כניסה למערכת אחת",
    lead: "לא ארבעה שירותים נפרדים. כל שירות הוא דרך כניסה לאותה מערכת, שנבנית סביב איך שהתהליכים שלכם באמת רצים.",
    ctaLabel: "למפות תהליך אחד",
    ctaHref: "/he/contact",
  },
  start: {
    title: "מאיפה מתחילים",
    intro:
      "לא בטוחים מאיפה להתחיל? מתחילים מאבחון תהליכי AI. שאר השירותים נבנים על מה שהוא מגלה.",
    steps: [
      {
        title: "מתחילים מאבחון תהליכי AI",
        desc: "ממפים תהליך אמיתי אחד לפני שבונים: צווארי בקבוק, אחראים, ומה נשאר אנושי. סקירה ממוקדת בהיקף קבוע, בתוך ימים.",
      },
      {
        title: "בונים מערכות AI פנימיות",
        desc: "מוסיפים שכבת עוזרים פרקטית לפגישות, משימות, מייל, חיפוש ידע ומעקב.",
      },
      {
        title: "מוסיפים דשבורדים ואוטומציה",
        desc: "הופכים עבודה תקועה, באיחור ובסיכון לגלויה, ומפעילים את הצעד הנכון הבא.",
      },
      {
        title: "מסדרים תפעול תוכן וקמפיינים",
        desc: "הופכים רעיונות, חומרים ונתוני ביצועים לקמפיינים חוזרים, עם אישור לפני פרסום.",
      },
    ],
  },
  offers: { title: "השירותים" },
  cta: {
    heading: "תהליך אחד מספיק כדי להתחיל.",
    body: "הצעד הראשון הוא מפה ממוקדת של תהליך אמיתי: איפה העבודה נכנסת, איפה היא נתקעת, ומה מערכת AI שימושית באמת צריכה לעשות.",
    ctaLabel: "למפות תהליך אחד",
    ctaHref: "/he/contact",
  },
};

const CONTENT: Partial<Record<Locale, OffersIndexContent>> = { en, he };

/** Resolve the /offers overview page content for a locale. */
export const offersIndexContent = localeAccessor("offersIndexContent", CONTENT);
