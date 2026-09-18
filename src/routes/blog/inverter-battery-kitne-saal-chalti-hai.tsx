import { createFileRoute } from "@tanstack/react-router";
import { BlogPostLayout } from "@/components/site/BlogPostLayout";
import { blogPosts } from "@/data/blog-data";

const post = blogPosts.find((p) => p.slug === "/blog/inverter-battery-kitne-saal-chalti-hai")!;

export const Route = createFileRoute("/blog/inverter-battery-kitne-saal-chalti-hai")({
  head: () => ({
    meta: [
      { title: "Inverter Battery Life: Kitne Saal Chalti Hai? | Zuber Shaikh" },
      { name: "description", content: "Inverter battery kitne saal chalti hai, life kaise badhaye, water level, backup kam hone ke reasons — practical guide Hinglish mein." },
      { property: "og:title", content: "Inverter Battery Life: Kitne Saal Chalti Hai? | Zuber Shaikh" },
      { property: "og:description", content: "Inverter battery kitne saal chalti hai, life kaise badhaye, water level, backup kam hone ke reasons — practical guide Hinglish mein." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/blog/inverter-battery-kitne-saal-chalti-hai" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/blog/inverter-battery-kitne-saal-chalti-hai" }],
  }),
  component: () => <BlogPostLayout post={post} />,
});
