"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  CreditCard,
  Plus,
  QrCode,
  Search,
  Sparkles,
  Trash2,
  User,
  Utensils,
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { BorderBeam } from "@/components/velora/border-beam";
import { Badge } from "@/components/ui/badge";

export function HeroPosMockup({ className }: { className?: string }) {
  const [activeCategory, setActiveCategory] = useState("Burgerler");

  const categories = ["Tümü", "Burgerler", "Pizzalar", "Makarnalar", "İçecekler", "Tatlılar"];

  const products = [
    { name: "Truffle Burger", price: "₺320", code: "B01", badge: "Şefin Seçimi" },
    { name: "Smash Cheeseburger", price: "₺270", code: "B02", badge: "Çok Satan" },
    { name: "Crispy Chicken", price: "₺250", code: "B03" },
    { name: "Margherita Pizza", price: "₺280", code: "P01" },
    { name: "Quattro Formaggi", price: "₺350", code: "P02" },
    { name: "Fettuccine Alfredo", price: "₺290", code: "M01" },
  ];

  const orderItems = [
    { name: "Truffle Burger", qty: 2, price: "₺640", notes: "Orta pişmiş, ekstra cheddar" },
    { name: "Smash Cheeseburger", qty: 1, price: "₺270", notes: "Turşusuz" },
    { name: "Ev Yapımı Limonata", qty: 3, price: "₺225", notes: "Buzlu, naneli" },
  ];

  return (
    <div className={`relative mx-auto max-w-5xl ${className}`}>
      <BrowserMockup url="app.oxonom.com/terminal/salon-pos">
        <div className="bg-background text-foreground min-h-[460px] md:min-h-[500px] flex flex-col md:flex-row text-left select-none overflow-hidden">
          {/* Main POS Interface (Left 65%) */}
          <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-border/60">
            {/* Top Toolbar */}
            <div className="h-12 border-b border-border/60 px-4 flex items-center justify-between bg-card/40">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SALON TERMINAL 01</span>
                </div>
                <Badge variant="outline" className="text-[10px] h-5 font-normal">Masa 08 • Ahmet K.</Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative hidden sm:block">
                  <Search className="size-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    readOnly
                    placeholder="Ürün veya kod ara (F2)..."
                    className="h-7 w-40 text-xs rounded-md bg-background border border-border/60 pl-8 pr-2 text-muted-foreground"
                  />
                </div>
              </div>
            </div>

            {/* Category Pills */}
            <div className="p-3 border-b border-border/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-muted/20">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-background/80 hover:bg-background text-muted-foreground border border-border/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="p-3.5 grid grid-cols-2 sm:grid-cols-3 gap-2.5 flex-1 bg-card/20">
              {products.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-border/60 bg-card/80 hover:border-primary/50 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <span className="text-xs font-semibold group-hover:text-primary transition-colors leading-tight">
                        {item.name}
                      </span>
                    </div>
                    {item.badge && (
                      <span className="inline-block mt-1 text-[9px] px-1.5 py-0.2 rounded bg-primary/10 text-primary font-medium">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-border/40">
                    <span className="font-bold text-xs text-foreground">{item.price}</span>
                    <div className="size-6 rounded-md bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Plus className="size-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Bill Column (Right 35%) */}
          <div className="w-full md:w-80 flex flex-col bg-card/60">
            {/* Bill Header */}
            <div className="h-12 border-b border-border/60 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Utensils className="size-4 text-primary" />
                <span className="font-bold text-sm">Adisyon #1042</span>
              </div>
              <span className="text-xs text-muted-foreground">3 Ürün / 6 Porsiyon</span>
            </div>

            {/* Bill Items List */}
            <div className="flex-1 p-3 space-y-2 overflow-y-auto">
              {orderItems.map((item, i) => (
                <div key={i} className="p-2.5 rounded-lg border border-border/50 bg-background/70 text-xs">
                  <div className="flex items-center justify-between font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span className="size-5 rounded bg-primary/15 text-primary flex items-center justify-center font-bold text-[11px]">
                        {item.qty}x
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <span>{item.price}</span>
                  </div>
                  <div className="mt-1 text-[10px] text-muted-foreground pl-6">
                    {item.notes}
                  </div>
                </div>
              ))}
            </div>

            {/* Bill Summary & Action Buttons */}
            <div className="p-3.5 border-t border-border/60 bg-background/80 space-y-3">
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Ara Toplam</span>
                  <span>₺1.031,82</span>
                </div>
                <div className="flex justify-between">
                  <span>KDV (%10)</span>
                  <span>₺103,18</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-foreground pt-1 border-t border-border/40">
                  <span>Genel Toplam</span>
                  <span className="text-primary font-black text-base">₺1.135,00</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2 text-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-semibold text-xs cursor-pointer hover:bg-emerald-500/20 transition-colors">
                  Mutfağa Gönder
                </div>
                <div className="p-2 text-center rounded-lg bg-primary text-primary-foreground font-semibold text-xs cursor-pointer hover:bg-primary/90 transition-colors">
                  Parçalı Tahsilat
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>

      {/* Floating KDS Badge (Top Right) */}
      <div className="absolute -top-6 -right-3 sm:-right-6 z-20 hidden sm:flex items-center gap-3 p-3 rounded-xl border border-border/80 bg-background/90 backdrop-blur-md shadow-xl text-left animate-in fade-in slide-in-from-top-4">
        <div className="size-9 rounded-lg bg-amber-500/15 text-amber-500 flex items-center justify-center">
          <Clock className="size-4 animate-spin [animation-duration:8s]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs">Mutfak Ekranı (KDS)</span>
            <span className="text-[9px] bg-amber-500/20 text-amber-500 px-1.5 py-0.2 rounded font-semibold">Hazırlanıyor</span>
          </div>
          <p className="text-[11px] text-muted-foreground">Masa 08 siparişi ızgara istasyonuna iletildi (3 dk)</p>
        </div>
      </div>

      {/* Floating QR Self Order Badge (Bottom Left) */}
      <div className="absolute -bottom-6 -left-3 sm:-left-6 z-20 hidden sm:flex items-center gap-3 p-3 rounded-xl border border-border/80 bg-background/90 backdrop-blur-md shadow-xl text-left animate-in fade-in slide-in-from-bottom-4">
        <div className="size-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
          <QrCode className="size-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs">QR Self Order</span>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-500 px-1.5 py-0.2 rounded font-semibold">Masadan Sipariş</span>
          </div>
          <p className="text-[11px] text-muted-foreground">Masa 14: 2x Soğuk Kahve hesaba otomatik eklendi</p>
        </div>
      </div>
    </div>
  );
}
