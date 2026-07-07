import { CONTACT_MAILTO } from "@/lib/site";
import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { CardItem, Cta, Locale, StepItem } from "@/content/types";

/** /contact page content — typed and locale-keyed. */

export type ContactContent = {
  hero: {
    title: string;
    lead: string;
    /** Primary hero action — the email CTA (email stays the primary path). */
    emailCta: Cta;
    /** Secondary channel — WhatsApp, ghost button, opens in a new tab. */
    whatsappCta: Cta;
  };
  next: { title: string; steps: readonly StepItem[] };
  send: { title: string; intro: string; items: readonly CardItem[] };
  goodFirst: { title: string; intro: string; items: readonly string[] };
  human: { title: string; intro: string; items: readonly CardItem[] };
  cta: {
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    secondaryCta?: Cta;
  };
};

/** The WhatsApp CTA — single-sourced from the shell content (shared with the
    homepage final band). */
const workflowCtaEn: Cta = shellContent("en").workflowCta;
const whatsappCtaEn: Cta = shellContent("en").whatsappCta;

const en: ContactContent = {
  hero: {
    title: workflowCtaEn.label,
    lead: "If you run an owner-led service business or professional office and work keeps stalling between email, calendar, documents, meetings, and follow-up, send the workflow in a few lines. Hebrew or English is fine.",
    emailCta: { ...workflowCtaEn, href: CONTACT_MAILTO },
    whatsappCta: whatsappCtaEn,
  },
  next: {
    title: "What happens after you send it",
    steps: [
      {
        title: "Send a short note",
        desc: "A few lines about the workflow and where it slows down. No formal brief needed.",
      },
      {
        title: "Map the current workflow",
        desc: "We focus on one real process and document its steps, owners, inputs, handoffs, and approval points.",
      },
      {
        title: "Separate the map from the build",
        desc: "A workflow map can stand on its own. Building is proposed only when the process is ready for it.",
      },
      {
        title: "Choose the next useful step",
        desc: "You get a clear recommendation: stop with the map, run a fixed-price sprint, or start a managed-assistant setup.",
      },
    ],
  },
  send: {
    title: "What to send",
    intro: "A few lines is enough to start. The more concrete, the better.",
    items: [
      {
        title: "The workflow",
        desc: "The one process you want to improve, described in a sentence or two.",
      },
      {
        title: "The tools involved",
        desc: "Where the work lives today: email, docs, spreadsheets, chat, a CRM, whatever it is.",
      },
      {
        title: "Where it gets stuck",
        desc: "The step where work waits, gets duplicated, or quietly falls through.",
      },
      {
        title: "Who approves decisions",
        desc: "Who signs off on the calls that matter in this process right now.",
      },
      {
        title: "A useful outcome",
        desc: "What a good result looks like: less chasing, faster turnaround, fewer dropped items.",
      },
    ],
  },
  goodFirst: {
    title: "Good first workflows",
    intro: "Processes that map cleanly and tend to pay off early.",
    items: [
      "Meeting notes into tasks and follow-up",
      "Email and calendar triage",
      "An overdue or stuck-work dashboard",
      "A content or ad approval loop",
      "A document-heavy office workflow",
    ],
  },
  human: {
    title: "What stays human",
    intro: "Automation handles the busywork; the judgment stays with people.",
    items: [
      {
        title: "Approval stays with you",
        desc: "Nothing runs end to end without a human checkpoint where the decision matters.",
      },
      {
        title: "You set the priorities",
        desc: "What gets built, and in what order, is your call. The map informs it; you decide.",
      },
    ],
  },
  cta: {
    heading: "One stuck workflow is enough to start.",
    body: "Describe where the work begins, which tools it crosses, and where it waits or falls through. You write directly to the person who maps the process and builds the system.",
    ctaLabel: workflowCtaEn.label,
    ctaHref: CONTACT_MAILTO,
    secondaryCta: whatsappCtaEn,
  },
};

/** The Hebrew WhatsApp CTA — single-sourced from the shell content. */
const workflowCtaHe: Cta = shellContent("he").workflowCta;
const whatsappCtaHe: Cta = shellContent("he").whatsappCta;

/** Hebrew (RTL) contact content — hebrew-quality drafted. */
const he: ContactContent = {
  hero: {
    title: workflowCtaHe.label,
    lead: "אם אתם מנהלים עסק שירותים בבעלותכם או משרד מקצועי, והעבודה נתקעת בין מייל, יומן, מסמכים, פגישות ומעקב, שלחו את התהליך בכמה שורות. אפשר בעברית או באנגלית.",
    emailCta: { ...workflowCtaHe, href: CONTACT_MAILTO },
    whatsappCta: whatsappCtaHe,
  },
  next: {
    title: "מה קורה אחרי ששולחים",
    steps: [
      {
        title: "שולחים כמה שורות",
        desc: "כמה משפטים על התהליך ואיפה הוא נתקע. בלי בריף רשמי.",
      },
      {
        title: "ממפים את התהליך הקיים",
        desc: "מתמקדים בתהליך אמיתי אחד ומתעדים את השלבים, האחראים, הקלט, ההעברות ונקודות האישור.",
      },
      {
        title: "מפרידים בין המפה לבנייה",
        desc: "מפת תהליך יכולה לעמוד בפני עצמה. בנייה מוצעת רק כשהתהליך בשל לזה.",
      },
      {
        title: "בוחרים את הצעד השימושי הבא",
        desc: "מקבלים המלצה ברורה: לעצור עם המפה, לרוץ ספרינט במחיר קבוע, או להתחיל הקמה של העוזר המנוהל.",
      },
    ],
  },
  send: {
    title: "מה מספיק לכתוב",
    intro:
      "אם יש לכם עוד דקה, הוסיפו איפה זה קורה, מי אחראי ומה תקוע.",
    items: [
      {
        title: "התהליך",
        desc: "התהליך האחד שרוצים לשפר, במשפט או שניים.",
      },
      {
        title: "הכלים המעורבים",
        desc: "איפה העבודה חיה היום: מייל, מסמכים, גיליונות, צ'אט, CRM וכל מה שיש.",
      },
      {
        title: "איפה זה נתקע",
        desc: "השלב שבו עבודה מחכה, מוכפלת, או נופלת בשקט בין הכיסאות.",
      },
      {
        title: "מי מאשר החלטות",
        desc: "מי חותם היום על ההחלטות שחשובות בתהליך הזה.",
      },
      {
        title: "תוצאה שימושית",
        desc: "איך נראית תוצאה טובה: פחות רדיפה אחרי סטטוס, תגובה מהירה יותר, פחות דברים שנופלים.",
      },
    ],
  },
  goodFirst: {
    title: "מה אפשר לשלוח",
    intro: "לא צריך להכין מסמך אפיון. שלחו דוגמה אחת מהעבודה האמיתית.",
    items: [
      "ליד שלא חזרתם אליו בזמן",
      "הצעת מחיר שנשארה פתוחה",
      "לקוח שמחכה למסמך",
      "סיכום פגישה שלא הפך למשימות",
      "תהליך שעובר בין מייל, וואטסאפ וגיליון",
      "משהו שאתם בודקים ידנית שוב ושוב",
    ],
  },
  human: {
    title: "מה נשאר אנושי",
    intro: "האוטומציה מטפלת בעבודה הידנית שחוזרת על עצמה; שיקול הדעת נשאר אצל אנשים.",
    items: [
      {
        title: "האישור נשאר אצלכם",
        desc: "שום דבר לא רץ מקצה לקצה בלי נקודת בדיקה אנושית איפה שההחלטה חשובה.",
      },
      {
        title: "אתם קובעים את סדר העדיפויות",
        desc: "מה נבנה, ובאיזה סדר, זו ההחלטה שלכם. המפה מזינה אותה; אתם מחליטים.",
      },
    ],
  },
  cta: {
    heading: "תהליך אחד שנתקע מספיק כדי להתחיל.",
    body: "ספרו איפה העבודה מתחילה, בין אילו כלים היא עוברת ואיפה היא מחכה או נופלת. אתם כותבים ישירות לאדם שממפה את התהליך ובונה את המערכת.",
    ctaLabel: workflowCtaHe.label,
    ctaHref: CONTACT_MAILTO,
    secondaryCta: whatsappCtaHe,
  },
};

const CONTENT: Partial<Record<Locale, ContactContent>> = { en, he };

/** Resolve the /contact page content for a locale. */
export const contactContent = localeAccessor("contactContent", CONTENT);
