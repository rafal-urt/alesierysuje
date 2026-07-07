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
              Najpiękniejsze chwile schną w dziesięć minut. Akwarelowe portrety gości malowane
              na żywo - na weselach i eventach w całej Polsce - oraz portrety ze zdjęć, prosto
              z pracowni.
            </p>
            <Link className="btn sm" to="/terminy">
              Sprawdź swój termin
            </Link>
          </div>
          <div className="fcol">
            <p className="fhead">Oferta</p>
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
            </ul>
          </div>
          <div className="fcol">
            <p className="fhead">Pracownia</p>
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
            <p className="fhead">Kontakt</p>
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
