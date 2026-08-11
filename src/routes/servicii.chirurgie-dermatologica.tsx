import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { ServiceCardGrid, type SubService } from "@/components/service-card";

export const Route = createFileRoute("/servicii/chirurgie-dermatologica")({
  head: () => ({
    meta: [
      { title: "Chirurgie dermatologică — Clinica Darie Dumbrăvița" },
      {
        name: "description",
        content:
          "Excizia formațiunilor cutanate și biopsie cutanată cu examen histopatologic, în condiții de siguranță, la Clinica Darie.",
      },
      { property: "og:title", content: "Chirurgie dermatologică — Clinica Darie" },
      {
        property: "og:description",
        content: "Intervenții chirurgicale dermatologice și biopsii cutanate în Dumbrăvița, Timiș.",
      },
    ],
  }),
  component: Page,
});

const items: SubService[] = [
  {
    title: "Chirurgie dermatologică",
    description:
      "Excizia chirurgicală a formațiunilor cutanate, cu anestezie locală și sutură estetică pentru cicatrici discrete.",
    image: "cusut",
  },
  {
    title: "Biopsia cutanată",
    description:
      "Prelevarea unui fragment de piele pentru examen histopatologic, esențial în stabilirea diagnosticului de certitudine.",
    image: "extragereAlunita",
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Servicii"
        title="Chirurgie dermatologică"
        lead="Intervenții minim invazive realizate în cabinet, cu evaluare dermatoscopică înainte și examen histopatologic după excizie."
      />
      <Section title="Ce oferim">
        <ServiceCardGrid items={items} />
      </Section>
    </PageShell>
  );
}
