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
 * `/contact` in EN but a direct `mailto:` in HE (the HE page is self-contained
 * and never links into untranslated EN pages); the Hero secondary stays the
 * in-page `#how-i-work` anchor in both.
 *
 * OFFERS are NOT duplicated here — they stay canonical in `src/lib/offers.ts`.
 * If localized offer copy is ever needed, key it off the stable offer `key`s;
 * never copy routes or fork the offer list.
 */

import { CONTACT_MAILTO } from "@/lib/site";

export type Locale = "en" | "he";

/** A single call-to-action: visible label + destination. */
export type Cta = { label: string; href: string };

/** One node in a schematic process spine (matches WorkflowMap's node shape). */
export type SpineNode = {
  label: string;
  sub?: string;
  /** Copper human-approval checkpoint. */
  human?: boolean;
  /** Final-output emphasis. */
  out?: boolean;
};

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
    steps: readonly { title: string; desc: string; human?: boolean }[];
  };
  /**
   * Evidence — an illustrative before/after, shown structurally via the workflow
   * itself. NO metrics, percentages, client names, or implied results: the
   * improvement is the mapping, not a number. (Component built in Phase 4.)
   */
  evidence: {
    title: string;
    intro: string;
    before: { caption: string; items: readonly string[] };
    mapped: { caption: string; ariaLabel: string; nodes: readonly SpineNode[] };
  };
  finalCta: {
    title: string;
    body: string;
    cta: Cta;
  };
};

const en: HomeContent = {
  hero: {
    eyebrow: "AI workflow systems",
    title: "Turn messy business workflows into clear AI-assisted systems.",
    lead: "I help growing businesses map stuck processes, connect existing tools, and build dashboards, automations, and AI assistants so teams know the next action, with human approval where it matters. I work in Hebrew and English where your team needs it.",
    primaryCta: { label: "Map one workflow", href: "/contact" },
    secondaryCta: { label: "See how it works", href: "#how-i-work" },
    schematic: {
      caption: "workflow → next action",
      nodes: [
        { label: "scattered inputs", sub: "tasks · email · docs · context" },
        { label: "mapped workflow" },
        { label: "operating layer", sub: "dashboards · automations · assistants" },
        { label: "human approval", human: true },
        { label: "clear next action", out: true },
      ],
    },
  },
  problems: {
    title: "Where work gets stuck",
    items: [
      {
        title: "Scattered tools",
        desc: "Tasks, notes, emails, files, and customer context live in different places.",
      },
      {
        title: "Manual follow-up",
        desc: "People remember what to do by memory, chat threads, or repeated status meetings.",
      },
      {
        title: "No operational visibility",
        desc: "Leaders cannot quickly see what is stuck, overdue, risky, or waiting for a decision.",
      },
      {
        title: "AI experiments that do not survive",
        desc: "Prompts and demos look useful, but never become a reliable workflow.",
      },
    ],
  },
  method: {
    title: "How I work",
    steps: [
      {
        title: "Map the workflow",
        desc: "We identify the real process, owners, inputs, outputs, bottlenecks, and risk points.",
      },
      {
        title: "Connect the tools",
        desc: "We use the systems already in the business: email, calendar, CRM, documents, spreadsheets, APIs, or databases.",
      },
      {
        title: "Build the operating layer",
        desc: "Dashboards, automations, summaries, alerts, and AI assistants are added where they reduce friction.",
      },
      {
        title: "Keep humans in control",
        desc: "Approvals, review points, and clear handoff rules stay built into the system.",
        human: true,
      },
    ],
  },
  evidence: {
    title: "What “mapped” looks like",
    intro:
      "An illustration of the approach, not a client case study. The improvement here is structural: scattered, manual work becomes a mapped flow with a human approval step, shown as a structure, not a performance claim.",
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
    title: "Start with one workflow, not a transformation program.",
    body: "The first step is a focused map of a real process: where work enters, where it gets stuck, who approves what, and what a useful AI-assisted system should actually do. After it goes live, I stay involved: tuning the summaries, signals, and automations as real use shows what to adjust, and helping the team actually run it.",
    cta: { label: "Map one workflow", href: "/contact" },
  },
};

/**
 * Hebrew (RTL) homepage content. Drafted with the hebrew-quality protocol
 * (think in English, translate to idiomatic Hebrew; scan for fabrications,
 * AI patterns, grammar, register). The Hero primary and Final CTA resolve to
 * CONTACT_MAILTO (the self-contained HE page never links into EN pages); the
 * Hero secondary stays the in-page #how-i-work anchor, matching EN.
 */
const he: HomeContent = {
  hero: {
    eyebrow: "מערכות AI לתהליכי עבודה",
    title: "הופכים תהליכי עבודה מבולגנים למערכות AI ברורות.",
    lead: "אני עוזר לעסקים צומחים למפות תהליכים תקועים, לחבר את הכלים שכבר קיימים, ולבנות דשבורדים, אוטומציות ועוזרי AI שמייצרים את הצעד הבא הברור. עם אישור אנושי במקומות שבהם זה חשוב. אני עובד בעברית ובאנגלית, לפי הצורך.",
    primaryCta: { label: "למפות תהליך אחד", href: CONTACT_MAILTO },
    secondaryCta: { label: "איך זה עובד", href: "#how-i-work" },
    schematic: {
      caption: "תהליך ← צעד הבא",
      nodes: [
        { label: "קלט מפוזר", sub: "משימות · מייל · מסמכים · הקשר" },
        { label: "תהליך ממופה" },
        { label: "שכבת הפעלה", sub: "דשבורדים · אוטומציות · עוזרים" },
        { label: "אישור אנושי", human: true },
        { label: "צעד הבא ברור", out: true },
      ],
    },
  },
  problems: {
    title: "איפה העבודה נתקעת",
    items: [
      {
        title: "כלים מפוזרים",
        desc: "משימות, הערות, מיילים, קבצים והקשר על לקוחות נמצאים במקומות שונים.",
      },
      {
        title: "מעקב ידני",
        desc: "אנשים זוכרים מה צריך לעשות מהראש, מצ'אטים, או מפגישות סטטוס חוזרות.",
      },
      {
        title: "אין נראות תפעולית",
        desc: "מנהלים לא יכולים לראות מהר מה תקוע, מה באיחור, מה מסוכן ומה מחכה להחלטה.",
      },
      {
        title: "ניסיונות AI שלא שורדים",
        desc: "פרומפטים ודמואים נראים שימושיים, אבל אף פעם לא הופכים לתהליך אמין.",
      },
    ],
  },
  method: {
    title: "איך אני עובד",
    steps: [
      {
        title: "ממפים את התהליך",
        desc: "מזהים את התהליך האמיתי, מי אחראי, מה נכנס ומה יוצא, איפה צווארי הבקבוק ואיפה הסיכונים.",
      },
      {
        title: "מחברים את הכלים",
        desc: "משתמשים במערכות שכבר קיימות בעסק: מייל, יומן, CRM, מסמכים, גיליונות, APIs ובסיסי נתונים.",
      },
      {
        title: "בונים את שכבת ההפעלה",
        desc: "דשבורדים, אוטומציות, סיכומים, התראות ועוזרי AI נכנסים איפה שהם מורידים חיכוך.",
      },
      {
        title: "משאירים את האדם בשליטה",
        desc: "אישורים, נקודות בקרה וכללי העברה ברורים נשארים חלק מהמערכת.",
        human: true,
      },
    ],
  },
  evidence: {
    title: "איך נראה תהליך ממופה",
    intro:
      "הדגמה של הגישה, לא מקרה לקוח אמיתי. השיפור כאן מבני: עבודה מפוזרת וידנית הופכת לתהליך ממופה עם שלב אישור אנושי — כמבנה, לא כהבטחת ביצועים.",
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
    title: "מתחילים מתהליך אחד, לא מפרויקט שינוי גדול.",
    body: "הצעד הראשון הוא מיפוי ממוקד של תהליך אמיתי: איפה העבודה נכנסת, איפה היא נתקעת, מי מאשר מה, ומה מערכת AI שימושית באמת צריכה לעשות. אחרי שהמערכת עולה לאוויר, אני ממשיך ללוות: מכוונן את הסיכומים, ההתראות והאוטומציות לפי השימוש בפועל, ועוזר לצוות להטמיע את המערכת.",
    cta: { label: "למפות תהליך אחד", href: CONTACT_MAILTO },
  },
};

/** Locale-keyed content: EN and HE (the self-contained Hebrew homepage). */
const HOME: Partial<Record<Locale, HomeContent>> = { en, he };

/** Resolve the homepage content model for a locale. */
export function homeContent(locale: Locale): HomeContent {
  const content = HOME[locale];
  if (!content) {
    throw new Error(`homeContent: no content for locale "${locale}"`);
  }
  return content;
}
