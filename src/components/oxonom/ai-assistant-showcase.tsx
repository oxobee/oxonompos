"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Mic,
  Send,
  BarChart3,
  Utensils,
  CookingPot,
  Receipt,
  ShieldCheck,
  CheckCircle2,
  Volume2,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/velora/border-beam";
import { SparklesText } from "@/components/velora/sparkles-text";

interface PromptDemo {
  id: string;
  prompt: string;
  icon: React.ReactNode;
  category: string;
  answer: string;
  metric?: string;
}

export function AIAssistantShowcase() {
  const prompts: PromptDemo[] = [
    {
      id: "ciro",
      prompt: "Bugünkü toplam ciro ne kadar?",
      icon: <BarChart3 className="size-4 text-emerald-500" />,
      category: "Finans & Satış",
      metric: "₺48.750 (+%18)",
      answer:
        "Bugünkü toplam cironuz ₺48.750 (28 tamamlanan masa, 6 açık adisyon). Dünün aynı saatine göre %18 artıştasınız. En çok satan ürününüz: 38x Trüf Burger.",
    },
    {
      id: "siparis",
      prompt: "Masa 5'e 1 Hamburger ekle",
      icon: <Utensils className="size-4 text-primary" />,
      category: "Adisyon İşlemi",
      metric: "Masa 05 • Eklendi",
      answer:
        "Masa 05 hesabına 1x Burger Menü (₺440) eklendi ve Mutfak KDS ekranına anında 'Hazırlanıyor' statüsüyle iletildi.",
    },
    {
      id: "mutfak",
      prompt: "Mutfak durumunu göster",
      icon: <CookingPot className="size-4 text-amber-500" />,
      category: "Mutfak Takibi",
      metric: "8 Aktif Bilet",
      answer:
        "Mutfakta 8 aktif sipariş var: 4 Bekleyen, 2 Hazırlanıyor, 2 Servise Hazır. Masa 1 için 17 dk gecikme uyarısı aktif; sesli ikaz şefe iletildi.",
    },
    {
      id: "z-raporu",
      prompt: "Z Raporu nedir? Gün sonu nasıl alınır?",
      icon: <Receipt className="size-4 text-violet-500" />,
      category: "Mevzuat & Sistem",
      metric: "7 Bölümlü Rapor",
      answer:
        "Z Raporu, gün sonu mali kapanış belgesidir. Oxonom POS 7 bölümlü Z raporunu nakit, POS ve KDV matrahlarıyla hatasız oluşturur. 'Gün sonu kapat' diyerek tek tıkla alabilirsiniz.",
    },
  ];

  const [activePrompt, setActivePrompt] = useState<PromptDemo>(prompts[0]);

  return (
    <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-xl p-6 md:p-10 shadow-2xl space-y-10">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/50 pb-8 text-left">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
            <Sparkles className="size-3.5" />
            <span>Yapay Zeka Destekli Yönetim Paneli</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Restoranınızı konuşarak yönetin:{" "}
            <SparklesText count={5} className="text-primary">
              Oxonom AI Asistan
            </SparklesText>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Karmaşık menülerde kaybolmaya son. Ciro analizinden masa adisyonuna, mutfak durumundan Z raporuna kadar tüm operasyonu asistanınıza sorarak veya söyleyerek anında yönetin.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/25 shadow-xs">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Canlı Yönetim Asistanı Aktif</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Interactive Prompts & Details, Right Real UI Screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
        {/* Left Interactive Playground (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Hızlı Komutları Deneyin (Tıklayın)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
              {prompts.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePrompt(item)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                    activePrompt.id === item.id
                      ? "border-primary bg-primary/10 shadow-md shadow-primary/10 ring-1 ring-primary/40"
                      : "border-border/70 bg-card/80 hover:bg-muted/50"
                  }`}
                >
                  <div className="p-2 rounded-lg bg-background border border-border/60 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                      {item.category}
                    </span>
                    <span className="font-semibold text-xs text-foreground block mt-0.5">
                      “{item.prompt}”
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* AI Response Simulator Card */}
          <div className="p-5 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-background to-card shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-border/40">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-gradient-to-tr from-primary to-violet-500 flex items-center justify-center text-white text-[11px] font-bold shadow-xs">
                  ✨
                </div>
                <span className="font-bold text-xs text-foreground">Oxonom POS Asistan Yanıtı</span>
              </div>
              {activePrompt.metric && (
                <Badge variant="outline" className="text-[10px] border-primary/40 text-primary font-bold">
                  {activePrompt.metric}
                </Badge>
              )}
            </div>

            <p className="mt-3 text-xs sm:text-sm text-foreground leading-relaxed">
              {activePrompt.answer}
            </p>

            {/* Input Bar Preview */}
            <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 flex-1 bg-muted/40 px-3 py-2 rounded-xl border border-border/50">
                <Mic className="size-3.5 text-primary" />
                <span className="text-[11px] truncate">Sesle veya yazıyla: "{activePrompt.prompt}"</span>
              </div>
              <div className="size-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-xs shrink-0">
                <Send className="size-3.5" />
              </div>
            </div>
          </div>

          {/* 4 Feature Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs text-foreground">Doğal Dille Sesli &amp; Yazılı Komut</h5>
                <p className="text-[11px] text-muted-foreground">Mikrofon butonuyla konuşarak saniyeler içinde işlem yapın.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs text-foreground">Manager Yetki Koruması</h5>
                <p className="text-[11px] text-muted-foreground">Hassas ciro ve kasa verileri yetkili PIN ile korunur.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs text-foreground">Mutfak (KDS) Çift Yönlü Bağlantı</h5>
                <p className="text-[11px] text-muted-foreground">Asistana verilen sipariş doğrudan mutfak ekranına düşer.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs text-foreground">0.2 Saniye Yanıt Hızı</h5>
                <p className="text-[11px] text-muted-foreground">Bulut yapay zeka mimarisiyle gecikmesiz canlı analiz.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Real Modal Screenshot (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Ambient Glow */}
          <div
            aria-hidden
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-500/25 via-primary/20 to-emerald-500/20 blur-3xl opacity-60 pointer-events-none"
          />

          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border/80 bg-card p-2 select-none group">
            <BorderBeam size={140} duration={10} colorFrom="#8b5cf6" colorTo="#3b82f6" />

            <div className="relative size-full rounded-2xl overflow-hidden bg-background">
              <Image
                src="/images/ai-assistant-modal.png"
                alt="Oxonom POS - Yönetim Paneli Akıllı Restoran Asistanı"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-contain"
              />
            </div>

            {/* Floating Info Tag on top */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur border border-border/60 shadow-lg text-[10px] font-bold text-foreground">
              <Mic className="size-3 text-primary" />
              <span>Sesli Algılama</span>
            </div>

            {/* Floating Info Tag on bottom */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur border border-border/60 shadow-lg text-[10px] font-bold text-foreground">
              <Zap className="size-3 text-amber-500" />
              <span>0.2sn Canlı Yanıt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
