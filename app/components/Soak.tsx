import { useEffect } from "react";
import { useLocation } from "react-router";

// Animacja "farba wsiąka w papier": elementy .soak dostają .on,
// gdy wejdą w viewport (IntersectionObserver). prefers-reduced-motion
// obsługuje CSS (elementy widoczne od razu, bez przejść).
export function SoakObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    const t = setTimeout(() => {
      document.querySelectorAll(".soak:not(.on)").forEach((el) => io.observe(el));
    }, 60);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
