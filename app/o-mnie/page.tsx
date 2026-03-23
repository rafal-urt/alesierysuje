import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O mnie — Aleksandra Sienica | alesierysuje",
  description:
    "Aleksandra Sienica — portrecistka zakochana w akwareli. Dowiedz się, skąd pochodzi moja pasja do rysunku, jak podchodzę do pracy i dlaczego live painting to coś więcej niż atrakcja.",
  openGraph: {
    title: "O mnie — Aleksandra Sienica | alesierysuje",
    url: "https://alesierysuje.pl/o-mnie",
  },
};

const values = [
  {
    title: "Obecność, nie spektakl",
    desc: "Nie lubię bycia tłem. Kiedy jestem na Waszym weselu, jestem tam naprawdę — uważna, ciepła, gotowa na rozmowę. Goście to czują i chętnie podchodzą, bo widzą kogoś, kto jest tu dla nich, nie tylko przy swoim stoliku z farbami.",
    accent: "#E8C4B8",
  },
  {
    title: "Każdy portret ma duszę",
    desc: "Nie maluję twarzy. Maluję ludzi — z ich charakterem, nastrojem, historią w oczach. Akwarela ma w sobie coś nieuchwytnego: transparentność, miękkość, nieuchronność. Takie są też moje portrety — niepowtarzalne i szczere.",
    accent: "#D4B896",
  },
  {
    title: "Profesjonalizm bez sztywności",
    desc: "Dotrzymuję słowa, potwierdzam szczegóły, przyjeżdżam na czas. Ale nie jestem usługodawcą z kamieniem w oczach. Na każdym evencie staram się być kimś, z obecności kogo Wy i Wasi goście będą szczerze zadowoleni.",
    accent: "#B8D4E8",
  },
  {
    title: "Detale mają znaczenie",
    desc: "Jakość papieru, kolor tła, sposób pakowania portretów, to czy mój stolik wpisuje się w dekorację sali — to wszystko ma znaczenie. Staram się dopasować do estetyki każdego eventu tak, żeby moja obecność była spójna, a nie przypadkowa.",
    accent: "#2C3E35",
  },
];

const steps = [
  {
    number: "01",
    title: "Rezerwacja i rozmowa",
    desc: "Piszesz do mnie z datą i miejscem. Rozmawia­my o tym, czego oczekujesz — ile gości, styl imprezy, czy chcesz portret pary lub rodziców w prezencie. Im więcej wiem, tym lepiej się przygotuję.",
  },
  {
    number: "02",
    title: "Przygotowanie i przyjazd",
    desc: "Przyjeżdżam z wyprzedzeniem, ustawiam stolik z farbami i papierem akwarelowym. Dbam o to, żeby moje miejsce pracy wyglądało estetycznie i pasowało do klimatu eventu.",
  },
  {
    number: "03",
    title: "Malowanie na żywo",
    desc: "Gość podchodzi, siada lub stoi przez chwilę. Maluję — skupiona, w swoim rytmie, ale zawsze gotowa na uśmiech i rozmowę. Każdy portret to ok. 15 minut. Goście często stoją i obserwują — to część całej atrakcji.",
  },
  {
    number: "04",
    title: "Portret prosto do rąk",
    desc: "Gotowy portret trafia prosto do gościa. Możliwa personalizacja: imię, data, dedykacja, pieczątka. Przy opcji studio — dorysuję po evencie i wysyłam pocztą w tubie.",
  },
];

export default function OMnie() {
  return (
    <main className="pt-16">

      {/* Hero */}
      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-muted mb-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <a href="/" className="hover:text-dark transition-colors">Strona główna</a>
            <span>/</span>
            <span>O mnie</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-5" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Aleksandra Sienica
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl text-dark leading-tight mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                Rysuję,<br />
                bo inaczej<br />
                <span className="italic" style={{ color: "#E8C4B8" }}>nie umiem</span>
              </h1>
              <p className="text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Jestem portrecistką i ilustratorką — z wyboru i z pasji, która towarzyszy mi
                odkąd pamiętam. Live painting to dla mnie nie praca dodatkowa.
                To naturalne przedłużenie tego, kim jestem.
              </p>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden aspect-[4/5] flex items-end"
                style={{ background: "linear-gradient(160deg, #f5e6e0 0%, #deeef7 60%, #f0f5f2 100%)" }}
              >
                <div className="p-8 w-full">
                  <p className="text-3xl italic mb-2" style={{ fontFamily: "var(--font-playfair)", color: "#2C3E35" }}>
                    „Każda twarz jest inną historią.<br />Staram się ją opowiedzieć."
                  </p>
                  <p className="text-xs tracking-widest uppercase text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Aleksandra Sienica
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -top-5 -right-5 rounded-2xl px-6 py-4 shadow-sm"
                style={{ background: "rgba(253,250,246,0.97)", border: "1px solid rgba(232,196,184,0.4)" }}
              >
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#E8C4B8">
                      <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-muted" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  100% klientów poleca
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moja historia */}
      <section className="py-16 md:py-24 px-6" style={{ background: "#fdf0ea" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-5" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Skąd to wszystko
          </p>
          <h2 className="text-2xl md:text-5xl text-dark mb-8 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Pasja, która znalazła{" "}
            <span className="italic" style={{ color: "#E8C4B8" }}>swoje miejsce</span>
          </h2>

          <div className="space-y-6 text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <p className="text-base">
              Rysowałam odkąd pamiętam. Zeszyty szkolne zapełnione portretami, bloki techniczne
              pełne szkiców twarzy, godziny spędzone nad tym, żeby uchwycić spojrzenie, grymas,
              uśmiech. Nie dlatego, że ktoś mnie tego uczył — po prostu musiałam.
            </p>
            <p className="text-base">
              Akwarela trafiła do mnie stosunkowo późno, ale od razu wiedziałam, że to jest to.
              Jest w niej coś nieuchwytnego — transparentność, przypadkowość, niemożność cofnięcia
              każdego pociągnięcia. To sprawia, że każda praca jest jedyna w swoim rodzaju.
              Nie ma dwóch takich samych akwarel. Dokładnie tak jak nie ma dwóch takich samych ludzi.
            </p>
            <p className="text-base">
              Live painting przyszedł naturalnie. Kiedy po raz pierwszy malowałam kogoś na żywo,
              zobaczyłam w oczach tej osoby coś, czego nie ma przy odbieraniu wydruku czy
              gotowego zdjęcia. Było zdumienie, wzruszenie, radość. Pomyślałam: właśnie dlatego
              warto to robić.
            </p>
            <p className="text-base">
              Dziś robię to na weselach, eventach firmowych, imprezach prywatnych. Każdego gościa
              traktuję z taką samą uwagą — bez względu na to, czy jest to Panna Młoda, czy ktoś,
              kto podszedł do mnie ze śmiałą miną o północy.
            </p>
          </div>
        </div>
      </section>

      {/* Cytat środkowy */}
      <section className="py-12 md:py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <div className="brush-line mb-10" />
          <p className="text-xl md:text-4xl italic text-dark leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
            „Nie chodzi o to, żeby portret był fotograficznie dokładny.<br />
            Chodzi o to, żeby był{" "}
            <span style={{ color: "#E8C4B8" }}>prawdziwy</span>."
          </p>
          <div className="brush-line mt-10" />
        </div>
      </section>

      {/* Moje podejście */}
      <section className="py-16 md:py-24 px-6" style={{ background: "#f5f0eb" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-5" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Filozofia pracy
          </p>
          <h2 className="text-2xl md:text-5xl text-dark mb-10 md:mb-14" style={{ fontFamily: "var(--font-playfair)" }}>
            Jak podchodzę do{" "}
            <span className="italic" style={{ color: "#D4B896" }}>swojej pracy</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl p-8"
                style={{
                  background: "rgba(253,250,246,0.9)",
                  border: "1px solid rgba(232,196,184,0.2)",
                }}
              >
                <div className="w-10 h-1 rounded-full mb-6" style={{ background: v.accent }} />
                <h3 className="text-xl text-dark mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {v.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section className="py-16 md:py-24 px-6" style={{ background: "#fdf0ea" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-5" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Dla kogo
            </p>
            <h2 className="text-2xl md:text-4xl text-dark mb-8 leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
              Wesele lub event —<br />
              <span className="italic" style={{ color: "#E8C4B8" }}>oba zasługują na więcej</span>
            </h2>
            <div className="space-y-5 text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
              <p>
                Live painting sprawdza się wszędzie tam, gdzie zależy Wam na tym,
                żeby goście odeszli z czymś wyjątkowym. Na weselu to naturalne —
                ten wieczór już jest wyjątkowy. Portret po prostu go domyka w sposób,
                którego żadne inne atrakcje nie potrafią.
              </p>
              <p>
                Na evencie firmowym działam inaczej. Tu moją rolą jest nie tylko
                tworzenie portretów, ale też budowanie atmosfery. Stolik artystyczny
                przyciąga ludzi, wywołuje rozmowy, łamie lód. Wielokrotnie słyszałam,
                że moja obecność była jednym z najlepiej zapamiętanych elementów wieczoru.
              </p>
              <p>
                Dostosowuję się do Waszych oczekiwań — styl malowania, motyw przewodni,
                kolor tła portretów, papier. Nie przychodzę z jednym schematem.
                Przychodzę z farbami i otwartą głową.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Wesele", desc: "Portrety gości jako pamiątka wieczoru. Każdy gość — swój własny obrazek.", href: "/uslugi/live-painting-wesele", accent: "#E8C4B8" },
              { label: "Event firmowy", desc: "Atrakcja integracyjna i pamiątka z logiem lub hasłem eventu.", href: "/uslugi/event-firmowy", accent: "#B8D4E8" },
              { label: "Portrety rodziców", desc: "Ręcznie malowany portret jako prezent ślubny dla rodziców Pary Młodej.", href: "/uslugi/portrety-rodzicow", accent: "#D4B896" },
              { label: "Mini portrety", desc: "Winietki z portretem gościa — oryginalna alternatywa dla klasycznej kartki.", href: "/uslugi/mini-portrety", accent: "#2C3E35" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-start gap-5 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#fdfaf6", border: "1px solid rgba(232,196,184,0.25)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: item.accent }} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-dark mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                    {item.label}
                  </p>
                  <p className="text-xs text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {item.desc}
                  </p>
                </div>
                <svg width="14" height="7" viewBox="0 0 16 8" fill="none"
                  className="mt-1.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: item.accent }}>
                  <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Jak pracuję */}
      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-5" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Proces
          </p>
          <h2 className="text-2xl md:text-5xl text-dark mb-10 md:mb-14" style={{ fontFamily: "var(--font-playfair)" }}>
            Jak wygląda{" "}
            <span className="italic" style={{ color: "#E8C4B8" }}>nasza współpraca</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl p-8 flex flex-col"
                style={{
                  background: "#fdfaf6",
                  border: "1px solid rgba(232,196,184,0.2)",
                }}
              >
                <span
                  className="text-5xl font-light mb-6 block"
                  style={{ fontFamily: "var(--font-playfair)", color: "#E8C4B8" }}
                >
                  {step.number}
                </span>
                <h3 className="text-lg mb-4 text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wyróżniona opinia */}
      <section className="py-14 md:py-20 px-6" style={{ background: "#f5f0eb" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(s => (
              <svg key={s} width="16" height="16" viewBox="0 0 12 12" fill="#E8C4B8">
                <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z"/>
              </svg>
            ))}
          </div>
          <p className="text-lg md:text-xl italic text-dark-soft leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}>
            &ldquo;Aleksandra jest pełną pasji i zaangażowania profesjonalistką, a do tego przemiłą
            i otwartą na ustalenia czy rozmowy z Gośćmi osobą. Zdecydowanie polecam skorzystać
            z jej usług — choć nazwanie tego „usługą" nie jest adekwatne.
            Bardziej pasuje „zdolności i możliwości".&rdquo;
          </p>
          <p className="text-sm text-dark font-medium" style={{ fontFamily: "var(--font-playfair)" }}>Adam</p>
          <p className="text-xs text-muted mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Impreza firmowa — maj 2025 · weselezklasa.pl
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 bg-cream text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-dark mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
            Chcesz, żebym była<br />
            <span className="italic" style={{ color: "#E8C4B8" }}>na Waszym weselu?</span>
          </h2>
          <p className="text-muted text-sm mb-10 leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Napisz do mnie — opowiedz o swoim evencie, a ja sprawdzę dostępność
            i przygotuję ofertę. Odpowiadam w ciągu 24 godzin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E8C4B8, #D4B896)", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}>
              Napisz do mnie
            </a>
            <a href="/galeria"
              className="inline-block px-10 py-4 rounded-full text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-rose-light"
              style={{ borderColor: "#E8C4B8", color: "#2C3E35", fontFamily: "var(--font-dm-sans)" }}>
              Zobacz prace
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
