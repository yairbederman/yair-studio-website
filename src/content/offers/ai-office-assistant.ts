import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import { LINKEDIN_URL } from "@/lib/site";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/**
 * Managed AI Office (/services/managed-office) — the flagship offer and rung
 * 03 of the ladder (one-time setup, then a monthly service; small offices).
 * It is sold as what runs after a project, so `how` spells out month 2 onwards:
 * what runs every day, the monthly report, and how the setup improves. The
 * page speaks to owners: "monthly", never "retainer"; no tool names. The
 * offer's name comes from offerCard() (the h1), never
 * retyped. The Command Center film is its working face; the homepage proof
 * band and the Command Center work item (src/content/work.ts) reuse this
 * file's `film` block (including `mobile`), so the film paths live here once
 * and the block's shape must not change.
 *
 * Baked strings: the Command Center film bakes `film.sectionTitle`, the
 * `build.items` titles and the nouns in their descs, and `example.map`'s
 * first sub, human node and out node; the content-engine film bakes phrases
 * of `included.intro`, `included.items` and its `film.caption` (see the
 * source tables in hyperframes/command-center/DESIGN.md and
 * hyperframes/linkedin-content-engine/DESIGN.md). Keep those verbatim, or
 * re-render.
 *
 * The LinkedIn content engine is INCLUDED in the monthly service
 * (`included`, rendered with id="content" — the retired
 * /offers/linkedin-content-engine route 308s to that anchor; `#pricing` is
 * the hero's in-page target). Its film rides along poster-first, click to
 * play: one autoplaying film per page.
 *
 * This page overrides the site-wide scoping-call CTA LABEL only (a managed
 * service sells a running office, so the ask is "see how your office would
 * run"); the DESTINATION stays single-sourced from shellContent().workflowCta.href.
 *
 * The optional caseStudy section is intentionally absent until real,
 * owner-supplied engagement facts exist. Do not add one from imagination:
 * every fact must trace to the actual anonymized client engagement.
 */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Managed service · one-time setup, then month to month",
    title: `${offerCard("en", "ai-office-assistant").title}: your office's AI department`,
    lead: "Morning briefings ready before you sit down. An inbox sorted into decisions. Documents and follow-ups chased without anyone remembering to chase them. Everything runs in a private environment dedicated to your office, and your people approve what matters. After a project, the studio runs what the project built, reports on it every month, and widens it as the office trusts it.",
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
      "The Command Center your office logs into: the day's work in one view — incoming mail, draft replies, signatures, stalled documents — with what matters waiting for a person's approval. In build, shown with sample data.",
    filmName: "command center film",
    mobile: {
      mp4: "/videos/command-center-mobile.mp4",
      webm: "/videos/command-center-mobile.webm",
      poster: "/videos/command-center-mobile-poster.png",
    },
  },
  who: {
    title: "Built for offices that sound like this",
    items: [
      {
        title: "The morning starts with reconstruction",
        desc: "Meetings, deadlines, and waiting items live in several tools, and someone assembles the day by hand.",
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
    title: "What the managed office handles",
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
    title: "One office morning, run by the studio",
    intro: "A simplified view of the daily rhythm, with the approval point where it belongs.",
    map: {
      caption: "Overnight to a decided day",
      ariaLabel: "A morning office workflow run by the managed office",
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
    title: "How the months run",
    intro: "One setup, then a monthly rhythm. The first weeks are the setup; from then on the studio runs the day, and every month you see what ran and decide what the service takes on next.",
    steps: [
      {
        title: "Set up once",
        desc: "We map how the office week really runs and where it leaks, stand up your private environment, and switch on briefing and triage first.",
      },
      {
        title: "Every day, the work runs",
        desc: "Briefing, triage, documents, and follow-up run on your tools; drafts and proposed actions wait in one approval queue.",
      },
      {
        title: "Approval stays in the office",
        desc: "No message leaves and nothing sensitive changes without a person signing off.",
        human: true,
      },
      {
        title: "Every month, a written report",
        desc: "What ran, what was flagged for a person, and what the studio adjusted, in one short report.",
      },
      {
        title: "Improve and widen",
        desc: "The studio tunes the setup using the drafts your people corrected, and together we choose which work the service takes on next. Support is part of the monthly service.",
      },
    ],
  },
  included: {
    title: "Included: your content engine",
    intro:
      "The monthly service includes the same LinkedIn content engine that runs the studio's own presence: angles proposed from your real material, drafts written in your voice, one review queue, and nothing published without your approval.",
    items: [
      {
        title: "Voice profile",
        desc: "Built from your existing writing, calls, and positions: what you say and how you say it.",
      },
      {
        title: "Weekly drafts",
        desc: "Post drafts sourced from your real material, queued ahead of time.",
      },
      {
        title: "One review queue",
        desc: "Everything waiting for your yes, edit, or no lives in a single place.",
      },
      {
        title: "Publishing rhythm",
        desc: "Approved posts go out on schedule, and the queue refills before it empties.",
      },
    ],
    film: {
      // Story = the engine's flow (material → angles → drafts → review queue →
      // your approval → published on rhythm); caption traces to the intro
      // above. Schematic film (no product UI) — no "Sample data" chip. See
      // hyperframes/linkedin-content-engine/DESIGN.md. Poster-first, click to
      // play: the Command Center above is the page's one autoplaying film.
      sectionTitle: "From material to published",
      webm: "/videos/linkedin-content-engine.webm",
      mp4: "/videos/linkedin-content-engine.mp4",
      poster: "/videos/linkedin-content-engine-poster.png",
      caption:
        "Your material becomes drafts in your voice, held in one review queue — nothing publishes without your approval.",
      filmName: "LinkedIn content engine film",
    },
    proofLink: { label: "See the studio's LinkedIn", href: LINKEDIN_URL },
  },
  dataHandling: {
    title: "How your office's data is handled",
    intro:
      "The boundaries the managed office runs inside — the same ones the studio applies to every office.",
    items: [
      {
        title: "A private environment per office",
        desc: "Everything runs in an environment dedicated to your office, not a shared pool.",
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
        desc: "When the system's confidence is low, the item is flagged for a person instead of acted on.",
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
        title: "Monthly service",
        desc: "Covers the daily runs, the monthly report, the content engine, support, adjustments, and gradually widening the work the service takes on.",
      },
    ],
    note: "Amounts depend on the office's size and workflows. They are agreed in the first conversation, not hidden here.",
  },
  human: {
    title: "What stays with your people",
    intro: "The studio assembles, drafts, and chases. Judgment stays in the office.",
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
        desc: "The briefing proposes what matters today; the office decides.",
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
    eyebrow: "שירות מנוהל · הקמה חד־פעמית, ואז חודש אחרי חודש",
    title: `${offerCard("he", "ai-office-assistant").title}: מחלקת ה-AI של המשרד`,
    lead: "תדריך בוקר מוכן לפני שהתיישבתם. תיבת מייל ממוינת להחלטות. מסמכים ומעקבים מקודמים בלי שמישהו צריך לזכור לרדוף אחריהם. הכול רץ בסביבה פרטית שמוקדשת למשרד שלכם, והצוות מאשר את מה שחשוב. אחרי פרויקט, הסטודיו מריץ את מה שהפרויקט בנה, מדווח עליו כל חודש ומרחיב אותו ככל שהמשרד סומך עליו.",
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
      "מוקד הבקרה שהמשרד שלכם נכנס אליו: כל העבודה של היום בתצוגה אחת — דואר נכנס, טיוטות תשובה, חתימות, מסמכים תקועים — כשמה שחשוב מחכה לאישור של אדם. בבנייה, מוצג עם נתוני דוגמה.",
    filmName: "סרטון מוקד הבקרה",
    mobile: {
      mp4: "/videos/command-center-mobile-he.mp4",
      webm: "/videos/command-center-mobile-he.webm",
      poster: "/videos/command-center-mobile-he-poster.png",
    },
  },
  who: {
    title: "נבנה למשרדים שנשמעים ככה",
    items: [
      {
        title: "הבוקר מתחיל בהרכבת תמונה",
        desc: "פגישות, מועדים ופריטים שמחכים מפוזרים בכמה כלים, ומישהו מרכיב את היום ביד.",
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
    title: "מה המשרד המנוהל לוקח על עצמו",
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
        desc: "פגישות הופכות לאחראים, משימות ותאריכים. לידים, הצעות והבטחות ללקוחות במעקב עד שנסגרים.",
      },
    ],
  },
  example: {
    title: "בוקר אחד במשרד, בניהול הסטודיו",
    intro: "תצוגה מפושטת של הקצב היומי, עם נקודת האישור במקום הנכון.",
    map: {
      caption: "מהלילה ליום מוכרע",
      ariaLabel: "תהליך בוקר משרדי שמנוהל על ידי המשרד המנוהל",
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
    title: "איך נראה כל חודש",
    intro: "הקמה אחת, ואז קצב חודשי. השבועות הראשונים הם ההקמה. משם הסטודיו מריץ את היום, ובכל חודש אתם רואים מה רץ ומחליטים איזו עבודה השירות לוקח על עצמו הלאה.",
    steps: [
      {
        title: "מקימים פעם אחת",
        desc: "ממפים איך שבוע המשרד באמת רץ ואיפה הוא דולף, מקימים את הסביבה הפרטית שלכם ומפעילים קודם את התדריך ואת המיון.",
      },
      {
        title: "כל יום, העבודה רצה",
        desc: "תדריך, מיון, מסמכים ומעקב רצים על הכלים שלכם. טיוטות ופעולות מוצעות מחכות בתור אישורים אחד.",
      },
      {
        title: "האישור נשאר במשרד",
        desc: "שום הודעה לא יוצאת ושום דבר רגיש לא משתנה בלי חתימה של אדם.",
        human: true,
      },
      {
        title: "כל חודש, דוח כתוב",
        desc: "מה רץ, מה סומן לבדיקה של אדם ומה הסטודיו כוונן, בדוח קצר אחד.",
      },
      {
        title: "משפרים ומרחיבים",
        desc: "הסטודיו מכוונן את ההגדרות לפי הטיוטות שהאנשים שלכם תיקנו, ויחד בוחרים איזו עבודה השירות לוקח על עצמו הלאה. התמיכה כלולה בשירות החודשי.",
      },
    ],
  },
  included: {
    title: "כלול: מנוע התוכן שלכם",
    intro:
      "השירות החודשי כולל את אותו מנוע תוכן ללינקדאין שמריץ את הנוכחות של הסטודיו עצמו: זוויות שמוצעות מהחומר האמיתי שלכם, טיוטות בקול שלכם, תור אישורים אחד, ושום דבר לא מתפרסם בלי אישור שלכם.",
    items: [
      {
        title: "פרופיל קול",
        desc: "נבנה מהכתיבה, השיחות והעמדות הקיימות שלכם: מה אתם אומרים ואיך.",
      },
      {
        title: "טיוטות שבועיות",
        desc: "טיוטות פוסטים מהחומר האמיתי שלכם, מוכנות מראש בתור.",
      },
      {
        title: "תור אישורים אחד",
        desc: "כל מה שמחכה לאישור, לעריכה או לפסילה שלכם, במקום אחד.",
      },
      {
        title: "קצב פרסום",
        desc: "פוסטים מאושרים יוצאים בזמן, והתור מתמלא לפני שהוא מתרוקן.",
      },
    ],
    film: {
      // תרגום-יצירה RTL; הכיתוב נגזר מה-intro שלמעלה. סרטון סכמטי — ללא צ'יפ
      // "נתוני דוגמה". פוסטר קודם, הפעלה בלחיצה: מוקד הבקרה למעלה הוא הסרטון
      // האחד שרץ אוטומטית בעמוד.
      sectionTitle: "מחומר לפרסום",
      webm: "/videos/linkedin-content-engine-he.webm",
      mp4: "/videos/linkedin-content-engine-he.mp4",
      poster: "/videos/linkedin-content-engine-he-poster.png",
      caption:
        "החומר שלכם הופך לטיוטות בקול שלכם, מחכות בתור אישורים אחד — ושום דבר לא מתפרסם בלי אישור שלכם.",
      filmName: "סרטון מנוע התוכן",
    },
    proofLink: { label: "לראות את הלינקדאין של הסטודיו", href: LINKEDIN_URL },
  },
  dataHandling: {
    title: "איך מטופל המידע של המשרד שלכם",
    intro:
      "הגבולות שבתוכם המשרד המנוהל רץ — אותם גבולות שהסטודיו מיישם בכל משרד.",
    items: [
      {
        title: "סביבה פרטית לכל משרד",
        desc: "הכול רץ בסביבה ייעודית למשרד שלכם, לא במאגר משותף.",
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
        desc: "כשהמערכת לא בטוחה מספיק, הפריט מסומן לבדיקה של אדם במקום שהיא תפעל.",
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
        title: "שירות חודשי",
        desc: "כולל את הריצות היומיות, הדוח החודשי, מנוע התוכן, תמיכה, כוונונים והרחבה הדרגתית של העבודה שהשירות לוקח על עצמו.",
      },
    ],
    note: "הסכומים תלויים בגודל המשרד ובתהליכים. הם נסגרים בשיחה הראשונה, לא מוסתרים כאן.",
  },
  human: {
    title: "מה נשאר אצל האנשים שלכם",
    intro: "הסטודיו מרכיב, מנסח ורודף אחרי מה שחסר. שיקול הדעת נשאר במשרד.",
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
        desc: "התדריך מציע מה חשוב היום, והמשרד מחליט.",
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

/** Resolve the Managed AI Office page content for a locale. */
export const aiOfficeAssistantContent = localeAccessor(
  "aiOfficeAssistantContent",
  CONTENT,
);
