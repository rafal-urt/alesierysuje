import type { Metadata } from "next";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "FAQ — Najczęstsze Pytania o Live Painting | alesierysuje",
  description:
    "Odpowiedzi na najczęstsze pytania o live painting na wesele i event firmowy. Ile portretów, jak długo trwa, czego potrzebujesz, jak zarezerwować.",
  openGraph: {
    title: "FAQ — alesierysuje",
    url: "https://alesierysuje.pl/faq",
  },
};

export default function FAQPage() {
  return (
    <main className="pt-16">
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-muted mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <a href="/" className="hover:text-dark transition-colors">Strona główna</a>
            <span>/</span>
            <span>FAQ</span>
          </nav>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Pytania i odpowiedzi
          </p>
          <h1 className="text-4xl md:text-6xl text-dark leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            <span className="italic" style={{ color: "#E8C4B8" }}>FAQ</span>
          </h1>
        </div>
      </section>

      <FAQ />

      <section className="py-20 px-6 text-center bg-cream">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl text-dark mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Masz inne pytanie?
          </h2>
          <p className="text-muted text-sm mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Napisz do mnie — odpowiem w ciągu 24 godzin.
          </p>
          <a href="/kontakt"
            className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #E8C4B8, #D4B896)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}>
            Napisz do mnie
          </a>
        </div>
      </section>
    </main>
  );
}
