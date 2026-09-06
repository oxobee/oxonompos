"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Sparkles, Check, ArrowRight, Layers, Rocket } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { allFeaturesDirectory } from "@/lib/features-data";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { GridPattern } from "@/components/velora/grid-pattern";

export default function FeaturesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories = allFeaturesDirectory
    .filter((cat) => (selectedCategory === "all" ? true : cat.id === selectedCategory))
    .map((cat) => ({
      ...cat,
      features: cat.features.filter(
        (f) =>
          f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.features.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-32 pb-24">
        {/* Header Hero */}
        <section className="relative overflow-hidden py-14 text-center border-b border-border/40">
          <GridPattern
            width={48}
            height={48}
            className="fill-transparent stroke-border/30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Sparkles className="size-3.5" />
              <span>Ürün Rehberi</span>
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Oxonom POS Özellikler Kataloğu
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Masa yönetiminden mutfak ekranına, reçeteli stoktan yapay zeka araçlarına kadar tüm platform yeteneklerini inceleyin ve arayın.
            </p>

            {/* Search Input */}
            <div className="mt-8 max-w-md mx-auto relative">
              <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Özellik ara (örn: Z raporu, VOID, reçete, KDS)..."
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-border/70 bg-card/80 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>
        </section>

        {/* Category Pills Filter */}
        <section className="py-6 border-b border-border/40 bg-card/20 sticky top-16 z-30 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 overflow-x-auto no-scrollbar flex items-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background border border-border/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              Tüm Kategoriler
            </button>
            {allFeaturesDirectory.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-background border border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.categoryName}
              </button>
            ))}
          </div>
        </section>

        {/* Feature Directory Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 space-y-16">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-base text-muted-foreground">Aradığınız kriterlere uygun özellik bulunamadı.</p>
                <Button variant="outline" size="sm" onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }} className="mt-4">
                  Aramayı Temizle
                </Button>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div key={category.id} className="space-y-6 text-left">
                  <div className="border-b border-border/50 pb-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                      <Layers className="size-5 text-primary" />
                      <span>{category.categoryName}</span>
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.features.map((feature, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl border border-border/60 bg-card/60 hover:border-primary/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-bold text-sm text-foreground">{feature.name}</h3>
                            {feature.badge && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">
                                {feature.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-card/30 border-t border-border/40">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              İşletmeniz için tüm bu özellikler tek ekosistemde.
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              Oxonom POS ile karmaşık restoran operasyonlarınızı bugün kolaylaştırmaya başlayın.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link href="/demo">
                <ShimmerButton className="h-11 px-6 text-xs font-bold">
                  <Rocket className="size-3.5" />
                  <span>Ücretsiz Demo Talep Et</span>
                </ShimmerButton>
              </Link>
              <Button variant="outline" asChild className="h-11 px-6 rounded-full text-xs">
                <Link href="/fiyatlandirma">Fiyatları Gör</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
