import type { Route } from "./+types/minimalistyczne-ilustracje-ze-zdjecia";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
import { pageMeta, breadcrumbJsonLd, SITE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { Crumbs } from "~/components/Crumbs";
import { cacheContent } from "~/lib/cache";

/*
 * TRESC TYMCZASOWA - do podmiany na docelowa.
 * Szkielet, SEO, nawigacja i JSON-LD sa gotowe; akapity do wypelnienia nosza
 * komentarz TRESC. Swiadomie nie ma tu cen, terminow realizacji ani liczb -
 * te trafiaja do wynikow wyszukiwania, wiec nie zmyslamy ich.
 * Gdy dojdzie cennik: dolozyc Product/Offer jak na /portrety-na-zamowienie
 * (tam cena idzie z CMS - wtedy ta trasa dostanie loader).
 */

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Minimalistyczne ilustracje ze zdjęcia - A5 i A4 | alesierysuje",
    description:
      "Minimalistyczne ilustracje ze zdjęcia malowane ręcznie - formaty A5 i A4. Oszczędna kreska, dużo światła, papier akwarelowy.",
    path: "/minimalistyczne-ilustracje-ze-zdjecia",
  });
}

export default function MinimalistyczneIlustracje() {
  return (
    <main className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Minimalistyczne ilustracje", path: "/minimalistyczne-ilustracje-ze-zdjecia" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/minimalistyczne-ilustracje-ze-zdjecia#usluga`,
          name: "Minimalistyczne ilustracje ze zdjęcia",
          serviceType: "Ilustracja na zamówienie",
          description:
            "Minimalistyczne ilustracje malowane ręcznie na podstawie zdjęcia, w formatach A5 i A4.",
          provider: { "@id": `${SITE_URL}#business` },
          areaServed: "PL",
          inLanguage: "pl-PL",
        }}
      />

      <section className="pageshero">
        <WatercolorStain color="blue" width={440} height={400} style={{ top: 40, right: -140 }} />
        <div className="wrap">
          <Crumbs items={[{ name: "Minimalistyczne ilustracje" }]} />
          <h1 className="soak d1">Minimalistyczne ilustracje ze zdjęcia - A5 i A4</h1>
          {/* TRESC: lead - czym te ilustracje roznia sie od portretow akwarelowych */}
          <p className="lead soak d2">
            Oszczędna kreska zamiast dosłowności - tyle szczegółu, ile potrzeba, żeby rozpoznać
            osobę, i tyle światła, żeby rysunek oddychał. Malowane ręcznie na papierze
            akwarelowym, na podstawie przysłanego zdjęcia.
          </p>
          <p className="soak d3">
            <Link className="btn" to="/kontakt">
              Zamów ilustrację
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Formaty</div>
            <h2>Dwa rozmiary, dwa różne zastosowania</h2>
          </div>
          <div className="steps">
            {/* TRESC: dla kogo kazdy format, co sie na nim miesci */}
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>A5 - 14,8 x 21 cm</h3>
              <p>
                Format kameralny - jedna postać albo para. Dobrze wygląda na półce i w małej
                ramce, naturalnie sprawdza się jako drobny upominek.
              </p>
            </div>
            <div className="step soak d1">
              <div className="brush" style={{ background: "var(--color-wash-blue)" }} />
              <h3>A4 - 21 x 29,7 cm</h3>
              <p>
                Więcej miejsca na tło i detal - wybór na ścianę i na prezent, który ma być
                zauważony od progu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head soak">
            <div className="eyebrow">Jak to działa</div>
            <h2>Od zdjęcia do gotowej ilustracji</h2>
          </div>
          {/* TRESC: kroki zamowienia, wymagania wobec zdjecia, co dostaje klient,
              czas realizacji i wysylka. Do uzupelnienia razem z cennikiem. */}
          <div className="steps">
            <div className="step soak">
              <div className="brush" style={{ background: "var(--color-wash-ochre)" }} />
              <h3>Przysyłasz zdjęcie</h3>
              <p>
                Wystarczy zwykła fotografia - liczy się ostra twarz i dobre światło. Podpowiem,
                które ujęcie da najlepszy efekt.
              </p>
            </div>
            <div className="step soak d1">
              <div className="brush" style={{ background: "var(--color-wash-rose)" }} />
              <h3>Ustalamy format</h3>
              <p>
                Wybieramy A5 albo A4 i omawiamy szczegóły - ile postaci, czy zostaje tło, czy
                ilustracja ma nieść podpis.
              </p>
            </div>
            <div className="step soak d2">
              <div className="brush" style={{ background: "var(--color-wash-blue)" }} />
              <h3>Maluję i wysyłam</h3>
              <p>
                Ilustracja powstaje ręcznie na papierze akwarelowym. Do Ciebie trafia oryginał,
                zabezpieczony na czas transportu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="banner soak">
            <WatercolorStain
              color="ochre"
              width={420}
              height={380}
              style={{ bottom: -140, left: -80 }}
            />
            <h2>Masz zdjęcie, które chcesz zamienić w ilustrację?</h2>
            <Link className="btn light" to="/kontakt">
              Napisz do mnie
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export const headers = cacheContent;
