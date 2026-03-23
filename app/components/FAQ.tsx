"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Ile portretów możesz namalować w czasie wesela?",
    a: "Zazwyczaj 20–30 portretów w ciągu 4–6 godzin, co daje około 5–10 minut na osobę lub parę. Dokładna liczba zależy od stopnia szczegółowości i formatu. Na większych weselach warto zaplanować wcześniejsze godziny — zanim przyjęcie wejdzie w pełny rozkwit.",
  },
  {
    q: "Czy mogę zamówić portret po evencie?",
    a: "Tak! Opcja studio polega na tym, że robię zdjęcie gościowi podczas eventu, a portret maluję po nim w pracowni. Efekt jest wtedy bardziej dopracowany. Gotowy portret wysyłam pocztą w tubie, opcjonalnie w passepartout.",
  },
  {
    q: "Czego potrzebuję przygotować na weselu?",
    a: "Tylko dobrze oświetlone, wydzielone miejsce ze stolikiem (ok. 100×60 cm) i krzesłem dla gościa. Resztę — farby, papiery, akcesoria — przywożę ze sobą. Stolik może stać w kącie sali, w ogrodzie lub na tarasie.",
  },
  {
    q: "Jak daleko dojeżdżasz?",
    a: "Bazuję w Warszawie i obsługuję całą Polskę. Przy odległościach powyżej 100 km doliczam koszty dojazdu i ewentualnego noclegu. Napisz do mnie z lokalizacją — wycenię indywidualnie.",
  },
  {
    q: "Jak wygląda styl malowania? Czy to będzie 'podobne'?",
    a: "Maluję lekko, impresjonistycznie — akwarela z natury jest ulotna i transparentna. Portrety mają klimat artystyczny, nie fotograficzny. Skupiam się na charakterze twarzy, nastroju i emocjach. Każdy portret jest inny i niepowtarzalny.",
  },
  {
    q: "Jak zarezerwować termin?",
    a: "Wypełnij formularz kontaktowy poniżej lub napisz bezpośrednio na adres email. Odpowiem w ciągu 24 godzin. Po ustaleniu szczegółów podpisujemy prostą umowę i wpłacasz zadatek, który potwierdza rezerwację.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-28 px-6" style={{ background: "#f5f0eb" }}>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl md:text-5xl text-dark"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Najczęstsze pytania
          </h2>
          <div className="brush-line mt-6" />
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(253,250,246,0.9)",
                  border: "1px solid rgba(232,196,184,0.25)",
                }}
              >
                <button
                  className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className="text-sm font-medium text-dark"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-transform duration-300"
                    style={{
                      background: open === i ? "#E8C4B8" : "transparent",
                      border: "1px solid #E8C4B8",
                      color: "#2C3E35",
                      transform: open === i ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: open === i ? "300px" : "0" }}
                >
                  <p
                    className="px-7 pb-6 text-sm text-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
