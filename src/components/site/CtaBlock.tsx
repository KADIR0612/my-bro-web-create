import { MessageCircle, Phone, Zap } from "lucide-react";
import { PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from "./contact-info";

export function CtaBlock({
  title = "Kaam Karwana Hai?",
  text = "Ek call pe Zuber bhai aapke ghar ya dukan pahunch jayenge.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <div className="mt-12 flex flex-col items-center gap-4 rounded-lg border border-primary/30 bg-surface p-8 text-center">
      <Zap className="size-10 text-primary" />
      <h2 className="text-3xl">{title}</h2>
      <p className="max-w-md text-muted-foreground">{text}</p>
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
  );
}
