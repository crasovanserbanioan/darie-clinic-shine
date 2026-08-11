import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Sparkles, Wind, ShieldCheck } from "lucide-react";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { SiteImage } from "@/components/site-image";

export const Route = createFileRoute("/servicii/hydrafacial")({
  head: () => ({
    meta: [
      { title: "Hydrafacial — curățare și hidratare a tenului | Clinica Darie" },
      {
        name: "description",
        content:
          "Hydrafacial la Clinica Darie: curățare, exfoliere, extracție și hidratare într-o singură ședință, fără roșeață și fără timp de recuperare.",
      },
      { property: "og:title", content: "Hydrafacial — Clinica Darie" },
      {
        property: "og:description",
        content: "Cel mai avansat tratament de curățare și îngrijire al tenului, în Dumbrăvița.",
      },
    ],
  }),
  component: Page,
});

const steps = [
  {
    icon: Wind,
    title: "1. Curățare și exfoliere",
    text: "Vortex Cleansing îndepărtează blând impuritățile și celulele moarte de la suprafața tenului.",
  },
  {
    icon: Sparkles,
    title: "2. Peeling blând",
    text: "Soluție acidă delicată care pregătește pielea pentru extracție, fără iritare.",
  },
  {
    icon: Droplets,
    title: "3. Extracția",
    text: "Vortex Extraction cu vacuum curăță porii în profunzime, fără stoarcere manuală.",
  },
  {
    icon: ShieldCheck,
    title: "4. Hidratare",
    text: "Vortex-Fusion infuzează antioxidanți și acid hialuronic pentru protecție și strălucire.",
  },
];

const benefits = [
  "Tratează acneea",
  "Potrivit pentru ten sensibil (fără roșeață)",
  "Nu necesită timp de recuperare",
  "Terapie relaxantă și personalizată",
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Servicii"
        title="Hydrafacial"
        lead="Cel mai avansat tratament de curățare și îngrijire al tenului."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <h2 className="text-3xl">Un singur tratament, cinci acțiuni</h2>
            <p className="mt-4 text-muted-foreground">
              Hydrafacial este un tratament non-invaziv de curățare, hidratare și rejuvenare a
              tenului. Combină simultan curățarea, exfolierea, extracția, hidratarea și protecția
              pielii, într-o ședință confortabilă, potrivită oricărui tip de ten.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-soft">
            <SiteImage name="hydraBeauty" alt="Hydrafacial la Clinica Darie" />
          </div>
        </div>
      </Section>

      <Section title="Pașii tratamentului" tone="muted">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.title} className="border-border/70 shadow-soft">
              <CardContent className="p-6">
                <step.icon className="size-6 text-primary" aria-hidden />
                <h3 className="mt-4 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Beneficii">
        <ul className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-soft"
            >
              <ShieldCheck className="size-5 shrink-0 text-primary" aria-hidden />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
