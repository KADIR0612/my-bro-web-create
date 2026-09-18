import { createFileRoute } from "@tanstack/react-router";
import { AreaDetail } from "@/components/site/AreaDetail";
import { areaPages } from "@/data/areas-data";

const area = areaPages.find((a) => a.slug === "/electrician-in-bopal")!;

export const Route = createFileRoute("/electrician-in-bopal")({
  head: () => ({
    meta: [
      { title: "Electrician in Bopal Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Electrician in Bopal & South Bopal, Ahmedabad — wiring, MCB, inverter, fan fitting and repair by Zuber Shaikh. Call or WhatsApp 84888 97375." },
      { property: "og:title", content: "Electrician in Bopal Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Electrician in Bopal & South Bopal, Ahmedabad — wiring, MCB, inverter, fan fitting and repair by Zuber Shaikh. Call or WhatsApp 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/electrician-in-bopal" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/electrician-in-bopal" }],
  }),
  component: () => <AreaDetail area={area} />,
});
