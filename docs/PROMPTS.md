# PROMPTS.md - kolejność pracy w Claude Code

Wklejaj po kolei, jeden prompt = jeden etap. Po każdym etapie sprawdź wynik w przeglądarce (`npm run dev`) zanim przejdziesz dalej. Claude Code sam przeczyta CLAUDE.md - nie musisz go przypominać o zasadach, ale jeśli zboczy z kursu, odeślij go do SPEC.md.

## Etap 0 - scaffold

```
Przeczytaj CLAUDE.md i docs/SPEC.md, a potem otwórz docs/prototyp.html i przeanalizuj jego strukturę oraz style. Zescaffolduj projekt: React Router 7 w trybie framework z SSR, Tailwind, Payload CMS 3 z SQLite na dev. Skonfiguruj design tokens z sekcji 1 SPEC.md w Tailwind (kolory, fonty z Google Fonts). Na koniec: npm run dev ma wstać bez błędów, strona główna może być pusta. Nie instaluj nic ponad to, co niezbędne.
```

## Etap 1 - layout i fundamenty UI

```
Zbuduj wspólny layout: Nav (sticky, z blur po scrollu, logo fontem Caveat z akwarelową kropką, mobile hamburger) i Footer (4 kolumny wg prototypu, kolumna Usługi z linkami frazowymi). Dodaj komponenty bazowe: tekstura papieru na body, klasa animacji soak (IntersectionObserver, prefers-reduced-motion), komponent WatercolorStain (rozmyte plamy tła sekcji) i WatercolorPlaceholder (proceduralne SVG akwareli - przenieś funkcję wcSVG z prototypu, deterministyczna po seedzie). Wszystko 1:1 wizualnie z prototypem.
```

## Etap 2 - strony statyczne

```
Zbuduj wszystkie 8 tras z tabeli w sekcji 2 SPEC.md, z dokładnymi H1, title i meta description. Treść i layout sekcji przenieś 1:1 z docs/prototyp.html (homepage z hero typograficznym, marquee, drzwiami, pasem liczb, manifestem, opiniami i FAQ; wesela z pakietami; eventy z briefem; cennik z tabelami; realizacje ze ścianą galerii i lightboxem; o-mnie; terminy na razie z placeholderem kalendarza). Dane (prace, opinie, ceny) na tym etapie mogą być zahardkodowane w plikach danych - podepniemy Payload w następnym kroku.
```

## Etap 3 - Payload

```
Skonfiguruj kolekcje Payload wg sekcji 3 SPEC.md: works, reviews, availability, inquiries, briefs oraz global settings. Podepnij strony pod dane z Payload (loadery SSR): realizacje i pas na homepage z works, opinie z reviews, ceny w cenniku i pakietach z settings. Dodaj seed script, który zasila bazę danymi z prototypu (8 prac, 6 opinii, ceny). Panel admina ma działać na /admin.
```

## Etap 4 - kalendarz i zapytania (serce serwisu)

```
Zbuduj kalendarz na /terminy i flow bezpłatnego zapytania dokładnie wg sekcji 4 SPEC.md i prototypu: siatka miesiąca w stylu macOS, statusy dni z kolekcji availability, panel zapytania, zapis do inquiries, mail do właścicielki i potwierdzenie do klienta przez Resend (klucz z env, na dev loguj maile do konsoli), ekran sukcesu, walidacja, honeypot i rate limit. Dodaj licznik wolnych sobót na hero homepage. Formularz briefu na stronie eventów podepnij analogicznie pod kolekcję briefs.
```

## Etap 5 - konfigurator portretu

```
Zbuduj konfigurator na /portrety-na-zamowienie wg sekcji 5 SPEC.md: kroki, podgląd skali na ścianie pokoju, cena licząca się na żywo z wartości w settings. Przycisk Zamów portret otwiera na razie formularz zapytania (bez płatności) zapisujący się do inquiries z typem portret.
```

## Etap 6 - SEO layer i szlif

```
Domknij warstwę SEO wg sekcji 2 i 7 SPEC.md: canonical, sitemap.xml, robots.txt, JSON-LD (LocalBusiness globalnie, Service, Product, FAQPage, Review, BreadcrumbList), OG tagi per strona, alt teksty. Przejdź audyt: jedno H1 na stronę, SSR wszędzie, Lighthouse mobile - performance i SEO 90+. Napraw co trzeba.
```

## Etap 7 - deploy

```
Przygotuj deployment na GCP Cloud Run (europe-central2): Dockerfile, konfiguracja env (DATABASE_URL do Cloud SQL Postgres, PAYLOAD_SECRET, RESEND_API_KEY), instrukcja krok po kroku w docs/DEPLOY.md wraz z podpięciem domeny roboczej. Build produkcyjny ma przechodzić lokalnie.
```

## Wskazówki

- Jeden etap = jedna sesja/konwersacja. Między etapami: przejrzyj diff, przetestuj, `git commit`.
- Gdy coś wygląda inaczej niż w prototypie, pisz: "Porównaj sekcję X z docs/prototyp.html i wyrównaj do prototypu".
- Zdjęcia prawdziwych prac i pełne treści opinii wgrywacie później przez panel /admin - kod ma być na to gotowy od Etapu 3.
