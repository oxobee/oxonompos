import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: `Kullanım Koşulları | ${siteConfig.name}`,
  description: "Oxonom POS hizmet ve yazılım kullanım koşulları.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-24 mx-auto max-w-4xl px-4 lg:px-8 text-left space-y-8">
        <div className="border-b border-border/40 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Kullanım Koşulları</h1>
        </div>

        <section className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <p>
            Oxonom POS platformuna kaydolarak veya hizmetlerimizi kullanarak bu Kullanım Koşullarını kabul etmiş sayılırsınız.
          </p>
          <h2 className="text-base font-bold text-foreground pt-4">Hizmet Kapsamı</h2>
          <p>
            Oxonom POS, restoran işletmeleri için bulut tabanlı POS, masa, mutfak, QR ve stok yönetim araçları sunan bir SaaS platformudur. Hizmetler abonelik süresi boyunca kesintisiz sunulmak üzere optimize edilir.
          </p>
          <h2 className="text-base font-bold text-foreground pt-4">Hesap Güvenliği</h2>
          <p>
            Kullanıcılar PIN kodlarının ve şifrelerinin gizliliğinden kendileri sorumludur. Yetkisiz erişim şüphesi durumunda derhal destek ekibimizle iletişime geçilmelidir.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
