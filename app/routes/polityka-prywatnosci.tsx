import type { Route } from "./+types/polityka-prywatnosci";
import { pageMeta, breadcrumbJsonLd } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";
import { ConsentResetButton } from "~/components/CookieBanner";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Polityka prywatności | alesierysuje",
    description:
      "Polityka prywatności serwisu alesierysuje.pl - zasady przetwarzania danych osobowych i wykorzystania cookies.",
    path: "/polityka-prywatnosci",
  });
}

export default function PolitykaPrywatnosci() {
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Polityka prywatności", path: "/polityka-prywatnosci" }])} />
      <section className="pageshero">
        <div className="wrap">
          <div className="eyebrow soak">Formalności &middot; alesierysuje.pl/polityka-prywatnosci</div>
          <h1 className="soak d1">Polityka prywatności.</h1>
          <p className="lead soak d2">
            Krótko i po ludzku: jakie dane zbieramy, po co i jakie masz prawa.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 10 }}>
        <div className="wrap legal">
          <h2>1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest Aleksandra Sienica, prowadząca działalność pod
            marką alesierysuje, NIP 1133135946. Kontakt:{" "}
            <a href="mailto:kontakt@alesierysuje.pl">kontakt@alesierysuje.pl</a>.
          </p>

          <h2>2. Jakie dane zbieramy i po co</h2>
          <p>
            Dane podajesz nam wyłącznie w formularzach serwisu: zapytanie o termin (imiona, adres
            e-mail, miejscowość i rodzaj wydarzenia), brief eventowy (nazwa firmy, data i miasto,
            liczba gości, e-mail) oraz zapytanie o portret (imię i nazwisko, e-mail, wybrana
            konfiguracja). Używamy ich tylko po to, żeby odpowiedzieć na Twoje zapytanie i ustalić
            szczegóły współpracy (art. 6 ust. 1 lit. b RODO - działania przed zawarciem umowy) oraz
            ewentualnie w celu obrony przed roszczeniami (art. 6 ust. 1 lit. f RODO).
          </p>

          <h2>3. Jak długo przechowujemy dane</h2>
          <p>
            Zapytania przechowujemy przez czas prowadzenia korespondencji, a jeśli dojdzie do
            współpracy - przez okres wymagany przepisami (np. podatkowymi). Zapytania, po których
            nie doszło do współpracy, usuwamy najpóźniej po 2 latach.
          </p>

          <h2>4. Komu powierzamy dane</h2>
          <p>
            Dane przetwarzają w naszym imieniu dostawcy techniczni serwisu: Vercel (hosting),
            Resend (wysyłka e-maili) i Google (statystyka odwiedzin) - część z nich może
            przetwarzać dane w USA na podstawie EU-US Data Privacy Framework. Danych nie
            sprzedajemy i nie udostępniamy nikomu w celach marketingowych.
          </p>

          <h2>5. Cookies i statystyka</h2>
          <p>
            Serwis korzysta z Google Analytics 4 wyłącznie do anonimowej statystyki odwiedzin.
            Cookies analityczne zapisujemy dopiero po Twojej zgodzie wyrażonej w banerze (Consent
            Mode v2) - bez zgody strona działa w pełni normalnie. Zgodę możesz w każdej chwili
            wycofać:
          </p>
          <p>
            <ConsentResetButton />
          </p>

          <h2>6. Twoje prawa</h2>
          <p>
            Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
            przetwarzania, przenoszenia oraz sprzeciwu. Wystarczy e-mail na{" "}
            <a href="mailto:kontakt@alesierysuje.pl">kontakt@alesierysuje.pl</a>. Masz też prawo
            wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl).
          </p>

          <h2>7. Zmiany polityki</h2>
          <p>
            Politykę możemy aktualizować, gdy zmieni się zakres serwisu (np. dojdą płatności
            online) - aktualna wersja zawsze znajduje się pod tym adresem. Ostatnia aktualizacja:
            lipiec 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
