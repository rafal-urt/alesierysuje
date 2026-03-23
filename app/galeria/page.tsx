import type { Metadata } from "next";
import Gallery from "../components/Gallery";

export const metadata: Metadata = {
  title: "Galeria — Prace z Wesel i Eventów | alesierysuje",
  description:
    "Galeria akwarelowych portretów malowanych na żywo podczas wesel i eventów. Każdy portret niepowtarzalny — lekki, artystyczny, pełen emocji.",
  openGraph: {
    title: "Galeria prac — alesierysuje",
    url: "https://alesierysuje.pl/galeria",
  },
};

export default function GaleriaPage() {
  return (
    <main className="pt-16">
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-muted mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <a href="/" className="hover:text-dark transition-colors">Strona główna</a>
            <span>/</span>
            <span>Galeria</span>
          </nav>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Prace
          </p>
          <h1 className="text-4xl md:text-6xl text-dark leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            <span className="italic" style={{ color: "#B8D4E8" }}>Galeria</span>
          </h1>
        </div>
      </section>

      <Gallery />

      <section className="py-20 px-6 text-center bg-cream">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Chcesz taki portret na swoim weselu?
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
