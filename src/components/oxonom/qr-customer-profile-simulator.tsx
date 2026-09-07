"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Star, 
  Bell, 
  Wifi, 
  Copy, 
  Check, 
  Share2, 
  X, 
  Heart, 
  Receipt, 
  LogOut,
  ChevronRight,
  Cake,
  Home,
  Grid,
  User,
  Award,
  Smartphone
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";

export type QrProfileModalType = "none" | "social" | "review";

export interface QrCustomerProfileSimulatorProps {
  className?: string;
  showOriginalToggle?: boolean;
}

export function QrCustomerProfileSimulator({
  className = "",
  showOriginalToggle = true,
}: QrCustomerProfileSimulatorProps) {
  const [viewMode, setViewMode] = useState<"interactive" | "original">("interactive");
  const [originalIndex, setOriginalIndex] = useState<number>(0);
  
  // Interactive States
  const [activeModal, setActiveModal] = useState<QrProfileModalType>("none");
  const [waiterCalled, setWaiterCalled] = useState<boolean>(false);
  const [wifiCopied, setWifiCopied] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(5);
  const [reviewSent, setReviewSent] = useState<boolean>(false);
  const [reviewComment, setReviewComment] = useState<string>("");

  const originalScreens = [
    {
      title: "1. Profil & Lezzet Tercihleri",
      subtitle: "Ziyaret sayısı, ciro ve favori lezzetler",
      src: "/images/qr-profile-main.png",
      badge: "Müşteri Profili"
    },
    {
      title: "2. Hızlı Aksiyonlar & Wi-Fi",
      subtitle: "Garson çağır, puanlama ve tek tıkla Wi-Fi",
      src: "/images/qr-profile-actions.png",
      badge: "Masa İşlemleri"
    },
    {
      title: "3. Sosyal Medyada Biz",
      subtitle: "Instagram, Facebook ve Google Haritalar yönlendirmesi",
      src: "/images/qr-profile-social.png",
      badge: "Sosyal Etkileşim"
    },
    {
      title: "4. Bizi Değerlendirin",
      subtitle: "5 yıldızlı müşteri memnuniyet puanlama arayüzü",
      src: "/images/qr-profile-review.png",
      badge: "Yıldızlı Geri Bildirim"
    },
  ];

  const handleCallWaiter = () => {
    setWaiterCalled(true);
    setTimeout(() => setWaiterCalled(false), 3500);
  };

  const handleCopyWifi = () => {
    setWifiCopied(true);
    navigator.clipboard?.writeText("Lezzet2024*");
    setTimeout(() => setWifiCopied(false), 2500);
  };

  const handleSendReview = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSent(true);
    setTimeout(() => {
      setReviewSent(false);
      setActiveModal("none");
      setReviewComment("");
    }, 2000);
  };

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* Top View Mode Switcher */}
      {showOriginalToggle && (
        <div className="flex items-center gap-1.5 p-1 bg-muted/80 backdrop-blur-sm border border-border/80 rounded-full mb-4 shadow-xs text-xs font-semibold">
          <button
            type="button"
            onClick={() => setViewMode("interactive")}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              viewMode === "interactive"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className="size-3.5" />
            <span>İnteraktif Deneyim</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("original")}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              viewMode === "original"
                ? "bg-background text-foreground shadow-xs border border-border/60"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Smartphone className="size-3.5" />
            <span>Orijinal Ekran Görüntüleri (4 Ekran)</span>
          </button>
        </div>
      )}

      {/* Main SaaS Browser Mockup */}
      <div className="w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden border border-border/60">
        <BrowserMockup url="menu.oxonompos.com/masa-11/profil">
          {viewMode === "interactive" ? (
            /* VIEW MODE 1: INTERACTIVE SIMULATOR */
            <div className="bg-muted/30 text-foreground min-h-[580px] p-4 sm:p-6 text-left relative flex flex-col items-center">
              
              {/* Context Header banner inside Browser */}
              <div className="w-full max-w-md mb-3 flex items-center justify-between px-3 py-2 rounded-xl bg-card border border-border/60 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-foreground">Canlı Masa Oturumu: Masa 11</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium">
                  <span>Misafir: Tayfun Keleş</span>
                </div>
              </div>

              {/* Mobile Phone Simulated Canvas */}
              <div className="w-full max-w-sm bg-background border border-border/70 rounded-3xl shadow-xl overflow-hidden relative flex flex-col min-h-[560px]">
                
                {/* Simulated App Bar */}
                <div className="px-4 py-3 border-b border-border/50 flex items-center justify-between bg-card/80 backdrop-blur-sm sticky top-0 z-10">
                  <button type="button" className="size-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground">
                    <ChevronRight className="size-4 rotate-180" />
                  </button>
                  <h3 className="text-xs sm:text-sm font-black text-foreground tracking-tight">
                    Müşteri Profili &amp; Masa
                  </h3>
                  <div className="size-8" />
                </div>

                {/* Toast Alerts (Call Waiter / Wifi Copy) */}
                {waiterCalled && (
                  <div className="absolute top-14 inset-x-4 z-30 p-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-lg flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center gap-2">
                      <Bell className="size-4 animate-bounce" />
                      <span>Garson çağrısı iletildi! Masa 11</span>
                    </div>
                    <Check className="size-3.5" />
                  </div>
                )}

                {wifiCopied && (
                  <div className="absolute top-14 inset-x-4 z-30 p-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-lg flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center gap-2">
                      <Wifi className="size-4" />
                      <span>Wi-Fi şifresi kopyalandı!</span>
                    </div>
                    <Check className="size-3.5" />
                  </div>
                )}

                {/* Scrollable Content */}
                <div className="p-3.5 space-y-3.5 overflow-y-auto max-h-[480px] pb-16">
                  
                  {/* Restaurant & Table Info Card */}
                  <div className="p-3 rounded-2xl bg-card border border-border/60 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="size-10 rounded-full bg-muted/80 flex items-center justify-center text-muted-foreground">
                        <User className="size-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-foreground">Ugur Burger</div>
                        <div className="text-[10px] text-muted-foreground">Müşteri &amp; Masa Paneli</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200/50">
                      🍽️ Masa - 11
                    </span>
                  </div>

                  {/* Customer Identity Card */}
                  <div className="p-3.5 rounded-2xl bg-card border border-border/60 shadow-2xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-2xl bg-rose-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
                        T
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs sm:text-sm font-black text-foreground">Tayfun Keleş</span>
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200/60 flex items-center gap-1">
                            <Cake className="size-2.5" />
                            <span>Doğum Günü Kayıtlı</span>
                          </span>
                        </div>
                        <div className="text-[11px] text-muted-foreground font-mono mt-0.5">
                          +905550570368
                        </div>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      title="Çıkış Yap"
                      className="size-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground"
                    >
                      <LogOut className="size-3.5" />
                    </button>
                  </div>

                  {/* KPI Stats */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-2xl bg-card border border-border/60 text-center shadow-2xs">
                      <div className="text-[10px] font-medium text-muted-foreground">Sipariş Sayısı</div>
                      <div className="text-sm sm:text-base font-black text-rose-600 mt-0.5">4 kez</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-card border border-border/60 text-center shadow-2xs">
                      <div className="text-[10px] font-medium text-muted-foreground">Toplam Harcama</div>
                      <div className="text-sm sm:text-base font-black text-foreground mt-0.5">₺3.637,00</div>
                    </div>
                  </div>

                  {/* Favorite Tastes */}
                  <div className="p-3.5 rounded-2xl bg-card border border-border/60 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 font-bold text-foreground">
                        <Heart className="size-3.5 text-rose-500 fill-rose-500" />
                        <span>EN ÇOK SEVDİĞİNİZ LEZZETLER</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">Favoriler</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/50 flex items-center gap-1">
                        <Star className="size-3 text-amber-500 fill-amber-500" />
                        <span>Burger Menü</span>
                        <span className="text-[9px] opacity-75 font-mono">(6×)</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/50 flex items-center gap-1">
                        <Star className="size-3 text-amber-500 fill-amber-500" />
                        <span>Kutu Kola</span>
                        <span className="text-[9px] opacity-75 font-mono">(4×)</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/50 flex items-center gap-1">
                        <Star className="size-3 text-amber-500 fill-amber-500" />
                        <span>Hamburger Menü</span>
                        <span className="text-[9px] opacity-75 font-mono">(1×)</span>
                      </span>
                    </div>
                  </div>

                  {/* Order History */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-foreground">
                      <Receipt className="size-3.5 text-rose-600" />
                      <span>GEÇMİŞ SİPARİŞLERİM (4)</span>
                    </div>

                    <div className="space-y-2">
                      {/* Order Item 1 */}
                      <div className="p-3 rounded-2xl bg-card border border-border/60 shadow-2xs space-y-1.5">
                        <div className="flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-foreground">#31</span>
                            <span className="text-muted-foreground">• 03 Eyl 2026</span>
                            <span className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 text-[9px] font-bold">
                              Masa - 13
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200/50 flex items-center gap-1">
                            <Check className="size-2.5" />
                            <span>Tamamlandı</span>
                          </span>
                        </div>
                        <div className="text-[11px] space-y-0.5 pt-1 border-t border-border/40">
                          <div className="flex justify-between text-muted-foreground">
                            <span>1× Hamburger Menü</span>
                            <span className="font-mono text-foreground font-semibold">₺470,00</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>2× Kutu Kola</span>
                            <span className="font-mono text-foreground font-semibold">₺246,00</span>
                          </div>
                          <div className="flex justify-between pt-1 border-t border-border/30 font-bold text-xs text-foreground">
                            <span>Toplam Tutar</span>
                            <span className="text-rose-600 font-black">₺716,00</span>
                          </div>
                        </div>
                      </div>

                      {/* Order Item 2 */}
                      <div className="p-3 rounded-2xl bg-card border border-border/60 shadow-2xs space-y-1.5">
                        <div className="flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-foreground">#30</span>
                            <span className="text-muted-foreground">• 03 Eyl 2026</span>
                            <span className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 text-[9px] font-bold">
                              Masa - 13
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200/50 flex items-center gap-1">
                            <Check className="size-2.5" />
                            <span>Tamamlandı</span>
                          </span>
                        </div>
                        <div className="text-[11px] space-y-0.5 pt-1 border-t border-border/40">
                          <div className="flex justify-between text-muted-foreground">
                            <span>1× Burger Menü</span>
                            <span className="font-mono text-foreground font-semibold">₺440,00</span>
                          </div>
                          <div className="flex justify-between pt-1 border-t border-border/30 font-bold text-xs text-foreground">
                            <span>Toplam Tutar</span>
                            <span className="text-rose-600 font-black">₺440,00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Action 1: Garson Çağır */}
                  <button
                    type="button"
                    onClick={handleCallWaiter}
                    className="w-full p-3 rounded-2xl bg-card hover:bg-muted/50 border border-border/60 flex items-center justify-between group transition-all text-left shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Bell className="size-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-foreground group-hover:text-primary transition-colors">
                          Garson Çağır
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          Masanıza servis personeli yönlendirilsin
                        </div>
                      </div>
                    </div>
                    <div className="size-7 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-950/40 flex items-center justify-center">
                      <ChevronRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>

                  {/* Interactive Action 2: Quick Grid (Bizi Değerlendir & Sosyal Medya) */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setActiveModal("review")}
                      className="p-3 rounded-2xl bg-card hover:bg-muted/50 border border-border/60 text-center flex flex-col items-center justify-center gap-1.5 transition-all group shadow-2xs"
                    >
                      <div className="size-9 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Star className="size-4 fill-amber-500" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-foreground">Bizi Değerlendir</div>
                        <div className="text-[9px] text-muted-foreground">Deneyiminizi puanlayın</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveModal("social")}
                      className="p-3 rounded-2xl bg-card hover:bg-muted/50 border border-border/60 text-center flex flex-col items-center justify-center gap-1.5 transition-all group shadow-2xs"
                    >
                      <div className="size-9 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Share2 className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-foreground">Sosyal Medya</div>
                        <div className="text-[9px] text-muted-foreground">Bizi takip edin &amp; keşfedin</div>
                      </div>
                    </button>
                  </div>

                  {/* Interactive Action 3: Guest Wi-Fi */}
                  <div className="p-3 rounded-2xl bg-card border border-border/60 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-950/50 flex items-center justify-center">
                        <Wifi className="size-3" />
                      </div>
                      <div>
                        <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                          MİSAFİR Wİ-Fİ AĞI
                        </div>
                        <div className="text-xs font-black text-foreground">Misafir Wifi</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-muted/40 border border-border/40">
                      <div className="text-[11px]">
                        <span className="text-muted-foreground">Wi-Fi Şifresi: </span>
                        <span className="font-mono font-bold text-foreground">Lezzet2024*</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyWifi}
                        className="px-2.5 py-1 rounded-lg bg-card hover:bg-muted border border-border/60 text-[10px] font-bold text-foreground flex items-center gap-1 transition-colors"
                      >
                        {wifiCopied ? (
                          <>
                            <Check className="size-3 text-emerald-600" />
                            <span className="text-emerald-600">Kopyalandı</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3 text-muted-foreground" />
                            <span>Kopyala</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>

                {/* Simulated Mobile Bottom Navigation Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-card/95 backdrop-blur-md border-t border-border/60 px-4 py-2 flex items-center justify-around z-20">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <Home className="size-4" />
                    <span className="text-[9px] mt-0.5">Ana Sayfa</span>
                  </div>
                  <div className="flex flex-col items-center text-muted-foreground">
                    <Grid className="size-4" />
                    <span className="text-[9px] mt-0.5">Kategori</span>
                  </div>
                  <div className="flex flex-col items-center text-pink-500">
                    <div className="size-6 rounded-full bg-pink-500/10 flex items-center justify-center">
                      <Sparkles className="size-3" />
                    </div>
                    <span className="text-[9px] mt-0.5 font-bold">AI Danışman</span>
                  </div>
                  <div className="flex flex-col items-center text-rose-600 font-bold">
                    <div className="size-6 rounded-full bg-rose-50 dark:bg-rose-950/60 flex items-center justify-center">
                      <User className="size-3" />
                    </div>
                    <span className="text-[9px] mt-0.5">Profil</span>
                  </div>
                </div>

                {/* MODAL 1: BİZİ DEĞERLENDİRİN (RATING) */}
                {activeModal === "review" && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-40 flex items-center justify-center p-4 animate-in fade-in duration-150">
                    <div className="w-full max-w-xs bg-card border border-border/70 rounded-3xl p-4 shadow-2xl space-y-3.5 animate-in zoom-in-95 duration-200 text-center">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-foreground">Bizi Değerlendirin ⭐</span>
                        <button
                          type="button"
                          onClick={() => setActiveModal("none")}
                          className="size-6 rounded-full hover:bg-muted flex items-center justify-center text-muted-foreground"
                        >
                          <X className="size-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Bugünkü lezzet ve servis deneyiminizi puanlayın:
                      </p>

                      {/* Star Selection */}
                      <div className="flex justify-center gap-1.5 py-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="p-1 transition-transform hover:scale-115 active:scale-95"
                          >
                            <Star
                              className={`size-6 ${
                                star <= rating
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-muted-foreground/30"
                              }`}
                            />
                          </button>
                        ))}
                      </div>

                      <form onSubmit={handleSendReview} className="space-y-2.5">
                        <textarea
                          rows={3}
                          value={reviewComment}
                          onChange={(e) => setReviewComment(e.target.value)}
                          placeholder="Yorum ve önerileriniz (İsteğe bağlı)..."
                          className="w-full text-xs p-2.5 rounded-xl bg-muted/40 border border-border/60 focus:outline-hidden focus:ring-1 focus:ring-rose-500 text-foreground resize-none"
                        />

                        {reviewSent ? (
                          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-1.5">
                            <Check className="size-4" />
                            <span>Puanınız iletildi, teşekkür ederiz!</span>
                          </div>
                        ) : (
                          <button
                            type="submit"
                            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-black text-xs shadow-md flex items-center justify-center gap-1.5 transition-all"
                          >
                            <Sparkles className="size-3.5" />
                            <span>Puanı Gönder ✨</span>
                          </button>
                        )}
                      </form>
                    </div>
                  </div>
                )}

                {/* MODAL 2: SOSYAL MEDYADA BİZ */}
                {activeModal === "social" && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-40 flex items-center justify-center p-4 animate-in fade-in duration-150">
                    <div className="w-full max-w-xs bg-card border border-border/70 rounded-3xl p-4 shadow-2xl space-y-3.5 animate-in zoom-in-95 duration-200 text-center">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-foreground">Sosyal Medyada Biz 📱</span>
                        <button
                          type="button"
                          onClick={() => setActiveModal("none")}
                          className="size-6 rounded-full hover:bg-muted flex items-center justify-center text-muted-foreground"
                        >
                          <X className="size-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Bizi takip ederek güncel fırsat ve etkinliklerden haberdar olun:
                      </p>

                      <div className="space-y-2 pt-1">
                        <div
                          className="w-full p-2.5 rounded-xl border border-rose-200/60 bg-rose-50/40 dark:bg-rose-950/20 text-rose-600 flex items-center justify-between text-xs font-bold cursor-pointer hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>📸</span>
                            <span>Instagram</span>
                          </div>
                          <ChevronRight className="size-3.5" />
                        </div>

                        <div
                          className="w-full p-2.5 rounded-xl border border-blue-200/60 bg-blue-50/40 dark:bg-blue-950/20 text-blue-600 flex items-center justify-between text-xs font-bold cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>👥</span>
                            <span>Facebook</span>
                          </div>
                          <ChevronRight className="size-3.5" />
                        </div>

                        <div
                          className="w-full p-2.5 rounded-xl border border-emerald-200/60 bg-emerald-50/40 dark:bg-emerald-950/20 text-emerald-600 flex items-center justify-between text-xs font-bold cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Google Haritalar &amp; Yorumlar</span>
                          </div>
                          <ChevronRight className="size-3.5" />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveModal("none")}
                        className="w-full py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-bold text-xs transition-colors"
                      >
                        Kapat
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ) : (
            /* VIEW MODE 2: ORIGINAL SCREENSHOTS IN NATURAL PROPORTION */
            <div className="bg-neutral-950 text-neutral-100 p-4 sm:p-6 flex flex-col items-center justify-center min-h-[560px]">
              
              {/* Screen selector tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-2xl mb-4">
                {originalScreens.map((screen, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setOriginalIndex(idx)}
                    className={`p-2.5 rounded-xl text-left border transition-all text-xs ${
                      originalIndex === idx
                        ? "bg-white text-black border-white shadow-md font-bold"
                        : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800"
                    }`}
                  >
                    <div className="text-[10px] opacity-70 font-semibold">{screen.badge}</div>
                    <div className="truncate font-bold mt-0.5">{screen.title}</div>
                  </button>
                ))}
              </div>

              {/* Natural Proportion Device Mockup Frame (No distortion, no overflow) */}
              <div className="relative w-full max-w-[320px] aspect-[480/1024] max-h-[520px] rounded-3xl overflow-hidden border-4 border-neutral-800 shadow-2xl bg-black">
                <Image
                  src={originalScreens[originalIndex].src}
                  alt={originalScreens[originalIndex].title}
                  fill
                  priority
                  sizes="320px"
                  className="object-contain object-top"
                />
              </div>

              <div className="mt-3 text-center">
                <p className="text-xs font-bold text-neutral-200">
                  {originalScreens[originalIndex].title}
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  {originalScreens[originalIndex].subtitle}
                </p>
              </div>
            </div>
          )}
        </BrowserMockup>
      </div>

      {/* Quick Feature Badges below simulator */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-xl text-xs font-semibold text-muted-foreground">
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Award className="size-3.5 text-amber-500" />
          <span>Sadakat Puanı &amp; Ciro Takibi</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Heart className="size-3.5 text-rose-500" />
          <span>Favori Lezzetler (En Çok Sevdikleri)</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Bell className="size-3.5 text-blue-500" />
          <span>Garson Çağır &amp; Wi-Fi Şifresi</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Star className="size-3.5 text-amber-400" />
          <span>5 Yıldızlı Google Yorum Yönlendirmesi</span>
        </span>
      </div>
    </div>
  );
}
