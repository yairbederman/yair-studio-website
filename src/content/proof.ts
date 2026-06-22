import { localeAccessor } from "@/content/types";
import type { CardItem, Locale, SpineNode } from "@/content/types";

/**
 * Founder + proof content — typed and locale-keyed.
 *
 * Founder positioning is factual and deliberately modest. Workflow cards are
 * illustrative patterns, not client case studies or evidence of outcomes.
 * PROOF_IS_SAMPLE_DATA controls the visible badge on those workflow examples
 * only; it does not apply to the founder profile or site indexing.
 */
export const PROOF_IS_SAMPLE_DATA = true;

/** One illustrative workflow pattern, never a client claim or proven outcome. */
export type WorkflowPattern = {
  key: string;
  workflowType: string;
  situation: string;
  tracking: string;
  approval: string;
  firstOutput: string;
  /** The illustrative workflow shape, as a schematic spine. */
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
    rowLabels: {
      situation: string;
      tracking: string;
      approval: string;
      firstOutput: string;
    };
    items: readonly WorkflowPattern[];
  };
  /** Visible badge label for the illustrative workflow examples. */
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
    credentials: [
      {
        title: "R&D & engineering leadership",
        desc: "Background in software engineering, R&D, and leading development work.",
      },
      {
        title: "From prototype to production",
        desc: "Experience taking software systems from early prototypes into production environments.",
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
    spine: {
      caption: "The path to this work",
      ariaLabel: "Career path leading to y[AI]r studio",
      nodes: [
        { label: "Software engineering", sub: "building production systems" },
        { label: "R&D leadership", sub: "teams · delivery · systems" },
        { label: "Prototype to production", sub: "working under real constraints" },
        { label: "Workflow mapping", sub: "understand the process before building" },
        { label: "y[AI]r studio", out: true },
      ],
    },
  },
  cases: {
    title: "Example workflows this approach fits",
    intro:
      "Illustrative workflow patterns, not client case studies. Each one shows the situation, what a system would track, where a person approves, and the first useful output.",
    aboutTitle: "Example workflows this approach fits",
    aboutIntro:
      "Illustrative workflow patterns, not client case studies. Each one shows the situation, what a system would track, where a person approves, and the first useful output.",
    rowLabels: {
      situation: "Situation",
      tracking: "What the system would track",
      approval: "Human approval point",
      firstOutput: "First useful output",
    },
    // Illustrative workflow patterns. These are not client engagements or proof.
    items: [
      {
        key: "law-office",
        workflowType: "Legal or document-heavy office",
        situation:
          "Deadlines, incoming messages, and document versions are spread across separate tools, so follow-up depends on memory.",
        tracking:
          "Requests, document status, owners, deadlines, and unresolved follow-up items.",
        approval:
          "A staff member reviews extracted dates and any draft before it is saved or sent.",
        firstOutput:
          "A daily attention list showing deadlines, missing documents, and follow-ups that need a decision.",
        spine: {
          caption: "Intake to follow-up",
          ariaLabel: "Illustrative document-heavy office workflow",
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
        workflowType: "Marketing and content approvals",
        situation:
          "Ideas, assets, and feedback arrive across chats and calls, while approval status is hard to see.",
        tracking:
          "The brief, source assets, owner, draft status, approver, feedback, and planned publish date.",
        approval:
          "A named approver accepts, edits, or rejects every draft before publication.",
        firstOutput:
          "One review queue showing what is ready, what is blocked, and who needs to decide next.",
        spine: {
          caption: "Intake to publish",
          ariaLabel: "Illustrative marketing content approval workflow",
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
        workflowType: "Logistics and order tracking",
        situation:
          "Order status is split between spreadsheets and phone calls, so stalled orders are easy to miss.",
        tracking:
          "Order ID, current status, owner, promised date, blockers, and time since the last update.",
        approval:
          "The operations owner decides whether to chase a supplier, update the customer, or escalate the order.",
        firstOutput:
          "A stuck-order list ordered by how long each order has gone without an update.",
        spine: {
          caption: "Order to resolution",
          ariaLabel: "Illustrative logistics order-tracking workflow",
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
 * Hebrew (RTL) proof content — hebrew-quality drafted with factual founder
 * positioning and the same illustrative-workflow safeguards as English.
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
    credentials: [
      {
        title: "הובלת מו״פ ופיתוח",
        desc: "רקע בהנדסת תוכנה, במו״פ ובהובלת עבודת פיתוח.",
      },
      {
        title: "מאב־טיפוס ועד פרודקשן",
        desc: "ניסיון בהעברת מערכות תוכנה מאב־טיפוס מוקדם לסביבת פרודקשן.",
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
    spine: {
      caption: "הדרך לעבודה הזאת",
      ariaLabel: "המסלול המקצועי שמוביל ל-y[AI]r studio",
      nodes: [
        { label: "הנדסת תוכנה", sub: "בניית מערכות פרודקשן" },
        { label: "הובלת מו״פ", sub: "צוותים · אספקה · מערכות" },
        { label: "מאב־טיפוס לפרודקשן", sub: "עבודה תחת אילוצים אמיתיים" },
        { label: "מיפוי תהליכים", sub: "מבינים את התהליך לפני שבונים" },
        { label: "y[AI]r studio", out: true },
      ],
    },
  },
  cases: {
    title: "דוגמאות לתהליכים שהגישה הזאת מתאימה להם",
    intro:
      "דוגמאות להמחשה, לא מקרי לקוח. כל דוגמה מציגה את המצב, מה המערכת תעקוב אחריו, איפה נדרש אישור אנושי, ומה יהיה הפלט השימושי הראשון.",
    aboutTitle: "דוגמאות לתהליכים שהגישה הזאת מתאימה להם",
    aboutIntro:
      "דוגמאות להמחשה, לא מקרי לקוח. כל דוגמה מציגה את המצב, מה המערכת תעקוב אחריו, איפה נדרש אישור אנושי, ומה יהיה הפלט השימושי הראשון.",
    rowLabels: {
      situation: "המצב",
      tracking: "מה המערכת תעקוב אחריו",
      approval: "נקודת האישור האנושית",
      firstOutput: "הפלט השימושי הראשון",
    },
    // Illustrative workflow patterns. These are not client engagements or proof.
    items: [
      {
        key: "law-office",
        workflowType: "משרד משפטי או עתיר מסמכים",
        situation:
          "מועדים, הודעות נכנסות וגרסאות של מסמכים מפוזרים בין כלים שונים, ולכן המעקב תלוי בזיכרון.",
        tracking:
          "פניות, סטטוס מסמכים, אחראים, מועדים ופריטי מעקב שעדיין לא טופלו.",
        approval:
          "איש או אשת צוות בודקים את המועדים שחולצו ואת הטיוטה לפני שמירה או שליחה.",
        firstOutput:
          "רשימת טיפול יומית שמציגה מועדים, מסמכים חסרים ומעקבים שמחכים להחלטה.",
        spine: {
          caption: "מפנייה ועד מעקב",
          ariaLabel: "דוגמה לתהליך עבודה במשרד עתיר מסמכים",
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
        workflowType: "אישורי שיווק ותוכן",
        situation:
          "רעיונות, חומרים ומשוב מגיעים דרך צ'אטים ושיחות, וקשה לראות מה כבר אושר.",
        tracking:
          "הבריף, חומרי המקור, האחראי, סטטוס הטיוטה, המאשר, המשוב ומועד הפרסום המתוכנן.",
        approval:
          "גורם מאשר מוגדר בודק, עורך או דוחה כל טיוטה לפני פרסום.",
        firstOutput:
          "תור אישורים אחד שמראה מה מוכן, מה חסום ומי צריך לקבל את ההחלטה הבאה.",
        spine: {
          caption: "מרעיון ועד פרסום",
          ariaLabel: "דוגמה לתהליך אישור תוכן שיווקי",
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
        workflowType: "לוגיסטיקה ומעקב הזמנות",
        situation:
          "סטטוס ההזמנות מפוצל בין גיליונות לשיחות טלפון, ולכן קל לפספס הזמנות שנתקעו.",
        tracking:
          "מספר הזמנה, סטטוס נוכחי, אחראי, תאריך שהובטח, חסמים והזמן שעבר מהעדכון האחרון.",
        approval:
          "האחראי על התפעול מחליט אם לפנות לספק, לעדכן את הלקוח או להסלים את הטיפול.",
        firstOutput:
          "רשימת הזמנות תקועות שממוינת לפי הזמן שעבר מאז העדכון האחרון.",
        spine: {
          caption: "מהזמנה ועד פתרון",
          ariaLabel: "דוגמה לתהליך מעקב אחר הזמנות בלוגיסטיקה",
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
