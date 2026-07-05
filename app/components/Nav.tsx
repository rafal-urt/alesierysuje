import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const LINKS = [
  { to: "/malowanie-na-zywo-wesele", label: "Wesela" },
  { to: "/malowanie-na-zywo-eventy", label: "Eventy" },
  { to: "/portrety-na-zamowienie", label: "Portrety" },
  { to: "/realizacje", label: "Realizacje" },
  { to: "/cennik", label: "Cennik" },
  { to: "/o-mnie", label: "O mnie" },
  { to: "/kontakt", label: "Kontakt" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className={`sitenav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <Link className="logo" to="/">
          <img src="/gfx/logo.png" alt="alesierysuje" width={453} height={120} />
        </Link>
        <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          &#9776;
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={({ isActive }) => (isActive ? "active" : "")}>
                {l.label}
              </NavLink>
            </li>
          ))}
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
