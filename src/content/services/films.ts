import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { afterProjectSection, ladderRungCard } from "@/content/ladder";
import type { Locale } from "@/content/types";
import type { ServicePageContent } from "./types";

/**
 * /services/films — short creative films made with generative AI (concept,
 * generation, edit) for a brand, a launch, or social media. The studio's
 * concept films are the portfolio: the `work` band renders them through
 * WorkGrid (category "films" in src/content/work.ts).
 *
 * No film block on purpose: the old films film (hyperframes/cap-films) bakes
 * the retired code-rendered pipeline into its frames, so it would contradict
 * this page. Re-render or retire it before a film block returns here; until
 * then nothing bakes this page's strings.
 *
 * Claims: the approvals and the real-person rule are process guarantees; the
 * copy never promises what a model will produce. The concept approval is
 * worded per scene ("before any scene is generated"), not "before anything
 * is generated", because storyboard frames and the look may themselves be
 * generated stills.
 *
 * The `where` card takes the fixed-price rung's title and terms from the
 * ladder but points at the scoping call, which is how a film starts; the
 * rung's own CTA serves the ladder, not this page.
 */

const en: ServicePageContent = {
  hero: {
    title: "Short creative films for your brand, made with generative AI",
    lead: "A film for a launch, a campaign, or your social channels. I write the concept, generate the film scene by scene, and edit it to the pace of the platform it runs on. You approve the concept before any scene is generated, and the final cut before it goes out. The studio's concept films show what that looks like.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  does: {
    title: "What I do",
    items: [
      {
        title: "Write the concept",
        desc: "One idea, a short script, and a storyboard, built from what your business sells and who it sells to.",
      },
      {
        title: "Generate the scenes",
        desc: "Each scene is made with AI image, video, and voice models; I review every take and keep only the ones that fit the storyboard.",
      },
      {
        title: "Edit it for the platform",
        desc: "Cut, pace, sound, and on-screen text, shaped for where it runs: vertical for Reels, TikTok, and Shorts, wide for a site or YouTube.",
      },
      {
        title: "Write it for your audience",
        desc: "On-screen text and captions in Hebrew, English, or both, each written in its own language, not translated word for word.",
      },
    ],
  },
  receive: {
    title: "What you receive",
    items: [
      {
        title: "The concept and storyboard",
        desc: "The idea, the script, and a frame for every scene, approved by you before any scene is generated.",
      },
      {
        title: "The final film",
        desc: "One short film, edited, with sound and on-screen text, ready to publish.",
      },
      {
        title: "Cuts for each platform",
        desc: "The film exported for each platform agreed in the brief, in the shape that platform needs.",
      },
      {
        title: "Captions and language versions",
        desc: "Captions for people who watch without sound, and a Hebrew and an English version when you need both.",
      },
      {
        title: "Poster frames",
        desc: "Stills for thumbnails, link previews, and covers.",
      },
    ],
  },
  how: {
    title: "How it runs",
    steps: [
      {
        title: "Brief",
        desc: "What the film is for, who it should reach, and where it will run.",
      },
      {
        title: "Concept and storyboard",
        desc: "The whole film planned in advance, ready for your review.",
      },
      {
        title: "Approve the concept",
        desc: "You approve the idea, the script, and the look before a single scene is generated.",
        human: true,
      },
      {
        title: "Generate and edit",
        desc: "The scenes are generated, the best takes kept, then cut to pace with sound and on-screen text.",
      },
      {
        title: "Final cut and delivery",
        desc: "You review the cut and ask for changes; the approved film is exported for each platform.",
      },
    ],
  },
  example: {
    title: "From brief to final cut",
    intro: "A simplified flow.",
    map: {
      caption: "Brief to final cut",
      ariaLabel:
        "A creative film production flow from brief to final cut, with a client approval step",
      nodes: [
        { label: "Your brief", sub: "goal · audience · platform" },
        { label: "Concept and storyboard" },
        { label: "Your approval", human: true },
        { label: "Generated scenes" },
        { label: "Edit, sound, captions" },
        { label: "Final cut", out: true },
      ],
    },
  },
  human: {
    title: "What stays with you",
    items: [
      {
        title: "The concept",
        desc: "No scene is generated until you approve the idea, the script, and the look.",
      },
      {
        title: "The final cut",
        desc: "The film is delivered as final only after you approve the cut.",
      },
      {
        title: "Real people",
        desc: "No real person's face or voice is imitated without that person's written permission.",
      },
    ],
  },
  where: {
    title: "Where to start",
    intro: "A film starts as its own project, scoped in the call.",
    rungs: [
      {
        ...ladderRungCard(
          "en",
          "02",
          "One film, from concept to final cut, with its platform cuts.",
        ),
        cta: shellContent("en").workflowCta,
      },
    ],
  },
  work: {
    title: "The studio's concept films",
    intro: "Made with generative AI.",
    category: "films",
  },
  after: afterProjectSection(
    "en",
    "The final film, its platform cuts, and the storyboard it came from, delivered to you.",
  ),
  cta: {
    heading: "Have something people should see?",
    body: "Book the scoping call and bring what you want to promote and where it should run. We shape the idea together before any scene is generated.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) content — written, not translated. */
const he: ServicePageContent = {
  hero: {
    title: "סרטונים יצירתיים קצרים למותג שלכם, שנוצרים עם AI גנרטיבי",
    lead: "סרטון להשקה, לקמפיין או לרשתות החברתיות. אני כותב את הקונספט, יוצר את הסרטון סצנה אחרי סצנה, ועורך אותו לקצב של הפלטפורמה שבה הוא ירוץ. אתם מאשרים את הקונספט לפני שנוצרת הסצנה הראשונה, ואת הגרסה הסופית לפני שהיא יוצאת לאוויר. בסרטוני הקונספט של הסטודיו אפשר לראות איך זה נראה.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  does: {
    title: "מה אני עושה",
    items: [
      {
        title: "כותב את הקונספט",
        desc: "רעיון אחד, תסריט קצר וסטוריבורד, מתוך מה שהעסק שלכם מוכר ולמי.",
      },
      {
        title: "יוצר את הסצנות",
        desc: "כל סצנה נוצרת עם מודלים של AI לתמונה, לווידאו ולקול. אני עובר על כל טייק ומשאיר רק את מה שמתאים לסטוריבורד.",
      },
      {
        title: "עורך לפלטפורמה",
        desc: "חיתוך, קצב, סאונד וטקסט על המסך, לפי המקום שבו הסרטון ירוץ: אנכי לרילס, לטיקטוק ולשורטס, רחב לאתר או ליוטיוב.",
      },
      {
        title: "כותב בשפה של הקהל",
        desc: "טקסט על המסך וכתוביות בעברית, באנגלית או בשתיהן, כל שפה נכתבת בפני עצמה ולא מתורגמת מילה במילה.",
      },
    ],
  },
  receive: {
    title: "מה מקבלים",
    items: [
      {
        title: "קונספט וסטוריבורד",
        desc: "הרעיון, התסריט ופריים לכל סצנה, שאתם מאשרים לפני שמתחילים ליצור את הסצנות.",
      },
      {
        title: "הסרטון הסופי",
        desc: "סרטון קצר אחד, ערוך, עם סאונד וטקסט על המסך, מוכן לפרסום.",
      },
      {
        title: "גרסה לכל פלטפורמה",
        desc: "הסרטון מיוצא לכל פלטפורמה שסיכמנו בבריף, בפורמט שהיא צריכה.",
      },
      {
        title: "כתוביות וגרסאות שפה",
        desc: "כתוביות למי שצופה בלי סאונד, וגרסה בעברית וגרסה באנגלית כשצריך את שתיהן.",
      },
      {
        title: "פריימי פוסטר",
        desc: "סטילס לתמונות ממוזערות, לתצוגה מקדימה של קישורים ולכריכות.",
      },
    ],
  },
  how: {
    title: "איך זה רץ",
    steps: [
      {
        title: "בריף",
        desc: "בשביל מה הסרטון, למי הוא צריך להגיע ואיפה הוא ירוץ.",
      },
      {
        title: "קונספט וסטוריבורד",
        desc: "כל הסרטון מתוכנן מראש, ומוכן לבדיקה שלכם.",
      },
      {
        title: "מאשרים את הקונספט",
        desc: "אתם מאשרים את הרעיון, התסריט והמראה לפני שנוצרת אפילו סצנה אחת.",
        human: true,
      },
      {
        title: "יצירה ועריכה",
        desc: "הסצנות נוצרות, הטייקים הטובים נשארים, ואז חיתוך לקצב עם סאונד וטקסט על המסך.",
      },
      {
        title: "גרסה סופית ומסירה",
        desc: "אתם צופים בעריכה ומבקשים שינויים. הסרטון המאושר מיוצא לכל פלטפורמה.",
      },
    ],
  },
  example: {
    title: "מבריף לגרסה הסופית",
    intro: "תהליך מפושט.",
    map: {
      caption: "מבריף לגרסה הסופית",
      ariaLabel: "תהליך הפקה של סרטון יצירתי מבריף ועד הגרסה הסופית, עם שלב אישור של הלקוח",
      nodes: [
        { label: "הבריף שלכם", sub: "מטרה · קהל · פלטפורמה" },
        { label: "קונספט וסטוריבורד" },
        { label: "האישור שלכם", human: true },
        { label: "הסצנות נוצרות" },
        { label: "עריכה, סאונד, כתוביות" },
        { label: "הגרסה הסופית", out: true },
      ],
    },
  },
  human: {
    title: "מה נשאר אצלכם",
    items: [
      {
        title: "הקונספט",
        desc: "שום סצנה לא נוצרת לפני שאישרתם את הרעיון, התסריט והמראה.",
      },
      {
        title: "הגרסה הסופית",
        desc: "הסרטון נמסר כגרסה סופית רק אחרי שאישרתם את העריכה.",
      },
      {
        title: "אנשים אמיתיים",
        desc: "שום סרטון לא מחקה פנים או קול של אדם אמיתי בלי אישור בכתב מאותו אדם.",
      },
    ],
  },
  where: {
    title: "מאיפה מתחילים",
    intro: "סרטון מתחיל כפרויקט בפני עצמו, שנסגר בשיחה.",
    rungs: [
      {
        ...ladderRungCard(
          "he",
          "02",
          "סרטון אחד, מהקונספט ועד הגרסה הסופית, עם הגרסאות לכל פלטפורמה.",
        ),
        cta: shellContent("he").workflowCta,
      },
    ],
  },
  work: {
    title: "סרטוני הקונספט של הסטודיו",
    intro: "נוצרו עם AI גנרטיבי.",
    category: "films",
  },
  after: afterProjectSection(
    "he",
    "הסרטון הסופי, הגרסאות לכל פלטפורמה והסטוריבורד שממנו הוא נולד, נמסרים לכם.",
  ),
  cta: {
    heading: "יש לכם משהו שאנשים צריכים לראות?",
    body: "קובעים שיחת אפיון ומביאים את מה שאתם רוצים לקדם ואת המקום שבו הוא ירוץ. מגבשים את הרעיון יחד, לפני שנוצרת הסצנה הראשונה.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, ServicePageContent>> = { en, he };

/** Resolve the /services/films page content for a locale. */
export const filmsContent = localeAccessor("filmsContent", CONTENT);
