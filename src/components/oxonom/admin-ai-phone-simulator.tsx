"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  X, 
  Send, 
  Mic, 
  Check, 
  Wifi, 
  Signal, 
  ShieldAlert, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  UserCheck, 
  Flame, 
  DollarSign, 
  Armchair,
  Layers
} from "lucide-react";
import { IphoneMockup } from "@/components/velora/iphone-mockup";

export type AdminAiStage = "welcome" | "ciro" | "security" | "voice" | "confirm";

export interface AdminAiPhoneSimulatorProps {
  initialStage?: AdminAiStage;
  className?: string;
  showOriginalToggle?: boolean;
  onStageChange?: (stage: AdminAiStage) => void;
}

export function AdminAiPhoneSimulator({
  initialStage = "welcome",
  className = "",
  showOriginalToggle = true,
  onStageChange,
}: AdminAiPhoneSimulatorProps) {
  const [currentStage, setCurrentStage] = useState<AdminAiStage>(initialStage);
  const [viewMode, setViewMode] = useState<"interactive" | "original">("interactive");
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [activeRole, setActiveRole] = useState<"manager" | "waiter">("manager");

  const changeStage = (stage: AdminAiStage) => {
    setCurrentStage(stage);
    if (stage === "ciro" || stage === "welcome") {
      setActiveRole("manager");
    } else {
      setActiveRole("waiter");
    }
    if (stage !== "confirm") {
      setIsConfirmed(false);
    }
    onStageChange?.(stage);
  };

  const originalImageMap: Record<AdminAiStage, string> = {
    welcome: "/images/admin-ai-welcome.png",
    ciro: "/images/admin-ai-ciro.png",
    security: "/images/admin-ai-role-security.png",
    voice: "/images/admin-ai-voice.png",
    confirm: "/images/admin-ai-order-confirm.png",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Top Controls: Interactive vs Original View Mode Switcher */}
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
        <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-2xl opacity-40 -z-10" />

        <IphoneMockup className="w-70 sm:w-76 shadow-2xl">
          <div className="relative size-full bg-neutral-900 text-neutral-900 select-none overflow-hidden flex flex-col font-sans">
            {/* 1. iOS Status Bar (Pixel-perfect around Dynamic Island) */}
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
                {/* Background Dimmed Admin/Terminal POS Context */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-35 filter blur-[1.5px]">
                  {/* Top Bar of POS */}
                  <div className="pt-12 px-4 pb-2.5 flex items-center justify-between border-b border-white/10 bg-neutral-900/80">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
                        OX
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white leading-none">Oxonom POS Terminal</div>
                        <div className="text-[9px] text-neutral-400 leading-none mt-0.5">Salon Masaları (18 Aktif)</div>
                      </div>
                    </div>
                  </div>

                  {/* Grid of Tables in background */}
                  <div className="p-3 grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((m) => (
                      <div
                        key={m}
                        className={`h-14 rounded-xl border p-1.5 flex flex-col justify-between ${
                          m === 5
                            ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                            : "bg-white/5 border-white/5 text-neutral-400"
                        }`}
                      >
                        <div className="text-[10px] font-bold">Masa {m}</div>
                        <div className="text-[8px] opacity-80">{m === 5 ? "Sipariş Hazır" : "Açık Hesap"}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The AI Assistant Modal (Pixel-Perfect Scaled UI) */}
                <div className="relative z-10 w-full bg-white text-neutral-900 rounded-t-[1.75rem] shadow-[0_-12px_40px_rgba(0,0,0,0.5)] flex flex-col max-h-[86%] animate-in fade-in slide-in-from-bottom-6 duration-300">
                  {/* Drag handle */}
                  <div className="pt-2 pb-1 flex justify-center">
                    <div className="w-10 h-1 bg-neutral-300 rounded-full" />
                  </div>

                  {/* Assistant Header with Live Role Badge */}
                  <div className="px-3.5 pb-2 pt-1 border-b border-neutral-100 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="relative size-7 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-xs shrink-0">
                        <Sparkles className="size-3.5" />
                        <span className="absolute bottom-0 right-0 size-2 bg-emerald-500 border border-white rounded-full" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-[12px] font-bold text-neutral-900 leading-tight">Oxonom POS Asistan</h4>
                        </div>
                        <div className="text-[9px] text-neutral-500 truncate leading-tight mt-0.5">
                          {activeRole === "manager" ? (
                            <span className="text-indigo-600 font-semibold">Yetki: MANAGER (Uğur UĞURLU)</span>
                          ) : (
                            <span className="text-purple-600 font-semibold">Yetki: Garson (Emre Tekneci)</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Role Pill Badge & Close button */}
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-bold bg-neutral-100 text-neutral-700 border border-neutral-200">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        {activeRole === "manager" ? "Uğur UĞURLU" : "Emre Tekneci"}
                      </span>
                      <button
                        type="button"
                        className="size-6 rounded-full bg-neutral-100 text-neutral-500 hover:text-neutral-900 flex items-center justify-center transition-colors"
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  </div>

                  {/* Conversation Body Area */}
                  <div className="flex-1 overflow-y-auto px-3 py-2.5 space-y-2.5 text-left text-xs leading-relaxed max-h-[300px] scrollbar-thin">
                    {/* Welcome message in Stage 1 */}
                    {currentStage === "welcome" && (
                      <>
                        <div className="flex items-start gap-2">
                          <div className="size-6 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Sparkles className="size-3" />
                          </div>
                          <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl rounded-tl-xs p-2.5 shadow-2xs">
                            <p className="text-[11px] text-neutral-700 leading-normal">
                              Merhaba <strong className="text-neutral-900 font-bold">Uğur UĞURLU</strong>! Ben Oxonom POS Akıllı Restoran Asistanınız. Sipariş ekleme, masa/menü/kasa durumu veya sistem kullanımı hakkında bana her şeyi sorabilirsiniz.
                            </p>
                          </div>
                        </div>

                        {/* Interactive prompt buttons */}
                        <div className="space-y-1.5 pt-0.5 pl-8">
                          <div className="flex flex-col gap-1.5">
                            <button
                              type="button"
                              onClick={() => changeStage("ciro")}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-medium bg-neutral-100 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 border border-neutral-200 text-neutral-700 transition-colors shadow-2xs text-left"
                            >
                              <span>↳ Bugünkü toplam ciro ne kadar?</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => changeStage("voice")}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-medium bg-neutral-100 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 border border-neutral-200 text-neutral-700 transition-colors shadow-2xs text-left"
                            >
                              <span>↳ Masa 5'e 1 Hamburger ekle</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => changeStage("security")}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-medium bg-neutral-100 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 border border-neutral-200 text-neutral-700 transition-colors shadow-2xs text-left"
                            >
                              <span>↳ Sistem ayarlarını aç (Güvenlik Kontrolü)</span>
                            </button>
                          </div>
                          <div className="text-[9px] text-neutral-400">Şimdi</div>
                        </div>
                      </>
                    )}

                    {/* Stage 2: Manager Ciro Query */}
                    {currentStage === "ciro" && (
                      <>
                        <div className="flex justify-end">
                          <div className="bg-indigo-600 text-white rounded-2xl rounded-tr-xs px-3 py-1.5 text-[11px] font-medium max-w-[80%] shadow-2xs">
                            Bugünkü toplam ciro ne kadar?
                          </div>
                        </div>
                        <div className="text-[9px] text-neutral-400 text-right pr-1">07:31</div>

                        <div className="flex items-start gap-2">
                          <div className="size-6 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Sparkles className="size-3" />
                          </div>
                          <div className="space-y-2 flex-1 min-w-0">
                            <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl rounded-tl-xs p-2.5 shadow-2xs">
                              <p className="text-[11px] text-neutral-700 leading-normal">
                                Bugünkü (07 Eylül 2026) tamamlanan ciro henüz bulunmamaktadır. Şu anda masalarda toplam <strong className="text-neutral-900 font-bold">₺2.815,00</strong> tutarında açık hesap bulunmaktadır.
                              </p>
                            </div>

                            {/* Deep Link to Financial Reports */}
                            <div className="p-2 rounded-xl bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <div className="size-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                  <FileText className="size-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[10px] font-bold text-neutral-900 truncate">Finansal Raporlar & Z Raporu</div>
                                  <div className="text-[8px] text-neutral-500 truncate">Günlük ve geçmiş ciro, tahsilat...</div>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-[9px] font-bold flex items-center gap-1 shrink-0 shadow-2xs transition-colors"
                              >
                                <span>Sayfaya Git</span>
                                <ArrowRight className="size-2.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Stage 3: Waiter Role-Based Access Control / Security Shield */}
                    {currentStage === "security" && (
                      <>
                        <div className="flex justify-end">
                          <div className="bg-indigo-600 text-white rounded-2xl rounded-tr-xs px-3 py-1.5 text-[11px] font-medium max-w-[80%] shadow-2xs">
                            sistem ayarlarını aç
                          </div>
                        </div>
                        <div className="text-[9px] text-neutral-400 text-right pr-1">07:32</div>

                        <div className="flex items-start gap-2">
                          <div className="size-6 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Lock className="size-3" />
                          </div>
                          <div className="space-y-2 flex-1 min-w-0">
                            <div className="bg-rose-50/70 border border-rose-200/80 rounded-2xl rounded-tl-xs p-2.5 shadow-2xs">
                              <p className="text-[10.5px] text-rose-950 leading-normal font-medium">
                                Sayın Emre Tekneci, Garson yetkiniz ile yalnızca Masalar, adisyonlar, sipariş ekleme ve servis bildirimleri hakkında işlem yapabilirsiniz. Ciro, kasa, personel yönetimi ve sistem ayarlarına erişim yetkiniz bulunmamaktadır.
                              </p>
                            </div>

                            {/* Deep Link to Authorized Area (Masalar & Adisyon) */}
                            <div className="p-2 rounded-xl bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <div className="size-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                  <Armchair className="size-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[10px] font-bold text-neutral-900 truncate">Masalar & Canlı Adisyon</div>
                                  <div className="text-[8px] text-neutral-500 truncate">Canlı masa doluluğu, salon düzeni...</div>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-[9px] font-bold flex items-center gap-1 shrink-0 shadow-2xs transition-colors"
                              >
                                <span>Sayfaya Git</span>
                                <ArrowRight className="size-2.5" />
                              </button>
                            </div>

                            {/* Authorized Quick Chips */}
                            <div className="flex flex-wrap gap-1 pt-1">
                              <button
                                type="button"
                                onClick={() => changeStage("voice")}
                                className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200"
                              >
                                ↳ Masa 5'e 1 Hamburger ekle
                              </button>
                              <button
                                type="button"
                                onClick={() => changeStage("voice")}
                                className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200"
                              >
                                ↳ Boş masaları göster
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Stage 4: Voice Input in Action (Speech-to-Text) */}
                    {currentStage === "voice" && (
                      <>
                        <div className="flex items-start gap-2">
                          <div className="size-6 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Sparkles className="size-3" />
                          </div>
                          <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl rounded-tl-xs p-2.5 shadow-2xs flex-1">
                            <p className="text-[11px] text-neutral-700 leading-normal">
                              Mikrofona basarak konuşun; siparişleri veya masa durumlarını anında algılayıp onayınıza sunayım.
                            </p>
                          </div>
                        </div>

                        {/* Interactive Simulated Voice Banner */}
                        <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500/10 via-rose-500/10 to-amber-500/10 border border-red-500/20 text-center space-y-2">
                          <div className="flex items-center justify-center gap-1 py-1">
                            <span className="size-1.5 bg-red-500 rounded-full animate-ping" />
                            <span className="text-[10px] font-bold text-red-600">Canlı Ses Algılanıyor...</span>
                          </div>
                          <div className="text-xs font-bold text-neutral-900 bg-white/80 backdrop-blur-xs py-1.5 px-3 rounded-xl border border-neutral-200/80 shadow-2xs">
                            "Masa 5'e 4 çay ekle"
                          </div>
                          <button
                            type="button"
                            onClick={() => changeStage("confirm")}
                            className="w-full py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-bold shadow-xs transition-all flex items-center justify-center gap-1"
                          >
                            <span>Siparişi Çözümle &amp; Onaya Gönder</span>
                            <ArrowRight className="size-3" />
                          </button>
                        </div>
                      </>
                    )}

                    {/* Stage 5: Smart Order Confirmation Box (Interactive Add to Table) */}
                    {currentStage === "confirm" && (
                      <>
                        <div className="flex items-start gap-2">
                          <div className="size-6 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Sparkles className="size-3" />
                          </div>
                          <div className="space-y-2 flex-1 min-w-0">
                            <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl rounded-tl-xs p-2.5 shadow-2xs">
                              <p className="text-[11px] text-neutral-700 leading-normal">
                                Masa - 5'e 4 adet Çay eklemek üzeresiniz. Lütfen onaylayın.
                              </p>
                            </div>

                            {/* Deep Link to Table */}
                            <div className="p-2 rounded-xl bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <div className="size-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                  <Armchair className="size-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[10px] font-bold text-neutral-900 truncate">Masalar & Canlı Adisyon</div>
                                  <div className="text-[8px] text-neutral-500 truncate">Masa 5 aktif adisyonu...</div>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="px-2 py-0.5 rounded-lg bg-indigo-600 text-white text-[8px] font-bold"
                              >
                                Sayfaya Git →
                              </button>
                            </div>

                            {/* Interactive Order Confirmation Card */}
                            <div className="p-3 rounded-2xl bg-white border border-neutral-200/90 shadow-md space-y-2.5">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <Flame className="size-3.5 text-amber-500 fill-amber-500" />
                                  <span className="text-[11px] font-bold text-neutral-900">Sipariş Onayı Bekleniyor</span>
                                </div>
                                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                                  Masa - 5
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-left bg-neutral-50 p-2 rounded-xl border border-neutral-100">
                                <div>
                                  <div className="text-[8px] uppercase tracking-wider text-neutral-400 font-bold">Ürün Adı:</div>
                                  <div className="text-[11px] font-bold text-neutral-900">Çay</div>
                                </div>
                                <div>
                                  <div className="text-[8px] uppercase tracking-wider text-neutral-400 font-bold">Miktar & Tutar:</div>
                                  <div className="text-[11px] font-extrabold text-amber-700">4 Adet • ₺160</div>
                                </div>
                              </div>

                              {/* Confirmation Actions */}
                              <div className="flex items-center gap-2 pt-0.5">
                                <button
                                  type="button"
                                  onClick={() => setIsConfirmed(true)}
                                  className={`flex-1 py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                                    isConfirmed
                                      ? "bg-emerald-600 text-white"
                                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                                  }`}
                                >
                                  {isConfirmed ? (
                                    <>
                                      <CheckCircle2 className="size-3.5" />
                                      <span>Onaylandı! Mutfağa İletildi</span>
                                    </>
                                  ) : (
                                    <>
                                      <Check className="size-3.5" />
                                      <span>✓ Onayla ve Masaya Ekle</span>
                                    </>
                                  )}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => changeStage("welcome")}
                                  className="px-3 py-2 rounded-xl text-[10px] font-semibold text-neutral-600 hover:bg-neutral-100 border border-neutral-200 transition-colors"
                                >
                                  İptal
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Dynamic Bottom Input Field (Elevated above iOS safe area) */}
                  <div className="px-3 pt-2 pb-1.5 border-t border-neutral-100 bg-white">
                    {currentStage === "voice" ? (
                      /* Active Voice Wave Input */
                      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-neutral-50 border-2 border-indigo-500/80 shadow-xs">
                        {/* Audio animated bars */}
                        <div className="flex items-center gap-0.5 px-2">
                          <span className="w-1 h-3 bg-indigo-500 rounded-full animate-pulse" />
                          <span className="w-1 h-5 bg-purple-500 rounded-full animate-pulse" />
                          <span className="w-1 h-2 bg-pink-500 rounded-full animate-pulse" />
                          <span className="w-1 h-4 bg-indigo-600 rounded-full animate-pulse" />
                        </div>
                        <div className="flex-1 text-[11px] font-semibold text-neutral-900 truncate">
                          Masa 5'e 4 çay ekle
                        </div>
                        <button
                          type="button"
                          onClick={() => changeStage("confirm")}
                          className="size-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md animate-pulse shrink-0"
                        >
                          <Mic className="size-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => changeStage("confirm")}
                          className="size-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0"
                        >
                          <Send className="size-3" />
                        </button>
                      </div>
                    ) : (
                      /* Standard Input Bar */
                      <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-100 border border-neutral-200/80">
                        <input
                          type="text"
                          readOnly
                          placeholder={
                            activeRole === "manager"
                              ? "Örn: Masa 3'e 2 Çay ekle veya Ciro ne kadar?"
                              : "Örn: Masa 5'e 1 Hamburger ekle veya Boş masalar..."
                          }
                          className="flex-1 bg-transparent px-2.5 text-[10px] text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => changeStage("voice")}
                          className="size-6 rounded-full bg-neutral-200 text-neutral-700 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors"
                        >
                          <Mic className="size-2.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (currentStage === "welcome") changeStage("ciro");
                            else if (currentStage === "ciro") changeStage("security");
                            else if (currentStage === "security") changeStage("voice");
                            else changeStage("welcome");
                          }}
                          className="size-6 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-colors shadow-2xs"
                        >
                          <Send className="size-2.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* iOS Safe Area & Home Indicator Bar */}
                  <div className="h-5 flex items-center justify-center bg-white pb-1">
                    <div className="w-24 h-1 bg-neutral-300 rounded-full" />
                  </div>
                </div>
              </div>
            ) : (
              /* VIEW MODE B: ORIGINAL SCREENSHOT WITH REALISTIC CONTAINMENT & SAFE INSETS */
              <div className="relative size-full bg-neutral-900 flex flex-col justify-between pt-10 pb-4 overflow-hidden">
                <div className="relative flex-1 w-full flex items-center justify-center px-1">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                    <Image
                      src={originalImageMap[currentStage]}
                      alt="Orijinal Admin AI Ekranı"
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

      {/* Interactive Stage Switcher Chips Below Mockup */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-muted/60 border border-border/70 rounded-2xl max-w-sm">
        {[
          { id: "welcome" as const, label: "1. Karşılama" },
          { id: "ciro" as const, label: "2. Anlık Ciro" },
          { id: "security" as const, label: "3. Garson Güvenlik (RBAC)" },
          { id: "voice" as const, label: "4. Sesli Sipariş" },
          { id: "confirm" as const, label: "5. Sipariş Onayı" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => changeStage(tab.id)}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all ${
              currentStage === tab.id
                ? "bg-indigo-600 text-white shadow-xs scale-102"
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
