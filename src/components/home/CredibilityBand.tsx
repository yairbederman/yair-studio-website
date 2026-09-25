import Container from "@/components/Container";
import type { CardItem } from "@/content/types";

/**
 * Credibility band, right under the hero: the founder facts as one compact
 * row (four columns on desktop, two on tablet, one on phones), each marked
 * with the copper approval dot. The facts are proof's founder credentials,
 * passed straight through (src/content/proof.ts), never restated; the band
 * only adds its small label. No numbers, logos, or metrics by decision — the
 * facts carry the weight.
 */
export default function CredibilityBand({
  title,
  items,
}: {
  title: string;
  items: readonly CardItem[];
}) {
  return (
    <section className="home-cred py-12 md:py-16" aria-labelledby="cred-title">
      <Container>
        <h2 id="cred-title" className="home-cred-label">
          {title}
        </h2>
        <ul className="home-cred-list mt-6 grid list-none gap-x-8 gap-y-6 p-0 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title} className="home-cred-item relative ps-6">
              <h3 className="home-cred-title">{item.title}</h3>
              <p className="home-cred-desc mt-2">{item.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
