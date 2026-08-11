import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact și programări — Clinica Darie Dumbrăvița" },
      {
        name: "description",
        content:
          "Programări la Clinica Darie: Strada Superbă 10, Dumbrăvița. Telefon 0749 036 864, 0746 233 335, contact@clinicadarie.ro.",
      },
      { property: "og:title", content: "Contact — Clinica Darie" },
      {
        property: "og:description",
        content: "Adresă, orar și date de contact pentru Clinica Darie din Dumbrăvița, Timiș.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Vă așteptăm în Dumbrăvița"
        lead="Suntem la câțiva pași de Timișoara, cu parcare la intrarea în clinică și programări în intervalul 08:00 - 20:00."
      />
    </PageShell>
  );
}
