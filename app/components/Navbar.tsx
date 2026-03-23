"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#o-usludze", label: "O usłudze" },
  { href: "#jak-dziala", label: "Jak to działa" },
  { href: "#pakiety", label: "Pakiety" },
  { href: "#galeria", label: "Galeria" },
  { href: "#opinie", label: "Opinie" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = () => setOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(253,250,246,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,196,184,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl tracking-wide text-dark hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="italic">Ale się rysuje</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase text-muted hover:text-dark transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#kontakt"
          className="hidden md:inline-block px-6 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #E8C4B8, #D4B896)",
            color: "#2C3E35",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          Zapytaj o termin
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className="block w-6 h-0.5 bg-dark transition-all duration-300"
            style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }}
          />
          <span
            className="block w-6 h-0.5 bg-dark transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-dark transition-all duration-300"
            style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0" }}
      >
        <nav
          className="flex flex-col px-6 py-4 gap-4 border-t"
          style={{
            borderColor: "rgba(232,196,184,0.3)",
            background: "rgba(253,250,246,0.97)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleLink}
              className="text-sm tracking-widest uppercase text-muted hover:text-dark transition-colors py-1"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={handleLink}
            className="mt-2 inline-block text-center px-6 py-3 rounded-full text-xs tracking-widest uppercase"
            style={{
              background: "linear-gradient(135deg, #E8C4B8, #D4B896)",
              color: "#2C3E35",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Zapytaj o termin
          </a>
        </nav>
      </div>
    </header>
  );
}
