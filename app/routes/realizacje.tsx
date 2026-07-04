import type { Route } from "./+types/realizacje";
import { Link } from "react-router";
import { WorksGallery } from "~/components/WorksGallery";
import { getDb, mapWork } from "~/lib/payload.server";
import { pageMeta, breadcrumbJsonLd } from "~/lib/seo";
import { JsonLd } from "~/components/JsonLd";

export async function loader() {
  const db = await getDb();
  const works = await db.find({ collection: "works", sort: "order", limit: 100, depth: 1 });
  return { works: works.docs.map(mapWork) };
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Realizacje - live painting i portrety | alesierysuje",
    description:
      "Galeria prac alesierysuje - obrazy z wesel i eventów malowane na żywo oraz portrety na zamówienie ze zdjęcia.",
    path: "/realizacje",
    ogImage: "/og/realizacje.png",
  });
}

export default function Realizacje({ loaderData }: Route.ComponentProps) {
  const { works } = loaderData;
  return (
    <main className="page">
      <JsonLd data={breadcrumbJsonLd([{ name: "Realizacje", path: "/realizacje" }])} />
      <section className="pageshero" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="eyebrow soak">Realizacje &middot; alesierysuje.pl/realizacje</div>
          <h1 className="soak d1">Realizacje - malowanie na żywo i portrety.</h1>
          <p className="lead soak d2">
            Każda rama to czyjeś wesele, event albo portret bliskiej osoby. Kliknij pracę, żeby
            zobaczyć ją z bliska.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 34 }}>
        <div className="wrap">
          <div className="wall-hint soak">
            <span>przewiń w prawo</span>
            <span className="arr">&rarr;</span>
          </div>
        </div>
        <WorksGallery works={works} variant="wall" />
        <div className="wrap" style={{ textAlign: "center", paddingTop: 20 }}>
          <Link className="btn" to="/terminy">
            Chcę taki obraz na swoim weselu
          </Link>
        </div>
      </section>
    </main>
  );
}
