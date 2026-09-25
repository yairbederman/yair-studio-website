import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import { afterProjectSection } from "@/content/ladder";
import type { Locale } from "@/content/types";
import type { ServicePageContent } from "./types";

/**
 * /services/ai-agents — the AI agents service: agents that run a small
 * office's recurring work (intake, sorting, drafts, follow-up, documents)
 * inside the office's own tools, every outbound action waiting for a person.
 * One page for one buyer: it merges the retired /studio pages
 * agentic-systems, process-optimization (the map comes first) and
 * ai-enablement (the team sessions), and carries the two fixed-price ways in
 * as the `where` section, rendered as id="start" — the target of the
 * sprint's OFFERS href (src/lib/offers.ts), so the sprint's name comes from
 * offerCard(), never retyped. Both starting cards book through the
 * site-wide scoping-call destination (shellContent().workflowCta.href).
 *
 * The film (hyperframes/cap-agentic-systems) bakes `example.map.nodes`
 * verbatim and takes its peak caption from the human step's title
 * (`how.steps[3].title`, "Approve what matters" / "מאשרים את מה שחשוב").
 * The `example` block and that title are copied verbatim from the retired
 * agentic-systems page: change either only with a re-render, and re-trace
 * the film's DESIGN.md source table to this file when you do.
 */

const en: ServicePageContent = {
  hero: {
    title: "AI agents that run your office's recurring work",
    lead: "Intake, sorting, drafts, follow-up, and chasing documents, handled by agents inside the email, calendar, and files your office already uses. Anything that leaves the office waits for a person. It starts as one fixed-price project, and if you want, the studio keeps the agents running month to month.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
    secondaryCta: { label: "See where to start", href: "#start" },
  },
  film: {
    sectionTitle: "The agents at work",
    webm: "/videos/cap-agentic-systems.webm",
    mp4: "/videos/cap-agentic-systems.mp4",
    poster: "/videos/cap-agentic-systems-poster.png",
    caption:
      "One intake, run by agents: a person approves what matters, and the request is answered and tracked.",
    filmName: "AI agents film",
  },
  does: {
    title: "What the agents do",
    intro:
      "The recurring work of a small office: the requests, documents, and follow-ups that cross email, calendar, and files every day.",
    items: [
      {
        title: "Take in every request",
        desc: "Email, web forms, and phone messages captured into one list, so no request depends on someone noticing it.",
      },
      {
        title: "Sort and route",
        desc: "Each request labelled by type and urgency and passed to the person who owns it.",
      },
      {
        title: "Prepare the drafts",
        desc: "Replies, reminders, and routine documents drafted from your templates and past wording, ready for a person to approve.",
      },
      {
        title: "Chase what is missing",
        desc: "Reminders for missing documents, signatures, and answers, drafted on schedule and sent once a person approves them. Nobody has to remember to chase.",
      },
      {
        title: "Keep the follow-up visible",
        desc: "Open requests, promises, and deadlines tracked in one shared view until someone closes them.",
      },
    ],
  },
  receive: {
    title: "What you receive",
    items: [
      {
        title: "A map of the workflow",
        desc: "The process drawn end to end: where work enters, who holds it, where it waits, and which steps an agent should run.",
      },
      {
        title: "Working agents on your tools",
        desc: "Agents running on the office's real email, calendar, documents, and task lists. No new platform to learn.",
      },
      {
        title: "One approval queue",
        desc: "Drafts and proposed actions wait in one place for a yes, an edit, or a no.",
      },
      {
        title: "A log of every run",
        desc: "What each agent did, read, and handed to a person, there to check at any time.",
      },
      {
        title: "Handover notes",
        desc: "How to run, pause, and extend the agents without me in the room.",
      },
    ],
  },
  how: {
    title: "How it runs",
    intro: "One workflow at a time, mapped before anything is built.",
    steps: [
      {
        title: "Map the workflow",
        desc: "With the people who run it: where work enters, which tools it crosses, and where it waits.",
      },
      {
        title: "Sort every step",
        desc: "Automatic, AI-assisted, or human, and what is not worth touching yet. You choose what gets built.",
      },
      {
        title: "Build on your tools",
        desc: "Read-only first where possible, then the actions the office approves.",
      },
      {
        // Baked: the film's peak caption. Keep verbatim.
        title: "Approve what matters",
        desc: "Messages to clients, changes to records, and unclear cases wait for a person.",
        human: true,
      },
      {
        title: "Run and widen",
        desc: "The agents run every day; what they handle grows as the office trusts them.",
      },
    ],
  },
  // Baked: the film plays these nodes verbatim. Keep the block as is.
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
    intro: "The agents assemble, draft, and chase. Judgment stays in the office.",
    items: [
      {
        title: "Every message to a client",
        desc: "Nothing reaches a client until a person approves it.",
      },
      {
        title: "Changes to records",
        desc: "Nothing is changed or deleted without explicit approval.",
      },
      {
        title: "Unclear cases",
        desc: "When an agent's confidence is low, it flags the item for a person instead of acting.",
      },
      {
        title: "The scope",
        desc: "Which work the agents touch, what gets built first, and when to widen it is your call.",
      },
    ],
  },
  where: {
    title: "Where to start",
    intro:
      "Two fixed-price ways in. Each is scoped in the free call and priced before any work starts.",
    rungs: [
      {
        title: offerCard("en", "ai-workflow-sprint").title,
        desc: "One workflow that costs the office time, mapped end to end, then three focused automations built on it and running on your real work, with a person approving what goes out.",
        cta: {
          label: "Scope your first workflow",
          href: shellContent("en").workflowCta.href,
        },
      },
      {
        title: "Hands-on sessions for your team",
        desc: "Working days with the owner and staff on the team's own recurring tasks. The team leaves with working setups, a written playbook for the office's tools, and a follow-up visit once the setups have run on their own.",
        cta: {
          label: "Ask about team sessions",
          href: shellContent("en").workflowCta.href,
        },
      },
    ],
  },
  // Written for what the band shows today: the one published agents item is
  // a prototype (src/content/work.ts). Rewrite both intros when the live
  // law-office item is published.
  work: {
    title: "The work so far",
    intro:
      "A prototype, shown with sample data. The system running today for a client office stays private, so it is not shown here.",
    category: "agents",
  },
  after: afterProjectSection(
    "en",
    "The workflow map, the agents, the approval queue, and the run log: yours, documented, and running.",
  ),
  cta: {
    heading: "Start with the workflow that eats the most time.",
    body: "Book the scoping call. We look at one workflow together and say which steps an agent should run and which must stay with a person. You get a written read either way.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) content — written, not translated. */
const he: ServicePageContent = {
  hero: {
    title: "סוכני AI שמריצים את העבודה החוזרת של המשרד",
    lead: "קליטת פניות, מיון, טיוטות, מעקב ורדיפה אחרי מסמכים, בידי סוכנים שעובדים בתוך המייל, היומן והקבצים שהמשרד כבר עובד איתם. כל מה שיוצא מהמשרד מחכה לאדם. מתחילים בפרויקט אחד במחיר קבוע, ואם תרצו, הסטודיו ממשיך להריץ את הסוכנים חודש אחרי חודש.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
    secondaryCta: { label: "מאיפה מתחילים", href: "#start" },
  },
  film: {
    sectionTitle: "הסוכנים בעבודה",
    webm: "/videos/cap-agentic-systems-he.webm",
    mp4: "/videos/cap-agentic-systems-he.mp4",
    poster: "/videos/cap-agentic-systems-he-poster.png",
    caption:
      "פנייה אחת, בניהול סוכנים: אדם מאשר את מה שחשוב, והפנייה נענית ונשארת במעקב.",
    filmName: "סרטון סוכני ה-AI",
  },
  does: {
    title: "מה הסוכנים עושים",
    intro:
      "העבודה החוזרת של משרד קטן: הפניות, המסמכים והמעקבים שעוברים כל יום בין המייל, היומן והקבצים.",
    items: [
      {
        title: "קולטים כל פנייה",
        desc: "מיילים, טפסים מהאתר והודעות טלפון נאספים לרשימה אחת, כך שאף פנייה לא תלויה בזה שמישהו ישים לב אליה.",
      },
      {
        title: "ממיינים ומנתבים",
        desc: "כל פנייה מסומנת לפי סוג ודחיפות ועוברת לאדם שאחראי עליה.",
      },
      {
        title: "מכינים טיוטות",
        desc: "תשובות, תזכורות ומסמכים שגרתיים מנוסחים מהתבניות ומהניסוחים הקודמים שלכם, ומחכים לאישור של אדם.",
      },
      {
        title: "רודפים אחרי מה שחסר",
        desc: "תזכורות על מסמכים, חתימות ותשובות שחסרים מנוסחות בזמן ויוצאות אחרי שאדם מאשר אותן. אף אחד לא צריך לזכור לרדוף.",
      },
      {
        title: "המעקב גלוי לכולם",
        desc: "פניות פתוחות, הבטחות ומועדים במעקב בתצוגה משותפת אחת, עד שמישהו סוגר אותם.",
      },
    ],
  },
  receive: {
    title: "מה מקבלים",
    items: [
      {
        title: "מפת תהליך",
        desc: "התהליך משורטט מקצה לקצה: איפה העבודה נכנסת, מי מחזיק אותה, איפה היא מחכה ואילו שלבים סוכן צריך להריץ.",
      },
      {
        title: "סוכנים שעובדים על הכלים שלכם",
        desc: "סוכנים שרצים על המייל, היומן, המסמכים והמשימות האמיתיים של המשרד. בלי מערכת חדשה ללמוד.",
      },
      {
        title: "תור אישורים אחד",
        desc: "טיוטות ופעולות מוצעות מחכות במקום אחד לאישור, לעריכה או לפסילה.",
      },
      {
        title: "יומן של כל ריצה",
        desc: "מה כל סוכן עשה, קרא והעביר לאדם, זמין לבדיקה בכל רגע.",
      },
      {
        title: "מסמך מסירה",
        desc: "איך מריצים, עוצרים ומרחיבים את הסוכנים בלי שאני בחדר.",
      },
    ],
  },
  how: {
    title: "איך זה רץ",
    intro: "תהליך אחד בכל פעם, ממופה לפני שבונים משהו.",
    steps: [
      {
        title: "ממפים את התהליך",
        desc: "יחד עם האנשים שמריצים אותו: איפה העבודה נכנסת, בין אילו כלים היא עוברת ואיפה היא מחכה.",
      },
      {
        title: "ממיינים כל שלב",
        desc: "אוטומטי, בעזרת AI או אנושי, ומה שלא שווה לגעת בו כרגע. אתם בוחרים מה נבנה.",
      },
      {
        title: "בונים על הכלים שלכם",
        desc: "קודם קריאה בלבד איפה שאפשר, ואז הפעולות שהמשרד מאשר.",
      },
      {
        // נאפה בסרטון: כיתוב השיא. לשמור מילה במילה.
        title: "מאשרים את מה שחשוב",
        desc: "הודעות ללקוחות, שינויים ברשומות ומקרים לא ברורים מחכים לאדם.",
        human: true,
      },
      {
        title: "מריצים ומרחיבים",
        desc: "הסוכנים רצים כל יום, ומה שהם מטפלים בו גדל ככל שהמשרד סומך עליהם.",
      },
    ],
  },
  // נאפה בסרטון: הצמתים מוצגים מילה במילה. לא לשנות את הבלוק.
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
    intro: "הסוכנים מרכיבים, מנסחים ורודפים אחרי מה שחסר. שיקול הדעת נשאר במשרד.",
    items: [
      {
        title: "כל הודעה ללקוח",
        desc: "שום דבר לא מגיע ללקוח עד שאדם מאשר אותו.",
      },
      {
        title: "שינויים ברשומות",
        desc: "שום דבר לא משתנה ולא נמחק בלי אישור מפורש.",
      },
      {
        title: "מקרים לא ברורים",
        desc: "כשהסוכן לא בטוח מספיק, הוא מסמן את הפריט לבדיקה של אדם במקום לפעול.",
      },
      {
        title: "ההיקף",
        desc: "באילו עבודות הסוכנים נוגעים, מה נבנה קודם ומתי מרחיבים, זו ההחלטה שלכם.",
      },
    ],
  },
  where: {
    title: "מאיפה מתחילים",
    intro:
      "שתי דרכים להתחיל, שתיהן במחיר קבוע. כל אחת מוגדרת בשיחת האפיון החינמית ומתומחרת לפני שהעבודה מתחילה.",
    rungs: [
      {
        title: offerCard("he", "ai-workflow-sprint").title,
        desc: "תהליך אחד שעולה למשרד זמן, ממופה מקצה לקצה, ואז שלוש אוטומציות ממוקדות שנבנות עליו ורצות על העבודה האמיתית שלכם, כשאדם מאשר את מה שיוצא.",
        cta: {
          label: "לאפיין את התהליך הראשון",
          href: shellContent("he").workflowCta.href,
        },
      },
      {
        title: "מפגשים מעשיים לצוות",
        desc: "ימי עבודה עם הבעלים והצוות על המשימות החוזרות של הצוות עצמו. הצוות יוצא עם הגדרות שעובדות, מדריך עבודה כתוב לכלים של המשרד, וביקור המשך אחרי שההגדרות רצות לבד.",
        cta: {
          label: "לשאול על מפגשים לצוות",
          href: shellContent("he").workflowCta.href,
        },
      },
    ],
  },
  work: {
    title: "העבודה עד עכשיו",
    intro:
      "אב־טיפוס שמוצג עם נתוני דוגמה. המערכת שרצה היום אצל משרד לקוח נשארת פרטית, ולכן היא לא מוצגת כאן.",
    category: "agents",
  },
  after: afterProjectSection(
    "he",
    "מפת התהליך, הסוכנים, תור האישורים ויומן הריצות: שלכם, מתועדים ורצים.",
  ),
  cta: {
    heading: "מתחילים מהתהליך שאוכל הכי הרבה זמן.",
    body: "קובעים שיחת אפיון. מסתכלים יחד על תהליך אחד ואומרים אילו שלבים סוכן צריך להריץ ואילו חייבים להישאר אצל אדם. בכל מקרה מקבלים סיכום כתוב.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, ServicePageContent>> = { en, he };

/** Resolve the AI agents service page content for a locale. */
export const aiAgentsContent = localeAccessor("aiAgentsContent", CONTENT);
