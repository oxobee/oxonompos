import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, BookOpen } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { blogPosts } from "@/lib/blog-posts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Restoran Yönetim Blogu | ${siteConfig.name}`,
  description: "Restoran işletmeciliği, mutfak ekranı, bulut POS, stok ve yapay zeka teknolojileri üzerine uzman rehberler.",
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <PageHeader
        eyebrow="Oxonom Blog"
        title={
          <>
            Restoran <span className="text-primary">Teknolojileri Rehberi</span>
          </>
        }
        description="Gastronomi sektöründe dijitalleşme, mutfak verimliliği, stok yönetimi ve yeni nesil restoran operasyonlarına dair uzman içerikler."
      />

      <section className="pb-28 flex-1">
        <div className="mx-auto max-w-3xl space-y-6 px-4 lg:px-8 text-left">
          {blogPosts.map((post, i) => (
            <BlurFade key={post.slug} delay={Math.min(i * 0.1, 0.3)}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border/60 bg-card/70 p-7 transition-colors hover:border-primary/50 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <Badge className="bg-primary/15 text-primary hover:bg-primary/15 font-semibold">
                    {post.category}
                  </Badge>
                  <time dateTime={post.dateISO}>{post.date}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-lg font-bold tracking-tight text-balance group-hover:text-primary transition-colors lg:text-xl text-foreground">
                  {post.title}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                  Yazıyı Oku
                  <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
