import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Geist, Geist_Mono } from "next/font/google";
import AOSInit from "../components/AOSInit";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chans Portfolio",
  description: "Created with Next.js by your Next JS Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
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
