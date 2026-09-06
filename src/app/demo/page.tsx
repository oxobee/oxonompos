"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Sparkles, Building2, Phone, Mail, MapPin, Send, ShieldCheck } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { GridPattern } from "@/components/velora/grid-pattern";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    businessType: "Restoran",
    branchCount: "1",
    city: "İstanbul",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.businessName) {
      alert("Lütfen zorunlu alanları (Ad Soyad, İşletme Adı, Telefon) doldurunuz.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-32 pb-24">
        <section className="relative overflow-hidden py-12 text-center border-b border-border/40">
          <GridPattern
            width={48}
            height={48}
            className="fill-transparent stroke-border/30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Sparkles className="size-3.5" />
              <span>Birebir Canlı Tanıtım</span>
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              İşletmenize Özel Canlı Demo Talep Edin
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Uzman ürün danışmanımızla 20 dakikalık çevrim içi toplantıda Oxonom POS&apos;un restoranınıza sağlayacağı hız ve kâr avantajlarını keşfedin.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 sm:p-10 shadow-2xl backdrop-blur text-left">
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="size-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Demo Talebiniz Başarıyla Alındı!</h2>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Sayın <strong className="text-foreground">{formData.fullName}</strong>, <strong className="text-foreground">{formData.businessName}</strong> işletmeniz için demo talebiniz kaydedildi. Uzman ekibimiz en kısa sürede <strong>{formData.phone}</strong> üzerinden sizinle iletişime geçecektir.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" asChild>
                      <Link href="/">Ana Sayfaya Dön</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        Adınız Soyadınız <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full h-11 px-4 rounded-xl border border-border/70 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        İşletme / Restoran Adı <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Örn: Mola Kafe & Bistro"
                        className="w-full h-11 px-4 rounded-xl border border-border/70 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        Telefon Numarası <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05XX XXX XX XX"
                        className="w-full h-11 px-4 rounded-xl border border-border/70 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        E-posta Adresi
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ahmet@isletme.com"
                        className="w-full h-11 px-4 rounded-xl border border-border/70 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        İşletme Tipi
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl border border-border/70 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      >
                        <option value="Restoran">Alakart Restoran</option>
                        <option value="Kafe">Kafe &amp; Bar</option>
                        <option value="Fast Food">Fast Food &amp; QSR</option>
                        <option value="Paket Servis">Paket Servis &amp; Gel-Al</option>
                        <option value="Pastane">Pastane &amp; Fırın</option>
                        <option value="Otel">Otel &amp; Resort Tesis</option>
                        <option value="Zincir">Zincir &amp; Franchise</option>
                        <option value="Diğer">Diğer Yeme-İçme</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        Şube Sayısı
                      </label>
                      <select
                        value={formData.branchCount}
                        onChange={(e) => setFormData({ ...formData, branchCount: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl border border-border/70 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      >
                        <option value="1">1 Şube (Tek İşletme)</option>
                        <option value="2-4">2 - 4 Şube</option>
                        <option value="5-10">5 - 10 Şube</option>
                        <option value="10+">10+ Şube (Büyük Zincir)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground">
                      Özel İstekleriniz veya Sorularınız
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Örn: 20 masamız var, KDS mutfak ekranı ve QR self-order entegrasyonunu canlı görmek istiyoruz..."
                      className="w-full p-4 rounded-xl border border-border/70 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  <div className="pt-2">
                    <ShimmerButton className="w-full h-12 text-sm font-bold">
                      <Send className="size-4" />
                      <span>{loading ? "Gönderiliyor..." : "Demo Talebini Gönder"}</span>
                    </ShimmerButton>
                  </div>

                  <p className="text-[11px] text-center text-muted-foreground flex items-center justify-center gap-1.5 pt-2">
                    <ShieldCheck className="size-3.5 text-primary" />
                    <span>Bilgileriniz KVKK kapsamında korunur ve üçüncü şahıslarla paylaşılmaz.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
