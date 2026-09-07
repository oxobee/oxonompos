"use client";

import React from "react";
import Image from "next/image";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { BorderBeam } from "@/components/velora/border-beam";

export function KDSDemo({ className }: { className?: string }) {
  return (
    <div className={`relative mx-auto max-w-5xl space-y-6 ${className || ""}`}>
      {/* Outer Glow */}
      <div
        aria-hidden
        className="absolute -inset-4 sm:-inset-8 rounded-[2.5rem] bg-gradient-to-r from-emerald-500/20 via-primary/20 to-amber-500/20 opacity-35 blur-3xl pointer-events-none"
      />

      {/* Main KDS Mockup Frame */}
      <BrowserMockup
        url="kds.oxonompos.com/kitchen"
        className="relative shadow-2xl border-border/70 overflow-hidden bg-card/90"
      >
        <BorderBeam size={160} duration={12} colorFrom="#10b981" colorTo="#3b82f6" />

        <div className="relative w-full aspect-[16/10] bg-background select-none">
          <Image
            src="/images/kds-kitchen-real.png"
            alt="Oxonom POS - Dijital Mutfak Ekranı (KDS) İstasyonu Arayüzü"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            className="object-contain object-top"
          />
        </div>
      </BrowserMockup>

      {/* 3 Operational Highlights below Mockup */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur space-y-1.5 text-left">
          <div className="flex items-center gap-2 font-bold text-sm text-foreground">
            <span className="size-2 rounded-full bg-amber-500 shrink-0" />
            <span>3 Aşamalı Hazırlık Takibi</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Bekliyor, Hazırlanıyor ve Servise Hazır adımları dokunmatik ekrandan tek tıkla güncellenir.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur space-y-1.5 text-left">
          <div className="flex items-center gap-2 font-bold text-sm text-foreground">
            <span className="size-2 rounded-full bg-rose-500 shrink-0 animate-pulse" />
            <span>Gecikme &amp; Sesli Alarm</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Hedef süreyi aşan masalar kırmızı renkle uyarılır ve mutfak personeline sesli bildirim gider.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur space-y-1.5 text-left">
          <div className="flex items-center gap-2 font-bold text-sm text-foreground">
            <span className="size-2 rounded-full bg-emerald-500 shrink-0" />
            <span>Garson &amp; Kasa Senkronu</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Mutfakta hazır olarak işaretlenen ürünler garsonun el terminaline ve kasaya gecikmesiz düşer.
          </p>
        </div>
      </div>
    </div>
  );
}
