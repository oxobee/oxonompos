"use client";

import React from "react";
import { 
  Gift, 
  Heart, 
  Users, 
  Cake, 
  Sparkles, 
  QrCode, 
  TrendingUp, 
  Percent, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Receipt,
  Smartphone
} from "lucide-react";
import { LoyaltyCrmSimulator } from "@/components/oxonom/loyalty-crm-simulator";

export function LoyaltyCrmMockupTabs() {
  return (
    <div className="space-y-12">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
          <Gift className="size-3.5" />
          <span>Müşteri Sadakat &amp; CRM Modülü</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Misafirlerinizi İsmen Tanıyın, Özel Günlerinde Masanızı Doldurun
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Uygulama indirmeye gerek olmadan masadaki QR menüden kaydolan misafirlerinizin ziyaret sıklığını, favori lezzetlerini ve harcamalarını takip edin; doğum günlerinde otomatik kutlama mesajı ve indirim tanımlayın.
        </p>
      </div>

      {/* 4 Pillars: How Loyalty & CRM Works */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pillar 1 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-primary font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-primary/10">
              <QrCode className="size-4" />
            </span>
            <span>1. QR'dan Kolay Üyelik</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Müşteriler masa QR menüsünde sipariş verirken telefon ve doğum gününü girerek 5 saniyede kulübe katılır.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-amber-500/10">
              <Heart className="size-4" />
            </span>
            <span>2. Kim Ne Seviyor Bilin</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Hangi müşteri kaç kez geldi, en çok hangi yemeği sipariş etti (ör. 6 kez Burger Menü) ve sepet ortalaması anında önünüzde.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-red-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-red-500/10">
              <Cake className="size-4" />
            </span>
            <span>3. Doğum Günü Otomasyonu</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Doğum gününden 7 gün önce otomatik kişisel tebrik SMS'i gider; doğum günü haftasında masayı rezerve etmesi teşvik edilir.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-emerald-500/10">
              <Percent className="size-4" />
            </span>
            <span>4. Kasada Otomatik İndirim</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Garsonun indirim kodu girmesine gerek kalmaz; kayıtlı müşterinin hesabı kapanırken %10 indirim kasada otomatik düşer.
          </p>
        </div>
      </div>

      {/* Interactive Simulator Box */}
      <LoyaltyCrmSimulator showOriginalToggle={true} />

      {/* Bottom Summary Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-primary/10 to-emerald-500/10 border border-primary/20 text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
          <ShieldCheck className="size-4 text-emerald-600" />
          <span>%100 KVKK ve İYS Uyumlu Sadakat Altyapısı</span>
        </div>
        <h4 className="text-base font-extrabold text-foreground">
          Sadık Müşteriler Restoranınızın Cirosunu %40 Artırır
        </h4>
        <p className="text-xs text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Yeni müşteri kazanmak sadık müşteriyi tekrar ağırlamaktan 5 kat daha maliyetlidir. Oxonom POS Sadakat Modülü, her misafiri müdaviminiz haline getirir.
        </p>
      </div>
    </div>
  );
}
