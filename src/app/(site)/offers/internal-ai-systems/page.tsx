import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import ProblemsPanel from "@/components/ProblemsPanel";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCTA from "@/components/offers/OfferCTA";
import WorkflowMap from "@/components/WorkflowMap";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/internal-ai-systems");

const WHO = [
  {
    title: "Service teams",
    desc: "Small and medium teams that run on meetings, email, and follow-up.",
  },
  {
    title: "Office & operations leads",
    desc: "People who keep work moving and want less manual coordination.",
  },
  {
    title: "Document-heavy professional offices",
    desc: "Teams with documents, deadlines, approvals, and client follow-up are a natural fit. Legal work is one example, not the limit.",
  },
];

const PROBLEMS = [
  {
    title: "Context scattered everywhere",
    desc: "Decisions and details live across inboxes, documents, and chat threads.",
  },
  {
    title: "Follow-up by memory",
    desc: "Next steps depend on someone remembering them after the meeting.",
  },
  {
    title: "Slow knowledge search",
    desc: "Finding the right past document or answer takes too long.",
  },
  {
    title: "Nothing holds the shared context",
    desc: "Each tool knows a piece; nothing remembers the office as a whole.",
  },
];

const DELIVERABLES = [
  {
    title: "Meeting summaries & task extraction",
    desc: "Turn calls and meetings into clear summaries and tracked next actions.",
  },
  {
    title: "Email & calendar context",
    desc: "Surface the relevant thread, document, and history for what's happening today.",
  },
  {
    title: "Knowledge search",
    desc: "Ask across the team's documents and past work in plain language.",
  },
  {
    title: "Follow-up tracking & office memory",
    desc: "A shared layer that keeps context and chases open loops.",
  },
];

/** The shape every assistant workflow shares — generic mechanics, no client data. */
const ASSISTANT_SKELETON = [
  { label: "Incoming work", sub: "meeting · email · request" },
  { label: "Context gathered", sub: "threads · documents · history" },
  { label: "Draft + tasks prepared" },
  { label: "Human approval", human: true },
  { label: "Tracked action", out: true },
] as const;

const STEPS = [
  {
    title: "Start from one workflow",
    desc: "We build on the audit: one real process, not everything at once.",
  },
  {
    title: "Connect existing tools",
    desc: "Email, calendar, documents, and the systems already in use.",
  },
  {
    title: "Add the assistant layer",
    desc: "Summaries, task extraction, search, and follow-up where they reduce friction.",
  },
  {
    title: "Approvals before actions",
    desc: "The system drafts and suggests; people approve anything that sends or changes.",
    human: true,
  },
  {
    title: "Grow the office memory",
    desc: "Each workflow adds to a shared, searchable context over time.",
  },
];

const HUMAN = [
  {
    title: "Sending & replying",
    desc: "Client-facing messages are drafted, never sent without approval.",
  },
  {
    title: "Sensitive actions",
    desc: "Anything that changes records or commits the business waits for a person.",
  },
  {
    title: "Final judgment",
    desc: "The assistant surfaces options; people decide.",
  },
];

export default function InternalAiSystemsPage() {
  return (
    <main id="main">
      <OfferHero
        eyebrow="Assistant layer"
        title="Internal AI Systems"
        lead="A practical AI layer for the day-to-day work of a service team: meetings, email and calendar context, tasks, knowledge search, and follow-up, with approvals before anything acts."
      />

      <OfferSection
        id="who"
        title="Who it's for"
        intro="This is especially useful when the team works across Hebrew and English, and when important context is spread across meetings, emails, documents, calendars, and task lists."
      >
        <OfferCardGrid items={WHO} />
      </OfferSection>

      <OfferSection id="problems" title="Problems it solves">
        <ProblemsPanel items={PROBLEMS} />
      </OfferSection>

      <OfferSection id="build" title="What we build">
        <OfferCardGrid items={DELIVERABLES} />
      </OfferSection>

      <OfferSection
        id="example"
        title="What an assistant workflow looks like"
        intro="The shape every assistant workflow follows, simplified. Note where the approval sits: before anything acts."
      >
        <WorkflowMap
          caption="Assistant workflow"
          ariaLabel="The shared shape of an assistant workflow"
          nodes={ASSISTANT_SKELETON}
        />
      </OfferSection>

      <OfferSection id="how" title="How it works">
        <OfferSteps items={STEPS} />
      </OfferSection>

      <OfferSection
        id="human"
        title="What stays human"
        intro="The assistant drafts and suggests; people approve what matters."
      >
        <OfferCardGrid items={HUMAN} variant="human" />
      </OfferSection>

      <OfferCTA
        heading="Build the system around one real workflow."
        body="Start with a single process, such as meetings, follow-up, or knowledge search, and expand from there."
      />
    </main>
  );
}
