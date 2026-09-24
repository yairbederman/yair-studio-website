import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import { afterProjectSection, ladderRungCard } from "@/content/ladder";
import type { Locale } from "@/content/types";
import type { CapabilityPageContent } from "./types";

/**
 * /studio/agentic-systems — AI agents that run recurring office work inside
 * the office's own tools, every external action waiting for a person. The
 * machinery behind both paid rungs. The film (hyperframes/cap-agentic-systems)
 * bakes `example.map.nodes` verbatim — re-render it if they change.
 */

const en: CapabilityPageContent = {
  hero: {
    title: "AI agents that run your office's recurring work",
    lead: "Intake, triage, drafts, document chasing, and follow-up, run by agents inside the tools your office already uses. Every action that leaves the office waits for a person. This is the machinery behind the sprint and the managed office.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
    secondaryCta: {
      label: offerCard("en", "ai-office-assistant").cta,
      href: offerCard("en", "ai-office-assistant").href,
    },
  },
  film: {
    sectionTitle: "The agent at work",
    webm: "/videos/cap-agentic-systems.webm",
    mp4: "/videos/cap-agentic-systems.mp4",
    poster: "/videos/cap-agentic-systems-poster.png",
    caption:
      "One intake, run by agents: a person approves what matters, and the request is answered and tracked.",
    filmName: "agentic systems film",
  },
  does: {
    title: "What I do",
    items: [
      {
        title: "Design the agents around your workflow",
        desc: "Which steps an agent runs, which tools it reads and writes, and where a person must approve, decided before anything runs.",
      },
      {
        title: "Build them inside your tools",
        desc: "The agents work in the email, calendar, documents, and task lists the office already uses, not a new platform.",
      },
      {
        title: "Run them with a person in the loop",
        desc: "Drafts, triage results, and chased items land in an approval queue; nothing external moves until someone says yes.",
      },
      {
        title: "Keep them honest over time",
        desc: "Every run is logged, and anything unclear is routed to a person instead of guessed.",
      },
    ],
  },
  receive: {
    title: "What you receive",
    items: [
      {
        title: "Agent design",
        desc: "Roles, tools, and approval points for each agent, written down before the build.",
      },
      {
        title: "Working agents on your tools",
        desc: "Agents running on the office's real email, calendar, documents, and tasks.",
      },
      {
        title: "Approval queue",
        desc: "One place where drafts and proposed actions wait for a yes, an edit, or a no.",
      },
      {
        title: "Run log",
        desc: "A record of what each agent did, read, and handed to a person.",
      },
      {
        title: "Handover notes",
        desc: "How to run, pause, and extend the agents without me in the room.",
      },
    ],
  },
  how: {
    title: "How it runs",
    steps: [
      {
        title: "Map the workflow",
        desc: "Where work enters, which tools it crosses, and where it waits.",
      },
      {
        title: "Design the agents",
        desc: "Roles, tools, and the approval points, agreed with you.",
      },
      {
        title: "Build on your tools",
        desc: "Read-only first where possible, then the writes the office approves.",
      },
      {
        title: "Approve what matters",
        desc: "External messages, changes to records, and unclear cases wait for a person.",
        human: true,
      },
      {
        title: "Run and widen",
        desc: "The agents run daily; what they handle grows as the office trusts them.",
      },
    ],
  },
  example: {
    title: "One intake, run by agents",
    intro: "A simplified flow, not a client case study.",
    map: {
      caption: "Intake to follow-up",
      ariaLabel: "A client intake workflow run by agents, with a human approval step",
      nodes: [
        { label: "New request", sub: "email · form · call" },
        { label: "Captured and sorted" },
        { label: "Draft reply prepared" },
        { label: "Missing documents chased" },
        { label: "Human approval", human: true },
        { label: "Answered and tracked", out: true },
      ],
    },
  },
  human: {
    title: "What stays with you",
    items: [
      {
        title: "Every external message",
        desc: "Nothing reaches a client until a person approves it.",
      },
      {
        title: "Changes to records",
        desc: "Nothing is changed or deleted without explicit approval.",
      },
      {
        title: "Unclear cases",
        desc: "When an agent is unsure, it asks. It never guesses.",
      },
      {
        title: "The scope",
        desc: "Which workflows the agents touch, and when to widen it, is your call.",
      },
    ],
  },
  where: {
    title: "Where it shows up",
    intro: "Agents are the machinery of both paid rungs.",
    rungs: [
      ladderRungCard(
        "en",
        "02",
        "As a project of its own: the sprint's three automations, or one agent built on your own tools, with approval points.",
      ),
      ladderRungCard(
        "en",
        "03",
        "The studio runs the agents month to month, inside the retainer.",
      ),
    ],
  },
  after: afterProjectSection(
    "en",
    "The agents, their approval queue, and the run log: yours, documented, and running.",
  ),
  cta: {
    heading: "Start with the workflow that eats the most time.",
    body: "Book the scoping call. We look at one workflow and say which steps an agent should run, and which must stay with a person.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) content — hebrew-quality drafted. */
const he: CapabilityPageContent = {
  hero: {
    title: "סוכני AI שמריצים את העבודה החוזרת של המשרד",
    lead: "קליטת פניות, מיון, טיוטות, רדיפה אחרי מסמכים ומעקב, בידי סוכנים שעובדים בתוך הכלים שהמשרד כבר משתמש בהם. כל פעולה שיוצאת מהמשרד מחכה לאדם. זו המכונה שמאחורי הספרינט ומאחורי המשרד המנוהל.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
    secondaryCta: {
      label: offerCard("he", "ai-office-assistant").cta,
      href: offerCard("he", "ai-office-assistant").href,
    },
  },
  film: {
    sectionTitle: "הסוכן בעבודה",
    webm: "/videos/cap-agentic-systems-he.webm",
    mp4: "/videos/cap-agentic-systems-he.mp4",
    poster: "/videos/cap-agentic-systems-he-poster.png",
    caption:
      "פנייה אחת, בניהול סוכנים: אדם מאשר את מה שחשוב, והפנייה נענתה ובמעקב.",
    filmName: "סרטון מערכות הסוכנים",
  },
  does: {
    title: "מה אני עושה",
    items: [
      {
        title: "מתכנן את הסוכנים סביב התהליך שלכם",
        desc: "אילו שלבים סוכן מריץ, באילו כלים הוא קורא וכותב, ואיפה אדם חייב לאשר, נקבע לפני שמשהו רץ.",
      },
      {
        title: "בונה אותם בתוך הכלים שלכם",
        desc: "הסוכנים עובדים במייל, ביומן, במסמכים וברשימות המשימות שהמשרד כבר עובד איתם, לא בפלטפורמה חדשה.",
      },
      {
        title: "מריץ אותם עם אדם בלולאה",
        desc: "טיוטות, תוצאות מיון ופריטים שנרדפו מגיעים לתור אישורים; שום דבר לא יוצא החוצה עד שמישהו אומר כן.",
      },
      {
        title: "משגיח עליהם לאורך זמן",
        desc: "כל ריצה נרשמת, וכל דבר לא ברור מנותב לאדם במקום להיות מנוחש.",
      },
    ],
  },
  receive: {
    title: "מה מקבלים",
    items: [
      {
        title: "תכנון הסוכנים",
        desc: "תפקידים, כלים ונקודות אישור לכל סוכן, כתובים לפני הבנייה.",
      },
      {
        title: "סוכנים עובדים על הכלים שלכם",
        desc: "סוכנים שרצים על המייל, היומן, המסמכים והמשימות האמיתיים של המשרד.",
      },
      {
        title: "תור אישורים",
        desc: "מקום אחד שבו טיוטות ופעולות מוצעות מחכות לאישור, לעריכה או לפסילה.",
      },
      {
        title: "יומן ריצות",
        desc: "תיעוד של מה כל סוכן עשה, קרא והעביר לאדם.",
      },
      {
        title: "מסמך מסירה",
        desc: "איך מריצים, עוצרים ומרחיבים את הסוכנים בלי שאני בחדר.",
      },
    ],
  },
  how: {
    title: "איך זה רץ",
    steps: [
      {
        title: "ממפים את התהליך",
        desc: "איפה העבודה נכנסת, בין אילו כלים היא עוברת ואיפה היא מחכה.",
      },
      {
        title: "מתכננים את הסוכנים",
        desc: "תפקידים, כלים ונקודות האישור, בהסכמה איתכם.",
      },
      {
        title: "בונים על הכלים שלכם",
        desc: "קודם קריאה בלבד איפה שאפשר, ואז הכתיבות שהמשרד מאשר.",
      },
      {
        title: "מאשרים את מה שחשוב",
        desc: "הודעות החוצה, שינויים ברשומות ומקרים לא ברורים מחכים לאדם.",
        human: true,
      },
      {
        title: "מריצים ומרחיבים",
        desc: "הסוכנים רצים כל יום; מה שהם מטפלים בו גדל ככל שהמשרד סומך עליהם.",
      },
    ],
  },
  example: {
    title: "פנייה אחת, בניהול סוכנים",
    intro: "תהליך מפושט, לא מקרה לקוח אמיתי.",
    map: {
      caption: "מפנייה ועד מעקב",
      ariaLabel: "תהליך קליטת פנייה שסוכנים מריצים, עם שלב אישור אנושי",
      nodes: [
        { label: "פנייה חדשה", sub: "מייל · טופס · טלפון" },
        { label: "נקלטת וממוינת" },
        { label: "טיוטת תשובה מוכנה" },
        { label: "תזכורת למסמכים חסרים" },
        { label: "אישור אנושי", human: true },
        { label: "נענתה ובמעקב", out: true },
      ],
    },
  },
  human: {
    title: "מה נשאר אצלכם",
    items: [
      {
        title: "כל הודעה החוצה",
        desc: "שום דבר לא מגיע ללקוח עד שאדם מאשר אותו.",
      },
      {
        title: "שינויים ברשומות",
        desc: "שום דבר לא משתנה ולא נמחק בלי אישור מפורש.",
      },
      {
        title: "מקרים לא ברורים",
        desc: "כשסוכן לא בטוח, הוא שואל. הוא לא מנחש.",
      },
      {
        title: "ההיקף",
        desc: "באילו תהליכים הסוכנים נוגעים, ומתי להרחיב, זו ההחלטה שלכם.",
      },
    ],
  },
  where: {
    title: "איפה זה מופיע",
    intro: "הסוכנים הם המכונה של שני השלבים בתשלום.",
    rungs: [
      ladderRungCard(
        "he",
        "02",
        "כפרויקט בפני עצמו: שלוש האוטומציות של הספרינט, או סוכן אחד על הכלים שלכם, עם נקודות אישור.",
      ),
      ladderRungCard(
        "he",
        "03",
        "הסטודיו מריץ את הסוכנים חודש בחודשו, בתוך הריטיינר.",
      ),
    ],
  },
  after: afterProjectSection(
    "he",
    "הסוכנים, תור האישורים ויומן הריצות: שלכם, מתועדים ורצים.",
  ),
  cta: {
    heading: "מתחילים מהתהליך שאוכל הכי הרבה זמן.",
    body: "קובעים שיחת אפיון. מסתכלים על תהליך אחד ואומרים אילו שלבים סוכן צריך להריץ, ואילו חייבים להישאר אצל אדם.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, CapabilityPageContent>> = { en, he };

/** Resolve the agentic-systems capability page content for a locale. */
export const agenticSystemsContent = localeAccessor(
  "agenticSystemsContent",
  CONTENT,
);
