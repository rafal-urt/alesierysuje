import type { Route } from "./+types/o-mnie";
import { WatercolorStain } from "~/components/WatercolorStain";
import { pageMeta, breadcrumbJsonLd } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { Crumbs } from "~/components/Crumbs";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Aleksandra Sienica - artystka live painting | alesierysuje",
    description:
      "Jestem Aleksandra Sienica - maluję na żywo wesela i eventy w całej Polsce. Poznaj moją historię i pracownię alesierysuje.",
    path: "/o-mnie",
    ogImage: "/og/o-mnie.png",
  });
}

export default function OMnie() {
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "O mnie", path: "/o-mnie" }])} />
      <WatercolorStain color="blue" width={460} height={420} style={{ top: 120, right: -140 }} />
      <section className="pageshero">
        <div className="wrap about">
          <div className="soak">
            <div className="easel">
              <div className="frame">
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
                <div className="cap">live painting, wesele</div>
              </div>
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
              Pracuję na papierze akwarelowym 300 g, farbami, które przeżyją niejedną przeprowadzkę.
              Do każdego zlecenia podchodzę jak do jedynego - bo dla Was ono takie jest.
            </p>
            <span className="sig soak d3">Aleksandra Sienica</span>
          </div>
        </div>
      </section>
    </main>
  );
}
