/**
 * Oxonom POS Central Site Configuration
 */
export const siteConfig = {
  name: "Oxonom POS",
  shortName: "Oxonom",
  slogan: "Yapay zeka destekli işletme yönetim yazılımı",
  tagline: "İşletmenizin tüm operasyonu tek platformda.",
  description:
    "Restoran, kafe, bar ve zincir işletmeler için yapay zeka destekli bulut tabanlı yeni nesil POS, masa & sipariş, QR menü, mutfak ekranı (KDS), stok & reçete, CRM, personel ve operasyon yönetim platformu.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://oxonompos.vercel.app"
  ).replace(/\/$/, ""),
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL ??
    "https://github.com/oxobee/oxonompos",
  contact: {
    email: "iletisim@oxonom.com",
    salesEmail: "satis@oxonom.com",
    supportEmail: "destek@oxonom.com",
    phone: "+90 850 309 9901",
    address: "Levent, Büyükdere Cad. No:199, Şişli / İstanbul",
  },
  links: {
    app: "/login",
    signup: "/signup",
    demo: "/demo",
  },
} as const;
