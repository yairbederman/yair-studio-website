import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
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
    lead: "For owner-led service businesses and professional offices where work moves through email, calendar, documents, meetings, and follow-up. I use agent-backed delivery to turn one stuck workflow into an audit, a narrow pilot, or a private AI operations assistant.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  start: {
    title: "Where to start",
    intro:
      "Start with one real process. Map how it works now, separate the audit from the build, and only pilot what is ready. The client buys clearer operations; the agent system is the leverage behind the delivery.",
    steps: [
      {
        title: "Diagnose one workflow",
        desc: "Map the bottlenecks, owners, automation candidates, and human approval points.",
      },
      {
        title: "Build one pilot",
        desc: "Turn the map into a small working assistant around email, calendar, documents, meetings, clients, or tasks.",
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
    heading: "Send the workflow that keeps slipping.",
    body: "A few lines are enough. We map the current process first, then decide whether you need a focused audit, a narrow pilot, or a private assistant around the work.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

const he: OffersIndexContent = {
  hero: {
    title: "שירותים",
    lead: "לעסקי שירותים ולמשרדים מקצועיים שבהם העבודה עוברת בין מייל, יומן, מסמכים, פגישות ומעקב. אני משתמש בתהליך עבודה מבוסס סוכן כדי להפוך תהליך אחד שנתקע לאבחון, פיילוט צר או עוזר AI תפעולי פרטי.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  start: {
    title: "הדרך הפשוטה להתחיל",
    intro: "מתחילים מתהליך אמיתי אחד, ממפים איך הוא עובד עכשיו, ומפרידים בין אבחון לבין בנייה. הלקוח קונה תפעול ברור יותר; מערכת הסוכן היא המנוע מאחורי הביצוע.",
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
    heading: "שלחו את התהליך שממשיך ליפול.",
    body: "מספיקות כמה שורות. קודם נמפה את התהליך הקיים, ואז נחליט אם צריך אבחון ממוקד, פיילוט צר או עוזר פרטי סביב העבודה.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OffersIndexContent>> = { en, he };

/** Resolve the /offers overview page content for a locale. */
export const offersIndexContent = localeAccessor("offersIndexContent", CONTENT);
