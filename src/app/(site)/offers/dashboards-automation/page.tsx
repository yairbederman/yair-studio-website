import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import ProblemsPanel from "@/components/ProblemsPanel";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCTA from "@/components/offers/OfferCTA";
import WorkflowMap from "@/components/WorkflowMap";
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
    title: "Always reacting",
    desc: "Problems are noticed only after they happen.",
  },
];

const DELIVERABLES = [
  {
    title: "Operational dashboards",
    desc: "One view of what needs attention: what's stuck, overdue, at risk, and what's newly flagged this week.",
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

/** The visibility loop the layer runs — generic mechanics, no client data. */
const WEEKLY_SIGNAL = [
  { label: "Connected sources", sub: "sheets · CRM · calendar · docs" },
  { label: "Signals extracted", sub: "stuck · overdue · at risk" },
  { label: "One weekly view" },
  { label: "Human decides", human: true },
  { label: "Next action triggered", out: true },
] as const;

const STEPS = [
  {
    title: "Map what matters",
    desc: "We define the few signals worth watching for one workflow.",
  },
  {
    title: "Connect the sources",
    desc: "Sheets, CRM, calendar, docs, or APIs: whatever holds the data.",
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
        eyebrow="Visibility layer"
        title="Dashboards & Automation"
        lead="See what needs attention and trigger the right next action. A visibility and automation layer connected to the tools you already use."
      />

      <OfferSection id="who" title="Who it's for">
        <OfferCardGrid items={WHO} />
      </OfferSection>

      <OfferSection id="problems" title="Problems it solves">
        <ProblemsPanel items={PROBLEMS} />
      </OfferSection>

      <OfferSection
        id="build"
        title="What we build"
        intro="Good dashboard signals include open follow-ups, overdue or stuck items, documents waiting for review, decisions waiting for approval, and a weekly operating signal."
      >
        <OfferCardGrid items={DELIVERABLES} />
      </OfferSection>

      <OfferSection
        id="example"
        title="What the visibility loop looks like"
        intro="The loop the layer runs, simplified. The dashboard surfaces the signal; a person decides what happens next."
      >
        <WorkflowMap
          caption="Visibility loop"
          ariaLabel="The visibility and automation loop"
          nodes={WEEKLY_SIGNAL}
        />
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
        heading="See what needs attention, then act on it."
        body="Start with one workflow's signals, connect the sources, and build the view that drives the next action."
      />
    </main>
  );
}
