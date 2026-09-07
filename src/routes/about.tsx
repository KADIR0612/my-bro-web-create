import { createFileRoute } from "@tanstack/react-router";
import { Award, BadgeCheck, MessageCircle, Phone, ShieldCheck, Users } from "lucide-react";
import heroImage from "@/assets/hero-electrician.jpg";
import { CallBar } from "@/components/site/CallBar";
import { PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from "@/components/site/contact-info";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zuber Shaikh Electrician" },
      {
        name: "description",
        content:
          "Meet Zuber Shaikh — ITI qualified electrician with 7 years of experience in home, shop and commercial electrical work.",
      },
      { property: "og:title", content: "About — Zuber Shaikh Electrician" },
      {
        property: "og:description",
        content: "ITI qualified electrician with 7 years of trusted experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const points = [
  {
    icon: BadgeCheck,
    title: "ITI Qualified",
    text: "Zuber bhai ne electrician trade me ITI complete kiya hai — kaam sirf tajurbe se nahi, training se bhi.",
  },
  {
    icon: Award,
    title: "7 Years of Experience",
    text: "7 saal me ghar, dukan, office aur commercial projects — har scale ka kaam complete kiya hai.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Har kaam proper earthing, quality material aur safety standards ke saath hota hai.",
  },
  {
    icon: Users,
    title: "Trusted by Customers",
    text: "Ek baar kaam karwane wale customers baar-baar bulate hain — yahi sabse bada pramaan hai.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl gap-10 px-4 py-16 md:grid md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            About Me
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl">Zuber Shaikh</h1>
          <p className="mt-6 text-muted-foreground">
            Main Zuber Shaikh — ITI qualified electrician. Pichle 7 saal se ghar, dukan aur
            commercial electrical kaam kar raha hu. Mere liye sabse zaruri hai kaam ki
            quality, customer ki safety aur waqt pe service.
          </p>
          <p className="mt-4 text-muted-foreground">
            Wiring ho, fitting ho ya koi bada commercial project — har kaam me wahi
            mehnat aur imaandari milti hai. Aapka bharosa hi meri asli kamai hai.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={TEL_LINK}
              className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-bold text-primary-foreground"
            >
              <Phone className="size-5" /> {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-whatsapp px-6 py-3 font-bold text-whatsapp"
            >
              <MessageCircle className="size-5" /> WhatsApp
            </a>
          </div>
        </div>
        <img
          src={heroImage}
          alt="Zuber Shaikh working on an electrical panel"
          width={1280}
          height={960}
          loading="lazy"
          className="mt-10 w-full rounded-lg border border-border object-cover md:mt-0"
        />
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="rounded-lg border border-border bg-card p-6">
              <p.icon className="size-8 text-primary" />
              <h3 className="mt-4 text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CallBar />
    </div>
  );
}
