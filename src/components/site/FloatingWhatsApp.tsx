import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "./contact-info";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp par Zuber Shaikh se baat karein"
      title="WhatsApp karein"
      className="fixed bottom-6 right-5 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-background md:flex"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}