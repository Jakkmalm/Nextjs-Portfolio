import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import AOSInit from "../components/AOSInit";
import "./globals.css";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
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
