import type { Route } from "./+types/cennik";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
import { WEDDING_PACKAGES, EVENT_PRICING, PORTRAIT_PRICING, formatZl } from "~/data/prices";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cennik - live painting, malowanie na żywo, portrety | alesierysuje" },
    {
      name: "description",
      content:
        "Jawne ceny live paintingu i portretów: pakiety weselne od 3 900 zł, eventy firmowe od 3 500 zł, portrety na zamówienie od 490 zł.",
    },
  ];
}

export default function Cennik() {
  const pf = PORTRAIT_PRICING.formats;
  return (
    <main className="page">
      <WatercolorStain color="blue" width={480} height={420} style={{ top: 80, right: -160 }} />
      <section className="pageshero">
        <div className="wrap">
          <div className="eyebrow soak">Cennik &middot; alesierysuje.pl/cennik</div>
          <h1 className="soak d1">Cennik - live painting i portrety na zamówienie.</h1>
          <p className="lead soak d2">
            Ceny są jawne. Bez pisania po wycenę, bez "cena zależy". Jeśli coś wykracza poza tabelę,
            wyceniamy indywidualnie w 48 godzin.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="pt-sec soak">
            <h2>Malowanie na żywo - wesela</h2>
            <table className="ptable">
              <tbody>
                <tr>
                  <th>Pakiet</th>
                  <th>Zakres</th>
                  <th>Cena</th>
                </tr>
                {WEDDING_PACKAGES.map((p) => (
                  <tr key={p.key}>
                    <td>{p.name}</td>
                    <td>{p.scope}</td>
                    <td>{formatZl(p.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="note">
              Termin sprawdzicie bezpłatnym zapytaniem w kalendarzu. Dojazd na Mazowszu w cenie.
            </div>
          </div>
          <div className="pt-sec soak d1">
            <h2>Live art - eventy firmowe</h2>
            <table className="ptable">
              <tbody>
                <tr>
                  <th>Formuła</th>
                  <th>Zakres</th>
                  <th>Cena</th>
                </tr>
                {EVENT_PRICING.map((e) => (
                  <tr key={e.name}>
                    <td>{e.name}</td>
                    <td>{e.scope}</td>
                    <td>{e.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="note">Faktura VAT, umowa, wycena briefu w 48 h.</div>
          </div>
          <div className="pt-sec soak d2">
            <h2>Portrety na zamówienie ze zdjęcia</h2>
            <table className="ptable">
              <tbody>
                <tr>
                  <th>Format</th>
                  <th>Zakres</th>
                  <th>Cena</th>
                </tr>
                <tr>
                  <td>{pf.A4.label}</td>
                  <td>1 osoba &middot; akwarela &middot; wysyłka w cenie</td>
                  <td>{formatZl(pf.A4.price)}</td>
                </tr>
                <tr>
                  <td>{pf.A3.label}</td>
                  <td>1 osoba &middot; akwarela &middot; wysyłka w cenie</td>
                  <td>{formatZl(pf.A3.price)}</td>
                </tr>
                <tr>
                  <td>{pf["50x70"].label}</td>
                  <td>1 osoba &middot; akwarela &middot; wysyłka w cenie</td>
                  <td>{formatZl(pf["50x70"].price)}</td>
                </tr>
                <tr>
                  <td>Dodatki</td>
                  <td>
                    każda kolejna osoba +{PORTRAIT_PRICING.perExtraPerson} zł &middot; odręczna
                    dedykacja +{PORTRAIT_PRICING.dedication} zł
                  </td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <div className="note">
              Realizacja 10 - 14 dni. Cena układa się na żywo w{" "}
              <Link
                to="/portrety-na-zamowienie"
                style={{ borderBottom: "1px solid var(--color-ink)" }}
              >
                konfiguratorze portretu
              </Link>
              .
            </div>
          </div>
          <Link className="btn soak" to="/terminy">
            Sprawdź wolne terminy
          </Link>
        </div>
      </section>
    </main>
  );
}
