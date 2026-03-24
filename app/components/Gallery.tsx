import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const items = [
  { src: "/gfx/224893_1.webp", alt: "Akwarelowe portrety gości weselnych", size: "tall" },
  { src: "/gfx/224893_6.webp", alt: "Portrety weselne K♥J — para i rodzice", size: "normal" },
  { src: "/gfx/224893_22.webp", alt: "Portret dwóch kobiet — event 40-lecie", size: "tall" },
  { src: "/gfx/224893_18.webp", alt: "Portrety z eventu firmowego United Vision", size: "normal" },
  { src: "/gfx/224893_21.webp", alt: "Zestaw portretów z jubileuszowego eventu", size: "tall" },
  { src: "/gfx/224893_11.jpg", alt: "Trzy portrety w drewnianej ramie", size: "normal" },
  { src: "/gfx/224893_20.webp", alt: "Aleksandra maluje portret na żywo", size: "tall" },
  { src: "/gfx/224893_25.webp", alt: "Gotowy portret z eventu Hexeline", size: "normal" },
  { src: "/gfx/224893_17.webp", alt: "Stolik artystyczny z farbami i portretami w trakcie malowania", size: "normal" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 md:py-28 px-6" style={{ background: "#f5f0eb" }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Galeria
          </p>
          <h2
            className="text-3xl md:text-5xl text-dark"
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
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                className={`rounded-2xl overflow-hidden break-inside-avoid group cursor-pointer relative transition-transform duration-300 hover:scale-[1.02] ${
                  item.size === "tall" ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(44,62,53,0.6) 0%, transparent 60%)" }}
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
            href="https://instagram.com/alesierysuje"
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
