"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  UploadCloud, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  Trash2, 
  FileText, 
  Globe, 
  Image as ImageIcon, 
  X, 
  Layers, 
  Coffee, 
  Clock, 
  Flame, 
  Leaf, 
  Plus, 
  CheckCheck
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";

export type MenuImportStage = "upload" | "analyzing" | "results" | "text" | "photo";

export interface MenuImportSimulatorProps {
  initialStage?: MenuImportStage;
  className?: string;
  showOriginalToggle?: boolean;
  onStageChange?: (stage: MenuImportStage) => void;
}

export function MenuImportSimulator({
  initialStage = "upload",
  className = "",
  showOriginalToggle = true,
  onStageChange,
}: MenuImportSimulatorProps) {
  const [currentStage, setCurrentStage] = useState<MenuImportStage>(initialStage);
  const [viewMode, setViewMode] = useState<"interactive" | "original">("interactive");
  const [isAddedToMenu, setIsAddedToMenu] = useState<boolean>(false);
  const [checkedProducts, setCheckedProducts] = useState<Record<string, boolean>>({
    espresso: true,
    americano: true,
    cheesecake: true,
    sandwich: true,
  });

  const changeStage = (stage: MenuImportStage) => {
    setCurrentStage(stage);
    if (stage !== "results") {
      setIsAddedToMenu(false);
    }
    onStageChange?.(stage);
  };

  const toggleCheck = (key: string) => {
    setCheckedProducts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const originalScreens: Record<MenuImportStage, { src: string; caption: string }> = {
    upload: {
      src: "/images/menu-import-upload.png",
      caption: "1. Aşama: Menü Kaynağı Seçimi & Görsel Yükleme Paneli",
    },
    photo: {
      src: "/images/menu-import-physical-photo.jpg",
      caption: "Örnek Fiziksel Menü: Masada cep telefonuyla çekilen kağıt kafe menüsü",
    },
    analyzing: {
      src: "/images/menu-import-analyzing.png",
      caption: "2. Aşama: Canlı Yapay Zeka Taraması, Kategori Keşfi & Doğrulama",
    },
    results: {
      src: "/images/menu-import-results.png",
      caption: "3. Aşama: 13 Ürünün Kalori, Alerjen ve Fiyatlarıyla Çıkartıldığı Sonuç Ekranı",
    },
    text: {
      src: "/images/menu-import-text-mode.png",
      caption: "Alternatif Giriş: Metin yapıştırarak menü oluşturma modu",
    },
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Top View Mode Switcher: Interactive vs Original */}
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

      {/* Browser Window Frame */}
      <div className="w-full max-w-4xl shadow-2xl">
        <BrowserMockup url="app.oxonompos.com/ai-studio/menu-import">
          {viewMode === "interactive" ? (
            /* VIEW MODE A: INTERACTIVE NATIVE SAAS UI */
            <div className="bg-background text-foreground min-h-[480px] p-4 sm:p-6 text-left flex flex-col justify-between">
              {/* Studio Header */}
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                    OP
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Yapay Zeka ile Menü İçe Aktar</h4>
                    <p className="text-[11px] text-muted-foreground">
                      Fotoğraf, PDF veya web bağlantınızdaki tüm menüyü saniyeler içinde analiz edin.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20">
                    <Sparkles className="size-3" />
                    <span>25 Kredi (Kalan: 937)</span>
                  </span>
                  <div className="size-6 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center">
                    <X className="size-3.5" />
                  </div>
                </div>
              </div>

              {/* STAGE 1: UPLOAD SCREEN */}
              {currentStage === "upload" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  {/* Source tabs */}
                  <div className="flex items-center p-1 rounded-xl bg-muted/50 border border-border/60 max-w-md">
                    <button
                      type="button"
                      className="flex-1 py-1 px-2 rounded-lg text-xs font-semibold bg-background text-foreground shadow-xs flex items-center justify-center gap-1.5"
                    >
                      <ImageIcon className="size-3.5 text-primary" />
                      <span>Fotoğraf / PDF</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => changeStage("text")}
                      className="flex-1 py-1 px-2 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center justify-center gap-1.5"
                    >
                      <FileText className="size-3.5" />
                      <span>Metin Olarak</span>
                    </button>
                    <button
                      type="button"
                      className="flex-1 py-1 px-2 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center justify-center gap-1.5"
                    >
                      <Globe className="size-3.5" />
                      <span>Web Linkinden</span>
                    </button>
                  </div>

                  {/* Drag & Drop Area */}
                  <div className="border-2 border-dashed border-primary/30 rounded-2xl p-6 text-center space-y-2 bg-primary/5 hover:bg-primary/10 transition-colors">
                    <div className="size-12 rounded-2xl bg-primary/10 text-primary mx-auto flex items-center justify-center shadow-xs">
                      <UploadCloud className="size-6" />
                    </div>
                    <div className="font-bold text-sm text-foreground">Menü Sayfalarını Seçin veya Sürükleyin</div>
                    <p className="text-xs text-muted-foreground max-w-md mx-auto">
                      Birden fazla görsel veya çok sayfalı PDF yükleyebilirsiniz (PNG, JPG, WEBP, PDF)
                    </p>
                  </div>

                  {/* Uploaded Menu Thumbnail */}
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-2">Yüklenen Menü Sayfaları (1):</div>
                    <div className="flex items-center gap-3">
                      <div className="relative size-16 rounded-xl overflow-hidden border-2 border-primary/60 shadow-md group">
                        <Image
                          src="/images/menu-import-physical-photo.jpg"
                          alt="Kafe Menüsü"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-1 right-1 size-4 rounded-full bg-black/70 text-white flex items-center justify-center">
                          <X className="size-2.5" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground">cafe-menusu-masada.jpg</div>
                        <div className="text-[10px] text-muted-foreground">394 KB • 1 Sayfa Algılandı</div>
                        <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                          <Check className="size-3" /> Analize Hazır
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => changeStage("analyzing")}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                    >
                      <Sparkles className="size-4" />
                      <span>Menüyü Analiz Et (25 Kredi)</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 2: LIVE ANALYZING & OCR CHECKLIST */}
              {currentStage === "analyzing" && (
                <div className="py-6 px-2 space-y-6 text-center animate-in fade-in duration-300">
                  {/* Glowing scan icon */}
                  <div className="relative size-16 rounded-2xl bg-amber-500/15 border-2 border-amber-500/40 text-amber-600 mx-auto flex items-center justify-center shadow-lg">
                    <Sparkles className="size-8 animate-pulse" />
                    <span className="absolute -top-1 -right-1 size-3.5 bg-primary rounded-full animate-ping" />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-foreground">Menünüz Analiz Ediliyor</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Menü yapısı doğrulanıyor...</p>
                  </div>

                  {/* Animated Progress Bar (%89) */}
                  <div className="max-w-md mx-auto space-y-1">
                    <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden border border-border/60">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full w-[89%] transition-all duration-1000" />
                    </div>
                    <div className="flex justify-between text-[10px] text-muted-foreground font-semibold px-0.5">
                      <span>İlerleme</span>
                      <span className="text-emerald-600 font-bold">%89</span>
                    </div>
                  </div>

                  {/* Live Progress Checklist */}
                  <div className="max-w-md mx-auto p-3 rounded-2xl bg-muted/40 border border-border/60 text-left space-y-2 text-xs">
                    <div className="flex items-center gap-2.5 text-foreground/90 font-medium">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Menü içeriği okunuyor...</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-foreground/90 font-medium">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Kategoriler keşfediliyor (Kahveler, Soğuk İçecekler, Tatlılar, Atıştırmalıklar)...</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-foreground/90 font-medium">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Ürünler ve porsiyonlar çıkarılıyor (13 adet)...</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-foreground/90 font-medium">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span>Fiyatlar ve açıklamalar analiz ediliyor...</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-amber-600 font-bold bg-amber-500/10 p-1.5 rounded-xl border border-amber-500/20">
                      <RefreshCw className="size-4 animate-spin shrink-0" />
                      <span>Menü yapısı doğrulanıyor...</span>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => changeStage("results")}
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-all inline-flex items-center gap-2"
                    >
                      <span>Sonuçları Gör (13 Ürün Hazır)</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 3: EXTRACTED RESULTS & PRODUCT CARDS */}
              {currentStage === "results" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  {/* Top Success Banner */}
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600" />
                      <span>Tebrikler! 13 adet ürün başarıyla çıkartıldı.</span>
                    </div>
                    <span className="text-[10px] font-semibold bg-white/40 dark:bg-black/30 px-2 py-0.5 rounded-md">
                      Hatasız Eşleşme
                    </span>
                  </div>

                  {/* Header action bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="text-xs font-bold text-foreground">Menü Analiz Sonuçları</h4>
                      <p className="text-[10px] text-muted-foreground">
                        Kontrol edip onaylayarak dijital POS ve QR menünüze aktarın.
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => changeStage("upload")}
                        className="px-2.5 py-1 rounded-lg border border-border/80 text-muted-foreground hover:text-foreground text-[10px] font-semibold flex items-center gap-1"
                      >
                        <RefreshCw className="size-3" />
                        <span>Yeni Yükle</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsAddedToMenu(true)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 ${
                          isAddedToMenu
                            ? "bg-emerald-600 text-white"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                      >
                        {isAddedToMenu ? (
                          <>
                            <CheckCheck className="size-3.5" />
                            <span>Menüye Eklendi! (Yayında)</span>
                          </>
                        ) : (
                          <>
                            <Check className="size-3.5" />
                            <span>Onayla ve Menüye Ekle (13 Ürün)</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Extracted Product Cards Preview (Live Editable Fields) */}
                  <div className="space-y-2.5 max-h-[310px] overflow-y-auto pr-1 scrollbar-thin">
                    {[
                      {
                        key: "espresso",
                        category: "Kahveler",
                        name: "Espresso",
                        price: "90",
                        desc: "Yoğun aromalı tek shot İtalyan kahvesi",
                        diet: "🌱 Vejetaryen",
                        cal: "5 kcal",
                        time: "5 dk",
                      },
                      {
                        key: "americano",
                        category: "Kahveler",
                        name: "Americano",
                        price: "110",
                        desc: "Sıcak su ile yumuşatılmış espresso",
                        diet: "🌱 Vejetaryen",
                        cal: "10 kcal",
                        time: "5 dk",
                      },
                      {
                        key: "cheesecake",
                        category: "Tatlılar",
                        name: "Cheesecake",
                        price: "165",
                        desc: "Orman meyveli, hafif ve kremsi lezzet",
                        diet: "🍰 Tatlı",
                        cal: "320 kcal",
                        time: "3 dk",
                      },
                      {
                        key: "sandwich",
                        category: "Atıştırmalıklar",
                        name: "Kulüp Sandviç",
                        price: "190",
                        desc: "Tavuk, cheddar ve özel soslu sandviç",
                        diet: "🥪 Atıştırmalık",
                        cal: "450 kcal",
                        time: "12 dk",
                      },
                    ].map((prod) => (
                      <div
                        key={prod.key}
                        className={`p-3 rounded-xl border transition-all ${
                          checkedProducts[prod.key]
                            ? "bg-card border-border/80 shadow-2xs"
                            : "bg-muted/20 border-border/40 opacity-60"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <input
                              type="checkbox"
                              checked={checkedProducts[prod.key] || false}
                              onChange={() => toggleCheck(prod.key)}
                              className="size-4 rounded text-primary focus:ring-primary cursor-pointer shrink-0"
                            />
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 shrink-0">
                              {prod.category}
                            </span>
                            <span className="text-xs font-bold text-foreground truncate">{prod.name}</span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-xs font-extrabold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">
                              {prod.price} ₺
                            </span>
                            <Trash2 className="size-3 text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
                          </div>
                        </div>

                        <div className="text-[10px] text-muted-foreground mt-1.5 pl-6 leading-relaxed">
                          {prod.desc}
                        </div>

                        <div className="flex flex-wrap items-center gap-2 mt-2 pl-6 text-[9px] text-muted-foreground">
                          <span className="px-1.5 py-0.2 bg-muted rounded font-medium">{prod.diet}</span>
                          <span className="flex items-center gap-1 font-medium">
                            <Flame className="size-2.5 text-orange-500" />
                            {prod.cal}
                          </span>
                          <span className="flex items-center gap-1 font-medium">
                            <Clock className="size-2.5 text-blue-500" />
                            {prod.time}
                          </span>
                          <span className="text-primary font-semibold hover:underline cursor-pointer">
                            + Yeni Seçenek &amp; Sos Grubu Ekle
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STAGE 4: TEXT IMPORT MODE */}
              {currentStage === "text" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center p-1 rounded-xl bg-muted/50 border border-border/60 max-w-md">
                    <button
                      type="button"
                      onClick={() => changeStage("upload")}
                      className="flex-1 py-1 px-2 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center justify-center gap-1.5"
                    >
                      <ImageIcon className="size-3.5" />
                      <span>Fotoğraf / PDF</span>
                    </button>
                    <button
                      type="button"
                      className="flex-1 py-1 px-2 rounded-lg text-xs font-semibold bg-background text-foreground shadow-xs flex items-center justify-center gap-1.5"
                    >
                      <FileText className="size-3.5 text-primary" />
                      <span>Metin Olarak</span>
                    </button>
                    <button
                      type="button"
                      className="flex-1 py-1 px-2 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center justify-center gap-1.5"
                    >
                      <Globe className="size-3.5" />
                      <span>Web Linkinden</span>
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">
                      Menü Listenizi Buraya Yapıştırın:
                    </label>
                    <textarea
                      readOnly
                      rows={5}
                      value={`KAHVELER\nEspresso - 90 TL (Yoğun aromalı tek shot)\nAmericano - 110 TL (Sıcak su ile yumuşatılmış espresso)\nTATLILAR\nCheesecake - 165 TL (Orman meyveli kremsi lezzet)\nBrownie - 155 TL (Akışkan çikolatalı)`}
                      className="w-full p-3 rounded-xl border border-border/80 bg-muted/20 text-xs font-mono focus:outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => changeStage("analyzing")}
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="size-3.5" />
                    <span>Metni Analiz Et &amp; Ürünleri Çıkar (25 Kredi)</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* VIEW MODE B: ORIGINAL SCREENSHOTS */
            <div className="relative w-full bg-neutral-900 p-2 sm:p-4 flex flex-col items-center justify-center min-h-[440px]">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-inner">
                <Image
                  src={originalScreens[currentStage].src}
                  alt={originalScreens[currentStage].caption}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain object-center"
                />
              </div>
              <div className="text-[11px] text-neutral-400 mt-2 text-center">
                {originalScreens[currentStage].caption}
              </div>
            </div>
          )}
        </BrowserMockup>
      </div>

      {/* Stage Selector Buttons Below Browser */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-muted/60 border border-border/70 rounded-2xl max-w-lg">
        {[
          { id: "upload" as const, label: "1. Fotoğraf / PDF Yükle" },
          { id: "photo" as const, label: "Örnek Fiziksel Menü" },
          { id: "analyzing" as const, label: "2. Canlı AI Analizi" },
          { id: "results" as const, label: "3. 13 Ürün Çıkarıldı" },
          { id: "text" as const, label: "4. Metin Giriş Modu" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => changeStage(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentStage === tab.id
                ? "bg-primary text-primary-foreground shadow-xs scale-102"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
