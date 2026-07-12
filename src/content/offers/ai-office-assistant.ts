import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/**
 * Managed AI Office Assistant — the flagship offer (setup fee + monthly
 * retainer, small professional offices, law first).
 *
 * This page overrides the site-wide workflow CTA LABEL only (a managed
 * service sells a running office, so the ask is "see how your office would
 * run", not "send one stuck workflow"); the DESTINATION stays single-sourced
 * from shellContent().workflowCta.href.
 *
 * The optional caseStudy section is intentionally absent until real,
 * owner-supplied engagement facts exist. Do not add one from imagination:
 * every fact must trace to the actual anonymized client engagement.
 */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Managed service",
    title: "A managed AI assistant that runs your office's recurring work",
    lead: "Morning briefings ready before you sit down. An inbox sorted into decisions. Documents and follow-ups chased without anyone remembering to chase them. The assistant runs in your office's own private environment, and your people approve everything that matters.",
    ctaLabel: "See how your office would run",
    ctaHref: shellContent("en").workflowCta.href,
    secondaryCta: { label: "How pricing works", href: "#pricing" },
  },
  film: {
    sectionTitle: "What your office logs into",
    webm: "/videos/command-center.webm",
    mp4: "/videos/command-center.mp4",
    poster: "/videos/command-center-poster.png",
    caption:
      "The command center your office logs into: the day's work in one view — meetings, urgent email, waiting clients, deadlines — with what matters waiting for a person's approval. Taking shape, shown with sample data.",
    filmName: "command center film",
  },
  who: {
    title: "Built for offices that sound like this",
    items: [
      {
        title: "The morning starts with reconstruction",
        desc: "Meetings, deadlines, and waiting items live in five tools, and someone assembles the day by hand.",
      },
      {
        title: "The inbox sets the priorities",
        desc: "Urgent client email sits between noise, and triage eats the first working hour.",
      },
      {
        title: "Documents wait on chasing",
        desc: "Drafts, reviews, and signatures stall until somebody remembers to push them.",
      },
      {
        title: "Follow-up depends on memory",
        desc: "Leads, quotes, and open client promises slip when the week gets loud.",
      },
    ],
  },
  problems: {
    title: "Where office days leak",
    items: [
      {
        title: "Assembly work",
        desc: "Rebuilding the same picture of the day, every day, from email, calendar, and documents.",
      },
      {
        title: "Triage work",
        desc: "Deciding what is urgent before any real work can start.",
      },
      {
        title: "Chasing work",
        desc: "Reminding people about documents, replies, and promises already made.",
      },
      {
        title: "Invisible waiting",
        desc: "Items that block clients sit unnoticed because no single view shows them.",
      },
    ],
  },
  build: {
    title: "What your assistant handles",
    intro: "A daily operating rhythm around the tools the office already uses.",
    items: [
      {
        title: "Morning briefing",
        desc: "A command-center view of the day before it starts: meetings, deadlines, urgent items, and what waits for a decision.",
      },
      {
        title: "Email triage",
        desc: "Incoming mail sorted by urgency and matter, grouped with its context, with draft replies prepared for approval.",
      },
      {
        title: "Document workflows",
        desc: "Drafts, reviews, versions, and signatures tracked from intake to done, with stalled documents surfaced.",
      },
      {
        title: "Follow-up and meetings",
        desc: "Meetings turned into owners, tasks, and dates; leads, quotes, and client promises tracked until they close.",
      },
    ],
  },
  example: {
    title: "One office morning, run by the assistant",
    intro: "A simplified view of the daily rhythm, with the approval point where it belongs.",
    map: {
      caption: "Overnight to a decided day",
      ariaLabel: "A morning office workflow run by the managed assistant",
      nodes: [
        { label: "Overnight inputs", sub: "email · calendar · documents" },
        { label: "Morning briefing prepared" },
        { label: "Inbox triaged, drafts ready" },
        { label: "Documents and follow-ups surfaced" },
        { label: "Human approval", human: true },
        { label: "The day starts decided", out: true },
      ],
    },
  },
  how: {
    title: "How the service runs",
    intro: "A managed engagement: one setup, then a monthly operating rhythm.",
    steps: [
      {
        title: "Map the office week",
        desc: "We map how mornings, email, documents, and follow-up actually run today, and where they leak.",
      },
      {
        title: "Stand up your private environment",
        desc: "The assistant runs in an environment dedicated to your office. Your data stays yours.",
      },
      {
        title: "Onboard the first workflows",
        desc: "Briefing and triage first; document and follow-up workflows join as the office trusts the rhythm.",
      },
      {
        title: "Run and adjust month to month",
        desc: "The service is managed: what the assistant handles grows with the office, and support is part of the retainer.",
      },
      {
        title: "Approval stays in the office",
        desc: "No message leaves and nothing sensitive changes without a person signing off.",
        human: true,
      },
    ],
  },
  dataHandling: {
    title: "How your office's data is handled",
    intro:
      "The boundaries the assistant runs inside — the same ones the studio applies to every office.",
    items: [
      {
        title: "A private environment per office",
        desc: "The assistant runs in an environment dedicated to your office, not a shared pool.",
      },
      {
        title: "Read-only where possible",
        desc: "Where a workflow only needs to read, it starts read-only.",
      },
      {
        title: "No message leaves without approval",
        desc: "Nothing is sent to a client or outside the office until a person approves it.",
      },
      {
        title: "Nothing changed or deleted silently",
        desc: "No data is changed or deleted without explicit approval.",
      },
      {
        title: "Unclear items go to a person",
        desc: "Anything the assistant is unsure about is routed to a person, not guessed.",
      },
      {
        title: "Your data stays yours",
        desc: "The office's data belongs to the office, start to finish.",
      },
    ],
    note: "The specifics of your environment — where it runs and which tools it touches — are agreed in the first conversation, not decided here.",
  },
  pricing: {
    title: "How the engagement is priced",
    intro: "Two parts, agreed before anything is built.",
    items: [
      {
        title: "One-time setup",
        desc: "Covers mapping the office, standing up your private environment, and onboarding the first workflows.",
      },
      {
        title: "Monthly retainer",
        desc: "Covers the daily runs, support, adjustments, and gradually widening what the assistant handles.",
      },
    ],
    note: "Amounts depend on the office's size and workflows. They are agreed in the first conversation, not hidden here.",
  },
  human: {
    title: "What stays with your people",
    intro: "The assistant assembles, drafts, and chases. Judgment stays in the office.",
    items: [
      {
        title: "Client communication",
        desc: "Every message to a client leaves only after a person approves it.",
      },
      {
        title: "Legal and sensitive calls",
        desc: "Anything with real consequences waits for the responsible person.",
      },
      {
        title: "Priorities",
        desc: "The assistant proposes what matters today; the office decides.",
      },
      {
        title: "The final word",
        desc: "Drafts are starting points. What goes out is yours to edit and own.",
      },
    ],
  },
  cta: {
    heading: "See your office with its mornings decided.",
    body: "Tell me how your office runs today. A few lines is enough: the tools, the recurring work, and where the week leaks. We map it first, then scope the setup.",
    ctaLabel: "See how your office would run",
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) flagship content — hebrew-quality drafted. */
const he: OfferPageContent = {
  hero: {
    eyebrow: "שירות מנוהל",
    title: "עוזר AI מנוהל שמריץ את העבודה השוטפת של המשרד",
    lead: "תדריך בוקר מוכן לפני שהתיישבתם. תיבת מייל ממוינת להחלטות. מסמכים ומעקבים מקודמים בלי שמישהו צריך לזכור לרדוף אחריהם. העוזר רץ בסביבה פרטית של המשרד שלכם, והצוות מאשר כל דבר שחשוב.",
    ctaLabel: "לראות איך המשרד שלכם היה רץ",
    ctaHref: shellContent("he").workflowCta.href,
    secondaryCta: { label: "איך התמחור עובד", href: "#pricing" },
  },
  film: {
    sectionTitle: "מה שהמשרד שלכם נכנס אליו",
    webm: "/videos/command-center-he.webm",
    mp4: "/videos/command-center-he.mp4",
    poster: "/videos/command-center-he-poster.png",
    caption:
      "מוקד הבקרה שהמשרד שלכם נכנס אליו: כל העבודה של היום בתצוגה אחת — פגישות, מיילים דחופים, לקוחות שמחכים, דדליין — כשמה שחשוב מחכה לאישור של אדם. בהתהוות, מוצג עם נתוני דוגמה.",
    filmName: "סרטון מוקד הבקרה",
  },
  who: {
    title: "נבנה למשרדים שנשמעים ככה",
    items: [
      {
        title: "הבוקר מתחיל בהרכבת תמונה",
        desc: "פגישות, מועדים ופריטים שמחכים מפוזרים בחמישה כלים, ומישהו מרכיב את היום ביד.",
      },
      {
        title: "תיבת המייל קובעת את סדר היום",
        desc: "מייל דחוף מלקוח יושב בין רעש, והמיון אוכל את השעה הראשונה.",
      },
      {
        title: "מסמכים מחכים שירדפו אחריהם",
        desc: "טיוטות, בדיקות וחתימות נתקעות עד שמישהו נזכר לדחוף.",
      },
      {
        title: "המעקב תלוי בזיכרון",
        desc: "לידים, הצעות מחיר והבטחות ללקוחות מחליקים כשהשבוע נהיה עמוס.",
      },
    ],
  },
  problems: {
    title: "איפה ימי המשרד דולפים",
    items: [
      {
        title: "עבודת הרכבה",
        desc: "בונים מחדש את אותה תמונת יום, כל יום, ממייל, יומן ומסמכים.",
      },
      {
        title: "עבודת מיון",
        desc: "מחליטים מה דחוף עוד לפני שמתחילה עבודה אמיתית.",
      },
      {
        title: "עבודת רדיפה",
        desc: "מזכירים לאנשים מסמכים, תשובות והבטחות שכבר ניתנו.",
      },
      {
        title: "המתנה בלתי נראית",
        desc: "פריטים שחוסמים לקוחות יושבים בצד, כי אין תצוגה אחת שמראה אותם.",
      },
    ],
  },
  build: {
    title: "מה העוזר לוקח על עצמו",
    intro: "קצב תפעול יומי סביב הכלים שהמשרד כבר עובד איתם.",
    items: [
      {
        title: "תדריך בוקר",
        desc: "תמונת מצב של היום לפני שהוא מתחיל: פגישות, מועדים, פריטים דחופים ומה שמחכה להחלטה.",
      },
      {
        title: "מיון מיילים",
        desc: "דואר נכנס ממוין לפי דחיפות ותיק, מחובר להקשר שלו, עם טיוטות תשובה מוכנות לאישור.",
      },
      {
        title: "תהליכי מסמכים",
        desc: "טיוטות, בדיקות, גרסאות וחתימות במעקב מקליטה ועד סגירה, כשמסמכים תקועים צפים למעלה.",
      },
      {
        title: "מעקב ופגישות",
        desc: "פגישות הופכות לאחראים, משימות ותאריכים; לידים, הצעות והבטחות ללקוחות במעקב עד שנסגרים.",
      },
    ],
  },
  example: {
    title: "בוקר אחד במשרד, בניהול העוזר",
    intro: "תצוגה מפושטת של הקצב היומי, עם נקודת האישור במקום הנכון.",
    map: {
      caption: "מהלילה ליום מוכרע",
      ariaLabel: "תהליך בוקר משרדי שמנוהל על ידי העוזר",
      nodes: [
        { label: "קלט שנצבר בלילה", sub: "מייל · יומן · מסמכים" },
        { label: "תדריך בוקר מוכן" },
        { label: "מיילים ממוינים, טיוטות מוכנות" },
        { label: "מסמכים ומעקבים צפים" },
        { label: "אישור אנושי", human: true },
        { label: "היום מתחיל מוכרע", out: true },
      ],
    },
  },
  how: {
    title: "איך השירות רץ",
    intro: "התקשרות מנוהלת: הקמה אחת, ואז קצב תפעול חודשי.",
    steps: [
      {
        title: "ממפים את שבוע המשרד",
        desc: "ממפים איך בקרים, מייל, מסמכים ומעקב באמת רצים היום, ואיפה הם דולפים.",
      },
      {
        title: "מקימים סביבה פרטית",
        desc: "העוזר רץ בסביבה ייעודית למשרד שלכם. המידע נשאר שלכם.",
      },
      {
        title: "מפעילים את התהליכים הראשונים",
        desc: "קודם תדריך ומיון; תהליכי מסמכים ומעקב מצטרפים כשהמשרד סומך על הקצב.",
      },
      {
        title: "מריצים ומכווננים חודש בחודשו",
        desc: "השירות מנוהל: מה שהעוזר מטפל בו גדל עם המשרד, והתמיכה חלק מהריטיינר.",
      },
      {
        title: "האישור נשאר במשרד",
        desc: "שום הודעה לא יוצאת ושום דבר רגיש לא משתנה בלי חתימה של אדם.",
        human: true,
      },
    ],
  },
  dataHandling: {
    title: "איך מטופל המידע של המשרד שלכם",
    intro:
      "הגבולות שבתוכם העוזר רץ — אותם גבולות שהסטודיו מיישם בכל משרד.",
    items: [
      {
        title: "סביבה פרטית לכל משרד",
        desc: "העוזר רץ בסביבה ייעודית למשרד שלכם, לא במאגר משותף.",
      },
      {
        title: "קריאה בלבד כשאפשר",
        desc: "כשתהליך צריך רק לקרוא, הוא מתחיל במצב קריאה בלבד.",
      },
      {
        title: "שום הודעה לא יוצאת בלי אישור",
        desc: "שום דבר לא נשלח ללקוח או אל מחוץ למשרד עד שאדם מאשר.",
      },
      {
        title: "שום דבר לא משתנה או נמחק בשקט",
        desc: "מידע לא משתנה ולא נמחק בלי אישור מפורש.",
      },
      {
        title: "פריטים לא ברורים עוברים לאדם",
        desc: "כל דבר שהעוזר לא בטוח לגביו מנותב לאדם, לא מנוחש.",
      },
      {
        title: "המידע שלכם נשאר שלכם",
        desc: "המידע של המשרד שייך למשרד, מההתחלה ועד הסוף.",
      },
    ],
    note: "הפרטים של הסביבה שלכם — היכן היא רצה ובאילו כלים היא נוגעת — נסגרים בשיחה הראשונה, לא כאן.",
  },
  pricing: {
    title: "איך ההתקשרות מתומחרת",
    intro: "שני חלקים, שנסגרים לפני שבונים.",
    items: [
      {
        title: "הקמה חד־פעמית",
        desc: "כוללת מיפוי של המשרד, הקמת הסביבה הפרטית והפעלת התהליכים הראשונים.",
      },
      {
        title: "ריטיינר חודשי",
        desc: "כולל את הריצות היומיות, תמיכה, כוונונים והרחבה הדרגתית של מה שהעוזר מטפל בו.",
      },
    ],
    note: "הסכומים תלויים בגודל המשרד ובתהליכים. הם נסגרים בשיחה הראשונה, לא מוסתרים כאן.",
  },
  human: {
    title: "מה נשאר אצל האנשים שלכם",
    intro: "העוזר מרכיב, מנסח ורודף. שיקול הדעת נשאר במשרד.",
    items: [
      {
        title: "תקשורת עם לקוחות",
        desc: "כל הודעה ללקוח יוצאת רק אחרי שאדם אישר אותה.",
      },
      {
        title: "החלטות משפטיות ורגישות",
        desc: "כל דבר עם השלכות אמיתיות מחכה לגורם האחראי.",
      },
      {
        title: "סדרי עדיפויות",
        desc: "העוזר מציע מה חשוב היום; המשרד מחליט.",
      },
      {
        title: "המילה האחרונה",
        desc: "טיוטות הן נקודת פתיחה. מה שיוצא החוצה שלכם לערוך ולחתום עליו.",
      },
    ],
  },
  cta: {
    heading: "תראו את המשרד שלכם עם בקרים מוכרעים.",
    body: "ספרו איך המשרד רץ היום. כמה שורות מספיקות: הכלים, העבודה שחוזרת על עצמה ואיפה השבוע דולף. קודם ממפים, ואז מגדירים את ההקמה.",
    ctaLabel: "לראות איך המשרד שלכם היה רץ",
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the Managed AI Office Assistant page content for a locale. */
export const aiOfficeAssistantContent = localeAccessor(
  "aiOfficeAssistantContent",
  CONTENT,
);
