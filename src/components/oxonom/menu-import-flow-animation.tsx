"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Camera, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Check,
  ArrowRight, 
  FileText, 
  Zap,
  Scan,
  Smartphone,
  Utensils
} from "lucide-react";

export function MenuImportFlowAnimation() {
  const [scanActive, setScanActive] = useState<boolean>(true);
  const [detectedCount, setDetectedCount] = useState<number>(13);

  return (
    <div className="relative w-full rounded-3xl border border-border/70 bg-gradient-to-b from-card/90 via-card/50 to-card/90 p-6 sm:p-8 shadow-xl overflow-hidden backdrop-blur-md">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-72 h-48 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header title for flow */}
      <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
          <Zap className="size-3.5" />
          <span>Saniyeler İçinde Menü Dijitalleştirme</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
          Masadaki Kağıt Menüden Tam Otomatik POS Kataloğuna
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Telefonla çekilen tek bir fotoğraf, yapay zekanın akıcı görsel tarama çizgileriyle analiz edilerek eksiksiz dijital menüye dönüştürülür.
        </p>
      </div>

      {/* 3-Step Connected Flow Grid with Flowing Animated Lines */}
      <div className="relative grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
        {/* STEP 1: Physical Menu Photo with Scanning Laser Beam (cols 1-3) */}
        <div className="md:col-span-3 flex flex-col items-center">
          <div className="relative w-full max-w-[220px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg group bg-black/5">
            {/* Real menu photo */}
            <Image
              src="/images/menu-import-physical-photo.jpg"
              alt="Fiziksel Kafe Menüsü Fotoğrafı"
              fill
              className="object-cover"
            />

            {/* Glowing Laser Scan Line (Sweeps up and down) */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b,0_0_8px_#ea580c] animate-scan-beam pointer-events-none z-20" />

            {/* Detected Bounding Box Overlays */}
            <div className="absolute top-12 left-4 right-4 p-1 border border-amber-400/80 bg-amber-500/15 rounded text-[8px] font-bold text-amber-200 z-10 animate-pulse">
              [KAHVELER • 4 Çeşit Algılandı]
            </div>
            <div className="absolute top-28 left-4 right-4 p-1 border border-emerald-400/80 bg-emerald-500/15 rounded text-[8px] font-bold text-emerald-200 z-10">
              [TATLILAR • 3 Çeşit Algılandı]
            </div>

            {/* Badge overlay at bottom */}
            <div className="absolute bottom-2 inset-x-2 bg-black/75 backdrop-blur-xs rounded-xl p-2 text-center text-white z-20 border border-white/10">
              <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-amber-400">
                <Camera className="size-3" />
                <span>1. Telefonla Fotoğraf Çek</span>
              </div>
              <div className="text-[9px] text-neutral-300 mt-0.5">Masa üstü fiziksel kafe menüsü</div>
            </div>
          </div>
        </div>

        {/* CONNECTING FLOW BEAM 1 (cols 4): Animated flowing dashed line */}
        <div className="md:col-span-1 flex flex-col items-center justify-center py-2 md:py-0">
          <div className="relative w-full flex items-center justify-center">
            {/* Desktop horizontal flow line */}
            <div className="hidden md:flex items-center w-full relative">
              <div className="w-full h-0.5 bg-border relative overflow-hidden">
                <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent animate-flow-beam" />
              </div>
              <div className="size-6 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center shrink-0 shadow-xs">
                <ArrowRight className="size-3 animate-pulse" />
              </div>
            </div>

            {/* Mobile vertical flow line */}
            <div className="flex md:hidden flex-col items-center h-12">
              <div className="w-0.5 h-full bg-border relative overflow-hidden">
                <div className="absolute inset-0 h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent animate-flow-beam-v" />
              </div>
            </div>
          </div>
        </div>

        {/* STEP 2: The AI OCR Engine Card (cols 5-7) */}
        <div className="md:col-span-3 flex flex-col items-center">
          <div className="w-full rounded-2xl border-2 border-primary/40 bg-card p-4 shadow-xl space-y-3 relative overflow-hidden">
            {/* Ambient pulse */}
            <div className="absolute top-0 right-0 size-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-gradient-to-tr from-primary to-amber-500 flex items-center justify-center text-white shadow-xs">
                  <Cpu className="size-4 animate-spin-slow" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">2. Oxonom AI Vision</div>
                  <div className="text-[10px] text-muted-foreground">Doğal Dil &amp; OCR Motoru</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-500/10 text-amber-600 border border-amber-500/20">
                25 Kredi
              </span>
            </div>

            {/* Simulated Live Checklist */}
            <div className="space-y-1.5 text-[11px] bg-muted/40 p-2.5 rounded-xl border border-border/50 text-left">
              <div className="flex items-center gap-2 text-foreground/90 font-medium">
                <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                <span>Kategoriler Okundu (4 Adet)</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/90 font-medium">
                <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                <span>Ürün &amp; Fiyatlar Eşleşti (13 Adet)</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/90 font-medium">
                <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                <span>Açıklamalar &amp; Kaloriler Ayrıştı</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="size-2 rounded-full bg-primary animate-ping" />
                <span>Doğrulama Tamamlandı (%100)</span>
              </div>
            </div>

            <div className="text-[10px] text-center text-muted-foreground font-medium">
              ⚡ Elle tek tek menü yazmaya gerek kalmadan 3 saniyede tamamlandı
            </div>
          </div>
        </div>

        {/* CONNECTING FLOW BEAM 2 (cols 8): Animated flowing line */}
        <div className="md:col-span-1 flex flex-col items-center justify-center py-2 md:py-0">
          <div className="relative w-full flex items-center justify-center">
            {/* Desktop horizontal flow line */}
            <div className="hidden md:flex items-center w-full relative">
              <div className="w-full h-0.5 bg-border relative overflow-hidden">
                <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-flow-beam" />
              </div>
              <div className="size-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                <ArrowRight className="size-3 animate-pulse" />
              </div>
            </div>

            {/* Mobile vertical flow line */}
            <div className="flex md:hidden flex-col items-center h-12">
              <div className="w-0.5 h-full bg-border relative overflow-hidden">
                <div className="absolute inset-0 h-1/2 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-flow-beam-v" />
              </div>
            </div>
          </div>
        </div>

        {/* STEP 3: The Finished Structured Digital Menu (cols 9-11) */}
        <div className="md:col-span-3 flex flex-col items-center">
          <div className="w-full rounded-2xl border-2 border-emerald-500/40 bg-card p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">3. Hazır Dijital Menü</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">POS &amp; QR'a Anında Yayında</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                13 Ürün Aktif
              </span>
            </div>

            {/* Sample structured items preview */}
            <div className="space-y-1.5 text-[10px]">
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-muted/50 border border-border/50">
                <div>
                  <span className="font-bold text-foreground">Espresso</span>
                  <span className="text-[9px] text-muted-foreground ml-1.5">Kahveler</span>
                </div>
                <span className="font-extrabold text-primary">90 TL</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-muted/50 border border-border/50">
                <div>
                  <span className="font-bold text-foreground">Americano</span>
                  <span className="text-[9px] text-muted-foreground ml-1.5">Kahveler</span>
                </div>
                <span className="font-extrabold text-primary">110 TL</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-muted/50 border border-border/50">
                <div>
                  <span className="font-bold text-foreground">Cheesecake</span>
                  <span className="text-[9px] text-muted-foreground ml-1.5">Tatlılar</span>
                </div>
                <span className="font-extrabold text-primary">165 TL</span>
              </div>
            </div>

            <div className="w-full py-1.5 rounded-xl bg-emerald-600 text-white text-[10px] font-bold text-center flex items-center justify-center gap-1 shadow-xs">
              <Check className="size-3" />
              <span>Tek Tıkla Menüye Eklendi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
