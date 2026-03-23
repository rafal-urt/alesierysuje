"use client";

import { useState, useEffect, useRef } from "react";

const serviceLinks = [
  { href: "/uslugi/live-painting-wesele", label: "Live Painting na Wesele" },
  { href: "/uslugi/event-firmowy", label: "Event Firmowy" },
  { href: "/uslugi/portrety-rodzicow", label: "Portrety Rodziców" },
  { href: "/uslugi/mini-portrety", label: "Mini Portrety" },
];

const links = [
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLink = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(253,250,246,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,196,184,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-xl tracking-wide text-dark hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="italic">Ale się rysuje</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Usługi dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-xs tracking-widest uppercase text-muted hover:text-dark transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Usługi
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className="transition-transform duration-200"
                style={{ transform: servicesOpen ? "rotate(180deg)" : "none" }}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div
              className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56 transition-all duration-200"
              style={{
                opacity: servicesOpen ? 1 : 0,
                pointerEvents: servicesOpen ? "auto" : "none",
                transform: `translateX(-50%) translateY(${servicesOpen ? "0" : "-6px"})`,
              }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(253,250,246,0.98)",
                  border: "1px solid rgba(232,196,184,0.4)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                }}
              >
                {serviceLinks.map((sl) => (
                  <a
                    key={sl.href}
                    href={sl.href}
                    className="block px-5 py-3 text-xs tracking-widest uppercase text-muted hover:text-dark transition-colors duration-150"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      borderBottom: "1px solid rgba(232,196,184,0.2)",
                    }}
                  >
                    {sl.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

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
        style={{ maxHeight: open ? "600px" : "0" }}
      >
        <nav
          className="flex flex-col px-6 py-4 gap-4 border-t"
          style={{
            borderColor: "rgba(232,196,184,0.3)",
            background: "rgba(253,250,246,0.97)",
          }}
        >
          {/* Mobile Usługi accordion */}
          <button
            className="flex items-center justify-between text-sm tracking-widest uppercase text-muted hover:text-dark transition-colors py-1 w-full text-left"
            style={{ fontFamily: "var(--font-dm-sans)" }}
            onClick={() => setMobileServicesOpen((v) => !v)}
          >
            Usługi
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className="transition-transform duration-200"
              style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none" }}
            >
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-200 pl-4"
            style={{ maxHeight: mobileServicesOpen ? "300px" : "0" }}
          >
            {serviceLinks.map((sl) => (
              <a
                key={sl.href}
                href={sl.href}
                onClick={handleLink}
                className="block text-xs tracking-widest uppercase text-muted hover:text-dark transition-colors py-2"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {sl.label}
              </a>
            ))}
          </div>

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
