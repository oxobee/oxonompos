export interface ProductModule {
  id: string;
  name: string;
  shortDesc: string;
  badge?: string;
  description: string;
  href: string;
  iconName: string;
  highlights: string[];
}

export const productModules: ProductModule[] = [
  {
    id: "pos",
    name: "POS & Satış",
    shortDesc: "Hızlı, kesintisiz ve bulut tabanlı satış terminali.",
    description: "Dokunmatik ekranlarla tam uyumlu, parçalı ödeme ve anlık adisyon yönetimi sunan modern POS terminali.",
    href: "/urun/pos",
    iconName: "CreditCard",
    highlights: ["Karma ve parçalı ödeme", "Çevrimdışı çalışma modu", "Anlık masa ve paket adisyonu", "Hızlı ürün ve varyant seçimi"],
  },
  {
    id: "masa-siparis",
    name: "Masa & Sipariş Yönetimi",
    shortDesc: "Görsel kat planı ve canlı masa durumları.",
    description: "İşletmenizin kat planına göre masaların doluluk, sipariş ve hesap durumlarını tek ekrandan canlı izleyin.",
    href: "/urun/masa-siparis",
    iconName: "Utensils",
    highlights: ["Bölge ve kat yönetimi", "Masa taşıma ve birleştirme", "Adisyon bölme & transfer", "VOID ve ikram takibi"],
  },
  {
    id: "qr-menu",
    name: "QR Menü",
    shortDesc: "Uygulamasız, hızlı ve görsel dijital menü.",
    description: "Müşterilerinizin telefon kamerasıyla anında açtığı, marka renklerinize özel şık dijital menü deneyimi.",
    href: "/urun/qr-menu",
    iconName: "QrCode",
    highlights: ["Uygulama indirme gerektirmez", "Görsel, kalori ve alerjen detayları", "Anlık fiyat ve ürün güncelleme", "Çoklu dil seçeneği"],
  },
  {
    id: "self-order",
    name: "QR Self Order",
    shortDesc: "Masadan garson beklemeden anında sipariş.",
    description: "Müşterinin masadaki QR kodu okutarak kendi siparişini vermesini ve mutfağa doğrudan iletmesini sağlar.",
    href: "/urun/self-order",
    iconName: "Smartphone",
    badge: "Popüler",
    highlights: ["Doğrudan mutfağa düşen sipariş", "Garson çağırma ve hesap isteme", "Daha hızlı masa devir hızı", "Sepet ve opsiyon seçimi"],
  },
  {
    id: "kds",
    name: "Mutfak Ekranı (KDS)",
    shortDesc: "Mutfakta kağıt bilet karmaşasına son.",
    description: "Gelen siparişleri beklemede, hazırlanıyor ve servise hazır aşamalarıyla dijital ekranda canlı yönetin.",
    href: "/urun/kds",
    iconName: "CookingPot",
    badge: "Canlı Akış",
    highlights: ["3 aşamalı hazırlık takibi", "Gecikme süresi renk uyarıları", "Sesli yeni sipariş bildirimi", "Masa ve paket filtreleme"],
  },
  {
    id: "stok-recete",
    name: "Stok & Reçete",
    shortDesc: "Satışla birlikte otomatik hammadde düşümü.",
    description: "Ürün reçetelerine göre gramaj ve adet bazında stokları satış anında otomatik güncelleyen akıllı envanter.",
    href: "/urun/stok-recete",
    iconName: "Boxes",
    highlights: ["Gram, litre ve adet takibi", "Kritik stok seviyesi uyarıları", "Fire, zayi ve sayım kayıtları", "Maliyet ve kar marjı hesabı"],
  },
  {
    id: "musteri-crm",
    name: "Müşteri CRM",
    shortDesc: "Siparişleri değil, müşterilerinizi de tanıyın.",
    description: "Müşterilerinizin sipariş sıklığını, toplam harcamasını, favori ürünlerini ve özel günlerini yönetin.",
    href: "/urun/musteri-crm",
    iconName: "Users",
    highlights: ["Müşteri profil ve geçmişi", "Kişiye özel indirim oranları", "Doğum günü otomasyonu", "Müşteri harcama segmentasyonu"],
  },
  {
    id: "personel",
    name: "Personel Yönetimi",
    shortDesc: "Yetki sınırları, PIN erişimi ve performans.",
    description: "Yönetici, kasiyer, garson ve aşçı rolleri için ekran bazında hassas yetkilendirme ve vardiya takibi.",
    href: "/urun/personel",
    iconName: "ShieldCheck",
    highlights: ["Rol bazlı sayfa yetkileri", "Hızlı PIN ve mobil giriş", "Garson satış performansı", "Otomatik terminal kilidi"],
  },
  {
    id: "raporlama",
    name: "Analitik & Raporlama",
    shortDesc: "Veriye dayalı işletme yönetimi.",
    description: "Saatlik müşteri yoğunluğu, en çok satan ürünler, ödeme dağılımı ve personel verimliliğini anlık grafiklerle izleyin.",
    href: "/urun/raporlama",
    iconName: "BarChart3",
    highlights: ["Saatlik ciro ve sepet hacmi", "Ödeme tipi dağılımı", "İptal ve iade raporları", "Karşılaştırmalı trend analizleri"],
  },
  {
    id: "z-raporu",
    name: "7 Bölümlü Z Raporu",
    shortDesc: "Gün sonu kapanışında tam finansal mutabakat.",
    description: "Kasa açılışından kapanışına nakit mutabakatı, KDV matrahları, iptaller ve denetim kayıtları tek raporda.",
    href: "/urun/z-raporu",
    iconName: "Receipt",
    badge: "Denetim Hazır",
    highlights: ["Kasa nakit sayım farkı", "KDV oranları detayı", "Tüm iptal ve ikram logları", "Geçmiş Z raporları arşivi"],
  },
  {
    id: "yapay-zeka",
    name: "AI Studio",
    shortDesc: "Restoran operasyonunda yapay zeka çağı.",
    description: "Menü fotoğrafından otomatik ürün çıkarma, profesyonel yemek görseli oluşturma ve akıllı menü açıklamaları.",
    href: "/urun/yapay-zeka",
    iconName: "Sparkles",
    badge: "Yeni",
    highlights: ["Fotoğraf / PDF'ten menü çıkarma", "AI yemek fotoğrafı üretimi", "Görsel profesyonelleştirme", "Rol bazlı asistanlar"],
  },
];

export interface SolutionItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  badge: string;
  description: string;
  benefits: string[];
  focusModules: string[];
}

export const solutionItems: SolutionItem[] = [
  {
    id: "restoran",
    title: "Alakart & Fine Dining Restoran",
    slug: "restoran",
    shortDesc: "Masaya servis, detaylı hesap bölme ve mutfak entegrasyonu.",
    badge: "Restoran",
    description: "Çoklu salonlu, rezervasyonlu ve alakart hizmet veren restoranlar için masa durumundan mutfak ekranına kusursuz koordinasyon.",
    benefits: [
      "Görsel salon ve masa yerleşimi",
      "Kişi başı veya ürün bazlı hesap ayırma",
      "Mutfak ekranı (KDS) ile bilet kayıplarının önlenmesi",
      "Müşteri sadakat ve geçmiş sipariş hafızası",
    ],
    focusModules: ["Masa & Sipariş", "POS & Satış", "KDS", "CRM", "Z Raporu"],
  },
  {
    id: "kafe",
    title: "Kafe, Bar & 3. Nesil Kahve",
    slug: "kafe",
    shortDesc: "Tezgâhta yıldırım hızında satış, QR menü ve sadakat.",
    badge: "Kafe & Bar",
    description: "Yoğun saatlerde saniyeler içinde sipariş alma, süt ve şurup gibi reçete bileşenlerini otomatik düşme ve QR menü kolaylığı.",
    benefits: [
      "3 dokunuşla sipariş ve temassız tahsilat",
      "Kahve çekirdeği ve süt tüketiminin gramaj takibi",
      "QR menü ile güncel fiyat ve özel lezzetler",
      "Sık gelen müşterilere otomatik ikram / indirim",
    ],
    focusModules: ["POS Terminali", "QR Menü", "Stok & Reçete", "CRM"],
  },
  {
    id: "fast-food",
    title: "Fast Food & QSR",
    slug: "fast-food",
    shortDesc: "Maksimum hız, self-order kiosk ve anlık mutfak yönlendirme.",
    badge: "Hızlı Servis",
    description: "Kuyrukları eriten hızlı sipariş arayüzü, menü içi ekstra/çıkar malzeme yönetimi ve sipariş hazırlık numarası takibi.",
    benefits: [
      "Hızlı buton düzeniyle beklemesiz sipariş",
      "Hazırlanıyor / Teslim ekranları entegrasyonu",
      "Kritik paketleme ve teslimat uyarıları",
      "En çok satan menülerin anlık optimizasyonu",
    ],
    focusModules: ["Hızlı POS", "KDS", "Self Order", "Stok"],
  },
  {
    id: "paket-servis",
    title: "Paket Servis & Gel-Al",
    slug: "paket-servis",
    shortDesc: "Telefon ve gel-al siparişlerinin mutfaktan kuryeye takibi.",
    badge: "Teslimat",
    description: "Gelen arama tanıma, müşteri adresi hafızası, paket hazırlık aşamaları ve kurye atama süreçlerini tek merkezden yürütün.",
    benefits: [
      "Müşteri telefon numarasıyla otomatik adres doldurma",
      "Mutfak ekranında 'Paket' özel etiketi",
      "Kurye durum ve teslimat süreleri",
      "Gün sonu paket servis nakit/kart mutabakatı",
    ],
    focusModules: ["POS & Paket", "Müşteri CRM", "KDS", "Raporlama"],
  },
  {
    id: "otel",
    title: "Otel, Resort & Tesis",
    slug: "otel",
    shortDesc: "Farklı departmanlar, havuz bar, lobi ve oda servisi.",
    badge: "Otel & Tesis",
    description: "Otel içerisindeki ana restoran, teras bar, havuz başı ve oda servisi noktalarını tek bir bulut veritabanında birleştirin.",
    benefits: [
      "Çoklu satış noktası (POS outlet) yönetimi",
      "Departman bazlı ciro ve stok ayrıştırması",
      "Mobil garsonlar için tablet ve telefon kullanımı",
      "Kapsamlı yetkilendirme ve denetim raporları",
    ],
    focusModules: ["Çoklu Şube / Nokta", "Mobil POS", "Stok & Envanter", "Z Raporu"],
  },
  {
    id: "zincir-isletme",
    title: "Zincir & Franchise İşletmeler",
    slug: "zincir-isletme",
    shortDesc: "Tüm şubelerinizi tek bir merkezden canlı izleyin ve yönetin.",
    badge: "Zincir & Çoklu Şube",
    description: "Merkezi menü fiyatlandırması, şubeler arası anlık ciro kıyaslaması, konsolide stok transferleri ve kurumsal denetim.",
    benefits: [
      "Tek tıkla tüm şubelerde menü ve fiyat güncelleme",
      "Şube performans ve ciro kıyaslama tabloları",
      "Merkezi hammadde tedarik ve transfer takibi",
      "Yetki matrisi ve üst yönetim konsolide Z raporu",
    ],
    focusModules: ["Merkezi Yönetim", "Konsolide Raporlama", "Stok Transfer", "Yetkilendirme"],
  },
];

export const zReportSectionsData = [
  {
    id: "genel-bakis",
    title: "Genel Bakış",
    desc: "Toplam brüt ve net ciro, ortalama adisyon büyüklüğü, açılıp kapanan masa sayısı ve toplam servis adedi.",
    metrics: [
      { label: "Toplam Brüt Ciro", value: "₺34.850,00" },
      { label: "Ortalama Adisyon", value: "₺435,60" },
      { label: "Tamamlanan Masa", value: "82 Adet" },
      { label: "Açık Kalan Masa", value: "0 Adet" },
    ],
  },
  {
    id: "nakit-mutabakat",
    title: "Nakit Mutabakat",
    desc: "Kasa açılış tutarı, gün içi nakit giriş/çıkışları, sistemin beklediği nakit ile fiziki sayılan nakit arasındaki fark.",
    metrics: [
      { label: "Kasa Açılış", value: "₺1.500,00" },
      { label: "Tahsil Edilen Nakit", value: "₺11.200,00" },
      { label: "Kasa Çıkış (Gider)", value: "₺650,00" },
      { label: "Kasa Mutabakat Farkı", value: "₺0,00 (Kusursuz)" },
    ],
  },
  {
    id: "satis-analizi",
    title: "Satış & Ödeme Analizi",
    desc: "Nakit, Kredi Kartı ve Yemek Kartı ödeme dağılımı ile kategori bazlı ciro oranları.",
    metrics: [
      { label: "Kredi Kartı", value: "₺18.450,00 (%53)" },
      { label: "Nakit", value: "₺11.200,00 (%32)" },
      { label: "Yemek Kartları", value: "₺5.200,00 (%15)" },
      { label: "En Çok Satan Kategori", value: "Ana Yemekler" },
    ],
  },
  {
    id: "kdv-ozeti",
    title: "KDV Özeti",
    desc: "Farklı KDV dilimlerine (%1, %10, %20) göre matrah ve hesaplanan vergi tutarlarının mali dökümü.",
    metrics: [
      { label: "%1 KDV Matrah", value: "₺2.400,00" },
      { label: "%10 KDV Matrah", value: "₺26.500,00" },
      { label: "%20 KDV Matrah", value: "₺3.200,00" },
      { label: "Toplam Hesaplanan KDV", value: "₺3.314,00" },
    ],
  },
  {
    id: "denetim",
    title: "Denetim & İptal Logları",
    desc: "Sipariş iptalleri (VOID), hesap indirimleri, ikramlar ve iade edilen ürünlerin kim tarafından saat kaçta yapıldığı.",
    metrics: [
      { label: "Toplam İptal (VOID)", value: "2 Adet (₺280,00)" },
      { label: "Yapılan İndirim", value: "₺420,00" },
      { label: "İkram Tutarı", value: "₺180,00" },
      { label: "Denetim Uyarısı", value: "0 Kritik Uyarı" },
    ],
  },
  {
    id: "personel-performansi",
    title: "Personel Performansı",
    desc: "Hangi garsonun kaç masa açtığı, toplam cirosu ve ortalama masa kapatma süresi.",
    metrics: [
      { label: "En Yüksek Satış", value: "Ahmet K. (₺12.400)" },
      { label: "En Çok Masa Kapatan", value: "Selin Y. (34 Masa)" },
      { label: "Ort. Masa Süresi", value: "48 Dakika" },
      { label: "Aktif Garson Sayısı", value: "4 Personel" },
    ],
  },
  {
    id: "gecmis-arsiv",
    title: "Geçmiş Z Arşivi",
    desc: "Önceki günlerin, haftaların ve ayların Z raporlarını tek tıkla inceleme ve PDF / Excel olarak dışa aktarma.",
    metrics: [
      { label: "Kayıtlı Z Raporu", value: "365+ Gün" },
      { label: "Dışa Aktarma", value: "PDF & Excel" },
      { label: "Bulut Yedekleme", value: "Anlık & Güvenli" },
      { label: "Z Numarası Sırası", value: "Kesintisiz" },
    ],
  },
];

export const pricingPlans = [
  {
    name: "Başlangıç",
    id: "starter",
    badge: "Küçük İşletmeler",
    priceMonthly: "₺750",
    priceYearly: "₺600",
    description: "Tek terminalli butik kafeler, barlar ve küçük ölçekli yeme-içme noktaları için ideal başlangıç paketi.",
    features: [
      "1 Adet POS Satış Terminali",
      "Görsel Masa & Adisyon Yönetimi",
      "Dijital QR Menü (Sınırsız Ziyaret)",
      "Temel Gün Sonu & Z Raporu",
      "Kullanıcı PIN Yetkilendirme",
      "Bulut Yedekleme & Güvenlik",
    ],
    cta: "Ücretsiz Dene",
    popular: false,
  },
  {
    name: "Profesyonel",
    id: "pro",
    badge: "En Çok Tercih Edilen",
    priceMonthly: "₺1.450",
    priceYearly: "₺1.150",
    description: "Mutfak ekranı, QR sipariş ve stok takibine ihtiyaç duyan aktif restoranlar için tam donanımlı çözüm.",
    features: [
      "3 Adet POS / Garson Terminali",
      "Mutfak Ekranı (KDS) Entegrasyonu",
      "QR Self Order (Masadan Sipariş)",
      "Reçeteli Otomatik Stok Takibi",
      "Müşteri CRM & Sadakat Yönetimi",
      "7 Bölümlü Detaylı Z Raporu",
      "Sesli Sipariş Bildirimleri",
      "7/24 Öncelikli Destek",
    ],
    cta: "Hemen Başla",
    popular: true,
  },
  {
    name: "İşletme (Enterprise)",
    id: "business",
    badge: "Büyük Restoranlar",
    priceMonthly: "₺2.450",
    priceYearly: "₺1.950",
    description: "Yoğun hacimli restoranlar, otel tesisleri ve gelişmiş analitik ile yapay zeka araçları arayan ekipler için.",
    features: [
      "Sınırsız POS & Mobil Garson Terminali",
      "Çoklu Mutfak / Bar KDS Ekranları",
      "Oxonom AI Studio (Menü & Görsel Araçları)",
      "Çoklu Birimli Gelişmiş Envanter & Zayi",
      "Saatlik Yoğunluk & Kar Marjı Analizleri",
      "Özelleştirilebilir Rol ve Yetki Matrisi",
      "Özel Müşteri Temsilcisi",
      "API & Veri Entegrasyon Desteği",
    ],
    cta: "Demo Talep Et",
    popular: false,
  },
  {
    name: "Zincir & Franchise",
    id: "chain",
    badge: "Çok Şubeli",
    priceMonthly: "Özel Fiyat",
    priceYearly: "Özel Fiyat",
    description: "Birden fazla şubeyi tek merkezden yöneten zincir restoran markaları ve franchise yapıları.",
    features: [
      "Tüm Şubeler İçin Merkezi Yönetim Konsolu",
      "Tek Tıkla Toplu Menü ve Fiyat Güncelleme",
      "Şubeler Arası Stok Transfer & Konsolide Alım",
      "Üst Yönetim Karşılaştırmalı Şube Ciro Analizi",
      "Özel Sunucu & SLA Garantisi",
      "Yerinde Kurulum ve Personel Eğitimi",
    ],
    cta: "Satış Ekibiyle Görüş",
    popular: false,
  },
];

export const operationalScenarios = [
  {
    title: "Cuma Akşamı Yoğun Servis Saatinde",
    desc: "Salonda 40 masa aynı anda dolu. Garsonlar masada siparişi girdiği anda mutfaktaki KDS ekranı 'Masa 14: 2x Bonfile, Az Pişmiş' uyarısı verir. Adisyonlar karışmaz, garson mutfağa koşmak zorunda kalmaz.",
    tag: "Servis Hızı",
  },
  {
    title: "Mevsimlik Menü Değişiminde",
    desc: "Yaz menüsüne geçerken 30 yeni ürün eklemeniz gerekiyor. Eski PDF menünüzü Oxonom AI Studio'ya yüklersiniz; tüm ürünler, fiyatlar ve açıklamalar 1 dakikada sisteme aktarılır, anında QR menüye yansır.",
    tag: "AI Menü Dönüşümü",
  },
  {
    title: "Gece 01:00 Gün Sonu Kapanışında",
    desc: "Kasadaki nakit, kredi kartı ve yemek kartı slipleri sayılır. 7 Bölümlü Z Raporu ekranında nakit farkı '₺0,00' olarak teyit edilir. İptal edilen ürünlerin gerekçeleri ve onaylayan yetkililer tek ekranda denetlenir.",
    tag: "Kusursuz Kasa Mutabakatı",
  },
  {
    title: "Haftalık Stok ve Reçete Kontrolünde",
    desc: "Hafta boyunca satılan 450 adet hamburger için et, ekmek ve peynir stokları otomatik düşmüştür. Depodaki fiziki sayım yapıldığında reçeteli sistem sayesinde kaçak ve zayi sıfıra yakın oranda tespit edilir.",
    tag: "Maliyet Kontrolü",
  },
];

export const faqsData = [
  {
    q: "Oxonom POS nedir ve hangi işletmeler için uygundur?",
    a: "Oxonom POS; restoran, kafe, bar, fast food, pastane, paket servis ve zincir işletmeler için geliştirilmiş bulut tabanlı bir restoran operasyon platformudur. Yalnızca sipariş almakla kalmaz; mutfak ekranı, QR menü, self-order, stok reçete, personel, CRM ve Z raporunu tek bir sistemde birleştirir.",
  },
  {
    q: "Bilgisayara veya sunucuya fiziksel kurulum yapılması gerekiyor mu?",
    a: "Hayır. Oxonom POS %100 bulut tabanlıdır. Herhangi bir Windows bilgisayar, Android tablet, iPad, dokunmatik POS terminali veya akıllı telefon üzerinden web tarayıcısıyla anında çalışır.",
  },
  {
    q: "İnternet bağlantısı kesilirse satış yapmaya devam edebilir miyim?",
    a: "Evet. Oxonom POS çevrimdışı mimari desteğine sahiptir. Geçici internet kesintilerinde sipariş ve adisyon işlemleriniz devam eder, bağlantı geldiğinde tüm veriler buluta otomatik eşitlenir.",
  },
  {
    q: "QR Menü ve QR Sipariş için müşterilerin uygulama indirmesi gerekir mi?",
    a: "Kesinlikle hayır. Müşteriler masadaki QR kodu telefon kameralarıyla okutur ve menü doğrudan Safari veya Chrome üzerinde saniyeler içinde açılır. İsterlerse garson beklemeden doğrudan sipariş verebilirler.",
  },
  {
    q: "QR kod ile masadan verilen sipariş mutfağa otomatik gider mi?",
    a: "Evet. Müşteri sepetini onayladığında sipariş doğrudan Mutfak Ekranına (KDS) düşer ve aynı zamanda masanın aktif adisyonuna eklenir. Garsonun siparişi yeniden girmesine gerek kalmaz.",
  },
  {
    q: "Mutfak Ekranı (KDS) tam olarak nasıl çalışır?",
    a: "Gelen siparişler 'Bekliyor', 'Hazırlanıyor' ve 'Servise Hazır' olarak 3 aşamada listelenir. Hazırlık süresi uzayan siparişlerde ekran sarı/kırmızı renk uyarısı verir. Hazır olduğunda garsona sesli bildirim gider.",
  },
  {
    q: "Satış yapıldığında stoktan hammadde otomatik olarak düşer mi?",
    a: "Evet. Örneğin menünüzdeki 'Cheeseburger' ürününe reçete tanımladığınızda (1 adet hamburger ekmeği, 150 gr köfte, 1 dilim cheddar); ürün satıldığı anda bu hammaddeler stok deponuzdan anlık olarak gramaj bazında düşülür.",
  },
  {
    q: "Masa hesabı ödenirken parçalı veya karma ödeme yapılabilir mi?",
    a: "Evet. Masadaki hesap tek tıkla bölünebilir. Örneğin ₺1.500 tutarındaki bir adisyonun ₺500'si nakit, ₺700'si kredi kartı, kalan ₺300'si yemek kartı ile tek ekranda tahsil edilebilir.",
  },
  {
    q: "Personelimin yetkilerini sınırlandırabilir miyim?",
    a: "Evet. Kasiyer, Garson, Aşçı ve Yönetici gibi rollere göre sayfa ve işlem bazında kısıtlamalar yapabilirsiniz. Örneğin adisyondan ürün silme (VOID) veya indirim yapma yetkisi sadece yönetici PIN şifresiyle onaylanabilir.",
  },
  {
    q: "Z Raporu sistemi mali ve denetimsel olarak neleri kapsar?",
    a: "Oxonom POS 7 Bölümlü Z Raporu; kasa nakit mutabakatını, KDV dilimleri matrahını, gün boyu yapılan tüm iptal/ikram loglarını, personel satış performansını ve önceki günlerin arşivini eksiksiz sunar.",
  },
  {
    q: "Oxonom AI Studio özellikleri nelerdir?",
    a: "Yapay zeka modülümüz; elinizdeki basılı veya PDF menüyü tek tıkla dijital ürün listesine çevirir, yemekleriniz için stüdyo kalitesinde gerçekçi ürün fotoğrafları üretir ve menü açıklamaları hazırlar.",
  },
];
