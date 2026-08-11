import logoAsset from "@/assets/logo-icon.png.asset.json";
import ovidiuAsset from "@/assets/dr-ovidiu-darie.jpg.asset.json";
import florinaAsset from "@/assets/dr-florina-halmagy.jpg.asset.json";
import lorenaAsset from "@/assets/dr-lorena-cimponerescu.jpg.asset.json";
import vladAsset from "@/assets/dr-vlad-popescu.jpg.asset.json";
import consultatiiAsset from "@/assets/consultatiidermatovenerologie.jpg.asset.json";
import dermatoscopieAsset from "@/assets/dermatoscopie.jpg.asset.json";
import chiuretareAsset from "@/assets/chiuretare.jpg.asset.json";
import electroAsset from "@/assets/electrocauterizare.jpg.asset.json";
import scleroAsset from "@/assets/scleroterapie.jpg.asset.json";
import co2Asset from "@/assets/CO2.jpg.asset.json";
import chirurgieAsset from "@/assets/chirurgiedermatologica.jpg.asset.json";
import biopsieAsset from "@/assets/biopsiacutanata.jpg.asset.json";
import acidHialuronicAsset from "@/assets/acidhialuronic.jpg.asset.json";
import dermapenAsset from "@/assets/dermapen4.jpg.asset.json";
import harmonyCaAsset from "@/assets/HarmonyCa.jpg.asset.json";
import mezoterapieAsset from "@/assets/mezoterapie.jpg.asset.json";
import cosmelanAsset from "@/assets/peelingcosmelan.jpg.asset.json";
import prpAsset from "@/assets/prpterapiavampir.jpg.asset.json";
import sculptraAsset from "@/assets/SculptraAcidPoli.jpg.asset.json";
import botoxAsset from "@/assets/toxinabotulinica.jpg.asset.json";
import hydraAparatAsset from "@/assets/hydrabeauty-aparat.jpg.asset.json";
import hydraTratamentAsset from "@/assets/hydrabeauty-tratament.jpg.asset.json";
import fireAsset from "@/assets/Firebioresorbabile.jpg.asset.json";
import peelingChimicAsset from "@/assets/PeelingChimic.jpg.asset.json";
import pbSerumAsset from "@/assets/pbserum.jpg.asset.json";
import prxAsset from "@/assets/Peelingprx.jpg.asset.json";
import epilareAparatAsset from "@/assets/epilaredefinitiva1.png.asset.json";
import epilareSpotAsset from "@/assets/epilaredefinitiva2.webp.asset.json";
import epilareCoherentAsset from "@/assets/epilaredefinitiva3.webp.asset.json";
import epilareWaveAsset from "@/assets/epilaredefinitiva4.png.asset.json";
import epilareRezultateAsset from "@/assets/epilaredefinitiva5.jpg.asset.json";

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
  logo: logoAsset.url,
  interiorClinica: null,
  scaunClinica: null,
  cladireClinica: null,
  drOvidiuDarie: ovidiuAsset.url,
  drFlorinaHalmagy: florinaAsset.url,
  drLorenaCimponerescu: lorenaAsset.url,
  drVladPopescu: vladAsset.url,
  alunitaLupa: consultatiiAsset.url,
  insemnareCreion: dermatoscopieAsset.url,
  cusut: chirurgieAsset.url,
  extragereAlunita: biopsieAsset.url,
  riduriInjectie: botoxAsset.url,
  injectieBuze: acidHialuronicAsset.url,
  injectiePometi: fireAsset.url,
  reclamaHarmony: harmonyCaAsset.url,
  harmonyCaCutie: pbSerumAsset.url,
  sculptraAcidPoli: sculptraAsset.url,
  injectieCap: prpAsset.url,
  injectieCirculatie: scleroAsset.url,
  pensulaCrema: peelingChimicAsset.url,
  aparatRosacee: electroAsset.url,
  alunitaMana: chiuretareAsset.url,
  hydraBeauty: hydraTratamentAsset.url,
  hydraBeautyAparat: hydraAparatAsset.url,
  aparatFata: prxAsset.url,
  aparat: null,
  aparatClinica: null,
  laserCO2: co2Asset.url,
  dermapen4: dermapenAsset.url,
  peelingCosmelan: cosmelanAsset.url,
  mezoterapie: mezoterapieAsset.url,
  epilareAparat: epilareAparatAsset.url,
  epilareSpot: epilareSpotAsset.url,
  epilareCoherent: epilareCoherentAsset.url,
  epilareWave: epilareWaveAsset.url,
  epilareRezultate: epilareRezultateAsset.url,
};
