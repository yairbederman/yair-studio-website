import { localeAccessor } from "@/content/types";
import type { CardItem, Cta, Locale, StepItem } from "@/content/types";

/**
 * /offers overview page content. The service cards themselves stay canonical in
 * src/lib/offers.ts and localized in src/content/offer-cards.ts.
 */

export type OffersIndexContent = {
  hero: { title: string; lead: string; ctaLabel: string; ctaHref: string };
  start: {
    title: string;
    intro: string;
    steps?: readonly StepItem[];
    choices?: readonly (CardItem & { cta: Cta })[];
  };
  fit?: { title: string; intro: string; items: readonly CardItem[] };
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
    lead: "מתחילים מנקודת כניסה מעשית: אבחון תהליך, פיילוט אחד, או מערכת קטנה סביב העבודה שכבר עוברת בין מיילים, יומן, מסמכים, פגישות, לקוחות ומשימות.",
    ctaLabel: "לתאם אבחון תהליך",
    ctaHref: "/he/contact",
  },
  start: {
    title: "הדרך הפשוטה להתחיל",
    intro: "לא צריך לדעת מראש איזו מערכת לבנות. מספיק לדעת איפה משהו נופל.",
    choices: [
      {
        title: "אם אתם לא בטוחים מה הבעיה",
        desc: "מתחילים באבחון תהליך AI.",
        cta: { label: "לראות את האבחון", href: "/he/offers/ai-workflow-audit" },
      },
      {
        title: "אם כבר יש תהליך ברור שנתקע",
        desc: "מתחילים בפיילוט AI תפעולי.",
        cta: { label: "לראות את הפיילוט", href: "/he/offers/ai-ops-pilot" },
      },
      {
        title: "אם לידים, הצעות או לקוחות נופלים בין הכיסאות",
        desc: "מתחילים במכונת Follow-Up.",
        cta: { label: "לראות את Follow-Up", href: "/he/offers/follow-up-machine" },
      },
    ],
  },
  fit: {
    title: "למי זה מתאים?",
    intro:
      "מתאים לעסקים קטנים ומשרדים מקצועיים שבהם העבודה עוברת בין מיילים, יומן, מסמכים, פגישות, לקוחות ומשימות, ושום דבר לא חי במקום אחד ברור.",
    items: [
      {
        title: "משרדים מקצועיים",
        desc: "עורכי דין, רואי חשבון, יועצים וספקי שירות עם הרבה מסמכים, לקוחות ודדליין.",
      },
      {
        title: "עסקים קטנים בצמיחה",
        desc: "כשיש יותר פניות, משימות ומעקב ממה שאפשר להחזיק בראש.",
      },
      {
        title: "צוותים בלי מנהל תפעול מלא",
        desc: "כשהבעלים או הצוות מחזיקים את התפעול בין מיילים, וואטסאפ, יומן וגיליונות.",
      },
      {
        title: "עסקים עם הרבה Follow-Up",
        desc: "לידים, הצעות מחיר, לקוחות פתוחים ומשימות שחייבים לחזור אליהן בזמן.",
      },
    ],
  },
  offers: { title: "השירותים" },
  cta: {
    heading: "תהליך אחד מספיק כדי להתחיל.",
    body: "שלחו את התהליך שמאט את היום. אפשר להתחיל מאבחון תהליך, או לבחור פיילוט צר אם הצורה כבר ברורה.",
    ctaLabel: "לתאם אבחון תהליך",
    ctaHref: "/he/contact",
  },
};

const CONTENT: Partial<Record<Locale, OffersIndexContent>> = { en, he };

/** Resolve the /offers overview page content for a locale. */
export const offersIndexContent = localeAccessor("offersIndexContent", CONTENT);
