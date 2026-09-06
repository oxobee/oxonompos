"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckIcon, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const [done, setDone] = useState(false);
  const isLogin = mode === "login";

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckIcon className="size-6" />
        </span>
        <h2 className="mt-4 text-lg font-bold text-foreground">
          {isLogin ? "Oturum Açıldı" : "Hesap Oluşturuldu"}
        </h2>
        <p className="mt-2 max-w-xs text-xs text-muted-foreground leading-relaxed">
          Demo modundasınız — kimlik doğrulama altyapısı başarıyla test edildi.
        </p>
        <Button variant="ghost" className="mt-6" onClick={() => setDone(false)}>
          Forma Geri Dön
        </Button>
      </div>
    );
  }

  return (
    <div className="text-left">
      <Link href="/" className="flex items-center gap-2 font-bold text-base text-foreground">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Sparkles className="size-4" />
        </div>
        <span>OXONOM <span className="text-primary">POS</span></span>
      </Link>

      <h1 className="mt-8 text-2xl font-bold tracking-tight text-foreground">
        {isLogin ? "Oxonom POS Hesabınıza Giriş Yapın" : "İşletmeniz İçin Hesap Oluşturun"}
      </h1>
      <p className="mt-2 text-xs text-muted-foreground">
        {isLogin
          ? "Restoran yönetim panelinize erişmek için bilgilerinizi girin."
          : "Saniyeler içinde kayıt olun, 14 gün ücretsiz deneyin."}
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
        className="mt-6 space-y-4"
      >
        {!isLogin && (
          <>
            <div className="space-y-1.5">
              <Label htmlFor="fullname" className="text-xs">Adınız Soyadınız</Label>
              <Input id="fullname" required placeholder="Ahmet Yılmaz" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="restaurant" className="text-xs">İşletme / Restoran Adı</Label>
              <Input id="restaurant" required placeholder="Mola Bistro" />
            </div>
          </>
        )}

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs">E-posta Adresi</Label>
          <Input id="email" type="email" required placeholder="ornek@isletme.com" />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" text-xs>Şifre</Label>
            {isLogin && (
              <span className="text-[11px] text-primary hover:underline cursor-pointer">
                Şifremi Unuttum
              </span>
            )}
          </div>
          <Input id="password" type="password" required placeholder="••••••••" />
        </div>

        <Button type="submit" className="w-full h-11 text-xs font-bold mt-2">
          {isLogin ? "Giriş Yap" : "Ücretsiz Hesap Oluştur"}
        </Button>
      </form>

      <div className="mt-6 text-center text-xs text-muted-foreground">
        {isLogin ? (
          <span>
            Henüz hesabınız yok mu?{" "}
            <Link href="/signup" className="font-semibold text-primary hover:underline">
              Kayıt Olun
            </Link>
          </span>
        ) : (
          <span>
            Zaten hesabınız var mı?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Giriş Yapın
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}
