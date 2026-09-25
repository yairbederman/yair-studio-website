/**
 * Homepage content model — typed and locale-keyed.
 *
 * Externalizes the copy for the seven homepage sections (Hero, Ladder, Proof,
 * Capabilities, Founder, Boundaries, Final CTA) so localized copy is DATA,
 * not hardcoded JSX. The home components consume this via
 * `homeContent(locale)`; the founder section reads src/content/proof.ts.
 *
 * CTA destinations live here too (label + href), so per-locale CTAs resolve
 * without branching in components: the Hero primary and the Final CTA are the
 * site-wide scoping-call CTA (src/content/shell.ts → `/contact`, `/he/contact`);
 * the Hero secondary is the sprint's page (offerCard). On /he the Final CTA
 * leads with WhatsApp — the local norm — and email is the ghost button.
 *
 * Nothing sold is restated here: the ladder rungs come from
 * src/content/ladder.ts, the capability cards from src/content/capability-cards.ts,
 * and the proof film is the flagship page's own film block
 * (src/content/offers/ai-office-assistant.ts), so the Command Center paths
 * (including its 4:5 phone cut, `film.mobile`) are wired in exactly one place.
 */

import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import { ladderContent } from "@/content/ladder";
import { aiOfficeAssistantContent } from "@/content/offers/ai-office-assistant";
import { studioIndexContent } from "@/content/studio";
import type { Locale, Cta, SpineNode } from "@/content/types";
import type { CapabilityFilm } from "@/content/studio/types";

// Re-export the shared primitives (now defined once in src/content/types.ts)
// for this module's existing consumers.
export type { Locale, Cta, SpineNode } from "@/content/types";

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    /** Decorative hero motif (aria-hidden; renders on all viewports). */
    schematic: { caption: string; nodes: readonly SpineNode[] };
  };
  /** Ladder band — section copy only; the rungs come from ladderContent(locale). */
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
  /** Capabilities strip — section copy only; cards from capabilityCards(locale). */
  capabilities: { title: string; intro: string };
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
    /** The PRIMARY button: email/contact in EN, WhatsApp on /he. */
    cta: Cta;
    /** Optional second channel — rendered as a ghost button. */
    secondaryCta?: Cta;
  };
};

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

const en: HomeContent = {
  hero: {
    eyebrow: "Managed AI for small professional offices",
    title: "The AI department your office hires.",
    lead: "y[AI]r studio runs the recurring work of small professional offices, law first: briefings, triage, documents, follow-up, with a person approving what matters. Start with one workflow, or hire the studio to run the day.",
    primaryCta: shellContent("en").workflowCta,
    secondaryCta: {
      label: offerCard("en", "ai-workflow-sprint").cta,
      href: offerCard("en", "ai-workflow-sprint").href,
    },
    schematic: {
      caption: "one office morning",
      nodes: [
        { label: "overnight inputs", sub: "email · calendar · documents" },
        { label: "morning briefing" },
        { label: "triage + drafts ready" },
        { label: "human approval", human: true },
        { label: "the day starts decided", out: true },
      ],
    },
  },
  ladder: {
    title: ladderContent("en").title,
    intro:
      "Most clients start with a project. The managed office is the studio running it for you, month to month. You can stop at any rung.",
  },
  proof: {
    title: "What the managed office looks like",
    intro:
      "Command Center is the view the managed office runs on: the day's incoming mail, draft replies, signatures, and stalled documents in one place, with what matters held for a person's approval.",
    status: "In build · shown with sample data",
    film: flagshipFilm("en"),
    link: {
      label: offerCard("en", "ai-office-assistant").cta,
      href: offerCard("en", "ai-office-assistant").href,
    },
  },
  capabilities: {
    title: studioIndexContent("en").hero.title,
    intro:
      "Five capabilities behind the three ways to start. Each has its own page: what I do, what you receive, and where it shows up.",
  },
  boundaries: {
    title: "AI with clear boundaries",
    items: [
      "Start read-only when possible",
      "No external messages are sent without approval",
      "No data is deleted or changed without explicit approval",
      "Unclear tasks move to human review",
      "The system supports decisions; it does not replace them",
    ],
    dataNote:
      "The studio runs each office in its own private environment, starts read-only where it can, sends or changes nothing without approval, hands unclear items to a person, and agrees where it all runs in the first conversation.",
  },
  finalCta: {
    title: "Start with one workflow.",
    body: "The first rung is free: a 20-minute call about one workflow in your office, then a written read of it and a plain answer on which rung fits. You choose what happens next.",
    cta: shellContent("en").workflowCta,
    secondaryCta: shellContent("en").whatsappCta,
  },
};

/**
 * Hebrew (RTL) homepage content. Drafted with the hebrew-quality protocol
 * (think in English, write idiomatic Hebrew; scan for fabrications, AI
 * patterns, grammar, register). WhatsApp leads the Final CTA on /he.
 */
const he: HomeContent = {
  hero: {
    eyebrow: "AI מנוהל למשרדים מקצועיים קטנים",
    title: "מחלקת ה-AI שהמשרד שלכם שוכר.",
    lead: "y[AI]r studio מריץ את העבודה החוזרת של משרדים מקצועיים קטנים, קודם כול משרדי עורכי דין: תדריכים, מיון, מסמכים ומעקב, כשאדם מאשר את מה שחשוב. מתחילים מתהליך אחד, או שוכרים את הסטודיו שינהל את היום־יום.",
    primaryCta: shellContent("he").workflowCta,
    secondaryCta: {
      label: offerCard("he", "ai-workflow-sprint").cta,
      href: offerCard("he", "ai-workflow-sprint").href,
    },
    schematic: {
      caption: "בוקר אחד במשרד",
      nodes: [
        { label: "קלט שנצבר בלילה", sub: "מייל · יומן · מסמכים" },
        { label: "תדריך בוקר מוכן" },
        { label: "מיון וטיוטות מוכנות" },
        { label: "אישור אנושי", human: true },
        { label: "היום מתחיל מוכרע", out: true },
      ],
    },
  },
  ladder: {
    title: ladderContent("he").title,
    intro:
      "רוב הלקוחות מתחילים בפרויקט. המשרד המנוהל הוא הסטודיו שמריץ אותו בשבילכם, חודש בחודשו. אפשר לעצור בכל שלב.",
  },
  proof: {
    title: "איך נראה המשרד המנוהל",
    intro:
      "Command Center הוא המסך שהמשרד המנוהל רץ עליו: הדואר הנכנס של היום, טיוטות התשובה, החתימות והמסמכים התקועים במקום אחד, כשמה שחשוב מחכה לאישור של אדם.",
    status: "בבנייה · מוצג עם נתוני דוגמה",
    film: flagshipFilm("he"),
    link: {
      label: offerCard("he", "ai-office-assistant").cta,
      href: offerCard("he", "ai-office-assistant").href,
    },
  },
  capabilities: {
    title: studioIndexContent("he").hero.title,
    intro:
      "חמש יכולות שעומדות מאחורי שלוש הדרכים להתחיל. לכל אחת עמוד משלה: מה אני עושה, מה מקבלים ואיפה זה מופיע.",
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
      "הסטודיו מריץ כל משרד בסביבה פרטית משלו, מתחיל בקריאה בלבד איפה שאפשר, לא שולח ולא משנה שום דבר בלי אישור, מעביר פריטים לא ברורים לאדם, ואיפה כל זה רץ סוגרים בשיחה הראשונה.",
  },
  finalCta: {
    title: "מתחילים מתהליך אחד.",
    body: "השלב הראשון חינם: שיחה של 20 דקות על תהליך אחד במשרד, ואחריו סיכום כתוב שלו ותשובה פשוטה איזה שלב מתאים. מה שקורה הלאה, אתם בוחרים.",
    cta: shellContent("he").whatsappCta,
    secondaryCta: shellContent("he").workflowCta,
  },
};

/** Locale-keyed content: EN and HE (the self-contained Hebrew homepage). */
const HOME: Partial<Record<Locale, HomeContent>> = { en, he };

/** Resolve the homepage content model for a locale. */
export const homeContent = localeAccessor("homeContent", HOME);
