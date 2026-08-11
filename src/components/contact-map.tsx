import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export function ContactMap() {
  return (
    <section id="contact" className="border-t border-border bg-soft-gradient">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        <div className="min-w-0">
          <h2 className="text-3xl leading-tight sm:text-4xl">Programează-te acum</h2>
          <p className="mt-4 max-w-prose text-muted-foreground">
            Pentru programări, întrebări, vă rugăm să nu ezitați să ne contactați. Echipa
            noastră de experți este disponibilă să vă ofere răspunsuri.
          </p>

          <dl className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
              <div className="min-w-0">
                <dt className="text-sm font-semibold">Adresa</dt>
                <dd className="text-muted-foreground">{CLINIC.address}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
              <div className="min-w-0">
                <dt className="text-sm font-semibold">Orar</dt>
                <dd className="text-muted-foreground">{CLINIC.schedule}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
              <div className="min-w-0">
                <dt className="text-sm font-semibold">Telefon</dt>
                <dd className="flex flex-wrap gap-x-3 text-muted-foreground">
                  {CLINIC.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+4${phone.replace(/\s/g, "")}`}
                      className="hover:text-primary"
                    >
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
              <div className="min-w-0">
                <dt className="text-sm font-semibold">Email</dt>
                <dd className="truncate text-muted-foreground">
                  <a href={`mailto:${CLINIC.email}`} className="hover:text-primary">
                    {CLINIC.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="min-h-[320px] overflow-hidden rounded-2xl border border-border shadow-soft lg:min-h-[440px]">
          <iframe
            title="Harta Clinica Darie"
            src={CLINIC.mapEmbed}
            loading="lazy"
            className="h-full min-h-[320px] w-full border-0 lg:min-h-[440px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
