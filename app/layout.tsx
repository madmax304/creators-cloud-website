import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CookieConsent } from '@/components/CookieConsent'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creator's Cloud - Social Media Content Backup",
  description: "Secure backup for your social media content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
