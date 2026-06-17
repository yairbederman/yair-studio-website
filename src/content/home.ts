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
    lead: "I help small businesses and professional offices connect AI to email, calendar, documents, meetings, clients, and tasks without replacing every system or letting unsafe automations run loose.",
    primaryCta: { label: "Book a diagnostic call", href: "/contact" },
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
    title: "How I work",
    steps: [
      {
        title: "Choose one process",
        desc: "We start with one workflow that already slows the business down.",
      },
      {
        title: "Map how it really works",
        desc: "Steps, owners, inputs, outputs, bottlenecks, and approval points are made explicit.",
      },
      {
        title: "Build a small pilot",
        desc: "A narrow workflow proves the shape before anything expands.",
      },
      {
        title: "Connect existing tools",
        desc: "Email, calendar, documents, CRM, spreadsheets, or task tools stay in place where possible.",
      },
      {
        title: "Add reminders, summaries, and human approval",
        desc: "The system supports the work, and a person stays responsible where judgment matters.",
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
    title: "Start with one annoying workflow.",
    body: "Send the workflow that keeps slipping: email triage, follow-up, meeting tasks, documents, or a daily operating view. We map it before deciding what to build.",
    cta: { label: "Book a diagnostic call", href: "/contact" },
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
    lead: "לא עוד כלי AI. מערכות קטנות שמחברות AI לעבודה האמיתית של העסק: מיילים, יומן, מסמכים, פגישות, לקוחות ומשימות.",
    primaryCta: { label: "לתאם שיחת אבחון", href: "/he/contact" },
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
    title: "איך זה עובד",
    intro:
      "מתחילים מתהליך אחד אמיתי, לא ממערכת ענקית. קודם מבינים איפה העבודה נתקעת, ורק אז מחליטים אם נכון לבנות אבחון, פיילוט או מערכת קטנה.",
    steps: [
      {
        title: "שולחים תהליך אחד שמעצבן אתכם",
        desc: "כמה שורות על המקום שבו העבודה נתקעת: מיילים, משימות, לקוחות, מסמכים, פגישות או follow-up.",
      },
      {
        title: "ממפים איך הוא עובד היום",
        desc: "שלבים, אחראים, כלים, קלט, פלט ונקודות תקיעה.",
      },
      {
        title: "מחליטים מה נשאר אנושי",
        desc: "מה אפשר לאוטומט, איפה AI עוזר, ומה חייב להישאר באישור אדם.",
        human: true,
      },
      {
        title: "בונים צעד ראשון ברור",
        desc: "אבחון, פיילוט קטן, או מערכת Follow-Up סביב תהליך אחד.",
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
    title: "מתחילים מתהליך אחד שמעצבן אתכם.",
    body: "שלחו לי תהליך אחד שמעצבן אתכם: מיילים, משימות, לקוחות, מסמכים, פגישות או follow-up. נמפה אותו לפני שמחליטים מה לבנות.",
    cta: { label: "שלחו תהליך אחד", href: "/he/contact" },
    secondaryCta: shellContent("he").whatsappCta,
  },
};

/** Locale-keyed content: EN and HE (the self-contained Hebrew homepage). */
const HOME: Partial<Record<Locale, HomeContent>> = { en, he };

/** Resolve the homepage content model for a locale. */
export const homeContent = localeAccessor("homeContent", HOME);
