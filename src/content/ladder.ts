import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import type { CardItem, Cta, Locale } from "@/content/types";

/**
 * The 3-rung commitment ladder — the single source for the homepage ladder
 * section, the /offers ladder page (src/content/offers-index.ts imports it;
 * never restate the rungs there), and the "Where it shows up" cards on the
 * capability pages (src/content/studio/*.ts, through ladderRungCard()).
 *
 * Rung 01 is a plain Cta to the site-wide scoping-call CTA
 * (src/content/shell.ts), never an Offer. Rungs 02 and 03 link through
 * offerCard(), so a renamed offer key fails the build here instead of
 * shipping a dead link. The `receive` nouns reuse the wording of each offer
 * page's build.items.
 */

export type LadderRung = {
  num: "01" | "02" | "03";
  title: string;
  /** Commitment line under the title: price model and time, no numbers. */
  kicker: string;
  desc: string;
  /** What the client receives, as nouns. */
  receive: readonly string[];
  cta: Cta;
};

export type LadderContent = {
  title: string;
  intro: string;
  rungs: readonly LadderRung[];
};

const en: LadderContent = {
  title: "Three ways to start",
  intro: "Pick by commitment. Every rung keeps a person approving what matters.",
  rungs: [
    {
      num: "01",
      title: "Scoping call",
      kicker: "Free · 20 minutes · no obligation",
      desc: "Tell me about one workflow that costs your office time. We look at how it runs today and where it gets stuck.",
      receive: ["A written read of the workflow", "Which rung fits, and why"],
      cta: shellContent("en").workflowCta,
    },
    {
      num: "02",
      title: "AI Workflow Sprint",
      kicker: "Fixed price",
      desc: "One workflow mapped end to end, then three focused automations built on it, with the approval points marked.",
      receive: [
        "Workflow map",
        "Three working automations",
        "Approval boundaries",
        "Handoff notes",
      ],
      cta: {
        label: offerCard("en", "ai-workflow-sprint").cta,
        href: offerCard("en", "ai-workflow-sprint").href,
      },
    },
    {
      num: "03",
      title: "Managed AI Office",
      kicker: "One-time setup + monthly retainer",
      desc: "The studio runs your office's recurring work in its own private environment: the morning briefing, the inbox, documents, and follow-up.",
      receive: [
        "Morning briefing",
        "Email triage",
        "Document workflows",
        "Follow-up and meetings",
        "LinkedIn content engine, included",
        "Command Center, the view your office logs into (in build)",
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
  intro: "בוחרים לפי רמת ההתחייבות. בכל שלב אדם מאשר את מה שחשוב.",
  rungs: [
    {
      num: "01",
      title: "שיחת אפיון",
      kicker: "חינם · 20 דקות · בלי התחייבות",
      desc: "מספרים לי על תהליך אחד שעולה למשרד זמן. מסתכלים יחד איך הוא רץ היום ואיפה הוא נתקע.",
      receive: ["סיכום כתוב של התהליך", "איזה שלב מתאים, ולמה"],
      cta: shellContent("he").workflowCta,
    },
    {
      num: "02",
      title: "ספרינט תהליך AI",
      kicker: "מחיר קבוע",
      desc: "תהליך אחד ממופה מקצה לקצה, ואז שלוש אוטומציות ממוקדות נבנות עליו, עם נקודות האישור מסומנות.",
      receive: [
        "מפת תהליך",
        "שלוש אוטומציות עובדות",
        "גבולות אישור",
        "מסמך מסירה",
      ],
      cta: {
        label: offerCard("he", "ai-workflow-sprint").cta,
        href: offerCard("he", "ai-workflow-sprint").href,
      },
    },
    {
      num: "03",
      title: "משרד AI מנוהל",
      kicker: "הקמה חד־פעמית + ריטיינר חודשי",
      desc: "הסטודיו מריץ את העבודה החוזרת של המשרד בסביבה פרטית משלו: תדריך הבוקר, המיילים, המסמכים והמעקב.",
      receive: [
        "תדריך בוקר",
        "מיון מיילים",
        "תהליכי מסמכים",
        "מעקב ופגישות",
        "מנוע תוכן ללינקדאין, כלול",
        "Command Center, המסך שהמשרד נכנס אליו (בבנייה)",
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
