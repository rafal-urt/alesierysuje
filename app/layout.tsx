import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Ale się rysuje — Live Painting Akwarelowy na Wesela i Eventy",
  description:
    "Portrecistka malująca gości na żywo podczas wesela. Każdy gość odchodzi z unikalnym akwarelowym portretem jako pamiątką wieczoru. Obsługujemy całą Polskę.",
  keywords: [
    "live painting",
    "akwarela wesele",
    "portret ślubny",
    "malowanie na żywo",
    "pamiątka weselna",
    "artysta wesele",
    "ilustracja portret",
  ],
  openGraph: {
    title: "Ale się rysuje — Live Painting Akwarelowy",
    description:
      "Twoi goście odejdą z czymś więcej niż wspomnieniami. Portrecistka malująca akwarelowe portrety na żywo podczas wesela.",
    url: "https://alesierysuje.pl",
    siteName: "Ale się rysuje",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream text-dark">{children}</body>
    </html>
  );
}
