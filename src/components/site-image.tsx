import { cn } from "@/lib/utils";
import { siteImages, type SiteImageKey } from "@/lib/site-images";
import { Sparkles } from "lucide-react";

type SiteImageProps = {
  name: SiteImageKey;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
};

/**
 * Afișează fotografia clinicii dacă a fost încărcată, altfel un placeholder
 * elegant, în stilul brandului (imaginile reale se adaugă în `src/lib/site-images.ts`).
 */
export function SiteImage({
  name,
  alt,
  className,
  imgClassName,
  loading = "lazy",
}: SiteImageProps) {
  const src = siteImages[name];

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn("h-full w-full object-cover", imgClassName, className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2 bg-soft-gradient p-6 text-center",
        className,
      )}
    >
      <Sparkles className="size-5 text-primary/60" aria-hidden />
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {alt}
      </span>
    </div>
  );
}
