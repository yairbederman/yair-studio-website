/**
 * Inline written-brand treatment: y[AI]r studio.
 * Per HEBREW.md §1 the wordmark is ALWAYS Latin + LTR, even inside RTL flow,
 * so it is wrapped in <bdi dir="ltr">. The bracketed [AI] renders in --accent.
 * role="img" + aria-label give it a single clean accessible name.
 */
type WordmarkProps = {
  /** Render the "studio" caption after the lockup. */
  studio?: boolean;
  className?: string;
};

export default function Wordmark({ studio = true, className }: WordmarkProps) {
  return (
    <bdi
      role="img"
      aria-label="y[AI]r studio"
      dir="ltr"
      className={className ? `wordmark-group ${className}` : "wordmark-group"}
    >
      <span className="wordmark">
        <span className="wordmark-y">y</span>
        <span className="wordmark-bracket">[</span>
        <span className="wordmark-ai">AI</span>
        <span className="wordmark-bracket">]</span>
        <span className="wordmark-r">r</span>
      </span>
      {studio && <span className="wordmark-studio">studio</span>}
    </bdi>
  );
}
