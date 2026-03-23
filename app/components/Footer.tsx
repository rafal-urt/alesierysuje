export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-16 px-6"
      style={{ background: "#2C3E35", color: "rgba(253,250,246,0.7)" }}
    >
      <style>{`
        .footer-social-link { color: rgba(232,196,184,0.7); transition: color 0.2s; }
        .footer-social-link:hover { color: #E8C4B8; }
        .footer-nav-link { color: rgba(253,250,246,0.6); transition: color 0.2s; }
        .footer-nav-link:hover { color: #FDFAF6; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl italic mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "#FDFAF6" }}
            >
              Ale się rysuje
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Live painting akwarelowy na wesela i eventy. Każdy gość odchodzi
              z unikalnym portretem — pamiątką na całe życie.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="footer-social-link text-xs tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(253,250,246,0.4)" }}
            >
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#o-usludze", label: "O usłudze" },
                { href: "#jak-dziala", label: "Jak to działa" },
                { href: "#pakiety", label: "Pakiety" },
                { href: "#galeria", label: "Galeria" },
                { href: "#faq", label: "FAQ" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="footer-nav-link text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(253,250,246,0.4)" }}
            >
              Dane kontaktowe
            </h4>
            <ul className="space-y-3 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
              <li>
                <span style={{ color: "rgba(253,250,246,0.4)" }}>Email: </span>
                <a
                  href="mailto:hej@alesierysuje.pl"
                  className="footer-nav-link"
                >
                  hej@alesierysuje.pl
                </a>
              </li>
              <li>
                <span style={{ color: "rgba(253,250,246,0.4)" }}>Tel: </span>
                <a href="tel:+48000000000" className="footer-nav-link">
                  +48 000 000 000
                </a>
              </li>
              <li style={{ color: "rgba(253,250,246,0.7)" }}>
                Kraków · cała Polska
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  @alesierysuje
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(253,250,246,0.1)",
            fontFamily: "var(--font-dm-sans)",
            color: "rgba(253,250,246,0.3)",
          }}
        >
          <p>© {year} Ale się rysuje · alesierysuje.pl</p>
          <p>Wszelkie prawa zastrzeżone</p>
        </div>
      </div>
    </footer>
  );
}
