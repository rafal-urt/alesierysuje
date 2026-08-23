import type { Route } from "./+types/malowanie-na-zywo-lodz";
import { CityPage } from "~/components/CityPage";
import { getCity } from "~/data/cities";
import { getDb } from "~/lib/payload.server";
import { plMonthYear } from "~/lib/dates";
import { pageMeta } from "~/lib/seo";
import { cacheContent } from "~/lib/cache";

const city = getCity("malowanie-na-zywo-lodz")!;

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: city.title,
    description: city.description,
    path: `/${city.slug}`,
    ogImage: city.ogImage,
  });
}

export async function loader() {
  const db = await getDb();
  const [settings, reviews] = await Promise.all([
    db.findGlobal({ slug: "settings" }),
    db.find({ collection: "reviews", sort: "-date", limit: 20 }),
  ]);
  const pattern = new RegExp(city.reviewPattern, "i");
  return {
    weddingPrices: {
      kameralny: settings.weddingPackages?.kameralny ?? 4000,
      klasyczny: settings.weddingPackages?.klasyczny ?? 6000,
      prestizowy: settings.weddingPackages?.prestizowy ?? 9000,
    } as Record<string, number>,
    eventFrom: settings.eventPackages?.networking ?? 4500,
    reviews: reviews.docs
      .filter((r) => pattern.test(r.location ?? ""))
      .slice(0, 3)
      .map((r) => ({
        author: r.author,
        text: r.text,
        where: r.location ?? "",
        when: plMonthYear(r.date),
      })),
  };
}

export default function LivePaintingLodz(props: Route.ComponentProps) {
  return <CityPage city={city} data={props.loaderData} />;
}

export const headers = cacheContent;
