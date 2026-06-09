import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCTA from "@/components/offers/OfferCTA";
import WorkflowMap from "@/components/WorkflowMap";
import ProcessFilm from "@/components/ProcessFilm";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/ai-workflow-audit");

const WHO = [
  {
    title: "Operators & founders",
    desc: "You run a growing service business and lose time to status-chasing, approvals, and handoffs.",
  },
  {
    title: "Teams with scattered tools",
    desc: "Work lives across email, docs, spreadsheets, and chat, and no one has a single clear view.",
  },
  {
    title: "Anyone weighing AI",
    desc: "You want to use AI in the business but need to know where it actually pays off first.",
  },
];

const PROBLEMS = [
  {
    title: "Automating the wrong thing",
    desc: "Building tools before the process is understood bakes in the existing mess.",
  },
  {
    title: "Unclear ownership",
    desc: "No one is sure who owns each step, so work waits or gets duplicated.",
  },
  {
    title: "Invisible bottlenecks",
    desc: "The real delays are hard to see until the workflow is mapped end to end.",
  },
  {
    title: "Experiments that don't stick",
    desc: "Prompts and demos look useful but never become a reliable, owned workflow.",
  },
];

const DELIVERABLES = [
  {
    title: "A workflow map",
    desc: "One process drawn end to end: steps, owners, inputs, outputs, and handoffs.",
  },
  {
    title: "Bottleneck & risk notes",
    desc: "Where work stalls, where errors enter, and where decisions wait.",
  },
  {
    title: "Automation candidates",
    desc: "A shortlist of steps worth automating — and the ones that shouldn't be.",
  },
  {
    title: "An implementation roadmap",
    desc: "A sequenced plan for what to build first, with effort and impact noted.",
  },
];

const STEPS = [
  {
    title: "Scope one workflow",
    desc: "We pick a single, real process that matters — not the whole business.",
  },
  {
    title: "Map it end to end",
    desc: "We document steps, owners, inputs, outputs, and where work gets stuck.",
  },
  {
    title: "Mark automation candidates",
    desc: "We separate what's worth automating from what should stay human.",
  },
  {
    title: "Review it together",
    desc: "We walk the map and roadmap with you before any build decision.",
    human: true,
  },
  {
    title: "Hand off a roadmap",
    desc: "You get a clear, sequenced plan you can act on — with or without us.",
  },
];

const EXAMPLE_MAP = [
  { label: "Current process", sub: "as it runs today" },
  { label: "Bottlenecks marked" },
  { label: "Automation candidates" },
  { label: "Human review", human: true },
  { label: "Sequenced roadmap", out: true },
] as const;

const HUMAN = [
  {
    title: "The decision to build",
    desc: "The audit informs the call; you decide what gets automated.",
  },
  {
    title: "Process judgment",
    desc: "Owners confirm how the work really runs, so the map reflects reality.",
  },
  {
    title: "Priorities",
    desc: "What matters most is your call; the roadmap follows it.",
  },
];

export default function AiWorkflowAuditPage() {
  return (
    <main id="main">
      <OfferHero
        eyebrow="Start here"
        title="AI Workflow Audit"
        lead="Before automating anything, map the real process. A focused review of one workflow — how it actually runs, where it stalls, and what's worth building."
      />

      <OfferSection id="film" title="From a messy workflow to a first system">
        <ProcessFilm
          webm="/videos/ai-workflow-audit-process.webm"
          mp4="/videos/ai-workflow-audit-process.mp4"
          poster="/videos/ai-workflow-audit-process-poster.png"
          caption="A messy workflow, separated into what to automate, what to assist, and what stays human — your first useful system."
        />
      </OfferSection>

      <OfferSection
        id="who"
        title="Who it's for"
        intro="The audit uses an engineering lens: trace the workflow, identify failure points, separate automation candidates from judgment calls, and define what would make the system trustworthy."
      >
        <OfferCardGrid items={WHO} />
      </OfferSection>

      <OfferSection id="problems" title="Problems it solves">
        <OfferCardGrid items={PROBLEMS} />
      </OfferSection>

      <OfferSection
        id="build"
        title="What you get"
        intro="A clear picture of one workflow and a practical plan — not a finished build."
      >
        <OfferCardGrid items={DELIVERABLES} />
      </OfferSection>

      <OfferSection
        id="example"
        title="What a workflow map looks like"
        intro="A simplified example of the artifact you receive, not a client case study."
      >
        <WorkflowMap
          caption="Example workflow map"
          ariaLabel="Example of a delivered workflow map"
          nodes={EXAMPLE_MAP}
        />
      </OfferSection>

      <OfferSection id="how" title="How it works">
        <OfferSteps items={STEPS} />
      </OfferSection>

      <OfferSection
        id="human"
        title="What stays human"
        intro="The audit informs decisions; people make them."
      >
        <OfferCardGrid items={HUMAN} variant="human" />
      </OfferSection>

      <OfferCTA
        heading="Start with one workflow, not a transformation program."
        body="The audit is the first step: a focused map of a real process before anything is built."
      />
    </main>
  );
}
