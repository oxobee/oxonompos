"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Boxes,
  ChevronDown,
  CookingPot,
  CreditCard,
  Menu,
  QrCode,
  Receipt,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Utensils,
  X,
  Store,
  Coffee,
  Zap,
  Bike,
  Building2,
  GitFork,
  BookOpen,
  History,
  HelpCircle,
  Info,
  Mail,
  ArrowRight,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight text-lg text-foreground hover:opacity-90 transition-opacity"
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/30">
            <Sparkles className="size-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="leading-tight font-black tracking-tighter text-base">OXONOM <span className="text-primary font-bold">POS</span></span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">Restoran Operasyonu</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-muted-foreground">
          {/* Ürün Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none data-[state=open]:text-foreground">
              <span>Ürün</span>
              <ChevronDown className="size-3.5 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[520px] p-3 grid grid-cols-2 gap-1.5 z-50">
              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                <Link href="/urun/pos" className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <CreditCard className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">POS & Satış</div>
                    <div className="text-xs text-muted-foreground leading-tight">Parçalı ödeme ve hızlı adisyon</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                <Link href="/urun/masa-siparis" className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <Utensils className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Masa & Sipariş</div>
                    <div className="text-xs text-muted-foreground leading-tight">Görsel kat planı ve canlı masalar</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                <Link href="/urun/qr-menu" className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <QrCode className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">QR Menü</div>
                    <div className="text-xs text-muted-foreground leading-tight">Uygulamasız dijital görsel menü</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                <Link href="/urun/self-order" className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <Smartphone className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                      QR Self Order
                      <span className="text-[10px] bg-primary/15 text-primary px-1.5 py-0.2 rounded font-medium">Yeni</span>
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">Masadan doğrudan mutfağa sipariş</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                <Link href="/urun/kds" className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <CookingPot className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Mutfak Ekranı (KDS)</div>
                    <div className="text-xs text-muted-foreground leading-tight">3 aşamalı dijital hazırlık takibi</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                <Link href="/urun/stok-recete" className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <Boxes className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Stok & Reçete</div>
                    <div className="text-xs text-muted-foreground leading-tight">Satış anında otomatik hammadde düşümü</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                <Link href="/urun/musteri-crm" className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <Users className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Müşteri CRM</div>
                    <div className="text-xs text-muted-foreground leading-tight">Sipariş geçmişi ve sadakat puanı</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                <Link href="/urun/personel" className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Personel & Yetki</div>
                    <div className="text-xs text-muted-foreground leading-tight">Rol izinleri, PIN ve vardiya takibi</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                <Link href="/urun/raporlama" className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <BarChart3 className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Analitik Raporlar</div>
                    <div className="text-xs text-muted-foreground leading-tight">Saatlik ciro ve ürün satış analizleri</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                <Link href="/urun/z-raporu" className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <Receipt className="size-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">7 Bölümlü Z Raporu</div>
                    <div className="text-xs text-muted-foreground leading-tight">Nakit mutabakat ve KDV matrahı</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="col-span-2 p-2.5 cursor-pointer rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20">
                <Link href="/urun/yapay-zeka" className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="size-4 text-primary" />
                    <span className="font-semibold text-sm text-foreground">Oxonom AI Studio</span>
                    <span className="text-xs text-muted-foreground">— Fotoğraftan menü oluşturma & akıllı görseller</span>
                  </div>
                  <ArrowRight className="size-4 text-primary" />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Çözümler Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none data-[state=open]:text-foreground">
              <span>Çözümler</span>
              <ChevronDown className="size-3.5 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[320px] p-2 space-y-1 z-50">
              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent">
                <Link href="/cozumler/restoran" className="flex items-center gap-3">
                  <Store className="size-4 text-primary" />
                  <div>
                    <div className="font-medium text-sm text-foreground">Alakart Restoran</div>
                    <div className="text-xs text-muted-foreground">Salon, masa hesabı ve mutfak</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent">
                <Link href="/cozumler/kafe" className="flex items-center gap-3">
                  <Coffee className="size-4 text-primary" />
                  <div>
                    <div className="font-medium text-sm text-foreground">Kafe & 3. Nesil Kahve</div>
                    <div className="text-xs text-muted-foreground">Hızlı kasa, QR menü ve sadakat</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent">
                <Link href="/cozumler/fast-food" className="flex items-center gap-3">
                  <Zap className="size-4 text-primary" />
                  <div>
                    <div className="font-medium text-sm text-foreground">Fast Food & QSR</div>
                    <div className="text-xs text-muted-foreground">Kuyrukları eriten hızlı sipariş</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent">
                <Link href="/cozumler/paket-servis" className="flex items-center gap-3">
                  <Bike className="size-4 text-primary" />
                  <div>
                    <div className="font-medium text-sm text-foreground">Paket Servis & Gel-Al</div>
                    <div className="text-xs text-muted-foreground">Telefon, adres ve kurye takibi</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent">
                <Link href="/cozumler/otel" className="flex items-center gap-3">
                  <Building2 className="size-4 text-primary" />
                  <div>
                    <div className="font-medium text-sm text-foreground">Otel & Tesis</div>
                    <div className="text-xs text-muted-foreground">Lobi, havuz bar ve oda servisi</div>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="p-2.5 cursor-pointer rounded-lg hover:bg-accent">
                <Link href="/cozumler/zincir-isletme" className="flex items-center gap-3">
                  <GitFork className="size-4 text-primary" />
                  <div>
                    <div className="font-medium text-sm text-foreground">Zincir & Franchise</div>
                    <div className="text-xs text-muted-foreground">Merkezi menü ve şube analizi</div>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Direkt Linkler */}
          <Link
            href="/ozellikler"
            className="px-3 py-2 rounded-md hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            Özellikler
          </Link>

          <Link
            href="/fiyatlandirma"
            className="px-3 py-2 rounded-md hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            Fiyatlandırma
          </Link>

          {/* Kaynaklar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none data-[state=open]:text-foreground">
              <span>Kaynaklar</span>
              <ChevronDown className="size-3.5 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[240px] p-2 space-y-1 z-50">
              <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-md hover:bg-accent">
                <Link href="/blog" className="flex items-center gap-2.5 text-sm">
                  <BookOpen className="size-4 text-primary" />
                  <span>Blog & Rehberler</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-md hover:bg-accent">
                <Link href="/guncellemeler" className="flex items-center gap-2.5 text-sm">
                  <History className="size-4 text-primary" />
                  <span>Güncellemeler</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-md hover:bg-accent">
                <Link href="/#faq" className="flex items-center gap-2.5 text-sm">
                  <HelpCircle className="size-4 text-primary" />
                  <span>Sıkça Sorulan Sorular</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-md hover:bg-accent">
                <Link href="/hakkimizda" className="flex items-center gap-2.5 text-sm">
                  <Info className="size-4 text-primary" />
                  <span>Hakkımızda</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-md hover:bg-accent">
                <Link href="/iletisim" className="flex items-center gap-2.5 text-sm">
                  <Mail className="size-4 text-primary" />
                  <span>İletişim & Destek</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right CTA Area */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />

          <Button variant="ghost" size="sm" asChild className="text-sm font-medium">
            <Link href="/login">Giriş Yap</Link>
          </Button>

          <Button size="sm" asChild className="shadow-sm font-medium">
            <Link href="/demo">Demo Talep Et</Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 py-6 max-h-[85vh] overflow-y-auto space-y-6">
          <div className="space-y-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">Ürün Modülleri</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link onClick={() => setMobileMenuOpen(false)} href="/urun/pos" className="p-2 rounded-lg bg-muted/40 hover:bg-muted font-medium">POS & Satış</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/urun/masa-siparis" className="p-2 rounded-lg bg-muted/40 hover:bg-muted font-medium">Masa Yönetimi</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/urun/qr-menu" className="p-2 rounded-lg bg-muted/40 hover:bg-muted font-medium">QR Menü</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/urun/self-order" className="p-2 rounded-lg bg-muted/40 hover:bg-muted font-medium">QR Self Order</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/urun/kds" className="p-2 rounded-lg bg-muted/40 hover:bg-muted font-medium">Mutfak KDS</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/urun/stok-recete" className="p-2 rounded-lg bg-muted/40 hover:bg-muted font-medium">Stok & Reçete</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/urun/musteri-crm" className="p-2 rounded-lg bg-muted/40 hover:bg-muted font-medium">Müşteri CRM</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/urun/z-raporu" className="p-2 rounded-lg bg-muted/40 hover:bg-muted font-medium">7 Bölümlü Z Raporu</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/urun/yapay-zeka" className="col-span-2 p-2 rounded-lg bg-primary/10 text-primary font-semibold flex items-center justify-between">
                <span>Oxonom AI Studio</span>
                <Sparkles className="size-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">Sektörel Çözümler</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link onClick={() => setMobileMenuOpen(false)} href="/cozumler/restoran" className="p-2 rounded-lg bg-muted/40 hover:bg-muted">Restoran</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/cozumler/kafe" className="p-2 rounded-lg bg-muted/40 hover:bg-muted">Kafe & Bar</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/cozumler/fast-food" className="p-2 rounded-lg bg-muted/40 hover:bg-muted">Fast Food (QSR)</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/cozumler/paket-servis" className="p-2 rounded-lg bg-muted/40 hover:bg-muted">Paket Servis</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/cozumler/otel" className="p-2 rounded-lg bg-muted/40 hover:bg-muted">Otel & Resort</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/cozumler/zincir-isletme" className="p-2 rounded-lg bg-muted/40 hover:bg-muted">Zincir İşletmeler</Link>
            </div>
          </div>

          <div className="space-y-2 border-t border-border/40 pt-4">
            <Link onClick={() => setMobileMenuOpen(false)} href="/ozellikler" className="block px-2 py-1 text-sm font-semibold hover:text-primary">Tüm Özellikler Kataloğu</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/fiyatlandirma" className="block px-2 py-1 text-sm font-semibold hover:text-primary">Fiyatlandırma & Paketler</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/blog" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary">Blog & Rehberler</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/hakkimizda" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary">Hakkımızda</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/iletisim" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary">İletişim & Destek</Link>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button variant="outline" asChild className="w-full">
              <Link onClick={() => setMobileMenuOpen(false)} href="/login">Giriş Yap</Link>
            </Button>
            <Button asChild className="w-full">
              <Link onClick={() => setMobileMenuOpen(false)} href="/demo">Demo Talep Et</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
