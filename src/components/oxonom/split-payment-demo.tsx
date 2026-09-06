"use client";

import React, { useState } from "react";
import { Check, CreditCard, Banknote, UtensilsCrossed, RotateCcw, ReceiptText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SplitPaymentDemo() {
  const totalAmount = 1500;
  const [payments, setPayments] = useState<{ type: string; amount: number; icon: string }[]>([]);

  const paidAmount = payments.reduce((acc, curr) => acc + curr.amount, 0);
  const remaining = Math.max(0, totalAmount - paidAmount);

  const addPayment = (type: string, amount: number, icon: string) => {
    if (remaining <= 0) return;
    const actualAmount = Math.min(amount, remaining);
    setPayments([...payments, { type, amount: actualAmount, icon }]);
  };

  const reset = () => {
    setPayments([]);
  };

  return (
    <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8 backdrop-blur text-left shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <ReceiptText className="size-5 text-primary" />
            <h3 className="font-bold text-lg text-foreground">Adisyon Hesabı: Masa 12</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">Karma ve Parçalı Tahsilat Simülasyonu</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-muted-foreground block">Toplam Tutar</span>
            <span className="text-xl font-black text-foreground">₺{totalAmount.toLocaleString("tr-TR")}</span>
          </div>
          {payments.length > 0 && (
            <Button variant="ghost" size="icon" onClick={reset} title="Sıfırla" className="size-8">
              <RotateCcw className="size-4 text-muted-foreground hover:text-foreground" />
            </Button>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-muted-foreground">Tahsil Edilen: <span className="text-primary font-bold">₺{paidAmount.toLocaleString("tr-TR")}</span></span>
          <span className={remaining === 0 ? "text-emerald-500 font-bold" : "text-amber-500 font-bold"}>
            Kalan: ₺{remaining.toLocaleString("tr-TR")}
          </span>
        </div>
        <div className="h-3 w-full rounded-full bg-muted/60 overflow-hidden flex">
          {payments.map((p, i) => (
            <div
              key={i}
              style={{ width: `${(p.amount / totalAmount) * 100}%` }}
              className={`h-full transition-all duration-300 ${
                p.type === "Nakit"
                  ? "bg-emerald-500"
                  : p.type === "Kredi Kartı"
                  ? "bg-primary"
                  : "bg-amber-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Recorded payments chips */}
      <div className="mt-4 min-h-[44px] flex flex-wrap gap-2 items-center">
        {payments.length === 0 ? (
          <span className="text-xs text-muted-foreground italic">Henüz ödeme girilmedi. Aşağıdaki butonlara tıklayarak parçalı ödemeyi deneyin.</span>
        ) : (
          payments.map((p, i) => (
            <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-background border border-border/80 shadow-sm animate-in fade-in zoom-in-95">
              <span className="size-2 rounded-full bg-primary" />
              <span>{p.type}:</span>
              <span className="text-foreground font-bold">₺{p.amount.toLocaleString("tr-TR")}</span>
            </div>
          ))
        )}
      </div>

      {/* Quick split payment buttons */}
      <div className="mt-6 pt-5 border-t border-border/50">
        {remaining > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => addPayment("Nakit", 500, "cash")}
              className="p-3 rounded-xl border border-border/70 bg-card hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-all flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-105 transition-transform">
                  <Banknote className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">₺500 Nakit</div>
                  <div className="text-[10px] text-muted-foreground">Kasa tahsilatı</div>
                </div>
              </div>
              <span className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">+ Ekle</span>
            </button>

            <button
              onClick={() => addPayment("Kredi Kartı", 700, "card")}
              className="p-3 rounded-xl border border-border/70 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                  <CreditCard className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">₺700 Kredi Kartı</div>
                  <div className="text-[10px] text-muted-foreground">POS slipli ödeme</div>
                </div>
              </div>
              <span className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">+ Ekle</span>
            </button>

            <button
              onClick={() => addPayment("Yemek Kartı", 300, "meal")}
              className="p-3 rounded-xl border border-border/70 bg-card hover:border-amber-500/60 hover:bg-amber-500/5 transition-all flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 group-hover:scale-105 transition-transform">
                  <UtensilsCrossed className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">₺300 Yemek Kartı</div>
                  <div className="text-[10px] text-muted-foreground">Multinet / Sodexo</div>
                </div>
              </div>
              <span className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">+ Ekle</span>
            </button>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-between animate-in zoom-in-95">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                <Check className="size-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">Adisyon Hesabı Başarıyla Kapatıldı</div>
                <div className="text-xs text-muted-foreground">Mali fiş basıldı, Z raporu kasasına ve KDV matrahına işlendi.</div>
              </div>
            </div>
            <Button size="sm" variant="outline" onClick={reset} className="text-xs">
              Yeni Ödeme Simülasyonu
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
