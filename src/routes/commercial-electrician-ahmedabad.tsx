import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { servicePages } from "@/data/services-data";

const service = servicePages.find((s) => s.slug === "/commercial-electrician-ahmedabad")!;

export const Route = createFileRoute("/commercial-electrician-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Commercial Electrician Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Commercial electrician in Ahmedabad for shops, showrooms, offices and warehouses. Panel board, lighting and load management. Call 84888 97375." },
      { property: "og:title", content: "Commercial Electrician Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Commercial electrician in Ahmedabad for shops, showrooms, offices and warehouses. Panel board, lighting and load management. Call 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/commercial-electrician-ahmedabad" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/commercial-electrician-ahmedabad" }],
  }),
  component: () => <ServiceDetail service={service} />,
});
