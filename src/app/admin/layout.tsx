"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  MessageSquare,
  Building2,
  Boxes,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Bell,
  Sparkles,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { getAdminSession, logoutAdmin, AdminUser } from "@/lib/admin-auth";
import { getDemoRequests, getContactMessages } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [session, setSession] = useState<AdminUser | null>(null);
  const [checking, setChecking] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [newDemoCount, setNewDemoCount] = useState(0);
  const [unreadMsgCount, setUnreadMsgCount] = useState(0);

  // If path is login page, skip admin layout shell
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    const user = getAdminSession();
    if (!user && !isLoginPage) {
      router.replace("/admin/login");
    } else {
      setSession(user);
    }
    setChecking(false);
  }, [pathname, isLoginPage, router]);

  // Load badge counts
  useEffect(() => {
    if (isLoginPage) return;

    const refreshCounts = () => {
      const demos = getDemoRequests();
      const newDemos = demos.filter((d) => d.status === "yeni").length;
      setNewDemoCount(newDemos);

      const msgs = getContactMessages();
      const unread = msgs.filter((m) => !m.isRead).length;
      setUnreadMsgCount(unread);
    };

    refreshCounts();
    window.addEventListener("oxonom_demo_updated", refreshCounts);
    window.addEventListener("oxonom_messages_updated", refreshCounts);

    return () => {
      window.removeEventListener("oxonom_demo_updated", refreshCounts);
      window.removeEventListener("oxonom_messages_updated", refreshCounts);
    };
  }, [isLoginPage]);

  // Handle logout
  const handleLogout = () => {
    logoutAdmin();
    router.replace("/admin/login");
  };

  // If on login page, just render children without sidebar
  if (isLoginPage) {
    return <>{children}</>;
  }

  // If still checking auth, show clean loading state
  if (checking || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center space-y-3">
          <div className="size-10 border-3 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-muted-foreground font-medium">Yönetim paneli yükleniyor...</p>
        </div>
      </div>
    );
  }

  const navItems = [
    {
      label: "Genel Bakış",
      href: "/admin",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      label: "Demo Talepleri",
      href: "/admin/demo-talepleri",
      icon: Inbox,
      badge: newDemoCount > 0 ? newDemoCount : null,
      badgeColor: "bg-rose-500 text-white",
    },
    {
      label: "Gelen Mesajlar",
      href: "/admin/mesajlar",
      icon: MessageSquare,
      badge: unreadMsgCount > 0 ? unreadMsgCount : null,
      badgeColor: "bg-blue-500 text-white",
    },
    {
      label: "Kayıtlı İşletmeler",
      href: "/admin/isletmeler",
      icon: Building2,
      badge: null,
    },
    {
      label: "Modül Yönetimi",
      href: "/admin/moduller",
      icon: Boxes,
      badge: "12 Modül",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    },
    {
      label: "Sistem Ayarları",
      href: "/admin/ayarlar",
      icon: Settings,
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden animate-in fade-in"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-card/95 border-r border-border backdrop-blur-xl flex flex-col transition-transform duration-200 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 border-b border-border/60 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="size-10 rounded-xl bg-gradient-to-tr from-primary to-orange-400 p-2 shadow-md shadow-primary/25 flex items-center justify-center">
              <Image
                src="/images/oxonom-symbol.png"
                alt="Oxonom POS"
                width={24}
                height={24}
                className="object-contain invert brightness-0"
              />
            </div>
            <div>
              <div className="text-base font-black tracking-tight flex items-center gap-1">
                OXONOM <span className="text-primary font-bold">POS</span>
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground flex items-center gap-1">
                <span>Merkezi Yönetim</span>
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-muted-foreground hover:bg-muted"
            aria-label="Menüyü Kapat"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
          <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
            Yönetim Modülleri
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="size-4 shrink-0" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                      isActive ? "bg-white/20 text-white" : item.badgeColor || "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-border/60">
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
              Hızlı Bağlantılar
            </div>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="size-3.5" />
                <span>Canlı Web Sitesini Aç</span>
              </span>
              <ChevronRight className="size-3" />
            </Link>
            <Link
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="size-3.5 text-primary" />
                <span>Demo Talep Sayfasını Aç</span>
              </span>
              <ChevronRight className="size-3" />
            </Link>
          </div>
        </div>

        {/* User Card & Logout */}
        <div className="p-4 border-t border-border/60 bg-muted/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-gradient-to-tr from-primary to-orange-500 text-white font-bold flex items-center justify-center text-xs shadow">
                UU
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-foreground">{session.name}</div>
                <div className="text-[10px] text-muted-foreground font-mono">@{session.username}</div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Çıkış Yap"
              className="p-2 rounded-lg text-muted-foreground hover:text-rose-600 hover:bg-rose-500/10 transition-colors"
            >
              <LogOut className="size-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Page Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72">
        {/* Top Header */}
        <header className="sticky top-0 z-30 h-16 border-b border-border/70 bg-background/85 backdrop-blur-xl px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-border bg-card text-foreground"
              aria-label="Menüyü Aç"
            >
              <Menu className="size-5" />
            </button>
            <div>
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span>Oxonom Admin</span>
                <span>/</span>
                <span className="font-semibold text-foreground">
                  {navItems.find((n) => (n.href === "/admin" ? pathname === "/admin" : pathname.startsWith(n.href)))?.label || "Yönetim"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Public Site Link */}
            <Button variant="outline" size="sm" asChild className="hidden sm:flex h-8 text-xs font-medium gap-1.5">
              <Link href="/" target="_blank">
                <ExternalLink className="size-3.5" />
                <span>Siteyi Gör</span>
              </Link>
            </Button>

            {/* Notification Indicator */}
            <Link
              href="/admin/demo-talepleri"
              className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              title="Yeni Demo Talepleri"
            >
              <Bell className="size-4.5" />
              {newDemoCount > 0 && (
                <span className="absolute top-1 right-1 size-2 rounded-full bg-rose-500 ring-2 ring-background animate-pulse" />
              )}
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Admin Avatar */}
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-border">
              <div className="size-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center border border-primary/20">
                UU
              </div>
              <span className="text-xs font-semibold">{session.username}</span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
