import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Utensils,
  QrCode,
  Smartphone,
  CookingPot,
  Boxes,
  Users,
  ShieldCheck,
  BarChart3,
  Receipt,
  Sparkles,
  Rocket,
  Layers,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { productModules, ProductModule } from "@/lib/product-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { BlurFade } from "@/components/velora/blur-fade";
import { GridPattern } from "@/components/velora/grid-pattern";

import { HeroPosMockup } from "@/components/oxonom/hero-pos-mockup";
import { KDSDemo } from "@/components/oxonom/kds-demo";
import { RecipeStockDemo } from "@/components/oxonom/recipe-stock-demo";
import { SplitPaymentDemo } from "@/components/oxonom/split-payment-demo";
import { ZReportShowcase } from "@/components/oxonom/z-report-showcase";
import { AIStudioDemo } from "@/components/oxonom/ai-studio-demo";
import { TableManagementPreview } from "@/components/oxonom/table-management-preview";
import { QROrderShowcase } from "@/components/oxonom/qr-order-showcase";

export const dynamic = "force-static";

export function generateStaticParams() {
  return productModules.map((p) => ({
    slug: p.id,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const mod = productModules.find((p) => p.id === slug);
  if (!mod) return { title: "Ürün Bulunamadı" };

  return {
    title: `${mod.name} | ${siteConfig.name}`,
    description: `${mod.name} - ${mod.description}`,
    openGraph: {
      title: `${mod.name} | ${siteConfig.name}`,
      description: mod.description,
    },
  };
}

const detailedContentBySlug: Record<
  string,
  {
    heroHeadline: string;
    valueProp: string;
    workflow: { step: string; title: string; desc: string }[];
    deepBenefits: { title: string; desc: string }[];
  }
> = {
  pos: {
    heroHeadline: "Hızlı, kesintisiz ve bulut tabanlı satış gücü.",
    valueProp: "Yoğun saatlerde bekleme yapmayan dokunmatik terminal mimarisi. Parçalı ödeme, ikram, indirim ve masa transferlerini saniyeler içinde tamamlayın.",
    workflow: [
      { step: "01", title: "Masa veya Paket Seçimi", desc: "Garson veya kasiyer tek dokunuşla ilgili adisyonu açar." },
      { step: "02", title: "Varyantlı Ürün Ekleme", desc: "Porsiyon, pişme derecesi ve ekstra malzemeler hızla seçilir." },
      { step: "03", title: "Mutfak & Bardan Onay", desc: "Sipariş dijital KDS ekranlarına anında rota edilir." },
      { step: "04", title: "Esnek Tahsilat", desc: "Nakit, kredi kartı ve yemek kartı ile tek tıkla parçalı ödeme alınır." },
    ],
    deepBenefits: [
      { title: "Sıfır Masa Karışıklığı", desc: "Tüm siparişler görsel masa haritasına kilitlenir; hesaplar hatasız kapatılır." },
      { title: "Çevrimdışı Çalışma Güvencesi", desc: "İnternet kopsa dahi terminal kilitlenmez, satışlar yerel hafızaya kaydedilir." },
      { title: "Donanım Özgürlüğü", desc: "Pahalı özel donanımlara mecbur kalmayın; iPad, Android tablet veya PC ile çalışın." },
    ],
  },
  "masa-siparis": {
    heroHeadline: "Salonunuzun görsel krokisi ve canlı adisyonlar.",
    valueProp: "İç salon, bahçe ve teras gibi bölümlerinize göre masaların doluluk, sipariş ve hesap durumlarını tek ekrandan canlı izleyin.",
    workflow: [
      { step: "01", title: "Kroki Üzerinden Masa Açma", desc: "Müşteri oturduğunda kişi sayısı seçilerek masa başlatılır." },
      { step: "02", title: "Sipariş İşleme", desc: "Garson masaya özel notları ve istekleri ekler." },
      { step: "03", title: "Masa Taşıma & Birleştirme", desc: "Müşteri yer değiştirdiğinde tek dokunuşla tüm adisyon taşınır." },
      { step: "04", title: "Hesap İstendi Uyarısı", desc: "Hesap istendiğinde masa sarı renge döner, adisyon kapatmaya hazırlanır." },
    ],
    deepBenefits: [
      { title: "Daha Hızlı Masa Devir Hızı", desc: "Masaların boş kalma süresi kısalır, salon verimliliği %30 artar." },
      { title: "Yetkisiz İptal Engeli", desc: "Siparişten ürün silme veya indirim yapma işlemleri yönetici PIN onayına bağlıdır." },
      { title: "Grup Rezervasyon Kolaylığı", desc: "Kalabalık kutlamalar için masalar tek dokunuşla birleştirilir." },
    ],
  },
  "qr-menu": {
    heroHeadline: "Müşterilerinizin telefonunda kusursuz menü deneyimi.",
    valueProp: "Uygulama indirme zorunluluğu olmadan, şık fotoğraflar, alerjen etiketleri ve güncel fiyatlarla işletmenizin prestijini artırın.",
    workflow: [
      { step: "01", title: "Kamera ile Okutma", desc: "Müşteri telefon kamerasıyla masadaki QR kodu tarar." },
      { step: "02", title: "Görsel Menü İnceleme", desc: "Kategoriler, ürün fotoğrafları ve içerik açıklamaları açılır." },
      { step: "03", title: "Filtreleme & Seçenekler", desc: "Glutensiz, vejetaryen gibi filtrelerle istenen lezzet bulunur." },
      { step: "04", title: "Garson Çağırma", desc: "Müşteri tek tuşla masaya garson çağırabilir veya hesap isteyebilir." },
    ],
    deepBenefits: [
      { title: "Baskı Maliyetine Son", desc: "Fiyat veya ürün değiştiğinde yeniden menü bastırma masrafı ortadan kalkar." },
      { title: "Çoklu Dil Kolaylığı", desc: "Yabancı turistler için menü tek tuşla İngilizce, Rusça veya Arapça açılır." },
      { title: "Daha Yüksek Sepet Ortalaması", desc: "İştah açıcı profesyonel fotoğraflar sipariş adedini doğrudan artırır." },
    ],
  },
  "self-order": {
    heroHeadline: "Masadan doğrudan mutfağa beklemesiz sipariş.",
    valueProp: "Müşterinin garson beklemeden kendi telefonundan sipariş vermesini sağlayan, kuyrukları ve servis gecikmelerini sıfırlayan teknoloji.",
    workflow: [
      { step: "01", title: "Masada QR Okutulur", desc: "Masaya özel güvenli oturum saniyeler içinde başlatılır." },
      { step: "02", title: "Sepet Oluşturulur", desc: "Ürünler, pişme dereceleri ve ekstralar sepete eklenir." },
      { step: "03", title: "Sipariş Onaylanır", desc: "Müşteri siparişini onayladığı anda mutfak KDS ekranına düşer." },
      { step: "04", title: "Masa Hesabına Eklenir", desc: "Kasadaki aktif adisyona tutar otomatik yansır." },
    ],
    deepBenefits: [
      { title: "Personel Maliyetinde Tasarruf", desc: "Daha az garsonla daha çok masaya kusursuz ve eksiksiz servis sunun." },
      { title: "Sıfır Sipariş Hatası", desc: "Müşteri ekstraları ve istemediği malzemeleri kendi seçtiği için yanlış anlaşılma olmaz." },
      { title: "Hızlı Tekrar Sipariş", desc: "Tatlı veya ikinci içecek siparişleri için garson arama derdi biter." },
    ],
  },
  kds: {
    heroHeadline: "Kağıt bilet karmaşasına son veren dijital mutfak.",
    valueProp: "Bekleyen, hazırlanan ve servise hazır siparişleri renkli süre sayaçlarıyla yönetin. Kaybolan biletleri ve mutfak gecikmelerini tarihe gömün.",
    workflow: [
      { step: "01", title: "Sipariş Ekranına Düşer", desc: "POS'tan veya QR'dan gelen sipariş mutfakta sesli uyarıyla belirir." },
      { step: "02", title: "Hazırlanıyor Aşaması", desc: "Aşçı ekrana dokunarak hazırlık sürecini başlatır, sayaç çalışır." },
      { step: "03", title: "İstasyon Dağıtımı", desc: "Izgara, soğuk meze ve içecek siparişleri ilgili ekrana ayrışır." },
      { step: "04", title: "Servise Hazır Bildirimi", desc: "Tamamlanan tabak için garson ekranına anında hazır sinyali gider." },
    ],
    deepBenefits: [
      { title: "Servis Hızında %40 Artış", desc: "Aşçılar hangi siparişin kaç dakikadır beklediğini anlık görür." },
      { title: "Çevre Dostu & Hijyenik", desc: "Mutfakta ıslanan, kirlenen ve kaybolan kağıt fiş ruloları biter." },
      { title: "Gecikme Renk Alarmları", desc: "Belirlenen süreyi aşan tabaklar sarı ve kırmızı uyarıyla öne çıkar." },
    ],
  },
  "stok-recete": {
    heroHeadline: "Satış oldukça stok kendini otomatik güncellesin.",
    valueProp: "Gramaj, litre ve adet bazında tanımlanan ürün reçeteleri sayesinde her satış anında hammadde deponuzdan anlık olarak düşülür.",
    workflow: [
      { step: "01", title: "Reçete Tanımlama", desc: "Örn: 1 Burger için 150g kıyma, 1 ekmek, 20g sos eşleştirilir." },
      { step: "02", title: "Mal Kabul Girişi", desc: "Tedarikçiden gelen hammadde fatura ve miktarıyla sisteme girilir." },
      { step: "03", title: "Satış Anında Düşüm", desc: "Kasa veya QR'dan satılan ürünler stoktan gramı gramına eksilir." },
      { step: "04", title: "Kritik Eşik Uyarısı", desc: "Hammadde azaldığında yöneticiye otomatik bildirim gönderilir." },
    ],
    deepBenefits: [
      { title: "Kayıp ve Kaçak Kontrolü", desc: "Tezgâhta kullanılan et ve içecek miktarı kuruşu kuruşuna denetlenir." },
      { title: "Net Porsiyon Maliyeti", desc: "Her tabağın hammadde maliyetini ve brüt kâr marjını anlık izleyin." },
      { title: "Zahmetsiz Depo Sayımı", desc: "Sistem stoğu ile fiziki sayım tek tıkla kıyaslanır, fireler kayıt altına alınır." },
    ],
  },
  "musteri-crm": {
    heroHeadline: "Siparişleri değil, müşterilerinizi de tanıyın.",
    valueProp: "Müşterilerinizin sipariş sıklığı, toplam harcaması, en sevdiği lezzetler ve özel günlerini yöneterek sadakati artırın.",
    workflow: [
      { step: "01", title: "Müşteri Eşleştirme", desc: "Telefon veya isim ile müşteri profili adisyona bağlanır." },
      { step: "02", title: "Sipariş Hafızası", desc: "Önceki gelişlerinde ne sipariş ettiği ve tercihleri görüntülenir." },
      { step: "03", title: "Kişisel İndirimler", desc: "VIP müşteriye özel tanımlanmış yüzde veya tutar otomatik uygulanır." },
      { step: "04", title: "Doğum Günü Kutlaması", desc: "Özel günlerde ikram tatlı veya tebrik mesajı otomasyonu çalışır." },
    ],
    deepBenefits: [
      { title: "Müşteri Sadakati & Tekrar Ziyaret", desc: "Kendini özel hisseden müşterilerin restoranı tekrar tercih etme oranı yükselir." },
      { title: "VIP Müşteri Segmentasyonu", desc: "En çok harcama yapan müşterilerinizi tek raporla listeleyin." },
      { title: "Alerjen ve Tercih Güvenliği", desc: "'Fıstık alerjisi var' gibi notlar her siparişte garsonun karşısına çıkar." },
    ],
  },
  personel: {
    heroHeadline: "Her çalışana ihtiyacı kadar yetki, tam güvenlik.",
    valueProp: "Yönetici, kasiyer, garson ve aşçı rolleri için ekran ve işlem bazında hassas izin matrisi. Hızlı 4 haneli PIN girişiyle güvenli operasyon.",
    workflow: [
      { step: "01", title: "Rol Tanımlama", desc: "Kasiyer, garson veya yönetici seviyesinde yetkiler kurgulanır." },
      { step: "02", title: "Hızlı PIN Girişi", desc: "Personel 4 haneli şifresiyle saniyeler içinde adisyon açar." },
      { step: "03", title: "Otomatik Ekran Kilidi", desc: "İşlem bittiğinde terminal kilitlenir, başkasının işlem yapması önlenir." },
      { step: "04", title: "Vardiya ve Satış Raporu", desc: "Gün sonunda hangi garsonun kaç masa açtığı ve cirosu listelenir." },
    ],
    deepBenefits: [
      { title: "Kasa Kaçaklarını Önleme", desc: "İptal, ikram ve kasa çekmecesi açma yetkisi sadece yetkili PIN ile onaylanır." },
      { title: "Personel Prim ve Performansı", desc: "En çalışkan personeli verilerle ödüllendirin, motivasyonu artırın." },
      { title: "Salon ve Bölge Atamaları", desc: "Garsonlar sadece kendi sorumlu oldukları bölgedeki masaları görür." },
    ],
  },
  raporlama: {
    heroHeadline: "İşletmenizi tahmin ederek değil, veriye bakarak yönetin.",
    valueProp: "Saatlik ciro dağılımı, en çok satan menüler, masa devir hızları ve ödeme kanalları. Cep telefonunuzdan anlık canlı işletme takibi.",
    workflow: [
      { step: "01", title: "Canlı Veri Akışı", desc: "Her kapanan adisyon ve ödeme anında bulut veritabanına işlenir." },
      { step: "02", title: "Karşılaştırmalı Grafikler", desc: "Bugün vs dün, bu hafta vs geçen hafta ciro kıyaslaması yapılır." },
      { step: "03", title: "Saatlik Yoğunluk Analizi", desc: "Restoranın hangi saatlerde dolduğunu gösteren ısı haritası incelenir." },
      { step: "04", title: "Excel / PDF Dışa Aktar", desc: "Muhasebe veya ortaklar için tek tıkla mali tablolar indirilir." },
    ],
    deepBenefits: [
      { title: "Uzaktan Canlı İzleme", desc: "Restoranda olmasanız dahi kasanın durumunu cep telefonunuzdan canlı izleyin." },
      { title: "Kârlı Ürün Tespiti", desc: "Hangi yemeklerin en çok kazandırdığını ve hangi ürünlerin yavaş gittiğini görün." },
      { title: "Gider & Kâr Analizi", desc: "Personel ve hammadde maliyetlerini düşerek net işletme kârını hesaplayın." },
    ],
  },
  "z-raporu": {
    heroHeadline: "7 bölümlü tam mutabakatlı gün sonu mali raporu.",
    valueProp: "Kasa açılışından kapanışına kadar nakit sayım farkı, KDV dilimleri, tüm iptal ve ikram logları tek bir raporda eksiksiz arşivlenir.",
    workflow: [
      { step: "01", title: "Fiziki Kasa Sayımı", desc: "Kasadaki nakit, kredi kartı ve yemek kartı slipleri sayılır." },
      { step: "02", title: "Z Raporu Alma", desc: "Yönetici şifresiyle gün sonu mutabakat ekranı açılır." },
      { step: "03", title: "Nakit Farkının Teyidi", desc: "Beklenen kasa ile sayılan kasa kuruşu kuruşuna doğrulanır." },
      { step: "04", title: "Bulut Arşivine Kayıt", desc: "Z raporu numarasıyla sonsuza kadar bulut arşivine kilitlenir." },
    ],
    deepBenefits: [
      { title: "Mali ve Denetimsel Güvenlik", desc: "Maliye standartlarına uygun KDV dilimleri matrahı eksiksiz sunulur." },
      { title: "Kasa Açıklarının Anında Tespiti", desc: "Kasa eksik veya fazla verdiğinde anında yetkiliye alarm verir." },
      { title: "Geçmişe Dönük Tam İzlenebilirlik", desc: "Aylar önceki Z raporunu tek tıkla PDF olarak ekrana getirin." },
    ],
  },
  "yapay-zeka": {
    heroHeadline: "Restoran dünyasına özel Oxonom AI Studio.",
    valueProp: "Basılı menüyü tek fotoğrafla dijitalleştirin, tabak fotoğraflarını stüdyo aydınlatmasına kavuşturun ve iştah açan menü metinleri yazdırın.",
    workflow: [
      { step: "01", title: "Menü Görselini Yükle", desc: "Basılı menünün veya PDF'in fotoğrafı sisteme aktarılır." },
      { step: "02", title: "AI Otomatik Ayıklama", desc: "Yapay zeka ürünleri, fiyatları ve kategorileri saniyeler içinde çıkarır." },
      { step: "03", title: "Stüdyo Kalitesinde Görsel", desc: "Telefonla çekilen yemek fotoğrafı profesyonel katalog karesine dönüşür." },
      { step: "04", title: "QR ve POS'a Aktarım", desc: "Hazırlanan tüm lezzetler tek tıkla canlı menülere yansıtılır." },
    ],
    deepBenefits: [
      { title: "Günler Süren Veri Girişine Son", desc: "Yeni menü oluştururken saatlerce ürün girmekle uğraşmayın." },
      { title: "Pahalı Fotoğraf Çekim Masrafı Sıfır", desc: "Yapay zeka tabağınızı en iştah kabartan ışık ve fonda yeniden üretir." },
      { title: "Kalori ve Alerjen Tahmini", desc: "Misafirlerinizin sağlığı için lezzetlerin besin değerlerini otomatik hesaplar." },
    ],
  },
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const mod = productModules.find((p) => p.id === slug);

  if (!mod) {
    notFound();
  }

  const customContent = detailedContentBySlug[slug] || {
    heroHeadline: mod.shortDesc,
    valueProp: mod.description,
    workflow: [
      { step: "01", title: "Sisteme Giriş", desc: "Kullanıcı dostu arayüzle işlem başlatılır." },
      { step: "02", title: "Canlı Veri İşleme", desc: "Bulut altyapısında anında güncellenir." },
      { step: "03", title: "Departman İletişimi", desc: "Tüm ilgili ekranlara sinyal iletilir." },
      { step: "04", title: "Kapanış & Rapor", desc: "Sonuçlar analiz paneline yansır." },
    ],
    deepBenefits: [
      { title: "Hız ve Verimlilik", desc: "Operasyonel sürtünmeyi en aza indirir." },
      { title: "Kayıpsız Kontrol", desc: "Kayıp kaçakları sıfırlar." },
      { title: "Bulut Güvencesi", desc: "Verileriniz anlık yedeklenir." },
    ],
  };

  const otherModules = productModules.filter((p) => p.id !== slug).slice(0, 3);

  // Render appropriate interactive mockup based on module slug
  const renderMockup = () => {
    switch (slug) {
      case "pos":
        return <SplitPaymentDemo />;
      case "masa-siparis":
        return <TableManagementPreview />;
      case "qr-menu":
      case "self-order":
        return <QROrderShowcase />;
      case "kds":
        return <KDSDemo />;
      case "stok-recete":
        return <RecipeStockDemo />;
      case "z-raporu":
      case "raporlama":
        return <ZReportShowcase />;
      case "yapay-zeka":
        return <AIStudioDemo />;
      default:
        return <HeroPosMockup />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-6xl px-4 lg:px-8 py-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Ana Sayfa</Link>
            <ChevronRight className="size-3" />
            <Link href="/ozellikler" className="hover:text-foreground transition-colors">Ürünler</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground font-semibold">{mod.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 lg:py-16 text-center border-b border-border/40">
          <GridPattern
            width={48}
            height={48}
            className="fill-transparent stroke-border/30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          />

          <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
            <BlurFade delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                <Sparkles className="size-3.5" />
                <span>Oxonom Modülü: {mod.name}</span>
              </span>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground text-balance">
                {customContent.heroHeadline}
              </h1>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {customContent.valueProp}
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/demo">
                  <ShimmerButton className="h-12 px-7 text-sm font-semibold">
                    <Rocket className="size-4" />
                    <span>Ücretsiz Demo Talep Et</span>
                  </ShimmerButton>
                </Link>
                <Button variant="outline" size="lg" asChild className="h-12 px-6 rounded-full">
                  <Link href="/fiyatlandirma">Fiyatları Gör</Link>
                </Button>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Interactive Mockup Preview */}
        <section className="py-16 lg:py-20 bg-card/20 border-b border-border/40">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <div className="mb-10 text-center max-w-xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Canlı Arayüz</span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {mod.name} Nasıl Çalışır?
              </h2>
            </div>

            {renderMockup()}
          </div>
        </section>

        {/* Workflow Steps */}
        <section className="py-20 lg:py-28 border-b border-border/40">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Operasyonel Akış</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Adım Adım {mod.name} Süreci
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                İşletmenizin hızını ve düzenini garantiye alan 4 temel operasyon adımı.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {customContent.workflow.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border/60 bg-card/70 flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-black text-primary/40 font-mono block mb-3">{item.step}</span>
                    <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 lg:py-28 bg-card/30 border-b border-border/40">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">İşletme Faydaları</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Restoranınıza Ne Kazandırır?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {customContent.deepBenefits.map((b, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border/60 bg-background/80 space-y-3">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Oxonom Modules */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Tam Ekosistem</span>
                <h3 className="text-xl font-bold text-foreground mt-1">İlgili Diğer Oxonom Modülleri</h3>
              </div>
              <Link href="/ozellikler" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                <span>Tümünü Gör</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
              {otherModules.map((m) => (
                <Link
                  key={m.id}
                  href={m.href}
                  className="p-5 rounded-2xl border border-border/60 bg-card/60 hover:border-primary/50 transition-all group"
                >
                  <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors block">
                    {m.name}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                    {m.shortDesc}
                  </p>
                  <span className="text-[11px] font-semibold text-primary mt-3 inline-flex items-center gap-1">
                    İncele <ArrowRight className="size-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion CTA */}
        <section className="py-16 bg-primary/5 border-t border-border/40">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {mod.name} ile operasyonunuzu dönüştürün.
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
              Oxonom POS ekibimizle görüşerek işletmenize özel canlı demoyu hemen talep edin.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link href="/demo">
                <ShimmerButton className="h-11 px-6 text-xs font-bold">Demo Talep Et</ShimmerButton>
              </Link>
              <Button variant="outline" asChild className="h-11 px-6 rounded-full text-xs">
                <Link href="/fiyatlandirma">Fiyatları İncele</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
