"use client";

import {
  CheckCircle2Icon,
  CreditCard,
  QrCode,
  CookingPot,
  Receipt,
  Utensils,
} from "lucide-react";

import { AnimatedList } from "@/components/velora/animated-list";
import { cn } from "@/lib/utils";

const notifications = [
  {
    icon: CreditCard,
    tone: "bg-emerald-500/15 text-emerald-500",
    title: "Tahsilat Tamamlandı",
    description: "Masa 08 — ₺1.135,00 (Nakit + Kart)",
    time: "şimdi",
  },
  {
    icon: QrCode,
    tone: "bg-blue-500/15 text-blue-500",
    title: "Yeni QR Sipariş",
    description: "Masa 14 — 2x Soğuk Kahve, 1x San Sebastian",
    time: "2 dk önce",
  },
  {
    icon: CookingPot,
    tone: "bg-amber-500/15 text-amber-500",
    title: "Mutfak KDS Hazır",
    description: "Masa 04 — Izgara Köfte & Salata servise hazır",
    time: "4 dk önce",
  },
  {
    icon: Utensils,
    tone: "bg-primary/15 text-primary",
    title: "Masa Açıldı",
    description: "Bahçe Masa 12 — 4 Kişi (Garson: Can T.)",
    time: "9 dk önce",
  },
  {
    icon: Receipt,
    tone: "bg-violet-500/15 text-violet-500",
    title: "Z Raporu Denetimi",
    description: "Kasa mutabakatı: ₺0,00 fark ile kapatıldı",
    time: "15 dk önce",
  },
  {
    icon: CheckCircle2Icon,
    tone: "bg-cyan-500/15 text-cyan-500",
    title: "Stok Reçete Düşümü",
    description: "Dana Kıyma -4.5 kg, Brioche Ekmek -30 adet",
    time: "22 dk önce",
  },
];

export function ActivityList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[26rem] overflow-hidden [mask-image:linear-gradient(to_bottom,black_65%,transparent)] text-left",
        className
      )}
    >
      <AnimatedList delay={1800}>
        {notifications.map((n) => (
          <div
            key={n.title}
            className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur"
          >
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-xl",
                n.tone
              )}
            >
              <n.icon className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center justify-between gap-2 text-sm font-semibold text-foreground">
                {n.title}
                <span className="shrink-0 text-xs font-normal text-muted-foreground">
                  {n.time}
                </span>
              </p>
              <p className="truncate text-xs text-muted-foreground mt-0.5">
                {n.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedList>
    </div>
  );
}
