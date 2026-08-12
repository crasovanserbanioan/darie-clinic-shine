import { Link } from "@tanstack/react-router";
import { SiteImage } from "@/components/site-image";
import { CLINIC, SERVICE_ROUTES } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-3">
            <span className="size-11 shrink-0 overflow-hidden rounded-full bg-background">
              <SiteImage name="logo" alt="Logo" />
            </span>
            <span className="truncate font-display text-lg font-semibold">Clinica Darie</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Clinică de dermatologie, chirurgie dermatologică și estetică medicală în
            Dumbrăvița, Timiș.
          </p>
        </div>

        <nav className="min-w-0">
          <h3 className="text-sm tracking-widest text-primary-foreground/60 uppercase">
            Navigare
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Acasă
              </Link>
            </li>
            <li>
              <Link to="/echipa" className="hover:underline">
                Echipa
              </Link>
            </li>
            <li>
              <Link to="/tarife-servicii" className="hover:underline">
                Tarife Servicii
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="min-w-0">
          <h3 className="text-sm tracking-widest text-primary-foreground/60 uppercase">
            Servicii
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICE_ROUTES.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0">
          <h3 className="text-sm tracking-widest text-primary-foreground/60 uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li>{CLINIC.address}</li>
            <li>{CLINIC.schedule}</li>
            {CLINIC.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:+4${phone.replace(/\s/g, "")}`} className="hover:underline">
                  {phone}
                </a>
              </li>
            ))}
            <li className="truncate">
              <a href={`mailto:${CLINIC.email}`} className="hover:underline">
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 px-4 py-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} Clinica Darie. Toate drepturile rezervate.
            </p>
            <p className="mt-1 text-xs text-primary-foreground/50">
              Dermato Darie S.R.L. | CUI: 45834839 | Reg. Com.: J2022001240355 | Sediu: Str.
              Superba 10 Et. P Ap. 2 Cod 307160
            </p>
          </div>
          <a

            href="https://anpc.ro/ce-este-sal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/anpc-sal.png"
              alt="Solutionarea Alternativa a Litigiilor"
              className="h-12 w-auto max-w-full rounded-md bg-background"
              loading="lazy"
            />
          </a>
        </div>
      </div>

    </footer>
  );
}
