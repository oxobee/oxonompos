import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: `Gizlilik Politikası | ${siteConfig.name}`,
  description: "Oxonom POS gizlilik politikası ve veri güvenliği ilkeleri.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-24 mx-auto max-w-4xl px-4 lg:px-8 text-left space-y-8">
        <div className="border-b border-border/40 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Gizlilik Politikası</h1>
          <p className="text-xs text-muted-foreground mt-2">Son güncelleme: Ağustos 2026</p>
        </div>

        <section className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <p>
            Oxonom POS olarak, müşterilerimizin ve işletmelerin verilerinin gizliliğine ve güvenliğine en üst düzeyde önem veriyoruz. Bu Gizlilik Politikası, platformumuzu kullandığınızda toplanan verilerin nasıl işlendiğini ve korunduğunu açıklar.
          </p>

          <h2 className="text-base font-bold text-foreground pt-4">1. Toplanan Bilgiler</h2>
          <p>
            İşletme adı, yetkili ad soyad, iletişim bilgileri (telefon, e-posta), fatura bilgileri ve platformun işletilmesine yönelik adisyon ve ürün verileri toplanmaktadır.
          </p>

          <h2 className="text-base font-bold text-foreground pt-4">2. Verilerin Kullanım Amacı</h2>
          <p>
            Toplanan veriler yalnızca restoran operasyonunuzun yürütülmesi, Z raporlarının hesaplanması, teknik destek sağlanması ve yasal mali yükümlülüklerin yerine getirilmesi amacıyla kullanılır.
          </p>

          <h2 className="text-base font-bold text-foreground pt-4">3. Veri Güvenliği</h2>
          <p>
            Tüm veri iletimi TLS/SSL şifreleme protokolleriyle korunur. Verileriniz üçüncü şahıslara ticari amaçla kesinlikle satılmaz veya kiralanmaz.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
