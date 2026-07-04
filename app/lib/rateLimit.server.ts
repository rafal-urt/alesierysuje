// Prosty rate limit per klucz (IP) w pamięci procesu.
// Wystarczający dla pojedynczej instancji Cloud Run / dev.

const hits = new Map<string, number[]>();

export function rateLimit(key: string, max = 5, windowMs = 10 * 60_000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  // nie pozwól mapie rosnąć bez końca
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }
  return true;
}

export function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}
