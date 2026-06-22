import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { CardItem, Locale } from "@/content/types";

/** /about page content — typed and locale-keyed. */

export type AboutContent = {
  hero: { title: string; lead: string };
  build: { title: string; intro: string; items: readonly CardItem[] };
  /**
   * "Who runs this" — the founder section. Narrative paragraphs live here;
   * the founder identity, credentials, and career spine come from
   * src/content/proof.ts (single source of truth).
   */
  whoRuns: { title: string; paragraphs: readonly string[] };
  how: { title: string; intro: string; principles: readonly string[] };
  who: { title: string; body: string };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};

const en: AboutContent = {
  hero: {
    title: "AI systems for real business workflows",
    lead: "y[AI]r studio builds AI workflow systems for real business operations: the everyday processes a growing service business runs on. The work is practical, not a demo. Map the process first, then build only what earns its place, with people in control of the decisions that matter.",
  },
  build: {
    title: "What I build",
    intro: "Small systems built around how the work actually runs.",
    items: [
      {
        title: "Workflow maps",
        desc: "One real process drawn end to end: steps, owners, inputs, outputs, and where work gets stuck.",
      },
      {
        title: "Internal AI assistants",
        desc: "Practical assistants for meetings, tasks, email, knowledge search, reporting, and follow-up.",
      },
      {
        title: "Dashboards & automation",
        desc: "A connected view of what needs attention, with the right next action close at hand.",
      },
      {
        title: "Approval-first systems",
        desc: "Systems that draft and prepare the work, then wait for a human decision.",
      },
    ],
  },
  whoRuns: {
    title: "Who runs this",
    paragraphs: [
      "I come from R&D and software leadership, where systems have to work beyond the demo: unclear requirements, messy inputs, real users, edge cases, and production constraints.",
      "The work is especially useful for growing service businesses and professional offices where meetings, documents, email, deadlines, and follow-up all cross paths, often in Hebrew and English.",
    ],
  },
  how: {
    title: "How I think about AI",
    intro: "A few principles that keep these systems useful past the first week.",
    principles: [
      "Map before automating",
      "Keep humans in control",
      "Connect existing tools instead of replacing them",
      "Make the next action visible",
      "Support adoption after setup, not just hand off the system",
      "Skip AI demos that don't survive real work",
    ],
  },
  who: {
    title: "Who it's for",
    body: "Growing service businesses, operators, founders, professional offices, and lean teams running real work across too many tools. Professional offices, including legal, document-heavy, and approval-driven teams, are a strong fit for this approach. The same system fits any service business whose workflows have outgrown manual coordination. The work runs in Hebrew and English, whichever the team actually uses day to day.",
  },
  cta: {
    heading: "Start with one real workflow.",
    body: "Pick a process that slows things down. We map how it runs today before deciding what is worth building.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) about content — hebrew-quality drafted. */
const he: AboutContent = {
  hero: {
    title: "מערכות AI לתהליכי עבודה אמיתיים",
    lead: "y[AI]r studio בונה מערכות AI לתפעול עסקי אמיתי: התהליכים היומיומיים שעסק שירותים צומח רץ עליהם. העבודה פרקטית, לא דמו. קודם ממפים את התהליך, ואז בונים רק את מה שמצדיק את מקומו, עם אנשים בשליטה על ההחלטות שחשובות.",
  },
  build: {
    title: "מה אני בונה",
    intro: "מערכות קטנות סביב איך שהעבודה באמת רצה.",
    items: [
      {
        title: "מפות תהליכים",
        desc: "תהליך אמיתי אחד משורטט מקצה לקצה: שלבים, אחראים, קלט ופלט, ואיפה העבודה נתקעת.",
      },
      {
        title: "עוזרי AI פנימיים",
        desc: "עוזרים פרקטיים לפגישות, משימות, מייל, חיפוש ידע, דוחות ומעקב.",
      },
      {
        title: "דשבורדים ואוטומציה",
        desc: "תצוגה מחוברת של מה שדורש טיפול, עם הצעד הנכון הבא זמין מיד.",
      },
      {
        title: "מערכות מבוססות אישור",
        desc: "מערכות שמכינות את העבודה כטיוטה, ואז מחכות להחלטה אנושית.",
      },
    ],
  },
  whoRuns: {
    title: "מי מאחורי הסטודיו",
    paragraphs: [
      "אני מגיע ממו״פ ומהובלת פיתוח, שם מערכות צריכות לעבוד גם אחרי הדמו: דרישות לא ברורות, קלט מבולגן, משתמשים אמיתיים, מקרי קצה ואילוצי פרודקשן.",
      "העבודה שימושית במיוחד לעסקי שירותים צומחים ולמשרדים מקצועיים, שבהם פגישות, מסמכים, מייל, מועדים ומעקב נפגשים, לא פעם בעברית ובאנגלית גם יחד.",
    ],
  },
  how: {
    title: "איך אני חושב על AI",
    intro: "כמה עקרונות שמשאירים את המערכות שימושיות גם אחרי השבוע הראשון.",
    principles: [
      "ממפים לפני שבונים אוטומציה",
      "האדם נשאר בשליטה",
      "מתחברים לכלים הקיימים במקום להחליף אותם",
      "הצעד הבא תמיד גלוי",
      "מלווים את ההטמעה אחרי ההקמה, לא רק מוסרים מערכת",
      "מדלגים על דמואים של AI שלא שורדים עבודה אמיתית",
    ],
  },
  who: {
    title: "למי זה מתאים",
    body: "עסקי שירותים צומחים, מנהלי תפעול, מייסדים, משרדים מקצועיים וצוותים רזים שמריצים עבודה אמיתית על יותר מדי כלים. משרדים מקצועיים — משפטיים, עתירי מסמכים ומבוססי אישורים — מתאימים במיוחד לגישה הזאת. אותה מערכת מתאימה לכל עסק שירותים שהתהליכים שלו גדלו מעבר לתיאום ידני. העבודה מתנהלת בעברית או באנגלית, לפי מה שהצוות באמת משתמש בו ביומיום.",
  },
  cta: {
    heading: "מתחילים מתהליך אמיתי אחד.",
    body: "בוחרים תהליך שמאט את העסק. ממפים איך הוא רץ היום, לפני שמחליטים מה שווה לבנות.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, AboutContent>> = { en, he };

/** Resolve the /about page content for a locale. */
export const aboutContent = localeAccessor("aboutContent", CONTENT);
