import type { Route } from "./+types/live-painting-wesele";
import { Link } from "react-router";
import { Faq } from "~/components/Faq";
import { WatercolorStain } from "~/components/WatercolorStain";
import { WatercolorPlaceholder } from "~/components/WatercolorPlaceholder";
import { WEDDING_PACKAGES, EXTRA_ILLUSTRATION_PLN } from "~/data/prices";
import { PackagesAccordion } from "~/components/PackagesAccordion";
import { getDb } from "~/lib/payload.server";
import { plMonthYear } from "~/lib/dates";
import { pageMeta, breadcrumbJsonLd, SITE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";

export async function loader() {
  const db = await getDb();
  const [settings, reviews] = await Promise.all([
    db.findGlobal({ slug: "settings" }),
    db.find({ collection: "reviews", sort: "-date", limit: 3 }),
  ]);
  return {
    prices: {
      kameralny: settings.weddingPackages?.kameralny ?? 4000,
      klasyczny: settings.weddingPackages?.klasyczny ?? 6000,
      prestizowy: settings.weddingPackages?.prestizowy ?? 9000,
    } as Record<string, number>,
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
    title: "Live painting na wesele - malowanie na żywo | alesierysuje",
    description:
      "Kilkadziesiąt akwarelowych portretów gości i Pary Młodej malowanych podczas wesela. Szybkie zdjęcie w kąciku live art, akwarela z fotografii, odbiór na miejscu. Pakiety od 4 000 zł.",
    path: "/live-painting-wesele",
    ogImage: "/og/wesele.png",
  });
}

const FAQ_ITEMS = [
  {
    q: "Czy goście muszą pozować albo stać w kolejce?",
    a: "Nie - i to największa różnica względem klasycznych karykatur. Goście podchodzą do kącika live art tylko na szybkie zdjęcie i wracają do zabawy, a ja maluję z fotografii. Gotowe ilustracje czekają w kąciku live art, więc każdy odbiera swoją wtedy, kiedy mu wygodnie.",
  },
  {
    q: "Ile trwa namalowanie jednego portretu?",
    a: "Od 10 do 15 minut. Na żywo powstaje do 30 ilustracji w jeden wieczór, a w pakietach Klasycznym i Premium kolejne maluję w pracowni i wysyłam po weselu.",
  },
  {
    q: "Co, jeśli chętnych będzie więcej, niż zakłada pakiet?",
    a: "Nic straconego - każda kolejna ilustracja ponad pakiet kosztuje 100 zł. A jeśli nie zdążę namalować wszystkich na żywo, dokańczam je w pracowni na podstawie zdjęć i dosyłam po weselu.",
  },
  {
    q: "Ile miejsca potrzebuje stanowisko?",
    a: "Około 2 × 2 metry na stolik i sztalugę z ekspozycją prac, najlepiej z widokiem na parkiet i dobrym światłem. Szczegóły dogaduję bezpośrednio z salą.",
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
  const { prices, reviews } = loaderData;
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Live painting na wesele", path: "/live-painting-wesele" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Live painting na wesele",
          serviceType: "Akwarelowe portrety gości malowane na żywo podczas wesela",
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

      {/* hero: obietnica + wachlarz ilustracji A5 */}
      <section className="pageshero">
        <div className="wrap split-hero">
          <div>
            <h1 className="soak d1">Live painting na wesele - portrety gości malowane na żywo.</h1>
            <p className="lead soak d2">
              Nie jeden wielki obraz, a kilkadziesiąt małych wspomnień: akwarelowe portrety Waszych
              gości i Wasz własny, malowane w trakcie przyjęcia. Goście wpadają do kącika live art
              na szybkie zdjęcie i wracają do zabawy - ja maluję z fotografii, a gotowe ilustracje
              odbierają z kącika i zabierają do domu jeszcze tej nocy.
            </p>
            <div className="hero-cta soak d3">
              <Link className="btn" to="/terminy">
                Sprawdź swój termin
              </Link>
              <a className="btn ghost" href="#pakiety">
                Zobacz pakiety i ceny
              </a>
            </div>
            <div className="trust-line soak d3">
              <span className="stars" aria-hidden="true">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              5/5 &middot; opinie par z portalu Wesele z klasą
            </div>
          </div>
          <div className="a5-stack soak d2" aria-hidden="true">
            <div className="frame">
              <WatercolorPlaceholder seed={23} palette={1} width={210} height={296} />
              <div className="cap">świadkowa</div>
            </div>
            <div className="frame">
              <WatercolorPlaceholder seed={11} palette={0} width={210} height={296} />
              <div className="cap">Para Młoda</div>
            </div>
            <div className="frame">
              <WatercolorPlaceholder seed={71} palette={3} width={210} height={296} />
              <div className="cap">dziadek Staszek</div>
            </div>
          </div>
        </div>
      </section>

      {/* liczby wieczoru */}
      <section style={{ paddingTop: 20, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="bstats b4">
            <div className="bstat soak">
              <b>do 60</b>
              <span>ilustracji z jednego wesela - na żywo i z dosyłką z pracowni</span>
            </div>
            <div className="bstat soak d1">
              <b>10 - 15 min</b>
              <span>tyle trwa namalowanie jednego akwarelowego portretu</span>
            </div>
            <div className="bstat soak d2">
              <b>0 minut</b>
              <span>w kolejce - szybkie zdjęcie w kąciku i wracacie do zabawy</span>
            </div>
            <div className="bstat soak d3">
              <b>A5 &middot; 300 g</b>
              <span>format ilustracji - akwarela na papierze bawełnianym</span>
            </div>
          </div>
        </div>
      </section>

      {/* proces */}
      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Jak to działa</div>
            <h2>Wieczór krok po kroku.</h2>
            <p>
              Goście bawią się dalej, a sztaluga sama przyciąga - najpierw ciekawskich, potem
              wszystkich.
            </p>
          </div>
          <div className="timeline">
            <div className="tl soak">
              <h4>Zapytanie</h4>
              <p>
                Wybieracie termin w kalendarzu i wysyłacie bezpłatne zapytanie. Odpowiedź wraca w
                24 - 48 h, potem ustalamy szczegóły.
              </p>
            </div>
            <div className="tl soak d1">
              <h4>Zdjęcie w kąciku</h4>
              <p>
                Goście podchodzą do kącika live art, robię im na miejscu szybkie zdjęcie i wracają
                do zabawy - bez pozowania i czekania.
              </p>
            </div>
            <div className="tl soak d2">
              <h4>Akwarela przy sztaludze</h4>
              <p>
                Każdy portret to 10 - 15 minut malowania. Gotowe prace czekają w kąciku live art -
                goście odbierają swoje, kiedy chcą.
              </p>
            </div>
            <div className="tl soak d3">
              <h4>Pamiątki na lata</h4>
              <p>
                Podpisane ilustracje jadą do domów jeszcze tej nocy. Czego nie zdążę namalować,
                dokańczam w pracowni i dosyłam po weselu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* pakiety */}
      <section id="pakiety" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Pakiety</div>
            <h2>Trzy pakiety, jawne ceny.</h2>
            <p>Każdy zawiera portret Pary Młodej i podpisane, zabezpieczone prace dla gości.</p>
          </div>
          <div className="soak d1">
            <PackagesAccordion prices={prices} />
          </div>
          <p className="deposit-note soak">
            Termin sprawdzacie w kalendarzu i rezerwujecie <b>bezpłatnym zapytaniem</b> - odpowiedź
            wraca w 24 - 48 godzin. Gdy chętnych jest więcej, niż zakłada pakiet, każda kolejna
            ilustracja to <b>{EXTRA_ILLUSTRATION_PLN} zł</b> - a czego nie zdążę namalować na żywo,
            dokańczam w pracowni i dosyłam po weselu. Dojazd na terenie Mazowsza w cenie, dalej -
            wyceniany przy potwierdzeniu.
          </p>
        </div>
      </section>

      {/* opinie */}
      {reviews.length > 0 && (
        <section style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="sec-head soak">
              <div className="eyebrow">Opinie</div>
              <h2>Pary o swoich wieczorach.</h2>
            </div>
            <div className="quotes">
              {reviews.map((r, i) => (
                <div className={`quote soak${i === 1 ? " d1" : i === 2 ? " d2" : ""}`} key={r.author}>
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
      )}

      {/* FAQ */}
      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">FAQ</div>
            <h2>Pytania, które padają najczęściej.</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="banner soak">
            <WatercolorStain color="rose" width={420} height={380} style={{ bottom: -140, left: -80 }} />
            <h2>Najlepsze terminy w sezonie znikają pierwsze.</h2>
            <Link className="btn light" to="/terminy">
              Zobacz kalendarz 2027
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
