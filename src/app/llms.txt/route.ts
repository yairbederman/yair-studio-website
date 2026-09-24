import {
  PAGES,
  SERVICES,
  SITE_ALT_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms.txt — a concise, factual brief for answer engines (LLMs).
 * Built from the same SITE_URL + PAGES + SERVICES source as the sitemap, so the
 * domain and route list live in exactly one place. No hype, no private info,
 * no unsupported claims.
 */
export function GET() {
  const body = [
    `# ${SITE_NAME} (${SITE_ALT_NAME})`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "## About",
    "y[AI]r studio is the AI department a small professional office hires, law offices first. Three ways to start, by commitment: a free 20-minute scoping call (a written read of one workflow and which rung fits), a fixed-price AI Workflow Sprint (one workflow mapped end to end, three focused automations, approval boundaries, handoff notes), and a Managed AI Office (one-time setup plus a monthly retainer: morning briefing, email triage, document workflows, follow-up, with a LinkedIn content engine included and Command Center as the working face, in build). Behind them, five capabilities: agentic systems, process optimization, websites, films, and AI enablement for business teams. Every system keeps a person approving what matters: nothing is sent or changed without approval, and unclear items go to a person.",
    "",
    "## Services",
    ...SERVICES.map((name) => `- ${name}`),
    "",
    "## Pages",
    ...PAGES.map(
      (p) =>
        `- [${p.title ?? SITE_NAME}](${new URL(p.path, SITE_URL).toString()}): ${p.description}`,
    ),
    "",
    "## Notes",
    // Only while no explicit production domain is configured — once
    // NEXT_PUBLIC_SITE_URL is set (LAUNCH-CHECKLIST.md §7) the note is wrong
    // and disappears from the build automatically.
    ...(process.env.NEXT_PUBLIC_SITE_URL
      ? []
      : [
          "- The production domain is not yet finalized; URLs use the expected domain.",
        ]),
    "- The site is fully bilingual: every page has an English version and a Hebrew (RTL) version under /he.",
    "- Founder/about copy factually describes Yair Bederman: founder and operator of y[AI]r studio, independent AI systems architect since August 2024, previously R&D Manager at Lognet (2023–2026) and, at Viber (2016–2023), R&D project and team leadership; earlier software roles at 888, Taldor, Bank Leumi, and El Al. One anonymized marketing-analytics and lead-generation system runs today for a B2B law firm. No performance metrics are claimed.",
    "- Workflow examples are illustrative patterns, not client case studies or evidence of outcomes. The Command Center shown on the site is in build and displayed with sample data.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
