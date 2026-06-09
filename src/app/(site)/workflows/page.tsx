import PageHero from "@/components/PageHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferCTA from "@/components/offers/OfferCTA";
import WorkflowMap from "@/components/WorkflowMap";
import WorkflowFilm from "@/components/WorkflowFilm";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/workflows");

const BEFORE = [
  "Notes scattered across apps and notebooks",
  "Action items remembered manually",
  "Follow-up depends on one person",
  "No shared view of open loops",
];

const MAPPED = [
  { label: "Meeting notes", sub: "transcript · recording · notes" },
  { label: "Extract decisions + tasks" },
  { label: "Assign owner + date" },
  { label: "Draft follow-up" },
  { label: "Human approval", human: true },
  { label: "Update tasks / dashboard", out: true },
] as const;

const OTHER_WORKFLOWS = [
  {
    title: "Client intake",
    desc: "Capture the request, gather missing context, route it to the right owner, and track the next step.",
  },
  {
    title: "Deadline visibility",
    desc: "Show upcoming, overdue, and conditional dates clearly, with uncertainty visible instead of hidden.",
  },
  {
    title: "Document review status",
    desc: "Track which documents are waiting, reviewed, blocked, or ready for a decision.",
  },
  {
    title: "Approval-based outbound communication",
    desc: "Prepare drafts and supporting context, then wait for a person before anything is sent.",
  },
  {
    title: "Weekly operating signal",
    desc: "Summarize what is stuck, what changed, and what needs attention before the next week starts.",
  },
];

const STAYS_HUMAN = [
  {
    title: "Final wording",
    desc: "Drafts are prepared, but the message that goes out is yours to approve and adjust.",
  },
  {
    title: "Sensitive decisions",
    desc: "Anything with real consequences waits for a person, not an automation.",
  },
  {
    title: "Sending messages",
    desc: "Nothing leaves on its own. The send is an explicit human action.",
  },
  {
    title: "Priority changes",
    desc: "What matters most, and what can wait, stays a human call.",
  },
];

export default function WorkflowsPage() {
  return (
    <main id="main">
      <PageHero
        id="workflows"
        eyebrow="Workflows"
        title="How a messy workflow becomes a system"
        lead="The work starts by mapping where a process gets stuck, then turning scattered inputs into clear next actions, with a human approval step where it matters. Here is one workflow mapped end to end."
      />

      <OfferSection
        id="example"
        title="Meeting follow-up workflow"
        intro="An illustration of the approach, not a client case study."
      >
        <WorkflowFilm />
        <div className="workflow-compare">
          <div className="panel-list">
            <span className="sch-cap">Before</span>
            <ul>
              {BEFORE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <WorkflowMap
            caption="Mapped workflow"
            ariaLabel="Meeting follow-up, mapped as a workflow"
            nodes={MAPPED}
          />
        </div>
      </OfferSection>

      <OfferSection
        id="other-workflows"
        title="Other workflows that map well"
        intro="These patterns are common in growing service businesses and professional offices, especially when work moves across meetings, documents, email, approvals, and follow-up."
      >
        <OfferCardGrid items={OTHER_WORKFLOWS} />
      </OfferSection>

      <OfferSection
        id="human"
        title="What stays human"
        intro="The workflow does the assembly; the judgment stays with people."
      >
        <OfferCardGrid items={STAYS_HUMAN} variant="human" />
      </OfferSection>

      <OfferCTA
        heading="See your own workflow mapped like this."
        body="Pick one process that slows things down. We map how it runs today before deciding what is worth building."
      />
    </main>
  );
}
