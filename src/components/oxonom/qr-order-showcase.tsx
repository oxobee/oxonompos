"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QrCode, Sparkles, CheckCircle2, ShoppingBag, Utensils, Bell, ArrowRight, Bot } from "lucide-react";
import { IphoneMockup } from "@/components/velora/iphone-mockup";
import { QRAiPhoneSimulator } from "@/components/oxonom/qr-ai-phone-simulator";

export function QROrderShowcase() {
  const [activeTab, setActiveTab] = useState<"menu" | "ai">("menu");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
      {/* Phone Mockup on Left */}
      <div className="relative flex flex-col items-center justify-center order-2 lg:order-1">
        {/* View Switcher Chips */}
        <div className="flex items-center gap-1.5 p-1 bg-muted/80 backdrop-blur-sm border border-border/80 rounded-full mb-5 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab("menu")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "menu"
                ? "bg-background text-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Utensils className="size-3.5" />
            Standart Menü Görünümü
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ai")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "ai"
                ? "bg-gradient-to-r from-primary to-pink-500 text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className="size-3.5" />
            Menü Danışmanı AI
          </button>
        </div>

        {activeTab === "ai" ? (
          <div className="w-full flex flex-col items-center">
            <QRAiPhoneSimulator initialStage="welcome" showOriginalToggle={false} />
            <div className="mt-3 text-center">
              <Link
                href="/moduller/qr-menudeki-yapay-zeka"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-background/95 border border-primary/30 text-primary text-[11px] font-semibold rounded-full shadow-md hover:border-primary transition-colors backdrop-blur-xs"
              >
                <span>Tüm AI Ekranlarını & Özelliklerini İncele</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-pink-500/15 to-emerald-500/20 rounded-full blur-3xl opacity-40 -z-10" />
            <IphoneMockup className="w-68 sm:w-74">
              <div className="relative size-full select-none bg-white">
                <Image
                  src="/images/qr-menu-mobile-real.png"
                  alt="Oxonom POS - QR Masadan Sipariş Mobil Arayüzü"
                  fill
                  priority
                  sizes="(max-width: 640px) 272px, 296px"
                  className="object-cover object-top"
                />
              </div>
            </IphoneMockup>
          </div>
        )}
      </div>

      {/* Stepper Explanation on Right */}
      <div className="space-y-6 order-1 lg:order-2">
        <div>
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Garson Beklemeye Son</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            QR kodu okut. Menüyü aç. Saniyeler içinde sipariş ver.
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Müşterileriniz hiçbir mobil uygulama indirmeden masadaki özel QR kodu telefon kameralarıyla okutur. Menü anında açılır, ürünler sepete eklenir ve doğrudan mutfağa iletilir.
          </p>
        </div>

        {/* 4 Step Process */}
        <div className="space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mt-0.5">
              1
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Masadaki QR Kodu Okutulur</h4>
              <p className="text-xs text-muted-foreground">Her masa için tanımlı benzersiz QR kod telefon kamerasından anında açılır.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mt-0.5">
              2
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Görsel Menüden Seçim Yapılır</h4>
              <p className="text-xs text-muted-foreground">Yemek fotoğrafları, alerjen bilgileri, porsiyon ve ekstra malzeme seçenekleri incelenir.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mt-0.5">
              3
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Sipariş Doğrudan Mutfağa (KDS) Düşer</h4>
              <p className="text-xs text-muted-foreground">Garsonun masaya gelip not almasına gerek kalmadan aşçıların ekranında hazırlık başlar.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mt-0.5">
              4
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Masa Hesabına Otomatik İşlenir</h4>
              <p className="text-xs text-muted-foreground">Verilen tüm siparişler kasanın adisyonuna eklenir. İstenirse garson çağırma butonu kullanılır.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
