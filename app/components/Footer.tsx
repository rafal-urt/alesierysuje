import { Link } from "react-router";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fcol">
            <Link className="logo" to="/">
              <img src="/gfx/logo.png" alt="alesierysuje" width={453} height={120} />
            </Link>
            <p className="desc">
              Live painting i malowanie na żywo na weselach oraz eventach w całej Polsce.
              Portrety na zamówienie ze zdjęcia - malowane ręcznie akwarelą.
            </p>
          </div>
          <div className="fcol">
            <h5>Usługi</h5>
            <ul>
              <li>
                <Link to="/malowanie-na-zywo-wesele">Live painting na wesele</Link>
              </li>
              <li>
                <Link to="/malowanie-na-zywo-eventy">Live art na event firmowy</Link>
              </li>
              <li>
                <Link to="/malowanie-na-zywo-eventy">Szybkie portrety gości</Link>
              </li>
              <li>
                <Link to="/portrety-na-zamowienie">Portrety na zamówienie</Link>
              </li>
              <li>
                <Link to="/portrety-na-zamowienie">Portret ze zdjęcia</Link>
              </li>
              <li>
                <Link to="/malowanie-na-zywo-warszawa">Live painting Warszawa</Link>
              </li>
              <li>
                <Link to="/malowanie-na-zywo-trojmiasto">Live painting Trójmiasto</Link>
              </li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Na skróty</h5>
            <ul>
              <li>
                <Link to="/cennik">Cennik</Link>
              </li>
              <li>
                <Link to="/terminy">Wolne terminy 2027</Link>
              </li>
              <li>
                <Link to="/realizacje">Realizacje</Link>
              </li>
              <li>
                <Link to="/o-mnie">O mnie</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
              </li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Kontakt</h5>
            <ul>
              <li>
                <Link to="/kontakt">Formularz kontaktowy</Link>
              </li>
              <li>
                <a href="mailto:alesierysuje@gmail.com">alesierysuje@gmail.com</a>
              </li>
              <li>
                <a href="https://www.instagram.com/alesierysuje" rel="noopener noreferrer" target="_blank">
                  Instagram / @alesierysuje
                </a>
              </li>
              <li>
                <span style={{ fontSize: "0.92rem", color: "var(--color-ink-soft)" }}>
                  Warszawa &middot; cała Polska
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="fbottom">
          <span>&copy; 2026 alesierysuje.pl &middot; Aleksandra Sienica &middot; NIP 1133135946</span>
          <span>live painting &middot; malowanie na żywo &middot; cała Polska</span>
        </div>
      </div>
    </footer>
  );
}
