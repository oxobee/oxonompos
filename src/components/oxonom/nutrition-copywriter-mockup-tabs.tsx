"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  PenTool, 
  Flame, 
  Tag, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  AlertTriangle,
  Zap,
  TrendingUp,
  Award
} from "lucide-react";
import { NutritionCopywriterSimulator } from "@/components/oxonom/nutrition-copywriter-simulator";

export function NutritionCopywriterMockupTabs() {
  return (
    <div className="space-y-12">
      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-600 border border-red-500/20">
          <Sparkles className="size-3.5" />
          <span>Gastronomi Odaklı Yapay Zeka Metin Yazarı</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Sıradan Yemek İsimlerini Satış Artıran Hikayelere Dönüştürün
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Yalnızca ürün adını ve malzemeleri yazın; yapay zeka 5 farklı tonda iştah kabartan açıklamalar, kalori ve alerjen analizleri üretsin.
        </p>
      </div>

      {/* Interactive Simulator */}
      <NutritionCopywriterSimulator showOriginalToggle={true} />

      {/* 4 Pillars Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
        {/* Pillar 1 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-red-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-red-500/10">🍔</span>
            <span>5 Farklı Anlatım Tonu</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            İştah kabartan, gurme, fit veya hikaye anlatımı modlarıyla mekanınızın ruhuna ve menü konseptine tam uyum sağlar.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-amber-500/10">🔥</span>
            <span>Otomatik Kalori &amp; Besin</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Gramaj ve pişirme tekniğini sentezleyerek tahmini porsiyon kalorisini (780 kcal) anında hesaplar.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-orange-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-orange-500/10">⚠️</span>
            <span>Akıllı Alerjen Uyarısı</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Gluten, laktoz, susam, fıstık gibi 14 temel alerjeni malzemelerden otomatik tespit ederek misafir güvenliğini sağlar.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-rose-500/10">🏷️</span>
            <span>Pazarlama &amp; Rozetler</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            "Şefin Özel Seçimi", "Gurme Lezzet" gibi dikkat çekici pazarlama etiketleriyle sepet ortalamasını %25 artırır.
          </p>
        </div>
      </div>
    </div>
  );
}
