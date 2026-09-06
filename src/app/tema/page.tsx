"use client";

import {
  CheckIcon,
  GaugeIcon,
  LayersIcon,
  MoonIcon,
  MousePointerClickIcon,
  PaletteIcon,
  RocketIcon,
  SparklesIcon,
  StarIcon,
  ZapIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ActivityList } from "@/components/demo/activity-list";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroMockup } from "@/components/demo/hero-mockup";
import { IntegrationsBeam } from "@/components/demo/integrations-beam";
import { AnimatedGradientText } from "@/components/velora/animated-gradient-text";
import { AuroraBackground } from "@/components/velora/aurora-background";
import { AvatarCircles } from "@/components/velora/avatar-circles";
import { BentoCard, BentoGrid } from "@/components/velora/bento-grid";
import { BlurFade } from "@/components/velora/blur-fade";
import { BorderBeam } from "@/components/velora/border-beam";
import { Dock, DockIcon } from "@/components/velora/dock";
import { DotPattern, GridPattern } from "@/components/velora/grid-pattern";
import { Marquee } from "@/components/velora/marquee";
import { Meteors } from "@/components/velora/meteors";
import { NumberTicker } from "@/components/velora/number-ticker";
import { OrbitingCircles } from "@/components/velora/orbiting-circles";
import { Particles } from "@/components/velora/particles";
import { RetroGrid } from "@/components/velora/retro-grid";
import { ScrollProgress } from "@/components/velora/scroll-progress";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { TextReveal } from "@/components/velora/text-reveal";
import { TiltCard } from "@/components/velora/tilt-card";
import { Typewriter } from "@/components/velora/typewriter";
import { useLanguage } from "@/lib/language-context";

const logos = [
  "Acme Corp",
  "Quantum",
  "Vertex",
  "Northwind",
  "Apex Labs",
  "Orbital",
  "Luminary",
  "Pulsewave",
];

export default function Home() {
  const { language, t } = useLanguage();
  const isTr = language === "tr";

  const stats = [
    { value: 32, suffix: "+", prefix: "", label: t.stats.components },
    { value: 100, suffix: "", prefix: "", label: t.stats.lighthouse },
    { value: 0, suffix: "", prefix: "$", label: t.stats.licensed },
    { value: 5, suffix: isTr ? " dk" : " min", prefix: "", label: t.stats.timeToPage },
  ];

  const testimonials = isTr
    ? [
        {
          quote: "199 dolarlık hazır şablonu tek bir akşamda Oxonompos ile değiştirdim. Animasyonlar gerçekten akıcı ve harika hissettiriyor.",
          name: "Maya Chen",
          role: "Tasarım Mühendisi, Studio K",
        },
        {
          quote: "Bento grid ve parlayan kenarlık kombiniyle yeni açılış sayfamızı tüm ekibe tek sunumda beğendirdik.",
          name: "Tom Okafor",
          role: "Frontend Lideri, Pulsewave",
        },
        {
          quote: "Kopyala, yapıştır, yayına al. Bileşenler shadcn/ui ekosistemiyle %100 uyumlu.",
          name: "Sofia Lindqvist",
          role: "Girişimci & Geliştirici",
        },
        {
          quote: "Bu kadar yoğun animasyon ve hareket varken Lighthouse'da 100 tam puan? İki kere kontrol ettim, gerçekten kusursuz.",
          name: "Dan Romero",
          role: "CTO, Orbital",
        },
        {
          quote: "Yapay zeka ürünümüzün açılış sayfasını bir günde yayına aldık. Aurora hero arka planı her hafta övgü alıyor.",
          name: "Aisha Patel",
          role: "Kurucu, Luminary",
        },
        {
          quote: "Ücretsiz olup da bu kadar kaliteli görünen ilk bileşen kütüphanesi.",
          name: "Lukas Weber",
          role: "Ürün Tasarımcısı",
        },
      ]
    : [
        {
          quote: "I replaced a $199 template with Oxonompos in one evening. The animations are genuinely better — and everything respects reduced motion out of the box.",
          name: "Maya Chen",
          role: "Design engineer, Studio K",
        },
        {
          quote: "The bento grid + border beam combo sold our landing page redesign to the whole team in one demo.",
          name: "Tom Okafor",
          role: "Frontend lead, Pulsewave",
        },
        {
          quote: "Copy, paste, ship. The components feel like shadcn/ui natives, not bolted-on extras.",
          name: "Sofia Lindqvist",
          role: "Indie hacker",
        },
        {
          quote: "Perfect Lighthouse scores with this much motion on screen? I checked twice.",
          name: "Dan Romero",
          role: "CTO, Orbital",
        },
        {
          quote: "We shipped our AI product launch page in a day. The aurora hero gets compliments weekly.",
          name: "Aisha Patel",
          role: "Founder, Luminary",
        },
        {
          quote: "The first free template that doesn't look free.",
          name: "Lukas Weber",
          role: "Product designer",
        },
      ];

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  const freeFeatures = isTr
    ? [
        "64+ animasyonlu bileşen",
        "Eksiksiz SaaS açılış şablonu",
        "Karanlık mod + tam erişilebilirlik",
        "MIT lisansı — ticari kullanım serbest",
        "Topluluk desteği",
      ]
    : [
        "64+ animated components",
        "Complete SaaS landing template",
        "Dark mode + full accessibility",
        "MIT license — commercial use OK",
        "Community support",
      ];

  const proFeatures = isTr
    ? [
        "5 niş şablon (AI, geliştirici araçları, mobil…)",
        "50+ ek bölüm tasarım varyantı",
        "Figma kaynak dosyaları",
        "Bekleme listesi, bülten & Stripe entegrasyonu",
        "Özel kayıt defteri + ömür boyu güncellemeler",
      ]
    : [
        "5 niche templates (AI, dev tool, mobile…)",
        "50+ section design variants",
        "Figma source file",
        "Waitlist, newsletter & Stripe wiring",
        "Private registry + lifetime updates",
      ];

  return (
    <main className="relative">
      <ScrollProgress />

      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-28">
        <AuroraBackground intensity="subtle" />
        <GridPattern
          width={48}
          height={48}
          className="fill-transparent stroke-border/60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 text-center lg:px-8">
          <BlurFade delay={0} direction="down">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-sm backdrop-blur">
              <SparklesIcon className="size-3.5 text-primary" />
              <span className="font-medium">
                {t.hero.badge}
              </span>
            </span>
          </BlurFade>

          <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-balance lg:text-7xl">
            <TextReveal text={t.hero.titleStart} />{" "}
            <AnimatedGradientText>
              <Typewriter words={isTr ? ["büyüleyen.", "kusursuz.", "unutulmaz."] : ["alive.", "effortless.", "unforgettable."]} />
            </AnimatedGradientText>{" "}
            <span>{t.hero.titleEnd}</span>
          </h1>

          <BlurFade delay={0.35}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              {t.hero.description}
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ShimmerButton>
                <RocketIcon className="size-4" />
                {t.hero.getStarted}
              </ShimmerButton>
              <Button variant="ghost" size="lg" asChild>
                <a href="#features">{t.hero.browseComponents}</a>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.6}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AvatarCircles
                people={[
                  "Maya Chen",
                  "Tom Okafor",
                  "Sofia Lindqvist",
                  "Dan Romero",
                  "Aisha Patel",
                ]}
                extra={2400}
              />
              <div className="flex flex-col items-center gap-0.5 sm:items-start">
                <span className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <span className="text-sm text-muted-foreground">
                  {isTr ? "2.400+ geliştirici tarafından seviliyor" : "Loved by 2,400+ builders"}
                </span>
              </div>
            </div>
          </BlurFade>

          {/* Product mockup */}
          <BlurFade delay={0.75} offset={32}>
            <HeroMockup className="mt-20" />
          </BlurFade>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <BlurFade key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl font-semibold tracking-tight">
                    <NumberTicker
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="border-y border-border/40 py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <p className="mb-8 text-center text-sm text-muted-foreground">
            {t.hero.trustedBy}
          </p>
          <Marquee pauseOnHover className="[--duration:30s]">
            {logos.map((logo) => (
              <span
                key={logo}
                className="mx-8 text-xl font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {logo}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Bento features */}
      <section id="features" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              {t.features.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              {t.features.description}
            </p>
          </BlurFade>

          <BlurFade delay={0.15}>
            <BentoGrid className="mt-16">
              <BentoCard
                name={t.features.orbitTitle}
                description={t.features.orbitDesc}
                className="md:col-span-1"
                background={
                  <div className="relative flex size-full items-center justify-center pb-20">
                    <ZapIcon className="size-8 text-primary" />
                    <OrbitingCircles radius={90} iconSize={28} duration={24}>
                      <LayersIcon className="size-5 text-muted-foreground" />
                      <PaletteIcon className="size-5 text-muted-foreground" />
                      <GaugeIcon className="size-5 text-muted-foreground" />
                    </OrbitingCircles>
                  </div>
                }
              />
              <BentoCard
                name={isTr ? "Işıltılı Çerçeveler" : "Animated borders"}
                description={isTr ? "Kartların ve eylem butonlarının etrafında dolaşan ışık huzmeleri." : "Draw the eye with beams that travel around any card or CTA."}
                className="md:col-span-2"
                background={
                  <div className="absolute inset-6 rounded-xl border bg-card/50">
                    <BorderBeam size={72} duration={7} />
                    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                      &lt;BorderBeam /&gt;
                    </div>
                  </div>
                }
              />
              <BentoCard
                name={isTr ? "Kayan Referanslar" : "Scrolling testimonials"}
                description={isTr ? "Sosyal kanıt için üzerine gelindiğinde duraklayan dikey kaydırma." : "Vertical marquees with hover-pause for social proof walls."}
                className="md:col-span-2"
                background={
                  <div className="absolute inset-x-10 top-4 bottom-24">
                    <Marquee
                      vertical
                      pauseOnHover
                      className="h-full [--duration:24s]"
                    >
                      {[
                        isTr ? "“Açılış sayfamızı tek bir öğleden sonra yayına aldık.”" : "“Shipped our launch page in an afternoon.”",
                        isTr ? "“Animasyonlar ipeksi bir pürüzsüzlükte.”" : "“The animations are buttery smooth.”",
                        isTr ? "“Sonunda gerçekten kaliteli hissettiren ücretsiz bileşenler.”" : "“Finally, free components that feel premium.”",
                        isTr ? "“Kutudan çıktığı gibi Lighthouse 100 tam puan.”" : "“Lighthouse 100 out of the box.”",
                      ].map((quote) => (
                        <div
                          key={quote}
                          className="rounded-xl border bg-card/80 p-4 text-sm text-muted-foreground"
                        >
                          {quote}
                        </div>
                      ))}
                    </Marquee>
                  </div>
                }
              />
              <BentoCard
                name={t.features.meteorsTitle}
                description={t.features.meteorsDesc}
                className="md:col-span-1"
                background={
                  <div className="absolute inset-0">
                    <DotPattern className="[mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                    <Meteors number={10} />
                  </div>
                }
              />
            </BentoGrid>
          </BlurFade>
        </div>
      </section>

      {/* Integrations beam */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <BlurFade direction="right">
            <div>
              <span className="text-sm font-medium text-primary">
                {isTr ? "Animasyonlu Işınlar" : "Animated beams"}
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                {isTr ? (
                  <>Her şeyi <span className="text-primary">birbirine bağlayın</span></>
                ) : (
                  <>Connect anything to <span className="text-primary">everything</span></>
                )}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {isTr
                  ? "Klasik entegrasyon diyagramı, tek bir bileşende yeniden tasarlandı. İki öğe arasına bir ışın yerleştirin; kendisi çizilir, kıvrılır ve canlanır."
                  : "The classic integrations diagram, rebuilt as a single component. Point a beam at any two elements and it draws, curves and animates itself — responsive and resize-aware."}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  isTr ? "İki referans noktası arasında otomatik hesaplanan rotalar" : "Auto-measured paths between any two refs",
                  isTr ? "Işın başına eğrilik, yön, hız ve renk ayarı" : "Curvature, direction, speed and color per beam",
                  isTr ? "Boyut değişimine duyarlı — manuel koordinat gerektirmez" : "Resize-aware — no manual coordinates",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <CheckIcon className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
          <BlurFade direction="left" delay={0.15}>
            <IntegrationsBeam />
          </BlurFade>
        </div>
      </section>

      {/* Live activity */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <RetroGrid />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <BlurFade direction="right" className="order-2 lg:order-1">
            <ActivityList />
          </BlurFade>
          <BlurFade direction="left" delay={0.15} className="order-1 lg:order-2">
            <div>
              <span className="text-sm font-medium text-primary">
                {isTr ? "Canlı Akış Listesi" : "Animated lists"}
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                {isTr ? (
                  <>Ürününüzün <span className="text-primary">hareketini sergileyin</span></>
                ) : (
                  <>Show your product <span className="text-primary">doing things</span></>
                )}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {isTr
                  ? "Bildirimler, satışlar, dağıtımlar — her öğeyi zarifçe listeye dahil eden ve diğerlerini aşağı kaydıran döngüsel canlı akış."
                  : "Notifications, sales, deploys — a looping feed that springs each item in and gracefully pushes the rest down. Perfect for hero mockups and feature sections that need life."}
              </p>
              <p className="mt-4 text-muted-foreground">
                {isTr
                  ? "Arka planda: Ufka doğru sonsuza kadar uzanan nostaljik retro ızgara."
                  : "Behind it: the retro grid backdrop, scrolling forever toward the horizon."}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Spotlight cards */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <GaugeIcon className="size-6" />,
                title: isTr ? "Önce Performans" : "Performance first",
                body: isTr
                  ? "Mümkün olan her yerde CSS tabanlı animasyonlar. Sıfır düzen kayması (CLS) ve maksimum hız."
                  : "CSS-driven animations wherever possible, Motion only where it earns its bytes. No layout shift, ever.",
              },
              {
                icon: <MousePointerClickIcon className="size-6" />,
                title: isTr ? "Varsayılan Olarak Erişilebilir" : "Accessible by default",
                body: isTr
                  ? "Her bileşen prefers-reduced-motion standardına uyar, klavye odağını korur ve anlamsal HTML sunar."
                  : "Every component respects prefers-reduced-motion, keeps keyboard focus visible and ships semantic markup.",
              },
              {
                icon: <MoonIcon className="size-6" />,
                title: isTr ? "Doğal Karanlık Mod" : "Dark mode native",
                body: isTr
                  ? "Modern oklch renk değişkenleriyle karanlık mod öncelikli tasarlandı. Tek sınıfla tüm gradyanlar uyum sağlar."
                  : "Designed dark-first with oklch color tokens. Flip one class and every gradient adapts.",
              },
            ].map((card, i) => (
              <BlurFade key={card.title} delay={i * 0.12}>
                <SpotlightCard className="h-full p-8">
                  <div className="mb-4 w-fit rounded-xl bg-primary/10 p-3 text-primary">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {card.body}
                  </p>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              {t.testimonials.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              {t.testimonials.description}
            </p>
          </BlurFade>
          <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {testimonials.map((item, i) => (
              <BlurFade key={item.name} delay={(i % 3) * 0.1} className="break-inside-avoid">
                <TiltCard>
                  <figure className="rounded-2xl border bg-card p-6">
                    <span className="flex gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <StarIcon key={s} className="size-3.5 fill-current" />
                      ))}
                    </span>
                    <blockquote className="mt-4 text-sm text-card-foreground">
                      “{item.quote}”
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3">
                      <AvatarCircles people={[item.name]} className="[&>span]:size-8 [&>span]:text-[10px]" />
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </TiltCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
              {isTr ? (
                <>Daima ücretsiz. <span className="text-primary">Pro yakında.</span></>
              ) : (
                <>Free forever. <span className="text-primary">Pro later.</span></>
              )}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              {isTr
                ? "Bu sayfadaki her şey tamamen ücretsizdir. Pro sürümü daha fazla niş şablon ve varyant ekleyecektir."
                : "Everything on this page is free. Pro adds breadth — more niches, more variants, more shortcuts."}
            </p>
          </BlurFade>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
            <BlurFade>
              <div className="flex h-full flex-col rounded-2xl border bg-card p-8">
                <h3 className="text-lg font-semibold">{isTr ? "Ücretsiz" : "Free"}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {isTr ? "Bu vitrinde gördüğünüz tüm bileşenler." : "Everything you see in this showcase."}
                </p>
                <p className="mt-6 text-5xl font-semibold tracking-tight">
                  $0
                  <span className="text-base font-normal text-muted-foreground">
                    {" "}
                    {isTr ? "daima" : "forever"}
                  </span>
                </p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {freeFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="lg" className="mt-8 w-full rounded-full">
                  {t.hero.getStarted}
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.12}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-8">
                <BorderBeam size={80} duration={8} />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary">Pro</h3>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                    {isTr ? "Yakında" : "Coming soon"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {isTr ? "Birden fazla sayfa geliştiren profesyonel ekipler için." : "For teams shipping more than one page."}
                </p>
                <p className="mt-6 text-5xl font-semibold tracking-tight">
                  $99
                  <span className="text-base font-normal text-muted-foreground">
                    {" "}
                    {isTr ? "ömür boyu" : "lifetime"}
                  </span>
                </p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <ShimmerButton className="mt-8 w-full">
                  {isTr ? "Bekleme Listesine Katıl" : "Join the waitlist"}
                </ShimmerButton>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl">
              {t.faq.title}
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <Accordion type="single" collapsible className="mt-12">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <AuroraBackground intensity="subtle" />
        <Particles quantity={50} />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <BlurFade>
            <h2 className="text-4xl font-semibold tracking-tight text-balance lg:text-6xl">
              {isTr ? (
                <>Açılış sayfaları için <span className="text-primary">$199</span> ödemeyi bırakın.</>
              ) : (
                <>Stop paying <span className="text-primary">$199</span> for landing pages.</>
              )}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              {isTr
                ? "Oxonompos size aynı zarafeti — animasyonlu, erişilebilir ve üretime hazır olarak — tamamen ücretsiz sunar."
                : "Oxonompos gives you the same polish — animated, accessible and production-ready — for free."}
            </p>
            <div className="mt-10">
              <ShimmerButton className="h-14 px-10 text-base">
                <RocketIcon className="size-5" />
                {t.cta.button}
              </ShimmerButton>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="mt-16">
              <p className="mb-4 text-xs text-muted-foreground">
                {isTr ? "Dock menüsü bile bir bileşendir — üzerine gelin" : "Even the dock is a component — hover it"}
              </p>
              <Dock>
                <DockIcon label={t.nav.components}>
                  <LayersIcon className="size-5" />
                </DockIcon>
                <DockIcon label={t.nav.themes}>
                  <PaletteIcon className="size-5" />
                </DockIcon>
                <DockIcon label={isTr ? "Performans" : "Performance"}>
                  <GaugeIcon className="size-5" />
                </DockIcon>
                <DockIcon label={isTr ? "Animasyonlar" : "Animations"}>
                  <ZapIcon className="size-5" />
                </DockIcon>
                <DockIcon label={isTr ? "Karanlık Mod" : "Dark mode"}>
                  <MoonIcon className="size-5" />
                </DockIcon>
                <DockIcon label={isTr ? "Yayınla" : "Ship it"}>
                  <RocketIcon className="size-5" />
                </DockIcon>
              </Dock>
            </div>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
