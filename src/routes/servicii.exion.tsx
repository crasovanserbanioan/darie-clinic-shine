import { createFileRoute } from "@tanstack/react-router";
import { Activity, Cpu, Sparkles, Waves } from "lucide-react";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { SiteImage } from "@/components/site-image";

export const Route = createFileRoute("/servicii/exion")({
  head: () => ({
    meta: [
      { title: "EXION — radiofrecvență și ultrasunete pentru față și corp | Clinica Darie" },
      {
        name: "description",
        content:
          "EXION la Clinica Darie: prima tehnologie non-invazivă care stimulează producția naturală de acid hialuronic, prin radiofrecvență și ultrasunete.",
      },
      { property: "og:title", content: "EXION — Clinica Darie" },
      {
        property: "og:description",
        content: "Microneedling RF cu inteligență artificială pentru față, gât, decolteu și corp.",
      },
    ],
  }),
  component: Page,
});

const modules = [
  {
    icon: Cpu,
    title: "EXION Fractional RF",
    text: "Microneedling RF cu inteligență artificială: penetrare profundă, tratament rapid printr-o singură trecere și disconfort minim. Potrivit pentru față, gât și decolteu.",
  },
  {
    icon: Activity,
    title: "EXION Corp",
    text: "Reduce laxitatea cutanată și tratează vergeturile, cicatricile și celulita, prin încălzire controlată pentru fermitate și contur corporal.",
  },
];

const highlights = [
  { icon: Sparkles, text: "Stimulează producția naturală de acid hialuronic" },
  { icon: Waves, text: "Combină radiofrecvența (RF) și ultrasunetele" },
  { icon: Activity, text: "Fără timp de recuperare" },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Servicii"
        title="EXION — tehnologie patentată pentru față și corp"
        lead="Prima tehnologie non-invazivă care stimulează producția naturală de acid hialuronic."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <h2 className="text-3xl">Radiofrecvență și ultrasunete, împreună</h2>
            <p className="mt-4 text-muted-foreground">
              EXION combină radiofrecvența (RF) și ultrasunetele pentru a stimula procesele
              naturale de regenerare ale pielii, cu rezultate vizibile și fără timp de recuperare.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <item.icon className="size-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-soft">
            <SiteImage name="aparatClinica" alt="Aparatul EXION la Clinica Darie" />
          </div>
        </div>
      </Section>

      <Section title="Cele două module" tone="muted">
        <div className="grid gap-6 lg:grid-cols-2">
          {modules.map((module) => (
            <Card key={module.title} className="border-border/70 shadow-soft">
              <CardContent className="p-8">
                <module.icon className="size-6 text-primary" aria-hidden />
                <h3 className="mt-4 text-2xl">{module.title}</h3>
                <p className="mt-3 text-muted-foreground">{module.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
