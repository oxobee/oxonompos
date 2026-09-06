import type { Metadata } from "next";
import { Sparkles, CheckCircle2, History } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GridPattern } from "@/components/velora/grid-pattern";

export const metadata: Metadata = {
  title: `Ürün Güncellemeleri | ${siteConfig.name}`,
  description: "Oxonom POS platformuna eklenen en yeni modüller, geliştirmeler ve performans iyileştirmeleri.",
};

const releases = [
  {
    version: "v2.4.0",
    date: "Ağustos 2026",
    title: "Oxonom AI Studio & Fotoğraftan Menü Çıkarma",
    highlights: [
      "Basılı veya PDF menülerin tek fotoğrafla dijital ürün listesine dönüştürülmesi.",
      "Tabak fotoğrafları için stüdyo aydınlatması ve otomatik zemin temizleme motoru.",
      "Yemekler için otomatik kalori tahmini ve alerjen etiketleme asistanı.",
    ],
  },
  {
    version: "v2.3.0",
    date: "Haziran 2026",
    title: "7 Bölümlü Akıllı Z Raporu & Nakit Mutabakat",
    highlights: [
      "Kasa açılışından kapanışına kadar kuruşu kuruşuna nakit mutabakatı ve kasa farkı alarmları.",
      "Farklı KDV dilimlerine (%1, %10, %20) göre mali matrah dökümü.",
      "Tüm sipariş iptalleri (VOID) ve ikramlar için yetkili personel log arşivi.",
    ],
  },
  {
    version: "v2.2.0",
    date: "Nisan 2026",
    title: "Sesli Bildirim Motoru & 3 Aşamalı KDS",
    highlights: [
      "Mutfağa ve salona anlık Türkçe sesli anonslar ('Masa 04 yeni sipariş', 'Masa 07 hazır').",
      "KDS ekranlarında hazırlık süresi uzayan biletler için sarı ve kırmızı gecikme alarmları.",
      "Masa ve paket siparişlerin mutfakta otomatik istasyon ayrıştırması.",
    ],
  },
  {
    version: "v2.1.0",
    date: "Şubat 2026",
    title: "QR Self-Ordering & Çoklu Dil",
    highlights: [
      "Müşterinin masadaki QR kod ile uygulama indirmeden doğrudan mutfağa sipariş verebilmesi.",
      "Türkçe ve İngilizce menü seçenekleri arasında tek tıkla geçiş.",
      "Garson çağırma ve masaya hesap isteme bildirimleri.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-32 pb-24">
        <section className="relative overflow-hidden py-14 text-center border-b border-border/40">
          <GridPattern
            width={48}
            height={48}
            className="fill-transparent stroke-border/30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <History className="size-3.5" />
              <span>Sürüm Günlüğü</span>
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Oxonom POS Güncellemeleri
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              İşletmenizi her zaman bir adım önde tutmak için platformumuza düzenli olarak eklediğimiz yenilikler ve geliştirmeler.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-10">
            {releases.map((rel, i) => (
              <div key={i} className="p-8 rounded-3xl border border-border/60 bg-card/60 space-y-4 text-left">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-primary/15 text-primary">
                      {rel.version}
                    </span>
                    <h3 className="font-bold text-lg text-foreground">{rel.title}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{rel.date}</span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground pt-1">
                  {rel.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
