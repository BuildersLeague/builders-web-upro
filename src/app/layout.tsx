import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { QueryProvider } from "@/providers/QueryProvider";
import { HelpButton } from "@/components/HelpButton";
import { AccessibilityAnnouncer } from "@/components/AccessibilityAnnouncer";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Train Smarter, Play Better – U-Pro Soccer",
  description:
    "U-Pro Soccer is the AI-powered, gamified soccer training platform that helps kids train at home, earn rewards, and level up — all from their phone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preload"
          href="/images/hero/heroMobile.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
            <HelpButton />
            <AccessibilityAnnouncer />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
