export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* Watercolor blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg
          className="absolute top-[-10%] right-[-5%] w-[55vw] max-w-[700px] opacity-40 blob-float"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="blur1">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <path
            filter="url(#blur1)"
            fill="#E8C4B8"
            d="M300,80 C380,60 460,120 500,200 C540,280 520,380 460,440 C400,500 300,520 220,480 C140,440 80,360 80,270 C80,180 140,100 220,80 C260,70 280,85 300,80Z"
          />
        </svg>

        <svg
          className="absolute bottom-[-5%] left-[-8%] w-[45vw] max-w-[560px] opacity-35 blob-float-slow"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="blur2">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <path
            filter="url(#blur2)"
            fill="#B8D4E8"
            d="M250,60 C320,40 410,90 440,170 C470,250 450,340 390,400 C330,460 230,470 160,430 C90,390 50,300 60,210 C70,120 130,60 200,50 C220,46 235,63 250,60Z"
          />
        </svg>

        <svg
          className="absolute top-[30%] left-[10%] w-[25vw] max-w-[300px] opacity-25 blob-float"
          style={{ animationDelay: "-3s" }}
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="blur3">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <path
            filter="url(#blur3)"
            fill="#D4B896"
            d="M150,40 C195,30 245,65 260,115 C275,165 255,220 215,250 C175,280 115,275 80,240 C45,205 35,150 55,105 C75,60 110,45 150,40Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="hero-fade text-sm tracking-[0.25em] uppercase text-muted mb-6"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Live Painting &nbsp;·&nbsp; Akwarela &nbsp;·&nbsp; Wesela i Eventy
        </p>

        <h1
          className="hero-fade-delay text-5xl md:text-7xl lg:text-8xl leading-tight text-dark mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Twoi goście odejdą
          <br />
          <span className="italic" style={{ color: "#B06E5E" }}>
            z czymś więcej
          </span>
          <br />
          niż wspomnieniami
        </h1>

        <p
          className="hero-fade-delay-2 text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Maluję akwarelowe portrety Twoich gości na żywo podczas przyjęcia.
          Każdy odchodzi z unikalnym obrazkiem — ciepłą pamiątką na całe życie.
        </p>

        <div
          className="hero-fade-delay-2 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#kontakt"
            className="inline-block px-10 py-4 rounded-full text-cream text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #E8C4B8 0%, #D4B896 100%)",
              color: "#2C3E35",
            }}
          >
            Zapytaj o termin
          </a>
          <a
            href="#galeria"
            className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-rose-light"
            style={{ borderColor: "#E8C4B8", color: "#2C3E35" }}
          >
            Zobacz prace
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Przewiń
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-rose to-transparent" />
      </div>
    </section>
  );
}
