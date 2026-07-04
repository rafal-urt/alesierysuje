import type { Route } from "./+types/live-painting-wesele";
import { Link } from "react-router";
import { Faq } from "~/components/Faq";
import { WatercolorStain } from "~/components/WatercolorStain";
import { WEDDING_PACKAGES, EXTRA_ILLUSTRATION_PLN, formatZl } from "~/data/prices";
import { getDb } from "~/lib/payload.server";
import { pageMeta, breadcrumbJsonLd, SITE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";

export async function loader() {
  const db = await getDb();
  const s = await db.findGlobal({ slug: "settings" });
  return {
    prices: {
      kameralny: s.weddingPackages?.kameralny ?? 3900,
      klasyczny: s.weddingPackages?.klasyczny ?? 5900,
      prestizowy: s.weddingPackages?.prestizowy ?? 8900,
    } as Record<string, number>,
  };
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Live painting na wesele - malowanie na żywo | alesierysuje",
    description:
      "Akwarelowe portrety gości malowane na żywo podczas wesela - od 20 do 40 ilustracji A5 w jeden wieczór. Pakiety z jawnymi cenami od 3 900 zł i bezpłatna rezerwacja online.",
    path: "/live-painting-wesele",
    ogImage: "/og/wesele.png",
  });
}

const FAQ_ITEMS = [
  {
    q: "Ile miejsca potrzebuje sztaluga?",
    a: "Około 2 × 2 metry, najlepiej z widokiem na parkiet i dobrym światłem. Szczegóły dogadujemy bezpośrednio z salą.",
  },
  {
    q: "Czy farba zdąży wyschnąć przed końcem wesela?",
    a: "Tak - ilustracja A5 schnie kilka minut, a każda praca jest podpisywana, zabezpieczana i pakowana tak, żeby bezpiecznie dojechała do domu jeszcze tej nocy.",
  },
  {
    q: "Co, jeśli chętnych będzie więcej, niż zakłada pakiet?",
    a: "Nic straconego - każda kolejna ilustracja ponad pakiet kosztuje 100 zł. A jeśli nie zdążę namalować wszystkich na żywo, dokańczam je w pracowni na podstawie zdjęć i dosyłam po weselu.",
  },
  {
    q: "Co jeśli zmienimy datę wesela?",
    a: "Piszecie i sprawdzamy nowy termin w kalendarzu. Zapytanie jest bezpłatne, więc przy zmianie z wyprzedzeniem zwykle udaje się bez problemu.",
  },
  {
    q: "Malujecie też poprawiny?",
    a: "Tak, przy rezerwacji dwóch dni z rzędu drugi dzień jest wyceniany z rabatem - koszt dojazdu dzielicie tylko raz.",
  },
];

export default function LivePaintingWesele({ loaderData }: Route.ComponentProps) {
  const { prices } = loaderData;
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Live painting na wesele", path: "/live-painting-wesele" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Live painting na wesele",
          serviceType: "Malowanie na żywo na weselu",
          provider: { "@id": SITE_URL + "#business" },
          areaServed: "PL",
          offers: WEDDING_PACKAGES.map((p) => ({
            "@type": "Offer",
            name: `Pakiet ${p.name}`,
            price: String(prices[p.key] ?? p.price),
            priceCurrency: "PLN",
          })),
        }}
      />
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
      <WatercolorStain color="rose" width={520} height={460} style={{ top: 40, right: -160 }} />
      <section className="pageshero">
        <div className="wrap">
          <div className="eyebrow soak">Wesela &middot; alesierysuje.pl/live-painting-wesele</div>
          <h1 className="soak d1">Live painting na wesele - portrety gości malowane na żywo.</h1>
          <p className="lead soak d2">
            Fotograf łapie ułamki sekund. Ja zbieram Waszych gości - twarz po twarzy, na
            akwarelowych ilustracjach A5 malowanych, gdy wesele trwa. Od 20 do 40 portretów w jeden
            wieczór, każdy do zabrania od ręki. Ceny jawne, terminy widoczne, rezerwacja online.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="packs">
            {WEDDING_PACKAGES.map((p, i) => (
              <div
                key={p.key}
                className={`pack${i === 1 ? " p2" : i === 2 ? " p3" : ""}${p.featured ? " featured" : ""} soak${i === 1 ? " d1" : i === 2 ? " d2" : ""}`}
              >
                {p.featured && <div className="tag">najczęściej wybierany</div>}
                <h3>{p.name}</h3>
                <div className="for">{p.forWho}</div>
                <div className="price">
                  {formatZl(prices[p.key] ?? p.price).replace(" zł", "")} <span>zł</span>
                </div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link className={p.featured ? "btn" : "btn ghost"} to="/terminy">
                  Wybierz datę
                </Link>
              </div>
            ))}
          </div>
          <p className="deposit-note soak">
            Termin sprawdzacie w kalendarzu i rezerwujecie <b>bezpłatnym zapytaniem</b> - odpowiedź z
            potwierdzeniem dostępności wraca w 24 - 48 godzin. Gdy chętnych jest więcej, niż zakłada
            pakiet, każda kolejna ilustracja to <b>{EXTRA_ILLUSTRATION_PLN} zł</b> - a czego nie
            zdążę namalować na żywo, dokańczam w pracowni i dosyłam po weselu. Dojazd na terenie
            Mazowsza w cenie, dalej - wyceniany przy potwierdzeniu.
          </p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Proces</div>
            <h2>Od daty do obrazu na ścianie.</h2>
          </div>
          <div className="timeline">
            <div className="tl soak">
              <h4>Zapytanie</h4>
              <p>
                Wybieracie termin w kalendarzu i wysyłacie bezpłatne zapytanie. Potwierdzenie wraca w
                24 - 48 h.
              </p>
            </div>
            <div className="tl soak d1">
              <h4>Rozmowa</h4>
              <p>Ustalamy scenę: pierwszy taniec, sala, plener. Ale poznaje miejsce i światło.</p>
            </div>
            <div className="tl soak d2">
              <h4>Wesele</h4>
              <p>Sztaluga staje dyskretnie, a potem robi się wokół niej najgęściej na całej sali.</p>
            </div>
            <div className="tl soak d3">
              <h4>Ilustracje</h4>
              <p>
                Goście zabierają podpisane prace jeszcze tej nocy, a reszta dolatuje z pracowni po
                weselu.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">FAQ</div>
            <h2>Pytania, które padają najczęściej.</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="banner soak">
            <WatercolorStain color="rose" width={420} height={380} style={{ bottom: -140, left: -80 }} />
            <h2>Soboty w sezonie znikają pierwsze.</h2>
            <Link className="btn light" to="/terminy">
              Zobacz kalendarz 2027
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
