import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Fan,
  Gauge,
  House,
  Lamp,
  MessageCircle,
  Phone,
  Plug,
  ShieldCheck,
  Store,
  Wrench,
  Zap,
} from "lucide-react";
import { CallBar } from "@/components/site/CallBar";
import { PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from "@/components/site/contact-info";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Zuber Shaikh Electrician" },
      {
        name: "description",
        content:
          "Home wiring, fan & light fitting, MCB, inverter, panel board, shop and commercial electrical work — all services by ITI qualified electrician Zuber Shaikh.",
      },
      { property: "og:title", content: "Services — Zuber Shaikh Electrician" },
      {
        property: "og:description",
        content:
          "Home, shop & commercial electrical services — wiring, fitting, repair and maintenance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: House,
    title: "Ghar Ki Complete Wiring",
    text: "Naye ghar ki puri wiring, old wiring repair, switch-board, sockets aur earthing.",
  },
  {
    icon: Fan,
    title: "Fan, Light & Fitting",
    text: "Ceiling fan, exhaust fan, LED lights, chandelier, geyser aur AC point fitting.",
  },
  {
    icon: Gauge,
    title: "MCB, DB & Panel Board",
    text: "MCB change, distribution board fitting, panel board aur main line ka kaam.",
  },
  {
    icon: Plug,
    title: "Inverter & Stabilizer",
    text: "Inverter fitting, battery connection, stabilizer aur voltage problem solution.",
  },
  {
    icon: Store,
    title: "Shop & Showroom",
    text: "Dukan ki lighting, display board, show window wiring aur complete electrical setup.",
  },
  {
    icon: Building2,
    title: "Commercial & Office",
    text: "Office, warehouse aur commercial buildings ki wiring, lighting aur load management.",
  },
  {
    icon: Wrench,
    title: "Repair & Fault Finding",
    text: "Short circuit, MCB tripping, power cut, current leak — har fault ka quick solution.",
  },
  {
    icon: Lamp,
    title: "Decorative Lighting",
    text: "Shadi, function aur festival ke liye decorative lights aur temporary wiring.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Check",
    text: "Puri ghar ya shop ka electrical safety audit — wiring, earthing aur load check.",
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Our Services
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl">Sabhi Electrical Services</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Home, shop ya commercial — Zuber Shaikh har tarah ka electrical kaam ITI ki
            training aur 7 saal ke tajurbe ke saath karte hain.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border border-border bg-card p-6">
              <s.icon className="size-8 text-primary" />
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-lg border border-primary/30 bg-surface p-8 text-center">
          <Zap className="size-10 text-primary" />
          <h2 className="text-3xl">Kaam Karwana Hai?</h2>
          <p className="max-w-md text-muted-foreground">
            Ek call pe Zuber bhai aapke ghar ya dukan pahunch jayenge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
      </section>

      <CallBar />
    </div>
  );
}
