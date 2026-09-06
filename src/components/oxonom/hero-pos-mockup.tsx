"use client";

import React from "react";
import Image from "next/image";
import {
  Clock,
  QrCode,
  CheckCircle2,
} from "lucide-react";
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
                <span>Kasa: Uğur Burger</span>
              </div>
              <span className="text-border">|</span>
              <span className="text-[11px]">Fiş 01 (10 Kalem) • ₺2.330,00</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <CheckCircle2 className="size-3" />
                Bulut Senkronize
              </span>
              <span className="text-border">|</span>
              <span className="text-[11px]">app.oxonompos.com</span>
            </div>
          </div>

          {/* Real POS Screenshot Interface Container */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.6] bg-card">
            <Image
              src="/images/pos-screenshot-real.png"
              alt="Oxonom POS - Gerçek Zamanlı Satış ve Tahsilat Terminali Arayüzü"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
              className="object-contain object-top"
            />
          </div>
        </div>
      </BrowserMockup>

      {/* Floating KDS Badge (Top Right) */}
      <div className="absolute -top-5 -right-2 sm:-right-6 z-20 hidden sm:flex items-center gap-3 p-3 rounded-xl border border-border/80 bg-background/95 backdrop-blur-md shadow-2xl text-left animate-in fade-in slide-in-from-top-4">
        <div className="size-9 rounded-lg bg-amber-500/15 text-amber-500 flex items-center justify-center">
          <Clock className="size-4 animate-spin [animation-duration:8s]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs">Mutfak Ekranı (KDS)</span>
            <span className="text-[9px] bg-amber-500/20 text-amber-500 px-1.5 py-0.2 rounded font-semibold">
              Hazırlanıyor
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground">Masa 08: Hamburger & Pizza mutfağa iletildi (2 dk)</p>
        </div>
      </div>

      {/* Floating QR Self Order Badge (Bottom Left) */}
      <div className="absolute -bottom-5 -left-2 sm:-left-6 z-20 hidden sm:flex items-center gap-3 p-3 rounded-xl border border-border/80 bg-background/95 backdrop-blur-md shadow-2xl text-left animate-in fade-in slide-in-from-bottom-4">
        <div className="size-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
          <QrCode className="size-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs">QR Masadan Sipariş</span>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-500 px-1.5 py-0.2 rounded font-semibold">
              Aktif
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground">Masa 14: ₺2.330 tutar hesaba anlık yansıdı</p>
        </div>
      </div>
    </div>
  );
}
