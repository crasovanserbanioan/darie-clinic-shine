import logoAsset from "@/assets/logo-icon.png";
import ovidiuAsset from "@/assets/dr-ovidiu-darie.jpg";
import florinaAsset from "@/assets/dr-florina-halmagy.jpg";
import lorenaAsset from "@/assets/dr-lorena-cimponerescu.jpg";
import vladAsset from "@/assets/dr-vlad-popescu.jpg";
import consultatiiAsset from "@/assets/consultatiidermatovenerologie.jpg";
import dermatoscopieAsset from "@/assets/dermatoscopie.jpg";
import chiuretareAsset from "@/assets/chiuretare.jpg";
import electroAsset from "@/assets/electrocauterizare.jpg";
import scleroAsset from "@/assets/scleroterapie.jpg";
import co2Asset from "@/assets/CO2.jpg";
import chirurgieAsset from "@/assets/chirurgiedermatologica.jpg";
import biopsieAsset from "@/assets/biopsiacutanata.jpg";
import acidHialuronicAsset from "@/assets/acidhialuronic.jpg";
import dermapenAsset from "@/assets/dermapen4.jpg";
import harmonyCaAsset from "@/assets/HarmonyCa.jpg";
import mezoterapieAsset from "@/assets/mezoterapie.jpg";
import cosmelanAsset from "@/assets/peelingcosmelan.jpg";
import prpAsset from "@/assets/prpterapiavampir.jpg";
import sculptraAsset from "@/assets/SculptraAcidPoli-2.jpg";
import botoxAsset from "@/assets/toxinabotulinica.jpg";
import hydraAparatAsset from "@/assets/hydrabeauty-aparat.jpg";
import hydraTratamentAsset from "@/assets/hydrabeauty-tratament.jpg";
import fireAsset from "@/assets/Firebioresorbabile.jpg";
import peelingChimicAsset from "@/assets/PeelingChimic.jpg";
import pbSerumAsset from "@/assets/pbserum.jpg";
import prxAsset from "@/assets/Peelingprx.jpg";
import epilareAparatAsset from "@/assets/epilaredefinitiva1.png";
import epilareSpotAsset from "@/assets/epilaredefinitiva2.webp";
import epilareCoherentAsset from "@/assets/epilaredefinitiva3.webp";
import epilareWaveAsset from "@/assets/epilaredefinitiva4.png";
import epilareRezultateAsset from "@/assets/epilaredefinitiva5.jpg";
import cladireAsset from "@/assets/CladireClinica.jpg";
import interiorAsset from "@/assets/InteriorClinica.jpg";
import aparatClinicaAsset from "@/assets/Aparat.jpg";

/**
 * Imaginile foto ale clinicii.
 *
 * Fiecare intrare este `null` până la încărcarea fotografiei reale.
 * Pentru a activa o imagine: încarcă fișierul ca asset și înlocuiește `null`
 * cu URL-ul acestuia (ex: `import x from "@/assets/Logo.jpg.asset.json"` -> `x.url`).
 */
export type SiteImageKey =
  | "logo"
  | "interiorClinica"
  | "scaunClinica"
  | "cladireClinica"
  | "drOvidiuDarie"
  | "drFlorinaHalmagy"
  | "drLorenaCimponerescu"
  | "drVladPopescu"
  | "alunitaLupa"
  | "insemnareCreion"
  | "cusut"
  | "extragereAlunita"
  | "riduriInjectie"
  | "injectieBuze"
  | "injectiePometi"
  | "reclamaHarmony"
  | "harmonyCaCutie"
  | "sculptraAcidPoli"
  | "injectieCap"
  | "injectieCirculatie"
  | "pensulaCrema"
  | "aparatRosacee"
  | "alunitaMana"
  | "hydraBeauty"
  | "hydraBeautyAparat"
  | "aparatFata"
  | "aparat"
  | "aparatClinica"
  | "laserCO2"
  | "dermapen4"
  | "peelingCosmelan"
  | "mezoterapie"
  | "epilareAparat"
  | "epilareSpot"
  | "epilareCoherent"
  | "epilareWave"
  | "epilareRezultate";

export const siteImages: Record<SiteImageKey, string | null> = {
  logo: logoAsset,
  interiorClinica: interiorAsset,
  scaunClinica: interiorAsset,
  cladireClinica: cladireAsset,
  drOvidiuDarie: ovidiuAsset,
  drFlorinaHalmagy: florinaAsset,
  drLorenaCimponerescu: lorenaAsset,
  drVladPopescu: vladAsset,
  alunitaLupa: consultatiiAsset,
  insemnareCreion: dermatoscopieAsset,
  cusut: chirurgieAsset,
  extragereAlunita: biopsieAsset,
  riduriInjectie: botoxAsset,
  injectieBuze: acidHialuronicAsset,
  injectiePometi: fireAsset,
  reclamaHarmony: harmonyCaAsset,
  harmonyCaCutie: pbSerumAsset,
  sculptraAcidPoli: sculptraAsset,
  injectieCap: prpAsset,
  injectieCirculatie: scleroAsset,
  pensulaCrema: peelingChimicAsset,
  aparatRosacee: electroAsset,
  alunitaMana: chiuretareAsset,
  hydraBeauty: hydraTratamentAsset,
  hydraBeautyAparat: hydraAparatAsset,
  aparatFata: prxAsset,
  aparat: null,
  aparatClinica: aparatClinicaAsset,
  laserCO2: co2Asset,
  dermapen4: dermapenAsset,
  peelingCosmelan: cosmelanAsset,
  mezoterapie: mezoterapieAsset,
  epilareAparat: epilareAparatAsset,
  epilareSpot: epilareSpotAsset,
  epilareCoherent: epilareCoherentAsset,
  epilareWave: epilareWaveAsset,
  epilareRezultate: epilareRezultateAsset,
};
