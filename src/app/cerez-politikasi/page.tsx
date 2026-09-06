import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: `Çerez Politikası | ${siteConfig.name}`,
  description: "Oxonom POS web sitesi çerez (cookie) kullanım politikası.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-24 mx-auto max-w-4xl px-4 lg:px-8 text-left space-y-8">
        <div className="border-b border-border/40 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Çerez Politikası</h1>
        </div>

        <section className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <p>
            Web sitemizde kullanıcı deneyimini iyileştirmek, tema tercihlerinizi (karanlık/aydınlık mod) hatırlamak ve oturum güvenliğini sağlamak amacıyla zorunlu çerezler kullanılmaktadır.
          </p>
          <p>
            Tarayıcı ayarlarınız üzerinden dilediğiniz zaman çerezleri silebilir veya engelleyebilirsiniz. Ancak zorunlu çerezlerin kapatılması durumunda bazı oturum işlevleri çalışmayabilir.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
