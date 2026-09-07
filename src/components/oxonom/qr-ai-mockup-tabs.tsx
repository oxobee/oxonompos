"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, MessageSquare, Utensils, ShieldAlert, CheckCircle2 } from "lucide-react";
import { QRAiPhoneSimulator } from "@/components/oxonom/qr-ai-phone-simulator";

interface ScreenOption {
  id: "welcome" | "recommendation" | "allergen";
  title: string;
  badge: string;
  icon: React.ElementType;
  imageSrc: string;
  caption: string;
  description: string;
  bulletPoints: string[];
}

const screens: ScreenOption[] = [
  {
    id: "welcome",
    title: "Akıllı Karşılama & Soru Girişi",
    badge: "1. Aşama",
    icon: MessageSquare,
    imageSrc: "/images/qr-ai-welcome.png",
    caption: "Menü Danışmanı AI — Canlı Karşılama & Hızlı Tavsiye Butonları",
    description: "Müşteri QR menüyü açtığında Menü Danışmanı AI penceresi açılır. Şefin imza yemekleri, glutensiz seçenekler ve tatlı önerileri tek dokunuşla sorulabilir.",
    bulletPoints: [
      "Uğur Burger Akıllı Sipariş & Alerjen Rehberi",
      "Hızlı butonlar: 'Şefin özel tavsiyesi nedir?', 'Glutensiz ne önerirsin?'",
      "Serbest soru sorma metin girişi ile doğal Türkçe sohbet",
    ],
  },
  {
    id: "recommendation",
    title: "Yemek Tavsiyeleri & Sepete Ekleme",
    badge: "2. Aşama",
    icon: Utensils,
    imageSrc: "/images/qr-ai-recommendation.png",
    caption: "Yapay Zeka Yemek Önerileri & Doğrudan Sepete Ekleme",
    description: "Misafir glutensiz seçenekleri sorduğunda yapay zeka menüyü filtreler; Akdeniz Salata, Izgara Tavuk ve Köfte Tabağını doğrudan sepete ekleme butonlarıyla listeler.",
    bulletPoints: [
      "Menüdeki uygun ürünlerin fiyat ve içerik kartları",
      "Tek dokunuşla '+ Sepete Ekle' fonksiyonu",
      "Takip eden akıllı sorular: 'Vejetaryen seçenekler nelerdir?'",
    ],
  },
  {
    id: "allergen",
    title: "Kişiselleştirilmiş Alerjen Uyarlaması",
    badge: "3. Aşama",
    icon: ShieldAlert,
    imageSrc: "/images/qr-ai-allergen.png",
    caption: "Çoklu Kriter ve Alerjen Filtreleme",
    description: "'Balık yemeyen ve gluten alerjisi olan misafirler' gibi çok kriterli isteklerde Hellim Salata ve patates atıştırmalıkları gibi özel alternatifleri anında üretir.",
    bulletPoints: [
      "Balık ve gluten içermeyen alternatiflerin dinamik sentezi",
      "Misafire özel güvenli lezzet eşleşmesi",
      "Garsona sormadan net içerik güvencesi",
    ],
  },
];

export function QRAiMockupTabs() {
  const [activeScreenId, setActiveScreenId] = useState<"welcome" | "recommendation" | "allergen">("welcome");
  const activeScreen = screens.find((s) => s.id === activeScreenId) || screens[0];

  return (
    <div className="space-y-8">
      {/* Tab Switcher Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
        {screens.map((screen) => {
          const Icon = screen.icon;
          const isActive = screen.id === activeScreen.id;
          return (
            <button
              key={screen.id}
              onClick={() => setActiveScreenId(screen.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md scale-102"
                  : "bg-card border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              <Icon className="size-4" />
              <span>{screen.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {screen.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Display: 2 Columns (Phone Mockup Left, Feature Details Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card rounded-3xl border border-border/70 p-6 sm:p-10 shadow-lg">
        {/* Left: Realistic iPhone Simulator with authentic proportions */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <QRAiPhoneSimulator
            key={activeScreen.id}
            initialStage={activeScreen.id}
            showOriginalToggle={true}
          />

          <div className="mt-2 text-center">
            <p className="text-[11px] text-muted-foreground">{activeScreen.caption}</p>
          </div>
        </div>

        {/* Right: Operational Details & Features */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-muted text-muted-foreground mb-3">
              <span>Aşama {activeScreen.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              {activeScreen.title}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
              {activeScreen.description}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Arayüz Kabiliyetleri:
            </div>
            {activeScreen.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="p-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0">
                  <CheckCircle2 className="size-4" />
                </div>
                <span className="text-foreground/90 font-medium leading-snug">{point}</span>
              </div>
            ))}
          </div>

          {/* Quick thumbnails to jump */}
          <div className="pt-4 border-t border-border/50">
            <div className="text-xs font-semibold text-muted-foreground mb-3">
              Diğer Ekran Görünümleri:
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {screens.map((s) => {
                const isCurrent = s.id === activeScreen.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreenId(s.id)}
                    className={`p-2 rounded-xl border text-left transition-all group ${
                      isCurrent
                        ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                        : "border-border/60 bg-muted/20 hover:border-primary/40 hover:bg-muted/40"
                    }`}
                  >
                    <div className="relative aspect-[9/16] rounded-lg overflow-hidden border border-border/40 bg-white mb-2">
                      <Image
                        src={s.imageSrc}
                        alt={s.title}
                        fill
                        sizes="100px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-[11px] font-bold text-foreground truncate">{s.title}</div>
                    <div className="text-[10px] text-primary font-medium">{s.badge}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
