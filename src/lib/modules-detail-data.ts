export interface ModuleDetail {
  slug: string;
  name: string;
  category: "ai" | "loyalty" | "display";
  categoryTitle: string;
  badge: string;
  isComingSoon?: boolean;
  shortDescription: string;
  heroSubtitle: string;
  fullDescription: string;
  imageSrc: string;
  mockupType: "browser" | "phone";
  browserUrl?: string;
  hasVideo?: boolean;
  features: { title: string; desc: string }[];
  steps: { step: string; title: string; desc: string }[];
  metrics: { value: string; label: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const modulesDetailList: ModuleDetail[] = [
  // 1. QR Menüdeki Yapay Zeka
  {
    slug: "qr-menudeki-yapay-zeka",
    name: "QR Menüdeki Yapay Zeka",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "Akıllı Garson Asistanı",
    shortDescription: "QR menüde müşterilere yemek öneren, sipariş ve içerik sorularını anında yanıtlayan akıllı garson asistanı.",
    heroSubtitle: "Misafirleriniz garson beklemeden damak tadına, bütçesine veya alerjilerine uygun yemeği yapay zekaya sorup saniyeler içinde sipariş versin.",
    fullDescription: "QR Menüdeki Yapay Zeka modülü, her misafirin masasında 7/24 hizmet veren uzman bir gurme garson gibi çalışır. Masadaki QR kodu okutan müşteri, 'Glutensiz ve hafif ne var?', 'Acısız tavuk yemeği önerir misin?' veya 'Bu makarnanın yanına hangi içecek yakışır?' gibi sorular sorduğunda yapay zeka menünüzü tarar ve en doğru önerileri yapar.",
    imageSrc: "/images/qr-menu-mobile-real.png",
    mockupType: "phone",
    hasVideo: true,
    features: [
      {
        title: "Kişiselleştirilmiş Gurme Tavsiyeleri",
        desc: "Müşterinin damak zevkine, açlık durumuna veya tercih ettiği protein türüne göre anında nokta atışı yemek önerileri sunar.",
      },
      {
        title: "Alerjen ve Diyet Filtreleme",
        desc: "Gluten, laktoz, fındık, deniz ürünü gibi alerjen hassasiyeti olan ya da vegan/keto beslenen misafirler için güvenli alternatifleri listeler.",
      },
      {
        title: "Çapraz Satış & İçecek Eşleştirme",
        desc: "Seçilen ana yemeğe en çok yakışan yan lezzetleri, tatlıları ve şarap/kahve eşleşmelerini önererek sepet ortalamasını yükseltir.",
      },
      {
        title: "Çoklu Dil Desteği (Turist Dostu)",
        desc: "Yabancı turistler kendi dillerinde (İngilizce, Rusça, Arapça, Almanca) soru sorduğunda akıcı ve doğal dille cevap verir.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "QR Kod Taranır",
        desc: "Misafir masadaki QR kodu kamerasıyla okutur, hiçbir uygulama indirmeden dijital menüye girer.",
      },
      {
        step: "02",
        title: "Doğal Dille Soru Sorulur",
        desc: "Menü ekranındaki asistan butonuna basarak ister yazarak ister sesli olarak yemek tercihlerini belirtir.",
      },
      {
        step: "03",
        title: "Tek Tıkla Sepete Eklenir",
        desc: "Asistanın önerdiği yemekleri doğrudan sepete ekleyerek mutfağa sipariş gönderir.",
      },
    ],
    metrics: [
      { value: "%28", label: "Sepet Ortalaması Artışı", desc: "Doğru yan ürün ve tatlı eşleştirmeleriyle artan harcama" },
      { value: "0 sn", label: "Garson Bekleme Süresi", desc: "Müşteri menü hakkında anında bilgi alır" },
      { value: "%60", label: "Garson İş Yükü Azalması", desc: "İçerik ve öneri soruları tamamen otomatize olur" },
    ],
    faqs: [
      {
        q: "Müşterilerin uygulamayı indirmesi gerekir mi?",
        a: "Hayır. Oxonom QR Menü Asistanı tamamen mobil web tarayıcısında çalışır. Uygulama indirme veya üyelik gerektirmez.",
      },
      {
        q: "Asistan menümdeki değişiklikleri nasıl öğrenir?",
        a: "Oxonom POS yönetim panelinde bir ürün güncellendiğinde veya tükendiğinde yapay zeka asistanı anında bu bilgiyi öğrenir ve tükenen ürünü önermez.",
      },
      {
        q: "Yabancı dil desteği var mı?",
        a: "Evet, Türkçe haricinde İngilizce, Almanca, Rusça, Arapça ve Fransızca dahil 15+ dilde anlık iletişim kurabilir.",
      },
    ],
  },

  // 2. Admin Panelindeki Yapay Zeka
  {
    slug: "admin-panelindeki-yapay-zeka",
    name: "Admin Panelindeki Yapay Zeka",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "Yönetici & Garson Operasyon Zekası",
    shortDescription: "Yönetici için anlık ciro ve Z Raporu sorgusu; garson için sesli sipariş alma ve rol tabanlı güvenlik sağlayan akıllı POS asistanı.",
    heroSubtitle: "Sesli komutla masaya saniyeler içinde sipariş ekleyin, anlık ciro ve açık hesapları sorgulayın; rol tabanlı yetki kalkanıyla işletme verilerinizi koruyun.",
    fullDescription: "Oxonom POS Asistan; hem işletme sahipleri hem de salon çalışanları için tasarlanmış çift yönlü bir yapay zeka operasyon merkezidir. Yöneticiler 'Bugünkü toplam ciro ne kadar?' diye sorarak anlık açık hesapları (₺2.815) ve finansal raporları incelerken; garsonlar el terminalinden mikrofona basarak 'Masa 5'e 4 çay ekle' diyebilir. Rol Tabanlı Güvenlik (RBAC) sayesinde garsonların ciro ve ayarlara erişimi engellenir, çift kontrol görsel onay kartlarıyla sıfır hatalı sipariş güvencesi sunulur.",
    imageSrc: "/images/admin-ai-order-confirm.png",
    mockupType: "phone",
    browserUrl: "app.oxonompos.com/ai-assistant",
    features: [
      {
        title: "Sesli Sipariş Alma (Speech-to-Text)",
        desc: "Garson mikrofona basarak 'Masa 5'e 4 çay ekle' der. Yapay zeka restoran uğultusunu filtreler, ses dalgalarını analiz eder ve saniyeler içinde siparişe dönüştürür.",
      },
      {
        title: "Görsel Sipariş Onay Kartı & Çift Kontrol",
        desc: "Sipariş yazılmadan önce 'Ürün: Çay, Miktar: 4 Adet, Tutar: ₺160' onay kartı çıkarılır. Tek dokunuşla doğrulanıp mutfak ekranına (KDS) ve masaya işlenir.",
      },
      {
        title: "Rol Tabanlı Güvenlik Kalkanı (RBAC)",
        desc: "Garson sistem ayarlarını veya ciro bilgilerini sorguladığında asistan işlemi bloke eder ve personeli yetkili olduğu Masalar & Adisyon ekranına yönlendirir.",
      },
      {
        title: "Canlı Ciro & Açık Masa İstihbaratı",
        desc: "Masalarda bekleyen açık adisyon toplamlarını, nakit/kredi kartı tahsilatlarını ve Z Raporunu yöneticilere anında tek cümleyle raporlar.",
      },
      {
        title: "Derin Sistem Bağlantıları (Deep Linking)",
        desc: "Yapay zeka sadece bilgi vermez; 'Finansal Raporlar' veya 'Masalar' sayfasına tek tıkla doğrudan yönlendiren interaktif butonlar üretir.",
      },
      {
        title: "Hızlı Soru Çipleri & Çoklu Rol",
        desc: "Kullanıcının yönetici ya da garson yetkisine göre 'Boş masaları göster', 'Mutfak durumunu göster' veya 'Z Raporu nedir?' gibi hazır aksiyonlar sunar.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Konuşun veya Yazın",
        desc: "İster mikrofona basıp 'Masa 5'e 4 çay ekle' deyin, ister ciro ve masa durumunu klavyeden yazın.",
      },
      {
        step: "02",
        title: "Yetki & Veri Denetimi",
        desc: "Yapay zeka personelin rolünü doğrular; garson için yetki kalkanı, yönetici için finansal sentez uygular.",
      },
      {
        step: "03",
        title: "Onay Kartı & Anlık Aksiyon",
        desc: "Siparişi görsel onay kartıyla mutfağa iletir ya da doğrudan ilgili rapor sayfasına tek tıkla yönlendirir.",
      },
    ],
    metrics: [
      { value: "< 1 sn", label: "Yanıt Süresi", desc: "Sorunun sorulmasından cevabın üretilmesine geçen süre" },
      { value: "%100", label: "Veri Doğruluğu", desc: "Doğrudan POS veritabanı ile canlı entegre çalışma" },
      { value: "7/24", label: "Kesintisiz Danışman", desc: "Mobil veya webden her an ulaşılabilir operasyon zekası" },
    ],
    faqs: [
      {
        q: "Yapay zeka verilerimi dışarı aktarır mı?",
        a: "Hayır. Tüm verileriniz işletmenize özel şifreli ortamda işlenir; üçüncü taraflarla kesinlikle paylaşılmaz.",
      },
      {
        q: "Cep telefonumdan da kullanabilir miyim?",
        a: "Evet. Admin panelinizin mobil görünümünde de asistan tam fonksiyonel olarak çalışır.",
      },
    ],
  },

  // 3. Yapay Zeka ile Menü İçe Aktar
  {
    slug: "yapay-zeka-ile-menu-ice-aktar",
    name: "Yapay Zeka ile Menü İçe Aktar",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "Fotoğraftan Otomatik Menü",
    shortDescription: "Fiziksel kağıt menü fotoğrafından, PDF veya metinden saniyeler içinde kalori, alerjen ve fiyatlarıyla eksiksiz dijital menü oluşturma.",
    heroSubtitle: "Tek tek yüzlerce ürün ve fiyat yazma eziyetine son; masadaki menünün fotoğrafını çekin, yapay zeka saniyeler içinde dijital menünüzü çıkarsın.",
    fullDescription: "Yeni bir restoran açarken veya sezonluk menü güncellerken onlarca ürün adını, gramajını, açıklamasını ve fiyatını tek tek yazmak saatler sürer. Yapay Zeka ile Menü İçe Aktar modülü; ister telefonla çektiğiniz kağıt menü fotoğrafını, ister çok sayfalı PDF veya kopyala-yapıştır metinleri akıcı tarama çizgileriyle analiz eder. Kahveler, Tatlılar, Atıştırmalıklar gibi kategorileri, ürün fiyatlarını, tahmini kalorileri ve vejetaryen/alerjen bilgilerini otomatik olarak çıkartıp tek tıkla hem POS'a hem QR menüye aktarır.",
    imageSrc: "/images/menu-import-results.png",
    mockupType: "browser",
    browserUrl: "app.oxonompos.com/ai-studio/menu-import",
    features: [
      {
        title: "Fotoğraf, PDF ve Metin Desteği",
        desc: "İster cep telefonuyla çekilmiş kağıt menü fotoğrafı, ister PDF kataloğu, ister kopyalanmış düz metin listesi yükleyin.",
      },
      {
        title: "Otomatik Kategori ve Ürün Ayrıştırma",
        desc: "Yapay zeka başlıkları kategoriye (Kahveler, Tatlılar, Atıştırmalıklar vb.), alt satırları ürün adı ve fiyatlarına hatasız böler.",
      },
      {
        title: "Kalori, Süre ve Vejetaryen Tahmini",
        desc: "Yemek içeriğini analiz ederek tahmini kalori (ör. 5 kcal), hazırlık süresi (5 dk) ve beslenme türü (🌱 Vejetaryen) etiketlerini otomatik atar.",
      },
      {
        title: "Alerjen Tespiti (Gluten, Süt vb.)",
        desc: "Ürün açıklamasında geçen malzemeleri tarayarak olası alerjenleri müşterilerinizin güvenliği için otomatik işaretler.",
      },
      {
        title: "İnteraktif Kontrol ve Düzenleme Tablosu",
        desc: "Çıkarılan tüm ürünler onay öncesinde önünüze gelir; fiyatları, isimleri veya kategorileri tek dokunuşla düzenleyebilirsiniz.",
      },
      {
        title: "Tek Tıkla POS ve QR Menüye Aktarım",
        desc: "'Onayla ve Menüye Ekle' butonuna bastığınız anda tüm menü kasa sisteminize ve masalardaki QR menülere canlı olarak aktarılır.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Fotoğraf Çekin veya Yükleyin",
        desc: "Masadaki kağıt menünün telefonla fotoğrafını çekin veya PDF dosyasını yükleme alanına bırakın.",
      },
      {
        step: "02",
        title: "Yapay Zeka Analiz Etsin",
        desc: "Gelişmiş vizyon modeli kategorileri, fiyatları, kalorileri ve açıklamaları saniyeler içinde ayıklar.",
      },
      {
        step: "03",
        title: "Onaylayın ve Yayına Alın",
        desc: "Listeyi kontrol edin ve 'Onayla ve Menüye Ekle' butonuna basarak POS ve QR menünüzü anında yayına alın.",
      },
    ],
    metrics: [
      { value: "3 sn", label: "Analiz Hızı", desc: "13+ ürünlük kafe menüsünün saniyeler içinde taranıp ayrıştırılması" },
      { value: "%99.4", label: "Tanıma Başarısı", desc: "Kırışık kağıt, loş ışık ve farklı fontlarda kusursuz okuma" },
      { value: "Sıfır", label: "Veri Giriş Eziyeti", desc: "Klavyeden tek tek ürün ve fiyat yazma zahmetinden tam kurtuluş" },
    ],
    faqs: [
      {
        q: "El yazısı ile yazılmış menüleri de okuyabilir mi?",
        a: "Yapay zeka net yazılmış el yazılarını ve tahta menüleri (kara tahta) yüksek başarıyla okuyabilmektedir.",
      },
      {
        q: "Menüyü içe aktardıktan sonra fiyatları değiştirebilir miyim?",
        a: "Elbette. İçe aktarılan tüm ürünler normal ürün kartı olarak kaydedilir ve dilediğiniz an panelden düzenlenebilir.",
      },
    ],
  },

  // 4. Yapay Zeka ile Görsel Oluştur
  {
    slug: "yapay-zeka-ile-gorsel-olustur",
    name: "Yapay Zeka ile Görsel Oluştur",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "Ürün Görseli Üretici",
    shortDescription: "Menüdeki yemek ve içecekler için yüksek çözünürlüklü, stüdyo kalitesinde gerçekçi ürün fotoğrafları üretme.",
    heroSubtitle: "Fotoğrafçı çağırmadan, stüdyo kurmadan menünüzdeki tüm yemekler için iştah kabartan, profesyonel tanıtım fotoğrafları üretin.",
    fullDescription: "Görseli olan yemeklerin sipariş edilme oranı, görselsiz olanlara göre %35 daha yüksektir. Ancak her yeni ürün için profesyonel yemek fotoğrafçısı tutmak ciddi maliyet ve zaman gerektirir. Bu modül, girdiğiniz yemek içeriği ve sunum tarzına göre stüdyo ışığında çekilmiş gibi kusursuz, fotogerçekçi görseller üretir.",
    imageSrc: "/images/ai-image-gen-iskender.jpg",
    mockupType: "browser",
    browserUrl: "app.oxonompos.com/ai-studio/generate",
    features: [
      {
        title: "Reçetenize ve Malzemelere %100 Sadık",
        desc: "Köz biber, süzme yoğurt, çıtır pide ve tereyağlı sos gibi malzemeleri tarifinize tam uygun şekilde fotogerçekçi modeller.",
      },
      {
        title: "6 Farklı Restoran & Çekim Stili",
        desc: "Beyaz stüdyo fonu, rustik ahşap sıcaklığı, Michelin minimalizmi veya koyu dramatik gurme; mekanınıza uygun konsepti seçin.",
      },
      {
        title: "1:1 Kare Menü Formatı & Yüksek Çözünürlük",
        desc: "Üretilen görseller hem QR menüde canlı ve net görünür hem de basılı menü ve afişlerde kullanılabilecek baskı kalitesindedir.",
      },
      {
        title: "Tek Tıkla Menüye ve POS'a Aktarma",
        desc: "Üretilen görsel tek dokunuşla QR menüye, garson el terminaline ve kasa POS sistemine otomatik olarak bağlanır.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Yemek Bilgilerini Girin",
        desc: "Ürünün adını, temel malzemelerini ve sunum detayını belirtin.",
      },
      {
        step: "02",
        title: "Stil Seçin ve Üretin",
        desc: "Stüdyo beyazı, bistro konsepti veya akşam yemeği atmosferi seçerek 'Üret' butonuna basın.",
      },
      {
        step: "03",
        title: "Menüye Ekleyin",
        desc: "Beğendiğiniz varyasyonu tek tıkla QR menü ve POS ürün görseli olarak kaydedin.",
      },
    ],
    metrics: [
      { value: "0 TL", label: "Fotoğrafçı Masrafı", desc: "Pahalı çekim günleri ve stüdyo kiralama masraflarına son" },
      { value: "5 sn", label: "Üretim Süresi", desc: "Yeni çıkan bir ürünün anında görselle donatılması" },
      { value: "%35", label: "Satış Hacmi Artışı", desc: "Görseli olan lezzetlerin sipariş edilme sıklığındaki artış" },
    ],
    faqs: [
      {
        q: "Görseller gerçek gibi görünüyor mu?",
        a: "Evet. En son nesil difüzyon modellerimiz yemek dokularını, sos parlaklıklarını ve buhar efektlerini gerçeğinden ayırt edilemeyecek doğallıkta üretir.",
      },
    ],
  },

  // 5. Fotoğrafları Profesyonelleştir
  {
    slug: "fotograflari-profesyonellestir",
    name: "Fotoğrafları Profesyonelleştir",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "Fotoğraf İyileştirici",
    shortDescription: "Telefonda çekilen amatör yemek fotoğraflarını yapay zeka ile profesyonel stüdyo ışığı ve netliğe kavuşturma.",
    heroSubtitle: "Akıllı telefonunuzla mutfakta çektiğiniz amatör fotoğrafları tek tıkla dergi kapağı kalitesinde stüdyo çekimine dönüştürün.",
    fullDescription: "Mutfakta alelacele çekilen fotoğraflarda kötü tavan ışığı, sarı gölgeler ve dağınık arka planlar yemeğin lezzetini gölgeler. Fotoğrafları Profesyonelleştir modülü, telefonla çekilen yemeğinizi arka plandan ayırır, stüdyo ışığı ekler, renk doygunluğunu ayarlar ve iştah açıcı bir sunuma dönüştürür.",
    imageSrc: "/images/food-enhance-after.jpg",
    mockupType: "browser",
    browserUrl: "app.oxonompos.com/ai-studio/photo-enhance",
    features: [
      {
        title: "Malzemeleri & Özgünlüğü Birebir Korur",
        desc: "Yapay zeka yemeğin kimliğini bozmaz; köftenin kızarma dokusu, eritilmiş peynir, domates ve susam tanelerini aslına sadık tutarak parlatır.",
      },
      {
        title: "Arka Plan Temizleme & Sonsuz Beyaz Stüdyo",
        desc: "Arkada görünen tuzluk, bardak, peçetelik veya masa lekesini siler; profesyonel stüdyo fonuna dönüştürür.",
      },
      {
        title: "Michelin Stüdyo Işığı & Doku Canlandırma",
        desc: "Yetersiz iç mekan aydınlatmasını profesyonel fotoğraf stüdyosu softbox ışığı ve canlı renk doygunluğuyla dengeler.",
      },
      {
        title: "Ekonomik Kredi Sistemi ile Anında Üretim",
        desc: "Pahalı çekim günleri yerine 20-40 AI kredisi ile saniyeler içinde stüdyo fotoğrafı elde edin.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Fotoğrafı Yükleyin",
        desc: "Telefonla masada veya tezgahta çektiğiniz fotoğrafı panele aktarın.",
      },
      {
        step: "02",
        title: "AI Otomatik İyileştirsin",
        desc: "Yapay zeka yemeği algılar, ışığı düzeltir ve arka planı temizler.",
      },
      {
        step: "03",
        title: "Önce / Sonra Kıyaslayın",
        desc: "Sonucu kontrol edin ve tek dokunuşla menünüze kaydedin.",
      },
    ],
    metrics: [
      { value: "10 Kat", label: "Daha Çekici Sunum", desc: "Amatör çekimden stüdyo kalitesine anında geçiş" },
      { value: "10 sn", label: "İşlem Süresi", desc: "Fotoğraf yüklemeden menüye eklemeye kadar geçen süre" },
      { value: "%100", label: "Mobil Uyumluluk", desc: "Doğrudan telefon kamerasından çekip yükleme imkanı" },
    ],
    faqs: [
      {
        q: "Çok karanlık fotoğrafları da düzeltebilir mi?",
        a: "Evet. Yapay zeka gelişmiş pozlama algoritmaları sayesinde karanlık veya sarı ışıklı fotoğrafları doğal gün ışığına çevirebilir.",
      },
    ],
  },

  // 6. Metin Yazarı ve Besin Analizi
  {
    slug: "metin-yazari-ve-besin-analizi",
    name: "Metin Yazarı ve Besin Analizi",
    category: "ai",
    categoryTitle: "Yapay Zeka & Akıllı Asistanlar",
    badge: "AI Metin Yazarı & Besin Analizi",
    shortDescription: "Yalnızca ürün adını ve malzemeleri yazın; yapay zeka 5 farklı tonda iştah açıcı açıklamalar, kalori ve alerjen analizleri üretsin.",
    heroSubtitle: "Sıradan yemek isimlerini ağız sulandıran hikayelere dönüştürün; porsiyonun kalorisini ve alerjenlerini tek dokunuşla menünüze ekleyin.",
    fullDescription: "Menüde sadece 'Trüflü Burger' yazmakla 'Dinlendirilmiş dana köftesi ve enfes trüf mantarının buluştuğu, damaklarda iz bırakan gurme bir deneyim' yazmak arasında sipariş oranında %35 fark vardır. AI Menü Metin Yazarı & Besin Analizi stüdyosu; İştah Kabartan, Gurme & Seçkin, Kısa & Net, Sağlıklı & Fit ve Hikaye Anlatımı olmak üzere 5 farklı tonda metinler üretir. Aynı zamanda 780 kcal gibi kalori analizleri, Gluten ve Laktoz gibi alerjen uyarıları ve 'Şefin Özel Seçimi' gibi dönüşüm artıran etiketler sunar.",
    imageSrc: "/images/ai-copywriter-result.png",
    mockupType: "browser",
    browserUrl: "app.oxonompos.com/ai-studio/copywriter",
    features: [
      {
        title: "5 Farklı Anlatım Tonu",
        desc: "İştah Kabartan, Gurme & Seçkin, Kısa & Net, Sağlıklı & Fit ve Hikaye Anlatımı modlarıyla mekanınızın tarzına özel metinler.",
      },
      {
        title: "İkili Açıklama Mimarisi (Kısa & Geniş)",
        desc: "QR menü kartları için tek cümlelik vurucu açıklama ve detay sayfası için ağız sulandıran geniş hikaye metni üretir.",
      },
      {
        title: "Otomatik Kalori & Besin Analizi",
        desc: "Gramaj ve pişirme tekniğine göre porsiyon kalorisini (ör. 780 kcal) veritabanından anında hesaplar.",
      },
      {
        title: "14 Temel Alerjen Uyarısı (Gluten, Laktoz vb.)",
        desc: "Malzemeleri tarayarak Gluten, Süt/Laktoz, Susam, Fıstık gibi alerjenleri misafir güvenliği için otomatik çıkarır.",
      },
      {
        title: "Dönüşüm Artıran Pazarlama Etiketleri",
        desc: "'Gurme Lezzet', 'Şefin Özel Seçimi', 'Trüf Aşkına' gibi dikkat çeken rozetlerle sepet büyüklüğünü artırır.",
      },
      {
        title: "Tek Tıkla Kopyala & Menüye Entegre Et",
        desc: "Üretilen metinleri tek tıkla kopyalayabilir veya doğrudan ilgili ürünün POS & QR menü kartına aktarabilirsiniz.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Ürün ve Malzemeleri Girin",
        desc: "Örn: 'Trüflü Dana Burger' ve '200 gr dinlendirilmiş dana köfte, trüf mantarı' yazın.",
      },
      {
        step: "02",
        title: "Anlatım Tonunu Seçin",
        desc: "İştah kabartan, gurme, kısa veya hikaye tonlarından restoranınıza en uygun olanı işaretleyin.",
      },
      {
        step: "03",
        title: "Açıklamalar ve Analizler Hazır",
        desc: "Yapay zeka 2 saniyede kısa menü metnini, geniş hikayeyi, kalori ve alerjen analizlerini üretir.",
      },
    ],
    metrics: [
      { value: "5 Ton", label: "Farklı Anlatım Stili", desc: "Mekanınızın tarzına göre özelleştirilebilir edebi ton" },
      { value: "2 sn", label: "Üretim Hızı", desc: "Zengin tanıtım metinlerinin ve kalori hesabının anında çıkması" },
      { value: "%35", label: "Sepet Artış Etkisi", desc: "İştah kabartan profesyonel açıklamaların satışa olumlu yansıması" },
      { value: "%100", label: "Şeffaf Müşteri Güveni", desc: "Besin değerlerini gören sporcu ve diyet yapan misafir memnuniyeti" },
    ],
    faqs: [
      {
        q: "Kalori hesaplaması ne kadar doğru?",
        a: "Hesaplama uluslararası gıda kodeksi standartlarına göre gramaj bazlı yapılır; reçetenize en yakın değerleri sunar.",
      },
    ],
  },

  // 7. Sadakat Modülü (Müşteri CRM & Doğum Günü Otomasyonu)
  {
    slug: "dogum-gunu-otomasyonu",
    name: "Sadakat Modülü (Müşteri CRM & İndirim)",
    category: "loyalty",
    categoryTitle: "Müşteri Sadakati, CRM & Büyüme",
    badge: "Müşteri Sadakati & CRM",
    shortDescription: "QR menüden kaydolan misafirleri yakından tanıyın; en çok ne sevdiklerini, ziyaret sıklığını ve harcamalarını takip edip doğum günlerinde otomatik indirim tanımlayın.",
    heroSubtitle: "Misafirlerinizin favori lezzetlerini ve harcama geçmişini tek ekranda görün; kişiye özel indirimler ve otomatik doğum günü tebrikleriyle müdavimler yaratın.",
    fullDescription: "Sadakat Modülü (CRM), restoranınızın müdavim ağını büyütmek için tasarlandı. Misafirler masadaki QR menü üzerinden hiçbir uygulama indirmeden telefon ve doğum günleriyle saniyeler içinde kulübünüze katılır. Panelinizde her müşterinin toplam kaç kez geldiği (ör. 4 kez), toplam ne kadar harcadığı (₺3.637,00) ve en çok hangi lezzeti sevdiği (ör. Burger Menü 6 kez) anında listelenir. Doğum gününden 7 gün önce otomatik tebrik mesajı gönderilir ve kasada hesap kapanırken %10 sadakat indirimi otomatik uygulanır.",
    imageSrc: "/images/loyalty-crm-customer-detail.png",
    mockupType: "browser",
    browserUrl: "app.oxonompos.com/customers-loyalty",
    features: [
      {
        title: "QR Menüden Uygulamasız Kolay Üyelik",
        desc: "Misafirler masada otururken telefon numarası ve doğum gününü girerek KVKK onaylı şekilde 5 saniyede sadakat kulübüne katılır.",
      },
      {
        title: "Kim Ne Seviyor? Lezzet Tercihi Takibi",
        desc: "Müşterinin en çok sipariş ettiği favori 3 lezzet (ör. Burger Menü 6 kez, Kutu Kola 4 kez) analiz edilerek kişiselleştirilmiş servis imkanı sunulur.",
      },
      {
        title: "Ziyaret Sıklığı & Harcama İstihbaratı",
        desc: "Müşterinin kaç kez geldiği, toplam bıraktığı ciro ve ortalama sepet tutarı (ör. ₺909,25) anlık müşteri kartında özetlenir.",
      },
      {
        title: "Otomatik Doğum Günü Tebriği & İndirim",
        desc: "Doğum gününden 7 gün önce misafirin cep telefonuna samimi kutlama mesajı ve özel indirim tanımlaması otomatik iletilir.",
      },
      {
        title: "Kasada Otomatik Uygulanan İndirimler",
        desc: "Garsonun hatırlamasına veya kupon kodu girmesine gerek kalmaz; kayıtlı müşterinin hesabı kapanırken %10 indirim otomatik düşer.",
      },
      {
        title: "Tarihsel Sipariş & Masa Geçmişi",
        desc: "Müşterinin daha önce hangi tarihte, hangi masada oturduğu ve adisyon detayları eksiksiz arşivlenir.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "QR Menüden 5 Saniyede Kayıt",
        desc: "Müşteri masada sipariş verirken telefon ve doğum gününü girerek sadakat kulübüne katılır.",
      },
      {
        step: "02",
        title: "Alışkanlıklar & Tercihler Kaydolur",
        desc: "Sistem müşterinin ne kadar harcadığını, ziyaret sıklığını ve favori lezzetlerini otomatik hafızaya alır.",
      },
      {
        step: "03",
        title: "Otomatik Kutlama & Sadakat İndirimi",
        desc: "Doğum gününde otomatik tebrik mesajı gider ve masada hesabı kapanırken sadakat indirimi otomatik uygulanır.",
      },
    ],
    metrics: [
      { value: "5 sn", label: "QR Üyelik Süresi", desc: "Uygulama indirmeden sadece telefon ve doğum günüyle hızlı kayıt" },
      { value: "%40", label: "Müdavim Ciro Artışı", desc: "Ziyaret sıklığı ve harcama geçmişi takip edilen müşterilerin sadakati" },
      { value: "%100", label: "Otomatik İndirim", desc: "Hesap kapanırken garsona ihtiyaç duymadan kasada otomatik düşüş" },
    ],
    faqs: [
      {
        q: "Kuponların kötüye kullanımını nasıl engelliyorsunuz?",
        a: "Her kod tek kullanımlıktır ve müşterinin telefon numarasına özel kilitlenir. Kullanıldığı anda sistemde kapatılır.",
      },
    ],
  },

  // 8. QR Menü Müşteri Giriş & Kayıt
  {
    slug: "qr-menu-musteri-giris-kayit",
    name: "QR Menü Müşteri Giriş & Sadakat Profili",
    category: "loyalty",
    categoryTitle: "Müşteri Sadakati, Otomasyon & Büyüme",
    badge: "Masa & Sadakat Profili",
    browserUrl: "menu.oxonompos.com/masa-11/profil",
    shortDescription: "Masadaki misafirin telefonla saniyeler içinde giriş yapıp sipariş geçmişini, favori lezzetlerini gördüğü, garson çağırdığı ve 5 yıldızlı değerlendirme yaptığı interaktif masa profili.",
    heroSubtitle: "Misafirlerinizi anonim olmaktan kurtarın; masada tek tıkla profil açsınlar, favori tatlarını görsünler, garson çağırıp Google Haritalar'da 5 yıldız versinler.",
    fullDescription: "Geleneksel restoranlarda masadaki misafirin kim olduğu, daha önce kaç kez geldiği veya ne sevdiği bilinmez. QR Menü Müşteri Giriş modülü sayesinde misafirler uygulama indirmeden saniyeler içinde masada oturum açar. Kaç kez geldiğini, en çok sevdiği yemekleri (ör. Burger Menü 6×), geçmiş siparişlerini görür; tek dokunuşla garson çağırabilir, Wi-Fi şifresini kopyalayabilir ve Google Haritalar'da işletmenize 5 yıldızlı yorum bırakabilir.",
    imageSrc: "/images/qr-profile-main.png",
    mockupType: "browser",
    features: [
      {
        title: "Şifresiz Giriş & Doğum Günü Rozeti",
        desc: "Uzun formlar olmadan telefon numarasıyla 10 saniyede giriş, doğum günü kayıt rozeti ve güvenli oturum.",
      },
      {
        title: "En Çok Sevdiğiniz Lezzetler & Sipariş Geçmişi",
        desc: "Misafirin en çok tükettiği favori yemekler (ör. Burger Menü 6×, Kutu Kola 4×) ve geçmiş fiş dökümleri anında ekranda.",
      },
      {
        title: "Masadan Tek Tıkla Garson Çağır & Wi-Fi",
        desc: "El sallama devri bitti; tek tuşla garson çağırma personeli masaya yönlendirir, Wi-Fi şifresi tek dokunuşla kopyalanır.",
      },
      {
        title: "5 Yıldızlı Değerlendirme & Sosyal Medya",
        desc: "Masadan kalkmadan servis ve lezzeti yıldızla puanlama, Instagram takibi ve Google Haritalar'da 5 yıldızlı yorum entegrasyonu.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "QR Menüde Giriş Yap",
        desc: "Müşteri menünün sağ üstündeki profil butonuna dokunarak telefon numarasını girer.",
      },
      {
        step: "02",
        title: "Sipariş Ver ve Puan Kazan",
        desc: "Verdiği her sipariş profiline işlenir ve anında sadakat puanı kazanır.",
      },
      {
        step: "03",
        title: "Puanları İndirime Dönüştür",
        desc: "Biriken puanlarını ister ücretsiz kahveye ister hesapta nakit indirime dönüştürür.",
      },
    ],
    metrics: [
      { value: "%44", label: "Tekrar Ziyaret Artışı", desc: "Puan biriktiren müşterilerin mekana tekrar gelme eğilimi" },
      { value: "10 sn", label: "Kayıt Olma Süresi", desc: "Şifresiz hızlı SMS ile sürtünmesiz üye kazanımı" },
      { value: "Zengin CRM", label: "Müşteri Veritabanı", desc: "İşletmenize ait binlerce kişilik sadık müşteri portföyü" },
    ],
    faqs: [
      {
        q: "Müşteriler bilgilerini girmeye çekinir mi?",
        a: "Şifresiz giriş ve anında puan/ikram vaadi sunulduğunda QR menü okutan kullanıcıların %70'ten fazlası giriş yapmaktadır.",
      },
      {
        q: "Puan kurallarını ben belirleyebilir miyim?",
        a: "Evet. Örneğin 'Her 100 ₺'ye 10 Puan' veya '10. Kahve Ücretsiz' gibi tüm sadakat kurallarını panelden serbestçe ayarlayabilirsiniz.",
      },
    ],
  },

  // 9. Dijital Menü Panosu
  {
    slug: "dijital-menu-panosu",
    name: "Dijital Menü Panosu",
    category: "display",
    categoryTitle: "Ekran & Dijital Yayıncılık",
    badge: "Çok Yakında",
    isComingSoon: true,
    shortDescription: "İşletmelerde TV ekranlarında kampanya, menü ve reklam içeriklerini tasarlamaya ve yayınlamaya yarayan, otomatik güncellenen animasyonlu TV menü panosu.",
    heroSubtitle: "Basılı panolara ve statik ekranlara son; yönetim panelinden tek tıkla otomatik güncellenen, iştah kabartan animasyonlu TV menü panoları tasarlayın.",
    fullDescription: "Geleneksel restoran ve kafelerde menü fiyatı değiştiğinde ya da yeni bir kampanya çıktığında basılı tabelaları değiştirmek yüksek maliyet ve zaman kaybıdır. Dijital Menü Panosu modülü sayesinde işletmenizdeki tüm televizyonları akıllı ve animasyonlu menü ekranlarına dönüştürebilirsiniz. Kasa POS sisteminizle senkronize çalışan sistem; fiyat değişimlerini ve tükenen ürünleri TV ekranına anında yansıtır, günün saatine göre kahvaltı/öğle/akşam menülerini otomatik olarak akışa alır.",
    imageSrc: "/images/food-enhance-after.jpg",
    mockupType: "browser",
    browserUrl: "app.oxonompos.com/tv-signage/menu-boards",
    features: [
      {
        title: "Yönetim Panelinden Kolay Tasarım",
        desc: "Grafik tasarımcıya gerek kalmadan hazır şablonlarla animasyonlu menü, kampanya ve reklam içeriklerini dakikalar içinde oluşturun.",
      },
      {
        title: "Otomatik Fiyat & Stok Senkronizasyonu",
        desc: "Kasa POS ve menünüzdeki fiyat değişiklikleri veya tükenen ürünler TV panolarına el sürmeden anında yansır.",
      },
      {
        title: "Canlı Kampanya & Akan Reklam Bandı",
        desc: "Ekranın altından veya köşelerinden akan dinamik animasyonlu bantlarla günün menüsünü, mutlu saatleri ve özel indirimleri duyurun.",
      },
      {
        title: "Günün Saatine Göre Otomatik Menü Değişimi",
        desc: "Sabah kahvaltı seçenekleri, öğlen hızlı yemekler, akşam ise gurme akşam menüsü saate göre otomatik olarak ekrana gelir.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Pano Şablonunuzu Seçin",
        desc: "Yönetim panelinden restoranınızın konseptine uygun animasyonlu TV şablonunu belirleyin.",
      },
      {
        step: "02",
        title: "Ürün & Kampanyaları Ekleyin",
        desc: "Öne çıkarmak istediğiniz lezzetleri, fiyatları ve alt reklam bandı metinlerini ayarlayın.",
      },
      {
        step: "03",
        title: "TV Ekranında Canlı Yayınlayın",
        desc: "Smart TV veya herhangi bir HDMI medya oynatıcı üzerinden tek tıkla canlı yayına başlayın.",
      },
    ],
    metrics: [
      { value: "%28", label: "Teşhir Satış Artışı", desc: "Hareketli ve iştah açıcı görsellerin sipariş kararına etkisi" },
      { value: "0 TL", label: "Baskı & Tabela Masrafı", desc: "Fiyat değişimlerinde yeniden baskı maliyetine son" },
      { value: "Anında", label: "Fiyat Senkronizasyonu", desc: "POS'ta değişen fiyatın TV'ye saniyeler içinde yansıması" },
    ],
    faqs: [
      {
        q: "Özel bir TV veya pahalı bir donanım gerekir mi?",
        a: "Hayır. Tarayıcısı olan herhangi bir Smart TV, Android TV Box, Apple TV veya HDMI stick ile doğrudan çalışır.",
      },
      {
        q: "İnternet kesilirse TV ekranı kapanır mı?",
        a: "Hayır. Çevrimdışı önbellekleme teknolojisi sayesinde internet kopsa dahi menü panosu kesintisiz olarak yayına devam eder.",
      },
    ],
  },

  // 10. Broşür Sihirbazı
  {
    slug: "brosur-sihirbazi",
    name: "Broşür Sihirbazı",
    category: "display",
    categoryTitle: "Baskı & Pazarlama Çözümleri",
    badge: "Çok Yakında",
    isComingSoon: true,
    shortDescription: "İşletmeler için dağıtıma ve baskıya hazır, menü fiyatlarıyla otomatik senkronize el broşürleri tasarlama aracı.",
    heroSubtitle: "Grafikere ihtiyaç duymadan matbaaya doğrudan verilebilecek 300 DPI CMYK el broşürlerinizi dakikalar içinde hazırlayın.",
    fullDescription: "Restoran ve kafeler için paket servis veya cadde dağıtımı broşürü hazırlamak artık zahmetsiz. Broşür Sihirbazı, POS sisteminizdeki yemek fotoğraflarını ve fiyatları otomatik çekerek hazır A5, kırımlı menü veya kapı askısı şablonlarına yerleştirir. Taşma ve kesim payları (+3mm bleed) profesyonelce ayarlanmış baskı dosyanızı tek tıkla matbaaya gönderin.",
    imageSrc: "/images/brosur-sihirbazi-ekran-deneyimi.jpg",
    mockupType: "browser",
    browserUrl: "app.oxonompos.com/marketing/brochure-wizard",
    features: [
      {
        title: "Matbaaya Doğrudan Hazır CMYK PDF",
        desc: "300 DPI yüksek çözünürlükte, kesim ve katlama çizgileri hazır profesyonel baskı dosyası.",
      },
      {
        title: "POS Menüsü ile Otomatik Eşleşme",
        desc: "Menü ürünleriniz ve güncel fiyatlarınız tek tuşla broşüre aktarılır, tek tek elle yazmaya gerek kalmaz.",
      },
      {
        title: "Farklı Katlama & Broşür Formatları",
        desc: "A5 tek sayfa, 3 kırımlı katlamalı menü ve kapı askılığı şablonları.",
      },
      {
        title: "QR Kodlu Doğrudan Sipariş Entegrasyonu",
        desc: "Broşürü eline alan müşteriyi doğrudan masanıza veya online paket servisinize bağlayan dinamik QR kod.",
      },
    ],
    steps: [
      { step: "01", title: "Format & Tema Seçin", desc: "Broşür boyutunu (A5, 3 Kırımlı) ve renk temanızı belirleyin." },
      { step: "02", title: "Menüyü Aktarın", desc: "Öne çıkarmak istediğiniz yemekleri ve indirim kuponunu ekleyin." },
      { step: "03", title: "Baskıya Gönderin", desc: "300 DPI CMYK PDF dosyasını indirip doğrudan matbaaya verin." },
    ],
    metrics: [
      { value: "0 TL", label: "Grafik Ajans Masrafı", desc: "Dışarıya tasarım yaptırma maliyetini sıfırlayın" },
      { value: "2 dk", label: "Tasarım Süresi", desc: "Hazır şablonlarla dakikalar içinde baskıya hazır sonuç" },
      { value: "%100", label: "Baskı Uyumluluğu", desc: "Kesim payı ve CMYK renk standartlarına tam uyum" },
    ],
    faqs: [
      {
        q: "Matbaam bu dosyayı sorunsuz basabilir mi?",
        a: "Evet. Uluslararası matbaa standartlarında 300 DPI çözünürlük, CMYK renk uzayı ve +3mm kesim payı otomatik uygulanır.",
      },
    ],
  },

  // 11. Sosyal Medya Sihirbazı
  {
    slug: "sosyal-medya-sihirbazi",
    name: "Sosyal Medya Sihirbazı",
    category: "display",
    categoryTitle: "Sosyal Medya & İçerik Üretimi",
    badge: "Çok Yakında",
    isComingSoon: true,
    shortDescription: "Menünüzdeki ürünlerle marka profilinize uygun profesyonel Instagram Post, Story ve hazır paylaşım metinleri üretme.",
    heroSubtitle: "Menüden yemeği seçin, stilinizi belirleyin; marka kimliğinize uygun Instagram görsellerini ve hazır açıklamalarını saniyeler içinde hazırlayın.",
    fullDescription: "Sosyal medyada düzenli ve profesyonel içerik paylaşmak restoranınızın doluluğunu doğrudan etkiler. Sosyal Medya Sihirbazı sayesinde ajans tutmadan, menünüzdeki yemekleri seçerek 1:1 kare feed gönderileri ve 9:16 dikey hikaye görselleri üretebilirsiniz. Yapay zeka yemeğinize uygun iştah açıcı gönderi açıklamaları ve popüler etiketleri de otomatik yazar.",
    imageSrc: "/images/sosyal-medya-sihirbazi-ekran-deneyimi.jpg",
    mockupType: "browser",
    browserUrl: "app.oxonompos.com/marketing/social-media-wizard",
    features: [
      {
        title: "1:1 Post & 9:16 Story Formatları",
        desc: "Instagram Feed, Reels kapağı ve Story formatlarına tam uyumlu yüksek çözünürlüklü görsel çıktısı.",
      },
      {
        title: "Yapay Zekalı Otomatik Metin & Hashtag",
        desc: "Seçtiğiniz lezzete özel iştah kabartan paylaşım metni ve etkileşim getiren popüler etiketler tek tıkla kopyalanır.",
      },
      {
        title: "Marka Kimliğine Uyumlu Tasarımlar",
        desc: "Restoran logonuz, renk paletiniz ve şablon stiliniz kurumsal kimliğinize sadık kalınarak işlenir.",
      },
      {
        title: "Menüden Tek Tıkla Ürün Seçimi",
        desc: "Öne çıkarmak istediğiniz yemeği menü listesinden seçin; fiyatı, görseli ve adı tasarıma anında yerleşsin.",
      },
    ],
    steps: [
      { step: "01", title: "Ürünü Seçin", desc: "Menünüzden paylaşmak istediğiniz lezzeti ve formatı (Post/Story) belirleyin." },
      { step: "02", title: "Stilinizi Belirleyin", desc: "Hafta sonu kampanyası, yeni lezzet veya günün menüsü konseptini seçin." },
      { step: "03", title: "Paylaşın & Büyüyün", desc: "Görseli ve hazır metni alarak Instagram ve Facebook'ta anında paylaşın." },
    ],
    metrics: [
      { value: "3 Kat", label: "Daha Fazla Etkileşim", desc: "Profesyonel yemek fotoğraflarının sosyal medya performansı" },
      { value: "30 sn", label: "İçerik Hazırlama Süresi", desc: "Görselden metne kadar tek ekranda hazır paylaşım" },
      { value: "%100", label: "Mobil & Masaüstü Uyum", desc: "Telefondan veya bilgisayardan doğrudan kullanım" },
    ],
    faqs: [
      {
        q: "Hikaye ve reels kapakları da yapabilir miyim?",
        a: "Evet. Tek tıkla 9:16 dikey formata geçerek Story ve Reels kapakları oluşturabilirsiniz.",
      },
    ],
  },
];
