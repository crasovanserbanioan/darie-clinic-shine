import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type FlipPage = { src: string; alt: string };

export function Flipbook({ pages }: { pages: FlipPage[] }) {
  const sheetCount = Math.ceil(pages.length / 2);
  const [flipped, setFlipped] = useState(0); // câte foi au fost întoarse
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isNarrow, setIsNarrow] = useState(true);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const apply = () => setIsNarrow(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const next = () =>
    isNarrow
      ? setMobileIndex((i) => Math.min(i + 1, pages.length - 1))
      : setFlipped((f) => Math.min(f + 1, sheetCount));
  const prev = () =>
    isNarrow
      ? setMobileIndex((i) => Math.max(i - 1, 0))
      : setFlipped((f) => Math.max(f - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (isNarrow) {
    const page = pages[mobileIndex];
    return (
      <div className="mx-auto w-full max-w-md">
        <div
          className="overflow-hidden rounded-xl border border-border bg-card shadow-lift"
          onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStart.current;
            if (dx < -40) next();
            if (dx > 40) prev();
            touchStart.current = null;
          }}
        >
          <img src={page.src} alt={page.alt} className="w-full" />
        </div>
        <FlipControls
          onPrev={prev}
          onNext={next}
          disablePrev={mobileIndex === 0}
          disableNext={mobileIndex === pages.length - 1}
          label={`Pagina ${mobileIndex + 1} / ${pages.length}`}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flip-perspective mx-auto w-full max-w-5xl">
        <div className="relative mx-auto aspect-[1.42/1] w-full">
          {/* jumătatea stângă (paginile deja întoarse) */}
          <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden rounded-l-xl bg-muted shadow-soft" />
          <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden rounded-r-xl bg-muted shadow-soft" />

          {Array.from({ length: sheetCount }).map((_, i) => {
            const isFlipped = i < flipped;
            const front = pages[i * 2];
            const back = pages[i * 2 + 1];
            return (
              <div
                key={i}
                onClick={() => (isFlipped ? setFlipped(i) : setFlipped(i + 1))}
                className="absolute top-0 right-0 h-full w-1/2 cursor-pointer transition-transform duration-700 ease-in-out"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "left center",
                  transform: `rotateY(${isFlipped ? -180 : 0}deg)`,
                  zIndex: isFlipped ? i : sheetCount - i,
                }}
              >
                <div
                  className="absolute inset-0 overflow-hidden rounded-r-xl bg-card shadow-soft"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {front && (
                    <img src={front.src} alt={front.alt} className="h-full w-full object-cover" />
                  )}
                </div>
                <div
                  className="absolute inset-0 overflow-hidden rounded-l-xl bg-card shadow-soft"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  {back && (
                    <img src={back.src} alt={back.alt} className="h-full w-full object-cover" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FlipControls
        onPrev={prev}
        onNext={next}
        disablePrev={flipped === 0}
        disableNext={flipped === sheetCount}
        label={`Foaia ${Math.min(flipped + 1, sheetCount)} / ${sheetCount}`}
      />
    </div>
  );
}

function FlipControls({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
  label,
}: {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
  label: string;
}) {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <Button variant="outline" size="icon" onClick={onPrev} disabled={disablePrev} aria-label="Pagina anterioară">
        <ChevronLeft className="size-4" />
      </Button>
      <span className="text-sm text-muted-foreground">{label}</span>
      <Button variant="outline" size="icon" onClick={onNext} disabled={disableNext} aria-label="Pagina următoare">
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
