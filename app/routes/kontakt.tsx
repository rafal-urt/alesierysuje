import { useFetcher } from "react-router";
import type { Route } from "./+types/kontakt";
import { Link } from "react-router";
import { WatercolorStain } from "~/components/WatercolorStain";
import { getDb } from "~/lib/payload.server";
import { sendMail } from "~/lib/email.server";
import { clientIp, rateLimit } from "~/lib/rateLimit.server";
import { pageMeta, breadcrumbJsonLd, SITE_URL } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Kontakt - napisz do mnie | alesierysuje",
    description:
      "Masz pytanie o live painting, portrety albo współpracę? Napisz przez formularz lub złap mnie na Instagramie - odpowiadam w 24 - 48 godzin.",
    path: "/kontakt",
  });
}

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();

  if (String(form.get("website") ?? "").length > 0) {
    return { ok: true as const };
  }
  if (!rateLimit(`kontakt:${clientIp(request)}`)) {
    return { error: "Za dużo wiadomości z tego adresu. Spróbujcie ponownie za kilka minut." };
  }

  const names = String(form.get("names") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!names) return { error: "Podaj swoje imię.", field: "names" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { error: "Podaj poprawny adres e-mail.", field: "email" };
  if (message.length < 10)
    return { error: "Napisz kilka słów więcej - minimum 10 znaków.", field: "message" };

  const db = await getDb();
  await db.create({
    collection: "inquiries",
    data: { names, email, eventType: "inne", status: "nowe", details: `Wiadomość z /kontakt:\n${message}` },
  });

  const settings = await db.findGlobal({ slug: "settings" });
  try {
    await Promise.all([
      sendMail({
        to: settings.contactEmail,
        subject: `Nowa wiadomość ze strony - ${names}`,
        text: [
          "Nowa wiadomość z formularza kontaktowego alesierysuje.pl",
          "",
          `Od: ${names} <${email}>`,
          "",
          message,
          "",
          "Szczegóły w panelu: /admin (kolekcja Zapytania)",
        ].join("\n"),
        replyTo: email,
      }),
      sendMail({
        to: email,
        subject: "Wiadomość dotarła - alesierysuje",
        text: [
          `Cześć ${names}!`,
          "",
          "Twoja wiadomość dotarła do pracowni - odpowiem w ciągu 24 - 48 godzin.",
          "",
          "do usłyszenia,",
          "Aleksandra Sienica - alesierysuje.pl",
        ].join("\n"),
      }),
    ]);
  } catch (err) {
    console.error("Błąd wysyłki maila kontaktowego:", err);
  }

  return { ok: true as const };
}

export default function Kontakt() {
  const fetcher = useFetcher<typeof action>();
  const sent = fetcher.data && "ok" in fetcher.data && fetcher.data.ok;
  const err = fetcher.data && "error" in fetcher.data ? fetcher.data : null;
  const sending = fetcher.state !== "idle";

  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Kontakt", path: "/kontakt" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Kontakt - alesierysuje",
          url: SITE_URL + "/kontakt",
          about: { "@id": SITE_URL + "#business" },
        }}
      />
      <WatercolorStain color="blue" width={460} height={420} style={{ top: 60, right: -150 }} />
      <section className="pageshero" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <h1 className="soak d1">Kontakt - napisz do mnie</h1>
          <p className="lead soak d2">
            Pytanie o wolny termin najszybciej załatwisz w{" "}
            <Link to="/terminy" style={{ borderBottom: "1px solid var(--color-ink)" }}>
              kalendarzu
            </Link>
            . Na wszystko inne - współprace, nietypowe pomysły, portrety - jest ten formularz albo
            Instagram.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap contact-grid">
          <div className="panel contactform soak">
            {sent ? (
              <div className="success">
                <div className="check">&#10003;</div>
                <h2 style={{ fontSize: "1.4rem" }}>Wiadomość wysłana</h2>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.95rem", marginTop: 8 }}>
                  Odpowiem w ciągu 24 - 48 godzin na podany adres e-mail.
                </p>
                <span className="hand">do usłyszenia!</span>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: "1.4rem", marginBottom: 18 }}>Formularz</h2>
                <fetcher.Form method="post">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }}
                  />
                  <label htmlFor="k-names">Imię</label>
                  <input
                    id="k-names"
                    name="names"
                    type="text"
                    placeholder="np. Ania"
                    autoComplete="name"
                    required
                    aria-invalid={err?.field === "names" || undefined}
                  />
                  {err?.field === "names" && (
                    <p className="field-error" role="alert">
                      {err.error}
                    </p>
                  )}
                  <label htmlFor="k-email">E-mail</label>
                  <input
                    id="k-email"
                    name="email"
                    type="email"
                    placeholder="ania@..."
                    autoComplete="email"
                    inputMode="email"
                    required
                    aria-invalid={err?.field === "email" || undefined}
                  />
                  {err?.field === "email" && (
                    <p className="field-error" role="alert">
                      {err.error}
                    </p>
                  )}
                  <label htmlFor="k-message">Wiadomość</label>
                  <textarea
                    id="k-message"
                    name="message"
                    rows={6}
                    placeholder="O czym chcesz pogadać?"
                    required
                    minLength={10}
                    aria-invalid={err?.field === "message" || undefined}
                  />
                  {err?.field === "message" && (
                    <p className="field-error" role="alert">
                      {err.error}
                    </p>
                  )}
                  {err && !err.field && (
                    <p className="field-error" role="alert" style={{ marginTop: 14 }}>
                      {err.error}
                    </p>
                  )}
                  <button className="btn" type="submit" disabled={sending}>
                    {sending ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </button>
                  <div className="fine">Odpowiadam w 24 - 48 godzin.</div>
                </fetcher.Form>
              </>
            )}
          </div>
          <div className="panel soak d1">
            <h2 style={{ fontSize: "1.4rem", marginBottom: 18 }}>Złap mnie tu</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-label">Instagram</span>
                <a
                  href="https://www.instagram.com/alesierysuje"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @alesierysuje
                </a>
              </li>
              <li>
                <span className="contact-label">E-mail</span>
                <a href="mailto:alesierysuje@gmail.com">alesierysuje@gmail.com</a>
              </li>
              <li>
                <span className="contact-label">Działam</span>
                <span>Warszawa &middot; dojazd w całej Polsce</span>
              </li>
              <li>
                <span className="contact-label">Odpowiedź</span>
                <span>zwykle w 24 - 48 godzin</span>
              </li>
            </ul>
            <div style={{ marginTop: 26 }}>
              <Link className="btn ghost sm" to="/terminy">
                Wolisz sprawdzić termin? &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
