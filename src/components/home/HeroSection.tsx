import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import CTAButton from "@/components/CTAButton";
import WorkflowMap from "@/components/WorkflowMap";
import type { HomeContent } from "@/content/home";

/**
 * Hero: explains what y[AI]r studio does in one screen. Copy-first.
 * The schematic on the right is the restrained CSS-only process motif rendered
 * via <WorkflowMap decorative> (aria-hidden, hidden on mobile): scattered inputs
 * flow through a mapped workflow into clear next actions, with a copper
 * human-approval checkpoint that makes the human-in-the-loop principle visible.
 * Copy + CTA destinations come from the locale content model.
 */
export default function HeroSection({
  content,
}: {
  content: HomeContent["hero"];
}) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero-inner">
        <div className="hero-copy">
          <SectionLabel>{content.eyebrow}</SectionLabel>
          <h1 id="hero-title">{content.title}</h1>
          <p className="lead hero-lead">{content.lead}</p>
          <div className="hero-actions">
            <CTAButton href={content.primaryCta.href} variant="primary">
              {content.primaryCta.label}
            </CTAButton>
            <CTAButton href={content.secondaryCta.href} variant="ghost">
              {content.secondaryCta.label}
            </CTAButton>
          </div>
        </div>

        <WorkflowMap
          decorative
          caption={content.schematic.caption}
          nodes={content.schematic.nodes}
        />
      </Container>
    </section>
  );
}
