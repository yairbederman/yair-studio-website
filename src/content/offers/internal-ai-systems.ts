import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/** Internal AI Systems page content — typed and locale-keyed. */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Assistant layer",
    title: "Internal AI Systems",
    lead: "A practical AI layer for the day-to-day work of a service team: meetings, email and calendar context, tasks, knowledge search, and follow-up, with approvals before anything acts.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  who: {
    title: "Who it's for",
    intro:
      "This is especially useful when the team works across Hebrew and English, and when important context is spread across meetings, emails, documents, calendars, and task lists.",
    items: [
      {
        title: "Service teams",
        desc: "Small and medium teams that run on meetings, email, and follow-up.",
      },
      {
        title: "Office & operations leads",
        desc: "People who keep work moving and want less manual coordination.",
      },
      {
        title: "Document-heavy professional offices",
        desc: "Teams with documents, deadlines, approvals, and client follow-up are a natural fit. Legal work is one example, not the limit.",
      },
    ],
  },
  problems: {
    title: "Problems it solves",
    items: [
      {
        title: "Context scattered everywhere",
        desc: "Decisions and details live across inboxes, documents, and chat threads.",
      },
      {
        title: "Follow-up by memory",
        desc: "Next steps depend on someone remembering them after the meeting.",
      },
      {
        title: "Slow knowledge search",
        desc: "Finding the right past document or answer takes too long.",
      },
      {
        title: "Nothing holds the shared context",
        desc: "Each tool knows a piece; nothing remembers the office as a whole.",
      },
    ],
  },
  build: {
    title: "What we build",
    items: [
      {
        title: "Meeting summaries & task extraction",
        desc: "Turn calls and meetings into clear summaries and tracked next actions.",
      },
      {
        title: "Email & calendar context",
        desc: "Surface the relevant thread, document, and history for what's happening today.",
      },
      {
        title: "Knowledge search",
        desc: "Ask across the team's documents and past work in plain language.",
      },
      {
        title: "Follow-up tracking & office memory",
        desc: "A shared layer that keeps context and chases open loops.",
      },
    ],
  },
  example: {
    title: "What an assistant workflow looks like",
    intro:
      "The shape every assistant workflow follows, simplified. Note where the approval sits: before anything acts.",
    map: {
      caption: "Assistant workflow",
      ariaLabel: "The shared shape of an assistant workflow",
      nodes: [
        { label: "Incoming work", sub: "meeting · email · request" },
        { label: "Context gathered", sub: "threads · documents · history" },
        { label: "Draft + tasks prepared" },
        { label: "Human approval", human: true },
        { label: "Tracked action", out: true },
      ],
    },
  },
  how: {
    title: "How it works",
    steps: [
      {
        title: "Start from one workflow",
        desc: "We build on the audit: one real process, not everything at once.",
      },
      {
        title: "Connect existing tools",
        desc: "Email, calendar, documents, and the systems already in use.",
      },
      {
        title: "Add the assistant layer",
        desc: "Summaries, task extraction, search, and follow-up where they reduce friction.",
      },
      {
        title: "Approvals before actions",
        desc: "The system drafts and suggests; people approve anything that sends or changes.",
        human: true,
      },
      {
        title: "Grow the office memory",
        desc: "Each workflow adds to a shared, searchable context over time.",
      },
    ],
  },
  human: {
    title: "What stays human",
    intro: "The assistant drafts and suggests; people approve what matters.",
    items: [
      {
        title: "Sending & replying",
        desc: "Client-facing messages are drafted, never sent without approval.",
      },
      {
        title: "Sensitive actions",
        desc: "Anything that changes records or commits the business waits for a person.",
      },
      {
        title: "Final judgment",
        desc: "The assistant surfaces options; people decide.",
      },
    ],
  },
  cta: {
    heading: "Build the system around one real workflow.",
    body: "Start with a single process, such as meetings, follow-up, or knowledge search, and expand from there.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) internal-AI-systems content — hebrew-quality drafted. */
const he: OfferPageContent = {
  hero: {
    eyebrow: "שכבת העוזרים",
    title: "מערכות AI פנימיות",
    lead: "שכבת AI פרקטית לעבודה היומיומית של צוות שירותים: פגישות, הקשר של מייל ויומן, משימות, חיפוש ידע ומעקב, עם אישורים לפני שמשהו פועל.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  who: {
    title: "למי זה מתאים",
    intro:
      "שימושי במיוחד כשהצוות עובד בעברית ובאנגלית, וכשהקשר חשוב מפוזר בין פגישות, מיילים, מסמכים, יומנים ורשימות משימות.",
    items: [
      {
        title: "צוותי שירות",
        desc: "צוותים קטנים ובינוניים שרצים על פגישות, מייל ומעקב.",
      },
      {
        title: "מנהלי משרד ותפעול",
        desc: "מי שמחזיק את העבודה בתנועה ורוצה פחות תיאום ידני.",
      },
      {
        title: "משרדים מקצועיים עתירי מסמכים",
        desc: "צוותים עם מסמכים, מועדים, אישורים ומעקב לקוחות מתאימים במיוחד. עבודה משפטית היא דוגמה אחת, לא הגבול.",
      },
    ],
  },
  problems: {
    title: "אילו בעיות זה פותר",
    items: [
      {
        title: "הקשר מפוזר בכל מקום",
        desc: "החלטות ופרטים חיים בין תיבות מייל, מסמכים ושרשורי צ'אט.",
      },
      {
        title: "מעקב מהזיכרון",
        desc: "הצעדים הבאים תלויים במי שזוכר אותם אחרי הפגישה.",
      },
      {
        title: "חיפוש ידע איטי",
        desc: "למצוא את המסמך או התשובה מהעבר לוקח יותר מדי זמן.",
      },
      {
        title: "אין מי שמחזיק את ההקשר המשותף",
        desc: "כל כלי יודע חתיכה; שום דבר לא זוכר את המשרד כמכלול.",
      },
    ],
  },
  build: {
    title: "מה אנחנו בונים",
    items: [
      {
        title: "סיכומי פגישות וחילוץ משימות",
        desc: "הופכים שיחות ופגישות לסיכומים ברורים ולמשימות במעקב.",
      },
      {
        title: "הקשר של מייל ויומן",
        desc: "מציפים את השרשור, המסמך וההיסטוריה הרלוונטיים למה שקורה היום.",
      },
      {
        title: "חיפוש ידע",
        desc: "שואלים שאלות על המסמכים והעבודה של הצוות, בשפה רגילה.",
      },
      {
        title: "מעקב פתוחים וזיכרון משרדי",
        desc: "שכבה משותפת ששומרת הקשר ועוקבת אחרי לולאות פתוחות.",
      },
    ],
  },
  example: {
    title: "איך נראה תהליך של עוזר",
    intro:
      "הצורה שכל תהליך עוזר עוקב אחריה, בפישוט. שימו לב איפה האישור יושב: לפני שמשהו פועל.",
    map: {
      caption: "תהליך עוזר",
      ariaLabel: "הצורה המשותפת של תהליך עוזר",
      nodes: [
        { label: "עבודה נכנסת", sub: "פגישה · מייל · בקשה" },
        { label: "הקשר נאסף", sub: "שרשורים · מסמכים · היסטוריה" },
        { label: "טיוטה ומשימות מוכנות" },
        { label: "אישור אנושי", human: true },
        { label: "פעולה במעקב", out: true },
      ],
    },
  },
  how: {
    title: "איך זה עובד",
    steps: [
      {
        title: "מתחילים מתהליך אחד",
        desc: "בונים על האבחון: תהליך אמיתי אחד, לא הכול בבת אחת.",
      },
      {
        title: "מתחברים לכלים הקיימים",
        desc: "מייל, יומן, מסמכים והמערכות שכבר בשימוש.",
      },
      {
        title: "מוסיפים את שכבת העוזר",
        desc: "סיכומים, חילוץ משימות, חיפוש ומעקב, איפה שהם מורידים חיכוך.",
      },
      {
        title: "אישורים לפני פעולות",
        desc: "המערכת מנסחת ומציעה; אנשים מאשרים כל דבר ששולח או משנה.",
        human: true,
      },
      {
        title: "מגדלים את הזיכרון המשרדי",
        desc: "כל תהליך מוסיף להקשר משותף שאפשר לחפש בו, לאורך זמן.",
      },
    ],
  },
  human: {
    title: "מה נשאר אנושי",
    intro: "העוזר מנסח ומציע; אנשים מאשרים את מה שחשוב.",
    items: [
      {
        title: "שליחה ותגובה",
        desc: "הודעות ללקוחות מנוסחות כטיוטה, ולעולם לא נשלחות בלי אישור.",
      },
      {
        title: "פעולות רגישות",
        desc: "כל דבר שמשנה רשומות או מחייב את העסק מחכה לאדם.",
      },
      {
        title: "שיקול הדעת הסופי",
        desc: "העוזר מציף אפשרויות; אנשים מחליטים.",
      },
    ],
  },
  cta: {
    heading: "בונים את המערכת סביב תהליך אמיתי אחד.",
    body: "מתחילים מתהליך יחיד, כמו פגישות, מעקב או חיפוש ידע, ומרחיבים משם.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the Internal AI Systems page content for a locale. */
export const internalAiSystemsContent = localeAccessor(
  "internalAiSystemsContent",
  CONTENT,
);
