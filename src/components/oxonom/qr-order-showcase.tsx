"use client";

import React from "react";
import { QrCode, Sparkles, CheckCircle2, ShoppingBag, Utensils, Bell } from "lucide-react";
import { IphoneMockup } from "@/components/velora/iphone-mockup";

export function QROrderShowcase() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
      {/* Phone Mockup on Left */}
      <div className="relative flex justify-center order-2 lg:order-1">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-full blur-3xl opacity-40 -z-10" />
        <IphoneMockup className="w-64 sm:w-72 shadow-2xl">
          <div className="size-full bg-background text-foreground flex flex-col pt-10 pb-4 px-3 overflow-y-auto no-scrollbar select-none text-left">
            {/* Header in Phone */}
            <div className="flex items-center justify-between pb-3 border-b border-border/40">
              <div>
                <span className="text-[10px] font-bold text-primary uppercase">La Trattoria</span>
                <h4 className="text-xs font-black">Masa 08 Siparişi</h4>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-bold">
                Canlı Menü
              </span>
            </div>

            {/* Menu categories pill */}
            <div className="flex gap-1.5 py-2.5 overflow-x-auto no-scrollbar text-[10px]">
              <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-bold">Pizzalar</span>
              <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">Makarnalar</span>
              <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">İçecekler</span>
            </div>

            {/* Products in Phone */}
            <div className="space-y-2 flex-1">
              <div className="p-2 rounded-xl border border-border/60 bg-card/60 flex justify-between items-center">
                <div>
                  <div className="font-bold text-xs">Margherita Pizza</div>
                  <div className="text-[9px] text-muted-foreground">Taze fesleğen, manda mozzarella</div>
                  <div className="font-bold text-xs text-primary mt-1">₺280,00</div>
                </div>
                <div className="size-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                  +
                </div>
              </div>

              <div className="p-2 rounded-xl border border-border/60 bg-card/60 flex justify-between items-center">
                <div>
                  <div className="font-bold text-xs">Trüflü Tagliolini</div>
                  <div className="text-[9px] text-muted-foreground">Yabani mantar, parmesan</div>
                  <div className="font-bold text-xs text-primary mt-1">₺340,00</div>
                </div>
                <div className="size-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                  +
                </div>
              </div>

              <div className="p-2 rounded-xl border border-border/60 bg-card/60 flex justify-between items-center">
                <div>
                  <div className="font-bold text-xs">San Pellegrino 250ml</div>
                  <div className="text-[9px] text-muted-foreground">Doğal mineralli su</div>
                  <div className="font-bold text-xs text-primary mt-1">₺65,00</div>
                </div>
                <div className="size-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                  +
                </div>
              </div>
            </div>

            {/* Bottom floating cart */}
            <div className="mt-3 p-2.5 rounded-xl bg-primary text-primary-foreground shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="size-4" />
                <span className="text-[11px] font-bold">2 Ürün • ₺620,00</span>
              </div>
              <span className="text-[11px] font-black bg-white/20 px-2 py-0.5 rounded">Sipariş Ver →</span>
            </div>
          </div>
        </IphoneMockup>
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
