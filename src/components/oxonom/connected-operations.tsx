"use client";

import { useRef, type Ref } from "react";
import {
  CreditCard,
  QrCode,
  CookingPot,
  Boxes,
  Users,
  Receipt,
  Sparkles,
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
      {label && <span className="text-xs font-semibold text-muted-foreground">{label}</span>}
    </div>
  );
}

export function ConnectedOperations({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<HTMLDivElement>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const kdsRef = useRef<HTMLDivElement>(null);
  const stockRef = useRef<HTMLDivElement>(null);
  const paymentRef = useRef<HTMLDivElement>(null);
  const crmRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[420px] w-full items-center justify-between px-4 sm:px-12 py-8 rounded-2xl border border-border/40 bg-card/20 backdrop-blur overflow-hidden",
        className
      )}
    >
      {/* Left Column (Input Operations) */}
      <div className="flex flex-col justify-between h-full py-4 gap-6">
        <Node ref={posRef} label="POS Satış" className="text-primary hover:border-primary/50">
          <CreditCard className="size-6" />
        </Node>
        <Node ref={qrRef} label="QR Sipariş" className="text-emerald-500 hover:border-emerald-500/50">
          <QrCode className="size-6" />
        </Node>
        <Node ref={kdsRef} label="Mutfak KDS" className="text-amber-500 hover:border-amber-500/50">
          <CookingPot className="size-6" />
        </Node>
      </div>

      {/* Center Hub: OXONOM POS */}
      <div className="flex flex-col items-center gap-2 z-20">
        <div
          ref={centerRef}
          className="flex size-24 items-center justify-center rounded-3xl border-2 border-primary bg-background shadow-2xl shadow-primary/30 p-2 text-center"
        >
          <div className="flex flex-col items-center justify-center size-full rounded-2xl bg-primary/10">
            <Sparkles className="size-8 text-primary animate-pulse" />
            <span className="text-[11px] font-black tracking-tight text-primary mt-0.5">OXONOM</span>
            <span className="text-[8px] font-bold text-muted-foreground uppercase">Merkez</span>
          </div>
        </div>
        <span className="text-xs font-bold text-foreground bg-card/80 px-3 py-1 rounded-full border border-border/60">
          Gerçek Zamanlı Bulut
        </span>
      </div>

      {/* Right Column (Automation & Financials) */}
      <div className="flex flex-col justify-between h-full py-4 gap-6">
        <Node ref={stockRef} label="Reçete & Stok" className="text-blue-500 hover:border-blue-500/50">
          <Boxes className="size-6" />
        </Node>
        <Node ref={paymentRef} label="Karma Ödeme" className="text-violet-500 hover:border-violet-500/50">
          <Receipt className="size-6" />
        </Node>
        <Node ref={crmRef} label="Müşteri & Z" className="text-rose-500 hover:border-rose-500/50">
          <Users className="size-6" />
        </Node>
      </div>

      {/* Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={posRef}
        toRef={centerRef}
        curvature={-25}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={qrRef}
        toRef={centerRef}
        curvature={0}
        duration={3.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={kdsRef}
        toRef={centerRef}
        curvature={25}
        duration={3.2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={stockRef}
        curvature={-25}
        duration={3.1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={paymentRef}
        curvature={0}
        duration={3.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={crmRef}
        curvature={25}
        duration={3.3}
      />
    </div>
  );
}
