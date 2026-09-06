"use client";

import React, { useState } from "react";
import { Plus, Boxes, Sparkles, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RecipeStockDemo() {
  const [salesCount, setSalesCount] = useState(1);

  const initialStock = {
    bread: 40,
    meat: 6000, // gr
    cheese: 48,
    sauce: 1200, // gr
    fries: 8000, // gr
  };

  const sellOne = () => {
    setSalesCount((prev) => prev + 1);
  };

  const currentBread = Math.max(0, initialStock.bread - salesCount * 1);
  const currentMeat = Math.max(0, initialStock.meat - salesCount * 150);
  const currentCheese = Math.max(0, initialStock.cheese - salesCount * 1);
  const currentSauce = Math.max(0, initialStock.sauce - salesCount * 20);

  return (
    <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8 backdrop-blur text-left shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Boxes className="size-5 text-primary" />
            <h3 className="font-bold text-lg text-foreground">Akıllı Reçete & Hammadde Takibi</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">Satış anında reçete bileşenlerinin otomatik gramaj düşümü</p>
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={sellOne} size="sm" className="gap-1.5 shadow-sm text-xs font-semibold">
            <Plus className="size-3.5" />
            <span>1x Cheeseburger Sat</span>
          </Button>
        </div>
      </div>

      {/* Main interaction layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] items-center gap-6">
        {/* Sold Menu Item */}
        <div className="p-5 rounded-xl border border-primary/40 bg-primary/5 text-center flex flex-col items-center justify-center">
          <div className="text-3xl mb-2">🍔</div>
          <h4 className="font-bold text-sm text-foreground">Double Cheeseburger</h4>
          <span className="text-xs font-semibold text-primary mt-1">₺290,00</span>
          <div className="mt-3 px-3 py-1 rounded-full bg-background border text-[11px] font-bold text-muted-foreground">
            Toplam Satılan: <span className="text-foreground">{salesCount} Adet</span>
          </div>
        </div>

        {/* Arrow / Connection */}
        <div className="hidden lg:flex flex-col items-center justify-center text-primary">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Reçete</span>
          <ArrowRight className="size-6 animate-pulse" />
        </div>

        {/* Stock Items Real-time Deducted */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Bread */}
          <div className="p-3 rounded-xl border border-border/70 bg-background/80 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium text-muted-foreground">Burger Ekmeği</span>
              <span className="text-[10px] text-rose-500 font-bold">-1 Adet</span>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-foreground">{currentBread}</span>
              <span className="text-[10px] text-muted-foreground ml-1">Adet</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full mt-2 overflow-hidden">
              <div style={{ width: `${(currentBread / initialStock.bread) * 100}%` }} className="h-full bg-primary" />
            </div>
          </div>

          {/* Meat */}
          <div className="p-3 rounded-xl border border-border/70 bg-background/80 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium text-muted-foreground">Dana Köfte</span>
              <span className="text-[10px] text-rose-500 font-bold">-150 gr</span>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-foreground">{(currentMeat / 1000).toFixed(2)}</span>
              <span className="text-[10px] text-muted-foreground ml-1">kg</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full mt-2 overflow-hidden">
              <div style={{ width: `${(currentMeat / initialStock.meat) * 100}%` }} className="h-full bg-emerald-500" />
            </div>
          </div>

          {/* Cheese */}
          <div className="p-3 rounded-xl border border-border/70 bg-background/80 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium text-muted-foreground">Cheddar Peyniri</span>
              <span className="text-[10px] text-rose-500 font-bold">-1 Dilim</span>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-foreground">{currentCheese}</span>
              <span className="text-[10px] text-muted-foreground ml-1">Dilim</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full mt-2 overflow-hidden">
              <div style={{ width: `${(currentCheese / initialStock.cheese) * 100}%` }} className="h-full bg-amber-500" />
            </div>
          </div>

          {/* Sauce */}
          <div className="p-3 rounded-xl border border-border/70 bg-background/80 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium text-muted-foreground">Özel Burger Sos</span>
              <span className="text-[10px] text-rose-500 font-bold">-20 gr</span>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-foreground">{currentSauce}</span>
              <span className="text-[10px] text-muted-foreground ml-1">gr</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full mt-2 overflow-hidden">
              <div style={{ width: `${(currentSauce / initialStock.sauce) * 100}%` }} className="h-full bg-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="size-3.5 text-primary" />
          <span>Fire, zayi ve kayıp kaçakların önüne geçin. Ay sonu sayım farkını sıfıra indirin.</span>
        </div>
        <span className="font-semibold text-foreground">Reçete Maliyeti: ₺86,40 (%29,7)</span>
      </div>
    </div>
  );
}
