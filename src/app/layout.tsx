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
    <html lang="en" className={`${outfit.variable} ${syne.variable} ${urbanist.variable} ${sora.variable} overflow-x-hidden`}>
     <head>
    <meta name="google-site-verification" content="IGGOBkDDOAkrFU3c5a5dT5D5BFhKs_j4qzd4plZYI-E" />
  </head>
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
