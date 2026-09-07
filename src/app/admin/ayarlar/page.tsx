"use client";

import React, { useState } from "react";
import { Settings, Shield, User, Phone, Mail, Save, CheckCircle2, Lock, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  // General settings state
  const [phone, setPhone] = useState("+90 850 309 9901");
  const [email, setEmail] = useState("info@oxonompos.com");
  const [address, setAddress] = useState("Kolektif House Levent, Büyükdere Cad. No:199, İstanbul");

  // Notifications
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifySms, setNotifySms] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in max-w-4xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Sistem & Yönetici Ayarları
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Yönetici profili, sistem iletişim parametreleri ve bildirim tercihleri.
        </p>
      </div>

      {saved && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2.5 animate-in fade-in">
          <CheckCircle2 className="size-4 shrink-0" />
          <span className="font-semibold">Ayarlarınız başarıyla kaydedildi ve sisteme uygulandı.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Admin Profile Section */}
        <div className="p-6 rounded-3xl border border-border/70 bg-card space-y-4">
          <div className="flex items-center gap-2.5 border-b border-border/50 pb-3">
            <User className="size-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Yetkili Yönetici Profili</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <label className="font-semibold text-muted-foreground">Kullanıcı Adı</label>
              <input
                type="text"
                disabled
                value="ugurxugurlu"
                className="w-full h-10 px-3.5 rounded-xl border border-border bg-muted/50 text-foreground font-mono font-bold cursor-not-allowed text-xs"
              />
              <span className="text-[10px] text-muted-foreground">Süper yönetici kullanıcı adı değiştirilemez.</span>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-muted-foreground">Yetki Seviyesi</label>
              <input
                type="text"
                disabled
                value="Süper Yönetici (Full Access)"
                className="w-full h-10 px-3.5 rounded-xl border border-border bg-muted/50 text-foreground font-semibold cursor-not-allowed text-xs"
              />
            </div>
          </div>
        </div>

        {/* Password Update Card */}
        <div className="p-6 rounded-3xl border border-border/70 bg-card space-y-4">
          <div className="flex items-center gap-2.5 border-b border-border/50 pb-3">
            <Lock className="size-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Yönetici Şifre Bilgisi</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <label className="font-semibold text-muted-foreground">Mevcut Şifre</label>
              <input
                type="password"
                disabled
                value="Ugur2803*"
                className="w-full h-10 px-3.5 rounded-xl border border-border bg-muted/50 text-foreground font-mono cursor-not-allowed text-xs"
              />
              <span className="text-[10px] text-muted-foreground">Mevcut şifreniz: Ugur2803*</span>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-foreground">Yeni Şifre Belirle (İsteğe Bağlı)</label>
              <input
                type="password"
                placeholder="Yeni şifrenizi giriniz..."
                className="w-full h-10 px-3.5 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="p-6 rounded-3xl border border-border/70 bg-card space-y-4">
          <div className="flex items-center gap-2.5 border-b border-border/50 pb-3">
            <Phone className="size-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Site & Müşteri Hizmetleri İletişim Bilgileri</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <label className="font-semibold text-foreground">Merkezi Telefon</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-10 px-3.5 rounded-xl border border-border bg-background text-foreground font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-foreground">Destek E-posta</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-3.5 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div className="sm:col-span-2 space-y-1">
              <label className="font-semibold text-foreground">Ofis / Merkez Adresi</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full h-10 px-3.5 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-6 rounded-3xl border border-border/70 bg-card space-y-4">
          <div className="flex items-center gap-2.5 border-b border-border/50 pb-3">
            <Bell className="size-4 text-primary" />
            <h2 className="text-sm font-bold text-foreground">Yeni Demo & Mesaj Bildirimleri</h2>
          </div>

          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.checked)}
                className="size-4 rounded text-primary focus:ring-primary/40 cursor-pointer"
              />
              <span className="font-medium text-foreground">
                Yeni bir restoran demo talebi geldiğinde e-posta ile anında bildirim gönder
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifySms}
                onChange={(e) => setNotifySms(e.target.checked)}
                className="size-4 rounded text-primary focus:ring-primary/40 cursor-pointer"
              />
              <span className="font-medium text-foreground">
                Yüksek öncelikli (3+ şubeli) işletme başvurularında SMS uyarısı gönder
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button type="submit" className="bg-primary font-bold text-xs h-10 px-6 shadow-sm">
            <Save className="size-4 mr-1.5" />
            <span>Değişiklikleri Kaydet</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
