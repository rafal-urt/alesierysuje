import ScrollReveal from "./ScrollReveal";

const placeholders = [
  { color: "#f5e6e0", label: "Portret weselny", size: "tall" },
  { color: "#deeef7", label: "Para Młoda", size: "normal" },
  { color: "#f0f5f2", label: "Gość weselny", size: "normal" },
  { color: "#fdf0ea", label: "Portret kobiety", size: "tall" },
  { color: "#e8f0f5", label: "Event firmowy", size: "normal" },
  { color: "#f5f0e8", label: "Portret rodziny", size: "normal" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-28 px-6" style={{ background: "#f5f0eb" }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Galeria
          </p>
          <h2
            className="text-4xl md:text-5xl text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Prace z eventów
          </h2>
          <div className="brush-line mt-6" />
          <p
            className="mt-6 text-sm text-muted"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Każdy portret powstaje na żywo — żaden nie jest taki sam.
          </p>
        </ScrollReveal>

        {/* Masonry-like grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {placeholders.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                className={`rounded-2xl overflow-hidden break-inside-avoid group cursor-pointer ${
                  item.size === "tall" ? "aspect-[3/4]" : "aspect-square"
                } flex flex-col items-center justify-center relative transition-transform duration-300 hover:scale-[1.02]`}
                style={{ background: item.color }}
              >
                {/* Watercolor texture simulation */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <filter id={`noise${i}`}>
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.65"
                      numOctaves="3"
                      stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                  </filter>
                  <rect width="200" height="200" filter={`url(#noise${i})`} opacity="0.4" />
                </svg>

                <div className="relative z-10 text-center p-6">
                  <div
                    className="text-5xl mb-3 opacity-40"
                    style={{ fontFamily: "var(--font-playfair)", color: "#2C3E35" }}
                  >
                    ✦
                  </div>
                  <p
                    className="text-xs tracking-widest uppercase text-muted"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs text-muted mt-1 opacity-60"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    (zdjęcie wkrótce)
                  </p>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(44,62,53,0.15)" }}
                >
                  <span
                    className="text-xs tracking-widest uppercase text-cream"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Akwarela
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-14">
          <p
            className="text-sm text-muted mb-6"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Więcej prac znajdziesz na Instagramie
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full text-xs tracking-widest uppercase border transition-all duration-300 hover:bg-rose-light"
            style={{
              borderColor: "#E8C4B8",
              color: "#2C3E35",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            @alesierysuje
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
