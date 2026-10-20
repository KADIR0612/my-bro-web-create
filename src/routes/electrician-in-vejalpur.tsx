import { createFileRoute } from "@tanstack/react-router";
import { AreaDetail } from "@/components/site/AreaDetail";
import { areaPages } from "@/data/areas-data";

const area = areaPages.find((a) => a.slug === "/electrician-in-vejalpur")!;

export const Route = createFileRoute("/electrician-in-vejalpur")({
  head: () => ({
    meta: [
      { title: area.metaTitle },
      { name: "description", content: area.metaDescription },
      { property: "og:title", content: area.metaTitle },
      { property: "og:description", content: area.metaDescription },
      { property: "og:url", content: `https://zuberelectrician06-vercel-app.lovable.app.lovable.app${area.slug}` },
    ],
    links: [{ rel: "canonical", href: `https://zuberelectrician06-vercel-app.lovable.app.lovable.app${area.slug}` }],
  }),
  component: () => <AreaDetail area={area} />,
});
