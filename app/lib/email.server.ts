// Mail transakcyjny przez Resend (REST). Bez klucza (dev) - mail ląduje w konsoli.

type Mail = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendMail(mail: Mail): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "alesierysuje <onboarding@resend.dev>";

  if (!key) {
    console.log(
      `[mail:dev] do: ${mail.to}\n[mail:dev] temat: ${mail.subject}\n${mail.text}\n---`,
    );
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [mail.to],
      subject: mail.subject,
      text: mail.text,
      ...(mail.replyTo ? { reply_to: mail.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    console.error("Resend: błąd wysyłki", res.status, await res.text());
  }
}
