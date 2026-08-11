import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Facebook, Instagram, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiteImage } from "@/components/site-image";
import { CLINIC, SERVICE_ROUTES } from "@/lib/clinic";

const linkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <SiteImage name="logo" alt="Logo" loading="eager" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight font-semibold">
              Clinica Darie
            </span>
            <span className="block truncate text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Dermatologie · Dumbrăvița
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            <Link to="/" className={linkClass}>
              Acasă
            </Link>
            <Link to="/echipa" className={linkClass}>
              Echipa
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className={`${linkClass} inline-flex items-center gap-1`}>
                Servicii
                <ChevronDown className="size-4" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {SERVICE_ROUTES.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/tarife-servicii" className={linkClass}>
              Tarife Servicii
            </Link>
            <Link to="/contact" className={linkClass}>
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-1">
            {[
              { href: CLINIC.instagram, icon: Instagram, label: "Instagram Clinica Darie" },
              { href: CLINIC.facebook, icon: Facebook, label: "Facebook Clinica Darie" },
              { href: CLINIC.whatsapp, icon: MessageCircle, label: "WhatsApp +40 749 036 864" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="inline-flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <s.icon className="size-5" aria-hidden />
              </a>
            ))}
          </div>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={CLINIC.phonePrimaryHref}>
              <Phone className="size-4" aria-hidden />
              Sună Acum
            </a>
          </Button>


          <button
            type="button"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <Menu className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            <Link to="/" className={linkClass} onClick={() => setOpen(false)}>
              Acasă
            </Link>
            <Link to="/echipa" className={linkClass} onClick={() => setOpen(false)}>
              Echipa
            </Link>
            <span className="px-3 pt-3 text-xs tracking-widest text-muted-foreground uppercase">
              Servicii
            </span>
            {SERVICE_ROUTES.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${linkClass} pl-6`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/tarife-servicii" className={linkClass} onClick={() => setOpen(false)}>
              Tarife Servicii
            </Link>
            <Link to="/contact" className={linkClass} onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Button asChild className="mt-3">
              <a href={CLINIC.phonePrimaryHref}>
                <Phone className="size-4" aria-hidden />
                Sună Acum
              </a>
            </Button>
          </nav>
        </div>
      )}
      <X className="hidden" aria-hidden />
    </header>
  );
}
