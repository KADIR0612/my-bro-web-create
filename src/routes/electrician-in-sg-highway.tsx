import { createFileRoute } from "@tanstack/react-router";
import { AreaDetail } from "@/components/site/AreaDetail";
import { areaPages } from "@/data/areas-data";

const area = areaPages.find((a) => a.slug === "/electrician-in-sg-highway")!;

export const Route = createFileRoute("/electrician-in-sg-highway")({
  head: () => ({
    meta: [
      { title: "Electrician on SG Highway Ahmedabad | Zuber Shaikh" },
      { name: "description", content: "Electrician near SG Highway, Ahmedabad for homes, offices and shops. Panel board, wiring, MCB and lighting work. Call Zuber Shaikh 84888 97375." },
      { property: "og:title", content: "Electrician on SG Highway Ahmedabad | Zuber Shaikh" },
      { property: "og:description", content: "Electrician near SG Highway, Ahmedabad for homes, offices and shops. Panel board, wiring, MCB and lighting work. Call Zuber Shaikh 84888 97375." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/electrician-in-sg-highway" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/electrician-in-sg-highway" }],
  }),
  component: () => <AreaDetail area={area} />,
});
