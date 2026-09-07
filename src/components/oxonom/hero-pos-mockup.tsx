"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Lock, CheckCircle2, Wifi, Sparkles, Layers } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { BorderBeam } from "@/components/velora/border-beam";

export function HeroPosMockup({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Track scroll position of this container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apple-style 3D Scroll Physics:
  // Starts tilted backward (rotateX: 22deg), translated down (translateY: 80px), and scaled (scale: 0.90).
  // As the user scrolls down, it smoothly elevates and rotates flat (rotateX: 0deg, translateY: 0px, scale: 1.0).
  const rawRotateX = useTransform(scrollYProgress, [0, 0.42], [22, 0]);
  const rawTranslateY = useTransform(scrollYProgress, [0, 0.42], [80, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.42], [0.9, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25], [0.65, 1]);

  // Spring smoothing for that organic, momentum-based Apple feel
  const rotateX = useSpring(rawRotateX, { stiffness: 170, damping: 26, mass: 0.5 });
  const translateY = useSpring(rawTranslateY, { stiffness: 170, damping: 26, mass: 0.5 });
  const scale = useSpring(rawScale, { stiffness: 170, damping: 26, mass: 0.5 });
  const opacity = useSpring(rawOpacity, { stiffness: 170, damping: 26, mass: 0.5 });

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto max-w-6xl px-2 sm:px-4 py-8 [perspective:1400px] ${className}`}
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        aria-hidden
        className="absolute -inset-4 sm:-inset-10 rounded-[3rem] bg-gradient-to-tr from-primary/30 via-emerald-500/20 to-blue-600/30 opacity-40 blur-3xl pointer-events-none -z-10"
      />

      {/* 3D Motion Container */}
      <motion.div
        style={
          reducedMotion
            ? undefined
            : {
                rotateX,
                translateY,
                scale,
                opacity,
                transformStyle: "preserve-3d",
              }
        }
        className="w-full will-change-transform"
      >
        {/* Apple-Style Glass & Titanium Browser Mockup */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-border/80 bg-card/95 backdrop-blur-2xl shadow-[0_25px_80px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Neon BorderBeam animation */}
          <BorderBeam size={200} duration={10} colorFrom="#3b82f6" colorTo="#10b981" />

          {/* Browser Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border/60 bg-muted/40 backdrop-blur-md">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#ff5f56] shadow-sm ring-1 ring-black/10 hover:opacity-80 transition-opacity" />
              <span className="size-3 rounded-full bg-[#ffbd2e] shadow-sm ring-1 ring-black/10 hover:opacity-80 transition-opacity" />
              <span className="size-3 rounded-full bg-[#27c93f] shadow-sm ring-1 ring-black/10 hover:opacity-80 transition-opacity" />
            </div>

            {/* Apple Safari Center Address Capsule */}
            <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-background/80 shadow-xs text-xs max-w-sm sm:max-w-md w-full mx-3">
              <Lock className="size-3 text-emerald-500 shrink-0" />
              <span className="font-semibold text-foreground tracking-tight text-[11px] sm:text-xs">
                app.oxonompos.com
              </span>
              <span className="text-border hidden sm:inline">•</span>
              <span className="text-[10px] text-muted-foreground hidden sm:inline truncate">
                Merkezi Yönetim Konsolu
              </span>
            </div>

            {/* Live Operational Status Pills */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Canlı Bağlantı</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                <Wifi className="size-3 text-primary" />
                <span>Avcılar Şube</span>
              </span>
            </div>
          </div>

          {/* Screenshot Display Area with 1024x563 native aspect ratio */}
          <div className="relative w-full bg-slate-950/5 dark:bg-slate-950/40 p-1.5 sm:p-3">
            <div className="relative w-full aspect-[1024/563] overflow-hidden rounded-xl sm:rounded-2xl border border-border/40 shadow-inner bg-card">
              <Image
                src="/images/oxonom-dashboard-real.png"
                alt="Oxonom POS - Yeni Nesil Restoran ve Operasyon Yönetim Paneli"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 95vw, 1200px"
                className="object-cover object-top select-none pointer-events-none"
              />

              {/* Ultra-subtle Glass Sheen / Light Reflection across top */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* 3D Base Reflection Shadow */}
        <div
          aria-hidden
          className="mx-auto mt-2 h-6 w-5/6 rounded-full bg-black/20 dark:bg-black/60 blur-xl pointer-events-none"
        />
      </motion.div>
    </div>
  );
}
