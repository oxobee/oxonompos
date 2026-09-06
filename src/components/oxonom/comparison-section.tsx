"use client";

import React from "react";
import { Check, X, Sparkles } from "lucide-react";

export function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Donanım & Kurulum",
      traditional: "Ağır masaüstü sunucu, kablolama ve pahalı lisanslar",
      oxonom: "%100 Bulut tabanlı; iPad, Android tablet veya PC ile anında hazır",
    },
    {
      feature: "Mutfak İletişimi",
      traditional: "Mutfakta kaybolan veya ıslanan kağıt adisyon fişleri",
      oxonom: "3 aşamalı sesli ve zaman sayaçlı dijital Mutfak Ekranı (KDS)",
    },
    {
      feature: "QR Sipariş (Self-Order)",
      traditional: "Sadece pasif PDF linki veya pahalı harici üçüncü parti entegrasyon",
      oxonom: "Doğrudan mutfağa ve adisyona işleyen tam entegre QR Self-Order",
    },
    {
      feature: "Reçete & Stok Takibi",
      traditional: "Ay sonu saatlerce süren tahminî Excel stok sayımları",
      oxonom: "Satış anında gramaj bazında otomatik hammadde düşümü",
    },
    {
      feature: "Ödeme Esnekliği",
      traditional: "Hesabı bölmek için karmaşık kasa adımları",
      oxonom: "Nakit, Kredi Kartı ve Yemek Kartı ile saniyeler içinde parçalı tahsilat",
    },
    {
      feature: "Gün Sonu Denetimi",
      traditional: "Yalnızca toplam ciro gösteren basit fiş dökümü",
      oxonom: "7 Bölümlü Z Raporu: Kasa mutabakatı, KDV dilimleri ve tüm iptal logları",
    },
    {
      feature: "Yapay Zeka (AI Studio)",
      traditional: "Hiçbir yapay zeka desteği bulunmaz",
      oxonom: "Fotoğraftan menü çıkarma, AI yemek görseli ve akıllı metin yazarı",
    },
  ];

  return (
    <div className="rounded-2xl border border-border/60 bg-card/80 overflow-hidden shadow-xl text-left">
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-border/60 bg-muted/40">
              <th className="p-4 text-left font-bold text-foreground w-1/3">Özellik &amp; Operasyon</th>
              <th className="p-4 text-left font-semibold text-muted-foreground w-1/3">Geleneksel POS Sistemleri</th>
              <th className="p-4 text-left font-bold text-primary bg-primary/5 w-1/3 border-l border-border/50">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="size-4 text-primary" />
                  <span>Oxonom POS</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {comparisonData.map((row, i) => (
              <tr key={i} className="hover:bg-muted/20 transition-colors">
                <td className="p-4 font-bold text-foreground">
                  {row.feature}
                </td>
                <td className="p-4 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <X className="size-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                </td>
                <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-border/50">
                  <div className="flex items-start gap-2">
                    <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{row.oxonom}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
