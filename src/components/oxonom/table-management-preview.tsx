"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Utensils,
  Clock,
  CookingPot,
  CheckCircle2,
  DollarSign,
  Layers,
  Search,
  Sparkles,
  Flame,
  Check,
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { BorderBeam } from "@/components/velora/border-beam";
import { TextReveal } from "@/components/velora/text-reveal";
import { Badge } from "@/components/ui/badge";

interface TableFeature {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  description: string;
  highlightData: {
    label: string;
    value: string;
  }[];
}

export function TableManagementPreview() {
  const features: TableFeature[] = [
    {
      id: "dolu",
      title: "Canlı Hesap & Adisyon Takibi",
      subtitle: "Dolu Masalar (Kırmızı / Turuncu)",
      icon: <Flame className="size-4 text-rose-500" />,
      badge: "7 Dolu Masa",
      badgeColor: "bg-rose-500/10 text-rose-500 border-rose-500/30",
      description:
        "Masa 1, 2, 6 gibi açık siparişi olan tüm masaların kişi sayısı, açık adisyon tutarı (₺1.480, ₺730 vb.) ve oturma süresi saniyesi saniyesine izlenir.",
      highlightData: [
        { label: "Örnek Masa", value: "Masa 6 (Salon • 4 Kişi)" },
        { label: "Açık Hesap", value: "₺1.480,00" },
        { label: "Süre Sayacı", value: "03:09:40" },
      ],
    },
    {
      id: "mutfak",
      title: "Mutfak & Servis Hazır Rozeti",
      subtitle: "KDS Canlı Durum Entegrasyonu",
      icon: <CookingPot className="size-4 text-amber-500" />,
      badge: "MUTFAK / HAZIR",
      badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/30",
      description:
        "Yemekler hazırlanırken sarı 'MUTFAK' rozeti görünür. Şef mutfakta siparişi tamamladığında Masa 4'teki gibi yeşil 'HAZIR' rozetine döner ve garson uyarılır.",
      highlightData: [
        { label: "Hazırlanan", value: "Masa 1, 2, 5 (Mutfak)" },
        { label: "Teslime Hazır", value: "Masa 4 (Yeşil Tik)" },
        { label: "Bildirim", value: "Garsona Anlık Sinyal" },
      ],
    },
    {
      id: "musait",
      title: "Tek Tıkla Yeni Sipariş Açma",
      subtitle: "Boş Masalar (Zümrüt Yeşili)",
      icon: <CheckCircle2 className="size-4 text-emerald-500" />,
      badge: "8 Boş Masa",
      badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
      description:
        "Masa 9, 10, 11 gibi yeşil renkli müsait masalara tek dokunuşla yeni sipariş başlatılır; masa doğrudan adisyona bağlanır ve servis süreci başlar.",
      highlightData: [
        { label: "Müsait Alan", value: "Salon, Bahçe, Teras" },
        { label: "İşlem", value: "+ Sipariş Başlat" },
        { label: "Hız", value: "Tek Dokunuşta Aktif" },
      ],
    },
    {
      id: "finans",
      title: "Anlık Açık Ciro & Metrikler",
      subtitle: "Salon Finansal Özeti",
      icon: <DollarSign className="size-4 text-blue-500" />,
      badge: "₺4.415,00 Ciro",
      badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/30",
      description:
        "Üst kontrol bandında anlık toplam açık masa cirosu (₺4.415,00), 48 kapanan adisyon ve bölgeler arası filtreler (Salon, Bahçe, Teras) canlı listelenir.",
      highlightData: [
        { label: "Açık Ciro", value: "₺4.415,00" },
        { label: "Kapanan Adisyon", value: "48 Adet" },
        { label: "Bölge Filtresi", value: "Tümü (15 Masa)" },
      ],
    },
  ];

  const [activeFeature, setActiveFeature] = useState<TableFeature>(features[0]);

  return (
    <div className="relative mx-auto max-w-5xl space-y-8">
      {/* Outer Glow */}
      <div
        aria-hidden
        className="absolute -inset-4 sm:-inset-8 rounded-[2.5rem] bg-gradient-to-r from-primary/20 via-rose-500/15 to-emerald-500/20 opacity-35 blur-3xl pointer-events-none"
      />

      {/* Top Interactive Feature Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {features.map((feat) => (
          <button
            key={feat.id}
            onClick={() => setActiveFeature(feat)}
            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 ${
              activeFeature.id === feat.id
                ? "border-primary bg-primary/10 shadow-lg shadow-primary/10 ring-1 ring-primary/40"
                : "border-border/70 bg-card/80 hover:bg-muted/50"
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <div className="p-2 rounded-xl bg-background border border-border/60">
                {feat.icon}
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${feat.badgeColor}`}>
                {feat.badge}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-xs text-foreground leading-snug">{feat.title}</h4>
              <p className="text-[11px] text-muted-foreground mt-0.5">{feat.subtitle}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Main Browser Mockup displaying Real Tables Screenshot */}
      <div className="relative">
        <BrowserMockup
          url="pos.oxonompos.com/masalar"
          className="relative shadow-2xl border-border/70 overflow-hidden bg-card/90"
        >
          <BorderBeam size={180} duration={12} colorFrom="#ef4444" colorTo="#10b981" />

          {/* Quick live status banner on mockup */}
          <div className="hidden sm:flex items-center justify-between px-4 py-2 bg-muted/40 border-b border-border/50 text-xs">
            <div className="flex items-center gap-3 font-medium text-muted-foreground">
              <span className="flex items-center gap-1 text-emerald-500 font-bold">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> 8 Boş
              </span>
              <span className="flex items-center gap-1 text-rose-500 font-bold">
                <span className="size-2 rounded-full bg-rose-500" /> 7 Dolu
              </span>
              <span className="text-border">|</span>
              <span className="text-foreground font-semibold">Açık Ciro: ₺4.415,00</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-[11px]">
              <span className="bg-background px-2 py-0.5 rounded border border-border/60 font-medium">
                Aktif Sekme: {activeFeature.title}
              </span>
            </div>
          </div>

          <div className="relative w-full aspect-[1024/499] bg-background select-none">
            <Image
              src="/images/tables-management-real.png"
              alt="Oxonom POS - Anlık Durum & Masalar Canlı Krokisi ve Hesap Yönetimi"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
              className="object-contain object-top"
            />
          </div>
        </BrowserMockup>
      </div>

      {/* Interactive Detail Box - Word by Word Text Reveal */}
      <div className="p-5 sm:p-6 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-xl shadow-lg grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
        <div className="md:col-span-8 space-y-2">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-primary" />
            <h4 className="font-bold text-sm text-foreground">{activeFeature.title}</h4>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${activeFeature.badgeColor}`}>
              {activeFeature.badge}
            </span>
          </div>
          <TextReveal
            key={activeFeature.id}
            text={activeFeature.description}
            as="p"
            className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
            stagger={0.03}
          />
        </div>

        {/* Live Metrics Column */}
        <div className="md:col-span-4 grid grid-cols-1 gap-2 border-t md:border-t-0 md:border-l border-border/50 pt-4 md:pt-0 md:pl-6">
          {activeFeature.highlightData.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs p-1.5 rounded-lg bg-muted/30">
              <span className="text-muted-foreground">{item.label}:</span>
              <span className="font-bold text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
