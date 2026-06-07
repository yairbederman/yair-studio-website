import Container from "@/components/Container";

/** Problems this fixes — name the business pain plainly. */
const PROBLEMS = [
  {
    title: "Scattered tools",
    desc: "Tasks, notes, emails, files, and customer context live in different places.",
  },
  {
    title: "Manual follow-up",
    desc: "People remember what to do by memory, chat threads, or repeated status meetings.",
  },
  {
    title: "No operational visibility",
    desc: "Leaders cannot quickly see what is stuck, overdue, risky, or waiting for a decision.",
  },
  {
    title: "AI experiments that do not survive",
    desc: "Prompts and demos look useful, but never become a reliable workflow.",
  },
] as const;

export default function ProblemsSection() {
  return (
    <section className="section problems" aria-labelledby="problems-title">
      <Container>
        <div className="section-head">
          <h2 id="problems-title">Where work gets stuck</h2>
        </div>
        <ul className="problems-grid">
          {PROBLEMS.map((p) => (
            <li key={p.title} className="problem-card">
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
