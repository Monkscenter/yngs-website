import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "YNGS — Yash Niteshkumar Ghadiya Springs | Natural Spring in Balmertown, Ontario";
const description =
  "YNGS (Yash Niteshkumar Ghadiya Springs) is a natural cold-water spring and local attraction near Balmertown, Ontario, in Northwestern Ontario. Find its location and an honest water safety disclaimer here.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title,
  description,
  keywords: [
    "YNGS",
    "YNGS Springs",
    "Yash Niteshkumar Ghadiya Springs",
    "YNGS Balmertown",
    "natural spring Balmertown Ontario",
    "spring near Balmertown",
    "cold spring Northwestern Ontario",
    "Balmertown natural attraction",
  ],
  openGraph: {
    title,
    description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
    // Replace with a real photo of YNGS once available (recommended 1200x630).
    images: [
      {
        url: "/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "YNGS — Yash Niteshkumar Ghadiya Springs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-placeholder.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

// A generic Place schema is used rather than LocalBusiness (YNGS is not a
// business) or a historical/tourist-attraction schema (no official
// designation or verified visitor history has been provided).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: siteConfig.fullName,
  alternateName: "YNGS",
  description:
    "A natural cold-water spring and local attraction in Northwestern Ontario, Canada.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Balmertown",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  hasMap: siteConfig.mapsUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
