import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  Clock,
  Fan,
  House,
  MessageCircle,
  Phone,
  Plug,
  ShieldCheck,
  Store,
  Wrench,
} from "lucide-react";
import heroImage from "@/assets/hero-electrician.jpg";
import { CallBar } from "@/components/site/CallBar";
import { PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from "@/components/site/contact-info";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zuber Shaikh Electrician — Home, Shop & Commercial Electrical Work" },
      {
        name: "description",
        content:
          "ITI qualified electrician Zuber Shaikh — 7 years of experience in home, shop and commercial electrical work. Call or WhatsApp 84888 97375 for fast service.",
      },
      { property: "og:title", content: "Zuber Shaikh Electrician" },
      {
        property: "og:description",
        content:
          "ITI qualified, 7 years experience. Wiring, repair, fitting — home, shop & commercial. Call 84888 97375.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: BadgeCheck, title: "ITI Qualified", text: "Certified electrician, ITI course completed" },
  { icon: Award, title: "7 Years Experience", text: "Hundreds of homes, shops and offices served" },
  { icon: Clock, title: "Fast Response", text: "Same-day service for urgent electrical problems" },
  { icon: ShieldCheck, title: "Safe & Guaranteed", text: "Neat, safe work with proper materials" },
];

const services = [
  { icon: House, title: "Ghar Ka Kaam", text: "Puri ghar ki wiring, fan, light, switch, socket, MCB, inverter fitting aur repair." },
  { icon: Store, title: "Shop & Office", text: "Dukan, showroom aur office ki complete wiring, lighting aur load management." },
  { icon: Wrench, title: "Commercial Work", text: "Panel board, main line, industrial fittings aur bade projects ka kaam." },
  { icon: Plug, title: "Repair & Maintenance", text: "Short circuit, tripping, power failure — har problem ka turant ilaaj." },
  { icon: Fan, title: "Fitting Work", text: "Ceiling fan, exhaust, geyser, AC point, LED, chandelier fitting." },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Zuber Shaikh — ITI qualified electrician at work"
            width={1280}
            height={960}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            ITI Certified • 7 Years Experience
          </p>
          <h1 className="mt-4 max-w-2xl text-6xl md:text-8xl">
            Zuber Shaikh
            <span className="block text-primary">Electrician</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Ghar, dukan ya commercial — har tarah ka electrical kaam, ek hi bharosemand
            electrician se. Safe wiring, saaf kaam, aur waqt pe service.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={TEL_LINK}
              className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-5" /> Call: {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-whatsapp px-6 py-3 font-bold text-whatsapp transition-colors hover:bg-whatsapp hover:text-primary-foreground"
            >
              <MessageCircle className="size-5" /> WhatsApp Kare
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-lg border border-border bg-card p-6">
              <h.icon className="size-8 text-primary" />
              <h3 className="mt-4 text-xl">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Services</p>
            <h2 className="mt-2 text-4xl md:text-5xl">Har Electrical Kaam, Ek Hi Expert</h2>
          </div>
          <Link to="/services" className="font-semibold text-primary hover:underline">
            Sabhi services dekhe →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border border-border bg-card p-6">
              <s.icon className="size-8 text-primary" />
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-4xl md:text-5xl">Bijli Ka Problem? Abhi Call Kare</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Chhota ho ya bada kaam, Zuber bhai time pe pahunch ke theek kar denge.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={TEL_LINK}
              className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-bold text-primary-foreground"
            >
              <Phone className="size-5" /> {PHONE_DISPLAY}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded border border-border px-6 py-3 font-semibold hover:border-primary hover:text-primary"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>

      <CallBar />
    </div>
  );
}
