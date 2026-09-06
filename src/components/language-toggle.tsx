"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Dili Değiştir / Switch Language"
      onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
      className="h-9 gap-1.5 px-2.5 font-medium text-xs tracking-wide"
    >
      <Globe className="size-4 opacity-75" />
      <span>{language === "tr" ? "🇹🇷 TR" : "🇬🇧 EN"}</span>
    </Button>
  );
}
