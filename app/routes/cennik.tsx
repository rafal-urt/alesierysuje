import type { Route } from "./+types/cennik";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
import { WEDDING_PACKAGES, EVENT_PACKAGES, EXTRA_ILLUSTRATION_PLN, EXTRA_ILLUSTRATION_B2B_PLN, PORTRAIT_PRICING, formatZl } from "~/data/prices";
import { getDb } from "~/lib/payload.server";
import { pageMeta, breadcrumbJsonLd } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { Crumbs } from "~/components/Crumbs";
import { cacheContent } from "~/lib/cache";

export async function loader() {
  const db = await getDb();
  const s = await db.findGlobal({ slug: "settings" });
  return {
    wedding: {
      kameralny: s.weddingPackages?.kameralny ?? 4000,
      klasyczny: s.weddingPackages?.klasyczny ?? 6000,
      prestizowy: s.weddingPackages?.prestizowy ?? 9000,
    } as Record<string, number>,
    events: {
      networking: s.eventPackages?.networking ?? 4500,
      gala: s.eventPackages?.gala ?? 7000,
      konferencja: s.eventPackages?.konferencja ?? 11500,
    } as Record<string, number>,
    portraits: {
      a4: s.portraits?.a4 ?? 490,
      a3: s.portraits?.a3 ?? 690,
      b50x70: s.portraits?.b50x70 ?? 990,
      extraPerson: s.portraits?.extraPerson ?? 160,
      dedication: s.portraits?.dedication ?? 90,
    },
  };
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Cennik - live painting i portrety | alesierysuje",
    description:
      "Jawne ceny live paintingu i portretów: pakiety weselne od 4 000 zł, eventy firmowe od 4 500 zł, portrety na zamówienie od 490 zł.",
    path: "/cennik",
    ogImage: "/og/cennik.png",
  });
}

export default function Cennik({ loaderData }: Route.ComponentProps) {
  const { wedding, events, portraits } = loaderData;
  const pf = PORTRAIT_PRICING.formats;
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Cennik", path: "/cennik" }])} />
      <WatercolorStain color="blue" width={480} height={420} style={{ top: 80, right: -160 }} />
      <section className="pageshero">
        <div className="wrap">
          <Crumbs items={[{ name: "Cennik" }]} />
          <h1 className="soak d1">Cennik - live painting i portrety na zamówienie</h1>
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
                    <td>{formatZl(wedding[p.key] ?? p.price)}</td>
                  </tr>
                ))}
                <tr>
                  <td>Dodatkowa ilustracja</td>
                  <td>każda praca ponad pakiet · na żywo albo z dosyłką po weselu</td>
                  <td>{formatZl(EXTRA_ILLUSTRATION_PLN)}</td>
                </tr>
              </tbody>
            </table>
            <div className="note">
              Termin sprawdzicie bezpłatnym zapytaniem w kalendarzu. Ilustracje, których nie zdążę
              namalować na żywo, dokańczam w pracowni i dosyłam po weselu. Dojazd na Mazowszu w
              cenie.
            </div>
          </div>
          <div className="pt-sec soak d1">
            <h2>Live art - eventy firmowe</h2>
            <table className="ptable">
              <tbody>
                <tr>
                  <th>Pakiet</th>
                  <th>Zakres</th>
                  <th>Cena</th>
                </tr>
                {EVENT_PACKAGES.map((e) => (
                  <tr key={e.key}>
                    <td>{e.name}</td>
                    <td>{e.scope}</td>
                    <td>{formatZl(events[e.key] ?? e.price)}</td>
                  </tr>
                ))}
                <tr>
                  <td>Dodatkowa ilustracja</td>
                  <td>każda praca ponad pakiet · na żywo albo z dosyłką po evencie</td>
                  <td>{formatZl(EXTRA_ILLUSTRATION_B2B_PLN)}</td>
                </tr>
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
                  <td>{formatZl(portraits.a4)}</td>
                </tr>
                <tr>
                  <td>{pf.A3.label}</td>
                  <td>1 osoba &middot; akwarela &middot; wysyłka w cenie</td>
                  <td>{formatZl(portraits.a3)}</td>
                </tr>
                <tr>
                  <td>{pf["50x70"].label}</td>
                  <td>1 osoba &middot; akwarela &middot; wysyłka w cenie</td>
                  <td>{formatZl(portraits.b50x70)}</td>
                </tr>
                <tr>
                  <td>Dodatki</td>
                  <td>
                    każda kolejna osoba +{portraits.extraPerson} zł &middot; odręczna
                    dedykacja +{portraits.dedication} zł
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

export const headers = cacheContent;
