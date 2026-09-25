import { Instrument_Sans, Geist_Mono, Assistant } from "next/font/google";

/**
 * Shared next/font loaders for the site's three families (sans pair):
 * Instrument Sans — EN body/UI and EN display at 600–700; Assistant — HE body
 * and HE display at 700–800; Geist Mono — mono accents. Display is the body
 * family at display weights, so both sans loaders are variable fonts with no
 * `weight` list (Instrument Sans wght 400–700, Assistant 200–800 — one file
 * covers every weight). Defined ONCE here and imported by every root layout, so
 * the loaders and their CSS-variable names live in one place (each next/font
 * call must be a module-scope const).
 */
export const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument-sans", display: "swap" });
export const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
export const assistant = Assistant({ subsets: ["hebrew", "latin"], variable: "--font-assistant", display: "swap" });

/** The three font CSS-variable classes, for `<html className={fontVariables}>`. */
export const fontVariables = `${instrumentSans.variable} ${geistMono.variable} ${assistant.variable}`;
