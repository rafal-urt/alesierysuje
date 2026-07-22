import { Link } from "react-router";
import { WZK_PROFILE_URL, INSTAGRAM_URL } from "~/lib/seo";

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
            <div className="fsocial">
              <a href={INSTAGRAM_URL} rel="noopener noreferrer" target="_blank">
                Instagram &middot; @alesierysuje
              </a>
              <a href={WZK_PROFILE_URL} rel="noopener noreferrer" target="_blank">
                <span className="fstars" aria-hidden="true">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>{" "}
                5/5 &middot; Wesele z klasą
              </a>
            </div>
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
                <Link to="/portrety-na-zamowienie">Portrety akwarelowe ze zdjęcia</Link>
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
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div className="fcol">
            <p className="fhead">Maluję w</p>
            <ul>
              <li>
                <Link to="/malowanie-na-zywo-warszawa">Warszawa</Link>
              </li>
              <li>
                <Link to="/malowanie-na-zywo-trojmiasto">Trójmiasto</Link>
              </li>
              <li>
                <Link to="/malowanie-na-zywo-poznan">Poznań</Link>
              </li>
              <li>
                <Link to="/malowanie-na-zywo-krakow">Kraków</Link>
              </li>
              <li>
                <Link to="/malowanie-na-zywo-lodz">Łódź</Link>
              </li>
              <li>
                <span className="fmuted">i w całej Polsce - dojazd z Warszawy</span>
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
