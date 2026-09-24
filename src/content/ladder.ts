import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import { capabilityCard } from "@/content/capability-cards";
import type { CardItem, Cta, Locale } from "@/content/types";

/**
 * The 3-rung commitment ladder — the single source for the homepage ladder
 * section, the /offers ladder page (src/content/offers-index.ts imports it;
 * never restate the rungs there), and the "Where it shows up" cards on the
 * capability pages (src/content/studio/*.ts, through ladderRungCard()).
 *
 * Rung 01 is a plain Cta to the site-wide scoping-call CTA
 * (src/content/shell.ts), never an Offer. Rung 02 is the project rung: its
 * four `receive` shapes link through offerCard() / capabilityCard(), and its
 * CTA goes to the sprint (the most common project). Rung 03 links through
 * offerCard(). A renamed offer or capability key fails the build here instead
 * of shipping a dead link. Rung 03's `receive` nouns reuse the wording of the
 * offer page's build.items.
 */

export type LadderRung = {
  num: "01" | "02" | "03";
  title: string;
  /** Commitment line under the title: price model and time, no numbers. */
  kicker: string;
  desc: string;
  /** What the client receives, as nouns; an item with `href` renders as a link. */
  receive: readonly { label: string; href?: string }[];
  cta: Cta;
};

export type LadderContent = {
  title: string;
  intro: string;
  rungs: readonly LadderRung[];
};

const en: LadderContent = {
  title: "Three ways to start",
  intro:
    "Most clients start with a project. The managed office is the studio running it for you, month to month.",
  rungs: [
    {
      num: "01",
      title: "Scoping call",
      kicker: "Free · 20 minutes · no obligation",
      desc: "Tell me about one workflow that costs your office time. We look at how it runs today and where it gets stuck.",
      receive: [
        { label: "A written read of the workflow" },
        { label: "Which rung fits, and why" },
      ],
      cta: shellContent("en").workflowCta,
    },
    {
      num: "02",
      title: "A fixed-price project",
      kicker: "Fixed scope · fixed price",
      desc: "Most clients start here: one project, scoped in the call and priced before work starts. Four shapes:",
      receive: [
        {
          label: "A workflow sprint: one process mapped, three automations built",
          href: offerCard("en", "ai-workflow-sprint").href,
        },
        {
          label: "A website: designed, bilingual, with films",
          href: capabilityCard("en", "websites").href,
        },
        {
          label: "A film: a designed 10–20-second loop for a site or LinkedIn",
          href: capabilityCard("en", "films").href,
        },
        {
          label: "An agent build: one agent on your own tools, with approval points",
          href: capabilityCard("en", "agentic-systems").href,
        },
      ],
      cta: {
        label: "See the sprint, the most common project",
        href: offerCard("en", "ai-workflow-sprint").href,
      },
    },
    {
      num: "03",
      title: "Managed AI Office",
      kicker: "One-time setup + monthly retainer",
      desc: "The studio runs your office's recurring work in its own private environment: the morning briefing, the inbox, documents, and follow-up.",
      receive: [
        { label: "Morning briefing" },
        { label: "Email triage" },
        { label: "Document workflows" },
        { label: "Follow-up and meetings" },
        { label: "LinkedIn content engine, included" },
        { label: "Command Center, the view your office logs into (in build)" },
      ],
      cta: {
        label: offerCard("en", "ai-office-assistant").cta,
        href: offerCard("en", "ai-office-assistant").href,
      },
    },
  ],
};

const he: LadderContent = {
  title: "שלוש דרכים להתחיל",
  intro:
    "רוב הלקוחות מתחילים בפרויקט. המשרד המנוהל הוא הסטודיו שמריץ אותו בשבילכם, חודש בחודשו.",
  rungs: [
    {
      num: "01",
      title: "שיחת אפיון",
      kicker: "חינם · 20 דקות · בלי התחייבות",
      desc: "מספרים לי על תהליך אחד שעולה למשרד זמן. מסתכלים יחד איך הוא רץ היום ואיפה הוא נתקע.",
      receive: [
        { label: "סיכום כתוב של התהליך" },
        { label: "איזה שלב מתאים, ולמה" },
      ],
      cta: shellContent("he").workflowCta,
    },
    {
      num: "02",
      title: "פרויקט במחיר קבוע",
      kicker: "היקף קבוע · מחיר קבוע",
      desc: "רוב הלקוחות מתחילים כאן: פרויקט אחד, שנסגר בשיחה ומתומחר לפני שהעבודה מתחילה. ארבעה סוגים:",
      receive: [
        {
          label: "ספרינט תהליך: תהליך אחד ממופה, שלוש אוטומציות בנויות",
          href: offerCard("he", "ai-workflow-sprint").href,
        },
        {
          label: "אתר: מעוצב, דו־לשוני, עם סרטונים",
          href: capabilityCard("he", "websites").href,
        },
        {
          label: "סרטון: לופ מעוצב של 10–20 שניות לאתר או ללינקדאין",
          href: capabilityCard("he", "films").href,
        },
        {
          label: "בניית סוכן: סוכן אחד על הכלים שלכם, עם נקודות אישור",
          href: capabilityCard("he", "agentic-systems").href,
        },
      ],
      cta: {
        label: "לראות את הספרינט, הפרויקט הכי נפוץ",
        href: offerCard("he", "ai-workflow-sprint").href,
      },
    },
    {
      num: "03",
      title: "משרד AI מנוהל",
      kicker: "הקמה חד־פעמית + ריטיינר חודשי",
      desc: "הסטודיו מריץ את העבודה החוזרת של המשרד בסביבה פרטית משלו: תדריך הבוקר, המיילים, המסמכים והמעקב.",
      receive: [
        { label: "תדריך בוקר" },
        { label: "מיון מיילים" },
        { label: "תהליכי מסמכים" },
        { label: "מעקב ופגישות" },
        { label: "מנוע תוכן ללינקדאין, כלול" },
        { label: "Command Center, המסך שהמשרד נכנס אליו (בבנייה)" },
      ],
      cta: {
        label: offerCard("he", "ai-office-assistant").cta,
        href: offerCard("he", "ai-office-assistant").href,
      },
    },
  ],
};

const CONTENT: Partial<Record<Locale, LadderContent>> = { en, he };

/** Resolve the commitment ladder for a locale. */
export const ladderContent = localeAccessor("ladderContent", CONTENT);

/**
 * Resolve one rung as a linked card for a capability page's "Where it shows
 * up" section: the rung's title, kicker, and CTA stay single-sourced here;
 * the caller adds only the one line that says how this capability rides
 * along in that rung. Throws at module init on an unknown rung number.
 */
export function ladderRungCard(
  locale: Locale,
  num: LadderRung["num"],
  line: string,
): CardItem & { cta: Cta } {
  const rung = ladderContent(locale).rungs.find((r) => r.num === num);
  if (!rung) {
    throw new Error(`ladderRungCard: no rung "${num}" for locale "${locale}"`);
  }
  return { title: rung.title, desc: `${rung.kicker}. ${line}`, cta: rung.cta };
}

/** Shared strings of the "After the project" block, per locale. */
const AFTER_PROJECT: Record<
  Locale,
  {
    title: string;
    intro: string;
    stays: string;
    adds: string;
    addsDesc: string;
    starts: string;
    startsDesc: string;
  }
> = {
  en: {
    title: "After the project",
    intro:
      "What you built keeps running. When you want the studio to run it for you, that is the managed office.",
    stays: "What stays",
    adds: "What the managed office adds",
    addsDesc:
      "The studio runs the day, briefing, triage, documents, and follow-up, month to month, starting from what the project built.",
    starts: "How it starts",
    startsDesc:
      "A month-to-month retainer, scoped in one conversation. Nothing is sent or changed without your approval.",
  },
  he: {
    title: "אחרי הפרויקט",
    intro:
      "מה שבניתם ממשיך לרוץ. כשתרצו שהסטודיו יריץ את זה בשבילכם, זה המשרד המנוהל.",
    stays: "מה נשאר",
    adds: "מה המשרד המנוהל מוסיף",
    addsDesc:
      "הסטודיו מריץ את היום, תדריך, מיון, מסמכים ומעקב, חודש בחודשו, מתוך מה שהפרויקט בנה.",
    starts: "איך זה מתחיל",
    startsDesc:
      "ריטיינר חודשי, שנסגר בשיחה אחת. שום דבר לא נשלח ולא משתנה בלי אישור שלכם.",
  },
};

/**
 * The "After the project" block every project page renders as id `after`
 * (src/content/studio/*.ts and the sprint page): the bridge from a
 * fixed-price project to the managed office. The shared copy lives here
 * once, like ladderRungCard(); the caller supplies only the "What stays"
 * sentence naming its own deliverable. No commercial lever between the
 * project and the retainer. Never used on the retainer page itself.
 */
export function afterProjectSection(
  locale: Locale,
  stays: string,
): { title: string; intro: string; items: readonly CardItem[]; cta: Cta } {
  const t = AFTER_PROJECT[locale];
  const office = offerCard(locale, "ai-office-assistant");
  return {
    title: t.title,
    intro: t.intro,
    items: [
      { title: t.stays, desc: stays },
      { title: t.adds, desc: t.addsDesc },
      { title: t.starts, desc: t.startsDesc },
    ],
    cta: { label: office.cta, href: office.href },
  };
}
