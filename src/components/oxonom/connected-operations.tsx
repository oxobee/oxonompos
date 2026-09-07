"use client";

import { useRef, type Ref } from "react";
import Image from "next/image";
import {
  ShoppingBag,
  UtensilsCrossed,
  Unplug,
  PackageCheck,
  CreditCard,
  BarChart3,
} from "lucide-react";

import { AnimatedBeam } from "@/components/velora/animated-beam";
import { cn } from "@/lib/utils";

function Node({
  ref,
  className,
  children,
  label,
}: {
  ref?: Ref<HTMLDivElement>;
  className?: string;
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 z-10">
      <div
        ref={ref}
        className={cn(
          "flex size-14 items-center justify-center rounded-2xl border border-border/80 bg-card/90 shadow-lg text-foreground hover:scale-105 transition-transform cursor-pointer",
          className
        )}
      >
        {children}
      </div>
      {label && <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">{label}</span>}
    </div>
  );
}

export function ConnectedOperations({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const left1Ref = useRef<HTMLDivElement>(null);
  const left2Ref = useRef<HTMLDivElement>(null);
  const left3Ref = useRef<HTMLDivElement>(null);
  const right1Ref = useRef<HTMLDivElement>(null);
  const right2Ref = useRef<HTMLDivElement>(null);
  const right3Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[420px] w-full items-center justify-between px-4 sm:px-12 py-8 rounded-2xl border border-border/40 bg-card/20 backdrop-blur overflow-hidden",
        className
      )}
    >
      {/* Left Column (Mevcut Problemler & Dağınık Süreçler) */}
      <div className="flex flex-col justify-between h-full py-4 gap-6">
        <Node ref={left1Ref} label="Dağınık Satış" className="text-amber-500 hover:border-amber-500/50 bg-amber-500/5">
          <ShoppingBag className="size-6 text-amber-500" />
        </Node>
        <Node ref={left2Ref} label="Sipariş Karmaşası" className="text-rose-500 hover:border-rose-500/50 bg-rose-500/5">
          <UtensilsCrossed className="size-6 text-rose-500" />
        </Node>
        <Node ref={left3Ref} label="Operasyon Kopukluğu" className="text-orange-500 hover:border-orange-500/50 bg-orange-500/5">
          <Unplug className="size-6 text-orange-500" />
        </Node>
      </div>

      {/* Center Hub: -> OXONOM POS <- */}
      <div className="flex flex-col items-center gap-2.5 z-20">
        <div
          ref={centerRef}
          className="flex size-24 items-center justify-center rounded-3xl border-2 border-primary/80 bg-background shadow-2xl shadow-primary/25 p-2.5 text-center group hover:scale-105 transition-transform"
        >
          <div className="relative size-full rounded-2xl flex items-center justify-center overflow-hidden">
            {/* Light Mode Symbol */}
            <div className="relative size-full dark:hidden">
              <Image
                src="/images/oxonom-symbol.png"
                alt="OXONOM POS Sembolü"
                fill
                className="object-contain p-1"
              />
            </div>
            {/* Dark Mode Symbol */}
            <div className="relative size-full hidden dark:block">
              <Image
                src="/images/oxonom-symbol-dark.png"
                alt="OXONOM POS Sembolü (Karanlık Mod)"
                fill
                className="object-contain p-1"
              />
            </div>
          </div>
        </div>
        <span className="text-xs font-black tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/30 uppercase shadow-xs">
          OXONOM POS
        </span>
      </div>

      {/* Right Column (Oxonom POS Çözümleri & Kazanımlar) */}
      <div className="flex flex-col justify-between h-full py-4 gap-6">
        <Node ref={right1Ref} label="Akıllı Stok" className="text-emerald-500 hover:border-emerald-500/50 bg-emerald-500/5">
          <PackageCheck className="size-6 text-emerald-500" />
        </Node>
        <Node ref={right2Ref} label="Kolay Ödeme" className="text-blue-500 hover:border-blue-500/50 bg-blue-500/5">
          <CreditCard className="size-6 text-blue-500" />
        </Node>
        <Node ref={right3Ref} label="Veriye Dayalı Yönetim" className="text-violet-500 hover:border-violet-500/50 bg-violet-500/5">
          <BarChart3 className="size-6 text-violet-500" />
        </Node>
      </div>

      {/* Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={left1Ref}
        toRef={centerRef}
        curvature={-25}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={left2Ref}
        toRef={centerRef}
        curvature={0}
        duration={3.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={left3Ref}
        toRef={centerRef}
        curvature={25}
        duration={3.2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={right1Ref}
        curvature={-25}
        duration={3.1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={right2Ref}
        curvature={0}
        duration={3.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={right3Ref}
        curvature={25}
        duration={3.3}
      />
    </div>
  );
}
