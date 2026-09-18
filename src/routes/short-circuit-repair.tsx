import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { servicePages } from "@/data/services-data";

const service = servicePages.find((s) => s.slug === "/short-circuit-repair")!;

export const Route = createFileRoute("/short-circuit-repair")({
  head: () => ({
    meta: [
      { title: "Short Circuit Repair Ahmedabad | Emergency Electrician" },
      { name: "description", content: "Short circuit, tripping aur power fail ka urgent repair in Ahmedabad. Fault finding by ITI electrician Zuber Shaikh. Call or WhatsApp 84888 97375." },
      { property: "og:title", content: "Short Circuit Repair Ahmedabad | Emergency Electrician" },
      { property: "og:description", content: "Short circuit, tripping aur power fail ka urgent repair in Ahmedabad. Fault finding by ITI electrician Zuber Shaikh. Call or WhatsApp 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/short-circuit-repair" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/short-circuit-repair" }],
  }),
  component: () => <ServiceDetail service={service} />,
});
