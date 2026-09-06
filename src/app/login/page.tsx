import type { Metadata } from "next";

import { AuthForm } from "@/components/template/auth-form";
import { AuthVisual } from "@/components/template/auth-visual";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Giriş Yap | ${siteConfig.name}`,
  description: "Oxonom POS yönetim panelinize giriş yapın.",
};

export default function LoginPage() {
  return (
    <main className="grid min-h-svh lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <AuthForm mode="login" />
        </div>
      </div>
      <AuthVisual />
    </main>
  );
}
