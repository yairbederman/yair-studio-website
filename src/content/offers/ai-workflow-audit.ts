import { AUDIT_OFFER } from "@/lib/offers";
import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/** AI Workflow Audit page content, typed and locale-keyed. */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Start before building",
    title: "AI workflow audit before automation",
    lead: "A focused review of one business process: how work really moves, where it gets stuck, what can be automated, and what has to stay human.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
    secondaryCta: { label: "See what you get", href: "#build" },
  },
  film: {
    sectionTitle: "From process noise to buildable map",
    webm: "/videos/ai-workflow-audit-process.webm",
    mp4: "/videos/ai-workflow-audit-process.mp4",
    poster: "/videos/ai-workflow-audit-process-poster.png",
    caption:
      "A workflow is separated into what can run automatically, what can be AI-assisted, and what needs a person.",
    filmName: "audit process film",
  },
  who: {
    title: "This fits if you are saying one of these things",
    items: [
      {
        title: "We have too many emails and messages",
        desc: "It is hard to know what is urgent.",
      },
      {
        title: "Tasks disappear after meetings",
        desc: "Decisions are made, but two days later no one owns the next action.",
      },
      {
        title: "We want to use AI",
        desc: "But we do not know where to start.",
      },
      {
        title: "One process repeats every week",
        desc: "And someone still does it manually every time.",
      },
      {
        title: "We tried AI tools",
        desc: "But they did not become a reliable way of working.",
      },
    ],
  },
  problems: {
    title: "What the audit clarifies",
    items: [
      {
        title: "Where work enters",
        desc: "Email, calendar, Drive, meetings, clients, forms, spreadsheets, or task lists.",
      },
      {
        title: "Where it gets stuck",
        desc: "The handoff, approval, missing owner, or unclear next action.",
      },
      {
        title: "What AI should assist",
        desc: "Summaries, classification, extraction, triage, drafts, or search.",
      },
      {
        title: "What stays human",
        desc: "Decisions, external messages, sensitive changes, and unclear cases.",
      },
    ],
  },
  build: {
    title: "What you get",
    intro:
      "A clear picture of one workflow and a practical roadmap. The build itself is a separate decision.",
    items: [
      {
        title: "Workflow map",
        desc: "One process drawn end to end: inputs, steps, owners, outputs, and handoffs.",
      },
      {
        title: "Bottleneck notes",
        desc: "Where work waits, where errors enter, and where decisions get delayed.",
      },
      {
        title: "Automation buckets",
        desc: "What can be automatic, what should be AI-assisted, and what needs a person.",
      },
      {
        title: "Build roadmap",
        desc: "What to build first, what to leave alone, and what risk to manage.",
      },
    ],
  },
  example: {
    title: "The process diagram",
    intro:
      "A simplified version of the map you receive, not a client case study.",
    map: {
      caption: "Audit flow",
      ariaLabel: "Audit flow from business inputs to first working workflow",
      nodes: [
        { label: "Email / calendar / Drive / meetings / clients" },
        { label: "Mapping" },
        { label: "Automatic" },
        { label: "AI-assisted" },
        { label: "Human", human: true },
        { label: "Roadmap" },
        { label: "First working workflow", out: true },
      ],
    },
  },
  how: {
    title: "How it works",
    intro: AUDIT_OFFER.engagementNote,
    steps: [
      {
        title: "Pick one process",
        desc: "We choose a real workflow that matters to the business now.",
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
        title: "Define the first build",
        desc: "The roadmap names the smallest useful workflow to build first.",
      },
      {
        title: "Keep approval visible",
        desc: "Anything unclear or sensitive waits for a person.",
        human: true,
      },
    ],
  },
  human: {
    title: "What you do not get",
    intro:
      "This is a sharp map of what to build first, not a promise that AI should touch everything.",
    items: [
      {
        title: "Not a full development project",
        desc: "The audit ends with a map and roadmap, not a finished production system.",
      },
      {
        title: "Not a new system rollout",
        desc: "It does not replace your CRM, task tool, inbox, or document system.",
      },
      {
        title: "Not an AI-solves-everything promise",
        desc: "Some steps should stay manual, reviewed, or unchanged.",
      },
      {
        title: "A clear first-build recommendation",
        desc: "You do get a focused view of what is worth building next.",
      },
    ],
  },
  cta: {
    heading: "Start with the workflow before the tool.",
    body: "Send one stuck process. We map whether a focused audit is enough, and only scope a pilot if the workflow is ready to build.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

const he: OfferPageContent = {
  hero: {
    eyebrow: "לפני שבונים",
    title: "אבחון תהליך AI לפני שבונים אוטומציה",
    lead: "סקירה ממוקדת של תהליך אחד בעסק: איך העבודה באמת זזה, איפה היא נתקעת, מה אפשר להפוך לאוטומטי, ומה חייב להישאר אנושי.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
    secondaryCta: { label: "לראות מה מקבלים", href: "#build" },
  },
  film: {
    sectionTitle: "מרעש תפעולי למפת דרכים",
    webm: "/videos/ai-workflow-audit-process.webm",
    mp4: "/videos/ai-workflow-audit-process.mp4",
    poster: "/videos/ai-workflow-audit-process-poster.png",
    caption:
      "תהליך אחד מופרד למה שאפשר להפוך לאוטומטי, מה שצריך עזרת AI, ומה שחייב להישאר אנושי.",
    filmName: "סרטון תהליך האבחון",
  },
  who: {
    title: "זה מתאים אם אתם אומרים אחד מהמשפטים האלה",
    items: [
      {
        title: "יש לנו הרבה מיילים והודעות",
        desc: "אבל קשה לדעת מה דחוף.",
      },
      {
        title: "משימות נוצרות בפגישות",
        desc: "ונעלמות אחרי יומיים.",
      },
      {
        title: "אנחנו רוצים להשתמש ב-AI",
        desc: "אבל לא יודעים מאיפה להתחיל.",
      },
      {
        title: "יש תהליך שחוזר על עצמו",
        desc: "וכל פעם מישהו עושה אותו ידנית.",
      },
      {
        title: "ניסינו כלי AI",
        desc: "אבל זה לא הפך לשיטת עבודה.",
      },
    ],
  },
  problems: {
    title: "מה האבחון מבהיר",
    items: [
      {
        title: "איפה העבודה נכנסת",
        desc: "מיילים, יומן, Drive, פגישות, לקוחות, טפסים, גיליונות או משימות.",
      },
      {
        title: "איפה היא נתקעת",
        desc: "העברה בין אנשים, אישור, אחראי חסר או צעד הבא לא ברור.",
      },
      {
        title: "איפה AI יכול לעזור",
        desc: "סיכום, סיווג, חילוץ, מיון, טיוטות או חיפוש.",
      },
      {
        title: "מה נשאר אנושי",
        desc: "החלטות, הודעות חיצוניות, שינויים רגישים ומקרים לא ברורים.",
      },
    ],
  },
  build: {
    title: "מה מקבלים",
    intro:
      "תמונה ברורה של תהליך אחד ומפת דרכים מעשית. הבנייה עצמה היא החלטה נפרדת.",
    items: [
      {
        title: "מפת תהליך",
        desc: "תהליך אחד מקצה לקצה: קלטים, שלבים, אחראים, פלטים והעברות.",
      },
      {
        title: "צווארי בקבוק וסיכונים",
        desc: "איפה עבודה מחכה, איפה נכנסות טעויות, ואיפה החלטות מתעכבות.",
      },
      {
        title: "חלוקה לסוגי עבודה",
        desc: "מה אוטומטי, מה נעשה בעזרת AI, ומה דורש אדם.",
      },
      {
        title: "מפת דרכים לבנייה",
        desc: "מה לבנות קודם, מה להשאיר בצד, ואיזה סיכון לנהל.",
      },
    ],
  },
  example: {
    title: "תרשים התהליך",
    intro: "דוגמה מפושטת לתוצר שמקבלים, לא מקרה לקוח אמיתי.",
    map: {
      caption: "זרימת האבחון",
      ariaLabel: "זרימת אבחון מתשומות עסקיות לתהליך עבודה ראשון שעובד",
      nodes: [
        { label: "מיילים / יומן / Drive / פגישות / לקוחות" },
        { label: "מיפוי" },
        { label: "אוטומטי" },
        { label: "בעזרת AI" },
        { label: "אנושי", human: true },
        { label: "מפת דרכים" },
        { label: "תהליך עבודה ראשון שעובד", out: true },
      ],
    },
  },
  how: {
    title: "איך זה עובד",
    intro: "סקירה ממוקדת בהיקף קבוע, בתוך ימים.",
    steps: [
      {
        title: "בוחרים תהליך אחד",
        desc: "מתמקדים בתהליך אמיתי אחד שחשוב לעסק עכשיו.",
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
        title: "מגדירים את הבנייה הראשונה",
        desc: "מפת הדרכים מראה מה תהליך העבודה הקטן והשימושי שכדאי לבנות קודם.",
      },
      {
        title: "משאירים אישור גלוי",
        desc: "כל דבר לא ברור או רגיש מחכה לאדם.",
        human: true,
      },
    ],
  },
  human: {
    title: "מה לא מקבלים",
    intro:
      "זה מיפוי חד של מה כדאי לבנות קודם, לא הבטחה ש-AI צריך לגעת בהכול.",
    items: [
      {
        title: "זה לא פרויקט פיתוח מלא",
        desc: "האבחון מסתיים במפה ומפת דרכים, לא במערכת פעילה מלאה.",
      },
      {
        title: "זה לא הטמעה של מערכת חדשה",
        desc: "לא מחליפים CRM, כלי משימות, תיבת מייל או מערכת מסמכים.",
      },
      {
        title: "זה לא הבטחה ש-AI יפתור הכול",
        desc: "יש שלבים שצריכים להישאר ידניים, בבדיקה או בלי שינוי.",
      },
      {
        title: "זה כן מראה מה כדאי לבנות קודם",
        desc: "מקבלים מיפוי חד שמראה מה תהליך העבודה הראשון שכדאי לבנות.",
      },
    ],
  },
  cta: {
    heading: "מתחילים בתהליך, לפני הכלי.",
    body: "שלחו תהליך אחד שנתקע. נמפה אם אבחון ממוקד מספיק, ונגדיר פיילוט רק אם התהליך בשל לבנייה.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the AI Workflow Audit page content for a locale. */
export const aiWorkflowAuditContent = localeAccessor(
  "aiWorkflowAuditContent",
  CONTENT,
);
