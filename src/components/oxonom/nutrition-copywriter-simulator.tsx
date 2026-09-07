"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Copy, 
  Check, 
  Flame, 
  AlertTriangle, 
  Tag, 
  BookOpen, 
  X, 
  PenTool, 
  Wine, 
  Zap, 
  Salad, 
  Wand2, 
  Feather,
  RotateCcw
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";

export type ToneOption = "appetizing" | "gourmet" | "short" | "healthy" | "story";

export interface NutritionCopywriterSimulatorProps {
  className?: string;
  showOriginalToggle?: boolean;
}

const toneMap: Record<ToneOption, { label: string; icon: string }> = {
  appetizing: { label: "İştah Kabartan", icon: "🍔" },
  gourmet: { label: "Gurme & Seçkin", icon: "🍷" },
  short: { label: "Kısa & Net", icon: "⚡" },
  healthy: { label: "Sağlıklı & Fit", icon: "🥗" },
  story: { label: "Hikaye Anlatımı", icon: "✨" },
};

const presetVariations: Record<ToneOption, {
  shortDesc: string;
  longDesc: string;
  calories: string;
  allergens: string[];
  tags: string[];
}> = {
  appetizing: {
    shortDesc: "Dinlendirilmiş dana köftesi ve enfes trüf mantarının buluştuğu, damaklarda iz bırakan gurme bir deneyim.",
    longDesc: "Özel olarak dinlendirilmiş 200 gram dana köftemiz, ustalıkla ızgarada pişirilerek dışı hafifçe karamelize, içi ise sulu ve lezzetli kalır. Bu eşsiz köfteye, toprağın derinliklerinden gelen, aromasıyla büyüleyen taze trüf mantarı dilimleri eşlik eder. Her lokmada lüks ve sofistike bir tat cümbüşü yaşayacağınız bu burger, gerçek lezzet arayanlar için tasarlandı. Yanında çıtır patates kızartması ve özel soslarımızla servis edilir.",
    calories: "780 kcal",
    allergens: ["Gluten", "Süt/Laktoz", "Susam"],
    tags: ["Gurme Lezzet", "Şefin Özel Seçimi", "Trüf Aşkına"],
  },
  gourmet: {
    shortDesc: "Meşe odununda dinlendirilmiş Black Angus kıyması ve siyah kış trüfü esansıyla taçlandırılmış asil bir burger.",
    longDesc: "Gastronomi tutkunları için özel reçeteyle hazırlanan 200 gr dinlendirilmiş etimiz, brioche ekmeği arasında artisan trüf kreması ve karamelize arpacık soğanla buluşuyor. Fransa'nın seçkin trüf mantarı aroması, damakta uzun süre kalan kadifemsi bir lezzet bırakır.",
    calories: "760 kcal",
    allergens: ["Gluten", "Süt/Laktoz", "Yumurta"],
    tags: ["Michelin İlhamı", "Black Angus", "Özel Rezerv"],
  },
  short: {
    shortDesc: "200g dinlendirilmiş dana köfte, taze trüf mantarı, cheddar peyniri ve özel patates kızartması.",
    longDesc: "200g ızgara dana köfte, taze trüf mantarı sosu, karamelize soğan, ev yapımı patates kızartması.",
    calories: "740 kcal",
    allergens: ["Gluten", "Süt"],
    tags: ["Hızlı Servis", "Klasik Gurme"],
  },
  healthy: {
    shortDesc: "Yağ oranı dengelenmiş saf dana eti, antioksidan zengini trüf mantarı ve taze yeşillikler.",
    longDesc: "Katkısız ve saf dana kıymasından hazırlanan yüksek proteinli köftemiz, metabolizmayı destekleyen mineral zengini doğal trüf mantarı ile birleşti. Düşük karbonhidratlı ve besleyici lezzet dengesi.",
    calories: "620 kcal",
    allergens: ["Gluten", "Susam"],
    tags: ["Yüksek Protein", "Dengeli Beslenme", "Katkısız"],
  },
  story: {
    shortDesc: "İtalyan ormanlarının gizli hazinesi trüf mantarının, ustalıkla harmanlanan geleneksel burgerle büyülü yolculuğu.",
    longDesc: "Şefimizin Floransa sokaklarındaki geleneksel tatlardan ilham alarak yarattığı bu imza lezzet; sabah erken saatlerde toplanan taze trüf aromalarının 200 gramlık eşsiz köfteyle bütünleşme serüvenidir. Her ısırıkta ustalık kokan bir mutfak mirası.",
    calories: "790 kcal",
    allergens: ["Gluten", "Süt/Laktoz", "Susam"],
    tags: ["Şefin Hikayesi", "İmza Lezzet", "Artisan"],
  },
};

export function NutritionCopywriterSimulator({
  className = "",
  showOriginalToggle = true,
}: NutritionCopywriterSimulatorProps) {
  const [viewMode, setViewMode] = useState<"interactive" | "original">("interactive");
  const [originalIndex, setOriginalIndex] = useState<number>(1);
  const [productName, setProductName] = useState<string>("Trüflü Dana Burger");
  const [category, setCategory] = useState<string>("Burgerler");
  const [ingredients, setIngredients] = useState<string>("200 gr dinlendirilmiş dana köfte, trüf mantarı");
  const [activeTone, setActiveTone] = useState<ToneOption>("appetizing");
  const [isGenerated, setIsGenerated] = useState<boolean>(true);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const currentResult = presetVariations[activeTone];

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleGenerate = () => {
    setIsGenerated(false);
    setTimeout(() => {
      setIsGenerated(true);
    }, 400);
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Top Controls: Interactive vs Original View Mode Switcher */}
      {showOriginalToggle && (
        <div className="flex items-center gap-1.5 p-1 bg-muted/80 backdrop-blur-sm border border-border/80 rounded-full mb-4 shadow-xs text-xs font-semibold">
          <button
            type="button"
            onClick={() => setViewMode("interactive")}
            className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
              viewMode === "interactive"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className="size-3" />
            <span>Gerçekçi Simülatör</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("original")}
            className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
              viewMode === "original"
                ? "bg-background text-foreground shadow-xs border border-border/60"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>Orijinal Ekran Görüntüsü</span>
          </button>
        </div>
      )}

      {/* Main Browser Mockup Window */}
      <div className="w-full max-w-4xl shadow-2xl">
        <BrowserMockup url="app.oxonompos.com/ai-studio/copywriter">
          {viewMode === "interactive" ? (
            /* VIEW MODE A: INTERACTIVE SAAS COMPONENT */
            <div className="bg-background text-foreground min-h-[500px] p-4 sm:p-6 text-left flex flex-col justify-between">
              {/* Studio Header */}
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center font-bold text-xs">
                    AI
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">AI Menü Metin Yazarı &amp; Besin Analizi</h4>
                    <p className="text-[11px] text-muted-foreground">
                      Ürününüzün adını girin; yapay zeka iştah açıcı açıklamalar, kalori ve alerjen analizleri üretsin.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20">
                    <Sparkles className="size-3" />
                    <span>İşlem: 2 Kredi (Kalan: 912)</span>
                  </span>
                  <div className="size-6 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center">
                    <X className="size-3.5" />
                  </div>
                </div>
              </div>

              {/* 2-Column Layout: Left Form, Right Generated Output */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* LEFT FORM (cols 1-5) */}
                <div className="lg:col-span-5 space-y-3.5 bg-card/60 p-4 rounded-2xl border border-border/70 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <PenTool className="size-3.5 text-red-500" />
                    <span>Ürün Bilgileri</span>
                  </div>

                  {/* Product Name Input */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-muted-foreground">
                      Ürün Adı *
                    </label>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-xl border border-border bg-background text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Category Input */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-muted-foreground">
                      Kategori (Opsiyonel)
                    </label>
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-xl border border-border bg-background text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Ingredients */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-muted-foreground">
                      Malzemeler / Şef Notları (Opsiyonel)
                    </label>
                    <textarea
                      rows={2}
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-xl border border-red-500/40 bg-background text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>

                  {/* Tone of Voice Selection Chips */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground">
                      Anlatım Tonu:
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {(Object.keys(toneMap) as ToneOption[]).map((toneKey) => {
                        const t = toneMap[toneKey];
                        const isSelected = activeTone === toneKey;
                        return (
                          <button
                            key={toneKey}
                            type="button"
                            onClick={() => setActiveTone(toneKey)}
                            className={`px-2 py-1.5 rounded-xl text-[10px] font-semibold transition-all flex items-center gap-1.5 border text-left ${
                              isSelected
                                ? "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400 font-bold shadow-2xs"
                                : "bg-muted/40 border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            <span>{t.icon}</span>
                            <span className="truncate">{t.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Generate Button */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={handleGenerate}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01]"
                    >
                      <Sparkles className="size-3.5" />
                      <span>Açıklama Üret (2 Kredi)</span>
                    </button>
                  </div>
                </div>

                {/* RIGHT RESULTS (cols 6-12) */}
                <div className="lg:col-span-7 space-y-3">
                  {isGenerated ? (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      {/* 1. Short Menu Description Card */}
                      <div className="p-3.5 rounded-2xl bg-card border border-border/80 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                            <Sparkles className="size-3.5 text-amber-500" />
                            <span>Menü Kartı Açıklaması (Kısa)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy("short", currentResult.shortDesc)}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {copiedKey === "short" ? (
                              <>
                                <Check className="size-3 text-emerald-500" />
                                <span className="text-emerald-500 font-bold">Kopyalandı</span>
                              </>
                            ) : (
                              <>
                                <Copy className="size-3" />
                                <span>Kopyala</span>
                              </>
                            )}
                          </button>
                        </div>
                        <div className="p-2.5 rounded-xl bg-muted/40 border border-border/50 text-xs text-foreground/90 leading-relaxed font-medium">
                          {currentResult.shortDesc}
                        </div>
                      </div>

                      {/* 2. Rich Storytelling Card */}
                      <div className="p-3.5 rounded-2xl bg-card border border-border/80 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                            <BookOpen className="size-3.5 text-indigo-500" />
                            <span>Detay &amp; Hikaye Açıklaması (Geniş)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy("long", currentResult.longDesc)}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {copiedKey === "long" ? (
                              <>
                                <Check className="size-3 text-emerald-500" />
                                <span className="text-emerald-500 font-bold">Kopyalandı</span>
                              </>
                            ) : (
                              <>
                                <Copy className="size-3" />
                                <span>Kopyala</span>
                              </>
                            )}
                          </button>
                        </div>
                        <div className="p-2.5 rounded-xl bg-muted/40 border border-border/50 text-[11px] text-muted-foreground leading-relaxed">
                          {currentResult.longDesc}
                        </div>
                      </div>

                      {/* 3 & 4. Nutrition & Marketing Badges in 2 columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Nutrition & Allergens */}
                        <div className="p-3 rounded-2xl bg-card border border-border/80 shadow-xs space-y-2">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-foreground">
                            <Flame className="size-3 text-orange-500" />
                            <span>Besin &amp; Alerjen Önerisi</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                              <Flame className="size-2.5" />
                              <span>{currentResult.calories}</span>
                            </span>
                            {currentResult.allergens.map((alg, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-amber-500/10 text-amber-800 dark:text-amber-400 border border-amber-500/20"
                              >
                                <AlertTriangle className="size-2.5" />
                                <span>{alg}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Marketing Tags */}
                        <div className="p-3 rounded-2xl bg-card border border-border/80 shadow-xs space-y-2">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-foreground">
                            <Tag className="size-3 text-rose-500" />
                            <span>Pazarlama Etiketleri</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {currentResult.tags.map((tagItem, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20"
                              >
                                <span>🏷️</span>
                                <span>{tagItem}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* EMPTY STATE */
                    <div className="h-full min-h-[300px] flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-border/60 text-center space-y-2 bg-muted/10">
                      <div className="size-12 rounded-2xl bg-muted text-muted-foreground flex items-center justify-center">
                        <Feather className="size-6" />
                      </div>
                      <div className="text-xs font-bold text-foreground">Henüz Metin Üretilmedi</div>
                      <p className="text-[11px] text-muted-foreground max-w-xs">
                        Soldaki formdan ürün adınızı girip "Açıklama Üret" butonuna basarak iştah açıcı açıklamalar oluşturabilirsiniz.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* VIEW MODE B: ORIGINAL SCREENSHOTS */
            <div className="relative w-full bg-neutral-900 p-2 sm:p-4 flex flex-col items-center justify-center min-h-[440px]">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-inner">
                <Image
                  src={
                    originalIndex === 0
                      ? "/images/ai-copywriter-input.png"
                      : "/images/ai-copywriter-result.png"
                  }
                  alt="Orijinal AI Metin Yazarı Ekranı"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain object-center"
                />
              </div>
              <div className="flex items-center gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setOriginalIndex(0)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                    originalIndex === 0 ? "bg-white text-black" : "bg-neutral-800 text-neutral-400"
                  }`}
                >
                  1. Form &amp; Giriş Ekranı
                </button>
                <button
                  type="button"
                  onClick={() => setOriginalIndex(1)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                    originalIndex === 1 ? "bg-white text-black" : "bg-neutral-800 text-neutral-400"
                  }`}
                >
                  2. Üretilen Açıklamalar &amp; Besin Analizi
                </button>
              </div>
            </div>
          )}
        </BrowserMockup>
      </div>

      {/* Quick Tone Buttons Under Simulator */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-lg">
        <span className="text-xs font-semibold text-muted-foreground">Anlatım Tonunu Canlı Değiştir:</span>
        {(Object.keys(toneMap) as ToneOption[]).map((tKey) => (
          <button
            key={tKey}
            type="button"
            onClick={() => {
              setActiveTone(tKey);
              setIsGenerated(true);
            }}
            className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
              activeTone === tKey
                ? "bg-red-600 text-white shadow-xs scale-102"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>{toneMap[tKey].icon}</span>
            <span>{toneMap[tKey].label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
