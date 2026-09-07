"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Wand2, 
  Layers, 
  Check, 
  ArrowRight, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  RefreshCw, 
  SlidersHorizontal,
  Eye,
  X,
  Upload,
  Coins,
  ShieldCheck,
  Maximize2
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { CompareSlider } from "@/components/velora/compare-slider";

export type QualityTier = "standard" | "professional" | "ultrahd";

export interface FoodPhotoEnhanceSimulatorProps {
  className?: string;
  showOriginalToggle?: boolean;
}

export function FoodPhotoEnhanceSimulator({
  className = "",
  showOriginalToggle = true,
}: FoodPhotoEnhanceSimulatorProps) {
  const [viewMode, setViewMode] = useState<"interactive" | "original">("interactive");
  const [originalTab, setOriginalTab] = useState<number>(0);
  
  // Interactive Panel States
  const [dishName, setDishName] = useState<string>("Gurme Burger Menü");
  const [quality, setQuality] = useState<QualityTier>("professional");
  const [balance, setBalance] = useState<number>(910);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processingStep, setProcessingStep] = useState<string>("");
  const [compareMode, setCompareMode] = useState<"slider" | "before" | "after">("slider");
  const [savedToMenu, setSavedToMenu] = useState<boolean>(false);
  const [downloadFeedback, setDownloadFeedback] = useState<boolean>(false);

  const qualityCosts: Record<QualityTier, { cost: number; title: string; desc: string }> = {
    standard: { cost: 20, title: "Standart", desc: "Canlı Işık & Doku" },
    professional: { cost: 40, title: "Profesyonel", desc: "Stüdyo Kalitesi" },
    ultrahd: { cost: 60, title: "Ultra HD", desc: "Maksimum Çözünürlük" },
  };

  const originalScreens = [
    {
      id: "panel",
      title: "1. AI Stüdyo Panel Arayüzü",
      desc: "Kredi bakiyesi, kalite seçimi ve görsel yükleme kontrol paneli",
      src: "/images/food-enhance-studio-ui.png",
      aspect: "aspect-[1024/490]"
    },
    {
      id: "before",
      title: "2. Önce: Telefon Çekimi",
      desc: "Masa ışığı, arkada bardak/sepet ve amatör restoran ortamı",
      src: "/images/food-enhance-before.jpg",
      aspect: "aspect-[4/3]"
    },
    {
      id: "after",
      title: "3. Sonra: Michelin Stüdyo Çekimi",
      desc: "Kusursuz beyaz arka plan, iştah açıcı doku ve stüdyo aydınlatması",
      src: "/images/food-enhance-after.jpg",
      aspect: "aspect-[4/3]"
    },
  ];

  const handleEnhance = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setProcessingStep("Yemek katmanları ve malzemeler taranıyor...");

    setTimeout(() => {
      setProcessingStep("Arka plan temizleniyor & stüdyo reflektör ışığı modelleniyor...");
    }, 900);

    setTimeout(() => {
      setProcessingStep("Et dokusu, peynir erimesi ve yeşillik tazeliği canlandırılıyor...");
    }, 1800);

    setTimeout(() => {
      setIsProcessing(false);
      setProcessingStep("");
      const cost = qualityCosts[quality].cost;
      setBalance((prev) => Math.max(0, prev - cost));
      setCompareMode("slider");
    }, 2600);
  };

  const handleSaveToMenu = () => {
    setSavedToMenu(true);
    setTimeout(() => setSavedToMenu(false), 3000);
  };

  const handleDownload = () => {
    setDownloadFeedback(true);
    setTimeout(() => setDownloadFeedback(false), 2500);
  };

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* Top View Mode Switcher */}
      {showOriginalToggle && (
        <div className="flex items-center gap-1.5 p-1 bg-muted/80 backdrop-blur-sm border border-border/80 rounded-full mb-4 shadow-xs text-xs font-semibold">
          <button
            type="button"
            onClick={() => setViewMode("interactive")}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              viewMode === "interactive"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className="size-3.5" />
            <span>İnteraktif AI Stüdyosu (Önce / Sonra)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("original")}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              viewMode === "original"
                ? "bg-background text-foreground shadow-xs border border-border/60"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Eye className="size-3.5" />
            <span>Orijinal Ekran Görüntüleri</span>
          </button>
        </div>
      )}

      {/* Main SaaS Browser Mockup */}
      <div className="w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden border border-border/60">
        <BrowserMockup url="app.oxonompos.com/ai-studio/photo-enhance">
          {viewMode === "interactive" ? (
            /* VIEW MODE A: INTERACTIVE SAAS STUDIO */
            <div className="bg-background text-foreground min-h-[580px] p-4 sm:p-6 text-left flex flex-col justify-between">
              
              {/* Studio Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      OX
                    </div>
                    <span className="text-xs font-black tracking-wider text-foreground">OXONOM</span>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-muted text-muted-foreground border border-border/60 flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>Yapay Zeka Stüdyosu</span>
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 text-xs font-black shadow-2xs">
                    <Sparkles className="size-3.5 text-amber-500" />
                    <span>Bakiye: {balance} Kredi</span>
                  </div>
                  <button 
                    type="button" 
                    className="size-7 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center transition-colors shadow-2xs"
                    title="Kapat"
                  >
                    <X className="size-3.5" />
                  </button>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-5 space-y-1">
                <h4 className="text-base sm:text-lg font-black text-foreground flex items-center gap-2">
                  <span>Fotoğrafı Profesyonelleştir</span>
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
                  Amatör telefon fotoğraflarınızı yemeğin kimliğini ve malzemelerini bozmadan Michelin yıldızı kalitesinde food photography&apos;e dönüştürün.
                </p>
              </div>

              {/* Main 2-Column Split: Form (Left) & Compare Viewer (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* LEFT: Control Form (5 Cols) */}
                <div className="lg:col-span-5 min-w-0 space-y-4 p-4 rounded-2xl bg-card border border-border/70 shadow-xs">
                  
                  {/* Photo Upload Area */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-foreground">
                      <div className="flex items-center gap-1.5">
                        <span className="text-rose-600">📷</span>
                        <span>Mevcut Yemek Fotoğrafınız</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                        Yüklendi
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      Yemeğin içeriği korunur; ışık, derinlik ve stüdyo sunumu iyileştirilir.
                    </p>

                    <div className="p-3 rounded-xl border border-dashed border-rose-300 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/10 flex items-center gap-3">
                      <div className="relative size-14 rounded-lg overflow-hidden shrink-0 border border-border/60 shadow-xs">
                        <Image
                          src="/images/food-enhance-before.jpg"
                          alt="Yüklü burger"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <div className="text-xs font-bold text-foreground truncate">burger_masa_cekimi.jpg</div>
                        <div className="text-[10px] text-muted-foreground">1024 × 768 • Amatör Çekim</div>
                        <button type="button" className="text-[10px] text-rose-600 font-bold hover:underline mt-0.5">
                          Fotoğrafı Değiştir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Dish Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground block">
                      Yemek Adı <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={dishName}
                      onChange={(e) => setDishName(e.target.value)}
                      placeholder="Örn: Karışık Izgara Tabağı, Levrek Izgara"
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border/70 text-xs font-semibold text-foreground focus:outline-hidden focus:ring-1 focus:ring-rose-500"
                    />
                  </div>

                  {/* Quality Level Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground block">
                      Kalite Seviyesi
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                      {(["standard", "professional", "ultrahd"] as QualityTier[]).map((tier) => {
                        const info = qualityCosts[tier];
                        const isSelected = quality === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setQuality(tier)}
                            className={`p-2 sm:p-2.5 rounded-xl border text-left transition-all min-w-0 overflow-hidden ${
                              isSelected
                                ? "border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 shadow-xs ring-1 ring-rose-500"
                                : "border-border/70 bg-background hover:bg-muted/40"
                            }`}
                          >
                            <div className="text-[11px] sm:text-xs font-black text-foreground truncate">{info.title}</div>
                            <div className="text-[10px] font-bold text-rose-600 mt-0.5 whitespace-nowrap">{info.cost} Kredi</div>
                            <div className="text-[9px] text-muted-foreground leading-tight mt-0.5 truncate hidden sm:block">
                              {info.desc}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Cost & Balance Strip */}
                  <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[11px] text-muted-foreground block">İşlem Maliyeti:</span>
                      <span className="font-black text-foreground text-xs">
                        {qualityCosts[quality].cost} AI Kredisi
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-muted-foreground block">Kalan Krediniz:</span>
                      <span className="font-black text-emerald-600 dark:text-emerald-400 text-xs">
                        {balance - qualityCosts[quality].cost} Kredi
                      </span>
                    </div>
                  </div>

                  {/* Trigger Enhance Button */}
                  <button
                    type="button"
                    onClick={handleEnhance}
                    disabled={isProcessing}
                    className={`w-full py-3 rounded-xl font-black text-xs transition-all shadow-md flex items-center justify-center gap-2 ${
                      isProcessing
                        ? "bg-muted text-muted-foreground cursor-wait"
                        : "bg-rose-600 hover:bg-rose-700 text-white hover:scale-101 active:scale-99"
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="size-4 animate-spin" />
                        <span>İşleniyor...</span>
                      </>
                    ) : (
                      <>
                        <Wand2 className="size-4" />
                        <span>{qualityCosts[quality].cost} Kredi ile İyileştir</span>
                      </>
                    )}
                  </button>

                  {/* Processing Status Feedback */}
                  {isProcessing && (
                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 text-amber-800 dark:text-amber-200 text-[11px] font-medium flex items-center gap-2 animate-in fade-in duration-200">
                      <span className="size-2 rounded-full bg-amber-500 animate-ping shrink-0" />
                      <span className="truncate">{processingStep}</span>
                    </div>
                  )}
                </div>

                {/* RIGHT: Interactive Compare View (7 Cols) */}
                <div className="lg:col-span-7 space-y-3 p-4 rounded-2xl bg-card border border-border/70 shadow-xs flex flex-col">
                  
                  {/* Top Tabs: Slider vs Before vs After */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border/60 text-xs font-semibold">
                      <button
                        type="button"
                        onClick={() => setCompareMode("slider")}
                        className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                          compareMode === "slider"
                            ? "bg-background text-foreground shadow-2xs font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <SlidersHorizontal className="size-3" />
                        <span>Sürgülü Karşılaştırma</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCompareMode("before")}
                        className={`px-3 py-1 rounded-lg transition-all ${
                          compareMode === "before"
                            ? "bg-background text-foreground shadow-2xs font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span>Önce (Amatör)</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCompareMode("after")}
                        className={`px-3 py-1 rounded-lg transition-all ${
                          compareMode === "after"
                            ? "bg-background text-foreground shadow-2xs font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span>Sonra (Michelin AI)</span>
                      </button>
                    </div>

                    <span className="text-[11px] font-bold text-muted-foreground flex items-center gap-1">
                      <ShieldCheck className="size-3.5 text-emerald-500" />
                      <span>Malzemeler &amp; Kimlik Korundu</span>
                    </span>
                  </div>

                  {/* Toast Alerts for Save/Download */}
                  {savedToMenu && (
                    <div className="p-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md flex items-center justify-between animate-in fade-in duration-150">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4" />
                        <span>{dishName} görseli menüye aktarıldı ve yayına alındı!</span>
                      </div>
                      <Check className="size-3.5" />
                    </div>
                  )}

                  {downloadFeedback && (
                    <div className="p-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md flex items-center justify-between animate-in fade-in duration-150">
                      <div className="flex items-center gap-2">
                        <Download className="size-4" />
                        <span>Yüksek çözünürlüklü Michelin görsel indirildi!</span>
                      </div>
                      <Check className="size-3.5" />
                    </div>
                  )}

                  {/* Visual Comparison Stage */}
                  <div className="relative w-full rounded-2xl overflow-hidden border border-border/80 bg-neutral-950 shadow-inner">
                    {compareMode === "slider" ? (
                      <div className="relative">
                        <CompareSlider
                          className="w-full aspect-[4/3] max-h-[380px]"
                          initial={50}
                          before={
                            <div className="relative w-full h-full bg-neutral-900">
                              <Image
                                src="/images/food-enhance-before.jpg"
                                alt="Önce: Masa Çekimi"
                                fill
                                priority
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 500px"
                              />
                              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 flex items-center gap-1 shadow-md">
                                <span className="size-1.5 rounded-full bg-amber-400" />
                                <span>Önce: Telefon Çekimi</span>
                              </div>
                            </div>
                          }
                          after={
                            <div className="relative w-full h-full bg-neutral-900">
                              <Image
                                src="/images/food-enhance-after.jpg"
                                alt="Sonra: Michelin AI Stüdyo"
                                fill
                                priority
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 500px"
                              />
                              <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-rose-600/90 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 flex items-center gap-1 shadow-md">
                                <Sparkles className="size-3 text-amber-300" />
                                <span>Sonra: Michelin AI Stüdyo</span>
                              </div>
                            </div>
                          }
                        />
                        <div className="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none">
                          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white/90 border border-white/10 shadow-xs">
                            ↔ Çizgiyi sağa/sola sürükleyerek kıyaslayın
                          </span>
                        </div>
                      </div>
                    ) : compareMode === "before" ? (
                      <div className="relative w-full aspect-[4/3] max-h-[380px]">
                        <Image
                          src="/images/food-enhance-before.jpg"
                          alt="Önce: Masa Çekimi"
                          fill
                          priority
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 500px"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                          Amatör Masa / Telefon Çekimi
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full aspect-[4/3] max-h-[380px]">
                        <Image
                          src="/images/food-enhance-after.jpg"
                          alt="Sonra: Michelin Stüdyo Çekimi"
                          fill
                          priority
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 500px"
                        />
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 shadow-md">
                          <Sparkles className="size-3.5" />
                          <span>Michelin Yıldızı Stüdyo Çekimi</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions under image */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="px-4 py-2 rounded-xl border border-border/70 hover:bg-muted font-bold text-xs text-foreground flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="size-3.5" />
                      <span>HD İndir</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSaveToMenu}
                      className="px-4 py-2 rounded-xl bg-foreground hover:bg-foreground/90 text-background font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <Check className="size-3.5" />
                      <span>Menüye Kaydet</span>
                    </button>
                  </div>

                </div>

              </div>

            </div>
          ) : (
            /* VIEW MODE B: ORIGINAL SCREENSHOTS (HAM GÖRSELLER) */
            <div className="bg-neutral-950 text-neutral-100 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[560px]">
              
              {/* Tab Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-3xl mb-4">
                {originalScreens.map((screen, idx) => (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setOriginalTab(idx)}
                    className={`p-3 rounded-xl text-left border transition-all text-xs ${
                      originalTab === idx
                        ? "bg-white text-black border-white shadow-md font-bold"
                        : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800"
                    }`}
                  >
                    <div className="truncate font-bold">{screen.title}</div>
                    <div className="text-[10px] opacity-75 mt-0.5 truncate">{screen.desc}</div>
                  </button>
                ))}
              </div>

              {/* Natural Proportion Device Mockup Container */}
              <div className={`relative w-full max-w-2xl ${originalScreens[originalTab].aspect} max-h-[440px] rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-2xl bg-black`}>
                <Image
                  src={originalScreens[originalTab].src}
                  alt={originalScreens[originalTab].title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 672px"
                  className="object-contain object-center"
                />
              </div>

              <div className="mt-3 text-center">
                <p className="text-xs font-bold text-neutral-200">
                  {originalScreens[originalTab].title}
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  {originalScreens[originalTab].desc}
                </p>
              </div>

            </div>
          )}
        </BrowserMockup>
      </div>

      {/* Trust Badges */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-2xl text-xs font-semibold text-muted-foreground">
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <ShieldCheck className="size-3.5 text-emerald-500" />
          <span>Malzemelerin Özgünlüğü Korunur</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Sparkles className="size-3.5 text-rose-500" />
          <span>Arka Plan Temizleme &amp; Stüdyo Beyazı</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Wand2 className="size-3.5 text-amber-500" />
          <span>Canlı Doku &amp; İştah Açıcı Işık</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Coins className="size-3.5 text-blue-500" />
          <span>Ekonomik Kredi Bazlı Üretim</span>
        </span>
      </div>
    </div>
  );
}
