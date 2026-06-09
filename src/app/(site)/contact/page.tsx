import PageHero from "@/components/PageHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferSteps from "@/components/offers/OfferSteps";
import CTAButton from "@/components/CTAButton";
import { pageMetadata, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata = pageMetadata("/contact");

const WHAT_TO_SEND = [
  {
    title: "The workflow",
    desc: "The one process you want to improve, described in a sentence or two.",
  },
  {
    title: "The tools involved",
    desc: "Where the work lives today: email, docs, spreadsheets, chat, a CRM, whatever it is.",
  },
  {
    title: "Where it gets stuck",
    desc: "The step where work waits, gets duplicated, or quietly falls through.",
  },
  {
    title: "Who approves decisions",
    desc: "Who signs off on the calls that matter in this process right now.",
  },
  {
    title: "A useful outcome",
    desc: "What a good result looks like: less chasing, faster turnaround, fewer dropped items.",
  },
];

const GOOD_FIRST = [
  "Meeting notes into tasks and follow-up",
  "Email and calendar triage",
  "An overdue or stuck-work dashboard",
  "A content or ad approval loop",
  "A document-heavy office workflow",
];

const NEXT_STEPS = [
  {
    title: "Send a short note",
    desc: "A few lines about the workflow and where it slows down. No formal brief needed.",
  },
  {
    title: "Choose one workflow",
    desc: "We focus on a single, real process, not the whole business at once.",
  },
  {
    title: "Map the current process",
    desc: "We document how the work actually runs today: steps, owners, inputs, and outputs.",
  },
  {
    title: "Decide what's worth building",
    desc: "You get a clear view of what to automate, what to leave alone, and what to do first.",
  },
];

const STAYS_HUMAN = [
  {
    title: "Approval stays with you",
    desc: "Nothing runs end to end without a human checkpoint where the decision matters.",
  },
  {
    title: "You set the priorities",
    desc: "What gets built, and in what order, is your call. The map informs it; you decide.",
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        id="contact"
        eyebrow="Contact"
        title="Map one workflow"
        lead="Pick one workflow that slows your business down, and we map how it actually runs before deciding whether to build anything. Low pressure, no obligation, and no long brief required."
      />

      <OfferSection
        id="send"
        title="What to send"
        intro="A few lines is enough to start. The more concrete, the better."
      >
        <OfferCardGrid items={WHAT_TO_SEND} />
      </OfferSection>

      <OfferSection
        id="good-first"
        title="Good first workflows"
        intro="Processes that map cleanly and tend to pay off early."
      >
        <div className="panel-list">
          <ul>
            {GOOD_FIRST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </OfferSection>

      <OfferSection id="next" title="What happens next">
        <OfferSteps items={NEXT_STEPS} />
      </OfferSection>

      <OfferSection
        id="human"
        title="What stays human"
        intro="Automation handles the busywork; the judgment stays with people."
      >
        <OfferCardGrid items={STAYS_HUMAN} variant="human" />
      </OfferSection>

      <OfferSection id="reach" title="How to reach out">
        <div className="panel-list">
          <span className="sch-cap">Contact</span>
          <p>
            Email <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> with a short note
            about the workflow and where it slows down. A few lines is enough to
            start. Hebrew or English is fine.
          </p>
          <div>
            <CTAButton href={CONTACT_MAILTO} variant="primary">
              Send an email
            </CTAButton>
          </div>
        </div>
      </OfferSection>
    </main>
  );
}
