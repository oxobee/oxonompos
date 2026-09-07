"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Printer, 
  Sparkles, 
  FileText, 
  Download, 
  Check, 
  RefreshCw, 
  Layers, 
  Palette, 
  FileCheck2, 
  Scissors, 
  CheckCircle2, 
  ChevronDown 
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";

export function BrochureWizardSimulator() {
  const [format, setFormat] = useState<"a5" | "trifold" | "doorhanger">("a5");
  const [theme, setTheme] = useState<"dark" | "kraft" | "clean">("dark");
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleGeneratePdf = () => {
    setPdfGenerating(true);
    setTimeout(() => {
      setPdfGenerating(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden border border-border/70">
        <BrowserMockup url="app.oxonompos.com/marketing/brochure-wizard">
          <div className="bg-background text-foreground min-h-[600px] p-4 sm:p-6 text-left flex flex-col justify-between">
            
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md">
                  <Printer className="size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-foreground">Broşür Sihirbazı &amp; Baskı Stüdyosu</h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500/10 text-amber-600 border border-amber-500/30 uppercase tracking-wider">
                      Çok Yakında
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Dağıtıma ve matbaaya hazır 300 DPI CMYK el broşürlerini panelinizden 2 dakikada tasarlayın.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleGeneratePdf}
                  disabled={pdfGenerating}
                  className="px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
                >
                  {pdfGenerating ? (
                    <>
                      <RefreshCw className="size-3.5 animate-spin" />
                      <span>PDF Hazırlanıyor...</span>
                    </>
                  ) : (
                    <>
                      <Download className="size-3.5" />
                      <span>300 DPI CMYK PDF İndir</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Success Toast */}
            {downloadSuccess && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md flex items-center justify-between animate-in fade-in duration-150">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4" />
                  <span>Baskıya hazır matbaa PDF dosyası (kesim paylı) başarıyla oluşturuldu!</span>
                </div>
                <span className="text-[10px] opacity-80">300 DPI • CMYK</span>
              </div>
            )}

            {/* Main 2-Column Studio */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Controls (5 Cols) */}
              <div className="lg:col-span-5 min-w-0 space-y-4 p-4 rounded-2xl bg-card border border-border/70 shadow-xs">
                
                {/* Format Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground block">
                    Broşür Formatı &amp; Boyut
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "a5", title: "A5 Broşür", desc: "Tek Sayfa Ön/Arka" },
                      { id: "trifold", title: "Kırımlı", desc: "3 Katlamalı Menü" },
                      { id: "doorhanger", title: "Kapı Askısı", desc: "Paket Servis İçin" },
                    ].map((fmt) => (
                      <button
                        key={fmt.id}
                        type="button"
                        onClick={() => setFormat(fmt.id as any)}
                        className={`p-2 rounded-xl border text-left transition-all min-w-0 ${
                          format === fmt.id
                            ? "border-primary bg-primary/10 shadow-xs ring-1 ring-primary"
                            : "border-border/70 bg-background hover:bg-muted/40"
                        }`}
                      >
                        <div className="text-xs font-black text-foreground truncate">{fmt.title}</div>
                        <div className="text-[9px] text-muted-foreground mt-0.5 truncate">{fmt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Theme Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground block">
                    Tasarım Teması
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "dark", label: "Koyu Gurme" },
                      { id: "kraft", label: "Sıcak Kraft" },
                      { id: "clean", label: "Modern Beyaz" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTheme(t.id as any)}
                        className={`py-1.5 px-2 rounded-xl border text-xs font-bold transition-all text-center ${
                          theme === t.id
                            ? "border-primary bg-primary/10 text-primary shadow-2xs"
                            : "border-border/70 bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Menu Source Sync */}
                <div className="p-3 rounded-xl bg-muted/40 border border-border/60 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-foreground">
                    <span className="flex items-center gap-1.5">
                      <RefreshCw className="size-3.5 text-primary" />
                      <span>POS Menüsünden Çek</span>
                    </span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                      Otomatik
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    Yemek adları, güncel fiyatlar ve QR menü karekodu el broşürüne doğrudan panelden aktarılır.
                  </p>
                </div>

                {/* Print Specs info */}
                <div className="space-y-1 text-[11px] text-muted-foreground">
                  <div className="flex justify-between py-1 border-b border-border/40">
                    <span>Baskı Çözünürlüğü:</span>
                    <span className="font-mono font-bold text-foreground">300 DPI Ultra Sharp</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/40">
                    <span>Renk Uzayı:</span>
                    <span className="font-mono font-bold text-foreground">CMYK Matbaa Profili</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Taşma &amp; Kesim Payı:</span>
                    <span className="font-mono font-bold text-foreground">+3mm Otomatik Bleed</span>
                  </div>
                </div>

              </div>

              {/* Right: Printable Brochure Canvas Preview (7 Cols) */}
              <div className="lg:col-span-7 min-w-0 space-y-3 p-4 rounded-2xl bg-card border border-border/70 shadow-xs flex flex-col items-center justify-center">
                
                {/* Print Canvas with Bleed Markers */}
                <div className="relative w-full max-w-sm aspect-[1/1.414] rounded-xl border-2 border-dashed border-neutral-400 dark:border-neutral-700 bg-neutral-900 text-white p-4 shadow-2xl overflow-hidden flex flex-col justify-between">
                  
                  {/* Bleed Mark Top Left */}
                  <div className="absolute top-1 left-1 text-[8px] text-neutral-500 font-mono">
                    ┌ Kesim Çizgisi (+3mm Bleed)
                  </div>

                  {/* Header in Brochure */}
                  <div className="text-center pt-2 space-y-1">
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-rose-600 text-[9px] font-black tracking-widest uppercase">
                      PAKET SERVİS &amp; GEL-AL MENÜSÜ
                    </div>
                    <h3 className="text-base sm:text-lg font-black tracking-tight">
                      UGUR BURGER &amp; GURME LEZZETLER
                    </h3>
                    <p className="text-[9px] text-neutral-300">Sipariş Hattı: 0850 123 45 67 • ugurburger.com</p>
                  </div>

                  {/* Menu Items Showcase in Brochure */}
                  <div className="space-y-2 my-2">
                    <div className="flex items-center gap-2 p-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700">
                      <div className="relative size-10 rounded-md overflow-hidden shrink-0">
                        <Image src="/images/food-enhance-after.jpg" alt="Burger" fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center text-xs font-bold">
                          <span className="truncate">Smash Gurme Burger</span>
                          <span className="text-amber-400 font-mono">₺340</span>
                        </div>
                        <div className="text-[8px] text-neutral-400 truncate">200gr dana köfte, karamelize soğan, çıtır patates</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700">
                      <div className="relative size-10 rounded-md overflow-hidden shrink-0">
                        <Image src="/images/ai-image-gen-iskender.jpg" alt="İskender" fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center text-xs font-bold">
                          <span className="truncate">Tereyağlı İskender</span>
                          <span className="text-amber-400 font-mono">₺440</span>
                        </div>
                        <div className="text-[8px] text-neutral-400 truncate">Özel pide, süzme yoğurt, köz biber &amp; tereyağ sosu</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Coupon & QR Box */}
                  <div className="p-2 rounded-lg border border-amber-500/60 bg-amber-500/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black text-amber-300">İLK SİPARİŞE %15 İNDİRİM!</div>
                      <div className="text-[8px] text-neutral-300">Broşürdeki QR kodu okutup anında sipariş verin</div>
                    </div>
                    <div className="size-9 bg-white rounded p-0.5 shrink-0 flex items-center justify-center">
                      <div className="size-7 bg-black rounded-xs" />
                    </div>
                  </div>

                </div>

                <div className="text-center text-[10px] text-muted-foreground flex items-center gap-1.5">
                  <Scissors className="size-3" />
                  <span>Kesim payları ve renk kalibrasyonu otomatik ayarlanmıştır.</span>
                </div>

              </div>

            </div>

          </div>
        </BrowserMockup>
      </div>

      {/* Badges */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-2xl text-xs font-semibold text-muted-foreground">
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Printer className="size-3.5 text-blue-500" />
          <span>Matbaaya Doğrudan Gönderilebilir PDF</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <RefreshCw className="size-3.5 text-amber-500" />
          <span>POS Menü Fiyatlarıyla Otomatik Eşleşme</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <FileCheck2 className="size-3.5 text-emerald-500" />
          <span>300 DPI CMYK Yüksek Çözünürlük</span>
        </span>
      </div>
    </div>
  );
}
