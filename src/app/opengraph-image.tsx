import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(1200px 630px at 100% 0%, #1e3a8a 0%, #09090b 55%)",
          color: "white",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #3b82f6, #38bdf8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 800,
            }}
          >
            O
          </div>
          <span style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            OXONOM <span style={{ color: "#60a5fa" }}>POS</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "960px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Restoranınızın tüm operasyonu&nbsp;
            <span style={{ color: "#60a5fa" }}>tek platformda.</span>
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#a1a1aa",
              maxWidth: "860px",
              lineHeight: 1.35,
            }}
          >
            Bulut tabanlı yeni nesil POS, Masa & Sipariş, Mutfak KDS, QR Menü, Stok Reçete ve Yapay Zeka operasyon sistemi.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            color: "#d4d4d8",
          }}
        >
          <span>Bulut POS</span>
          <span style={{ color: "#3f3f46" }}>•</span>
          <span>Mutfak KDS</span>
          <span style={{ color: "#3f3f46" }}>•</span>
          <span>QR Self-Order</span>
          <span style={{ color: "#3f3f46" }}>•</span>
          <span>Stok & Reçete</span>
          <span style={{ color: "#3f3f46" }}>•</span>
          <span>7 Bölümlü Z Raporu</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
