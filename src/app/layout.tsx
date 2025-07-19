import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Poppins } from "next/font/google";
import AOSInit from "../components/AOSInit";
import { outfit, syne, urbanist, sora } from './fonts'
import "./globals.css";

// Fonts




export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with Next.js by your Next JS Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable} ${urbanist.variable} ${sora.variable} dot-background overflow-x-hidden`}>
      <body
        className="antialiased overflow-x-hidden">
        {/* Initialize AOS for animations */}
        <AOSInit />
        {/* Animated background */}
        <AnimatedBackground />
        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
