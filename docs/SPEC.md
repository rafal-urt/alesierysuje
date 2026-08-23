# SPEC.md - specyfikacja alesierysuje.pl

Referencja wizualna: `docs/prototyp.html` (otwórz w przeglądarce, klikaj po zakładkach). Ten dokument opisuje to, czego z prototypu nie widać: dane, backend, SEO i kolejność wdrożenia.

---

## 1. Design system (z prototypu)

Kolory (tokens Tailwind):
- paper `#FAF7F2` (tło, z teksturą papieru akwarelowego - SVG feTurbulence, opacity 0.05)
- paper-deep `#F3EEE5`
- ink `#2B2B2B`, ink-soft `#6B655C`, ink-faint `#9A938A`
- wash-blue `#7FA8C9`, wash-rose `#D98BA3`, wash-ochre `#D9A85C`, wash-green `#8FB08A`
- linie: rgba(43,43,43,.14) i .08

Fonty (Google Fonts): Fraunces (nagłówki, serif), Instrument Sans (UI/body), Caveat (akcenty odręczne - podpisy, logo).

Ruch: jedna zasada - "farba wsiąka w papier". Klasa `.soak`: elementy wchodzą z blur(10px)+opacity 0 do ostrości, 0.75s, IntersectionObserver. Respektuj `prefers-reduced-motion`. Plamy akwarelowe w tle sekcji: rozmyte radial-gradients, animacja bloom przy wejściu.

## 2. Architektura URL i SEO (tabela tras)

| URL | H1 | Title | Meta description (sens) |
|---|---|---|---|
| `/` | Malowanie na żywo, które zostaje na zawsze. | Live painting na wesele i eventy - malowanie na żywo \| alesierysuje | live painting i malowanie na żywo na weselach i eventach, live art, portrety gości, portrety ze zdjęcia; CTA terminy i ceny |
| `/live-painting-wesele` | Live painting na wesele - obraz malowany na żywo. | Live painting na wesele - malowanie na żywo \| alesierysuje | pakiety, jawne ceny od 3 900 zł, rezerwacja terminu online |
| `/live-painting-eventy` | Live art na event firmowy - malowanie na żywo i portrety gości. | Live art na event firmowy - malowanie na żywo \| alesierysuje | eventy firmowe, szybkie portrety gości, faktura VAT, brief |
| `/minimalistyczne-ilustracje-ze-zdjecia` | Minimalistyczne ilustracje ze zdjęcia - A5 i A4. | Minimalistyczne ilustracje ze zdjęcia - A5 i A4 \| alesierysuje | minimalistyczna kreska na papierze akwarelowym, formaty A5 i A4, zamówienie ze zdjęcia; treść docelowa i cennik do uzupełnienia |
| `/portrety-na-zamowienie` | Portrety akwarelowe na zamówienie - portret ze zdjęcia malowany ręcznie. | Portrety akwarelowe ze zdjęcia na zamówienie \| alesierysuje | konfigurator, cena na żywo, realizacja 10-14 dni, sekcja o technice akwarelowej; strona celuje w dwie intencje: "portret ze zdjęcia" i "portrety akwarelowe" |
| `/realizacje` | Realizacje - malowanie na żywo i portrety. | Realizacje - live painting i portrety \| alesierysuje | galeria prac z wesel, eventów i pracowni |
| `/cennik` | Cennik - live painting i portrety na zamówienie. | Cennik - live painting, malowanie na żywo, portrety \| alesierysuje | jawne ceny wszystkich usług |
| `/o-mnie` | Aleksandra Sienica - maluję na żywo. | Aleksandra Sienica - artystka live painting \| alesierysuje | sylwetka artystki |
| `/terminy` | Wolne terminy live paintingu - kalendarz do sierpnia 2027. | Wolne terminy live painting 2026 / 2027 - rezerwacja online \| alesierysuje | kalendarz dostępności, bezpłatne zapytanie |

Zasady: canonical na każdej stronie, sitemap.xml generowany w buildzie, robots.txt, breadcrumby (BreadcrumbList JSON-LD) na podstronach, OG image per strona. Frazy synonimiczne (live painting / malowanie na żywo / live art) NIE dostają osobnych stron - jedna strona per intencja.

JSON-LD: LocalBusiness (globalnie, z AggregateRating 5.0 / 6 opinii z Wesele z klasą), Service na stronach usługowych, Product na /portrety-na-zamowienie, FAQPage tam, gdzie jest FAQ, Review na homepage.

Faza 3: programmatic city pages `/live-painting-{miasto}` dla 10-15 największych miast (szablon: hero z nazwą miasta, realizacje, pakiety, FAQ lokalne, unikalny akapit per miasto).

## 3. Kolekcje Payload

- **works** - prace do galerii: tytuł, opis/podpis (np. "Marta i Paweł - Zamek Gniew, sierpień"), kategoria (wesele / event / portret), obraz (upload), duży format bool, kolejność. Zasila /realizacje, pas na homepage i "drzwi".
- **reviews** - opinie: autor, treść, źródło (Wesele z klasą / Google), data, lokalizacja, ocena. Zasila sekcję opinii.
- **availability** - dostępność terminów: data (unikalna), status (wolny / zajęty / zablokowany). Admin (Aleksandra) oznacza zajęte dni w panelu. Dni bez rekordu = wolne (default). Zakres kalendarza: od dziś do konfigurowalnej daty końcowej (global setting, start: 2027-08-31).
- **inquiries** - zapytania o termin: data wydarzenia, imiona, e-mail, miejscowość, rodzaj wydarzenia (wesele / event firmowy / urodziny-jubileusz / inne), status (nowe / odpowiedziane / potwierdzone / odrzucone), notatki. Tworzone przez formularz z /terminy.
- **briefs** - briefy B2B z /live-painting-eventy: firma, data i miasto, liczba gości, formuła, e-mail, status.
- **portraitOrders** (Faza 2) - zamówienia portretów: konfiguracja (osoby, format, dedykacja), zdjęcie referencyjne (upload), dane klienta, status realizacji (przyjęte / szkic / malowanie / wysłane), Stripe payment id.
- **globals: settings** - ceny pakietów i portretów, e-mail kontaktowy, data końcowa kalendarza, linki social.

## 4. Kalendarz i flow zapytania (Faza 1 - serce serwisu)

Kalendarz na /terminy - styl macOS, jak w prototypie:
- pełna siatka miesiąca pon-nie, jeden miesiąc na ekranie, strzałki poprzedni/następny
- zakres: bieżący miesiąc do daty końcowej z settings; strzałki blokują się na krańcach
- każdy dzień ma widoczny status: wolny (zielone tło + kropka), zajęty (czerwonawe tło + kropka + przekreślenie), dziś (obrys), dni spoza miesiąca wyszarzone
- status z kolekcji availability (endpoint/loader zwraca mapę statusów per miesiąc); dni przeszłe = niedostępne
- klik w wolny dzień → panel "Zapytanie o termin" (sticky po prawej, na mobile scroll do panelu): wybrana data z dniem tygodnia, pola: imiona, e-mail, miejscowość, rodzaj wydarzenia, przycisk "Wyślij bezpłatne zapytanie"
- submit → rekord w inquiries + mail do Aleksandry (Resend) + mail potwierdzający do klienta + ekran sukcesu ("Zapytanie wysłane", odpowiedź w 24-48 h, odręczne "do usłyszenia, {imiona}!")
- zapytanie jest bezpłatne i niezobowiązujące - ŻADNYCH płatności w tym flow
- walidacja: e-mail, wymagane pola, honeypot antyspam, rate limit per IP

Licznik na hero homepage: liczba wolnych sobót od dziś do daty końcowej (liczona z availability, cache 1h).

## 5. Konfigurator portretu (/portrety-na-zamowienie)

UI jak w prototypie: kroki (liczba osób 1-5+, format A4/A3/50x70, dedykacja), podgląd formatu w skali na ścianie pokoju (kanapa 220 cm), cena budująca się na żywo.
Ceny z globals: A4 490, A3 690, 50x70 990, +160 za każdą dodatkową osobę, dedykacja +90.
Faza 1: przycisk "Zamów portret" prowadzi do formularza zapytania (jak terminy, bez płatności).
Faza 2: upload zdjęcia (GCS, walidacja rozdzielczości po stronie klienta), Stripe Checkout (BLIK/karta/Apple Pay), statusy realizacji mailowo.

## 6. Pozostałe strony

Odwzoruj sekcja po sekcji z prototypu:
- **Homepage**: hero typograficzne (fraza "na żywo" wypełniona dryfującą akwarelą - background-clip:text), licznik wolnych sobót, marquee fraz, 3 "drzwi" (Wesela/Eventy/Portrety), pas realizacji, ciemny pas liczb, 3 kroki, manifest "Czym jest live painting" (tekst SEO z linkami wewnętrznymi), 6 prawdziwych opinii z Wesele z klasą, FAQ x3, banner CTA.
- **Wesela**: 3 pakiety z cenami (3 900 / 5 900 / 8 900), notka o bezpłatnym zapytaniu, proces x4, FAQ x4, banner.
- **Eventy**: statystyki (40+ portretów, 120 osób, 48 h), brief 5 pól → kolekcja briefs + mail.
- **Cennik**: 3 tabele (wesela, eventy, portrety) - ceny ciągnięte z globals, żeby nie rozjeżdżały się z resztą serwisu.
- **Realizacje**: pozioma ściana galerii z ramami, lightbox z CTA; dane z works.
- **O mnie**: historia + podpis "Aleksandra Sienica" fontem odręcznym.
- **Footer**: 4 kolumny, kolumna "Usługi" z anchorami frazowymi (linkowanie wewnętrzne SEO).

UWAGA do opinii: treści w prototypie to skondensowane parafrazy. Docelowe pełne treści opinii wkleja właściciel do Payload ręcznie ze źródła (weselezklasa.pl, profil 60334).

## 7. Wydajność i jakość

- Core Web Vitals: LCP < 2.5 s mobile; obrazy AVIF/WebP, responsive srcset, lazy poza hero
- Fonty: preconnect + display=swap (docelowo self-host)
- Dostępność: focus states, aria-labels na nawigacji kalendarza i lightboxie, kontrasty AA
- Formularze: komunikaty błędów po polsku, stany ładowania

## 8. Fazy wdrożenia

**Faza 1 (MVP):** scaffold + design system → layout (Nav/Footer) → wszystkie 8 tras z treścią z prototypu → Payload (works, reviews, availability, inquiries, briefs, settings) → kalendarz + flow zapytania z mailami → SEO layer (title/meta/canonical/JSON-LD/sitemap) → deploy Cloud Run.
Kryterium ukończenia: klient wybiera dzień w kalendarzu, wysyła zapytanie, Aleksandra dostaje mail, rekord widać w panelu Payload.

**Faza 2:** konfigurator z uploadem zdjęcia + Stripe Checkout, statusy realizacji, vouchery prezentowe.

**Faza 3:** blog (/dziennik), city pages, wersja EN, Google Reviews.
