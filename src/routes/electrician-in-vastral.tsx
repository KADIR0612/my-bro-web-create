import { createFileRoute } from "@tanstack/react-router";
import { AreaDetail } from "@/components/site/AreaDetail";
import { areaPages } from "@/data/areas-data";

const area = areaPages.find((a) => a.slug === "/electrician-in-vastral")!;

export const Route = createFileRoute("/electrician-in-vastral")({
  head: () => ({
    meta: [
      { title: "Electrician in Vastral Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Electrician in Vastral, Ahmedabad — new house wiring, MCB, inverter fitting and short circuit repair by Zuber Shaikh. Call 84888 97375." },
      { property: "og:title", content: "Electrician in Vastral Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Electrician in Vastral, Ahmedabad — new house wiring, MCB, inverter fitting and short circuit repair by Zuber Shaikh. Call 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/electrician-in-vastral" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/electrician-in-vastral" }],
  }),
  component: () => <AreaDetail area={area} />,
});
