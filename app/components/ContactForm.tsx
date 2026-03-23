"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

type FormData = {
  name: string;
  email: string;
  eventDate: string;
  guests: string;
  eventType: string;
  message: string;
};

const inputClass =
  "w-full rounded-xl px-5 py-4 text-sm bg-cream border outline-none transition-all duration-200 text-dark placeholder-muted";
const inputStyle = {
  borderColor: "rgba(232,196,184,0.4)",
  fontFamily: "var(--font-dm-sans)",
};
const inputFocusStyle = "focus:border-rose";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormData) => {
    // Simulate send — replace with your backend / email service
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form data:", data);
    setSent(true);
    reset();
  };

  return (
    <section id="kontakt" className="py-16 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left side */}
        <ScrollReveal>
          <p
            className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Kontakt
          </p>
          <h2
            className="text-4xl md:text-5xl text-dark leading-tight mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Zarezerwuj{" "}
            <span className="italic" style={{ color: "#E8C4B8" }}>
              swój termin
            </span>
          </h2>
          <div
            className="space-y-5 text-muted text-sm leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <p>
              Chętnie odpowiem na wszystkie pytania i przygotuję wycenę
              dopasowaną do Waszego wesela. Staram się odpowiadać w ciągu 24
              godzin.
            </p>
            <p>
              Dostępność terminów jest ograniczona — szczególnie w sezonie
              ślubnym (maj–wrzesień). Warto pytać z wyprzedzeniem.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            {[
              { label: "Email", value: "hej@alesierysuje.pl" },
              { label: "Telefon", value: "+48 000 000 000" },
              { label: "Lokalizacja", value: "Warszawa (obsługuję całą Polskę)" },
              { label: "Instagram", value: "@alesierysuje" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-baseline">
                <span
                  className="text-xs tracking-widest uppercase text-muted w-24 shrink-0"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.label}
                </span>
                <span
                  className="text-sm text-dark"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={200}>
          {sent ? (
            <div
              className="rounded-3xl p-10 text-center"
              style={{
                background: "#f5ede8",
                border: "1px solid rgba(232,196,184,0.4)",
              }}
            >
              <p
                className="text-4xl mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "#E8C4B8" }}
              >
                ✦
              </p>
              <h3
                className="text-xl text-dark mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Dziękuję za wiadomość!
              </h3>
              <p
                className="text-sm text-muted"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Odezwę się do Ciebie w ciągu 24 godzin.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-xs tracking-widest uppercase text-muted underline"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Wyślij kolejną wiadomość
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl p-8 space-y-5"
              style={{
                background: "rgba(253,250,246,0.8)",
                border: "1px solid rgba(232,196,184,0.25)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.04)",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Imię i nazwisko"
                    className={`${inputClass} ${inputFocusStyle}`}
                    style={inputStyle}
                  />
                  {errors.name && (
                    <p className="text-xs mt-1" style={{ color: "#E8C4B8", fontFamily: "var(--font-dm-sans)" }}>
                      Wymagane
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    placeholder="Adres email"
                    type="email"
                    className={`${inputClass} ${inputFocusStyle}`}
                    style={inputStyle}
                  />
                  {errors.email && (
                    <p className="text-xs mt-1" style={{ color: "#E8C4B8", fontFamily: "var(--font-dm-sans)" }}>
                      Podaj prawidłowy email
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  {...register("eventDate")}
                  placeholder="Data eventu"
                  type="date"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                />
                <input
                  {...register("guests")}
                  placeholder="Liczba gości"
                  type="number"
                  min="1"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                />
              </div>

              <select
                {...register("eventType")}
                className={`${inputClass} ${inputFocusStyle}`}
                style={inputStyle}
              >
                <option value="">Rodzaj eventu</option>
                <option value="wesele">Wesele</option>
                <option value="event-firmowy">Event firmowy</option>
                <option value="urodziny">Urodziny</option>
                <option value="bridal-shower">Bridal shower</option>
                <option value="inne">Inne</option>
              </select>

              <textarea
                {...register("message", { required: true })}
                placeholder="Powiedz mi więcej o swoim evencie — lokalizacja, oczekiwania, pytania..."
                rows={5}
                className={`${inputClass} ${inputFocusStyle} resize-none`}
                style={inputStyle}
              />
              {errors.message && (
                <p className="text-xs" style={{ color: "#E8C4B8", fontFamily: "var(--font-dm-sans)" }}>
                  Wiadomość jest wymagana
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-80 hover:scale-[1.01] disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg, #E8C4B8, #D4B896)",
                  color: "#2C3E35",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
              </button>

              <p
                className="text-xs text-center text-muted"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
