import Link from "next/link";
import { HomeIcon, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RetroGrid } from "@/components/velora/retro-grid";
import { BlurFade } from "@/components/velora/blur-fade";
import { AnimatedGradientText } from "@/components/velora/animated-gradient-text";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <section className="relative flex flex-1 items-center justify-center overflow-hidden py-32">
        <RetroGrid />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <BlurFade>
            <p className="font-mono text-8xl font-bold tracking-tight lg:text-9xl">
              <AnimatedGradientText>404</AnimatedGradientText>
            </p>
            <h1 className="mt-6 text-2xl font-bold tracking-tight lg:text-3xl text-foreground">
              Sayfa Bulunamadı
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Aradığınız sayfa silinmiş, taşınmış veya adresi değiştirilmiş olabilir. Ana sayfaya dönerek restoran operasyonunuzu yönetmeye devam edebilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/">
                  <HomeIcon className="size-4 mr-2" />
                  Ana Sayfaya Dön
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <Link href="/ozellikler">Tüm Özellikleri İncele</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
