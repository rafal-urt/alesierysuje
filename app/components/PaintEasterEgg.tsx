import { useEffect, useRef, useState } from "react";

// Easter egg: przytrzymanie myszy na pustym tle zostawia rozlewajaca sie
// plame akwareli (malujemy "papier" strony - plamy leza pod trescia).
// Tylko desktop (pointer: fine), wylaczone przy prefers-reduced-motion.
const STAIN_COLORS = ["127,168,201", "201,124,149", "224,178,106", "138,166,141"];

export function PaintEasterEgg() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [dirty, setDirty] = useState(false);
  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const setSize = () => {
      const w = document.documentElement.clientWidth;
      const h = document.documentElement.scrollHeight;
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
        raf = requestAnimationFrame(grow);
      }, 250);
    };
    const stop = () => {
      clearTimeout(holdTimer);
      cancelAnimationFrame(raf);
      active = null;
    };

    window.addEventListener("mousedown", start);
    window.addEventListener("mouseup", stop);
    window.addEventListener("mouseleave", stop);
    window.addEventListener("resize", setSize);
    return () => {
      stop();
      window.removeEventListener("mousedown", start);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("mouseleave", stop);
      window.removeEventListener("resize", setSize);
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
      {dirty && (
        <button type="button" className="paint-clear" onClick={clear} disabled={clearing}>
          <span className="paint-clear-dot" aria-hidden="true" />
          {clearing ? "zmywam kartkę..." : "wyczyść kartkę"}
        </button>
      )}
    </>
  );
}
