import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { serviceCards } from "@/content/service-cards";
import { offerCard } from "@/content/offer-cards";
import type { ServiceKey } from "@/lib/services";
import type { CardItem, Locale, StepItem } from "@/content/types";

/**
 * /contact page content — typed and locale-keyed. The page is the scoping
 * call: the hero title IS the site-wide CTA label, the chooser routes each
 * visitor to the right conversation, and `next.steps` say what happens after
 * you book.
 *
 * The chooser's options are the three services (key + title from
 * serviceCards(), never retyped) plus "not sure yet", the preselected
 * default. Each option carries the plain-text message its WhatsApp and email
 * links open with; ContactPageBody encodes them into hrefs, so this file
 * holds strings only.
 *
 * Channel order is locale-native: EN leads with email and offers WhatsApp as
 * the ghost button; /he leads with WhatsApp — the local norm — and email is
 * the ghost button. The content decides; the page only renders
 * primary/secondary in the order given.
 */

export type ContactChannel = "email" | "whatsapp";

/** What a message opens with, per channel. Plain text: the page encodes it. */
export type ContactPrefill = {
  whatsapp: string;
  email: { subject: string; body: string };
};

/** One chooser option: a service, or "not sure yet". */
export type ContactTopic = ContactPrefill & {
  key: ServiceKey | "not-sure";
  label: string;
};

export type ContactContent = {
  hero: { title: string; lead: string };
  chooser: {
    /** The radio group's visible label. */
    legend: string;
    /** Channel order: the first is the primary button, the second the ghost. */
    channels: readonly [ContactChannel, ContactChannel];
    channelLabels: Record<ContactChannel, string>;
    /** One line under the buttons: the message is prewritten and editable. */
    hint: string;
    services: readonly ContactTopic[];
    /** The preselected option, and the message the closing band opens. */
    notSure: ContactTopic;
  };
  next: { title: string; steps: readonly StepItem[] };
  send: { title: string; intro: string; items: readonly CardItem[] };
  goodFirst: { title: string; intro: string; items: readonly string[] };
  human: { title: string; intro: string; items: readonly CardItem[] };
  cta: { heading: string; body: string };
};

/**
 * The three service options, in the site's service order. Typed on
 * ServiceKey, so a new service without its messages fails the type check.
 */
function serviceTopics(
  locale: Locale,
  prefills: Record<ServiceKey, ContactPrefill>,
): readonly ContactTopic[] {
  return serviceCards(locale).map((card) => ({
    key: card.key,
    label: card.title,
    ...prefills[card.key],
  }));
}

const EN_PREFILLS: Record<ServiceKey, ContactPrefill> = {
  "ai-agents": {
    whatsapp:
      "Hi Yair, I'd like to book a scoping call about AI agents for the work my office repeats.",
    email: {
      subject: "Scoping call: AI agents",
      body: "Hi Yair,\n\nI'd like to book a scoping call about AI agents for my office.\n\nThe work we repeat:\nWhere it gets stuck:\n\nThanks,\n",
    },
  },
  websites: {
    whatsapp:
      "Hi Yair, I'd like to book a scoping call about a website for my business.",
    email: {
      subject: "Scoping call: a website",
      body: "Hi Yair,\n\nI'd like to book a scoping call about a website for my business.\n\nWhat the business does:\nOur current site, if there is one:\n\nThanks,\n",
    },
  },
  films: {
    whatsapp:
      "Hi Yair, I'd like to book a scoping call about a creative film for my business.",
    email: {
      subject: "Scoping call: a creative film",
      body: "Hi Yair,\n\nI'd like to book a scoping call about a creative film for my business.\n\nWhat the film is for:\nWhere it will run:\n\nThanks,\n",
    },
  },
};

/** The scoping-call label and the WhatsApp channel label — single-sourced
    from the shell content (shared with the homepage hero and final band). */
const workflowCtaEn = shellContent("en").workflowCta;
const whatsappLabelEn = shellContent("en").whatsappCta.label;
/** The monthly page's name, never retyped (src/lib/offers.ts). */
const officeEn = offerCard("en", "ai-office-assistant");

const en: ContactContent = {
  hero: {
    title: workflowCtaEn.label,
    lead: "A free 20-minute call about one thing your office needs: AI agents, a website, or a film. Hebrew or English, your message reaches me directly.",
  },
  chooser: {
    legend: "What is the call about?",
    channels: ["email", "whatsapp"],
    channelLabels: { email: "Send an email", whatsapp: whatsappLabelEn },
    hint: "The message opens already written for the topic you pick. Change anything before you send.",
    services: serviceTopics("en", EN_PREFILLS),
    notSure: {
      key: "not-sure",
      label: "Not sure yet",
      whatsapp:
        "Hi Yair, I'd like to book a scoping call. I'm not sure yet what my office needs.",
      email: {
        subject: "Scoping call",
        body: "Hi Yair,\n\nI'd like to book a scoping call. I'm not sure yet what my office needs.\n\nWhat takes up the most time right now:\n\nThanks,\n",
      },
    },
  },
  next: {
    title: "What happens after you book",
    steps: [
      {
        title: "A 20-minute call",
        desc: "You describe what you need: work your office repeats, a website, or a film. I ask the questions that set the scope.",
      },
      {
        title: "A written summary",
        desc: "A short summary of what I heard, what I would build, and what is not worth building yet.",
      },
      {
        title: "A clear recommendation",
        desc: `The summary says what fits: a fixed-price project, the ${officeEn.title} month to month, or nothing yet.`,
      },
      {
        title: "You decide",
        desc: "Stop at the summary or start the project. No obligation either way.",
        human: true,
      },
    ],
  },
  send: {
    title: "What to put in your message",
    intro: "A few lines is enough. The more concrete, the better.",
    items: [
      {
        title: "What it's for",
        desc: "The work you want off your desk, the site you need, or the film you have in mind, in a sentence or two.",
      },
      {
        title: "What you use today",
        desc: "Where the work lives now: email, documents, spreadsheets, WhatsApp, an existing site.",
      },
      {
        title: "Where it gets stuck",
        desc: "The step where work waits, gets done twice, or quietly falls through.",
      },
      {
        title: "Who decides",
        desc: "Who signs off on the decisions that matter here.",
      },
      {
        title: "What good looks like",
        desc: "Less chasing, faster replies, a site you are glad to send to clients, a film you can post.",
      },
    ],
  },
  goodFirst: {
    title: "Good places to start",
    intro: "No spec needed. One real example from your week is enough.",
    items: [
      "A lead nobody got back to in time",
      "A quote still waiting for an answer",
      "A client waiting for a document",
      "Meeting notes that never became tasks",
      "Work that bounces between email, WhatsApp, and a spreadsheet",
      "Something someone checks by hand, again and again",
    ],
  },
  human: {
    title: "What stays human",
    intro: "The agents take the repetitive work; the judgment stays with your people.",
    items: [
      {
        title: "Approval stays with you",
        desc: "Nothing runs end to end without a human checkpoint where the decision matters.",
      },
      {
        title: "You set the priorities",
        desc: "What gets built, and in what order, is your call. The summary informs it; you decide.",
      },
    ],
  },
  cta: {
    heading: "One example is enough to start.",
    body: "Book the call by email or WhatsApp. You write to the person who runs the call and builds the work, not to an agency.",
  },
};

const HE_PREFILLS: Record<ServiceKey, ContactPrefill> = {
  "ai-agents": {
    whatsapp:
      "היי יאיר, אשמח לקבוע שיחת אפיון על סוכני AI לעבודה שחוזרת על עצמה במשרד.",
    email: {
      subject: "שיחת אפיון: סוכני AI",
      body: "היי יאיר,\n\nאשמח לקבוע שיחת אפיון על סוכני AI למשרד שלנו.\n\nהעבודה שחוזרת על עצמה:\nאיפה היא נתקעת:\n\nתודה,\n",
    },
  },
  websites: {
    whatsapp: "היי יאיר, אשמח לקבוע שיחת אפיון על אתר לעסק שלי.",
    email: {
      subject: "שיחת אפיון: אתר",
      body: "היי יאיר,\n\nאשמח לקבוע שיחת אפיון על אתר לעסק שלי.\n\nמה העסק עושה:\nהאתר הנוכחי, אם יש:\n\nתודה,\n",
    },
  },
  films: {
    whatsapp: "היי יאיר, אשמח לקבוע שיחת אפיון על סרטון יצירתי לעסק שלי.",
    email: {
      subject: "שיחת אפיון: סרטון יצירתי",
      body: "היי יאיר,\n\nאשמח לקבוע שיחת אפיון על סרטון יצירתי לעסק שלי.\n\nלמה הסרטון נועד:\nאיפה הוא יוצג:\n\nתודה,\n",
    },
  },
};

/** The Hebrew labels — single-sourced from the shell content; WhatsApp leads. */
const workflowCtaHe = shellContent("he").workflowCta;
const whatsappLabelHe = shellContent("he").whatsappCta.label;
const officeHe = offerCard("he", "ai-office-assistant");

/** Hebrew (RTL) contact content — written natively, not translated. */
const he: ContactContent = {
  hero: {
    title: workflowCtaHe.label,
    lead: "שיחה חינם של 20 דקות על דבר אחד שהמשרד צריך: סוכני AI, אתר או סרטון. בעברית או באנגלית, ההודעה מגיעה ישירות אליי.",
  },
  chooser: {
    legend: "על מה השיחה?",
    channels: ["whatsapp", "email"],
    channelLabels: { whatsapp: whatsappLabelHe, email: "שלחו מייל" },
    hint: "ההודעה נפתחת כבר כתובה לפי הנושא שבחרתם. אפשר לשנות בה הכול לפני השליחה.",
    services: serviceTopics("he", HE_PREFILLS),
    notSure: {
      key: "not-sure",
      label: "עוד לא יודעים",
      whatsapp:
        "היי יאיר, אשמח לקבוע שיחת אפיון. עוד לא ברור לי מה המשרד צריך.",
      email: {
        subject: "שיחת אפיון",
        body: "היי יאיר,\n\nאשמח לקבוע שיחת אפיון. עוד לא ברור לי מה המשרד צריך.\n\nמה לוקח הכי הרבה זמן כרגע:\n\nתודה,\n",
      },
    },
  },
  next: {
    title: "מה קורה אחרי שקובעים",
    steps: [
      {
        title: "שיחה של 20 דקות",
        desc: "מספרים מה צריך: עבודה שהמשרד חוזר עליה, אתר או סרטון. אני שואל את השאלות שקובעות את ההיקף.",
      },
      {
        title: "סיכום כתוב",
        desc: "סיכום קצר של מה ששמעתי, מה הייתי בונה, ומה עוד לא שווה לבנות.",
      },
      {
        title: "המלצה ברורה",
        desc: `הסיכום אומר מה מתאים: פרויקט במחיר קבוע, ${officeHe.title} חודש אחרי חודש, או בינתיים כלום.`,
      },
      {
        title: "אתם מחליטים",
        desc: "עוצרים בסיכום או מתחילים את הפרויקט. בלי התחייבות לשום כיוון.",
        human: true,
      },
    ],
  },
  send: {
    title: "מה לכתוב בהודעה",
    intro: "כמה שורות מספיקות. כמה שיותר קונקרטי, יותר טוב.",
    items: [
      {
        title: "במה מדובר",
        desc: "העבודה שרוצים להוריד מהשולחן, האתר שצריך או הסרטון שיש לכם בראש, במשפט או שניים.",
      },
      {
        title: "במה עובדים היום",
        desc: "איפה העבודה נמצאת עכשיו: מייל, מסמכים, גיליונות, וואטסאפ, אתר קיים.",
      },
      {
        title: "איפה זה נתקע",
        desc: "השלב שבו עבודה מחכה, נעשית פעמיים, או נופלת בשקט בין הכיסאות.",
      },
      {
        title: "מי מחליט",
        desc: "מי מאשר היום את ההחלטות שחשובות כאן.",
      },
      {
        title: "איך נראית תוצאה טובה",
        desc: "פחות רדיפה אחרי סטטוס, תשובות מהירות יותר, אתר שנעים לשלוח ללקוחות, סרטון שאפשר לפרסם.",
      },
    ],
  },
  goodFirst: {
    title: "מאיפה טוב להתחיל",
    intro: "לא צריך להכין מסמך אפיון. דוגמה אחת מהשבוע שלכם מספיקה.",
    items: [
      "ליד שלא חזרתם אליו בזמן",
      "הצעת מחיר שנשארה פתוחה",
      "לקוח שמחכה למסמך",
      "סיכום פגישה שלא הפך למשימות",
      "תהליך שעובר בין מייל, וואטסאפ וגיליון",
      "משהו שאתם בודקים ידנית שוב ושוב",
    ],
  },
  human: {
    title: "מה נשאר אנושי",
    intro: "הסוכנים לוקחים את העבודה שחוזרת על עצמה. שיקול הדעת נשאר אצל האנשים שלכם.",
    items: [
      {
        title: "האישור נשאר אצלכם",
        desc: "שום דבר לא רץ מקצה לקצה בלי נקודת בדיקה אנושית איפה שההחלטה חשובה.",
      },
      {
        title: "אתם קובעים את סדר העדיפויות",
        desc: "מה נבנה, ובאיזה סדר, זו ההחלטה שלכם. הסיכום רק עוזר לקבל אותה.",
      },
    ],
  },
  cta: {
    heading: "דוגמה אחת מספיקה כדי להתחיל.",
    body: "קובעים את השיחה בוואטסאפ או במייל. אתם כותבים ישירות למי שמנהל את השיחה ובונה את העבודה, לא לסוכנות.",
  },
};

const CONTENT: Partial<Record<Locale, ContactContent>> = { en, he };

/** Resolve the /contact page content for a locale. */
export const contactContent = localeAccessor("contactContent", CONTENT);
