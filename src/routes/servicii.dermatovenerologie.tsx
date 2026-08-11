import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { ServiceCardGrid, type SubService } from "@/components/service-card";

export const Route = createFileRoute("/servicii/dermatovenerologie")({
  head: () => ({
    meta: [
      { title: "Dermatovenerologie — Clinica Darie Dumbrăvița" },
      {
        name: "description",
        content:
          "Consultații dermatovenerologie, dermatoscopie digitală, chiuretare și electrocauterizare la Clinica Darie din Dumbrăvița, Timiș.",
      },
      { property: "og:title", content: "Dermatovenerologie — Clinica Darie" },
      {
        property: "og:description",
        content: "Diagnostic și tratament pentru afecțiunile pielii, părului și unghiilor.",
      },
    ],
  }),
  component: Page,
});

const items: SubService[] = [
  {
    title: "Consultații dermatovenerologie",
    description:
      "Evaluare completă a pielii, părului și unghiilor, diagnostic și plan de tratament personalizat.",
    image: "alunitaLupa",
  },
  {
    title: "Dermatoscopie",
    description:
      "Examinarea leziunilor pigmentare cu dermatoscopul, pentru depistarea precoce a modificărilor suspecte.",
    image: "insemnareCreion",
  },
  {
    title: "Chiuretare",
    description:
      "Îndepărtarea leziunilor cutanate superficiale, rapid și cu disconfort minim, în cabinet.",
    image: "alunitaMana",
  },
  {
    title: "Electrocauterizare",
    description:
      "Tratarea verucilor, papiloamelor și a altor formațiuni benigne prin curent de înaltă frecvență.",
    image: "aparatRosacee",
  },
  {
    title: "Scleroterapie",
    description:
      "Tratamentul venectaziilor și al varicelor superficiale prin injectarea unei soluții sclerozante, pentru picioare fără vase vizibile.",
    image: "injectieCirculatie",
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Servicii"
        title="Dermatovenerologie"
        lead="Diagnostic precis și tratament pentru afecțiunile pielii, părului, unghiilor și mucoaselor, cu aparatură modernă și medici primari."
      />
      <Section title="Ce oferim">
        <ServiceCardGrid items={items} />
      </Section>
    </PageShell>
  );
}
