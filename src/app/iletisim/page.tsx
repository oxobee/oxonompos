"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { GridPattern } from "@/components/velora/grid-pattern";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
              <Sparkles className="size-3.5" />
              <span>Bize Ulaşın</span>
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              İletişim &amp; Destek Merkezi
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Satış, teknik destek veya kurumsal iş birlikleri için Oxonom POS ekibiyle dilediğiniz zaman iletişime geçebilirsiniz.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Department Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-border/60 bg-card/80 space-y-2 text-left">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Mail className="size-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">Satış &amp; Demo</h3>
                  <p className="text-xs text-muted-foreground">Paketler, fiyat teklifleri ve kurumsal lisanslar.</p>
                  <a href={`mailto:${siteConfig.contact.salesEmail}`} className="text-xs font-bold text-primary block hover:underline">
                    {siteConfig.contact.salesEmail}
                  </a>
                </div>

                <div className="p-6 rounded-2xl border border-border/60 bg-card/80 space-y-2 text-left">
                  <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                    <MessageSquare className="size-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">Teknik Destek</h3>
                  <p className="text-xs text-muted-foreground">Aktif kullanıcılarımız için 7/24 teknik yardım masası.</p>
                  <a href={`mailto:${siteConfig.contact.supportEmail}`} className="text-xs font-bold text-emerald-500 block hover:underline">
                    {siteConfig.contact.supportEmail}
                  </a>
                </div>

                <div className="p-6 rounded-2xl border border-border/60 bg-card/80 space-y-2 text-left">
                  <div className="size-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                    <Phone className="size-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">Müşteri Hizmetleri &amp; Satış</h3>
                  <p className="text-xs text-muted-foreground">Doğrudan temsilcimizle görüşün veya bilgi alın.</p>
                  <a href="tel:+908503099901" className="text-sm font-extrabold text-amber-600 dark:text-amber-400 block hover:underline">
                    +90 850 309 9901
                  </a>
                </div>

                <div className="p-6 rounded-2xl border border-border/60 bg-card/80 space-y-2 text-left">
                  <div className="size-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
                    <MapPin className="size-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">Merkez Ofis</h3>
                  <p className="text-xs text-muted-foreground">{siteConfig.contact.address}</p>
                  <a href="tel:+908503099901" className="text-xs font-semibold text-foreground hover:text-primary block transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Contact Message Form */}
              <div className="lg:col-span-2 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-xl text-left">
                {submitted ? (
                  <div className="py-14 text-center space-y-3 animate-in fade-in">
                    <CheckCircle2 className="size-12 text-emerald-500 mx-auto" />
                    <h3 className="text-xl font-bold text-foreground">Mesajınız Alındı!</h3>
                    <p className="text-xs text-muted-foreground">Ekibimiz en kısa sürede e-posta adresiniz üzerinden geri dönüş yapacaktır.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground mb-4">Bize Mesaj Gönderin</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">Ad Soyad</label>
                        <input required placeholder="Adınız" className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">E-posta</label>
                        <input required type="email" placeholder="ornek@isletme.com" className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Konu</label>
                      <input required placeholder="Görüşmek istediğiniz konu" className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Mesajınız</label>
                      <textarea required rows={4} placeholder="Detaylar..." className="w-full p-4 rounded-xl border border-border bg-background text-sm" />
                    </div>
                    <ShimmerButton className="w-full h-12 text-xs font-bold">
                      <Send className="size-4" />
                      <span>Mesajı İlet</span>
                    </ShimmerButton>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
