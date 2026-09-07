"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Wand2, 
  Camera, 
  Layers, 
  Check, 
  Download, 
  RefreshCw, 
  Eye, 
  X, 
  CheckCircle2, 
  Coins, 
  ShieldCheck, 
  SlidersHorizontal,
  ChevronDown,
  FileImage,
  Flame,
  Wine,
  Utensils
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";

export type ImageGenQualityTier = "economic" | "standard" | "professional" | "ultrahd";

export interface AiImageGenSimulatorProps {
  className?: string;
  showOriginalToggle?: boolean;
}

export function AiImageGenSimulator({
  className = "",
  showOriginalToggle = true,
}: AiImageGenSimulatorProps) {
  const [viewMode, setViewMode] = useState<"interactive" | "original">("interactive");
  const [originalTab, setOriginalTab] = useState<number>(0);

  // Form States
  const [dishName, setDishName] = useState<string>("Tereyağlı İskender Kebap");
  const [dishDescription, setDishDescription] = useState<string>(
    "Közlenmiş yeşil biber, köz domates, taze süzme yoğurt ve kızgın tereyağlı domates sosu eşliğinde ince kıyım döner dilimleri ve çıtır pide küpleri"
  );
  const [selectedProduct, setSelectedProduct] = useState<string>("iskender");
  const [quality, setQuality] = useState<ImageGenQualityTier>("standard");
  const [style, setStyle] = useState<string>("studio");
  const [balance, setBalance] = useState<number>(910);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationStep, setGenerationStep] = useState<string>("");
  const [hasGenerated, setHasGenerated] = useState<boolean>(true);
  const [savedToMenu, setSavedToMenu] = useState<boolean>(false);
  const [downloadFeedback, setDownloadFeedback] = useState<boolean>(false);

  const qualityOptions: Record<ImageGenQualityTier, { cost: number; title: string; desc: string }> = {
    economic: { cost: 10, title: "Ekonomik", desc: "Hızlı üretim, günlük menü" },
    standard: { cost: 20, title: "Standart", desc: "Canlı ışık ve detay" },
    professional: { cost: 40, title: "Profesyonel", desc: "Restoran food photography" },
    ultrahd: { cost: 60, title: "Ultra HD", desc: "Maksimum çözünürlük & doku" },
  };

  const styleOptions = [
    { id: "studio", label: "📸 Profesyonel Stüdyo Çekimi" },
    { id: "white", label: "⚪ Beyaz Fonda Profesyonel Çekim" },
    { id: "rustic", label: "🪵 Rustik & Ahşap Sıcaklığı" },
    { id: "michelin", label: "🍽️ Michelin Yıldızı Minimal" },
    { id: "dynamic", label: "🔥 Dinamik & İştah Kabartan" },
    { id: "dramatic", label: "🍷 Koyu & Dramatik Gurme" },
  ];

  const originalScreens = [
    {
      id: "panel",
      title: "1. AI Görsel Oluşturma Paneli",
      desc: "Yemek adı, reçete açıklaması, 4 kalite seviyesi ve 6 çekim stili",
      src: "/images/ai-image-gen-ui.png",
      aspect: "aspect-[1024/575]",
    },
    {
      id: "result",
      title: "2. Yapay Zeka ile Üretilen Yemek Görseli",
      desc: "Tereyağlı sos, köz biber, yoğurt ve porselen sunumlu İskender",
      src: "/images/ai-image-gen-iskender.jpg",
      aspect: "aspect-[4/3]",
    },
  ];

  const handleProductSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedProduct(val);
    if (val === "iskender") {
      setDishName("Tereyağlı İskender Kebap");
      setDishDescription(
        "Közlenmiş yeşil biber, köz domates, taze süzme yoğurt ve kızgın tereyağlı domates sosu eşliğinde ince kıyım döner dilimleri ve çıtır pide küpleri"
      );
    } else if (val === "burger") {
      setDishName("Smash Trüflü Burger");
      setDishDescription(
        "Erimiş çift cheddar peyniri, karamelize soğan, trüf mayonez ve çıtır patates kızartması eşliğinde tereyağlı brioche ekmeği"
      );
    } else if (val === "cheesecake") {
      setDishName("San Sebastian Cheesecake");
      setDishDescription(
        "Akışkan kremsi iç doku, karamelize yanık üst katman ve sıcak eritilmiş Belçika çikolatası sosu ile"
      );
    }
  };

  const handleGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setGenerationStep("Yemek reçetesi ve malzemeler çözümleniyor...");

    setTimeout(() => {
      setGenerationStep("Doku, tereyağı parlaklığı ve közleme ışığı modelleniyor...");
    }, 900);

    setTimeout(() => {
      setGenerationStep("Yüksek çözünürlüklü 1:1 stüdyo karesi render ediliyor...");
    }, 1800);

    setTimeout(() => {
      setIsGenerating(false);
      setGenerationStep("");
      const cost = qualityOptions[quality].cost;
      setBalance((prev) => Math.max(0, prev - cost));
      setHasGenerated(true);
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
            <span>İnteraktif AI Stüdyosu</span>
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
            <span>Orijinal Ekran Görüntüleri (2 Ekran)</span>
          </button>
        </div>
      )}

      {/* Main SaaS Browser Mockup */}
      <div className="w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden border border-border/60">
        <BrowserMockup url="app.oxonompos.com/ai-studio/generate">
          {viewMode === "interactive" ? (
            /* VIEW MODE A: INTERACTIVE SAAS STUDIO */
            <div className="bg-background text-foreground min-h-[620px] p-4 sm:p-6 text-left flex flex-col justify-between">
              
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
                  <span>AI ile Yemek Görseli Oluştur</span>
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
                  Menü ürünleriniz için gerçekçi ve profesyonel 1:1 kare yemek fotoğrafları oluşturun ve tek tıkla ürüne kaydedin.
                </p>
              </div>

              {/* Main 2-Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* LEFT: Generation Parameters Form (5 Cols) */}
                <div className="lg:col-span-5 min-w-0 space-y-4 p-4 rounded-2xl bg-card border border-border/70 shadow-xs max-h-[530px] overflow-y-auto">
                  
                  {/* Parameter Header */}
                  <div className="space-y-0.5 pb-2 border-b border-border/50">
                    <div className="flex items-center gap-1.5 text-xs font-black text-foreground">
                      <span className="text-rose-600">📷</span>
                      <span>Görsel Parametreleri</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      Oluşturmak istediğiniz lezzetin detaylarını ve kalite seviyesini belirleyin.
                    </p>
                  </div>

                  {/* Menu Product Preset Selector */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-foreground block">
                      Menüden Ürün Seç <span className="text-muted-foreground font-normal">(Opsiyonel)</span>
                    </label>
                    <div className="relative">
                      <select
                        value={selectedProduct}
                        onChange={handleProductSelect}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border/70 text-xs font-semibold text-foreground focus:outline-hidden focus:ring-1 focus:ring-rose-500 appearance-none pr-8 cursor-pointer"
                      >
                        <option value="iskender">Tereyağlı Bursa İskender Kebap</option>
                        <option value="burger">Smash Trüflü Burger</option>
                        <option value="cheesecake">San Sebastian Cheesecake</option>
                      </select>
                      <ChevronDown className="size-4 text-muted-foreground absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Dish Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-foreground block">
                      Yemek Adı <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={dishName}
                      onChange={(e) => setDishName(e.target.value)}
                      placeholder="Örn: Smash Burger, San Sebastian Cheesecake..."
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border/70 text-xs font-semibold text-foreground focus:outline-hidden focus:ring-1 focus:ring-rose-500"
                    />
                  </div>

                  {/* Recipe & Ingredients Details */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-foreground block">
                      İçerik &amp; Malzeme Detayı <span className="text-muted-foreground font-normal">(Kısa Açıklama)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={dishDescription}
                      onChange={(e) => setDishDescription(e.target.value)}
                      placeholder="Örn: Erimiş cheddar peyniri, karamelize soğan, çıtır patates..."
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border/70 text-xs font-medium text-foreground focus:outline-hidden focus:ring-1 focus:ring-rose-500 resize-none leading-relaxed"
                    />
                  </div>

                  {/* Quality Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground block">
                      Kalite Seviyesi
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(["economic", "standard", "professional", "ultrahd"] as ImageGenQualityTier[]).map((tier) => {
                        const info = qualityOptions[tier];
                        const isSelected = quality === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setQuality(tier)}
                            className={`p-2 rounded-xl border text-left transition-all min-w-0 overflow-hidden ${
                              isSelected
                                ? "border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 shadow-xs ring-1 ring-rose-500"
                                : "border-border/70 bg-background hover:bg-muted/40"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-black text-foreground truncate">{info.title}</span>
                              <span className="text-[10px] font-bold text-rose-600 whitespace-nowrap">{info.cost} Kredi</span>
                            </div>
                            <div className="text-[9px] text-muted-foreground mt-0.5 truncate">{info.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Photography Style */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground block">
                      Çekim Stili
                    </label>
                    <div className="space-y-1">
                      {styleOptions.map((opt) => {
                        const isSelected = style === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setStyle(opt.id)}
                            className={`w-full px-3 py-2 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                              isSelected
                                ? "border-rose-500 bg-rose-50/60 dark:bg-rose-950/40 text-foreground shadow-2xs"
                                : "border-border/60 bg-background text-muted-foreground hover:text-foreground hover:bg-muted/30"
                            }`}
                          >
                            <span>{opt.label}</span>
                            {isSelected && <span className="size-2 rounded-full bg-rose-500" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Cost Summary & Generate Button */}
                  <div className="pt-2 border-t border-border/60 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] text-muted-foreground block">İşlem Maliyeti:</span>
                        <span className="font-black text-foreground text-xs">
                          {qualityOptions[quality].cost} AI Kredisi
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-muted-foreground block">Kalan Krediniz:</span>
                        <span className="font-black text-emerald-600 dark:text-emerald-400 text-xs">
                          {balance - qualityOptions[quality].cost} Kredi
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className={`w-full py-3 rounded-xl font-black text-xs transition-all shadow-md flex items-center justify-center gap-2 ${
                        isGenerating
                          ? "bg-muted text-muted-foreground cursor-wait"
                          : "bg-rose-600 hover:bg-rose-700 text-white hover:scale-101 active:scale-99"
                      }`}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="size-4 animate-spin" />
                          <span>Yapay Zeka Çiziyor...</span>
                        </>
                      ) : (
                        <>
                          <Wand2 className="size-4" />
                          <span>{qualityOptions[quality].cost} Kredi ile Görsel Oluştur ✨</span>
                        </>
                      )}
                    </button>

                    {isGenerating && (
                      <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 text-amber-800 dark:text-amber-200 text-[11px] font-medium flex items-center gap-2 animate-in fade-in duration-200">
                        <span className="size-2 rounded-full bg-amber-500 animate-ping shrink-0" />
                        <span className="truncate">{generationStep}</span>
                      </div>
                    )}
                  </div>

                </div>

                {/* RIGHT: Visual Output / Preview Stage (7 Cols) */}
                <div className="lg:col-span-7 space-y-3 p-4 rounded-2xl bg-card border border-border/70 shadow-xs flex flex-col justify-between min-h-[500px]">
                  
                  {/* Top Header of Right Stage */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200/50">
                        1:1 Kare Yemek Formatı
                      </span>
                      <span className="text-[11px] text-muted-foreground font-semibold">
                        Stüdyo Kalitesi
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setHasGenerated(!hasGenerated)}
                      className="text-[11px] font-bold text-muted-foreground hover:text-foreground underline decoration-dashed"
                    >
                      {hasGenerated ? "Boş Durumu Göster" : "Üretilmiş Durumu Göster"}
                    </button>
                  </div>

                  {/* Toast Alerts for Save/Download */}
                  {savedToMenu && (
                    <div className="p-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md flex items-center justify-between animate-in fade-in duration-150">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4" />
                        <span>{dishName} görseli doğrudan menüye aktarıldı!</span>
                      </div>
                      <Check className="size-3.5" />
                    </div>
                  )}

                  {downloadFeedback && (
                    <div className="p-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-md flex items-center justify-between animate-in fade-in duration-150">
                      <div className="flex items-center gap-2">
                        <Download className="size-4" />
                        <span>1:1 Yüksek çözünürlüklü yemek görseli indirildi!</span>
                      </div>
                      <Check className="size-3.5" />
                    </div>
                  )}

                  {/* Main Output Box */}
                  {hasGenerated ? (
                    /* GENERATED DISH DISPLAY */
                    <div className="space-y-3">
                      <div className="relative w-full aspect-[4/3] max-h-[380px] rounded-2xl overflow-hidden border border-border/80 shadow-lg bg-neutral-950 group">
                        <Image
                          src="/images/ai-image-gen-iskender.jpg"
                          alt={dishName}
                          fill
                          priority
                          className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 560px"
                        />
                        
                        {/* Overlay Badges */}
                        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 flex items-center gap-1.5 shadow-md">
                          <Sparkles className="size-3 text-amber-300" />
                          <span>AI Tarafından Oluşturuldu</span>
                        </div>

                        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-rose-600/90 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-md">
                          1024 × 768 HD
                        </div>

                        {/* Dish Details Strip */}
                        <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white space-y-0.5">
                          <div className="text-xs font-black">{dishName}</div>
                          <div className="text-[10px] text-neutral-300 line-clamp-1 leading-snug">
                            {dishDescription}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons under Image */}
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <button
                          type="button"
                          onClick={handleDownload}
                          className="px-3.5 py-2 rounded-xl border border-border/70 hover:bg-muted font-bold text-xs text-foreground flex items-center gap-1.5 transition-colors"
                        >
                          <Download className="size-3.5" />
                          <span>HD İndir</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={handleGenerate}
                            className="px-3.5 py-2 rounded-xl border border-border/70 hover:bg-muted font-bold text-xs text-foreground flex items-center gap-1.5 transition-colors"
                          >
                            <RefreshCw className="size-3.5" />
                            <span>Yeni Varyasyon</span>
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
                  ) : (
                    /* EMPTY STATE MATCHING ORIGINAL SCREENSHOT */
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center rounded-2xl border-2 border-dashed border-border/70 bg-muted/20 min-h-[360px]">
                      <div className="size-16 rounded-3xl bg-muted/80 flex items-center justify-center text-muted-foreground mb-4 shadow-inner">
                        <FileImage className="size-8" />
                      </div>
                      <h5 className="text-sm font-black text-foreground">Henüz Görsel Oluşturulmadı</h5>
                      <p className="text-xs text-muted-foreground max-w-sm mt-1 leading-relaxed">
                        Soldaki formdan yemek adını ve kısa açıklamasını girip <span className="font-bold text-foreground">Oluştur</span> butonuna basarak 1:1 kare yemek fotoğrafları üretebilir ve doğrudan menüdeki ürüne kaydedebilirsiniz.
                      </p>
                      <button
                        type="button"
                        onClick={handleGenerate}
                        className="mt-5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs flex items-center gap-1.5 shadow-md transition-all"
                      >
                        <Wand2 className="size-3.5" />
                        <span>Örnek İskender Görseli Üret</span>
                      </button>
                    </div>
                  )}

                  {/* Quality Assurance note */}
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="size-3.5 text-emerald-500" />
                      <span>Tüm görseller ticari kullanıma ve baskıya uygundur.</span>
                    </span>
                    <span className="font-mono text-[10px] font-bold">1:1 Square</span>
                  </div>

                </div>

              </div>

            </div>
          ) : (
            /* VIEW MODE B: ORIGINAL SCREENSHOTS (HAM GÖRSELLER) */
            <div className="bg-neutral-950 text-neutral-100 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[580px]">
              
              {/* Tab Switcher */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-2xl mb-4">
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

      {/* Trust Badges below simulator */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-2xl text-xs font-semibold text-muted-foreground">
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Wand2 className="size-3.5 text-rose-500" />
          <span>Saniyeler İçinde Fotogerçekçi Üretim</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Layers className="size-3.5 text-amber-500" />
          <span>6 Farklı Çekim Stili &amp; Atmosfer</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Coins className="size-3.5 text-blue-500" />
          <span>Fotoğrafçı Masrafını Sıfırlayın</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <CheckCircle2 className="size-3.5 text-emerald-500" />
          <span>Tek Tıkla QR Menüye Aktarma</span>
        </span>
      </div>
    </div>
  );
}
