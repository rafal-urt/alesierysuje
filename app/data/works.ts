// Prace do galerii - dane z prototypu, zahardkodowane do czasu podpięcia Payload (Etap 3).
export type Work = {
  title: string;
  meta: string;
  palette: number;
  seed: number;
  big?: boolean;
};

export const WORKS: Work[] = [
  { title: "Pierwszy taniec", meta: "Marta i Paweł - Zamek Gniew, sierpień", palette: 0, seed: 11, big: true },
  { title: "Sala pełna światła", meta: "Karolina i Jan - Pałac Rozalin, czerwiec", palette: 1, seed: 23 },
  { title: "Plener nad jeziorem", meta: "Ola i Tomek - Mazury, lipiec", palette: 3, seed: 37, big: true },
  { title: "Wieczór firmowy", meta: "event, 120 gości - Mielno", palette: 2, seed: 41 },
  { title: "Portret rodziców", meta: "zamówienie z Pracowni - prezent na 40. rocznicę", palette: 4, seed: 53 },
  { title: "Oczepiny o północy", meta: "Basia i Piotr - Serock, wrzesień", palette: 1, seed: 67, big: true },
  { title: "Toast", meta: "Magda i Adam - Warszawa, maj", palette: 0, seed: 71 },
  { title: "Szybkie portrety gości", meta: "gala jubileuszowa - Płock", palette: 2, seed: 83 },
];
