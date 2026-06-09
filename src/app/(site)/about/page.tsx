import PageHero from "@/components/PageHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferCTA from "@/components/offers/OfferCTA";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/about");

const WHAT_I_BUILD = [
  {
    title: "Workflow maps",
    desc: "One real process drawn end to end: steps, owners, inputs, outputs, and where work gets stuck.",
  },
  {
    title: "Internal AI assistants",
    desc: "Practical assistants for meetings, tasks, email, knowledge search, reporting, and follow-up.",
  },
  {
    title: "Dashboards & automation layers",
    desc: "A connected view of what needs attention, with the right next action close at hand.",
  },
  {
    title: "Approval-first operating systems",
    desc: "Systems that draft and prepare the work, then wait for a human decision where it matters.",
  },
];

const PRINCIPLES = [
  "Map before automating",
  "Keep humans in control",
  "Connect existing tools instead of replacing them",
  "Make the next action visible",
  "Support adoption after setup, not just hand off the system",
  "Skip AI demos that don't survive real work",
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        id="about"
        eyebrow="About"
        title="AI systems for real business workflows"
        lead="y[AI]r studio builds AI workflow systems for real business operations: the everyday processes a growing service business runs on. The work is practical, not a demo. Map the process first, then build only what earns its place, with people in control of the decisions that matter."
      />

      <OfferSection
        id="build"
        title="What I build"
        intro="Four kinds of system, built around how the work actually runs."
      >
        <OfferCardGrid items={WHAT_I_BUILD} />
      </OfferSection>

      <OfferSection id="why" title="Why this approach">
        <p className="section-intro">
          I come from R&amp;D and software leadership, where systems have to
          work beyond the demo: unclear requirements, messy inputs, real users,
          edge cases, and production constraints.
        </p>
        <p className="section-intro">
          That background shapes y[AI]r studio. I map the workflow before
          building, keep the first system small enough to trust, and put human
          approval where the decision matters.
        </p>
        <p className="section-intro">
          The work is especially useful for growing service businesses and
          professional offices where meetings, documents, email, deadlines,
          and follow-up all cross paths, often in Hebrew and English.
        </p>
      </OfferSection>

      <OfferSection
        id="how"
        title="How I think about AI"
        intro="A few principles that keep these systems useful past the first week."
      >
        <div className="panel-list">
          <ul>
            {PRINCIPLES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </OfferSection>

      <OfferSection id="who" title="Who it's for">
        <p className="section-intro">
          Growing service businesses, operators, founders, professional offices,
          and lean teams running real work across too many tools. Professional
          offices — including legal, document-heavy, and approval-driven teams —
          are a strong fit for this approach. The same system fits any service
          business whose workflows have outgrown manual coordination. The work
          runs in Hebrew and English, whichever the team actually uses day to
          day.
        </p>
      </OfferSection>

      <OfferCTA
        heading="Start with one workflow, not a transformation program."
        body="Pick a real process that slows things down. We map how it runs today before deciding what is worth building."
      />
    </main>
  );
}
