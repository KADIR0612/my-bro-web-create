import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { servicePages } from "@/data/services-data";

const service = servicePages.find((s) => s.slug === "/inverter-battery-fitting")!;

export const Route = createFileRoute("/inverter-battery-fitting")({
  head: () => ({
    meta: [
      { title: "Inverter & Battery Fitting Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Inverter aur battery fitting in Ahmedabad — new installation, wiring, shifting aur repair. ITI electrician Zuber Shaikh. Call or WhatsApp 84888 97375." },
      { property: "og:title", content: "Inverter & Battery Fitting Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Inverter aur battery fitting in Ahmedabad — new installation, wiring, shifting aur repair. ITI electrician Zuber Shaikh. Call or WhatsApp 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/inverter-battery-fitting" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/inverter-battery-fitting" }],
  }),
  component: () => <ServiceDetail service={service} />,
});
