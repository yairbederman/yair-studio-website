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
import { offerCard } from "@/content/offer-cards";
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
    /** Decorative hero motif (aria-hidden; renders on all viewports). */
    schematic: { caption: string; nodes: readonly SpineNode[] };
  };
  problems: {
    title: string;
    intro: string;
    cards: readonly {
      title: string;
      kicker: string;
      body: string;
      /** Optional teaser poster + link (only the Command-center card uses these:
          the settled film poster, linking to the flagship film section). */
      poster?: string;
      href?: string;
      linkLabel?: string;
    }[];
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
    /**
     * Optional scattered-to-mapped process film. Omit to show only the static
     * before/after compare (the reduced-motion fallback) — e.g. /he, until a
     * localized film is composed. When present it carries its own paths plus
     * the caption + accessible name.
     */
    film?: {
      webm: string;
      mp4: string;
      poster: string;
      caption: string;
      filmName: string;
    };
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
    eyebrow: "Managed AI for professional offices",
    title: "A managed AI assistant for the real work of your office",
    lead: "y[AI]r studio runs the recurring work of small professional offices: morning briefings ready before you sit down, email triaged into decisions, documents and follow-up chased to done. Your people approve everything that matters.",
    primaryCta: {
      label: offerCard("en", "ai-office-assistant").cta,
      href: offerCard("en", "ai-office-assistant").href,
    },
    secondaryCta: {
      label: "Start with a fixed-price sprint",
      href: offerCard("en", "ai-workflow-sprint").href,
    },
    schematic: {
      caption: "one office morning",
      nodes: [
        { label: "overnight inputs", sub: "email · calendar · documents" },
        { label: "morning briefing" },
        { label: "triage + drafts ready" },
        { label: "human approval", human: true },
        { label: "the day starts decided", out: true },
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
        poster: "/videos/command-center-poster.png",
        href: "/offers/ai-office-assistant#film",
        linkLabel: "See it in motion",
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
      "The first week starts with mapping the workflow. From there, we choose the right first deliverable: a fixed-price sprint or a managed-assistant setup.",
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
        desc: "That may be a workflow map on its own, a fixed-price sprint, or the start of a managed-assistant setup.",
      },
      {
        title: "Scope the sprint or the setup",
        desc: "We define the inputs, outputs, and approval boundaries before anything is built.",
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
    title: "What I offer",
    intro:
      "Four services around the places work already happens: a managed office assistant, a fixed-price workflow sprint, a LinkedIn content engine, and enablement workshops for engineering teams.",
  },
  evidence: {
    title: "What “mapped” looks like",
    intro:
      "An illustration of the approach, not a client case study. The improvement here is structural: scattered, manual work becomes a mapped flow with a human approval step.",
    film: {
      webm: "/videos/scattered-to-mapped.webm",
      mp4: "/videos/scattered-to-mapped.mp4",
      poster: "/videos/scattered-to-mapped-poster.png",
      caption:
        "Scattered requests untangle into a mapped flow, with a human approval step before the work is tracked to done.",
      filmName: "scattered-to-mapped film",
    },
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
    body: "Send the workflow that keeps slipping between email, calendar, documents, meetings, and follow-up. We map it first, then pick the right starting point: a fixed-price sprint or the managed assistant.",
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
    eyebrow: "AI מנוהל למשרדים מקצועיים",
    title: "עוזר AI מנוהל לעבודה האמיתית של המשרד",
    lead: "y[AI]r studio מריץ את העבודה השוטפת של משרדים מקצועיים קטנים: תדריך בוקר מוכן לפני שהתיישבתם, מיילים ממוינים להחלטות, מסמכים ומעקב מקודמים עד לסגירה. הצוות שלכם מאשר כל דבר שחשוב.",
    primaryCta: {
      label: offerCard("he", "ai-office-assistant").cta,
      href: offerCard("he", "ai-office-assistant").href,
    },
    secondaryCta: {
      label: "להתחיל בספרינט במחיר קבוע",
      href: offerCard("he", "ai-workflow-sprint").href,
    },
    schematic: {
      caption: "בוקר אחד במשרד",
      nodes: [
        { label: "קלט שנצבר בלילה", sub: "מייל · יומן · מסמכים" },
        { label: "תדריך בוקר מוכן" },
        { label: "מיון וטיוטות מוכנות" },
        { label: "אישור אנושי", human: true },
        { label: "היום מתחיל מוכרע", out: true },
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
        poster: "/videos/command-center-he-poster.png",
        href: "/he/offers/ai-office-assistant#film",
        linkLabel: "לראות בתנועה",
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
      "השבוע הראשון מתחיל במיפוי התהליך. משם בוחרים את התוצר הראשון הנכון: ספרינט במחיר קבוע או הקמה של העוזר המנוהל.",
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
        desc: "זה יכול להיות מפת תהליך בפני עצמה, ספרינט במחיר קבוע, או תחילת הקמה של העוזר המנוהל.",
      },
      {
        title: "מגדירים את הספרינט או את ההקמה",
        desc: "מגדירים קלט, פלט וגבולות אישור לפני שבונים.",
        human: true,
      },
    ],
  },
  // Deliberate EN/HE divergence: the Hebrew safety band is locale-native, not a
  // translation of the EN "AI with clear boundaries" set. It runs 4 blunter
  // boundaries ("what doesn't happen here") against EN's 5 — the copper markers
  // (SafetySection) stagger over whatever count each locale ships. Not drift; do
  // not reconcile the counts.
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
    title: "מה אני מציע",
    intro:
      "ארבעה שירותים סביב המקומות שבהם העבודה כבר קורית: עוזר משרדי מנוהל, ספרינט תהליך במחיר קבוע, מנוע תוכן ללינקדאין וסדנאות הטמעה לצוותי פיתוח.",
  },
  evidence: {
    title: "איך נראה תהליך ממופה",
    intro:
      "הדגמה של הגישה, לא מקרה לקוח אמיתי. השיפור כאן מבני: עבודה מפוזרת וידנית הופכת לתהליך ממופה עם שלב אישור אנושי.",
    // Hebrew scattered-to-mapped film (one composition, RTL-mirrored). Caption
    // traces to he.evidence (intro "שלב אישור אנושי" + node "מנוהלת עד לסגירה").
    film: {
      webm: "/videos/scattered-to-mapped-he.webm",
      mp4: "/videos/scattered-to-mapped-he.mp4",
      poster: "/videos/scattered-to-mapped-he-poster.png",
      caption:
        "בקשות מפוזרות מתארגנות לתהליך ממופה, עם שלב אישור אנושי לפני שהעבודה מנוהלת עד לסגירה.",
      filmName: "סרטון תהליך ממופה",
    },
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
    body: "שלחו תהליך שנופל בין מייל, יומן, מסמכים, פגישות ומעקב. קודם נמפה אותו, ואז נבחר את נקודת ההתחלה הנכונה: ספרינט במחיר קבוע או העוזר המנוהל.",
    cta: shellContent("he").workflowCta,
    secondaryCta: shellContent("he").whatsappCta,
  },
};

/** Locale-keyed content: EN and HE (the self-contained Hebrew homepage). */
const HOME: Partial<Record<Locale, HomeContent>> = { en, he };

/** Resolve the homepage content model for a locale. */
export const homeContent = localeAccessor("homeContent", HOME);
