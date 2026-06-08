import { Inter, Geist_Mono, Assistant } from "next/font/google";

/**
 * Shared next/font loaders for the site's three families (Inter — EN body +
 * display; Geist Mono — mono accents; Assistant — HE body). Defined ONCE here and
 * imported by every root layout, so the loaders and their CSS-variable names live
 * in one place (each next/font call must be a module-scope const).
 */
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
export const assistant = Assistant({ subsets: ["hebrew", "latin"], variable: "--font-assistant", display: "swap" });

/** The three font CSS-variable classes, for `<html className={fontVariables}>`. */
export const fontVariables = `${inter.variable} ${geistMono.variable} ${assistant.variable}`;
