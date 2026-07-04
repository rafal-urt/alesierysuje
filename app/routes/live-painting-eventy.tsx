import type { Route } from "./+types/live-painting-eventy";
import { Link } from "react-router";
import { Faq } from "~/components/Faq";
import { WatercolorStain } from "~/components/WatercolorStain";
import { WatercolorPlaceholder } from "~/components/WatercolorPlaceholder";
import { EVENT_PRICING, EXTRA_ILLUSTRATION_PLN, formatZl } from "~/data/prices";
import { getDb } from "~/lib/payload.server";
import { plMonthYear } from "~/lib/dates";
import { pageMeta, breadcrumbJsonLd, SITE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";

export async function loader() {
  const db = await getDb();
  const [settings, reviews] = await Promise.all([
    db.findGlobal({ slug: "settings" }),
    db.find({ collection: "reviews", sort: "-date", limit: 20 }),
  ]);
  const eventReviews = reviews.docs
    .filter((r) => /event|imprez|firmow|gal/i.test(r.location ?? ""))
    .slice(0, 3)
    .map((r) => ({
      author: r.author,
      text: r.text,
      where: r.location ?? "",
      when: plMonthYear(r.date),
    }));
  return {
    priceFrom: settings.eventPricing?.portraits ?? 3500,
    reviews: eventReviews,
  };
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Live art na event firmowy - malowanie na żywo | alesierysuje",
    description:
      "Live art na eventy firmowe - seria akwarelowych portretów gości malowanych na żywo. 20 - 40 ilustracji A5, papier pod branding, faktura VAT. Sprawdź wolne terminy online.",
    path: "/live-painting-eventy",
    ogImage: "/og/eventy.png",
  });
}

const FAQ_ITEMS = [
  {
    q: "Czy goście muszą pozować albo stać w kolejce?",
    a: "Nie - goście podchodzą do kącika live art tylko na szybkie zdjęcie i wracają do rozmów, a ja maluję z fotografii. Gotowe ilustracje czekają w kąciku, każdy odbiera swoją w dogodnym momencie.",
  },
  {
    q: "Ile ilustracji powstanie na naszym evencie?",
    a: "Na żywo od 20 do 40 ilustracji A5 - jeden portret to 10 - 15 minut malowania. Jeśli chętnych będzie więcej, każda kolejna ilustracja to 100 zł, a czego nie zdążę namalować na żywo, dokańczam w pracowni i dosyłam po evencie.",
  },
  {
    q: "Czy papier może być przygotowany pod nasz branding?",
    a: "Tak - papier przygotowuję indywidualnie pod identyfikację wydarzenia: logo, kolory, motyw przewodni. Pamiątka nosi Waszą markę, a mimo to goście naprawdę chcą ją zatrzymać.",
  },
  {
    q: "Czy wystawiacie fakturę VAT?",
    a: "Tak - faktura VAT i umowa to standard. Po Waszej stronie jest jedna osoba kontaktowa, po mojej też: wszystko domykamy mailowo, bez łańcuszków.",
  },
  {
    q: "Nasz event trwa krócej albo dłużej niż standard - co wtedy?",
    a: "Nic straconego - formaty nietypowe (krótkie gale, całodniowe konferencje, dwa dni targów) wyceniam indywidualnie w 48 godzin od zapytania.",
  },
];

export default function LivePaintingEventy({ loaderData }: Route.ComponentProps) {
  const { priceFrom, reviews } = loaderData;
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Live art na event firmowy", path: "/live-painting-eventy" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Live art na event firmowy",
          serviceType: "Akwarelowe portrety gości malowane na żywo podczas eventów firmowych",
          provider: { "@id": SITE_URL + "#business" },
          areaServed: "PL",
          offers: {
            "@type": "Offer",
            price: String(priceFrom),
            priceCurrency: "PLN",
          },
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
      <WatercolorStain color="ochre" width={500} height={440} style={{ top: 60, right: -140 }} />

      {/* hero: obietnica + wachlarz ilustracji */}
      <section className="pageshero">
        <div className="wrap split-hero">
          <div>
            <h1 className="soak d1">Live art na event firmowy - malowanie na żywo i portrety gości</h1>
            <p className="lead soak d2">
              Seria akwarelowych portretów gości malowanych w trakcie wydarzenia - od 20 do 40
              ilustracji A5 na papierze przygotowanym pod branding eventu. Goście wpadają do kącika
              live art na szybkie zdjęcie, wracają do rozmów, a wychodzą z pamiątką, którą naprawdę
              zatrzymają. Faktura VAT, umowa, jedna osoba kontaktowa.
            </p>
            <div className="hero-cta soak d3">
              <Link className="btn" to="/terminy">
                Sprawdź termin
              </Link>
              <a className="btn ghost" href="#cennik-eventy">
                Zobacz ceny
              </a>
            </div>
          </div>
          <div className="a5-stack soak d2" aria-hidden="true">
            <div className="frame">
              <WatercolorPlaceholder seed={41} palette={2} width={210} height={296} />
              <div className="cap">zespół projektowy</div>
            </div>
            <div className="frame">
              <WatercolorPlaceholder seed={83} palette={0} width={210} height={296} />
              <div className="cap">gość specjalny</div>
            </div>
            <div className="frame">
              <WatercolorPlaceholder seed={47} palette={4} width={210} height={296} />
              <div className="cap">prezes zarządu</div>
            </div>
          </div>
        </div>
      </section>

      {/* liczby */}
      <section style={{ paddingTop: 20, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="bstats b4">
            <div className="bstat soak">
              <b>20 - 40</b>
              <span>ilustracji gości powstaje podczas jednego wydarzenia</span>
            </div>
            <div className="bstat soak d1">
              <b>120</b>
              <span>osób na największym dotąd obsłużonym evencie firmowym</span>
            </div>
            <div className="bstat soak d2">
              <b>10 - 15 min</b>
              <span>tyle trwa namalowanie jednego akwarelowego portretu</span>
            </div>
            <div className="bstat soak d3">
              <b>48 h</b>
              <span>maksymalny czas odpowiedzi na zapytanie z wyceną</span>
            </div>
          </div>
        </div>
      </section>

      {/* proces */}
      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Jak to działa</div>
            <h2>Od zapytania do pamiątek w cztery kroki</h2>
          </div>
          <div className="timeline">
            <div className="tl soak">
              <h4>Termin</h4>
              <p>
                Sprawdzacie datę w kalendarzu online i wysyłacie bezpłatne zapytanie. Wracam w
                24 - 48 h z wyceną i propozycją formuły.
              </p>
            </div>
            <div className="tl soak d1">
              <h4>Ustalenia</h4>
              <p>
                Papier pod branding, kolorystyka, godziny i miejsce kącika - wszystko domykamy
                mailowo. Umowa i faktura VAT w standardzie.
              </p>
            </div>
            <div className="tl soak d2">
              <h4>Event</h4>
              <p>
                Goście podchodzą do kącika na szybkie zdjęcie i wracają do rozmów. Maluję z
                fotografii, a gotowe prace odbiera się z kącika.
              </p>
            </div>
            <div className="tl soak d3">
              <h4>Po evencie</h4>
              <p>
                Czego nie zdążę namalować na żywo, dokańczam w pracowni i dosyłam - komplet
                pamiątek trafia do gości.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* dla kogo */}
      <section style={{ paddingTop: 10 }}>
        <WatercolorStain color="blue" width={460} height={400} style={{ top: 60, left: -150 }} />
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Dla kogo</div>
            <h2>Formaty, na których to gra najlepiej</h2>
          </div>
          <div className="steps">
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-ochre)" }} />
              <h3>Gale i jubileusze</h3>
              <p>
                Wieczory, na których liczy się klasa - portrety gości dołączają do eleganckiej
                oprawy i zostają po evencie jako pamiątka z wydarzenia.
              </p>
            </div>
            <div className="step soak d1">
              <div className="brush" style={{ background: "var(--color-wash-blue)" }} />
              <h3>Eventy integracyjne</h3>
              <p>
                Kącik live art naturalnie zbiera ludzi i daje temat do rozmów - a każdy wraca z
                imprezy z własnym portretem zamiast służbowego gadżetu.
              </p>
            </div>
            <div className="step soak d2">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>Premiery i konferencje</h3>
              <p>
                Papier pod branding sprawia, że logo wydarzenia wisi potem w domach gości - to
                zasięg, którego nie da żadna smycz ani kubek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* cennik */}
      <section id="cennik-eventy" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Ceny</div>
            <h2>Jawne stawki, zero "napisz po wycenę"</h2>
          </div>
          <div className="pt-sec soak">
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
                    <td>od {formatZl(priceFrom)}</td>
                  </tr>
                ))}
                <tr>
                  <td>Dodatkowa ilustracja</td>
                  <td>każda praca ponad pakiet · na żywo albo z dosyłką po evencie</td>
                  <td>{formatZl(EXTRA_ILLUSTRATION_PLN)}</td>
                </tr>
              </tbody>
            </table>
            <div className="note">
              Formaty nietypowe wyceniam indywidualnie w 48 h. Faktura VAT i umowa w standardzie.
            </div>
          </div>
          <Link className="btn ghost soak" to="/cennik">
            Zobacz pełny cennik
          </Link>
        </div>
      </section>

      {/* opinie */}
      {reviews.length > 0 && (
        <section style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="sec-head soak">
              <div className="eyebrow">Opinie</div>
              <h2>Organizatorzy o swoich eventach</h2>
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
            <h2>Pytania, które padają najczęściej</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="banner soak">
            <WatercolorStain color="ochre" width={420} height={380} style={{ bottom: -140, left: -80 }} />
            <h2>Wasi goście zapamiętają ten wieczór</h2>
            <Link className="btn light" to="/terminy">
              Sprawdź termin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
