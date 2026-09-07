"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  X, 
  Send, 
  Plus, 
  Check, 
  Wifi, 
  Signal, 
  Utensils, 
  Search, 
  ShoppingBag,
} from "lucide-react";
import { IphoneMockup } from "@/components/velora/iphone-mockup";

export interface QRAiPhoneSimulatorProps {
  initialStage?: "welcome" | "recommendation" | "allergen";
  className?: string;
  showOriginalToggle?: boolean;
}

export function QRAiPhoneSimulator({
  initialStage = "welcome",
  className = "",
  showOriginalToggle = true,
}: QRAiPhoneSimulatorProps) {
  const [currentStage, setCurrentStage] = useState<"welcome" | "recommendation" | "allergen">(initialStage);
  const [viewMode, setViewMode] = useState<"interactive" | "original">("interactive");
  const [cartCount, setCartCount] = useState<number>(0);
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAddToCart = (itemKey: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!addedItems[itemKey]) {
      setAddedItems((prev) => ({ ...prev, [itemKey]: true }));
      setCartCount((prev) => prev + 1);
      setTimeout(() => {
        setAddedItems((prev) => ({ ...prev, [itemKey]: false }));
      }, 2000);
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Mode Toggle (Interactive Realistic vs Original Screenshot) */}
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
            <span>Ekran Görüntüsü</span>
          </button>
        </div>
      )}

      {/* Main iPhone Frame */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-pink-500/15 to-emerald-500/20 rounded-full blur-2xl opacity-40 -z-10" />

        <IphoneMockup className="w-70 sm:w-76 shadow-2xl">
          <div className="relative size-full bg-neutral-900 text-neutral-900 select-none overflow-hidden flex flex-col font-sans">
            {/* 1. iOS Status Bar (Integrated seamlessly around Dynamic Island) */}
            <div className="absolute top-0 inset-x-0 h-11 z-40 px-6 pt-2.5 flex items-center justify-between text-white text-[11px] font-semibold tracking-tight pointer-events-none">
              <span>09:41</span>
              <div className="flex items-center gap-1.5 opacity-90">
                <Signal className="size-3" />
                <Wifi className="size-3" />
                <div className="flex items-center gap-0.5">
                  <div className="w-5 h-2.5 rounded-xs border border-white/80 p-0.5 flex items-center">
                    <div className="h-full w-full bg-white rounded-2xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* VIEW MODE A: INTERACTIVE REALISTIC NATIVE UI */}
            {viewMode === "interactive" ? (
              <div className="relative size-full flex flex-col justify-end bg-neutral-950/60 overflow-hidden">
                {/* Background Dimmed QR Menu Context */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-40 filter blur-[1.5px]">
                  {/* Fake Menu Top Header */}
                  <div className="pt-12 px-4 pb-2 flex items-center justify-between border-b border-white/10 bg-neutral-900/80">
                    <div className="flex items-center gap-2">
                      <div className="size-7 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white text-[10px] font-bold">
                        UB
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white leading-none">Uğur Burger</div>
                        <div className="text-[9px] text-neutral-400 leading-none mt-0.5">Masa #4 • Masadan Sipariş</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-full bg-white/10 text-white">
                        <Search className="size-3.5" />
                      </div>
                      <div className="p-1 rounded-full bg-white/10 text-white relative">
                        <ShoppingBag className="size-3.5" />
                        {cartCount > 0 && (
                          <span className="absolute -top-1 -right-1 size-3.5 bg-primary text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                            {cartCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Menu items background preview */}
                  <div className="p-3 space-y-2">
                    <div className="h-16 rounded-xl bg-gradient-to-r from-orange-500/30 to-red-500/30 border border-white/10 p-2 flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-2.5 w-24 bg-white/40 rounded-sm" />
                        <div className="h-2 w-32 bg-white/20 rounded-sm" />
                      </div>
                      <div className="size-10 rounded-lg bg-white/20" />
                    </div>
                    <div className="h-14 rounded-xl bg-white/5 border border-white/5 p-2 flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-2.5 w-20 bg-white/30 rounded-sm" />
                        <div className="h-2 w-28 bg-white/15 rounded-sm" />
                      </div>
                      <div className="size-9 rounded-lg bg-white/10" />
                    </div>
                  </div>
                </div>

                {/* The AI Assistant Modal Bottom Sheet (Realistic Sheet Proportion) */}
                <div className="relative z-10 w-full bg-white text-neutral-900 rounded-t-[1.75rem] shadow-[0_-10px_35px_rgba(0,0,0,0.5)] flex flex-col max-h-[84%] animate-in fade-in slide-in-from-bottom-6 duration-300">
                  {/* Sheet Drag Handle */}
                  <div className="pt-2 pb-1 flex justify-center">
                    <div className="w-10 h-1 bg-neutral-300 rounded-full" />
                  </div>

                  {/* Sheet Header */}
                  <div className="px-3.5 pb-2.5 pt-1 border-b border-neutral-100 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="size-7 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-500 flex items-center justify-center text-white shadow-xs">
                        <Sparkles className="size-3.5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-[12px] font-bold text-neutral-900 leading-tight">Menü Danışmanı AI</h4>
                          <span className="px-1.5 py-0.2 rounded-full text-[8px] font-extrabold bg-emerald-100 text-emerald-700 tracking-wide">
                            CANLI
                          </span>
                        </div>
                        <p className="text-[9px] text-neutral-500 leading-tight mt-0.5">
                          Uğur Burger • Akıllı Sipariş & Alerjen Rehberi
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="size-6 rounded-full bg-neutral-100 text-neutral-500 hover:text-neutral-900 flex items-center justify-center transition-colors"
                    >
                      <X className="size-3" />
                    </button>
                  </div>

                  {/* Scrollable Conversation Content Area */}
                  <div className="flex-1 overflow-y-auto px-3 py-2.5 space-y-2.5 text-left text-xs leading-relaxed max-h-[300px] scrollbar-thin">
                    {/* Stage 1: Welcome message */}
                    <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl rounded-tl-xs p-2.5 shadow-2xs">
                      <p className="text-[11px] text-neutral-700 leading-normal">
                        Merhaba! Ben <strong className="text-neutral-900 font-bold">Uğur Burger</strong> Yapay Zeka Menü Danışmanınızım. Menümüzdeki lezzetler, şefin imza yemekleri, glutensiz/özel beslenme seçenekleri veya içecek eşleştirmeleri hakkında bana danışabilirsiniz.
                      </p>
                    </div>

                    {/* Quick suggestion prompt chips */}
                    {currentStage === "welcome" && (
                      <div className="space-y-1.5 pt-0.5">
                        <div className="flex flex-wrap gap-1.5">
                          <button
                            type="button"
                            onClick={() => setCurrentStage("recommendation")}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-neutral-100 hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-neutral-200 text-neutral-700 transition-colors shadow-2xs"
                          >
                            <span>👨‍🍳 Şefin özel tavsiyesi nedir?</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrentStage("recommendation")}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-neutral-100 hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-neutral-200 text-neutral-700 transition-colors shadow-2xs"
                          >
                            <span>🌾 Glutensiz ne önerirsin?</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrentStage("allergen")}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-neutral-100 hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-neutral-200 text-neutral-700 transition-colors shadow-2xs"
                          >
                            <span>🐟 Balık olmayan ve glutensiz seçenekler</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrentStage("recommendation")}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-neutral-100 hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-neutral-200 text-neutral-700 transition-colors shadow-2xs"
                          >
                            <span>🍰 Hafif bir tatlı önerir misin?</span>
                          </button>
                        </div>
                        <div className="text-[9px] text-neutral-400 pl-1">Şimdi</div>
                      </div>
                    )}

                    {/* Stage 2 or 3: User Inquiry Bubble */}
                    {currentStage !== "welcome" && (
                      <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-xs px-2.5 py-1.5 text-[11px] font-medium max-w-[80%] shadow-2xs">
                          {currentStage === "recommendation" ? "🌾 Glutensiz ne önerirsin?" : "🐟 Balık olmasın ve gluten alerjim var"}
                        </div>
                      </div>
                    )}

                    {/* Stage 2 or 3: AI Response & Product Cards */}
                    {currentStage !== "welcome" && (
                      <div className="space-y-2">
                        <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl rounded-tl-xs p-2.5 text-[11px] text-neutral-700 shadow-2xs leading-normal">
                          {currentStage === "recommendation" ? (
                            <p>
                              Menümüzde glutensiz beslenmeye uygun lezzetli seçeneklerimiz mevcut. Salatalarımız ve bazı ızgara ana yemeklerimiz bu kritere tam uyar. Sizin için seçtiklerim:
                            </p>
                          ) : (
                            <p>
                              Balık tüketmiyorsanız ve gluten hassasiyetiniz varsa; ızgara marinasyonu glutensiz yapılan tavuk ve taze Akdeniz salatalarımız sizin için %100 güvenlidir:
                            </p>
                          )}
                        </div>

                        {/* Product list label */}
                        <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-600 px-1 pt-0.5">
                          <Utensils className="size-2.5" />
                          <span>ÖNERİLEN ÜRÜNLER ({currentStage === "recommendation" ? "4" : "3"})</span>
                        </div>

                        {/* Product Cards with Direct Add to Cart */}
                        <div className="space-y-1.5">
                          {(currentStage === "recommendation"
                            ? [
                                { key: "akdeniz", name: "Akdeniz Salata", desc: "Taze yeşillik, beyaz peynir, zeytin, ceviz", price: "₺220,00", emoji: "🥗" },
                                { key: "ton", name: "Ton Balıklı Salata", desc: "Akdeniz yeşillikleri, zeytinyağlı sos", price: "₺275,00", emoji: "🐟" },
                                { key: "tavuk", name: "Izgara Tavuk Tabağı", desc: "Özel marine göğüs, mevsim salatası", price: "₺345,00", emoji: "🍗" },
                                { key: "kofte", name: "Izgara Köfte Tabağı", desc: "Dana kıyma, baharatsız saf ızgara", price: "₺385,00", emoji: "🥩" },
                              ]
                            : [
                                { key: "akdeniz", name: "Akdeniz Salata", desc: "Taze yeşillik, beyaz peynir, zeytin", price: "₺220,00", emoji: "🥗" },
                                { key: "hellim", name: "Hellim Peynirli Salata", desc: "Izgara hellim, nar ekşili sos", price: "₺250,00", emoji: "🧀" },
                                { key: "tavuk", name: "Izgara Tavuk Tabağı", desc: "Glutensiz sosla marine tavuk", price: "₺345,00", emoji: "🍗" },
                              ]
                          ).map((item) => (
                            <div
                              key={item.key}
                              className="flex items-center justify-between p-2 rounded-xl bg-white border border-neutral-200/90 shadow-2xs hover:border-primary/40 transition-all"
                            >
                              <div className="flex items-center gap-2 min-w-0 pr-1">
                                <div className="size-8 rounded-lg bg-neutral-100 border border-neutral-200/60 flex items-center justify-center text-sm shrink-0">
                                  {item.emoji}
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[11px] font-bold text-neutral-900 truncate">{item.name}</div>
                                  <div className="text-[9px] text-neutral-500 truncate leading-tight">{item.desc}</div>
                                  <div className="text-[10px] font-extrabold text-amber-700 dark:text-amber-600 mt-0.5">{item.price}</div>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={(e) => handleAddToCart(item.key, e)}
                                className={`px-2 py-1 rounded-lg text-[9px] font-bold flex items-center gap-1 transition-all shrink-0 ${
                                  addedItems[item.key]
                                    ? "bg-emerald-600 text-white"
                                    : "bg-amber-600 hover:bg-amber-700 text-white shadow-2xs"
                                }`}
                              >
                                {addedItems[item.key] ? (
                                  <>
                                    <Check className="size-2.5" />
                                    <span>Eklendi</span>
                                  </>
                                ) : (
                                  <>
                                    <Plus className="size-2.5" />
                                    <span>Sepete Ekle</span>
                                  </>
                                )}
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Follow up chips */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          <button
                            type="button"
                            onClick={() => setCurrentStage(currentStage === "recommendation" ? "allergen" : "recommendation")}
                            className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-neutral-100 hover:bg-neutral-200 text-neutral-600 border border-neutral-200"
                          >
                            {currentStage === "recommendation" ? "🐟 Balık olmasın filtrele" : "🌾 Başka glutensiz seçenekler?"}
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrentStage("welcome")}
                            className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-neutral-100 hover:bg-neutral-200 text-neutral-600 border border-neutral-200"
                          >
                            ↩ Başa dön
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Input Field (Sitting cleanly above iOS safe area) */}
                  <div className="px-3 pt-2 pb-1.5 border-t border-neutral-100 bg-white">
                    <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-100 border border-neutral-200/80">
                      <input
                        type="text"
                        readOnly
                        placeholder={
                          currentStage === "welcome"
                            ? "Örn: Glutensiz ne önerirsin?..."
                            : "Başka bir lezzet sor..."
                        }
                        className="flex-1 bg-transparent px-2.5 text-[10px] text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (currentStage === "welcome") setCurrentStage("recommendation");
                          else if (currentStage === "recommendation") setCurrentStage("allergen");
                          else setCurrentStage("welcome");
                        }}
                        className="size-6 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-2xs"
                      >
                        <Send className="size-2.5" />
                      </button>
                    </div>
                  </div>

                  {/* iOS Safe Area & Home Indicator Bar */}
                  <div className="h-5 flex items-center justify-center bg-white pb-1">
                    <div className="w-24 h-1 bg-neutral-300 rounded-full" />
                  </div>
                </div>
              </div>
            ) : (
              /* VIEW MODE B: ORIGINAL SCREENSHOT WITH REALISTIC FRAMING & SAFE MARGINS */
              <div className="relative size-full bg-neutral-900 flex flex-col justify-between pt-10 pb-4 overflow-hidden">
                {/* Contain screenshot so it is NOT zoomed in / cropped */}
                <div className="relative flex-1 w-full flex items-center justify-center px-1">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                    <Image
                      src={
                        currentStage === "welcome"
                          ? "/images/qr-ai-welcome.png"
                          : currentStage === "recommendation"
                          ? "/images/qr-ai-recommendation.png"
                          : "/images/qr-ai-allergen.png"
                      }
                      alt="Orijinal Ekran Görüntüsü"
                      fill
                      priority
                      sizes="(max-width: 640px) 272px, 296px"
                      className="object-contain object-center"
                    />
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="h-4 flex items-center justify-center pt-1">
                  <div className="w-24 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            )}
          </div>
        </IphoneMockup>
      </div>

      {/* Stage Switcher Controls Below Mockup */}
      <div className="mt-5 flex items-center gap-1.5 p-1 bg-muted/60 border border-border/70 rounded-2xl">
        {[
          { id: "welcome" as const, label: "1. Karşılama" },
          { id: "recommendation" as const, label: "2. Tavsiye & Sepet" },
          { id: "allergen" as const, label: "3. Alerjen & Kriter" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setCurrentStage(tab.id)}
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
