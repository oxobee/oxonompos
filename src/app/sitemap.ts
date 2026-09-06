import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog-posts";
import { siteConfig } from "@/lib/site-config";
import { productModules, solutionItems } from "@/lib/product-data";

export const dynamic = "force-static";

const BASE = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/ozellikler",
    "/fiyatlandirma",
    "/demo",
    "/hakkimizda",
    "/iletisim",
    "/blog",
    "/guncellemeler",
    "/login",
    "/signup",
    "/gizlilik",
    "/kvkk",
    "/cerez-politikasi",
    "/kullanim-kosullari",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productPages = productModules.map((p) => ({
    url: `${BASE}${p.href}`,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const solutionPages = solutionItems.map((s) => ({
    url: `${BASE}/cozumler/${s.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const postPages = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.dateISO,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...solutionPages, ...postPages];
}
