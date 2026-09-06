"use client";

import React, { useState } from "react";
import { zReportSectionsData } from "@/lib/product-data";
import { FileText, ShieldAlert, CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ZReportShowcase() {
  const [activeTab, setActiveTab] = useState(zReportSectionsData[0].id);

  const currentSection = zReportSectionsData.find((s) => s.id === activeTab) || zReportSectionsData[0];

  return (
    <div className="rounded-2xl border border-border/60 bg-card/80 p-6 md:p-8 backdrop-blur text-left shadow-xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <FileText className="size-5 text-primary" />
            <h3 className="font-bold text-lg text-foreground">7 Bölümlü Akıllı Z Raporu</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Z Raporu No: <span className="font-mono text-foreground font-semibold">Z-2026-0814</span> • Kapanış Saati: 01:14
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs gap-1.5 h-8">
            <Download className="size-3.5" />
            <span>PDF Dışa Aktar</span>
          </Button>
          <div className="flex items-center gap-1 text-xs text-emerald-500 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="size-3.5" />
            <span>Kasa Denk</span>
          </div>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="mt-5 flex gap-1.5 overflow-x-auto pb-2 border-b border-border/40 no-scrollbar">
        {zReportSectionsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-6 space-y-4">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
          {currentSection.desc}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {currentSection.metrics.map((metric, i) => (
            <div key={i} className="p-4 rounded-xl border border-border/60 bg-background/80 flex flex-col justify-between">
              <span className="text-xs font-medium text-muted-foreground">{metric.label}</span>
              <span className="text-base sm:text-lg font-bold text-foreground mt-2 tracking-tight">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
