// fonts.ts
import { Outfit, Syne, Urbanist, Sora } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});
export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});
export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});
