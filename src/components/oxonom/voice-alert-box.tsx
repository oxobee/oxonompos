"use client";

import React, { useState } from "react";
import { Volume2, Bell, CheckCircle2, Play, Pause } from "lucide-react";

export function VoiceAlertBox() {
  const [activeAlert, setActiveAlert] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const alerts = [
    { title: "Masa 03 için yeni QR sipariş eklendi.", category: "Masa Siparişi", time: "14:22" },
    { title: "Masa 07 ana yemekleri mutfakta hazır.", category: "Mutfak KDS", time: "14:26" },
    { title: "Masa 05 garson çağırma butonuna bastı.", category: "Salon Servisi", time: "14:31" },
  ];

  return (
    <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8 backdrop-blur text-left shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Volume2 className="size-5 text-primary" />
            <h3 className="font-bold text-lg text-foreground">Gerçek Zamanlı Sesli Operasyon Anonsları</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Personelin ekranlara sürekli bakmasına gerek kalmadan anlık Türkçe sesli uyarılar
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Animated soundwave bars */}
          <div className="flex items-center gap-1 h-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-1 bg-primary rounded-full animate-bounce [animation-delay:0ms] h-3" />
            <span className="w-1 bg-primary rounded-full animate-bounce [animation-delay:150ms] h-5" />
            <span className="w-1 bg-primary rounded-full animate-bounce [animation-delay:300ms] h-2" />
            <span className="w-1 bg-primary rounded-full animate-bounce [animation-delay:450ms] h-4" />
            <span className="w-1 bg-primary rounded-full animate-bounce [animation-delay:200ms] h-3" />
            <span className="text-[10px] font-bold text-primary ml-1">CANLI SES</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        {alerts.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveAlert(index)}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between text-left ${
              activeAlert === index
                ? "border-primary bg-primary/5 shadow-md shadow-primary/5"
                : "border-border/60 bg-background/60 hover:bg-muted/30"
            }`}
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                  {item.category}
                </span>
                <span className="text-[10px] text-muted-foreground">{item.time}</span>
              </div>
              <p className="text-xs font-semibold text-foreground leading-snug">
                “{item.title}”
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1 text-primary font-medium">
                <Volume2 className="size-3" /> Hoparlör &amp; Kulaklık
              </span>
              <span>{activeAlert === index ? "Seçildi" : "Dinle"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
