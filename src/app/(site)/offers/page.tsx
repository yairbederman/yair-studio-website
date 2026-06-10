import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCards from "@/components/offers/OfferCards";
import OfferCTA from "@/components/offers/OfferCTA";
import { AUDIT_OFFER } from "@/lib/offers";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers");

/** Where to start: the four offers as one sequence, audit first. Step titles
    use the canonical offer names from src/lib/offers.ts. */
const SEQUENCE = [
  {
    title: "Start with an AI Workflow Audit",
    desc: `Map one real workflow before building: bottlenecks, owners, and what should stay human.${AUDIT_OFFER.engagementNote ? ` ${AUDIT_OFFER.engagementNote}` : ""}`,
  },
  {
    title: "Build Internal AI Systems",
    desc: "Add a practical assistant layer for meetings, tasks, email, knowledge search, and follow-up.",
  },
  {
    title: "Add Dashboards & Automation",
    desc: "Make stuck, overdue, and at-risk work visible, and trigger the right next action.",
  },
  {
    title: "Systemize Content & Ad Operations",
    desc: "Turn ideas, assets, and performance data into repeatable campaigns, with approval before publishing.",
  },
] as const;

export default function OffersPage() {
  return (
    <main id="main">
      <OfferHero
        title="Four entry points into one system"
        lead="Not four separate services. Each offer is a way into the same system, built around how your workflows actually run."
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
        heading="One workflow is enough to start."
        body="The first step is a focused map of a real process: where work enters, where it gets stuck, and what a useful AI-assisted system should do."
      />
    </main>
  );
}
