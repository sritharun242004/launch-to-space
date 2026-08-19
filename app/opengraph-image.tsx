import { ImageResponse } from "next/og";

export const alt = "Launch To Space — high-altitude balloon missions above Earth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          color: "#fff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ color: "#5AA9FF", fontSize: 24, letterSpacing: 6, display: "flex" }}>
          TOSPACE / LAUNCH PLATFORM
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -2, display: "flex" }}>
            Take Your Ideas
          </div>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -2, color: "#5AA9FF", display: "flex" }}>
            Beyond Earth.
          </div>
          <div style={{ color: "#AAB2BC", fontSize: 28, display: "flex" }}>
            High-altitude balloon missions to the stratosphere.
          </div>
        </div>
        <div style={{ color: "#68717C", fontSize: 22, letterSpacing: 3, display: "flex" }}>
          30–35 KM / RESEARCH / TECHNOLOGY / BRANDS
        </div>
      </div>
    ),
    { ...size },
  );
}
