"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  CheckCircle2,
  Download,
  CreditCard,
  DollarSign,
  Receipt,
  ShieldAlert,
  Printer,
  Sparkles,
  Layers,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { BorderBeam } from "@/components/velora/border-beam";
import { TextShimmer } from "@/components/velora/text-shimmer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ZSection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge: string;
  description: string;
  metrics: { label: string; value: string }[];
}

export function ZReportShowcase() {
  const [activeView, setActiveView] = useState<"dashboard" | "document">("dashboard");

  const zSections: ZSection[] = [
    {
      id: "mutabakat",
      title: "Kasa Mutabakatı & Sıfır Fark",
      subtitle: "Kuruşu Kuruşuna Kasa Denetimi",
      icon: <CheckCircle2 className="size-4 text-emerald-500" />,
      badge: "Kasa Farkı: 0,00 ₺ (Eşleşiyor)",
      description:
        "Kasada beklenen nakit tutarı ile fiziksel sayılan nakit anlık karşılaştırılır. Açık veya fazla sıfır toleransla tespit edilir; gün sonu hesapları kusursuz bağlanır.",
      metrics: [
        { label: "Beklenen Kasa", value: "₺5.710,00" },
        { label: "Sayılan Kasa", value: "₺5.710,00" },
        { label: "Kasa Farkı", value: "0,00 ₺ (Denk)" },
      ],
    },
    {
      id: "tahsilat",
      title: "Tahsilat & POS Dağılımı",
      subtitle: "Nakit, Kredi Kartı ve Slip Dökümü",
      icon: <CreditCard className="size-4 text-primary" />,
      badge: "Toplam Tahsilat: ₺11.378,00",
      description:
        "Tüm ödeme yöntemleri tek ekranda ayrışır: Nakit (₺5.710, %50.2), Kredi Kartı (₺5.572, %49) ve terminal bazlı POS slip dökümleri banka banka raporlanır.",
      metrics: [
        { label: "Nakit Tahsilat", value: "₺5.710,00 (16 İşlem)" },
        { label: "Kredi Kartı / POS", value: "₺5.572,00 (4 İşlem)" },
        { label: "Ortalama Adisyon", value: "₺642,24" },
      ],
    },
    {
      id: "ciro",
      title: "Satış Özeti & Finansal Akış",
      subtitle: "Brütten Nete Fiili Tahakkuk",
      icon: <DollarSign className="size-4 text-amber-500" />,
      badge: "Net Ciro: ₺10.918,00",
      description:
        "Brüt satıştan (₺11.043) toplam indirimler (-₺125) düşülerek işletmenizin net cirosu (₺10.918) hesaplanır. İptal ve ikram maliyetleri şeffaf şekilde listelenir.",
      metrics: [
        { label: "Brüt Satış (KDV Dahil)", value: "₺11.043,00" },
        { label: "Toplam İndirim", value: "-₺125,00" },
        { label: "Fiili Net Ciro", value: "₺10.918,00" },
      ],
    },
    {
      id: "guvenlik",
      title: "Mali Mevzuat & Denetim Logları",
      subtitle: "KDV Matrahı ve İptal/İkram Kayıtları",
      icon: <Receipt className="size-4 text-violet-500" />,
      badge: "Resmi Denetim Uyumlu",
      description:
        "Mali müşavirin ihtiyaç duyduğu KDV oranları (%0, %1, %10, %20), iptal edilen siparişler ve personel yetki logları tek tıkla resmi PDF dökümüne dönüşür.",
      metrics: [
        { label: "KDV Matrahı", value: "₺11.043,00" },
        { label: "İptal / İkram Tutarı", value: "₺0,00 (Kayıpsız)" },
        { label: "Yetkili Onayı", value: "İmza & Kaşe Alanlı" },
      ],
    },
  ];

  const [activeSection, setActiveSection] = useState<ZSection>(zSections[0]);

  return (
    <div className="relative mx-auto max-w-5xl space-y-8 text-left">
      {/* Outer Glow */}
      <div
        aria-hidden
        className="absolute -inset-4 sm:-inset-8 rounded-[2.5rem] bg-gradient-to-r from-primary/20 via-emerald-500/15 to-violet-500/20 opacity-35 blur-3xl pointer-events-none"
      />

      {/* View Switcher Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-xl shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Receipt className="size-5 text-primary" />
            <h3 className="font-bold text-base sm:text-lg text-foreground">
              7 Bölümlü Akıllı Z Raporu &amp; Gün Sonu
            </h3>
          </div>
          <p className="text-xs text-muted-foreground">
            Rapor Tarihi: <span className="font-semibold text-foreground">06 Eylül 2026</span> • Açılış: 16:58 • Yetkili: Yönetici
          </p>
        </div>

        {/* 2 Display Mode Buttons */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-muted/60 border border-border/50 self-start sm:self-auto">
          <button
            onClick={() => setActiveView("dashboard")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeView === "dashboard"
                ? "bg-background text-foreground shadow-sm ring-1 ring-border/60"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>🖥️ Canlı Dijital Panel</span>
          </button>
          <button
            onClick={() => setActiveView("document")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeView === "document"
                ? "bg-background text-foreground shadow-sm ring-1 ring-border/60"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>📄 Resmi Yazdırılabilir Belge (PDF)</span>
          </button>
        </div>
      </div>

      {/* 4 Interactive Feature Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {zSections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec)}
            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 ${
              activeSection.id === sec.id
                ? "border-primary bg-primary/10 shadow-lg shadow-primary/10 ring-1 ring-primary/40"
                : "border-border/70 bg-card/80 hover:bg-muted/50"
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <div className="p-2 rounded-xl bg-background border border-border/60">
                {sec.icon}
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-background border border-border/60 text-foreground">
                {sec.id === "mutabakat" ? (
                  <TextShimmer className="font-bold text-emerald-500">Kasa Denk</TextShimmer>
                ) : (
                  sec.badge
                )}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-xs text-foreground leading-snug">{sec.title}</h4>
              <p className="text-[11px] text-muted-foreground mt-0.5">{sec.subtitle}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Main Display Area: Switch between Digital Dashboard and Official Document */}
      {activeView === "dashboard" ? (
        <div className="space-y-4">
          <BrowserMockup
            url="pos.oxonompos.com/z-raporu"
            className="relative shadow-2xl border-border/70 overflow-hidden bg-card/90"
          >
            <BorderBeam size={180} duration={12} colorFrom="#10b981" colorTo="#3b82f6" />

            {/* Quick Live Indicators Banner */}
            <div className="hidden sm:flex items-center justify-between px-4 py-2 bg-muted/40 border-b border-border/50 text-xs">
              <div className="flex items-center gap-4 font-medium">
                <span className="text-muted-foreground">Brüt: <strong className="text-foreground">₺11.043</strong></span>
                <span className="text-muted-foreground">Net Ciro: <strong className="text-emerald-500">₺10.918</strong></span>
                <span className="text-muted-foreground">Tahsilat: <strong className="text-primary">₺11.378</strong></span>
                <span className="text-border">|</span>
                <span className="text-emerald-500 font-bold flex items-center gap-1">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <TextShimmer>Kasa Farkı: 0,00 ₺ (Eşleşiyor)</TextShimmer>
                </span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                17 Adisyon • AOV: ₺642,24
              </div>
            </div>

            <div className="relative w-full aspect-[1024/566] bg-background select-none">
              <Image
                src="/images/z-report-dashboard-real.png"
                alt="Oxonom POS - Z Raporu ve Gün Sonu Canlı Yönetim Paneli"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                className="object-contain object-top"
              />
            </div>
          </BrowserMockup>
        </div>
      ) : (
        /* Official Printable Z Document View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[725/1024] rounded-2xl overflow-hidden shadow-2xl border border-border/80 bg-white p-2 select-none group">
              <BorderBeam size={160} duration={10} colorFrom="#10b981" colorTo="#3b82f6" />
              <div className="relative size-full rounded-xl overflow-hidden">
                <Image
                  src="/images/z-report-slip-real.png"
                  alt="Oxonom POS - Resmi Gün Sonu Z Raporu Belgesi ve Çıktısı"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl border border-border/70 bg-card/80 backdrop-blur space-y-3">
              <div className="flex items-center gap-2">
                <Printer className="size-4 text-primary" />
                <h4 className="font-bold text-sm text-foreground">Resmi Mevzuat Uyumlu Çıktı &amp; PDF</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Maliye ve denetim standartlarına tam uyumlu; Satış ve Ciro Özeti, Tahsilat &amp; Ödeme Dağılımı, Kasa Mutabakatı, KDV Dökümü ve İptal/İkram tablosunu tek bir resmi raporda toplar.
              </p>
              <div className="pt-2 border-t border-border/40 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Kasiyer ve Restoran Müdürü İmza/Kaşe alanları</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Kasa açılış, kapanış ve beklenen/sayılan nakit mutabakatı</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Tek tıkla PDF indirme ve termal adisyon yazıcı çıktısı</span>
                </div>
              </div>
              <div className="pt-2">
                <Button size="sm" className="w-full text-xs font-semibold gap-2 shadow-xs">
                  <Download className="size-3.5" />
                  <span>Örnek Z Raporu PDF İncele</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selected Feature Deep Dive Card */}
      <div className="p-5 sm:p-6 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-xl shadow-lg grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-2">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-primary" />
            <h4 className="font-bold text-sm text-foreground">{activeSection.title}</h4>
            <Badge variant="outline" className="text-[10px] text-primary border-primary/40 font-bold">
              {activeSection.badge}
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {activeSection.description}
          </p>
        </div>

        {/* Live Metrics Breakdown */}
        <div className="md:col-span-4 grid grid-cols-1 gap-2 border-t md:border-t-0 md:border-l border-border/50 pt-4 md:pt-0 md:pl-6">
          {activeSection.metrics.map((m, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs p-1.5 rounded-lg bg-muted/30">
              <span className="text-muted-foreground">{m.label}:</span>
              <span className="font-bold text-foreground">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
