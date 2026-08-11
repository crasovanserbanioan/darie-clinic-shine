import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SiteImage } from "@/components/site-image";
import type { SiteImageKey } from "@/lib/site-images";

export type SubService = {
  title: string;
  description: string;
  image: SiteImageKey;
};

export function ServiceCard({ title, description, image }: SubService) {
  return (
    <Card className="group overflow-hidden border-border/70 py-0 shadow-soft transition-shadow hover:shadow-lift">
      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
        <SiteImage
          name={image}
          alt={title}
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Află mai multe
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </CardContent>
    </Card>
  );
}

export function ServiceCardGrid({ items }: { items: SubService[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ServiceCard key={item.title} {...item} />
      ))}
    </div>
  );
}
