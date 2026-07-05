// Wachlarz trzech prawdziwych ilustracji A5 w hero podstron.
// Zdjęcia wspólne dla wszystkich stron, podpisy per strona.
const CARDS = [
  { src: "/gfx/prace/a5-portret-duet.webp", alt: "Akwarelowy portret pary gości" },
  { src: "/gfx/prace/a5-portret-solo.webp", alt: "Akwarelowy portret gościa" },
  { src: "/gfx/prace/a5-portret-roz.webp", alt: "Akwarelowy portret gościa w różu" },
];

export function A5Stack({ caps }: { caps: [string, string, string] }) {
  return (
    <div className="a5-stack soak d2" aria-hidden="true">
      {CARDS.map((c, i) => (
        <div className="frame" key={c.src}>
          <img src={c.src} alt={c.alt} width={600} height={840} loading="lazy" />
          <div className="cap">{caps[i]}</div>
        </div>
      ))}
    </div>
  );
}
