import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/** Follow-Up Machine page content, typed and locale-keyed. */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Follow-Up",
    title: "Follow-Up Machine",
    lead: "A small AI-assisted workflow that keeps leads, quotes, clients, and open tasks from falling through the cracks — with human approval before external messages or sensitive changes.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  who: {
    title: "Why it hurts",
    items: [
      {
        title: "Leads are not answered in time",
        desc: "The inquiry arrives, someone sees it, then it disappears between email and other tasks.",
      },
      {
        title: "Quotes stay open",
        desc: "A quote is sent, but there is no simple method for when to follow up and what to say.",
      },
      {
        title: "Clients wait for an answer",
        desc: "Open requests stay in someone's head instead of a clear follow-up list.",
      },
      {
        title: "Tasks have no owner",
        desc: "Everyone remembers that something had to happen, but no one is sure who owns it or when.",
      },
    ],
  },
  problems: {
    title: "What the system does",
    items: [
      {
        title: "Finds things waiting",
        desc: "Emails, forms, tasks, or spreadsheet rows that need follow-up.",
      },
      {
        title: "Summarizes status",
        desc: "What happened, who is waiting, when the last interaction happened, and what is still open.",
      },
      {
        title: "Suggests the next step",
        desc: "A reply draft, reminder, task, or follow-up marker.",
      },
      {
        title: "Keeps human approval",
        desc: "The system does not send external messages on its own. A person approves before sending or sensitive changes.",
      },
    ],
  },
  build: {
    title: "What you get",
    items: [
      {
        title: "One follow-up workflow that works",
        desc: "One narrow tracking workflow, not a whole sales system on day one.",
      },
      {
        title: "One source for open items",
        desc: "A table, report, bot, or simple view of what is still open.",
      },
      {
        title: "Simple follow-up rules",
        desc: "Clear rules for what counts as needing follow-up.",
      },
      {
        title: "Status summary and next step",
        desc: "Each open item has the short context and the suggested action.",
      },
      {
        title: "Reminders or a daily / weekly report",
        desc: "The stuck items surface on a rhythm the team can actually use.",
      },
      {
        title: "Human approval boundary",
        desc: "External messages and sensitive changes wait for a person.",
      },
      {
        title: "Short operating notes",
        desc: "What the workflow reads, what it shows, and how to run it.",
      },
    ],
  },
  example: {
    title: "Good starting examples",
    intro: "Useful when the follow-up type is concrete and already happens today.",
    map: {
      caption: "Follow-up starting points",
      ariaLabel: "Good starting examples for a follow-up workflow",
      nodes: [
        { label: "New website inquiries" },
        { label: "Quotes sent" },
        { label: "Clients waiting for a document" },
        { label: "Post-meeting tasks" },
        { label: "Documents sent for signature", out: true },
      ],
    },
  },
  how: {
    title: "How to start",
    steps: [
      {
        title: "Choose one follow-up type",
        desc: "Leads, quotes, open clients, or post-meeting tasks.",
      },
      {
        title: "Define what counts as open",
        desc: "How much time passed, who owns it, and what needs to happen.",
      },
      {
        title: "Build a live follow-up list",
        desc: "A table, report, bot, or simple view.",
      },
      {
        title: "Add reminders and drafts",
        desc: "The system surfaces what is stuck and suggests the next step.",
      },
      {
        title: "Keep human approval",
        desc: "A person decides what gets sent and what changes.",
        human: true,
      },
    ],
  },
  human: {
    title: "What we do not do",
    items: [
      {
        title: "We do not replace a full CRM",
        desc: "The workflow stays focused on one follow-up list.",
      },
      {
        title: "We do not send messages without approval",
        desc: "External messages wait for a person.",
      },
      {
        title: "We do not build a full sales system on day one",
        desc: "The first step is one working follow-up workflow.",
      },
      {
        title: "We do not connect every possible tool first",
        desc: "The process comes before the integrations.",
      },
    ],
  },
  cta: {
    heading: "If something keeps falling through the cracks, this is probably a good place to start.",
    body: "Send one example: a lead, quote, waiting client, or post-meeting task. We will start there.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

const he: OfferPageContent = {
  hero: {
    eyebrow: "Follow-Up",
    title: "מכונת Follow-Up שלא נותנת לדברים ליפול",
    lead: "מערכת קטנה שמזהה לידים, הצעות מחיר, לקוחות פתוחים ומשימות שמחכות לתגובה — ומחזירה אותם למסלול עם תזכורת, סיכום וצעד הבא ברור.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  who: {
    title: "למה זה כואב",
    items: [
      {
        title: "לידים שלא חוזרים אליהם בזמן",
        desc: "הפנייה נכנסת, מישהו רואה אותה, ואז היא נעלמת בין מיילים ומשימות אחרות.",
      },
      {
        title: "הצעות מחיר שנשארות פתוחות",
        desc: "שלחתם הצעה, אבל אין שיטה שמוודאת מתי חוזרים ומה אומרים.",
      },
      {
        title: "לקוחות שמחכים לתשובה",
        desc: "בקשות פתוחות נשארות בראש של מישהו במקום במעקב ברור.",
      },
      {
        title: "משימות בלי אחראי",
        desc: "כולם זוכרים שהיה צריך לעשות משהו, אף אחד לא בטוח מי עושה ומתי.",
      },
    ],
  },
  problems: {
    title: "מה המערכת עושה",
    items: [
      {
        title: "מזהה דברים שמחכים",
        desc: "מיילים, טפסים, משימות או שורות בגיליון שדורשים המשך טיפול.",
      },
      {
        title: "מסכמת מצב",
        desc: "מה קרה, מי מחכה, מתי הייתה האינטראקציה האחרונה ומה פתוח.",
      },
      {
        title: "מציעה צעד הבא",
        desc: "טיוטת תגובה, תזכורת, משימה או סימון למעקב.",
      },
      {
        title: "משאירה אישור אנושי",
        desc: "המערכת לא שולחת הודעות חיצוניות לבד. אדם מאשר לפני שליחה או שינוי רגיש.",
      },
    ],
  },
  build: {
    title: "מה מקבלים",
    items: [
      {
        title: "Workflow מעקב אחד שעובד",
        desc: "מתמקדים בתהליך מעקב אחד במקום לפתוח כמה חזיתות יחד.",
      },
      {
        title: "מקור אחד לרשימת הדברים הפתוחים",
        desc: "טבלה, דוח, בוט או תצוגה פשוטה שמרכזים מה עדיין פתוח.",
      },
      {
        title: "חוקים פשוטים למה נחשב “דורש מעקב”",
        desc: "מגדירים מתי פריט פתוח צריך לעלות שוב לטיפול.",
      },
      {
        title: "סיכום מצב וצעד הבא",
        desc: "לכל פריט פתוח יש הקשר קצר ופעולה מוצעת.",
      },
      {
        title: "תזכורות או דוח יומי/שבועי",
        desc: "מה שתקוע עולה בזמן שמתאים לצוות.",
      },
      {
        title: "גבול אישור אנושי לפני הודעות חיצוניות",
        desc: "אדם מאשר לפני שליחה או שינוי רגיש.",
      },
      {
        title: "תיעוד קצר להפעלה",
        desc: "מה המערכת קוראת, מה היא מציפה ואיך מפעילים אותה.",
      },
    ],
  },
  example: {
    title: "דוגמאות טובות להתחלה",
    intro: "מתחילים במקום שבו סוג המעקב ברור וכבר קורה בעבודה היומיומית.",
    map: {
      caption: "נקודות התחלה ל-Follow-Up",
      ariaLabel: "דוגמאות טובות להתחלה עם מערכת Follow-Up",
      nodes: [
        { label: "פניות חדשות מהאתר" },
        { label: "הצעות מחיר שנשלחו" },
        { label: "לקוחות שמחכים למסמך" },
        { label: "משימות אחרי פגישה" },
        { label: "מעקב אחרי מסמכים שנשלחו לחתימה", out: true },
      ],
    },
  },
  how: {
    title: "איך מתחילים",
    steps: [
      {
        title: "בוחרים סוג מעקב אחד",
        desc: "לידים, הצעות מחיר, לקוחות פתוחים או משימות אחרי פגישות.",
      },
      {
        title: "מגדירים מה נחשב פתוח",
        desc: "כמה זמן עבר, מי אחראי, ומה צריך לקרות.",
      },
      {
        title: "בונים רשימת מעקב חיה",
        desc: "טבלה, דוח, בוט או תצוגה פשוטה.",
      },
      {
        title: "מוסיפים תזכורות וטיוטות",
        desc: "המערכת מציפה את מה שתקוע ומציעה צעד הבא.",
      },
      {
        title: "שומרים אישור אנושי",
        desc: "אדם מחליט מה נשלח ומה משתנה.",
        human: true,
      },
    ],
  },
  human: {
    title: "מה לא עושים",
    items: [
      {
        title: "לא מחליפים CRM מלא",
        desc: "המערכת נשארת ממוקדת בתהליך מעקב אחד.",
      },
      {
        title: "לא שולחים הודעות בלי אישור",
        desc: "הודעות חיצוניות מחכות לאדם.",
      },
      {
        title: "לא בונים מערכת מכירות שלמה ביום הראשון",
        desc: "מתחילים מ-Workflow מעקב אחד שעובד.",
      },
      {
        title: "לא מחברים כל כלי אפשרי לפני שמבינים את התהליך",
        desc: "התהליך קודם לחיבורים.",
      },
    ],
  },
  cta: {
    heading: "אם משהו נופל אצלכם בין הכיסאות — זה כנראה מקום טוב להתחיל.",
    body: "שלחו דוגמה אחת: ליד, הצעת מחיר, לקוח שמחכה או משימה אחרי פגישה. נתחיל משם.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the Follow-Up Machine page content for a locale. */
export const followUpMachineContent = localeAccessor(
  "followUpMachineContent",
  CONTENT,
);
