import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portret dla Rodziców Pary Młodej — Wyjątkowy Prezent Ślubny | Ale się rysuje",
  description:
    "Akwarelowy portret jako prezent dla rodziców na wesele. Aleksandra tworzy realistyczne portrety na podstawie zdjęć — piękna, trwała pamiątka zamiast standardowego podarunku.",
  keywords: [
    "portret rodziców wesele",
    "prezent dla rodziców ślub",
    "portret akwarelowy prezent ślubny",
    "upominek ślubny dla rodziców",
    "portret ślubny akwarela",
    "prezent weselny portret",
    "akwarelowy portret na zamówienie",
    "portret podziękowania dla rodziców",
    "podziękowania ślubne portret",
  ],
  openGraph: {
    title: "Portret dla Rodziców — Wyjątkowy Prezent Ślubny",
    description:
      "Akwarelowy portret zamiast standardowego prezentu. Aleksandra maluje realistyczne portrety na podstawie zdjęć — na zamówienie, z duszą.",
    url: "https://alesierysuje.pl/uslugi/portrety-rodzicow",
  },
};

const steps = [
  {
    number: "01",
    title: "Wybierasz zdjęcie",
    desc: "Przesyłasz zdjęcie rodziców — może być portret para, zdjęcie z wesela córki/syna, lub ulubione wspólne zdjęcie.",
  },
  {
    number: "02",
    title: "Aleksandra maluje",
    desc: "Portret powstaje w jej pracowni, z dbałością o każdy detal. Styl — elegancki akwarele, miękki i ciepły, bez komiksowych uproszczeń.",
  },
  {
    number: "03",
    title: "Dostajesz gotowy portret",
    desc: "Portret wysyłany jest w tubie lub odbierasz osobiście. Przychodzi gotowy do oprawienia — jako prezent w passepartout lub bez.",
  },
];

const formats = [
  { name: "A4 (21×30 cm)", desc: "Klasyczny format, idealny do ramki — portret jednej lub dwóch osób.", price: "od 350 zł" },
  { name: "A3 (30×42 cm)", desc: "Większy, bardziej szczegółowy portret — widoczny na ścianie w salonie.", price: "od 550 zł" },
  { name: "50×70 cm", desc: "Duży format prestiżowy — portret z prawdziwą siłą wyrazu, jako obraz.", price: "wycena indywidualna" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Portret dla Rodziców Pary Młodej",
  provider: {
    "@type": "Person",
    name: "Aleksandra Sienica",
    url: "https://alesierysuje.pl",
  },
  description:
    "Akwarelowy portret jako prezent ślubny dla rodziców. Malowany na podstawie zdjęcia.",
  areaServed: { "@type": "Country", name: "Polska" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "350",
    priceCurrency: "PLN",
  },
};

export default function PortretyRodzicow() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <section className="pt-28 pb-0 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <a href="/" className="hover:text-dark transition-colors">Strona główna</a>
            <span>/</span>
            <span>Portrety Rodziców</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Usługi &nbsp;·&nbsp; Prezent Ślubny
          </p>
          <h1
            className="text-4xl md:text-6xl text-dark mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Portret<br />
            <span className="italic" style={{ color: "#D4B896" }}>dla Rodziców</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed mb-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Zamiast kolejnego kompletu ręczników czy bonu do restauracji — ręcznie malowany
            akwarelowy portret. Podziękowanie, które zostanie na ścianie na dziesiątki lat.
            Malowane z miłością, na podstawie Waszego zdjęcia.
          </p>
          <a
            href="/#kontakt"
            className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #D4B896, #E8C4B8)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
          >
            Zamów portret
          </a>
        </div>
      </section>

      {/* Dlaczego portret */}
      <section className="py-20 px-6" style={{ background: "#fdf6ed" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Dlaczego portret<br />akwarelowy?
            </h2>
            <div className="space-y-4 text-muted leading-relaxed text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
              <p>
                Zdjęcia mamy wszyscy — setki, tysiące. Ale ręcznie malowany portret to coś innego.
                To czas, uwaga i rzemiosło artystki, która spojrzała na zdjęcie i przeniosła
                go na papier z duszą.
              </p>
              <p>
                Portrety Aleksandry mają charakterystyczną lekkość akwareli — miękkie linie,
                ciepłe kolory, oddany wyraz twarzy. Nie są fotograficzną kopią — są artystyczną
                interpretacją, przez co działają jak prawdziwy obraz.
              </p>
              <p>
                Rodzice wieszają je w salonie. Dziadkowie trzymają na komodzie. To prezent,
                który zostaje i jest pokazywany gościom — nie trafia na dno szafy.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              ["Ręcznie malowane", "Każdy portret jest unikalny — nie wydruk, nie generacja AI"],
              ["Na podstawie Twojego zdjęcia", "Przesyłasz zdjęcie, Aleksandra robi resztę"],
              ["Gotowe przed weselem", "Zamawiasz z wyprzedzeniem — czas realizacji 2–3 tygodnie"],
              ["Wysyłka w tubie", "Portret dociera bezpiecznie — gotowy do oprawienia"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "#fdfaf6", border: "1px solid rgba(212,184,150,0.25)" }}
              >
                <span
                  className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  style={{ background: "rgba(212,184,150,0.25)", color: "#D4B896" }}
                >
                  ✓
                </span>
                <div>
                  <p className="text-sm font-medium text-dark" style={{ fontFamily: "var(--font-playfair)" }}>{title}</p>
                  <p className="text-xs text-muted mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak zamówić */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Proces zamówienia
          </p>
          <h2 className="text-3xl md:text-4xl text-dark mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Jak to działa?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <p
                  className="text-6xl mb-4 opacity-15"
                  style={{ fontFamily: "var(--font-playfair)", color: "#D4B896" }}
                >
                  {step.number}
                </p>
                <h3 className="text-lg text-dark mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formaty i ceny */}
      <section className="py-20 px-6" style={{ background: "#fdf6ed" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Formaty
          </p>
          <h2 className="text-3xl md:text-4xl text-dark mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Dostępne rozmiary
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f) => (
              <div
                key={f.name}
                className="rounded-2xl p-7"
                style={{ background: "#fdfaf6", border: "1px solid rgba(212,184,150,0.3)" }}
              >
                <h3 className="text-xl text-dark mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{f.name}</h3>
                <p className="text-sm text-muted mb-5 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.desc}</p>
                <p className="text-lg" style={{ fontFamily: "var(--font-playfair)", color: "#D4B896" }}>{f.price}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Ceny dotyczą portretu jednej lub dwóch osób. Przy większej liczbie osób na jednym portrecie — wycena indywidualna.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-cream">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Zamów portret<br />
            <span className="italic" style={{ color: "#D4B896" }}>przed swoim ślubem</span>
          </h2>
          <p className="text-muted text-sm mb-10 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Napisz do Aleksandry — podaj datę ślubu, format i prześlij zdjęcie. Razem ustalimy szczegóły i termin realizacji.
          </p>
          <a
            href="/#kontakt"
            className="inline-block px-12 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #D4B896, #E8C4B8)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
          >
            Zamów portret
          </a>
        </div>
      </section>
    </>
  );
}
