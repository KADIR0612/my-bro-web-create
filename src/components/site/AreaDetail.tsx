import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CallBar } from "./CallBar";
import { CtaBlock } from "./CtaBlock";
import { PageHero } from "./PageHero";
import type { AreaPage } from "@/data/areas-data";
import { servicePages } from "@/data/services-data";

export function AreaDetail({ area }: { area: AreaPage }) {
  return (
    <div>
      <PageHero eyebrow={`${area.area}, Ahmedabad`} title={area.h1} intro={area.intro} />

      <section className="mx-auto max-w-6xl px-4 py-14 pb-28 md:py-16 md:pb-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {area.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-muted-foreground">
                {p}
              </p>
            ))}
            <h2 className="pt-2 text-2xl">
              {area.area} mein kaunse kaam hote hain
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {servicePages.map((s) => (
                <Link
                  key={s.slug}
                  to={s.slug}
                  className="rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary"
                >
                  <span className="font-semibold">{s.cardTitle}</span>
                  <span className="mt-1 block text-muted-foreground">{s.cardText}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <MapPin className="size-8 text-primary" />
            <h2 className="mt-3 text-2xl">Nearby Areas</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {area.landmarks.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Aapka area list mein nahi hai? Phir bhi call kijiye — aas-paas ke area mein bhi
              service milti hai.
            </p>
          </div>
        </div>

        <CtaBlock
          title={`${area.area} Mein Electrician Chahiye?`}
          text="Abhi call ya WhatsApp kijiye — Zuber bhai khud baat karenge."
        />
      </section>

      <CallBar />
    </div>
  );
}
