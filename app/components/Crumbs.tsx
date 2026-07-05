import { Link } from "react-router";

// Widoczne breadcrumbs - lustro BreadcrumbList JSON-LD danej strony.
export function Crumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav className="crumbs soak" aria-label="Ścieżka nawigacji">
      <Link to="/">Strona główna</Link>
      {items.map((it) => (
        <span key={it.name}>
          <span className="crumbs-sep" aria-hidden="true">
            ›
          </span>
          {it.path ? <Link to={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
        </span>
      ))}
    </nav>
  );
}
