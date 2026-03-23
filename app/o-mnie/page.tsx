import type { Metadata } from "next";
import AboutService from "../components/AboutService";
import HowItWorks from "../components/HowItWorks";

export const metadata: Metadata = {
  title: "O mnie — Aleksandra Sienica | alesierysuje",
  description:
    "Poznaj Aleksandrę Sienicę — portrecistkę malującą akwarelowe portrety na żywo podczas wesel i eventów. Dowiedz się, jak wygląda moja praca i jak powstają portrety.",
  openGraph: {
    title: "O mnie — Aleksandra Sienica | alesierysuje",
    url: "https://alesierysuje.pl/o-mnie",
  },
};

export default function OMnie() {
  return (
    <main className="pt-16">
      {/* Page hero */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-muted mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <a href="/" className="hover:text-dark transition-colors">Strona główna</a>
            <span>/</span>
            <span>O mnie</span>
          </nav>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Aleksandra Sienica
          </p>
          <h1 className="text-4xl md:text-6xl text-dark leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            O <span className="italic" style={{ color: "#E8C4B8" }}>mnie</span>
          </h1>
        </div>
      </section>

      <AboutService />
      <HowItWorks />

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-cream">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Chcesz zobaczyć moje prace?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/galeria"
              className="inline-block px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E8C4B8, #D4B896)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}>
              Galeria prac
            </a>
            <a href="/kontakt"
              className="inline-block px-8 py-4 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-rose-light"
              style={{ borderColor: "#E8C4B8", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}>
              Napisz do mnie
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
