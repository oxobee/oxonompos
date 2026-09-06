import { AuroraBackground } from "@/components/velora/aurora-background";
import { GridPattern } from "@/components/velora/grid-pattern";
import { Sparkles, Utensils } from "lucide-react";

export function AuthVisual() {
  return (
    <div className="relative hidden overflow-hidden lg:block">
      <AuroraBackground intensity="medium" />
      <GridPattern
        width={48}
        height={48}
        className="fill-transparent stroke-border/40"
      />
      <div className="relative flex h-full flex-col justify-end p-12 text-left">
        <figure className="max-w-md rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur shadow-xl">
          <blockquote className="text-sm leading-relaxed text-card-foreground">
            “Oxonom POS ile sipariş, mutfak ve stok süreçlerimizi tek platformda topladık. Masadaki hesap ile akşamki Z raporu kuruşu kuruşuna tutuyor.”
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            <div className="size-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
              <Utensils className="size-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Salon &amp; Mutfak Operasyonu</p>
              <p className="text-xs text-muted-foreground">
                Oxonom POS Restoran Deneyimi
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
