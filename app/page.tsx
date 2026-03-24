import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "alesierysuje — Live Painting Akwarelowy na Wesela i Eventy",
  description:
    "Aleksandra Sienica maluje akwarelowe portrety gości na żywo podczas wesela i eventów. Każdy gość odchodzi z unikalnym, ręcznie malowanym portretem — pamiątką na całe życie.",
  openGraph: {
    title: "alesierysuje — Live Painting Akwarelowy na Wesela i Eventy",
    url: "https://alesierysuje.pl",
    type: "website",
  },
};

const testimonials = [
  {
    name: "Rafał",
    context: "Event, Płock — wrzesień 2025",
    accentColor: "#B06E5E",
    text: "Live painting w wykonaniu Aleksandry podczas eventu w Płocku był strzałem w dziesiątkę. Fajnie było zobaczyć, jak w kilkanaście minut powstaje ilustracja, która naprawdę oddaje charakter osoby lub pary. To nie jest jednorazowa atrakcja, tylko realna pamiątka, do której chce się wracać. Widać dbałość o detale, jakość papieru i farb, a także ogromne zaangażowanie w to, co robi. Zdecydowanie polecam.",
  },
  {
    name: "Kasia",
    context: "Event firmowy, 120 osób — sierpień 2025",
    accentColor: "#4A7A9B",
    text: "Z całego serca polecam współpracę z Panią Olą! Mieliśmy duży event firmowy na 120 osób i mogę śmiało powiedzieć, że jej obecność była jedną z najfajniejszych i najbardziej zapamiętanych części całego wydarzenia. Ola idealnie wpasowała się w klimat imprezy. Jest osobą niezwykle ciepłą, otwartą i pełną pasji. Współpraca z nią to była czysta przyjemność — zero stresu, dużo uśmiechu i pełne zaufanie, że wszystko będzie pięknie.",
  },
  {
    name: "Adam",
    context: "Impreza firmowa — maj 2025",
    accentColor: "#8B6A40",
    text: "Aleksandra jest pełną pasji i zaangażowania profesjonalistką, a do tego przemiłą i otwartą na ustalenia czy rozmowy z gośćmi osobą. W naszym przypadku zaskoczeniem dla pracowników i gości nie było tylko to, co Ola wykonała, lecz również samo włączenie live-paintingu do programu. Zdecydowanie polecam skorzystać z jej usług.",
  },
  {
    name: "Maria",
    context: "Walentynki — luty 2026",
    accentColor: "#2C3E35",
    text: "Pani Olu, bardzo dziękujemy za wszystko, za przepiękne ilustracje, za ekspresowe ugaszenie pożaru! Odezwaliśmy się do Pani Oli chwilę przed walentynkami, gdyż inna artystka bez uprzedzenia odwołała malowanie. Pani Ola w 2 dni ogarnęła sytuację i finalnie namalowała prawie 30 ilustracji nas i naszych gości! Gdybym mogła, wystawiłabym 10 gwiazdek! Serdecznie polecam!",
  },
];

const services = [
  {
    href: "/uslugi/live-painting-wesele",
    title: "Live Painting na Wesele",
    desc: "Akwarelowe portrety gości malowane na żywo podczas przyjęcia. Do 20 portretów, 6–8 godzin, format A5.",
    price: "od 3 500 zł",
    accent: "#E8C4B8",
    linkColor: "#B06E5E",
    bg: "#fdf0ea",
    tag: "Najpopularniejsze",
  },
  {
    href: "/uslugi/event-firmowy",
    title: "Event Firmowy",
    desc: "Portret jako atrakcja integracyjna — przyciąga, rozluźnia, buduje atmosferę. Opcja brandingu.",
    price: "od 4 500 zł",
    accent: "#B8D4E8",
    linkColor: "#4A7A9B",
    bg: "#eef5fa",
    tag: null,
  },
  {
    href: "/uslugi/portrety-rodzicow",
    title: "Portrety Rodziców",
    desc: "Ręcznie malowany akwarelowy portret jako wyjątkowy prezent ślubny. Na podstawie Waszego zdjęcia.",
    price: "od 350 zł",
    accent: "#D4B896",
    linkColor: "#8B6A40",
    bg: "#fdf6ed",
    tag: null,
  },
  {
    href: "/uslugi/mini-portrety",
    title: "Mini Portrety — Winietki",
    desc: "Oryginalne winietki weselne — każdy gość zamiast kartki dostaje swój własny portret.",
    price: "wycena indywidualna",
    accent: "#2C3E35",
    linkColor: "#2C3E35",
    bg: "#f0f5f2",
    tag: null,
  },
];

const faqItems = [
  {
    q: "Czy goście muszą specjalnie pozować?",
    a: "Nie — wystarczy chwila przy stoliku. Aleksandra maluje szybko i naturalnie, a sam proces staje się częścią atrakcji. Goście często stoją i obserwują — i to im się podoba najbardziej.",
  },
  {
    q: "Ile portretów powstaje podczas eventu?",
    a: "Podczas wesela lub eventu trwającego 6–8 godzin powstaje ok. 20–30 portretów. Każdy zajmuje ok. 15 minut. Przy większych eventach możliwa jest rozszerzona opcja.",
  },
  {
    q: "Jak zarezerwować termin?",
    a: "Napisz do Aleksandry z datą i miejscem eventu. W ciągu 24 godzin dostaniesz odpowiedź z potwierdzeniem dostępności i propozycją pakietu. Zaliczka blokuje termin.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ─── 1. HERO ─── */}
      <section className="min-h-screen flex flex-col lg:flex-row overflow-hidden bg-cream">
        {/* Left: Text */}
        <div className="flex-1 flex items-center px-8 md:px-14 lg:px-20 py-28 lg:py-0">
          <div className="max-w-lg">
            <p
              className="hero-fade text-xs tracking-[0.28em] uppercase text-muted mb-8"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Live Painting &nbsp;·&nbsp; Akwarela &nbsp;·&nbsp; Wesela i Eventy
            </p>
            <h1
              className="hero-fade-delay text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.1] text-dark mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Twoi goście odejdą
              <br />
              <span className="italic" style={{ color: "#B06E5E" }}>z czymś więcej</span>
              <br />
              niż wspomnieniami
            </h1>
            <p
              className="hero-fade-delay-2 text-base md:text-lg text-muted mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Maluję akwarelowe portrety Twoich gości na żywo podczas przyjęcia.
              Każdy odchodzi z unikalnym, ręcznie stworzonym obrazkiem —
              pamiątką, którą będą trzymać latami.
            </p>
            <div className="hero-fade-delay-2 flex flex-col sm:flex-row gap-4">
              <a
                href="/kontakt"
                className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #E8C4B8 0%, #D4B896 100%)",
                  color: "#2C3E35",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Zapytaj o termin
              </a>
              <a
                href="/galeria"
                className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-rose-light"
                style={{ borderColor: "#E8C4B8", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
              >
                Zobacz prace
              </a>
            </div>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="relative w-full lg:w-[50%] xl:w-[52%] aspect-[4/3] lg:aspect-auto lg:min-h-screen">
          <Image
            src="/gfx/2150182600.jpg"
            alt="Warsztat artystyczny — farby akwarelowe, pędzle i papier"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 52vw"
            priority
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: "linear-gradient(to top, rgba(253,250,246,0.6) 0%, transparent 40%)" }}
          />
        </div>
      </section>

      {/* ─── 2. TRUST BAR ─── */}
      <section style={{ background: "#2C3E35" }}>
        <div className="max-w-5xl mx-auto px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {[
              { val: "5/5 ★", label: "ocena na weselezklasa.pl" },
              { val: "50+", label: "wesel i eventów" },
              { val: "1 000+", label: "namalowanych portretów" },
              { val: "cała Polska", label: "zasięg działania" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:px-8">
                <p
                  className="text-2xl md:text-3xl mb-1"
                  style={{ fontFamily: "var(--font-playfair)", color: "#E8C4B8" }}
                >
                  {stat.val}
                </p>
                <p
                  className="text-xs tracking-wide"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(253,250,246,0.55)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. PROBLEM → SOLUTION ─── */}
      <section className="py-16 md:py-28 px-6" style={{ background: "#fdf0ea" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase text-muted mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Dlaczego live painting
            </p>
            <h2
              className="text-3xl md:text-5xl text-dark leading-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Wesela mają wiele atrakcji.{" "}
              <span className="italic" style={{ color: "#B06E5E" }}>
                Żadna nie daje gościom czegoś namacalnego.
              </span>
            </h2>
            <div
              className="space-y-5 text-muted leading-relaxed text-sm"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <p>
                Fotobudka zostaje na serwisie, kwiaty więdną, baloniki znikają.
                Live painting to jedyna atrakcja weselna, z której każdy gość{" "}
                <strong className="text-dark">wychodzi z czymś w rękach</strong> —
                unikalnym, ręcznie malowanym portretem.
              </p>
              <p>
                Akwarela ma w sobie coś, czego nie zastąpi żaden wydruk ani
                filtr: transparentność, ciepło, nieuchronność każdego
                pociągnięcia pędzla. Każdy portret jest inny, bo każdy człowiek
                jest inny.
              </p>
              <p>
                To nie jest atrakcja, którą ogląda się z daleka. To
                doświadczenie, które każdy gość przeżywa osobiście — i o którym
                opowiada miesiącami.
              </p>
            </div>
          </div>

          {/* Visual — photo of guests receiving portraits */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <Image
              src="/gfx/224893_14.webp"
              alt="Goście odbierający akwarelowe portrety podczas wesela"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ─── 4. JAK TO DZIAŁA ─── */}
      <section className="py-16 md:py-28 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Proces
            </p>
            <h2
              className="text-3xl md:text-5xl text-dark"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Jak to wygląda w praktyce?
            </h2>
            <div className="brush-line mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                n: "01",
                title: "Rezerwacja i ustalenie szczegółów",
                desc: "Piszesz z datą i miejscem eventu. Rozmawiamy o tym, ile gości, jaki styl, co chcesz osiągnąć. Potwierdzam dostępność i przygotowuję ofertę. Zaliczka blokuje termin.",
              },
              {
                n: "02",
                title: "Stolik artystyczny na evencie",
                desc: "Przyjeżdżam z wyprzedzeniem i ustawiam estetyczny stolik z farbami. Goście podchodzą, pozują przez chwilę — ja maluję. Sam proces jest widowiskiem, które przyciąga kolejnych chętnych.",
              },
              {
                n: "03",
                title: "Portret prosto do rąk gościa",
                desc: "Gotowy portret trafia bezpośrednio do gościa. Możliwa personalizacja: imię, data, dedykacja, pieczątka artystyczna. Każdy odchodzi z czymś wyjątkowym.",
              },
            ].map((step) => (
              <div key={step.n} className="relative">
                <p
                  className="text-7xl mb-5 opacity-15 select-none"
                  style={{ fontFamily: "var(--font-playfair)", color: "#B06E5E" }}
                  aria-hidden="true"
                >
                  {step.n}
                </p>
                <h3
                  className="text-lg text-dark mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4b. PHOTO STRIP ─── */}
      <section className="bg-cream px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <Image
              src="/gfx/224893_4.webp"
              alt="Aleksandra Sienica maluje portrety na żywo podczas wesela plenerowego"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <Image
              src="/gfx/224893_24.webp"
              alt="Stolik artystyczny Aleksandry podczas eventu firmowego Hexeline"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ─── 5. OPINIE ─── */}
      <section className="py-16 md:py-28 px-6" style={{ background: "#f5f0eb" }}>
        <div className="max-w-6xl mx-auto">

          {/* Intro — split layout */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-end mb-16 md:mb-20">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-muted mb-5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Co mówią klienci
              </p>
              <h2
                className="text-3xl md:text-5xl text-dark leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Nie musisz mi{" "}
                <span className="italic" style={{ color: "#B06E5E" }}>
                  wierzyć na słowo
                </span>
              </h2>
              <p
                className="text-sm text-muted leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Wszystkie opinie są prawdziwe i zweryfikowane przez serwis
                weselezklasa.pl — platformę, na której pary weselne i organizatorzy
                eventów oceniają usługodawców po zakończonym wydarzeniu.
                Żadna nie jest anonimowa.
              </p>
            </div>

            {/* Aggregate badge */}
            <div
              className="rounded-2xl px-8 py-7 flex items-center gap-6"
              style={{ background: "#fdfaf6", border: "1px solid rgba(176,110,94,0.2)" }}
            >
              <div
                className="text-5xl leading-none shrink-0"
                style={{ fontFamily: "var(--font-playfair)", color: "#B06E5E" }}
                aria-hidden="true"
              >
                5/5
              </div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 12 12" fill="#B06E5E" aria-hidden="true">
                      <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="text-sm text-dark font-medium mb-0.5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  100% klientów poleca
                </p>
                <p
                  className="text-xs text-muted"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Wszystkie oceny na weselezklasa.pl
                </p>
              </div>
            </div>
          </div>

          {/* Cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl p-8 md:p-10 flex flex-col"
                style={{
                  background: "#fdfaf6",
                  border: "1px solid rgba(232,196,184,0.2)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.04)",
                }}
              >
                {/* Decorative quote mark */}
                <div
                  className="text-7xl leading-none mb-5 select-none"
                  style={{ fontFamily: "var(--font-playfair)", color: t.accentColor, opacity: 0.35 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Quote */}
                <p
                  className="text-sm md:text-base text-dark-soft leading-relaxed flex-1 mb-8"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t.text}
                </p>

                {/* Author */}
                <div
                  className="pt-6 flex items-center justify-between gap-4"
                  style={{ borderTop: `1px solid rgba(44,62,53,0.08)` }}
                >
                  <div>
                    <p
                      className="text-sm font-medium text-dark mb-0.5"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs text-muted"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {t.context}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width="11" height="11" viewBox="0 0 12 12" fill="#B06E5E" aria-hidden="true">
                          <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z" />
                        </svg>
                      ))}
                    </div>
                    <span
                      className="text-xs text-muted"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      weselezklasa.pl
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link */}
          <div className="text-center">
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

      {/* ─── 6. USŁUGI ─── */}
      <section className="py-16 md:py-28 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Co oferuję
            </p>
            <h2
              className="text-3xl md:text-5xl text-dark"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Pakiety i usługi
            </h2>
            <div className="brush-line mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="group rounded-3xl p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: s.bg,
                  border: s.tag ? `1.5px solid ${s.accent}` : "1px solid rgba(0,0,0,0.05)",
                  boxShadow: s.tag ? "0 8px 32px rgba(176,110,94,0.12)" : undefined,
                }}
              >
                {s.tag && (
                  <div
                    className="absolute top-0 right-0 px-3 py-1 rounded-bl-2xl text-xs tracking-widest uppercase"
                    style={{ background: s.accent, color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {s.tag}
                  </div>
                )}
                <div className="w-8 h-1 rounded-full mb-5" style={{ background: s.accent }} />
                <h3
                  className="text-lg text-dark mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-muted leading-relaxed flex-1 mb-4"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {s.desc}
                </p>
                <p
                  className="text-base font-medium text-dark mb-5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.price}
                </p>
                <div
                  className="flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)", color: s.linkColor }}
                >
                  Dowiedz się więcej
                  <svg
                    width="16"
                    height="8"
                    viewBox="0 0 16 8"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/cennik"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#576e65" }}
            >
              Pełny cennik i porównanie pakietów
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
                <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 7. SCARCITY ─── */}
      <section
        className="py-12 md:py-16 px-6"
        style={{ background: "linear-gradient(135deg, #fdf0ea 0%, #f5f0eb 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-8"
            style={{ background: "#fdfaf6", border: "1px solid rgba(176,110,94,0.25)" }}
          >
            <div className="flex-1">
              <p
                className="text-xs tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-dm-sans)", color: "#B06E5E" }}
              >
                Dostępność terminów
              </p>
              <h3
                className="text-xl md:text-2xl text-dark mb-3 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Sezon ślubny 2026 zapełnia się szybko
              </h3>
              <p
                className="text-sm text-muted leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Szczególnie terminy majowe, czerwcowe i wrześniowe są rezerwowane
                z dużym wyprzedzeniem. Im wcześniej napiszesz, tym większy wybór dat.
              </p>
            </div>
            <a
              href="/kontakt"
              className="shrink-0 inline-block px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #E8C4B8, #D4B896)",
                color: "#2C3E35",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Sprawdź dostępność
            </a>
          </div>
        </div>
      </section>

      {/* ─── 8. MINI FAQ ─── */}
      <section className="py-16 md:py-28 px-6" style={{ background: "#f5f0eb" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Najczęstsze pytania
            </p>
            <h2
              className="text-3xl md:text-4xl text-dark"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Masz wątpliwości?
            </h2>
            <div className="brush-line mt-6" />
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl px-7 py-6"
                style={{ background: "#fdfaf6", border: "1px solid rgba(232,196,184,0.2)" }}
              >
                <h3
                  className="text-base text-dark mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.q}
                </h3>
                <p
                  className="text-sm text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/faq"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#576e65" }}
            >
              Pełne FAQ
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
                <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── 9. FINAL CTA ─── */}
      <section className="py-16 md:py-28 px-6 text-center" style={{ background: "#2C3E35" }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} width="18" height="18" viewBox="0 0 12 12" fill="#E8C4B8" aria-hidden="true">
                <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z" />
              </svg>
            ))}
          </div>
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
            Zróbmy razem coś
            <br />
            <span className="italic" style={{ color: "#E8C4B8" }}>niezapomnianego</span>
          </h2>
          <p
            className="text-sm leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(253,250,246,0.65)" }}
          >
            Napisz do mnie — opowiedz o swoim evencie, a w ciągu 24 godzin
            dostaniesz odpowiedź z potwierdzeniem dostępności i propozycją pakietu.
            Popularne terminy rezerwowane są z dużym wyprzedzeniem.
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
              href="/galeria"
              className="inline-block px-12 py-5 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-white/10"
              style={{
                borderColor: "rgba(253,250,246,0.3)",
                color: "#FDFAF6",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Zobacz galerie prac
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
