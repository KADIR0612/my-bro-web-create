import { createFileRoute } from "@tanstack/react-router";
import { AreaDetail } from "@/components/site/AreaDetail";
import { areaPages } from "@/data/areas-data";

const area = areaPages.find((a) => a.slug === "/electrician-in-sg-highway");

if (!area) {
  throw new Error("SG Highway area page data is missing.");
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Zuber Shaikh Electrician",
  telephone: "+91 84888 97375",
  url: `https://zuberelectrician06.vercel.app${area.slug}`,
  areaServed: ["SG Highway", "Thaltej", "Bodakdev", "Gurukul", "Sola", "Ahmedabad"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: (area.faqs ?? []).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const Route = createFileRoute("/electrician-in-sg-highway")({
  head: () => ({
    meta: [
      { title: area.metaTitle },
      { name: "description", content: area.metaDescription },
      { property: "og:title", content: area.metaTitle },
      { property: "og:description", content: area.metaDescription },
      { property: "og:url", content: `https://zuberelectrician06.vercel.app${area.slug}` },
    ],
    links: [{ rel: "canonical", href: `https://zuberelectrician06.vercel.app${area.slug}` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: () => <AreaDetail area={area} />,
});
