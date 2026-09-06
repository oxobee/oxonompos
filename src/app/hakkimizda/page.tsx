import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShieldCheck, Zap, HeartHandshake, Cloud, Cpu, ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { GridPattern } from "@/components/velora/grid-pattern";

export const metadata: Metadata = {
  title: `Hakkımızda | ${siteConfig.name}`,
  description: "Oxonom POS'un misyonu, restoran teknolojisi vizyonu ve operasyonel sadelik felsefesi.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-32 pb-24">
        <section className="relative overflow-hidden py-14 text-center border-b border-border/40">
          <GridPattern
            width={48}
            height={48}
            className="fill-transparent stroke-border/30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Sparkles className="size-3.5" />
              <span>Misyonumuz &amp; Felsefemiz</span>
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Restoran Operasyonunu Sadeleştirmek İçin Buradayız
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Gastronomi dünyasında işletmecilerin karşılaştığı en büyük engel lezzet üretmek değil; karmaşık, parçalanmış ve birbirini tutmayan yazılımlardır.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-16 text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Neden Oxonom POS?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Geleneksel restoran yazılımları 90&apos;lı yıllardan kalma hantal sunuculara, karışık arayüzlere ve pahalı donanımlara bağımlıdır. Bir garsonun sipariş girmesi için dakikalarca eğitim alması gerekir; mutfak ile kasa arasındaki kağıt fişler kaybolur; gün sonu kasa mutabakatı saatler sürer.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Oxonom POS, bu kaosu sonlandırmak amacıyla tek bir ilkeyle tasarlandı: <strong>Operasyonel Sadelik</strong>. Dokunmatik ekranların doğallığı, bulut mimarisinin güvenilirliği ve yapay zekanın gücüyle restoran operasyonunu çocuk oyuncağı haline getiriyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
                <Cloud className="size-6 text-primary" />
                <h3 className="font-bold text-base text-foreground">%100 Bulut Gücü</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sunucu arızası, veri kaybı veya sabit bilgisayarlara bağımlılık yok. İstediğiniz cihazdan her an işletmenizi yönetin.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
                <Zap className="size-6 text-amber-500" />
                <h3 className="font-bold text-base text-foreground">60fps Hız &amp; Akıcılık</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Yoğun saatlerde donmayan, bekleme yapmayan ve garsonun hızına ayak uyduran ultra hızlı arayüz performansı.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
                <Cpu className="size-6 text-emerald-500" />
                <h3 className="font-bold text-base text-foreground">Yapay Zeka Destekli</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Menü veri girişinden görsel üretimine kadar restoranın günlük yükünü hafifleten akıllı otomasyonlar.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border/60 bg-card/60 space-y-2">
                <HeartHandshake className="size-6 text-rose-500" />
                <h3 className="font-bold text-base text-foreground">İşletmeci Odaklı Destek</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Teknik dilden uzak, doğrudan restorancının dilinden anlayan 7/24 kesintisiz müşteri başarı ekibi.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20 text-center space-y-4">
              <h3 className="text-xl font-bold text-foreground">Siz de Oxonom ailesine katılın.</h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
                Restoranınızı modern teknolojiyle tanıştırmak ve operasyonel verimliliğinizi artırmak için ilk adımı atın.
              </p>
              <div className="pt-2">
                <Link href="/demo">
                  <ShimmerButton className="h-11 px-7 text-xs font-bold">
                    <span>Ücretsiz Canlı Demo Talep Edin</span>
                    <ArrowRight className="size-3.5" />
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
