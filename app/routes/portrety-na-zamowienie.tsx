import type { Route } from "./+types/portrety-na-zamowienie";
import { WatercolorStain } from "~/components/WatercolorStain";
import { WatercolorPlaceholder } from "~/components/WatercolorPlaceholder";
import { PORTRAIT_PRICING, formatZl } from "~/data/prices";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portrety na zamówienie - portret ze zdjęcia | alesierysuje" },
    {
      name: "description",
      content:
        "Portret ze zdjęcia malowany ręcznie akwarelą. Konfigurator online z ceną na żywo od 490 zł, realizacja 10 - 14 dni, wysyłka w cenie.",
    },
  ];
}

export default function PortretyNaZamowienie() {
  return (
    <main className="page">
      <WatercolorStain color="green" width={480} height={420} style={{ top: 80, left: -160 }} />
      <section className="pageshero">
        <div className="wrap">
          <div className="eyebrow soak">Pracownia &middot; alesierysuje.pl/portrety-na-zamowienie</div>
          <h1 className="soak d1">Portrety na zamówienie - portret ze zdjęcia malowany ręcznie.</h1>
          <p className="lead soak d2">
            Wgrywacie zdjęcie, wybieracie format, a cena układa się na Waszych oczach. Po zamówieniu
            dostajecie kartę realizacji - zdjęcia szkicu, warstw koloru i gotowej pracy, prosto z
            pracowni.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 20 }}>
        <div className="wrap config">
          {/* Interaktywny konfigurator dochodzi w Etapie 5 - tu statyczny podgląd oferty */}
          <div>
            <div className="cstep soak">
              <div className="clabel">1 &middot; Ile osób na portrecie</div>
              <div className="optrow">
                {["1", "2", "3", "4", "5+"].map((n, i) => (
                  <span key={n} className={`opt${i === 0 ? " sel" : ""}`}>
                    {n}
                  </span>
                ))}
              </div>
            </div>
            <div className="cstep soak d1">
              <div className="clabel">2 &middot; Format</div>
              <div className="optrow">
                {Object.entries(PORTRAIT_PRICING.formats).map(([key, f], i) => (
                  <span key={key} className={`opt${i === 0 ? " sel" : ""}`}>
                    {f.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="cstep soak d2">
              <div className="clabel">3 &middot; Odręczna dedykacja na odwrocie</div>
              <div className="optrow">
                <span className="opt sel">Bez dedykacji</span>
                <span className="opt">Z dedykacją (+{PORTRAIT_PRICING.dedication} zł)</span>
              </div>
            </div>
          </div>
          <div>
            <div className="room soak">
              <div className="rframe" style={{ width: 60, height: 84 }}>
                <WatercolorPlaceholder seed={53} palette={4} width={200} height={280} />
              </div>
              <div className="sofa" />
              <div className="scale-note">podgląd w skali - kanapa 220 cm</div>
            </div>
            <div className="pricebox soak d1">
              <div className="row">
                <span>Portret, format A4</span>
                <span>{formatZl(PORTRAIT_PRICING.formats.A4.price)}</span>
              </div>
              <div className="total">
                <span>Razem</span>
                <b>{formatZl(PORTRAIT_PRICING.formats.A4.price)}</b>
              </div>
              <div className="small">
                realizacja 10 - 14 dni &middot; wysyłka InPost w cenie &middot; karta realizacji na
                maila
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
