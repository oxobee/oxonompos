"use client";

import React from "react";
import { 
  UserCheck, 
  Heart, 
  Star, 
  Bell, 
  Wifi, 
  Sparkles, 
  Receipt, 
  Smartphone, 
  Share2, 
  ShieldCheck, 
  TrendingUp, 
  MapPin 
} from "lucide-react";
import { QrCustomerProfileSimulator } from "@/components/oxonom/qr-customer-profile-simulator";

export function QrCustomerProfileMockupTabs() {
  return (
    <div className="space-y-12">
      {/* Top Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
          <UserCheck className="size-3.5" />
          <span>Müşteri Sadakat &amp; Masa İçi Profil Deneyimi</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Misafirleriniz Masada Kendi Dünyasını Yönetsin
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Uygulama yükletmeden cep telefonuyla saniyeler içinde profil oluşturan müşteriler; geçmiş siparişlerini hatırlar, en sevdiği lezzetleri tek dokunuşla inceler, garson çağırır ve Google Haritalar&apos;da 5 yıldızlı yorum bırakır.
        </p>
      </div>

      {/* 4 Core Value Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pillar 1 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-rose-500/10">
              <Smartphone className="size-4" />
            </span>
            <span>1. Şifresiz &amp; Zahmetsiz Giriş</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Misafir masa QR menüsünde ad ve telefonunu girerek 10 saniyede profil açar; doğum günü rozetiyle sadakat kulübüne dahil olur.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-amber-500/10">
              <Heart className="size-4" />
            </span>
            <span>2. En Sevdiği Lezzetler &amp; Geçmiş</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            &quot;En Çok Sevdiğiniz Lezzetler&quot; alanında Burger Menü (6×) gibi favori tatlar listelenir, önceki sipariş fişleri anında incelenir.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-blue-500/10">
              <Bell className="size-4" />
            </span>
            <span>3. Garson Çağır &amp; Tek Tık Wi-Fi</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Masa el sallamaya gerek kalmadan tek tuşla garsonu masaya yönlendirir; işletmenin Wi-Fi şifresini tek tıkla kopyalar.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs space-y-2 text-left">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
            <span className="p-1.5 rounded-lg bg-emerald-500/10">
              <Star className="size-4" />
            </span>
            <span>4. 5 Yıldızlı Google Yorumları</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Müşteri memnuniyetini masadan kalkmadan 5 yıldızla puanlar; Instagram, Facebook ve Google Haritalar&apos;a yönlendirilir.
          </p>
        </div>
      </div>

      {/* Simulator Component */}
      <div className="pt-2">
        <QrCustomerProfileSimulator />
      </div>

      {/* Trust & Engagement Benefits Strip */}
      <div className="p-5 rounded-2xl bg-linear-to-r from-rose-500/5 via-amber-500/5 to-primary/5 border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-foreground">
              %100 KVKK &amp; Misafir Gizliliği Uyumlu Masa Paneli
            </div>
            <div className="text-[11px] text-muted-foreground">
              Müşteriler dilediği zaman profilinden çıkış yapabilir, sipariş geçmişini görebilir ve işletmeniz organik sadık müdavim portföyü oluşturur.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 bg-card px-3 py-1.5 rounded-xl border border-border/60 shrink-0">
          <TrendingUp className="size-4" />
          <span>+3.2× Müdavim Sadakati</span>
        </div>
      </div>
    </div>
  );
}
