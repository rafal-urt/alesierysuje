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

// Licznik wolnych sobót od dziś do końca kalendarza, cache 1 h (SPEC sekcja 4).
let saturdayCache: { value: number; end: string; at: number } | null = null;

export async function countFreeSaturdays(): Promise<{ count: number; end: string }> {
  const now = Date.now();
  if (saturdayCache && now - saturdayCache.at < 60 * 60_000) {
    return { count: saturdayCache.value, end: saturdayCache.end };
  }
  const [taken, end] = await Promise.all([getTakenDates(), getCalendarEnd()]);
  const today = todayWarsaw();
  let count = 0;
  const d = new Date(today + "T12:00:00");
  const endDate = new Date(end + "T12:00:00");
  // przeskocz do najbliższej soboty
  d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7));
  while (d <= endDate) {
    const iso = d.toISOString().slice(0, 10);
    if (!taken.has(iso)) count++;
    d.setDate(d.getDate() + 7);
  }
  saturdayCache = { value: count, end, at: now };
  return { count, end };
}
