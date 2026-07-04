// Helpery dat - bezpieczne po stronie klienta i serwera (bez zależności od Payload).

export const MONTHS_GENITIVE = [
  "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
  "lipca", "sierpnia", "września", "października", "listopada", "grudnia",
];
export const MONTHS_NOMINATIVE = [
  "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
  "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień",
];
export const MONTH_TITLES = [
  "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
];
export const DOW_FULL = [
  "niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota",
];

// "2026-04-12" -> "kwiecień 2026" (podpisy opinii)
export function plMonthYear(iso: string): string {
  const d = new Date(iso);
  return `${MONTHS_NOMINATIVE[d.getMonth()]} ${d.getFullYear()}`;
}

// "2026-04-12" -> "niedziela, 12 kwietnia 2026" (panel zapytania)
export function plFullDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return `${DOW_FULL[d.getDay()]}, ${d.getDate()} ${MONTHS_GENITIVE[d.getMonth()]} ${d.getFullYear()}`;
}

// "2027-08-31" -> "sierpnia 2027" (np. "do sierpnia 2027")
export function plMonthYearGenitive(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return `${MONTHS_GENITIVE[d.getMonth()]} ${d.getFullYear()}`;
}

// Dzisiejsza data YYYY-MM-DD w strefie Europe/Warsaw (serwer może chodzić w UTC).
export function todayWarsaw(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Warsaw" }).format(new Date());
}

export function toISODate(y: number, m: number, d: number): string {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}
