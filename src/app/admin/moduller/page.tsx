"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Boxes, Sparkles, ExternalLink, Check, Clock, AlertTriangle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModuleItem {
  id: string;
  name: string;
  slug: string;
  category: "Yapay Zeka" | "Restoran Operasyon" | "Pazarlama & Tasarım";
  status: "Yayında" | "Çok Yakında" | "Beta";
  description: string;
}

const MODULES_LIST: ModuleItem[] = [
  {
    id: "m-1",
    name: "QR Menüdeki Yapay Zeka",
    slug: "qr-menudeki-yapay-zeka",
    category: "Yapay Zeka",
    status: "Yayında",
    description: "Müşterinin damak tadına, alerjenlerine ve bütçesine göre kişiselleştirilmiş ürün önerileri sunan AI garson.",
  },
  {
    id: "m-2",
    name: "Yönetim Panelindeki Yapay Zeka",
    slug: "admin-panelindeki-yapay-zeka",
    category: "Yapay Zeka",
    status: "Yayında",
    description: "Gün sonu ciro tahmini, otomatik sipariş teyidi ve rol bazlı güvenlik analizleri sunan merkezi asistan.",
  },
  {
    id: "m-3",
    name: "Yapay Zeka ile Menü İçe Aktar",
    slug: "yapay-zeka-ile-menu-ice-aktar",
    category: "Yapay Zeka",
    status: "Yayında",
    description: "Fiziksel menü fotoğraflarını ve el yazılarını OCR + Vision AI ile 30 saniyede dijital menüye dönüştürür.",
  },
  {
    id: "m-4",
    name: "Besin Değeri & Açıklama Yazarı",
    slug: "besin-degeri-ve-aciklama-yazari",
    category: "Yapay Zeka",
    status: "Yayında",
    description: "Yemek tariflerinden otomatik kalori, makro besin ve iştah açıcı ürün açıklamaları üreten yapay zeka.",
  },
  {
    id: "m-5",
    name: "Yapay Zeka Görseli Profesyonelleştir",
    slug: "yapay-zeka-gorseli-profesyonellestir",
    category: "Yapay Zeka",
    status: "Yayında",
    description: "Cep telefonuyla çekilmiş dağınık masa ve yemek fotoğraflarını stüdyo ışığı ve 4K netliğinde profesyonel tabağa çevirir.",
  },
  {
    id: "m-6",
    name: "Yapay Zeka Görsel Oluştur",
    slug: "yapay-zeka-gorsel-olustur",
    category: "Yapay Zeka",
    status: "Yayında",
    description: "Menünüzdeki fotoğralsız ürünler için metin tarifinden fotogerçekçi stüdyo sunum kareleri oluşturur.",
  },
  {
    id: "m-7",
    name: "Dijital Menü Panosu (TV Ekranı)",
    slug: "dijital-menu-panosu",
    category: "Pazarlama & Tasarım",
    status: "Çok Yakında",
    description: "İşletmedeki TV ekranlarında otomatik güncellenen dinamik menü, kampanya ve video reklam şablonları.",
  },
  {
    id: "m-8",
    name: "Broşür Sihirbazı",
    slug: "brosur-sihirbazi",
    category: "Pazarlama & Tasarım",
    status: "Çok Yakında",
    description: "Baskıya hazır katlamalı broşür, el ilanı ve QR kupon tasarımlarını dakikalar içinde hazırlama aracı.",
  },
  {
    id: "m-9",
    name: "Sosyal Medya Sihirbazı",
    slug: "sosyal-medya-sihirbazi",
    category: "Pazarlama & Tasarım",
    status: "Çok Yakında",
    description: "Instagram Post & Story boyutlarında marka profiline uygun promosyon ve menü içerikleri üretici.",
  },
  {
    id: "m-10",
    name: "Mutfak Ekranı (KDS)",
    slug: "",
    category: "Restoran Operasyon",
    status: "Yayında",
    description: "Sipariş gecikmelerini ve kağıt israfını önleyen, renk kodlu gecikme alarmlı mutfak yönetim paneli.",
  },
  {
    id: "m-11",
    name: "7 Bölümlü Z Raporu Analitiği",
    slug: "",
    category: "Restoran Operasyon",
    status: "Yayında",
    description: "Ödeme dağılımı, garson performansı ve iptal/ikram kaçaklarını denetleyen mali z raporu.",
  },
  {
    id: "m-12",
    name: "Müşteri Sadakat & CRM",
    slug: "sadakat-ve-crm-yonetimi",
    category: "Restoran Operasyon",
    status: "Yayında",
    description: "Müşteri harcama alışkanlıkları, puan/kupon kazanımı ve VIP müşteri segmentasyon modülü.",
  },
];

export default function AdminModulesPage() {
  const [modules, setModules] = useState<ModuleItem[]>(MODULES_LIST);

  const toggleStatus = (id: string) => {
    setModules((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const nextStatus = m.status === "Yayında" ? "Çok Yakında" : m.status === "Çok Yakında" ? "Beta" : "Yayında";
          return { ...m, status: nextStatus };
        }
        return m;
      })
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Modül & Özellik Yönetimi
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Oxonom POS platformunda yer alan modüllerin yayın durumu, katalog etiketleri ve erişim ayarları.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild className="text-xs h-9">
            <Link href="/moduller" target="_blank">
              <ExternalLink className="size-3.5 mr-1.5" />
              <span>Canlı Modül Kataloğu</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m) => (
          <div
            key={m.id}
            className="p-5 rounded-2xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded bg-muted">
                  {m.category}
                </span>
                <button
                  onClick={() => toggleStatus(m.id)}
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border cursor-pointer hover:opacity-80 transition-opacity ${
                    m.status === "Yayında"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                      : m.status === "Çok Yakında"
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                      : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                  }`}
                  title="Durumu değiştirmek için tıklayın"
                >
                  {m.status}
                </button>
              </div>

              <h3 className="font-extrabold text-sm text-foreground">{m.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                {m.description}
              </p>
            </div>

            <div className="pt-2 border-t border-border/50 flex items-center justify-between text-xs">
              {m.slug ? (
                <Link
                  href={`/moduller/${m.slug}`}
                  target="_blank"
                  className="text-primary hover:underline font-semibold flex items-center gap-1 text-[11px]"
                >
                  <span>Önizlemeyi Gör</span>
                  <ExternalLink className="size-3" />
                </Link>
              ) : (
                <span className="text-[11px] text-muted-foreground italic">Çekirdek Sistem</span>
              )}

              <span className="text-[10px] text-muted-foreground font-mono">ID: {m.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
