import { Check } from "lucide-react";
import { CallBar } from "./CallBar";
import { CtaBlock } from "./CtaBlock";
import { PageHero } from "./PageHero";
import type { ServicePage } from "@/data/services-data";

export function ServiceDetail({ service }: { service: ServicePage }) {
  return (
    <div>
      <PageHero eyebrow={service.eyebrow} title={service.h1} intro={service.intro} />

      <section className="mx-auto max-w-6xl px-4 py-14 pb-28 md:py-16 md:pb-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {service.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl">Kya Milta Hai</h2>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CtaBlock />
      </section>

      <CallBar />
    </div>
  );
}
