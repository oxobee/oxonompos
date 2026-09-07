"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Share2, 
  Sparkles, 
  Palette, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Eye, 
  Sliders, 
  Flame, 
  Copy, 
  Hash, 
  Check 
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { SocialMediaWizardSimulator } from "@/components/oxonom/social-media-wizard-simulator";

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function SocialMediaWizardMockupTabs() {
  const [activeTab, setActiveTab] = useState<"screen" | "simulator">("screen");

  return (
    <div className="space-y-10">
      {/* Top Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
          <Share2 className="size-3.5" />
          <span>Yapay Zeka Destekli İçerik Sihirbazı</span>
          <span className="ml-1.5 px-2 py-0.2 rounded-full text-[9px] font-black bg-amber-500 text-white uppercase">
            Çok Yakında
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Menünüzdeki Lezzetleri Sosyal Medyada Viral İçeriklere Dönüştürün
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Menünüzdeki yemekleri seçin, saniyeler içinde 1:1 kare feed gönderileri ve 9:16 dikey hikâye görselleri oluşturun. Yapay zeka, iştah açıcı açıklamalar ve popüler etiketleri otomatik yazar.
        </p>
      </div>

      {/* 4 Core Value Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-purple-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-purple-500/10">
              <InstagramIcon className="size-4" />
            </span>
            <span>1. Ajanssız Profesyonel İçerik</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            1:1 kare feed gönderileri ve 9:16 dikey hikaye / Reels kapakları saniyeler içinde tek tıkla hazır.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-pink-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-pink-500/10">
              <Sparkles className="size-4" />
            </span>
            <span>2. Otomatik Açıklama Üretimi</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Yapay zeka, seçtiğiniz yemeğe özel iştah kabartan Türkçe paylaşım metinleri ve çağrılar oluşturur.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-amber-500/10">
              <Hash className="size-4" />
            </span>
            <span>3. Popüler Etiket Önerileri</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Yemek türüne ve lokasyonunuza en uygun yüksek etkileşimli hashtag seçkisini otomatik önerir.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-emerald-500/10">
              <TrendingUp className="size-4" />
            </span>
            <span>4. Güçlü Marka İmajı &amp; Sipariş</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Düzenli, yüksek kaliteli paylaşımlarla restoranınızı sosyal medyada bir adım öne taşıyın.
          </p>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-muted/60 border border-border/70 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab("screen")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === "screen"
                ? "bg-card text-foreground shadow-sm ring-1 ring-border/80"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Eye className="size-4 text-purple-500" />
            <span>Sosyal Medya Sihirbazı Ekran Deneyimi</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("simulator")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === "simulator"
                ? "bg-card text-foreground shadow-sm ring-1 ring-border/80"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sliders className="size-4 text-pink-500" />
            <span>Canlı İçerik Stüdyosu Simülatörü</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: Sosyal Medya Sihirbazı Ekran Deneyimi (User's Graphic in Realistic SaaS Frame) */}
      {activeTab === "screen" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="w-full max-w-5xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-border/70">
            <BrowserMockup url="app.oxonompos.com/marketing/social-wizard/studio">
              <div className="relative w-full aspect-[16/9] bg-neutral-950">
                <Image
                  src="/images/sosyal-medya-sihirbazi-ekran-deneyimi.jpg"
                  alt="Sosyal Medya Sihirbazı Ekran Deneyimi - Menünüzdeki lezzetleri Instagram post ve hikayelerine dönüştürün"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </BrowserMockup>
          </div>

          {/* Highlights corresponding to the graphic */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="p-4 rounded-xl bg-card border border-border/70 shadow-2xs space-y-1.5">
              <div className="text-xs font-black text-foreground flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-purple-500" />
                <span>1. Menüden Yemek Seçin</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Şefin Burgeri, Trüflü Pizza, Alfredo Makarna veya Cheesecake gibi lezzetleri listenizden tek dokunuşla seçin.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/70 shadow-2xs space-y-1.5">
              <div className="text-xs font-black text-foreground flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-pink-500" />
                <span>2. 1:1 Feed &amp; 9:16 Story Çıktısı</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Marka logonuz ve iştah açıcı sloganlarla hem kare Instagram postu hem de dikey hikaye aynı anda hazırlanır.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/70 shadow-2xs space-y-1.5">
              <div className="text-xs font-black text-foreground flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-blue-500" />
                <span>3. Hazır Açıklama &amp; Popüler Etiket</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Yapay zeka metni yazar: &quot;Dışı çıtır, içi sulu, bol malzemeli Şefin Burgeri...&quot; ve etkileşim getiren etiketleri önerir.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Interactive Simulator */}
      {activeTab === "simulator" && (
        <div className="animate-in fade-in duration-200">
          <SocialMediaWizardSimulator />
        </div>
      )}

      {/* Bottom Features Strip */}
      <div className="p-5 rounded-2xl bg-linear-to-r from-purple-500/5 via-pink-500/5 to-primary/5 border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="size-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-foreground">
              Instagram, Facebook &amp; WhatsApp Durum Uyumlu
            </div>
            <div className="text-xs text-muted-foreground">
              Tek tıkla yüksek çözünürlükte indirin veya sosyal medya hesaplarınıza gönderin.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-muted border border-border/60 text-muted-foreground">
            1080×1080 &amp; 1080×1920
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
            Çok Yakında
          </span>
        </div>
      </div>
    </div>
  );
}
