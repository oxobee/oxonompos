"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Sparkles,
  FileUp,
  ImagePlus,
  Wand2,
  FileText,
  Gift,
  UserCheck,
  Check,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  Calculator,
  Search,
  SlidersHorizontal,
  X,
  Send,
  Eye,
  Crown,
  Layers,
  Smartphone,
  Info,
  Tv,
  Clock,
  Printer,
  Share2,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GridPattern } from "@/components/velora/grid-pattern";
import { SparklesText } from "@/components/velora/sparkles-text";
import { Button } from "@/components/ui/button";
import { QRAiPhoneSimulator } from "@/components/oxonom/qr-ai-phone-simulator";
import { AdminAiPhoneSimulator } from "@/components/oxonom/admin-ai-phone-simulator";
import { MenuImportSimulator } from "@/components/oxonom/menu-import-simulator";
import { NutritionCopywriterSimulator } from "@/components/oxonom/nutrition-copywriter-simulator";
import { LoyaltyCrmSimulator } from "@/components/oxonom/loyalty-crm-simulator";
import { QrCustomerProfileSimulator } from "@/components/oxonom/qr-customer-profile-simulator";
import { FoodPhotoEnhanceSimulator } from "@/components/oxonom/food-photo-enhance-simulator";
import { AiImageGenSimulator } from "@/components/oxonom/ai-image-gen-simulator";
import { DigitalMenuBoardSimulator } from "@/components/oxonom/digital-menu-board-simulator";
import { BrochureWizardSimulator } from "@/components/oxonom/brochure-wizard-simulator";
import { SocialMediaWizardSimulator } from "@/components/oxonom/social-media-wizard-simulator";

interface ModuleData {
  id: string;
  slug: string;
  category: "ai" | "loyalty" | "display";
  categoryTitle: string;
  name: string;
  description: string;
  price: number;
  priceFormatted: string;
  hasVideo?: boolean;
  badge?: string;
  isComingSoon?: boolean;
  icon: React.ElementType;
  interactiveType:
    | "chat"
    | "admin-ai"
    | "menu-ocr"
    | "photo-gen"
    | "photo-enhance"
    | "nutrition"
    | "birthday"
    | "loyalty-login"
    | "digital-board"
    | "brochure-wizard"
    | "social-wizard";
  details: {
    benefit: string;
    capabilities: string[];
    samplePrompt?: string;
  };
}

const modulesList: ModuleData[] = [
  // Kategori 1: Yapay Zeka & Akıllı Asistanlar (6 Modül)
  {
    id: "qr-ai",
    slug: "qr-menudeki-yapay-zeka",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    name: "QR Menüdeki Yapay Zeka",
    description:
      "QR menüde müşterilere yemek öneren, sipariş ve içerik sorularını anında yanıtlayan akıllı garson asistanı.",
    price: 499,
    priceFormatted: "499 ₺",
    hasVideo: true,
    icon: MessageSquare,
    interactiveType: "chat",
    details: {
      benefit: "Garson beklemeden misafirlerinize anında kişisel tavsiyeler ve alerjen yanıtları sunar.",
      capabilities: [
        "Glutensiz, vegan veya hafif yemek önerileri",
        "İçecek ve tatlı eşleştirme tavsiyeleri",
        "İçerik, pişme süresi ve porsiyon bilgisi",
      ],
      samplePrompt: "Akşama hafif, acısız ve glütensiz ne önerirsin?",
    },
  },
  {
    id: "admin-ai",
    slug: "admin-panelindeki-yapay-zeka",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    name: "Admin Panelindeki Yapay Zeka",
    description:
      "Yönetici ve çalışanlar için canlı ciro, masa doluluğu, adisyon ve operasyon takibini sesli/yazılı özetleyen yapay zeka.",
    price: 699,
    priceFormatted: "699 ₺",
    hasVideo: false,
    icon: Sparkles,
    interactiveType: "admin-ai",
    details: {
      benefit: "Karmaşık rapor sayfalarında kaybolmadan doğrudan soru sorarak işletmenizi yönetin.",
      capabilities: [
        "Sesli veya yazılı Türkçe doğal dil sorgulama",
        "Anlık kasa cirosu, açık masa ve mutfak yükü özeti",
        "Yüksek iptal veya adisyon anomali erken uyarıları",
      ],
      samplePrompt: "Bugün şu ana kadar toplam ciro ve en çok satan ürün nedir?",
    },
  },
  {
    id: "menu-import",
    slug: "yapay-zeka-ile-menu-ice-aktar",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    name: "Yapay Zeka ile Menü İçe Aktar",
    description:
      "Fiziksel menü fotoğraflarını, PDF ve listeleri saniyeler içinde yapay zeka ile okuyup dijital menüye dönüştürme.",
    price: 349,
    priceFormatted: "349 ₺",
    hasVideo: false,
    icon: FileUp,
    interactiveType: "menu-ocr",
    details: {
      benefit: "Günlerce süren menü yazma zahmetini sıfıra indirir; basılı menüyü anında sisteme geçirir.",
      capabilities: [
        "OCR ile fotoğraf, PDF veya Excel'den kategori ve fiyat ayrıştırma",
        "Ürün başlıkları ve açıklamalarını otomatik düzenleme",
        "KDV ve porsiyon seçeneklerini otomatik yapılandırma",
      ],
    },
  },
  {
    id: "image-gen",
    slug: "yapay-zeka-ile-gorsel-olustur",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    name: "Yapay Zeka ile Görsel Oluştur",
    description:
      "Menüdeki yemek ve içecekler için yüksek çözünürlüklü, stüdyo kalitesinde gerçekçi ürün fotoğrafları üretme.",
    price: 399,
    priceFormatted: "399 ₺",
    hasVideo: false,
    icon: ImagePlus,
    interactiveType: "photo-gen",
    details: {
      benefit: "Fotoğrafçılara binlerce lira ödemeden menünüzü iştah kabartan görsellerle donatın.",
      capabilities: [
        "Yemek tarifine uygun fotogerçekçi sunum görseli üretimi",
        "QR menü, web sitesi ve broşür formatlarında yüksek çözünürlük",
        "Farklı tabaklama, sos ve garnitür varyasyonları üretme",
      ],
    },
  },
  {
    id: "photo-pro",
    slug: "fotograflari-profesyonellestir",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    name: "Fotoğrafları Profesyonelleştir",
    description:
      "Telefonda çekilen amatör yemek fotoğraflarını yapay zeka ile profesyonel stüdyo ışığı ve netliğe kavuşturma.",
    price: 299,
    priceFormatted: "299 ₺",
    hasVideo: false,
    icon: Wand2,
    interactiveType: "photo-enhance",
    details: {
      benefit: "Mutfakta alelacele çekilen fotoğrafları tek tıkla stüdyo kalitesine yükseltin.",
      capabilities: [
        "Karmaşık arka planları tek tıkla stüdyo beyazına çevirme",
        "Yemek dokusunu ve ışık dengesini iştah açıcı hale getirme",
        "Gölge ve renk doygunluğunu yapay zeka ile dengeleme",
      ],
    },
  },
  {
    id: "nutrition-analysis",
    slug: "metin-yazari-ve-besin-analizi",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    name: "Metin Yazarı ve Besin Analizi",
    description:
      "Ürünler için iştah açıcı açıklamalar, kalori, alerjen ve besin değerlerini yapay zeka ile otomatik çıkarma.",
    price: 249,
    priceFormatted: "249 ₺",
    hasVideo: false,
    icon: FileText,
    interactiveType: "nutrition",
    details: {
      benefit: "Misafirlerinizin kalori ve alerjen endişelerini giderin, yasal etiketleme kurallarına tam uyun.",
      capabilities: [
        "Reçeteden otomatik kalori, protein, karbonhidrat ve yağ hesabı",
        "Gluten, laktoz, fındık gibi 14 temel alerjen uyarısı",
        "Menü için dikkat çekici gurme tanıtım metinleri",
      ],
    },
  },

  // Kategori 2: Müşteri Sadakati, Otomasyon & Büyüme (2 Modül)
  {
    id: "birthday-automation",
    slug: "dogum-gunu-otomasyonu",
    category: "loyalty",
    categoryTitle: "Müşteri Sadakati, Otomasyon & Büyüme",
    name: "Sadakat Modülü (CRM & İndirim)",
    description:
      "QR menüden kaydolan müşterilerinizi yakından takip edin; kim ne seviyor görün, doğum günlerinde otomatik indirim tanımlayın.",
    price: 199,
    priceFormatted: "199 ₺",
    hasVideo: false,
    icon: Gift,
    interactiveType: "birthday",
    details: {
      benefit: "Müşterilerinize kendilerini özel hissettirin, doğum günü kutlamalarını restoranınıza çekin.",
      capabilities: [
        "Kişiye özel isimli otomatik SMS ve WhatsApp tebrikleri",
        "Tek kullanımlık indirim veya ikram kupon kodu üretimi",
        "Doğum günü ziyaretlerinden elde edilen ciro takibi",
      ],
    },
  },
  {
    id: "loyalty-login",
    slug: "qr-menu-musteri-giris-kayit",
    category: "loyalty",
    categoryTitle: "Müşteri Sadakati, Otomasyon & Büyüme",
    name: "QR Menü Müşteri Giriş & Kayıt",
    description:
      "QR menüde müşterilerin cep telefonuyla tek tıkla giriş yapıp sipariş geçmişi ve sadakat puanı takip edebileceği profil alanı.",
    price: 249,
    priceFormatted: "249 ₺",
    hasVideo: false,
    icon: UserCheck,
    interactiveType: "loyalty-login",
    details: {
      benefit: "Misafirlerinizi anonim olmaktan çıkarıp sadık ve puan biriktiren müdavimlere dönüştürün.",
      capabilities: [
        "Şifresiz, SMS onay kodu veya hızlı telefon girişi",
        "Önceki siparişleri ve favori ürünleri tek tıkla tekrarlama",
        "Kazanılan para puan bakiyesi ve ödül hakları takibi",
      ],
    },
  },
  // Kategori 3: Pazarlama, Ekran & Baskı (3 Modül - Çok Yakında)
  {
    id: "digital-menu-board",
    slug: "dijital-menu-panosu",
    category: "display",
    categoryTitle: "Pazarlama & Ekran",
    name: "Dijital Menü Panosu",
    description:
      "İşletmelerde TV ekranlarında kampanya, menü ve reklam içeriklerini kolayca tasarlayıp yayınlayabileceğiniz, otomatik güncellenen animasyonlu TV menü panosu.",
    price: 399,
    priceFormatted: "399 ₺",
    hasVideo: false,
    badge: "Çok Yakında",
    isComingSoon: true,
    icon: Tv,
    interactiveType: "digital-board",
    details: {
      benefit: "Basılı panolara ve statik ekranlara son; yönetim panelinden tek tıkla otomatik güncellenen, iştah kabartan animasyonlu TV menü panoları oluşturun.",
      capabilities: [
        "Yönetim panelinden tek tıkla otomatik güncellenen animasyonlu TV ekranı tasarımı",
        "TV ekranlarında dinamik kampanya, menü, video ve reklam yayını",
        "Kasa POS ve menü fiyatları değiştikçe TV panosunda anında otomatik fiyat güncellemesi",
        "Günün saatine göre değişen menü akışları (Kahvaltı / Öğle / Akşam menüsü)",
      ],
    },
  },
  {
    id: "brosur-sihirbazi",
    slug: "brosur-sihirbazi",
    category: "display",
    categoryTitle: "Pazarlama & Baskı",
    name: "Broşür Sihirbazı",
    description:
      "İşletmeler için baskıya hazır el broşürleri tasarlama aracı. Menüden otomatik fiyat çekip, dağıtıma hazır PDF broşürleri kolayca oluşturun.",
    price: 299,
    priceFormatted: "299 ₺",
    hasVideo: false,
    badge: "Çok Yakında",
    isComingSoon: true,
    icon: Printer,
    interactiveType: "brochure-wizard",
    details: {
      benefit: "Grafiker aramaya son; menüdeki ürün ve fiyatlarla tek tıkla matbaa standartlarında (300 DPI CMYK) broşürler hazırlayın.",
      capabilities: [
        "Baskıya hazır (300 DPI, CMYK ve kesim paylı) PDF çıktısı",
        "A5 el ilanı, katlamalı menü ve kapı askısı şablonları",
        "Menü ve fiyat değişikliklerinin broşüre anında yansıması",
        "Masa QR kodu ve paket servis sipariş hattı otomatik yerleşimi",
      ],
    },
  },
  {
    id: "sosyal-medya-sihirbazi",
    slug: "sosyal-medya-sihirbazi",
    category: "display",
    categoryTitle: "Pazarlama & Sosyal Medya",
    name: "Sosyal Medya Sihirbazı",
    description:
      "Sosyal medya için profesyonel kalitede içerik oluşturun. Mevcut menüyü seçip stil belirleyin, marka profiline uygun görsel ve metinler hazır.",
    price: 349,
    priceFormatted: "349 ₺",
    hasVideo: false,
    badge: "Çok Yakında",
    isComingSoon: true,
    icon: Share2,
    interactiveType: "social-wizard",
    details: {
      benefit: "Sosyal medya ajansı maliyetini ortadan kaldırın; menünüzdeki ürünlerden saniyeler içinde etkileşim yaratan Instagram post ve hikayeleri üretin.",
      capabilities: [
        "Instagram Post (1:1) ve Story/Reels (9:16) formatlarında anında tasarım",
        "Yemek fotoğraflarını marka renkleri ve tipografisiyle birleştirme",
        "Yapay zeka ile ilgi çekici Türkçe açıklama metinleri ve hashtag önerileri",
        "Tek tıkla yüksek çözünürlüklü indirme ve sosyal medyada paylaşma",
      ],
    },
  },
];

export default function ModullerPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "ai" | "loyalty" | "display">("all");
  const [activePreviewModule, setActivePreviewModule] = useState<ModuleData | null>(modulesList[0]);
  const [searchQuery, setSearchQuery] = useState("");

  // Video Modal State
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Active QR AI Screen (welcome | recommendation | allergen)
  const [activeQrAiScreen, setActiveQrAiScreen] = useState<"welcome" | "recommendation" | "allergen">("welcome");

  // Chat simulation state for QR AI
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ role: "user" | "ai"; text: string }>>([
    { role: "ai", text: "Merhaba! Menümüz hakkında ne öğrenmek istersiniz? Bugün şefimizin özel trüflü mantarlı makarnasını veya hafif bir somon kasesini tavsiye edebilirim." },
  ]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setChatInput("");

    setTimeout(() => {
      let aiReply = "Harika bir tercih! Menümüzdeki 'Truffle Burger' veya yanında hafif Akdeniz Yeşillikleri salatamız tam aradığınız lezzet dengesini sunar.";
      if (userMsg.toLowerCase().includes("hafif") || userMsg.toLowerCase().includes("diyet")) {
        aiReply = "Hafif seçenekler olarak Kinoa Somon Bowl (380 kcal) ve Avokadolu Roka Salatası şefimizin bugün en çok önerdiği tabaklar arasında!";
      } else if (userMsg.toLowerCase().includes("tatlı") || userMsg.toLowerCase().includes("kahve")) {
        aiReply = "Sıcak San Sebastian Cheesecake yanına Single Origin Flat White kahvemiz mükemmel bir uyum sağlayacaktır.";
      }
      setChatMessages((prev) => [...prev, { role: "ai", text: aiReply }]);
    }, 600);
  };

  // Filtered lists
  const filteredModules = modulesList.filter((m) => {
    const matchCategory = selectedCategory === "all" ? true : m.category === selectedCategory;
    const matchSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const aiModules = filteredModules.filter((m) => m.category === "ai");
  const loyaltyModules = filteredModules.filter((m) => m.category === "loyalty");
  const displayModules = filteredModules.filter((m) => m.category === "display");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <SiteHeader />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 lg:py-20 border-b border-border/40">
          <GridPattern
            width={40}
            height={40}
            className="fill-transparent stroke-border/30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          />

          <div className="relative mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary mb-6 shadow-sm">
              <Sparkles className="size-4" />
              <span>Restoranınızı Geleceğe Taşıyan 11 Akıllı Modül</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-[1.15]">
              Yapay Zeka, Sadakat &amp;{" "}
              <SparklesText count={6} className="text-primary inline-block">
                Pazarlama Modülleri
              </SparklesText>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Müşterilerinize yemek öneren akıllı garson asistanından otomatik fotoğraf iyileştiriciye, TV dijital menü panosundan matbaa hazır broşür sihirbazına kadar tüm modülleri keşfedin.
            </p>

            {/* Filter & Search Controls */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center justify-center p-1 rounded-xl bg-card border border-border/70 shadow-sm w-full sm:w-auto">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Tümü ({modulesList.length})
                </button>
                <button
                  onClick={() => setSelectedCategory("ai")}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    selectedCategory === "ai"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Sparkles className="size-3.5" />
                  <span>Yapay Zeka (6)</span>
                </button>
                <button
                  onClick={() => setSelectedCategory("loyalty")}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    selectedCategory === "loyalty"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Crown className="size-3.5" />
                  <span>Sadakat (2)</span>
                </button>
                <button
                  onClick={() => setSelectedCategory("display")}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    selectedCategory === "display"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Tv className="size-3.5" />
                  <span>Pazarlama &amp; Ekran (3)</span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Modül ara..."
                  className="w-full h-10 pl-9 pr-3 rounded-xl border border-border/70 bg-card text-xs sm:text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MAIN SECTION: Modules Display Matching User's Screenshots */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-16">
            {/* CATEGORY 1: Yapay Zeka & Akıllı Asistanlar (6 Modül) */}
            {(selectedCategory === "all" || selectedCategory === "ai") && aiModules.length > 0 && (
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Sparkles className="size-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                      Yapay Zeka &amp; Akıllı Asistanlar
                    </h2>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground bg-muted/60 px-3 py-1 rounded-full">
                    {aiModules.length} Modül
                  </span>
                </div>

                {/* Grid of 6 AI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aiModules.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="group rounded-2xl border border-border/70 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Top Row: Icon + Aktif Badge */}
                          <div className="flex items-center justify-between mb-5">
                            <div className="size-12 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/40 text-red-500 flex items-center justify-center shadow-xs">
                              <IconComponent className="size-6 stroke-[1.8]" />
                            </div>

                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>Aktif</span>
                            </span>
                          </div>

                          {/* Title & Description */}
                          <Link href={`/moduller/${item.slug}`}>
                            <h3 className="text-lg sm:text-xl font-extrabold text-foreground leading-snug hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2.5 min-h-[44px]">
                            {item.description}
                          </p>

                          {/* Action Links */}
                          <div className="mt-3.5 flex items-center justify-between gap-2">
                            <button
                              onClick={() => {
                                setActivePreviewModule(item);
                                const previewElem = document.getElementById("live-module-preview");
                                if (previewElem) previewElem.scrollIntoView({ behavior: "smooth" });
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                            >
                              <Eye className="size-3.5" />
                              <span>Canlı Simülasyon</span>
                            </button>

                            <Link
                              href={`/moduller/${item.slug}`}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground group-hover:text-primary transition-colors"
                            >
                              <span>Detaylı Anlatım</span>
                              <ArrowRight className="size-3" />
                            </Link>
                          </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="mt-6 pt-5 border-t border-border/40 space-y-3">
                          {item.hasVideo && (
                            <div className="flex justify-end">
                              <button
                                onClick={() => setVideoModalOpen(true)}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 transition-colors"
                              >
                                <PlayCircle className="size-3.5" />
                                <span>Tanıtım Videosu</span>
                              </button>
                            </div>
                          )}

                          {/* Status Pill Button */}
                          <div className="w-full py-2.5 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 select-none shadow-xs">
                            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                            <span>Kullanıma Açık &amp; Aktif</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CATEGORY 2: Müşteri Sadakati, Otomasyon & Büyüme (2 Modül) */}
            {(selectedCategory === "all" || selectedCategory === "loyalty") && loyaltyModules.length > 0 && (
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Crown className="size-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                      Müşteri Sadakati, Otomasyon &amp; Büyüme
                    </h2>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground bg-muted/60 px-3 py-1 rounded-full">
                    {loyaltyModules.length} Modül
                  </span>
                </div>

                {/* Grid of 2 Loyalty Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {loyaltyModules.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="group rounded-2xl border border-border/70 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Top Row: Icon + Aktif Badge */}
                          <div className="flex items-center justify-between mb-5">
                            <div className="size-12 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/40 text-red-500 flex items-center justify-center shadow-xs">
                              <IconComponent className="size-6 stroke-[1.8]" />
                            </div>

                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span>Aktif</span>
                            </span>
                          </div>

                          {/* Title & Description */}
                          <Link href={`/moduller/${item.slug}`}>
                            <h3 className="text-lg sm:text-xl font-extrabold text-foreground leading-snug hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2.5 min-h-[44px]">
                            {item.description}
                          </p>

                          {/* Action Links */}
                          <div className="mt-3.5 flex items-center justify-between gap-2">
                            <button
                              onClick={() => {
                                setActivePreviewModule(item);
                                const previewElem = document.getElementById("live-module-preview");
                                if (previewElem) previewElem.scrollIntoView({ behavior: "smooth" });
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                            >
                              <Eye className="size-3.5" />
                              <span>Canlı Simülasyon</span>
                            </button>

                            <Link
                              href={`/moduller/${item.slug}`}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground group-hover:text-primary transition-colors"
                            >
                              <span>Detaylı Anlatım</span>
                              <ArrowRight className="size-3" />
                            </Link>
                          </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="mt-6 pt-5 border-t border-border/40 space-y-3">
                          {/* Status Pill Button */}
                          <div className="w-full py-2.5 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 select-none shadow-xs">
                            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                            <span>Kullanıma Açık &amp; Aktif</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CATEGORY 3: Pazarlama, Ekran & Baskı (3 Modül - Çok Yakında) */}
            {(selectedCategory === "all" || selectedCategory === "display") && displayModules.length > 0 && (
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-border/50 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Tv className="size-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                      Pazarlama, Ekran &amp; Baskı
                    </h2>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                    {displayModules.length} Modül • Çok Yakında
                  </span>
                </div>

                {/* Grid of 3 Display / Marketing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayModules.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="group rounded-2xl border border-border/70 bg-card p-6 shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Top Row: Icon + Çok Yakında Badge */}
                          <div className="flex items-center justify-between mb-5">
                            <div className="size-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-xs">
                              <IconComponent className="size-6 stroke-[1.8]" />
                            </div>

                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">
                              <Clock className="size-3.5 text-amber-500" />
                              <span>Çok Yakında</span>
                            </span>
                          </div>

                          {/* Title & Description */}
                          <Link href={`/moduller/${item.slug}`}>
                            <h3 className="text-lg sm:text-xl font-extrabold text-foreground leading-snug hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2.5 min-h-[44px]">
                            {item.description}
                          </p>

                          {/* Action Links */}
                          <div className="mt-3.5 flex items-center justify-between gap-2">
                            <button
                              onClick={() => {
                                setActivePreviewModule(item);
                                const previewElem = document.getElementById("live-module-preview");
                                if (previewElem) previewElem.scrollIntoView({ behavior: "smooth" });
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                            >
                              <Eye className="size-3.5" />
                              <span>Canlı Simülasyon</span>
                            </button>

                            <Link
                              href={`/moduller/${item.slug}`}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground group-hover:text-amber-600 transition-colors"
                            >
                              <span>Detaylı Anlatım</span>
                              <ArrowRight className="size-3" />
                            </Link>
                          </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="mt-6 pt-5 border-t border-border/40 space-y-3">
                          {/* Status Pill Button */}
                          <div className="w-full py-2.5 rounded-xl border border-amber-300 dark:border-amber-700/60 bg-amber-50/90 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 select-none shadow-xs">
                            <Clock className="size-4 text-amber-500" />
                            <span>Çok Yakında Yayında</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* INTERACTIVE SHOWCASE STAGE: Live Simulator for the Selected Module */}
        {activePreviewModule && (
          <section id="live-module-preview" className="py-16 border-t border-border/40 bg-muted/20">
            <div className="mx-auto max-w-6xl px-4 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Canlı Modül Simülatörü
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                  {activePreviewModule.name} Nasıl Çalışır?
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                  Aşağıdaki canlı önizleme alanında modülün işletmenize ve müşterilerinize sunduğu deneyimi test edin.
                </p>
              </div>

              {/* Spotlight Interactive Card */}
              <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8 shadow-xl">
                {activePreviewModule.id === "qr-ai" || activePreviewModule.id === "admin-ai" ? (
                  /* Phone Simulator Layout (Side by Side) */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 flex justify-center py-2">
                      {activePreviewModule.id === "qr-ai" && (
                        <QRAiPhoneSimulator initialStage="welcome" showOriginalToggle={true} />
                      )}
                      {activePreviewModule.id === "admin-ai" && (
                        <AdminAiPhoneSimulator initialStage="welcome" showOriginalToggle={true} />
                      )}
                    </div>

                    <div className="lg:col-span-6 space-y-5">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary">
                          {activePreviewModule.categoryTitle}
                        </span>
                        <h3 className="text-2xl font-extrabold text-foreground mt-2">
                          {activePreviewModule.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {activePreviewModule.details.benefit}
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Yetkinlikler:
                        </div>
                        {activePreviewModule.details.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                            <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-xl bg-muted/40 border border-border/60 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="size-4" />
                          <span>İşletmeniz İçin Kullanıma Hazır</span>
                        </div>
                        <Button asChild size="sm" className="font-bold">
                          <Link href="/demo">Demoda İncele</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Desktop / SaaS / TV Full-Width Simulator Layout (Prevents Layout Collision) */
                  <div className="space-y-8">
                    {/* Header: Title, Benefit & Actions */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/50">
                      <div className="space-y-1.5 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary">
                            {activePreviewModule.categoryTitle}
                          </span>
                          {activePreviewModule.isComingSoon ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                              <Clock className="size-3 text-amber-500" />
                              <span>Çok Yakında</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                              <CheckCircle2 className="size-3 text-emerald-500" />
                              <span>Kullanıma Açık &amp; Aktif</span>
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                          {activePreviewModule.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {activePreviewModule.details.benefit}
                        </p>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0">
                        <Button asChild variant="outline" size="sm" className="font-semibold text-xs sm:text-sm">
                          <Link href={`/moduller/${activePreviewModule.slug}`} className="flex items-center gap-1.5">
                            <span>Detaylı Sayfaya Git</span>
                            <ArrowRight className="size-3.5" />
                          </Link>
                        </Button>
                        <Button asChild size="sm" className="font-bold text-xs sm:text-sm shadow-sm">
                          <Link href="/demo">Demoda İncele</Link>
                        </Button>
                      </div>
                    </div>

                    {/* Simulator Stage (Spacious Full-Width Container) */}
                    <div className="w-full max-w-5xl mx-auto overflow-x-auto py-2">
                      {activePreviewModule.id === "menu-import" && (
                        <MenuImportSimulator initialStage="upload" showOriginalToggle={true} />
                      )}

                      {activePreviewModule.id === "photo-pro" && (
                        <FoodPhotoEnhanceSimulator showOriginalToggle={true} />
                      )}

                      {activePreviewModule.id === "image-gen" && (
                        <AiImageGenSimulator showOriginalToggle={true} />
                      )}

                      {activePreviewModule.id === "nutrition-analysis" && (
                        <NutritionCopywriterSimulator showOriginalToggle={true} />
                      )}

                      {activePreviewModule.id === "birthday-automation" && (
                        <LoyaltyCrmSimulator showOriginalToggle={true} />
                      )}

                      {activePreviewModule.id === "loyalty-login" && (
                        <QrCustomerProfileSimulator showOriginalToggle={true} />
                      )}

                      {activePreviewModule.id === "digital-menu-board" && (
                        <DigitalMenuBoardSimulator />
                      )}

                      {activePreviewModule.id === "brosur-sihirbazi" && (
                        <BrochureWizardSimulator />
                      )}

                      {activePreviewModule.id === "sosyal-medya-sihirbazi" && (
                        <SocialMediaWizardSimulator />
                      )}
                    </div>

                    {/* Capabilities 3-Column Footer */}
                    <div className="pt-6 border-t border-border/50">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        Modül Yetkinlikleri ve Avantajları:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {activePreviewModule.details.capabilities.map((cap, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/40 border border-border/60 text-xs sm:text-sm text-foreground/90 font-medium"
                          >
                            <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <GridPattern
                width={32}
                height={32}
                className="fill-transparent stroke-primary/15 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
              />

              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                  <Sparkles className="size-3.5" />
                  <span>Tek Tıkla Kolay Entegrasyon</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Modülleri İşletmenizde Canlı Deneyin
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  İhtiyacınız olan modülleri panelinizden anında açıp kapatabilirsiniz. Hiçbir taahhüt veya donanım zorunluluğu yoktur.
                </p>

                <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                  <Button size="lg" asChild className="shadow-md font-bold">
                    <Link href="/demo">14 Gün Ücretsiz Başlayın</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/demo">Canlı Demo Randevusu</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Modal (Tanıtım Videosu) */}
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 relative">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-muted text-muted-foreground hover:text-foreground"
              >
                <X className="size-5" />
              </button>
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-rose-50 text-rose-600">
                  <PlayCircle className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">QR Menüdeki Yapay Zeka</h3>
                  <p className="text-xs text-muted-foreground">Akıllı Garson Asistanı Tanıtım Videosu</p>
                </div>
              </div>
              <div className="aspect-video bg-neutral-900 rounded-xl flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <PlayCircle className="size-12 text-rose-500 mx-auto animate-pulse" />
                  <div className="text-xs text-neutral-300 font-medium">Tanıtım Videosu Oynatılıyor</div>
                  <div className="text-[10px] text-neutral-500">Kullanıcı QR okuttuğunda asistanın öneri ve soru-cevap akışı</div>
                </div>
              </div>
              <Button onClick={() => setVideoModalOpen(false)} className="w-full">
                Kapat
              </Button>
            </div>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
