import type { Metadata } from "next";
import Packages from "../components/Packages";

export const metadata: Metadata = {
  title: "Cennik — Pakiety Live Painting | alesierysuje",
  description:
    "Cennik i pakiety live paintingu na wesele oraz event firmowy. Każde zamówienie wyceniane indywidualnie — napisz, żeby dostać ofertę dopasowaną do Twojego eventu.",
  openGraph: {
    title: "Cennik i pakiety — alesierysuje",
    url: "https://alesierysuje.pl/cennik",
  },
};

export default function CennikPage() {
  return (
    <main className="pt-16">
      <section className="py-14 md:py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-muted mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <a href="/" className="hover:text-dark transition-colors">Strona główna</a>
            <span>/</span>
            <span>Cennik</span>
          </nav>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Pakiety i ceny
          </p>
          <h1 className="text-3xl md:text-6xl text-dark leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            <span className="italic" style={{ color: "#D4B896" }}>Cennik</span>
          </h1>
        </div>
      </section>

      <Packages />

      <section className="py-14 md:py-20 px-6 text-center bg-cream">
        <div className="max-w-xl mx-auto">
          <p className="text-muted text-sm mb-8 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Nie jesteś pewna, który pakiet wybrać? Napisz do mnie — wspólnie dopasujemy ofertę
            do Twojego wesela lub eventu. Odpowiadam w ciągu 24 godzin.
          </p>
          <a href="/kontakt"
            className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #E8C4B8, #D4B896)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}>
            Zapytaj o wycenę
          </a>
        </div>
      </section>
    </main>
  );
}
