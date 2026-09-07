"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Mail, Trash2, CheckCircle2, Search, Calendar, User } from "lucide-react";
import { getContactMessages, markMessageAsRead, deleteContactMessage, ContactMessage } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [search, setSearch] = useState("");

  const load = () => {
    setMessages(getContactMessages());
  };

  useEffect(() => {
    load();
    window.addEventListener("oxonom_messages_updated", load);
    return () => window.removeEventListener("oxonom_messages_updated", load);
  }, []);

  const filtered = messages.filter(
    (m) =>
      m.fullName.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Gelen İletişim Mesajları
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            İletişim sayfasından veya destek formundan iletilen sorular ve ortaklık başvuruları.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 self-start">
          {messages.length} Toplam Mesaj
        </span>
      </div>

      <div className="relative">
        <Search className="size-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Mesajlarda veya gönderenlerde ara..."
          className="w-full h-10 pl-10 pr-4 rounded-xl border border-border bg-card text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-border bg-card text-muted-foreground text-xs">
            Aramanıza uygun mesaj bulunamadı.
          </div>
        ) : (
          filtered.map((m) => (
            <div
              key={m.id}
              className={`p-5 rounded-2xl border transition-all ${
                m.isRead
                  ? "border-border bg-card/60"
                  : "border-blue-500/40 bg-blue-500/5 shadow-sm border-l-4 border-l-blue-500"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground text-sm">{m.fullName}</span>
                    <a
                      href={`mailto:${m.email}`}
                      className="text-xs text-primary hover:underline flex items-center gap-1 font-mono"
                    >
                      <Mail className="size-3" />
                      <span>{m.email}</span>
                    </a>
                    {!m.isRead && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500 text-white">
                        Yeni
                      </span>
                    )}
                  </div>

                  <h4 className="font-semibold text-xs text-foreground/90">{m.subject}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed bg-card/70 p-3 rounded-xl border border-border/40">
                    {m.message}
                  </p>
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1 pt-1">
                    <Calendar className="size-3" />
                    <span>{m.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {!m.isRead && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => markMessageAsRead(m.id)}
                      className="text-xs h-8"
                    >
                      <CheckCircle2 className="size-3.5 mr-1 text-emerald-500" />
                      <span>Okundu İşaretle</span>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="text-xs h-8"
                  >
                    <a href={`mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject)}`}>
                      <Mail className="size-3.5 mr-1 text-primary" />
                      <span>Yanıtla</span>
                    </a>
                  </Button>
                  <button
                    onClick={() => {
                      if (confirm("Bu mesajı silmek istediğinize emin misiniz?")) {
                        deleteContactMessage(m.id);
                      }
                    }}
                    className="p-2 rounded-lg text-muted-foreground hover:text-rose-600 hover:bg-rose-500/10 transition-colors"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
