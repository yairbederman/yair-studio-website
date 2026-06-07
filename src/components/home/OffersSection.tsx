import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

/**
 * Offer cards — concrete, but tied under one system (per brief: not four
 * unrelated services). Three cards deep-link to existing offer routes; the
 * audit (the entry wedge, no dedicated route yet) starts a conversation.
 */
const OFFERS = [
  {
    title: "AI Workflow Audit",
    desc: "A focused review of one business workflow: what happens today, where it breaks, what can be automated, and what should stay human.",
    cta: "Start with an audit",
    href: "/contact",
  },
  {
    title: "Internal AI System",
    desc: "A practical assistant or workflow layer for meetings, tasks, email, knowledge search, reporting, or follow-up.",
    cta: "Build an internal system",
    href: "/offers/office-ai-systems",
  },
  {
    title: "Dashboard + Automation Layer",
    desc: "A visibility layer connected to existing tools so teams can see what needs attention and trigger the right next action.",
    cta: "Create visibility",
    href: "/offers/dashboards-automation",
  },
  {
    title: "Content & Ad Operations",
    desc: "A repeatable system for turning raw ideas, calls, assets, and performance data into structured content or ad experiments.",
    cta: "Systemize content ops",
    href: "/offers/content-ad-operations",
  },
] as const;

export default function OffersSection() {
  return (
    <section className="section offers" aria-labelledby="offers-title">
      <Container>
        <div className="section-head">
          <h2 id="offers-title">Offers</h2>
          <p className="section-intro">
            Not four separate services — four entry points into one system built
            around real workflows.
          </p>
        </div>
        <ul className="offers-grid">
          {OFFERS.map((offer) => (
            <li key={offer.title} className="offer-card">
              <h3 className="card-title">{offer.title}</h3>
              <p className="card-desc">{offer.desc}</p>
              <div className="offer-card-foot">
                <CTAButton href={offer.href}>{offer.cta}</CTAButton>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
