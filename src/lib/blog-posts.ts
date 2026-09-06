export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  category: string;
  readingTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "yeni-nesil-restoran-yonetimi",
    title: "Bulut Tabanlı POS ile Restoran Operasyonunda Verimliliği Artırma Rehberi",
    excerpt:
      "Eski nesil hantal kasalardan bulut mimarisine geçişin restorana sağladığı hız, mobilite, maliyet avantajı ve denetim kolaylığı.",
    date: "14 Ağustos 2026",
    dateISO: "2026-08-14",
    category: "Restoran Yönetimi",
    readingTime: "4 dk okuma",
  },
  {
    slug: "mutfak-ekrani-kds-rehberi",
    title: "Mutfak Ekranı (KDS) Nedir ve Kağıt Bilet Karmaşasını Nasıl Bitirir?",
    excerpt:
      "Mutfak Ekranı Sistemi (KDS) ile hazırlık sürelerini kısaltma, gecikme uyarıları ve istasyon bazlı sipariş yönlendirme.",
    date: "28 Temmuz 2026",
    dateISO: "2026-07-28",
    category: "Mutfak Operasyonu",
    readingTime: "3 dk okuma",
  },
  {
    slug: "restoranda-akilli-recete-ve-stok",
    title: "Satışla Birlikte Otomatik Stok Düşümü: Kaçak ve Fireleri Sıfırlama",
    excerpt:
      "Restoranlarda porsiyon ve reçete entegrasyonu ile hammadde maliyeti kontrolü, gramaj takibi ve anlık envanter yönetimi.",
    date: "10 Temmuz 2026",
    dateISO: "2026-07-10",
    category: "Stok Yönetimi",
    readingTime: "4 dk okuma",
  },
];
