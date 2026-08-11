import type { ReactNode } from "react";
import { ContactMap } from "@/components/contact-map";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="bg-hero-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <p className="text-xs tracking-[0.22em] text-primary-foreground/70 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ContactMap />
    </>
  );
}

export function Section({
  title,
  description,
  children,
  tone = "default",
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section className={tone === "muted" ? "bg-secondary/60" : undefined}>
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        {title && <h2 className="text-3xl sm:text-4xl">{title}</h2>}
        {description && (
          <p className="mt-4 max-w-3xl text-muted-foreground">{description}</p>
        )}
        <div className={title || description ? "mt-10" : undefined}>{children}</div>
      </div>
    </section>
  );
}
