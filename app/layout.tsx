import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileFloatingCTA from "./components/MobileFloatingCTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "alesierysuje — Live Painting Akwarelowy na Wesela i Eventy | Warszawa",
  description:
    "Aleksandra Sienica — portrecistka malująca gości na żywo podczas wesela i eventów firmowych. Każdy gość odchodzi z unikalnym akwarelowym portretem. Obsługujemy całą Polskę.",
  keywords: [
    "live painting",
    "live painting wesele",
    "malowanie na żywo wesele",
    "portrecistka weselna Warszawa",
    "akwarela wesele",
    "portret ślubny",
    "malowanie na żywo",
    "pamiątka weselna",
    "artysta wesele",
    "ilustracja portret",
    "live painting event firmowy",
    "atrakcja weselna",
    "akwarelowe portrety gości",
    "live painting Polska",
    "alesierysuje",
  ],
  authors: [{ name: "Aleksandra Sienica" }],
  openGraph: {
    title: "alesierysuje — Live Painting Akwarelowy",
    description:
      "Twoi goście odejdą z czymś więcej niż wspomnieniami. Portrecistka malująca akwarelowe portrety na żywo podczas wesela i eventów.",
    url: "https://alesierysuje.pl",
    siteName: "alesierysuje",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "alesierysuje — Live Painting Akwarelowy na Wesela i Eventy",
    description:
      "Portrecistka malująca akwarelowe portrety na żywo. Wyjątkowa atrakcja weselna i eventowa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://alesierysuje.pl/#business",
      name: "alesierysuje — Aleksandra Sienica",
      description:
        "Live painting akwarelowy na wesela i eventy firmowe. Portrecistka tworząca unikalne akwarelowe portrety gości na żywo.",
      url: "https://alesierysuje.pl",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warszawa",
        addressCountry: "PL",
      },
      areaServed: { "@type": "Country", name: "Polska" },
      priceRange: "3000–6000 zł",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "4",
        bestRating: "5",
        worstRating: "5",
      },
    },
    {
      "@type": "Person",
      name: "Aleksandra Sienica",
      jobTitle: "Portrecistka, Live Painting Artist",
      worksFor: { "@id": "https://alesierysuje.pl/#business" },
      url: "https://alesierysuje.pl",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cream text-dark">
        <Navbar />
        {children}
        <Footer />
        <MobileFloatingCTA />
      </body>
    </html>
  );
}
