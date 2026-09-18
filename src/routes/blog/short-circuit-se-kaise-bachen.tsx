import { createFileRoute } from "@tanstack/react-router";
import { BlogPostLayout } from "@/components/site/BlogPostLayout";
import { blogPosts } from "@/data/blog-data";

const post = blogPosts.find((p) => p.slug === "/blog/short-circuit-se-kaise-bachen")!;

export const Route = createFileRoute("/blog/short-circuit-se-kaise-bachen")({
  head: () => ({
    meta: [
      { title: "Short Circuit Se Kaise Bachen? Safety Guide | Zuber Shaikh" },
      { name: "description", content: "Short circuit kyun hota hai aur usse bachne ke practical tips. Emergency mein kya karein — Ahmedabad electrician Zuber Shaikh ki guide." },
      { property: "og:title", content: "Short Circuit Se Kaise Bachen? Safety Guide | Zuber Shaikh" },
      { property: "og:description", content: "Short circuit kyun hota hai aur usse bachne ke practical tips. Emergency mein kya karein — Ahmedabad electrician Zuber Shaikh ki guide." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/blog/short-circuit-se-kaise-bachen" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/blog/short-circuit-se-kaise-bachen" }],
  }),
  component: () => <BlogPostLayout post={post} />,
});
