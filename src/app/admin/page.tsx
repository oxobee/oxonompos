"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Inbox,
  Clock,
  CheckCircle2,
  Trophy,
  ArrowUpRight,
  Sparkles,
  Building2,
  Phone,
  Calendar,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  MessageSquare,
  Plus,
  Eye,
} from "lucide-react";
import { getDemoRequests, getContactMessages, CLIENT_BUSINESSES, DemoRequest, updateDemoStatus, DemoStatus } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";

const STATUS_MAP: Record<DemoStatus, { label: string; color: string; bg: string }> = {
  yeni: { label: "Yeni Talep", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
  gorusuldu: { label: "Görüşüldü", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  demo_yapildi: { label: "Demo Yapıldı", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  satisa_dondu: { label: "Satışa Döndü", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  iptal: { label: "İptal", color: "text-slate-500", bg: "bg-slate-500/10 border-slate-500/20" },
};

export default function AdminDashboardPage() {
  const [demos, setDemos] = useState<DemoRequest[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  const loadData = () => {
    setDemos(getDemoRequests());
    setMessages(getContactMessages());
  };

  useEffect(() => {
    loadData();
    window.addEventListener("oxonom_demo_updated", loadData);
    window.addEventListener("oxonom_messages_updated", loadData);
    return () => {
      window.removeEventListener("oxonom_demo_updated", loadData);
      window.removeEventListener("oxonom_messages_updated", loadData);
    };
  }, []);

  const totalDemos = demos.length;
  const newDemos = demos.filter((d) => d.status === "yeni").length;
  const inProgressDemos = demos.filter((d) => d.status === "gorusuldu" || d.status === "demo_yapildi").length;
  const wonDemos = demos.filter((d) => d.status === "satisa_dondu").length;
  const conversionRate = totalDemos > 0 ? Math.round((wonDemos / totalDemos) * 100) : 0;

  const handleQuickStatus = (id: string, newStatus: DemoStatus) => {
    updateDemoStatus(id, newStatus);
    loadData();
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Welcome Banner */}
      <div className="rounded-3xl border border-border/80 bg-gradient-to-r from-card via-card/90 to-primary/5 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
            <Sparkles className="size-3.5" />
            <span>Merkezi Operasyon & Lead Takip</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Hoş Geldiniz, Uğur Bey 👋
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
            Oxonom POS restoran demo talepleri, canlı işletme başvuruları ve gelen mesajlar anlık olarak bu panelden yönetilmektedir.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <Button asChild size="sm" className="font-semibold shadow-sm">
            <Link href="/admin/demo-talepleri">
              <Inbox className="size-4 mr-1.5" />
              <span>Demo Taleplerini Aç</span>
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/demo" target="_blank">
              <ExternalLink className="size-3.5 mr-1" />
              <span>Canlı Demo Formu</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Demos */}
        <div className="p-5 rounded-2xl border border-border/70 bg-card shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Toplam Demo Talebi</span>
            <div className="size-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Inbox className="size-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <div className="text-3xl font-extrabold text-foreground">{totalDemos}</div>
            <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
              <TrendingUp className="size-3" />
              <span>+12% bu hafta</span>
            </div>
          </div>
          <div className="text-[11px] text-muted-foreground">
            Web sitesi ve doğrudan başvurular
          </div>
        </div>

        {/* New / Action Required */}
        <div className="p-5 rounded-2xl border border-border/70 bg-card shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Yeni & Bekleyen</span>
            <div className="size-8 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
              <Clock className="size-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <div className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">{newDemos}</div>
            {newDemos > 0 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/15 text-rose-600 dark:text-rose-400 animate-pulse">
                İletişim Bekliyor
              </span>
            )}
          </div>
          <div className="text-[11px] text-muted-foreground">
            Henüz görüşme yapılmamış talepler
          </div>
        </div>

        {/* In Progress */}
        <div className="p-5 rounded-2xl border border-border/70 bg-card shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Görüşülen & Demo Aşamasında</span>
            <div className="size-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <CheckCircle2 className="size-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <div className="text-3xl font-extrabold text-foreground">{inProgressDemos}</div>
            <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
              Sunum planlandı
            </span>
          </div>
          <div className="text-[11px] text-muted-foreground">
            Online/fiziki sunumu yapılan işletmeler
          </div>
        </div>

        {/* Won & Conversion */}
        <div className="p-5 rounded-2xl border border-border/70 bg-card shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Satışa Dönüşüm Oranı</span>
            <div className="size-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <Trophy className="size-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">%{conversionRate}</div>
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              {wonDemos} Müşteri Kazanıldı
            </span>
          </div>
          <div className="text-[11px] text-muted-foreground">
            Aktif POS lisansına dönüşen işletmeler
          </div>
        </div>
      </div>

      {/* Funnel Pipeline Breakdown */}
      <div className="p-6 rounded-3xl border border-border/70 bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-foreground">Demo & Satış Dönüşüm Hunisi (Funnel)</h2>
            <p className="text-xs text-muted-foreground">Taleplerin aşamalara göre oransal dağılımı</p>
          </div>
          <Link
            href="/admin/demo-talepleri"
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
          >
            <span>Kategorize Listeyi Gör</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Visual Multi-Segment Bar */}
        <div className="h-3.5 w-full rounded-full bg-muted overflow-hidden flex">
          <div style={{ width: `${(newDemos / (totalDemos || 1)) * 100}%` }} className="bg-rose-500" title={`Yeni: ${newDemos}`} />
          <div style={{ width: `${(demos.filter((d) => d.status === "gorusuldu").length / (totalDemos || 1)) * 100}%` }} className="bg-amber-500" title="Görüşüldü" />
          <div style={{ width: `${(demos.filter((d) => d.status === "demo_yapildi").length / (totalDemos || 1)) * 100}%` }} className="bg-blue-500" title="Demo Yapıldı" />
          <div style={{ width: `${(wonDemos / (totalDemos || 1)) * 100}%` }} className="bg-emerald-500" title="Satışa Döndü" />
          <div style={{ width: `${(demos.filter((d) => d.status === "iptal").length / (totalDemos || 1)) * 100}%` }} className="bg-slate-400" title="İptal" />
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-rose-500 shrink-0" />
            <span className="text-muted-foreground">Yeni: <strong className="text-foreground">{newDemos}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-amber-500 shrink-0" />
            <span className="text-muted-foreground">Görüşüldü: <strong className="text-foreground">{demos.filter((d) => d.status === "gorusuldu").length}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-blue-500 shrink-0" />
            <span className="text-muted-foreground">Demo Yapıldı: <strong className="text-foreground">{demos.filter((d) => d.status === "demo_yapildi").length}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-muted-foreground">Satışa Döndü: <strong className="text-foreground">{wonDemos}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-slate-400 shrink-0" />
            <span className="text-muted-foreground">İptal: <strong className="text-foreground">{demos.filter((d) => d.status === "iptal").length}</strong></span>
          </div>
        </div>
      </div>

      {/* Two Column Section: Recent Demo Requests & Quick Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Demo Requests Table (2 Cols) */}
        <div className="lg:col-span-2 rounded-3xl border border-border/70 bg-card p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-foreground">Son Gelen Demo Talepleri</h2>
              <p className="text-xs text-muted-foreground">En son kayıt olan işletmeler ve durumları</p>
            </div>
            <Button variant="outline" size="sm" asChild className="text-xs h-8">
              <Link href="/admin/demo-talepleri">
                <span>Tümünü Yönet ({totalDemos})</span>
                <ChevronRight className="size-3.5 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border/60 text-muted-foreground uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="pb-3 font-semibold">İşletme / Yetkili</th>
                  <th className="pb-3 font-semibold">Tip / Şehir</th>
                  <th className="pb-3 font-semibold">Telefon</th>
                  <th className="pb-3 font-semibold">Durum</th>
                  <th className="pb-3 font-semibold text-right">Aksiyon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {demos.slice(0, 5).map((d) => {
                  const statusInfo = STATUS_MAP[d.status];
                  return (
                    <tr key={d.id} className="hover:bg-muted/30 transition-colors">
                      <td className="py-3 pr-2">
                        <div className="font-bold text-foreground">{d.businessName}</div>
                        <div className="text-muted-foreground text-[11px]">{d.fullName}</div>
                      </td>
                      <td className="py-3 pr-2">
                        <span className="inline-block font-medium px-2 py-0.5 rounded bg-muted text-[11px]">
                          {d.businessType}
                        </span>
                        <div className="text-[11px] text-muted-foreground mt-0.5">{d.city}</div>
                      </td>
                      <td className="py-3 pr-2 font-mono text-muted-foreground">
                        <a href={`tel:${d.phone}`} className="hover:text-primary transition-colors">
                          {d.phone}
                        </a>
                      </td>
                      <td className="py-3 pr-2">
                        <select
                          value={d.status}
                          onChange={(e) => handleQuickStatus(d.id, e.target.value as DemoStatus)}
                          className={`text-[11px] font-bold px-2 py-1 rounded-lg border focus:outline-none cursor-pointer ${statusInfo.bg} ${statusInfo.color}`}
                        >
                          <option value="yeni">Yeni</option>
                          <option value="gorusuldu">Görüşüldü</option>
                          <option value="demo_yapildi">Demo Yapıldı</option>
                          <option value="satisa_dondu">Satışa Döndü</option>
                          <option value="iptal">İptal</option>
                        </select>
                      </td>
                      <td className="py-3 text-right">
                        <Button variant="ghost" size="sm" asChild className="h-7 px-2 text-[11px]">
                          <Link href="/admin/demo-talepleri">
                            <Eye className="size-3.5 mr-1" />
                            <span>İncele</span>
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Quick Status & Messages Summary (1 Col) */}
        <div className="space-y-6">
          {/* Active Clients Spotlight */}
          <div className="p-6 rounded-3xl border border-border/70 bg-card shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-foreground">Canlı İşletmeler</h2>
              <span className="text-xs text-muted-foreground font-semibold">{CLIENT_BUSINESSES.length} Restoran</span>
            </div>

            <div className="space-y-3">
              {CLIENT_BUSINESSES.slice(0, 3).map((biz) => (
                <div key={biz.id} className="p-3 rounded-xl border border-border/50 bg-muted/20 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-foreground">{biz.name}</div>
                    <div className="text-[11px] text-muted-foreground">{biz.city} • {biz.branches} Şube</div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {biz.plan}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="outline" size="sm" asChild className="w-full text-xs">
              <Link href="/admin/isletmeler">Tüm İşletmeleri İncele</Link>
            </Button>
          </div>

          {/* Contact Inquiries Box */}
          <div className="p-6 rounded-3xl border border-border/70 bg-card shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-foreground">Gelen Mesajlar</h2>
              <Link href="/admin/mesajlar" className="text-xs text-primary font-semibold hover:underline">
                Tümü ({messages.length})
              </Link>
            </div>

            <div className="space-y-2.5">
              {messages.slice(0, 3).map((m) => (
                <Link
                  key={m.id}
                  href="/admin/mesajlar"
                  className="block p-3 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-foreground">{m.fullName}</span>
                    <span className="text-[10px] text-muted-foreground">{m.date}</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground line-clamp-1">{m.subject}: {m.message}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
