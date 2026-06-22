import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/** Dashboards & Automation page content — typed and locale-keyed. */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Visibility layer",
    title: "Dashboards & Automation",
    lead: "See what needs attention and trigger the right next action. A visibility and automation layer connected to the tools you already use.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  who: {
    title: "Who it's for",
    items: [
      {
        title: "Leaders who need a clear view",
        desc: "You want to see what's stuck, overdue, or at risk without chasing updates.",
      },
      {
        title: "Operations teams",
        desc: "You coordinate work across tools and want fewer manual status checks.",
      },
      {
        title: "Growing teams",
        desc: "Volume has outgrown spreadsheets and memory.",
      },
    ],
  },
  problems: {
    title: "Problems it solves",
    items: [
      {
        title: "No single view",
        desc: "Status lives in different tools, so no one sees the whole picture.",
      },
      {
        title: "Things slip",
        desc: "Overdue and at-risk items surface too late.",
      },
      {
        title: "Manual reporting",
        desc: "Updates are assembled by hand for every meeting.",
      },
      {
        title: "Always reacting",
        desc: "Problems are noticed only after they happen.",
      },
    ],
  },
  build: {
    title: "What we build",
    intro:
      "Good dashboard signals include open follow-ups, overdue or stuck items, documents waiting for review, decisions waiting for approval, and a weekly operating signal.",
    items: [
      {
        title: "Operational dashboards",
        desc: "One view of what needs attention: what's stuck, overdue, at risk, and what's newly flagged this week.",
      },
      {
        title: "Alerts & triggers",
        desc: "The right signal at the right time, with automated next actions where it's safe.",
      },
      {
        title: "Connected sources",
        desc: "Spreadsheets, CRMs, calendars, documents, and APIs feeding one place.",
      },
      {
        title: "Reporting",
        desc: "Recurring summaries built automatically instead of by hand.",
      },
    ],
  },
  example: {
    title: "What the visibility loop looks like",
    intro:
      "The loop the layer runs, simplified. The dashboard surfaces the signal; a person decides what happens next.",
    map: {
      caption: "Visibility loop",
      ariaLabel: "The visibility and automation loop",
      nodes: [
        { label: "Connected sources", sub: "sheets · CRM · calendar · docs" },
        { label: "Signals extracted", sub: "stuck · overdue · at risk" },
        { label: "One weekly view" },
        { label: "Human decides", human: true },
        { label: "Next action triggered", out: true },
      ],
    },
  },
  how: {
    title: "How it works",
    steps: [
      {
        title: "Map what matters",
        desc: "We define the few signals worth watching for one workflow.",
      },
      {
        title: "Connect the sources",
        desc: "Sheets, CRM, calendar, docs, or APIs: whatever holds the data.",
      },
      {
        title: "Build the view",
        desc: "A dashboard that shows attention-worthy work, not everything.",
      },
      {
        title: "Add safe automation",
        desc: "Triggers and alerts handle routine next actions; risky ones ask first.",
        human: true,
      },
      {
        title: "Tune over time",
        desc: "Signals and thresholds adjust as the work changes.",
      },
    ],
  },
  human: {
    title: "What stays human",
    intro: "Automation handles the routine; people set the rules and read the signals.",
    items: [
      {
        title: "Risky triggers",
        desc: "Automations act only where it's safe; anything sensitive waits for approval.",
      },
      {
        title: "What counts as attention",
        desc: "You define the thresholds; the dashboard follows them.",
      },
      {
        title: "Interpretation",
        desc: "The view surfaces signals; people decide what to do.",
      },
    ],
  },
  cta: {
    heading: "See what needs attention, then act on it.",
    body: "Start with one workflow's signals, connect the sources, and build the view that drives the next action.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) dashboards-automation content — hebrew-quality drafted. */
const he: OfferPageContent = {
  hero: {
    eyebrow: "שכבת הנראות",
    title: "דשבורדים ואוטומציה",
    lead: "לראות מה דורש טיפול ולהפעיל את הצעד הנכון הבא. שכבת נראות ואוטומציה שמחוברת לכלים שכבר בשימוש.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  who: {
    title: "למי זה מתאים",
    items: [
      {
        title: "מנהלים שצריכים תמונה ברורה",
        desc: "רוצים לראות מה תקוע, באיחור או בסיכון, בלי לרדוף אחרי עדכונים.",
      },
      {
        title: "צוותי תפעול",
        desc: "מתאמים עבודה בין כלים ורוצים פחות בדיקות סטטוס ידניות.",
      },
      {
        title: "צוותים צומחים",
        desc: "הנפח גדל מעבר לגיליונות ולזיכרון.",
      },
    ],
  },
  problems: {
    title: "אילו בעיות זה פותר",
    items: [
      {
        title: "אין תצוגה אחת",
        desc: "הסטטוס חי בכלים שונים, אז אף אחד לא רואה את התמונה המלאה.",
      },
      {
        title: "דברים נופלים",
        desc: "פריטים באיחור או בסיכון מתגלים מאוחר מדי.",
      },
      {
        title: "דוחות ידניים",
        desc: "עדכונים מורכבים ביד לקראת כל ישיבה.",
      },
      {
        title: "תמיד בתגובה",
        desc: "בעיות מתגלות רק אחרי שהן קורות.",
      },
    ],
  },
  build: {
    title: "מה אנחנו בונים",
    intro:
      "איתותים טובים לדשבורד: מעקבים פתוחים, פריטים תקועים או באיחור, מסמכים שממתינים לבדיקה, החלטות שממתינות לאישור, ואיתות תפעולי שבועי.",
    items: [
      {
        title: "דשבורדים תפעוליים",
        desc: "תצוגה אחת של מה שדורש טיפול: תקוע, באיחור, בסיכון, ומה שסומן השבוע.",
      },
      {
        title: "התראות וטריגרים",
        desc: "האיתות הנכון בזמן הנכון, עם צעדים אוטומטיים איפה שזה בטוח.",
      },
      {
        title: "מקורות מחוברים",
        desc: "גיליונות, מערכות CRM, יומנים, מסמכים ו-APIs שמזינים מקום אחד.",
      },
      {
        title: "דוחות",
        desc: "סיכומים קבועים שנבנים אוטומטית במקום ביד.",
      },
    ],
  },
  example: {
    title: "איך נראית לולאת הנראות",
    intro:
      "הלולאה שהשכבה מריצה, בפישוט. הדשבורד מציף את האיתות; אדם מחליט מה קורה הלאה.",
    map: {
      caption: "לולאת נראות",
      ariaLabel: "לולאת הנראות והאוטומציה",
      nodes: [
        { label: "מקורות מחוברים", sub: "גיליונות · CRM · יומן · מסמכים" },
        { label: "איתותים מחולצים", sub: "תקוע · באיחור · בסיכון" },
        { label: "תצוגה שבועית אחת" },
        { label: "אדם מחליט", human: true },
        { label: "הצעד הבא מופעל", out: true },
      ],
    },
  },
  how: {
    title: "איך זה עובד",
    steps: [
      {
        title: "ממפים מה חשוב",
        desc: "מגדירים את האיתותים הבודדים ששווה לעקוב אחריהם בתהליך אחד.",
      },
      {
        title: "מחברים את המקורות",
        desc: "גיליונות, CRM, יומן, מסמכים או APIs: מה שמחזיק את הנתונים.",
      },
      {
        title: "בונים את התצוגה",
        desc: "דשבורד שמראה עבודה שדורשת טיפול, לא הכול.",
      },
      {
        title: "מוסיפים אוטומציה בטוחה",
        desc: "טריגרים והתראות מטפלים בצעדים שגרתיים; המסוכנים שואלים קודם.",
        human: true,
      },
      {
        title: "מכווננים לאורך זמן",
        desc: "האיתותים והספים מתעדכנים כשהעבודה משתנה.",
      },
    ],
  },
  human: {
    title: "מה נשאר אנושי",
    intro: "האוטומציה מטפלת בשגרה; אנשים קובעים את הכללים וקוראים את האיתותים.",
    items: [
      {
        title: "טריגרים מסוכנים",
        desc: "אוטומציות פועלות רק איפה שבטוח; כל דבר רגיש מחכה לאישור.",
      },
      {
        title: "מה נחשב דורש טיפול",
        desc: "אתם מגדירים את הספים; הדשבורד הולך לפיהם.",
      },
      {
        title: "פרשנות",
        desc: "התצוגה מציפה איתותים; אנשים מחליטים מה לעשות.",
      },
    ],
  },
  cta: {
    heading: "רואים מה דורש טיפול, ופועלים.",
    body: "מתחילים מהאיתותים של תהליך אחד, מחברים את המקורות, ובונים את התצוגה שמניעה את הצעד הבא.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the Dashboards & Automation page content for a locale. */
export const dashboardsAutomationContent = localeAccessor(
  "dashboardsAutomationContent",
  CONTENT,
);
