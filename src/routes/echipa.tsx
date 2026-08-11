import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { SiteImage } from "@/components/site-image";
import type { SiteImageKey } from "@/lib/site-images";

export const Route = createFileRoute("/echipa")({
  head: () => ({
    meta: [
      { title: "Echipa medicală — Clinica Darie Dumbrăvița" },
      {
        name: "description",
        content:
          "Medici primari și specialiști în dermato-venerologie și chirurgie plastică la Clinica Darie, Dumbrăvița, Timiș.",
      },
      { property: "og:title", content: "Echipa medicală — Clinica Darie" },
      {
        property: "og:description",
        content: "Medicii dermatologi și chirurgi ai Clinicii Darie din Dumbrăvița, Timiș.",
      },
    ],
  }),
  component: EchipaPage,
});

const team: { name: string; role: string; image: SiteImageKey }[] = [
  {
    name: "Dr. Ovidiu Darie",
    role: "Medic Primar Dermato-Venerologie",
    image: "drOvidiuDarie",
  },
  {
    name: "Dr. Florina Halmagy",
    role: "Medic Specialist Dermato-Venerologie",
    image: "drFlorinaHalmagy",
  },
  {
    name: "Dr. Lorena Cimponerescu",
    role: "Medic Specialist Dermato-Venerologie",
    image: "drLorenaCimponerescu",
  },
  {
    name: "Dr. Vlad Popescu",
    role: "Medic Specialist Chirurgie Plastică",
    image: "drVladPopescu",
  },
];

function EchipaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Echipa"
        title="Medici dedicați sănătății pielii dumneavoastră"
        lead="O echipă de medici primari și specialiști cu experiență în dermato-venerologie, chirurgie dermatologică și estetică medicală."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card
              key={member.name}
              className="overflow-hidden border-border/70 py-0 shadow-soft"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                <SiteImage name={member.image} alt={member.name} />
              </div>
              <CardContent className="p-6">
                <h2 className="text-lg">{member.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
