import logoAsset from "@/assets/logo-icon.png.asset.json";
import ovidiuAsset from "@/assets/dr-ovidiu-darie.jpg.asset.json";
import florinaAsset from "@/assets/dr-florina-halmagy.jpg.asset.json";
import lorenaAsset from "@/assets/dr-lorena-cimponerescu.jpg.asset.json";
import vladAsset from "@/assets/dr-vlad-popescu.jpg.asset.json";

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
  | "aparatFata"
  | "aparat"
  | "aparatClinica";

export const siteImages: Record<SiteImageKey, string | null> = {
  logo: logoAsset.url,
  interiorClinica: null,
  scaunClinica: null,
  cladireClinica: null,
  drOvidiuDarie: ovidiuAsset.url,
  drFlorinaHalmagy: florinaAsset.url,
  drLorenaCimponerescu: lorenaAsset.url,
  drVladPopescu: vladAsset.url,
  alunitaLupa: null,
  insemnareCreion: null,
  cusut: null,
  extragereAlunita: null,
  riduriInjectie: null,
  injectieBuze: null,
  injectiePometi: null,
  reclamaHarmony: null,
  harmonyCaCutie: null,
  sculptraAcidPoli: null,
  injectieCap: null,
  injectieCirculatie: null,
  pensulaCrema: null,
  aparatRosacee: null,
  alunitaMana: null,
  hydraBeauty: null,
  aparatFata: null,
  aparat: null,
  aparatClinica: null,
};
