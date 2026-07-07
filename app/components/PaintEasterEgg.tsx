import { useEffect, useRef, useState } from "react";

// Easter egg: przytrzymanie myszy na pustym tle zostawia rozlewajaca sie
// plame akwareli (malujemy "papier" strony - plamy leza pod trescia).
// Tylko desktop (pointer: fine), wylaczone przy prefers-reduced-motion.
// 15 akwarelowych barw - od blekitow po terakote (kazde przytrzymanie = losowa)
const STAIN_COLORS = [
  "127,168,201", // błękit
  "46,94,138", // indygo
  "122,187,197", // turkus
  "120,150,170", // szaroniebieski
  "138,166,141", // szałwia
  "96,138,105", // zieleń butelkowa
  "201,124,149", // róż
  "217,158,175", // róż pudrowy
  "190,102,120", // malina
  "230,150,130", // koral
  "224,178,106", // ochra
  "226,200,140", // piasek
  "205,140,100", // terakota
  "155,143,192", // fiolet
  "176,160,210", // lawenda
];

export function PaintEasterEgg() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [dirty, setDirty] = useState(false);
  const [clearing, setClearing] = useState(false);
  const [hint, setHint] = useState(false);

  // delikatna podpowiedz - raz na sesje, znika sama albo przy malowaniu
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (sessionStorage.getItem("as-paint-hint")) return;
    const show = window.setTimeout(() => {
      setHint(true);
      sessionStorage.setItem("as-paint-hint", "1");
    }, 3500);
    const hide = window.setTimeout(() => setHint(false), 33500);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const setSize = () => {
      // scrollHeight liczy tez sam canvas (element absolutny), wiec mierzymy
      // dokument z ukrytym canvasem - inaczej canvas nigdy by sie nie skurczyl
      // i strona rosla pod stopka po kazdym wydluzeniu tresci (FAQ, resize)
      canvas.style.display = "none";
      const w = document.documentElement.clientWidth;
      const h = document.documentElement.scrollHeight;
      canvas.style.display = "";
      if (canvas.width !== w || canvas.height !== h) {
        const tmp = document.createElement("canvas");
        tmp.width = canvas.width;
        tmp.height = canvas.height;
        tmp.getContext("2d")!.drawImage(canvas, 0, 0);
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d")!.drawImage(tmp, 0, 0);
      }
    };
    setSize();
    const ctx = canvas.getContext("2d")!;

    let holdTimer = 0;
    let raf = 0;
    let active: { x: number; y: number; c: string; r: number; t: number } | null = null;

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element &&
      !!el.closest("a, button, input, textarea, select, label, [role='button'], .btn, .lb, .macal, .packpanel, .chip, video");

    const grow = () => {
      if (!active) return;
      active.t++;
      active.r = Math.min(150, active.r + Math.max(0.4, 3.2 - active.t * 0.045));
      const blots = active.t < 8 ? 4 : 2;
      for (let i = 0; i < blots; i++) {
        const ang = Math.random() * Math.PI * 2;
        const dist = Math.random() * active.r * 0.82;
        const rr = 6 + Math.random() * (active.r * 0.34);
        const x = active.x + Math.cos(ang) * dist;
        const y = active.y + Math.sin(ang) * dist * 0.88;
        const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
        g.addColorStop(0, `rgba(${active.c},0.045)`);
        g.addColorStop(0.7, `rgba(${active.c},0.028)`);
        g.addColorStop(1, `rgba(${active.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, rr, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(grow);
    };

    const start = (e: MouseEvent) => {
      if (e.button !== 0 || isInteractive(e.target)) return;
      holdTimer = window.setTimeout(() => {
        setSize();
        active = {
          x: e.pageX,
          y: e.pageY,
          c: STAIN_COLORS[Math.floor(Math.random() * STAIN_COLORS.length)],
          r: 8,
          t: 0,
        };
        setDirty(true);
        setHint(false);
        raf = requestAnimationFrame(grow);
      }, 250);
    };
    const stop = () => {
      clearTimeout(holdTimer);
      cancelAnimationFrame(raf);
      active = null;
    };

    // ResizeObserver na body lapie i zmiane szerokosci okna, i zmiany
    // wysokosci tresci (akordeony, doladowane zdjecia) - canvas rosnie
    // I kurczy sie razem ze strona
    const ro = new ResizeObserver(setSize);
    ro.observe(document.body);

    window.addEventListener("mousedown", start);
    window.addEventListener("mouseup", stop);
    window.addEventListener("mouseleave", stop);
    return () => {
      stop();
      ro.disconnect();
      window.removeEventListener("mousedown", start);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("mouseleave", stop);
    };
  }, []);

  const clear = () => {
    const canvas = ref.current;
    if (!canvas) return;
    setClearing(true);
    let step = 0;
    const fade = () => {
      const ctx = canvas.getContext("2d")!;
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.28)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      step++;
      if (step < 14) requestAnimationFrame(fade);
      else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setDirty(false);
        setClearing(false);
      }
    };
    requestAnimationFrame(fade);
  };

  return (
    <>
      <canvas ref={ref} className="paint-canvas" aria-hidden="true" />
      {hint && !dirty && (
        <button type="button" className="paint-clear paint-hint" onClick={() => setHint(false)}>
          <span className="paint-clear-dot" aria-hidden="true" />
          Wciśnij i przytrzymaj lewy przycisk myszy na tle strony, żeby malować razem ze mną
        </button>
      )}
      {dirty && (
        <button type="button" className="paint-clear" onClick={clear} disabled={clearing}>
          <span className="paint-clear-dot" aria-hidden="true" />
          {clearing ? "zmywam kartkę..." : "wyczyść kartkę"}
        </button>
      )}
    </>
  );
}
