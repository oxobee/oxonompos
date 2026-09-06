"use client";

import Link from "next/link";
import { SparklesIcon, StarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-base">
          <SparklesIcon className="size-5 text-primary" />
          <span>Oxonompos</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="/tema" className="font-medium text-primary transition-colors hover:text-primary/80">
            {t.nav.tema}
          </Link>
          <Link href="/components" className="transition-colors hover:text-foreground">
            {t.nav.components}
          </Link>
          <Link href="/themes" className="transition-colors hover:text-foreground">
            {t.nav.themes}
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-foreground">
            {t.nav.pricing}
          </Link>
          <Link href="/blog" className="transition-colors hover:text-foreground">
            {t.nav.blog}
          </Link>
          <Link href="/changelog" className="transition-colors hover:text-foreground">
            {t.nav.changelog}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
            <a href={siteConfig.github} rel="noopener" target="_blank">
              <StarIcon />
              {t.nav.starOnGithub}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
