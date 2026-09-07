"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Camera, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Zap, 
  FileText, 
  FileUp, 
  Scan, 
  Clock, 
  Check
} from "lucide-react";
import { MenuImportSimulator, MenuImportStage } from "@/components/oxonom/menu-import-simulator";
import { MenuImportFlowAnimation } from "@/components/oxonom/menu-import-flow-animation";

interface StageInfo {
  id: MenuImportStage;
  title: string;
  badge: string;
  icon: React.ElementType;
  caption: string;
  description: string;
  bulletPoints: string[];
}

const stages: StageInfo[] = [
  {
    id: "upload",
    title: "Menü Fotoğrafı / PDF Yükleme",
    badge: "1. Aşama",
    icon: FileUp,
    caption: "Masa Üstü Fotoğraf, Çok Sayfalı PDF veya Web Linki Desteği",
    description: "Restoranınızın mevcut kağıt menüsünü telefon kamerasıyla çekip sürükleyip bırakın. Oxonom AI, kırışık kağıtları, loş ışıkta çekilmiş fotoğrafları ve farklı fontları yüksek hassasiyetle okur.",
    bulletPoints: [
      "PNG, JPG, WEBP ve çok sayfalı PDF desteği",
      "Birden fazla menü sayfasını tek seferde toplu yükleme",
      "Fotoğraftaki açı ve gölge bozukluklarını otomatik düzeltme",
    ],
  },
  {
    id: "photo",
    title: "Örnek Fiziksel Menü",
    badge: "Girdi",
    icon: Camera,
    caption: "Gerçek Restoran Masasında Çekilmiş Tipik Kağıt Menü",
    description: "Espresso, Americano, Cheesecake ve Kulüp Sandviç gibi ürünlerin yer aldığı standart bir kafe menüsünün tek bir cep telefonu karesiyle taranması.",
    bulletPoints: [
      "Kahveler, Soğuk İçecekler, Tatlılar ve Atıştırmalıklar olmak üzere 4 ana kategori",
      "13 adet lezzetin fiyat ve açıklamalarıyla eksiksiz tespiti",
      "El yazısı veya nostaljik daktilo fontlarını tanıma kabiliyeti",
    ],
  },
  {
    id: "analyzing",
    title: "Canlı Yapay Zeka Taraması",
    badge: "2. Aşama",
    icon: Cpu,
    caption: "Kategori Keşfi, Porsiyon Çıkarma ve Kalori/Alerjen Analizi",
    description: "Yapay zeka görseli tarar; başlıkları kategoriye, satırları ürün adı ve fiyatına dönüştürür. Ürün içeriğine göre tahmini kalori, hazırlık süresi ve vegan/vejetaryen etiketlerini otomatik atar.",
    bulletPoints: [
      "Optik Karakter Tanıma (OCR) ve Doğal Dil İşleme (NLP) sentezi",
      "Otomatik kalori ve hazırlama süresi tahmini",
      "Gluten, süt ve kuruyemiş gibi alerjenlerin açıklamadan tespiti",
    ],
  },
  {
    id: "results",
    title: "13 Ürün Çıkarıldı & Düzenleme",
    badge: "3. Aşama",
    icon: CheckCircle2,
    caption: "Kontrol Edilebilir, Düzenlenebilir ve Tek Tıkla POS'a Aktarılabilir Tablo",
    description: "Çıkarılan tüm ürünler kartlar halinde önünüze gelir. Dilediğiniz fiyatı veya açıklamayı anında güncelleyebilir, 'Onayla ve Menüye Ekle' butonuyla tüm sistemi 1 saniyede yayına alabilirsiniz.",
    bulletPoints: [
      "Tek tek veri girmeye gerek kalmadan 13 ürünün anında dijitalleşmesi",
      "Masaüstü POS, Garson El Terminali ve QR Menüye anlık senkronizasyon",
      "Ekstra sos veya porsiyon seçenek grupları ekleyebilme",
    ],
  },
  {
    id: "text",
    title: "Metin Yapıştırarak İçe Aktarma",
    badge: "Alternatif",
    icon: FileText,
    caption: "WhatsApp, Word veya Not Defterinden Kopyala-Yapıştır Desteği",
    description: "Elinizde dijital liste varsa, kopyalayıp kutucuğa yapıştırmanız yeterlidir. Yapay zeka karmaşık ve biçimlendirilmemiş metinleri dahi kusursuz menü kartlarına dönüştürür.",
    bulletPoints: [
      "Düzensiz metinleri otomatik formatlama",
      "Fiyat ve ürün ayrımlarını zekice yakalama",
      "WhatsApp veya Excel listelerini saniyeler içinde menü yapma",
    ],
  },
];

export function MenuImportMockupTabs() {
  const [activeStageId, setActiveStageId] = useState<MenuImportStage>("upload");
  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <div className="space-y-12">
      {/* 1. ANIMATED FLOWING LINE PIPELINE: From Physical photo to Digital POS */}
      <MenuImportFlowAnimation />

      {/* 2. BROWSER SIMULATOR WITH TABS & STAGES */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
            <Sparkles className="size-3.5" />
            <span>İnteraktif Stüdyo Deneyimi</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Menü Yüklemenin En Kolay ve Hızlı Hali
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Aşağıdaki simülatörde aşamaları deneyimleyebilir veya orijinal panel ekran görüntülerini inceleyebilirsiniz.
          </p>
        </div>

        {/* Stage Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md scale-102"
                    : "bg-card border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                <Icon className="size-4" />
                <span>{stage.title}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {stage.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Simulator Box */}
        <MenuImportSimulator
          key={activeStage.id}
          initialStage={activeStage.id}
          showOriginalToggle={true}
          onStageChange={(newStage) => setActiveStageId(newStage)}
        />

        {/* Stage Operational Explanations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs">
            <div className="flex items-center gap-2 text-primary font-bold text-xs mb-1">
              <Camera className="size-3.5" />
              <span>1. Sıfır Veri Girişi</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Personelinizin saatlerce bilgisayar başında oturup ürün, fiyat ve açıklama yazmasına gerek kalmaz.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs mb-1">
              <Cpu className="size-3.5" />
              <span>2. Akıllı Zenginleştirme</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Yapay zeka sadece okumaz; kalori, vejetaryen uygunluğu ve hazırlık süresi gibi ek bilgileri otomatik tahmin eder.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border/70 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs mb-1">
              <CheckCircle2 className="size-3.5" />
              <span>3. Çift Kontrol &amp; Tam Güven</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sistem menüyü yayına almadan önce size onaylatır; dilediğiniz fiyatı tek tıkla değiştirebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
