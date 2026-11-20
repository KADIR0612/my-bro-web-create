import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { servicePages } from "@/data/services-data";

const service = servicePages.find((s) => s.slug === "/mcb-panel-board-fitting")!;

export const Route = createFileRoute("/mcb-panel-board-fitting")({
  head: () => ({
    meta: [
      { title: "MCB & Panel Board Fitting Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "MCB change, DB box aur panel board fitting in Ahmedabad. Tripping aur load problem ka solution by ITI electrician Zuber Shaikh. Call 84888 97375." },
      { property: "og:title", content: "MCB & Panel Board Fitting Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "MCB change, DB box aur panel board fitting in Ahmedabad. Tripping aur load problem ka solution by ITI electrician Zuber Shaikh. Call 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/mcb-panel-board-fitting" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/mcb-panel-board-fitting" }],
  }),
  component: () => <ServiceDetail service={service} />,
});
