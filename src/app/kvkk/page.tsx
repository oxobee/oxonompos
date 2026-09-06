import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: `KVKK Aydınlatma Metni | ${siteConfig.name}`,
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
};

export default function KVKKPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-24 mx-auto max-w-4xl px-4 lg:px-8 text-left space-y-8">
        <div className="border-b border-border/40 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">KVKK Aydınlatma Metni</h1>
          <p className="text-xs text-muted-foreground mt-2">6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”)</p>
        </div>

        <section className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <p>
            Oxonom POS (&quot;Veri Sorumlusu&quot;) olarak, kişisel verilerinizin hukuka ve dürüstlük kurallarına uygun olarak işlenmesine ve korunmasına azami özen göstermekteyiz.
          </p>

          <h2 className="text-base font-bold text-foreground pt-4">1. İşlenen Kişisel Veriler</h2>
          <p>
            Kimlik verileri (Ad, Soyad), iletişim verileri (Telefon, E-posta, Adres) ve kullanıcı oturum verileri 6698 sayılı Kanun&apos;a uygun olarak işlenmektedir.
          </p>

          <h2 className="text-base font-bold text-foreground pt-4">2. Kişisel Verilerin İşlenme Amaçları</h2>
          <p>
            Sözleşme süreçlerinin yürütülmesi, demo ve satış taleplerinin sonuçlandırılması, müşteri ilişkileri yönetimi ve mevzuattan kaynaklanan yükümlülüklerin yerine getirilmesi.
          </p>

          <h2 className="text-base font-bold text-foreground pt-4">3. İlgili Kişinin Hakları</h2>
          <p>
            KVKK&apos;nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, silinmesini talep etme ve bilgi alma hakkına sahiptir. Başvurularınızı {siteConfig.contact.email} adresine iletebilirsiniz.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
