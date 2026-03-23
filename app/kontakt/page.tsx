import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — Zarezerwuj Termin | alesierysuje",
  description:
    "Zapytaj o termin live paintingu na wesele lub event firmowy. Aleksandra odpowiada w ciągu 24 godzin. Obsługujemy całą Polskę.",
  openGraph: {
    title: "Kontakt — alesierysuje",
    url: "https://alesierysuje.pl/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <main className="pt-16">
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-muted mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <a href="/" className="hover:text-dark transition-colors">Strona główna</a>
            <span>/</span>
            <span>Kontakt</span>
          </nav>
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Rezerwacja
          </p>
          <h1 className="text-4xl md:text-6xl text-dark leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            <span className="italic" style={{ color: "#E8C4B8" }}>Kontakt</span>
          </h1>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
