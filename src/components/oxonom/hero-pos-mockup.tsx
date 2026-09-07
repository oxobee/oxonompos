"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { BorderBeam } from "@/components/velora/border-beam";

export function HeroPosMockup({ className }: { className?: string }) {
  return (
    <div className={`relative mx-auto max-w-5xl ${className}`}>
      {/* Outer Glow */}
      <div
        aria-hidden
        className="absolute -inset-4 sm:-inset-8 rounded-[2.5rem] bg-gradient-to-r from-primary/30 via-emerald-500/20 to-primary/30 opacity-30 blur-3xl pointer-events-none"
      />

      <BrowserMockup url="app.oxonompos.com" className="relative shadow-2xl border-border/70 overflow-hidden">
        <BorderBeam size={160} duration={12} colorFrom="#3b82f6" colorTo="#10b981" />

        <div className="relative bg-background overflow-hidden">
          {/* Top Quick Status Header Bar */}
          <div className="hidden sm:flex items-center justify-between px-4 py-2 bg-muted/40 border-b border-border/50 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 font-semibold text-foreground">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Şube: Avcılar</span>
              </div>
              <span className="text-border">|</span>
              <span className="text-[11px]">7 Aktif Masa (%47 Doluluk) • 8 Açık Adisyon</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <CheckCircle2 className="size-3" />
                İnternet & Sunucu Bağlı
              </span>
              <span className="text-border">|</span>
              <span className="text-[11px]">app.oxonompos.com</span>
            </div>
          </div>

          {/* Real POS Screenshot Interface Container with rounded corners */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.6] bg-card p-1 sm:p-2">
            <div className="relative size-full overflow-hidden rounded-xl border border-border/40 shadow-inner">
              <Image
                src="/images/oxonom-dashboard-real.png"
                alt="Oxonom POS - İşletme Yönetim ve Operasyon Paneli Arayüzü"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                className="object-contain object-top rounded-xl"
              />
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
