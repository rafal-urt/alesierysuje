import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Live painting w wykonaniu Aleksandry podczas eventu w Płocku był strzałem w dziesiątkę. Fajnie było zobaczyć, jak w kilkanaście minut powstaje ilustracja, która naprawdę oddaje charakter osoby lub pary. Super, że taka ilustracja zostaje z nami i z gośćmi na dłużej. To nie jest jednorazowa atrakcja, tylko realna pamiątka, do której chce się wracać. Widać dbałość o detale, jakość papieru i farb, a także ogromne zaangażowanie Aleksandry w to, co robi. Zdecydowanie polecam.",
    name: "Rafał",
    event: "Event, Płock — wrzesień 2025",
    accent: "#E8C4B8",
    source: "weselezklasa.pl",
  },
  {
    quote:
      "Z całego serca polecam współpracę z Panią Olą! Mieliśmy duży event firmowy na 120 osób i mogę śmiało powiedzieć, że jej obecność była jedną z najfajniejszych i najbardziej zapamiętanych części całego wydarzenia. Ola idealnie wpasowała się w klimat imprezy — dostosowała styl rysunków i papier do naszego motywu przewodniego. Jest osobą niezwykle ciepłą, otwartą i pełną pasji. Współpraca z nią to była czysta przyjemność — zero stresu, dużo uśmiechu i pełne zaufanie, że wszystko będzie pięknie.",
    name: "Kasia",
    event: "Event firmowy, 120 osób — sierpień 2025",
    accent: "#B8D4E8",
    source: "weselezklasa.pl",
  },
  {
    quote:
      "Aleksandra jest pełną pasji i zaangażowania profesjonalistką, a do tego przemiłą i otwartą na ustalenia czy rozmowy z Gośćmi osobą! W naszym przypadku była to impreza firmowa, gdzie zaskoczeniem dla pracowników i gości nie było tylko to, co Ola wykonała, lecz również włączenie live-paintingu do programu. Zdecydowanie polecam skorzystać z jej usług — choć nazwanie tego \"usługą\" nie jest adekwatne, bardziej pasuje \"zdolności i możliwości\".",
    name: "Adam",
    event: "Impreza firmowa — maj 2025",
    accent: "#D4B896",
    source: "weselezklasa.pl",
  },
  {
    quote:
      "Pani Olu, bardzo dziękujemy za wszystko, za przepiękne ilustracje, za ekspresowe ugaszenie pożaru! Odezwaliśmy się do Pani Oli chwilę przed walentynkami, gdyż inna artystka bez uprzedzenia odwołała malowanie. Pani Ola w 2 dni ogarnęła sytuację i finalnie namalowała prawie 30 ilustracji nas i naszych gości! Gdybym mogła, wystawiłabym 10 gwiazdek! Serdecznie polecam!",
    name: "Maria",
    event: "Walentynki, luty 2026",
    accent: "#2C3E35",
    source: "weselezklasa.pl",
  },
];

export default function Testimonials() {
  return (
    <section id="opinie" className="py-16 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Opinie
          </p>
          <h2
            className="text-3xl md:text-5xl text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Co mówią klienci
          </h2>
          <div className="brush-line mt-6" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div
                className="rounded-3xl p-8 md:p-10 h-full flex flex-col"
                style={{
                  background: "#fdfaf6",
                  border: "1px solid rgba(232,196,184,0.2)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.04)",
                }}
              >
                {/* Quote mark */}
                <div
                  className="text-8xl leading-none mb-4 select-none"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: t.accent,
                    opacity: 0.25,
                    lineHeight: 0.8,
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                <p
                  className="text-sm md:text-base leading-relaxed text-dark-soft flex-1 mb-8"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t.quote}
                </p>

                <div
                  className="pt-6 flex items-center justify-between gap-4"
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
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="11" height="11" viewBox="0 0 12 12" fill="#B06E5E" aria-hidden="true">
                          <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>weselezklasa.pl</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
