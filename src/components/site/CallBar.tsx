import { Phone, MessageCircle } from "lucide-react";
import { TEL_LINK, WHATSAPP_LINK } from "./contact-info";

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-surface/95 backdrop-blur md:hidden">
      <a
        href={TEL_LINK}
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold uppercase tracking-wider text-primary"
      >
        <Phone className="size-4" /> Call Now
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-l border-border py-4 text-sm font-semibold uppercase tracking-wider text-whatsapp"
      >
        <MessageCircle className="size-4" /> WhatsApp
      </a>
    </div>
  );
}
