import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { afterProjectSection, ladderRungCard } from "@/content/ladder";
import type { Locale } from "@/content/types";
import type { CapabilityPageContent } from "./types";

/**
 * /studio/websites — designed, fast, bilingual sites for a business that
 * sells a service. This site is the proof (built by the studio, films
 * included). The film (hyperframes/cap-websites) bakes `example.map.nodes`
 * verbatim and the human step's title (`how.steps[3].title`) as its caption —
 * re-render it if they change.
 */

const en: CapabilityPageContent = {
  hero: {
    title: "Designed, fast, bilingual sites for a business that sells a service",
    lead: "A site that says what you do, what a client receives, and how to start, in Hebrew and English, with the studio's films as the motion. This site is the proof: built by the studio, films included.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  film: {
    sectionTitle: "Brief to live, in motion",
    webm: "/videos/cap-websites.webm",
    mp4: "/videos/cap-websites.mp4",
    poster: "/videos/cap-websites-poster.png",
    caption:
      "How a site gets made: you review and approve every page, and it goes live in both languages.",
    filmName: "websites film",
  },
  does: {
    title: "What I do",
    intro:
      "I design and build the sites myself, with AI-assisted tooling; this site is the working sample.",
    items: [
      {
        title: "Design and build the site",
        desc: "Structure, type, and copy that state the service plainly, built for speed with no page builder.",
      },
      {
        title: "Write it in both languages",
        desc: "Hebrew and English versions drafted natively, not translated word for word, with right-to-left handled properly.",
      },
      {
        title: "Make it findable",
        desc: "Per-page metadata, a sitemap, structured data, and an llms.txt, so search engines and AI answer engines read the site correctly.",
      },
      {
        title: "Hand it over",
        desc: "Analytics, a written handover, and a site you can change without me.",
      },
    ],
  },
  receive: {
    title: "What you receive",
    items: [
      {
        title: "Design and build",
        desc: "The finished site: structure, type, color, copy, and the code that runs it.",
      },
      {
        title: "Hebrew and English versions",
        desc: "Every page in both languages, each drafted natively, with the language switch keeping your place.",
      },
      {
        title: "Search and AI-answer foundation",
        desc: "Sitemap, structured data, per-page metadata, and llms.txt.",
      },
      {
        title: "Analytics",
        desc: "Page-level analytics from day one.",
      },
      {
        title: "Films and handover",
        desc: "Short films for the pages that need motion, and a written handover so the site can be changed without me.",
      },
    ],
  },
  how: {
    title: "How it runs",
    steps: [
      {
        title: "Scope the site",
        desc: "Which pages, which languages, which services, and what a visitor should do next.",
      },
      {
        title: "Design and draft",
        desc: "Structure and copy first, in both languages; the look follows the words.",
      },
      {
        title: "Build and film",
        desc: "The site goes up with its films, metadata, and analytics.",
      },
      {
        title: "Review and approve",
        desc: "You read every page in both languages before it goes live; nothing publishes without your yes.",
        human: true,
      },
      {
        title: "Launch and hand over",
        desc: "Domain, analytics, and a written handover.",
      },
    ],
  },
  example: {
    title: "How a site gets made",
    intro: "A simplified flow from a brief to a live site.",
    map: {
      caption: "Brief to live",
      ariaLabel: "A website build from brief to launch, with a client approval step",
      nodes: [
        { label: "Your brief", sub: "services · audience · languages" },
        { label: "Structure and copy" },
        { label: "Design and build" },
        { label: "Films and metadata" },
        { label: "Your approval", human: true },
        { label: "Live in both languages", out: true },
      ],
    },
  },
  human: {
    title: "What stays with you",
    items: [
      {
        title: "The words",
        desc: "Every page is drafted for you; the final wording is yours.",
      },
      {
        title: "The launch",
        desc: "Nothing goes live until you have read it in both languages.",
      },
      {
        title: "The site itself",
        desc: "The domain, the code, and the content are yours; nothing is locked to the studio.",
      },
    ],
  },
  where: {
    title: "Where it shows up",
    intro: "A site is its own fixed-price project, scoped in the call.",
    rungs: [
      ladderRungCard(
        "en",
        "02",
        "As a project of its own: the site designed and built, bilingual, with its films, priced before work starts.",
      ),
    ],
  },
  after: afterProjectSection(
    "en",
    "The site, both language versions, and the code that runs it: yours, documented, and live.",
  ),
  cta: {
    heading: "See what your site could say.",
    body: "Book the scoping call and bring the site you have, or the one you don't. You get a written read of what it should say and how it should start.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) content — hebrew-quality drafted. */
const he: CapabilityPageContent = {
  hero: {
    title: "אתרים מעוצבים, מהירים ודו־לשוניים לעסק שמוכר שירות",
    lead: "אתר שאומר מה אתם עושים, מה הלקוח מקבל ואיך מתחילים, בעברית ובאנגלית, עם הסרטונים של הסטודיו כתנועה. האתר הזה הוא ההוכחה: נבנה בסטודיו, כולל הסרטונים.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  film: {
    sectionTitle: "מבריף לאוויר, בתנועה",
    webm: "/videos/cap-websites-he.webm",
    mp4: "/videos/cap-websites-he.mp4",
    poster: "/videos/cap-websites-he-poster.png",
    caption:
      "איך אתר נבנה: אתם בודקים ומאשרים כל עמוד, והוא עולה לאוויר בשתי השפות.",
    filmName: "סרטון האתרים",
  },
  does: {
    title: "מה אני עושה",
    intro:
      "אני מעצב ובונה את האתרים בעצמי, עם כלי AI; האתר הזה הוא הדוגמה העובדת.",
    items: [
      {
        title: "מעצב ובונה את האתר",
        desc: "מבנה, טיפוגרפיה וטקסט שאומרים את השירות בפשטות, בנוי למהירות ובלי בוני אתרים.",
      },
      {
        title: "כותב אותו בשתי השפות",
        desc: "גרסאות עברית ואנגלית שנכתבות כל אחת בשפתה, לא תרגום מילה במילה, עם כיוון מימין לשמאל שמטופל כמו שצריך.",
      },
      {
        title: "דואג שימצאו אותו",
        desc: "מטא־דאטה לכל עמוד, מפת אתר, נתונים מובנים וקובץ llms.txt, כדי שמנועי חיפוש ומנועי תשובות של AI יקראו את האתר נכון.",
      },
      {
        title: "מוסר אותו",
        desc: "אנליטיקס, מסמך מסירה כתוב, ואתר שאפשר לשנות בלעדיי.",
      },
    ],
  },
  receive: {
    title: "מה מקבלים",
    items: [
      {
        title: "עיצוב ובנייה",
        desc: "האתר המוגמר: מבנה, טיפוגרפיה, צבע, טקסט והקוד שמריץ אותו.",
      },
      {
        title: "גרסאות עברית ואנגלית",
        desc: "כל עמוד בשתי השפות, כל אחת נכתבת בשפתה, עם מעבר שפה ששומר על המקום שלכם.",
      },
      {
        title: "תשתית לחיפוש ולמנועי תשובות",
        desc: "מפת אתר, נתונים מובנים, מטא־דאטה לכל עמוד ו-llms.txt.",
      },
      {
        title: "אנליטיקס",
        desc: "אנליטיקס ברמת העמוד מהיום הראשון.",
      },
      {
        title: "סרטונים ומסירה",
        desc: "סרטונים קצרים לעמודים שצריכים תנועה, ומסמך מסירה כתוב כדי שאפשר יהיה לשנות את האתר בלעדיי.",
      },
    ],
  },
  how: {
    title: "איך זה רץ",
    steps: [
      {
        title: "מגדירים את האתר",
        desc: "אילו עמודים, אילו שפות, אילו שירותים, ומה מבקר צריך לעשות הלאה.",
      },
      {
        title: "מעצבים ומנסחים",
        desc: "קודם מבנה וטקסט, בשתי השפות; המראה הולך אחרי המילים.",
      },
      {
        title: "בונים ומפיקים",
        desc: "האתר עולה עם הסרטונים, המטא־דאטה והאנליטיקס שלו.",
      },
      {
        title: "בודקים ומאשרים",
        desc: "אתם קוראים כל עמוד בשתי השפות לפני שהוא עולה לאוויר; שום דבר לא מתפרסם בלי האישור שלכם.",
        human: true,
      },
      {
        title: "משיקים ומוסרים",
        desc: "דומיין, אנליטיקס ומסמך מסירה כתוב.",
      },
    ],
  },
  example: {
    title: "איך אתר נבנה",
    intro: "תהליך מפושט מבריף לאתר חי.",
    map: {
      caption: "מבריף לאוויר",
      ariaLabel: "בניית אתר מבריף ועד השקה, עם שלב אישור של הלקוח",
      nodes: [
        { label: "הבריף שלכם", sub: "שירותים · קהל · שפות" },
        { label: "מבנה וטקסט" },
        { label: "עיצוב ובנייה" },
        { label: "סרטונים ו-SEO" },
        { label: "האישור שלכם", human: true },
        { label: "באוויר בשתי השפות", out: true },
      ],
    },
  },
  human: {
    title: "מה נשאר אצלכם",
    items: [
      {
        title: "המילים",
        desc: "כל עמוד מנוסח בשבילכם; הניסוח הסופי שלכם.",
      },
      {
        title: "ההשקה",
        desc: "שום דבר לא עולה לאוויר עד שקראתם אותו בשתי השפות.",
      },
      {
        title: "האתר עצמו",
        desc: "הדומיין, הקוד והתוכן שלכם; שום דבר לא נעול לסטודיו.",
      },
    ],
  },
  where: {
    title: "איפה זה מופיע",
    intro: "אתר הוא פרויקט במחיר קבוע בפני עצמו, שנסגר בשיחה.",
    rungs: [
      ladderRungCard(
        "he",
        "02",
        "כפרויקט בפני עצמו: האתר מעוצב ובנוי, דו־לשוני, עם הסרטונים שלו, ומתומחר לפני שהעבודה מתחילה.",
      ),
    ],
  },
  after: afterProjectSection(
    "he",
    "האתר, שתי גרסאות השפה והקוד שמריץ אותו: שלכם, מתועדים ובאוויר.",
  ),
  cta: {
    heading: "תראו מה האתר שלכם יכול להגיד.",
    body: "קובעים שיחת אפיון ומביאים את האתר שיש לכם, או את זה שאין. מקבלים סיכום כתוב של מה הוא צריך להגיד ואיך הוא צריך להתחיל.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, CapabilityPageContent>> = { en, he };

/** Resolve the websites capability page content for a locale. */
export const websitesContent = localeAccessor("websitesContent", CONTENT);
