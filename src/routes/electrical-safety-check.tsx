import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { servicePages } from "@/data/services-data";

const service = servicePages.find((s) => s.slug === "/electrical-safety-check")!;

export const Route = createFileRoute("/electrical-safety-check")({
  head: () => ({
    meta: [
      { title: "Electrical Safety Check Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Home aur shop ka electrical safety check in Ahmedabad — wiring, earthing, MCB aur load inspection by ITI electrician Zuber Shaikh. Call 84888 97375." },
      { property: "og:title", content: "Electrical Safety Check Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Home aur shop ka electrical safety check in Ahmedabad — wiring, earthing, MCB aur load inspection by ITI electrician Zuber Shaikh. Call 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/electrical-safety-check" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/electrical-safety-check" }],
  }),
  component: () => <ServiceDetail service={service} />,
});
