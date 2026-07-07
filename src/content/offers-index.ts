import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import type { CardItem, Cta, Locale } from "@/content/types";

/**
 * /offers overview page content. The service cards themselves stay canonical in
 * src/lib/offers.ts and localized in src/content/offer-cards.ts.
 *
 * Both locales carry the same structure: a decision router (choices) that
 * points each visitor at the one offer that fits, plus a "who it fits"
 * section. Structural EN/HE parity is deliberate — don't let one locale
 * grow a section the other lacks.
 */

export type OffersIndexContent = {
  hero: { title: string; lead: string; ctaLabel: string; ctaHref: string };
  /** The decision router — required in both locales (structural parity). */
  start: {
    title: string;
    intro: string;
    choices: readonly (CardItem & { cta: Cta })[];
  };
  fit: { title: string; intro: string; items: readonly CardItem[] };
  offers: { title: string };
  cta: { heading: string; body: string; ctaLabel: string; ctaHref: string };
};

/** Router link for one offer — label + href stay canonical in offer-cards. */
const routeTo = (locale: Locale, key: string): Cta => {
  const card = offerCard(locale, key);
  return { label: card.cta, href: card.href };
};

const en: OffersIndexContent = {
  hero: {
    title: "Services",
    lead: "Four ways to put AI to work on your operations: a managed office assistant, a fixed-price workflow sprint, a LinkedIn content engine, and enablement workshops for engineering teams. Every one keeps a person approving what matters.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  start: {
    title: "Pick by the problem in front of you",
    intro: "Each service starts from a different pain. Choose the one that sounds like your week.",
    choices: [
      {
        title: "The office runs on chasing and triage",
        desc: "Mornings, inbox, documents, and follow-up eat the day. Start with the managed assistant.",
        cta: routeTo("en", "ai-office-assistant"),
      },
      {
        title: "One workflow keeps getting stuck",
        desc: "A single process slips every week. Start with a fixed-price sprint.",
        cta: routeTo("en", "ai-workflow-sprint"),
      },
      {
        title: "Your LinkedIn is silent while you work",
        desc: "The expertise exists; the posts don't. Start with the content engine.",
        cta: routeTo("en", "linkedin-content-engine"),
      },
      {
        title: "Your engineers should be faster with AI",
        desc: "Licensed tools, unchanged habits. Start with an enablement workshop.",
        cta: routeTo("en", "ai-enablement"),
      },
    ],
  },
  fit: {
    title: "Who this fits",
    intro: "Small operations where the work crosses email, calendar, documents, meetings, clients, and tasks, and nothing lives in one clear place.",
    items: [
      {
        title: "Professional offices",
        desc: "Law, accounting, consulting, and other document-heavy, deadline-driven practices.",
      },
      {
        title: "Growing small businesses",
        desc: "More requests, tasks, and follow-up than anyone can hold in their head.",
      },
      {
        title: "Founders and experts",
        desc: "People whose knowledge should be visible while they stay busy with the actual work.",
      },
      {
        title: "R&D and engineering teams",
        desc: "Teams that licensed AI tools and now want the working habits to match.",
      },
    ],
  },
  offers: { title: "The services" },
  cta: {
    heading: "Not sure which fits? Send the problem.",
    body: "Describe the office, the workflow, or the team in a few lines. You get back the starting point that fits and what it would look like, before any commitment.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

const he: OffersIndexContent = {
  hero: {
    title: "שירותים",
    lead: "ארבע דרכים להכניס AI לתפעול שלכם: עוזר משרדי מנוהל, ספרינט תהליך במחיר קבוע, מנוע תוכן ללינקדאין וסדנאות הטמעה לצוותי פיתוח. בכל אחת מהן אדם מאשר את מה שחשוב.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  start: {
    title: "בוחרים לפי הבעיה שעל השולחן",
    intro: "כל שירות מתחיל מכאב אחר. בחרו את זה שנשמע כמו השבוע שלכם.",
    choices: [
      {
        title: "המשרד רץ על רדיפות ומיונים",
        desc: "בקרים, מיילים, מסמכים ומעקב אוכלים את היום. מתחילים בעוזר המנוהל.",
        cta: routeTo("he", "ai-office-assistant"),
      },
      {
        title: "תהליך אחד ממשיך להיתקע",
        desc: "אותו תהליך נופל כל שבוע. מתחילים בספרינט במחיר קבוע.",
        cta: routeTo("he", "ai-workflow-sprint"),
      },
      {
        title: "הלינקדאין שקט בזמן שאתם עובדים",
        desc: "המומחיות קיימת; הפוסטים לא. מתחילים במנוע התוכן.",
        cta: routeTo("he", "linkedin-content-engine"),
      },
      {
        title: "המהנדסים שלכם צריכים לרוץ מהר יותר עם AI",
        desc: "הכלים מורשים, ההרגלים לא השתנו. מתחילים בסדנת הטמעה.",
        cta: routeTo("he", "ai-enablement"),
      },
    ],
  },
  fit: {
    title: "למי זה מתאים",
    intro: "תפעול קטן שבו העבודה עוברת בין מיילים, יומן, מסמכים, פגישות, לקוחות ומשימות, ושום דבר לא חי במקום אחד ברור.",
    items: [
      {
        title: "משרדים מקצועיים",
        desc: "עורכי דין, רואי חשבון, יועצים ופרקטיקות עתירות מסמכים ודדליין.",
      },
      {
        title: "עסקים קטנים בצמיחה",
        desc: "יותר פניות, משימות ומעקב ממה שאפשר להחזיק בראש.",
      },
      {
        title: "מייסדים ומומחים",
        desc: "אנשים שהידע שלהם צריך להיראות בחוץ בזמן שהם עסוקים בעבודה עצמה.",
      },
      {
        title: "צוותי פיתוח ומו״פ",
        desc: "צוותים שרכשו כלי AI ועכשיו רוצים שהרגלי העבודה יתאימו.",
      },
    ],
  },
  offers: { title: "השירותים" },
  cta: {
    heading: "לא בטוחים מה מתאים? שלחו את הבעיה.",
    body: "תארו את המשרד, את התהליך או את הצוות בכמה שורות. תקבלו חזרה את נקודת ההתחלה שמתאימה ואיך היא נראית, לפני כל התחייבות.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OffersIndexContent>> = { en, he };

/** Resolve the /offers overview page content for a locale. */
export const offersIndexContent = localeAccessor("offersIndexContent", CONTENT);
