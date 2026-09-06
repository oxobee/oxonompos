"use client";

import React, { useState } from "react";
import { Utensils, Users, Clock, ArrowRightLeft, Merge, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TableManagementPreview() {
  const [selectedZone, setSelectedZone] = useState<"salon" | "bahce" | "teras">("salon");

  const tables = [
    { id: "M01", name: "Masa 01", status: "dolu", bill: "₺840", guests: 3, time: "42 dk" },
    { id: "M02", name: "Masa 02", status: "hesap", bill: "₺1.250", guests: 4, time: "1 sa 10 dk" },
    { id: "M03", name: "Masa 03", status: "bos", bill: "₺0", guests: 0, time: "-" },
    { id: "M04", name: "Masa 04", status: "dolu", bill: "₺460", guests: 2, time: "18 dk" },
    { id: "M05", name: "Masa 05", status: "bos", bill: "₺0", guests: 0, time: "-" },
    { id: "M06", name: "Masa 06", status: "dolu", bill: "₺2.180", guests: 6, time: "55 dk" },
  ];

  return (
    <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8 backdrop-blur text-left shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Utensils className="size-5 text-primary" />
            <h3 className="font-bold text-lg text-foreground">Görsel Salon &amp; Masa Kat Planı</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Bölgeler, doluluk oranları, aktif adisyonlar ve masa transferleri
          </p>
        </div>

        {/* Zone switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-muted/60 border border-border/40">
          <button
            onClick={() => setSelectedZone("salon")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
              selectedZone === "salon" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            İç Salon (14 Masa)
          </button>
          <button
            onClick={() => setSelectedZone("bahce")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
              selectedZone === "bahce" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Açık Bahçe (18 Masa)
          </button>
          <button
            onClick={() => setSelectedZone("teras")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
              selectedZone === "teras" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            VIP Teras (8 Masa)
          </button>
        </div>
      </div>

      {/* Table status indicators */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-emerald-500" />
          <span>Boş Masa</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-primary" />
          <span>Dolu / Sipariş Açık</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-amber-500" />
          <span>Hesap İstendi</span>
        </div>
        <div className="flex items-center gap-1.5 ml-auto text-[11px]">
          <span className="text-foreground font-bold">Salon Doluluğu: %67</span>
        </div>
      </div>

      {/* Tables Grid */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {tables.map((t) => (
          <div
            key={t.id}
            className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between h-36 ${
              t.status === "bos"
                ? "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500"
                : t.status === "hesap"
                ? "border-amber-500/40 bg-amber-500/5 hover:border-amber-500"
                : "border-primary/40 bg-primary/5 hover:border-primary"
            }`}
          >
            <div className="flex justify-between items-start">
              <span className="font-bold text-sm text-foreground">{t.name}</span>
              <span
                className={`size-2 rounded-full ${
                  t.status === "bos" ? "bg-emerald-500" : t.status === "hesap" ? "bg-amber-500" : "bg-primary"
                }`}
              />
            </div>

            {t.status !== "bos" ? (
              <div className="space-y-1">
                <div className="text-sm font-black text-foreground">{t.bill}</div>
                <div className="text-[10px] text-muted-foreground flex items-center gap-2">
                  <span className="flex items-center gap-0.5"><Users className="size-2.5" /> {t.guests} Kişi</span>
                  <span className="flex items-center gap-0.5"><Clock className="size-2.5" /> {t.time}</span>
                </div>
              </div>
            ) : (
              <div className="text-[11px] text-emerald-500 font-semibold">Müsait</div>
            )}

            <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[10px] text-muted-foreground">
              {t.status !== "bos" ? (
                <>
                  <span className="hover:text-foreground cursor-pointer flex items-center gap-0.5"><ArrowRightLeft className="size-2.5" /> Taşı</span>
                  <span className="hover:text-foreground cursor-pointer flex items-center gap-0.5"><Merge className="size-2.5" /> Birleştir</span>
                </>
              ) : (
                <span className="hover:text-emerald-500 cursor-pointer flex items-center gap-0.5"><Plus className="size-2.5" /> Sipariş Aç</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
