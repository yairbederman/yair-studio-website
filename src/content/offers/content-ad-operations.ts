import { localeAccessor } from "@/content/types";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/** Content & Ad Operations page content — typed and locale-keyed. */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Content operations",
    title: "Content & Ad Operations",
    lead: "Turn ideas, assets, performance data, and approvals into repeatable campaigns. A system for content and ad operations, with approval before anything publishes.",
    ctaLabel: "Map one workflow",
    ctaHref: "/contact",
  },
  who: {
    title: "Who it's for",
    items: [
      {
        title: "Founders doing their own marketing",
        desc: "You generate ideas faster than they get produced and shipped.",
      },
      {
        title: "Small marketing teams",
        desc: "You run content and ads, but the process is ad hoc.",
      },
      {
        title: "Service businesses",
        desc: "You want steady output without a full in-house studio.",
      },
    ],
  },
  problems: {
    title: "Problems it solves",
    items: [
      {
        title: "Ideas that never ship",
        desc: "Raw ideas, calls, and assets pile up without a path to publish.",
      },
      {
        title: "No repeatable process",
        desc: "Every piece starts from scratch.",
      },
      {
        title: "Messy approvals",
        desc: "Sign-off happens over scattered messages, late.",
      },
      {
        title: "Performance isn't fed back",
        desc: "What worked rarely informs what's made next.",
      },
    ],
  },
  build: {
    title: "What we build",
    items: [
      {
        title: "Intake & content calendar",
        desc: "Capture raw ideas, calls, and assets into a planned schedule.",
      },
      {
        title: "Briefs & repurposing",
        desc: "Turn one input into structured briefs and multiple formats.",
      },
      {
        title: "Ad experiments",
        desc: "A simple loop for testing creatives and reading results.",
      },
      {
        title: "Approval flows",
        desc: "Clear sign-off before anything goes live.",
      },
    ],
  },
  example: {
    title: "What the approval loop looks like",
    intro:
      "The loop every piece runs through, simplified. Nothing reaches publish without the approval step.",
    map: {
      caption: "Approval loop",
      ariaLabel: "The content and ad approval loop",
      nodes: [
        { label: "Intake", sub: "ideas · calls · assets" },
        { label: "Brief prepared" },
        { label: "Variants drafted" },
        { label: "Human approval", human: true },
        { label: "Published + results fed back", out: true },
      ],
    },
  },
  how: {
    title: "How it works",
    steps: [
      {
        title: "Capture inputs",
        desc: "Ideas, call notes, and assets land in one intake.",
      },
      {
        title: "Plan & brief",
        desc: "Inputs become a calendar and structured creative briefs.",
      },
      {
        title: "Produce & repurpose",
        desc: "Draft content and variations from the briefs.",
      },
      {
        title: "Approve before publishing",
        desc: "Nothing is posted without a human sign-off.",
        human: true,
      },
      {
        title: "Review performance",
        desc: "Results feed the next round of ideas and experiments.",
      },
    ],
  },
  human: {
    title: "What stays human",
    intro:
      "The system drafts and schedules; people approve what goes out and what gets funded.",
    items: [
      {
        title: "Publishing",
        desc: "Nothing goes live without a person approving it.",
      },
      {
        title: "Brand voice",
        desc: "Drafts follow your voice; you approve the final wording.",
      },
      {
        title: "Ad spend decisions",
        desc: "Experiments are proposed; you decide what to fund.",
      },
    ],
  },
  cta: {
    heading: "Make content and ad ops repeatable.",
    body: "Start with one workflow, such as intake, the calendar, or approvals, and turn scattered output into a system.",
    ctaLabel: "Map one workflow",
    ctaHref: "/contact",
  },
};

/** Hebrew (RTL) content-ad-operations content — hebrew-quality drafted. */
const he: OfferPageContent = {
  hero: {
    eyebrow: "תפעול תוכן",
    title: "תפעול תוכן וקמפיינים",
    lead: "הופכים רעיונות, חומרים, נתוני ביצועים ואישורים לקמפיינים חוזרים. מערכת לתפעול תוכן ופרסום, עם אישור לפני כל פרסום.",
    ctaLabel: "למפות תהליך אחד",
    ctaHref: "/he/contact",
  },
  who: {
    title: "למי זה מתאים",
    items: [
      {
        title: "מייסדים שעושים שיווק לבד",
        desc: "אתם מייצרים רעיונות מהר יותר משהם מופקים ויוצאים.",
      },
      {
        title: "צוותי שיווק קטנים",
        desc: "אתם מריצים תוכן וקמפיינים, אבל התהליך מאולתר.",
      },
      {
        title: "עסקי שירותים",
        desc: "רוצים תפוקה יציבה בלי סטודיו פנימי מלא.",
      },
    ],
  },
  problems: {
    title: "אילו בעיות זה פותר",
    items: [
      {
        title: "רעיונות שלא יוצאים",
        desc: "רעיונות גולמיים, שיחות וחומרים נערמים בלי מסלול לפרסום.",
      },
      {
        title: "אין תהליך חוזר",
        desc: "כל פריט מתחיל מאפס.",
      },
      {
        title: "אישורים מבולגנים",
        desc: "החתימה קורית בהודעות מפוזרות, מאוחר.",
      },
      {
        title: "הביצועים לא חוזרים פנימה",
        desc: "מה שעבד כמעט לא משפיע על מה שנוצר אחר כך.",
      },
    ],
  },
  build: {
    title: "מה אנחנו בונים",
    items: [
      {
        title: "קליטה ולוח תוכן",
        desc: "קולטים רעיונות גולמיים, שיחות וחומרים לתוך לוח זמנים מתוכנן.",
      },
      {
        title: "בריפים ומחזור תוכן",
        desc: "הופכים קלט אחד לבריפים מובנים ולכמה פורמטים.",
      },
      {
        title: "ניסויי קמפיינים",
        desc: "לולאה פשוטה לבדיקת קריאייטיבים ולקריאת תוצאות.",
      },
      {
        title: "תהליכי אישור",
        desc: "חתימה ברורה לפני שמשהו עולה לאוויר.",
      },
    ],
  },
  example: {
    title: "איך נראית לולאת האישור",
    intro:
      "הלולאה שכל פריט עובר, בפישוט. שום דבר לא מגיע לפרסום בלי שלב האישור.",
    map: {
      caption: "לולאת אישור",
      ariaLabel: "לולאת האישור של תוכן וקמפיינים",
      nodes: [
        { label: "קליטה", sub: "רעיונות · שיחות · חומרים" },
        { label: "בריף מוכן" },
        { label: "וריאציות מנוסחות" },
        { label: "אישור אנושי", human: true },
        { label: "פורסם + תוצאות חוזרות", out: true },
      ],
    },
  },
  how: {
    title: "איך זה עובד",
    steps: [
      {
        title: "קולטים קלט",
        desc: "רעיונות, סיכומי שיחות וחומרים נוחתים בקליטה אחת.",
      },
      {
        title: "מתכננים וכותבים בריפים",
        desc: "הקלט הופך ללוח זמנים ולבריפים מובנים.",
      },
      {
        title: "מפיקים וממחזרים",
        desc: "מנסחים תוכן ווריאציות מתוך הבריפים.",
      },
      {
        title: "מאשרים לפני פרסום",
        desc: "שום דבר לא עולה בלי חתימה אנושית.",
        human: true,
      },
      {
        title: "קוראים את הביצועים",
        desc: "התוצאות מזינות את סבב הרעיונות והניסויים הבא.",
      },
    ],
  },
  human: {
    title: "מה נשאר אנושי",
    intro: "המערכת מנסחת ומתזמנת; אנשים מאשרים מה יוצא ומה ממומן.",
    items: [
      {
        title: "פרסום",
        desc: "שום דבר לא עולה לאוויר בלי אדם שמאשר.",
      },
      {
        title: "קול המותג",
        desc: "הטיוטות הולכות לפי הקול שלכם; אתם מאשרים את הניסוח הסופי.",
      },
      {
        title: "החלטות תקציב",
        desc: "ניסויים מוצעים; אתם מחליטים מה ממומן.",
      },
    ],
  },
  cta: {
    heading: "הופכים תוכן וקמפיינים לתהליך חוזר.",
    body: "מתחילים מתהליך אחד, כמו קליטה, לוח תוכן או אישורים, והופכים תפוקה מפוזרת למערכת.",
    ctaLabel: "למפות תהליך אחד",
    ctaHref: "/he/contact",
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the Content & Ad Operations page content for a locale. */
export const contentAdOperationsContent = localeAccessor(
  "contentAdOperationsContent",
  CONTENT,
);
