import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Marquee } from "~/components/Marquee";
import { Faq } from "~/components/Faq";
import { WorksGallery } from "~/components/WorksGallery";
import { WatercolorStain } from "~/components/WatercolorStain";
import { getDb } from "~/lib/payload.server";
import { STATIC_WORKS } from "~/data/works-static";
import { plMonthYear } from "~/lib/dates";
import { countFreeWeekends } from "~/lib/availability.server";
import { pageMeta, SITE_URL, WZK_PROFILE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";

export async function loader() {
  const db = await getDb();
  const [reviews, weekends] = await Promise.all([
    db.find({ collection: "reviews", sort: "-date", limit: 6 }),
    countFreeWeekends(),
  ]);
  return {
    freeWeekends: weekends.count,
    works: STATIC_WORKS.slice(0, 6),
    reviews: reviews.docs.map((r) => ({
      author: r.author,
      text: r.text,
      where: r.location ?? "",
      when: plMonthYear(r.date),
    })),
  };
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Malowanie na żywo na wesele i eventy | alesierysuje",
    description:
      "Malowanie na żywo na weselach i eventach: akwarelowe portrety gości do zabrania jeszcze tego wieczoru. Sprawdź wolne terminy i jawne ceny.",
    path: "/",
    ogImage: "/og/home.png",
  });
}

const FAQ_ITEMS = [
  {
    q: "Ile kosztuje live painting na weselu?",
    a: "Pakiety weselne zaczynają się od 4 000 zł, a najczęściej wybierany kosztuje 6 000 zł. Pełne zestawienie znajdziecie w cenniku - ceny są jawne, bez pisania po wycenę.",
  },
  {
    q: "Czym różni się live painting od live artu?",
    a: "To dwie nazwy tej samej idei - sztuki tworzonej na żywo, na oczach gości. U mnie to seria szybkich akwarelowych portretów gości: do 30 ilustracji A5 malowanych na żywo, a w większych pakietach kolejne dosyłam z pracowni.",
  },
  {
    q: "Jak zamówić portret ze zdjęcia?",
    a: "W Pracowni konfigurujecie portret w kilku krokach: liczba osób, format, zdjęcie. Cena układa się na bieżąco, płatność online, realizacja 10 - 14 dni z wysyłką w cenie.",
  },
];

export default function Home({ loaderData }: Route.ComponentProps) {
  const { works, reviews, freeWeekends } = loaderData;
  return (
    <main className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div className="hero">
        <div className="hero-video" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata" poster="/gfx/hero-poster.jpg">
            <source src="/gfx/hero-live-painting.webm" type="video/webm" />
            <source src="/gfx/hero-live-painting.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-veil" aria-hidden="true" />
        <div className="wrap">
          <h1 className="soak d1">
            Malowanie <span className="fill">na&nbsp;żywo</span>, które zostaje na zawsze
          </h1>
          <p className="lead soak d2">
            Live painting na weselach i eventach firmowych, szybkie portrety gości oraz portrety
            na zamówienie ze zdjęcia. Jestem Aleksandra - maluję Wasze najważniejsze chwile wtedy,
            kiedy one trwają.
          </p>
          <div className="hero-cta soak d3">
            <Link className="btn" to="/terminy">
              Sprawdź swój termin
            </Link>
            <div className="season">
              <span className="pulse" />
              Wolnych weekendów w tym roku: <b>{freeWeekends}</b>
            </div>
          </div>
        </div>
      </div>

      <Marquee />

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Od czego zaczynamy</div>
            <h2>Trzy powody, dla których tu jesteście</h2>
          </div>
          <div className="doors">
            <Link className="door soak" to="/malowanie-na-zywo-wesele">
              <div className="art art-contain">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/gfx/malowanie-na-zywo-wesele-ilustracje-gosci-600.avif 600w, /gfx/malowanie-na-zywo-wesele-ilustracje-gosci-1000.avif 1000w"
                    sizes="(max-width: 920px) 100vw, 430px"
                  />
                  <source
                    type="image/webp"
                    srcSet="/gfx/malowanie-na-zywo-wesele-ilustracje-gosci-600.webp 600w, /gfx/malowanie-na-zywo-wesele-ilustracje-gosci-1000.webp 1000w"
                    sizes="(max-width: 920px) 100vw, 430px"
                  />
                  <img
                    src="/gfx/malowanie-na-zywo-wesele-ilustracje-gosci-1000.jpg"
                    alt="Dziesiątki akwarelowych ilustracji gości namalowanych podczas jednego wesela"
                    width={1000}
                    height={1778}
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="veil" />
              <div className="txt">
                <div className="kicker">wesela</div>
                <h3>Live painting na weselu</h3>
                <p>Akwarelowe ilustracje gości malowane na żywo - do 60 portretów z jednego wesela.</p>
                <span className="go">
                  Zobacz pakiety <span>&rarr;</span>
                </span>
              </div>
            </Link>
            <Link className="door soak d1" to="/malowanie-na-zywo-eventy">
              <div className="art art-bottom">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/gfx/live-art-event-stanowisko-600.avif 600w, /gfx/live-art-event-stanowisko-1000.avif 1000w"
                    sizes="(max-width: 920px) 100vw, 430px"
                  />
                  <source
                    type="image/webp"
                    srcSet="/gfx/live-art-event-stanowisko-600.webp 600w, /gfx/live-art-event-stanowisko-1000.webp 1000w"
                    sizes="(max-width: 920px) 100vw, 430px"
                  />
                  <img
                    src="/gfx/live-art-event-stanowisko-1000.jpg"
                    alt="Brandowane stanowisko live art na evencie firmowym - sztaluga i materiały alesierysuje"
                    width={1000}
                    height={1500}
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="veil" />
              <div className="txt">
                <div className="kicker">eventy firmowe</div>
                <h3>Live art na evencie</h3>
                <p>Malowanie na żywo i szybkie portrety gości - atrakcja, przy której robi się kolejka.</p>
                <span className="go">
                  Zobacz pakiety <span>&rarr;</span>
                </span>
              </div>
            </Link>
            <Link className="door soak d2" to="/portrety-na-zamowienie">
              <div className="art art-bottom">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/gfx/portrety-na-zamowienie-akwarela-600.avif 600w, /gfx/portrety-na-zamowienie-akwarela-1000.avif 1000w"
                    sizes="(max-width: 920px) 100vw, 430px"
                  />
                  <source
                    type="image/webp"
                    srcSet="/gfx/portrety-na-zamowienie-akwarela-600.webp 600w, /gfx/portrety-na-zamowienie-akwarela-1000.webp 1000w"
                    sizes="(max-width: 920px) 100vw, 430px"
                  />
                  <img
                    src="/gfx/portrety-na-zamowienie-akwarela-1000.jpg"
                    alt="Oprawione akwarelowe portrety rodzinne namalowane na zamówienie ze zdjęcia"
                    width={1000}
                    height={1333}
                    loading="lazy"
                  />
                </picture>
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

      <div className="band">
        <WatercolorStain color="blue" width={460} height={420} style={{ top: -140, right: -100 }} />
        <div className="wrap bgrid">
          <div className="bst soak">
            <b>5.0</b>
            <span>średnia ocen par i klientów firmowych</span>
          </div>
          <div className="bst soak d1">
            <b>40+</b>
            <span>portretów gości w jeden wieczór eventowy</span>
          </div>
          <div className="bst soak d2">
            <b>0 dni</b>
            <span>czekania - goście zabierają swoje ilustracje jeszcze tej samej nocy</span>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Jak to działa</div>
            <h2>Trzy kroki. Reszta to farby, woda i moja lewa ręka</h2>
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
              <h3>Przyjeżdżam i maluję</h3>
              <p>
                Sztaluga staje na sali w najlepszym momencie. Goście patrzą, jak biała kartka nabiera
                koloru.
              </p>
            </div>
            <div className="step soak d2">
              <div className="brush" style={{ background: "var(--color-wash-ochre)" }} />
              <h3>Ilustracje zostają z gośćmi</h3>
              <p>
                Każda podpisana i zabezpieczona - do zabrania jeszcze tego wieczoru. Czego nie
                zdążę namalować na żywo, dokańczam w pracowni i dosyłam po weselu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 10 }}>
        <WatercolorStain color="green" width={480} height={420} style={{ top: 40, left: -160 }} />
        <div className="wrap manifesto">
          <div className="eyebrow soak">Czym jest live painting</div>
          <h2 className="soak d1">Malowanie na żywo to nie usługa. To scena</h2>
          <p className="soak d2">
            Live painting, po polsku malowanie na żywo, to sztuka tworzona na oczach gości - na
            weselu, evencie firmowym, gali czy premierze. Zamawiacie proces: sztalugę na sali i
            kilka godzin, w których każdy gość może zobaczyć, jak powstaje jego akwarelowy portret.
            Podczas jednego wydarzenia maluję na żywo do 30 ilustracji formatu A5 - każdą podpisaną
            i gotową do zabrania jeszcze tego samego wieczoru - a kolejne dokańczam w pracowni i
            dosyłam po evencie.
          </p>
          <p className="soak d2">
            Obok ilustracji gości maluję również portrety na zamówienie ze zdjęcia - akwarelowe,
            ręczne, wysyłane pod drzwi. Każda praca powstaje na papierze akwarelowym 300 g, farbami,
            które nie wyblakną przez dekady.
          </p>
          <div className="links soak d3">
            <Link to="/malowanie-na-zywo-wesele">Live painting na wesele</Link>
            <Link to="/malowanie-na-zywo-eventy">Live art na event</Link>
            <Link to="/malowanie-na-zywo-warszawa">Live painting Warszawa</Link>
            <Link to="/malowanie-na-zywo-trojmiasto">Live painting Trójmiasto</Link>
            <Link to="/portrety-na-zamowienie">Portret ze zdjęcia</Link>
            <Link to="/cennik">Cennik</Link>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Opinie</div>
            <h2>Słowo od par i gości</h2>
            <p>
              Prawdziwe opinie par - wszystkie możecie zweryfikować na{" "}
              <a href={WZK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                moim profilu w serwisie Wesele z klasą
              </a>
              .
            </p>
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

      <section style={{ paddingTop: 20, paddingBottom: 56 }}>
        <div className="wrap sec-top soak">
          <div className="sec-head">
            <div className="eyebrow">Realizacje</div>
            <h2>Ściana, która ciągle rośnie</h2>
          </div>
          <Link className="btn ghost sm" to="/realizacje">
            Cała galeria &rarr;
          </Link>
        </div>
        <WorksGallery works={works} variant="strip" />
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">FAQ</div>
            <h2>Krótko o najważniejszym</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      <section style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="banner soak">
            <WatercolorStain color="blue" width={420} height={380} style={{ top: -120, right: -80 }} />
            <h2>Wasz wieczór może być na tej ścianie</h2>
            <Link className="btn light" to="/terminy">
              Sprawdź wolne terminy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
