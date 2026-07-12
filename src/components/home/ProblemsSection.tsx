import Image from "next/image";
import Container from "@/components/Container";
import type { HomeContent } from "@/content/home";

/**
 * Practical starting points for investigating and improving operational work.
 * Uses the site's neutral feature-card pattern while keeping this richer
 * title/kicker/body content model local to the homepage.
 */
export default function ProblemsSection({
  content,
}: {
  content: HomeContent["problems"];
}) {
  return (
    <section className="section problems" aria-labelledby="problems-title">
      <Container>
        <div className="section-head">
          <h2 id="problems-title">{content.title}</h2>
          <p className="section-intro">{content.intro}</p>
        </div>
        <ul className="feature-grid problems-grid">
          {content.cards.map((card) => (
            <li key={card.title} className="feature-card problem-card">
              <h3 className="card-title">{card.title}</h3>
              <p className="problem-card-kicker">{card.kicker}</p>
              <p className="problem-card-body">{card.body}</p>
              {card.poster && card.href && card.linkLabel ? (
                <a className="problem-card-film" href={card.href}>
                  <Image
                    className="problem-card-poster"
                    src={card.poster}
                    alt=""
                    aria-hidden
                    width={1920}
                    height={1080}
                    sizes="(min-width: 760px) 40vw, 100vw"
                  />
                  {/* The link's accessible name — required, so the guard above
                      gates on linkLabel (the image is aria-hidden). */}
                  <span className="problem-card-cta">{card.linkLabel}</span>
                </a>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="problems-closing">{content.closing}</p>
      </Container>
    </section>
  );
}
