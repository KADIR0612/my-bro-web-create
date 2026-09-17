import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { CallBar } from "./CallBar";
import { CtaBlock } from "./CtaBlock";
import type { BlogPost } from "@/data/blog-data";

export function BlogPostLayout({ post }: { post: BlogPost }) {
  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-primary"
          >
            <ArrowLeft className="size-4" /> Blog
          </Link>
          <h1 className="mt-4 text-4xl sm:text-5xl">{post.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readTime} read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 pb-28 md:py-16 md:pb-16">
        <p className="text-lg text-muted-foreground">{post.intro}</p>

        {post.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="text-2xl">{s.heading}</h2>
            {s.body
              .filter(Boolean)
              .map((p) => (
                <p key={p.slice(0, 24)} className="mt-3 text-muted-foreground">
                  {p}
                </p>
              ))}
            {s.list && (
              <ul className="mt-4 space-y-3">
                {s.list.map((item) => (
                  <li key={item} className="flex gap-2 text-muted-foreground">
                    <Check className="mt-1 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <CtaBlock
          title="Electrician Chahiye?"
          text="Ahmedabad mein ghar, dukan ya office ka electrical kaam — abhi call ya WhatsApp kijiye."
        />
      </article>

      <CallBar />
    </div>
  );
}
