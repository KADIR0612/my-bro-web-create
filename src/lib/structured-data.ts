import type { AreaPage } from "@/data/areas-data";
import type { BlogPost } from "@/data/blog-data";
import type { ServicePage } from "@/data/services-data";

export const SITE_URL = "https://zuberelectrician06.vercel.app";
export const BUSINESS_ID = `${SITE_URL}/#business`;
const LOGO_URL = `${SITE_URL}/zuber-logo.png`;

type SchemaObject = Record<string, unknown>;
type BreadcrumbItem = { name: string; url: string };

function createSchemaScript(...schemas: SchemaObject[]) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemas,
    }),
  };
}

function createBreadcrumbList(items: BreadcrumbItem[]): SchemaObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function homeBreadcrumb(): BreadcrumbItem {
  return { name: "Home", url: `${SITE_URL}/` };
}

function createItemList(items: { name: string; url: string }[], id: string): SchemaObject {
  return {
    "@type": "ItemList",
    "@id": id,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function homePageSchemaScript(
  faqs: { question: string; answer: string }[],
) {
  return createSchemaScript(
    {
      "@type": "Electrician",
      "@id": BUSINESS_ID,
      name: "Zuber Shaikh Electrician",
      url: SITE_URL,
      telephone: "+918488897375",
      email: "zubermiyan29@gmail.com",
      logo: LOGO_URL,
      description:
        "ITI-qualified electrician with 7 years of experience serving homes, shops, and commercial locations in Ahmedabad, Gujarat, India.",
      areaServed: { "@type": "City", name: "Ahmedabad" },
    },
    {
      "@type": "WebSite",
      name: "Zuber Shaikh Electrician",
      url: `${SITE_URL}/`,
      publisher: { "@id": BUSINESS_ID },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  );
}

export function servicesIndexSchemaScript(services: ServicePage[]) {
  const pageUrl = `${SITE_URL}/services`;
  const listId = `${pageUrl}#service-list`;

  return createSchemaScript(
    {
      "@type": "CollectionPage",
      name: "Electrical Services in Ahmedabad",
      description:
        "Ahmedabad mein home electrician, shop ya commercial electrician chahiye? Zuber Shaikh wiring, MCB, inverter, fan-light fitting aur electrical repair ka kaam ITI training aur 7 saal ke tajurbe ke saath karte hain.",
      url: pageUrl,
      mainEntity: { "@id": listId },
      publisher: { "@id": BUSINESS_ID },
    },
    createItemList(
      services.map((service) => ({
        name: service.h1,
        url: `${SITE_URL}${service.slug}`,
      })),
      listId,
    ),
    createBreadcrumbList([
      homeBreadcrumb(),
      { name: "Services", url: pageUrl },
    ]),
  );
}

export function servicePageSchemaScript(service: ServicePage) {
  const pageUrl = `${SITE_URL}${service.slug}`;

  return createSchemaScript(
    {
      "@type": "Service",
      name: service.h1,
      description: [service.intro, ...service.paragraphs].join(" "),
      provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "City", name: "Ahmedabad" },
      url: pageUrl,
    },
    createBreadcrumbList([
      homeBreadcrumb(),
      { name: "Services", url: `${SITE_URL}/services` },
      { name: service.h1, url: pageUrl },
    ]),
  );
}

export function areasIndexSchemaScript(areas: AreaPage[]) {
  const pageUrl = `${SITE_URL}/areas`;
  const listId = `${pageUrl}#area-list`;

  return createSchemaScript(
    {
      "@type": "CollectionPage",
      name: "Ahmedabad Ke Areas",
      description:
        "In areas mein Zuber Shaikh regular service dete hain. Aapka area list mein nahi hai? Phir bhi call kijiye.",
      url: pageUrl,
      mainEntity: { "@id": listId },
      publisher: { "@id": BUSINESS_ID },
    },
    createItemList(
      areas.map((area) => ({
        name: area.area,
        url: `${SITE_URL}${area.slug}`,
      })),
      listId,
    ),
    createBreadcrumbList([
      homeBreadcrumb(),
      { name: "Areas", url: pageUrl },
    ]),
  );
}

export function areaPageSchemaScript(area: AreaPage) {
  const pageUrl = `${SITE_URL}${area.slug}`;
  const schemas: SchemaObject[] = [
    {
      "@type": "Service",
      name: `Electrician service in ${area.area}`,
      description: [area.intro, ...area.paragraphs].join(" "),
      provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "Place", name: `${area.area}, Ahmedabad` },
      url: pageUrl,
    },
    createBreadcrumbList([
      homeBreadcrumb(),
      { name: "Areas", url: `${SITE_URL}/areas` },
      { name: area.h1, url: pageUrl },
    ]),
  ];

  if (area.faqs?.length) {
    schemas.push({
      "@type": "FAQPage",
      mainEntity: area.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return createSchemaScript(...schemas);
}

export function blogIndexSchemaScript() {
  const pageUrl = `${SITE_URL}/blog`;

  return createSchemaScript(
    {
      "@type": "Blog",
      name: "Electrical Tips & Guides",
      description: "Ghar ke electrical sawaal — simple bhasha mein jawab. Zuber Shaikh, Ahmedabad.",
      url: pageUrl,
      publisher: { "@id": BUSINESS_ID },
    },
    createBreadcrumbList([
      homeBreadcrumb(),
      { name: "Blog", url: pageUrl },
    ]),
  );
}

export function blogPostSchemaScript(post: BlogPost) {
  const pageUrl = `${SITE_URL}${post.slug}`;

  return createSchemaScript(
    {
      "@type": "BlogPosting",
      headline: post.title,
      description: post.intro,
      datePublished: post.date,
      author: { "@type": "Person", name: "Zuber Shaikh" },
      publisher: { "@id": BUSINESS_ID },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    },
    createBreadcrumbList([
      homeBreadcrumb(),
      { name: "Blog", url: `${SITE_URL}/blog` },
      { name: post.title, url: pageUrl },
    ]),
  );
}

export function aboutPageSchemaScript() {
  return createSchemaScript({
    "@type": "AboutPage",
    name: "Zuber Shaikh",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Person",
      name: "Zuber Shaikh",
      jobTitle: "Electrician",
      worksFor: { "@id": BUSINESS_ID },
    },
  });
}

export function contactPageSchemaScript() {
  return createSchemaScript(
    {
      "@type": "ContactPage",
      name: "Electrician in Ahmedabad Se Baat Kare",
      url: `${SITE_URL}/contact`,
      mainEntity: { "@id": BUSINESS_ID },
    },
    createBreadcrumbList([
      homeBreadcrumb(),
      { name: "Contact", url: `${SITE_URL}/contact` },
    ]),
  );
}