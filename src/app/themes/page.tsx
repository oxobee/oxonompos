import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { ThemePicker } from "@/components/template/theme-picker";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Temalar & Renk Paletleri | ${siteConfig.name}`,
  description: "Oxonom POS için hazır marka renk paletleri ve tasarım tokenları.",
};

export default function ThemesPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <PageHeader
        eyebrow="Temalar"
        title={
          <>
            Restoranınıza Özel <span className="text-primary">Renk Paletleri</span>
          </>
        }
        description="Oxonom POS tasarım tokenları sayesinde arayüz ve QR menü renklerinizi tek bir CSS değişkeniyle markanıza uyarlayın."
      />

      <section className="pb-28 flex-1">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <ThemePicker />
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
