"use client";

import React from "react";
import Link from "next/link";
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, PhoneCall, Building2 } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { pricingPlans } from "@/lib/product-data";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { BorderBeam } from "@/components/velora/border-beam";
import { GridPattern } from "@/components/velora/grid-pattern";
import { PricingModulesSelector } from "@/components/oxonom/pricing-modules-selector";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-32 pb-24">
        {/* Header Banner */}
        <section className="relative overflow-hidden py-14 text-center border-b border-border/40">
          <GridPattern
            width={48}
            height={48}
            className="fill-transparent stroke-border/30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Sparkles className="size-3.5" />
              <span>İşletmenize Özel Esnek Teklif</span>
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Restoranınızın Ölçeğine Uygun Paketler
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Her restoranın şube sayısı, masa kapasitesi ve modül ihtiyacı farklıdır. İşletmeniz için en verimli çözümü belirleyin, size özel avantajlı teklifimizi hemen hazırlayalım.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span>Gizli veya tek seferlik kurulum ücreti yok</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="size-4 text-amber-500" />
                <span>20 dakikada anahtar teslim kurulum</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PhoneCall className="size-4 text-primary" />
                <span>Birebir canlı online demo imkânı</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative p-6 sm:p-7 rounded-3xl border flex flex-col justify-between text-left transition-all ${
                    plan.popular
                      ? "border-primary bg-card shadow-xl shadow-primary/10 ring-2 ring-primary/40"
                      : "border-border/70 bg-card/70 hover:border-border hover:shadow-md"
                  }`}
                >
                  {plan.popular && <BorderBeam size={100} duration={8} />}

                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-extrabold text-lg sm:text-xl text-foreground tracking-tight">
                          {plan.name}
                        </h3>
                        <span
                          className={`inline-block text-[10px] px-2.5 py-0.5 rounded-full font-bold mt-1 ${
                            plan.popular
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {plan.badge}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground mt-3 min-h-[42px] leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="my-5 border-t border-border/60" />

                    {/* Feature List */}
                    <ul className="space-y-2.5 text-xs text-muted-foreground">
                      {plan.features.map((f, i) => {
                        const isSubHeader = f.startsWith("•") || f.endsWith(":");
                        return (
                          <li
                            key={i}
                            className={`flex items-start gap-2 ${
                              isSubHeader ? "font-semibold text-foreground" : ""
                            }`}
                          >
                            <Check className="size-4 text-primary shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    {plan.popular ? (
                      <Link href={`/demo?paket=${plan.id}`} className="block w-full">
                        <ShimmerButton className="w-full h-11 text-xs font-extrabold">
                          <span>{plan.cta}</span>
                          <ArrowRight className="size-3.5 ml-1.5 inline" />
                        </ShimmerButton>
                      </Link>
                    ) : (
                      <Button variant="outline" asChild className="w-full h-11 text-xs font-bold rounded-xl">
                        <Link href={`/demo?paket=${plan.id}`}>
                          <span>{plan.cta}</span>
                          <ArrowRight className="size-3.5 ml-1.5" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Multi-Select Modules Section */}
        <PricingModulesSelector />

        {/* Pricing FAQ Section */}
        <section className="py-20 bg-card/20 border-t border-border/40">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
              Fiyatlandırma ve Teklif Süreci Hakkında Sıkça Sorulanlar
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="faq-p1" className="border border-border/60 rounded-xl px-4 bg-background/80">
                <AccordionTrigger className="text-sm font-semibold py-3.5 text-left">
                  Fiyatlar neden sabit değil, teklif usulü sunuluyor?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-3 leading-relaxed">
                  Çünkü her restoranın operasyon hacmi benzersizdir. 10 masalı bir butik kafeyle, 5 şubeli ve çok mutfaklı bir alakart restoranın ihtiyaç duyduğu terminal, KDS ve yapay zeka araçları aynı değildir. Sabit yüksek paketler yerine, yalnızca kullanacağınız modüllere göre en bütçe dostu teklifi oluşturuyoruz.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-p2" className="border border-border/60 rounded-xl px-4 bg-background/80">
                <AccordionTrigger className="text-sm font-semibold py-3.5 text-left">
                  İstediğim zaman yeni modül ekleyebilir veya çıkarabilir miyim?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-3 leading-relaxed">
                  Kesinlikle evet. Örneğin başlangıçta sadece POS ve QR Menü ile başlayıp, ilerleyen dönemde Mutfak Ekranı (KDS), Yapay Zeka Fotoğraf Stüdyosu veya TV Menü Panosu gibi modülleri tek tıkla lisansınıza dahil edebilirsiniz.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-p3" className="border border-border/60 rounded-xl px-4 bg-background/80">
                <AccordionTrigger className="text-sm font-semibold py-3.5 text-left">
                  Teklif aldıktan sonra sistemi canlı deneyebilir miyim?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-3 leading-relaxed">
                  Evet! Ürün danışmanımızla 20 dakikalık birebir online toplantıda sistemin restoranınıza özel simülasyonunu canlı test edebilir, 14 gün boyunca işletmenizde ücretsiz deneyebilirsiniz.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-p4" className="border border-border/60 rounded-xl px-4 bg-background/80">
                <AccordionTrigger className="text-sm font-semibold py-3.5 text-left">
                  Donanım (POS terminali, fiş yazıcı, el terminali) zorunluluğu var mı?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-3 leading-relaxed">
                  Hayır. Oxonom POS mevcut iPad, Android tablet, dokunmatik ekran veya Windows bilgisayarlarınızın tamamında tarayıcı üzerinden doğrudan çalışır. Mevcut donanımlarınızı çöpe atmadan kullanmaya başlayabilirsiniz.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
