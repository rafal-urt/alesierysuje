import { Link } from "react-router";
import type { City } from "~/data/cities";
import { Faq } from "~/components/Faq";
import { A5Stack } from "~/components/A5Stack";
import { WatercolorStain } from "~/components/WatercolorStain";
import { PackagesAccordion } from "~/components/PackagesAccordion";
import { JsonLd } from "~/components/JsonLd";
import { WEDDING_PACKAGES, EXTRA_ILLUSTRATION_PLN, formatZl } from "~/data/prices";
import { breadcrumbJsonLd, SITE_URL } from "~/lib/seo";

export type CityPageData = {
  weddingPrices: Record<string, number>;
  eventFrom: number;
  reviews: { author: string; text: string; where: string; when: string }[];
};

// Szablon strony lokalnej SEO - treść (hero, intro, FAQ) przychodzi z cities.ts,
// ceny i opinie z Payload przez loader konkretnej trasy.
export function CityPage({ city, data }: { city: City; data: CityPageData }) {
  const { weddingPrices, eventFrom, reviews } = data;
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: `Live painting ${city.name}`, path: `/${city.slug}` }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Live painting ${city.name}`,
          serviceType: `Akwarelowe portrety gości malowane na żywo na weselach i eventach ${city.inCity}`,
          provider: { "@id": SITE_URL + "#business" },
          areaServed: city.areaServed,
          offers: WEDDING_PACKAGES.map((p) => ({
            "@type": "Offer",
            name: `Pakiet ${p.name}`,
            price: String(weddingPrices[p.key] ?? p.price),
            priceCurrency: "PLN",
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: city.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <WatercolorStain color="blue" width={500} height={440} style={{ top: 60, right: -140 }} />

      {/* hero */}
      <section className="pageshero">
        <div className="wrap split-hero">
          <div>
            <h1 className="soak d1">{city.h1}</h1>
            <p className="lead soak d2">{city.lead}</p>
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
          <A5Stack caps={["Para Młoda", "świadkowa", "goście"]} />
        </div>
      </section>

      {/* intro lokalne */}
      <section style={{ paddingTop: 30, paddingBottom: 20 }}>
        <div className="wrap manifesto">
          <div className="eyebrow soak">Live painting {city.inCity.replace(/^w /, "")}</div>
          {city.intro.map((par) => (
            <p className="soak d1" key={par.slice(0, 32)}>
              {par}
            </p>
          ))}
          <p className="soak d2" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--color-ink-faint)" }}>
            {city.areas}
          </p>
          <div className="links soak d2">
            <Link to="/malowanie-na-zywo-wesele">Live painting na wesele</Link>
            <Link to="/malowanie-na-zywo-eventy">Live art na event</Link>
            <Link to="/realizacje">Realizacje</Link>
            <Link to="/cennik">Cennik</Link>
          </div>
        </div>
      </section>

      {/* liczby */}
      <section style={{ paddingTop: 0, paddingBottom: 0 }}>
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
              <span>format ilustracji - akwarela na papierze 300 g</span>
            </div>
          </div>
        </div>
      </section>

      {/* proces */}
      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Jak to działa</div>
            <h2>Wieczór krok po kroku</h2>
          </div>
          <div className="timeline">
            <div className="tl soak">
              <h3>Zapytanie</h3>
              <p>
                Wybieracie termin w kalendarzu online i wysyłacie bezpłatne zapytanie. Odpowiedź
                wraca w 24 - 48 h.
              </p>
            </div>
            <div className="tl soak d1">
              <h3>Zdjęcie w kąciku</h3>
              <p>
                Goście podchodzą do kącika live art, robię im na miejscu szybkie zdjęcie i wracają
                do zabawy - bez pozowania i czekania.
              </p>
            </div>
            <div className="tl soak d2">
              <h3>Akwarela przy sztaludze</h3>
              <p>
                Każdy portret to 10 - 15 minut malowania. Gotowe prace czekają w kąciku live art -
                goście odbierają swoje, kiedy chcą.
              </p>
            </div>
            <div className="tl soak d3">
              <h3>Pamiątki na lata</h3>
              <p>
                Podpisane ilustracje jadą do domów jeszcze tej nocy. Czego nie zdążę namalować,
                dokańczam w pracowni i dosyłam po weselu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* pakiety weselne */}
      <section id="pakiety" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Pakiety weselne</div>
            <h2>Trzy pakiety, jawne ceny</h2>
            <p>Ceny są takie same w całej Polsce - różni się tylko koszt dojazdu.</p>
          </div>
          <div className="soak d1">
            <PackagesAccordion packages={WEDDING_PACKAGES} prices={weddingPrices} />
          </div>
          <p className="deposit-note soak">
            Gdy chętnych jest więcej, niż zakłada pakiet, każda kolejna ilustracja to{" "}
            <b>{EXTRA_ILLUSTRATION_PLN} zł</b>. Termin sprawdzacie w kalendarzu i rezerwujecie
            bezpłatnym zapytaniem - odpowiedź wraca w 24 - 48 godzin.
          </p>
        </div>
      </section>

      {/* eventy firmowe */}
      <section style={{ paddingTop: 20 }}>
        <WatercolorStain color="ochre" width={440} height={380} style={{ top: 40, left: -150 }} />
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Eventy firmowe</div>
            <h2>Live art na eventach {city.inCity.replace(/^w /, "")}</h2>
            <p>
              Gale, premiery, integracje i konferencje - portrety gości na papierze przygotowanym
              pod branding wydarzenia. Pakiety eventowe od {formatZl(eventFrom)}, faktura VAT i
              umowa w standardzie.
            </p>
          </div>
          <Link className="btn ghost soak" to="/malowanie-na-zywo-eventy">
            Zobacz ofertę dla firm &rarr;
          </Link>
        </div>
      </section>

      {/* live painting vs karykaturzysta */}
      <section style={{ paddingTop: 40 }}>
        <div className="wrap manifesto">
          <div className="eyebrow soak">Live painting czy karykaturzysta?</div>
          <h2 className="soak d1">To nie karykatury - to portrety</h2>
          <p className="soak d2">
            Szukając rysownika na wesele, traficie też na karykaturzystów - to pokrewna, ale inna
            usługa. Karykatura gra przerysowaniem i żartem, akwarelowy portret zostaje na ścianie
            na lata. U mnie goście nie pozują i nie stoją w kolejce: maluję z fotografii, które
            robię na miejscu, a każda ilustracja jest podpisana i zabezpieczona jak mała praca z
            pracowni. Jeśli więc wahacie się między karykaturzystą a malowaniem na żywo - różnica
            jest mniej więcej taka, jak między gadżetem a pamiątką.
          </p>
        </div>
      </section>

      {/* opinie */}
      {reviews.length > 0 && (
        <section style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="sec-head soak">
              <div className="eyebrow">Opinie</div>
              <h2>Pary i organizatorzy z regionu</h2>
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

      {/* FAQ lokalne */}
      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">FAQ</div>
            <h2>Pytania par z regionu</h2>
          </div>
          <Faq items={city.faq} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="banner soak">
            <WatercolorStain color="blue" width={420} height={380} style={{ bottom: -140, left: -80 }} />
            <h2>Najlepsze terminy w sezonie znikają pierwsze</h2>
            <Link className="btn light" to="/terminy">
              Sprawdź wolne terminy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
