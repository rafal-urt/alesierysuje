import type { HeadersFunction } from "react-router";

// Nagłówki dla CDN-u Vercela. Przeglądarka nie trzyma kopii (max-age=0), więc
// odświeżenie zawsze pyta o wersję aktualną - ale krawędź trzyma i to ona obsługuje
// ruch, dzięki czemu zimny start funkcji serverless nie jest widoczny dla gościa.
// stale-while-revalidate: po wygaśnięciu krawędź oddaje starą wersję od ręki
// i odświeża ją w tle, więc nikt nie czeka na regenerację.

// Strony treściowe: oferta, cennik, opisy miast, strona główna. Zmieniają się
// rzadko, a zmiana w panelu wchodzi na żywo najpóźniej po godzinie.
export const cacheContent: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
});

// Kalendarz dostępności steruje zapytaniami o terminy, więc musi nadążać
// za panelem - stąd minuta zamiast godziny.
export const cacheAvailability: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=600",
});
