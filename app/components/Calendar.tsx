import { useState } from "react";
import { MONTH_TITLES, toISODate } from "~/lib/dates";

type Props = {
  takenDates: string[];
  todayISO: string;
  // "YYYY-MM" - pierwszy i ostatni widoczny miesiąc
  minMonth: string;
  maxMonth: string;
  selected: string | null;
  onPick: (iso: string) => void;
};

// Kalendarz w stylu macOS - port siatki z prototypu.
// Dni bez rekordu availability = wolne; przeszłe = niedostępne.
export function Calendar({ takenDates, todayISO, minMonth, maxMonth, selected, onPick }: Props) {
  const taken = new Set(takenDates);
  const [view, setView] = useState(() => {
    const [y, m] = todayISO.slice(0, 7).split("-").map(Number);
    return { y, m: m - 1 };
  });

  const viewKey = `${view.y}-${String(view.m + 1).padStart(2, "0")}`;
  const atMin = viewKey <= minMonth;
  const atMax = viewKey >= maxMonth;

  function shift(dir: number) {
    setView((v) => {
      let m = v.m + dir;
      let y = v.y;
      if (m < 0) {
        m = 11;
        y--;
      }
      if (m > 11) {
        m = 0;
        y++;
      }
      const key = `${y}-${String(m + 1).padStart(2, "0")}`;
      if (key < minMonth || key > maxMonth) return v;
      return { y, m };
    });
  }

  // siatka pon-nie
  const offset = (new Date(view.y, view.m, 1).getDay() + 6) % 7;
  const dim = new Date(view.y, view.m + 1, 0).getDate();
  const prevDim = new Date(view.y, view.m, 0).getDate();
  const cells: { d: number; out: boolean }[] = [];
  for (let i = offset - 1; i >= 0; i--) cells.push({ d: prevDim - i, out: true });
  for (let d = 1; d <= dim; d++) cells.push({ d, out: false });
  let nd = 1;
  while (cells.length % 7 !== 0) cells.push({ d: nd++, out: true });

  return (
    <div className="macal">
      <div className="macal-head">
        <h4>
          {MONTH_TITLES[view.m]} {view.y}
        </h4>
        <div className="macal-nav">
          <button onClick={() => shift(-1)} disabled={atMin} aria-label="Poprzedni miesiąc">
            &#8249;
          </button>
          <button onClick={() => shift(1)} disabled={atMax} aria-label="Następny miesiąc">
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
      <div className="days">
        {cells.map((c, i) => {
          if (c.out) {
            return (
              <div key={i} className="day out">
                {c.d}
              </div>
            );
          }
          const iso = toISODate(view.y, view.m, c.d);
          const isToday = iso === todayISO;
          const isPast = iso < todayISO;
          const isTaken = taken.has(iso);
          const isFree = !isPast && !isTaken;
          let cls = "day";
          if (isToday) cls += " today";
          if (isPast) cls += " out";
          else if (isTaken) cls += " taken";
          else cls += " free";
          if (iso === selected) cls += " sel";
          return (
            <div
              key={i}
              className={cls}
              onClick={isFree ? () => onPick(iso) : undefined}
              role={isFree ? "button" : undefined}
              tabIndex={isFree ? 0 : undefined}
              onKeyDown={
                isFree
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onPick(iso);
                      }
                    }
                  : undefined
              }
              aria-label={isFree ? `Wybierz ${iso}` : undefined}
            >
              {c.d}
            </div>
          );
        })}
      </div>
      <div className="cal-note">
        Dni bez oznaczenia są wolne. Kalendarz sięga do końca zakresu rezerwacji.
      </div>
    </div>
  );
}
