import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { servicePages } from "@/data/services-data";

const service = servicePages.find((s) => s.slug === "/switch-board-socket-fitting")!;

export const Route = createFileRoute("/switch-board-socket-fitting")({
  head: () => ({
    meta: [
      { title: "Switch Board & Socket Fitting Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Switch board repair, modular switch aur socket fitting in Ahmedabad. Naye point, USB socket aur board shifting. Call Zuber Shaikh 84888 97375." },
      { property: "og:title", content: "Switch Board & Socket Fitting Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Switch board repair, modular switch aur socket fitting in Ahmedabad. Naye point, USB socket aur board shifting. Call Zuber Shaikh 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/switch-board-socket-fitting" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/switch-board-socket-fitting" }],
  }),
  component: () => <ServiceDetail service={service} />,
});
