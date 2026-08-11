import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { Flipbook, type FlipPage } from "@/components/flipbook";
import p1 from "@/assets/brochure/pagina-1.png.asset.json";
import p2 from "@/assets/brochure/pagina-2.png.asset.json";
import p3 from "@/assets/brochure/pagina-3.png.asset.json";
import p4 from "@/assets/brochure/pagina-4.png.asset.json";
import p5 from "@/assets/brochure/pagina-5.png.asset.json";
import p6 from "@/assets/brochure/pagina-6.png.asset.json";
import p7 from "@/assets/brochure/pagina-7.png.asset.json";
import p8 from "@/assets/brochure/pagina-8.png.asset.json";
import p9 from "@/assets/brochure/pagina-9.png.asset.json";
import p10 from "@/assets/brochure/pagina-10.png.asset.json";
import p11 from "@/assets/brochure/pagina-11.png.asset.json";
import p12 from "@/assets/brochure/pagina-12.png.asset.json";
import p13 from "@/assets/brochure/pagina-13.png.asset.json";
import p14 from "@/assets/brochure/pagina-14.jpg.asset.json";

export const Route = createFileRoute("/tarife-servicii")({
  head: () => ({
    meta: [
      { title: "Tarife servicii — Lista de prețuri Clinica Darie" },
      {
        name: "description",
        content:
          "Răsfoiți lista completă de prețuri a Clinicii Darie: consultații dermatologice, chirurgie, estetică, Hydrafacial și epilare definitivă.",
      },
      { property: "og:title", content: "Tarife servicii — Clinica Darie" },
      {
        property: "og:description",
        content: "Broșura interactivă cu lista de prețuri a Clinicii Darie din Dumbrăvița.",
      },
    ],
  }),
  component: TarifePage,
});

const pages: FlipPage[] = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
].map((asset, i) => ({ src: asset.url, alt: `Lista de prețuri Clinica Darie — pagina ${i + 1}` }));

function TarifePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Tarife servicii"
        title="Lista de prețuri"
        lead="Răsfoiți broșura ca pe una tipărită: apăsați pe pagină sau folosiți săgețile pentru a întoarce filele."
      />
      <Section>
        <Flipbook pages={pages} />
      </Section>
    </PageShell>
  );
}
