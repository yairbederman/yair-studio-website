import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { capabilityCards } from "@/content/capability-cards";
import type { CardItem, Locale } from "@/content/types";

/**
 * /about page content — typed and locale-keyed. The "What I make" cards are
 * the five capabilities, derived from capabilityCards(locale) so the titles
 * and one-liners live in exactly one place (src/lib/capabilities.ts +
 * src/content/capability-cards.ts).
 */

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

/** The five capabilities as plain cards (title + one line). */
const capabilityItems = (locale: Locale): readonly CardItem[] =>
  capabilityCards(locale).map((c) => ({ title: c.title, desc: c.summary }));

const en: AboutContent = {
  hero: {
    title: "About y[AI]r studio",
    lead: "y[AI]r studio runs the recurring work of small professional offices and builds what a service business needs around it: agents, mapped processes, websites, films, and hands-on AI sessions for the team. One person, not an agency, with your people approving what matters.",
  },
  build: {
    title: "What I make",
    intro: "Five capabilities, each with its own page.",
    items: capabilityItems("en"),
  },
  whoRuns: {
    title: "Who runs this",
    paragraphs: [
      "More than twenty years in software and R&D leadership: at Viber, from R&D project manager to team lead on a product used by hundreds of millions of people; then R&D Manager at Lognet. Since August 2024 I work independently as an AI systems architect, and y[AI]r studio is where that work lives.",
      "The studio's work is for small professional offices and service businesses where meetings, documents, email, deadlines, and follow-up all cross paths, often in Hebrew and English. One system already runs today for a B2B law firm: marketing analytics and lead generation, anonymized here.",
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
    body: "Owners and office managers of small professional offices, law first, and the teams of service businesses whose work has outgrown manual coordination: more requests, documents, deadlines, and follow-up than anyone can hold in their head. The work runs in Hebrew and English, whichever your office uses day to day.",
  },
  cta: {
    heading: "Start with one workflow.",
    body: "Book a free scoping call. We look at one process that costs your office time before deciding what is worth building.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) about content — hebrew-quality drafted. */
const he: AboutContent = {
  hero: {
    title: "על y[AI]r studio",
    lead: "y[AI]r studio מריץ את העבודה החוזרת של משרדים מקצועיים קטנים, ובונה סביבה את מה שעסק שירותים צריך: סוכנים, תהליכים ממופים, אתרים, סרטונים ומפגשי AI מעשיים לצוות. אדם אחד, לא סוכנות, כשהאנשים שלכם מאשרים את מה שחשוב.",
  },
  build: {
    title: "מה אני בונה",
    intro: "חמש יכולות, לכל אחת עמוד משלה.",
    items: capabilityItems("he"),
  },
  whoRuns: {
    title: "מי מאחורי הסטודיו",
    paragraphs: [
      "יותר מעשרים שנה בתוכנה ובהובלת מו״פ: ב-Viber, ממנהל פרויקטים במו״פ ועד ראש צוות במוצר שמאות מיליוני אנשים משתמשים בו; אחר כך מנהל מו״פ ב-Lognet. מאוגוסט 2024 אני עובד באופן עצמאי כארכיטקט מערכות AI, ו-y[AI]r studio הוא המקום שבו העבודה הזאת חיה.",
      "העבודה של הסטודיו מיועדת למשרדים מקצועיים קטנים ולעסקי שירותים שבהם פגישות, מסמכים, מייל, מועדים ומעקב נפגשים, לא פעם בעברית ובאנגלית גם יחד. מערכת אחת כבר רצה היום אצל משרד עורכי דין B2B: ניתוח שיווק וייצור לידים, בלי לציין שם.",
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
    body: "בעלים ומנהלי משרד של משרדים מקצועיים קטנים, קודם כול עורכי דין, וצוותים בעסקי שירותים שהעבודה שלהם גדלה מעבר לתיאום ידני: יותר פניות, מסמכים, מועדים ומעקב ממה שאפשר להחזיק בראש. העבודה מתנהלת בעברית או באנגלית, לפי מה שהמשרד משתמש בו ביומיום.",
  },
  cta: {
    heading: "מתחילים מתהליך אחד.",
    body: "קובעים שיחת אפיון חינם. מסתכלים על תהליך אחד שעולה למשרד זמן, לפני שמחליטים מה שווה לבנות.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, AboutContent>> = { en, he };

/** Resolve the /about page content for a locale. */
export const aboutContent = localeAccessor("aboutContent", CONTENT);
