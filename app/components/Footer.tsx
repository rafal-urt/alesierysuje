import { Link } from "react-router";
import { track } from "~/lib/track";

// Kazda podstrona ma w stopce dokladnie jeden link.
export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fcol fbrand">
            <Link className="logo" to="/" aria-label="Strona główna">
              <img src="/gfx/logo.png" alt="alesierysuje" width={453} height={120} />
            </Link>
            <p className="desc">
              Jestem Aleksandra - maluję na żywo na weselach i eventach w całej Polsce, a w
              pracowni portrety ze zdjęć.
            </p>
            <Link className="btn sm" to="/terminy">
              Sprawdź swój termin
            </Link>
          </div>
          <div className="fcol">
            <h5>Oferta</h5>
            <ul>
              <li>
                <Link to="/malowanie-na-zywo-wesele">Wesela</Link>
              </li>
              <li>
                <Link to="/malowanie-na-zywo-eventy">Eventy firmowe</Link>
              </li>
              <li>
                <Link to="/portrety-na-zamowienie">Portrety ze zdjęcia</Link>
              </li>
              <li>
                <Link to="/cennik">Cennik</Link>
              </li>
              <li>
                <Link to="/terminy">Wolne terminy</Link>
              </li>
            </ul>
          </div>
          <div className="fcol">
            <h5>Pracownia</h5>
            <ul>
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
                <Link to="/malowanie-na-zywo-warszawa">Warszawa</Link>
              </li>
              <li>
                <Link to="/malowanie-na-zywo-trojmiasto">Trójmiasto</Link>
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
                <a
                  href="mailto:alesierysuje@gmail.com"
                  onClick={() => track("klik_mailto", { miejsce: "stopka" })}
                >
                  alesierysuje@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/alesierysuje"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram &middot; @alesierysuje
                </a>
              </li>
              <li>
                <span className="fmuted">Warszawa &middot; dojazd w całej Polsce</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="fbottom">
          <span>
            &copy; 2026 alesierysuje.pl &middot; Aleksandra Sienica &middot; NIP 1133135946
          </span>
          <span>
            <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
