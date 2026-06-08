import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCards from "@/components/offers/OfferCards";
import OfferCTA from "@/components/offers/OfferCTA";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers");

/** Where to start: the four offers as one sequence, audit first. */
const SEQUENCE = [
  {
    title: "Start with an AI Workflow Audit",
    desc: "Map one real workflow before building: bottlenecks, owners, and what should stay human.",
  },
  {
    title: "Build the internal AI system",
    desc: "Add a practical assistant layer for meetings, tasks, email, knowledge search, and follow-up.",
  },
  {
    title: "Add the dashboard + automation layer",
    desc: "Make stuck, overdue, and at-risk work visible, and trigger the right next action.",
  },
  {
    title: "Systemize content & ad operations",
    desc: "Turn ideas, assets, and performance data into repeatable campaigns — with approval before publishing.",
  },
] as const;

export default function OffersPage() {
  return (
    <main id="main">
      <OfferHero
        eyebrow="Offers"
        title="Four entry points into one system"
        lead="Not four separate services. Each offer is a way into the same system — built around real workflows, with human approval where it matters."
      />

      <OfferSection
        id="start"
        title="Where to start"
        intro="If you're not sure where to start, start with the AI Workflow Audit. The other offers build on what it finds."
      >
        <OfferSteps items={SEQUENCE} />
      </OfferSection>

      <OfferSection id="offers" title="The offers">
        <OfferCards />
      </OfferSection>

      <OfferCTA
        heading="Start with one workflow, not a transformation program."
        body="The first step is a focused map of a real process: where work enters, where it gets stuck, and what a useful AI-assisted system should do."
      />
    </main>
  );
}
