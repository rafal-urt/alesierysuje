import { useState } from "react";

export type FaqEntry = { q: string; a: string };

function FaqItem({ q, a }: FaqEntry) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item soak${open ? " open" : ""}`}>
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {q}
      </button>
      <div className="a">{a}</div>
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
