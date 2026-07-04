import type { Route } from "./+types/live-painting-wesele";
import { Link } from "react-router";
import { Faq } from "~/components/Faq";
import { WatercolorStain } from "~/components/WatercolorStain";
import { WEDDING_PACKAGES, formatZl } from "~/data/prices";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Live painting na wesele - malowanie na żywo | alesierysuje" },
    {
      name: "description",
      content:
        "Live painting na weselu - obraz malowany na żywo podczas przyjęcia. Pakiety z jawnymi cenami od 3 900 zł, wolne terminy w kalendarzu i bezpłatna rezerwacja online.",
    },
  ];
}

const FAQ_ITEMS = [
  {
    q: "Ile miejsca potrzebuje sztaluga?",
    a: "Około 2 × 2 metry, najlepiej z widokiem na parkiet i dobrym światłem. Szczegóły dogadujemy bezpośrednio z salą.",
  },
  {
    q: "Czy farba zdąży wyschnąć przed końcem wesela?",
    a: "Tak - akwarela schnie szybko, a praca jest zabezpieczana i pakowana tak, żeby bezpiecznie dojechała do domu jeszcze tej nocy.",
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

export default function LivePaintingWesele() {
  return (
    <main className="page">
      <WatercolorStain color="rose" width={520} height={460} style={{ top: 40, right: -160 }} />
      <section className="pageshero">
        <div className="wrap">
          <div className="eyebrow soak">Wesela &middot; alesierysuje.pl/live-painting-wesele</div>
          <h1 className="soak d1">Live painting na wesele - obraz malowany na żywo.</h1>
          <p className="lead soak d2">
            Fotograf łapie ułamki sekund. Malowanie na żywo zbiera cały wieczór - światło sali, ruch
            sukni, moment, w którym wszyscy patrzyli tylko na Was. Ceny jawne, terminy widoczne,
            rezerwacja online.
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
                  {formatZl(p.price).replace(" zł", "")} <span>zł</span>
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
            potwierdzeniem dostępności wraca w 24 - 48 godzin. Dojazd na terenie Mazowsza w cenie,
            dalej - wyceniany przy potwierdzeniu.
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
              <h4>Obraz</h4>
              <p>Podpisana praca zostaje z Wami tej nocy. Timelapse dolatuje mailem po kilku dniach.</p>
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
