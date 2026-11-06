import { ImageResponse } from "next/og";
import { site, hero } from "@/content";

export const alt = `${site.primaryPosition} · Executive proposal for GFT Technologies`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #070b16 0%, #0d1424 60%, #1a1033 100%)",
          color: "#eef2ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 20, letterSpacing: 6, textTransform: "uppercase", color: "#9aa5bf" }}>
          {hero.eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
            Turning Artificial Intelligence Into New Business Opportunities.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9b7bff" }}>{site.primaryPosition}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>{site.candidate.name}</div>
            <div style={{ display: "flex", fontSize: 20, color: "#9aa5bf" }}>{site.candidate.headline}</div>
          </div>
          <div style={{ display: "flex", height: 8, width: 240, borderRadius: 999, background: "linear-gradient(90deg, #4f8cff, #9b7bff, #ff5fa8)" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
