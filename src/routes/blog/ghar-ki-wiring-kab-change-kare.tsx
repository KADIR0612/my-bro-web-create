import { createFileRoute } from "@tanstack/react-router";
import { BlogPostLayout } from "@/components/site/BlogPostLayout";
import { blogPosts } from "@/data/blog-data";

const post = blogPosts.find((p) => p.slug === "/blog/ghar-ki-wiring-kab-change-kare")!;

export const Route = createFileRoute("/blog/ghar-ki-wiring-kab-change-kare")({
  head: () => ({
    meta: [
      { title: "Ghar Ki Wiring Kab Change Kare? 7 Signs | Zuber Shaikh" },
      { name: "description", content: "Purani wiring change karne ke 7 signs — switch garam hona, fuse udna, light dim hona. Rewiring cost aur process Hinglish guide." },
      { property: "og:title", content: "Ghar Ki Wiring Kab Change Kare? 7 Signs | Zuber Shaikh" },
      { property: "og:description", content: "Purani wiring change karne ke 7 signs — switch garam hona, fuse udna, light dim hona. Rewiring cost aur process Hinglish guide." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/blog/ghar-ki-wiring-kab-change-kare" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/blog/ghar-ki-wiring-kab-change-kare" }],
  }),
  component: () => <BlogPostLayout post={post} />,
});
