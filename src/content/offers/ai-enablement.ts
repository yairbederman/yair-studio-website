import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import type { Locale } from "@/content/types";
import type { OfferPageContent } from "./types";

/**
 * AI Enablement Workshops — the mentorship offer. Hands-on workshops in
 * AI-assisted coding and agent workflows for R&D and engineering teams,
 * grounded in the founder's real R&D-leadership background (see proof.ts).
 * Priced per workshop day (model only, no numbers).
 *
 * Page-local CTA LABEL override only ("Book a scoping call"); the DESTINATION
 * stays single-sourced from shellContent().workflowCta.href.
 */

const en: OfferPageContent = {
  hero: {
    eyebrow: "Workshops",
    title: "AI enablement for R&D and engineering teams",
    lead: "Hands-on workshops that take a team from using AI as fancy autocomplete to running real agent workflows on their own codebase. Taught by someone who has led R&D and works this way daily. The team leaves with working patterns, a playbook for their stack, and no slideware.",
    ctaLabel: "Book a scoping call",
    ctaHref: shellContent("en").workflowCta.href,
    secondaryCta: { label: "See the format", href: "#how" },
  },
  who: {
    title: "This fits if you are saying one of these things",
    items: [
      {
        title: "Our engineers use AI as autocomplete",
        desc: "The tools are licensed, but the way of working has not changed.",
      },
      {
        title: "Adoption is wildly uneven",
        desc: "Two people fly, the rest watch. There is no shared practice.",
      },
      {
        title: "Leadership wants a real answer",
        desc: "Not another tool purchase: an actual working method for the team.",
      },
      {
        title: "Pilots stall after the demo",
        desc: "Impressive for a week, then everyone drifts back to the old way.",
      },
    ],
  },
  problems: {
    title: "What the workshops cover",
    items: [
      {
        title: "AI-assisted coding, properly",
        desc: "Working with coding agents (Claude Code and similar) on real tasks: scoping, prompting, reviewing.",
      },
      {
        title: "Agent workflows",
        desc: "Breaking real work into agent-runnable pieces with checkpoints a person controls.",
      },
      {
        title: "Review and trust",
        desc: "How to review AI-produced code and output without either rubber-stamping or re-doing everything.",
      },
      {
        title: "Making it stick",
        desc: "Embedding the practice in the team's actual process, so it survives the week after.",
      },
    ],
  },
  build: {
    title: "What the team gets",
    intro: "Working sessions on your real work, and artifacts that stay.",
    items: [
      {
        title: "Hands-on sessions",
        desc: "Workshop days built around tasks from your own backlog, on your own codebase.",
      },
      {
        title: "A playbook for your stack",
        desc: "The patterns that worked, written up for your tools, languages, and review process.",
      },
      {
        title: "Working agent setups",
        desc: "Configurations and workflows the team actually ran during the sessions, kept afterwards.",
      },
      {
        title: "A follow-up session",
        desc: "A return visit after the team has run alone, to fix what drifted and answer what came up.",
      },
    ],
  },
  example: {
    title: "A workshop, as a flow",
    intro: "A simplified view of the format.",
    map: {
      caption: "From backlog task to owned practice",
      ariaLabel: "Workshop flow from a real backlog task to a team-owned practice",
      nodes: [
        { label: "A real task", sub: "from your backlog" },
        { label: "Hands-on with agents" },
        { label: "Patterns captured" },
        { label: "Playbook for your stack" },
        { label: "Human review stays", human: true },
        { label: "The team runs it alone", out: true },
      ],
    },
  },
  how: {
    title: "How it works",
    intro: "Scoped with the team lead, delivered in workshop days.",
    steps: [
      {
        title: "Scope with the lead",
        desc: "We pick the team, the stack, and the real tasks the sessions will run on.",
      },
      {
        title: "Run the first workshop day",
        desc: "Hands-on from the first hour: agents working on your backlog, not toy repos.",
      },
      {
        title: "Capture the playbook",
        desc: "What worked becomes a written practice for your stack and review process.",
      },
      {
        title: "The team runs alone",
        desc: "Weeks of real use, with the playbook and the setups from the sessions.",
      },
      {
        title: "Follow up and harden",
        desc: "A return session to fix what drifted; judgment and review stay with your engineers.",
        human: true,
      },
    ],
  },
  pricing: {
    title: "How the workshops are priced",
    intro: "Per day, scoped up front.",
    items: [
      {
        title: "Per workshop day",
        desc: "Each session is a full working day with the team, priced as a day rate.",
      },
      {
        title: "Scoped with the lead",
        desc: "The number of days follows the team's size and goals, agreed before the first session.",
      },
    ],
    note: "The day rate is agreed in the scoping call.",
  },
  human: {
    title: "What stays with your engineers",
    intro: "The workshops add leverage; ownership does not move.",
    items: [
      {
        title: "Code ownership",
        desc: "Everything an agent writes is reviewed and owned by your team, with the review skills to match.",
      },
      {
        title: "Judgment calls",
        desc: "What to automate, what to gate, and what to keep manual stays an engineering decision.",
      },
      {
        title: "The practice itself",
        desc: "The playbook is yours, in your repo, evolving with your team after I leave.",
      },
    ],
  },
  cta: {
    heading: "Bring one real task from your backlog.",
    body: "That task is the workshop material. A short scoping call with the team lead sets the stack, the goals, and the number of days.",
    ctaLabel: "Book a scoping call",
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) enablement content — hebrew-quality drafted. */
const he: OfferPageContent = {
  hero: {
    eyebrow: "סדנאות",
    title: "הטמעת AI לצוותי פיתוח ומו״פ",
    lead: "סדנאות מעשיות שלוקחות צוות משימוש ב-AI כהשלמה אוטומטית משוכללת לעבודה אמיתית עם agent workflows על הקוד שלו. מועבר על ידי מי שהוביל מו״פ ועובד ככה ביומיום. הצוות יוצא עם דפוסי עבודה, פלייבוק לסטאק שלו, ובלי מצגות.",
    ctaLabel: "לקבוע שיחת היקף",
    ctaHref: shellContent("he").workflowCta.href,
    secondaryCta: { label: "לראות את הפורמט", href: "#how" },
  },
  who: {
    title: "זה מתאים אם אתם אומרים אחד מהמשפטים האלה",
    items: [
      {
        title: "המהנדסים משתמשים ב-AI כהשלמה אוטומטית",
        desc: "הכלים קיימים ומורשים, אבל שיטת העבודה לא השתנתה.",
      },
      {
        title: "האימוץ לא אחיד בכלל",
        desc: "שניים טסים, השאר צופים. אין פרקטיקה משותפת.",
      },
      {
        title: "ההנהלה רוצה תשובה אמיתית",
        desc: "לא עוד רכישת כלי: שיטת עבודה שבאמת עובדת לצוות.",
      },
      {
        title: "פיילוטים נתקעים אחרי הדמו",
        desc: "מרשים שבוע, ואז כולם חוזרים לדרך הישנה.",
      },
    ],
  },
  problems: {
    title: "מה הסדנאות מכסות",
    items: [
      {
        title: "קידוד בעזרת AI, כמו שצריך",
        desc: "עבודה עם סוכני קוד (Claude Code ודומיו) על משימות אמיתיות: תיחום, הנחיה, בדיקה.",
      },
      {
        title: "Agent workflows",
        desc: "פירוק עבודה אמיתית לחלקים שסוכן יכול להריץ, עם נקודות בקרה שאדם שולט בהן.",
      },
      {
        title: "בדיקה ואמון",
        desc: "איך בודקים קוד ותוצרים של AI בלי לחתום בעיניים עצומות ובלי לעשות הכול מחדש.",
      },
      {
        title: "שזה יחזיק",
        desc: "הטמעת הפרקטיקה בתהליך האמיתי של הצוות, כדי שתשרוד גם את השבוע שאחרי.",
      },
    ],
  },
  build: {
    title: "מה הצוות מקבל",
    intro: "סשנים מעשיים על העבודה האמיתית שלכם, ותוצרים שנשארים.",
    items: [
      {
        title: "סשנים מעשיים",
        desc: "ימי סדנה סביב משימות מהבקלוג שלכם, על הקוד שלכם.",
      },
      {
        title: "פלייבוק לסטאק שלכם",
        desc: "הדפוסים שעבדו, כתובים עבור הכלים, השפות ותהליך הבדיקה שלכם.",
      },
      {
        title: "סביבות סוכנים עובדות",
        desc: "קונפיגורציות ותהליכים שהצוות באמת הריץ בסשנים, ונשארים אחריהם.",
      },
      {
        title: "מפגש המשך",
        desc: "חזרה אחרי שהצוות רץ לבד, לתקן מה שזז ולענות על מה שעלה.",
      },
    ],
  },
  example: {
    title: "סדנה, כתהליך",
    intro: "תצוגה מפושטת של הפורמט.",
    map: {
      caption: "ממשימה בבקלוג לפרקטיקה של הצוות",
      ariaLabel: "זרימת סדנה ממשימה אמיתית לפרקטיקה שהצוות מריץ לבד",
      nodes: [
        { label: "משימה אמיתית", sub: "מהבקלוג שלכם" },
        { label: "עבודה מעשית עם סוכנים" },
        { label: "דפוסים נלכדים" },
        { label: "פלייבוק לסטאק שלכם" },
        { label: "הבדיקה נשארת אנושית", human: true },
        { label: "הצוות רץ לבד", out: true },
      ],
    },
  },
  how: {
    title: "איך זה עובד",
    intro: "נתחם עם ראש הצוות, נמסר בימי סדנה.",
    steps: [
      {
        title: "תוחמים עם ראש הצוות",
        desc: "בוחרים את הצוות, הסטאק והמשימות האמיתיות שהסשנים ירוצו עליהן.",
      },
      {
        title: "מריצים את יום הסדנה הראשון",
        desc: "מעשי מהשעה הראשונה: סוכנים עובדים על הבקלוג שלכם, לא על ריפו צעצוע.",
      },
      {
        title: "לוכדים את הפלייבוק",
        desc: "מה שעבד הופך לפרקטיקה כתובה לסטאק ולתהליך הבדיקה שלכם.",
      },
      {
        title: "הצוות רץ לבד",
        desc: "שבועות של שימוש אמיתי, עם הפלייבוק והסביבות מהסשנים.",
      },
      {
        title: "מפגש המשך וחיזוק",
        desc: "חוזרים לתקן מה שזז; שיקול הדעת והבדיקה נשארים אצל המהנדסים שלכם.",
        human: true,
      },
    ],
  },
  pricing: {
    title: "איך הסדנאות מתומחרות",
    intro: "לפי יום, בתיחום מראש.",
    items: [
      {
        title: "לפי יום סדנה",
        desc: "כל סשן הוא יום עבודה מלא עם הצוות, מתומחר כתעריף יומי.",
      },
      {
        title: "בתיחום עם ראש הצוות",
        desc: "מספר הימים נגזר מגודל הצוות והיעדים, ונסגר לפני הסשן הראשון.",
      },
    ],
    note: "התעריף היומי נסגר בשיחת ההיקף.",
  },
  human: {
    title: "מה נשאר אצל המהנדסים שלכם",
    intro: "הסדנאות מוסיפות מנוף; הבעלות לא זזה.",
    items: [
      {
        title: "בעלות על הקוד",
        desc: "כל מה שסוכן כותב נבדק ונחתם על ידי הצוות שלכם, עם כישורי הבדיקה שמתאימים לזה.",
      },
      {
        title: "שיקול הדעת",
        desc: "מה לאוטומט, מה לגדר ומה להשאיר ידני נשאר החלטה הנדסית שלכם.",
      },
      {
        title: "הפרקטיקה עצמה",
        desc: "הפלייבוק שלכם, בריפו שלכם, ומתפתח עם הצוות גם אחרי שאני הולך.",
      },
    ],
  },
  cta: {
    heading: "תביאו משימה אמיתית אחת מהבקלוג.",
    body: "המשימה הזאת היא חומר הסדנה. שיחת היקף קצרה עם ראש הצוות סוגרת סטאק, יעדים ומספר ימים.",
    ctaLabel: "לקבוע שיחת היקף",
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, OfferPageContent>> = { en, he };

/** Resolve the AI Enablement Workshops page content for a locale. */
export const aiEnablementContent = localeAccessor("aiEnablementContent", CONTENT);
