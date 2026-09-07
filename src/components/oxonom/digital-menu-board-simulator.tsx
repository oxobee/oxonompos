"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Tv, 
  Sparkles, 
  Flame, 
  Clock, 
  RefreshCw, 
  Check, 
  Sliders, 
  Layout, 
  Play, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  BadgeAlert,
  Sun,
  Moon,
  Coffee,
  Utensils
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";

export interface DigitalMenuBoardSimulatorProps {
  className?: string;
  showOriginalToggle?: boolean;
}

export function DigitalMenuBoardSimulator({
  className = "",
}: DigitalMenuBoardSimulatorProps) {
  const [activeLayout, setActiveLayout] = useState<"grid" | "split" | "featured">("grid");
  const [timeOfDay, setTimeOfDay] = useState<"lunch" | "dinner" | "breakfast">("lunch");
  const [campaignActive, setCampaignActive] = useState<boolean>(true);
  const [priceSynced, setPriceSynced] = useState<boolean>(true);
  const [isUpdatingPrices, setIsUpdatingPrices] = useState<boolean>(false);
  const [syncToast, setSyncToast] = useState<boolean>(false);

  const menuItems = {
    lunch: [
      {
        id: 1,
        name: "Kruvasan Kahvaltı Tabağı",
        desc: "Tereyağlı çıtır kruvasan, taze avokado, sahanda göz yumurta & taze meyve suyu",
        price: "₺280",
        tag: "Fırından Taze",
        badgeColor: "bg-amber-500",
        img: "/images/modules/tv-menu/kruvasan-kahvalti.png",
      },
      {
        id: 2,
        name: "Serpme Gurme Kahvaltı",
        desc: "Ezine peynir seçkisi, petek bal-kaymak, sahanda sucuklu yumurta & sınırsız çay",
        price: "₺460",
        tag: "Şefin İmzası",
        badgeColor: "bg-rose-500",
        img: "/images/modules/tv-menu/serpme-kahvalti.jpg",
      },
      {
        id: 3,
        name: "Çıtır Tavuk Dürüm Menü",
        desc: "Marine çıtır tavuk parçaları, baharatlı patates kızartması & soğuk kutu içecek",
        price: "₺290",
        tag: "Günün Menüsü",
        badgeColor: "bg-emerald-500",
        img: "/images/modules/tv-menu/citir-tavuk-menu.png",
      },
      {
        id: 4,
        name: "San Sebastian Cheesecake",
        desc: "İpeksi kremsi doku, karamelize yanık kabuk ve sıcak Belçika çikolatası",
        price: "₺210",
        tag: "En Sevilen Tatlı",
        badgeColor: "bg-purple-500",
        img: "/images/modules/tv-menu/san-sebastian.jpg",
      },
    ],
    breakfast: [
      {
        id: 1,
        name: "Kruvasan Kahvaltı Tabağı",
        desc: "Tereyağlı çıtır kruvasan, taze avokado, sahanda göz yumurta & taze meyve suyu",
        price: "₺280",
        tag: "Günün Favorisi",
        badgeColor: "bg-amber-500",
        img: "/images/modules/tv-menu/kruvasan-kahvalti.png",
      },
      {
        id: 2,
        name: "Serpme Gurme Kahvaltı",
        desc: "Ezine peynir seçkisi, petek bal-kaymak, sahanda sucuklu yumurta & sınırsız çay",
        price: "₺460",
        tag: "Hafta Sonu Özel",
        badgeColor: "bg-rose-500",
        img: "/images/modules/tv-menu/serpme-kahvalti.jpg",
      },
      {
        id: 3,
        name: "San Sebastian Cheesecake",
        desc: "İpeksi kremsi doku, karamelize yanık kabuk ve sıcak Belçika çikolatası",
        price: "₺210",
        tag: "Tatlı",
        badgeColor: "bg-purple-500",
        img: "/images/modules/tv-menu/san-sebastian.jpg",
      },
      {
        id: 4,
        name: "Çıtır Tavuk Dürüm Menü",
        desc: "Marine çıtır tavuk parçaları, baharatlı patates kızartması & soğuk kutu içecek",
        price: "₺290",
        tag: "Fırsat",
        badgeColor: "bg-emerald-500",
        img: "/images/modules/tv-menu/citir-tavuk-menu.png",
      },
    ],
    dinner: [
      {
        id: 1,
        name: "Çıtır Tavuk Dürüm Menü",
        desc: "Marine çıtır tavuk parçaları, baharatlı patates kızartması & soğuk kutu içecek",
        price: "₺290",
        tag: "Popüler Menü",
        badgeColor: "bg-emerald-500",
        img: "/images/modules/tv-menu/citir-tavuk-menu.png",
      },
      {
        id: 2,
        name: "San Sebastian Cheesecake",
        desc: "İpeksi kremsi doku, karamelize yanık kabuk ve sıcak Belçika çikolatası",
        price: "₺210",
        tag: "Şefin Tatlısı",
        badgeColor: "bg-purple-500",
        img: "/images/modules/tv-menu/san-sebastian.jpg",
      },
      {
        id: 3,
        name: "Kruvasan Kahvaltı Tabağı",
        desc: "Tereyağlı çıtır kruvasan, taze avokado, sahanda göz yumurta & taze meyve suyu",
        price: "₺280",
        tag: "Brunch",
        badgeColor: "bg-amber-500",
        img: "/images/modules/tv-menu/kruvasan-kahvalti.png",
      },
      {
        id: 4,
        name: "Serpme Gurme Kahvaltı",
        desc: "Ezine peynir seçkisi, petek bal-kaymak, sahanda sucuklu yumurta & sınırsız çay",
        price: "₺460",
        tag: "Günün Seçkisi",
        badgeColor: "bg-rose-500",
        img: "/images/modules/tv-menu/serpme-kahvalti.jpg",
      },
    ],
  };

  const handleSyncPrices = () => {
    setIsUpdatingPrices(true);
    setTimeout(() => {
      setIsUpdatingPrices(false);
      setSyncToast(true);
      setTimeout(() => setSyncToast(false), 2500);
    }, 1200);
  };

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      
      {/* SaaS Admin Management Frame */}
      <div className="w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden border border-border/70">
        <BrowserMockup url="app.oxonompos.com/tv-signage/menu-boards">
          <div className="bg-background text-foreground min-h-[600px] p-4 sm:p-6 text-left flex flex-col justify-between">
            
            {/* Top Control Bar inside SaaS */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-xl bg-linear-to-br from-amber-500 to-rose-600 text-white flex items-center justify-center shadow-md">
                  <Tv className="size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-foreground">Dijital Menü Panosu &amp; TV Yayını</h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500/10 text-amber-600 border border-amber-500/30 uppercase tracking-wider">
                      Çok Yakında
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Restoran TV ekranlarında animasyonlu menü, kampanya ve reklam içeriklerini canlı yayınlayın.
                  </p>
                </div>
              </div>

              {/* Interactive Toolbar Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSyncPrices}
                  disabled={isUpdatingPrices}
                  className="px-3 py-1.5 rounded-xl border border-border/70 bg-card hover:bg-muted text-xs font-bold text-foreground flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <RefreshCw className={`size-3.5 ${isUpdatingPrices ? "animate-spin text-primary" : "text-muted-foreground"}`} />
                  <span>{isUpdatingPrices ? "POS Eşitleniyor..." : "POS Fiyatlarını Eşitle"}</span>
                </button>

                <div className="px-2.5 py-1 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60 text-xs font-bold flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>3 TV Ekranı Canlıda</span>
                </div>
              </div>
            </div>

            {/* Sync Alert Toast */}
            {syncToast && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md flex items-center justify-between animate-in fade-in duration-150">
                <div className="flex items-center gap-2">
                  <Check className="size-4" />
                  <span>Kasa POS menü fiyatları tüm TV ekranlarında anında güncellendi!</span>
                </div>
                <span className="text-[10px] opacity-80">Canlı Senkron</span>
              </div>
            )}

            {/* Live TV Screen Simulator Container */}
            <div className="relative w-full rounded-2xl bg-neutral-950 p-3 sm:p-5 border-4 border-neutral-800 shadow-2xl overflow-hidden">
              
              {/* TV Bezel Header / Status */}
              <div className="flex items-center justify-between text-neutral-400 text-[10px] mb-3 pb-2 border-b border-neutral-800">
                <div className="flex items-center gap-2 font-mono">
                  <span className="size-1.5 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-white font-bold">OXONOM SMART TV SIGNAGE</span>
                  <span>• Salon Ekranı #1 (4K Ultra HD)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-neutral-300">
                    <Clock className="size-3" />
                    <span>Otomatik Akış: {timeOfDay === "lunch" ? "Öğle Menüsü" : timeOfDay === "breakfast" ? "Kahvaltı" : "Akşam"}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-200 font-bold">16:9 TV</span>
                </div>
              </div>

              {/* TV Digital Menu Board Content */}
              <div className="space-y-4">
                
                {/* Board Top Header: Brand & Live Promotion */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="size-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-sm shadow-md">
                      OX
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-white tracking-wide">
                        GURME LEZZETLER MENÜSÜ
                      </h3>
                      <p className="text-[10px] text-neutral-400">Şefin Taze Malzemelerle Hazırlanan Özel Seçkisi</p>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 rounded-full bg-linear-to-r from-amber-500 to-rose-600 text-white text-xs font-black flex items-center gap-1.5 shadow-md animate-pulse">
                    <Flame className="size-3.5" />
                    <span>GÜNÜN FIRSATI: Menü Yanında İçecek Hediye!</span>
                  </div>
                </div>

                {/* Menu Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {menuItems[timeOfDay].map((item) => (
                    <div
                      key={item.id}
                      className="group relative rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-rose-500/60 p-2.5 flex flex-col justify-between transition-all hover:scale-102 hover:shadow-xl"
                    >
                      {/* Image Thumbnail */}
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-950 mb-2">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className={`absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md text-[9px] font-black text-white ${item.badgeColor} shadow-md`}>
                          {item.tag}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-black text-white group-hover:text-amber-400 transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-xs font-black text-rose-400 font-mono">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-[10px] text-neutral-400 line-clamp-2 leading-snug">
                          {item.desc}
                        </p>
                      </div>

                      {/* Live Animation Indicator */}
                      <div className="mt-2 pt-1.5 border-t border-neutral-800/80 flex items-center justify-between text-[9px] text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Sparkles className="size-2.5 text-amber-400" />
                          <span>Otomatik Animasyonlu</span>
                        </span>
                        <span className="text-emerald-400 font-bold">Stokta</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dynamic Bottom Ticker / Campaign Strip */}
                {campaignActive && (
                  <div className="rounded-xl bg-linear-to-r from-rose-950/90 via-neutral-900 to-amber-950/90 border border-rose-800/40 p-2.5 flex items-center justify-between overflow-hidden shadow-inner">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded-md bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider animate-pulse">
                        CANLI DUYURU
                      </span>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-neutral-200 font-medium overflow-hidden whitespace-nowrap pl-4">
                      <span className="flex items-center gap-1.5">
                        <Flame className="size-3.5 text-rose-400" />
                        <span>🥐 Kruvasan Kahvaltı Tabağı + Taze İçecek Menüsü Sadece ₺280!</span>
                      </span>
                      <span className="text-neutral-600">•</span>
                      <span>🍳 Serpme Gurme Kahvaltıda Sınırsız Semaver Çay İkramımızdır</span>
                      <span className="text-neutral-600">•</span>
                      <span>🍗 Çıtır Tavuk Dürüm Menü Siparişinde Patates Boyu Büyütme Hediye</span>
                      <span className="text-neutral-600">•</span>
                      <span>🍰 San Sebastian Cheesecake Yanında Sıcak Belçika Çikolatası Sosu Ücretsiz</span>
                    </div>
                  </div>
                )}

              </div>

              {/* TV Stand subtle design */}
              <div className="mt-3 flex justify-center">
                <div className="w-24 h-1 rounded-full bg-neutral-800" />
              </div>
            </div>

            {/* Bottom Interactive Control Panel (Editör Ayarları) */}
            <div className="mt-5 p-4 rounded-xl bg-muted/40 border border-border/60 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                <span className="font-bold text-foreground flex items-center gap-1.5">
                  <Sliders className="size-3.5 text-primary" />
                  <span>Yönetim Paneli Canlı Simülasyonu:</span>
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Aşağıdaki kontrolleri değiştirerek TV ekranının anında nasıl tepki verdiğini deneyin.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Toggle 1: Time of Day Flow */}
                <div className="p-2.5 rounded-lg bg-card border border-border/60 space-y-1.5">
                  <label className="text-[11px] font-bold text-muted-foreground block">
                    Günün Saati (Otomatik Akış)
                  </label>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setTimeOfDay("breakfast")}
                      className={`flex-1 py-1 px-2 rounded-md text-[10px] font-bold transition-all ${
                        timeOfDay === "breakfast" ? "bg-amber-500 text-white" : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Kahvaltı
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimeOfDay("lunch")}
                      className={`flex-1 py-1 px-2 rounded-md text-[10px] font-bold transition-all ${
                        timeOfDay === "lunch" ? "bg-rose-600 text-white" : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Öğle / Akşam
                    </button>
                  </div>
                </div>

                {/* Toggle 2: Campaign Banner */}
                <div className="p-2.5 rounded-lg bg-card border border-border/60 space-y-1.5">
                  <label className="text-[11px] font-bold text-muted-foreground block">
                    Alt Duyuru &amp; Reklam Bandı
                  </label>
                  <button
                    type="button"
                    onClick={() => setCampaignActive(!campaignActive)}
                    className={`w-full py-1 px-2 rounded-md text-[10px] font-bold transition-all flex items-center justify-center gap-1.5 ${
                      campaignActive
                        ? "bg-emerald-600 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <span>{campaignActive ? "✓ Canlı Reklam Aktif" : "Reklam Bandı Kapalı"}</span>
                  </button>
                </div>

                {/* Toggle 3: Auto Price Sync */}
                <div className="p-2.5 rounded-lg bg-card border border-border/60 space-y-1.5">
                  <label className="text-[11px] font-bold text-muted-foreground block">
                    POS Fiyat Entegrasyonu
                  </label>
                  <button
                    type="button"
                    onClick={handleSyncPrices}
                    className="w-full py-1 px-2 rounded-md text-[10px] font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center justify-center gap-1"
                  >
                    <RefreshCw className="size-3" />
                    <span>Fiyatları Test Et</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </BrowserMockup>
      </div>

      {/* Feature Badges below simulator */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-2xl text-xs font-semibold text-muted-foreground">
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Tv className="size-3.5 text-rose-500" />
          <span>Tüm Akıllı TV ve HDMI Cihazlarla Uyumlu</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <RefreshCw className="size-3.5 text-amber-500" />
          <span>Panelden Tek Tıkla Anında Güncelleme</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Clock className="size-3.5 text-blue-500" />
          <span>Günün Saatine Göre Değişen Menü</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Flame className="size-3.5 text-emerald-500" />
          <span>Animasyonlu Kampanya ve Reklam Bandı</span>
        </span>
      </div>

    </div>
  );
}
