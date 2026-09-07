"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Printer, 
  RefreshCw, 
  FileCheck2, 
  Scissors, 
  Layers, 
  Check, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  Sliders, 
  Send,
  Download,
  Flame,
  FileText
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { BrochureWizardSimulator } from "@/components/oxonom/brochure-wizard-simulator";

export function BrochureWizardMockupTabs() {
  const [activeTab, setActiveTab] = useState<"screen" | "simulator">("screen");

  return (
    <div className="space-y-10">
      {/* Top Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
          <Printer className="size-3.5" />
          <span>Baskı &amp; Dağıtım Çözümü</span>
          <span className="ml-1.5 px-2 py-0.2 rounded-full text-[9px] font-black bg-amber-500 text-white uppercase">
            Çok Yakında
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Paket Servis &amp; Cadde Dağıtımı Broşürü Hazırlamak Artık Zahmetsiz
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Broşür Sihirbazı, POS sisteminizdeki yemek fotoğraflarını ve fiyatları otomatik çekerek baskıya hazır A5 broşür, katlamalı menü ve kapı askısı tasarımları oluşturur.
        </p>
      </div>

      {/* 4 Core Value Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-blue-500/10">
              <RefreshCw className="size-4" />
            </span>
            <span>1. Fotoğrafları &amp; Fiyatları Çeker</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Mevcut POS menünüzdeki ürünleri, görselleri ve güncel fiyatları tek tıkla otomatik olarak aktarır.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-indigo-500/10">
              <Layers className="size-4" />
            </span>
            <span>2. Şablona Otomatik Yerleştirir</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            A5 el ilanı, 3 kırımlı katlamalı menü ve kapı askılığı şablonlarına düzenli biçimde oturtur.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-emerald-500/10">
              <Scissors className="size-4" />
            </span>
            <span>3. +3 mm Kesim &amp; Taşma Payı</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Matbaaların şart koştuğu kesim çizgileri ve taşma payı (+3mm bleed) otomatik olarak hazır gelir.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-rose-500/10">
              <Send className="size-4" />
            </span>
            <span>4. Tek Tıkla Matbaaya Gönder</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            300 DPI CMYK baskıya hazır PDF çıktısı üretir; grafiker beklemeden doğrudan basıma gönderebilirsiniz.
          </p>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-muted/60 border border-border/70 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab("screen")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === "screen"
                ? "bg-card text-foreground shadow-sm ring-1 ring-border/80"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Eye className="size-4 text-blue-500" />
            <span>Broşür Sihirbazı Ekran Deneyimi</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("simulator")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === "simulator"
                ? "bg-card text-foreground shadow-sm ring-1 ring-border/80"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sliders className="size-4 text-indigo-500" />
            <span>Canlı Baskı Stüdyosu Simülatörü</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: Broşür Sihirbazı Ekran Deneyimi (User's Official Graphic in Realistic SaaS Frame) */}
      {activeTab === "screen" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="w-full max-w-5xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-border/70">
            <BrowserMockup url="app.oxonompos.com/marketing/brochure-wizard/workflow">
              <div className="relative w-full aspect-[16/9] bg-neutral-950">
                <Image
                  src="/images/brosur-sihirbazi-ekran-deneyimi.jpg"
                  alt="Broşür Sihirbazı Ekran Deneyimi - Paket servis ve cadde dağıtımı broşürü hazırlamak artık zahmetsiz"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </BrowserMockup>
          </div>

          {/* Key Workflow Breakdown Cards corresponding to the Graphic */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="p-4 rounded-xl bg-card border border-border/70 shadow-2xs space-y-1.5">
              <div className="text-xs font-black text-foreground flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-blue-500" />
                <span>1. POS Menünüz &amp; Fiyatlar</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Hamburger, Pizza Margherita, Sezar Salata, Latte, Ayran ve Cheesecake gibi lezzetler sistemdeki hazır menünüzden anında aktarılır.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/70 shadow-2xs space-y-1.5">
              <div className="text-xs font-black text-foreground flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-indigo-500" />
                <span>2. Akıllı Şablon Sihirbazı</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                A5 Broşür, 3 Kırımlı Menü veya Kapı Askısı seçeneklerinden dilediğinizi işaretleyin; yapay zeka görselleri ve tipografiyi otomatik dizer.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/70 shadow-2xs space-y-1.5">
              <div className="text-xs font-black text-foreground flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span>3. Matbaaya Hazır (+3mm Bleed)</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Taşma ve kesim payı otomatik hesaplanmış 300 DPI CMYK dosya ile tek tıkla matbaaya gönderin veya dijital dağıtıma başlayın.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Interactive Simulator */}
      {activeTab === "simulator" && (
        <div className="animate-in fade-in duration-200">
          <BrochureWizardSimulator />
        </div>
      )}

      {/* Bottom Features Strip */}
      <div className="p-5 rounded-2xl bg-linear-to-r from-blue-500/5 via-indigo-500/5 to-primary/5 border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="size-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-foreground">
              Tek Tıkla Matbaaya Hazır CMYK Dosyası
            </div>
            <div className="text-xs text-muted-foreground">
              Kesim çizgileri, QR sipariş alanı ve paket servis hattı otomatik yerleştirilir.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-muted border border-border/60 text-muted-foreground">
            300 DPI Baskı Kalitesi
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
            Çok Yakında
          </span>
        </div>
      </div>
    </div>
  );
}
