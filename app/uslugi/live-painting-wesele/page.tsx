import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Painting na Wesele — Akwarelowe Portrety Gości | alesierysuje",
  description:
    "Live painting na wesele — Aleksandra maluje akwarelowe portrety Twoich gości na żywo podczas przyjęcia. Pakiet Standard od 3 500 zł, Premium od 5 500 zł. Obsługujemy całą Polskę.",
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
      "Wyjątkowa atrakcja weselna: akwarelowe portrety gości malowane na żywo podczas przyjęcia. Pakiet Standard od 3 500 zł, Premium od 5 500 zł.",
    url: "https://alesierysuje.pl/uslugi/live-painting-wesele",
  },
};

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
    lowPrice: "3500",
    highPrice: "5500",
    priceCurrency: "PLN",
  },
};

const steps = [
  {
    n: "01",
    title: "Gość podchodzi do stolika",
    desc: "Aleksandra wita każdego z uśmiechem. Razem ustalają układ — portret solo, para, z gestem charakterystycznym dla danej osoby.",
  },
  {
    n: "02",
    title: "Malowanie — ok. 15 minut",
    desc: "W kilkanaście minut na papierze pojawia się akwarelowy portret. Goście mogą obserwować cały proces — to część atrakcji, która przyciąga kolejnych chętnych.",
  },
  {
    n: "03",
    title: "Portret prosto do rąk",
    desc: "Portret wysycha błyskawicznie. Aleksandra może dodać imię, datę ślubu lub pieczątkę. Gość zabiera go do domu jako pamiątkę z Waszego wesela.",
  },
];

const standardFeatures = [
  { text: "Do 20 portretów gości", highlight: false },
  { text: "Format A5 (148×210 mm)", highlight: false },
  { text: "Personalizacja: imię, data, pieczątka", highlight: false },
  { text: "Papier akwarelowy 300 g/m²", highlight: false },
  { text: "6–8 godzin obecności", highlight: false },
  { text: "Dojazd do 100 km od Warszawy", highlight: false },
];

const premiumFeatures = [
  { text: "Do 30 portretów gości", highlight: false },
  { text: "Format A5 (możliwy A4)", highlight: false },
  { text: "Personalizacja: imię, data, pieczątka", highlight: false },
  { text: "Papier akwarelowy 300 g/m²", highlight: false },
  { text: "ok. 8 godzin obecności", highlight: false },
  { text: "Portret Pary Młodej w prezencie", highlight: true },
  { text: "Portret świadków i rodziców", highlight: true },
  { text: "Dojazd do 200 km od Warszawy", highlight: false },
];

const faqs = [
  {
    q: "Ile portretów powstaje podczas wesela?",
    a: "W ciągu 6–8 godzin Aleksandra tworzy ok. 20–30 portretów. Tempo zależy od złożoności portretu i liczby osób na nim. W pakiecie Standard to do 20, w Premium — do 30 portretów.",
  },
  {
    q: "Jak długo trwa jeden portret?",
    a: "Jeden portret akwarelowy zajmuje ok. 12–18 minut. Sam proces malowania jest częścią atrakcji — goście chętnie obserwują, jak powstaje ich portret.",
  },
  {
    q: "Czy Aleksandra dojeżdża poza Warszawę?",
    a: "Tak, obsługujemy całą Polskę. W pakiecie Standard dojazd do 100 km od Warszawy jest w cenie, w pakiecie Premium — do 200 km. Dalszy dojazd wyceniamy indywidualnie.",
  },
  {
    q: "Jakie są materiały i format portretów?",
    a: "Portrety malowane są akwarelami na papierze akwarelowym 300 g/m². Standardowy format to A5 — w pakiecie Premium możliwy jest format A4. Wszystko do uzgodnienia przy rezerwacji.",
  },
  {
    q: "Kiedy najlepiej zarezerwować termin?",
    a: "Popularne terminy (maj–wrzesień) rezerwowane są z kilkumiesięcznym wyprzedzeniem. Im wcześniej, tym lepiej — wystarczy wstępny kontakt, żeby sprawdzić dostępność.",
  },
];

export default function LivePaintingWesele() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-16">

        {/* ─── HERO ─── */}
        <section className="py-16 md:py-24 px-6 bg-cream">
          <div className="max-w-5xl mx-auto">
            <nav
              className="flex items-center gap-2 text-xs text-muted mb-10"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <a href="/" className="hover:text-dark transition-colors">Strona główna</a>
              <span>/</span>
              <a href="/uslugi/live-painting-wesele" className="hover:text-dark transition-colors">Usługi</a>
              <span>/</span>
              <span>Live Painting na Wesele</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left */}
              <div>
                <p
                  className="text-xs tracking-[0.3em] uppercase text-muted mb-5"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Usługi &nbsp;·&nbsp; Wesele
                </p>
                <h1
                  className="text-4xl md:text-6xl text-dark leading-tight mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Live Painting<br />
                  <span className="italic" style={{ color: "#B06E5E" }}>na Wesele</span>
                </h1>
                <p
                  className="text-base text-muted leading-relaxed mb-10"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Twoi goście podczas przyjęcia weselnego mogą otrzymać coś, czego
                  żadna fotografia nie zastąpi — ręcznie malowany akwarelowy portret.
                  Aleksandra maluje każdego gościa na żywo. Każdy portret jest inny,
                  bo każdy człowiek jest inny.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/kontakt"
                    className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #E8C4B8, #D4B896)",
                      color: "#2C3E35",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    Zapytaj o termin
                  </a>
                  <a
                    href="#pakiety"
                    className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-rose-light"
                    style={{ borderColor: "#E8C4B8", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Zobacz pakiety
                  </a>
                </div>
              </div>

              {/* Right — trust card */}
              <div
                className="rounded-3xl p-8 md:p-10"
                style={{ background: "linear-gradient(160deg, #fdf6ed 0%, #fdfaf6 100%)", border: "1px solid rgba(176,110,94,0.2)" }}
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 12 12" fill="#B06E5E" aria-hidden="true">
                      <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z" />
                    </svg>
                  ))}
                  <span className="text-xs text-muted ml-2 self-center" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    weselezklasa.pl
                  </span>
                </div>
                <div className="space-y-4 mt-6">
                  {[
                    { val: "~15 min", label: "na jeden portret" },
                    { val: "20–30", label: "portretów podczas wesela" },
                    { val: "A5", label: "format standardowy" },
                    { val: "cała Polska", label: "zasięg działania" },
                  ].map(({ val, label }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-3"
                      style={{ borderBottom: "1px solid rgba(44,62,53,0.07)" }}
                    >
                      <span
                        className="text-base font-medium text-dark"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {val}
                      </span>
                      <span className="text-sm text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CZYM JEST ─── */}
        <section className="py-16 md:py-24 px-6" style={{ background: "#fdf0ea" }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-muted mb-5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                O usłudze
              </p>
              <h2
                className="text-2xl md:text-4xl text-dark mb-8 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Czym jest live painting na wesele?
              </h2>
              <div
                className="space-y-5 text-muted leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <p>
                  Live painting to atrakcja, podczas której Aleksandra tworzy portrety gości
                  <strong className="text-dark"> na żywo</strong>, przy ich stoliku lub przy
                  wyznaczonym stanowisku artystycznym. Każdy portret to unikalny, ręcznie malowany
                  akwarelowy obrazek — nie wydruk, nie zdjęcie z filtrem, ale prawdziwe dzieło sztuki.
                </p>
                <p>
                  Goście odchodzą nie tylko z portretem, ale też z{" "}
                  <strong className="text-dark">wspomnieniem wyjątkowego momentu</strong> — tego,
                  jak w kilkanaście minut na papierze pojawiała się ich twarz. Portrety lądują
                  w ramkach, na lodówkach, na biurkach. Zostają na lata.
                </p>
                <p>
                  To atrakcja, która działa na każdym weselu — niezależnie od stylu, liczby gości
                  i lokalizacji. Aleksandra dostosowuje się do motywu przewodniego przyjęcia,
                  stylu dekoracji i Waszych oczekiwań.
                </p>
              </div>
            </div>

            {/* Why list */}
            <div className="space-y-4 mt-2">
              {[
                {
                  title: "Każdy gość dostaje coś swojego",
                  desc: "Portret jest osobisty — nie ma dwóch takich samych. To różni live painting od każdej innej atrakcji weselnej.",
                },
                {
                  title: "Obserwowanie jest częścią atrakcji",
                  desc: "Goście gromadzą się wokół stolika, oglądają jak powstaje portret. To naturalny punkt, który ożywia przyjęcie.",
                },
                {
                  title: "Pamiątka, nie jednorazowe doznanie",
                  desc: "Portret nie zostaje w aplikacji ani nie trafi do śmietnika. To coś, co gość zabiera do domu i trzyma latami.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-6"
                  style={{ background: "#fdfaf6", border: "1px solid rgba(176,110,94,0.15)" }}
                >
                  <h3
                    className="text-sm font-medium text-dark mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── JAK TO DZIAŁA ─── */}
        <section className="py-16 md:py-24 px-6 bg-cream">
          <div className="max-w-5xl mx-auto">
            <p
              className="text-xs tracking-[0.3em] uppercase text-muted mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Proces
            </p>
            <h2
              className="text-2xl md:text-4xl text-dark mb-14"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Jak wygląda malowanie na żywo?
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((step) => (
                <div key={step.n}>
                  <p
                    className="text-7xl mb-5 select-none"
                    style={{ fontFamily: "var(--font-playfair)", color: "#B06E5E", opacity: 0.15, lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {step.n}
                  </p>
                  <h3
                    className="text-lg text-dark mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
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

        {/* ─── PAKIETY ─── */}
        <section id="pakiety" className="py-16 md:py-24 px-6" style={{ background: "#f5f0eb" }}>
          <div className="max-w-5xl mx-auto">
            <p
              className="text-xs tracking-[0.3em] uppercase text-muted mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Cennik
            </p>
            <h2
              className="text-2xl md:text-4xl text-dark mb-4 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Pakiety live paintingu na wesele
            </h2>
            <p
              className="text-sm text-muted leading-relaxed mb-14 max-w-xl"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Dwa pakiety dopasowane do różnych potrzeb — wybierz ten, który pasuje
              do Waszego wesela, albo napisz, żeby wspólnie ustalić szczegóły.
            </p>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">

              {/* Standard */}
              <div
                className="rounded-3xl p-8 md:p-10 flex flex-col"
                style={{
                  background: "#fdfaf6",
                  border: "1px solid rgba(176,110,94,0.25)",
                }}
              >
                <div className="w-10 h-1 rounded-full mb-7" style={{ background: "#E8C4B8" }} />
                <p
                  className="text-xs tracking-widest uppercase text-muted mb-2"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Standard
                </p>
                <p
                  className="text-4xl md:text-5xl text-dark mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  od 3 500 zł
                </p>
                <p
                  className="text-sm text-muted mb-8"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  6–8 godzin obecności
                </p>

                <ul className="space-y-3 flex-1 mb-10">
                  {standardFeatures.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-start gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <span
                        className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                        style={{ background: "rgba(176,110,94,0.12)", color: "#9B4A3A" }}
                      >
                        ✓
                      </span>
                      <span className="text-muted">{f.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/kontakt"
                  className="block text-center py-4 rounded-full text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-80 border"
                  style={{
                    borderColor: "#E8C4B8",
                    color: "#2C3E35",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Zapytaj o termin
                </a>
              </div>

              {/* Premium */}
              <div
                className="rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, #fdf6ed 0%, #fdfaf6 100%)",
                  border: "2px solid #D4B896",
                  boxShadow: "0 8px 40px rgba(212,184,150,0.18)",
                }}
              >
                {/* Badge */}
                <div
                  className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-xs tracking-widest uppercase"
                  style={{ background: "#D4B896", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
                >
                  Polecany
                </div>

                <div className="w-10 h-1 rounded-full mb-7" style={{ background: "#D4B896" }} />
                <p
                  className="text-xs tracking-widest uppercase text-muted mb-2"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Premium
                </p>
                <p
                  className="text-4xl md:text-5xl text-dark mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  od 5 500 zł
                </p>
                <p
                  className="text-sm text-muted mb-8"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  ok. 8 godzin obecności
                </p>

                <ul className="space-y-3 flex-1 mb-10">
                  {premiumFeatures.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-start gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <span
                        className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                        style={{
                          background: f.highlight ? "rgba(139,106,64,0.18)" : "rgba(139,106,64,0.1)",
                          color: "#8B6A40",
                        }}
                      >
                        ✓
                      </span>
                      <span
                        className={f.highlight ? "text-dark font-medium" : "text-muted"}
                      >
                        {f.text}
                        {f.highlight && (
                          <span
                            className="ml-1.5 text-xs"
                            style={{ color: "#8B6A40" }}
                          >
                            ✦
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/kontakt"
                  className="block text-center py-4 rounded-full text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-80"
                  style={{
                    background: "linear-gradient(135deg, #D4B896, #E8C4B8)",
                    color: "#2C3E35",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Zapytaj o termin
                </a>
              </div>
            </div>

            {/* Note */}
            <div
              className="rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ background: "#fdfaf6", border: "1px solid rgba(44,62,53,0.08)" }}
            >
              <p className="text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Potrzebujesz portretu grupowego, wysyłki pocztą lub dużego formatu?
                Dostępna jest też opcja{" "}
                <strong className="text-dark">VIP / Studio</strong> — wyceniamy indywidualnie.
              </p>
              <a
                href="/cennik"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70 shrink-0"
                style={{ fontFamily: "var(--font-dm-sans)", color: "#576e65" }}
              >
                Pełny cennik
                <svg width="14" height="7" viewBox="0 0 16 8" fill="none" aria-hidden="true">
                  <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ─── OPINIA ─── */}
        <section className="py-16 md:py-24 px-6 bg-cream">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="16" height="16" viewBox="0 0 12 12" fill="#B06E5E" aria-hidden="true">
                  <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z" />
                </svg>
              ))}
            </div>
            <p
              className="text-xl md:text-2xl text-dark-soft leading-relaxed mb-8 italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;Live painting w wykonaniu Aleksandry podczas eventu w Płocku był strzałem
              w dziesiątkę. Fajnie było zobaczyć, jak w kilkanaście minut powstaje ilustracja,
              która naprawdę oddaje charakter osoby lub pary. To nie jest jednorazowa atrakcja,
              tylko realna pamiątka, do której chce się wracać. Widać dbałość o detale, jakość
              papieru i farb, a także ogromne zaangażowanie w to, co robi.&rdquo;
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm font-medium text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                  Rafał
                </p>
                <p className="text-xs text-muted mt-0.5" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Event, Płock — wrzesień 2025 · weselezklasa.pl
                </p>
              </div>
              <a
                href="/opinie"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
                style={{ fontFamily: "var(--font-dm-sans)", color: "#B06E5E" }}
              >
                Wszystkie opinie
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
                  <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-16 md:py-24 px-6" style={{ background: "#fdf0ea" }}>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xs tracking-[0.3em] uppercase text-muted mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Pytania i odpowiedzi
            </p>
            <h2
              className="text-2xl md:text-4xl text-dark mb-12"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Najczęstsze pytania
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl p-7"
                  style={{ background: "#fdfaf6", border: "1px solid rgba(232,196,184,0.2)" }}
                >
                  <h3
                    className="text-base text-dark mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
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

        {/* ─── CTA ─── */}
        <section className="py-16 md:py-24 px-6 text-center" style={{ background: "#2C3E35" }}>
          <div className="max-w-2xl mx-auto">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(253,250,246,0.5)" }}
            >
              Zarezerwuj termin
            </p>
            <h2
              className="text-3xl md:text-5xl mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)", color: "#FDFAF6" }}
            >
              Zarezerwuj live painting<br />
              <span className="italic" style={{ color: "#E8C4B8" }}>na swoje wesele</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(253,250,246,0.65)" }}
            >
              Popularne terminy — szczególnie maj–wrzesień — znikają szybko.
              Napisz, żeby sprawdzić dostępność i omówić szczegóły pakietu.
              Odpowiadam w ciągu 24 godzin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-block px-12 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #E8C4B8, #D4B896)",
                  color: "#2C3E35",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Zapytaj o termin
              </a>
              <a
                href="/cennik"
                className="inline-block px-12 py-5 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-white/10"
                style={{
                  borderColor: "rgba(253,250,246,0.3)",
                  color: "#FDFAF6",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Pełny cennik
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
