import Container from "@/components/Container";
import type { HomeContent } from "@/content/home";

/**
 * How I help — method, not hype. Numbered steps; the final "keep humans in
 * control" step is emphasized in copper so the approval principle reads as
 * built-in, not bolted on. id="how-i-work" is the hero secondary-CTA anchor.
 * Copy from the model; the `human` flag drives the copper emphasis.
 */
export default function MethodSection({
  content,
}: {
  content: HomeContent["method"];
}) {
  return (
    <section
      className="section method"
      id="how-i-work"
      aria-labelledby="method-title"
    >
      <Container>
        <div className="section-head">
          <h2 id="method-title">{content.title}</h2>
          {content.intro ? (
            <p className="section-intro">{content.intro}</p>
          ) : null}
        </div>
        <ol className="method-list">
          {content.steps.map((step, i) => (
            <li
              key={step.title}
              className={"method-step" + (step.human ? " is-human" : "")}
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
