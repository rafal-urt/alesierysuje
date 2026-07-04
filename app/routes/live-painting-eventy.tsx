import type { Route } from "./+types/live-painting-eventy";
import { WatercolorStain } from "~/components/WatercolorStain";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Live art na event firmowy - malowanie na żywo | alesierysuje" },
    {
      name: "description",
      content:
        "Live art na eventy firmowe - malowanie na żywo i szybkie portrety gości na papierze pod branding. Faktura VAT, umowa, odpowiedź na brief z wyceną w 48 h.",
    },
  ];
}

export default function LivePaintingEventy() {
  return (
    <main className="page">
      <WatercolorStain color="ochre" width={500} height={440} style={{ top: 60, right: -140 }} />
      <section className="pageshero">
        <div className="wrap">
          <div className="eyebrow soak">Eventy firmowe &middot; alesierysuje.pl/live-painting-eventy</div>
          <h1 className="soak d1">Live art na event firmowy - malowanie na żywo i portrety gości.</h1>
          <p className="lead soak d2">
            Jeden obraz sceny wydarzenia albo seria szybkich portretów gości na papierze
            przygotowanym pod branding eventu. Faktura VAT, umowa, jedna osoba kontaktowa. Brief
            zajmuje minutę.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="bstats">
            <div className="bstat soak">
              <b>40+</b>
              <span>portretów gości w jeden wieczór - każdy podpisany i gotowy do zabrania</span>
            </div>
            <div className="bstat soak d1">
              <b>120</b>
              <span>osób na największym dotąd obsłużonym evencie firmowym nad morzem</span>
            </div>
            <div className="bstat soak d2">
              <b>48 h</b>
              <span>maksymalny czas odpowiedzi na brief z gotową wyceną i propozycją formuły</span>
            </div>
          </div>
          <div className="sec-head soak">
            <h2>Brief w pięciu polach.</h2>
            <p>Bez PDF-ów na start. Wystarczy zarys, resztę doprecyzujemy w rozmowie.</p>
          </div>
          {/* Wysyłka briefu do kolekcji briefs dochodzi w Etapie 4 */}
          <form className="brief soak">
            <label htmlFor="brief-company">Firma / agencja</label>
            <input id="brief-company" name="company" type="text" placeholder="np. Studio Eventowe Północ" />
            <label htmlFor="brief-datecity">Data i miasto</label>
            <input id="brief-datecity" name="dateCity" type="text" placeholder="np. 18 września 2027, Gdańsk" />
            <label htmlFor="brief-guests">Liczba gości</label>
            <select id="brief-guests" name="guests">
              <option>do 50</option>
              <option>50 - 120</option>
              <option>120 - 250</option>
              <option>250+</option>
            </select>
            <label htmlFor="brief-format">Formuła</label>
            <select id="brief-format" name="format">
              <option>Szybkie portrety gości</option>
              <option>Jeden obraz sceny wydarzenia</option>
              <option>Jeszcze nie wiemy - doradźcie</option>
            </select>
            <label htmlFor="brief-email">E-mail kontaktowy</label>
            <input id="brief-email" name="email" type="email" placeholder="imie@firma.pl" />
            <button className="btn" type="submit">
              Wyślij brief
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
