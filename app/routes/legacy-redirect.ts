import { redirect } from "react-router";

// Stale przekierowania 301 ze starych adresow live-painting-* (zmiana frazy glownej
// na "malowanie na zywo" - lipiec 2026). Nie usuwac: stare linki moga zyc w sieci.
const MAP: Record<string, string> = {
  "/live-painting-wesele": "/malowanie-na-zywo-wesele",
  "/live-painting-eventy": "/malowanie-na-zywo-eventy",
  "/live-painting-warszawa": "/malowanie-na-zywo-warszawa",
  "/live-painting-trojmiasto": "/malowanie-na-zywo-trojmiasto",
};

export function loader({ request }: { request: Request }) {
  const pathname = new URL(request.url).pathname.replace(/\/+$/, "");
  return redirect(MAP[pathname] ?? "/", 301);
}
