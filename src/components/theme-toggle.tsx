"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === "dark" || theme === "dark") : false;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Gündüz moduna geç" : "Gece moduna geç"}
      title={isDark ? "Gündüz Moduna Geç" : "Gece Moduna Geç"}
      className="size-9 rounded-lg hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
      onClick={toggleTheme}
    >
      <Sun className="size-[18px] hidden dark:block text-amber-500 transition-transform duration-200 hover:rotate-45" />
      <Moon className="size-[18px] dark:hidden text-slate-700 transition-transform duration-200 hover:-rotate-12" />
      <span className="sr-only">Temayı Değiştir</span>
    </Button>
  );
}

