import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opinie Klientów — Wesela i Eventy | alesierysuje",
  description:
    "Prawdziwe, zweryfikowane opinie klientów z weselezklasa.pl. Sprawdź, co mówią osoby, które wybrały live painting na swoje wesele lub event firmowy.",
  openGraph: {
    title: "Opinie klientów — alesierysuje",
    url: "https://alesierysuje.pl/opinie",
  },
};

const testimonials = [
  {
    name: "Kasia",
    event: "Event firmowy, 120 osób — sierpień 2025",
    type: "Event firmowy",
    accentColor: "#4A7A9B",
    quote:
      "Z całego serca polecam współpracę z Panią Olą! Mieliśmy duży event firmowy na 120 osób i mogę śmiało powiedzieć, że jej obecność była jedną z najfajniejszych i najbardziej zapamiętanych części całego wydarzenia. Ola idealnie wpasowała się w klimat imprezy — dostosowała styl rysunków i papier do naszego motywu przewodniego. Jest osobą niezwykle ciepłą, otwartą i pełną pasji. Współpraca z nią to była czysta przyjemność — zero stresu, dużo uśmiechu i pełne zaufanie, że wszystko będzie pięknie.",
  },
  {
    name: "Rafał",
    event: "Event, Płock — wrzesień 2025",
    type: "Event",
    accentColor: "#B06E5E",
    quote:
      "Live painting w wykonaniu Aleksandry podczas eventu w Płocku był strzałem w dziesiątkę. Fajnie było zobaczyć, jak w kilkanaście minut powstaje ilustracja, która naprawdę oddaje charakter osoby lub pary. Super, że taka ilustracja zostaje z nami i z gośćmi na dłużej. To nie jest jednorazowa atrakcja, tylko realna pamiątka, do której chce się wracać. Widać dbałość o detale, jakość papieru i farb, a także ogromne zaangażowanie Aleksandry w to, co robi. Zdecydowanie polecam.",
  },
  {
    name: "Adam",
    event: "Impreza firmowa — maj 2025",
    type: "Event firmowy",
    accentColor: "#8B6A40",
    quote:
      "Aleksandra jest pełną pasji i zaangażowania profesjonalistką, a do tego przemiłą i otwartą na ustalenia czy rozmowy z gośćmi osobą. W naszym przypadku była to impreza firmowa, gdzie zaskoczeniem dla pracowników i gości nie było tylko to, co Ola wykonała, lecz również włączenie live-paintingu do programu. Zdecydowanie polecam skorzystać z jej usług — choć nazwanie tego \u201Eusług\u0105\u201D nie jest adekwatne, bardziej pasuje \u201Ezdolności i możliwości\u201D.",
  },
  {
    name: "Maria",
    event: "Walentynki — luty 2026",
    type: "Impreza prywatna",
    accentColor: "#2C3E35",
    quote:
      "Pani Olu, bardzo dziękujemy za wszystko, za przepiękne ilustracje, za ekspresowe ugaszenie pożaru! Odezwaliśmy się do Pani Oli chwilę przed walentynkami, gdyż inna artystka bez uprzedzenia odwołała malowanie. Pani Ola w 2 dni ogarnęła sytuację i finalnie namalowała prawie 30 ilustracji nas i naszych gości! Gdybym mogła, wystawiłabym 10 gwiazdek! Serdecznie polecam!",
  },
];

function Stars({ color = "#B06E5E", size = 14 }: { color?: string; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label="Ocena 5 na 5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 12 12" fill={color} aria-hidden="true">
          <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z" />
        </svg>
      ))}
    </div>
  );
}

export default function OpiniePage() {
  return (
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
            <span>Opinie</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left — text */}
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-muted mb-5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Zweryfikowane opinie
              </p>
              <h1
                className="text-4xl md:text-6xl text-dark leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Co mówią{" "}
                <span className="italic" style={{ color: "#8B6A40" }}>klienci</span>
              </h1>
              <p
                className="text-sm text-muted leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Wszystkie opinie są prawdziwe i zweryfikowane przez{" "}
                <a
                  href="https://www.weselezklasa.pl/ogloszenia-weselne/alesierysuje-aleksandra-sienica,60334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-dark transition-colors"
                >
                  weselezklasa.pl
                </a>{" "}
                — platformę, na której pary i organizatorzy eventów oceniają
                usługodawców po zakończonym wydarzeniu. Żadna nie jest anonimowa.
              </p>

              {/* Stats row */}
              <div
                className="flex flex-wrap gap-4"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {[
                  { val: "5 / 5", label: "średnia ocena" },
                  { val: "4", label: "opinie" },
                  { val: "100%", label: "klientów poleca" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl px-5 py-3"
                    style={{ background: "#fdfaf6", border: "1px solid rgba(176,110,94,0.2)" }}
                  >
                    <span
                      className="text-base font-medium text-dark mr-1.5"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {s.val}
                    </span>
                    <span className="text-xs text-muted">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — aggregate card */}
            <div
              className="rounded-3xl p-10 flex flex-col items-center text-center"
              style={{
                background: "linear-gradient(160deg, #fdf6ed 0%, #fdfaf6 100%)",
                border: "1px solid rgba(139,106,64,0.2)",
              }}
            >
              <Stars color="#B06E5E" size={22} />
              <p
                className="text-6xl mt-6 mb-2"
                style={{ fontFamily: "var(--font-playfair)", color: "#2C3E35" }}
              >
                5/5
              </p>
              <p
                className="text-sm text-muted mb-8"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Wszystkie oceny na weselezklasa.pl
              </p>
              <div
                className="w-full pt-6 space-y-3"
                style={{ borderTop: "1px solid rgba(44,62,53,0.08)" }}
              >
                {[
                  ["Wesela", "5/5"],
                  ["Eventy firmowe", "5/5"],
                  ["Imprezy prywatne", "5/5"],
                ].map(([cat, score]) => (
                  <div key={cat} className="flex items-center justify-between text-sm">
                    <span className="text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {cat}
                    </span>
                    <span
                      className="font-medium text-dark"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPINIE ─── */}
      <section className="py-16 md:py-24 px-6" style={{ background: "#f5f0eb" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="rounded-3xl p-8 md:p-10 flex flex-col"
                style={{
                  background: "#fdfaf6",
                  border: "1px solid rgba(232,196,184,0.2)",
                  boxShadow: "0 4px 40px rgba(0,0,0,0.04)",
                }}
              >
                {/* Type tag */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: `${t.accentColor}18`,
                      color: t.accentColor,
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {t.type}
                  </span>
                  <Stars color="#B06E5E" size={13} />
                </div>

                {/* Decorative quote mark */}
                <div
                  className="text-8xl leading-none mb-4 select-none"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: t.accentColor,
                    opacity: 0.25,
                    lineHeight: 0.8,
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Quote */}
                <p
                  className="text-sm md:text-base text-dark-soft leading-relaxed flex-1 mb-8"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div
                  className="flex items-center justify-between gap-4 pt-6"
                  style={{ borderTop: "1px solid rgba(44,62,53,0.07)" }}
                >
                  <div>
                    <p
                      className="text-sm font-medium text-dark"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs text-muted mt-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {t.event}
                    </p>
                  </div>
                  <span
                    className="text-xs text-muted shrink-0"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    weselezklasa.pl
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOURCE NOTE ─── */}
      <section className="py-10 px-6 bg-cream">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p
            className="text-xs text-muted leading-relaxed max-w-lg"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Wszystkie powyższe opinie są autentyczne i pochodzą z serwisu weselezklasa.pl.
            Możesz je zweryfikować bezpośrednio na profilu artystki.
          </p>
          <a
            href="https://www.weselezklasa.pl/ogloszenia-weselne/alesierysuje-aleksandra-sienica,60334/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70 shrink-0"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#576e65" }}
          >
            Profil na weselezklasa.pl
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-24 px-6 text-center" style={{ background: "#2C3E35" }}>
        <div className="max-w-xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(253,250,246,0.5)" }}
          >
            Twoja kolej
          </p>
          <h2
            className="text-3xl md:text-4xl mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#FDFAF6" }}
          >
            Dołącz do grona{" "}
            <span className="italic" style={{ color: "#E8C4B8" }}>
              zadowolonych klientów
            </span>
          </h2>
          <p
            className="text-sm leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(253,250,246,0.65)" }}
          >
            Napisz do Aleksandry — opowiedz o swoim evencie, a w ciągu 24 godzin
            dostaniesz odpowiedź z potwierdzeniem dostępności i propozycją pakietu.
          </p>
          <a
            href="/kontakt"
            className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #E8C4B8, #D4B896)",
              color: "#2C3E35",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Zapytaj o termin
          </a>
        </div>
      </section>
    </main>
  );
}
