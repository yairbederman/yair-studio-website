import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCTA from "@/components/offers/OfferCTA";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/dashboards-automation");

const WHO = [
  {
    title: "Leaders who need a clear view",
    desc: "You want to see what's stuck, overdue, or at risk without chasing updates.",
  },
  {
    title: "Operations teams",
    desc: "You coordinate work across tools and want fewer manual status checks.",
  },
  {
    title: "Growing teams",
    desc: "Volume has outgrown spreadsheets and memory.",
  },
];

const PROBLEMS = [
  {
    title: "No single view",
    desc: "Status lives in different tools, so no one sees the whole picture.",
  },
  {
    title: "Things slip",
    desc: "Overdue and at-risk items surface too late.",
  },
  {
    title: "Manual reporting",
    desc: "Updates are assembled by hand for every meeting.",
  },
  {
    title: "Reactive, not proactive",
    desc: "Problems are noticed after they happen, not before.",
  },
];

const DELIVERABLES = [
  {
    title: "Operational dashboards",
    desc: "One view of what needs attention: stuck, overdue, and at-risk work.",
  },
  {
    title: "Alerts & triggers",
    desc: "The right signal at the right time, with automated next actions where it's safe.",
  },
  {
    title: "Connected sources",
    desc: "Spreadsheets, CRMs, calendars, documents, and APIs feeding one place.",
  },
  {
    title: "Reporting",
    desc: "Recurring summaries built automatically instead of by hand.",
  },
];

const STEPS = [
  {
    title: "Map what matters",
    desc: "We define the few signals worth watching for one workflow.",
  },
  {
    title: "Connect the sources",
    desc: "Sheets, CRM, calendar, docs, or APIs — whatever holds the data.",
  },
  {
    title: "Build the view",
    desc: "A dashboard that shows attention-worthy work, not everything.",
  },
  {
    title: "Add safe automation",
    desc: "Triggers and alerts handle routine next actions; risky ones ask first.",
    human: true,
  },
  {
    title: "Tune over time",
    desc: "Signals and thresholds adjust as the work changes.",
  },
];

const HUMAN = [
  {
    title: "Risky triggers",
    desc: "Automations act only where it's safe; anything sensitive waits for approval.",
  },
  {
    title: "What counts as attention",
    desc: "You define the thresholds; the dashboard follows them.",
  },
  {
    title: "Interpretation",
    desc: "The view surfaces signals; people decide what to do.",
  },
];

export default function DashboardsAutomationPage() {
  return (
    <main id="main">
      <OfferHero
        eyebrow="Dashboards & Automation"
        title="Dashboards & Automation"
        lead="See what needs attention and trigger the right next action. A visibility and automation layer connected to the tools you already use."
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
        intro="Automation handles the routine; people set the rules and read the signals."
      >
        <OfferCardGrid items={HUMAN} variant="human" />
      </OfferSection>

      <OfferCTA
        heading="See what needs attention — and act on it."
        body="Start with one workflow's signals, connect the sources, and build the view that drives the next action."
      />
    </main>
  );
}
