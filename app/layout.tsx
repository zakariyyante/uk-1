import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import GamblingWarningBar from "@/components/GamblingWarningBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://ukcasinopicks.org"),
  title: "UK Casino Picks - Best Online Casinos UK 2026",
  description:
    "Compare the best UK online casinos in 2026. UKGC licensed, independently reviewed. Find exclusive bonuses, free spins, and top-rated casino sites.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://ukcasinopicks.org",
    siteName: "UK Casino Picks",
    title: "UK Casino Picks - Best Online Casinos UK 2026",
    description:
      "Compare the best UK online casinos in 2026. UKGC licensed, independently reviewed. Find exclusive bonuses, free spins, and top-rated casino sites.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ paddingBottom: "44px" }}>
        {children}
        <GamblingWarningBar />
        <Analytics />
      </body>
    </html>
  );
}
