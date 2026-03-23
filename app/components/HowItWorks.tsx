import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Rezerwacja terminu",
    desc: "Piszesz do mnie z datą i miejscem eventu. Ustalamy szczegóły — ilu gości, jak długo trwa przyjęcie, jakie masz oczekiwania.",
  },
  {
    number: "02",
    title: "Artysta przyjeżdża",
    desc: "Na kilka godzin przed eventem ustawiam swój stolik z farbami i papierem akwarelowym. Gram na miejscu przez cały czas.",
  },
  {
    number: "03",
    title: "Gość pozuje — portret powstaje",
    desc: "Gość podchodzi, siada lub stoi przez kilka minut. Maluję lekki, akwarelowy portret — skupiony na charakterze, nie fotograficznej dokładności.",
  },
  {
    number: "04",
    title: "Pamiątka prosto do rąk",
    desc: "Gotowy portret trafia prosto do rąk gościa. Możesz też zamówić opcję studio — domaluję portrety po evencie i wyślę pocztą.",
  },
];

export default function HowItWorks() {
  return (
    <section id="jak-dziala" className="py-28 px-6" style={{ background: "#f5f0eb" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Jak to działa
          </p>
          <h2
            className="text-4xl md:text-5xl text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Cztery proste kroki
          </h2>
          <div className="brush-line mt-6" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 120}>
              <div
                className="rounded-3xl p-8 h-full flex flex-col"
                style={{
                  background: "rgba(253,250,246,0.8)",
                  border: "1px solid rgba(232,196,184,0.25)",
                }}
              >
                <span
                  className="text-5xl font-light mb-6 block"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "#E8C4B8",
                  }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-lg mb-4 text-dark"
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
