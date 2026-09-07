import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Crown,
  Check,
  HelpCircle,
  TrendingUp,
  Layers,
  ChevronRight,
  MonitorSmartphone,
  Clock,
  Tv,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { IphoneMockup } from "@/components/velora/iphone-mockup";
import { GridPattern } from "@/components/velora/grid-pattern";
import { SparklesText } from "@/components/velora/sparkles-text";
import { Button } from "@/components/ui/button";
import { QRAiMockupTabs } from "@/components/oxonom/qr-ai-mockup-tabs";
import { AdminAiMockupTabs } from "@/components/oxonom/admin-ai-mockup-tabs";
import { MenuImportMockupTabs } from "@/components/oxonom/menu-import-mockup-tabs";
import { NutritionCopywriterMockupTabs } from "@/components/oxonom/nutrition-copywriter-mockup-tabs";
import { LoyaltyCrmMockupTabs } from "@/components/oxonom/loyalty-crm-mockup-tabs";
import { QrCustomerProfileMockupTabs } from "@/components/oxonom/qr-customer-profile-mockup-tabs";
import { FoodPhotoEnhanceMockupTabs } from "@/components/oxonom/food-photo-enhance-mockup-tabs";
import { AiImageGenMockupTabs } from "@/components/oxonom/ai-image-gen-mockup-tabs";
import { DigitalMenuBoardMockupTabs } from "@/components/oxonom/digital-menu-board-mockup-tabs";
import { BrochureWizardMockupTabs } from "@/components/oxonom/brochure-wizard-mockup-tabs";
import { SocialMediaWizardMockupTabs } from "@/components/oxonom/social-media-wizard-mockup-tabs";
import { modulesDetailList, ModuleDetail } from "@/lib/modules-detail-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return modulesDetailList.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const moduleData = modulesDetailList.find((m) => m.slug === slug);

  if (!moduleData) {
    return { title: "Modül Bulunamadı | Oxonom POS" };
  }

  return {
    title: `${moduleData.name} Modülü | Oxonom POS`,
    description: moduleData.shortDescription,
  };
}

export default async function ModuleDetailPage({ params }: Props) {
  const { slug } = await params;
  const moduleData = modulesDetailList.find((m) => m.slug === slug);

  if (!moduleData) {
    notFound();
  }

  const otherModules = modulesDetailList.filter((m) => m.slug !== slug);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <SiteHeader />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-border/40 bg-muted/20 py-3">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Ana Sayfa
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/moduller" className="hover:text-foreground transition-colors">
              Modüller
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground font-semibold truncate">
              {moduleData.name}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 lg:py-20 border-b border-border/40">
          <GridPattern
            width={40}
            height={40}
            className="fill-transparent stroke-border/30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          />

          <div className="relative mx-auto max-w-5xl px-4 lg:px-8 text-center">
            {/* Category & Status Badges */}
            <div className="flex items-center justify-center gap-2.5 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                {moduleData.category === "ai" ? (
                  <Sparkles className="size-3.5" />
                ) : moduleData.category === "loyalty" ? (
                  <Crown className="size-3.5" />
                ) : (
                  <Tv className="size-3.5" />
                )}
                <span>{moduleData.categoryTitle}</span>
              </span>

              {moduleData.isComingSoon ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  <Clock className="size-3.5 text-amber-500" />
                  <span>Çok Yakında Yayında</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Kullanıma Açık &amp; Aktif Modül</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.15]">
              <SparklesText count={6} className="inline-block">
                {moduleData.name}
              </SparklesText>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {moduleData.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild className="shadow-md font-bold">
                <Link href="/demo">Canlı Demoda Deneyin</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/moduller" className="gap-2">
                  <ArrowLeft className="size-4" />
                  <span>Tüm Modüllere Dön</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Real Visual Screen Showcase */}
        <section className="py-14 sm:py-16 border-b border-border/40 bg-muted/15">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Ekran Arayüzü
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                {moduleData.name} Ekran Deneyimi
              </h2>
            </div>

            {moduleData.slug === "qr-menudeki-yapay-zeka" ? (
              <QRAiMockupTabs />
            ) : moduleData.slug === "admin-panelindeki-yapay-zeka" ? (
              <AdminAiMockupTabs />
            ) : moduleData.slug === "yapay-zeka-ile-menu-ice-aktar" ? (
              <MenuImportMockupTabs />
            ) : moduleData.slug === "metin-yazari-ve-besin-analizi" ? (
              <NutritionCopywriterMockupTabs />
            ) : moduleData.slug === "dogum-gunu-otomasyonu" ? (
              <LoyaltyCrmMockupTabs />
            ) : moduleData.slug === "qr-menu-musteri-giris-kayit" ? (
              <QrCustomerProfileMockupTabs />
            ) : moduleData.slug === "fotograflari-profesyonellestir" ? (
              <FoodPhotoEnhanceMockupTabs />
            ) : moduleData.slug === "yapay-zeka-ile-gorsel-olustur" ? (
              <AiImageGenMockupTabs />
            ) : moduleData.slug === "dijital-menu-panosu" ? (
              <DigitalMenuBoardMockupTabs />
            ) : moduleData.slug === "brosur-sihirbazi" ? (
              <BrochureWizardMockupTabs />
            ) : moduleData.slug === "sosyal-medya-sihirbazi" ? (
              <SocialMediaWizardMockupTabs />
            ) : (
              <div className="flex justify-center">
                {moduleData.mockupType === "phone" ? (
                  <div className="py-4">
                    <IphoneMockup className="max-w-[290px]">
                      <div className="relative w-full h-[600px]">
                        <Image
                          src={moduleData.imageSrc}
                          alt={moduleData.name}
                          fill
                          className="object-cover object-top"
                          sizes="290px"
                        />
                      </div>
                    </IphoneMockup>
                  </div>
                ) : (
                  <div className="w-full max-w-4xl">
                    <BrowserMockup url={moduleData.browserUrl || "app.oxonompos.com"}>
                      <div className="relative w-full aspect-[16/10] bg-muted/40">
                        <Image
                          src={moduleData.imageSrc}
                          alt={moduleData.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 896px"
                        />
                      </div>
                    </BrowserMockup>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Deep Dive 1: Detaylı Açıklama & Problem-Çözüm */}
        <section className="py-16 border-b border-border/40">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                Modülün Amacı &amp; Çözdüğü Sorun
              </div>
              <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
                {moduleData.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive 2: Temel Yetenekler & Özellikler */}
        <section className="py-16 border-b border-border/40 bg-card/40">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Modül Yetkinlikleri
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                Öne Çıkan Özellikler &amp; Yetenekler
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {moduleData.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-border/70 bg-card shadow-xs flex items-start gap-4"
                >
                  <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-1">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-foreground">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive 3: 3 Aşamalı Nasıl Çalışır? */}
        <section className="py-16 border-b border-border/40">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                İş Akışı
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                Nasıl Çalışır? (Adım Adım)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moduleData.steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-border/70 bg-card relative shadow-xs"
                >
                  <div className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-bold inline-block mb-4">
                    Adım {s.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive 4: Ölçülebilir Metrikler (ROI) */}
        <section className="py-16 border-b border-border/40 bg-muted/20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                İşletme Etkisi
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                Sağladığı Katma Değer &amp; Metrikler
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moduleData.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-primary/20 bg-card text-center shadow-sm"
                >
                  <div className="text-3xl sm:text-4xl font-black text-primary">
                    {m.value}
                  </div>
                  <div className="text-sm font-bold text-foreground mt-2">
                    {m.label}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive 5: Sıkça Sorulan Sorular (SSS) */}
        {moduleData.faqs.length > 0 && (
          <section className="py-16 border-b border-border/40">
            <div className="mx-auto max-w-4xl px-4 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Soru &amp; Cevap
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                  Sıkça Sorulan Sorular
                </h2>
              </div>

              <div className="space-y-4">
                {moduleData.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-border/70 bg-card shadow-xs"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="size-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-foreground">
                          {faq.q}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Modules Carousel / Quick Links */}
        <section className="py-16 border-b border-border/40 bg-card/30">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Diğer Modüller
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mt-1">
                  Keşfetmeye Devam Edin
                </h2>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/moduller">Tüm Modülleri Gör</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherModules.slice(0, 4).map((mod) => (
                <Link
                  key={mod.slug}
                  href={`/moduller/${mod.slug}`}
                  className="p-4 rounded-xl border border-border/70 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase">
                      {mod.badge}
                    </span>
                    <h3 className="text-sm font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {mod.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                      {mod.shortDescription}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary">
                    <span>Detaylar</span>
                    <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent p-8 sm:p-14 shadow-2xl relative overflow-hidden">
              <GridPattern
                width={32}
                height={32}
                className="fill-transparent stroke-primary/15 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
              />

              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                  <Sparkles className="size-3.5" />
                  <span>14 Gün Ücretsiz Deneyin</span>
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  {moduleData.name} Modülünü Test Edin
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  İşletmenizde hemen aktif ederek servis hızını ve müşteri memnuniyetini anında artırın. Kredi kartı gerekmez.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <Button size="lg" asChild className="shadow-lg font-bold">
                    <Link href="/demo">Canlı Demo Randevusu Alın</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/moduller">Tüm 8 Modülü İnceleyin</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
