import { Phone } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export function CallFab() {
  return (
    <a
      href={CLINIC.phonePrimaryHref}
      aria-label="Sună la Clinica Darie"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <Phone className="size-5" aria-hidden />
      <span className="hidden sm:inline">Sună acum</span>
    </a>
  );
}
