import { createFileRoute } from "@tanstack/react-router";
import { AreaDetail } from "@/components/site/AreaDetail";
import { areaPages } from "@/data/areas-data";

const area = areaPages.find((a) => a.slug === "/electrician-in-satellite")!;

export const Route = createFileRoute("/electrician-in-satellite")({
  head: () => ({
    meta: [
      { title: "Electrician in Satellite Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Need an electrician in Satellite, Ahmedabad? Zuber Shaikh does home wiring, MCB, inverter, fan and light fitting. Call or WhatsApp 84888 97375." },
      { property: "og:title", content: "Electrician in Satellite Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Need an electrician in Satellite, Ahmedabad? Zuber Shaikh does home wiring, MCB, inverter, fan and light fitting. Call or WhatsApp 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/electrician-in-satellite" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/electrician-in-satellite" }],
  }),
  component: () => <AreaDetail area={area} />,
});
