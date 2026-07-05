import { useState } from "react";

// Wachlarz prawdziwych kartek A5 - bez ramek i tla, sam papier z cieniem.
// Najechana kartka wysuwa sie do gory i po opuszczeniu kursora
// zostaje na wierzchu stosu (do czasu najechania innej).
export type FanCard = { src: string; alt: string };

const WEDDING_CARDS: FanCard[] = [
  {
    src: "/gfx/prace/karta-wesele-grupa.webp",
    alt: "Akwarelowa ilustracja grupy gości weselnych",
  },
  {
    src: "/gfx/prace/karta-wesele-para.webp",
    alt: "Akwarelowa ilustracja pary z wesela",
  },
  {
    src: "/gfx/prace/karta-wesele-dziewczynki.webp",
    alt: "Akwarelowa ilustracja dziewczynek w odświętnych sukienkach",
  },
];

const BASE_Z = [1, 2, 1];

export function CardFan({ cards = WEDDING_CARDS }: { cards?: FanCard[] }) {
  const [top, setTop] = useState<number | null>(null);
  return (
    <div className="card-fan soak d2" aria-hidden="true">
      {cards.map((c, i) => (
        <img
          key={c.src}
          src={c.src}
          alt={c.alt}
          width={560}
          height={790}
          loading="lazy"
          style={{ zIndex: top === i ? 5 : BASE_Z[i] }}
          onMouseEnter={() => setTop(i)}
        />
      ))}
    </div>
  );
}
