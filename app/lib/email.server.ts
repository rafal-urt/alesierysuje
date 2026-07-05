// Mail transakcyjny przez Resend (REST). Bez klucza (dev) - mail ląduje w konsoli.

type Mail = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: string }[]; // content = base64
};

export async function sendMail(mail: Mail): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "alesierysuje <onboarding@resend.dev>";

  if (!key) {
    const att = mail.attachments?.map((a) => a.filename).join(", ") || "brak";
    console.log(
      `[mail:dev] do: ${mail.to}\n[mail:dev] temat: ${mail.subject}\n[mail:dev] załączniki: ${att}\n${mail.text}\n---`,
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
      ...(mail.attachments?.length ? { attachments: mail.attachments } : {}),
    }),
  });
  if (!res.ok) {
    console.error("Resend: błąd wysyłki", res.status, await res.text());
  }
}
