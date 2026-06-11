import { localeAccessor } from "@/content/types";
import type { CardItem, Locale, SpineNode } from "@/content/types";

/**
 * Founder + proof content — typed and locale-keyed.
 *
 * ============================================================
 * ⚠ SAMPLE DATA — ALL credentials, career-spine entries, and case studies
 * below are ILLUSTRATIVE TEST DATA, not real claims. They exist so the
 * design can be built and reviewed at realistic shape. Before launch they
 * MUST be replaced with real facts — see LAUNCH-CHECKLIST.md (repo root).
 * ============================================================
 *
 * The PROOF_IS_SAMPLE_DATA flag below is the single launch gate. While true:
 *   - every proof surface renders a visible "sample data" badge (SampleBadge),
 *   - the whole site is noindex (src/lib/root-metadata.ts) and robots-disallowed
 *     (src/app/robots.ts), so sample claims can never be indexed as real,
 *   - /llms.txt declares the proof content as illustrative samples,
 *   - JSON-LD emits NO facts from this file (JsonLd.tsx stays verifiable-only).
 * Flip it to false ONLY when the real data is in (LAUNCH-CHECKLIST.md).
 */
export const PROOF_IS_SAMPLE_DATA = true;

/** One case study: problem → system → observable change. No invented numbers —
    `outcome` states what observably changed, never a metric we can't show. */
export type CaseStudy = {
  key: string;
  /** Anonymized client category ("A 12-person law office"), never a name. */
  clientType: string;
  problem: string;
  system: string;
  outcome: string;
  /** The engagement's workflow shape, as a schematic spine. */
  spine: { caption: string; ariaLabel: string; nodes: readonly SpineNode[] };
};

export type ProofContent = {
  founder: {
    /** Homepage band heading. */
    title: string;
    intro: string;
    name: string;
    role: string;
    bio: string;
    credentials: readonly CardItem[];
    spine: { caption: string; ariaLabel: string; nodes: readonly SpineNode[] };
  };
  cases: {
    /** Homepage band heading + intro. */
    title: string;
    intro: string;
    /** About page section heading + intro (full cards with spines). */
    aboutTitle: string;
    aboutIntro: string;
    rowLabels: { problem: string; system: string; outcome: string };
    items: readonly CaseStudy[];
  };
  /** Visible badge label rendered while PROOF_IS_SAMPLE_DATA is true. */
  sampleBadge: string;
};

const en: ProofContent = {
  founder: {
    title: "Who builds this",
    intro:
      "y[AI]r studio is one person with an engineering background, not an agency. You work directly with the person who maps the workflow, builds the system, and supports it after it goes live.",
    name: "Yair Bederman",
    role: "Productivity & AI systems · founder of y[AI]r studio",
    bio: "Builds and runs y[AI]r studio. Background in R&D and software leadership; maps the workflow, builds the system, and stays involved after it goes live.",
    // ⚠ SAMPLE credentials — replace with real ones (LAUNCH-CHECKLIST.md §1).
    credentials: [
      {
        title: "R&D & engineering leadership",
        desc: "15+ years taking software systems from prototype to production.",
      },
      {
        title: "AI systems in production",
        desc: "Internal assistants, dashboards, and automations running inside live business operations.",
      },
      {
        title: "Process & workflow design",
        desc: "Maps the real process before building: owners, bottlenecks, and what should stay human.",
      },
      {
        title: "Bilingual delivery",
        desc: "Systems, documentation, and support in Hebrew and English.",
      },
    ],
    // ⚠ SAMPLE career spine — replace with the real path (LAUNCH-CHECKLIST.md §1).
    spine: {
      caption: "The path to this work",
      ariaLabel: "Career path leading to y[AI]r studio",
      nodes: [
        { label: "Software engineer", sub: "production systems" },
        { label: "R&D team lead", sub: "shipping under real constraints" },
        { label: "Engineering leadership", sub: "teams · delivery · systems" },
        { label: "AI workflow systems", sub: "applied to daily operations" },
        { label: "y[AI]r studio", out: true },
      ],
    },
  },
  cases: {
    title: "What this looks like in practice",
    intro:
      "Engagements shown the way I map them: the problem, the system, and what observably changed.",
    aboutTitle: "Selected systems",
    aboutIntro:
      "Each engagement, mapped end to end: the problem, the system that was built, the workflow it runs, and what observably changed.",
    rowLabels: {
      problem: "The problem",
      system: "The system",
      outcome: "What changed",
    },
    // ⚠ SAMPLE case studies — replace with real engagements (LAUNCH-CHECKLIST.md §2).
    items: [
      {
        key: "law-office",
        clientType: "A 12-person law office",
        problem:
          "Deadlines, client emails, and document versions lived in separate tools; follow-up depended on whoever remembered.",
        system:
          "An intake-to-deadline workflow: email triage, document status tracking, and a daily attention dashboard, with approval before anything is sent.",
        outcome:
          "The office starts the day from one view instead of three inboxes, and follow-up no longer depends on memory.",
        spine: {
          caption: "Intake to follow-up",
          ariaLabel: "The law office workflow, mapped",
          nodes: [
            { label: "Incoming client email", sub: "requests · documents · dates" },
            { label: "Triage + deadline capture" },
            { label: "Daily attention view" },
            { label: "Human approval", human: true },
            { label: "Tracked follow-up", out: true },
          ],
        },
      },
      {
        key: "marketing-agency",
        clientType: "A boutique marketing agency",
        problem:
          "Content ideas piled up in chat threads, and approvals happened late, over scattered messages.",
        system:
          "An intake-to-publish pipeline: one intake, structured briefs, and drafts queued behind a single approval step before anything publishes.",
        outcome:
          "Every piece now passes one visible approval gate; nothing publishes out of a chat thread.",
        spine: {
          caption: "Intake to publish",
          ariaLabel: "The agency content workflow, mapped",
          nodes: [
            { label: "Idea intake", sub: "chats · calls · assets" },
            { label: "Structured brief" },
            { label: "Drafts queued" },
            { label: "Human approval", human: true },
            { label: "Published + tracked", out: true },
          ],
        },
      },
      {
        key: "logistics-smb",
        clientType: "A family logistics business",
        problem:
          "Order status lived in spreadsheets and phone calls; stuck orders surfaced only when a customer called to ask.",
        system:
          "A stuck-order dashboard connected to the existing spreadsheets, with alerts and a weekly operating signal.",
        outcome:
          "Stuck orders surface on the dashboard before the customer calls, and the weekly review starts from the same view.",
        spine: {
          caption: "Order to resolution",
          ariaLabel: "The logistics visibility workflow, mapped",
          nodes: [
            { label: "Existing spreadsheets", sub: "orders · status · dates" },
            { label: "Stuck-order signals" },
            { label: "One dashboard view" },
            { label: "Human decides", human: true },
            { label: "Next action tracked", out: true },
          ],
        },
      },
    ],
  },
  sampleBadge: "Sample data",
};

/**
 * Hebrew (RTL) proof content — hebrew-quality drafted. Same SAMPLE-data
 * status as the EN block above: replace via LAUNCH-CHECKLIST.md.
 * Note: the Hebrew spelling of the surname ("בדרמן") is a standard
 * transliteration — confirm it at checklist time.
 */
const he: ProofContent = {
  founder: {
    title: "מי בונה את זה",
    intro:
      "מאחורי y[AI]r studio עומד אדם אחד עם רקע הנדסי, לא סוכנות. אתם עובדים ישירות עם מי שממפה את התהליך, בונה את המערכת ומלווה אותה אחרי העלייה לאוויר.",
    name: "יאיר בדרמן",
    role: "מערכות AI ופרודוקטיביות · מייסד y[AI]r studio",
    bio: "בונה ומפעיל את y[AI]r studio. רקע במו״פ ובהובלת פיתוח; ממפה את התהליך, בונה את המערכת ונשאר מעורב אחרי שהיא עולה לאוויר.",
    // ⚠ SAMPLE credentials — replace with real ones (LAUNCH-CHECKLIST.md §1).
    credentials: [
      {
        title: "הובלת מו״פ ופיתוח",
        desc: "מעל 15 שנה של בניית מערכות תוכנה, מאב־טיפוס ועד פרודקשן.",
      },
      {
        title: "מערכות AI בשטח",
        desc: "עוזרים פנימיים, דשבורדים ואוטומציות שרצים בתפעול היומיומי של עסקים.",
      },
      {
        title: "תכנון תהליכי עבודה",
        desc: "ממפה את התהליך האמיתי לפני שבונים: אחראים, צווארי בקבוק, ומה נשאר אנושי.",
      },
      {
        title: "עברית ואנגלית",
        desc: "מערכות, תיעוד וליווי בשתי השפות, לפי מה שהצוות באמת מדבר.",
      },
    ],
    // ⚠ SAMPLE career spine — replace with the real path (LAUNCH-CHECKLIST.md §1).
    spine: {
      caption: "הדרך לעבודה הזאת",
      ariaLabel: "המסלול המקצועי שמוביל ל-y[AI]r studio",
      nodes: [
        { label: "מהנדס תוכנה", sub: "מערכות פרודקשן" },
        { label: "ראש צוות פיתוח", sub: "פיתוח תחת אילוצים אמיתיים" },
        { label: "הובלת פיתוח", sub: "צוותים · אספקה · מערכות" },
        { label: "מערכות AI לתהליכי עבודה", sub: "בתפעול יומיומי" },
        { label: "y[AI]r studio", out: true },
      ],
    },
  },
  cases: {
    title: "איך זה נראה בפועל",
    intro: "פרויקטים כפי שאני ממפה אותם: הבעיה, המערכת, ומה השתנה בפועל.",
    aboutTitle: "מערכות נבחרות",
    aboutIntro:
      "כל פרויקט, ממופה מקצה לקצה: הבעיה, המערכת שנבנתה, התהליך שהיא מריצה, ומה השתנה בפועל.",
    rowLabels: {
      problem: "הבעיה",
      system: "המערכת",
      outcome: "מה השתנה",
    },
    // ⚠ SAMPLE case studies — replace with real engagements (LAUNCH-CHECKLIST.md §2).
    items: [
      {
        key: "law-office",
        clientType: "משרד עורכי דין של 12 איש",
        problem:
          "מועדים, מיילים של לקוחות וגרסאות של מסמכים נוהלו בכלים נפרדים; המעקב היה תלוי בזיכרון.",
        system:
          "מערכת שמחברת קליטת פניות, מעקב מסמכים ומועדים לדשבורד יומי אחד, עם אישור אנושי לפני כל שליחה.",
        outcome:
          "המשרד מתחיל את היום מתצוגה אחת במקום שלוש תיבות מייל, והמעקב כבר לא תלוי בזיכרון.",
        spine: {
          caption: "מפנייה ועד מעקב",
          ariaLabel: "התהליך של משרד עורכי הדין, ממופה",
          nodes: [
            { label: "מייל נכנס מלקוח", sub: "בקשות · מסמכים · מועדים" },
            { label: "מיון וקליטת מועדים" },
            { label: "תצוגת טיפול יומית" },
            { label: "אישור אנושי", human: true },
            { label: "מעקב מנוהל", out: true },
          ],
        },
      },
      {
        key: "marketing-agency",
        clientType: "סוכנות שיווק בוטיק",
        problem:
          "רעיונות לתוכן נערמו בצ'אטים, והאישורים הגיעו מאוחר, מפוזרים בין הודעות.",
        system:
          "תהליך אחד מרעיון ועד פרסום: קליטה אחת, בריפים מובנים, וטיוטות שמחכות לנקודת אישור אחת לפני שמשהו מתפרסם.",
        outcome:
          "כל פריט עובר עכשיו נקודת אישור אחת וברורה; שום דבר לא מתפרסם מתוך צ'אט.",
        spine: {
          caption: "מרעיון ועד פרסום",
          ariaLabel: "תהליך התוכן של הסוכנות, ממופה",
          nodes: [
            { label: "קליטת רעיונות", sub: "צ'אטים · שיחות · חומרים" },
            { label: "בריף מובנה" },
            { label: "טיוטות בתור" },
            { label: "אישור אנושי", human: true },
            { label: "פורסם ובמעקב", out: true },
          ],
        },
      },
      {
        key: "logistics-smb",
        clientType: "עסק משפחתי בתחום הלוגיסטיקה",
        problem:
          "סטטוס ההזמנות חי בגיליונות ובשיחות טלפון; הזמנות תקועות התגלו רק כשלקוח התקשר לשאול.",
        system:
          "דשבורד הזמנות תקועות שמחובר לגיליונות הקיימים, עם התראות וסיכום תפעולי שבועי.",
        outcome:
          "הזמנות תקועות עולות בדשבורד לפני שהלקוח מתקשר, והסקירה השבועית מתחילה מאותה תצוגה.",
        spine: {
          caption: "מהזמנה ועד פתרון",
          ariaLabel: "תהליך הנראות של העסק הלוגיסטי, ממופה",
          nodes: [
            { label: "הגיליונות הקיימים", sub: "הזמנות · סטטוס · תאריכים" },
            { label: "הזמנות תקועות מזוהות" },
            { label: "תצוגה אחת" },
            { label: "אדם מחליט", human: true },
            { label: "הצעד הבא במעקב", out: true },
          ],
        },
      },
    ],
  },
  sampleBadge: "נתוני דוגמה",
};

const PROOF: Partial<Record<Locale, ProofContent>> = { en, he };

/** Resolve the founder + proof content for a locale. */
export const proofContent = localeAccessor("proofContent", PROOF);
