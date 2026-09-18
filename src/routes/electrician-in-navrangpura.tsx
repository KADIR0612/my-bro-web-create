import { createFileRoute } from "@tanstack/react-router";
import { AreaDetail } from "@/components/site/AreaDetail";
import { areaPages } from "@/data/areas-data";

const area = areaPages.find((a) => a.slug === "/electrician-in-navrangpura")!;

export const Route = createFileRoute("/electrician-in-navrangpura")({
  head: () => ({
    meta: [
      { title: "Electrician in Navrangpura Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Electrician in Navrangpura, Ahmedabad for homes, offices and shops — wiring, MCB, inverter and repair work. Call Zuber Shaikh 84888 97375." },
      { property: "og:title", content: "Electrician in Navrangpura Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Electrician in Navrangpura, Ahmedabad for homes, offices and shops — wiring, MCB, inverter and repair work. Call Zuber Shaikh 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/electrician-in-navrangpura" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/electrician-in-navrangpura" }],
  }),
  component: () => <AreaDetail area={area} />,
});
