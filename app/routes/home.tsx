import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Live painting na wesele i eventy - malowanie na żywo | alesierysuje" },
    {
      name: "description",
      content:
        "Live painting i malowanie na żywo na weselach i eventach. Portrety gości i portrety na zamówienie ze zdjęcia.",
    },
  ];
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="font-hand text-3xl text-ink-soft">alesierysuje</p>
    </main>
  );
}
