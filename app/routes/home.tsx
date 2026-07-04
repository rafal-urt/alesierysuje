import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Marquee } from "~/components/Marquee";
import { Faq } from "~/components/Faq";
import { WorksGallery } from "~/components/WorksGallery";
import { WatercolorPlaceholder } from "~/components/WatercolorPlaceholder";
import { WatercolorStain } from "~/components/WatercolorStain";
import { getDb, mapWork } from "~/lib/payload.server";
import { plMonthYear, plMonthYearGenitive } from "~/lib/dates";
import { countFreeSaturdays } from "~/lib/availability.server";

export async function loader() {
  const db = await getDb();
  const [works, reviews, saturdays] = await Promise.all([
    db.find({ collection: "works", sort: "order", limit: 6, depth: 1 }),
    db.find({ collection: "reviews", sort: "-date", limit: 6 }),
    countFreeSaturdays(),
  ]);
  return {
    freeSaturdays: saturdays.count,
    calendarEndLabel: plMonthYearGenitive(saturdays.end),
    works: works.docs.map(mapWork),
    reviews: reviews.docs.map((r) => ({
      author: r.author,
      text: r.text,
      where: r.location ?? "",
      when: plMonthYear(r.date),
    })),
  };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Live painting na wesele i eventy - malowanie na żywo | alesierysuje" },
    {
      name: "description",
      content:
        "Live painting i malowanie na żywo na weselach oraz eventach firmowych. Live art, szybkie portrety gości i portrety na zamówienie ze zdjęcia. Sprawdź wolne terminy i ceny.",
    },
  ];
}

const FAQ_ITEMS = [
  {
    q: "Ile kosztuje live painting na weselu?",
    a: "Pakiety weselne zaczynają się od 3 900 zł, a najczęściej wybierany kosztuje 5 900 zł. Pełne zestawienie znajdziecie w cenniku - ceny są jawne, bez pisania po wycenę.",
  },
  {
    q: "Czym różni się live painting od live artu?",
    a: "To dwie nazwy tej samej idei - sztuki tworzonej na żywo, na oczach gości. Na weselach zwykle powstaje jeden obraz sceny, na eventach częściej seria szybkich portretów gości.",
  },
  {
    q: "Jak zamówić portret ze zdjęcia?",
    a: "W Pracowni konfigurujecie portret w kilku krokach: liczba osób, format, zdjęcie. Cena układa się na bieżąco, płatność online, realizacja 10 - 14 dni z wysyłką w cenie.",
  },
];

export default function Home({ loaderData }: Route.ComponentProps) {
  const { works, reviews, freeSaturdays, calendarEndLabel } = loaderData;
  return (
    <main className="page">
      <div className="hero">
        <WatercolorStain color="blue" width={680} height={540} bloom style={{ top: -140, right: -160 }} />
        <WatercolorStain
          color="rose"
          width={440}
          height={400}
          bloom
          style={{ bottom: -120, left: -140, animationDelay: "0.4s" }}
        />
        <div className="wrap">
          <h1 className="soak d1">
            Malowanie <span className="fill">na&nbsp;żywo</span>, które zostaje na zawsze.
          </h1>
          <p className="lead soak d2">
            Live painting na weselach i eventach firmowych, szybkie portrety gości oraz portrety na
            zamówienie ze zdjęcia. Aleksandra Sienica maluje Wasze najważniejsze chwile wtedy, kiedy
            one trwają.
          </p>
          <div className="hero-cta soak d3">
            <Link className="btn" to="/terminy">
              Sprawdź swój termin
            </Link>
            <div className="season">
              <span className="pulse" />
              Wolnych sobót do {calendarEndLabel}: <b>{freeSaturdays}</b>
            </div>
          </div>
        </div>
        <div className="hero-frame soak d2">
          <div className="frame">
            <WatercolorPlaceholder seed={11} palette={0} width={300} height={380} />
            <div className="cap">pierwszy taniec, sierpień</div>
          </div>
        </div>
        <div className="hero-scroll">przewiń</div>
      </div>

      <Marquee />

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Od czego zaczynamy</div>
            <h2>Trzy powody, dla których tu jesteście.</h2>
          </div>
          <div className="doors">
            <Link className="door soak" to="/live-painting-wesele">
              <div className="art">
                <WatercolorPlaceholder seed={31} palette={0} width={400} height={560} />
              </div>
              <div className="veil" />
              <div className="txt">
                <div className="kicker">wesela</div>
                <h3>Live painting na weselu</h3>
                <p>Obraz Waszego przyjęcia malowany na żywo - pamiątka gotowa tego samego wieczoru.</p>
                <span className="go">
                  Zobacz pakiety <span>&rarr;</span>
                </span>
              </div>
            </Link>
            <Link className="door soak d1" to="/live-painting-eventy">
              <div className="art">
                <WatercolorPlaceholder seed={47} palette={2} width={400} height={560} />
              </div>
              <div className="veil" />
              <div className="txt">
                <div className="kicker">eventy firmowe</div>
                <h3>Live art na evencie</h3>
                <p>Malowanie na żywo i szybkie portrety gości - atrakcja, przy której robi się kolejka.</p>
                <span className="go">
                  Wyślij brief <span>&rarr;</span>
                </span>
              </div>
            </Link>
            <Link className="door soak d2" to="/portrety-na-zamowienie">
              <div className="art">
                <WatercolorPlaceholder seed={59} palette={4} width={400} height={560} />
              </div>
              <div className="veil" />
              <div className="txt">
                <div className="kicker">pracownia</div>
                <h3>Portrety na zamówienie</h3>
                <p>Portret ze zdjęcia malowany ręcznie akwarelą. Skonfiguruj i zamów online.</p>
                <span className="go">
                  Skonfiguruj portret <span>&rarr;</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 20, paddingBottom: 0 }}>
        <div className="wrap sec-top soak">
          <div className="sec-head">
            <div className="eyebrow">Realizacje</div>
            <h2>Ściana, która ciągle rośnie.</h2>
          </div>
          <Link className="btn ghost sm" to="/realizacje">
            Cała galeria &rarr;
          </Link>
        </div>
        <WorksGallery works={works} variant="strip" />
      </section>

      <div className="band">
        <WatercolorStain color="blue" width={460} height={420} style={{ top: -140, right: -100 }} />
        <div className="wrap bgrid">
          <div className="bst soak">
            <b>100+</b>
            <span>wesel i eventów z malowaniem na żywo</span>
          </div>
          <div className="bst soak d1">
            <b>5.0</b>
            <span>średnia ocen par i klientów firmowych</span>
          </div>
          <div className="bst soak d2">
            <b>40+</b>
            <span>portretów gości w jeden wieczór eventowy</span>
          </div>
          <div className="bst soak d3">
            <b>0 dni</b>
            <span>czekania - obraz z wesela zabieracie tej samej nocy</span>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Jak to działa</div>
            <h2>Trzy kroki. Reszta to farba i woda.</h2>
          </div>
          <div className="steps">
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-blue)" }} />
              <h3>Wybieracie datę</h3>
              <p>
                Kalendarz pokazuje dostępność każdego dnia. Wybieracie termin i wysyłacie bezpłatne
                zapytanie - bez zobowiązań.
              </p>
            </div>
            <div className="step soak d1">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>Ale przyjeżdża i maluje</h3>
              <p>
                Sztaluga staje na sali w najlepszym momencie. Goście patrzą, jak biała kartka nabiera
                koloru.
              </p>
            </div>
            <div className="step soak d2">
              <div className="brush" style={{ background: "var(--color-wash-ochre)" }} />
              <h3>Obraz zostaje z Wami</h3>
              <p>Podpisany, zabezpieczony, gotowy do powieszenia - jeszcze tego samego wieczoru.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 10 }}>
        <WatercolorStain color="green" width={480} height={420} style={{ top: 40, left: -160 }} />
        <div className="wrap manifesto">
          <div className="eyebrow soak">Czym jest live painting</div>
          <h2 className="soak d1">Malowanie na żywo to nie usługa. To scena.</h2>
          <p className="soak d2">
            Live painting, po polsku malowanie na żywo, to sztuka tworzona na oczach gości - na
            weselu, evencie firmowym, gali czy premierze. Zamiast gotowego obrazu zamawiacie proces:
            sztalugę na sali, mokrą kartkę papieru i kilka godzin, w których wszyscy patrzą, jak
            powstaje scena z ich udziałem.
          </p>
          <p className="soak d2">
            Obok obrazów całych wydarzeń maluję również szybkie portrety gości podczas eventów oraz
            portrety na zamówienie ze zdjęcia - akwarelowe, ręczne, wysyłane pod drzwi. Każda praca
            powstaje na papierze bawełnianym 300 g, farbami, które nie wyblakną przez dekady.
          </p>
          <div className="links soak d3">
            <Link to="/live-painting-wesele">Live painting na wesele</Link>
            <Link to="/live-painting-eventy">Live art na event</Link>
            <Link to="/portrety-na-zamowienie">Portret ze zdjęcia</Link>
            <Link to="/cennik">Cennik</Link>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Opinie</div>
            <h2>Słowo od par i gości.</h2>
            <p>Prawdziwe opinie z portalu Wesele z klasą - średnia 5,00 / 5 z 6 ocen.</p>
          </div>
          <div className="quotes">
            {reviews.map((r, i) => (
              <div className={`quote soak${i % 3 === 1 ? " d1" : i % 3 === 2 ? " d2" : ""}`} key={r.author}>
                <div className="stars" aria-label="5 gwiazdek">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p>{r.text}</p>
                <div className="who">
                  {r.author} &middot; {r.where} &middot; {r.when}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">FAQ</div>
            <h2>Krótko o najważniejszym.</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      <section style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="banner soak">
            <WatercolorStain color="blue" width={420} height={380} style={{ top: -120, right: -80 }} />
            <h2>Wasza sobota może być na tej ścianie.</h2>
            <Link className="btn light" to="/terminy">
              Sprawdź wolne terminy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
