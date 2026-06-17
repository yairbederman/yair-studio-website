import { localeAccessor } from "@/content/types";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/** AI Operations Pilot page content, typed and locale-keyed. */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Pilot",
    title: "Build one practical AI workflow in 7-10 days",
    lead: "Instead of talking about AI, we build one small workflow that works around email, calendar, documents, meetings, clients, or tasks.",
    ctaLabel: "Choose a workflow for the pilot",
    ctaHref: "/contact",
  },
  who: {
    title: "Pilot examples",
    items: [
      {
        title: "Morning business report",
        desc: "Meetings, important emails, tasks, and clients waiting for a reply.",
      },
      {
        title: "Follow-up tracking",
        desc: "Leads, quotes, and clients that need a response.",
      },
      {
        title: "Meeting to tasks",
        desc: "A recording or transcript becomes a summary, decisions, and tasks.",
      },
      {
        title: "Documents to tasks",
        desc: "A new document gets a summary, dates, actions, and red flags.",
      },
    ],
  },
  problems: {
    title: "Where a pilot helps",
    items: [
      {
        title: "The process is known",
        desc: "But it still depends on manual checking and memory.",
      },
      {
        title: "The tools already exist",
        desc: "Email, calendar, documents, CRM, spreadsheets, or task tools are already in use.",
      },
      {
        title: "The risk needs boundaries",
        desc: "AI can summarize, classify, and draft, but people approve sensitive steps.",
      },
      {
        title: "The team needs a working example",
        desc: "One live workflow is clearer than a long AI strategy deck.",
      },
    ],
  },
  build: {
    title: "What you get",
    items: [
      {
        title: "One working workflow",
        desc: "A narrow process that runs in real use.",
      },
      {
        title: "Defined inputs and outputs",
        desc: "What the workflow reads, what it produces, and where the output goes.",
      },
      {
        title: "Basic integration with existing tools",
        desc: "Connected only where the pilot needs it.",
      },
      {
        title: "A bot, report, or simple table",
        desc: "The output is visible enough for daily use.",
      },
      {
        title: "Human approval boundaries",
        desc: "No sensitive action runs on its own.",
      },
      {
        title: "Short operating documentation",
        desc: "What it does, how to run it, and what to check.",
      },
    ],
  },
  example: {
    title: "Pilot shape",
    intro: "One small workflow, with the approval boundary visible.",
    map: {
      caption: "AI operations pilot",
      ariaLabel: "AI operations pilot workflow",
      nodes: [
        { label: "Existing tool", sub: "email / calendar / docs" },
        { label: "AI reads + prepares" },
        { label: "Report / bot / table" },
        { label: "Human approval", human: true },
        { label: "Next action tracked", out: true },
      ],
    },
  },
  how: {
    title: "How it works",
    steps: [
      {
        title: "Choose one workflow",
        desc: "Morning report, follow-up, meetings, documents, or another narrow process.",
      },
      {
        title: "Define inputs and outputs",
        desc: "The pilot is scoped around what must be read and what must be produced.",
      },
      {
        title: "Connect the minimum tools",
        desc: "Only the systems needed for this workflow are connected.",
      },
      {
        title: "Add the approval boundary",
        desc: "Sensitive or unclear outputs wait for a person.",
        human: true,
      },
      {
        title: "Run it and adjust",
        desc: "We tune the prompts, fields, and handoff after real use.",
      },
    ],
  },
  human: {
    title: "What we do not do in a pilot",
    items: [
      {
        title: "We do not replace your CRM",
        desc: "The pilot works around existing systems.",
      },
      {
        title: "We do not build a full SaaS product",
        desc: "This is one workflow, not a platform.",
      },
      {
        title: "AI does not send messages alone",
        desc: "External messages wait for approval.",
      },
      {
        title: "We do not connect 12 systems on day one",
        desc: "The pilot stays small enough to trust.",
      },
    ],
  },
  cta: {
    heading: "Choose one process and build it small.",
    body: "A pilot is useful when it proves one workflow in real work, with clear inputs, outputs, and approval boundaries.",
    ctaLabel: "Book a pilot",
    ctaHref: "/contact",
  },
};

const he: OfferPageContent = {
  hero: {
    eyebrow: "פיילוט",
    title: "פיילוט AI תפעולי תוך 7-10 ימים",
    lead: "במקום לדבר על AI, בונים תהליך עבודה אחד קטן שעובד באמת סביב מיילים, יומן, מסמכים, פגישות, לקוחות או משימות.",
    ctaLabel: "לבחור תהליך עבודה לפיילוט",
    ctaHref: "/he/contact",
  },
  who: {
    title: "דוגמאות לפיילוטים",
    items: [
      {
        title: "דוח בוקר עסקי",
        desc: "כל בוקר: פגישות, מיילים חשובים, משימות ולקוחות שמחכים.",
      },
      {
        title: "מעקב Follow-Up",
        desc: "לידים, הצעות מחיר ולקוחות שצריך לחזור אליהם.",
      },
      {
        title: "פגישה למשימות",
        desc: "הקלטה או תמלול הופכים לסיכום, החלטות ומשימות.",
      },
      {
        title: "מסמכים למשימות",
        desc: "מסמך חדש מקבל סיכום, תאריכים, פעולות ודגלים אדומים.",
      },
    ],
  },
  problems: {
    title: "איפה פיילוט עוזר",
    items: [
      {
        title: "התהליך מוכר",
        desc: "אבל עדיין תלוי בבדיקה ידנית ובזיכרון.",
      },
      {
        title: "הכלים כבר קיימים",
        desc: "מייל, יומן, מסמכים, CRM, גיליונות או כלי משימות כבר בשימוש.",
      },
      {
        title: "צריך גבולות ברורים",
        desc: "AI יכול לסכם, לסווג ולנסח, אבל אדם מאשר שלבים רגישים.",
      },
      {
        title: "הצוות צריך לראות משהו עובד",
        desc: "תהליך עבודה אחד חי ברור יותר ממצגת AI ארוכה.",
      },
    ],
  },
  build: {
    title: "מה מקבלים",
    items: [
      {
        title: "תהליך עבודה אחד שעובד",
        desc: "תהליך צר שרץ בשימוש אמיתי.",
      },
      {
        title: "הגדרת קלטים ופלטים",
        desc: "מה תהליך העבודה קורא, מה הוא מייצר, ולאן הפלט הולך.",
      },
      {
        title: "אינטגרציה בסיסית לכלים קיימים",
        desc: "מחברים רק את מה שהפיילוט צריך.",
      },
      {
        title: "בוט, דוח או טבלה פשוטה",
        desc: "הפלט מספיק גלוי לשימוש יומיומי.",
      },
      {
        title: "גבולות אישור אנושי",
        desc: "שום פעולה רגישה לא רצה לבד.",
      },
      {
        title: "תיעוד קצר להפעלה",
        desc: "מה זה עושה, איך מפעילים, ומה צריך לבדוק.",
      },
    ],
  },
  example: {
    title: "צורת הפיילוט",
    intro: "תהליך עבודה קטן אחד, עם גבול אישור גלוי.",
    map: {
      caption: "פיילוט AI תפעולי",
      ariaLabel: "זרימת פיילוט AI תפעולי",
      nodes: [
        { label: "כלי קיים", sub: "מייל / יומן / מסמכים" },
        { label: "AI קורא ומכין" },
        { label: "דוח / בוט / טבלה" },
        { label: "אישור אנושי", human: true },
        { label: "הצעד הבא במעקב", out: true },
      ],
    },
  },
  how: {
    title: "איך זה עובד",
    steps: [
      {
        title: "בוחרים תהליך עבודה אחד",
        desc: "דוח בוקר, follow-up, פגישות, מסמכים או תהליך צר אחר.",
      },
      {
        title: "מגדירים קלטים ופלטים",
        desc: "הפיילוט תחום סביב מה צריך לקרוא ומה צריך להפיק.",
      },
      {
        title: "מחברים מינימום כלים",
        desc: "רק המערכות שצריך בשביל תהליך העבודה הזה.",
      },
      {
        title: "מוסיפים גבול אישור",
        desc: "פלט רגיש או לא ברור מחכה לאדם.",
        human: true,
      },
      {
        title: "מריצים ומכווננים",
        desc: "מעדכנים פרומפטים, שדות והעברות לפי שימוש אמיתי.",
      },
    ],
  },
  human: {
    title: "מה לא עושים בפיילוט",
    items: [
      {
        title: "לא מחליפים CRM",
        desc: "הפיילוט עובד סביב המערכות הקיימות.",
      },
      {
        title: "לא בונים SaaS מלא",
        desc: "זה תהליך עבודה אחד, לא פלטפורמה.",
      },
      {
        title: "לא נותנים ל-AI לשלוח הודעות לבד",
        desc: "הודעות חיצוניות מחכות לאישור.",
      },
      {
        title: "לא מחברים 12 מערכות ביום הראשון",
        desc: "הפיילוט נשאר קטן מספיק כדי לסמוך עליו.",
      },
    ],
  },
  cta: {
    heading: "בואו נבחר תהליך אחד ונבנה אותו קטן.",
    body: "פיילוט טוב מוכיח תהליך עבודה אחד בעבודה אמיתית, עם קלטים, פלטים וגבולות אישור ברורים.",
    ctaLabel: "לתאם פיילוט",
    ctaHref: "/he/contact",
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the AI Operations Pilot page content for a locale. */
export const aiOpsPilotContent = localeAccessor("aiOpsPilotContent", CONTENT);
