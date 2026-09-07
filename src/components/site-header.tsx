"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
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
  Gift,
  UserCheck,
  MessageSquare,
  FileUp,
  ImagePlus,
  Wand2,
  FileText,
  Crown,
  Tv,
  Printer,
  Share2,
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
      <div className="mx-auto flex h-20 lg:h-24 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
          <div className="relative h-13 w-[234px] sm:h-16 sm:w-[288px] lg:h-18 lg:w-[324px]">
            {/* Light Mode: Dark Logo */}
            <Image
              src="/images/oxonompos-logo.png"
              alt="Oxonom POS"
              fill
              priority
              sizes="(max-width: 640px) 234px, (max-width: 1024px) 288px, 324px"
              className="object-contain object-left dark:hidden"
            />
            {/* Dark Mode: Light Logo */}
            <Image
              src="/images/oxonompos-logo-dark.png"
              alt="Oxonom POS"
              fill
              priority
              sizes="(max-width: 640px) 234px, (max-width: 1024px) 288px, 324px"
              className="object-contain object-left hidden dark:block"
            />
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

          {/* Modüller Megamenu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none data-[state=open]:text-foreground font-semibold">
              <span>Modüller</span>
              <ChevronDown className="size-3.5 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[640px] p-3.5 z-50">
              <div className="grid grid-cols-2 gap-4 p-1">
                {/* Sol Sütun: Yapay Zeka & Akıllı Asistanlar (6 Modül) */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 px-2 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                    <Sparkles className="size-3.5" />
                    <span>Yapay Zeka &amp; Asistanlar</span>
                  </div>

                  <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                    <Link href="/moduller/qr-menudeki-yapay-zeka" className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-red-50 text-red-500 dark:bg-red-950/50 mt-0.5">
                        <MessageSquare className="size-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-foreground">QR Menüdeki Yapay Zeka</div>
                        <div className="text-[11px] text-muted-foreground leading-tight">Yemek öneren garson asistanı</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                    <Link href="/moduller/admin-panelindeki-yapay-zeka" className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-red-50 text-red-500 dark:bg-red-950/50 mt-0.5">
                        <Sparkles className="size-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-foreground">Admin Panelindeki Yapay Zeka</div>
                        <div className="text-[11px] text-muted-foreground leading-tight">Canlı ciro ve operasyon takibi</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                    <Link href="/moduller/yapay-zeka-ile-menu-ice-aktar" className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-red-50 text-red-500 dark:bg-red-950/50 mt-0.5">
                        <FileUp className="size-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-foreground">Menü İçe Aktarma (OCR)</div>
                        <div className="text-[11px] text-muted-foreground leading-tight">Fotoğraftan dijital menüye</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                    <Link href="/moduller/yapay-zeka-ile-gorsel-olustur" className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-red-50 text-red-500 dark:bg-red-950/50 mt-0.5">
                        <ImagePlus className="size-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-foreground">Yapay Zeka ile Görsel Oluştur</div>
                        <div className="text-[11px] text-muted-foreground leading-tight">Stüdyo kalitesinde yemek görseli</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                    <Link href="/moduller/fotograflari-profesyonellestir" className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-red-50 text-red-500 dark:bg-red-950/50 mt-0.5">
                        <Wand2 className="size-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-foreground">Fotoğraf Profesyonelleştir</div>
                        <div className="text-[11px] text-muted-foreground leading-tight">Telefon çekimini stüdyoya çevir</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                    <Link href="/moduller/metin-yazari-ve-besin-analizi" className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-red-50 text-red-500 dark:bg-red-950/50 mt-0.5">
                        <FileText className="size-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-foreground">Metin Yazarı &amp; Besin Analizi</div>
                        <div className="text-[11px] text-muted-foreground leading-tight">Kalori ve alerjen etiketleri</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>

                {/* Sağ Sütun: Müşteri Sadakati & Büyüme (2 Modül) */}
                <div className="space-y-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 px-2 py-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      <Crown className="size-3.5" />
                      <span>Sadakat &amp; Büyüme</span>
                    </div>

                    <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                      <Link href="/moduller/dogum-gunu-otomasyonu" className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-md bg-red-50 text-red-500 dark:bg-red-950/50 mt-0.5">
                          <Gift className="size-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-foreground">Sadakat Modülü (CRM &amp; İndirim)</div>
                          <div className="text-[11px] text-muted-foreground leading-tight">Müşteri takibi, lezzet tercihi &amp; indirim</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                      <Link href="/moduller/qr-menu-musteri-giris-kayit" className="flex items-start gap-2.5">
                        <div className="p-1.5 rounded-md bg-red-50 text-red-500 dark:bg-red-950/50 mt-0.5">
                          <UserCheck className="size-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-foreground">QR Müşteri Giriş &amp; Kayıt</div>
                          <div className="text-[11px] text-muted-foreground leading-tight">Puan takibi ve sipariş profili</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <div className="pt-1.5 border-t border-border/40">
                      <div className="flex items-center gap-1.5 px-2 py-1 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        <Tv className="size-3.5" />
                        <span>Pazarlama &amp; Ekran</span>
                      </div>

                      <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                        <Link href="/moduller/dijital-menu-panosu" className="flex items-start gap-2.5">
                          <div className="p-1.5 rounded-md bg-amber-50 text-amber-600 dark:bg-amber-950/50 mt-0.5">
                            <Tv className="size-3.5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-xs text-foreground">Dijital Menü Panosu</span>
                              <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/30">
                                Çok Yakında
                              </span>
                            </div>
                            <div className="text-[11px] text-muted-foreground leading-tight">TV ekranlarında animasyonlu menü &amp; reklam</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                        <Link href="/moduller/brosur-sihirbazi" className="flex items-start gap-2.5">
                          <div className="p-1.5 rounded-md bg-amber-50 text-amber-600 dark:bg-amber-950/50 mt-0.5">
                            <Printer className="size-3.5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-xs text-foreground">Broşür Sihirbazı</span>
                              <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/30">
                                Çok Yakında
                              </span>
                            </div>
                            <div className="text-[11px] text-muted-foreground leading-tight">Baskıya hazır 300 DPI PDF el ilanı &amp; broşür</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg hover:bg-accent focus:bg-accent">
                        <Link href="/moduller/sosyal-medya-sihirbazi" className="flex items-start gap-2.5">
                          <div className="p-1.5 rounded-md bg-amber-50 text-amber-600 dark:bg-amber-950/50 mt-0.5">
                            <Share2 className="size-3.5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-xs text-foreground">Sosyal Medya Sihirbazı</span>
                              <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/30">
                                Çok Yakında
                              </span>
                            </div>
                            <div className="text-[11px] text-muted-foreground leading-tight">Menüden 1:1 Post &amp; 9:16 Hikaye tasarımı</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alt Bar */}
              <div className="mt-2 pt-2 border-t border-border/50">
                <DropdownMenuItem asChild className="p-2 cursor-pointer rounded-lg bg-primary/10 hover:bg-primary/15 text-primary">
                  <Link href="/moduller" className="flex items-center justify-between w-full font-semibold text-xs">
                    <span>Tüm Modülleri İncele &amp; Simülatörü Başlat</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </DropdownMenuItem>
              </div>
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

      {/* Mobile Drawer / Overlay with Elastic Spring Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24, scaleY: 0.94 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -16, scaleY: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 24,
              mass: 0.75,
            }}
            className="lg:hidden origin-top border-b border-border bg-background/95 backdrop-blur-xl px-4 py-6 max-h-[85vh] overflow-y-auto space-y-6"
          >
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
              <Link onClick={() => setMobileMenuOpen(false)} href="/moduller" className="block px-2.5 py-2 text-sm font-bold text-primary bg-primary/10 rounded-lg hover:bg-primary/15 flex items-center justify-between">
                <span>Modüller Kataloğu</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/ozellikler" className="block px-2 py-1 text-sm font-semibold hover:text-primary">Tüm Özellikler Kataloğu</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/fiyatlandirma" className="block px-2 py-1 text-sm font-semibold hover:text-primary">Fiyatlandırma & Paketler</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/blog" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary">Blog & Rehberler</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/hakkimizda" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary">Hakkımızda</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/iletisim" className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary">İletişim & Destek</Link>
            </div>

            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/30 border border-border/50">
              <span className="text-xs font-medium text-muted-foreground">Tema Seçimi (Gündüz / Gece)</span>
              <ThemeToggle />
            </div>

            <div className="pt-2">
              <Button asChild className="w-full shadow-md font-bold">
                <Link onClick={() => setMobileMenuOpen(false)} href="/demo">Demo Talep Et</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
