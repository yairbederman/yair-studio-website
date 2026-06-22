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
    items: readonly { title: string; desc: string }[];
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
    title: "Where work gets stuck",
    items: [
      {
        title: "Leads do not get a reply",
        desc: "The next action exists somewhere, but no one owns the follow-up.",
      },
      {
        title: "Important emails sink",
        desc: "Urgent messages sit beside everything else and wait for manual triage.",
      },
      {
        title: "Meetings do not become tasks",
        desc: "Decisions are made in the room, then disappear into notes or memory.",
      },
      {
        title: "Documents are not read in time",
        desc: "Dates, obligations, and red flags are found late, after the work has already waited.",
      },
      {
        title: "Clients wait for answers",
        desc: "Open loops are visible only when someone checks several tools.",
      },
      {
        title: "Tasks have no clear owner",
        desc: "Work moves between people without a reliable handoff or deadline.",
      },
    ],
  },
  method: {
    title: "What happens in the first 7–10 days",
    intro:
      "The first step is a workflow map, not an automatic promise to build. If the workflow is ready for a pilot, the first working version is usually scoped around 7–10 days.",
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
        desc: "The first working version is usually scoped around 7–10 days, with a person approving the decisions that matter.",
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
    title: "איפה העבודה נופלת?",
    items: [
      {
        title: "לידים שלא חוזרים אליהם",
        desc: "הפנייה נכנסה, אבל אין אחראי ברור לצעד הבא.",
      },
      {
        title: "מיילים חשובים שטובעים",
        desc: "הודעות דחופות יושבות ליד הכול ומחכות למיון ידני.",
      },
      {
        title: "פגישות שלא הופכות למשימות",
        desc: "החלטות מתקבלות בשיחה ואז נעלמות בסיכום, בצ'אט או בזיכרון.",
      },
      {
        title: "מסמכים שלא נקראים בזמן",
        desc: "תאריכים, התחייבויות ודגלים אדומים מתגלים מאוחר מדי.",
      },
      {
        title: "לקוחות שמחכים לתשובה",
        desc: "לולאות פתוחות מתגלות רק כשמישהו עובר בין כמה כלים.",
      },
      {
        title: "משימות בלי אחראי ברור",
        desc: "עבודה עוברת בין אנשים בלי העברה מסודרת ודדליין.",
      },
    ],
  },
  method: {
    title: "מה קורה ב־7–10 הימים הראשונים",
    intro:
      "הצעד הראשון הוא מפת תהליך, לא הבטחה אוטומטית לבנות. אם התהליך בשל לפיילוט, בדרך כלל מגדירים את הגרסה העובדת הראשונה למסגרת של 7–10 ימים.",
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
        desc: "בדרך כלל מגדירים את הגרסה העובדת הראשונה למסגרת של 7–10 ימים, עם אישור אנושי בהחלטות החשובות.",
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
