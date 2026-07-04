# CLAUDE.md - alesierysuje.pl

## Czym jest ten projekt

Strona-serwis dla alesierysuje (Aleksandra Sienica): live painting / malowanie na żywo na weselach i eventach + portrety na zamówienie ze zdjęcia. Cel biznesowy: pozyskiwanie zapytań o terminy (wesela, eventy) i sprzedaż portretów online.

Źródłem prawdy dla designu i treści jest klikalny prototyp: `docs/prototyp.html`. Otwórz go i odwzoruj wiernie - layouty, kolory, animacje, copy. Pełna specyfikacja funkcjonalna: `docs/SPEC.md`.

## Stack (nie zmieniaj bez wyraźnego polecenia)

- React Router 7 (framework mode, SSR włączone)
- Payload CMS 3 (backoffice: prace, opinie, dostępność terminów, zapytania)
- Tailwind CSS
- Baza: SQLite w dev, PostgreSQL (Cloud SQL) na produkcji
- Hosting: GCP Cloud Run, region europe-central2
- Mail transakcyjny: Resend
- Płatności (dopiero Faza 2): Stripe Checkout

## Twarde zasady

1. **NIGDY nie modyfikuj, nie aktualizuj i nie pinuj wersji pakietów w package.json bez wyraźnego polecenia.** Traktuj package.json jako zamrożony po scaffoldzie.
2. Cała treść strony po polsku. W tekstach używaj wyłącznie dywizów (-), nigdy pauz (—).
3. SSR obowiązkowo na każdej trasie - to serwis SEO-first. Żadnych stron renderowanych wyłącznie po stronie klienta.
4. Jedno H1 na stronę, dokładnie takie jak w tabeli tras w SPEC.md.
5. Nie wymyślaj nowych podstron ani zmian w architekturze URL - trzymaj się SPEC.md.
6. Grafiki akwarelowe w prototypie to proceduralne SVG - w kodzie produkcyjnym zbuduj komponent `<WatercolorPlaceholder>` z tą samą logiką (funkcja wcSVG z prototypu), który później podmienimy na prawdziwe skany prac z Payload.
7. Design tokens (kolory, fonty, animacja .soak) wyciągnij z prototypu do konfiguracji Tailwind - nie hardkoduj wartości w komponentach.
8. Commituj po każdym ukończonym, działającym etapie. Komunikaty commitów po polsku, krótkie.

## Komendy

- `npm run dev` - dev server
- `npm run build` - build produkcyjny
- `npm run typecheck` - sprawdzenie typów (uruchamiaj przed zakończeniem każdego zadania)

## Struktura (docelowa)

```
app/                    # React Router 7
  routes/               # trasy wg tabeli w SPEC.md
  components/           # Nav, Footer, WatercolorPlaceholder, Calendar, Configurator...
  styles/
docs/
  prototyp.html         # referencja designu - źródło prawdy
  SPEC.md               # specyfikacja funkcjonalna
payload/                # konfiguracja Payload CMS (kolekcje wg SPEC.md)
```
