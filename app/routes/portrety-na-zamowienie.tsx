import type { Route } from "./+types/portrety-na-zamowienie";
import { WatercolorStain } from "~/components/WatercolorStain";
import { PortraitConfigurator } from "~/components/PortraitConfigurator";
import { getDb } from "~/lib/payload.server";
import { sendMail } from "~/lib/email.server";
import { clientIp, rateLimit } from "~/lib/rateLimit.server";
import { pageMeta, breadcrumbJsonLd, SITE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";

export async function loader() {
  const db = await getDb();
  const s = await db.findGlobal({ slug: "settings" });
  return {
    portraits: {
      a4: s.portraits?.a4 ?? 490,
      a3: s.portraits?.a3 ?? 690,
      b50x70: s.portraits?.b50x70 ?? 990,
      extraPerson: s.portraits?.extraPerson ?? 160,
      dedication: s.portraits?.dedication ?? 90,
    },
  };
}

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();

  if (String(form.get("website") ?? "").length > 0) {
    return { ok: true as const };
  }
  if (!rateLimit(`portrait:${clientIp(request)}`)) {
    return { error: "Za dużo zapytań z tego adresu. Spróbujcie ponownie za kilka minut." };
  }

  const names = String(form.get("names") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const details = String(form.get("details") ?? "").trim();

  if (!names) return { error: "Podajcie imię i nazwisko." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Podajcie poprawny adres e-mail." };
  if (!details) return { error: "Brak konfiguracji portretu - odświeżcie stronę." };

  const db = await getDb();
  await db.create({
    collection: "inquiries",
    data: { names, email, eventType: "portret", status: "nowe", details },
  });

  const settings = await db.findGlobal({ slug: "settings" });
  try {
    await Promise.all([
      sendMail({
        to: settings.contactEmail,
        subject: `Nowe zapytanie o portret - ${names}`,
        text: [
          "Nowe zapytanie o portret z alesierysuje.pl/portrety-na-zamowienie",
          "",
          `Zamawia: ${names}`,
          `E-mail: ${email}`,
          `Konfiguracja: ${details}`,
          "",
          "Szczegóły w panelu: /admin (kolekcja Zapytania)",
        ].join("\n"),
        replyTo: email,
      }),
      sendMail({
        to: email,
        subject: "Zapytanie o portret dotarło - alesierysuje",
        text: [
          `Cześć ${names}!`,
          "",
          "Zapytanie o portret dotarło do pracowni.",
          `Wybrana konfiguracja: ${details}`,
          "Ale odezwie się w 24 - 48 godzin z prośbą o zdjęcie referencyjne i potwierdzeniem terminu realizacji.",
          "Zapytanie do niczego nie zobowiązuje.",
          "",
          "do usłyszenia,",
          "Aleksandra Sienica - alesierysuje.pl",
        ].join("\n"),
      }),
    ]);
  } catch (err) {
    console.error("Błąd wysyłki maila portretu:", err);
  }

  return { ok: true as const };
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Portrety na zamówienie - portret ze zdjęcia | alesierysuje",
    description:
      "Portret ze zdjęcia malowany ręcznie akwarelą. Konfigurator online z ceną na żywo od 490 zł, realizacja 10 - 14 dni, wysyłka w cenie.",
    path: "/portrety-na-zamowienie",
    ogImage: "/og/portrety.png",
  });
}

export default function PortretyNaZamowienie({ loaderData }: Route.ComponentProps) {
  const { portraits } = loaderData;
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Portrety na zamówienie", path: "/portrety-na-zamowienie" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Portret na zamówienie ze zdjęcia",
          description: "Portret akwarelowy malowany ręcznie na podstawie zdjęcia, formaty A4 - 50 × 70 cm.",
          brand: { "@type": "Brand", name: "alesierysuje" },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: String(portraits.a4),
            highPrice: String(portraits.b50x70 + 4 * portraits.extraPerson + portraits.dedication),
            priceCurrency: "PLN",
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <WatercolorStain color="green" width={480} height={420} style={{ top: 80, left: -160 }} />
      <section className="pageshero">
        <div className="wrap">
          <div className="eyebrow soak">Pracownia &middot; alesierysuje.pl/portrety-na-zamowienie</div>
          <h1 className="soak d1">Portrety na zamówienie - portret ze zdjęcia malowany ręcznie.</h1>
          <p className="lead soak d2">
            Wybieracie liczbę osób i format, a cena układa się na Waszych oczach. Po zamówieniu
            dostajecie kartę realizacji - zdjęcia szkicu, warstw koloru i gotowej pracy, prosto z
            pracowni.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 20 }}>
        <PortraitConfigurator prices={portraits} />
      </section>
    </main>
  );
}
