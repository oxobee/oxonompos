"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, HelpCircle, ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { pricingPlans, faqsData } from "@/lib/product-data";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { BorderBeam } from "@/components/velora/border-beam";
import { GridPattern } from "@/components/velora/grid-pattern";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-32 pb-24">
        {/* Header */}
        <section className="relative overflow-hidden py-14 text-center border-b border-border/40">
          <GridPattern
            width={48}
            height={48}
            className="fill-transparent stroke-border/30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Sparkles className="size-3.5" />
              <span>Şeffaf &amp; Esnek Fiyatlandırma</span>
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              İşletmenizin Ölçeğine Uygun Paketler
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Gizli ek ücret yok. İhtiyacınız olan modülleri seçin, restoranınızı bulut teknolojisiyle büyütün.
            </p>

            {/* Monthly / Yearly Billing Switch */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className={`text-xs font-semibold ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                Aylık Ödeme
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-12 h-6 rounded-full bg-muted p-1 relative transition-colors focus:outline-none"
              >
                <div
                  className={`size-4 rounded-full bg-primary transition-transform ${
                    isYearly ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
              <div className="flex items-center gap-1.5">
                <span className={`text-xs font-semibold ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                  Yıllık Ödeme
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500">
                  %20 Tasarruf
                </span>
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
                  className={`relative p-6 rounded-2xl border flex flex-col justify-between text-left transition-all ${
                    plan.popular
                      ? "border-primary bg-card/90 shadow-xl shadow-primary/5"
                      : "border-border/60 bg-card/60 hover:border-border"
                  }`}
                >
                  {plan.popular && <BorderBeam size={90} duration={8} />}

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-foreground">{plan.name}</h3>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          plan.popular ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground mt-2 min-h-[36px] leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mt-6 pb-6 border-b border-border/40">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                          {isYearly ? plan.priceYearly : plan.priceMonthly}
                        </span>
                        {plan.priceMonthly !== "Özel Fiyat" && (
                          <span className="text-xs text-muted-foreground">/ ay</span>
                        )}
                      </div>
                      {plan.priceMonthly !== "Özel Fiyat" && (
                        <span className="text-[10px] text-muted-foreground block mt-1">
                          {isYearly ? "Yıllık tek çekim faturalandırılır" : "Aylık düzenli faturalandırılır"}
                        </span>
                      )}
                    </div>

                    <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="size-4 text-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    {plan.popular ? (
                      <Link href="/demo" className="block w-full">
                        <ShimmerButton className="w-full h-11 text-xs font-bold">
                          {plan.cta}
                        </ShimmerButton>
                      </Link>
                    ) : (
                      <Button variant="outline" asChild className="w-full h-11 text-xs font-bold rounded-xl">
                        <Link href="/demo">{plan.cta}</Link>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing FAQ Section */}
        <section className="py-16 bg-card/20 border-t border-border/40">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-left">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">
              Fiyatlandırma Hakkında Sıkça Sorulanlar
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="faq-p1" className="border border-border/60 rounded-xl px-4 bg-background/80">
                <AccordionTrigger className="text-sm font-semibold py-3 text-left">
                  Kurulum veya donanım lisans ücreti var mı?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-3">
                  Hayır, Oxonom POS tamamen bulut tabanlı bir hizmettir. Gizli kurulum veya tek seferlik ağır lisans bedelleri ödemezsiniz.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-p2" className="border border-border/60 rounded-xl px-4 bg-background/80">
                <AccordionTrigger className="text-sm font-semibold py-3 text-left">
                  İstediğim zaman paketimi yükseltebilir miyim?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-3">
                  Evet, işletmeniz büyüdükçe veya yeni şube açtıkça tek tıkla üst pakete geçiş yapabilir veya ek terminal ekleyebilirsiniz.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-p3" className="border border-border/60 rounded-xl px-4 bg-background/80">
                <AccordionTrigger className="text-sm font-semibold py-3 text-left">
                  Ücretsiz deneme süresi mevcut mu?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-3">
                  Evet, tüm paketlerimizi 14 gün boyunca kredi kartı bilgisi girmeden tüm özellikleriyle ücretsiz deneyebilirsiniz.
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
