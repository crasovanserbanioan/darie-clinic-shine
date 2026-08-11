import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell, Section } from "@/components/page-shell";
import { Flipbook, type FlipPage } from "@/components/flipbook";
import p1 from "@/assets/brochure2/preturi1.webp.asset.json";
import p2 from "@/assets/brochure2/preturi2.webp.asset.json";
import p3 from "@/assets/brochure2/preturi3.webp.asset.json";
import p4 from "@/assets/brochure2/preturi4.webp.asset.json";
import p5 from "@/assets/brochure2/preturi5.webp.asset.json";
import p6 from "@/assets/brochure2/preturi6.webp.asset.json";
import p7 from "@/assets/brochure2/preturi7.webp.asset.json";
import p8 from "@/assets/brochure2/preturi8.webp.asset.json";
import p9 from "@/assets/brochure2/preturi9.webp.asset.json";
import p10 from "@/assets/brochure2/preturi10.webp.asset.json";
import p11 from "@/assets/brochure2/preturi11.png.asset.json";
import p12 from "@/assets/brochure2/preturi12.png.asset.json";

export const Route = createFileRoute("/tarife-servicii")({
  head: () => ({
    meta: [
      { title: "Tarife servicii — Lista de prețuri Clinica Darie" },
      {
        name: "description",
        content:
          "Răsfoiți lista completă de prețuri a Clinicii Darie: consultații dermatologice, chirurgie, estetică, HydraBeauty2 și epilare definitivă.",
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
