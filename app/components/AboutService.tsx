import ScrollReveal from "./ScrollReveal";

export default function AboutService() {
  return (
    <section id="o-usludze" className="py-16 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <ScrollReveal>
          <p
            className="text-xs tracking-[0.3em] uppercase text-muted mb-5"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            O usłudze
          </p>
          <h2
            className="text-3xl md:text-5xl text-dark leading-tight mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Portret namalowany{" "}
            <span className="italic" style={{ color: "#B06E5E" }}>
              w czasie rzeczywistym
            </span>
          </h2>
          <div
            className="space-y-5 text-muted leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <p>
              Wyobraź sobie: goście bawiący się na sali weselnej, a w kącie —
              artystka z akwarelami. Jeden po drugim podchodzą, pozują przez
              chwilę, a kilka minut później odchodzą z własnym portretem
              w dłoni.
            </p>
            <p>
              To nie jest atrakcja, którą ogląda się z daleka. To doświadczenie,
              które każdy gość przeżywa osobiście — i o którym opowiada
              miesiącami po weselu.
            </p>
            <p>
              Maluję lekkie, impresjonistyczne akwarele. Nie fotograficznie
              dokładne — ale ciepłe, artystyczne i pełne emocji. Każdy portret
              to mała historia.
            </p>
          </div>
        </ScrollReveal>

        {/* Visual */}
        <ScrollReveal delay={200}>
          <div className="relative">
            {/* Main card */}
            <div
              className="rounded-3xl overflow-hidden aspect-[4/5] flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #f5e6e0 0%, #deeef7 100%)",
              }}
            >
              <div className="text-center p-10">
                <div
                  className="text-8xl mb-6"
                  style={{ fontFamily: "var(--font-playfair)", color: "#8B6A40" }}
                >
                  &#9786;
                </div>
                <p
                  className="text-dark text-lg italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  „Każdy gość. Jeden portret.<br />Jeden wieczór."
                </p>
              </div>
            </div>

            {/* Floating stats */}
            <div
              className="absolute -bottom-6 -left-6 rounded-2xl px-6 py-4 shadow-sm"
              style={{ background: "rgba(253,250,246,0.95)", border: "1px solid rgba(232,196,184,0.4)" }}
            >
              <p
                className="text-3xl font-light text-dark"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                20–30
              </p>
              <p
                className="text-xs text-muted tracking-wide"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                portretów w czasie eventu
              </p>
            </div>

            <div
              className="absolute -top-6 -right-6 rounded-2xl px-6 py-4 shadow-sm"
              style={{ background: "rgba(253,250,246,0.95)", border: "1px solid rgba(184,212,232,0.4)" }}
            >
              <p
                className="text-3xl font-light text-dark"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                5–10
              </p>
              <p
                className="text-xs text-muted tracking-wide"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                minut na portret
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
