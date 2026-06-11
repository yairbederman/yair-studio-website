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
    steps: readonly { title: string; desc: string; human?: boolean }[];
  };
  /** Offers band — section copy only; the cards stay canonical in
      src/lib/offers.ts (+ localized strings in src/content/offer-cards.ts). */
  offers: {
    title: string;
    intro: string;
    filmCaption: string;
    filmName: string;
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
    /** Optional second channel (e.g. WhatsApp) — rendered as a ghost button. */
    secondaryCta?: Cta;
  };
};

const en: HomeContent = {
  hero: {
    eyebrow: "AI workflow systems",
    title: "Turn messy business workflows into clear AI-assisted systems.",
    lead: "Work gets stuck when tasks, email, and context live in different tools. I map the process, connect the tools you already use, and build one system that shows the next action, with human approval where it matters.",
    primaryCta: { label: "Map one workflow", href: "/contact" },
    secondaryCta: { label: "See how it works", href: "#how-i-work" },
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
        title: "Build the system",
        desc: "Dashboards, automations, summaries, alerts, and AI assistants are added where they reduce friction.",
      },
      {
        title: "Keep humans in control",
        desc: "Approvals, review points, and clear handoff rules stay built into the system.",
        human: true,
      },
    ],
  },
  offers: {
    title: "Offers",
    intro:
      "Four entry points into one system built around real workflows, not four separate services.",
    filmCaption:
      "Four entry points into one system, with a human approval step built in.",
    filmName: "one-system overview film",
  },
  evidence: {
    title: "What “mapped” looks like",
    intro:
      "An illustration of the approach, not a client case study. The improvement here is structural: scattered, manual work becomes a mapped flow with a human approval step.",
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
    secondaryCta: shellContent("en").whatsappCta,
  },
};

/**
 * Hebrew (RTL) homepage content. Drafted with the hebrew-quality protocol
 * (think in English, translate to idiomatic Hebrew; scan for fabrications,
 * AI patterns, grammar, register). The Hero primary and Final CTA point at
 * /he/contact (the full Hebrew mirror exists); the Hero secondary stays the
 * in-page #how-i-work anchor, matching EN.
 */
const he: HomeContent = {
  hero: {
    eyebrow: "מערכות AI לתהליכי עבודה",
    title: "הופכים תהליכי עבודה מבולגנים למערכות AI ברורות.",
    lead: "העבודה נתקעת כשמשימות, מיילים והקשר מפוזרים בין כלים שונים. אני ממפה את התהליך, מחבר את הכלים שכבר קיימים, ובונה מערכת אחת שמראה את הצעד הבא, עם אישור אנושי בנקודות ההחלטה.",
    primaryCta: { label: "למפות תהליך אחד", href: "/he/contact" },
    secondaryCta: { label: "איך זה עובד", href: "#how-i-work" },
    schematic: {
      caption: "תהליך ← צעד הבא",
      nodes: [
        { label: "קלט מפוזר", sub: "משימות · מייל · מסמכים · הקשר" },
        { label: "תהליך ממופה" },
        { label: "מערכת אחת", sub: "דשבורדים · אוטומציות · עוזרים" },
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
        title: "בונים את המערכת",
        desc: "דשבורדים, אוטומציות, סיכומים, התראות ועוזרי AI נכנסים איפה שהם מורידים חיכוך.",
      },
      {
        title: "משאירים את האדם בשליטה",
        desc: "אישורים, נקודות בקרה וכללי העברה ברורים נשארים חלק מהמערכת.",
        human: true,
      },
    ],
  },
  offers: {
    title: "שירותים",
    intro:
      "ארבע נקודות כניסה למערכת אחת שנבנית סביב תהליכי עבודה אמיתיים, לא ארבעה שירותים נפרדים.",
    filmCaption: "ארבע נקודות כניסה למערכת אחת, עם שלב אישור אנושי מובנה.",
    filmName: "סרטון המערכת האחת",
  },
  evidence: {
    title: "איך נראה תהליך ממופה",
    intro:
      "הדגמה של הגישה, לא מקרה לקוח אמיתי. השיפור כאן מבני: עבודה מפוזרת וידנית הופכת לתהליך ממופה עם שלב אישור אנושי.",
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
    cta: { label: "למפות תהליך אחד", href: "/he/contact" },
    secondaryCta: shellContent("he").whatsappCta,
  },
};

/** Locale-keyed content: EN and HE (the self-contained Hebrew homepage). */
const HOME: Partial<Record<Locale, HomeContent>> = { en, he };

/** Resolve the homepage content model for a locale. */
export const homeContent = localeAccessor("homeContent", HOME);
