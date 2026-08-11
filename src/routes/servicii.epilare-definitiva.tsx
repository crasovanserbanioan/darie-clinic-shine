import { createFileRoute } from "@tanstack/react-router";
import { Gauge, Layers, Snowflake, Sun, Timer, Zap } from "lucide-react";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { SiteImage } from "@/components/site-image";

export const Route = createFileRoute("/servicii/epilare-definitiva")({
  head: () => ({
    meta: [
      { title: "Epilare definitivă cu laser diodă — Clinica Darie" },
      {
        name: "description",
        content:
          "Epilare definitivă cu laser diodă cu 4 lungimi de undă (755, 808, 940, 1064 nm) și bare Coherent USA: nedureroasă, sigură pentru orice fototip, 365 de zile pe an.",
      },
      { property: "og:title", content: "Epilare definitivă — Clinica Darie" },
      {
        property: "og:description",
        content:
          "Laser diodă cu 4 lungimi de undă și răcire pe safir: piele catifelată, fără durere, în Dumbrăvița.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const features = [
  {
    icon: Layers,
    title: "4 lungimi de undă",
    text: "755, 808, 940 și 1064 nm emise simultan: tratăm eficient de la firele fine până la cele groase, pe toate fototipurile de piele.",
  },
  {
    icon: Zap,
    title: "Bare laser Coherent USA",
    text: "Sursa laser este fabricată în SUA, cu spectru testat individual — energie stabilă, constantă la fiecare puls.",
  },
  {
    icon: Snowflake,
    title: "Practic nedureros",
    text: "Fereastra de contact răcită menține pielea rece pe tot parcursul ședinței; senzația este de căldură ușoară.",
  },
  {
    icon: Gauge,
    title: "4 dimensiuni de spot",
    text: "Capete interschimbabile în 1 secundă: spoturi mari pentru picioare și spate, spoturi mici pentru față și contur.",
  },
  {
    icon: Sun,
    title: "365 de zile pe an",
    text: "Se poate efectua în orice sezon, pe orice zonă a corpului, inclusiv pe piele bronzată.",
  },
  {
    icon: Timer,
    title: "5 minute – 2 ore",
    text: "Durata unei ședințe, în funcție de zonă. Sunt necesare în medie 8-10 ședințe, la 6-12 săptămâni.",
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Servicii"
        title="Epilare definitivă cu laser diodă"
        lead="Piele catifelată, fără durere și fără fire crescute sub piele, cu tehnologie laser diodă de ultimă generație."
      />

      <Section>
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
          <SiteImage
            name="epilareAparat"
            alt="Platforma laser diodă pentru epilare definitivă din Clinica Darie"
            loading="eager"
            imgClassName="h-full w-full object-contain"
            className="aspect-[16/7]"
          />
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <h2 className="text-3xl">Tehnologie laser diodă cu 4 lungimi de undă</h2>
            <p className="mt-4 text-muted-foreground">
              Epilarea definitivă se bazează pe fototermoliză selectivă: energia laserului este
              absorbită de melanina din firul de păr și transformată în căldură, care distruge
              foliculul fără a afecta țesuturile din jur.
            </p>
            <p className="mt-4 text-muted-foreground">
              Aparatul nostru emite simultan patru lungimi de undă — 755 nm, 808 nm, 940 nm și
              1064 nm — astfel încât energia ajunge la adâncimi diferite și tratează atât firele
              superficiale și fine, cât și foliculii profunzi. Rezultatul: mai puține ședințe și
              siguranță pe toate fototipurile de piele, de la cele foarte deschise până la cele
              închise.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
            <SiteImage
              name="epilareWave"
              alt="Cele patru lungimi de undă emise de barele laser Coherent"
              imgClassName="h-full w-full object-contain"
              className="aspect-[16/9]"
            />
          </div>
        </div>
      </Section>

      <Section title="De ce acest laser" tone="muted">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <Section title="Piesa de mână și capetele de tratament">
        <div className="grid gap-8 lg:grid-cols-2">
          <figure className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
              <SiteImage
                name="epilareCoherent"
                alt="Piesă de mână cu sursă laser Coherent USA"
                imgClassName="h-full w-full object-contain"
                className="aspect-[16/9]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Sursă laser Coherent USA, cu fascicul uniform și energie constantă la fiecare puls —
              tratament predictibil și confortabil.
            </figcaption>
          </figure>
          <figure className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
              <SiteImage
                name="epilareSpot"
                alt="Patru dimensiuni de spot, interschimbabile într-o secundă"
                imgClassName="h-full w-full object-contain"
                className="aspect-[16/9]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Patru dimensiuni de spot, schimbate în 1 secundă: zonele mari se tratează rapid, iar
              zonele delicate cu maximă precizie.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section title="Rezultate" tone="muted">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border shadow-soft">
          <SiteImage
            name="epilareRezultate"
            alt="Imagini înainte și după ședințele de epilare definitivă cu laser diodă"
            imgClassName="h-full w-full object-contain"
            className="aspect-[16/9] bg-foreground/90"
          />
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          Imagini înainte / după, obținute după o serie completă de ședințe. Rezultatele pot varia
          în funcție de zonă, tipul de păr și particularitățile hormonale ale fiecărui pacient.
        </p>
      </Section>
    </PageShell>
  );
}
