"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Share2, 
  Sparkles, 
  Download, 
  Check, 
  RefreshCw, 
  Palette, 
  Flame, 
  CheckCircle2, 
  Copy, 
  Sliders, 
  ChevronDown 
} from "lucide-react";
import { BrowserMockup } from "@/components/velora/browser-mockup";

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function SocialMediaWizardSimulator() {
  const [format, setFormat] = useState<"post" | "story">("post");
  const [selectedProduct, setSelectedProduct] = useState<"burger" | "iskender">("burger");
  const [captionCopied, setCaptionCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const productData = {
    burger: {
      name: "Smash Burger & Çıtır Patates",
      price: "₺340",
      img: "/images/food-enhance-after.jpg",
      headline: "HAFTANIN FAVORİ LEZZETİ!",
      caption: "Ağızda eriyen çift cheddar peyniri ve 200gr özel dana köftesiyle hazırlanan Smash Burger menüsü bugün seni bekliyor! 🍔🔥\n\n📍 Masanda QR menüyü okut, doğum gününe özel %10 indirimini anında kap!\n#burgerlovers #gurmeburger #haftasonulezzeti",
    },
    iskender: {
      name: "Tereyağlı İskender Kebap",
      price: "₺440",
      img: "/images/ai-image-gen-iskender.jpg",
      headline: "KIZGIN TEREYAĞI KOKUSU BURADA!",
      caption: "Özel süzme yoğurt, çıtır pide parçaları ve cızırdayan tereyağlı domates sosu... Gerçek döner tutkunlarının tercihi İskender soframızda hazır! 🥩✨\n\n📍 Masanda hemen sipariş ver!\n#iskender #geleneksellezzet #dönerkeyfi",
    },
  };

  const current = productData[selectedProduct];

  const handleCopyCaption = () => {
    navigator.clipboard?.writeText(current.caption);
    setCaptionCopied(true);
    setTimeout(() => setCaptionCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden border border-border/70">
        <BrowserMockup url="app.oxonompos.com/marketing/social-media-wizard">
          <div className="bg-background text-foreground min-h-[600px] p-4 sm:p-6 text-left flex flex-col justify-between">
            
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-rose-500 text-white flex items-center justify-center shadow-md">
                  <Share2 className="size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-foreground">Sosyal Medya Sihirbazı</h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500/10 text-amber-600 border border-amber-500/30 uppercase tracking-wider">
                      Çok Yakında
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Menünüzdeki ürünlerle marka kimliğinize uygun Instagram Post ve Story görselleri üretin.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <Download className="size-3.5" />
                  <span>Görseli İndir</span>
                </button>
              </div>
            </div>

            {/* Toast */}
            {downloadSuccess && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md flex items-center justify-between animate-in fade-in duration-150">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4" />
                  <span>Yüksek çözünürlüklü sosyal medya görseli indirildi!</span>
                </div>
                <span className="text-[10px] opacity-80">1080×1080 • Instagram Hazır</span>
              </div>
            )}

            {/* Studio Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Settings (5 Cols) */}
              <div className="lg:col-span-5 min-w-0 space-y-4 p-4 rounded-2xl bg-card border border-border/70 shadow-xs">
                
                {/* Product Selector */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-foreground block">
                    Menüden Ürün Seçin
                  </label>
                  <div className="relative">
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border/70 text-xs font-semibold text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none pr-8 cursor-pointer"
                    >
                      <option value="burger">Smash Burger &amp; Çıtır Patates Menü</option>
                      <option value="iskender">Tereyağlı İskender Kebap</option>
                    </select>
                    <ChevronDown className="size-4 text-muted-foreground absolute right-2.5 top-2.5 pointer-events-none" />
                  </div>
                </div>

                {/* Format (1:1 Post vs 9:16 Story) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground block">
                    Paylaşım Formatı
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormat("post")}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        format === "post"
                          ? "border-primary bg-primary/10 text-primary font-bold shadow-2xs"
                          : "border-border/70 bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <div className="text-xs font-black">1:1 Kare Post</div>
                      <div className="text-[9px] opacity-80 mt-0.5">Instagram / Feed</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormat("story")}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        format === "story"
                          ? "border-primary bg-primary/10 text-primary font-bold shadow-2xs"
                          : "border-border/70 bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <div className="text-xs font-black">9:16 Hikaye</div>
                      <div className="text-[9px] opacity-80 mt-0.5">Story / Reels</div>
                    </button>
                  </div>
                </div>

                {/* AI Generated Caption Box */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-foreground">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="size-3.5 text-purple-500" />
                      <span>Hazır Gönderi Açıklaması</span>
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyCaption}
                      className="text-[10px] text-primary hover:underline flex items-center gap-1"
                    >
                      {captionCopied ? (
                        <>
                          <Check className="size-3 text-emerald-500" />
                          <span className="text-emerald-500">Kopyalandı!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          <span>Metni Kopyala</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60 text-[11px] text-muted-foreground leading-relaxed font-mono whitespace-pre-line max-h-32 overflow-y-auto">
                    {current.caption}
                  </div>
                </div>

              </div>

              {/* Right Mockup Preview (7 Cols) */}
              <div className="lg:col-span-7 min-w-0 space-y-3 p-4 rounded-2xl bg-card border border-border/70 shadow-xs flex flex-col items-center justify-center">
                
                {/* Simulated Instagram Post Frame */}
                <div className={`relative w-full max-w-sm ${format === "post" ? "aspect-square" : "aspect-[9/16] max-h-[460px]"} rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white p-4 flex flex-col justify-between`}>
                  
                  {/* Post Top Header */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <div className="size-7 rounded-full bg-rose-600 flex items-center justify-center text-xs font-black">
                        OX
                      </div>
                      <span className="text-xs font-bold">@ugurburger</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[9px] font-black uppercase tracking-wider">
                      Özel Kampanya
                    </span>
                  </div>

                  {/* Food Image Centerpiece */}
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden my-2 shadow-xl border border-white/10">
                    <Image
                      src={current.img}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-amber-400 font-black text-xs">
                      {current.price}
                    </div>
                  </div>

                  {/* Post Bottom Banner */}
                  <div className="z-10 space-y-1 text-center">
                    <div className="text-xs font-black tracking-wide text-amber-400">
                      {current.headline}
                    </div>
                    <div className="text-[10px] text-neutral-300">
                      Masada QR Menü ile Sipariş Ver • Sürpriz İndirimleri Yakala
                    </div>
                  </div>

                </div>

                <div className="text-center text-[10px] text-muted-foreground">
                  Instagram ve Facebook algoritmasına uygun renk kontrastı ve tipografiyle üretilmiştir.
                </div>

              </div>

            </div>

          </div>
        </BrowserMockup>
      </div>

      {/* Badges */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-2xl text-xs font-semibold text-muted-foreground">
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <InstagramIcon className="size-3.5 text-pink-500" />
          <span>Instagram Post &amp; Story Uyumlu</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Sparkles className="size-3.5 text-purple-500" />
          <span>Yapay Zekalı Otomatik Caption &amp; Hashtag</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-muted/60 border border-border/60 flex items-center gap-1.5">
          <Palette className="size-3.5 text-amber-500" />
          <span>Marka Renklerine Özel Şablonlar</span>
        </span>
      </div>
    </div>
  );
}
