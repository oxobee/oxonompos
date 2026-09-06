"use client";

import Link from "next/link";
import { SparklesIcon } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";

export function SiteFooter() {
  const { t } = useLanguage();

  const groups = [
    {
      title: t.footer.product,
      links: [
        { text: t.nav.components, href: "/components" },
        { text: t.nav.themes, href: "/themes" },
        { text: t.nav.pricing, href: "/pricing" },
        { text: t.nav.changelog, href: "/changelog" },
      ],
    },
    {
      title: t.footer.templates,
      links: [
        { text: t.nav.blog, href: "/blog" },
        { text: t.nav.about, href: "/about" },
        { text: t.nav.contact, href: "/contact" },
        { text: t.nav.login, href: "/login" },
        { text: t.nav.signup, href: "/signup" },
      ],
    },
    {
      title: t.footer.resources,
      links: [
        { text: "GitHub", href: siteConfig.github },
        { text: "llms.txt", href: "/llms.txt" },
        { text: "shadcn registry", href: "/components" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/40 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold text-base">
            <SparklesIcon className="size-5 text-primary" />
            <span>Oxonompos</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {t.footer.description}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            {t.footer.builtWith}
          </p>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="text-sm font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {group.links.map((link) => (
                <li key={link.text}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      rel="noopener"
                      className="transition-colors hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-border/40 px-4 pt-6 text-xs text-muted-foreground md:flex-row lg:px-8">
        <span>{t.footer.rights}</span>
        <span>{t.footer.reducedMotion}</span>
      </div>
    </footer>
  );
}
