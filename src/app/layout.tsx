import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ORION DEV CORE | Revenue Intelligence for Hospitality",
  description: "Built in Africa. Engineered for Impact. ORION HOTEL SUITE delivers 5-17% measurable revenue increase through AI-powered optimization. Revenue Intelligence solutions for hotels.",
  keywords: ["ORION DEV CORE", "Revenue Intelligence", "Hospitality Technology", "Hotel Revenue Management", "AI for Hotels", "RACK RATE", "South Africa", "Hotel Software", "RevPAR", "Guest Onboarding"],
  authors: [{ name: "ORION DEV CORE", url: "https://oriondevcore.com" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "ORION DEV CORE | Revenue Intelligence for Hospitality",
    description: "Built in Africa. Engineered for Impact. 5-17% measurable revenue increase through AI-powered optimization.",
    url: "https://oriondevcore.com",
    siteName: "ORION DEV CORE",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORION DEV CORE | Revenue Intelligence for Hospitality",
    description: "Built in Africa. Engineered for Impact. 5-17% measurable revenue increase through AI-powered optimization.",
    creator: "@oriondevcore",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
