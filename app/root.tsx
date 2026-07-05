import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./styles/app.css";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import { SoakObserver } from "~/components/Soak";
import { JsonLd } from "~/components/JsonLd";
import { localBusinessJsonLd } from "~/lib/seo";
import { GtmScript, GtmNoScript, GaScript } from "~/components/Gtm";
import { CookieBanner } from "~/components/CookieBanner";
import { PaintEasterEgg } from "~/components/PaintEasterEgg";

export async function loader({ request }: Route.LoaderArgs) {
  // kanoniczny host: duplikaty (www, adres vercel.app) -> 301 na domene glowna
  const url = new URL(request.url);
  if (url.hostname === "www.alesierysuje.pl" || url.hostname === "alesierysuje.vercel.app") {
    url.hostname = "alesierysuje.pl";
    url.protocol = "https:";
    url.port = "";
    throw redirect(url.toString(), 301);
  }
  return null;
}

export const links: Route.LinksFunction = () => [
  // LCP na mobile to poster hero (wideo ukryte < 720px) - preload go przyspiesza
  { rel: "preload", as: "image", href: "/gfx/hero-poster.jpg", media: "(max-width: 720px)" },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400;1,9..144,500&family=Instrument+Sans:wght@400;500;600&family=Caveat:wght@500;600&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <GtmScript />
        <GaScript />
      </head>
      <body>
        <GtmNoScript />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <Nav />
      <Outlet />
      <Footer />
      <CookieBanner />
      <PaintEasterEgg />
      <SoakObserver />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Ups!";
  let details = "Wystąpił nieoczekiwany błąd.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Błąd";
    details =
      error.status === 404
        ? "Nie znaleziono takiej strony."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
