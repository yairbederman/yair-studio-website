/**
 * PostCSS runs Tailwind CSS 4 (utilities only — see the header of
 * src/app/globals.css). Under Turbopack (the default for next dev and next
 * build) this config runs as a pre-pass in a Node worker; Lightning CSS still
 * does the vendor prefixing and syntax lowering afterwards. The plugin skips any
 * stylesheet without Tailwind at-rules, so src/styles/*.css pass through as
 * written.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
