import { createFileRoute } from "@tanstack/react-router";
import { AreaDetail } from "@/components/site/AreaDetail";
import { areaPages } from "@/data/areas-data";

const area = areaPages.find((a) => a.slug === "/electrician-in-chandkheda")!;

export const Route = createFileRoute("/electrician-in-chandkheda")({
  head: () => ({
    meta: [
      { title: "Electrician in Chandkheda Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Electrician in Chandkheda, Ahmedabad for flats and shops — wiring, MCB, fan-light fitting and repair. Call or WhatsApp Zuber Shaikh 84888 97375." },
      { property: "og:title", content: "Electrician in Chandkheda Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Electrician in Chandkheda, Ahmedabad for flats and shops — wiring, MCB, fan-light fitting and repair. Call or WhatsApp Zuber Shaikh 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/electrician-in-chandkheda" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/electrician-in-chandkheda" }],
  }),
  component: () => <AreaDetail area={area} />,
});
