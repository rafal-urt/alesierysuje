import { useEffect, useState } from "react";
import { Link } from "react-router";
import { WatercolorPlaceholder } from "~/components/WatercolorPlaceholder";

export type GalleryWork = {
  title: string;
  meta: string;
  seed: number;
  palette: number;
  big?: boolean;
  imageUrl?: string;
  imageAlt?: string;
};

function Lightbox({ work, onClose }: { work: GalleryWork | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className={`lb${work ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={work?.title ?? "Podgląd pracy"}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className="lb-close" onClick={onClose} aria-label="Zamknij">
        &times;
      </button>
      <div className="lb-inner">
        {work && (
          <>
            <div className="frame">
              {work.imageUrl ? (
                <img src={work.imageUrl} alt={work.imageAlt ?? work.title} />
              ) : (
                <WatercolorPlaceholder seed={work.seed} palette={work.palette} width={420} height={520} />
              )}
            </div>
            <h3>{work.title}</h3>
            <div className="meta">{work.meta}</div>
            <Link className="btn" to="/terminy" onClick={onClose}>
              Chcę taki obraz na swoim weselu
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

// Galeria prac: variant "strip" (pas na homepage) lub "wall" (ściana na /realizacje).
export function WorksGallery({ works, variant }: { works: GalleryWork[]; variant: "strip" | "wall" }) {
  const [selected, setSelected] = useState<GalleryWork | null>(null);
  const sizes =
    variant === "wall"
      ? { w: 340, h: 420, wSmall: 280, hSmall: 360 }
      : { w: 260, h: 320, wSmall: 260, hSmall: 320 };

  return (
    <>
      <div className={`${variant} soak`}>
        {works.map((it) => (
          <div
            key={it.seed}
            className={`piece${it.big ? " big" : ""}`}
            onClick={() => setSelected(it)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelected(it);
              }
            }}
            aria-label={`Powiększ: ${it.title}`}
          >
            <div className="frame">
              {it.imageUrl ? (
                <img src={it.imageUrl} alt={it.imageAlt ?? it.title} loading="lazy" />
              ) : (
                <WatercolorPlaceholder
                  seed={it.seed}
                  palette={it.palette}
                  width={it.big ? sizes.w : sizes.wSmall}
                  height={it.big ? sizes.h : sizes.hSmall}
                />
              )}
            </div>
            <div className="cap">{it.title}</div>
          </div>
        ))}
      </div>
      <Lightbox work={selected} onClose={() => setSelected(null)} />
    </>
  );
}
