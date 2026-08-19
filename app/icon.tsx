import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          color: "#5AA9FF",
          fontSize: 34,
          fontWeight: 700,
          border: "2px solid #5AA9FF",
          borderRadius: 12,
        }}
      >
        T
      </div>
    ),
    { ...size },
  );
}
