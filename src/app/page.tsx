"use client";

import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Clock,
  CookingPot,
  CreditCard,
  QrCode,
  Receipt,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Users,
  Utensils,
  Coffee,
  Zap,
  Bike,
  Building2,
  GitFork,
  HelpCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnimatedGradientText } from "@/components/velora/animated-gradient-text";
import { AuroraBackground } from "@/components/velora/aurora-background";
import { BentoCard, BentoGrid } from "@/components/velora/bento-grid";
import { BlurFade } from "@/components/velora/blur-fade";
import { BorderBeam } from "@/components/velora/border-beam";
import { GridPattern, DotPattern } from "@/components/velora/grid-pattern";
import { Marquee } from "@/components/velora/marquee";
import { NumberTicker } from "@/components/velora/number-ticker";
import { Particles } from "@/components/velora/particles";
import { ScrollProgress } from "@/components/velora/scroll-progress";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { Typewriter } from "@/components/velora/typewriter";

import { HeroPosMockup } from "@/components/oxonom/hero-pos-mockup";
import { ConnectedOperations } from "@/components/oxonom/connected-operations";
import { SplitPaymentDemo } from "@/components/oxonom/split-payment-demo";
import { RecipeStockDemo } from "@/components/oxonom/recipe-stock-demo";
import { KDSDemo } from "@/components/oxonom/kds-demo";
import { VoiceAlertBox } from "@/components/oxonom/voice-alert-box";
import { ZReportShowcase } from "@/components/oxonom/z-report-showcase";
import { AIStudioDemo } from "@/components/oxonom/ai-studio-demo";
import { TableManagementPreview } from "@/components/oxonom/table-management-preview";
import { ComparisonSection } from "@/components/oxonom/comparison-section";
import { QROrderShowcase } from "@/components/oxonom/qr-order-showcase";

import {
  productModules,
  solutionItems,
  operationalScenarios,
  faqsData,
} from "@/lib/product-data";

const marqueeItems = [
  "POS Terminali",
  "Mutfak Ekranı (KDS)",
  "QR Menü & Self Order",
  "Reçeteli Otomatik Stok",
  "Müşteri CRM & Sadakat",
  "7 Bölümlü Z Raporu",
  "Parçalı Tahsilat",
  "Oxonom AI Studio",
  "Sesli Sipariş Anonsları",
  "Alakart Restoran",
  "Kafe & 3. Nesil Kahve",
  "Fast Food (QSR)",
  "Paket Servis & Kurye",
  "Otel & Resort",
  "Zincir & Franchise",
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <SiteHeader />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
        <AuroraBackground intensity="subtle" />
        <GridPattern
          width={48}
          height={48}
          className="fill-transparent stroke-border/40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        />

        <div className="relative mx-auto max-w-6xl px-4 text-center lg:px-8">
          <BlurFade delay={0} direction="down">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-xs font-semibold backdrop-blur text-foreground shadow-sm">
              <Sparkles className="size-3.5 text-primary" />
              <span>Yeni Nesil Restoran Yönetim Platformu</span>
            </span>
          </BlurFade>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Restoranınızın tüm operasyonu{" "}
            <span className="block mt-1">
              tek platformda:{" "}
              <AnimatedGradientText>
                <Typewriter
                  words={[
                    "Satış.",
                    "Mutfak.",
                    "Stok.",
                    "QR Sipariş.",
                    "Raporlama.",
                    "Yapay Zeka.",
                  ]}
                />
              </AnimatedGradientText>
            </span>
          </h1>

          <BlurFade delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
              Oxonom POS; sipariş, masa, ödeme, mutfak, QR menü, stok, personel, müşteri ve raporlama süreçlerini gerçek zamanlı olarak tek bir bulut platformunda birleştirir.
            </p>
          </BlurFade>

          <BlurFade delay={0.35}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/demo">
                <ShimmerButton className="h-12 px-8 text-sm font-semibold">
                  <Rocket className="size-4" />
                  <span>Ücretsiz Başla / Demo İste</span>
                </ShimmerButton>
              </Link>
              <Button variant="outline" size="lg" asChild className="h-12 px-6 rounded-full font-medium">
                <a href="#features">Ürünü İncele</a>
              </Button>
            </div>
          </BlurFade>

          {/* Product Mockup */}
          <BlurFade delay={0.5} offset={32}>
            <div className="mt-14 sm:mt-20">
              <HeroPosMockup />
            </div>
          </BlurFade>

          {/* Capability Statistics */}
          <div className="mx-auto mt-16 sm:mt-24 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4 pt-10 border-t border-border/40">
            <BlurFade delay={0.1}>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  <NumberTicker value={50} suffix="+" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">Entegre Özellik</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  <NumberTicker value={7} />
                </span>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">Detaylı Z Raporu Bölümü</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  <NumberTicker value={3} />
                </span>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">KDS Hazırlık Aşaması</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
                  <NumberTicker value={1} />
                </span>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">Tek Operasyon Platformu</span>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 2. ECOSYSTEM MARQUEE */}
      <section className="border-y border-border/40 py-8 bg-card/20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Birbirine Tam Entegre Çalışan Restoran Teknolojileri
          </p>
          <Marquee pauseOnHover className="[--duration:40s]">
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="mx-6 text-sm font-bold tracking-tight text-muted-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* 3. CORE VALUE - BENTO GRID ("Bir POS'tan fazlası") */}
      <section id="features" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Kapsamlı Ekosistem</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
                Bir POS&apos;tan fazlası.
              </h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                Yalnızca fiş kesen eski nesil kasaları unutun. Oxonom POS, masadan mutfağa ve depodan finansal denetime kadar tüm restoran operasyonunu tek çatı altında yürütür.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.15}>
            <BentoGrid className="mt-14">
              <BentoCard
                name="Sipariş & Masa Yönetimi"
                description="Görsel salon krokisi, masa doluluk süreleri, adisyon bölme ve anlık sipariş aktarımı."
                className="md:col-span-2"
                background={
                  <div className="absolute inset-6 rounded-xl border border-border/60 bg-card/60 p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold flex items-center gap-1.5"><Utensils className="size-4 text-primary" /> İç Salon Krokisi</span>
                      <span className="text-emerald-500 font-semibold">%70 Doluluk</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 pt-2">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 text-center text-xs font-bold">M01 (Dolu)</div>
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center text-xs font-bold">M02 (Boş)</div>
                      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-center text-xs font-bold">M03 (Hesap)</div>
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 text-center text-xs font-bold">M04 (Dolu)</div>
                    </div>
                  </div>
                }
              />

              <BentoCard
                name="QR Self-Ordering"
                description="Müşteri telefonundan menüyü açar, garson beklemeden siparişini doğrudan mutfağa gönderir."
                className="md:col-span-1"
                background={
                  <div className="relative flex size-full items-center justify-center pb-20">
                    <div className="p-4 rounded-2xl bg-primary/15 border border-primary/30 text-center">
                      <QrCode className="size-10 text-primary mx-auto mb-2" />
                      <span className="text-[11px] font-bold block">Kamera ile Okut &amp; Sipariş Ver</span>
                    </div>
                  </div>
                }
              />

              <BentoCard
                name="Mutfak Ekranı (KDS)"
                description="Siparişleri Bekliyor, Hazırlanıyor ve Servise Hazır aşamaları ve gecikme uyarılarıyla takip edin."
                className="md:col-span-1"
                background={
                  <div className="relative flex size-full items-center justify-center pb-20">
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
                      <CookingPot className="size-10 text-amber-500 mx-auto mb-2" />
                      <span className="text-[11px] font-bold block">3 Aşamalı Hazırlık Akışı</span>
                    </div>
                  </div>
                }
              />

              <BentoCard
                name="Reçeteli Stok & Envanter"
                description="Satılan her porsiyon için et, ekmek ve sos gibi hammadde stoklarını gramaj bazında otomatik düşürün."
                className="md:col-span-2"
                background={
                  <div className="absolute inset-6 rounded-xl border border-border/60 bg-card/60 p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold flex items-center gap-1.5"><Boxes className="size-4 text-blue-500" /> Otomatik Reçete Düşümü</span>
                      <span className="text-blue-500 font-semibold">Anlık Güncelleme</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-3">
                      <span>1x Burger Satışı →</span>
                      <span className="text-muted-foreground font-mono">-1 Ekmek • -150g Köfte • -1 Peynir</span>
                    </div>
                  </div>
                }
              />
            </BentoGrid>
          </BlurFade>
        </div>
      </section>

      {/* 4. REAL-TIME OPERATIONS (AnimatedBeam) */}
      <section className="relative py-20 lg:py-28 bg-card/30 border-y border-border/40">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <BlurFade>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Entegre Operasyon Ağı</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              İşletmenizdeki her nokta birbiriyle konuşur.
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base leading-relaxed">
              Masada açılan sipariş mutfağa, stok sistemine, müşteri hesabına ve raporlara gecikmesiz olarak yansır. Hiçbir sipariş kaybolmaz, adisyonlar karışmaz.
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="mt-12">
              <ConnectedOperations />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 5. QR SELF ORDER STORY */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <QROrderShowcase />
        </div>
      </section>

      {/* 6. KDS SECTION */}
      <section className="relative py-24 lg:py-32 bg-card/30 border-y border-border/40">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Dijital Mutfak</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Mutfakta kağıt karmaşasını bitirin.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Kaybolan kağıt fişler ve okunamayan sipariş notları tarihe karıştı. 3 aşamalı akıllı Mutfak Ekranı ile servis süresini yarı yarıya düşürün.
            </p>
          </div>

          <KDSDemo />
        </div>
      </section>

      {/* 7. VOICE NOTIFICATION SECTION */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <VoiceAlertBox />
        </div>
      </section>

      {/* 8. POS & MIXED PAYMENT SIMULATION */}
      <section className="relative py-24 lg:py-32 bg-card/30 border-y border-border/40">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Esnek Tahsilat</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Ödeme sürecini masaya göre değil, müşteriye göre yönetin.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Hesabı bölmek hiç bu kadar kolay olmamıştı. Aynı masanın ₺1.500&apos;lik hesabını Nakit, Kredi Kartı ve Yemek Kartı arasında saniyeler içinde paylaştırın.
            </p>
          </div>

          <SplitPaymentDemo />
        </div>
      </section>

      {/* 9. INVENTORY & RECIPES */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Otomatik Maliyet &amp; Stok</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Satış oldukça stok kendini güncellesin.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Porsiyon ve reçete bağlantısı sayesinde her satış anında ilgili hammaddeleri otomatik düşürün, kayıp kaçakların önüne geçin.
            </p>
          </div>

          <RecipeStockDemo />
        </div>
      </section>

      {/* 10. TABLE MANAGEMENT */}
      <section className="relative py-24 lg:py-32 bg-card/30 border-y border-border/40">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Kroki &amp; Doluluk</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Salonunuzun her noktası canlı kontrol altında.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Farklı kat ve bölümleri tek ekranda görün, masaları taşıyın, birleştirin ve doluluk sürelerini izleyin.
            </p>
          </div>

          <TableManagementPreview />
        </div>
      </section>

      {/* 11. AI STUDIO */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Oxonom AI Studio</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Restoran yönetiminde yapay zeka dönemi.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Basılı menüleri saniyeler içinde sisteme aktarın, amatör telefon çekimlerini katalog kalitesinde tabak fotoğraflarına dönüştürün.
            </p>
          </div>

          <AIStudioDemo />
        </div>
      </section>

      {/* 12. Z REPORT SECTION */}
      <section className="relative py-24 lg:py-32 bg-card/30 border-y border-border/40">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Mali Denetim &amp; Mutabakat</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Gün sonu raporundan daha fazlası.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Kasa açılışından kapanışına kadar 7 kritik bölüm: Nakit mutabakatı, KDV matrahları, iptal logları ve personel satış performansları.
            </p>
          </div>

          <ZReportShowcase />
        </div>
      </section>

      {/* 13. INDUSTRY SOLUTIONS */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Her İşletmeye Uygun</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              İşletmenizin tipine özel çözümler.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              İster tek şubeli bir butik kafe olun, ister onlarca şubeli zincir bir restoran. Oxonom POS tam ihtiyacınıza göre ölçeklenir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionItems.map((sol) => (
              <div
                key={sol.id}
                className="p-6 rounded-2xl border border-border/60 bg-card/70 hover:border-primary/50 transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">
                    {sol.badge}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-3 group-hover:text-primary transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {sol.shortDesc}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                    {sol.benefits.slice(0, 3).map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40">
                  <Link
                    href={`/cozumler/${sol.slug}`}
                    className="text-xs font-bold text-primary flex items-center justify-between group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Çözümü İncele</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. COMPARISON SECTION */}
      <section className="relative py-24 lg:py-32 bg-card/30 border-y border-border/40">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Kıyaslama</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Geleneksel POS vs. Oxonom POS
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Eski nesil hantal terminaller ile modern bulut mimarisinin farkını inceleyin.
            </p>
          </div>

          <ComparisonSection />
        </div>
      </section>

      {/* 15. OPERATIONAL SCENARIOS */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Gerçekçi İşletme Senaryoları</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Sahada işler nasıl yürür?
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Yoğun servis anında, menü değişiminde veya gece kasa kapanışında Oxonom POS yanınızda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operationalScenarios.map((sc, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border/60 bg-card/70 text-left space-y-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                  {sc.tag}
                </span>
                <h4 className="font-bold text-base text-foreground">{sc.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{sc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. FAQ SECTION */}
      <section id="faq" className="py-24 lg:py-32 bg-card/30 border-y border-border/40">
        <div className="mx-auto max-w-3xl px-4 lg:px-8 text-left">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Merak Edilenler</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Sıkça Sorulan Sorular
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Oxonom POS platformu, donanım uyumluluğu ve operasyonel merak ettiğiniz her şey.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqsData.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/60 rounded-xl px-4 bg-background/80">
                <AccordionTrigger className="text-sm font-semibold text-foreground py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 17. FINAL CONVERSION CTA */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <AuroraBackground intensity="subtle" />
        <Particles quantity={40} />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <BlurFade>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Restoran operasyonunuzu{" "}
              <span className="text-primary">tek ekrandan</span> yönetmeye başlayın.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              Satıştan mutfağa, QR siparişten stok ve raporlamaya kadar işletmenizin ihtiyaç duyduğu araçları Oxonom POS&apos;ta birleştirin.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/demo">
                <ShimmerButton className="h-13 px-8 text-sm font-bold">
                  <Rocket className="size-4" />
                  <span>Demo Talep Et</span>
                </ShimmerButton>
              </Link>
              <Button variant="outline" size="lg" asChild className="h-13 px-7 rounded-full font-medium">
                <Link href="/fiyatlandirma">Paketleri İncele</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
