import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Store,
  Coffee,
  Zap,
  Bike,
  Building2,
  GitFork,
  Rocket,
  Sparkles,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { solutionItems, SolutionItem } from "@/lib/product-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { BlurFade } from "@/components/velora/blur-fade";
import { GridPattern } from "@/components/velora/grid-pattern";

export const dynamic = "force-static";

export function generateStaticParams() {
  return solutionItems.map((s) => ({
    slug: s.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sol = solutionItems.find((s) => s.slug === slug);
  if (!sol) return { title: "Çözüm Bulunamadı" };

  return {
    title: `${sol.title} İçin POS & Operasyon Sistemi | ${siteConfig.name}`,
    description: sol.description,
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sol = solutionItems.find((s) => s.slug === slug);

  if (!sol) {
    notFound();
  }

  const otherSolutions = solutionItems.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-6xl px-4 lg:px-8 py-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Ana Sayfa</Link>
            <ChevronRight className="size-3" />
            <span className="text-muted-foreground">Çözümler</span>
            <ChevronRight className="size-3" />
            <span className="text-foreground font-semibold">{sol.badge}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 lg:py-20 text-center border-b border-border/40">
          <GridPattern
            width={48}
            height={48}
            className="fill-transparent stroke-border/30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          />

          <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
            <BlurFade delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                <Sparkles className="size-3.5" />
                <span>Sektörel Çözüm: {sol.badge}</span>
              </span>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl text-foreground text-balance">
                {sol.title} İçin Yeni Nesil Operasyon Sistemi
              </h1>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {sol.description}
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/demo">
                  <ShimmerButton className="h-12 px-7 text-sm font-semibold">
                    <Rocket className="size-4" />
                    <span>Ücretsiz İşletme Demosu İste</span>
                  </ShimmerButton>
                </Link>
                <Button variant="outline" size="lg" asChild className="h-12 px-6 rounded-full">
                  <Link href="/fiyatlandirma">Paketleri İncele</Link>
                </Button>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Core Value Proposition Cards */}
        <section className="py-20 lg:py-28 border-b border-border/40">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">İşletme Avantajları</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {sol.badge} İşletmelerine Özel Faydalar
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {sol.benefits.map((benefit, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border/60 bg-card/70 flex items-start gap-4">
                  <div className="size-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">{benefit}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Sektörünüzün en kritik operasyonel tıkanıklıklarını çözmek üzere optimize edilmiş Oxonom altyapısı.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Modules */}
        <section className="py-20 bg-card/20 border-b border-border/40">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Öne Çıkan Özellikler</span>
              <h3 className="text-2xl font-bold text-foreground mt-1">
                Bu Çözümde En Çok Kullanılan Modüller
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {sol.focusModules.map((m, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-background border border-border/80 shadow-sm text-sm font-semibold text-foreground flex items-center gap-2"
                >
                  <Sparkles className="size-3.5 text-primary" />
                  <span>{m}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Other Solutions */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-left">Diğer Sektörel Çözümler</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
              {otherSolutions.map((s) => (
                <Link
                  key={s.id}
                  href={`/cozumler/${s.slug}`}
                  className="p-5 rounded-2xl border border-border/60 bg-card/60 hover:border-primary/50 transition-all group"
                >
                  <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors block">
                    {s.title}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                    {s.shortDesc}
                  </p>
                  <span className="text-[11px] font-semibold text-primary mt-3 inline-flex items-center gap-1">
                    İncele <ArrowRight className="size-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
