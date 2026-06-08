import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCTA from "@/components/offers/OfferCTA";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/content-ad-operations");

const WHO = [
  {
    title: "Founders doing their own marketing",
    desc: "You generate ideas faster than they get produced and shipped.",
  },
  {
    title: "Small marketing teams",
    desc: "You run content and ads, but the process is ad hoc.",
  },
  {
    title: "Service businesses",
    desc: "You want steady output without a full in-house studio.",
  },
];

const PROBLEMS = [
  {
    title: "Ideas that never ship",
    desc: "Raw ideas, calls, and assets pile up without a path to publish.",
  },
  {
    title: "No repeatable process",
    desc: "Every piece starts from scratch.",
  },
  {
    title: "Messy approvals",
    desc: "Sign-off happens over scattered messages, late.",
  },
  {
    title: "Performance isn't fed back",
    desc: "What worked rarely informs what's made next.",
  },
];

const DELIVERABLES = [
  {
    title: "Intake & content calendar",
    desc: "Capture raw ideas, calls, and assets into a planned schedule.",
  },
  {
    title: "Briefs & repurposing",
    desc: "Turn one input into structured briefs and multiple formats.",
  },
  {
    title: "Ad experiments",
    desc: "A simple loop for testing creatives and reading results.",
  },
  {
    title: "Approval flows",
    desc: "Clear sign-off before anything goes live.",
  },
];

const STEPS = [
  {
    title: "Capture inputs",
    desc: "Ideas, call notes, and assets land in one intake.",
  },
  {
    title: "Plan & brief",
    desc: "Inputs become a calendar and structured creative briefs.",
  },
  {
    title: "Produce & repurpose",
    desc: "Draft content and variations from the briefs.",
  },
  {
    title: "Approve before publishing",
    desc: "Nothing is posted without a human sign-off — no auto-publishing.",
    human: true,
  },
  {
    title: "Review performance",
    desc: "Results feed the next round of ideas and experiments.",
  },
];

const HUMAN = [
  {
    title: "Publishing",
    desc: "Nothing goes live without approval — no auto-publishing.",
  },
  {
    title: "Brand voice",
    desc: "Drafts follow your voice; you approve the final wording.",
  },
  {
    title: "Ad spend decisions",
    desc: "Experiments are proposed; you decide what to fund.",
  },
];

export default function ContentAdOperationsPage() {
  return (
    <main id="main">
      <OfferHero
        eyebrow="Content & Ad Operations"
        title="Content & Ad Operations"
        lead="Turn ideas, assets, performance data, and approvals into repeatable campaigns. A system for content and ad operations — with approval before anything publishes."
      />

      <OfferSection id="who" title="Who it's for">
        <OfferCardGrid items={WHO} />
      </OfferSection>

      <OfferSection id="problems" title="Problems it solves">
        <OfferCardGrid items={PROBLEMS} />
      </OfferSection>

      <OfferSection id="build" title="What we build">
        <OfferCardGrid items={DELIVERABLES} />
      </OfferSection>

      <OfferSection id="how" title="How it works">
        <OfferSteps items={STEPS} />
      </OfferSection>

      <OfferSection
        id="human"
        title="What stays human"
        intro="The system drafts and schedules; people approve what goes out and what gets funded."
      >
        <OfferCardGrid items={HUMAN} variant="human" />
      </OfferSection>

      <OfferCTA
        heading="Make content and ad ops repeatable."
        body="Start with one workflow — intake, calendar, or approvals — and turn scattered output into a system."
      />
    </main>
  );
}
