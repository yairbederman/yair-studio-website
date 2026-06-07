import Container from "@/components/Container";

/**
 * How I help — method, not hype. Numbered steps; the final "keep humans in
 * control" step is emphasized in copper so the approval principle reads as
 * built-in, not bolted on. id="how-i-work" is the hero secondary-CTA anchor.
 */
const STEPS = [
  {
    title: "Map the workflow",
    desc: "We identify the real process, owners, inputs, outputs, bottlenecks, and risk points.",
  },
  {
    title: "Connect the tools",
    desc: "We use the systems already in the business — email, calendar, CRM, documents, spreadsheets, APIs, or databases.",
  },
  {
    title: "Build the operating layer",
    desc: "Dashboards, automations, summaries, alerts, and AI assistants are added where they reduce friction.",
  },
  {
    title: "Keep humans in control",
    desc: "Approvals, review points, and clear handoff rules stay built into the system.",
    human: true,
  },
] as const;

export default function MethodSection() {
  return (
    <section
      className="section method"
      id="how-i-work"
      aria-labelledby="method-title"
    >
      <Container>
        <div className="section-head">
          <h2 id="method-title">How I work</h2>
        </div>
        <ol className="method-list">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={"method-step" + ("human" in step ? " is-human" : "")}
            >
              <span className="method-step-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="method-step-body">
                <h3 className="card-title">{step.title}</h3>
                <p className="card-desc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
