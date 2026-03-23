import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Painting na Event Firmowy — Niezapomniana Atrakcja | Ale się rysuje",
  description:
    "Live painting na event firmowy — Aleksandra tworzy akwarelowe portrety pracowników i gości na żywo. Idealne na konferencje, team building, gale firmowe. Obsługujemy całą Polskę.",
  keywords: [
    "live painting event firmowy",
    "malowanie na żywo event firmowy",
    "atrakcja na event firmowy",
    "portret na konferencję",
    "live painting team building",
    "artystka event firmowy Warszawa",
    "live painting gala firmowa",
    "portret pracownika event",
    "atrakcja firmowa live painting",
    "live painting konferencja Polska",
  ],
  openGraph: {
    title: "Live Painting na Event Firmowy — Atrakcja, Która Zostaje",
    description:
      "Akwarelowe portrety pracowników i gości malowane na żywo. Idealna atrakcja na konferencje, team building i gale firmowe.",
    url: "https://alesierysuje.pl/uslugi/event-firmowy",
  },
};

const benefits = [
  {
    title: "Rozmowa i integracja",
    desc: "Stolik artystyczny przyciąga ludzi jak magnes. Goście zbierają się, rozmawiają, obserwują — naturalny pretekst do integracji.",
    accent: "#B8D4E8",
  },
  {
    title: "Pamiątka z bryzą marki",
    desc: "Na marginesie portretu można dodać logo firmy, hasło eventu lub datę. Portret zostaje na biurku długo po zakończeniu imprezy.",
    accent: "#E8C4B8",
  },
  {
    title: "Widowiskowość",
    desc: "Sam proces malowania robi wrażenie. Pracownicy chętnie to nagrywają i wrzucają do mediów społecznościowych — organiczne zasięgi.",
    accent: "#D4B896",
  },
  {
    title: "Elastyczność",
    desc: "Aleksandra dostosowuje styl portretów do charakteru eventu — może być bardziej realistycznie, bardziej abstrakcyjnie, z motywem firmowym.",
    accent: "#2C3E35",
  },
];

const useCases = [
  "Konferencje i szczyty branżowe",
  "Gale i ceremonie wręczenia nagród",
  "Eventy team-buildingowe",
  "Targi i stoiska wystawiennicze",
  "Imprezy integracyjne",
  "Pikniki firmowe i eventy plenerowe",
  "Jubileusze firmowe",
  "Launch produktu lub marki",
];

const faqs = [
  {
    q: "Dla ilu osób można zamówić live painting na event firmowy?",
    a: "Aleksandra obsłużyła eventy od kilkudziesięciu do 120+ osób. W ciągu 4–6 godzin powstaje 25–40 portretów. Dla większych grup można rozważyć dłuższy czas lub kilka sesji.",
  },
  {
    q: "Czy można dodać logo firmy na portretach?",
    a: "Tak — na marginesie każdego portretu można umieścić logo, hasło eventu, datę lub inne elementy brandingowe. Ustalamy szczegóły przed eventem.",
  },
  {
    q: "Jak wygląda logistyka — czego potrzebuje artystka?",
    a: "Wystarczy stolik, dobre oświetlenie i dostęp do wody. Aleksandra przyjeżdża ze wszystkim: papier, farby, pędzle, materiały. Zajmuje ok. 2–3 m² przestrzeni.",
  },
  {
    q: "Czy live painting pasuje do poważnych, korporacyjnych eventów?",
    a: "Zdecydowanie tak. Styl portretów można dostosować — Aleksandra maluje zarówno swobodne, artystyczne miniatury, jak i bardziej formalne, eleganckie portrety.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Live Painting na Event Firmowy",
  provider: {
    "@type": "Person",
    name: "Aleksandra Sienica",
    url: "https://alesierysuje.pl",
  },
  description:
    "Akwarelowe portrety pracowników i gości malowane na żywo podczas eventów firmowych. Idealne na konferencje, team building i gale.",
  areaServed: { "@type": "Country", name: "Polska" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "2200",
    highPrice: "5000",
    priceCurrency: "PLN",
  },
};

export default function EventFirmowy() {
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
            <span>Event Firmowy</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Usługi &nbsp;·&nbsp; Event Firmowy
          </p>
          <h1
            className="text-4xl md:text-6xl text-dark mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Live Painting<br />
            <span className="italic" style={{ color: "#B8D4E8" }}>na Event Firmowy</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed mb-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Atrakcja, która wyróżnia Twój event spośród dziesiątek innych. Aleksandra tworzy
            akwarelowe portrety pracowników i gości na żywo — pamiątka, którą ludzie faktycznie
            zaberają do domu i pokazują innym.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/kontakt"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #B8D4E8, #E8C4B8)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
            >
              Zapytaj o wycenę
            </a>
            <a
              href="/cennik"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-rose-light"
              style={{ borderColor: "#B8D4E8", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
            >
              Pakiety i cennik
            </a>
          </div>
        </div>
      </section>

      {/* Opinia */}
      <section className="py-16 px-6" style={{ background: "#eef5fa" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map(s => (
              <svg key={s} width="16" height="16" viewBox="0 0 12 12" fill="#B8D4E8">
                <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z"/>
              </svg>
            ))}
          </div>
          <p className="text-lg text-dark-soft italic leading-relaxed mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            &ldquo;Mieliśmy duży event firmowy na 120 osób i mogę śmiało powiedzieć, że jej obecność była
            jedną z najfajniejszych i najbardziej zapamiętanych części całego wydarzenia. Ola idealnie
            wpasowała się w klimat imprezy — dostosowała styl rysunków i papier do naszego motywu
            przewodniego. Współpraca z nią to była czysta przyjemność — zero stresu, dużo uśmiechu.&rdquo;
          </p>
          <p className="text-sm text-dark font-medium" style={{ fontFamily: "var(--font-playfair)" }}>Kasia</p>
          <p className="text-xs text-muted mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>Event firmowy, 120 osób — sierpień 2025 · weselezklasa.pl</p>
        </div>
      </section>

      {/* Korzyści */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Dlaczego warto
          </p>
          <h2 className="text-3xl md:text-4xl text-dark mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Co daje live painting na evencie?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-7"
                style={{ background: "#fdfaf6", border: "1px solid rgba(0,0,0,0.05)" }}
              >
                <div className="w-8 h-1 rounded-full mb-5" style={{ background: b.accent }} />
                <h3 className="text-lg text-dark mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {b.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gdzie pasuje */}
      <section className="py-20 px-6" style={{ background: "#eef5fa" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Zastosowania
          </p>
          <h2 className="text-3xl md:text-4xl text-dark mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Na jakich eventach sprawdzi się live painting?
          </h2>
          <div className="grid md:grid-cols-2 gap-3 max-w-2xl">
            {useCases.map((uc) => (
              <div key={uc} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#B8D4E8" }} />
                <span className="text-sm text-dark-soft" style={{ fontFamily: "var(--font-dm-sans)" }}>{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl text-dark mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Najczęstsze pytania
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl p-6"
                style={{ background: "#fdfaf6", border: "1px solid rgba(184,212,232,0.3)" }}
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
      <section className="py-24 px-6 text-center" style={{ background: "#eef5fa" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Zaplanuj live painting<br />
            <span className="italic" style={{ color: "#B8D4E8" }}>na swój event</span>
          </h2>
          <p className="text-muted text-sm mb-10 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Napisz o swoim evencie — Aleksandra przygotuje ofertę dopasowaną do liczby uczestników,
            lokalizacji i budżetu.
          </p>
          <a
            href="/kontakt"
            className="inline-block px-12 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #B8D4E8, #E8C4B8)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
          >
            Zapytaj o wycenę
          </a>
        </div>
      </section>
    </>
  );
}
