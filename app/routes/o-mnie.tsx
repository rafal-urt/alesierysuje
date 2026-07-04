import type { Route } from "./+types/o-mnie";
import { WatercolorStain } from "~/components/WatercolorStain";
import { WatercolorPlaceholder } from "~/components/WatercolorPlaceholder";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aleksandra Sienica - artystka live painting | alesierysuje" },
    {
      name: "description",
      content:
        "Aleksandra Sienica - artystka malująca na żywo wesela i eventy w całej Polsce. Poznaj historię alesierysuje.",
    },
  ];
}

export default function OMnie() {
  return (
    <main className="page">
      <WatercolorStain color="blue" width={460} height={420} style={{ top: 120, right: -140 }} />
      <section className="pageshero">
        <div className="wrap about">
          <div className="soak">
            <div className="easel">
              <div className="frame">
                <WatercolorPlaceholder seed={97} palette={1} width={320} height={400} />
                <div className="cap">autoportret, pracownia</div>
              </div>
            </div>
          </div>
          <div className="story">
            <div className="eyebrow soak">O mnie &middot; alesierysuje.pl/o-mnie</div>
            <h1
              className="soak d1"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: 26 }}
            >
              Aleksandra Sienica - maluję na żywo.
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
              Pracuję na papierze bawełnianym 300 g, farbami, które przeżyją niejedną przeprowadzkę.
              Do każdego zlecenia podchodzę jak do jedynego - bo dla Was ono takie jest.
            </p>
            <span className="sig soak d3">Aleksandra Sienica</span>
          </div>
        </div>
      </section>
    </main>
  );
}
