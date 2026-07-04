# DEPLOY.md - hosting na Vercel

Strona jest hostowana na Vercelu: **https://alesierysuje.vercel.app**
Deploy jest automatyczny: każdy push do gałęzi `main` na GitHubie (rafal-urt/alesierysuje)
buduje i publikuje nową wersję (integracja Vercel <-> GitHub, projekt `alesierysuje`).

## Architektura

- **Strona (ten projekt Vercel)** - React Router 7 z SSR, dane przez Local API Payloada.
  Preset `@vercel/react-router` włącza się automatycznie (zmienna `VERCEL` w buildzie),
  konfiguracja w `vercel.json` (framework `react-router`).
- **Baza** - SQLite przez libsql. Bez ustawionego `DATABASE_URI` na Vercelu baza trafia do
  `/tmp` (jedyny zapisywalny katalog na serverless): przy zimnym starcie instancji
  odpalają się migracje (`migrations/`) i seed (`payload/seedData.ts`), więc strona
  zawsze wstaje z danymi. UWAGA: `/tmp` jest per instancja i znika przy wygaszeniu -
  **zapytania klientów mogą przepaść**. Do realnego użytku podepnij Turso (niżej).
- **Panel /admin** - osobna aplikacja Next.js w katalogu `admin/` (Payload wymaga
  Nexta dla panelu). Lokalnie: `npm run dev:admin` -> http://localhost:3001/admin.
  Na Vercelu: drugi projekt (niżej).

## Zmienne środowiskowe (Vercel -> Settings -> Environment Variables)

| Zmienna | Wymagana | Opis |
|---|---|---|
| `PAYLOAD_SECRET` | tak | długi losowy sekret (np. `openssl rand -hex 32`); bez niego działa tymczasowy fallback - USTAW |
| `DATABASE_URI` | do produkcji | `libsql://<baza>.turso.io` (Turso) - trwała, wspólna baza |
| `DATABASE_AUTH_TOKEN` | z Turso | token dostępu do bazy Turso |
| `RESEND_API_KEY` | do maili | klucz z resend.com; bez niego maile lądują w logach funkcji |
| `EMAIL_FROM` | do maili | np. `alesierysuje <kontakt@alesierysuje.pl>` (domena zweryfikowana w Resend) |
| `SEED_ADMIN_PASSWORD` | zalecana | hasło konta admina tworzonego przy seedzie pustej bazy |
| `SEED_ON_INIT` | nie | `false` wyłącza seed przy starcie (gdy baza trwała już zasilona) |

## Trwała baza: Turso (ok. 5 minut)

1. `brew install tursodatabase/tap/turso && turso auth signup`
2. `turso db create alesierysuje --location fra`
3. `turso db show alesierysuje --url` -> wартość do `DATABASE_URI`
4. `turso db tokens create alesierysuje` -> wartość do `DATABASE_AUTH_TOKEN`
5. Ustaw obie zmienne w projekcie Vercel (Production) i zrób redeploy.
   Pierwszy start odpali migracje i seed; potem ustaw `SEED_ON_INIT=false`.
6. Lokalny panel admina na tej samej bazie: wpisz te same dwie zmienne do `.env`
   i uruchom `npm run dev:admin`.

## Panel admina na Vercelu (drugi projekt)

1. Vercel -> Add New Project -> ten sam repozytorium GitHub.
2. Framework: Next.js; Build Command: `next build admin`; Output: `admin/.next`;
   Install Command: `npm install` (root).
3. Zmienne: `PAYLOAD_SECRET` (ta sama wartość!), `DATABASE_URI`, `DATABASE_AUTH_TOKEN`
   (Turso - obowiązkowo, inaczej panel widzi inną bazę niż strona).
4. Panel wstanie pod `https://<projekt>.vercel.app/admin`.

## Media (skany prac)

Uploady w kolekcji `media` zapisują się na dysk (`media/`), który na Vercelu jest
ulotny. Zanim Aleksandra zacznie wgrywać prawdziwe skany przez panel, podepnij
storage w chmurze (np. `@payloadcms/storage-vercel-blob` albo `storage-s3`) w
`payload.config.ts`. Do tego czasu galeria renderuje proceduralne akwarele
(`WatercolorPlaceholder`) - strona działa w całości bez uploadów.

## Domena docelowa

Po podpięciu `alesierysuje.pl` w Vercel (Settings -> Domains) canonicale i sitemap
już wskazują `https://alesierysuje.pl` (`app/lib/seo.ts` - `SITE_URL`).

## Budowanie lokalne

- `npm run build` - build produkcyjny strony (musi przechodzić przed pushem)
- `NODE_ENV=production DATABASE_URI=file:/tmp/test.db PAYLOAD_SECRET=x npm run start`
  - lokalny test produkcyjny na świeżej bazie (migracje + seed przy starcie)
- `npm run build:admin` - build panelu admina
