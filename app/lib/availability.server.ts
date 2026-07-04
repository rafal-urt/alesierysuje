import { getDb } from "~/lib/payload.server";
import { todayWarsaw } from "~/lib/dates";

// Zbiór dat zajętych/zablokowanych (YYYY-MM-DD) w całym zakresie kalendarza.
export async function getTakenDates(): Promise<Set<string>> {
  const db = await getDb();
  const res = await db.find({
    collection: "availability",
    limit: 2000,
    pagination: false,
    where: { status: { not_equals: "wolny" } },
  });
  return new Set(res.docs.map((d) => String(d.date).slice(0, 10)));
}

export async function getCalendarEnd(): Promise<string> {
  const db = await getDb();
  const settings = await db.findGlobal({ slug: "settings" });
  return String(settings.calendarEnd ?? "2027-08-31").slice(0, 10);
}

// Licznik wolnych weekendów (sobota i niedziela wolne) od dziś do końca
// bieżącego roku, cache 1 h. Wesela i eventy robimy w każdy dzień tygodnia -
// licznik pokazuje tylko, jak szybko znikają weekendy.
let weekendCache: { value: number; year: number; at: number } | null = null;

export async function countFreeWeekends(): Promise<{ count: number; year: number }> {
  const now = Date.now();
  if (weekendCache && now - weekendCache.at < 60 * 60_000) {
    return { count: weekendCache.value, year: weekendCache.year };
  }
  const [taken, end] = await Promise.all([getTakenDates(), getCalendarEnd()]);
  const today = todayWarsaw();
  const year = Number(today.slice(0, 4));
  const yearEnd = `${year}-12-31`;
  const rangeEnd = end < yearEnd ? end : yearEnd;
  let count = 0;
  const d = new Date(today + "T12:00:00");
  const endDate = new Date(rangeEnd + "T12:00:00");
  // przeskocz do najbliższej soboty
  d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7));
  while (d <= endDate) {
    const sat = d.toISOString().slice(0, 10);
    const sun = new Date(d.getTime() + 86_400_000).toISOString().slice(0, 10);
    if (!taken.has(sat) && !taken.has(sun)) count++;
    d.setDate(d.getDate() + 7);
  }
  weekendCache = { value: count, year, at: now };
  return { count, year };
}
