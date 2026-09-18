import { createFileRoute } from "@tanstack/react-router";
import { BlogPostLayout } from "@/components/site/BlogPostLayout";
import { blogPosts } from "@/data/blog-data";

const post = blogPosts.find((p) => p.slug === "/blog/mcb-trip-kyun-hota-hai")!;

export const Route = createFileRoute("/blog/mcb-trip-kyun-hota-hai")({
  head: () => ({
    meta: [
      { title: "MCB Trip Kyun Hota Hai? Reasons & Fix | Zuber Shaikh" },
      { name: "description", content: "MCB baar-baar trip ho raha hai? Overload, short circuit, earth leakage aur galat MCB rating — reasons aur simple fix Hinglish mein samjhiye." },
      { property: "og:title", content: "MCB Trip Kyun Hota Hai? Reasons & Fix | Zuber Shaikh" },
      { property: "og:description", content: "MCB baar-baar trip ho raha hai? Overload, short circuit, earth leakage aur galat MCB rating — reasons aur simple fix Hinglish mein samjhiye." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/blog/mcb-trip-kyun-hota-hai" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/blog/mcb-trip-kyun-hota-hai" }],
  }),
  component: () => <BlogPostLayout post={post} />,
});
