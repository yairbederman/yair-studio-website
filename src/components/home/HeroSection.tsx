import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import CTAButton from "@/components/CTAButton";

/**
 * Hero: explains what y[AI]r studio does in one screen.
 * Copy-first. The schematic on the right is a restrained, CSS-only process
 * motif (decorative → aria-hidden, hidden on mobile): scattered inputs flow
 * through a mapped workflow into clear next actions, with a copper
 * human-approval checkpoint that makes the human-in-the-loop principle visible.
 */
const FLOW = [
  { label: "scattered inputs", sub: "tasks · email · docs · context" },
  { label: "mapped workflow" },
  { label: "operating layer", sub: "dashboards · automations · assistants" },
  { label: "human approval", human: true },
  { label: "clear next action", out: true },
] as const;

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero-inner">
        <div className="hero-copy">
          <SectionLabel>AI workflow systems</SectionLabel>
          <h1 id="hero-title">
            Turn messy business workflows into clear AI-assisted systems.
          </h1>
          <p className="lead hero-lead">
            I help growing businesses map stuck processes, connect existing
            tools, and build dashboards, automations, and AI assistants that
            create clear next actions — with human approval where it matters.
          </p>
          <div className="hero-actions">
            <CTAButton href="/contact" variant="primary">
              Map one workflow
            </CTAButton>
            <CTAButton href="#how-i-work" variant="ghost">
              See how it works
            </CTAButton>
          </div>
        </div>

        <div className="hero-schematic" aria-hidden="true">
          <span className="sch-cap">workflow → next action</span>
          <ol className="sch-flow">
            {FLOW.map((node) => (
              <li
                key={node.label}
                className={
                  "sch-node" +
                  ("human" in node && node.human ? " sch-node--human" : "") +
                  ("out" in node && node.out ? " sch-node--out" : "")
                }
              >
                <span className="sch-marker">
                  <span className="sch-dot" />
                </span>
                <span className="sch-text">
                  <span className="sch-label">{node.label}</span>
                  {"sub" in node && node.sub ? (
                    <span className="sch-sub">{node.sub}</span>
                  ) : null}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
