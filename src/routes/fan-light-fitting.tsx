import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { servicePages } from "@/data/services-data";

const service = servicePages.find((s) => s.slug === "/fan-light-fitting")!;

export const Route = createFileRoute("/fan-light-fitting")({
  head: () => ({
    meta: [
      { title: "Fan & Light Fitting Ahmedabad | Zuber Shaikh Electrician" },
      { name: "description", content: "Ceiling fan, LED light, chandelier aur exhaust fan fitting in Ahmedabad. Same-day service by ITI electrician Zuber Shaikh. Call 84888 97375." },
      { property: "og:title", content: "Fan & Light Fitting Ahmedabad | Zuber Shaikh Electrician" },
      { property: "og:description", content: "Ceiling fan, LED light, chandelier aur exhaust fan fitting in Ahmedabad. Same-day service by ITI electrician Zuber Shaikh. Call 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/fan-light-fitting" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/fan-light-fitting" }],
  }),
  component: () => <ServiceDetail service={service} />,
});
