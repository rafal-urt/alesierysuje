import type { Route } from "./+types/o-mnie";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
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
              Na weselu nikt nie pamięta, o której podano tort. Wszyscy pamiętają moment, w którym z
              mokrej, białej kartki zaczęła wyłaniać się ich sala, ich taniec, ich ludzie. To jest ta
              część mojej pracy, której nie widać na skanach - i dla której robię to dalej.
            </p>
            <p className="soak d3">
              Pędzel trzymam w ręku od dziecka - z czystej pasji. Ze sztalugą między gości wyszłam w
              2025 roku i od tamtej pory mam za sobą kilkanaście wesel wspaniałych osób oraz eventy
              dla marek - od firmowych jubileuszy po wydarzenia modowe. Część z tych wieczorów
              obejrzycie w moich <Link to="/realizacje">realizacjach</Link>.
            </p>
            <p className="soak d3">
              Pracuję na papierze akwarelowym 300 g, farbami, które przeżyją niejedną przeprowadzkę.
              Do każdego zlecenia podchodzę jak do jedynego - bo dla Was ono takie jest.
            </p>
            <div className="trust-line soak d3">
              <span className="stars" aria-hidden="true">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              5/5 &middot;{" "}
              <a href={WZK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                opinie par z portalu Wesele z klasą
              </a>
            </div>
            <span className="sig soak d3">Aleksandra Sienica</span>
          </div>
        </div>
      </section>
    </main>
  );
}
