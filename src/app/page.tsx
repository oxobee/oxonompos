"use client";

import Link from "next/link";
import { ArrowRight, LayoutTemplate, SparklesIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { GridPattern } from "@/components/velora/grid-pattern";
import { BlurFade } from "@/components/velora/blur-fade";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t, language } = useLanguage();
  const isTr = language === "tr";

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 text-center lg:px-8">
        <GridPattern
          width={48}
          height={48}
          className="fill-transparent stroke-border/40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <BlurFade delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <SparklesIcon className="size-3.5 text-primary" />
              <span>{t.home.badge}</span>
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              {t.home.title}
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {t.home.subtitle}
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/tema">
                <ShimmerButton className="h-11 px-6 text-sm font-medium">
                  <LayoutTemplate className="size-4" />
                  <span>{t.home.viewTema}</span>
                </ShimmerButton>
              </Link>
              <Button variant="outline" size="lg" asChild>
                <Link href="/components" className="gap-2">
                  <span>{t.home.componentsLink}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
