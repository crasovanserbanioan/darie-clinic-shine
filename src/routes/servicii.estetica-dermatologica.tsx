import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { ServiceCardGrid, type SubService } from "@/components/service-card";

export const Route = createFileRoute("/servicii/estetica-dermatologica")({
  head: () => ({
    meta: [
      { title: "Estetică dermatologică — Clinica Darie Dumbrăvița" },
      {
        name: "description",
        content:
          "Dermapen 4, PRP, peeling Cosmelan, mezoterapie, toxină botulinică, acid hialuronic, Sculptra, HArmonyCa™, PB Serum și fire bioresorbabile.",
      },
      { property: "og:title", content: "Estetică dermatologică — Clinica Darie" },
      {
        property: "og:description",
        content: "Tratamente injectabile și proceduri de rejuvenare realizate de medici dermatologi.",
      },
    ],
  }),
  component: Page,
});

const items: SubService[] = [
  {
    title: "Dermapen 4",
    description:
      "Microneedling de ultimă generație pentru textură uniformă, pori vizibil mai mici și cicatrici estompate.",
    image: "dermapen4",
  },
  {
    title: "PRP (Terapia Vampir)",
    description:
      "Plasmă îmbogățită cu trombocite din propriul sânge, pentru regenerarea tenului și stimularea părului.",
    image: "injectieCap",
  },
  {
    title: "Peeling Cosmelan",
    description:
      "Protocol depigmentant intensiv, indicat în melasmă și hiperpigmentări rezistente la alte tratamente.",
    image: "peelingCosmelan",
  },
  {
    title: "Mezoterapie",
    description:
      "Microinjectări cu vitamine și acid hialuronic nereticulat pentru hidratare profundă și luminozitate.",
    image: "mezoterapie",
  },
  {
    title: "Peeling chimic",
    description:
      "Exfoliere controlată care uniformizează tenul, reduce acneea și accelerează reînnoirea celulară.",
    image: "pensulaCrema",
  },
  {
    title: "Toxina botulinică",
    description:
      "Relaxarea ridurilor de expresie de la frunte, glabelă și periocular, cu rezultate naturale.",
    image: "riduriInjectie",
  },
  {
    title: "Injectări cu acid hialuronic",
    description:
      "Hidratare, volum și contur pentru buze, pomeți și conturul feței, cu produse premium.",
    image: "injectieBuze",
  },
  {
    title: "Sculptra",
    description:
      "Acid poli-L-lactic ce stimulează colagenul propriu, pentru un lifting treptat și de durată.",
    image: "sculptraAcidPoli",
  },
  {
    title: "HArmonyCa™",
    description:
      "Filler hibrid cu acid hialuronic și hidroxiapatită de calciu: efect imediat de lifting și stimulare de colagen.",
    image: "reclamaHarmony",
  },
  {
    title: "PB Serum",
    description:
      "Enzime recombinate care remodelează țesutul, reduc fibroza și îmbunătățesc aspectul pielii.",
    image: "injectiePometi",
  },
  {
    title: "Fire bioresorbabile",
    description:
      "Lifting non-chirurgical prin fire resorbabile care repoziționează țesuturile și stimulează colagenul.",
    image: "injectiePometi",
  },
  {
    title: "Peeling PRX-T33",
    description:
      "Biorevitalizare fără exfoliere vizibilă, potrivită oricând, inclusiv vara, fără timp de recuperare.",
    image: "aparatFata",
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Servicii"
        title="Estetică dermatologică"
        lead="Proceduri injectabile și tratamente de rejuvenare, alese împreună cu medicul în funcție de tipul pielii și de obiectivele dumneavoastră."
      />
      <Section title="Tratamente disponibile">
        <ServiceCardGrid items={items} />
      </Section>
    </PageShell>
  );
}
