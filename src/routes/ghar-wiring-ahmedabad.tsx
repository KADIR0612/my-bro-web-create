import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { servicePages } from "@/data/services-data";

const service = servicePages.find((s) => s.slug === "/ghar-wiring-ahmedabad")!;

export const Route = createFileRoute("/ghar-wiring-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Ghar Ki Wiring Ahmedabad | Zuber Shaikh Electrician" },
      { name: "description", content: "House wiring in Ahmedabad by ITI qualified electrician Zuber Shaikh. Nayi wiring, purani wiring change, earthing aur switch board kaam. Call 84888 97375." },
      { property: "og:title", content: "Ghar Ki Wiring Ahmedabad | Zuber Shaikh Electrician" },
      { property: "og:description", content: "House wiring in Ahmedabad by ITI qualified electrician Zuber Shaikh. Nayi wiring, purani wiring change, earthing aur switch board kaam. Call 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/ghar-wiring-ahmedabad" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/ghar-wiring-ahmedabad" }],
  }),
  component: () => <ServiceDetail service={service} />,
});
