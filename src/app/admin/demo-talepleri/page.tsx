"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Inbox,
  Search,
  Filter,
  Plus,
  Download,
  Phone,
  Mail,
  Building2,
  MapPin,
  Calendar,
  MessageSquare,
  Trash2,
  Edit,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
  Send,
  Sparkles,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import {
  getDemoRequests,
  addDemoRequest,
  updateDemoStatus,
  addDemoNote,
  deleteDemoRequest,
  DemoRequest,
  DemoStatus,
  DemoPriority,
} from "@/lib/admin-store";
import { Button } from "@/components/ui/button";

const STATUS_CONFIG: Record<DemoStatus, { label: string; badge: string; border: string }> = {
  yeni: {
    label: "Yeni Talep",
    badge: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30",
    border: "border-l-rose-500",
  },
  gorusuldu: {
    label: "Görüşüldü",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    border: "border-l-amber-500",
  },
  demo_yapildi: {
    label: "Demo Yapıldı",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    border: "border-l-blue-500",
  },
  satisa_dondu: {
    label: "Satışa Döndü",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    border: "border-l-emerald-500",
  },
  iptal: {
    label: "İptal",
    badge: "bg-slate-500/10 text-slate-500 border-slate-500/30",
    border: "border-l-slate-400",
  },
};

export default function DemoRequestsPage() {
  const [demos, setDemos] = useState<DemoRequest[]>([]);
  const [activeTab, setActiveTab] = useState<DemoStatus | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");

  // Modal states
  const [selectedDemo, setSelectedDemo] = useState<DemoRequest | null>(null);
  const [newNoteText, setNewNoteText] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Demo Form state
  const [newForm, setNewForm] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    businessType: "Restoran",
    branchCount: "1",
    city: "İstanbul",
    message: "",
    priority: "orta" as DemoPriority,
  });

  const loadData = () => {
    const list = getDemoRequests();
    setDemos(list);
    if (selectedDemo) {
      const refreshed = list.find((d) => d.id === selectedDemo.id);
      setSelectedDemo(refreshed || null);
    }
  };

  useEffect(() => {
    loadData();
    window.addEventListener("oxonom_demo_updated", loadData);
    return () => window.removeEventListener("oxonom_demo_updated", loadData);
  }, []);

  // Category counts
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: demos.length, yeni: 0, gorusuldu: 0, demo_yapildi: 0, satisa_dondu: 0, iptal: 0 };
    demos.forEach((d) => {
      if (c[d.status] !== undefined) c[d.status]++;
    });
    return c;
  }, [demos]);

  // Unique business types and cities for filters
  const businessTypes = useMemo(() => {
    const set = new Set<string>();
    demos.forEach((d) => {
      if (d.businessType) set.add(d.businessType);
    });
    return Array.from(set);
  }, [demos]);

  const cities = useMemo(() => {
    const set = new Set<string>();
    demos.forEach((d) => {
      if (d.city) set.add(d.city.split(" ")[0]); // take main city name
    });
    return Array.from(set);
  }, [demos]);

  // Filtered list
  const filteredDemos = useMemo(() => {
    return demos.filter((d) => {
      // Tab filter
      if (activeTab !== "all" && d.status !== activeTab) return false;

      // Type filter
      if (selectedType !== "all" && d.businessType !== selectedType) return false;

      // City filter
      if (selectedCity !== "all" && !d.city.toLowerCase().includes(selectedCity.toLowerCase())) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = d.fullName.toLowerCase().includes(q);
        const matchBiz = d.businessName.toLowerCase().includes(q);
        const matchPhone = d.phone.includes(q);
        const matchEmail = d.email.toLowerCase().includes(q);
        const matchCity = d.city.toLowerCase().includes(q);
        if (!matchName && !matchBiz && !matchPhone && !matchEmail && !matchCity) return false;
      }

      return true;
    });
  }, [demos, activeTab, selectedType, selectedCity, searchQuery]);

  // Actions
  const handleStatusChange = (id: string, status: DemoStatus) => {
    updateDemoStatus(id, status);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDemo || !newNoteText.trim()) return;
    addDemoNote(selectedDemo.id, newNoteText.trim());
    setNewNoteText("");
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`"${name}" adlı demo talebini kalıcı olarak silmek istediğinizden emin misiniz?`)) {
      deleteDemoRequest(id);
      if (selectedDemo?.id === id) setSelectedDemo(null);
    }
  };

  const handleCreateNewDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newForm.fullName || !newForm.businessName || !newForm.phone) {
      alert("Lütfen zorunlu alanları doldurunuz.");
      return;
    }

    addDemoRequest({
      fullName: newForm.fullName,
      businessName: newForm.businessName,
      phone: newForm.phone,
      email: newForm.email,
      businessType: newForm.businessType,
      branchCount: newForm.branchCount,
      city: newForm.city,
      message: newForm.message || "Yönetici tarafından manuel kaydedildi.",
      status: "yeni",
      priority: newForm.priority,
    });

    setIsAddModalOpen(false);
    setNewForm({
      fullName: "",
      businessName: "",
      phone: "",
      email: "",
      businessType: "Restoran",
      branchCount: "1",
      city: "İstanbul",
      message: "",
      priority: "orta",
    });
  };

  // CSV Export
  const handleExportCSV = () => {
    const headers = ["ID", "Isletme Adi", "Yetkili", "Telefon", "E-posta", "Isletme Tipi", "Sube Sayisi", "Sehir", "Durum", "Tarih"];
    const rows = filteredDemos.map((d) => [
      d.id,
      `"${d.businessName.replace(/"/g, '""')}"`,
      `"${d.fullName.replace(/"/g, '""')}"`,
      d.phone,
      d.email,
      d.businessType,
      d.branchCount,
      `"${d.city.replace(/"/g, '""')}"`,
      STATUS_CONFIG[d.status].label,
      new Date(d.createdAt).toLocaleDateString("tr-TR"),
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `oxonom-demo-talepleri-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Header & Main Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Demo Talepleri Yönetimi
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
              {demos.length} Talep
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Gelen restoran demo başvurularını kategorize edin, görüşme notları tutun ve satış sürecini takip edin.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportCSV}
            className="text-xs h-9 font-medium"
          >
            <Download className="size-3.5 mr-1.5" />
            <span>Excel / CSV</span>
          </Button>
          <Button
            size="sm"
            onClick={() => setIsAddModalOpen(true)}
            className="text-xs h-9 font-bold bg-primary shadow-sm"
          >
            <Plus className="size-4 mr-1.5" />
            <span>Yeni Talep Ekle</span>
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-border/70 scrollbar-none">
        <button
          onClick={() => setActiveTab("all")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === "all"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <span>Tüm Talepler</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${activeTab === "all" ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}>
            {counts.all}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("yeni")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === "yeni"
              ? "bg-rose-600 text-white shadow-sm"
              : "text-muted-foreground hover:text-rose-600 hover:bg-rose-500/10"
          }`}
        >
          <span className="size-2 rounded-full bg-rose-500 animate-pulse" />
          <span>Yeni Talepler</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${activeTab === "yeni" ? "bg-white/20 text-white" : "bg-rose-500/15 text-rose-600 dark:text-rose-400"}`}>
            {counts.yeni}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("gorusuldu")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === "gorusuldu"
              ? "bg-amber-600 text-white shadow-sm"
              : "text-muted-foreground hover:text-amber-600 hover:bg-amber-500/10"
          }`}
        >
          <span>Görüşüldü / İnceleniyor</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${activeTab === "gorusuldu" ? "bg-white/20 text-white" : "bg-amber-500/15 text-amber-600 dark:text-amber-400"}`}>
            {counts.gorusuldu}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("demo_yapildi")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === "demo_yapildi"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-muted-foreground hover:text-blue-600 hover:bg-blue-500/10"
          }`}
        >
          <span>Demo Yapıldı</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${activeTab === "demo_yapildi" ? "bg-white/20 text-white" : "bg-blue-500/15 text-blue-600 dark:text-blue-400"}`}>
            {counts.demo_yapildi}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("satisa_dondu")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === "satisa_dondu"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-muted-foreground hover:text-emerald-600 hover:bg-emerald-500/10"
          }`}
        >
          <span>Satışa Döndü (Kazanıldı)</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${activeTab === "satisa_dondu" ? "bg-white/20 text-white" : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"}`}>
            {counts.satisa_dondu}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("iptal")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === "iptal"
              ? "bg-slate-700 text-white shadow-sm"
              : "text-muted-foreground hover:text-slate-600 hover:bg-muted"
          }`}
        >
          <span>İptal / Olumsuz</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${activeTab === "iptal" ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}>
            {counts.iptal}
          </span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        {/* Search */}
        <div className="sm:col-span-6 relative">
          <Search className="size-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="İşletme adı, yetkili, telefon veya şehir ara..."
            className="w-full h-10 pl-10 pr-4 rounded-xl border border-border bg-card text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {/* Business Type Filter */}
        <div className="sm:col-span-3">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full h-10 px-3 rounded-xl border border-border bg-card text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
          >
            <option value="all">Tüm İşletme Tipleri</option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        <div className="sm:col-span-3">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full h-10 px-3 rounded-xl border border-border bg-card text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
          >
            <option value="all">Tüm Şehirler</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count & Reset */}
      {(searchQuery || selectedType !== "all" || selectedCity !== "all" || activeTab !== "all") && (
        <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
          <div>
            Toplam <strong>{filteredDemos.length}</strong> talep listeleniyor
          </div>
          <button
            onClick={() => {
              setActiveTab("all");
              setSearchQuery("");
              setSelectedType("all");
              setSelectedCity("all");
            }}
            className="text-primary hover:underline font-semibold"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}

      {/* Demo Requests List / Cards */}
      {filteredDemos.length === 0 ? (
        <div className="p-12 text-center rounded-3xl border border-dashed border-border bg-card/50 space-y-3">
          <div className="size-12 rounded-2xl bg-muted text-muted-foreground flex items-center justify-center mx-auto">
            <Inbox className="size-6" />
          </div>
          <h3 className="font-bold text-foreground">Bu kriterlere uygun demo talebi bulunamadı</h3>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Filtreleri temizleyebilir veya yeni bir demo talebi ekleyebilirsiniz.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setActiveTab("all");
              setSearchQuery("");
              setSelectedType("all");
              setSelectedCity("all");
            }}
          >
            Tüm Talepleri Göster
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3.5">
          {filteredDemos.map((d) => {
            const statusConfig = STATUS_CONFIG[d.status];
            return (
              <div
                key={d.id}
                className={`p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all border-l-4 ${statusConfig.border}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Business & Contact info */}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base font-extrabold text-foreground tracking-tight">
                        {d.businessName}
                      </h2>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-muted text-foreground">
                        {d.businessType}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        • {d.branchCount} Şube
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${statusConfig.badge}`}>
                        {statusConfig.label}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {d.fullName}
                      </span>
                      <a
                        href={`tel:${d.phone}`}
                        className="flex items-center gap-1 hover:text-primary transition-colors font-mono"
                      >
                        <Phone className="size-3 text-primary" />
                        <span>{d.phone}</span>
                      </a>
                      {d.email && (
                        <a
                          href={`mailto:${d.email}`}
                          className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                          <Mail className="size-3 text-primary" />
                          <span>{d.email}</span>
                        </a>
                      )}
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3 text-muted-foreground" />
                        <span>{d.city}</span>
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <Calendar className="size-3 text-muted-foreground" />
                        <span>{new Date(d.createdAt).toLocaleDateString("tr-TR")}</span>
                      </span>
                    </div>

                    {d.message && (
                      <p className="text-xs text-muted-foreground/90 bg-muted/30 p-2.5 rounded-xl line-clamp-2 mt-2 border border-border/40">
                        &quot;{d.message}&quot;
                      </p>
                    )}
                  </div>

                  {/* Actions & Status Dropdown */}
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-border/50">
                    {/* Status Changer */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-muted-foreground font-medium">Durum:</span>
                      <select
                        value={d.status}
                        onChange={(e) => handleStatusChange(d.id, e.target.value as DemoStatus)}
                        className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border focus:outline-none cursor-pointer ${statusConfig.badge}`}
                      >
                        <option value="yeni">Yeni Talep</option>
                        <option value="gorusuldu">Görüşüldü</option>
                        <option value="demo_yapildi">Demo Yapıldı</option>
                        <option value="satisa_dondu">Satışa Döndü</option>
                        <option value="iptal">İptal</option>
                      </select>
                    </div>

                    {/* View Details & Notes */}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedDemo(d)}
                      className="text-xs h-8 font-semibold"
                    >
                      <MessageSquare className="size-3.5 mr-1.5 text-primary" />
                      <span>Notlar ({d.notes?.length || 0})</span>
                    </Button>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(d.id, d.businessName)}
                      title="Talebi Sil"
                      className="p-2 rounded-lg text-muted-foreground hover:text-rose-600 hover:bg-rose-500/10 transition-colors"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail & Notes Drawer / Modal */}
      {selectedDemo && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card w-full max-w-2xl rounded-3xl border border-border shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-border">
              <div>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${STATUS_CONFIG[selectedDemo.status].badge}`}>
                  {STATUS_CONFIG[selectedDemo.status].label}
                </span>
                <h3 className="text-xl font-black text-foreground mt-2">{selectedDemo.businessName}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Yetkili: <strong className="text-foreground">{selectedDemo.fullName}</strong> • {selectedDemo.city}
                </p>
              </div>
              <button
                onClick={() => setSelectedDemo(null)}
                className="p-1.5 rounded-lg text-muted-foreground hover:bg-muted"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
                <span className="text-[10px] text-muted-foreground font-semibold uppercase">Telefon</span>
                <a href={`tel:${selectedDemo.phone}`} className="font-bold text-foreground block hover:text-primary mt-0.5">
                  {selectedDemo.phone}
                </a>
              </div>
              <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
                <span className="text-[10px] text-muted-foreground font-semibold uppercase">E-posta</span>
                <a href={`mailto:${selectedDemo.email}`} className="font-bold text-foreground block hover:text-primary mt-0.5 truncate">
                  {selectedDemo.email || "Belirtilmedi"}
                </a>
              </div>
              <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
                <span className="text-[10px] text-muted-foreground font-semibold uppercase">Şube / Sektör</span>
                <div className="font-bold text-foreground mt-0.5">
                  {selectedDemo.branchCount} Şube • {selectedDemo.businessType}
                </div>
              </div>
            </div>

            {/* Customer Message */}
            {selectedDemo.message && (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Müşteri Mesajı</span>
                <p className="text-xs text-foreground leading-relaxed">&quot;{selectedDemo.message}&quot;</p>
              </div>
            )}

            {/* Timeline Notes */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Görüşme Notları & Süreç Tarihçesi
              </h4>

              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                {selectedDemo.notes && selectedDemo.notes.length > 0 ? (
                  selectedDemo.notes.map((n) => (
                    <div key={n.id} className="p-3 rounded-xl bg-muted/30 border border-border/60 text-xs space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground font-semibold">
                        <span>{n.author}</span>
                        <span>{n.date}</span>
                      </div>
                      <p className="text-foreground leading-relaxed">{n.text}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-muted-foreground italic">Henüz bir not eklenmemiş.</p>
                )}
              </div>

              {/* Add Note Form */}
              <form onSubmit={handleAddNote} className="flex gap-2 pt-2">
                <input
                  type="text"
                  required
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  placeholder="Görüşme notu ekleyin (örn: Telefonla görüşüldü, demo salı 14:00)..."
                  className="flex-1 h-10 px-3.5 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <Button type="submit" size="sm" className="h-10 px-4 font-bold text-xs bg-primary">
                  <Send className="size-3.5 mr-1" />
                  <span>Notu Kaydet</span>
                </Button>
              </form>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Durumu Güncelle:</span>
                <select
                  value={selectedDemo.status}
                  onChange={(e) => {
                    handleStatusChange(selectedDemo.id, e.target.value as DemoStatus);
                  }}
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl border focus:outline-none cursor-pointer ${STATUS_CONFIG[selectedDemo.status].badge}`}
                >
                  <option value="yeni">Yeni</option>
                  <option value="gorusuldu">Görüşüldü</option>
                  <option value="demo_yapildi">Demo Yapıldı</option>
                  <option value="satisa_dondu">Satışa Döndü</option>
                  <option value="iptal">İptal</option>
                </select>
              </div>

              <Button variant="outline" size="sm" onClick={() => setSelectedDemo(null)}>
                Kapat
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Create New Demo Request Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-card w-full max-w-lg rounded-3xl border border-border shadow-2xl p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-3 border-b border-border">
              <div>
                <h3 className="text-xl font-bold text-foreground">Yeni Demo Talebi Ekle</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Telefon, fuar veya elden gelen demo başvurularını elle kaydedin.
                </p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:bg-muted"
              >
                <X className="size-5" />
              </button>
            </div>

            <form onSubmit={handleCreateNewDemo} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-foreground">İşletme / Restoran Adı *</label>
                <input
                  type="text"
                  required
                  value={newForm.businessName}
                  onChange={(e) => setNewForm({ ...newForm, businessName: e.target.value })}
                  placeholder="Örn: Lezzet Durağı Döner"
                  className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Yetkili Ad Soyad *</label>
                  <input
                    type="text"
                    required
                    value={newForm.fullName}
                    onChange={(e) => setNewForm({ ...newForm, fullName: e.target.value })}
                    placeholder="Örn: Ahmet Bey"
                    className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Telefon Numarası *</label>
                  <input
                    type="tel"
                    required
                    value={newForm.phone}
                    onChange={(e) => setNewForm({ ...newForm, phone: e.target.value })}
                    placeholder="05XX XXX XX XX"
                    className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground">E-posta</label>
                  <input
                    type="email"
                    value={newForm.email}
                    onChange={(e) => setNewForm({ ...newForm, email: e.target.value })}
                    placeholder="isletme@gmail.com"
                    className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Şehir</label>
                  <input
                    type="text"
                    value={newForm.city}
                    onChange={(e) => setNewForm({ ...newForm, city: e.target.value })}
                    placeholder="İstanbul (Beşiktaş)"
                    className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground">İşletme Tipi</label>
                  <select
                    value={newForm.businessType}
                    onChange={(e) => setNewForm({ ...newForm, businessType: e.target.value })}
                    className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <option value="Restoran">Restoran</option>
                    <option value="Kafe">Kafe & Bar</option>
                    <option value="Fast Food">Fast Food (QSR)</option>
                    <option value="Pastane / Fırın">Pastane / Fırın</option>
                    <option value="Otel & Resort">Otel & Resort</option>
                    <option value="Zincir İşletme">Zincir İşletme</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Şube Sayısı</label>
                  <input
                    type="number"
                    min="1"
                    value={newForm.branchCount}
                    onChange={(e) => setNewForm({ ...newForm, branchCount: e.target.value })}
                    className="w-full h-10 px-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground">Not / Başvuru Detayı</label>
                <textarea
                  rows={3}
                  value={newForm.message}
                  onChange={(e) => setNewForm({ ...newForm, message: e.target.value })}
                  placeholder="İşletmenin talepleri, mevcut kullandığı sistem veya özel gereksinimleri..."
                  className="w-full p-3 rounded-xl border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-border">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
                  Vazgeç
                </Button>
                <Button type="submit" size="sm" className="bg-primary font-bold">
                  Kaydet ve Listeye Ekle
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
