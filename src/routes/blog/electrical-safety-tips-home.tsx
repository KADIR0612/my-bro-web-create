import { createFileRoute } from "@tanstack/react-router";
import { BlogPostLayout } from "@/components/site/BlogPostLayout";
import { blogPosts } from "@/data/blog-data";

const post = blogPosts.find((p) => p.slug === "/blog/electrical-safety-tips-home")!;

export const Route = createFileRoute("/blog/electrical-safety-tips-home")({
  head: () => ({
    meta: [
      { title: "10 Electrical Safety Tips for Home | Zuber Shaikh" },
      { name: "description", content: "Ghar ke liye 10 simple electrical safety tips — earthing, MCB, socket, extension board aur bachchon ki safety. Ahmedabad electrician guide." },
      { property: "og:title", content: "10 Electrical Safety Tips for Home | Zuber Shaikh" },
      { property: "og:description", content: "Ghar ke liye 10 simple electrical safety tips — earthing, MCB, socket, extension board aur bachchon ki safety. Ahmedabad electrician guide." },
      { property: "og:url", content: "https://zuberelectrician06.vercel.app/blog/electrical-safety-tips-home" },
    ],
    links: [{ rel: "canonical", href: "https://zuberelectrician06.vercel.app/blog/electrical-safety-tips-home" }],
  }),
  component: () => <BlogPostLayout post={post} />,
});
