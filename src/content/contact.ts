import { CONTACT_MAILTO } from "@/lib/site";
import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { CardItem, Cta, Locale, StepItem } from "@/content/types";

/**
 * /contact page content — typed and locale-keyed. The page is the scoping
 * call (rung 01 of the ladder): the hero title IS the site-wide CTA label,
 * and `next.steps` say what happens after you book.
 *
 * Channel order is locale-native: EN leads with email (mailto) and offers
 * WhatsApp as the ghost button; /he leads with WhatsApp — the local norm —
 * and email is the ghost button. The content decides; ContactPageBody only
 * renders primary/secondary.
 */

export type ContactContent = {
  hero: {
    title: string;
    lead: string;
    /** Primary hero action — email in EN, WhatsApp on /he. */
    primaryCta: Cta;
    /** Secondary channel — ghost button; the other of the two. */
    secondaryCta: Cta;
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

/** The scoping-call and WhatsApp CTAs — single-sourced from the shell content
    (shared with the homepage hero and final band). */
const workflowCtaEn: Cta = shellContent("en").workflowCta;
const whatsappCtaEn: Cta = shellContent("en").whatsappCta;
/** The email channel: the scoping-call label, pointed at the mailto. */
const emailCtaEn: Cta = { ...workflowCtaEn, href: CONTACT_MAILTO };

const en: ContactContent = {
  hero: {
    title: workflowCtaEn.label,
    lead: "A free 20-minute call about one workflow in your office. Write in Hebrew or English; either channel below reaches me directly.",
    primaryCta: emailCtaEn,
    secondaryCta: whatsappCtaEn,
  },
  next: {
    title: "What happens after you book",
    steps: [
      {
        title: "A 20-minute call",
        desc: "We talk through one workflow: where it starts, which tools it crosses, and where it waits or falls through.",
      },
      {
        title: "A written read",
        desc: "You get a short written read of the workflow: how it runs today, where it leaks, and what should stay with a person.",
      },
      {
        title: "Which rung fits",
        desc: "The read names the rung that fits and why: a fixed-price sprint, the managed office, or nothing yet.",
      },
      {
        title: "You choose",
        desc: "Stop with the read, run the sprint, or start the managed office. No obligation either way.",
        human: true,
      },
    ],
  },
  send: {
    title: "What helps before the call",
    intro: "A few lines is enough. The more concrete, the better.",
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
      "Client intake and missing documents",
      "Email and calendar triage",
      "Meeting notes into tasks and follow-up",
      "An overdue or stuck-work view",
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
        desc: "What gets built, and in what order, is your call. The read informs it; you decide.",
      },
    ],
  },
  cta: {
    heading: "One workflow is enough to start.",
    body: "Book the call by email or WhatsApp. You write directly to the person who runs the call, maps the workflow, and builds the system.",
    ctaLabel: emailCtaEn.label,
    ctaHref: emailCtaEn.href,
    secondaryCta: whatsappCtaEn,
  },
};

/** The Hebrew CTAs — single-sourced from the shell content; WhatsApp leads. */
const workflowCtaHe: Cta = shellContent("he").workflowCta;
const whatsappCtaHe: Cta = shellContent("he").whatsappCta;
const emailCtaHe: Cta = { ...workflowCtaHe, href: CONTACT_MAILTO };

/** Hebrew (RTL) contact content — hebrew-quality drafted. */
const he: ContactContent = {
  hero: {
    title: workflowCtaHe.label,
    lead: "שיחה חינם של 20 דקות על תהליך אחד במשרד שלכם. כותבים בעברית או באנגלית; שני הערוצים למטה מגיעים ישירות אליי.",
    primaryCta: whatsappCtaHe,
    secondaryCta: emailCtaHe,
  },
  next: {
    title: "מה קורה אחרי שקובעים",
    steps: [
      {
        title: "שיחה של 20 דקות",
        desc: "עוברים יחד על תהליך אחד: איפה הוא מתחיל, בין אילו כלים הוא עובר, ואיפה הוא מחכה או נופל.",
      },
      {
        title: "סיכום כתוב",
        desc: "מקבלים סיכום כתוב וקצר של התהליך: איך הוא רץ היום, איפה הוא דולף, ומה צריך להישאר אצל אדם.",
      },
      {
        title: "איזה שלב מתאים",
        desc: "הסיכום אומר איזה שלב מתאים ולמה: ספרינט במחיר קבוע, המשרד המנוהל, או בינתיים כלום.",
      },
      {
        title: "אתם בוחרים",
        desc: "לעצור עם הסיכום, לרוץ ספרינט, או להתחיל את המשרד המנוהל. בלי התחייבות לשום כיוון.",
        human: true,
      },
    ],
  },
  send: {
    title: "מה עוזר לפני השיחה",
    intro: "כמה שורות מספיקות. ככל שזה קונקרטי יותר, יותר טוב.",
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
    title: "מה אפשר להביא לשיחה",
    intro: "לא צריך להכין מסמך אפיון. דוגמה אחת מהעבודה האמיתית מספיקה.",
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
        desc: "מה נבנה, ובאיזה סדר, זו ההחלטה שלכם. הסיכום מזין אותה; אתם מחליטים.",
      },
    ],
  },
  cta: {
    heading: "תהליך אחד מספיק כדי להתחיל.",
    body: "קובעים את השיחה בוואטסאפ או במייל. אתם כותבים ישירות למי שמנהל את השיחה, ממפה את התהליך ובונה את המערכת.",
    ctaLabel: whatsappCtaHe.label,
    ctaHref: whatsappCtaHe.href,
    secondaryCta: emailCtaHe,
  },
};

const CONTENT: Partial<Record<Locale, ContactContent>> = { en, he };

/** Resolve the /contact page content for a locale. */
export const contactContent = localeAccessor("contactContent", CONTENT);
