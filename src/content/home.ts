/**
 * Homepage content model — typed and locale-keyed.
 *
 * Externalizes the copy for the homepage sections (Hero, Credibility,
 * Services, Work, Ladder, Proof, Founder, Boundaries, Final CTA) so localized
 * copy is DATA, not hardcoded JSX. The home components consume this via
 * `homeContent(locale)`.
 *
 * CTA destinations live here too (label + href), so per-locale CTAs resolve
 * without branching in components. EN leads with the site-wide scoping-call
 * CTA (src/content/shell.ts → `/contact`); /he leads with WhatsApp — the
 * local norm — in the hero and the Final CTA alike.
 *
 * Nothing sold or proven is restated here: the H1 is the site tagline
 * (SITE_TAGLINE), the credibility band reads the founder facts from
 * src/content/proof.ts, the service cards come from
 * src/content/service-cards.ts, the work cards, their status words and the
 * link label back to /work from src/content/work.ts (WorkGrid,
 * workIndexContent()), the ladder title, intro and rungs from
 * src/content/ladder.ts, the Managed AI Office name and link from
 * offerCard(), and the proof film is the flagship page's own film block
 * (src/content/offers/ai-office-assistant.ts), so the Command Center paths
 * (including its 4:5 phone cut, `film.mobile`) are wired in exactly one
 * place. The Command Center's name per locale is its work title (WORK_PAGES
 * via workItem()).
 */

import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import { ladderContent } from "@/content/ladder";
import { aiOfficeAssistantContent } from "@/content/offers/ai-office-assistant";
import { workIndexContent, workItem } from "@/content/work";
import { localePaths } from "@/lib/locale-paths";
import { SITE_TAGLINE } from "@/lib/site";
import type { Locale, Cta } from "@/content/types";
import type { CapabilityFilm } from "@/content/types";

export type HomeContent = {
  hero: {
    /** Audience line above the H1 (also the OG image eyebrow). */
    eyebrow: string;
    /** The H1, revealed word by word: split on spaces, so keep it plain. */
    title: string;
    /**
     * The one H1 word set in the accent colour, named here rather than marked
     * up in the tagline. Checked at module init (below): it must match exactly
     * one word of `title`, trailing punctuation aside (splitAccent).
     */
    titleAccent: string;
    /** The plain sentence under the H1. */
    lead: string;
    /** Reply-time chip under the lead. */
    status: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    /** The one small line under the CTAs that points at the other services. */
    also: Cta;
  };
  /** Credibility band — label only; the facts are proof's founder credentials. */
  credibility: { title: string };
  /** Services — section copy only; the cards come from serviceCards(locale). */
  services: { title: string; intro: string };
  /**
   * Work — section copy around WorkGrid, the link to the full /work index,
   * and the candour note under the cards. The note's title and its
   * definitions of the status chips are /work's own (workIndexContent()
   * grid), so the note can never drift from the chips; home adds only the
   * one fact the grid cannot show.
   */
  work: {
    title: string;
    intro: string;
    allLink: Cta;
    candour: { title: string; body: string };
  };
  /** Ladder band — ladderContent(locale)'s own title and intro; LadderSection renders its rungs. */
  ladder: { title: string; intro: string };
  /**
   * Proof — the Command Center film, the working face of the managed office.
   * `status` is the visible "in build · sample data" chip text; `link` goes
   * to the Managed AI Office page.
   */
  proof: {
    title: string;
    intro: string;
    status: string;
    film: CapabilityFilm;
    link: Cta;
  };
  /**
   * Boundaries band — the safety items plus one plain sentence about where an
   * office's data lives (`dataNote`), built only from assertions already made
   * on the flagship page's data-handling section. Never invent hosting,
   * certification, or vendor facts here.
   */
  boundaries: { title: string; items: readonly string[]; dataNote: string };
  finalCta: {
    title: string;
    body: string;
    /** The PRIMARY button: the scoping call in EN, WhatsApp on /he. */
    cta: Cta;
    /** Optional second channel — rendered as a ghost button. */
    secondaryCta?: Cta;
  };
};

/**
 * Split one H1 word around the hero accent: "repeats." with the accent
 * "repeats" gives ["repeats", "."], so the full stop stays in the word's
 * span but outside the accent colour; any other word gives null.
 * HeroSection renders with it and the module-init check below validates with
 * it, so the two cannot disagree.
 */
export function splitAccent(
  word: string,
  accent: string,
): readonly [string, string] | null {
  if (!word.startsWith(accent)) return null;
  const rest = word.slice(accent.length);
  return /^[.,;:!?]*$/.test(rest) ? [accent, rest] : null;
}

/** The flagship page's film block, reused as the homepage proof film. */
function flagshipFilm(locale: Locale): CapabilityFilm {
  const film = aiOfficeAssistantContent(locale).film;
  if (!film) {
    throw new Error(
      `homeContent: the Managed AI Office page has no film for locale "${locale}"`,
    );
  }
  return film;
}

/** Index routes the hero and the work band link to (EN form; /he via localePaths). */
const WORK_INDEX = localePaths("/work");
const SERVICES_INDEX = localePaths("/services");

const office = (locale: Locale) => offerCard(locale, "ai-office-assistant");
const commandCenter = (locale: Locale) => workItem(locale, "command-center").title;
const work = (locale: Locale) => workIndexContent(locale);

const en: HomeContent = {
  hero: {
    eyebrow: "For small businesses and professional offices",
    title: `${SITE_TAGLINE.en}.`,
    titleAccent: "repeats",
    lead: "I'm Yair. I build them, run them, and stay on as the AI department a small office hires.",
    status: "Replies within one business day · WhatsApp or email",
    primaryCta: shellContent("en").workflowCta,
    secondaryCta: { label: "See the work", href: WORK_INDEX.en },
    also: {
      label: "Also: bilingual websites and creative films",
      href: SERVICES_INDEX.en,
    },
  },
  credibility: { title: "Why this studio" },
  services: {
    title: "What I build",
    intro:
      "AI agents come first. The studio also designs bilingual websites and makes creative films, each with its own page.",
  },
  work: {
    title: "Recent work",
    intro:
      "Systems, websites, and films the studio has made, each one labelled for what it is.",
    allLink: { label: work("en").detail.back, href: WORK_INDEX.en },
    candour: {
      title: work("en").grid.title,
      body: `${work("en").grid.intro} One more system runs today at a law office; it is not shown here.`,
    },
  },
  ladder: {
    title: ladderContent("en").title,
    intro: ladderContent("en").intro,
  },
  proof: {
    title: "What the managed office looks like",
    intro: `${commandCenter("en")} is the view the managed office runs on: the day's incoming mail, draft replies, signatures, and stalled documents in one place, with what matters held for a person's approval.`,
    status: "In build · shown with sample data",
    film: flagshipFilm("en"),
    link: { label: office("en").cta, href: office("en").href },
  },
  boundaries: {
    title: "AI with clear boundaries",
    items: [
      "Start read-only when possible",
      "No external messages are sent without approval",
      "No data is deleted or changed without explicit approval",
      "When confidence is low, the item is flagged for a person",
      "The system supports decisions; it does not replace them",
    ],
    dataNote:
      "The studio runs each office in its own private environment, starts read-only where it can, sends or changes nothing without approval, flags low-confidence items for a person, and agrees where it all runs in the first conversation.",
  },
  finalCta: {
    title: "Start with one workflow.",
    body: "The first step is free: a 20-minute call about one workflow in your office, then a written read of it and a plain answer on where to start. The choice stays yours.",
    cta: shellContent("en").workflowCta,
    secondaryCta: shellContent("en").whatsappCta,
  },
};

/**
 * Hebrew (RTL) homepage content. Drafted with the hebrew-quality protocol
 * (think in English, write idiomatic Hebrew; scan for fabrications, AI
 * patterns, grammar, register). WhatsApp leads the hero and the Final CTA on
 * /he. The H1 is the Hebrew site tagline, as in EN, so the /he title, footer
 * and H1 say one thing; rewording it is one edit, in SITE_TAGLINE. The H1's
 * accent sits on the verb "חוזר", as "repeats" does in EN (owner decision
 * 2026-09-25). The lead is the draft approved 2026-09-25, pending the
 * owner's native pass.
 */
const he: HomeContent = {
  hero: {
    eyebrow: "לעסקים קטנים ולמשרדים מקצועיים",
    title: `${SITE_TAGLINE.he}.`,
    titleAccent: "חוזר",
    lead: "אני יאיר. אני בונה אותם, מפעיל אותם, ונשאר כמחלקת ה-AI של המשרד.",
    status: "עונה תוך יום עסקים אחד · בוואטסאפ או במייל",
    primaryCta: shellContent("he").whatsappCta,
    secondaryCta: { label: "לראות את העבודות", href: WORK_INDEX.he },
    also: {
      label: "וגם: אתרים דו־לשוניים וסרטונים יצירתיים",
      href: SERVICES_INDEX.he,
    },
  },
  credibility: { title: "למה הסטודיו הזה" },
  services: {
    title: "מה אני בונה",
    intro:
      "סוכני AI קודם כול. הסטודיו גם מעצב אתרים דו־לשוניים ויוצר סרטונים יצירתיים, ולכל אחד עמוד משלו.",
  },
  work: {
    title: "עבודות אחרונות",
    intro: "מערכות, אתרים וסרטונים שהסטודיו עשה, וכל אחד מסומן לפי מה שהוא.",
    allLink: { label: work("he").detail.back, href: WORK_INDEX.he },
    candour: {
      title: work("he").grid.title,
      body: `${work("he").grid.intro} מערכת נוספת רצה היום במשרד עורכי דין, והיא לא מוצגת כאן.`,
    },
  },
  ladder: {
    title: ladderContent("he").title,
    intro: ladderContent("he").intro,
  },
  proof: {
    title: "איך נראה המשרד המנוהל",
    intro: `${commandCenter("he")} הוא המסך שהמשרד המנוהל רץ עליו: הדואר הנכנס של היום, טיוטות התשובה, החתימות והמסמכים התקועים במקום אחד, כשמה שחשוב מחכה לאישור של אדם.`,
    status: "בבנייה · מוצג עם נתוני דוגמה",
    film: flagshipFilm("he"),
    link: { label: office("he").cta, href: office("he").href },
  },
  // Deliberate EN/HE divergence: the Hebrew boundaries band is locale-native,
  // not a translation of the EN "AI with clear boundaries" set. It runs 4
  // blunter boundaries ("what doesn't happen here") against EN's 5 — the
  // copper markers stagger over whatever count each locale ships. Not drift;
  // do not reconcile the counts.
  boundaries: {
    title: "מה לא קורה פה",
    items: [
      "לא מחליפים את כל המערכות ביום אחד",
      "לא שולחים הודעות בלי אישור",
      "לא בונים אוטומציה לפני שמבינים את התהליך",
      "לא מבטיחים קפיצות לא מציאותיות או רובוט שמנהל את העסק",
    ],
    dataNote:
      "הסטודיו מריץ כל משרד בסביבה פרטית משלו, מתחיל בקריאה בלבד איפה שאפשר, לא שולח ולא משנה שום דבר בלי אישור, מסמן לאדם פריטים שהמערכת לא בטוחה בהם, ואיפה כל זה רץ סוגרים בשיחה הראשונה.",
  },
  finalCta: {
    title: "מתחילים מתהליך אחד.",
    body: "השלב הראשון חינם: שיחה של 20 דקות על תהליך אחד במשרד, ואחריו סיכום כתוב שלו ותשובה פשוטה מאיפה כדאי להתחיל. ההחלטה נשארת שלכם.",
    cta: shellContent("he").whatsappCta,
    secondaryCta: shellContent("he").workflowCta,
  },
};

/** Locale-keyed content: EN and HE (the self-contained Hebrew homepage). */
const HOME: Partial<Record<Locale, HomeContent>> = { en, he };

// The H1 is SITE_TAGLINE (src/lib/site.ts); only its accent word is named
// here. A tagline edit that drops or repeats that word fails at module init
// instead of silently losing the accent. Loops over HOME, so every shipped
// locale is checked.
for (const [locale, content] of Object.entries(HOME)) {
  if (!content) continue;
  const { hero } = content;
  const hits = hero.title
    .split(" ")
    .filter((word) => splitAccent(word, hero.titleAccent)).length;
  if (hits !== 1) {
    throw new Error(
      `homeContent: hero.titleAccent "${hero.titleAccent}" must match exactly one word of the ${locale} H1 "${hero.title}" (found ${hits})`,
    );
  }
}

/** Resolve the homepage content model for a locale. */
export const homeContent = localeAccessor("homeContent", HOME);
