import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/**
 * AI Workflow Sprint — fixed-price entry offer. Merges the former
 * AI Workflow Audit and AI Operations Pilot into one engagement:
 * map one workflow, then build three working automations for it.
 * The natural on-ramp to the Managed AI Office Assistant.
 */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Fixed scope, fixed price",
    title: "One workflow mapped, three automations built",
    lead: "A sprint for a small team with one stuck process: we map how the workflow really runs, sort what should be automatic, AI-assisted, and human, then build three focused automations that remove its worst friction. No new platform, no retainer, no infrastructure to adopt.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
    secondaryCta: { label: "See what you get", href: "#build" },
  },
  film: {
    sectionTitle: "The sprint, in motion",
    webm: "/videos/workflow-sprint-process.webm",
    mp4: "/videos/workflow-sprint-process.mp4",
    poster: "/videos/workflow-sprint-process-poster.png",
    caption:
      "The sprint in motion: one stuck workflow is mapped, sorted, and returned with three working automations — approval stays human.",
    filmName: "workflow sprint film",
  },
  who: {
    title: "This fits if you are saying one of these things",
    items: [
      {
        title: "One process repeats every week",
        desc: "And someone still does it manually every time.",
      },
      {
        title: "Tasks disappear after meetings",
        desc: "Decisions are made, but two days later no one owns the next action.",
      },
      {
        title: "We want to use AI",
        desc: "But we need a working result, not a research project.",
      },
      {
        title: "We tried AI tools",
        desc: "But they never became a reliable way of working.",
      },
    ],
  },
  problems: {
    title: "What the sprint clarifies",
    items: [
      {
        title: "Where work enters",
        desc: "Email, calendar, documents, meetings, forms, spreadsheets, or task lists.",
      },
      {
        title: "Where it gets stuck",
        desc: "The handoff, approval, missing owner, or unclear next action.",
      },
      {
        title: "What becomes automatic",
        desc: "The steps a machine should simply do: capture, sort, extract, remind.",
      },
      {
        title: "What stays human",
        desc: "Decisions, external messages, sensitive changes, and unclear cases.",
      },
    ],
  },
  build: {
    title: "What you get",
    intro: "A mapped workflow and three automations running on it, delivered as a fixed-scope sprint.",
    items: [
      {
        title: "Workflow map",
        desc: "One process drawn end to end: inputs, steps, owners, outputs, and handoffs.",
      },
      {
        title: "Three working automations",
        desc: "The three highest-friction steps, automated or AI-assisted, running on your real work.",
      },
      {
        title: "Approval boundaries",
        desc: "Explicit points where a person reviews, decides, or signs off before anything moves.",
      },
      {
        title: "Handoff notes",
        desc: "What was built, how to run it, and what is worth building next.",
      },
    ],
  },
  example: {
    title: "The sprint, as a flow",
    intro: "A simplified view of the engagement, not a client case study.",
    map: {
      caption: "Sprint flow",
      ariaLabel: "Sprint flow from one stuck workflow to three working automations",
      nodes: [
        { label: "One stuck workflow", sub: "email · meetings · documents" },
        { label: "Mapped end to end" },
        { label: "Sorted", sub: "automatic · AI-assisted · human" },
        { label: "Three automations built" },
        { label: "Human approval", human: true },
        { label: "Workflow runs with less friction", out: true },
      ],
    },
  },
  how: {
    title: "How it works",
    intro: "A focused, fixed-scope sprint delivered within days.",
    steps: [
      {
        title: "Pick one process",
        desc: "We choose a real workflow that matters to the team now.",
      },
      {
        title: "Map the current path",
        desc: "We trace the inputs, steps, owners, handoffs, and tools.",
      },
      {
        title: "Sort the work",
        desc: "Automatic, AI-assisted, human, and not worth automating yet.",
      },
      {
        title: "Build the three automations",
        desc: "The highest-friction steps first, built and tested on your real work.",
      },
      {
        title: "Keep approval visible",
        desc: "Anything unclear or sensitive waits for a person.",
        human: true,
      },
    ],
  },
  pricing: {
    title: "How the sprint is priced",
    intro: "One number, agreed before we start.",
    items: [
      {
        title: "Fixed price",
        desc: "The map and the three automations are one fixed-scope package. No hourly meter.",
      },
      {
        title: "Days, not months",
        desc: "The sprint is scoped to be delivered within days, so the result arrives while the problem still matters.",
      },
    ],
    note: "The amount depends on the workflow's complexity and is agreed in the first conversation.",
  },
  human: {
    title: "What stays human",
    intro: "The automations do the assembly; the judgment stays with your team.",
    items: [
      {
        title: "Final wording",
        desc: "Drafts are prepared, but what goes out is yours to approve and adjust.",
      },
      {
        title: "Sending messages",
        desc: "Nothing leaves on its own. The send is an explicit human action.",
      },
      {
        title: "Sensitive decisions",
        desc: "Anything with real consequences waits for a person to decide.",
      },
      {
        title: "What gets built next",
        desc: "The handoff notes recommend; you decide whether and when to continue.",
      },
    ],
  },
  cta: {
    heading: "Start with the workflow that annoys you most.",
    body: "Describe where it starts, which tools it crosses, and where it waits or falls through. We map it first, then agree the fixed scope before anything is built.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) sprint content — hebrew-quality drafted. */
const he: OfferPageContent = {
  hero: {
    eyebrow: "היקף קבוע, מחיר קבוע",
    title: "תהליך אחד ממופה, שלוש אוטומציות בנויות",
    lead: "ספרינט לצוות קטן עם תהליך אחד שנתקע: ממפים איך התהליך באמת רץ, ממיינים מה צריך להיות אוטומטי, מה בעזרת AI ומה אנושי, ואז בונים שלוש אוטומציות ממוקדות שמורידות את החיכוך הכי כואב. בלי פלטפורמה חדשה, בלי ריטיינר, בלי תשתית לאמץ.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
    secondaryCta: { label: "לראות מה מקבלים", href: "#build" },
  },
  film: {
    sectionTitle: "הספרינט, בתנועה",
    webm: "/videos/workflow-sprint-process-he.webm",
    mp4: "/videos/workflow-sprint-process-he.mp4",
    poster: "/videos/workflow-sprint-process-he-poster.png",
    caption:
      "הספרינט בתנועה: תהליך אחד שנתקע ממופה, ממוין וחוזר עם שלוש אוטומציות עובדות — האישור נשאר אנושי.",
    filmName: "סרטון הספרינט",
  },
  who: {
    title: "זה מתאים אם אתם אומרים אחד מהמשפטים האלה",
    items: [
      {
        title: "יש תהליך שחוזר כל שבוע",
        desc: "וכל פעם מישהו עושה אותו ידנית.",
      },
      {
        title: "משימות נעלמות אחרי פגישות",
        desc: "מחליטים החלטות, ויומיים אחרי אף אחד לא אחראי על הצעד הבא.",
      },
      {
        title: "אנחנו רוצים להשתמש ב-AI",
        desc: "אבל צריכים תוצאה שעובדת, לא פרויקט מחקר.",
      },
      {
        title: "ניסינו כלי AI",
        desc: "אבל זה לא הפך לשיטת עבודה אמינה.",
      },
    ],
  },
  problems: {
    title: "מה הספרינט מבהיר",
    items: [
      {
        title: "איפה העבודה נכנסת",
        desc: "מייל, יומן, מסמכים, פגישות, טפסים, גיליונות או משימות.",
      },
      {
        title: "איפה היא נתקעת",
        desc: "העברה בין אנשים, אישור, אחראי חסר או צעד הבא לא ברור.",
      },
      {
        title: "מה הופך לאוטומטי",
        desc: "השלבים שמכונה פשוט צריכה לעשות: לקלוט, למיין, לחלץ, להזכיר.",
      },
      {
        title: "מה נשאר אנושי",
        desc: "החלטות, הודעות חיצוניות, שינויים רגישים ומקרים לא ברורים.",
      },
    ],
  },
  build: {
    title: "מה מקבלים",
    intro: "תהליך ממופה ושלוש אוטומציות שרצות עליו, בספרינט בהיקף קבוע.",
    items: [
      {
        title: "מפת תהליך",
        desc: "תהליך אחד מקצה לקצה: קלטים, שלבים, אחראים, פלטים והעברות.",
      },
      {
        title: "שלוש אוטומציות עובדות",
        desc: "שלושת השלבים עם החיכוך הגבוה ביותר, אוטומטיים או בעזרת AI, על העבודה האמיתית שלכם.",
      },
      {
        title: "גבולות אישור",
        desc: "נקודות מפורשות שבהן אדם בודק, מחליט או חותם לפני שמשהו זז.",
      },
      {
        title: "מסמך מסירה",
        desc: "מה נבנה, איך מריצים אותו, ומה שווה לבנות אחר כך.",
      },
    ],
  },
  example: {
    title: "הספרינט, כתהליך",
    intro: "תצוגה מפושטת של ההתקשרות, לא מקרה לקוח אמיתי.",
    map: {
      caption: "זרימת הספרינט",
      ariaLabel: "זרימת ספרינט מתהליך תקוע אחד לשלוש אוטומציות עובדות",
      nodes: [
        { label: "תהליך אחד שנתקע", sub: "מייל · פגישות · מסמכים" },
        { label: "ממופה מקצה לקצה" },
        { label: "ממוין", sub: "אוטומטי · בעזרת AI · אנושי" },
        { label: "שלוש אוטומציות נבנות" },
        { label: "אישור אנושי", human: true },
        { label: "התהליך רץ עם פחות חיכוך", out: true },
      ],
    },
  },
  how: {
    title: "איך זה עובד",
    intro: "ספרינט ממוקד בהיקף קבוע, בתוך ימים.",
    steps: [
      {
        title: "בוחרים תהליך אחד",
        desc: "מתמקדים בתהליך אמיתי שחשוב לצוות עכשיו.",
      },
      {
        title: "ממפים את המצב הקיים",
        desc: "עוקבים אחרי קלטים, שלבים, אחראים, העברות וכלים.",
      },
      {
        title: "ממיינים את העבודה",
        desc: "אוטומטי, בעזרת AI, אנושי, ומה שלא כדאי להפוך לאוטומטי כרגע.",
      },
      {
        title: "בונים את שלוש האוטומציות",
        desc: "קודם השלבים עם החיכוך הכי גבוה, נבנים ונבדקים על עבודה אמיתית.",
      },
      {
        title: "משאירים אישור גלוי",
        desc: "כל דבר לא ברור או רגיש מחכה לאדם.",
        human: true,
      },
    ],
  },
  pricing: {
    title: "איך הספרינט מתומחר",
    intro: "מספר אחד, שנסגר לפני שמתחילים.",
    items: [
      {
        title: "מחיר קבוע",
        desc: "המפה ושלוש האוטומציות הן חבילה אחת בהיקף קבוע. בלי מונה שעות.",
      },
      {
        title: "ימים, לא חודשים",
        desc: "הספרינט מוגדר כך שיימסר בתוך ימים, כדי שהתוצאה תגיע כשהבעיה עוד חשובה.",
      },
    ],
    note: "הסכום תלוי במורכבות התהליך ונסגר בשיחה הראשונה.",
  },
  human: {
    title: "מה נשאר אנושי",
    intro: "האוטומציות עושות את ההרכבה; שיקול הדעת נשאר אצל הצוות.",
    items: [
      {
        title: "הניסוח הסופי",
        desc: "הטיוטות מוכנות, אבל מה שיוצא שלכם לאשר ולכוון.",
      },
      {
        title: "שליחת הודעות",
        desc: "שום דבר לא יוצא לבד. השליחה היא פעולה אנושית מפורשת.",
      },
      {
        title: "החלטות רגישות",
        desc: "כל דבר עם השלכות אמיתיות מחכה להחלטה של אדם.",
      },
      {
        title: "מה נבנה אחר כך",
        desc: "מסמך המסירה ממליץ; אתם מחליטים אם ומתי להמשיך.",
      },
    ],
  },
  cta: {
    heading: "מתחילים מהתהליך שהכי מעצבן אתכם.",
    body: "ספרו איפה הוא מתחיל, בין אילו כלים הוא עובר ואיפה הוא מחכה או נופל. קודם ממפים, ואז סוגרים היקף קבוע לפני שבונים.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the AI Workflow Sprint page content for a locale. */
export const aiWorkflowSprintContent = localeAccessor(
  "aiWorkflowSprintContent",
  CONTENT,
);
