import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("live-painting-wesele", "routes/live-painting-wesele.tsx"),
  route("live-painting-eventy", "routes/live-painting-eventy.tsx"),
  route("portrety-na-zamowienie", "routes/portrety-na-zamowienie.tsx"),
  route("realizacje", "routes/realizacje.tsx"),
  route("cennik", "routes/cennik.tsx"),
  route("o-mnie", "routes/o-mnie.tsx"),
  route("terminy", "routes/terminy.tsx"),
  route("polityka-prywatnosci", "routes/polityka-prywatnosci.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog-post.tsx"),
  route("media/*", "routes/media.ts"),
  route("sitemap.xml", "routes/sitemap.ts"),
] satisfies RouteConfig;
