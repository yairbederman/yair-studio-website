import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { ladderRungCard } from "@/content/ladder";
import type { Locale } from "@/content/types";
import type { CapabilityPageContent } from "./types";

/**
 * /studio/ai-enablement — hands-on sessions for a business team (owner +
 * staff) on the office's own recurring work, with the approval habits that
 * keep it safe. Rewritten for business teams; it replaces the retired
 * /offers/ai-enablement workshops page (which 308s here).
 *
 * The ai-enablement film (`film`, paths unchanged) bakes `example.map.nodes`
 * verbatim plus the peak caption from `how.steps[4].desc` and the closing
 * from `human.items[2].desc`. Its COPY is re-traced to these strings before
 * the re-render; see hyperframes/ai-enablement/DESIGN.md.
 */

const en: CapabilityPageContent = {
  hero: {
    title: "Your team, running AI on its own recurring work",
    lead: "Hands-on sessions for an office's owner and staff, on the team's real tasks: intake, documents, follow-up, and reporting. The team leaves with working setups, a written playbook for the office's tools, and the approval habits that keep it safe.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  film: {
    // Story = example.map nodes 0→5 (verbatim); caption traces to the map and
    // to human.items[0] ("your review stays"). Schematic film (no product UI)
    // — no "Sample data" chip.
    sectionTitle: "A session, as a flow",
    webm: "/videos/ai-enablement.webm",
    mp4: "/videos/ai-enablement.mp4",
    poster: "/videos/ai-enablement-poster.png",
    caption:
      "A real task from your office, worked hands-on with AI into a playbook for your tools; your review stays, and the team runs it alone.",
    filmName: "AI enablement film",
  },
  does: {
    title: "What I do",
    items: [
      {
        title: "Pick the team's real tasks",
        desc: "Intake, documents, follow-up, reporting: the work that repeats every week in your office.",
      },
      {
        title: "Work them hands-on with AI",
        desc: "Each session runs on the office's own tools and the actual task, not a demo.",
      },
      {
        title: "Set the approval habits",
        desc: "Where a person checks, what never goes out unread, and what stays manual.",
      },
      {
        title: "Write it down for your office",
        desc: "The setups and habits that worked become a playbook for your tools, in your language.",
      },
    ],
  },
  receive: {
    title: "What you receive",
    items: [
      {
        title: "Session days on real tasks",
        desc: "Working days with the team, each built around tasks from your office's week.",
      },
      {
        title: "A written playbook for your tools",
        desc: "What to use, how, and where a person checks, written for the tools the office already has.",
      },
      {
        title: "The working setups",
        desc: "The prompts, templates, and automations the team ran in the sessions, kept afterwards.",
      },
      {
        title: "A follow-up visit",
        desc: "A return after the team has run alone, to fix what drifted and answer what came up.",
      },
    ],
  },
  how: {
    title: "How it runs",
    steps: [
      {
        title: "Scope with the owner",
        desc: "We pick the team, the tasks, and the number of days.",
      },
      {
        title: "Run the first session day",
        desc: "Hands-on from the first hour, on your office's own work.",
      },
      {
        title: "Capture the playbook",
        desc: "What worked becomes a written practice for your tools.",
      },
      {
        title: "The team runs alone",
        desc: "Weeks of real use with the playbook and the setups.",
      },
      {
        title: "Follow up; review stays yours",
        desc: "A return visit to fix what drifted; judgment and review stay with your people.",
        human: true,
      },
    ],
  },
  example: {
    title: "A session, as a flow",
    intro: "A simplified view of the format.",
    map: {
      caption: "From a real task to a team that runs it",
      ariaLabel: "Enablement flow from a real office task to a team running AI on its own",
      nodes: [
        { label: "A real task", sub: "from your office's week" },
        { label: "Hands-on with AI" },
        { label: "Habits captured" },
        { label: "Playbook for your office" },
        { label: "Your review stays", human: true },
        { label: "The team runs it alone", out: true },
      ],
    },
  },
  human: {
    title: "What stays with you",
    items: [
      {
        title: "Every send",
        desc: "What leaves the office is read by a person first, in the sessions and after.",
      },
      {
        title: "Judgment calls",
        desc: "What to hand to AI, what to check, and what to keep manual stays your decision.",
      },
      {
        title: "The playbook",
        desc: "The playbook is yours, written for your office, evolving with the team after the sessions.",
      },
    ],
  },
  where: {
    title: "Where it shows up",
    intro: "Sessions are scoped in the same call: the team, the tasks, and the days.",
    rungs: [
      ladderRungCard(
        "en",
        "01",
        "Bring one recurring task; the call sets the team, the tasks, and the number of days.",
      ),
    ],
  },
  cta: {
    heading: "Bring one real task from your office.",
    body: "That task is the session material. The scoping call sets the team, the tasks, and the number of days.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) content — hebrew-quality drafted. */
const he: CapabilityPageContent = {
  hero: {
    title: "הצוות שלכם, מריץ AI על העבודה החוזרת שלו",
    lead: "מפגשים מעשיים לבעלים ולצוות של המשרד, על המשימות האמיתיות של הצוות: קליטת פניות, מסמכים, מעקב ודוחות. הצוות יוצא עם הגדרות שעובדות, מדריך עבודה כתוב לכלים של המשרד, והרגלי האישור ששומרים על זה בטוח.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  film: {
    // תרגום-יצירה RTL; הכיתוב נגזר מ-example.map ומ-human. סרטון סכמטי — ללא
    // צ'יפ "נתוני דוגמה".
    sectionTitle: "מפגש, כתהליך",
    webm: "/videos/ai-enablement-he.webm",
    mp4: "/videos/ai-enablement-he.mp4",
    poster: "/videos/ai-enablement-he-poster.png",
    caption:
      "משימה אמיתית מהמשרד שלכם עוברת עבודה מעשית עם AI והופכת למדריך עבודה לכלים שלכם; הבדיקה נשארת אצלכם, והצוות מריץ את זה לבד.",
    filmName: "סרטון הטמעת AI",
  },
  does: {
    title: "מה אני עושה",
    items: [
      {
        title: "בוחר את המשימות האמיתיות של הצוות",
        desc: "קליטת פניות, מסמכים, מעקב, דוחות: העבודה שחוזרת כל שבוע במשרד שלכם.",
      },
      {
        title: "עובד עליהן ביחד עם AI",
        desc: "כל מפגש רץ על הכלים של המשרד עצמו ועל המשימה האמיתית, לא על דמו.",
      },
      {
        title: "קובע את הרגלי האישור",
        desc: "איפה אדם בודק, מה אף פעם לא יוצא בלי שקראו אותו, ומה נשאר ידני.",
      },
      {
        title: "כותב את זה למשרד שלכם",
        desc: "ההגדרות וההרגלים שעבדו הופכים למדריך עבודה לכלים שלכם, בשפה שלכם.",
      },
    ],
  },
  receive: {
    title: "מה מקבלים",
    items: [
      {
        title: "ימי מפגש על משימות אמיתיות",
        desc: "ימי עבודה עם הצוות, כל אחד סביב משימות מהשבוע של המשרד שלכם.",
      },
      {
        title: "מדריך עבודה כתוב לכלים שלכם",
        desc: "במה להשתמש, איך, ואיפה אדם בודק, כתוב לכלים שכבר יש למשרד.",
      },
      {
        title: "ההגדרות שעובדות",
        desc: "הפרומפטים, התבניות והאוטומציות שהצוות הריץ במפגשים, ונשארים אחריהם.",
      },
      {
        title: "ביקור המשך",
        desc: "חזרה אחרי שהצוות רץ לבד, לתקן מה שזז ולענות על מה שעלה.",
      },
    ],
  },
  how: {
    title: "איך זה רץ",
    steps: [
      {
        title: "מגדירים עם הבעלים",
        desc: "בוחרים את הצוות, את המשימות ואת מספר הימים.",
      },
      {
        title: "מריצים את יום המפגש הראשון",
        desc: "מעשי מהשעה הראשונה, על העבודה של המשרד שלכם.",
      },
      {
        title: "כותבים את מדריך העבודה",
        desc: "מה שעבד הופך לשיטת עבודה כתובה לכלים שלכם.",
      },
      {
        title: "הצוות רץ לבד",
        desc: "שבועות של שימוש אמיתי עם מדריך העבודה וההגדרות.",
      },
      {
        title: "מפגש המשך; הבדיקה נשארת שלכם",
        desc: "ביקור חוזר לתקן מה שזז; שיקול הדעת והבדיקה נשארים אצל האנשים שלכם.",
        human: true,
      },
    ],
  },
  example: {
    title: "מפגש, כתהליך",
    intro: "תצוגה מפושטת של הפורמט.",
    map: {
      caption: "ממשימה אמיתית לצוות שמריץ אותה",
      ariaLabel: "תהליך הטמעה ממשימה אמיתית במשרד לצוות שמריץ AI לבד",
      nodes: [
        { label: "משימה אמיתית", sub: "מהשבוע של המשרד שלכם" },
        { label: "עבודה מעשית עם AI" },
        { label: "ההרגלים נרשמים" },
        { label: "מדריך עבודה למשרד" },
        { label: "הבדיקה נשארת אצלכם", human: true },
        { label: "הצוות מריץ לבד", out: true },
      ],
    },
  },
  human: {
    title: "מה נשאר אצלכם",
    items: [
      {
        title: "כל שליחה",
        desc: "מה שיוצא מהמשרד נקרא קודם על ידי אדם, במפגשים ואחריהם.",
      },
      {
        title: "שיקול הדעת",
        desc: "מה למסור ל-AI, מה לבדוק ומה להשאיר ידני נשאר החלטה שלכם.",
      },
      {
        title: "מדריך העבודה",
        desc: "מדריך העבודה שלכם, כתוב למשרד שלכם, ומתפתח עם הצוות גם אחרי המפגשים.",
      },
    ],
  },
  where: {
    title: "איפה זה מופיע",
    intro: "המפגשים נסגרים באותה שיחה: הצוות, המשימות והימים.",
    rungs: [
      ladderRungCard(
        "he",
        "01",
        "מביאים משימה חוזרת אחת; בשיחה קובעים את הצוות, את המשימות ואת מספר הימים.",
      ),
    ],
  },
  cta: {
    heading: "תביאו משימה אמיתית אחת מהמשרד.",
    body: "המשימה הזאת היא חומר המפגש. שיחת האפיון קובעת את הצוות, את המשימות ואת מספר הימים.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, CapabilityPageContent>> = { en, he };

/** Resolve the AI-enablement capability page content for a locale. */
export const aiEnablementContent = localeAccessor(
  "aiEnablementContent",
  CONTENT,
);
