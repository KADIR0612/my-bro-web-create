import { Link } from "@tanstack/react-router";
import { Phone, Zap } from "lucide-react";
import { PHONE_DISPLAY, TEL_LINK } from "./contact-info";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded bg-primary text-primary-foreground">
            <Zap className="size-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl tracking-wide">Zuber Shaikh</span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Electrician
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-wide md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary" }}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={TEL_LINK}
          className="hidden items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          <Phone className="size-4" /> {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
