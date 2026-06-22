/**
 * Homepage content model — typed and locale-keyed.
 *
 * Externalizes the copy for the five homepage sections (Hero, Problems, Method,
 * Evidence, Final CTA) so localized copy is DATA, not hardcoded JSX. The home
 * components consume this via `homeContent(locale)`; the EN homepage uses "en"
 * and the Hebrew homepage (Phase 5) uses "he".
 *
 * CTA destinations live here too (label + href), so per-locale CTAs resolve
 * without branching in components: the Hero primary and Final CTA point at
 * `/contact` in EN and `/he/contact` in HE (the full Hebrew mirror exists);
 * the Hero secondary stays the in-page `#how-i-work` anchor in both.
 *
 * OFFERS are NOT duplicated here — they stay canonical in `src/lib/offers.ts`.
 * If localized offer copy is ever needed, key it off the stable offer `key`s;
 * never copy routes or fork the offer list.
 */

import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { Locale, Cta, SpineNode } from "@/content/types";

// Re-export the shared primitives (now defined once in src/content/types.ts)
// for this module's existing consumers.
export type { Locale, Cta, SpineNode } from "@/content/types";

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    /** Decorative hero motif (aria-hidden, hidden on mobile). */
    schematic: { caption: string; nodes: readonly SpineNode[] };
  };
  problems: {
    title: string;
    intro: string;
    cards: readonly { title: string; kicker: string; body: string }[];
    closing: string;
  };
  method: {
    title: string;
    intro?: string;
    steps: readonly { title: string; desc: string; human?: boolean }[];
  };
  safety: {
    title: string;
    items: readonly string[];
  };
  /** Offers band — section copy only; the cards stay canonical in
      src/lib/offers.ts (+ localized strings in src/content/offer-cards.ts). */
  offers: {
    title: string;
    intro: string;
  };
  /**
   * Evidence — an illustrative before/after, shown structurally via the workflow
   * itself. NO metrics, percentages, client names, or implied results: the
   * improvement is the mapping, not a number. (Component built in Phase 4.)
   */
  evidence: {
    title: string;
    intro: string;
    /** Caption + accessible name for the scattered-to-mapped process film. */
    filmCaption: string;
    filmName: string;
    before: { caption: string; items: readonly string[] };
    mapped: { caption: string; ariaLabel: string; nodes: readonly SpineNode[] };
  };
  finalCta: {
    title: string;
    body: string;
    cta: Cta;
    /** Optional second channel (e.g. WhatsApp) — rendered as a ghost button. */
    secondaryCta?: Cta;
  };
};

const en: HomeContent = {
  hero: {
    eyebrow: "AI workflow systems",
    title: "Small AI systems for the real work of the business",
    lead: "Owner-led service businesses and professional offices often run the day through email, calendar, documents, meetings, and follow-up. I turn one stuck workflow into a clear map or a small AI-assisted system, without replacing every tool or removing human approval.",
    primaryCta: shellContent("en").workflowCta,
    secondaryCta: { label: "See services", href: "/offers" },
    schematic: {
      caption: "workflow → next action",
      nodes: [
        { label: "scattered inputs", sub: "tasks · email · docs · context" },
        { label: "mapped workflow" },
        { label: "one system", sub: "dashboards · automations · assistants" },
        { label: "human approval", human: true },
        { label: "clear next action", out: true },
      ],
    },
  },
  problems: {
    title: "Where we can start",
    intro:
      "We start where work already enters, waits, gets handed off, or disappears. Sometimes the answer is AI. Sometimes it is a clearer workflow, a dashboard, a checklist, or a better approval step.",
    cards: [
      {
        title: "Command center",
        kicker: "See what needs attention",
        body: "A daily view of meetings, urgent emails, open tasks, waiting clients, deadlines, and approval points.",
      },
      {
        title: "Email management",
        kicker: "Turn inbox noise into decisions",
        body: "Sort incoming messages, identify urgency, group related context, draft responses, and track what still needs a reply.",
      },
      {
        title: "Task management",
        kicker: "Make ownership visible",
        body: "Turn meetings, emails, and notes into owners, due dates, reminders, and next actions people can actually follow.",
      },
      {
        title: "Workflow management",
        kicker: "Fix the path, not just the task",
        body: "Map the process end to end: inputs, handoffs, waiting points, approval steps, risks, and what should or should not be automated.",
      },
    ],
    closing:
      "The goal is not to automate everything. The goal is to understand the work clearly enough to choose the next useful fix.",
  },
  method: {
    title: "What happens in the first week",
    intro:
      "The first week starts with mapping the workflow. From there, we choose the right first deliverable: a focused audit or a narrow pilot.",
    steps: [
      {
        title: shellContent("en").workflowCta.label,
        desc: "A few lines are enough: where the work starts, which tools it crosses, and where it waits or falls through.",
      },
      {
        title: "Map the current workflow",
        desc: "We document the steps, owners, inputs, handoffs, and approval points before recommending automation.",
      },
      {
        title: "Choose the right first deliverable",
        desc: "That may be a focused audit and workflow map, or a narrow pilot when the process is ready to build.",
      },
      {
        title: "Scope the pilot, if it is ready",
        desc: "If the process is ready, we define the pilot's inputs, outputs, and approval boundaries before building.",
        human: true,
      },
    ],
  },
  safety: {
    title: "AI with clear boundaries",
    items: [
      "Start read-only when possible",
      "No external messages are sent without approval",
      "No data is deleted or changed without explicit approval",
      "Unclear tasks move to human review",
      "The system supports decisions; it does not replace them",
    ],
  },
  offers: {
    title: "What I build",
    intro:
      "Small operational systems around the places work already happens: morning reports, follow-up, meetings, documents, and daily command centers.",
  },
  evidence: {
    title: "What “mapped” looks like",
    intro:
      "An illustration of the approach, not a client case study. The improvement here is structural: scattered, manual work becomes a mapped flow with a human approval step.",
    filmCaption:
      "Scattered requests untangle into a mapped flow, with a human approval step before the work is tracked to done.",
    filmName: "scattered-to-mapped film",
    before: {
      caption: "Before",
      items: [
        "Requests arrive by email, chat, and calls",
        "Status lives in someone's head",
        "Follow-up depends on remembering",
        "No shared view of what is open",
      ],
    },
    mapped: {
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
  finalCta: {
    title: "Start with one stuck workflow.",
    body: "Send the workflow that keeps slipping between email, calendar, documents, meetings, and follow-up. We map it first, then decide whether an audit or a narrow pilot makes sense.",
    cta: shellContent("en").workflowCta,
    secondaryCta: shellContent("en").whatsappCta,
  },
};

/**
 * Hebrew (RTL) homepage content. Drafted with the hebrew-quality protocol
 * (think in English, translate to idiomatic Hebrew; scan for fabrications,
 * AI patterns, grammar, register). The Hero primary and Final CTA point at
 * /he/contact (the full Hebrew mirror exists); the Hero secondary points to
 * the localized services index.
 */
const he: HomeContent = {
  hero: {
    eyebrow: "מערכות AI לתפעול יומיומי",
    title: "מערכות AI קטנות לעבודה האמיתית של העסק",
    lead: "עסקי שירותים שמנוהלים בידי הבעלים ומשרדים מקצועיים מריצים את היום דרך מייל, יומן, מסמכים, פגישות ומעקב. אני הופך תהליך אחד שנתקע למפה ברורה או למערכת קטנה בסיוע AI, בלי להחליף כל כלי ובלי לוותר על אישור אנושי.",
    primaryCta: shellContent("he").workflowCta,
    secondaryCta: { label: "לראות פתרונות", href: "/he/offers" },
    schematic: {
      caption: "כלים קיימים ← עבודה ברורה",
      nodes: [
        { label: "מיילים ויומן", sub: "מה חדש ומה דחוף" },
        { label: "מסמכים ופגישות", sub: "סיכום, החלטות ומשימות" },
        { label: "לקוחות ולידים", sub: "מעקב ותזכורות" },
        { label: "אישור אנושי", human: true },
        { label: "צעד הבא ברור", out: true },
      ],
    },
  },
  problems: {
    title: "מאיפה אפשר להתחיל",
    intro:
      "מתחילים במקומות שבהם העבודה כבר נכנסת, מחכה, עוברת הלאה או נעלמת. לפעמים הפתרון הוא AI. לפעמים זו מפה ברורה יותר של התהליך, דשבורד, צ׳קליסט או נקודת אישור טובה יותר.",
    cards: [
      {
        title: "Command Center",
        kicker: "לראות מה דורש תשומת לב",
        body: "תמונת מצב יומית של פגישות, מיילים דחופים, משימות פתוחות, לקוחות שמחכים, דדליין ונקודות אישור.",
      },
      {
        title: "ניהול מיילים",
        kicker: "להפוך רעש להחלטות",
        body: "למיין הודעות נכנסות, לזהות דחיפות, לחבר הקשר רלוונטי, להכין טיוטות תשובה ולעקוב אחרי מה שעדיין מחכה למענה.",
      },
      {
        title: "ניהול משימות",
        kicker: "להפוך אחריות לגלויה",
        body: "להפוך פגישות, מיילים וסיכומים לאחראים, תאריכי יעד, תזכורות וצעד הבא שאפשר לעקוב אחריו.",
      },
      {
        title: "ניהול תהליכים",
        kicker: "לתקן את הדרך, לא רק את המשימה",
        body: "למפות את התהליך מקצה לקצה: קלטים, העברות בין אנשים, נקודות המתנה, שלבי אישור, סיכונים ומה כן או לא כדאי להפוך לאוטומטי.",
      },
    ],
    closing:
      "המטרה היא לא להפוך הכול לאוטומטי. המטרה היא להבין את העבודה מספיק טוב כדי לבחור את התיקון הראשון שבאמת יעזור.",
  },
  method: {
    title: "מה קורה בשבוע הראשון",
    intro:
      "השבוע הראשון מתחיל במיפוי התהליך. משם בוחרים את התוצר הראשון הנכון: אבחון ממוקד או פיילוט צר.",
    steps: [
      {
        title: shellContent("he").workflowCta.label,
        desc: "מספיקות כמה שורות: איפה העבודה מתחילה, בין אילו כלים היא עוברת, ואיפה היא מחכה או נופלת.",
      },
      {
        title: "ממפים את התהליך הקיים",
        desc: "מתעדים שלבים, אחראים, קלט, העברות ונקודות אישור לפני שממליצים על אוטומציה.",
      },
      {
        title: "בוחרים את התוצר הראשון הנכון",
        desc: "זה יכול להיות אבחון ומפת תהליך ממוקדים, או פיילוט צר כשהתהליך בשל לבנייה.",
      },
      {
        title: "מגדירים פיילוט, אם התהליך בשל",
        desc: "אם התהליך בשל, מגדירים את הקלטים, הפלטים וגבולות האישור של הפיילוט לפני שמתחילים לבנות.",
        human: true,
      },
    ],
  },
  safety: {
    title: "מה לא קורה פה",
    items: [
      "לא מחליפים את כל המערכות ביום אחד",
      "לא שולחים הודעות בלי אישור",
      "לא בונים אוטומציה לפני שמבינים את התהליך",
      "לא מבטיחים קפיצות לא מציאותיות או רובוט שמנהל את העסק",
    ],
  },
  offers: {
    title: "מה אני בונה",
    intro:
      "מערכות קטנות סביב המקומות שבהם העבודה כבר קורית: דוח בוקר, follow-up, פגישות, מסמכים ותמונת מצב יומית.",
  },
  evidence: {
    title: "איך נראה תהליך ממופה",
    intro:
      "הדגמה של הגישה, לא מקרה לקוח אמיתי. השיפור כאן מבני: עבודה מפוזרת וידנית הופכת לתהליך ממופה עם שלב אישור אנושי.",
    filmCaption:
      "בקשות מפוזרות מסתדרות לתהליך ממופה, עם שלב אישור אנושי לפני שהעבודה מנוהלת עד לסגירה.",
    filmName: "סרטון התהליך הממופה",
    before: {
      caption: "לפני",
      items: [
        "בקשות מגיעות במייל, בצ'אט ובטלפון",
        "הסטטוס נמצא בראש של מישהו",
        "המעקב תלוי בזיכרון",
        "אין תמונה משותפת של מה פתוח",
      ],
    },
    mapped: {
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
  finalCta: {
    title: "מתחילים מתהליך אחד שנתקע.",
    body: "שלחו תהליך שנופל בין מייל, יומן, מסמכים, פגישות ומעקב. קודם נמפה אותו, ואז נחליט אם נכון להתחיל באבחון או בפיילוט צר.",
    cta: shellContent("he").workflowCta,
    secondaryCta: shellContent("he").whatsappCta,
  },
};

/** Locale-keyed content: EN and HE (the self-contained Hebrew homepage). */
const HOME: Partial<Record<Locale, HomeContent>> = { en, he };

/** Resolve the homepage content model for a locale. */
export const homeContent = localeAccessor("homeContent", HOME);
