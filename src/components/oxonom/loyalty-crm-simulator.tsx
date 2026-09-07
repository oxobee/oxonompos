"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Gift, 
  Users, 
  Sparkles, 
  Cake, 
  Calendar, 
  Phone, 
  Eye, 
  Trash2, 
  Search, 
  ShieldCheck, 
  Heart, 
  Receipt, 
  TrendingUp, 
  ShoppingBag, 
  Check, 
  X,
  CreditCard,
  Percent,
  CheckCircle2,
  QrCode
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";

export type LoyaltyViewTab = "list" | "profile" | "qr_signup";

export interface LoyaltyCrmSimulatorProps {
  className?: string;
  showOriginalToggle?: boolean;
}

export function LoyaltyCrmSimulator({
  className = "",
  showOriginalToggle = true,
}: LoyaltyCrmSimulatorProps) {
  const [viewMode, setViewMode] = useState<"interactive" | "original">("interactive");
  const [originalIndex, setOriginalIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<LoyaltyViewTab>("list");
  const [autoDiscountActive, setAutoDiscountActive] = useState<boolean>(true);
  const [selectedDaysBefore, setSelectedDaysBefore] = useState<string>("7");
  const [discountPercent, setDiscountPercent] = useState<string>("10");
  const [savedSettingsFeedback, setSavedSettingsFeedback] = useState<boolean>(false);
  const [vipDiscountActive, setVipDiscountActive] = useState<boolean>(true);

  const handleSaveSettings = () => {
    setSavedSettingsFeedback(true);
    setTimeout(() => setSavedSettingsFeedback(false), 2000);
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

      {/* Main Browser Window */}
      <div className="w-full max-w-4xl shadow-2xl">
        <BrowserMockup url="app.oxonompos.com/customers-loyalty">
          {viewMode === "interactive" ? (
            /* VIEW MODE A: INTERACTIVE SAAS COMPONENT */
            <div className="bg-background text-foreground min-h-[500px] p-4 sm:p-6 text-left flex flex-col justify-between">
              {/* Studio Header */}
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center font-bold text-xs">
                    OX
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Kayıtlı Müşteriler &amp; Sadakat Kulübü</h4>
                    <p className="text-[11px] text-muted-foreground">
                      QR menüden doğum günü ve özel kampanyalara kaydolan müşterilerin profilleri ve otomasyonları.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Sadakat &amp; Otomasyon Aktif</span>
                  </span>
                  <div className="size-6 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center">
                    <X className="size-3.5" />
                  </div>
                </div>
              </div>

              {/* TAB 1: CUSTOMER LIST & BIRTHDAY AUTOMATION SETTINGS */}
              {activeTab === "list" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  {/* 3 Top KPI Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl bg-card border border-border/70 shadow-xs flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                        <Users className="size-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-muted-foreground uppercase">Kayıtlı Müşteri</div>
                        <div className="text-xl font-black text-foreground mt-0.5">3</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-card border border-border/70 shadow-xs flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                        <Cake className="size-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-muted-foreground uppercase">Bu Ay Doğanlar</div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-xl font-black text-foreground">3</span>
                          <span className="px-1.5 py-0.2 rounded-md text-[9px] font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                            Kutlama Fırsatı 🎁
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-card border border-border/70 shadow-xs flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                        <Gift className="size-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-muted-foreground uppercase">Sadakat &amp; Kampanyalar</div>
                        <div className="text-xs font-bold text-emerald-600 mt-1 flex items-center gap-1">
                          <Check className="size-3" />
                          <span>Otomatik İndirim Aktif</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Birthday Automation Settings Box */}
                  <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-xs font-bold text-foreground">Doğum Günü Otomasyonu</h5>
                        <p className="text-[10px] text-muted-foreground">
                          Müşterilerin doğum gününden önce otomatik SMS / bildirim ve indirim tanımlanır.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setAutoDiscountActive(!autoDiscountActive)}
                        className={`w-10 h-5 rounded-full p-0.5 transition-colors ${
                          autoDiscountActive ? "bg-red-600" : "bg-neutral-300 dark:bg-neutral-700"
                        }`}
                      >
                        <div
                          className={`size-4 rounded-full bg-white transition-transform ${
                            autoDiscountActive ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                      <div className="sm:col-span-3 flex items-center gap-1.5">
                        <span className="text-[11px] text-muted-foreground">Gün önce:</span>
                        <input
                          type="text"
                          value={selectedDaysBefore}
                          onChange={(e) => setSelectedDaysBefore(e.target.value)}
                          className="w-14 px-2 py-1 rounded-lg border border-border bg-background text-xs font-bold text-center focus:outline-none"
                        />
                      </div>
                      <div className="sm:col-span-5 flex items-center gap-1.5">
                        <span className="text-[11px] text-muted-foreground">İndirim:</span>
                        <span className="text-xs font-bold px-2 py-1 bg-muted rounded-lg">%</span>
                        <input
                          type="text"
                          value={discountPercent}
                          onChange={(e) => setDiscountPercent(e.target.value)}
                          className="w-16 px-2 py-1 rounded-lg border border-border bg-background text-xs font-bold text-center focus:outline-none"
                        />
                      </div>
                      <div className="sm:col-span-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleSaveSettings}
                          className="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1"
                        >
                          {savedSettingsFeedback ? (
                            <>
                              <Check className="size-3" />
                              <span>Kaydedildi!</span>
                            </>
                          ) : (
                            <span>Ayarları Kaydet</span>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-muted/40 border border-border/50 text-[11px] text-foreground/90 font-mono">
                      "Merhaba {"{name}"}, doğum gününüze özel %{discountPercent} indirim sizi bekliyor. Sizi ağırlamaktan mutluluk duyarız!"
                    </div>
                  </div>

                  {/* Customer Table */}
                  <div className="rounded-2xl border border-border/80 overflow-hidden shadow-2xs">
                    <div className="p-2.5 bg-muted/30 border-b border-border/60 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 bg-background border border-border/80 rounded-xl px-2.5 py-1 text-xs w-64">
                        <Search className="size-3 text-muted-foreground" />
                        <input
                          type="text"
                          readOnly
                          placeholder="İsim veya telefon ile ara..."
                          className="bg-transparent focus:outline-none text-[11px] w-full"
                        />
                      </div>
                      <span className="text-[10px] font-semibold text-muted-foreground">
                        3 Kayıtlı Müşteri Listeleniyor
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-muted/50 text-[10px] text-muted-foreground uppercase font-bold border-b border-border/60">
                          <tr>
                            <th className="py-2 px-3">Müşteri</th>
                            <th className="py-2 px-3">Telefon</th>
                            <th className="py-2 px-3">Doğum Tarihi</th>
                            <th className="py-2 px-3">Sipariş Sayısı</th>
                            <th className="py-2 px-3">Toplam Harcama</th>
                            <th className="py-2 px-3 text-right">İşlemler</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60">
                          <tr className="hover:bg-muted/20 transition-colors">
                            <td className="py-2.5 px-3 flex items-center gap-2 font-bold">
                              <div className="size-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px]">
                                U
                              </div>
                              <span>Uğur Uğursuz</span>
                            </td>
                            <td className="py-2.5 px-3 text-muted-foreground text-[11px] font-mono">+905555555555</td>
                            <td className="py-2.5 px-3">
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">
                                05 Eyl (Bu Ay!)
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-semibold">1 sipariş</td>
                            <td className="py-2.5 px-3 font-extrabold text-red-600">₺440,00</td>
                            <td className="py-2.5 px-3 text-right">
                              <button
                                type="button"
                                onClick={() => setActiveTab("profile")}
                                className="p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                              >
                                <Eye className="size-3.5" />
                              </button>
                            </td>
                          </tr>

                          {/* Featured Row: Tayfun Keleş */}
                          <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                            <td className="py-2.5 px-3 flex items-center gap-2 font-bold text-foreground">
                              <div className="size-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px]">
                                T
                              </div>
                              <div>
                                <div className="leading-none">Tayfun Keleş</div>
                                <span className="text-[9px] text-emerald-600 font-semibold">Sadık Müşteri ⭐</span>
                              </div>
                            </td>
                            <td className="py-2.5 px-3 text-muted-foreground text-[11px] font-mono">+905550570368</td>
                            <td className="py-2.5 px-3">
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">
                                03 Eyl (Bu Ay!)
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-bold text-foreground">4 sipariş</td>
                            <td className="py-2.5 px-3 font-black text-red-600">₺3.637,00</td>
                            <td className="py-2.5 px-3 text-right">
                              <button
                                type="button"
                                onClick={() => setActiveTab("profile")}
                                className="px-2 py-1 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold shadow-xs hover:bg-primary/90 transition-all inline-flex items-center gap-1"
                              >
                                <Eye className="size-3" />
                                <span>Profili Gör</span>
                              </button>
                            </td>
                          </tr>

                          <tr className="hover:bg-muted/20 transition-colors">
                            <td className="py-2.5 px-3 flex items-center gap-2 font-bold">
                              <div className="size-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px]">
                                U
                              </div>
                              <span>Uğur UĞURLU</span>
                            </td>
                            <td className="py-2.5 px-3 text-muted-foreground text-[11px] font-mono">+905550570369</td>
                            <td className="py-2.5 px-3">
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">
                                03 Eyl (Bu Ay!)
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-semibold">0 sipariş</td>
                            <td className="py-2.5 px-3 font-semibold text-muted-foreground">₺0,00</td>
                            <td className="py-2.5 px-3 text-right">
                              <button
                                type="button"
                                onClick={() => setActiveTab("profile")}
                                className="p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                              >
                                <Eye className="size-3.5" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: DETAILED CUSTOMER PROFILE & CRM MODAL */}
              {activeTab === "profile" && (
                <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  {/* Modal Header */}
                  <div className="flex items-start justify-between border-b border-border/60 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-base shadow-sm">
                        T
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-extrabold text-foreground leading-tight">Tayfun Keleş</h4>
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                            🎂 Bu Ay Doğum Günü!
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground mt-1">
                          <span className="flex items-center gap-1 font-mono">
                            <Phone className="size-2.5" />
                            +905550570368
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="size-2.5" />
                            03 Eyl 2026
                          </span>
                          <span>•</span>
                          <span className="px-1.5 py-0.2 bg-muted rounded font-semibold text-[9px]">
                            Kaynak: QR_MENU
                          </span>
                          <span className="px-1.5 py-0.2 bg-emerald-50 text-emerald-700 rounded font-bold text-[9px] flex items-center gap-0.5">
                            <ShieldCheck className="size-2.5" /> KVKK Onaylı
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveTab("list")}
                      className="size-7 rounded-full bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors"
                    >
                      <X className="size-4" />
                    </button>
                  </div>

                  {/* 4 Financial & Visit KPI Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                    <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
                      <div className="text-[10px] text-muted-foreground font-semibold">Toplam Sipariş</div>
                      <div className="text-lg font-black text-red-600 mt-0.5">4 kez</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
                      <div className="text-[10px] text-muted-foreground font-semibold">Toplam Harcama</div>
                      <div className="text-lg font-black text-foreground mt-0.5">₺3.637,00</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
                      <div className="text-[10px] text-muted-foreground font-semibold">Ort. Sepet Tutarı</div>
                      <div className="text-lg font-black text-foreground mt-0.5">₺909,25</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60">
                      <div className="text-[10px] text-muted-foreground font-semibold">Kayıt Tarihi</div>
                      <div className="text-xs font-bold text-foreground mt-1">31 Ağu 2026</div>
                    </div>
                  </div>

                  {/* Customer Specific Discount Box */}
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                        <Gift className="size-3.5 text-primary" />
                        <span>Müşteri İndirimleri</span>
                      </div>
                      <span className="text-[9px] text-muted-foreground font-medium">
                        Hesap kapanırken kasada otomatik uygulanır
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-card border border-border/70">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          %10 İndirim
                        </span>
                        <span className="text-xs font-medium text-foreground">Her siparişte - %10</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setVipDiscountActive(!vipDiscountActive)}
                        className={`w-9 h-4.5 rounded-full p-0.5 transition-colors ${
                          vipDiscountActive ? "bg-red-600" : "bg-neutral-300 dark:bg-neutral-700"
                        }`}
                      >
                        <div
                          className={`size-3.5 rounded-full bg-white transition-transform ${
                            vipDiscountActive ? "translate-x-4.5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Favorite Taste Profile (Kim Ne Seviyor?) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-foreground">
                      <div className="flex items-center gap-1.5">
                        <Heart className="size-3.5 text-red-500 fill-red-500" />
                        <span>EN ÇOK TERCİH ETTİĞİ LEZZETLER</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-normal">Top 3 Ürün</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="p-2 rounded-xl bg-muted/40 border border-border/60 text-xs">
                        <div className="flex items-center justify-between font-bold">
                          <span>⭐ Burger Menü</span>
                          <span className="text-primary font-black">6 kez</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">Toplam: ₺2.640,00</div>
                      </div>

                      <div className="p-2 rounded-xl bg-muted/40 border border-border/60 text-xs">
                        <div className="flex items-center justify-between font-bold">
                          <span>⭐ Kutu Kola</span>
                          <span className="text-primary font-black">4 kez</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">Toplam: ₺492,00</div>
                      </div>

                      <div className="p-2 rounded-xl bg-muted/40 border border-border/60 text-xs">
                        <div className="flex items-center justify-between font-bold">
                          <span>⭐ Hamburger Menü</span>
                          <span className="text-primary font-black">1 kez</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">Toplam: ₺470,00</div>
                      </div>
                    </div>
                  </div>

                  {/* Order History Sample */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-foreground">
                      <div className="flex items-center gap-1.5">
                        <Receipt className="size-3.5 text-primary" />
                        <span>SİPARİŞ GEÇMİŞİ (4)</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-normal">Tarihsel Sıralı</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-xl bg-muted/30 border border-border/60 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold">Sipariş #31 • 03 Eyl</span>
                          <span className="px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded text-[9px] font-bold">Tamamlandı</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground">Masa: Masa - 13 • 1x Hamburger, 2x Kutu Kola</div>
                        <div className="text-xs font-black text-red-600 text-right">₺716,00</div>
                      </div>

                      <div className="p-2 rounded-xl bg-muted/30 border border-border/60 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold">Sipariş #30 • 03 Eyl</span>
                          <span className="px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded text-[9px] font-bold">Tamamlandı</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground">Masa: Masa - 13 • 1x Burger Menü</div>
                        <div className="text-xs font-black text-red-600 text-right">₺440,00</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("list")}
                      className="px-4 py-1.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-bold text-xs transition-colors"
                    >
                      Kapat
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* VIEW MODE B: ORIGINAL SCREENSHOTS */
            <div className="relative w-full bg-neutral-900 p-2 sm:p-4 flex flex-col items-center justify-center min-h-[440px]">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-inner">
                <Image
                  src={
                    originalIndex === 0
                      ? "/images/loyalty-crm-list.png"
                      : "/images/loyalty-crm-customer-detail.png"
                  }
                  alt="Orijinal Müşteri Sadakat & CRM Ekranı"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain object-center"
                />
              </div>
              <div className="flex items-center gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setOriginalIndex(0)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                    originalIndex === 0 ? "bg-white text-black" : "bg-neutral-800 text-neutral-400"
                  }`}
                >
                  1. Müşteri Listesi &amp; Doğum Günü Paneli
                </button>
                <button
                  type="button"
                  onClick={() => setOriginalIndex(1)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                    originalIndex === 1 ? "bg-white text-black" : "bg-neutral-800 text-neutral-400"
                  }`}
                >
                  2. Müşteri Detay, Lezzet Tercihi &amp; İndirim Kartı
                </button>
              </div>
            </div>
          )}
        </BrowserMockup>
      </div>

      {/* Navigation Switchers Below Browser */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-lg">
        <button
          type="button"
          onClick={() => {
            setViewMode("interactive");
            setActiveTab("list");
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeTab === "list" && viewMode === "interactive"
              ? "bg-primary text-primary-foreground shadow-xs scale-102"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          <Users className="size-3.5" />
          <span>1. Müşteri Listesi &amp; Otomasyon</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setViewMode("interactive");
            setActiveTab("profile");
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeTab === "profile" && viewMode === "interactive"
              ? "bg-amber-600 text-white shadow-xs scale-102"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          <Heart className="size-3.5" />
          <span>2. Müşteri Profili &amp; Tercihleri (Tayfun Keleş)</span>
        </button>
      </div>
    </div>
  );
}
