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
  logo: null,
  interiorClinica: null,
  scaunClinica: null,
  cladireClinica: null,
  drOvidiuDarie: null,
  drFlorinaHalmagy: null,
  drLorenaCimponerescu: null,
  drVladPopescu: null,
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
