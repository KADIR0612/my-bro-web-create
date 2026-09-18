import { createFileRoute, Link } from "@tanstack/react-router";
import { CallBar } from "@/components/site/CallBar";
import { CtaBlock } from "@/components/site/CtaBlock";
import { PageHero } from "@/components/site/PageHero";
import { blogPosts } from "@/data/blog-data";

const TITLE = "Electrical Tips Blog | Zuber Shaikh Electrician Ahmedabad";
const DESC =
  "Electrical tips in Hinglish — MCB trip, inverter battery, ghar ki wiring, short circuit se bachav aur home safety. Zuber Shaikh, electrician in Ahmedabad.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Electrical Tips & Guides"
        intro="Ghar ke electrical sawaal — simple bhasha mein jawab. Zuber Shaikh, Ahmedabad."
      />

      <section className="mx-auto max-w-4xl px-4 py-14 pb-28 md:py-16 md:pb-16">
        <div className="grid gap-4">
          {blogPosts.map((p) => (
            <Link
              key={p.slug}
              to={p.slug}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <h2 className="text-2xl">{p.title}</h2>
              <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
              <p className="mt-3 text-sm text-primary">
                {new Date(p.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {p.readTime} read
              </p>
            </Link>
          ))}
        </div>

        <CtaBlock />
      </section>

      <CallBar />
    </div>
  );
}
