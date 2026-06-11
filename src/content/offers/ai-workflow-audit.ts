import { AUDIT_OFFER } from "@/lib/offers";
import { localeAccessor } from "@/content/types";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/**
 * AI Workflow Audit page content — typed and locale-keyed.
 * The "How it works" intro reuses AUDIT_OFFER.engagementNote so the engagement
 * shape lives in exactly one place (src/lib/offers.ts).
 */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Start here",
    title: "AI Workflow Audit",
    lead: "Before automating anything, map the real process. A focused review of one workflow: how it actually runs, where it stalls, and what's worth building.",
    ctaLabel: "Map one workflow",
    ctaHref: "/contact",
  },
  film: {
    sectionTitle: "From a messy workflow to a first system",
    webm: "/videos/ai-workflow-audit-process.webm",
    mp4: "/videos/ai-workflow-audit-process.mp4",
    poster: "/videos/ai-workflow-audit-process-poster.png",
    caption:
      "A messy workflow, separated into what to automate, what to assist, and what stays human: your first useful system.",
    filmName: "audit process film",
  },
  who: {
    title: "Who it's for",
    intro:
      "The audit uses an engineering lens: trace the workflow, identify failure points, separate automation candidates from judgment calls, and define what would make the system trustworthy.",
    items: [
      {
        title: "Operators & founders",
        desc: "You run a growing service business and lose time to status-chasing, approvals, and handoffs.",
      },
      {
        title: "Teams with scattered tools",
        desc: "Work lives across email, docs, spreadsheets, and chat, and no one has a single clear view.",
      },
      {
        title: "Anyone weighing AI",
        desc: "You want to use AI in the business but need to know where it actually pays off first.",
      },
    ],
  },
  problems: {
    title: "Problems it solves",
    items: [
      {
        title: "Automating the wrong thing",
        desc: "Building tools before the process is understood bakes in the existing mess.",
      },
      {
        title: "Unclear ownership",
        desc: "No one is sure who owns each step, so work waits or gets duplicated.",
      },
      {
        title: "Invisible bottlenecks",
        desc: "The real delays are hard to see until the workflow is mapped end to end.",
      },
      {
        title: "Experiments that don't stick",
        desc: "Prompts and demos look useful but never become a reliable, owned workflow.",
      },
    ],
  },
  build: {
    title: "What you get",
    intro:
      "A clear picture of one workflow and a practical plan. The build itself is a separate, later decision.",
    items: [
      {
        title: "A workflow map",
        desc: "One process drawn end to end: steps, owners, inputs, outputs, and handoffs.",
      },
      {
        title: "Bottleneck & risk notes",
        desc: "Where work stalls, where errors enter, and where decisions wait.",
      },
      {
        title: "Automation candidates",
        desc: "A shortlist of steps worth automating, and the ones that should stay human.",
      },
      {
        title: "An implementation roadmap",
        desc: "A sequenced plan for what to build first, with effort and impact noted.",
      },
    ],
  },
  example: {
    title: "What a workflow map looks like",
    intro:
      "A simplified example of the artifact you receive, not a client case study.",
    map: {
      caption: "Example workflow map",
      ariaLabel: "Example of a delivered workflow map",
      nodes: [
        { label: "Current process", sub: "as it runs today" },
        { label: "Bottlenecks marked" },
        { label: "Automation candidates" },
        { label: "Human review", human: true },
        { label: "Sequenced roadmap", out: true },
      ],
    },
  },
  how: {
    title: "How it works",
    intro: AUDIT_OFFER.engagementNote,
    steps: [
      {
        title: "Scope one workflow",
        desc: "We pick a single, real process that matters to the business now.",
      },
      {
        title: "Map it end to end",
        desc: "We document steps, owners, inputs, outputs, and where work gets stuck.",
      },
      {
        title: "Mark automation candidates",
        desc: "We separate what's worth automating from what should stay human.",
      },
      {
        title: "Review it together",
        desc: "We walk the map and roadmap with you before any build decision.",
        human: true,
      },
      {
        title: "Hand off a roadmap",
        desc: "You get a clear, sequenced plan you can act on, with or without us.",
      },
    ],
  },
  human: {
    title: "What stays human",
    intro: "The audit informs decisions; people make them.",
    items: [
      {
        title: "The decision to build",
        desc: "The audit informs the call; you decide what gets automated.",
      },
      {
        title: "Process judgment",
        desc: "Owners confirm how the work really runs, so the map reflects reality.",
      },
      {
        title: "Priorities",
        desc: "What matters most is your call; the roadmap follows it.",
      },
    ],
  },
  cta: {
    heading: "Map the workflow before you build.",
    body: "The audit delivers the map, the bottlenecks, and a sequenced roadmap you can act on.",
    ctaLabel: "Map one workflow",
    ctaHref: "/contact",
  },
};

/** Hebrew (RTL) audit-page content — hebrew-quality drafted. The "How it
    works" intro translates AUDIT_OFFER.engagementNote (EN-only by definition). */
const he: OfferPageContent = {
  hero: {
    eyebrow: "מתחילים כאן",
    title: "אבחון תהליכי AI",
    lead: "לפני שבונים אוטומציה, ממפים את התהליך האמיתי. סקירה ממוקדת של תהליך אחד: איך הוא באמת רץ, איפה הוא נתקע, ומה שווה לבנות.",
    ctaLabel: "למפות תהליך אחד",
    ctaHref: "/he/contact",
  },
  film: {
    sectionTitle: "מתהליך מבולגן למערכת ראשונה",
    webm: "/videos/ai-workflow-audit-process.webm",
    mp4: "/videos/ai-workflow-audit-process.mp4",
    poster: "/videos/ai-workflow-audit-process-poster.png",
    caption:
      "תהליך מבולגן, מופרד למה שהופך לאוטומטי, מה נעזר ב-AI ומה נשאר אנושי: המערכת השימושית הראשונה שלכם.",
    filmName: "סרטון תהליך האבחון",
  },
  who: {
    title: "למי זה מתאים",
    intro:
      "האבחון משתמש בעדשה הנדסית: עוקבים אחרי התהליך, מזהים נקודות כשל, מפרידים מועמדים לאוטומציה משיקול דעת, ומגדירים מה יהפוך את המערכת לאמינה.",
    items: [
      {
        title: "מנהלים ומייסדים",
        desc: "אתם מנהלים עסק שירותים צומח ומאבדים זמן על רדיפה אחרי סטטוס, אישורים והעברות.",
      },
      {
        title: "צוותים עם כלים מפוזרים",
        desc: "העבודה חיה בין מייל, מסמכים, גיליונות וצ'אט, ולאף אחד אין תמונה אחת ברורה.",
      },
      {
        title: "מי ששוקל AI",
        desc: "רוצים להכניס AI לעסק, אבל צריכים לדעת קודם איפה הוא באמת משתלם.",
      },
    ],
  },
  problems: {
    title: "אילו בעיות זה פותר",
    items: [
      {
        title: "אוטומציה של הדבר הלא נכון",
        desc: "בנייה של כלים לפני שמבינים את התהליך מקבעת את הבלגן הקיים.",
      },
      {
        title: "בעלות לא ברורה",
        desc: "אף אחד לא בטוח מי אחראי על כל שלב, אז עבודה מחכה או מוכפלת.",
      },
      {
        title: "צווארי בקבוק סמויים",
        desc: "העיכובים האמיתיים קשים לזיהוי עד שהתהליך ממופה מקצה לקצה.",
      },
      {
        title: "ניסויים שלא מחזיקים",
        desc: "פרומפטים ודמואים נראים שימושיים, אבל לא הופכים לתהליך אמין עם בעלים.",
      },
    ],
  },
  build: {
    title: "מה מקבלים",
    intro:
      "תמונה ברורה של תהליך אחד ותוכנית מעשית. הבנייה עצמה היא החלטה נפרדת, בהמשך.",
    items: [
      {
        title: "מפת תהליך",
        desc: "תהליך אחד משורטט מקצה לקצה: שלבים, אחראים, קלט, פלט והעברות.",
      },
      {
        title: "הערות על צווארי בקבוק וסיכונים",
        desc: "איפה עבודה נעצרת, איפה נכנסות טעויות, ואיפה החלטות מחכות.",
      },
      {
        title: "מועמדים לאוטומציה",
        desc: "רשימה ממוקדת של שלבים שכדאי להפוך לאוטומטיים, ושל אלה שצריכים להישאר אנושיים.",
      },
      {
        title: "מפת דרכים ליישום",
        desc: "תוכנית מסודרת לפי שלבים: מה בונים קודם, עם הערכת מאמץ והשפעה.",
      },
    ],
  },
  example: {
    title: "איך נראית מפת תהליך",
    intro: "דוגמה מפושטת לתוצר שמקבלים, לא מקרה לקוח אמיתי.",
    map: {
      caption: "דוגמה למפת תהליך",
      ariaLabel: "דוגמה למפת תהליך כפי שהיא נמסרת",
      nodes: [
        { label: "התהליך הנוכחי", sub: "כמו שהוא רץ היום" },
        { label: "צווארי בקבוק מסומנים" },
        { label: "מועמדים לאוטומציה" },
        { label: "בדיקה אנושית", human: true },
        { label: "מפת דרכים מסודרת", out: true },
      ],
    },
  },
  how: {
    title: "איך זה עובד",
    intro: "סקירה ממוקדת בהיקף קבוע, בתוך ימים.",
    steps: [
      {
        title: "תוחמים תהליך אחד",
        desc: "בוחרים תהליך אמיתי אחד שחשוב לעסק עכשיו.",
      },
      {
        title: "ממפים מקצה לקצה",
        desc: "מתעדים שלבים, אחראים, קלט, פלט, ואיפה העבודה נתקעת.",
      },
      {
        title: "מסמנים מועמדים לאוטומציה",
        desc: "מפרידים בין מה ששווה אוטומציה למה שצריך להישאר אנושי.",
      },
      {
        title: "עוברים על זה יחד",
        desc: "הולכים יחד על המפה ועל מפת הדרכים, לפני כל החלטת בנייה.",
        human: true,
      },
      {
        title: "מוסרים מפת דרכים",
        desc: "מקבלים תוכנית ברורה ומסודרת שאפשר לפעול לפיה, איתנו או בלעדינו.",
      },
    ],
  },
  human: {
    title: "מה נשאר אנושי",
    intro: "האבחון מזין החלטות; אנשים מקבלים אותן.",
    items: [
      {
        title: "ההחלטה לבנות",
        desc: "האבחון מזין את ההחלטה; אתם מחליטים מה הופך לאוטומטי.",
      },
      {
        title: "שיקול דעת על התהליך",
        desc: "האחראים מאשרים איך העבודה באמת רצה, כך שהמפה משקפת מציאות.",
      },
      {
        title: "סדרי עדיפויות",
        desc: "מה הכי חשוב — ההחלטה שלכם; מפת הדרכים הולכת לפיה.",
      },
    ],
  },
  cta: {
    heading: "ממפים את התהליך לפני שבונים.",
    body: "האבחון מוסר את המפה, את צווארי הבקבוק, ומפת דרכים מסודרת שאפשר לפעול לפיה.",
    ctaLabel: "למפות תהליך אחד",
    ctaHref: "/he/contact",
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the AI Workflow Audit page content for a locale. */
export const aiWorkflowAuditContent = localeAccessor(
  "aiWorkflowAuditContent",
  CONTENT,
);
