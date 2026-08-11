import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartPulse, Microscope, Phone, ShieldCheck, Stethoscope } from "lucide-react";
import { PageShell, Section } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteImage } from "@/components/site-image";
import { CLINIC, SERVICE_ROUTES } from "@/lib/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clinica Darie — Dermatologie și estetică în Dumbrăvița, Timiș" },
      {
        name: "description",
        content:
          "Clinica Darie: consultații dermatovenerologie, chirurgie dermatologică, estetică medicală, HydraBeauty2 și epilare definitivă în Dumbrăvița, Timiș.",
      },
      { property: "og:title", content: "Clinica Darie — Dermatologie în Dumbrăvița" },
      {
        property: "og:description",
        content:
          "Medici primari și specialiști, aparatură de ultimă generație și tratamente personalizate pentru sănătatea pielii.",
      },
    ],
  }),
  component: Index,
});

const trust = [
  { icon: Award, title: "Medici primari", text: "Experiență clinică în dermato-venerologie și chirurgie." },
  { icon: Microscope, title: "Diagnostic precis", text: "Dermatoscopie și examen histopatologic pentru certitudine." },
  { icon: ShieldCheck, title: "Proceduri sigure", text: "Protocoale stricte, produse premium și aparatură certificată." },
  { icon: HeartPulse, title: "Îngrijire personalizată", text: "Plan de tratament construit împreună cu pacientul." },
];

function Index() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:py-28">
          <div className="min-w-0">
            <p className="text-xs tracking-[0.22em] text-primary-foreground/70 uppercase">
              Dumbrăvița · Timiș
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Oferim întreaga expertiză dermatologică și estetică
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              Dermatologie medicală, chirurgie dermatologică și estetică avansată, într-o clinică
              gândită pentru confortul pacientului.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <a href={CLINIC.phonePrimaryHref}>
                  <Phone className="size-4" aria-hidden />
                  Sună Acum
                </a>
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-lift">
            <SiteImage
              name="interiorClinica"
              alt="Interiorul Clinicii Darie"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-border">
        <div className="absolute inset-0 -z-10 opacity-25">
          <SiteImage name="scaunClinica" alt="" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 bg-background/80 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {trust.map((item) => (
            <Card key={item.title} className="border-border/70 bg-card/90 shadow-soft">
              <CardContent className="p-6">
                <item.icon className="size-6 text-primary" aria-hidden />
                <h2 className="mt-4 text-lg">{item.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Section
        title="Serviciile clinicii"
        description="De la controlul anual al alunițelor până la tratamente estetice avansate, toate sub îndrumarea medicilor noștri."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_ROUTES.map((service) => (
            <Link key={service.to} to={service.to} className="group">
              <Card className="h-full border-border/70 shadow-soft transition-shadow group-hover:shadow-lift">
                <CardContent className="p-7">
                  <Stethoscope className="size-6 text-primary" aria-hidden />
                  <h3 className="mt-4 text-xl">{service.label}</h3>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">
                    Află mai multe
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-soft">
            <SiteImage name="cladireClinica" alt="Clădirea Clinicii Darie" />
          </div>
          <div className="min-w-0">
            <h2 className="text-3xl sm:text-4xl">Ușor de găsit, ușor de vizitat</h2>
            <p className="mt-4 text-muted-foreground">
              Ne găsiți pe {CLINIC.address}, la câteva minute de Timișoara. Programările se fac
              telefonic, în intervalul {CLINIC.schedule.toLowerCase()}.
            </p>
            <Button asChild className="mt-6">
              <Link to="/tarife-servicii">Vezi lista de prețuri</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
