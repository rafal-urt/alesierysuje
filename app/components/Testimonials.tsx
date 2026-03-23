import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "To był absolutnie najpiękniejszy element naszego wesela. Goście kolejkowali się do artystki, a wieczorem każdy wychodził z uśmiechem i portretem w ręku. Kilka osób powiedziało nam, że to najlepsza pamiątka weselna, jaką kiedykolwiek dostali.",
    name: "Kasia & Marek",
    event: "Wesele w Krakowie, sierpień 2024",
    accent: "#E8C4B8",
  },
  {
    quote:
      "Zamawiałam live painting na event firmowy dla 60 osób. Atmosfera była niesamowita — pracownicy byli zachwyceni, a portrety wisiały potem na biurkach przez tygodnie. Zdecydowanie polecam jako alternatywę dla klasycznej fotografii.",
    name: "Agnieszka W.",
    event: "Event firmowy, Warszawa, maj 2024",
    accent: "#B8D4E8",
  },
  {
    quote:
      "Byłam świadkową na weselu i dostałam portret. Do dziś wisi w ramce w salonie. Jest w nim coś magicznego — ten styl akwarelowy sprawia, że wygląda jak mały obraz, nie jak zdjęcie. Niepowtarzalna pamiątka.",
    name: "Zofia T.",
    event: "Gość weselny, Wrocław",
    accent: "#D4B896",
  },
];

export default function Testimonials() {
  return (
    <section id="opinie" className="py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Opinie
          </p>
          <h2
            className="text-4xl md:text-5xl text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Co mówią klienci
          </h2>
          <div className="brush-line mt-6" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
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
