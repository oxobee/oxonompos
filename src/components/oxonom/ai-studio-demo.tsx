"use client";

import React, { useState } from "react";
import { Sparkles, Image as ImageIcon, FileText, Wand2, ArrowRight, CheckCircle2 } from "lucide-react";
import { CompareSlider } from "@/components/velora/compare-slider";
import { Badge } from "@/components/ui/badge";

export function AIStudioDemo() {
  const [activeTool, setActiveTool] = useState<"photo" | "ocr" | "copy">("photo");

  return (
    <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8 backdrop-blur text-left shadow-xl">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="size-5 text-primary" />
            <h3 className="font-bold text-lg text-foreground">Oxonom AI Studio Arayüzü</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Menü fotoğraflarını profesyonelleştirin, basılı menüleri saniyeler içinde dijitalleştirin
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-muted/60 border border-border/40">
          <button
            onClick={() => setActiveTool("photo")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
              activeTool === "photo" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Fotoğraf İyileştirme
          </button>
          <button
            onClick={() => setActiveTool("ocr")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
              activeTool === "ocr" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            PDF &amp; Fotoğraftan Menü
          </button>
          <button
            onClick={() => setActiveTool("copy")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
              activeTool === "copy" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Menü Metin Yazarı
          </button>
        </div>
      </div>

      {/* Main Tool Preview */}
      <div className="mt-6">
        {activeTool === "photo" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <CompareSlider
                className="h-64 sm:h-72 w-full rounded-xl border border-border shadow-inner"
                before={
                  <div className="size-full bg-stone-900/90 text-stone-400 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-4xl mb-2">📸</span>
                    <span className="font-bold text-sm text-stone-200">Telefonla Çekilen Ham Fotoğraf</span>
                    <span className="text-xs text-stone-400 mt-1 max-w-xs">Yetersiz ışık, gölgeli zemin ve cansız renk tonları</span>
                    <Badge variant="outline" className="mt-4 text-[10px] border-stone-600 text-stone-400">Önce (Before)</Badge>
                  </div>
                }
                after={
                  <div className="size-full bg-gradient-to-br from-primary/20 via-background to-card text-foreground flex flex-col items-center justify-center p-6 text-center border-l-2 border-primary">
                    <span className="text-4xl mb-2">✨</span>
                    <span className="font-bold text-sm text-foreground">AI Stüdyo &amp; Katalog Çekimi</span>
                    <span className="text-xs text-muted-foreground mt-1 max-w-xs">Mükemmel arka plan izolasyonu, stüdyo aydınlatması ve canlı lezzet tonları</span>
                    <Badge className="mt-4 text-[10px] bg-primary text-primary-foreground">Sonra (After)</Badge>
                  </div>
                }
              />
              <p className="text-[11px] text-center text-muted-foreground mt-2">
                Kaydırıcıyı sağa-sola hareket ettirerek yapay zeka dönüşümünü karşılaştırın.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-base text-foreground">Sıfır fotoğraf masrafıyla katalog kalitesi</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Pahalı profesyonel fotoğrafçılara ihtiyaç duymadan; mutfakta telefonunuzla çektiğiniz tabak fotoğraflarını tek tıkla stüdyo aydınlatmalı dijital menü görsellerine dönüştürün.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>Otomatik zemin temizleme ve şık ahşap/mermer masa dokuları</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>Doğal stüdyo ışığı ve iştah kabartan renk doygunluğu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>QR Menü ve POS terminallerine tek tıkla doğrudan aktarım</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTool === "ocr" && (
          <div className="p-6 rounded-xl border border-dashed border-primary/40 bg-primary/5 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Otomatik Dijitalleştirme</span>
              <h4 className="font-bold text-base text-foreground">PDF veya basılı menünüzü sisteme aktarın</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Yüzlerce ürünü tek tek elle girmekle günlerinizi harcamayın. Basılı menünüzün fotoğrafını veya PDF dosyasını yükleyin; Oxonom AI kategorileri, ürün adlarını, gramajları ve fiyatları otomatik ayıklasın.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-background/90 text-xs space-y-2">
              <div className="flex items-center justify-between font-bold border-b pb-2">
                <span>Tespit Edilen Ürünler (AI)</span>
                <span className="text-emerald-500 font-semibold text-[11px]">42 Ürün Çıkarıldı</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="font-medium">Dana Antrikot 250gr</span>
                <span className="font-bold">₺520,00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="font-medium">Trüf Mantarlı Fettuccine</span>
                <span className="font-bold">₺310,00</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium">Ev Yapımı Tiramisu</span>
                <span className="font-bold">₺180,00</span>
              </div>
            </div>
          </div>
        )}

        {activeTool === "copy" && (
          <div className="p-6 rounded-xl border border-border/70 bg-background/70 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-foreground">Akıllı Menü Metin Yazarı &amp; Kalori / Alerjen</h4>
                <p className="text-xs text-muted-foreground">Yemekleriniz için iştah kabartan profesyonel açıklamalar</p>
              </div>
              <Badge className="text-xs bg-primary/15 text-primary border-primary/30">AI Destekli</Badge>
            </div>

            <div className="p-4 rounded-xl border border-border/50 bg-card/60 text-xs space-y-2">
              <div className="font-semibold text-foreground">Ürün: Trüf Mantarlı Burger</div>
              <p className="text-muted-foreground italic leading-relaxed">
                “24 saat dinlendirilmiş 160g dana köfte, taze yabani trüf mantarı sosu, karamelize arpacık soğan ve erimiş Gravyer peyniri ile brioche ekmeği arasında servis edilir.”
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-muted font-medium">Kalori: ~680 kcal</span>
                <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-medium">Alerjen: Gluten, Laktoz</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-medium">Pişme Süresi: 12 dk</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
