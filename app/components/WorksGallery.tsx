import { useEffect, useState } from "react";
import { Link } from "react-router";
import { WatercolorPlaceholder } from "~/components/WatercolorPlaceholder";
import { Pic } from "~/components/Pic";

export type GalleryWork = {
  title: string;
  meta: string;
  seed: number;
  palette: number;
  big?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

function Lightbox({
  work,
  onClose,
  onPrev,
  onNext,
  cta,
}: {
  work: GalleryWork | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  cta: { label: string; to: string };
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

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
      <button
        className="lb-arrow lb-prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Poprzednia praca"
      >
        &#8249;
      </button>
      <button
        className="lb-arrow lb-next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Następna praca"
      >
        &#8250;
      </button>
      <div className="lb-inner">
        {work && (
          <>
            {work.imageUrl ? (
              <Pic src={work.imageUrl} alt={work.imageAlt ?? work.title} width={work.imageWidth} height={work.imageHeight} />
            ) : (
              <div className="frame">
                <WatercolorPlaceholder seed={work.seed} palette={work.palette} width={420} height={520} />
              </div>
            )}
            <Link className="btn" to={cta.to} onClick={onClose}>
              {cta.label}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

// Galeria prac: variant "strip" (pas na homepage) lub "wall" (ściana na /realizacje).
export function WorksGallery({
  works,
  variant,
  cta = { label: "Chcę takie ilustracje na swoim weselu", to: "/terminy" },
}: {
  works: GalleryWork[];
  variant: "strip" | "wall";
  cta?: { label: string; to: string };
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : works[selectedIndex];
  const prev = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + works.length) % works.length));
  const next = () => setSelectedIndex((i) => (i === null ? null : (i + 1) % works.length));
  const sizes =
    variant === "wall"
      ? { w: 340, h: 420, wSmall: 280, hSmall: 360 }
      : { w: 260, h: 320, wSmall: 260, hSmall: 320 };

  return (
    <>
      <div className={`${variant} soak`}>
        {works.map((it, idx) => (
          <div
            key={it.seed}
            className={`piece${it.big ? " big" : ""}`}
            onClick={() => setSelectedIndex(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedIndex(idx);
              }
            }}
            aria-label={`Powiększ: ${it.title}`}
          >
            {it.imageUrl ? (
              <Pic src={it.imageUrl} alt={it.imageAlt ?? it.title} width={it.imageWidth} height={it.imageHeight} loading="lazy" />
            ) : (
              <div className="frame">
                <WatercolorPlaceholder
                  seed={it.seed}
                  palette={it.palette}
                  width={it.big ? sizes.w : sizes.wSmall}
                  height={it.big ? sizes.h : sizes.hSmall}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <Lightbox work={selected} onClose={() => setSelectedIndex(null)} onPrev={prev} onNext={next} cta={cta} />
    </>
  );
}
