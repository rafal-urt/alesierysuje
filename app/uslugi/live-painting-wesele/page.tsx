import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Painting na Wesele — Akwarelowe Portrety Gości | Ale się rysuje",
  description:
    "Live painting na wesele — Aleksandra maluje akwarelowe portrety Twoich gości na żywo podczas przyjęcia. Każdy gość odchodzi z unikalną, ręcznie malowaną pamiątką. Obsługujemy całą Polskę.",
  keywords: [
    "live painting wesele",
    "malowanie na żywo wesele",
    "portrecistka weselna Warszawa",
    "akwarelowe portrety na wesele",
    "atrakcja weselna live painting",
    "portret gości weselnych akwarela",
    "live painting wesele Polska",
    "malowanie portretów wesele",
    "portrecistka akwarelowa wesele",
    "pamiątka weselna portret",
  ],
  openGraph: {
    title: "Live Painting na Wesele — Akwarelowe Portrety Gości na Żywo",
    description:
      "Wyjątkowa atrakcja weselna: akwarelowe portrety gości malowane na żywo podczas przyjęcia. Obsługujemy całą Polskę.",
    url: "https://alesierysuje.pl/uslugi/live-painting-wesele",
  },
};

const steps = [
  {
    number: "01",
    title: "Gość podchodzi do stolika",
    desc: "Aleksandra wita każdego z uśmiechem. Razem ustalają układ — portret solo, para, z gestem charakterystycznym dla danej osoby.",
  },
  {
    number: "02",
    title: "Malowanie — ok. 15 minut",
    desc: "W kilkanaście minut na papierze pojawia się akwarelowy portret. Goście mogą obserwować cały proces — to część atrakcji.",
  },
  {
    number: "03",
    title: "Portret gotowy do zabrania",
    desc: "Portret wysycha błyskawicznie. Aleksandra może dodać imię, datę lub pieczątkę. Gość zabiera go do domu jako pamiątkę.",
  },
];

const included = [
  "Akwarelowe portrety gości — format A4 lub A5",
  "Portret Pary Młodej w prezencie (pakiet Premium)",
  "Personalizacja: imię, data ślubu, dedykacja",
  "Pieczątka artystki na każdym portrecie",
  "Wysokiej jakości papier akwarelowy",
  "Dojazd na terenie całej Polski",
];

const faqs = [
  {
    q: "Ile portretów powstaje podczas wesela?",
    a: "W ciągu 4 godzin Aleksandra tworzy ok. 25 portretów, w ciągu 6 godzin — ok. 40. Tempo zależy od złożoności portretu i liczby osób na nim.",
  },
  {
    q: "Jak długo trwa jeden portret?",
    a: "Jeden portret akwarelowy zajmuje ok. 12–18 minut. Sam proces malowania jest częścią atrakcji — goście chętnie obserwują, jak powstaje ich portret.",
  },
  {
    q: "Czy Aleksandra dojeżdża poza Warszawę?",
    a: "Tak, obsługujemy całą Polskę. Koszt dojazdu ustalamy indywidualnie — w promieniu 100 km od Warszawy często jest wliczony w cenę pakietu.",
  },
  {
    q: "Jakie są materiały i format portretów?",
    a: "Portrety malowane są akwarelami na papierze akwarelowym wysokiej jakości (300 g/m²). Format standardowy to A5 lub A4 — do uzgodnienia przy rezerwacji.",
  },
  {
    q: "Kiedy najlepiej zarezerwować termin?",
    a: "Popularne terminy (szczególnie maj–wrzesień) rezerwowane są z kilkumiesięcznym wyprzedzeniem. Im wcześniej, tym lepiej — wystarczy wstępny kontakt.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Live Painting na Wesele",
  provider: {
    "@type": "Person",
    name: "Aleksandra Sienica",
    url: "https://alesierysuje.pl",
  },
  description:
    "Akwarelowe portrety gości malowane na żywo podczas wesela. Wyjątkowa atrakcja weselna — każdy gość odchodzi z unikalnym portretem.",
  areaServed: { "@type": "Country", name: "Polska" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "1800",
    highPrice: "4500",
    priceCurrency: "PLN",
  },
};

export default function LivePaintingWesele() {
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
            <span>Live Painting na Wesele</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Usługi &nbsp;·&nbsp; Wesele
          </p>
          <h1
            className="text-4xl md:text-6xl text-dark mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Live Painting<br />
            <span className="italic" style={{ color: "#E8C4B8" }}>na Wesele</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed mb-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Twoi goście podczas przyjęcia weselnego mogą otrzymać coś, czego żadna fotografia
            nie zastąpi — ręcznie malowany akwarelowy portret. Aleksandra maluje każdego gościa
            na żywo, a cały proces zajmuje ok. 15 minut i sam w sobie jest widowiskiem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/#kontakt"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E8C4B8, #D4B896)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
            >
              Zapytaj o termin
            </a>
            <a
              href="/#pakiety"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-rose-light"
              style={{ borderColor: "#E8C4B8", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
            >
              Zobacz pakiety
            </a>
          </div>
        </div>
      </section>

      {/* Czym jest */}
      <section className="py-20 px-6" style={{ background: "#fdf0ea" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              O usłudze
            </p>
            <h2 className="text-3xl md:text-4xl text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Czym jest live painting na wesele?
            </h2>
            <div className="space-y-4 text-muted leading-relaxed text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
              <p>
                Live painting to atrakcja, podczas której artystka tworzy portrety gości
                <strong className="text-dark"> na żywo</strong>, przy ich stoliku lub przy
                wyznaczonym stanowisku artystycznym. Każdy portret to unikalny, ręcznie malowany
                akwarelowy obrazek — nie wydruk, nie zdjęcie z filtrem, ale prawdziwe dzieło sztuki.
              </p>
              <p>
                Goście odchodzą nie tylko z portretem, ale też z <strong className="text-dark">wspomnieniem
                wyjątkowego momentu</strong> — tego, jak w kilkanaście minut na papierze pojawiała się
                ich twarz. Portrety lądują w ramkach, na lodówkach, na biurkach. Zostają na lata.
              </p>
              <p>
                To atrakcja, która działa na każdym weselu — niezależnie od stylu, liczby gości
                i lokalizacji. Aleksandra dostosowuje się do motywu przewodniego przyjęcia,
                stylu dekoracji i Waszych oczekiwań.
              </p>
            </div>
          </div>
          <div
            className="rounded-3xl p-10 text-center"
            style={{ background: "#fdfaf6", border: "1px solid rgba(232,196,184,0.3)" }}
          >
            <p className="text-6xl mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#E8C4B8" }}>4.9</p>
            <p className="text-sm text-muted mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>Średnia ocena na weselezklasa.pl</p>
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="18" height="18" viewBox="0 0 12 12" fill="#E8C4B8">
                  <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z"/>
                </svg>
              ))}
            </div>
            <div className="space-y-3 text-left">
              {[
                ["~15 min", "czas na jeden portret"],
                ["100%", "klientów poleca"],
                ["cała Polska", "zasięg działania"],
              ].map(([val, label]) => (
                <div key={label} className="flex justify-between items-center text-sm">
                  <span className="text-dark font-medium" style={{ fontFamily: "var(--font-playfair)" }}>{val}</span>
                  <span className="text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jak to działa */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Proces
          </p>
          <h2 className="text-3xl md:text-4xl text-dark mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Jak to działa?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <p
                  className="text-6xl mb-4 opacity-15"
                  style={{ fontFamily: "var(--font-playfair)", color: "#E8C4B8" }}
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

      {/* Co obejmuje */}
      <section className="py-20 px-6" style={{ background: "#fdf0ea" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Zakres usługi
          </p>
          <h2 className="text-3xl md:text-4xl text-dark mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Co otrzymujesz?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  style={{ background: "rgba(232,196,184,0.3)", color: "#E8C4B8" }}
                >
                  ✓
                </span>
                <span className="text-sm text-dark-soft" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {item}
                </span>
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
      <section className="py-24 px-6 text-center" style={{ background: "#fdf0ea" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-dark mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Zarezerwuj live painting<br />
            <span className="italic" style={{ color: "#E8C4B8" }}>na swoje wesele</span>
          </h2>
          <p className="text-muted text-sm mb-10 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Popularne terminy znikają szybko — szczególnie w sezonie ślubnym (maj–wrzesień).
            Napisz, żeby sprawdzić dostępność i omówić szczegóły.
          </p>
          <a
            href="/#kontakt"
            className="inline-block px-12 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #E8C4B8, #D4B896)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
          >
            Zapytaj o termin
          </a>
        </div>
      </section>
    </>
  );
}
