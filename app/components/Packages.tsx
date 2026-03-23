import ScrollReveal from "./ScrollReveal";

const packages = [
  {
    name: "Wesele Standard",
    price: "od 3 500 zł",
    duration: "6–8 godzin",
    accent: "#E8C4B8",
    bg: "#fdf0ea",
    features: [
      "Do 20 portretów gości",
      "Format A5 (148×210 mm)",
      "Akwarelowy portret na miejscu",
      "Portret wręczany na miejscu",
      "Podróż do 100 km od Warszawy",
    ],
    highlight: false,
  },
  {
    name: "Wesele Premium",
    price: "od 5 500 zł",
    duration: "ok. 8 godzin",
    accent: "#D4B896",
    bg: "#fdf6ed",
    features: [
      "Do 30 portretów gości",
      "Format A5 (148×210 mm)",
      "Dopracowany portret akwarelowy",
      "Portret Pary Młodej w prezencie",
      "Portret świadków i rodziców",
      "Podróż do 200 km od Warszawy",
    ],
    highlight: true,
  },
  {
    name: "Event Firmowy",
    price: "od 4 500 zł",
    duration: "4–6 godzin",
    accent: "#B8D4E8",
    bg: "#eef5fa",
    features: [
      "20–30 ilustracji uczestników",
      "Format A5 lub A4 (do uzgodnienia)",
      "Branding na marginesie portretu",
      "Idealne na targi i konferencje",
      "Podróż do 200 km od Warszawy",
    ],
    highlight: false,
  },
  {
    name: "VIP / Studio",
    price: "wycena indywidualna",
    duration: "elastycznie",
    accent: "#2C3E35",
    bg: "#f0f5f2",
    features: [
      "Portret grupowy (kilka osób)",
      "Opcja domalowania po evencie",
      "Wysyłka pocztą w tubie",
      "Oprawa w passepartout",
      "Portret Pary Młodej duży format",
    ],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section id="pakiety" className="py-16 md:py-28 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Pakiety
          </p>
          <h2
            className="text-3xl md:text-5xl text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Co oferuję
          </h2>
          <div className="brush-line mt-6" />
          <p
            className="mt-6 text-muted max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Każde wesele jest inne — dlatego dostosuję ofertę do Waszych potrzeb.
            Poniższe pakiety to punkt wyjścia do rozmowy.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 100}>
              <div
                className="rounded-3xl p-7 h-full flex flex-col relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: pkg.bg,
                  border: pkg.highlight
                    ? `2px solid ${pkg.accent}`
                    : "1px solid rgba(0,0,0,0.06)",
                  boxShadow: pkg.highlight
                    ? `0 8px 40px rgba(212,184,150,0.2)`
                    : "0 2px 16px rgba(0,0,0,0.04)",
                }}
              >
                {pkg.highlight && (
                  <div
                    className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-xs tracking-widest uppercase"
                    style={{
                      background: pkg.accent,
                      color: "#2C3E35",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    Polecany
                  </div>
                )}

                <div
                  className="w-10 h-1 rounded-full mb-6"
                  style={{ background: pkg.accent }}
                />

                <h3
                  className="text-xl mb-1 text-dark"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-xs text-muted mb-6"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {pkg.duration}
                </p>

                <p
                  className="text-2xl mb-8 text-dark"
                  style={{ fontFamily: "var(--font-playfair)", color: pkg.accent === "#2C3E35" ? "#2C3E35" : pkg.accent }}
                >
                  {pkg.price}
                </p>

                <ul className="space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-muted"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <span
                        className="mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs"
                        style={{ background: `${pkg.accent}30`, color: pkg.accent }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className="mt-8 block text-center py-3 rounded-full text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-80"
                  style={{
                    background: pkg.highlight ? pkg.accent : "transparent",
                    color: pkg.highlight ? "#2C3E35" : pkg.accent,
                    border: `1px solid ${pkg.accent}`,
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Zapytaj o termin
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
