import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { LINKEDIN_URL } from "@/lib/site";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/**
 * LinkedIn Content Engine — a managed content pipeline offered as a service.
 * Factual basis: the same pipeline already runs on the studio's own LinkedIn
 * presence (demonstrable), offered with a per-client voice profile.
 * No pricing section yet: the engagement model for this offer is not final —
 * do not invent one.
 *
 * Page-local CTA LABEL override only: "send one stuck workflow" is wrong for
 * a content offer, so the ask is to start from the client's material — but
 * the DESTINATION stays single-sourced from shellContent().workflowCta.href.
 */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Managed content pipeline",
    title: "A LinkedIn content engine, run for you",
    lead: "A managed pipeline that turns your real material into a steady LinkedIn presence: angles proposed, drafts written in your voice, everything held in one review queue, and nothing published without your approval. The same engine runs the studio's own LinkedIn today.",
    ctaLabel: "Start from your material",
    ctaHref: shellContent("en").workflowCta.href,
    secondaryCta: { label: "See how it runs", href: "#how" },
    proofLink: { label: "See the studio's LinkedIn", href: LINKEDIN_URL },
  },
  who: {
    title: "This fits if you are saying one of these things",
    items: [
      {
        title: "We know content matters",
        desc: "But between client work and operations, it never actually happens.",
      },
      {
        title: "The expertise stays in our heads",
        desc: "Calls, projects, and wins are full of material nobody turns into posts.",
      },
      {
        title: "We post in bursts, then go silent",
        desc: "Two weeks of momentum, then a month of nothing.",
      },
      {
        title: "Generic AI posts sound nothing like us",
        desc: "Off-the-shelf generated content reads as filler and hurts more than silence.",
      },
    ],
  },
  problems: {
    title: "What the engine takes off your plate",
    items: [
      {
        title: "Finding the angle",
        desc: "Spotting the post inside a call, a project note, or a small win.",
      },
      {
        title: "Drafting in your voice",
        desc: "Writing that sounds like you on a good day, from a per-client voice profile.",
      },
      {
        title: "Keeping the rhythm",
        desc: "A queue that keeps publishing weekly even when your week is full.",
      },
      {
        title: "Tracking what waits",
        desc: "One view of what is drafted, what waits for your approval, and what went out.",
      },
    ],
  },
  build: {
    title: "What you get",
    intro: "A running pipeline, tuned to one person or brand.",
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
  },
  example: {
    title: "From material to published, as a flow",
    intro: "A simplified view of the pipeline. The approval point is yours.",
    map: {
      caption: "Material to rhythm",
      ariaLabel: "LinkedIn content pipeline from source material to published posts",
      nodes: [
        { label: "Your material", sub: "calls · projects · wins" },
        { label: "Angles proposed" },
        { label: "Drafts in your voice" },
        { label: "Review queue" },
        { label: "Your approval", human: true },
        { label: "Published on rhythm", out: true },
      ],
    },
  },
  how: {
    title: "How it runs",
    intro: "A managed service with one approval habit: a few minutes over the queue, once or twice a week.",
    steps: [
      {
        title: "Build the voice profile",
        desc: "We collect your existing writing and positions and turn them into a working profile.",
      },
      {
        title: "Connect the material",
        desc: "Call notes, project updates, and wins flow in as raw input.",
      },
      {
        title: "Draft and queue weekly",
        desc: "The engine proposes angles and drafts posts ahead of the week.",
      },
      {
        title: "You approve, edit, or kill",
        desc: "Nothing is published on its own. The queue waits for your call.",
        human: true,
      },
      {
        title: "Publish and adjust",
        desc: "Approved posts go out on rhythm; what works feeds back into the profile.",
      },
    ],
  },
  human: {
    title: "What stays yours",
    intro: "The engine drafts; the voice and the positions are yours.",
    items: [
      {
        title: "Your opinions only",
        desc: "The engine drafts from what you actually said and wrote. It never invents positions for you.",
      },
      {
        title: "The final wording",
        desc: "Every post is yours to edit before it carries your name.",
      },
      {
        title: "The publish button",
        desc: "Nothing goes out without your explicit approval.",
      },
      {
        title: "The direction",
        desc: "Topics, audience, and tone stay your call; the engine executes.",
      },
    ],
  },
  cta: {
    heading: "Your next month of posts is already in your material.",
    body: "Send a few links to things you have written or a note about what you do. We build the voice profile first, then you see real drafts before anything runs.",
    ctaLabel: "Start from your material",
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) content-engine content — hebrew-quality drafted. */
const he: OfferPageContent = {
  hero: {
    eyebrow: "מערך תוכן מנוהל",
    title: "מנוע תוכן ללינקדאין, שרץ בשבילכם",
    lead: "מערך מנוהל שהופך חומר אמיתי שלכם לנוכחות קבועה בלינקדאין: זוויות מוצעות, טיוטות שנכתבות בקול שלכם, הכול מחכה בתור אישורים אחד, ושום דבר לא מתפרסם בלי אישור שלכם. אותו מנוע מריץ היום את הלינקדאין של הסטודיו עצמו.",
    ctaLabel: "להתחיל מהחומר שלכם",
    ctaHref: shellContent("he").workflowCta.href,
    secondaryCta: { label: "לראות איך זה רץ", href: "#how" },
    proofLink: { label: "לראות את הלינקדאין של הסטודיו", href: LINKEDIN_URL },
  },
  who: {
    title: "זה מתאים אם אתם אומרים אחד מהמשפטים האלה",
    items: [
      {
        title: "אנחנו יודעים שתוכן חשוב",
        desc: "אבל בין עבודת לקוחות לתפעול, זה פשוט לא קורה.",
      },
      {
        title: "המומחיות נשארת בראש",
        desc: "שיחות, פרויקטים והצלחות מלאים בחומר שאף אחד לא הופך לפוסטים.",
      },
      {
        title: "מפרסמים בהתקפים ואז שקט",
        desc: "שבועיים של מומנטום, ואז חודש של כלום.",
      },
      {
        title: "פוסטים גנריים של AI לא נשמעים כמונו",
        desc: "תוכן מיוצר מהמדף נקרא כחומר מילוי ומזיק יותר משתיקה.",
      },
    ],
  },
  problems: {
    title: "מה המנוע מוריד מכם",
    items: [
      {
        title: "למצוא את הזווית",
        desc: "לזהות את הפוסט שמסתתר בשיחה, בהערת פרויקט או בהצלחה קטנה.",
      },
      {
        title: "לנסח בקול שלכם",
        desc: "כתיבה שנשמעת כמוכם ביום טוב, מתוך פרופיל קול אישי.",
      },
      {
        title: "לשמור על קצב",
        desc: "תור שממשיך לפרסם כל שבוע גם כשהשבוע שלכם מלא.",
      },
      {
        title: "לעקוב אחרי מה שמחכה",
        desc: "תצוגה אחת של מה נוסח, מה מחכה לאישור שלכם ומה כבר יצא.",
      },
    ],
  },
  build: {
    title: "מה מקבלים",
    intro: "מערך שרץ, מכוונן לאדם אחד או למותג אחד.",
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
  },
  example: {
    title: "מחומר לפרסום, כתהליך",
    intro: "תצוגה מפושטת של המערך. נקודת האישור שלכם.",
    map: {
      caption: "מחומר לקצב",
      ariaLabel: "מערך תוכן לינקדאין מחומר גולמי לפוסטים מפורסמים",
      nodes: [
        { label: "החומר שלכם", sub: "שיחות · פרויקטים · הצלחות" },
        { label: "זוויות מוצעות" },
        { label: "טיוטות בקול שלכם" },
        { label: "תור אישורים" },
        { label: "האישור שלכם", human: true },
        { label: "מתפרסם בקצב", out: true },
      ],
    },
  },
  how: {
    title: "איך זה רץ",
    intro: "שירות מנוהל עם הרגל אישור אחד: כמה דקות מול התור, פעם או פעמיים בשבוע.",
    steps: [
      {
        title: "בונים פרופיל קול",
        desc: "אוספים את הכתיבה והעמדות הקיימות שלכם והופכים אותן לפרופיל עבודה.",
      },
      {
        title: "מחברים את החומר",
        desc: "סיכומי שיחות, עדכוני פרויקטים והצלחות נכנסים כקלט גולמי.",
      },
      {
        title: "מנסחים וממלאים תור כל שבוע",
        desc: "המנוע מציע זוויות ומכין טיוטות לקראת השבוע.",
      },
      {
        title: "אתם מאשרים, עורכים או פוסלים",
        desc: "שום דבר לא מתפרסם לבד. התור מחכה להחלטה שלכם.",
        human: true,
      },
      {
        title: "מפרסמים ומכווננים",
        desc: "פוסטים מאושרים יוצאים בקצב; מה שעובד חוזר ומשפר את הפרופיל.",
      },
    ],
  },
  human: {
    title: "מה נשאר שלכם",
    intro: "המנוע מנסח; הקול והעמדות שלכם.",
    items: [
      {
        title: "רק הדעות שלכם",
        desc: "המנוע מנסח ממה שבאמת אמרתם וכתבתם. הוא לא ממציא לכם עמדות.",
      },
      {
        title: "הניסוח הסופי",
        desc: "כל פוסט שלכם לערוך לפני שהוא נושא את השם שלכם.",
      },
      {
        title: "כפתור הפרסום",
        desc: "שום דבר לא יוצא בלי אישור מפורש שלכם.",
      },
      {
        title: "הכיוון",
        desc: "נושאים, קהל וטון נשארים החלטה שלכם; המנוע מבצע.",
      },
    ],
  },
  cta: {
    heading: "חודש הפוסטים הבא שלכם כבר נמצא בחומר שלכם.",
    body: "שלחו כמה קישורים לדברים שכתבתם או כמה שורות על מה שאתם עושים. קודם בונים פרופיל קול, ואז אתם רואים טיוטות אמיתיות לפני שמשהו רץ.",
    ctaLabel: "להתחיל מהחומר שלכם",
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the LinkedIn Content Engine page content for a locale. */
export const linkedinContentEngineContent = localeAccessor(
  "linkedinContentEngineContent",
  CONTENT,
);
