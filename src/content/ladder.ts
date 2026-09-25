import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import { serviceCard } from "@/content/service-cards";
import { WORK_PAGES } from "@/lib/work-slugs";
import type { CardItem, Cta, Locale } from "@/content/types";

/**
 * The 3-rung commitment ladder — the single source for the homepage ladder
 * section, the /offers ladder page (src/content/offers-index.ts imports it;
 * never restate the rungs there), and the "Where it shows up" cards on the
 * capability and service pages (through ladderRungCard()).
 *
 * Rung 01 is a plain Cta to the site-wide scoping-call CTA
 * (src/content/shell.ts), never an Offer. Rung 02 is the project rung: its
 * four `receive` shapes link through offerCard() / serviceCard(), and its
 * CTA is the sprint card's own label and link. Rung 03 takes its title and
 * link from offerCard(), so the Managed AI Office is named in one place.
 * A renamed offer or service key fails the build here instead of shipping a
 * dead link. Rung 03's `receive` nouns reuse the wording of the offer page's
 * build.items; the Command Center is named by its work title (WORK_PAGES,
 * read from the import-free src/lib/work-slugs.ts rather than work.ts, which
 * imports the offer content — ladder.ts is imported by most content files,
 * so it stays at the bottom of the import graph).
 *
 * Visible copy speaks business, not method: "step" and "monthly", never
 * "rung" or "retainer" (those stay in code comments only). It describes the
 * path, never the client base: what clients usually do is a claim the
 * studio cannot back. Hebrew says "חודש אחרי חודש" for month to month, as
 * every other page does.
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

/** The Command Center's name in a locale — its work title, never retyped. */
function commandCenterName(locale: Locale): string {
  const page = WORK_PAGES.find((p) => p.slug === "command-center");
  if (!page) {
    throw new Error('ladder: no "command-center" entry in WORK_PAGES');
  }
  return locale === "he" ? page.heTitle : page.title;
}

const en: LadderContent = {
  title: "Three ways to start",
  intro: `Each step stands on its own, and you can stop after any of them. The ${offerCard("en", "ai-office-assistant").title} is the studio running your office's recurring work, month to month.`,
  rungs: [
    {
      num: "01",
      title: "Scoping call",
      kicker: "Free · 20 minutes · no obligation",
      desc: "Tell me about one workflow that costs your office time. We look at how it runs today and where it gets stuck.",
      receive: [
        { label: "A written read of the workflow" },
        { label: "A plain answer on what fits next, and why" },
      ],
      cta: shellContent("en").workflowCta,
    },
    {
      num: "02",
      title: "A fixed-price project",
      kicker: "Fixed scope · fixed price",
      desc: "One project, scoped in the call and priced before work starts. Four shapes:",
      receive: [
        {
          label: "A workflow sprint: one process mapped, three automations built",
          href: offerCard("en", "ai-workflow-sprint").href,
        },
        {
          label: "A website: designed, fast, and bilingual",
          href: serviceCard("en", "websites").href,
        },
        {
          label: "A creative film: short, for a brand, a launch, or social media",
          href: serviceCard("en", "films").href,
        },
        {
          label: "An agent build: one agent on your own tools, with approval points",
          href: serviceCard("en", "ai-agents").href,
        },
      ],
      cta: {
        label: offerCard("en", "ai-workflow-sprint").cta,
        href: offerCard("en", "ai-workflow-sprint").href,
      },
    },
    {
      num: "03",
      title: offerCard("en", "ai-office-assistant").title,
      kicker: "One-time setup · then month to month",
      desc: "The studio runs your office's recurring work in its own private environment: the morning briefing, the inbox, documents, and follow-up.",
      receive: [
        { label: "Morning briefing" },
        { label: "Email triage" },
        { label: "Document workflows" },
        { label: "Follow-up and meetings" },
        { label: "LinkedIn content engine, included" },
        {
          label: `${commandCenterName("en")}, the view your office logs into (in build)`,
        },
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
  intro: `כל שלב עומד בפני עצמו, ואפשר לעצור אחרי כל אחד מהם. ${offerCard("he", "ai-office-assistant").title} הוא הסטודיו שמריץ את העבודה החוזרת של המשרד שלכם, חודש אחרי חודש.`,
  rungs: [
    {
      num: "01",
      title: "שיחת אפיון",
      kicker: "חינם · 20 דקות · בלי התחייבות",
      desc: "מספרים לי על תהליך אחד שעולה למשרד זמן. מסתכלים יחד איך הוא רץ היום ואיפה הוא נתקע.",
      receive: [
        { label: "סיכום כתוב של התהליך" },
        { label: "תשובה פשוטה מה מתאים הלאה, ולמה" },
      ],
      cta: shellContent("he").workflowCta,
    },
    {
      num: "02",
      title: "פרויקט במחיר קבוע",
      kicker: "היקף קבוע · מחיר קבוע",
      desc: "פרויקט אחד, שנסגר בשיחה ומתומחר לפני שהעבודה מתחילה. ארבעה סוגים:",
      receive: [
        {
          label: "ספרינט תהליך: תהליך אחד ממופה, שלוש אוטומציות בנויות",
          href: offerCard("he", "ai-workflow-sprint").href,
        },
        {
          label: "אתר: מעוצב, מהיר ודו־לשוני",
          href: serviceCard("he", "websites").href,
        },
        {
          label: "סרטון יצירתי: קצר, למותג, להשקה או לרשתות",
          href: serviceCard("he", "films").href,
        },
        {
          label: "בניית סוכן: סוכן אחד על הכלים שלכם, עם נקודות אישור",
          href: serviceCard("he", "ai-agents").href,
        },
      ],
      cta: {
        label: offerCard("he", "ai-workflow-sprint").cta,
        href: offerCard("he", "ai-workflow-sprint").href,
      },
    },
    {
      num: "03",
      title: offerCard("he", "ai-office-assistant").title,
      kicker: "הקמה חד־פעמית · ואז חודש אחרי חודש",
      desc: "הסטודיו מריץ את העבודה החוזרת של המשרד בסביבה פרטית משלו: תדריך הבוקר, המיילים, המסמכים והמעקב.",
      receive: [
        { label: "תדריך בוקר" },
        { label: "מיון מיילים" },
        { label: "תהליכי מסמכים" },
        { label: "מעקב ופגישות" },
        { label: "מנוע תוכן ללינקדאין, כלול" },
        {
          label: `${commandCenterName("he")}, המסך שהמשרד נכנס אליו (בבנייה)`,
        },
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
      "What the project delivered stays yours. When you want the studio to run your office's recurring work, that is the managed office.",
    stays: "What stays",
    adds: "What the managed office adds",
    addsDesc:
      "The studio runs the day's recurring work, month to month: the morning briefing, triage, documents, and follow-up.",
    starts: "How it starts",
    startsDesc:
      "A one-time setup, then month to month, scoped in one conversation. Nothing is sent or changed without your approval.",
  },
  he: {
    title: "אחרי הפרויקט",
    intro:
      "מה שקיבלתם בפרויקט נשאר שלכם. כשתרצו שהסטודיו יריץ את העבודה החוזרת של המשרד, זה המשרד המנוהל.",
    stays: "מה נשאר",
    adds: "מה המשרד המנוהל מוסיף",
    addsDesc:
      "הסטודיו מריץ את העבודה החוזרת של היום, חודש אחרי חודש: תדריך הבוקר, מיון המיילים, המסמכים והמעקב.",
    starts: "איך זה מתחיל",
    startsDesc:
      "הקמה חד־פעמית ואז חודש אחרי חודש, והכול נסגר בשיחה אחת. שום דבר לא נשלח ולא משתנה בלי אישור שלכם.",
  },
};

/**
 * The "After the project" block every project page renders as id `after`
 * (the service pages, the legacy capability pages, and the sprint page): the
 * bridge from a fixed-price project to the managed office. The shared copy
 * lives here once, like ladderRungCard(); the caller supplies only the "What
 * stays" sentence naming its own deliverable. The shared lines must hold for
 * every deliverable, a film as much as an agent, so they never say the
 * project "keeps running". No commercial lever between the project and the
 * monthly office. Never used on the managed-office page itself.
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
