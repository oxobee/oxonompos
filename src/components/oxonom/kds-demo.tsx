"use client";

import React, { useState } from "react";
import { Clock, CookingPot, Check, QrCode, AlertCircle, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface KDSTicket {
  id: string;
  table: string;
  stage: "waiting" | "preparing" | "ready";
  items: string[];
  minutes: number;
  isSelfOrder?: boolean;
}

export function KDSDemo() {
  const [tickets, setTickets] = useState<KDSTicket[]>([
    {
      id: "#201",
      table: "Masa 04",
      stage: "waiting",
      items: ["2x Kasap Köfte", "1x Çoban Salata", "2x Yayık Ayran"],
      minutes: 2,
    },
    {
      id: "#202",
      table: "Masa 11",
      stage: "preparing",
      items: ["1x Dana Antrikot (Orta)", "1x Mantarlı Risotto"],
      minutes: 8,
      isSelfOrder: true,
    },
    {
      id: "#203",
      table: "Masa 02",
      stage: "ready",
      items: ["2x Flat White", "1x San Sebastian Cheesecake"],
      minutes: 11,
    },
  ]);

  const moveStage = (id: string) => {
    setTickets(
      tickets.map((t) => {
        if (t.id === id) {
          if (t.stage === "waiting") return { ...t, stage: "preparing" };
          if (t.stage === "preparing") return { ...t, stage: "ready" };
        }
        return t;
      })
    );
  };

  return (
    <div className="rounded-2xl border border-border/60 bg-card/90 p-5 md:p-7 backdrop-blur text-left shadow-xl">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/50 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <CookingPot className="size-4" />
          </div>
          <div>
            <h3 className="font-bold text-base text-foreground">KDS Mutfak Hazırlık İstasyonu</h3>
            <p className="text-xs text-muted-foreground">Dokunmatik Mutfak Ekranı Canlı Akışı</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
            <Volume2 className="size-3.5 animate-pulse" />
            <span>Sesli Bildirim Aktif</span>
          </div>
        </div>
      </div>

      {/* 3 Column KDS Grid */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Waiting */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Bekliyor</span>
            </div>
            <span className="text-xs font-bold text-foreground">
              {tickets.filter((t) => t.stage === "waiting").length} Bilet
            </span>
          </div>

          {tickets
            .filter((t) => t.stage === "waiting")
            .map((ticket) => (
              <div
                key={ticket.id}
                className="p-4 rounded-xl border border-amber-500/30 bg-background/90 shadow-sm space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-foreground">{ticket.table}</span>
                  <Badge variant="outline" className="text-[10px] text-amber-500 border-amber-500/40">
                    <Clock className="size-3 mr-1" /> {ticket.minutes} dk
                  </Badge>
                </div>

                <ul className="text-xs space-y-1 text-muted-foreground">
                  {ticket.items.map((it, idx) => (
                    <li key={idx} className="font-medium text-foreground">
                      • {it}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => moveStage(ticket.id)}
                  className="w-full py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-500 text-xs font-bold transition-colors"
                >
                  Hazırlamaya Başla →
                </button>
              </div>
            ))}
        </div>

        {/* Preparing */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Hazırlanıyor</span>
            </div>
            <span className="text-xs font-bold text-foreground">
              {tickets.filter((t) => t.stage === "preparing").length} Bilet
            </span>
          </div>

          {tickets
            .filter((t) => t.stage === "preparing")
            .map((ticket) => (
              <div
                key={ticket.id}
                className="p-4 rounded-xl border border-primary/40 bg-background/90 shadow-sm space-y-3"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-foreground">{ticket.table}</span>
                    {ticket.isSelfOrder && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-500 font-bold flex items-center gap-1">
                        <QrCode className="size-2.5" /> Self-Order
                      </span>
                    )}
                  </div>
                  <Badge variant="outline" className="text-[10px] text-primary border-primary/40">
                    <Clock className="size-3 mr-1" /> {ticket.minutes} dk
                  </Badge>
                </div>

                <ul className="text-xs space-y-1 text-muted-foreground">
                  {ticket.items.map((it, idx) => (
                    <li key={idx} className="font-medium text-foreground">
                      • {it}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => moveStage(ticket.id)}
                  className="w-full py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold transition-colors"
                >
                  Servise Hazır ✓
                </button>
              </div>
            ))}
        </div>

        {/* Ready */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Servise Hazır</span>
            </div>
            <span className="text-xs font-bold text-foreground">
              {tickets.filter((t) => t.stage === "ready").length} Bilet
            </span>
          </div>

          {tickets
            .filter((t) => t.stage === "ready")
            .map((ticket) => (
              <div
                key={ticket.id}
                className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/5 shadow-sm space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-foreground">{ticket.table}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-500 font-bold">
                    Garsona İletildi
                  </span>
                </div>

                <ul className="text-xs space-y-1 text-muted-foreground">
                  {ticket.items.map((it, idx) => (
                    <li key={idx} className="font-medium text-foreground">
                      • {it}
                    </li>
                  ))}
                </ul>

                <div className="text-[11px] text-center text-emerald-500 font-semibold py-1">
                  Masa teslimi bekleniyor
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
