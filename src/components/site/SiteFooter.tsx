import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
const logo = "/zuber-logo.png";
import { EMAIL, PHONE_DISPLAY, TEL_LINK, WHATSAPP_LINK } from "./contact-info";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface pb-24 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Zuber Shaikh Electrician"
            width={520}
            height={160}
            loading="lazy"
            className="h-14 w-auto max-w-[230px] object-contain"
          />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            ITI qualified electrician with 7 years of experience. Home, shop and commercial
            electrical work — safe, neat and on time.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <a href={TEL_LINK} className="flex items-center gap-2 hover:text-primary">
            <Phone className="size-4 text-primary" /> {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary"
          >
            <MessageCircle className="size-4 text-whatsapp" /> WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary">
            <Mail className="size-4 text-primary" /> {EMAIL}
          </a>
        </div>

        <nav className="flex flex-col gap-2 text-sm uppercase tracking-wide text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/services" className="hover:text-primary">
            Services
          </Link>
          <Link to="/areas" className="hover:text-primary">
            Areas
          </Link>
          <Link to="/blog" className="hover:text-primary">
            Blog
          </Link>
          <Link to="/book" className="hover:text-primary">
            Book Now
          </Link>
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Zuber Shaikh Electrician. All rights reserved.
      </div>
    </footer>
  );
}
