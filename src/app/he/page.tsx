import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Wordmark from "@/components/Wordmark";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he");

export default function HomePageHe() {
  return (
    <main id="main" className="page" lang="he" dir="rtl">
      <Container>
        <div className="stack">
          <SectionLabel>עברית</SectionLabel>
          <h1>
            <Wordmark />
          </h1>
          <p className="lead">תצוגה מקדימה. תוכן בעברית יתווסף בשלב הבא.</p>
        </div>
      </Container>
    </main>
  );
}
