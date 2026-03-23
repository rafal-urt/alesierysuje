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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120}>
              <div
                className="rounded-3xl p-8 h-full flex flex-col"
                style={{
                  background: "#fdfaf6",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.04)",
                }}
              >
                {/* Quote mark */}
                <div
                  className="text-6xl leading-none mb-4"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: t.accent,
                    opacity: 0.5,
                  }}
                >
                  &ldquo;
                </div>

                <p
                  className="text-sm leading-relaxed text-dark-soft flex-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {t.quote}
                </p>

                <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${t.accent}40` }}>
                  <div className="flex items-center gap-0.5 mb-2">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#E8C4B8">
                        <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z"/>
                      </svg>
                    ))}
                    <span className="text-xs text-muted ml-1" style={{ fontFamily: "var(--font-dm-sans)" }}>weselezklasa.pl</span>
                  </div>
                  <p
                    className="text-sm font-medium text-dark"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-muted mt-1"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t.event}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
