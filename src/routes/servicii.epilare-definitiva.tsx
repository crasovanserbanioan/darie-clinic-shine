import { createFileRoute } from "@tanstack/react-router";
import { Snowflake, Sun, Timer, Zap } from "lucide-react";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { SiteImage } from "@/components/site-image";

export const Route = createFileRoute("/servicii/epilare-definitiva")({
  head: () => ({
    meta: [
      { title: "Epilare definitivă laser Elysion Pro — Clinica Darie" },
      {
        name: "description",
        content:
          "Epilare definitivă cu laser diodă Elysion Pro: fără durere, 100% sigură, pe orice zonă a corpului, 365 de zile pe an, inclusiv pe piele bronzată.",
      },
      { property: "og:title", content: "Epilare definitivă — Clinica Darie" },
      {
        property: "og:description",
        content: "Piele catifelată fără durere, cu laserul diodă Elysion Pro, în Dumbrăvița.",
      },
    ],
  }),
  component: Page,
});

const features = [
  {
    icon: Zap,
    title: "Fototermoliză selectivă",
    text: "Distruge firele de păr fără a afecta țesuturile din jur, cu precizie ridicată.",
  },
  {
    icon: Snowflake,
    title: "Fără durere",
    text: "Sistemul de răcire Crystal freeze menține pielea la 6 grade Celsius pe tot parcursul ședinței.",
  },
  {
    icon: Sun,
    title: "365 de zile pe an",
    text: "Se poate realiza pe orice zonă a corpului, inclusiv pe pielea bronzată.",
  },
  {
    icon: Timer,
    title: "5 minute - 2 ore",
    text: "Durata unei ședințe, în funcție de zonă; full body la capătul superior al intervalului.",
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Servicii"
        title="Epilare definitivă Laser Elysion Pro"
        lead="Piele catifelată fără durere, fără fire de păr crescute sub piele."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <h2 className="text-3xl">Cel mai eficient sistem cu laser diodă</h2>
            <p className="mt-4 text-muted-foreground">
              Elysion Pro este cel mai eficient sistem ce utilizează laserul diodă. Funcționează
              prin fototermoliză selectivă, distrugând firele de păr fără a afecta țesuturile.
              Este non-invaziv, fără durere datorită sistemului de răcire Crystal freeze la 6 grade
              Celsius, și 100% sigur.
            </p>
            <p className="mt-4 text-muted-foreground">
              Sunt necesare în medie 8-10 ședințe, la interval de 6-12 săptămâni, pentru rezultate
              de durată.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-soft">
            <SiteImage name="aparat" alt="Laser Elysion Pro" />
          </div>
        </div>
      </Section>

      <Section title="De ce Elysion Pro" tone="muted">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/70 shadow-soft">
              <CardContent className="p-6">
                <feature.icon className="size-6 text-primary" aria-hidden />
                <h3 className="mt-4 text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
