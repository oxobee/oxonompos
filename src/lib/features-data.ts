export interface FeatureCategory {
  id: string;
  categoryName: string;
  description: string;
  features: {
    name: string;
    description: string;
    badge?: string;
  }[];
}

export const allFeaturesDirectory: FeatureCategory[] = [
  {
    id: "siparis-masa",
    categoryName: "Sipariş & Masa Yönetimi",
    description: "Salondaki masaları, adisyonları ve sipariş akışını canlı yönetin.",
    features: [
      { name: "Görsel Kat Planı", description: "İşletmenizin salon, bahçe, teras gibi alanlarına göre özelleştirilebilir masa haritası." },
      { name: "Canlı Doluluk Takibi", description: "Boş, dolu, hesap istendi, ikram bekliyor gibi renk kodlu anlık masa durumları." },
      { name: "Masa Taşıma & Birleştirme", description: "Masalar arası adisyon aktarımı veya kalabalık gruplar için masa birleştirme." },
      { name: "Adisyon Bölme (Split Bill)", description: "Masadaki hesabı kişi başı, sipariş bazlı veya eşit tutarlara bölerek tahsil etme." },
      { name: "VOID & İptal Yönetimi", description: "Hatalı girilen siparişlerin yönetici PIN onayı ve gerekçe seçimiyle güvenli iptali." },
      { name: "İkram (Comp) & İndirim Takibi", description: "Yüzdesel veya tutarsal indirimlerin mali loglarla adisyona yansıtılması." },
      { name: "Paket & Gel-Al Modu", description: "Masasız, doğrudan müşteri adı veya sipariş numarasıyla hızlı paket adisyonu." },
    ],
  },
  {
    id: "menu-yonetimi",
    categoryName: "Menü Yönetimi",
    description: "Kategoriler, varyantlar, ekstralar ve reçete bağlantıları.",
    features: [
      { name: "Sınırsız Kategori & Ürün", description: "Hiyerarşik ana ve alt kategori yapısıyla binlerce ürünü kolayca organize edin." },
      { name: "Varyant & Porsiyonlar", description: "Küçük, Orta, Büyük veya 1 Porsiyon / 1.5 Porsiyon gibi farklı fiyatlı seçenekler." },
      { name: "Modifier & Ekstra Grupları", description: "Örn: 'Pişme Derecesi: Az, Orta, Çok' veya 'Ekstra Peynir, Sos' gibi dinamik seçenekler." },
      { name: "86 Sistemi (Hızlı Tükendi)", description: "Mutfağın bittiğini bildirdiği ürünleri tek tuşla tüm menülerde satışa kapatma." },
      { name: "Saatlik Müsaitlik", description: "Sadece kahvaltı saatlerinde (08:00 - 12:00) aktif olan menü kuralları." },
      { name: "Ürün Kopyalama", description: "Benzer ürünleri saniyeler içinde yeni varyantlarla klonlayarak zaman kazanın." },
    ],
  },
  {
    id: "stok-envanter",
    categoryName: "Stok & Envanter",
    description: "Reçeteli otomatik düşüm, sayım, fire ve maliyet kontrolü.",
    features: [
      { name: "Reçeteli Otomatik Düşüm", description: "Satılan her tabak için belirlenen gramajdaki hammadde anında stoktan düşer." },
      { name: "Çoklu Birim Desteği", description: "Gram, kilogram, litre, koli, adet ve porsiyon bazında esnek envanter takibi." },
      { name: "Kritik Stok Uyarıları", description: "Belirlenen eşik değerin altına inen hammaddeler için anlık sistem bildirimi." },
      { name: "Mal Kabul & Alım Faturaları", description: "Tedarikçiden gelen ürünlerin birim fiyat ve miktarlarıyla sisteme girişi." },
      { name: "Fire & Zayi Kayıtları", description: "Bozulma, dökülme veya personel yemeği gibi tüketimlerin stoktan gerekçeli düşümü." },
      { name: "Stok Sayımı & Fark Raporu", description: "Depo fiziki sayımı ile sistem stoğu arasındaki farkların analizi." },
    ],
  },
  {
    id: "mutfak-kds",
    categoryName: "Mutfak Ekranı (KDS)",
    description: "Kağıt bilet karmaşasına son veren dijital mutfak yönetimi.",
    features: [
      { name: "3 Aşamalı Sipariş Takibi", description: "Gelen siparişler: 'Bekliyor' → 'Hazırlanıyor' → 'Servise Hazır' akışıyla yönetilir." },
      { name: "Hazırlık Süresi Sayacı", description: "Siparişin kaç dakikadır beklediğini gösteren sayaç ve gecikme renk uyarıları." },
      { name: "Sesli & Görsel Uyarılar", description: "Yeni sipariş düştüğünde mutfak personelini uyaran yüksek tonlu sesli bildirim." },
      { name: "İstasyon Bazlı Yönlendirme", description: "İçeceklerin bara, ızgaraların sıcak mutfağa, tatlıların soğuk tezgaha gitmesi." },
      { name: "QR Self-Order Rozeti", description: "Müşterinin doğrudan masadan verdiği siparişlerin ekranda özel rozetle belirtilmesi." },
    ],
  },
  {
    id: "musteri-crm",
    categoryName: "Müşteri CRM & Sadakat",
    description: "Müşterilerinizi tanıyın, sipariş alışkanlıklarını analiz edin.",
    features: [
      { name: "Müşteri Profili & İletişim", description: "Telefon numarası ile anında adres, isim ve geçmiş sipariş geçmişi görünümü." },
      { name: "Harcama & Ziyaret Sıklığı", description: "Toplam harcama tutarı, ortalama sepet hacmi ve son ziyaret tarihi takibi." },
      { name: "Özel İndirim Tanımlama", description: "VIP müşterilere veya kurumsal anlaşmalara özel sabit veya yüzdesel indirim." },
      { name: "Doğum Günü Kutlamaları", description: "Müşterinin doğum gününde adisyona özel otomatik ikram veya tebrik bildirimi." },
      { name: "Müşteri Notları", description: "Örn: 'Gluten alerjisi var', 'Bahçede 12 numaralı masayı sever' gibi operasyonel notlar." },
    ],
  },
  {
    id: "personel",
    categoryName: "Personel & Yetkilendirme",
    description: "Roller, PIN güvenliği, vardiya ve performans ölçümü.",
    features: [
      { name: "Rol Bazlı İzin Matrisi", description: "Yönetici, Kasiyer, Garson ve Aşçı için ayrı ayrı sayfa ve işlem yetkileri." },
      { name: "4 Haneli Hızlı PIN Girişi", description: "Personelin saniyeler içinde şifresiyle oturum açıp işlem yapabilmesi." },
      { name: "Otomatik Terminal Kilidi", description: "İşlem bittiğinde ekranın otomatik kilitlenerek yetkisiz erişimi engellemesi." },
      { name: "Garson Satış Performansı", description: "Hangi personelin ne kadar ciro yaptığı, adisyon kapatma süresi ve masa sayısı." },
      { name: "Bölge & Masa Atama", description: "Garsonların yalnızca sorumlu oldukları salon veya masaları görebilmesi." },
    ],
  },
  {
    id: "raporlama-z",
    categoryName: "Analitik & 7 Bölümlü Z Raporu",
    description: "Detaylı finansal mutabakat, KDV, satış ve personel analizleri.",
    features: [
      { name: "Nakit Mutabakat & Kasa Farkı", description: "Açılış kasası, tahsilat, gider ve fiziki sayım arasındaki kuruşu kuruşuna denetim." },
      { name: "Mali KDV Matrah Dökümü", description: "%1, %10 ve %20 KDV dilimlerine göre net matrah ve vergi toplamları." },
      { name: "Saatlik Trafik Analizi", description: "Günün hangi saatlerinde kaç masa açıldığını gösteren yoğunluk ısı haritası." },
      { name: "En Çok Satan Ürünler", description: "Ciroya ve adede göre en popüler lezzetler ve kar marjı sıralaması." },
      { name: "Denetim & Güvenlik Logları", description: "Tüm adisyon açma, ürün silme, indirim ve hesap kapatma saat/personel kayıtları." },
      { name: "Geçmiş Z Raporları Arşivi", description: "Bulutta sonsuza kadar saklanan, tek tıkla Excel veya PDF'e aktarılan raporlar." },
    ],
  },
  {
    id: "yapay-zeka",
    categoryName: "Oxonom AI Studio",
    description: "Restoran dünyasına özel yapay zeka araçları.",
    features: [
      { name: "Menü Fotoğraf/PDF'ten Ürün Çıkarma", description: "Basılı menünün fotoğrafını çekip sisteme yükleyin; tüm ürünler ve fiyatlar saniyeler içinde dijitalleşsin." },
      { name: "AI Yemek Görseli Üretimi", description: "Görseli olmayan menü ürünleriniz için iştah açıcı ve profesyonel yemek fotoğrafları üretin." },
      { name: "Fotoğraf Profesyonelleştirme", description: "Telefonla çekilen sade tabak fotoğraflarını stüdyo aydınlatmalı katalog görseline dönüştürün." },
      { name: "Akıllı Menü Açıklamaları", description: "Yemekleriniz için lezzet dolu menü metinleri, kalori tahminleri ve alerjen etiketleri oluşturun." },
    ],
  },
];
