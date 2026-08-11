# Darie Clinic UI

Act as an expert frontend developer and UI/UX designer. Build a premium, high-converting, and mobile-first website for a dermatological clinic in Dumbrăvița, Timiș called "Clinica Darie". 

The application must be built using React, Tailwind CSS, Lucide Icons, React Router (for pages), and shadcn/ui components. The interface language is Romanian.

### 1. ASSET INTEGRATION MAP (CRITICAL)
Use the uploaded image assets exactly as mapped below by referencing their content/filenames. 

*   **Global Branding & Layout:** Use `Logo.jpg` in the Header/Footer. Use `InteriorClinica.jpg` for the Home Hero section. Use `ScaunClinica.jpg` as a background aesthetic for Trust Indicators. Use `CladireClinica.jpg` near the Contact/Map section.
*   **Echipa (Team Portraits - EXACT MATCH):** 
    1. Dr. Ovidiu Darie – Medic Primar Dermato-Venerologie -> `DrOvidiuDarie.jpg`
    2. Dr. Florina Halmagy – Medic Specialist Dermato-Venerologie -> `DrFlorinaHalmagy.jpg`
    3. Dr. Lorena Cimponerescu – Medic Specialist Dermato-Venerologie -> `DrLorenaCimponerescu.jpg`
    4. Dr. Vlad Popescu – Medic Specialist Chirurgie Plastică -> (No image provided; use a clean, professional placeholder avatar)
    *STRICT RULE: Do NOT include "Andreea Tunei" anywhere in the codebase.*
*   **Service Card Images:** 
    *   Dermatologie: `AlunitaLupa.jpg`, `InsemnareCreion.jpg`
    *   Chirurgie: `Cusut.jpg`, `ExtragereAlunita.jpg`
    *   Estetică & Injectări: `RiduriInjectie.jpg`, `InjectieBuze.jpg`, `InjectiePometi.jpg`, `ReclamaHarmony.jpg`, `HarmonyCaCutie.jpg`, `SculptraAcidPoli.jpg`, `InjectieCap.jpg`, `InjectieCirculatie.jpg`, `PensulaCrema.jpg`, `AparatRosacee.jpg`, `AlunitaMana.jpg`
    *   Tehnologie: `HydraBeauty.jpg`, `AparatFata.jpg`, `Aparat.jpg`, `AparatClinica.jpg`

### 2. NAVIGATION & DROPDOWN ARCHITECTURE
*   **Sticky Navbar:** Must remain at the top on scroll. Includes `Logo.jpg` and a "Programează-te Online" CTA.
*   **Menu Items:** Acasă, Echipa, Servicii (Dropdown), Tarife Servicii, Contact.
*   **Servicii Dropdown:** Implement a shadcn dropdown menu containing exactly these 6 pages/routes:
    1. Dermatovenerologie
    2. Chirurgie Dermatologică
    3. Estetică Dermatologică
    4. Hydrafacial
    5. Epilare Definitivă
    6. Exion

### 3. SERVICE CARDS UI (CRITICAL CONSTRAINT)
*   Build Shadcn Cards for the sub-services. 
*   **STRICT RULE:** Do NOT include any author tags, metadata, or avatar icons (like "dev@dermica") on these cards. The cards must be clean: Image, Title, brief description, and a subtle "Află mai multe" link.
*   **Sub-services to generate cards for:**
    *   *Dermatovenerologie:* Consultații dermatovenerologie, Dermatoscopie, Chiuretare, Electrocauterizare.
    *   *Chirurgie:* Chirurgie dermatologică, Biopsia cutanată.
    *   *Estetică:* Dermapen 4, PRP (Terapia Vampir), Peeling Cosmelan, Mezoterapie, Peeling chimic, Toxina botulinică, Injectări cu acid hialuronic, Sculptra, HArmonyCa™, PB Serum, Fire bioresorbabile, Peeling PRX-T33.

### 4. TARIFE SERVICII PAGE (INTERACTIVE FLIPBOOK)
*   On the dedicated "Tarife Servicii" page, build an interactive digital flipbook component.
*   Use a library like `react-pageflip` (or custom `framer-motion` page-turn logic) so the user can click or drag to turn the pages like a real brochure.
*   Populate this flipbook with the 14 uploaded brochure/catalog images in sequential order (starting with the "Lista de prețuri" cover and ending with the contact back cover).
*   Ensure the flipbook is responsive (scales down gracefully on mobile devices, potentially switching to a vertical scroll or single-page view if the screen is too narrow for a 2-page spread).

### 5. GLOBAL PRE-FOOTER (MAP & CONTACT BLOCK)
Every single page (Home, Tarife, and all 6 pages in the Servicii dropdown) MUST end with a global Contact & Map block based on the layout of the old site:
*   **Left Column (Text):** 
    *   Heading: "Programează-te acum"
    *   Subtext: "Pentru programări, întrebări, vă rugăm să nu ezitați să ne contactați. Echipa noastră de experți este disponibilă să vă ofere răspunsuri."
    *   Adresa: Strada Superbă 10, Dumbrăvița 307160
    *   Orar: Luni-Vineri: 08:00 - 20:00
    *   Contact: Telefon: 0749 036 864, 0746 233 335 | Email: contact@clinicadarie.ro
*   **Right Column (Interactive Map):** 
    *   Embed a Google Maps `<iframe>` side-by-side with the text.
    *   URL for iframe: `https://maps.google.com/maps?q=Strada%20Superb%C4%83%2010,%20Dumbr%C4%83vi%C8%9Ba,%20Timi%C8%99&t=&z=15&ie=UTF8&iwloc=&output=embed`

### 6. REAL COPYWRITING CONTENT
For the specific dedicated pages, use the following real Romanian text instead of placeholders:

**Page: Hydrafacial**
"Cel mai avansat tratament de curățare și îngrijire al tenului. Hydrafacial este un tratament non-invaziv de curățare, hidratare și rejuvenare a tenului... combină simultan curățarea, exfolierea, extracția, hidratarea și protecția pielii. Pașii tratamentului: 1. Curățare și exfoliere (Vortex Cleansing). 2. Peeling blând. 3. Extracția (Vortex Extraction cu vacuum). 4. Hidratare (Vortex-Fusion cu antioxidanți și acid hialuronic). Beneficii: Tratează acneea, potrivit pentru ten sensibil (fără roșeață), nu necesită timp de recuperare, terapie relaxantă și personalizată."

**Page: Epilare Definitivă**
"Epilare definitivă Laser Elysion Pro. Piele catifelată fără durere, fără fire de păr crescute sub piele. Elysion Pro este cel mai eficient sistem ce utilizează laserul diodă. Funcționează prin fototermoliză selectivă, distrugând firele de păr fără a afecta țesuturile. Non-invaziv, fără durere (datorită sistemului de răcire Crystal freeze la 6 grade Celsius), 100% sigur. Se poate realiza pe orice zonă a corpului, 365 de zile pe an, inclusiv pe pielea bronzată. O ședință durează între 5 minute și 2 ore (full body). Sunt necesare în medie 8-10 ședințe la interval de 6-12 săptămâni."

**Page: Exion**
"EXION - Tehnologie patentată pentru față și corp. Prima tehnologie non-invazivă care stimulează producția naturală de acid hialuronic. Combină radiofrecvența (RF) și ultrasunetele. EXION FRACTIONAL RF: Microneedling RF cu inteligență artificială. Penetrare profundă, tratament rapid (o singură trecere), disconfort minim. Potrivit pentru față, gât, decolteu. EXION CORP: Reduce laxitatea cutanată, tratează vergeturile, cicatricile și celulita. Încălzire controlată pentru fermitate și contur corporal. Fără timp de recuperare."

### 7. FLOATING ACTION BUTTON (FAB)
Implement a fixed WhatsApp/Call button in the bottom right corner using `href="tel:+40749036864"`.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/44fdb664-716f-42f2-8f05-c1f4bb85e804).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
