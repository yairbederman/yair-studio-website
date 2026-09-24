import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import { afterProjectSection, ladderRungCard } from "@/content/ladder";
import type { Locale } from "@/content/types";
import type { CapabilityPageContent } from "./types";

/**
 * /studio/process-optimization — one process mapped end to end, sorted into
 * automatic / AI-assisted / human, and its worst friction removed first.
 * Absorbs the retired /workflows page (approach, "the map you receive",
 * the other workflows that map well) and the former homepage evidence band.
 *
 * The scattered-to-mapped film (`film`) bakes copy from this file: the four
 * "before" lines in `example.intro` (as ledger lines) and `example.map.nodes`
 * verbatim. Re-render the film if either changes; see
 * hyperframes/scattered-to-mapped/DESIGN.md.
 */

const en: CapabilityPageContent = {
  hero: {
    title: "One process mapped end to end, then fixed",
    lead: "Work starts by mapping where a process gets stuck, then sorting every step into automatic, AI-assisted, or human, and removing the worst friction first. The map is a deliverable on its own; building is proposed only when the process is ready for it.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
    secondaryCta: {
      label: offerCard("en", "ai-workflow-sprint").cta,
      href: offerCard("en", "ai-workflow-sprint").href,
    },
  },
  film: {
    sectionTitle: "Scattered to mapped, in motion",
    webm: "/videos/scattered-to-mapped.webm",
    mp4: "/videos/scattered-to-mapped.mp4",
    poster: "/videos/scattered-to-mapped-poster.png",
    caption:
      "Scattered requests untangle into a mapped flow, with a human approval step before the work is tracked to done.",
    filmName: "scattered-to-mapped film",
  },
  does: {
    title: "What I do",
    intro:
      "Common in professional offices: client intake, deadline visibility, document review status, approval-based outbound communication, and the weekly operating signal.",
    items: [
      {
        title: "Map the process as it really runs",
        desc: "Steps, owners, inputs, handoffs, waiting points, and where work quietly falls through.",
      },
      {
        title: "Sort every step",
        desc: "Automatic, AI-assisted, human, or not worth touching yet.",
      },
      {
        title: "Remove the worst friction first",
        desc: "The one or two fixes that return the most time, built before anything else.",
      },
      {
        title: "Leave a shared view",
        desc: "What is open, what is stuck, and who decides next, visible to the whole office.",
      },
    ],
  },
  receive: {
    title: "What you receive",
    items: [
      {
        title: "Workflow map",
        desc: "The process drawn end to end: where work enters, who holds it, where it waits, and where it goes out.",
      },
      {
        title: "Sorting table",
        desc: "Every step marked automatic, AI-assisted, or human, with the reason.",
      },
      {
        title: "First-fixes list",
        desc: "The changes worth making first, in order, with what each one needs.",
      },
      {
        title: "Weekly operating signal",
        desc: "A short summary of what is stuck, what changed, and what needs attention before the next week starts.",
      },
    ],
  },
  how: {
    title: "How it runs",
    steps: [
      {
        title: "Pick one process",
        desc: "The one that costs the most time or drops the most items.",
      },
      {
        title: "Map the current path",
        desc: "We trace inputs, steps, owners, handoffs, and tools with the people who run it.",
      },
      {
        title: "Sort and choose the first fixes",
        desc: "Automatic, AI-assisted, or human; then the shortest list of changes that removes the worst friction.",
      },
      {
        title: "Decide what gets built",
        desc: "The map can stand on its own. You choose whether a fix becomes a sprint.",
        human: true,
      },
      {
        title: "Run the signal",
        desc: "A weekly view of what is stuck and what changed keeps the process honest after the fix.",
      },
    ],
  },
  example: {
    title: "The map you receive",
    // The four "before" lines are the film's ledger (baked verbatim).
    intro:
      "Before the map: requests arrive by email, chat, and calls; status lives in someone's head; follow-up depends on remembering; no shared view of what is open. After it, the flow below, with a person approving before anything goes out.",
    map: {
      caption: "Mapped workflow",
      ariaLabel: "A scattered request process, mapped as a workflow",
      nodes: [
        { label: "Incoming request", sub: "email · chat · call" },
        { label: "Captured + categorized" },
        { label: "Owner + due date assigned" },
        { label: "Draft response prepared" },
        { label: "Human approval", human: true },
        { label: "Tracked to done", out: true },
      ],
    },
  },
  human: {
    title: "What stays with you",
    items: [
      {
        title: "Final wording",
        desc: "Drafts are prepared, but the message that goes out is yours to approve and adjust.",
      },
      {
        title: "Sending messages",
        desc: "Nothing is sent on its own; a person presses send.",
      },
      {
        title: "Sensitive decisions",
        desc: "Which fix gets built, and which one first, waits for you to decide.",
      },
      {
        title: "Priorities",
        desc: "What matters most, and what can wait, stays a human call.",
      },
    ],
  },
  where: {
    title: "Where it shows up",
    intro: "Every rung starts with a map; the paid rungs build on it.",
    rungs: [
      ladderRungCard(
        "en",
        "01",
        "The written read you get after the call is the first, rough map.",
      ),
      ladderRungCard(
        "en",
        "02",
        "As a project of its own: the workflow sprint, the full map, the sorting, and three fixes built on it.",
      ),
      ladderRungCard(
        "en",
        "03",
        "Mapping continues month to month as the office's work changes.",
      ),
    ],
  },
  after: afterProjectSection(
    "en",
    "The map, the sorting table, and the fixes built on it: yours, documented, and running.",
  ),
  cta: {
    heading: "See your own process mapped like this.",
    body: "Pick one process that slows the office down. We map how it runs today before deciding what is worth building.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) content — hebrew-quality drafted. */
const he: CapabilityPageContent = {
  hero: {
    title: "תהליך אחד ממופה מקצה לקצה, ואז מתוקן",
    lead: "העבודה מתחילה במיפוי של איפה התהליך נתקע, ממשיכה במיון כל שלב לאוטומטי, בעזרת AI או אנושי, ומורידה קודם את החיכוך הכי גדול. המפה היא תוצר בפני עצמו; בנייה מוצעת רק כשהתהליך בשל לזה.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
    secondaryCta: {
      label: offerCard("he", "ai-workflow-sprint").cta,
      href: offerCard("he", "ai-workflow-sprint").href,
    },
  },
  // Hebrew scattered-to-mapped film (one composition, RTL-mirrored). Caption
  // traces to he.example (intro "שלב אישור אנושי" + node "מנוהלת עד לסגירה").
  film: {
    sectionTitle: "ממפוזר לממופה, בתנועה",
    webm: "/videos/scattered-to-mapped-he.webm",
    mp4: "/videos/scattered-to-mapped-he.mp4",
    poster: "/videos/scattered-to-mapped-he-poster.png",
    caption:
      "בקשות מפוזרות מתארגנות לתהליך ממופה, עם שלב אישור אנושי לפני שהעבודה מנוהלת עד לסגירה.",
    filmName: "סרטון תהליך ממופה",
  },
  does: {
    title: "מה אני עושה",
    intro:
      "נפוץ במשרדים מקצועיים: קליטת לקוח, נראות מועדים, סטטוס סבב מסמכים, תקשורת יוצאת מבוססת אישור, ואיתות תפעולי שבועי.",
    items: [
      {
        title: "ממפה את התהליך כמו שהוא באמת רץ",
        desc: "שלבים, אחראים, קלט, העברות, נקודות המתנה, ואיפה עבודה נופלת בשקט.",
      },
      {
        title: "ממיין כל שלב",
        desc: "אוטומטי, בעזרת AI, אנושי, או לא שווה לגעת בו כרגע.",
      },
      {
        title: "מוריד קודם את החיכוך הכי גדול",
        desc: "התיקון או שני התיקונים שמחזירים הכי הרבה זמן, נבנים לפני כל דבר אחר.",
      },
      {
        title: "משאיר תמונה משותפת",
        desc: "מה פתוח, מה תקוע ומי מחליט הלאה, גלוי לכל המשרד.",
      },
    ],
  },
  receive: {
    title: "מה מקבלים",
    items: [
      {
        title: "מפת תהליך",
        desc: "התהליך משורטט מקצה לקצה: איפה העבודה נכנסת, מי מחזיק אותה, איפה היא מחכה ולאן היא יוצאת.",
      },
      {
        title: "טבלת מיון",
        desc: "כל שלב מסומן אוטומטי, בעזרת AI או אנושי, עם הסיבה.",
      },
      {
        title: "רשימת תיקונים ראשונים",
        desc: "השינויים ששווה לעשות קודם, לפי סדר, עם מה שכל אחד מהם צריך.",
      },
      {
        title: "איתות תפעולי שבועי",
        desc: "סיכום קצר של מה תקוע, מה השתנה ומה דורש טיפול לפני שהשבוע הבא מתחיל.",
      },
    ],
  },
  how: {
    title: "איך זה רץ",
    steps: [
      {
        title: "בוחרים תהליך אחד",
        desc: "זה שעולה הכי הרבה זמן או מפיל הכי הרבה דברים.",
      },
      {
        title: "ממפים את המסלול הקיים",
        desc: "עוקבים אחרי קלט, שלבים, אחראים, העברות וכלים, יחד עם האנשים שמריצים אותו.",
      },
      {
        title: "ממיינים ובוחרים תיקונים ראשונים",
        desc: "אוטומטי, בעזרת AI או אנושי; ואז הרשימה הכי קצרה של שינויים שמורידה את החיכוך הכי גדול.",
      },
      {
        title: "מחליטים מה נבנה",
        desc: "המפה יכולה לעמוד בפני עצמה. אתם בוחרים אם תיקון הופך לספרינט.",
        human: true,
      },
      {
        title: "מריצים את האיתות",
        desc: "תמונה שבועית של מה תקוע ומה השתנה שומרת על התהליך תקין גם אחרי התיקון.",
      },
    ],
  },
  example: {
    title: "המפה שמקבלים",
    // ארבע שורות ה"לפני" הן הלדג'ר של הסרטון (נאפות מילה במילה).
    intro:
      "לפני המפה: בקשות מגיעות במייל, בצ'אט ובטלפון; הסטטוס נמצא בראש של מישהו; המעקב תלוי בזיכרון; אין תמונה משותפת של מה פתוח. אחריה, התהליך שלמטה, עם אדם שמאשר לפני שמשהו יוצא.",
    map: {
      caption: "תהליך ממופה",
      ariaLabel: "תהליך בקשות מפוזר, ממופה כתהליך עבודה",
      nodes: [
        { label: "בקשה נכנסת", sub: "מייל · צ'אט · טלפון" },
        { label: "נקלטת ומסווגת" },
        { label: "משויכת לאחראי ולתאריך יעד" },
        { label: "טיוטת תשובה מוכנה" },
        { label: "אישור אנושי", human: true },
        { label: "מנוהלת עד לסגירה", out: true },
      ],
    },
  },
  human: {
    title: "מה נשאר אצלכם",
    items: [
      {
        title: "הניסוח הסופי",
        desc: "הטיוטות מוכנות, אבל ההודעה שיוצאת היא שלכם לאשר ולכוון.",
      },
      {
        title: "שליחת הודעות",
        desc: "שום דבר לא נשלח לבד; אדם לוחץ על שלח.",
      },
      {
        title: "החלטות רגישות",
        desc: "איזה תיקון נבנה, ואיזה קודם, מחכה להחלטה שלכם.",
      },
      {
        title: "סדרי עדיפויות",
        desc: "מה הכי חשוב, ומה יכול לחכות, נשאר שיקול דעת אנושי.",
      },
    ],
  },
  where: {
    title: "איפה זה מופיע",
    intro: "כל שלב מתחיל במפה; השלבים בתשלום בונים עליה.",
    rungs: [
      ladderRungCard(
        "he",
        "01",
        "הסיכום הכתוב שמקבלים אחרי השיחה הוא הטיוטה הראשונה של המפה.",
      ),
      ladderRungCard(
        "he",
        "02",
        "כפרויקט בפני עצמו: ספרינט התהליך, המפה המלאה, המיון ושלושה תיקונים שנבנים עליה.",
      ),
      ladderRungCard(
        "he",
        "03",
        "המיפוי ממשיך חודש בחודשו, ככל שהעבודה של המשרד משתנה.",
      ),
    ],
  },
  after: afterProjectSection(
    "he",
    "המפה, טבלת המיון והתיקונים שנבנו עליה: שלכם, מתועדים ורצים.",
  ),
  cta: {
    heading: "ככה ייראה גם התהליך שלכם, ממופה.",
    body: "בוחרים תהליך אחד שמאט את המשרד. ממפים איך הוא רץ היום, לפני שמחליטים מה שווה לבנות.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, CapabilityPageContent>> = { en, he };

/** Resolve the process-optimization capability page content for a locale. */
export const processOptimizationContent = localeAccessor(
  "processOptimizationContent",
  CONTENT,
);
