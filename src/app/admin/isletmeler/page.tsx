"use client";

import React, { useState } from "react";
import { Building2, Plus, Search, MapPin, CheckCircle2, AlertCircle, ExternalLink, ShieldCheck } from "lucide-react";
import { CLIENT_BUSINESSES, ClientBusiness } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";

export default function AdminBusinessesPage() {
  const [businesses, setBusinesses] = useState<ClientBusiness[]>(CLIENT_BUSINESSES);
  const [search, setSearch] = useState("");

  const filtered = businesses.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.owner.toLowerCase().includes(search.toLowerCase()) ||
      b.city.toLowerCase().includes(search.toLowerCase()) ||
      b.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Kayıtlı İşletmeler & Restoranlar
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Oxonom POS sistemini aktif olarak kullanan işletmelerin lisans, şube ve paket durumları.
          </p>
        </div>
        <Button size="sm" className="bg-primary font-bold text-xs h-9 self-start sm:self-auto">
          <Plus className="size-4 mr-1.5" />
          <span>Yeni İşletme Kaydet</span>
        </Button>
      </div>

      <div className="relative">
        <Search className="size-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="İşletme adı, yetkili veya şehir ara..."
          className="w-full h-10 pl-10 pr-4 rounded-xl border border-border bg-card text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div className="rounded-3xl border border-border/70 bg-card overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border/60 bg-muted/30 text-muted-foreground uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 font-semibold">İşletme Adı</th>
                <th className="py-3.5 px-4 font-semibold">Yetkili</th>
                <th className="py-3.5 px-4 font-semibold">Sektör & Şehir</th>
                <th className="py-3.5 px-4 font-semibold">Şube</th>
                <th className="py-3.5 px-4 font-semibold">Paket</th>
                <th className="py-3.5 px-4 font-semibold">Durum</th>
                <th className="py-3.5 px-4 font-semibold text-right">Kayıt Tarihi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {filtered.map((b) => (
                <tr key={b.id} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 font-bold text-foreground">
                    <div className="flex items-center gap-2">
                      <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        {b.name.charAt(0)}
                      </div>
                      <span>{b.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground font-medium">{b.owner}</td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-foreground">{b.type}</div>
                    <div className="text-[11px] text-muted-foreground">{b.city}</div>
                  </td>
                  <td className="py-3 px-4 font-mono font-semibold">{b.branches} Şube</td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
                      {b.plan}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        b.status === "Aktif"
                          ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                          : "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                      }`}
                    >
                      <span className={`size-1.5 rounded-full ${b.status === "Aktif" ? "bg-emerald-500" : "bg-amber-500"}`} />
                      {b.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-muted-foreground">{b.registeredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
