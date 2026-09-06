"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "tr" | "en";

export interface Translations {
  nav: {
    components: string;
    themes: string;
    pricing: string;
    blog: string;
    changelog: string;
    about: string;
    contact: string;
    login: string;
    signup: string;
    starOnGithub: string;
    tema: string;
  };
  home: {
    badge: string;
    title: string;
    subtitle: string;
    viewTema: string;
    componentsLink: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleGradient: string;
    titleEnd: string;
    description: string;
    browseComponents: string;
    getStarted: string;
    trustedBy: string;
  };
  stats: {
    components: string;
    lighthouse: string;
    licensed: string;
    timeToPage: string;
  };
  features: {
    tag: string;
    title: string;
    description: string;
    dockTitle: string;
    dockDesc: string;
    orbitTitle: string;
    orbitDesc: string;
    shimmerTitle: string;
    shimmerDesc: string;
    meteorsTitle: string;
    meteorsDesc: string;
    cardsTitle: string;
    cardsDesc: string;
  };
  testimonials: {
    tag: string;
    title: string;
    description: string;
  };
  faq: {
    tag: string;
    title: string;
    description: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    description: string;
    builtWith: string;
    product: string;
    templates: string;
    resources: string;
    rights: string;
    reducedMotion: string;
  };
}

export const translations: Record<Language, Translations> = {
  tr: {
    nav: {
      components: "Bileşenler",
      themes: "Temalar",
      pricing: "Fiyatlandırma",
      blog: "Blog",
      changelog: "Değişiklikler",
      about: "Hakkında",
      contact: "İletişim",
      login: "Giriş Yap",
      signup: "Kayıt Ol",
      starOnGithub: "GitHub'da Yıldızla",
      tema: "Tema",
    },
    home: {
      badge: "Oxonompos Başlangıç",
      title: "Oxonompos",
      subtitle: "Yeni sayfanız hazır. Tüm bileşenler ve tasarım sistemi kullanımınıza sunuldu.",
      viewTema: "Tema Vitrinini Aç (/tema)",
      componentsLink: "Bileşenleri Keşfet",
    },
    hero: {
      badge: "v0.1.0 — 32+ Animasyonlu React Bileşeni",
      titleStart: "Ziyaretçileri",
      titleGradient: "büyüleyen",
      titleEnd: "modern sayfalar oluşturun.",
      description:
        "Ücretsiz, kopyala-yapıştır shadcn/ui animasyonlu bileşenler ve eksiksiz açılış sayfası şablonları. Next.js 16, Tailwind CSS 4 ve Motion ile geliştirildi.",
      browseComponents: "Bileşenleri Keşfet",
      getStarted: "Hemen Başla",
      trustedBy: "Dünya çapındaki geliştiriciler ve yenilikçi ekipler tarafından tercih ediliyor",
    },
    stats: {
      components: "Animasyonlu bileşen",
      lighthouse: "Lighthouse performansı",
      licensed: "Daima ücretsiz. MIT lisanslı",
      timeToPage: "İlk sayfanıza ulaşma süresi",
    },
    features: {
      tag: "Öne Çıkan Özellikler",
      title: "Hız ve estetik için tasarlandı",
      description:
        "Her animasyon 60fps GPU hızlandırmalıdır ve prefers-reduced-motion standardını kusursuz şekilde destekler.",
      dockTitle: "Etkileşimli Dock Menüsü",
      dockDesc: "macOS tarzı pürüzsüz büyütme ve yay efektleri.",
      orbitTitle: "Yörüngesel Döngüler",
      orbitDesc: "Entegrasyonları ve ikonları şık bir yörüngede döndürün.",
      shimmerTitle: "Işıltılı Butonlar",
      shimmerDesc: "Dönüşüm oranlarını artıran dikkat çekici parıltı efektleri.",
      meteorsTitle: "Meteor Yağmuru Efekti",
      meteorsDesc: "Modern ve dinamik arka plan atmosferi.",
      cardsTitle: "Spotlight & 3D Tilt Kartları",
      cardsDesc: "Fare hareketlerine duyarlı gerçekçi derinlik hissi.",
    },
    testimonials: {
      tag: "Kullanıcı Yorumları",
      title: "Geliştiriciler ve tasarımcılar tarafından seviliyor",
      description: "Oxonompos ile modern web deneyimleri inşa edenlerin görüşleri.",
    },
    faq: {
      tag: "SSS",
      title: "Sıkça Sorulan Sorular",
      description: "Oxonompos hakkında merak ettiğiniz tüm soruların yanıtları.",
      q1: "Ticari projelerimde kullanabilir miyim?",
      a1: "Evet, %100 ücretsiz ve MIT lisanslıdır. Kişisel, açık kaynaklı veya ticari projelerinizde özgürce kullanabilirsiniz.",
      q2: "Hangi teknolojiler üzerine kurulu?",
      a2: "Next.js 16 (Turbopack), React 19, Tailwind CSS v4, Motion ve Radix UI üzerine kurulmuştur.",
      q3: "Bileşenleri kendi projeme nasıl eklerim?",
      a3: "Bileşen kodlarını doğrudan kopyalayıp projenize yapıştırabilir veya shadcn CLI ile tek komutta kurabilirsiniz.",
      q4: "Performans ve erişilebilirlik nasıl optimize edildi?",
      a4: "Tüm bileşenler donanım hızlandırmalıdır, Lighthouse'da tam puan alacak şekilde optimize edilmiştir ve prefers-reduced-motion standardına uyar.",
    },
    cta: {
      title: "Sıradaki projenizi dakikalar içinde yayınlayın",
      description: "Oxonompos ile zaman kaybetmeden modern, hızlı ve etkileyici web sayfaları inşa edin.",
      button: "Şimdi Başlayın",
    },
    footer: {
      description:
        "React için ücretsiz, MIT lisanslı animasyonlu bileşenler ve açılış sayfası şablonları.",
      builtWith: "Next.js 16, Tailwind CSS 4 & Motion ile geliştirildi",
      product: "Ürün",
      templates: "Şablonlar",
      resources: "Kaynaklar",
      rights: "Oxonompos — MIT lisanslı, daima ücretsiz.",
      reducedMotion: "Tüm animasyonlar prefers-reduced-motion standardını destekler.",
    },
  },
  en: {
    nav: {
      components: "Components",
      themes: "Themes",
      pricing: "Pricing",
      blog: "Blog",
      changelog: "Changelog",
      about: "About",
      contact: "Contact",
      login: "Log in",
      signup: "Sign up",
      starOnGithub: "Star on GitHub",
      tema: "Theme",
    },
    home: {
      badge: "Oxonompos Starter",
      title: "Oxonompos",
      subtitle: "Your new page is ready. All components and design systems are at your disposal.",
      viewTema: "Open Theme Showcase (/tema)",
      componentsLink: "Explore Components",
    },
    hero: {
      badge: "v0.1.0 — 32+ Animated React Components",
      titleStart: "Build landings that",
      titleGradient: "turn heads",
      titleEnd: "in minutes.",
      description:
        "A free, copy-paste shadcn/ui animated components & complete landing templates. Built with Next.js 16, Tailwind CSS 4 and Motion.",
      browseComponents: "Browse Components",
      getStarted: "Get Started",
      trustedBy: "Trusted by founders & builders worldwide",
    },
    stats: {
      components: "Animated components",
      lighthouse: "Lighthouse performance",
      licensed: "Forever. MIT licensed",
      timeToPage: "To your first page",
    },
    features: {
      tag: "Features",
      title: "Built for speed & delight",
      description:
        "Every animation is 60fps GPU-accelerated and respects prefers-reduced-motion out of the box.",
      dockTitle: "Interactive Dock Menu",
      dockDesc: "macOS style fluid magnification & spring physics.",
      orbitTitle: "Orbiting Circles",
      orbitDesc: "Showcase integrations revolving in smooth orbits.",
      shimmerTitle: "Shimmer Buttons",
      shimmerDesc: "High-converting animated buttons that draw the eye.",
      meteorsTitle: "Meteor Shower Effect",
      meteorsDesc: "Dynamic starry background atmosphere.",
      cardsTitle: "Spotlight & 3D Tilt Cards",
      cardsDesc: "Mouse-aware realistic depth and lighting.",
    },
    testimonials: {
      tag: "Testimonials",
      title: "Loved by engineers & designers",
      description: "See what builders are saying about Oxonompos.",
    },
    faq: {
      tag: "FAQ",
      title: "Frequently Asked Questions",
      description: "Everything you need to know about Oxonompos.",
      q1: "Is it really free for commercial projects?",
      a1: "Yes, 100% free and MIT licensed. You can use it in personal, open source, or commercial projects without attribution.",
      q2: "Which tech stack is used?",
      a2: "Built with Next.js 16 (Turbopack), React 19, Tailwind CSS v4, Motion, and Radix UI.",
      q3: "How do I install the components?",
      a3: "You can copy-paste the component code directly or install via shadcn CLI commands.",
      q4: "How is performance & accessibility handled?",
      a4: "All components are GPU accelerated, tuned for perfect Lighthouse scores, and automatically respect prefers-reduced-motion.",
    },
    cta: {
      title: "Ship your next project in minutes",
      description: "Build modern, fast, and stunning web pages without wasting time.",
      button: "Get Started Now",
    },
    footer: {
      description:
        "Free, MIT-licensed animated components and complete landing templates for React.",
      builtWith: "Built with Next.js 16, Tailwind CSS 4 & Motion",
      product: "Product",
      templates: "Template pages",
      resources: "Resources",
      rights: "Oxonompos — MIT licensed, free forever.",
      reducedMotion: "Every animation respects prefers-reduced-motion.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "tr",
  setLanguage: () => {},
  t: translations.tr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("oxonompos_lang") as Language | null;
    if (saved === "tr" || saved === "en") {
      setLanguageState(saved);
    } else {
      const browserLang = typeof navigator !== "undefined" && navigator.language.startsWith("tr") ? "tr" : "en";
      setLanguageState(browserLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("oxonompos_lang", lang);
    } catch {}
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
