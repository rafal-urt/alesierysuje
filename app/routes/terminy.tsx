import type { Route } from "./+types/terminy";
import { WatercolorStain } from "~/components/WatercolorStain";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wolne terminy live painting 2026 / 2027 - rezerwacja online | alesierysuje" },
    {
      name: "description",
      content:
        "Kalendarz dostępności live paintingu do sierpnia 2027. Wybierz wolny dzień i wyślij bezpłatne zapytanie o termin - odpowiedź w 24 - 48 godzin.",
    },
  ];
}

export default function Terminy() {
  return (
    <main className="page">
      <WatercolorStain color="green" width={460} height={420} style={{ top: 60, left: -160 }} />
      <section className="pageshero" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <div className="eyebrow soak">Terminy &middot; alesierysuje.pl/terminy</div>
          <h1 className="soak d1">Wolne terminy live paintingu - kalendarz do sierpnia 2027.</h1>
          <p className="lead soak d2">
            Kalendarz jest prawdziwy w czasie rzeczywistym - to, co widzicie, jest dostępne teraz.
            Wybierzcie dzień i wyślijcie bezpłatne zapytanie o rezerwację - odpowiedź wraca w 24 - 48
            godzin.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap cal-wrap">
          <div className="soak">
            <div className="legend">
              <span>
                <span className="ldot free" />
                termin wolny
              </span>
              <span>
                <span className="ldot taken" />
                termin zajęty
              </span>
              <span>
                <span className="ldot today" />
                dziś
              </span>
            </div>
            {/* Placeholder - interaktywny kalendarz z availability dochodzi w Etapie 4 */}
            <div className="macal">
              <div className="macal-head">
                <h4>Kalendarz</h4>
                <div className="macal-nav">
                  <button disabled aria-label="Poprzedni miesiąc">
                    &#8249;
                  </button>
                  <button disabled aria-label="Następny miesiąc">
                    &#8250;
                  </button>
                </div>
              </div>
              <div className="dow">
                <span>pon</span>
                <span>wt</span>
                <span>śr</span>
                <span>czw</span>
                <span>pt</span>
                <span>sob</span>
                <span>nie</span>
              </div>
              <div className="days" />
              <div className="cal-note">Kalendarz dostępności wkrótce - podpinamy dane.</div>
            </div>
          </div>
          <div className="bk soak d1">
            <h3>Zapytanie o termin</h3>
            <div className="picked none">Najpierw wybierzcie wolny dzień w kalendarzu.</div>
            <div className="fine">
              Zapytanie jest bezpłatne i do niczego nie zobowiązuje. Odpowiedź w 24 - 48 godzin.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
