"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  Mic, 
  CheckCircle2, 
  TrendingUp, 
  Lock, 
  Zap, 
  Layers, 
  FileText,
  UserCheck,
  Check
} from "lucide-react";
import { AdminAiPhoneSimulator, AdminAiStage } from "@/components/oxonom/admin-ai-phone-simulator";

interface AdminAiTabOption {
  id: AdminAiStage;
  title: string;
  badge: string;
  role: "Yönetici" | "Garson" | "Tümü";
  icon: React.ElementType;
  caption: string;
  description: string;
  bulletPoints: string[];
  techHighlight: string;
}

const adminAiStages: AdminAiTabOption[] = [
  {
    id: "welcome",
    title: "Akıllı Karşılama & Rol Tanıma",
    badge: "1. Aşama",
    role: "Tümü",
    icon: MessageSquare,
    caption: "Oxonom POS Asistan — Aktif Kullanıcı ve Yetki Seviyesine Özel Açılış",
    description: "Sisteme giriş yapan kullanıcının rolünü (Yönetici veya Garson) anında algılar. Kullanıcının yetki sınırlarına göre özel karşılama mesajı ve hazır aksiyon butonları sunar.",
    bulletPoints: [
      "Yönetici (MANAGER) ve Garson (WAITER) bazlı dinamik rol algılama",
      "Kullanıcıya özel hazır soru butonları (Ciro, Masa ekleme, Mutfak durumu)",
      "Doğal dilde Türkçe komut ve soru yöneltme altyapısı",
    ],
    techHighlight: "Context-Aware Agent: Oturum açan kullanıcının kimlik ve yetki token'ı üzerinden çalışır.",
  },
  {
    id: "ciro",
    title: "Anlık Ciro & Kasa İstihbaratı",
    badge: "2. Aşama",
    role: "Yönetici",
    icon: TrendingUp,
    caption: "Yöneticiye Özel Anlık Ciro, Masalardaki Açık Hesap ve Finans Raporları",
    description: "Yönetici 'Bugünkü toplam ciro ne kadar?' diye sorduğunda; tamamlanan tahsilatları ve masalarda açık bekleyen hesap tutarlarını (ör. ₺2.815,00) anında hesaplar ve Z Raporu sayfasına doğrudan buton oluşturur.",
    bulletPoints: [
      "Anlık açık masa hesapları ve günlük tahsilat toplamı",
      "Z Raporu ve Finansal Raporlar sayfasına tek tıkla derin bağlantı (Deep Link)",
      "Kasa durumunu garsona sormadan 1 saniyede öğrenme",
    ],
    techHighlight: "Gerçek Zamanlı Veritabanı Agregasyonu: Masalardaki aktif adisyonları anlık toplar.",
  },
  {
    id: "security",
    title: "Rol Tabanlı Güvenlik (RBAC)",
    badge: "3. Aşama",
    role: "Garson",
    icon: ShieldCheck,
    caption: "Garson Yetki Kalkanı — Finansal ve Sistem Ayarlarına Yetkisiz Erişimi Engelleme",
    description: "Garson yetkisine sahip bir personel ciro, kasa veya sistem ayarlarıyla ilgili bir komut verdiğinde yapay zeka işlemi bloke eder; nazik bir güvenlik uyarısıyla personeli yetkili olduğu Masalar & Adisyon alanına yönlendirir.",
    bulletPoints: [
      "Rol Tabanlı Erişim Denetimi (RBAC) güvenlik bariyeri",
      "Ciro, kasa ve personel verilerinin garsonlardan gizlenmesi",
      "Garsonu doğrudan yetkili olduğu 'Masalar & Canlı Adisyon' ekranına yönlendirme",
    ],
    techHighlight: "Zero-Trust POS Security: Yetkisiz sorgularda veri tabanına sorgu atılmadan güvenlik yanıtı üretilir.",
  },
  {
    id: "voice",
    title: "Sesli Sipariş Alma (Speech-to-Text)",
    badge: "4. Aşama",
    role: "Garson",
    icon: Mic,
    caption: "Yapay Zeka ile Konuşarak Sipariş Alma — Salonda Menü Aramaya Son",
    description: "Garson el terminalinde mikrofona basarak 'Masa 5'e 4 çay ekle' der. Sistem ses dalgalarını anlık analiz eder, restoran uğultusunu filtreler ve cümleyi yapısal sipariş verisine dönüştürür.",
    bulletPoints: [
      "Restoran ortamlarına özel gürültü filtrelemeli ses motoru",
      "Masa numarası, ürün adı ve adet bilgisini otomatik ayrıştırma",
      "Salonda masalar arasında dolaşırken el değmeden saniyeler içinde sipariş girişi",
    ],
    techHighlight: "Whisper / Neural STT: Türkçe restoran terminolojisine göre eğitilmiş doğal dil işleme.",
  },
  {
    id: "confirm",
    title: "Görsel Onay Kartı & Çift Kontrol",
    badge: "5. Aşama",
    role: "Garson",
    icon: CheckCircle2,
    caption: "Hatasız Servis İçin İnteraktif Onay Kartı & Mutfağa (KDS) İletim",
    description: "Yapay zeka siparişi doğrudan yazmak yerine garsonun önüne 'Ürün: Çay, Miktar: 4 Adet, Tutar: ₺160' şeklinde görsel onay kartı çıkarır. Garson tek dokunuşla onayladığında sipariş mutfak ekranına ve masaya işlenir.",
    bulletPoints: [
      "Görsel onay kartı ile yanlış masaya sipariş gitmesini %100 önleme",
      "Tek dokunuşla '✓ Onayla ve Masaya Ekle' işlemi",
      "Mutfak ekranına (KDS) ve masa adisyonuna anlık senkronizasyon",
    ],
    techHighlight: "Human-in-the-Loop Validation: Kritik sipariş adımlarında sıfır hata prensibi.",
  },
];

export function AdminAiMockupTabs() {
  const [activeStageId, setActiveStageId] = useState<AdminAiStage>("welcome");
  const activeStage = adminAiStages.find((s) => s.id === activeStageId) || adminAiStages[0];

  return (
    <div className="space-y-8">
      {/* 5 Stage Tab Switcher Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        {adminAiStages.map((stage) => {
          const Icon = stage.icon;
          const isActive = stage.id === activeStage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md scale-102"
                  : "bg-card border border-border/70 text-muted-foreground hover:text-foreground hover:border-indigo-500/40"
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

      {/* Main Display Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card rounded-3xl border border-border/70 p-6 sm:p-10 shadow-lg">
        {/* Left: Realistic iPhone Simulator with iOS Status Bar & Safe Areas */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <AdminAiPhoneSimulator
            key={activeStage.id}
            initialStage={activeStage.id}
            showOriginalToggle={true}
            onStageChange={(newStage) => setActiveStageId(newStage)}
          />

          <div className="mt-2 text-center">
            <p className="text-[11px] text-muted-foreground">{activeStage.caption}</p>
          </div>
        </div>

        {/* Right: Architectural Details & Capabilities */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                <span>{activeStage.badge}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-muted text-muted-foreground">
                <span>Rol: {activeStage.role}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              {activeStage.title}
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
              {activeStage.description}
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Öne Çıkan Yetkinlikler:
            </div>
            {activeStage.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="p-1 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0">
                  <CheckCircle2 className="size-4" />
                </div>
                <span className="text-foreground/90 font-medium leading-snug">{point}</span>
              </div>
            ))}
          </div>

          {/* Tech Highlight Card */}
          <div className="p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-800/60 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-indigo-600 text-white shrink-0 mt-0.5">
              <Zap className="size-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-indigo-900 dark:text-indigo-300">
                Akıllı Asistan Altyapısı
              </div>
              <div className="text-xs text-indigo-900/80 dark:text-indigo-300/80 mt-0.5 leading-relaxed">
                {activeStage.techHighlight}
              </div>
            </div>
          </div>

          {/* Stage Switcher Thumbnails */}
          <div className="pt-4 border-t border-border/50">
            <div className="text-xs font-semibold text-muted-foreground mb-3">
              Diğer Ekran Senaryoları:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {adminAiStages
                .filter((s) => s.id !== activeStage.id)
                .slice(0, 4)
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveStageId(item.id)}
                    className="p-2 rounded-xl border border-border/70 hover:border-indigo-500/50 hover:bg-muted/40 transition-all text-left group"
                  >
                    <div className="text-[10px] font-bold text-muted-foreground group-hover:text-indigo-600">
                      {item.badge}
                    </div>
                    <div className="text-xs font-semibold text-foreground truncate mt-0.5">
                      {item.title}
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
