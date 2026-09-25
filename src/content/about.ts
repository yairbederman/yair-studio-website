import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { serviceCards } from "@/content/service-cards";
import { offerCard } from "@/content/offer-cards";
import type { CardItem, Cta, Locale } from "@/content/types";

/**
 * /about page content — typed and locale-keyed. The "What I make" cards are
 * the three services, derived from serviceCards(locale), and the monthly
 * managed office below them takes its title, CTA and link from
 * offerCard(locale, "ai-office-assistant"), so every name and link lives in
 * exactly one place (src/lib/services.ts + src/content/service-cards.ts,
 * src/lib/offers.ts + src/content/offer-cards.ts). Only the office card's
 * one line is written here, in this page's first-person voice.
 */

/** A card that links to its page (LinkCardGrid item). */
type LinkCard = CardItem & { cta: Cta };

export type AboutContent = {
  hero: { title: string; lead: string };
  build: {
    title: string;
    intro: string;
    /** The three services. */
    items: readonly LinkCard[];
    /** The monthly managed office: what runs after a project. */
    after: LinkCard;
  };
  /**
   * "Who runs this" — the founder section. Narrative paragraphs live here;
   * the founder identity, credentials, and career spine come from
   * src/content/proof.ts (single source of truth) and render right under
   * these paragraphs, so the prose says only what they do not (why the
   * studio exists), never an employer, a role, or a credential.
   */
  whoRuns: { title: string; paragraphs: readonly string[] };
  how: { title: string; intro: string; principles: readonly string[] };
  who: { title: string; body: string };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};

/** The three services as linked cards (title, summary, card CTA). */
const serviceItems = (locale: Locale): readonly LinkCard[] =>
  serviceCards(locale).map((c) => ({
    title: c.title,
    desc: c.summary,
    cta: { label: c.cta, href: c.href },
  }));

/** The managed office as a linked card; the caller writes the one line. */
function officeItem(locale: Locale, desc: string): LinkCard {
  const office = offerCard(locale, "ai-office-assistant");
  return { title: office.title, desc, cta: { label: office.cta, href: office.href } };
}

const en: AboutContent = {
  hero: {
    title: "About y[AI]r studio",
    lead: "One person, not an agency. I build AI agents for the work your office repeats, with your people approving what matters, and if you want, I keep running them month to month. I also make websites and creative films for the same businesses.",
  },
  build: {
    title: "What I make",
    intro: "Three services, each built as a fixed-price project, and one way to keep the agents running after it.",
    items: serviceItems("en"),
    after: officeItem(
      "en",
      "After the project, I run your office's agents month to month: the morning briefing, email, documents, and follow-up, in your own private environment. Nothing is sent or changed without your approval.",
    ),
  },
  whoRuns: {
    title: "Who runs this",
    paragraphs: [
      "y[AI]r studio exists because a small office usually has no one to build its systems and keep them running. A large company has its own team for that; a small office can hire the studio instead.",
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
    body: "Owners and office managers of small businesses and professional offices, law firms among them, whose work has outgrown manual coordination: more requests, documents, deadlines, and follow-up than anyone can hold in their head. The work runs in Hebrew and English, whichever your office uses day to day.",
  },
  cta: {
    heading: "Start with one workflow.",
    body: "Book a free scoping call. We look at one process that costs your office time before deciding what is worth building.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) about content — written natively, not translated. */
const he: AboutContent = {
  hero: {
    title: "על y[AI]r studio",
    lead: "אדם אחד, לא סוכנות. אני בונה סוכני AI לעבודה שהמשרד שלכם חוזר עליה, כשהאנשים שלכם מאשרים את מה שחשוב, ואם תרצו, ממשיך להפעיל אותם חודש אחרי חודש. אני גם בונה אתרים ומפיק סרטונים יצירתיים לאותם עסקים.",
  },
  build: {
    title: "מה אני עושה",
    intro: "שלושה שירותים, כל אחד נבנה כפרויקט במחיר קבוע, ודרך אחת שבה הסוכנים ממשיכים לרוץ גם אחריו.",
    items: serviceItems("he"),
    after: officeItem(
      "he",
      "אחרי הפרויקט, אני מפעיל את הסוכנים של המשרד חודש אחרי חודש: תדריך הבוקר, המיילים, המסמכים והמעקב, בסביבה הפרטית שלכם. שום דבר לא נשלח ולא משתנה בלי אישור שלכם.",
    ),
  },
  whoRuns: {
    title: "מי מאחורי הסטודיו",
    paragraphs: [
      "הסטודיו קם כי למשרד קטן בדרך כלל אין מי שיבנה את המערכות שלו וידאג שימשיכו לעבוד. לחברה גדולה יש לזה צוות משלה, ומשרד קטן יכול להפקיד את זה בידי הסטודיו.",
    ],
  },
  how: {
    title: "איך אני חושב על AI",
    intro: "כמה עקרונות שמשאירים את המערכות שימושיות גם אחרי השבוע הראשון.",
    principles: [
      "ממפים לפני שבונים אוטומציה",
      "האדם נשאר בשליטה",
      "מתחברים לכלים הקיימים במקום להחליף אותם",
      "דואגים שהצעד הבא יהיה גלוי",
      "מלווים את ההטמעה אחרי ההקמה, לא רק מוסרים מערכת",
      "מדלגים על דמואים של AI שלא שורדים עבודה אמיתית",
    ],
  },
  who: {
    title: "למי זה מתאים",
    body: "בעלים ומנהלי משרד בעסקים קטנים ובמשרדים מקצועיים, ובהם משרדי עורכי דין, שהעבודה שלהם גדלה מעבר לתיאום ידני: יותר פניות, מסמכים, מועדים ומעקב ממה שאפשר להחזיק בראש. העבודה מתנהלת בעברית או באנגלית, לפי מה שהמשרד משתמש בו ביומיום.",
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
