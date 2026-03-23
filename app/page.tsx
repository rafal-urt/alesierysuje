import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "alesierysuje — Live Painting Akwarelowy na Wesela i Eventy",
  description:
    "Aleksandra Sienica maluje akwarelowe portrety gości na żywo podczas wesela i eventów. Wyjątkowa atrakcja — każdy gość odchodzi z unikalnym, ręcznie malowanym portretem.",
};

const services = [
  {
    href: "/uslugi/live-painting-wesele",
    title: "Live Painting na Wesele",
    desc: "Akwarelowe portrety gości malowane na żywo podczas przyjęcia. Każdy gość odchodzi z unikalną pamiątką.",
    accent: "#E8C4B8",
    bg: "#fdf0ea",
    tag: "Najpopularniejsze",
  },
  {
    href: "/uslugi/event-firmowy",
    title: "Event Firmowy",
    desc: "Atrakcja, która wyróżni Twój event. Portrety pracowników i gości malowane na żywo — z opcją brandingu.",
    accent: "#B8D4E8",
    bg: "#eef5fa",
    tag: null,
  },
  {
    href: "/uslugi/portrety-rodzicow",
    title: "Portrety Rodziców",
    desc: "Ręcznie malowany akwarelowy portret jako prezent dla rodziców Pary Młodej. Na podstawie Waszego zdjęcia.",
    accent: "#D4B896",
    bg: "#fdf6ed",
    tag: null,
  },
  {
    href: "/uslugi/mini-portrety",
    title: "Mini Portrety",
    desc: "Portrety gości jako oryginalne winietki weselne. Każdy gość przy stoliku — ze swoją twarzą na kartce.",
    accent: "#2C3E35",
    bg: "#f0f5f2",
    tag: null,
  },
];

const navCards = [
  {
    href: "/o-mnie",
    title: "O mnie",
    desc: "Kim jestem, skąd pochodzi moja miłość do akwareli i jak wygląda moja praca.",
    accent: "#E8C4B8",
  },
  {
    href: "/galeria",
    title: "Galeria",
    desc: "Prace z wesel i eventów — każdy portret namalowany na żywo, żaden nie jest taki sam.",
    accent: "#B8D4E8",
  },
  {
    href: "/opinie",
    title: "Opinie",
    desc: "Co mówią osoby, które wybrały live painting na swoje wesele lub event firmowy.",
    accent: "#D4B896",
  },
  {
    href: "/cennik",
    title: "Cennik",
    desc: "Pakiety i ceny dostosowane do rodzaju eventu i liczby gości. Zawsze indywidualnie.",
    accent: "#2C3E35",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
        {/* Watercolor blobs */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg className="absolute top-[-10%] right-[-5%] w-[55vw] max-w-[700px] opacity-40 blob-float"
            viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <filter id="blur1"><feGaussianBlur stdDeviation="12" /></filter>
            <path filter="url(#blur1)" fill="#E8C4B8"
              d="M300,80 C380,60 460,120 500,200 C540,280 520,380 460,440 C400,500 300,520 220,480 C140,440 80,360 80,270 C80,180 140,100 220,80 C260,70 280,85 300,80Z" />
          </svg>
          <svg className="absolute bottom-[-5%] left-[-8%] w-[45vw] max-w-[560px] opacity-35 blob-float-slow"
            viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <filter id="blur2"><feGaussianBlur stdDeviation="14" /></filter>
            <path filter="url(#blur2)" fill="#B8D4E8"
              d="M250,60 C320,40 410,90 440,170 C470,250 450,340 390,400 C330,460 230,470 160,430 C90,390 50,300 60,210 C70,120 130,60 200,50 C220,46 235,63 250,60Z" />
          </svg>
          <svg className="absolute top-[30%] left-[10%] w-[25vw] max-w-[300px] opacity-25 blob-float"
            style={{ animationDelay: "-3s" }} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <filter id="blur3"><feGaussianBlur stdDeviation="10" /></filter>
            <path filter="url(#blur3)" fill="#D4B896"
              d="M150,40 C195,30 245,65 260,115 C275,165 255,220 215,250 C175,280 115,275 80,240 C45,205 35,150 55,105 C75,60 110,45 150,40Z" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="hero-fade text-sm tracking-[0.25em] uppercase text-muted mb-6"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            Live Painting &nbsp;·&nbsp; Akwarela &nbsp;·&nbsp; Wesela i Eventy
          </p>
          <h1 className="hero-fade-delay text-5xl md:text-7xl lg:text-8xl leading-tight text-dark mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}>
            Twoi goście odejdą
            <br />
            <span className="italic" style={{ color: "#E8C4B8" }}>z czymś więcej</span>
            <br />
            niż wspomnieniami
          </h1>
          <p className="hero-fade-delay-2 text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            Maluję akwarelowe portrety Twoich gości na żywo podczas przyjęcia.
            Każdy odchodzi z unikalnym obrazkiem — ciepłą pamiątką na całe życie.
          </p>
          <div className="hero-fade-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E8C4B8 0%, #D4B896 100%)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}>
              Zapytaj o termin
            </a>
            <a href="/galeria"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-rose-light"
              style={{ borderColor: "#E8C4B8", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}>
              Zobacz prace
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>Przewiń</span>
          <div className="w-px h-12 bg-gradient-to-b from-rose to-transparent" />
        </div>
      </section>

      {/* Usługi */}
      <section className="py-28 px-6" style={{ background: "#f5f0eb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}>Co oferuję</p>
            <h2 className="text-4xl md:text-5xl text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
              Usługi
            </h2>
            <div className="brush-line mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="group rounded-3xl p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: s.bg, border: "1px solid rgba(0,0,0,0.05)" }}
              >
                {s.tag && (
                  <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-2xl text-xs tracking-widest uppercase"
                    style={{ background: s.accent, color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}>
                    {s.tag}
                  </div>
                )}
                <div className="w-8 h-1 rounded-full mb-5" style={{ background: s.accent }} />
                <h3 className="text-lg text-dark mb-3 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {s.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)", color: s.accent }}>
                  Dowiedz się więcej
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* O mnie teaser */}
      <section className="py-28 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}>Aleksandra Sienica</p>
            <h2 className="text-4xl md:text-5xl text-dark leading-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}>
              Portret namalowany{" "}
              <span className="italic" style={{ color: "#E8C4B8" }}>w czasie rzeczywistym</span>
            </h2>
            <div className="space-y-5 text-muted leading-relaxed text-sm mb-10"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              <p>
                Wyobraź sobie: goście bawiący się na sali weselnej, a w kącie —
                artystka z akwarelami. Jeden po drugim podchodzą, pozują przez
                chwilę, a kilka minut później odchodzą z własnym portretem w dłoni.
              </p>
              <p>
                To nie jest atrakcja, którą ogląda się z daleka. To doświadczenie,
                które każdy gość przeżywa osobiście — i o którym opowiada miesiącami po weselu.
              </p>
            </div>
            <a href="/o-mnie"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#E8C4B8" }}>
              Poznaj mnie lepiej
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "20–30", label: "portretów podczas eventu" },
              { val: "~15 min", label: "na jeden portret" },
              { val: "5★", label: "wszystkie opinie" },
              { val: "cała Polska", label: "zasięg działania" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 text-center"
                style={{ background: "#fdfaf6", border: "1px solid rgba(232,196,184,0.25)" }}
              >
                <p className="text-3xl mb-2" style={{ fontFamily: "var(--font-playfair)", color: "#E8C4B8" }}>
                  {stat.val}
                </p>
                <p className="text-xs text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opinia wyróżniona */}
      <section className="py-24 px-6" style={{ background: "#fdf0ea" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-10"
            style={{ fontFamily: "var(--font-dm-sans)" }}>Opinie klientów</p>
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(s => (
              <svg key={s} width="18" height="18" viewBox="0 0 12 12" fill="#E8C4B8">
                <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z"/>
              </svg>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-dark-soft italic leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}>
            &ldquo;Live painting w wykonaniu Aleksandry był strzałem w dziesiątkę.
            To nie jest jednorazowa atrakcja, tylko realna pamiątka, do której chce się wracać.
            Widać dbałość o detale i ogromne zaangażowanie w to, co robi.&rdquo;
          </p>
          <p className="text-sm text-dark font-medium mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
            Rafał
          </p>
          <p className="text-xs text-muted mb-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Event, Płock — wrzesień 2025 · weselezklasa.pl
          </p>
          <a href="/opinie"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#E8C4B8" }}>
            Wszystkie opinie
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Szybkie linki do sekcji */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}>Odkryj więcej</p>
            <h2 className="text-4xl md:text-5xl text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
              Wszystko, co chcesz wiedzieć
            </h2>
            <div className="brush-line mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="group rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#fdfaf6",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
                }}
              >
                <div className="w-8 h-1 rounded-full mb-5" style={{ background: card.accent }} />
                <h3 className="text-xl text-dark mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {card.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {card.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)", color: card.accent }}>
                  Zobacz
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA końcowe */}
      <section className="py-28 px-6 text-center" style={{ background: "#2C3E35" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(253,250,246,0.5)" }}>
            Zarezerwuj termin
          </p>
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#FDFAF6" }}>
            Zróbmy razem coś
            <br />
            <span className="italic" style={{ color: "#E8C4B8" }}>niezapomnianego</span>
          </h2>
          <p className="text-sm leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(253,250,246,0.6)" }}>
            Popularne terminy — szczególnie w sezonie ślubnym — rezerwowane są z dużym
            wyprzedzeniem. Napisz już dziś, żeby sprawdzić dostępność.
          </p>
          <a href="/kontakt"
            className="inline-block px-12 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #E8C4B8, #D4B896)",
              color: "#2C3E35",
              fontFamily: "var(--font-dm-sans)",
            }}>
            Zapytaj o termin
          </a>
        </div>
      </section>
    </main>
  );
}
