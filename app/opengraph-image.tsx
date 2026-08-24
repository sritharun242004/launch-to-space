import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Launch To Space high-altitude balloon missions from India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const markSrc = `data:image/png;base64,${readFileSync(join(process.cwd(), "public", "launch-mark.png")).toString("base64")}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #000 0%, #05080d 58%, #0b1420 100%)",
          color: "#fff",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          padding: "58px 70px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 56,
            top: 46,
            width: 360,
            height: 360,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(90,169,255,.18), rgba(90,169,255,0) 67%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 720 }}>
          <div style={{ color: "#5AA9FF", fontSize: 22, letterSpacing: 6, display: "flex" }}>
            TOSPACE / INDIA / 30-35 KM
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 70, lineHeight: 1.02, fontWeight: 700, display: "flex" }}>
              High-Altitude
            </div>
            <div style={{ fontSize: 70, lineHeight: 1.02, fontWeight: 700, color: "#5AA9FF", display: "flex" }}>
              Balloon Missions
            </div>
            <div style={{ color: "#C8D0D8", fontSize: 28, lineHeight: 1.35, display: "flex" }}>
              Research, technology demonstrations, education and product marketing at the edge of space.
            </div>
          </div>
          <div style={{ color: "#8C949E", fontSize: 22, letterSpacing: 3, display: "flex" }}>
            LAUNCHTOSPACE.VERCEL.APP
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <img
            src={markSrc}
            alt="Launch To Space"
            style={{
              width: 344,
              height: 344,
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
