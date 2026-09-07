import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MessageCircle, Phone, Zap } from "lucide-react";
import { CallBar } from "@/components/site/CallBar";
import { EMAIL, PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from "@/components/site/contact-info";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zuber Shaikh Electrician" },
      {
        name: "description",
        content:
          "Contact Zuber Shaikh, ITI qualified electrician. Call or WhatsApp 84888 97375, email zubermiyan29@gmail.com for any electrical work.",
      },
      { property: "og:title", content: "Contact — Zuber Shaikh Electrician" },
      {
        property: "og:description",
        content: "Call or WhatsApp 84888 97375 for fast electrical service.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Contact
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl">Baat Kare, Kaam Karwaye</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Call ya WhatsApp — jaise aapko aasan lage. Zuber bhai khud phone uthayenge.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <a
            href={TEL_LINK}
            className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary"
          >
            <Phone className="size-9 text-primary" />
            <h3 className="mt-4 text-2xl">Call Kare</h3>
            <p className="mt-2 text-lg font-semibold text-primary">{PHONE_DISPLAY}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Seedhi baat, turant jawab
            </p>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-whatsapp"
          >
            <MessageCircle className="size-9 text-whatsapp" />
            <h3 className="mt-4 text-2xl">WhatsApp Kare</h3>
            <p className="mt-2 text-lg font-semibold text-whatsapp">{PHONE_DISPLAY}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Photo bheje, problem samjhe
            </p>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary"
          >
            <Mail className="size-9 text-primary" />
            <h3 className="mt-4 text-2xl">Email Kare</h3>
            <p className="mt-2 break-all text-lg font-semibold text-primary">{EMAIL}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Quote ya details ke liye
            </p>
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-8">
            <Clock className="size-8 text-primary" />
            <h3 className="mt-4 text-2xl">Service Time</h3>
            <p className="mt-2 text-muted-foreground">
              Subah 8 baje se raat 9 baje tak — emergency me kabhi bhi call kar sakte hain.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-8">
            <Zap className="size-8 text-primary" />
            <h3 className="mt-4 text-2xl">Service Area</h3>
            <p className="mt-2 text-muted-foreground">
              Ghar, dukan, office aur commercial sites — aas paas ke poore ilaake me service
              available hai. Door ke kaam ke liye bhi call karke puch sakte hain.
            </p>
          </div>
        </div>
      </section>

      <CallBar />
    </div>
  );
}
