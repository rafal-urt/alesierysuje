import type { Route } from "./+types/o-mnie";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
import { WorksGallery } from "~/components/WorksGallery";
import { STATIC_WORKS } from "~/data/works-static";
import { pageMeta, breadcrumbJsonLd, SITE_URL, WZK_PROFILE_URL, INSTAGRAM_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { Crumbs } from "~/components/Crumbs";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Aleksandra Sienica - artystka live painting | alesierysuje",
    description:
      "Jestem Aleksandra Sienica - od 2025 maluję na żywo wesela i eventy w całej Polsce. Kilkanaście wesel, eventy dla marek i pędzel w ręku od dziecka.",
    path: "/o-mnie",
    ogImage: "/og/o-mnie.png",
  });
}

// wybór prac na pas "z ostatnich wieczorów": wesela + eventy dla marek
const PICKED_WORKS = [0, 1, 3, 5, 10, 11].map((i) => STATIC_WORKS[i]);

export default function OMnie() {
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "O mnie", path: "/o-mnie" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE_URL}/o-mnie`,
          inLanguage: "pl-PL",
          mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/o-mnie#aleksandra`,
            name: "Aleksandra Sienica",
            jobTitle: "artystka live painting",
            description:
              "Maluje na żywo akwarelowe portrety gości na weselach i eventach w całej Polsce oraz portrety na zamówienie ze zdjęcia.",
            image: `${SITE_URL}/gfx/aleksandra-sienica-live-painting-1000.jpg`,
            worksFor: { "@id": `${SITE_URL}#business` },
            sameAs: [INSTAGRAM_URL, WZK_PROFILE_URL],
          },
        }}
      />
      <WatercolorStain color="blue" width={460} height={420} style={{ top: 120, right: -140 }} />

      {/* hero: zdjęcie ze sztalugi + historia */}
      <section className="pageshero">
        <div className="wrap about">
          <div className="soak">
            <div className="easel">
              <figure className="about-photo">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/gfx/aleksandra-sienica-live-painting-500.avif 500w, /gfx/aleksandra-sienica-live-painting-1000.avif 1000w"
                    sizes="(max-width: 920px) 90vw, 450px"
                  />
                  <source
                    type="image/webp"
                    srcSet="/gfx/aleksandra-sienica-live-painting-500.webp 500w, /gfx/aleksandra-sienica-live-painting-1000.webp 1000w"
                    sizes="(max-width: 920px) 90vw, 450px"
                  />
                  <img
                    src="/gfx/aleksandra-sienica-live-painting-1000.jpg"
                    alt="Aleksandra Sienica maluje akwarelę na żywo podczas wesela"
                    width={1000}
                    height={1500}
                  />
                </picture>
                <figcaption>live painting, wesele</figcaption>
              </figure>
            </div>
          </div>
          <div className="story">
            <Crumbs items={[{ name: "O mnie" }]} />
            <h1
              className="soak d1"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: 26 }}
            >
              Aleksandra Sienica - maluję na żywo
            </h1>
            <p className="soak d2">
              Maluję od zawsze, ale na żywo - odkąd zauważyłam, że proces ciekawi ludzi bardziej niż
              gotowy obraz.
            </p>
            <p className="soak d2">
              Nie proszę nikogo o pozowanie. Staję ze sztalugą tam, gdzie dzieje się życie - między
              parkietem a stołami - i łapię to, co zwykle umyka: czyjś gest, kolor sukienki, śmiech
              w pół zdania. Kwadrans później ta chwila wisi już w kąciku live art, podpisana i
              gotowa do zabrania.
            </p>
            <p className="soak d3">
              Ze sztalugą między gości wyszłam w 2025 roku. Od tamtej pory namalowałam kilkanaście
              wesel wspaniałych osób i eventy dla marek - od firmowych jubileuszy po wydarzenia
              modowe - a między zleceniami wracam do pracowni, gdzie powstają{" "}
              <Link to="/portrety-na-zamowienie">portrety akwarelowe ze zdjęć</Link>.
            </p>
            <span className="sig soak d3">Aleksandra Sienica</span>
          </div>
        </div>
      </section>

      {/* droga: trzy pociągnięcia pędzla */}
      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Droga</div>
            <h2>Od szkicownika do sztalugi</h2>
          </div>
          <div className="steps">
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>Od dziecka</h3>
              <p>
                Pędzel był w moim domu zawsze - malowałam z czystej pasji, długo tylko do szuflady i
                dla najbliższych. To tam wyrobiłam rękę, która dziś zdąża z portretem przed końcem
                piosenki.
              </p>
            </div>
            <div className="step soak d1">
              <div className="brush" style={{ background: "var(--color-wash-blue)" }} />
              <h3>2025 - pierwsza sztaluga</h3>
              <p>
                Wyszłam z pracowni między gości i wszystko zaskoczyło: malowanie przestało być
                samotne, a wokół kartki po raz pierwszy zebrała się publiczność ciekawa każdej
                kreski.
              </p>
            </div>
            <div className="step soak d2">
              <div className="brush" style={{ background: "var(--color-wash-ochre)" }} />
              <h3>Dziś - cała Polska</h3>
              <p>
                Kilkanaście wesel, eventy dla marek i kalendarz otwarty do końca 2027. Pracownia
                stoi w Warszawie, ale sztaluga jeździ wszędzie tam, gdzie dzieje się coś ważnego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* warsztat w liczbach */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Warsztat</div>
            <h2>Czym i na czym maluję</h2>
          </div>
          <div className="bstats">
            <div className="bstat soak">
              <b>300 g</b>
              <span>
                bawełniany papier akwarelowy - nie faluje od wody i przeżyje niejedną przeprowadzkę
              </span>
            </div>
            <div className="bstat soak d1">
              <b>A5 &middot; A4</b>
              <span>akwarela i tusz - ilustracje gości w A5, portret Pary Młodej w A4</span>
            </div>
            <div className="bstat soak d2">
              <b>10 - 15 min</b>
              <span>tyle trwa jedna praca przy sztaludze - cała reszta to uważne patrzenie</span>
            </div>
          </div>
        </div>
      </section>

      {/* pas prac */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Prace</div>
            <h2>Z ostatnich wieczorów</h2>
          </div>
        </div>
        <WorksGallery
          works={PICKED_WORKS}
          variant="strip"
          cta={{ label: "Zobaczcie wszystkie realizacje", to: "/realizacje" }}
        />
      </section>

      {/* CTA */}
      <section>
        <div className="wrap">
          <div className="banner soak">
            <WatercolorStain color="rose" width={420} height={380} style={{ bottom: -140, left: -80 }} />
            <h2>Namaluję też Wasz wieczór</h2>
            <Link className="btn light" to="/terminy">
              Sprawdź swój termin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
