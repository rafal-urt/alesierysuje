import type { Metadata } from "next";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "Opinie Klientów — Wesela i Eventy | alesierysuje",
  description:
    "Prawdziwe opinie klientów z weselezklasa.pl. Sprawdź, co mówią osoby, które wybrały live painting na swoje wesele lub event firmowy.",
  openGraph: {
    title: "Opinie klientów — alesierysuje",
    url: "https://alesierysuje.pl/opinie",
  },
};

export default function OpiniePage() {
  return (
    <main className="pt-16">
      <section className="py-14 md:py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-muted mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <a href="/" className="hover:text-dark transition-colors">Strona główna</a>
            <span>/</span>
            <span>Opinie</span>
          </nav>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Co mówią klienci
          </p>
          <h1 className="text-3xl md:text-6xl text-dark leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            <span className="italic" style={{ color: "#8B6A40" }}>Opinie</span>
          </h1>
          <p className="text-muted text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Wszystkie opinie pochodzą z serwisu{" "}
            <a href="https://www.weselezklasa.pl/ogloszenia-weselne/alesierysuje-aleksandra-sienica,60334/"
              target="_blank" rel="noopener noreferrer"
              className="underline hover:text-dark transition-colors">
              weselezklasa.pl
            </a>
          </p>
        </div>
      </section>

      <Testimonials />

      <section className="py-14 md:py-20 px-6 text-center" style={{ background: "#fdf0ea" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Dołącz do zadowolonych klientów
          </h2>
          <a href="/kontakt"
            className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #E8C4B8, #D4B896)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}>
            Zapytaj o termin
          </a>
        </div>
      </section>
    </main>
  );
}
