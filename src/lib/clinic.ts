export const CLINIC = {
  name: "Clinica Darie",
  address: "Strada Superbă 10, Dumbrăvița 307160",
  schedule: "Luni-Vineri: 08:00 - 20:00",
  phones: ["0749 036 864", "0746 233 335"],
  phonePrimaryHref: "tel:+40749036864",
  email: "contact@clinicadarie.ro",
  mapEmbed:
    "https://maps.google.com/maps?q=Strada%20Superb%C4%83%2010,%20Dumbr%C4%83vi%C8%9Ba,%20Timi%C8%99&t=&z=15&ie=UTF8&iwloc=&output=embed",
  instagram: "https://www.instagram.com/clinicadarie/",
  facebook: "https://www.facebook.com/people/ClinicaDarie/61592621061622/",
  whatsapp: "https://wa.me/40749036864",
} as const;

export const SERVICE_ROUTES = [
  { to: "/servicii/dermatovenerologie", label: "Dermatovenerologie" },
  { to: "/servicii/chirurgie-dermatologica", label: "Chirurgie Dermatologică" },
  { to: "/servicii/estetica-dermatologica", label: "Estetică Dermatologică" },
  { to: "/servicii/hydrafacial", label: "HydraBeauty2" },
  { to: "/servicii/epilare-definitiva", label: "Epilare Definitivă" },
] as const;
