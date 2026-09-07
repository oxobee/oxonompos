"use client";

import React from "react";
import { 
  Tv, 
  Sparkles, 
  RefreshCw, 
  Clock, 
  Flame, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Sliders, 
  MonitorPlay 
} from "lucide-react";
import { DigitalMenuBoardSimulator } from "@/components/oxonom/digital-menu-board-simulator";

export function DigitalMenuBoardMockupTabs() {
  return (
    <div className="space-y-12">
      {/* Top Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
          <Tv className="size-3.5" />
          <span>Dijital Menü Panosu &amp; TV Yayıncılığı</span>
          <span className="ml-1.5 px-2 py-0.2 rounded-full text-[9px] font-black bg-amber-500 text-white uppercase">
            Çok Yakında
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Basılı Panolara Son: TV Ekranlarınızı Canlı &amp; Animasyonlu Satış Gücüne Dönüştürün
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          İşletmenizdeki televizyonlarda kampanya, menü ve reklam içeriklerini kolayca tasarlayıp yayınlayın. POS sisteminizle senkronize çalışan panolar, fiyat değişikliklerini TV ekranlarına anında yansıtır.
        </p>
      </div>

      {/* 4 Core Value Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pillar 1 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-rose-500/10">
              <Sliders className="size-4" />
            </span>
            <span>1. Panelden Kolay Tasarım</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Grafiker veya teknik bilgiye ihtiyaç duymadan hazır şablonlarla animasyonlu menü ekranınızı 2 dakikada hazırlayın.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-amber-500/10">
              <RefreshCw className="size-4" />
            </span>
            <span>2. Otomatik Fiyat &amp; Stok Senkronu</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Kasada ya da menüde fiyat değiştiğinde TV panosundaki fiyatlar da el sürmeden anında güncellenir.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-blue-500/10">
              <Flame className="size-4" />
            </span>
            <span>3. Canlı Kampanya &amp; Reklam Bandı</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Günün menüsü, mutlu saatler ve özel tatlı fırsatları ekranın altından akan animasyonlu şeritle müşterilere duyurulur.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-emerald-500/10">
              <Clock className="size-4" />
            </span>
            <span>4. Saate Göre Otomatik Menü</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Sabah kahvaltı seçenekleri, öğlen hızlı yemekler, akşam ise gurme akşam menüsü saate göre otomatik ekrana gelir.
          </p>
        </div>
      </div>

      {/* Simulator Component */}
      <div className="pt-2">
        <DigitalMenuBoardSimulator />
      </div>

      {/* Trust & Engagement Strip */}
      <div className="p-5 rounded-2xl bg-linear-to-r from-amber-500/5 via-rose-500/5 to-primary/5 border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
            <Tv className="size-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-foreground">
              Herhangi Bir Smart TV veya HDMI Stick ile Tak-Çalıştır Uyumlu
            </div>
            <div className="text-[11px] text-muted-foreground">
              Ekstra pahalı sunucu veya donanım gerektirmez; Android TV, Apple TV veya tarayıcısı olan tüm ekranlarla saniyeler içinde bağlanır.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 bg-card px-3 py-1.5 rounded-xl border border-border/60 shrink-0">
          <TrendingUp className="size-4" />
          <span>+28% Ekstra Teşhir Satışı</span>
        </div>
      </div>
    </div>
  );
}
