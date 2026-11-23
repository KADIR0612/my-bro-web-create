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

        {area.contentSectionTitle ? (
          <section className="mx-auto mt-14 max-w-4xl space-y-5">
            <h2 className="text-2xl">{area.contentSectionTitle}</h2>
            {area.contentSectionParagraphs?.map((p) => (
              <p key={p.slice(0, 24)} className="text-muted-foreground">
                {p}
              </p>
            ))}
          </section>
        ) : null}

        {area.faqs?.length ? (
          <section className="mx-auto mt-14 max-w-4xl">
            <h2 className="text-2xl">SG Highway Electrician FAQs</h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {area.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                    <span>{faq.question}</span>
                    <span className="text-2xl text-primary transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        <CtaBlock
          title={`${area.area} Mein Electrician Chahiye?`}
          text="Abhi call ya WhatsApp kijiye — Zuber bhai khud baat karenge."
        />
      </section>

      <CallBar />
    </div>
  );
}
