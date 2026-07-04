import { useState } from "react";

export type FaqEntry = { q: string; a: string };

function FaqItem({ q, a }: FaqEntry) {
  const [open, setOpen] = useState(false);
  // soak na statycznym wrapperze: SoakObserver dodaje klasę "on" imperatywnie,
  // a zmienny className na tym samym elemencie kasowałby ją przy re-renderze
  return (
    <div className="soak">
      <div className={`faq-item${open ? " open" : ""}`}>
        <button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          {q}
        </button>
        <div className="a">{a}</div>
      </div>
    </div>
  );
}

export function Faq({ items }: { items: FaqEntry[] }) {
  return (
    <div className="faq">
      {items.map((it) => (
        <FaqItem key={it.q} {...it} />
      ))}
    </div>
  );
}
