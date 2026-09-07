"use client";

import React from "react";
import { 
  Sparkles, 
  Wand2, 
  Utensils, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Camera, 
  Coins 
} from "lucide-react";
import { AiImageGenSimulator } from "@/components/oxonom/ai-image-gen-simulator";

export function AiImageGenMockupTabs() {
  return (
    <div className="space-y-12">
      {/* Top Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
          <Wand2 className="size-3.5" />
          <span>Oxonom AI Yemek Görseli Üretici</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Fotoğrafçı Olmadan Menünüzü İştah Kabartan Görsellerle Donatın
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Stüdyo kurmadan veya çekim günleri organize etmeden, sadece yemeğin adını ve malzemelerini yazarak saniyeler içinde fotogerçekçi, 1:1 kare stüdyo fotoğrafları üretin ve tek tıkla menünüze kaydedin.
        </p>
      </div>

      {/* 4 Core Value Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pillar 1 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-rose-500/10">
              <Utensils className="size-4" />
            </span>
            <span>1. Reçetenize Birebir Sadık</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Köz biber, süzme yoğurt, çıtır pide ve tereyağlı sos gibi malzemeleri tarifinize tam uygun şekilde fotogerçekçi modeller.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-amber-500/10">
              <Camera className="size-4" />
            </span>
            <span>2. 6 Farklı Çekim Stili</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Beyaz stüdyo fonu, rustik ahşap sıcaklığı, Michelin minimalizmi veya koyu dramatik gurme; mekanınıza uygun konsepti seçin.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-blue-500/10">
              <Coins className="size-4" />
            </span>
            <span>3. Çekim Masrafını Sıfırlayın</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Her yeni menü güncellemesinde binlerce liralık fotoğrafçı ve ışıkçı çağırmak yerine işlem başına 10-20 kredi ile saniyeler içinde üretin.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-emerald-500/10">
              <CheckCircle2 className="size-4" />
            </span>
            <span>4. Tek Tıkla Menüye Aktarma</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Üretilen 1:1 kare görsel tek tıkla QR menüye, garson el terminaline ve kasa POS arayüzüne otomatik olarak bağlanır.
          </p>
        </div>
      </div>

      {/* Simulator Component */}
      <div className="pt-2">
        <AiImageGenSimulator />
      </div>

      {/* Trust & Engagement Strip */}
      <div className="p-5 rounded-2xl bg-linear-to-r from-rose-500/5 via-amber-500/5 to-primary/5 border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-foreground">
              Görseli Olan Menü Kalemlerinde %35 Daha Yüksek Satış
            </div>
            <div className="text-[11px] text-muted-foreground">
              QR menüde fotoğrafı bulunan lezzetler sipariş oranını katlar; yapay zeka sayesinde tüm menünüzü eksiksiz fotoğraflarla donatabilirsiniz.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 bg-card px-3 py-1.5 rounded-xl border border-border/60 shrink-0">
          <TrendingUp className="size-4" />
          <span>+35% Sipariş Oranı</span>
        </div>
      </div>
    </div>
  );
}
