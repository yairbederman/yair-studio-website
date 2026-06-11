import { localeAccessor } from "@/content/types";
import type { CardItem, Locale, SpineNode } from "@/content/types";

/** /workflows page content — typed and locale-keyed. */

export type WorkflowsContent = {
  hero: { title: string; lead: string };
  example: {
    title: string;
    intro: string;
    film: {
      webm: string;
      mp4: string;
      poster: string;
      caption: string;
      filmName: string;
    };
    before: { caption: string; items: readonly string[] };
    mapped: { caption: string; ariaLabel: string; nodes: readonly SpineNode[] };
  };
  others: { title: string; intro: string; items: readonly CardItem[] };
  human: { title: string; intro: string; items: readonly CardItem[] };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};

const en: WorkflowsContent = {
  hero: {
    title: "How a messy workflow becomes a system",
    lead: "The work starts by mapping where a process gets stuck, then turning scattered inputs into clear next actions with a human approval step built in. Here is one workflow mapped end to end.",
  },
  example: {
    title: "Meeting follow-up workflow",
    intro: "An illustration of the approach, not a client case study.",
    film: {
      webm: "/videos/meeting-follow-up-workflow.webm",
      mp4: "/videos/meeting-follow-up-workflow.mp4",
      poster: "/videos/meeting-follow-up-workflow-poster.png",
      caption:
        "The workflow in motion: meeting notes flow through the approval checkpoint into tracked tasks.",
      filmName: "meeting follow-up film",
    },
    before: {
      caption: "The starting state",
      items: [
        "Notes scattered across apps and notebooks",
        "Action items remembered manually",
        "Follow-up depends on one person",
        "No shared view of open loops",
      ],
    },
    mapped: {
      caption: "The map you receive",
      ariaLabel: "Meeting follow-up, mapped as a workflow",
      nodes: [
        { label: "Meeting notes", sub: "transcript · recording · notes" },
        { label: "Extract decisions + tasks" },
        { label: "Assign owner + date" },
        { label: "Draft follow-up" },
        { label: "Human approval", human: true },
        { label: "Update tasks / dashboard", out: true },
      ],
    },
  },
  others: {
    title: "Other workflows that map well",
    intro:
      "These patterns are common in growing service businesses and professional offices, especially when work moves across meetings, documents, email, approvals, and follow-up.",
    items: [
      {
        title: "Client intake",
        desc: "Capture the request, gather missing context, route it to the right owner, and track the next step.",
      },
      {
        title: "Deadline visibility",
        desc: "Show upcoming, overdue, and conditional dates clearly, with uncertainty visible instead of hidden.",
      },
      {
        title: "Document review status",
        desc: "Track which documents are waiting, reviewed, blocked, or ready for a decision.",
      },
      {
        title: "Approval-based outbound communication",
        desc: "Prepare drafts and supporting context, then wait for a person before anything is sent.",
      },
      {
        title: "Weekly operating signal",
        desc: "Summarize what is stuck, what changed, and what needs attention before the next week starts.",
      },
    ],
  },
  human: {
    title: "What stays human",
    intro: "The workflow does the assembly; the judgment stays with people.",
    items: [
      {
        title: "Final wording",
        desc: "Drafts are prepared, but the message that goes out is yours to approve and adjust.",
      },
      {
        title: "Sensitive decisions",
        desc: "Anything with real consequences waits for a person to decide.",
      },
      {
        title: "Sending messages",
        desc: "Nothing leaves on its own. The send is an explicit human action.",
      },
      {
        title: "Priority changes",
        desc: "What matters most, and what can wait, stays a human call.",
      },
    ],
  },
  cta: {
    heading: "See your own workflow mapped like this.",
    body: "Pick one process that slows things down. We map how it runs today before deciding what is worth building.",
    ctaLabel: "Map one workflow",
    ctaHref: "/contact",
  },
};

/** Hebrew (RTL) workflows content — hebrew-quality drafted. */
const he: WorkflowsContent = {
  hero: {
    title: "איך תהליך מבולגן הופך למערכת",
    lead: "העבודה מתחילה במיפוי של איפה התהליך נתקע, וממשיכה בהפיכת קלט מפוזר לצעדים ברורים, עם שלב אישור אנושי מובנה. הנה תהליך אחד ממופה מקצה לקצה.",
  },
  example: {
    title: "תהליך מעקב אחרי פגישות",
    intro: "הדגמה של הגישה, לא מקרה לקוח אמיתי.",
    film: {
      webm: "/videos/meeting-follow-up-workflow.webm",
      mp4: "/videos/meeting-follow-up-workflow.mp4",
      poster: "/videos/meeting-follow-up-workflow-poster.png",
      caption:
        "התהליך בתנועה: סיכומי פגישות עוברים דרך נקודת האישור והופכים למשימות במעקב.",
      filmName: "סרטון מעקב פגישות",
    },
    before: {
      caption: "נקודת ההתחלה",
      items: [
        "הערות מפוזרות בין אפליקציות ומחברות",
        "משימות שזוכרים בעל־פה",
        "המעקב תלוי באדם אחד",
        "אין תמונה משותפת של מה פתוח",
      ],
    },
    mapped: {
      caption: "המפה שמקבלים",
      ariaLabel: "מעקב אחרי פגישות, ממופה כתהליך עבודה",
      nodes: [
        { label: "סיכום פגישה", sub: "תמלול · הקלטה · הערות" },
        { label: "חילוץ החלטות ומשימות" },
        { label: "שיוך אחראי ותאריך" },
        { label: "טיוטת מעקב מוכנה" },
        { label: "אישור אנושי", human: true },
        { label: "עדכון משימות / דשבורד", out: true },
      ],
    },
  },
  others: {
    title: "עוד תהליכים שממופים טוב",
    intro:
      "דפוסים נפוצים בעסקי שירותים צומחים ובמשרדים מקצועיים, במיוחד כשהעבודה עוברת בין פגישות, מסמכים, מייל, אישורים ומעקב.",
    items: [
      {
        title: "קליטת לקוח",
        desc: "קולטים את הפנייה, משלימים הקשר חסר, מנתבים לאחראי הנכון ועוקבים אחרי הצעד הבא.",
      },
      {
        title: "נראות מועדים",
        desc: "מציגים תאריכים קרובים, באיחור ומותנים בצורה ברורה, עם אי־הוודאות גלויה במקום מוסתרת.",
      },
      {
        title: "סטטוס סבב מסמכים",
        desc: "עוקבים אילו מסמכים ממתינים, נבדקו, תקועים או מוכנים להחלטה.",
      },
      {
        title: "תקשורת יוצאת מבוססת אישור",
        desc: "מכינים טיוטות והקשר תומך, ואז מחכים לאדם לפני שמשהו נשלח.",
      },
      {
        title: "איתות תפעולי שבועי",
        desc: "מסכמים מה תקוע, מה השתנה ומה דורש טיפול לפני שהשבוע הבא מתחיל.",
      },
    ],
  },
  human: {
    title: "מה נשאר אנושי",
    intro: "התהליך עושה את ההרכבה; שיקול הדעת נשאר אצל אנשים.",
    items: [
      {
        title: "הניסוח הסופי",
        desc: "הטיוטות מוכנות, אבל ההודעה שיוצאת היא שלכם לאשר ולכוון.",
      },
      {
        title: "החלטות רגישות",
        desc: "כל דבר עם השלכות אמיתיות מחכה להחלטה של אדם.",
      },
      {
        title: "שליחת הודעות",
        desc: "שום דבר לא יוצא לבד. השליחה היא פעולה אנושית מפורשת.",
      },
      {
        title: "שינויי עדיפויות",
        desc: "מה הכי חשוב, ומה יכול לחכות — נשאר שיקול דעת אנושי.",
      },
    ],
  },
  cta: {
    heading: "ככה ייראה גם התהליך שלכם, ממופה.",
    body: "בוחרים תהליך שמאט את העסק. ממפים איך הוא רץ היום, לפני שמחליטים מה שווה לבנות.",
    ctaLabel: "למפות תהליך אחד",
    ctaHref: "/he/contact",
  },
};

const CONTENT: Partial<Record<Locale, WorkflowsContent>> = { en, he };

/** Resolve the /workflows page content for a locale. */
export const workflowsContent = localeAccessor("workflowsContent", CONTENT);
