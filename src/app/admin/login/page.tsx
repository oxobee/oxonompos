"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, User, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import { loginAdmin } from "@/lib/admin-auth";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      const res = loginAdmin(username, password);
      if (res.success) {
        router.push("/admin");
      } else {
        setError(res.error || "Giriş başarısız.");
        setLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 relative overflow-hidden text-slate-100">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Card */}
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/85 backdrop-blur-xl p-8 sm:p-10 shadow-2xl space-y-6">
          {/* Brand & Logo */}
          <div className="text-center space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="size-11 rounded-2xl bg-gradient-to-tr from-primary to-orange-400 p-2 shadow-lg shadow-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/images/oxonom-symbol.png"
                  alt="Oxonom POS"
                  width={28}
                  height={28}
                  className="object-contain invert brightness-0"
                />
              </div>
              <div className="text-left">
                <div className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                  OXONOM <span className="text-primary font-bold">POS</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Merkezi Yönetim
                </div>
              </div>
            </Link>

            <div className="pt-2">
              <h1 className="text-2xl font-bold tracking-tight text-white">Yönetici Giriş Paneli</h1>
              <p className="text-xs text-slate-400 mt-1">
                Lütfen yetkili kullanıcı adı ve şifrenizi giriniz
              </p>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5 animate-in fade-in">
              <AlertCircle className="size-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                <span>Kullanıcı Adı</span>
              </label>
              <div className="relative">
                <User className="size-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Kullanıcı adı"
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-700 bg-slate-950/60 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                <span>Şifre</span>
                <span className="text-[11px] text-slate-400 font-normal">Güvenli SSL 256-bit</span>
              </label>
              <div className="relative">
                <Lock className="size-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifrenizi giriniz"
                  className="w-full h-11 pl-10 pr-11 rounded-xl border border-slate-700 bg-slate-950/60 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 font-bold text-sm bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-xl transition-all"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Doğrulanıyor...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span>Yönetim Paneline Giriş Yap</span>
                  <ArrowRight className="size-4" />
                </div>
              )}
            </Button>
          </form>

          <div className="text-center pt-2 border-t border-slate-800/80">
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1.5"
            >
              ← Ana Sayfaya Geri Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
