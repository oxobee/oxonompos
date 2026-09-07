"use client";

import React from "react";
import { 
  Sparkles, 
  Wand2, 
  Camera, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  SunMedium, 
  Coins 
} from "lucide-react";
import { FoodPhotoEnhanceSimulator } from "@/components/oxonom/food-photo-enhance-simulator";

export function FoodPhotoEnhanceMockupTabs() {
  return (
    <div className="space-y-12">
      {/* Top Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
          <Wand2 className="size-3.5" />
          <span>Oxonom AI Yapay Zeka Stüdyosu</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Telefonla Çekin, Michelin Yıldızı Kalitesinde Menüye Ekleyin
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Pahalı fotoğraf stüdyolarına veya saatler süren photoshop montajlarına veda edin. Mutfakta akıllı telefonunuzla çektiğiniz fotoğrafları yemeğin kimliğini bozmadan stüdyo kalitesine yükseltin.
        </p>
      </div>

      {/* 4 Core Value Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pillar 1 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-rose-500/10">
              <ShieldCheck className="size-4" />
            </span>
            <span>1. Malzemeleri &amp; Özgünlüğü Korur</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Yapay zeka hayali yemek üretmez; köftenin pişme dokusunu, peynirin erimesini ve taze domates dilimini birebir muhafaza eder.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-amber-500/10">
              <Layers className="size-4" />
            </span>
            <span>2. Arka Planı Kusursuz Temizler</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Masanın üzerindeki bardak, peçetelik veya dağınık mutfak tezgahı silinir; temiz, profesyonel stüdyo beyazına dönüştürülür.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-blue-500/10">
              <SunMedium className="size-4" />
            </span>
            <span>3. Stüdyo Işığı &amp; Canlı Doku</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Karanlık florasan aydınlatması yerini yumuşak reflektör ışığına bırakır; susamların ışıltısı ve sos parlaklığı iştah kabartır.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-emerald-500/10">
              <Coins className="size-4" />
            </span>
            <span>4. Kredi Bazlı Hızlı Üretim</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Binlerce liralık çekim maliyeti yerine işlem başına 20-40 AI kredisi ile saniyeler içinde menünüze entegre edin.
          </p>
        </div>
      </div>

      {/* Simulator Component */}
      <div className="pt-2">
        <FoodPhotoEnhanceSimulator />
      </div>

      {/* Trust & Conversion Strip */}
      <div className="p-5 rounded-2xl bg-linear-to-r from-rose-500/5 via-amber-500/5 to-primary/5 border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0">
            <Sparkles className="size-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-foreground">
              İştah Açıcı Görsellerle %38 Daha Fazla Sipariş
            </div>
            <div className="text-[11px] text-muted-foreground">
              Restoran misafirleri görseli profesyonel olan yemekleri 3 kat daha hızlı tercih eder; sepet ortalaması gözle görülür şekilde artar.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 bg-card px-3 py-1.5 rounded-xl border border-border/60 shrink-0">
          <TrendingUp className="size-4" />
          <span>+38% Satış Artışı</span>
        </div>
      </div>
    </div>
  );
}
