import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

type Leaf = { to: string; label: string };
type Item = Leaf | { label: string; children: Leaf[] };

// Dwie uslugi na przedzie menu, kazda z wyborem wariantu. Rodzice nie sa
// linkami - tylko rozwijaja liste, bo nie maja wlasnych stron.
const LINKS: Item[] = [
  {
    label: "Malowanie na żywo",
    children: [
      { to: "/malowanie-na-zywo-wesele", label: "Malowanie na weselach" },
      { to: "/malowanie-na-zywo-eventy", label: "Malowanie na eventach" },
    ],
  },
  {
    label: "Portrety",
    children: [
      { to: "/minimalistyczne-ilustracje-ze-zdjecia", label: "Minimalistyczne ilustracje (A5, A4)" },
      { to: "/portrety-na-zamowienie", label: "Portrety na zamówienie (A4, A3, 50x70 cm)" },
    ],
  },
  { to: "/realizacje", label: "Realizacje" },
  { to: "/cennik", label: "Cennik" },
  { to: "/o-mnie", label: "O mnie" },
  { to: "/kontakt", label: "Kontakt" },
];

const hasChildren = (i: Item): i is { label: string; children: Leaf[] } => "children" in i;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // etykieta rozwinietej grupy albo null - naraz otwarta jest najwyzej jedna
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  // czy otwierac podmenu najechaniem - tylko szeroki ekran z prawdziwa myszka.
  // Warunek jest lustrem media query w app.css; startuje na false, wiec SSR
  // i hydracja daja ten sam HTML (handlery nie zmieniaja znacznikow).
  const [canHover, setCanHover] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1021px) and (hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Escape zamyka rozwiniete podmenu, klikniecie poza nawigacja tak samo.
  useEffect(() => {
    if (!openGroup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenGroup(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openGroup]);

  return (
    <nav ref={navRef} className={`sitenav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <Link className="logo" to="/">
          <img src="/gfx/logo.png" alt="alesierysuje" width={453} height={120} />
        </Link>
        <button
          className="burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          &#9776;
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((item) => {
            if (!hasChildren(item)) {
              return (
                <li key={item.to}>
                  <NavLink to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>
                    {item.label}
                  </NavLink>
                </li>
              );
            }
            const isOpen = openGroup === item.label;
            // rodzic podswietlony, gdy jestesmy na ktorejkolwiek z jego podstron
            const isCurrent = item.children.some((c) => c.to === pathname);
            return (
              <li
                key={item.label}
                className={`nav-group${isOpen ? " open" : ""}`}
                // Hover steruje tym samym stanem co klik - inaczej panel otwarty
                // najechaniem ignorowalby klikniecie, a aria-expanded klamaloby.
                // Szczeline miedzy przyciskiem a panelem zasypuje .nav-sub::before,
                // bez tego kursor w drodze w dol opuszcza grupe i panel znika.
                onPointerEnter={canHover ? () => setOpenGroup(item.label) : undefined}
                onPointerLeave={canHover ? () => setOpenGroup(null) : undefined}
              >
                <button
                  type="button"
                  className={`nav-parent${isCurrent ? " active" : ""}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenGroup(isOpen ? null : item.label)}
                >
                  {item.label}
                  <span className="nav-caret" aria-hidden="true" />
                </button>
                <ul className="nav-sub">
                  {item.children.map((c) => (
                    <li key={c.to}>
                      <NavLink to={c.to} className={({ isActive }) => (isActive ? "active" : "")}>
                        {c.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
          <li>
            <NavLink to="/terminy" className="nav-cta">
              Sprawdź termin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
