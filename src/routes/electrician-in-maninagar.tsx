import { createFileRoute } from "@tanstack/react-router";
import { AreaDetail } from "@/components/site/AreaDetail";
import { areaPages } from "@/data/areas-data";

const area = areaPages.find((a) => a.slug === "/electrician-in-maninagar")!;

export const Route = createFileRoute("/electrician-in-maninagar")({
  head: () => ({
    meta: [
      { title: "Electrician in Maninagar Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Electrician in Maninagar, Ahmedabad — house wiring, old wiring change, MCB, fan and light fitting by Zuber Shaikh. Call or WhatsApp 84888 97375." },
      { property: "og:title", content: "Electrician in Maninagar Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Electrician in Maninagar, Ahmedabad — house wiring, old wiring change, MCB, fan and light fitting by Zuber Shaikh. Call or WhatsApp 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/electrician-in-maninagar" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/electrician-in-maninagar" }],
  }),
  component: () => <AreaDetail area={area} />,
});
