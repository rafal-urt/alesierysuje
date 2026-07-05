// Wachlarz prawdziwych kartek A5 - bez ramek i tla, sam papier z cieniem.
// Najechana kartka delikatnie sie wysuwa.
const CARDS = [
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

export function CardFan() {
  return (
    <div className="card-fan soak d2" aria-hidden="true">
      {CARDS.map((c) => (
        <img key={c.src} src={c.src} alt={c.alt} width={560} height={790} loading="lazy" />
      ))}
    </div>
  );
}
