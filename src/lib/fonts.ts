import { Instrument_Sans, Newsreader, Frank_Ruhl_Libre, Geist_Mono, Assistant } from "next/font/google";

/**
 * Shared next/font loaders for the site's five families (Pair A · Editorial):
 * Instrument Sans — EN body/UI; Newsreader — EN display (opsz axis); Frank Ruhl
 * Libre — HE display; Assistant — HE body; Geist Mono — mono accents. Defined
 * ONCE here and imported by every root layout, so the loaders and their
 * CSS-variable names live in one place (each next/font call must be a
 * module-scope const).
 */
export const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument-sans", display: "swap" });
export const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", axes: ["opsz"], style: ["normal"], display: "swap" });
export const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ["hebrew", "latin"], variable: "--font-frank-ruhl", display: "swap" });
export const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
export const assistant = Assistant({ subsets: ["hebrew", "latin"], variable: "--font-assistant", display: "swap" });

/** The five font CSS-variable classes, for `<html className={fontVariables}>`. */
export const fontVariables = `${instrumentSans.variable} ${newsreader.variable} ${frankRuhlLibre.variable} ${geistMono.variable} ${assistant.variable}`;
