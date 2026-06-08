import { ImageResponse } from "next/og";
import { BRAND_COLORS } from "@/lib/brand";
import { OG_IMAGE_ALT } from "@/lib/site";

/**
 * Branded Open Graph image for the whole site. As a root-level
 * opengraph-image.tsx, Next applies it to every route's metadata, and Twitter
 * falls back to it (the root layout sets twitter.card = "summary_large_image").
 *
 * Rendered by next/og (Satori) at build/request time using the default bundled
 * font — no committed font binaries. Brand is carried by color + the bracketed
 * [AI] wordmark treatment. Colors come from BRAND_COLORS (src/lib/brand.ts),
 * the JS mirror of the CSS tokens, because Satori can't read CSS variables.
 *
 * Node.js runtime (default) — do NOT switch to the edge runtime.
 */
export const alt = OG_IMAGE_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const { bg, surface, fg, fgSecondary, fgMuted, accent, rule } = BRAND_COLORS;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          padding: "72px 80px",
          borderTop: `4px solid ${accent}`,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: fgMuted,
          }}
        >
          AI workflow systems
        </div>

        {/* Wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 132,
              fontWeight: 700,
              color: fg,
              letterSpacing: -4,
            }}
          >
            <span>y</span>
            <span style={{ color: accent }}>[</span>
            <span style={{ color: accent }}>AI</span>
            <span style={{ color: accent }}>]</span>
            <span>r</span>
            <span
              style={{
                fontSize: 36,
                color: fgMuted,
                marginLeft: 28,
                letterSpacing: 14,
                textTransform: "uppercase",
              }}
            >
              studio
            </span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 44,
              color: fgSecondary,
              letterSpacing: -0.5,
            }}
          >
            AI systems for real business workflows
          </div>
        </div>

        {/* Schematic line motif: nodes joined by a hairline, one copper (human). */}
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          {[0, 1, 2, 3, 4].map((i) => {
            const isHuman = i === 3;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: i === 4 ? 0 : 1,
                }}
              >
                <div
                  style={{
                    width: isHuman ? 18 : 12,
                    height: isHuman ? 18 : 12,
                    borderRadius: 9999,
                    background: isHuman ? accent : surface,
                    border: `1px solid ${isHuman ? accent : fgMuted}`,
                  }}
                />
                {i === 4 ? null : (
                  <div
                    style={{
                      flexGrow: 1,
                      height: 1,
                      background: rule,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    ),
    { ...size },
  );
}
