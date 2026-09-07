"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  Layers,
  ChefHat,
  Receipt,
  Users,
  Tv,
  FileText,
  Share2,
  Camera,
  Cpu,
  Smartphone,
  Utensils,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  X,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { addDemoRequest } from "@/lib/admin-store";

export interface PricingModuleItem {
  id: string;
  name: string;
  slug?: string;
  category: "ai" | "pos" | "kitchen" | "marketing";
  categoryTitle: string;
  badge?: string;
  shortDesc: string;
  capabilities: string[];
  icon: React.ElementType;
}

export const PRICING_MODULES: PricingModuleItem[] = [
  // 1. Yapay Zeka
  {
    id: "qr-ai",
    name: "QR Menüdeki Yapay Zeka",
    slug: "qr-menudeki-yapay-zeka",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "AI Garson",
    shortDesc: "Misafirlerin damak tadına, bütçesine ve alerjenlerine göre kişisel yemek ve içecek tavsiyeleri sunan akıllı dijital garson.",
    capabilities: ["Kişiye özel yemek tavsiyesi", "Alerjen ve glüten filtreleme", "İçecek & tatlı eşleştirmesi"],
    icon: Sparkles,
  },
  {
    id: "admin-ai",
    name: "Admin Panelindeki Yapay Zeka",
    slug: "admin-panelindeki-yapay-zeka",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "Yönetici Asistanı",
    shortDesc: "Yöneticiler için anlık ciro tahmini, garsonlar için sesli sipariş onay kartları sunan merkezi yapay zeka operasyon merkezi.",
    capabilities: ["Sesli Türkçe sipariş girişi", "Anlık ciro ve masa doluluk analizi", "Görsel onay kartı koruması"],
    icon: Cpu,
  },
  {
    id: "menu-import",
    name: "Yapay Zeka ile Menü İçe Aktar",
    slug: "yapay-zeka-ile-menu-ice-aktar",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "OCR & Vision AI",
    shortDesc: "Fiziksel menü fotoğraflarını, el yazılarını veya PDF listeleri 30 saniyede otomatik okuyup dijital menüye dönüştürür.",
    capabilities: ["Fotoğraftan otomatik ürün çıkarma", "Fiyat ve kategori eşleme", "Toplu menü aktarımı"],
    icon: Camera,
  },
  {
    id: "food-photo-enhance",
    name: "Yapay Zeka Görseli Profesyonelleştir",
    slug: "yapay-zeka-gorseli-profesyonellestir",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "Stüdyo Kalitesi",
    shortDesc: "Cep telefonuyla çekilmiş dağınık masa ve yemek fotoğraflarını stüdyo ışığı ve 4K netliğinde profesyonel tabağa çevirir.",
    capabilities: ["Arka plan temizleme & tabağı öne çıkarma", "Stüdyo ışığı & renk dengesi", "4K ultra netlik yükseltme"],
    icon: Camera,
  },
  {
    id: "ai-image-gen",
    name: "Yapay Zeka ile Görsel Oluştur",
    slug: "yapay-zeka-gorsel-olustur",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "Fotogerçekçi Üretim",
    shortDesc: "Menünüzdeki fotoğrafsız ürünler için sadece yemek ismini ve tarifini yazarak dakikalar içinde iştah kabartan stüdyo kareleri üretin.",
    capabilities: ["Metinden sıfırdan yemek görseli", "Farklı sunum açıları", "Marka stiline özel arka plan"],
    icon: Sparkles,
  },
  {
    id: "nutrition-copywriter",
    name: "Besin Değeri & Açıklama Yazarı",
    slug: "besin-degeri-ve-aciklama-yazari",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "Akıllı Editör",
    shortDesc: "Yemek tariflerinden otomatik kalori, protein, karbonhidrat hesaplar ve menünüze iştah açıcı ürün hikayeleri yazar.",
    capabilities: ["Otomatik kalori ve makro hesaplama", "İştah açıcı gastronomi metinleri", "Alerjen etiketleme"],
    icon: FileText,
  },

  // 2. Restoran Satış & Masa
  {
    id: "pos-terminal",
    name: "Bulut POS & Satış Terminali",
    slug: "pos",
    category: "pos",
    categoryTitle: "Restoran Satış & Operasyon",
    badge: "Çekirdek Sistem",
    shortDesc: "Dokunmatik ekranlarda yıldırım hızında adisyon açma, parçalı ödeme alma ve yazarkasa entegrasyonu.",
    capabilities: ["Tek ekranda nakit/kart/yemek çeki", "Çevrimdışı (offline) çalışma güvencesi", "Yazarkasa & adisyon yazıcı desteği"],
    icon: Smartphone,
  },
  {
    id: "table-management",
    name: "Görsel Masa & Adisyon Yönetimi",
    slug: "masa-siparis",
    category: "pos",
    categoryTitle: "Restoran Satış & Operasyon",
    badge: "Salon & Bahçe",
    shortDesc: "Salon, bahçe ve teras kat planlarınızı görselleştirin; masaları birleştirin, taşıyın ve adisyonları kişi başı bölün.",
    capabilities: ["Kişi başı veya ürün bazlı hesap ayırma", "Süreye göre masa renk değişimi", "Masa birleştirme ve transfer"],
    icon: Utensils,
  },
  {
    id: "z-report",
    name: "7 Bölümlü Z Raporu Analitiği",
    slug: "z-raporu",
    category: "pos",
    categoryTitle: "Restoran Satış & Operasyon",
    badge: "Mali Denetim",
    shortDesc: "Kasa açılışından kapanışına nakit mutabakatı, KDV matrahları, tüm iptal ve ikram kaçaklarını denetleyen mali rapor.",
    capabilities: ["Kasa nakit sayım farkı denetimi", "KDV oranları kırılımı", "Yetkili onaylı iptal (VOID) logları"],
    icon: Receipt,
  },
  {
    id: "staff-mgmt",
    name: "Personel & Yetki Yönetimi",
    slug: "personel",
    category: "pos",
    categoryTitle: "Restoran Satış & Operasyon",
    badge: "PIN Güvenliği",
    shortDesc: "Yönetici, kasiyer, garson ve mutfak personeli rolleri için ekran bazlı hassas yetki matrisi ve satış performansı.",
    capabilities: ["Hızlı PIN ve mobil giriş", "Garson satış performansı & ciro primi", "İptal ve indirim kısıtlamaları"],
    icon: ShieldCheck,
  },

  // 3. Mutfak & Müşteri
  {
    id: "kds-kitchen",
    name: "Mutfak Ekranı (KDS)",
    slug: "kds",
    category: "kitchen",
    categoryTitle: "Mutfak & Müşteri Deneyimi",
    badge: "Gecikmesiz Mutfak",
    shortDesc: "Adisyon kağıtlarını ve sipariş karışıklıklarını tarihe gömen, renk kodlu gecikme alarmlı mutfak yönetim paneli.",
    capabilities: ["0-10-20 dk renk kodlu süre takibi", "İstasyon bazlı (ızgara/soğuk/bar) yönlendirme", "Sesli yeni bilet uyarıları"],
    icon: ChefHat,
  },
  {
    id: "qr-order",
    name: "Masadan QR Sipariş & Ödeme (Self-Order)",
    slug: "self-order",
    category: "kitchen",
    categoryTitle: "Mutfak & Müşteri Deneyimi",
    badge: "Uygulamasız",
    shortDesc: "Misafirlerin masadaki QR'ı okutarak garson beklemeden sipariş verebilmesini ve masadan ödeme yapabilmesini sağlar.",
    capabilities: ["Uygulama indirmeden anında açılış", "Doğrudan mutfak KDS ekranına düşüş", "Masadan garson & vale çağırma"],
    icon: Smartphone,
  },
  {
    id: "loyalty-crm",
    name: "Müşteri Sadakat & CRM",
    slug: "musteri-crm",
    category: "kitchen",
    categoryTitle: "Mutfak & Müşteri Deneyimi",
    badge: "Sadakat Kulübü",
    shortDesc: "Müdavimlerinizi tanıyan, puan/kupon kazandıran ve doğum günü indirimleriyle tekrar gelmelerini sağlayan CRM.",
    capabilities: ["Puan ve nakit indirim kuralları", "Ziyaret sıklığı ve sepet analizi", "Otomatik SMS/WhatsApp doğum günü tebriği"],
    icon: Users,
  },

  // 4. Pazarlama & Ekranlar
  {
    id: "digital-menu-board",
    name: "Dijital Menü Panosu (TV Ekranı)",
    slug: "dijital-menu-panosu",
    category: "marketing",
    categoryTitle: "Ekran & Pazarlama Çözümleri",
    badge: "Çok Yakında",
    shortDesc: "Restoran ve kafelerdeki TV ekranlarında yayınlanan, otomatik güncellenen animasyonlu dinamik menü ve kampanya panosu.",
    capabilities: ["Otomatik güncellenen fiyat ve menü", "Günün menüsü & kampanya video geçişleri", "Yatay/dikey TV şablonları"],
    icon: Tv,
  },
  {
    id: "brochure-wizard",
    name: "Baskıya Hazır Broşür Sihirbazı",
    slug: "brosur-sihirbazi",
    category: "marketing",
    categoryTitle: "Ekran & Pazarlama Çözümleri",
    badge: "Çok Yakında",
    shortDesc: "Menünüzdeki ürünleri doğrudan kullanarak matbaaya ve baskıya hazır katlamalı el broşürleri ve flyer tasarlama aracı.",
    capabilities: ["CMYK 300 DPI baskı hazır PDF", "İki kırım ve akordeon katlama şablonları", "Tek tıkla menü ürünlerini aktarma"],
    icon: FileText,
  },
  {
    id: "social-media-wizard",
    name: "Sosyal Medya İçerik Sihirbazı",
    slug: "sosyal-medya-sihirbazi",
    category: "marketing",
    categoryTitle: "Ekran & Pazarlama Çözümleri",
    badge: "Çok Yakında",
    shortDesc: "Instagram Post ve Story formatında, işletmenizin kurumsal kimliğine uygun iştah açıcı promosyon görselleri tasarlayın.",
    capabilities: ["Instagram 1:1 Post ve 9:16 Story boyutları", "Haftalık promosyon ve kampanya tasarımları", "Tek tıkla menüden ürün seçimi"],
    icon: Share2,
  },
];

export function PricingModulesSelector() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "pos-terminal",
    "table-management",
    "kds-kitchen",
    "qr-order",
  ]);

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state for custom offer
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    city: "İstanbul",
    branchCount: "1",
    notes: "",
  });

  const toggleModule = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedIds(PRICING_MODULES.map((m) => m.id));
  };

  const clearAll = () => {
    setSelectedIds([]);
  };

  const filteredModules = useMemo(() => {
    if (activeCategory === "all") return PRICING_MODULES;
    return PRICING_MODULES.filter((m) => m.category === activeCategory);
  }, [activeCategory]);

  const selectedModulesList = useMemo(() => {
    return PRICING_MODULES.filter((m) => selectedIds.includes(m.id));
  }, [selectedIds]);

  const handleSubmitOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.businessName) {
      alert("Lütfen zorunlu alanları doldurunuz.");
      return;
    }

    const selectedNames = selectedModulesList.map((m) => m.name).join(", ");

    addDemoRequest({
      fullName: formData.fullName,
      businessName: formData.businessName,
      phone: formData.phone,
      email: formData.email,
      businessType: "Özel Modül Paketi",
      branchCount: formData.branchCount,
      city: formData.city,
      message: `Seçilen Modüller (${selectedIds.length} Adet): ${selectedNames}. Müşteri Notu: ${formData.notes || "Yok"}`,
      status: "yeni",
      priority: selectedIds.length > 5 ? "yuksek" : "orta",
    });

    setSubmitted(true);
  };

  return (
    <section className="py-20 border-t border-border/50 bg-card/15 relative" id="moduller-secici">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-10 text-left">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold">
            <Layers className="size-3.5" />
            <span>Kendi Özel Paketinizi Oluşturun</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            İhtiyacınıza Göre Modül Seçin, Teklif Alın
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Kullanmadığınız özelliklere para ödemeyin. Aşağıdaki listeden restoranınız için gerekli olan modülleri işaretleyin, işletmenize özel avantajlı fiyat teklifini dakikalar içinde hazırlayalım.
          </p>
        </div>

        {/* Category Tabs & Quick Select All / Clear */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Tüm Modüller ({PRICING_MODULES.length})
            </button>
            <button
              onClick={() => setActiveCategory("ai")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === "ai"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Yapay Zeka (6)
            </button>
            <button
              onClick={() => setActiveCategory("pos")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === "pos"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              POS & Masa (4)
            </button>
            <button
              onClick={() => setActiveCategory("kitchen")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === "kitchen"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Mutfak & Sadakat (3)
            </button>
            <button
              onClick={() => setActiveCategory("marketing")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === "marketing"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Ekran & Pazarlama (3)
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs self-end sm:self-auto">
            <button
              onClick={selectAll}
              className="text-primary hover:underline font-semibold px-2 py-1"
            >
              Tümünü Seç
            </button>
            <span className="text-border">•</span>
            <button
              onClick={clearAll}
              className="text-muted-foreground hover:text-foreground font-semibold px-2 py-1"
            >
              Temizle
            </button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModules.map((mod) => {
            const isSelected = selectedIds.includes(mod.id);
            const Icon = mod.icon;

            return (
              <div
                key={mod.id}
                onClick={() => toggleModule(mod.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between select-none relative group ${
                  isSelected
                    ? "border-primary bg-primary/5 shadow-md shadow-primary/5 ring-2 ring-primary/30"
                    : "border-border/70 bg-card hover:border-primary/40 hover:bg-card/90"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`size-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "bg-muted text-muted-foreground group-hover:text-primary"
                        }`}
                      >
                        <Icon className="size-4.5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                          {mod.name}
                        </h3>
                        <span className="text-[10px] text-muted-foreground font-semibold">
                          {mod.categoryTitle}
                        </span>
                      </div>
                    </div>

                    {/* Checkbox button */}
                    <div
                      className={`size-6 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? "bg-primary border-primary text-primary-foreground scale-105"
                          : "border-muted-foreground/40 bg-background group-hover:border-primary/60"
                      }`}
                    >
                      {isSelected && <Check className="size-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {mod.shortDesc}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {mod.capabilities.map((c, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <Check className="size-3 text-primary shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Tag */}
                <div className="pt-3 mt-3 border-t border-border/50 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-primary">Teklife Dahil Edilebilir</span>
                  {mod.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-muted text-muted-foreground">
                      {mod.badge}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Modules Summary & Call to Action Bar */}
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-card to-primary/5 p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-primary text-primary-foreground">
                {selectedIds.length} Modül Seçildi
              </span>
              <span className="text-xs text-muted-foreground">
                (İhtiyacınıza göre dilediğiniz kadar modül ekleyip çıkarabilirsiniz)
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {selectedModulesList.map((m) => (
                <span
                  key={m.id}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                >
                  <span>{m.name}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleModule(m.id);
                    }}
                    className="hover:text-rose-500 transition-colors ml-0.5"
                  >
                    <X className="size-3" />
                  </button>
                </span>
              ))}
              {selectedIds.length === 0 && (
                <span className="text-xs text-muted-foreground italic">
                  Henüz modül seçilmedi. İlgilendiğiniz modüllere tıklayarak paketinizi oluşturun.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <Button
              size="lg"
              disabled={selectedIds.length === 0}
              onClick={() => {
                setSubmitted(false);
                setIsModalOpen(true);
              }}
              className="font-extrabold text-sm h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-2xl transition-all"
            >
              <span>Seçtiğim Modüller İçin Teklif Alınız</span>
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Offer Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card w-full max-w-lg rounded-3xl border border-border shadow-2xl p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto text-left">
            <div className="flex items-start justify-between pb-3 border-b border-border">
              <div>
                <h3 className="text-xl font-bold text-foreground">Özel Modül Teklifi İsteyin</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Seçtiğiniz <strong>{selectedIds.length} modül</strong> için restoranınıza özel fiyatlandırma hazırlayacağız.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:bg-muted"
              >
                <X className="size-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="size-14 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="size-8" />
                </div>
                <h4 className="text-lg font-bold text-foreground">Teklif Talebiniz Alındı!</h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Sayın <strong>{formData.fullName}</strong>, <strong>{formData.businessName}</strong> için seçtiğiniz {selectedIds.length} modüle özel fiyat çalışması yapılarak <strong>{formData.phone}</strong> üzerinden sizinle irtibata geçilecektir.
                </p>
                <Button size="sm" onClick={() => setIsModalOpen(false)} className="mt-2">
                  Tamam
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmitOffer} className="space-y-4 text-xs">
                {/* Selected modules preview pills */}
                <div className="p-3 rounded-xl bg-muted/40 border border-border/60 space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Seçilen Modüller ({selectedIds.length}):
                  </div>
                  <div className="flex flex-wrap gap-1 text-[11px]">
                    {selectedModulesList.map((m) => (
                      <span key={m.id} className="px-2 py-0.5 rounded bg-card border font-semibold text-foreground">
                        {m.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ad Soyad"
                    className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold text-foreground">İşletme / Restoran Adı *</label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="Örn: Mola Bistro"
                      className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-foreground">Telefon Numarası *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold text-foreground">E-posta</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="info@isletme.com"
                      className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-foreground">Şehir</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="İstanbul (Kadıköy)"
                      className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Ek İstekler / Not</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Masa sayınız, şube durumunuz veya özel talepleriniz..."
                    className="w-full p-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2 border-t border-border">
                  <Button type="button" variant="outline" size="sm" onClick={() => setIsModalOpen(false)}>
                    Vazgeç
                  </Button>
                  <Button type="submit" size="sm" className="bg-primary font-bold">
                    <Send className="size-3.5 mr-1.5" />
                    <span>Özel Teklif İste</span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
