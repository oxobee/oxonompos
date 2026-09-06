import Link from "next/link";
import { Sparkles, ShieldCheck, Cloud, Cpu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const footerGroups = [
    {
      title: "Ürün Modülleri",
      links: [
        { text: "POS & Satış Terminali", href: "/urun/pos" },
        { text: "Masa & Sipariş Yönetimi", href: "/urun/masa-siparis" },
        { text: "Dijital QR Menü", href: "/urun/qr-menu" },
        { text: "QR Self-Ordering", href: "/urun/self-order" },
        { text: "Mutfak Ekranı (KDS)", href: "/urun/kds" },
        { text: "Stok & Reçete Takibi", href: "/urun/stok-recete" },
        { text: "Müşteri CRM & Sadakat", href: "/urun/musteri-crm" },
        { text: "Personel & Yetki Yönetimi", href: "/urun/personel" },
        { text: "7 Bölümlü Z Raporu", href: "/urun/z-raporu" },
        { text: "Oxonom AI Studio", href: "/urun/yapay-zeka" },
      ],
    },
    {
      title: "Sektörel Çözümler",
      links: [
        { text: "Alakart Restoran", href: "/cozumler/restoran" },
        { text: "Kafe & 3. Nesil Kahve", href: "/cozumler/kafe" },
        { text: "Fast Food & QSR", href: "/cozumler/fast-food" },
        { text: "Paket Servis & Gel-Al", href: "/cozumler/paket-servis" },
        { text: "Otel, Resort & Tesis", href: "/cozumler/otel" },
        { text: "Zincir & Franchise", href: "/cozumler/zincir-isletme" },
      ],
    },
    {
      title: "Kaynaklar & Rehberler",
      links: [
        { text: "Tüm Özellikler Kataloğu", href: "/ozellikler" },
        { text: "Fiyatlandırma & Paketler", href: "/fiyatlandirma" },
        { text: "Restoran Yönetim Blogu", href: "/blog" },
        { text: "Ürün Güncellemeleri", href: "/guncellemeler" },
        { text: "Sıkça Sorulan Sorular", href: "/#faq" },
        { text: "Hakkımızda", href: "/hakkimizda" },
        { text: "İletişim & Destek", href: "/iletisim" },
      ],
    },
    {
      title: "Yasal & Güvenlik",
      links: [
        { text: "Gizlilik Politikası", href: "/gizlilik" },
        { text: "KVKK Aydınlatma Metni", href: "/kvkk" },
        { text: "Çerez Politikası", href: "/cerez-politikasi" },
        { text: "Kullanım Koşulları", href: "/kullanim-kosullari" },
        { text: "Demo Talep Et", href: "/demo" },
        { text: "Giriş Yap", href: "/login" },
        { text: "Hesap Oluştur", href: "/signup" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/40 bg-card/30 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight text-lg text-foreground">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/30">
                <Sparkles className="size-4" />
              </div>
              <span className="leading-tight font-black tracking-tighter text-xl">
                OXONOM <span className="text-primary font-bold">POS</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              Restoran operasyonunun yeni nesil yönetim platformu. Sipariş, masa, mutfak, QR menü, stok, ödeme, personel ve yapay zeka tek bir bulut ekosisteminde.
            </p>

            <div className="pt-2 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Cloud className="size-3.5 text-primary" />
                <span>%100 Bulut Tabanlı &amp; Çevrimdışı Çalışma Mimarisi</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-3.5 text-primary" />
                <span>Uçtan Uca Şifreli &amp; Güvenli Mali Altyapı</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="size-3.5 text-primary" />
                <span>Oxonom AI Studio Destekli Akıllı Operasyon</span>
              </div>
            </div>
          </div>

          {/* Links Groups */}
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h4 className="text-sm font-semibold tracking-tight text-foreground">{group.title}</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {group.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="hover:text-foreground transition-colors inline-block py-0.5"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {currentYear} {siteConfig.name}. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-6">
            <span>Restoranınızın tüm operasyonu tek platformda.</span>
            <span>Made for modern hospitality</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
