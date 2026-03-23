import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Portrety jako Winietki Weselne — Oryginalna Alternatywa | Ale się rysuje",
  description:
    "Mini akwarelowe portrety zamiast klasycznych winieztek — każdy gość ma swoje miejsce oznaczone własnym portrectem. Unikalna, ręcznie malowana pamiątka z wesela.",
  keywords: [
    "mini portrety wesele",
    "winietki z portretem",
    "oryginalne winietki ślubne",
    "portret jako winietka weselna",
    "mini portret akwarelowy wesele",
    "winietki akwarelowe",
    "oryginalne winietki wesele",
    "personalizowane winietki ślubne",
    "mini portret gościa weselnego",
    "pamiątka weselna portret",
  ],
  openGraph: {
    title: "Mini Portrety jako Winietki — Oryginalna Alternatywa dla Klasycznych Winietek",
    description:
      "Każdy gość siada przy stoliku oznaczonym własnym mini portretem. Malowane akwarelą, ze stemplem i datą — pamiątka i winietka w jednym.",
    url: "https://alesierysuje.pl/uslugi/mini-portrety",
  },
};

const features = [
  {
    title: "Każdy portret jest wyjątkowy",
    desc: "Aleksandra maluje każde mini-portrait indywidualnie — na podstawie zdjęcia gościa lub fotografii z Facebooka/Instagrama. Żadnych kopii.",
    accent: "#E8C4B8",
  },
  {
    title: "Winietka i pamiątka w jednym",
    desc: "Na mini portrecie jest imię gościa, data ślubu i — jeśli chcesz — stempel artystki. Gość zabiera winietkę do domu jako pamiątkę.",
    accent: "#D4B896",
  },
  {
    title: "Spójny z motywem wesela",
    desc: "Styl malowania, kolor tła i papier dobierane są do estetyki Waszego wesela. Rustykal, boho, klasyk — wszystko da się dopasować.",
    accent: "#B8D4E8",
  },
  {
    title: "Zamawiasz z wyprzedzeniem",
    desc: "Mini portrety malowane są przed weselem. Dostajesz je gotowe — w kopertkach lub bez, z imieniem na rewersie lub z przodu.",
    accent: "#2C3E35",
  },
];

const faqs = [
  {
    q: "Ile kosztują mini portrety jako winietki?",
    a: "Cena zależy od liczby gości. Orientacyjnie od 35–55 zł za portret przy zamówieniu 40+ szt. Napisz z liczbą gości — przygotujemy ofertę.",
  },
  {
    q: "Jakiego formatu są mini portrety?",
    a: "Standardowy format to ok. A6 (10×15 cm) lub A5 (15×21 cm). Możliwe też formaty kwadratowe lub w kształcie kart. Ustalamy przed zamówieniem.",
  },
  {
    q: "Skąd Aleksandra wie, jak wygląda każdy gość?",
    a: "Przesyłasz nam zdjęcia gości — może to być lista z imionami i zdjęciami z mediów społecznościowych, lub zdjęcia od Was. Im lepsze zdjęcie, tym bardziej podobny portret.",
  },
  {
    q: "Ile wcześniej trzeba zamówić?",
    a: "Przy 30–50 gościach potrzeba ok. 3–4 tygodnie. Przy większych zamówieniach — więcej. Najlepiej zaplanować z 6–8-tygodniowym wyprzedzeniem.",
  },
  {
    q: "Czy można połączyć mini portrety z live paintingiem na weselu?",
    a: "Tak — to popularna kombinacja. Goście mogą siedzieć przy stolikach ozdobionych mini portretami, a wieczorem Aleksandra maluje kolejne portrety na żywo.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mini Portrety jako Winietki Weselne",
  provider: {
    "@type": "Person",
    name: "Aleksandra Sienica",
    url: "https://alesierysuje.pl",
  },
  description:
    "Mini akwarelowe portrety gości weselnych jako oryginalne winietki. Malowane ręcznie przed weselem, na podstawie zdjęć.",
  areaServed: { "@type": "Country", name: "Polska" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "35",
    priceCurrency: "PLN",
    description: "Cena za jeden mini portret przy zamówieniu 40+ szt.",
  },
};

export default function MiniPortrety() {
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
            <span>Mini Portrety</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-14 md:py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Usługi &nbsp;·&nbsp; Winietki
          </p>
          <h1
            className="text-3xl md:text-6xl text-dark mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Mini Portrety<br />
            <span className="italic" style={{ color: "#E8C4B8" }}>jako Winietki</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed mb-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Wyobraź sobie, że każdy gość siada przy stoliku i zamiast kartki z imieniem
            — znajduje swój własny, ręcznie malowany akwarelowy portret. Winietka, którą
            nikt nie wyrzuci i każdy zabierze do domu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/kontakt"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E8C4B8, #D4B896)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
            >
              Zapytaj o wycenę
            </a>
            <a
              href="/uslugi/live-painting-wesele"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-rose-light"
              style={{ borderColor: "#E8C4B8", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
            >
              Live Painting na wesele
            </a>
          </div>
        </div>
      </section>

      {/* Jak to wygląda w praktyce */}
      <section className="py-14 md:py-20 px-6" style={{ background: "#fdf0ea" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Jak to działa
          </p>
          <h2 className="text-2xl md:text-4xl text-dark mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Mini portret zamiast winietki
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              ["Zamówienie", "Przesyłasz listę gości ze zdjęciami. Ustalamy format, styl, kolor tła i personalizację (imię, data, stempel)."],
              ["Malowanie", "Aleksandra maluje każdy portret osobno — akwarelą, na dobrym papierze. Czas realizacji: 3–6 tygodni."],
              ["Dostawa przed weselem", "Portrety dostarczamy w kopertkach lub bez. Kładziesz je przy talerzach — goście reagują zachwyceniem."],
            ].map(([title, desc], i) => (
              <div key={title}>
                <p
                  className="text-6xl mb-4 opacity-15"
                  style={{ fontFamily: "var(--font-playfair)", color: "#E8C4B8" }}
                >
                  0{i + 1}
                </p>
                <h3 className="text-lg text-dark mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h3>
                <p className="text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cechy */}
      <section className="py-14 md:py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Dlaczego warto
          </p>
          <h2 className="text-2xl md:text-4xl text-dark mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Co wyróżnia te winietki?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-7"
                style={{ background: "#fdfaf6", border: "1px solid rgba(0,0,0,0.05)" }}
              >
                <div className="w-8 h-1 rounded-full mb-5" style={{ background: f.accent }} />
                <h3 className="text-lg text-dark mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {f.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 px-6" style={{ background: "#fdf0ea" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            FAQ
          </p>
          <h2 className="text-2xl md:text-4xl text-dark mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Najczęstsze pytania
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl p-6"
                style={{ background: "#fdfaf6", border: "1px solid rgba(232,196,184,0.25)" }}
              >
                <h3 className="text-base text-dark mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {faq.q}
                </h3>
                <p className="text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 text-center bg-cream">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Zamów mini portrety<br />
            <span className="italic" style={{ color: "#E8C4B8" }}>na swoje wesele</span>
          </h2>
          <p className="text-muted text-sm mb-10 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Napisz liczbę gości i datę wesela — Aleksandra przygotuje ofertę i sprawdzi dostępność.
            Im wcześniej, tym spokojniej.
          </p>
          <a
            href="/kontakt"
            className="inline-block px-12 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #E8C4B8, #D4B896)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
          >
            Zapytaj o wycenę
          </a>
        </div>
      </section>
    </>
  );
}
