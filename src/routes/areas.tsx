import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CallBar } from "@/components/site/CallBar";
import { CtaBlock } from "@/components/site/CtaBlock";
import { PageHero } from "@/components/site/PageHero";
import { areaPages } from "@/data/areas-data";

const TITLE = "Electrician Near Me in Ahmedabad Areas | Zuber Shaikh";
const DESC =
  "Electrician service areas in Ahmedabad — Satellite, Bopal, SG Highway, Maninagar, Navrangpura, Vastral aur Chandkheda. Call or WhatsApp 84888 97375.";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/areas" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/areas" }],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <div>
      <PageHero
        eyebrow="Service Areas"
        title="Ahmedabad Ke Areas"
        intro="In areas mein Zuber Shaikh regular service dete hain. Aapka area list mein nahi hai? Phir bhi call kijiye."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 pb-28 md:py-16 md:pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areaPages.map((a) => (
            <Link
              key={a.slug}
              to={a.slug}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <MapPin className="size-6 text-primary" />
              <h2 className="mt-3 text-2xl">{a.area}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.intro}</p>
            </Link>
          ))}
        </div>

        <CtaBlock />
      </section>

      <CallBar />
    </div>
  );
}
